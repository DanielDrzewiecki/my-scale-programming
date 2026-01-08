# n8n Webhook Setup Anleitung

## Übersicht

Das Kontaktformular wurde erweitert, um alle Formulardaten an einen n8n Webhook zu senden. n8n ist eine Workflow-Automatisierungsplattform, die es ermöglicht, die Formulardaten zu verarbeiten und an verschiedene Systeme weiterzuleiten.

## Funktionsweise

### Prioritätsreihenfolge
1. **n8n Webhook** (höchste Priorität)
2. **Web3Forms** (Fallback)
3. **Demo-Modus** (wenn nichts konfiguriert ist)

### Gesendete Daten

Der n8n Webhook empfängt folgende JSON-Daten:

```json
{
  "name": "Max Mustermann",
  "email": "max@beispiel.de",
  "phone": "+49 123 456789",
  
  "utm_source": "facebook",
  "utm_medium": "social",
  "utm_campaign": "q1-2024",
  "utm_content": "anzeige-1",
  "utm_term": "marketing",
  
  "timestamp": "2024-01-15T10:30:00.000Z",
  "url": "https://ihre-domain.de/?utm_source=facebook",
  "user_agent": "Mozilla/5.0...",
  "landing_page_topic": "Marketing Services",
  
  "utm_formatted": "facebook > social > q1-2024 > anzeige-1 > marketing"
}
```

## Setup-Anleitung

### Schritt 1: n8n Webhook URL erstellen

1. **Gehen Sie zu Ihrer n8n-Instanz**
2. **Erstellen Sie einen neuen Workflow**
3. **Fügen Sie einen "Webhook" Node hinzu**
4. **Konfigurieren Sie den Webhook:**
   - **HTTP Method**: POST
   - **Response Mode**: "Respond to Webhook"
   - **Response Code**: 200
   - **Response Body**: `{ "success": true, "message": "Lead received" }`
5. **Kopieren Sie die Webhook-URL**

### Schritt 2: Umgebungsvariable konfigurieren

1. **Erstellen Sie eine `.env` Datei im Root-Verzeichnis:**
   ```bash
   touch .env
   ```

2. **Fügen Sie folgende Zeile in die `.env` Datei ein:**
   ```
   VITE_N8N_WEBHOOK_URL=https://ihre-n8n-instanz.com/webhook/ihr-webhook-id
   ```

3. **Ersetzen Sie die URL mit Ihrer tatsächlichen n8n Webhook-URL**

### Schritt 3: n8n Workflow konfigurieren

#### Beispiel-Workflow für E-Mail-Versand

```json
{
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "httpMethod": "POST",
        "path": "lead-form",
        "responseMode": "responseNode"
      }
    },
    {
      "name": "E-Mail senden",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "toEmail": "leads@ihre-domain.de",
        "subject": "Neuer Lead: {{ $json.name }}",
        "message": "Name: {{ $json.name }}\nE-Mail: {{ $json.email }}\nTelefon: {{ $json.phone }}\nUTM: {{ $json.utm_formatted }}"
      }
    },
    {
      "name": "CRM hinzufügen",
      "type": "n8n-nodes-base.hubspot",
      "parameters": {
        "operation": "create",
        "resource": "contact",
        "properties": {
          "firstname": "{{ $json.name }}",
          "email": "{{ $json.email }}",
          "phone": "{{ $json.phone }}"
        }
      }
    }
  ]
}
```

#### Beispiel-Workflow für Multi-Channel-Verteilung

```json
{
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook"
    },
    {
      "name": "E-Mail an Sales",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "toEmail": "sales@ihre-domain.de",
        "subject": "🔥 Neuer Lead: {{ $json.name }}"
      }
    },
    {
      "name": "Slack Benachrichtigung",
      "type": "n8n-nodes-base.slack",
      "parameters": {
        "channel": "#leads",
        "text": "🎯 Neuer Lead: {{ $json.name }} ({{ $json.email }})"
      }
    },
    {
      "name": "Google Sheets",
      "type": "n8n-nodes-base.googleSheets",
      "parameters": {
        "operation": "append",
        "values": [
          "{{ $json.timestamp }}",
          "{{ $json.name }}",
          "{{ $json.email }}",
          "{{ $json.phone }}",
          "{{ $json.utm_formatted }}"
        ]
      }
    }
  ]
}
```

## Erweiterte n8n Workflows

### 1. Lead-Scoring basierend auf UTM-Parametern

```javascript
// Code Node für Lead-Scoring
const utmSource = $input.first().json.utm_source;
const utmCampaign = $input.first().json.utm_campaign;

let leadScore = 0;

// Facebook/Instagram Leads = höhere Priorität
if (utmSource === 'facebook' || utmSource === 'instagram') {
  leadScore += 50;
}

// Spezifische Kampagnen = höhere Priorität
if (utmCampaign && utmCampaign.includes('premium')) {
  leadScore += 30;
}

// E-Mail-Domain-Check
const emailDomain = $input.first().json.email.split('@')[1];
if (['gmail.com', 'yahoo.com', 'hotmail.com'].includes(emailDomain)) {
  leadScore -= 10; // Freemail = niedrigere Priorität
}

return {
  leadScore,
  priority: leadScore > 50 ? 'high' : leadScore > 20 ? 'medium' : 'low'
};
```

### 2. Automatische Lead-Verteilung

```javascript
// Code Node für Lead-Verteilung
const utmSource = $input.first().json.utm_source;
const utmCampaign = $input.first().json.utm_campaign;

let assignedSalesRep = 'default@ihre-domain.de';

// Facebook Ads → Social Media Team
if (utmSource === 'facebook' && utmCampaign.includes('social')) {
  assignedSalesRep = 'social@ihre-domain.de';
}

// Google Ads → PPC Team
if (utmSource === 'google' && utmCampaign.includes('ppc')) {
  assignedSalesRep = 'ppc@ihre-domain.de';
}

// LinkedIn → B2B Team
if (utmSource === 'linkedin') {
  assignedSalesRep = 'b2b@ihre-domain.de';
}

return { assignedSalesRep };
```

### 3. Automatische Follow-up-Sequenz

```json
{
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook"
    },
    {
      "name": "Sofortige E-Mail",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "toEmail": "{{ $json.email }}",
        "subject": "Vielen Dank für Ihr Interesse!",
        "message": "Hallo {{ $json.name }}, vielen Dank für Ihre Anfrage..."
      }
    },
    {
      "name": "Warten 1 Stunde",
      "type": "n8n-nodes-base.wait",
      "parameters": {
        "amount": 1,
        "unit": "hours"
      }
    },
    {
      "name": "Follow-up E-Mail",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "toEmail": "{{ $json.email }}",
        "subject": "Ihre Anfrage wird bearbeitet",
        "message": "Hallo {{ $json.name }}, wir bearbeiten Ihre Anfrage..."
      }
    }
  ]
}
```

## Fehlerbehandlung

### Automatische Fehlerbehandlung

Das System behandelt folgende Fehler automatisch:

1. **n8n Webhook nicht erreichbar**
   - Fallback zu Web3Forms
   - Fehler wird geloggt

2. **n8n Webhook gibt Fehler zurück**
   - Fehler wird an Error Reporting Manager gemeldet
   - Fallback zu Web3Forms

3. **Beide Systeme fehlgeschlagen**
   - Demo-Modus wird aktiviert
   - Tracking funktioniert weiterhin

### Debug-Informationen

```javascript
// Console-Logs für Debugging
console.log('🔗 n8n Webhook URL Status:', n8nWebhookUrl ? 'Vorhanden' : 'Fehlt');
console.log('📤 Sende Daten an n8n Webhook:', webhookData);
console.log('✅ n8n Webhook erfolgreich:', result);
console.error('❌ n8n Webhook Fehler:', error);
```

## Testing

### 1. Lokales Testing

```bash
# Development Server starten
npm run dev

# Formular testen
# → Browser Console öffnen
# → Formular ausfüllen und absenden
# → Console-Logs prüfen
```

### 2. n8n Webhook Testing

```bash
# Webhook-URL direkt testen
curl -X POST https://ihre-n8n-instanz.com/webhook/ihr-webhook-id \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+49 123 456789",
    "utm_source": "test",
    "utm_medium": "manual",
    "utm_campaign": "testing"
  }'
```

### 3. Produktions-Testing

1. **Formular auf Produktions-Website testen**
2. **n8n Workflow-Execution prüfen**
3. **E-Mail-Eingang überprüfen**
4. **Tracking-Events validieren**

## Best Practices

### 1. n8n Workflow-Design

- **Immer Response senden**: Webhook sollte immer eine Antwort zurückgeben
- **Error Handling**: Fehlerbehandlung in n8n Workflows implementieren
- **Logging**: Wichtige Schritte loggen
- **Testing**: Workflows vor Produktion testen

### 2. Datenschutz

- **DSGVO-konform**: Nur notwendige Daten verarbeiten
- **Verschlüsselung**: Sensible Daten verschlüsseln
- **Löschung**: Automatische Datenlöschung nach Fristen

### 3. Performance

- **Timeout**: n8n Webhook sollte schnell antworten (< 5 Sekunden)
- **Retry**: Automatische Wiederholung bei Fehlern
- **Monitoring**: Workflow-Performance überwachen

## Troubleshooting

### Häufige Probleme

1. **Webhook antwortet nicht**
   - n8n Workflow aktiviert?
   - URL korrekt?
   - CORS-Einstellungen?

2. **Daten kommen nicht an**
   - JSON-Format prüfen
   - n8n Webhook-Node konfiguriert?
   - Workflow-Execution prüfen

3. **Fehler in n8n**
   - n8n Logs prüfen
   - Workflow-Debug-Modus aktivieren
   - Node-Konfiguration überprüfen

### Support

- **n8n Dokumentation**: https://docs.n8n.io/
- **n8n Community**: https://community.n8n.io/
- **Error Reporting**: Automatische Fehlerberichte im System
