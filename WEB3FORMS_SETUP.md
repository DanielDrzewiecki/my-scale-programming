# Web3Forms Setup Anleitung

## Übersicht

Das Kontaktformular verwendet Web3Forms als kostenlosen E-Mail-Service. Hier ist die Anleitung zur Einrichtung:

## Schritt 1: Web3Forms Access Key erstellen

1. **Gehen Sie zu https://web3forms.com/**
2. **Klicken Sie auf "Get Access Key"**
3. **Füllen Sie das Formular aus:**
   - Name: Ihr Name
   - Email: Die E-Mail-Adresse, an die die Formular-Submissions gesendet werden sollen
   - Website: Ihre Website-URL
4. **Klicken Sie auf "Get Access Key"**
5. **Kopieren Sie den generierten Access Key**

## Schritt 2: Umgebungsvariable konfigurieren

1. **Erstellen Sie eine `.env` Datei im Root-Verzeichnis des Projekts:**
   ```bash
   touch .env
   ```

2. **Fügen Sie folgende Zeile in die `.env` Datei ein:**
   ```
   VITE_WEB3FORMS_ACCESS_KEY=IHHR_ACCESS_KEY_HIER_EINFÜGEN
   ```

3. **Ersetzen Sie `IHHR_ACCESS_KEY_HIER_EINFÜGEN` mit Ihrem tatsächlichen Access Key**

## Schritt 3: E-Mail-Konfiguration

### Standard-Konfiguration:
- **E-Mail-Ziel**: Die E-Mail-Adresse, die Sie bei der Web3Forms-Registrierung angegeben haben
- **Betreff**: Automatisch generiert basierend auf Formulardaten
- **Inhalt**: Alle Formularfelder werden in der E-Mail enthalten sein

### E-Mail-Inhalt:
```
Von: [Name des Absenders]
E-Mail: [E-Mail des Absenders]
Unternehmen: [Unternehmen]
Telefon: [Telefonnummer]
Nachricht: [Nachricht]

Betreff: Neue [Landing Page Topic]-Anfrage von [Name] ([Unternehmen])
```

## Schritt 4: Testing

1. **Starten Sie den Development Server:**
   ```bash
   npm run dev
   ```

2. **Füllen Sie das Kontaktformular aus und senden Sie es ab**

3. **Überprüfen Sie:**
   - Erfolgreiche Weiterleitung zur Dankeseite
   - E-Mail-Eingang in Ihrem Postfach
   - Facebook Lead Tracking auf der Dankeseite

## Fallback-Modus

Falls kein Access Key konfiguriert ist, funktioniert das Formular im **Demo-Modus**:
- ✅ Weiterleitung zur Dankeseite funktioniert
- ✅ Facebook Lead Tracking funktioniert
- ❌ E-Mails werden nicht versendet
- ⚠️ Console-Warnung wird angezeigt

## Troubleshooting

### Problem: E-Mails werden nicht empfangen
- Überprüfen Sie den Spam-Ordner
- Stellen Sie sicher, dass der Access Key korrekt in der `.env` Datei steht
- Überprüfen Sie die E-Mail-Adresse bei Web3Forms

### Problem: Formular funktioniert nicht
- Überprüfen Sie die Browser-Konsole auf Fehler
- Stellen Sie sicher, dass die `.env` Datei im Root-Verzeichnis liegt
- Starten Sie den Development Server neu nach Änderungen an der `.env` Datei

### Problem: Weiterleitung funktioniert nicht
- Überprüfen Sie, ob React Router korrekt installiert ist
- Stellen Sie sicher, dass die Route `/thank-you` definiert ist

## Web3Forms Limits (Kostenloser Plan)

- **100 Submissions pro Monat**
- **Keine Spam-Filter**
- **Basis-E-Mail-Templates**

## Upgrade-Optionen

Für höhere Limits oder erweiterte Features:
1. **Gehen Sie zu https://web3forms.com/pricing**
2. **Wählen Sie einen bezahlten Plan**
3. **Aktualisieren Sie den Access Key in der `.env` Datei**

## Sicherheit

- Der Access Key ist öffentlich sichtbar (da es sich um eine Frontend-Anwendung handelt)
- Web3Forms bietet Spam-Schutz auf Server-Seite
- Für höhere Sicherheit können Sie einen eigenen Backend-Service verwenden
