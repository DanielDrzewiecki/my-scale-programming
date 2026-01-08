import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { content } from '@/content/content';
import { track } from "@vercel/analytics";
import { trackingManager } from "@/lib/trackingManager";

export const ThankYou: React.FC = () => {
  const { contact } = content;

  useEffect(() => {
    // Tracking für Dankeseite-Besuch
    track('Thank You Page Visit', {
      page: 'Thank You',
      timestamp: new Date().toISOString()
    });

    // Facebook Pixel direkt laden falls noch nicht geladen
    if (!window.fbq) {
      console.log('Loading Facebook Pixel directly on Thank You page');
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1481226773061216');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
      
      // Noscript Tag hinzufügen (im body, nicht im head)
      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.src = 'https://www.facebook.com/tr?id=1481226773061216&ev=PageView&noscript=1';
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    }

    // Facebook Lead Tracking
    trackingManager.triggerFacebookLead();

    // Google Ads Conversion Tracking (falls verfügbar)
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion();
    }

    // HubSpot Lead Tracking
    trackingManager.triggerHubSpotLead();

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    track('Thank You Page Action', {
      action: 'Back to Home',
      page: 'Thank You'
    });
    window.location.href = '/';
  };

  const trackContactInfoInteraction = (type: string, value: string) => {
    track('Contact Info Interaction', {
      interactionType: type,
      value: value,
      page: 'Thank You'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Hauptinhalt */}
          <Card className="mb-8">
            <CardContent className="pt-12 pb-8">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <CheckCircle2 
                    className="h-32 w-32 text-green-500 animate-pulse" 
                    strokeWidth={1.5} 
                  />
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-center">
                    Vielen Dank für Ihre{" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                      Anfrage!
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Wir haben Ihre Nachricht erhalten und werden uns innerhalb der nächsten 24 Stunden bei Ihnen melden.
                  </p>
                </div>


                <div className="flex justify-center">
                  <Button 
                    onClick={handleBackToHome}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Zurück zur Startseite
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kontaktinformationen */}
          <Card>
            <CardHeader>
              <CardTitle>Direkter Kontakt</CardTitle>
              <CardDescription>
                Sie können uns auch direkt erreichen, falls Sie Fragen haben oder nicht warten möchten.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.info.email.label}</p>
                    <a 
                      href={`mailto:${contact.info.email.value}`}
                      onClick={() => trackContactInfoInteraction('Email', contact.info.email.value)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contact.info.email.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.info.phone.label}</p>
                    <a 
                      href={`tel:${contact.info.phone.value.replace(/[^0-9+]/g, '')}`}
                      onClick={() => trackContactInfoInteraction('Phone', contact.info.phone.value)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contact.info.phone.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.info.address.label}</p>
                    <p className="text-muted-foreground">
                      {contact.info.address.street}<br />
                      {contact.info.address.city}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="w-full rounded-lg overflow-hidden aspect-video">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.8288592781805!2d11.45040347675211!3d53.89924573321055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47adb918d800c249%3A0x58a40df09282234f!2smy-scale%20digitale%20GmbH!5e0!3m2!1sde!2sde!4v1734605386885!5m2!1sde!2sde"
                  width="100%" 
                  height="100%" 
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="my-scale Standort"
                  onLoad={() => track('Google Maps Loaded', {
                    location: 'Thank You Page'
                  })}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
