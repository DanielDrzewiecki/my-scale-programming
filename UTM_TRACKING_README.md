# UTM Parameter Tracking

## Übersicht

Das System erfasst automatisch UTM-Parameter von eingehenden Besuchern und speichert diese mit den Lead-Daten. Dies ermöglicht die präzise Zuordnung von Conversions zu Werbekampagnen.

## Unterstützte UTM-Parameter

Das System erfasst folgende UTM-Parameter:

- **utm_source**: Quelle des Traffics (z.B. Facebook, Google, Newsletter)
- **utm_medium**: Medium der Kampagne (z.B. CPC, Social, Email)
- **utm_campaign**: Name der Kampagne
- **utm_content**: Spezifischer Content/Anzeige
- **utm_term**: Suchbegriffe (für Paid Search)

## Facebook Ads Beispiel

Ihre Facebook-Kampagnen verwenden dynamische UTM-Parameter:

```
utm_source={{site_source_name}}&utm_medium={{adset.name}}&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
```

### Facebook Dynamic Parameters

- `{{site_source_name}}` → utm_source (z.B. "facebook", "instagram")
- `{{adset.name}}` → utm_medium (Name der Anzeigengruppe)
- `{{campaign.name}}` → utm_campaign (Kampagnenname)
- `{{ad.name}}` → utm_content (Anzeigenname)

## Wie es funktioniert

### 1. Automatische Erfassung beim Seitenbesuch

Wenn ein Besucher die Seite über einen Link mit UTM-Parametern aufruft:

```
https://ihre-domain.de/?utm_source=facebook&utm_medium=recruiting-kampagne&utm_campaign=q1-2024&utm_content=anzeige-1
```

werden die Parameter automatisch erfasst und im `sessionStorage` gespeichert.

### 2. Persistierung während der Session

Die UTM-Parameter bleiben während der gesamten Browser-Session gespeichert, auch wenn der Benutzer zwischen Seiten navigiert.

### 3. Übermittlung mit Lead-Daten

Wenn das Kontaktformular abgeschickt wird, werden folgende Daten übermittelt:

```json
{
  "name": "Max Mustermann",
  "email": "max@beispiel.de",
  "phone": "+49 123 456789",
  "utm_source": "facebook",
  "utm_medium": "recruiting-kampagne",
  "utm_campaign": "q1-2024",
  "utm_content": "anzeige-1",
  "utm_term": "keine",
  "utm_info": "utm_source: facebook, utm_medium: recruiting-kampagne, utm_campaign: q1-2024, utm_content: anzeige-1"
}
```

## E-Mail-Format

In der E-Mail, die Sie über Web3Forms erhalten, werden die UTM-Parameter wie folgt angezeigt:

```
Name: Max Mustermann
E-Mail: max@beispiel.de
Telefon: +49 123 456789

--- Tracking-Informationen ---
UTM Source: facebook
UTM Medium: recruiting-kampagne
UTM Campaign: q1-2024
UTM Content: anzeige-1
UTM Term: keine
UTM Info: utm_source: facebook, utm_medium: recruiting-kampagne, utm_campaign: q1-2024, utm_content: anzeige-1
```

## Analytics Integration

Die UTM-Parameter werden auch an folgende Analytics-Systeme übermittelt:

### Vercel Analytics
```javascript
track('Contact Form Submission', {
  name: formData.name,
  utm_source: 'facebook',
  utm_medium: 'recruiting-kampagne',
  utm_campaign: 'q1-2024',
  utm_content: 'anzeige-1'
});
```

### Facebook Pixel
Die Lead-Events enthalten automatisch die Original-UTM-Parameter für besseres Conversion-Tracking.

## Fallback-Werte

Falls keine UTM-Parameter vorhanden sind, werden folgende Standardwerte verwendet:

- `utm_source`: "direkt"
- `utm_medium`: "keine"
- `utm_campaign`: "keine"
- `utm_content`: "keine"
- `utm_term`: "keine"

## Testing

### Manuelles Testing

1. **Öffnen Sie die Landing Page mit UTM-Parametern:**
   ```
   http://localhost:5173/?utm_source=facebook&utm_medium=test-kampagne&utm_campaign=test&utm_content=anzeige-test
   ```

2. **Öffnen Sie die Browser-Konsole** (F12)

3. **Prüfen Sie die Console-Logs:**
   - "UTM-Parameter beim App-Start erfasst: {...}"
   - "UTM-Parameter erfasst: {...}"

4. **Füllen Sie das Kontaktformular aus und senden Sie es ab**

5. **Prüfen Sie die E-Mail** - UTM-Parameter sollten enthalten sein

### SessionStorage überprüfen

Öffnen Sie die Browser-DevTools → Application → Session Storage:
- Suchen Sie nach `utm_parameters`
- Der Wert sollte ein JSON-Objekt mit den erfassten Parametern sein

### Console-Logs

Das System gibt folgende Informationen in der Console aus:

```javascript
// Beim App-Start
"UTM-Parameter beim App-Start erfasst:" {utm_source: "facebook", ...}

// Bei Formular-Anzeige
"UTM-Parameter erfasst:" {utm_source: "facebook", ...}
"Formatiert: utm_source: facebook, utm_medium: test-kampagne, ..."
```

## Kampagnen-URLs erstellen

### Facebook Ads Manager

Verwenden Sie diese URL-Struktur in Ihren Facebook-Anzeigen:

```
https://ihre-domain.de/?utm_source={{site_source_name}}&utm_medium={{adset.name}}&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
```

### Google Ads

Für Google Ads verwenden Sie ValueTrack-Parameter:

```
https://ihre-domain.de/?utm_source=google&utm_medium={campaignid}&utm_campaign={campaign}&utm_content={creative}&utm_term={keyword}
```

### Manuelle Links

Für Newsletter oder andere Kanäle:

```
https://ihre-domain.de/?utm_source=newsletter&utm_medium=email&utm_campaign=q1-2024&utm_content=header-cta
```

## URL Builder Tools

- **Google Campaign URL Builder**: https://ga-dev-tools.google/campaign-url-builder/
- **Facebook Dynamic Parameters**: https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/mobile-app-events

## Datenschutz (DSGVO)

- UTM-Parameter werden nur während der Browser-Session gespeichert
- Keine personenbezogenen Daten in UTM-Parametern verwenden
- Die Daten werden nur zur Kampagnen-Attribution verwendet
- Transparent in der Datenschutzerklärung aufführen

## Technische Implementierung

### Dateien

1. **`src/lib/utmTracking.ts`**: Utility-Funktionen für UTM-Tracking
2. **`src/App.tsx`**: Initialisierung beim App-Start
3. **`src/components/Contact.tsx`**: Integration im Kontaktformular

### API

```typescript
// UTM-Parameter extrahieren
const params = extractUTMParameters();

// Speichern
saveUTMParameters(params);

// Laden
const saved = loadUTMParameters();

// Initialisieren (automatisch beim App-Start)
const params = initializeUTMTracking();

// Formatieren für Anzeige
const formatted = formatUTMParameters(params);
```

## Troubleshooting

### Problem: UTM-Parameter werden nicht erfasst

**Lösung:**
- Überprüfen Sie die Browser-Console auf Fehler
- Prüfen Sie, ob die URL korrekt formatiert ist
- Stellen Sie sicher, dass JavaScript aktiviert ist

### Problem: Parameter gehen bei Navigation verloren

**Lösung:**
- UTM-Parameter werden im sessionStorage gespeichert
- Beim ersten Seitenbesuch mit Parametern werden sie gespeichert
- Navigation innerhalb der Session behält die Parameter

### Problem: Parameter erscheinen nicht in der E-Mail

**Lösung:**
- Überprüfen Sie die Web3Forms-Konfiguration
- Prüfen Sie die Browser-Console auf Fehler
- Testen Sie mit dem Fallback-Modus (ohne Access Key)

## Best Practices

1. **Konsistente Namenskonventionen**: Verwenden Sie einheitliche Namen für Kampagnen
2. **Aussagekräftige Werte**: Nutzen Sie beschreibende Namen (nicht "123" sondern "recruiting-q1")
3. **Kleinschreibung**: Alle Parameter sollten kleingeschrieben sein
4. **Keine Leerzeichen**: Verwenden Sie Bindestriche statt Leerzeichen
5. **URL-Encoding**: Sonderzeichen sollten URL-encoded sein

## Support

Bei Fragen oder Problemen:
- Überprüfen Sie die Browser-Console
- Prüfen Sie die Netzwerk-Anfragen in den DevTools
- Kontaktieren Sie den technischen Support mit den Console-Logs

