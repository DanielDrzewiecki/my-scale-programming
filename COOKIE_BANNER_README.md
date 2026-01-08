# DSGVO-konformer Cookie-Banner

## Übersicht

Dieser Cookie-Banner ist vollständig DSGVO-konform und ermöglicht es, Tracking-Codes basierend auf der Benutzereinwilligung zu laden.

## Features

### ✅ DSGVO-Konformität
- **Granulare Einwilligung**: Separate Zustimmung für jede Cookie-Kategorie
- **Opt-in statt Opt-out**: Tracking-Codes werden nur nach expliziter Zustimmung geladen
- **Widerrufsrecht**: Benutzer können ihre Einwilligung jederzeit widerrufen
- **Transparenz**: Klare Beschreibung jeder Cookie-Kategorie und Tracking-Codes
- **Speicherung**: Consent wird im localStorage gespeichert

### 🎯 Cookie-Kategorien
1. **Notwendige Cookies** (immer aktiv)
   - Session-Management
   - Sicherheitsfunktionen
   - Grundlegende Website-Funktionen

2. **Analyse-Cookies**
   - Google Analytics
   - Hotjar
   - Website-Nutzungsanalyse

3. **Marketing-Cookies**
   - Google Tag Manager
   - Facebook Pixel
   - LinkedIn Insight Tag
   - Twitter Pixel
   - Conversion-Tracking

4. **Externe Medien**
   - YouTube-Einbettungen
   - Social Media Widgets
   - Externe Inhalte

## Verwendung

### 1. Tracking-Codes konfigurieren

```typescript
import { trackingManager } from '@/lib/trackingManager';

// Google Analytics konfigurieren
trackingManager.configureGoogleAnalytics('G-XXXXXXXXXX');

// Facebook Pixel konfigurieren
trackingManager.configureFacebookPixel('123456789');

// Google Tag Manager konfigurieren
trackingManager.configureGoogleTagManager('GTM-XXXXXXX');

// Hotjar konfigurieren
trackingManager.configureHotjar('1234567');
```

### 2. Eigene Tracking-Codes hinzufügen

```typescript
import { trackingManager } from '@/lib/trackingManager';

trackingManager.addTrackingCode({
  id: 'custom-tracking',
  name: 'Custom Analytics',
  description: 'Eigener Tracking-Code für spezielle Analysen',
  category: 'analytics',
  code: `
    <script>
      // Dein Tracking-Code hier
      console.log('Custom tracking loaded');
    </script>
  `,
  enabled: true,
  config: {
    customId: 'YOUR_CUSTOM_ID'
  }
});
```

### 3. Consent-Status prüfen

```typescript
import { trackingManager } from '@/lib/trackingManager';

// Prüfen ob Analytics-Cookies erlaubt sind
if (trackingManager.hasConsent('analytics')) {
  // Analytics-Code ausführen
  console.log('Analytics allowed');
}

// Prüfen ob Marketing-Cookies erlaubt sind
if (trackingManager.hasConsent('marketing')) {
  // Marketing-Code ausführen
  console.log('Marketing allowed');
}
```

## Tracking-Codes verwalten

### Verfügbare Tracking-Codes

| Name | Kategorie | Beschreibung | Konfiguration |
|------|-----------|--------------|---------------|
| Google Analytics | Analytics | Website-Nutzung analysieren | `measurementId` |
| Google Tag Manager | Marketing | Tag-Management | `containerId` |
| Facebook Pixel | Marketing | Conversion-Tracking | `pixelId` |
| Hotjar | Analytics | Heatmaps & Verhalten | `hotjarId` |
| LinkedIn Insight | Marketing | LinkedIn-Tracking | `linkedinId` |
| Twitter Pixel | Marketing | Twitter-Tracking | `twitterId` |

### Tracking-Code bearbeiten

```typescript
// Tracking-Code aktualisieren
trackingManager.updateTrackingCode('google-analytics', {
  enabled: true,
  config: {
    measurementId: 'G-NEWID123'
  }
});

// Tracking-Code entfernen
trackingManager.removeTrackingCode('custom-tracking');
```

## DSGVO-Anforderungen

### ✅ Erfüllte Anforderungen

1. **Rechtmäßigkeit der Verarbeitung**
   - Explizite Einwilligung vor dem Laden von Tracking-Codes
   - Opt-in statt Opt-out

2. **Transparenz**
   - Klare Beschreibung jeder Cookie-Kategorie
   - Detaillierte Informationen zu jedem Tracking-Code
   - Verständliche Sprache

3. **Zweckbindung**
   - Kategorisierung nach Verwendungszweck
   - Keine Verarbeitung ohne entsprechende Einwilligung

4. **Datenminimierung**
   - Nur notwendige Cookies werden automatisch geladen
   - Granulare Kontrolle über Tracking-Codes

5. **Speicherbegrenzung**
   - Consent wird lokal gespeichert
   - Benutzer können Consent jederzeit widerrufen

6. **Integrität und Vertraulichkeit**
   - Sichere Speicherung im localStorage
   - Keine unerlaubte Datenübertragung

7. **Rechenschaftspflicht**
   - Vollständige Dokumentation der Verarbeitung
   - Nachweisbare Einwilligung

### 🔧 Benutzerrechte

- **Recht auf Information**: Klare Beschreibung aller Cookies
- **Recht auf Einwilligung**: Granulare Kontrolle über Cookie-Kategorien
- **Recht auf Widerruf**: Einwilligung kann jederzeit widerrufen werden
- **Recht auf Löschung**: Consent kann zurückgesetzt werden

## Implementierung

### 1. Cookie-Banner einbinden

Der Cookie-Banner ist bereits in `App.tsx` eingebunden:

```typescript
import { CookieBanner } from "./components/CookieBanner";

function App() {
  return (
    <>
      {/* ... andere Komponenten ... */}
      <CookieBanner />
    </>
  );
}
```

### 2. Tracking-Codes konfigurieren

In einer separaten Konfigurationsdatei oder beim App-Start:

```typescript
// src/config/tracking.ts
import { trackingManager } from '@/lib/trackingManager';

export const configureTracking = () => {
  // Google Analytics
  trackingManager.configureGoogleAnalytics('G-XXXXXXXXXX');
  
  // Facebook Pixel
  trackingManager.configureFacebookPixel('123456789');
  
  // Google Tag Manager
  trackingManager.configureGoogleTagManager('GTM-XXXXXXX');
  
  // Hotjar
  trackingManager.configureHotjar('1234567');
};
```

### 3. Tracking-Codes verwenden

```typescript
import { trackingManager } from '@/lib/trackingManager';

// Beispiel: Conversion-Tracking
export const trackConversion = (value: number) => {
  if (trackingManager.hasConsent('marketing')) {
    // Facebook Pixel Conversion
    if (window.fbq) {
      window.fbq('track', 'Purchase', { value });
    }
    
    // Google Analytics Conversion
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        value: value,
        currency: 'EUR'
      });
    }
  }
};
```

## Wartung

### Consent zurücksetzen

```typescript
// Für Entwicklungszwecke
trackingManager.resetConsent();
```

### Neue Tracking-Codes hinzufügen

1. Tracking-Code in `trackingManager.ts` hinzufügen
2. Konfiguration definieren
3. Cookie-Banner-Komponente erweitern (falls nötig)

### Monitoring

- Console-Logs zeigen geladene Tracking-Codes
- Browser-Entwicklertools für Debugging
- Network-Tab für Überprüfung der geladenen Scripts

## Rechtliche Hinweise

⚠️ **Wichtige Hinweise:**

1. **Rechtsberatung**: Dies ist keine Rechtsberatung. Konsultieren Sie einen Rechtsanwalt für DSGVO-Compliance.
2. **Datenschutzerklärung**: Erstellen Sie eine vollständige Datenschutzerklärung
3. **Cookie-Policy**: Dokumentieren Sie alle verwendeten Cookies
4. **Regelmäßige Updates**: Halten Sie den Cookie-Banner aktuell
5. **Testing**: Testen Sie regelmäßig die DSGVO-Compliance

## Support

Bei Fragen oder Problemen:
1. Überprüfen Sie die Console-Logs
2. Testen Sie die Consent-Speicherung
3. Prüfen Sie die Tracking-Code-Ausführung
4. Kontaktieren Sie den Entwickler

---

**Version**: 1.0.0  
**Letzte Aktualisierung**: Dezember 2024  
**DSGVO-konform**: ✅ Ja
