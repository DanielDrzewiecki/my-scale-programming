# Shadcn/UI Landing Page Template

## <a href="https://ui.shadcn.com/" target="_blank">ShadcnUI</a> + <a href="https://react.dev/" target="_blank">React</a> + <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> + <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.

![shadch-landing-page](https://github.com/leoMirandaa/shadcn-landing-page/assets/61714687/3ba7b51f-9589-4541-800a-5ab7cecad1b5)

Build your React landing page effortlessly with the required sections to your project. <a href="https://shadcn-landing-page.vercel.app/" target="_blank">Live Demo</a>

## Sections

- [x] Navbar
- [x] Sidebar(mobile)
- [x] Hero
- [x] Sponsors
- [x] About
- [x] Stats
- [x] How It Works
- [x] Features
- [x] Services
- [x] Call-to-Action (CTA)
- [x] Testimonials
- [x] Team
- [x] Pricing
- [x] Newsletter
- [x] Frequently Asked Questions(FAQ)
- [x] Footer

## Features

- [x] Fully Responsive Design
- [x] User Friendly Navigation
- [x] Dark Mode
- [x] Meta tags

## How to install

1. Clone this repository:

```bash
git clone https://github.com/leoMirandaa/shadcn-landing-page.git
```

2. Go into project

```bash
cd shadcn-landing-page
```

3. Install dependencies

```bash
npm install
```

4. Konfiguration

Erstellen Sie eine `.env` Datei im Root-Verzeichnis:

```bash
# n8n Webhook Konfiguration
VITE_N8N_WEBHOOK_URL=https://ihre-n8n-instanz.com/webhook/ihr-webhook-id

# Web3Forms Konfiguration (Fallback)
VITE_WEB3FORMS_ACCESS_KEY=IHHR_ACCESS_KEY_HIER_EINFÜGEN

# Error Reporting Konfiguration (optional)
VITE_ERROR_REPORTING_KEY=IHHR_ERROR_REPORTING_KEY_HIER
```

5. Run project

```bash
npm run dev
```

## Formular-Integration

Das Kontaktformular unterstützt mehrere Datenübertragungsmethoden:

### 1. n8n Webhook (Empfohlen)
- **Priorität**: Höchste
- **Vorteile**: Vollständige Workflow-Automatisierung
- **Setup**: Siehe `N8N_WEBHOOK_SETUP.md`

### 2. Web3Forms (Fallback)
- **Priorität**: Zweite
- **Vorteile**: Einfache E-Mail-Benachrichtigungen
- **Setup**: Siehe `WEB3FORMS_SETUP.md`

### 3. Demo-Modus
- **Priorität**: Letzte
- **Vorteile**: Funktioniert ohne Konfiguration
- **Einschränkungen**: Keine E-Mail-Benachrichtigungen

## Dokumentation

- **n8n Webhook Setup**: `N8N_WEBHOOK_SETUP.md`
- **Web3Forms Setup**: `WEB3FORMS_SETUP.md`
- **UTM Tracking**: `UTM_TRACKING_README.md`
- **Error Reporting**: `ERROR_REPORTING_README.md`
- **Thank You Page**: `THANK_YOU_PAGE_README.md`
