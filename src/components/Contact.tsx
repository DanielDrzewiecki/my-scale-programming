import React, { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { content } from '@/content/content';
import { Skeleton } from "./ui/skeleton";
import { CheckCircle2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { getUTMParameters, formatUTMParameters, type UTMParameters } from '@/lib/utmTracking';
import { errorReportingManager } from '@/lib/errorReporting';
import { useNavigate } from 'react-router-dom';

type SubmitStatus = 'idle' | 'success' | 'error';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
}

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [utmParams, setUtmParams] = useState<UTMParameters>({});

  // UTM-Parameter beim Laden der Komponente erfassen
  useEffect(() => {
    // Direkte UTM-Parameter-Extraktion aus der URL
    const urlParams = new URLSearchParams(window.location.search);
    const directParams: UTMParameters = {};
    
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        directParams[key as keyof UTMParameters] = value;
      }
    });
    
    console.log('🔍 Direkte UTM-Parameter-Extraktion:', directParams);
    console.log('🔍 Aktuelle URL:', window.location.href);
    console.log('🔍 URL Search:', window.location.search);
    
    // Fallback auf getUTMParameters
    const fallbackParams = getUTMParameters();
    console.log('📂 Fallback UTM-Parameter:', fallbackParams);
    
    // Verwende direkte Parameter oder Fallback
    const finalParams = Object.keys(directParams).length > 0 ? directParams : fallbackParams;
    setUtmParams(finalParams);
    
    console.log('✅ Finale UTM-Parameter:', finalParams);
    console.log('✅ Formatierte UTM-Parameter:', formatUTMParameters(finalParams));
    
    if (Object.keys(finalParams).length > 0) {
      // Tracking für UTM-Parameter
      track('UTM Parameters Captured', {
        ...finalParams,
        formatted: formatUTMParameters(finalParams)
      });
    }

  }, []);

  const validateForm = useCallback((formData: ContactFormData): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Name ist erforderlich.";
    }

    if (!formData.email.trim()) {
      errors.email = "E-Mail ist erforderlich.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Telefonnummer ist erforderlich.";
    } else {
      // Entferne alle Nicht-Ziffern für die Validierung
      const cleanedPhone = formData.phone.replace(/\D/g, '');
      if (cleanedPhone.length < 10) {
        errors.phone = "Telefonnummer muss mindestens 10 Ziffern haben.";
      }
    }

    if (!formData.interest || formData.interest === "" || formData.interest === "Bitte wählen") {
      errors.interest = "Bitte wählen Sie ein Interesse aus.";
    }

    return errors;
  }, []);

  // n8n Webhook-Funktion
  const sendToN8nWebhook = async (formData: ContactFormData, utmParams: UTMParameters) => {
    const n8nWebhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
    
    if (!n8nWebhookUrl) {
      console.warn('⚠️ n8n Webhook URL nicht konfiguriert');
      return { success: false, error: 'n8n Webhook URL nicht konfiguriert' };
    }

    try {
      const webhookData = {
        // Formular-Daten
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interest: formData.interest,
        
        // UTM-Parameter
        utm_source: utmParams.utm_source || null,
        utm_medium: utmParams.utm_medium || null,
        utm_campaign: utmParams.utm_campaign || null,
        utm_content: utmParams.utm_content || null,
        utm_term: utmParams.utm_term || null,
        
        // Metadaten
        timestamp: new Date().toISOString(),
        url: window.location.href,
        user_agent: navigator.userAgent,
        landing_page_topic: content.contact.form.landingPageTopic,
        
        // Formatierte UTM-Parameter für einfache Verarbeitung
        utm_formatted: formatUTMParameters(utmParams)
      };

      console.log('📤 Sende Daten an n8n Webhook:', webhookData);

      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('✅ n8n Webhook erfolgreich:', result);
        return { success: true, data: result };
      } else {
        const errorText = await response.text();
        console.error('❌ n8n Webhook Fehler:', response.status, errorText);
        return { success: false, error: `HTTP ${response.status}: ${errorText}` };
      }
    } catch (error) {
      console.error('❌ n8n Webhook Netzwerk-Fehler:', error);
      return { success: false, error: `Netzwerk-Fehler: ${error}` };
    }
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    const formData: ContactFormData = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value || '',
      interest: (form.elements.namedItem('interest') as HTMLSelectElement)?.value || ''
    };

    // Validierung
    const errors = validateForm(formData);
    
    console.log('Form validation errors:', errors);
    console.log('Form data:', formData);
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      console.log('Form validation failed, returning early');
      return;
    }

    // Reset errors if validation passes
    setFormErrors({});

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Debug: UTM-Parameter anzeigen
    console.log('🔍 UTM-Parameter beim Submit:', utmParams);
    console.log('🔍 Formatierte UTM-Parameter:', formatUTMParameters(utmParams));
    console.log('🔍 Aktuelle URL beim Submit:', window.location.href);
    console.log('🔍 URL Search beim Submit:', window.location.search);
    
    // Direkte UTM-Parameter-Extraktion beim Submit
    const urlParams = new URLSearchParams(window.location.search);
    const directParams: UTMParameters = {};
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        directParams[key as keyof UTMParameters] = value;
      }
    });
    console.log('🔍 Direkte UTM-Parameter beim Submit:', directParams);

    // Tracking für Formular-Submission mit UTM-Parametern
    track('Contact Form Submission', {
      name: formData.name,
      // Keine sensiblen Daten wie E-Mail oder Telefon tracken
      formValidationStatus: Object.keys(errors).length === 0 ? 'Valid' : 'Invalid',
      ...utmParams
    });

    try {
      // Prüfe ob n8n Webhook URL konfiguriert ist
      const n8nWebhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      console.log('🔗 n8n Webhook URL Status:', n8nWebhookUrl ? 'Vorhanden' : 'Fehlt');
      console.log('🔗 n8n Webhook URL Wert:', n8nWebhookUrl ? n8nWebhookUrl : 'undefined');
      console.log('🔑 Access Key Status:', accessKey ? 'Vorhanden' : 'Fehlt');
      console.log('🔑 Access Key Wert:', accessKey ? `${accessKey.substring(0, 8)}...` : 'undefined');
      console.log('🌍 Environment:', import.meta.env.MODE);
      console.log('🌍 All Env Vars:', import.meta.env);
      
      // Versuche zuerst n8n Webhook
      if (n8nWebhookUrl) {
        console.log('📤 Sende Daten an n8n Webhook...');
        const n8nResult = await sendToN8nWebhook(formData, directParams);
        
        if (n8nResult.success) {
          console.log('✅ n8n Webhook erfolgreich verarbeitet');
          setSubmitStatus('success');
          form.reset();
          
          // Google Ads Conversion Tracking
          if (window.gtag_report_conversion) {
            window.gtag_report_conversion();
          }

          // Facebook Lead Tracking direkt beim Formular-Submit
          if (window.fbq) {
            window.fbq('track', 'Lead', {
              content_name: 'Contact Form Submission',
              content_category: 'Lead Generation',
              value: 1.00,
              currency: 'EUR'
            });
          }

          // HubSpot Lead Tracking
          if ((window as any).trackingManager) {
            (window as any).trackingManager.triggerHubSpotLead();
          }

          // Navigiere zur Dankeseite nach kurzer Verzögerung
          setTimeout(() => {
            navigate('/thank-you');
          }, 1500);
          
          return;
        } else {
          console.warn('⚠️ n8n Webhook fehlgeschlagen:', n8nResult.error);
          // Fehler an Error Reporting Manager melden
          await errorReportingManager.reportError(
            'n8n_webhook_error' as const,
            `n8n Webhook Fehler: ${n8nResult.error}`,
            { formData, utmParams: directParams }
          );
        }
      }

      // Fallback: Web3Forms oder Demo-Modus
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        console.warn('⚠️ Weder n8n Webhook noch Web3Forms konfiguriert. Verwende Demo-Modus.');
        
        // Fallback: Simuliere erfolgreichen Submit für Demo-Zwecke
        setSubmitStatus('success');
        form.reset();
        
        // Google Ads Conversion Tracking
        if (window.gtag_report_conversion) {
          window.gtag_report_conversion();
        }

        // Facebook Lead Tracking direkt beim Formular-Submit
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Contact Form Submission',
            content_category: 'Lead Generation',
            value: 1.00,
            currency: 'EUR'
          });
        }

        // HubSpot Lead Tracking
        if ((window as any).trackingManager) {
          (window as any).trackingManager.triggerHubSpotLead();
        }

        // Navigiere zur Dankeseite nach kurzer Verzögerung
        setTimeout(() => {
          navigate('/thank-you');
        }, 1500);
        
        return;
      }

      // Normale Web3Forms-Implementierung
      console.log('📤 Sende Web3Forms API-Anfrage...');
      
      // Verwende FormData statt JSON für bessere CORS-Kompatibilität
      const web3FormData = new FormData();
      web3FormData.append('access_key', accessKey);
      web3FormData.append('name', formData.name);
      web3FormData.append('email', formData.email);
      web3FormData.append('phone', formData.phone);
      web3FormData.append('from_name', formData.name);
      web3FormData.append('subject', `Neue ${content.contact.form.landingPageTopic}-Anfrage von ${formData.name}`);
      web3FormData.append('message', (() => {
        // Verwende direkte UTM-Parameter für E-Mail
        const finalUtmParams = Object.keys(directParams).length > 0 ? directParams : utmParams;
        
        const message = `
Kontaktanfrage von: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}
Interesse: ${formData.interest}

--- UTM-Parameter ---
Source: ${finalUtmParams.utm_source || 'direkt'}
Medium: ${finalUtmParams.utm_medium || 'keine'}
Campaign: ${finalUtmParams.utm_campaign || 'keine'}
Content: ${finalUtmParams.utm_content || 'keine'}
Term: ${finalUtmParams.utm_term || 'keine'}

Formatiert: ${formatUTMParameters(finalUtmParams)}
        `.trim();
        
        console.log('📧 E-Mail-Nachricht:', message);
        return message;
      })());

      console.log('📤 Sende Web3Forms API-Anfrage mit FormData...');
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        mode: "cors",
        body: web3FormData
      });

      console.log('📥 Response Status:', response.status);
      console.log('📥 Response OK:', response.ok);
      console.log('📥 Response Headers:', Object.fromEntries(response.headers.entries()));
      
      if (response.ok) {
        const result = await response.json();
        console.log('📥 Response Body:', result);

        if (result.success) {
          console.log('✅ E-Mail erfolgreich versendet!');
          console.log('📧 Web3Forms Response:', result);
          console.log('📧 E-Mail-Details:', result.data);
          
          setSubmitStatus('success');
          form.reset();

          // Google Ads Conversion Tracking
          if (window.gtag_report_conversion) {
            window.gtag_report_conversion();
          }

          // Facebook Lead Tracking direkt beim Formular-Submit
          if (window.fbq) {
            window.fbq('track', 'Lead', {
              content_name: 'Contact Form Submission',
              content_category: 'Lead Generation',
              value: 1.00,
              currency: 'EUR'
            });
            console.log('Facebook Lead Event triggered on form submit');
          }

          // HubSpot Lead Tracking
          if ((window as any).trackingManager) {
            (window as any).trackingManager.triggerHubSpotLead();
          }

          // Warnung für E-Mail-Problem
          console.warn('⚠️ WICHTIG: Falls Sie keine E-Mail erhalten:');
          console.warn('1. Prüfen Sie Ihren Spam-Ordner');
          console.warn('2. Web3Forms Access Key muss korrekt konfiguriert sein');
          console.warn('3. E-Mail-Adresse in Web3Forms-Einstellungen prüfen');
          console.warn('4. Web3Forms Dashboard: https://web3forms.com/dashboard');
          
          // Zusätzliche Debug-Informationen
          console.log('🔧 Debug-Informationen:');
          console.log('🔧 Access Key:', accessKey ? `${accessKey.substring(0, 8)}...` : 'NICHT GEFUNDEN');
          console.log('🔧 Web3Forms API Response:', result);
          console.log('🔧 E-Mail-Inhalt:', result.data?.message);
          
          // Navigiere zur Dankeseite nach kurzer Verzögerung
          setTimeout(() => {
            navigate('/thank-you');
          }, 1500);
        } else {
          console.error('Web3Forms Error:', result);
          
          // KRITISCHER FEHLER: Sofortige E-Mail-Benachrichtigung
          await errorReportingManager.reportCriticalError(
            'email_send_error',
            `E-Mail-Versand fehlgeschlagen: ${result.message || 'Unknown error'}`,
            {
              web3forms_error: result,
              response_status: 'ok_but_error'
            },
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              utm_source: directParams.utm_source || utmParams.utm_source,
              utm_medium: directParams.utm_medium || utmParams.utm_medium,
              utm_campaign: directParams.utm_campaign || utmParams.utm_campaign,
              utm_content: directParams.utm_content || utmParams.utm_content,
              utm_term: directParams.utm_term || utmParams.utm_term
            }
          );
          
          setSubmitStatus('error');
        }
      } else {
        console.error('HTTP Error:', response.status);
        
        // KRITISCHER FEHLER: Sofortige E-Mail-Benachrichtigung
        await errorReportingManager.reportCriticalError(
          'network_error',
          `HTTP-Fehler beim E-Mail-Versand: ${response.status}`,
          {
            http_status: response.status,
            response_headers: Object.fromEntries(response.headers.entries())
          },
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            utm_source: directParams.utm_source || utmParams.utm_source,
            utm_medium: directParams.utm_medium || utmParams.utm_medium,
            utm_campaign: directParams.utm_campaign || utmParams.utm_campaign,
            utm_content: directParams.utm_content || utmParams.utm_content,
            utm_term: directParams.utm_term || utmParams.utm_term
          }
        );
        
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      
      // KRITISCHER FEHLER: Sofortige E-Mail-Benachrichtigung
      await errorReportingManager.reportCriticalError(
        'network_error',
        `Netzwerk-Fehler beim E-Mail-Versand: ${error instanceof Error ? error.message : 'Unknown error'}`,
        {
          error_type: error instanceof Error ? error.constructor.name : 'Unknown',
          error_message: error instanceof Error ? error.message : String(error),
          stack_trace: error instanceof Error ? error.stack : undefined
        },
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          utm_source: directParams.utm_source || utmParams.utm_source,
          utm_medium: directParams.utm_medium || utmParams.utm_medium,
          utm_campaign: directParams.utm_campaign || utmParams.utm_campaign,
          utm_content: directParams.utm_content || utmParams.utm_content,
          utm_term: directParams.utm_term || utmParams.utm_term
        }
      );
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm, utmParams, navigate]);

  // Tracking für Formular-Fehler
  useEffect(() => {
    if (Object.keys(formErrors).length > 0) {
      track('Contact Form Validation Error', {
        errorFields: Object.keys(formErrors).join(', ')
      });

      // Error-Reporting für Validierungsfehler (niedrige Priorität)
      errorReportingManager.reportError(
        'validation_error',
        `Formular-Validierung fehlgeschlagen: ${Object.keys(formErrors).join(', ')}`,
        {
          validation_errors: formErrors,
          utm_parameters: utmParams
        },
        'low'
      );
    }
  }, [formErrors, utmParams]);

  const FormFeedback = React.memo(() => {
    switch (submitStatus) {
      case 'success':
        return (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-sm">Vielen Dank! Wir melden uns bald bei Ihnen.</span>
          </div>
        );
      case 'error':
        return (
          <div className="text-red-600 text-sm">
            Fehler beim Senden. Bitte versuchen Sie es später erneut.
          </div>
        );
      default:
        return null;
    }
  });

  FormFeedback.displayName = 'FormFeedback';

  if (!content) {
    return (
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-4 w-96 mb-8" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {content.contact.title.main} {content.contact.title.highlight}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kontaktformular */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {content.contact.form.titleHighlight} {content.contact.form.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{content.contact.form.fields.name} *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={formErrors.name ? 'border-red-500' : ''}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{content.contact.form.fields.email} *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={formErrors.email ? 'border-red-500' : ''}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{content.contact.form.fields.phone} *</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={formErrors.phone ? 'border-red-500' : ''}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="interest" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Interesse *</label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${formErrors.interest ? 'border-red-500' : ''}`}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Landingpage">Landingpage</option>
                    <option value="Unternehmenswebseite (S)">Unternehmenswebseite (S)</option>
                    <option value="Unternehmenswebseite (L)">Unternehmenswebseite (L)</option>
                    <option value="Website Relaunch">Website Relaunch</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                  {formErrors.interest && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.interest}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Wird gesendet...' : content.contact.form.button}
                </Button>

                <FormFeedback />
              </form>
            </CardContent>
          </Card>

          {/* Kontaktinformationen */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{content.contact.info.title}</CardTitle>
              <p className="text-muted-foreground">{content.contact.info.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">E-Mail</p>
                  <a href={`mailto:${content.contact.info.email.value}`} className="text-primary hover:underline">
                    {content.contact.info.email.value}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <a href={`tel:${content.contact.info.phone.value}`} className="text-primary hover:underline">
                    {content.contact.info.phone.value}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Standort</p>
                  <p className="text-muted-foreground">{content.contact.info.address.street}, {content.contact.info.address.city}</p>
                </div>
              </div>

              {/* Karte */}
              <div className="mt-6">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-2">{content.contact.info.title}</p>
                  <a 
                    href="https://maps.google.com/?q=Alter+Holzhafen+19,+23966+Wismar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    Größere Karte ansehen
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export { Contact };
export default Contact;