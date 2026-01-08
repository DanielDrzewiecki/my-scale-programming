// Tracking-Code-Manager für DSGVO-konforme Cookie-Verwaltung

export interface TrackingCode {
  id: string;
  name: string;
  description: string;
  category: 'analytics' | 'marketing' | 'external';
  code: string;
  enabled: boolean;
  config?: {
    [key: string]: string | number | boolean;
  };
}

export class TrackingManager {
  private static instance: TrackingManager;
  private trackingCodes: TrackingCode[] = [];
  private consent: any = null;

  private constructor() {
    this.loadConsent();
    this.initializeDefaultCodes();
  }

  public static getInstance(): TrackingManager {
    if (!TrackingManager.instance) {
      TrackingManager.instance = new TrackingManager();
    }
    return TrackingManager.instance;
  }

  private loadConsent(): void {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      this.consent = JSON.parse(consent);
    }
  }

  private initializeDefaultCodes(): void {
    this.trackingCodes = [
      /*
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
        config: {
          measurementId: 'GA_MEASUREMENT_ID',
          anonymizeIp: true,
          respectDoNotTrack: true,
        }
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
        config: {
          containerId: 'GTM-XXXXXXX',
        }
      },
      */
      {
        id: 'facebook-pixel',
        name: 'Facebook Pixel',
        description: 'Conversion-Tracking und Remarketing für Facebook/Instagram',
        category: 'marketing',
        code: `
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
        `,
        enabled: true,
        config: {
          pixelId: '1481226773061216',
        }
      },
      {
        id: 'hotjar',
        name: 'Hotjar',
        description: 'Heatmaps und Benutzerverhalten-Analyse',
        category: 'analytics',
        code: `
          <!-- Hotjar Tracking Code for externer-marketingmitarbeiter.de -->
            <script>
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:6492232,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            </script>
        `,
        enabled: false,
        config: {
          hotjarId: '6492232',
        }
      },
      /*{
        id: 'linkedin-insight',
        name: 'LinkedIn Insight Tag',
        description: 'Conversion-Tracking für LinkedIn-Werbung',
        category: 'marketing',
        code: `
          <!-- LinkedIn Insight Tag -->
          <script type="text/javascript">
            _linkedin_partner_id = "YOUR_LINKEDIN_ID";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          </script>
          <script type="text/javascript">
            (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
          </script>
          <noscript>
            <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=YOUR_LINKEDIN_ID&fmt=gif" />
          </noscript>
        `,
        enabled: false,
        config: {
          linkedinId: 'YOUR_LINKEDIN_ID',
        }
      },*/
      {
        id: 'Hubspot-pixel',
        name: 'Hubspot Pixel',
        description: 'Conversion-Tracking für Hubspot-Werbung',
        category: 'marketing',
        code: `
          <!-- Start of HubSpot Embed Code -->
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/6907588.js"></script>
          <!-- End of HubSpot Embed Code -->
        `,
        enabled: false,
        config: {
          twitterId: 'YOUR_TWITTER_ID',
        }
      }
    ];
  }

  public getTrackingCodes(): TrackingCode[] {
    return this.trackingCodes;
  }

  public addTrackingCode(code: TrackingCode): void {
    this.trackingCodes.push(code);
  }

  public updateTrackingCode(id: string, updates: Partial<TrackingCode>): void {
    this.trackingCodes = this.trackingCodes.map(code =>
      code.id === id ? { ...code, ...updates } : code
    );
  }

  public removeTrackingCode(id: string): void {
    this.trackingCodes = this.trackingCodes.filter(code => code.id !== id);
  }

  public executeTrackingCode(code: TrackingCode): void {
    if (!code.enabled) return;

    // Für Facebook Pixel: Immer laden für Testing-Zwecke
    if (code.id === 'facebook-pixel') {
      console.log('Loading Facebook Pixel for testing purposes');
    } else {
      // Prüfe Consent für andere Kategorien
      if (!this.hasConsent(code.category)) {
        console.log(`No consent for category: ${code.category}`);
        return;
      }
    }

    try {
      // Erstelle ein temporäres Script-Element
      const script = document.createElement('script');
      script.innerHTML = this.processCode(code);
      script.async = true;
      
      // Füge das Script zum Head hinzu
      document.head.appendChild(script);
      
      console.log(`Tracking code executed: ${code.name}`);
    } catch (error) {
      console.error(`Error executing tracking code ${code.name}:`, error);
    }
  }

  private processCode(code: TrackingCode): string {
    let processedCode = code.code;
    
    // Ersetze Platzhalter mit echten Werten
    if (code.config) {
      Object.entries(code.config).forEach(([key, value]) => {
        const placeholder = key.toUpperCase();
        processedCode = processedCode.replace(new RegExp(placeholder, 'g'), String(value));
      });
    }
    
    return processedCode;
  }

  public hasConsent(category: string): boolean {
    if (!this.consent) return false;
    return this.consent[category] === true;
  }

  public updateConsent(consent: any): void {
    this.consent = consent;
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    
    // Lade Tracking-Codes basierend auf neuem Consent
    this.loadTrackingCodes();
  }

  private loadTrackingCodes(): void {
    // Facebook Pixel immer laden, auch ohne Consent
    this.trackingCodes.forEach(code => {
      if (code.id === 'facebook-pixel' && code.enabled) {
        this.executeTrackingCode(code);
      } else if (this.consent && this.hasConsent(code.category) && code.enabled) {
        this.executeTrackingCode(code);
      }
    });
  }

  public resetConsent(): void {
    this.consent = null;
    localStorage.removeItem('cookie-consent');
  }

  // Öffentliche Methode zum Laden der Tracking-Codes
  public initializeTracking(): void {
    this.loadTrackingCodes();
  }

  // Hilfsmethoden für spezifische Tracking-Codes
  public configureGoogleAnalytics(measurementId: string): void {
    this.updateTrackingCode('google-analytics', {
      config: { measurementId }
    });
  }

  public configureFacebookPixel(pixelId: string): void {
    this.updateTrackingCode('facebook-pixel', {
      config: { pixelId }
    });
  }

  public configureGoogleTagManager(containerId: string): void {
    this.updateTrackingCode('google-tag-manager', {
      config: { containerId }
    });
  }

  public configureHotjar(hotjarId: string): void {
    this.updateTrackingCode('hotjar', {
      config: { hotjarId }
    });
  }

  // Facebook Lead Tracking
  public triggerFacebookLead(value: number = 1.00, currency: string = 'EUR'): void {
    if (window.fbq && this.hasConsent('marketing')) {
      window.fbq('track', 'Lead', {
        content_name: 'Contact Form Submission',
        content_category: 'Lead Generation',
        value: value,
        currency: currency
      });
      console.log('Facebook Lead Event triggered');
    }
  }

  // HubSpot Lead Tracking
  public triggerHubSpotLead(): void {
    if (window._hsq && this.hasConsent('marketing')) {
      window._hsq.push(['trackEvent', {
        id: 'contact_form_submission',
        value: 1
      }]);
      console.log('HubSpot Lead Event triggered');
    }
  }
}

// Exportiere eine Instanz
export const trackingManager = TrackingManager.getInstance();
