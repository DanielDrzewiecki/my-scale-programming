export const initGoogleTagManager = () => {
  // Google Tag Script dynamisch hinzufügen
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=AW-336431129`;
  script.async = true;
  document.head.appendChild(script);

  // Google Tag Konfiguration
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  // Globale Funktionen definieren
  window.gtag = gtag;
  window.gtag_report_conversion = (url?: string) => {
    const callback = () => {
      if (url) {
        window.location.href = url;
      }
    };

    gtag('event', 'conversion', {
      'send_to': 'AW-336431129/mrIuCNXH6_0CEJmQtqAB',
      'event_callback': callback
    });
    return false;
  };

  // Initialisierung
  gtag('js', new Date());
  gtag('config', 'AW-336431129');
}; 