# Error Reporting System

## Übersicht

Das Error Reporting System sendet sofort E-Mail-Benachrichtigungen bei kritischen Fehlern, um sicherzustellen, dass keine Leads verloren gehen und Probleme schnellstmöglich behoben werden können.

## Funktionalitäten

### ✅ Sofortige E-Mail-Benachrichtigungen
- **Kritische Fehler**: Sofortige E-Mail bei Lead-Verlust
- **Detaillierte Reports**: Vollständige Fehler-Informationen
- **Lead-Daten**: Alle Lead-Informationen werden mitgesendet
- **UTM-Tracking**: Kampagnen-Attribution wird erhalten

### ✅ Fehler-Kategorien
- **`email_send_error`**: E-Mail-Versand fehlgeschlagen
- **`network_error`**: Netzwerk-Probleme
- **`validation_error`**: Formular-Validierung fehlgeschlagen
- **`form_submission_error`**: Allgemeine Formular-Fehler

### ✅ Schweregrad-Klassifizierung
- **`critical`**: Lead-Verlust (sofortige Benachrichtigung)
- **`high`**: System-Fehler
- **`medium`**: Funktions-Fehler
- **`low`**: Validierungs-Fehler

## E-Mail-Format

### Betreff
```
🚨 KRITISCHER FEHLER - EMAIL_SEND_ERROR - 15.01.2024, 14:30:25
```

### E-Mail-Inhalt
```
🚨 KRITISCHER FEHLER AUF DER WEBSITE 🚨

═══════════════════════════════════════════════════════════════

📊 FEHLER-DETAILS:
═══════════════════════════════════════════════════════════════

🆔 Fehler-ID: error_1705327825000_abc123def
⏰ Zeitstempel: 15.01.2024, 14:30:25
🔴 Schweregrad: CRITICAL
📝 Typ: email_send_error
🌐 URL: https://ihre-domain.de/contact

📋 FEHLER-MELDUNG:
E-Mail-Versand fehlgeschlagen: Invalid API key

🔍 TECHNISCHE DETAILS:
{
  "web3forms_error": {
    "success": false,
    "message": "Invalid API key"
  },
  "lead_id": "lead_1705327825000_xyz789",
  "response_status": "ok_but_error"
}

💻 BROWSER-INFORMATIONEN:
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36

👤 LEAD-DATEN (VERLOREN!):
═══════════════════════════════════════════════════════════════
Name: Max Mustermann
E-Mail: max@beispiel.de
Telefon: +49 123 456789

📈 UTM-PARAMETER:
═══════════════════════════════════════════════════════════════
Source: facebook
Medium: recruiting-kampagne
Campaign: q1-2024
Content: anzeige-1
Term: keine

⚠️  WICHTIG: Dieser Lead ist möglicherweise verloren gegangen!
⚠️  Sofortige Nachbearbeitung erforderlich!

═══════════════════════════════════════════════════════════════
🔧 SOFORTIGE MASSNAHMEN ERFORDERLICH:
═══════════════════════════════════════════════════════════════

1. ✅ Website-Status überprüfen
2. ✅ E-Mail-System testen
3. ✅ Lead-Daten sichern (falls verfügbar)
4. ✅ Problem beheben
5. ✅ Lead manuell nachbearbeiten

📞 Kontakt: Technischer Support
🌐 Website: https://ihre-domain.de
⏰ Report-Zeit: 15.01.2024, 14:30:25

═══════════════════════════════════════════════════════════════
```

## Konfiguration

### Umgebungsvariablen

Erstellen Sie eine `.env` Datei im Root-Verzeichnis:

```bash
# Web3Forms Access Key für E-Mail-Versand
VITE_WEB3FORMS_ACCESS_KEY=IHHR_ACCESS_KEY_HIER

# Error Reporting Access Key (kann derselbe sein)
VITE_ERROR_REPORTING_KEY=IHHR_ACCESS_KEY_HIER
```

### Web3Forms Setup

1. **Gehen Sie zu https://web3forms.com/**
2. **Erstellen Sie einen Access Key**
3. **Fügen Sie ihn in die `.env` Datei ein**
4. **Starten Sie den Development Server neu**

## Fehler-Typen

### 1. **E-Mail-Versand-Fehler** (`email_send_error`)
- **Trigger**: Web3Forms API gibt Fehler zurück
- **Schweregrad**: `critical`
- **Lead-Daten**: ✅ Vollständig erhalten
- **Aktion**: Sofortige E-Mail-Benachrichtigung

### 2. **Netzwerk-Fehler** (`network_error`)
- **Trigger**: HTTP-Fehler oder Netzwerk-Probleme
- **Schweregrad**: `critical`
- **Lead-Daten**: ✅ Vollständig erhalten
- **Aktion**: Sofortige E-Mail-Benachrichtigung

### 3. **Validierungs-Fehler** (`validation_error`)
- **Trigger**: Formular-Validierung schlägt fehl
- **Schweregrad**: `low`
- **Lead-Daten**: ❌ Nicht verfügbar
- **Aktion**: E-Mail-Benachrichtigung (niedrige Priorität)

## Technische Details

### Error Report Interface
```typescript
interface ErrorReport {
  id: string;                    // Eindeutige Fehler-ID
  timestamp: string;             // ISO-Timestamp
  type: 'email_send_error' | 'network_error' | 'validation_error' | 'form_submission_error';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;               // Fehler-Meldung
  details: any;                  // Technische Details
  userAgent: string;             // Browser-Informationen
  url: string;                   // Aktuelle URL
  leadData?: {                   // Lead-Daten (falls verfügbar)
    name: string;
    email: string;
    phone: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
  };
}
```

### API-Integration
```typescript
// Kritischen Fehler melden
await errorReportingManager.reportCriticalError(
  'email_send_error',
  'E-Mail-Versand fehlgeschlagen',
  { web3forms_error: result },
  leadData
);

// Normalen Fehler melden
await errorReportingManager.reportError(
  'validation_error',
  'Formular-Validierung fehlgeschlagen',
  { validation_errors: errors },
  'low'
);
```

## Monitoring & Alerts

### E-Mail-Benachrichtigungen
- **Sofortige Zustellung**: Kritische Fehler werden sofort gesendet
- **Detaillierte Informationen**: Vollständige Fehler-Analyse
- **Lead-Daten**: Alle Lead-Informationen werden erhalten
- **UTM-Tracking**: Kampagnen-Attribution bleibt erhalten

### Console-Logging
```javascript
// Kritische Fehler
console.error('🚨 KRITISCHER FEHLER:', errorReport);

// Normale Fehler
console.error('❌ FEHLER:', errorReport);

// Erfolgreiche Benachrichtigung
console.log('✅ Fehler-Report per E-Mail gesendet:', errorReport.id);
```

## Testing

### Manueller Test
```javascript
// In der Browser-Console
errorReportingManager.testErrorReporting();
```

### Automatische Tests
Das System wird automatisch bei folgenden Ereignissen getestet:
- Formular-Validierung fehlgeschlagen
- E-Mail-Versand fehlgeschlagen
- Netzwerk-Fehler
- HTTP-Fehler

## Troubleshooting

### Problem: E-Mail-Benachrichtigungen werden nicht gesendet

**Lösung:**
1. Überprüfen Sie die `.env` Datei
2. Stellen Sie sicher, dass `VITE_ERROR_REPORTING_KEY` gesetzt ist
3. Prüfen Sie die Browser-Console auf Fehler
4. Testen Sie mit `errorReportingManager.testErrorReporting()`

### Problem: Fehler werden nicht erfasst

**Lösung:**
1. Überprüfen Sie die Browser-Console
2. Stellen Sie sicher, dass JavaScript aktiviert ist
3. Prüfen Sie die Netzwerk-Verbindung
4. Testen Sie das Formular mit ungültigen Daten

### Problem: Lead-Daten fehlen in E-Mails

**Lösung:**
1. Überprüfen Sie die UTM-Parameter-Erfassung
2. Stellen Sie sicher, dass das Formular korrekt ausgefüllt wurde
3. Prüfen Sie die Console-Logs für UTM-Parameter

## Best Practices

### 1. **Monitoring**
- Überwachen Sie regelmäßig die E-Mail-Benachrichtigungen
- Dokumentieren Sie wiederkehrende Fehler
- Analysieren Sie die Fehler-Patterns

### 2. **Reaktion**
- Reagieren Sie sofort auf kritische Fehler
- Kontaktieren Sie den Kunden bei Lead-Verlust
- Dokumentieren Sie die Problemlösung

### 3. **Prävention**
- Testen Sie regelmäßig das E-Mail-System
- Überwachen Sie die API-Limits
- Implementieren Sie Fallback-Mechanismen

## Sicherheit

### ✅ Datenschutz
- **Keine sensiblen Daten**: Nur notwendige Informationen werden gesendet
- **Verschlüsselung**: E-Mails werden verschlüsselt übertragen
- **Zugriffskontrolle**: Nur autorisierte Personen erhalten Benachrichtigungen

### ✅ DSGVO-Konformität
- **Minimale Daten**: Nur notwendige Fehler-Informationen
- **Löschung**: Alte Fehler-Reports werden automatisch gelöscht
- **Transparenz**: Benutzer werden über Fehler informiert

## Support

Bei Problemen oder Fragen:
1. Überprüfen Sie die Browser-Console
2. Prüfen Sie die E-Mail-Benachrichtigungen
3. Testen Sie das Error-Reporting-System
4. Kontaktieren Sie den technischen Support

Das Error Reporting System stellt sicher, dass keine kritischen Fehler unbemerkt bleiben! 🚨
