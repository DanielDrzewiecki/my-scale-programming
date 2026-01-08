# n8n Webhook Konfiguration

## Ihre n8n Webhook-URL

```
https://n8n-r88j.onrender.com/webhook/5e37efb6-de3c-41d7-b584-28fc4143f74a
```

## Setup-Anleitung

### 1. .env-Datei erstellen

Erstellen Sie eine `.env` Datei im Root-Verzeichnis des Projekts:

```bash
# n8n Webhook Konfiguration
VITE_N8N_WEBHOOK_URL=https://n8n-r88j.onrender.com/webhook/5e37efb6-de3c-41d7-b584-28fc4143f74a

# Web3Forms Konfiguration (Fallback - optional)
# VITE_WEB3FORMS_ACCESS_KEY=IHHR_ACCESS_KEY_HIER_EINFÜGEN

# Error Reporting Konfiguration (optional)
# VITE_ERROR_REPORTING_KEY=IHHR_ERROR_REPORTING_KEY_HIER
```

### 2. Development Server neu starten

```bash
npm run dev
```

### 3. Webhook testen

Sie können den Webhook direkt testen:

```bash
curl -X POST https://n8n-r88j.onrender.com/webhook/5e37efb6-de3c-41d7-b584-28fc4143f74a \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+49 123 456789",
    "utm_source": "test",
    "utm_medium": "manual",
    "utm_campaign": "testing",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "url": "https://ihre-domain.de/",
    "user_agent": "Mozilla/5.0 (Test Browser)",
    "landing_page_topic": "Marketing Services",
    "utm_formatted": "test > manual > testing"
  }'
```

## Erwartete Datenstruktur

Ihr n8n Webhook wird folgende JSON-Daten empfangen:

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
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  "landing_page_topic": "Marketing Services",
  
  "utm_formatted": "facebook > social > q1-2024 > anzeige-1 > marketing"
}
```

## n8n Workflow-Beispiele

### 1. Einfacher E-Mail-Workflow

```json
{
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "httpMethod": "POST",
        "path": "5e37efb6-de3c-41d7-b584-28fc4143f74a",
        "responseMode": "responseNode"
      }
    },
    {
      "name": "E-Mail senden",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "toEmail": "leads@ihre-domain.de",
        "subject": "🔥 Neuer Lead: {{ $json.name }}",
        "message": "Name: {{ $json.name }}\nE-Mail: {{ $json.email }}\nTelefon: {{ $json.phone }}\nUTM: {{ $json.utm_formatted }}\nZeit: {{ $json.timestamp }}"
      }
    },
    {
      "name": "Response",
      "type": "n8n-nodes-base.respondToWebhook",
      "parameters": {
        "respondWith": "json",
        "responseBody": "{\"success\": true, \"message\": \"Lead received\"}"
      }
    }
  ]
}
```

### 2. Multi-Channel-Workflow

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
        "subject": "🎯 Neuer Lead: {{ $json.name }}",
        "message": "Neuer Lead eingegangen:\n\nName: {{ $json.name }}\nE-Mail: {{ $json.email }}\nTelefon: {{ $json.phone }}\nUTM: {{ $json.utm_formatted }}\nZeit: {{ $json.timestamp }}"
      }
    },
    {
      "name": "Slack Benachrichtigung",
      "type": "n8n-nodes-base.slack",
      "parameters": {
        "channel": "#leads",
        "text": "🎯 Neuer Lead: {{ $json.name }} ({{ $json.email }}) - UTM: {{ $json.utm_formatted }}"
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
    },
    {
      "name": "Response",
      "type": "n8n-nodes-base.respondToWebhook",
      "parameters": {
        "respondWith": "json",
        "responseBody": "{\"success\": true, \"message\": \"Lead processed\"}"
      }
    }
  ]
}
```

### 3. Erweiterter Workflow mit Lead-Scoring

```json
{
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook"
    },
    {
      "name": "Lead-Scoring",
      "type": "n8n-nodes-base.code",
      "parameters": {
        "jsCode": "const utmSource = $input.first().json.utm_source;\nconst utmCampaign = $input.first().json.utm_campaign;\nconst email = $input.first().json.email;\n\nlet leadScore = 0;\n\n// Facebook/Instagram Leads = höhere Priorität\nif (utmSource === 'facebook' || utmSource === 'instagram') {\n  leadScore += 50;\n}\n\n// Spezifische Kampagnen = höhere Priorität\nif (utmCampaign && utmCampaign.includes('premium')) {\n  leadScore += 30;\n}\n\n// E-Mail-Domain-Check\nconst emailDomain = email.split('@')[1];\nif (['gmail.com', 'yahoo.com', 'hotmail.com'].includes(emailDomain)) {\n  leadScore -= 10; // Freemail = niedrigere Priorität\n}\n\nconst priority = leadScore > 50 ? 'high' : leadScore > 20 ? 'medium' : 'low';\n\nreturn {\n  leadScore,\n  priority,\n  originalData: $input.first().json\n};"
      }
    },
    {
      "name": "E-Mail basierend auf Priorität",
      "type": "n8n-nodes-base.if",
      "parameters": {
        "conditions": {
          "string": [
            {
              "value1": "={{ $json.priority }}",
              "operation": "equal",
              "value2": "high"
            }
          ]
        }
      }
    },
    {
      "name": "Hohe Priorität E-Mail",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "toEmail": "priority@ihre-domain.de",
        "subject": "🔥 HOHE PRIORITÄT - Lead: {{ $json.originalData.name }}",
        "message": "Hohe Priorität Lead eingegangen!\n\nName: {{ $json.originalData.name }}\nE-Mail: {{ $json.originalData.email }}\nTelefon: {{ $json.originalData.phone }}\nUTM: {{ $json.originalData.utm_formatted }}\nScore: {{ $json.leadScore }}\nPriorität: {{ $json.priority }}"
      }
    },
    {
      "name": "Normale E-Mail",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "toEmail": "leads@ihre-domain.de",
        "subject": "Neuer Lead: {{ $json.originalData.name }}",
        "message": "Neuer Lead eingegangen:\n\nName: {{ $json.originalData.name }}\nE-Mail: {{ $json.originalData.email }}\nTelefon: {{ $json.originalData.phone }}\nUTM: {{ $json.originalData.utm_formatted }}\nScore: {{ $json.leadScore }}\nPriorität: {{ $json.priority }}"
      }
    },
    {
      "name": "Response",
      "type": "n8n-nodes-base.respondToWebhook",
      "parameters": {
        "respondWith": "json",
        "responseBody": "{\"success\": true, \"message\": \"Lead processed with priority {{ $json.priority }}\"}"
      }
    }
  ]
}
```

## Testing

### 1. Lokales Testing

```bash
# Development Server starten
npm run dev

# Browser öffnen und Formular testen
# → Browser Console öffnen (F12)
# → Formular ausfüllen und absenden
# → Console-Logs prüfen
```

### 2. Webhook direkt testen

```bash
# Test-Request senden
curl -X POST https://n8n-r88j.onrender.com/webhook/5e37efb6-de3c-41d7-b584-28fc4143f74a \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+49 123 456789",
    "utm_source": "test",
    "utm_medium": "manual",
    "utm_campaign": "testing",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "url": "https://ihre-domain.de/",
    "user_agent": "Mozilla/5.0 (Test Browser)",
    "landing_page_topic": "Marketing Services",
    "utm_formatted": "test > manual > testing"
  }'
```

### 3. Erwartete Antwort

```json
{
  "success": true,
  "message": "Lead received"
}
```

## Wichtige Hinweise

1. **CORS-Einstellungen**: Stellen Sie sicher, dass Ihr n8n Webhook CORS-Requests von Ihrer Domain akzeptiert
2. **Response-Format**: Der Webhook sollte immer eine JSON-Antwort zurückgeben
3. **Timeout**: Der Webhook sollte innerhalb von 5 Sekunden antworten
4. **Error Handling**: Implementieren Sie Fehlerbehandlung in Ihrem n8n Workflow

## Nächste Schritte

1. **.env-Datei erstellen** mit der Webhook-URL
2. **Development Server neu starten**
3. **n8n Workflow erstellen** (siehe Beispiele oben)
4. **Formular testen**
5. **Produktions-Deployment**
