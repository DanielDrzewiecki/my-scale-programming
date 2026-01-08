import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { X, Settings, Shield, BarChart3, Users, Globe } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  external: boolean;
}

interface TrackingCode {
  id: string;
  name: string;
  description: string;
  category: 'analytics' | 'marketing' | 'external';
  code: string;
  enabled: boolean;
}

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Immer aktiv
    analytics: false,
    marketing: false,
    external: false,
  });

  const [trackingCodes, setTrackingCodes] = useState<TrackingCode[]>([
    {
      id: 'google-analytics',
      name: 'Google Analytics',
      description: 'Analyse der Website-Nutzung und Besucherverhalten',
      category: 'analytics',
      code: `
        <!-- Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        </script>
      `,
      enabled: false,
    },
    {
      id: 'google-tag-manager',
      name: 'Google Tag Manager',
      description: 'Verwaltung von Tracking-Codes und Marketing-Tags',
      category: 'marketing',
      code: `
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      `,
      enabled: false,
    },
    {
      id: 'facebook-pixel',
      name: 'Facebook Pixel',
      description: 'Conversion-Tracking und Remarketing für Facebook/Instagram',
      category: 'marketing',
      code: `
        <!-- Facebook Pixel -->
        <script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
        /></noscript>
      `,
      enabled: false,
    },
    {
      id: 'hotjar',
      name: 'Hotjar',
      description: 'Heatmaps und Benutzerverhalten-Analyse',
      category: 'analytics',
      code: `
        <!-- Hotjar -->
        <script>
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        </script>
      `,
      enabled: false,
    },
  ]);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      loadTrackingCodes(savedPreferences);
    }
  }, []);

  const loadTrackingCodes = (prefs: CookiePreferences) => {
    // Notwendige Cookies sind immer aktiv
    if (prefs.analytics) {
      trackingCodes
        .filter(code => code.category === 'analytics')
        .forEach(code => {
          if (code.enabled) {
            executeTrackingCode(code);
          }
        });
    }

    if (prefs.marketing) {
      trackingCodes
        .filter(code => code.category === 'marketing')
        .forEach(code => {
          if (code.enabled) {
            executeTrackingCode(code);
          }
        });
    }

    if (prefs.external) {
      trackingCodes
        .filter(code => code.category === 'external')
        .forEach(code => {
          if (code.enabled) {
            executeTrackingCode(code);
          }
        });
    }
  };

  const executeTrackingCode = (code: TrackingCode) => {
    // Hier würde der Tracking-Code ausgeführt werden
    console.log(`Loading tracking code: ${code.name}`);
    
    // Beispiel für Google Analytics
    if (code.id === 'google-analytics') {
      // Google Analytics Code würde hier eingefügt werden
      console.log('Google Analytics loaded');
    }
    
    // Beispiel für Facebook Pixel
    if (code.id === 'facebook-pixel') {
      // Facebook Pixel Code würde hier eingefügt werden
      console.log('Facebook Pixel loaded');
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      external: true,
    };
    
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    loadTrackingCodes(allAccepted);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    loadTrackingCodes(preferences);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      external: false,
    };
    
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const toggleTrackingCode = (codeId: string) => {
    setTrackingCodes(prev => 
      prev.map(code => 
        code.id === codeId 
          ? { ...code, enabled: !code.enabled }
          : code
      )
    );
  };

  const updatePreferences = (category: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [category]: value,
    }));
  };

  if (!showBanner && !showSettings) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Cookie-Einstellungen
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setShowBanner(false);
              setShowSettings(false);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {!showSettings ? (
            // Haupt-Banner
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Datenschutz & Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung auf unserer Website zu verbessern, 
                  die Nutzung zu analysieren und personalisierte Inhalte anzuzeigen. 
                  Sie können Ihre Einwilligung jederzeit widerrufen.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={acceptAll} className="flex-1">
                  Alle akzeptieren
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowSettings(true)}
                  className="flex-1"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Einstellungen
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={rejectAll}
                  className="flex-1"
                >
                  Ablehnen
                </Button>
              </div>
            </div>
          ) : (
            // Detaillierte Einstellungen
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Cookie-Kategorien</h3>
                
                {/* Notwendige Cookies */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      checked={preferences.necessary} 
                      disabled 
                    />
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span className="font-medium">Notwendige Cookies</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => 
                        updatePreferences('analytics', checked as boolean)
                      }
                    />
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      <span className="font-medium">Analyse-Cookies</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                  </p>
                  
                  {preferences.analytics && (
                    <div className="ml-6 space-y-2">
                      {trackingCodes
                        .filter(code => code.category === 'analytics')
                        .map(code => (
                          <div key={code.id} className="flex items-center space-x-2">
                            <Checkbox 
                              checked={code.enabled}
                              onCheckedChange={() => toggleTrackingCode(code.id)}
                            />
                            <div>
                              <span className="text-sm font-medium">{code.name}</span>
                              <p className="text-xs text-muted-foreground">{code.description}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Marketing Cookies */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => 
                        updatePreferences('marketing', checked as boolean)
                      }
                    />
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="font-medium">Marketing-Cookies</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6">
                    Diese Cookies werden verwendet, um Besuchern relevante Anzeigen und Marketingkampagnen bereitzustellen.
                  </p>
                  
                  {preferences.marketing && (
                    <div className="ml-6 space-y-2">
                      {trackingCodes
                        .filter(code => code.category === 'marketing')
                        .map(code => (
                          <div key={code.id} className="flex items-center space-x-2">
                            <Checkbox 
                              checked={code.enabled}
                              onCheckedChange={() => toggleTrackingCode(code.id)}
                            />
                            <div>
                              <span className="text-sm font-medium">{code.name}</span>
                              <p className="text-xs text-muted-foreground">{code.description}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Externe Cookies */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      checked={preferences.external}
                      onCheckedChange={(checked) => 
                        updatePreferences('external', checked as boolean)
                      }
                    />
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span className="font-medium">Externe Medien</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6">
                    Diese Cookies ermöglichen die Einbindung von Inhalten von externen Anbietern.
                  </p>
                  
                  {preferences.external && (
                    <div className="ml-6 space-y-2">
                      {trackingCodes
                        .filter(code => code.category === 'external')
                        .map(code => (
                          <div key={code.id} className="flex items-center space-x-2">
                            <Checkbox 
                              checked={code.enabled}
                              onCheckedChange={() => toggleTrackingCode(code.id)}
                            />
                            <div>
                              <span className="text-sm font-medium">{code.name}</span>
                              <p className="text-xs text-muted-foreground">{code.description}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={acceptSelected} className="flex-1">
                  Auswahl speichern
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowSettings(false)}
                  className="flex-1"
                >
                  Zurück
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
