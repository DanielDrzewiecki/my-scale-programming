# Dankeseite und Facebook Lead Tracking

## Übersicht

Nach dem Absenden des Kontaktformulars werden Benutzer automatisch zu einer professionellen Dankeseite weitergeleitet, auf der das Facebook Lead Tracking und andere Conversion-Tracking-Methoden implementiert sind.

## Funktionalitäten

### 1. Automatische Weiterleitung
- Nach erfolgreichem Absenden des Formulars wird der Benutzer nach 1,5 Sekunden zur Dankeseite (`/thank-you`) weitergeleitet
- Die Weiterleitung erfolgt über React Router für eine nahtlose Benutzererfahrung

### 2. Facebook Lead Tracking
- **Event**: `Lead`
- **Parameter**:
  - `content_name`: "Contact Form Submission"
  - `content_category`: "Lead Generation"
  - `value`: 1.00 EUR
  - `currency`: "EUR"

### 3. Weitere Tracking-Implementierungen
- **Google Ads Conversion Tracking**: Automatisches Tracking über `gtag_report_conversion()`
- **HubSpot Lead Tracking**: Event-Tracking für HubSpot-Analytics
- **Vercel Analytics**: Seitenbesuch-Tracking und Benutzerinteraktionen

### 4. DSGVO-Konformität
- Alle Tracking-Funktionen prüfen die Cookie-Consent-Einstellungen
- Facebook Pixel wird nur ausgeführt, wenn Marketing-Cookies akzeptiert wurden
- Transparente Benutzerinformationen über Tracking-Aktivitäten

## Technische Implementierung

### Routing
```typescript
// App.tsx
<Router>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/thank-you" element={<ThankYou />} />
  </Routes>
</Router>
```

### Tracking Manager
```typescript
// Neue Methoden im TrackingManager
public triggerFacebookLead(value: number = 1.00, currency: string = 'EUR'): void
public triggerHubSpotLead(): void
```

### Contact Form Update
```typescript
// Automatische Weiterleitung nach erfolgreichem Submit
setTimeout(() => {
  navigate('/thank-you');
}, 1500);
```

## Dankeseite Features

### 1. Professionelles Design
- Responsive Layout mit modernem Design
- Animierte Erfolgs-Icons
- Gradient-Hintergründe und moderne UI-Komponenten

### 2. Benutzerführung
- Klare "Was passiert als nächstes?" Sektion
- Direkte Kontaktmöglichkeiten
- Navigation zurück zur Startseite oder zu weiteren Anfragen

### 3. Kontaktinformationen
- Vollständige Kontaktdaten (E-Mail, Telefon, Adresse)
- Integrierte Google Maps
- Tracking für Kontaktinteraktionen

## Installation und Setup

### 1. Dependencies
```bash
npm install react-router-dom
```

### 2. TypeScript-Typen
Die globalen Tracking-Funktionen sind in `src/types/global.d.ts` definiert:
```typescript
interface Window {
  fbq: (...args: any[]) => void;
  _hsq: any[];
  // ... weitere Typen
}
```

### 3. Facebook Pixel Konfiguration
Das Facebook Pixel ist im `TrackingManager` konfiguriert:
- Pixel ID: `1481226773061216`
- Standardmäßig aktiviert
- DSGVO-konforme Consent-Prüfung

## Testing

### 1. Formular-Submission testen
1. Füllen Sie das Kontaktformular aus
2. Senden Sie das Formular ab
3. Überprüfen Sie die automatische Weiterleitung zur Dankeseite

### 2. Facebook Lead Tracking testen
1. Öffnen Sie die Facebook Events Manager
2. Suchen Sie nach dem "Lead" Event
3. Überprüfen Sie die Event-Parameter

### 3. Browser-Konsole
- Überprüfen Sie die Console-Logs für Tracking-Events
- Suchen Sie nach "Facebook Lead Event triggered"

## Wartung und Updates

### Facebook Pixel ID ändern
```typescript
// In src/lib/trackingManager.ts
config: {
  pixelId: 'IHRE_NEUE_PIXEL_ID',
}
```

### Tracking-Parameter anpassen
```typescript
// In src/components/ThankYou.tsx
trackingManager.triggerFacebookLead(2.00, 'USD'); // Anderer Wert und Währung
```

### Neue Tracking-Methoden hinzufügen
1. Neue Methode im `TrackingManager` erstellen
2. In der `ThankYou`-Komponente aufrufen
3. TypeScript-Typen aktualisieren

## Troubleshooting

### Problem: Weiterleitung funktioniert nicht
- Überprüfen Sie, ob React Router korrekt installiert ist
- Stellen Sie sicher, dass die Route `/thank-you` definiert ist

### Problem: Facebook Tracking funktioniert nicht
- Überprüfen Sie die Cookie-Consent-Einstellungen
- Stellen Sie sicher, dass das Facebook Pixel geladen ist
- Überprüfen Sie die Pixel ID in der Konfiguration

### Problem: TypeScript-Fehler
- Überprüfen Sie die globalen Typen in `src/types/global.d.ts`
- Stellen Sie sicher, dass alle Tracking-Funktionen typisiert sind
