/**
 * Error Reporting System
 * Sendet sofort E-Mail-Benachrichtigungen bei Fehlern
 */

export interface ErrorReport {
  id: string;
  timestamp: string;
  type: 'form_submission_error' | 'email_send_error' | 'network_error' | 'validation_error' | 'n8n_webhook_error';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  details: any;
  userAgent: string;
  url: string;
  leadData?: {
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

export class ErrorReportingManager {
  private static instance: ErrorReportingManager;
  private readonly ERROR_WEBHOOK_URL = 'https://api.web3forms.com/submit';
  private readonly ERROR_ACCESS_KEY = import.meta.env.VITE_ERROR_REPORTING_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  private constructor() {}

  public static getInstance(): ErrorReportingManager {
    if (!ErrorReportingManager.instance) {
      ErrorReportingManager.instance = new ErrorReportingManager();
    }
    return ErrorReportingManager.instance;
  }

  /**
   * Sendet einen kritischen Fehler sofort per E-Mail
   */
  public async reportCriticalError(
    type: ErrorReport['type'],
    message: string,
    details: any,
    leadData?: ErrorReport['leadData']
  ): Promise<void> {
    const errorReport: ErrorReport = {
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      type,
      severity: 'critical',
      message,
      details,
      userAgent: navigator.userAgent,
      url: window.location.href,
      leadData
    };

    console.error('🚨 KRITISCHER FEHLER:', errorReport);

    // Sofortige E-Mail-Benachrichtigung
    await this.sendErrorEmail(errorReport);
  }

  /**
   * Sendet einen Fehler per E-Mail
   */
  public async reportError(
    type: ErrorReport['type'],
    message: string,
    details: any,
    severity: ErrorReport['severity'] = 'medium',
    leadData?: ErrorReport['leadData']
  ): Promise<void> {
    const errorReport: ErrorReport = {
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      type,
      severity,
      message,
      details,
      userAgent: navigator.userAgent,
      url: window.location.href,
      leadData
    };

    console.error('❌ FEHLER:', errorReport);

    // E-Mail-Benachrichtigung
    await this.sendErrorEmail(errorReport);
  }

  /**
   * Sendet eine E-Mail mit dem Fehler-Report
   */
  private async sendErrorEmail(errorReport: ErrorReport): Promise<void> {
    if (!this.ERROR_ACCESS_KEY || this.ERROR_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      console.warn('Error Reporting Access Key nicht konfiguriert. Fehler wird nicht per E-Mail gesendet.');
      return;
    }

    try {
      const emailSubject = `🚨 KRITISCHER FEHLER - ${errorReport.type.toUpperCase()} - ${new Date().toLocaleString('de-DE')}`;
      
      const emailBody = this.formatErrorEmail(errorReport);

      const response = await fetch(this.ERROR_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: this.ERROR_ACCESS_KEY,
          from_name: 'Error Reporting System',
          subject: emailSubject,
          message: emailBody,
          // Zusätzliche Felder für bessere Kategorisierung
          error_type: errorReport.type,
          error_severity: errorReport.severity,
          error_id: errorReport.id,
          timestamp: errorReport.timestamp,
          url: errorReport.url,
          user_agent: errorReport.userAgent
        })
      });

      if (response.ok) {
        console.log('✅ Fehler-Report per E-Mail gesendet:', errorReport.id);
      } else {
        console.error('❌ Fehler beim Senden des Error-Reports:', response.status);
      }
    } catch (error) {
      console.error('❌ Kritischer Fehler beim Senden des Error-Reports:', error);
    }
  }

  /**
   * Formatiert die E-Mail für den Fehler-Report
   */
  private formatErrorEmail(errorReport: ErrorReport): string {
    let emailBody = `
🚨 KRITISCHER FEHLER AUF DER WEBSITE 🚨

═══════════════════════════════════════════════════════════════

📊 FEHLER-DETAILS:
═══════════════════════════════════════════════════════════════

🆔 Fehler-ID: ${errorReport.id}
⏰ Zeitstempel: ${new Date(errorReport.timestamp).toLocaleString('de-DE')}
🔴 Schweregrad: ${errorReport.severity.toUpperCase()}
📝 Typ: ${errorReport.type}
🌐 URL: ${errorReport.url}

📋 FEHLER-MELDUNG:
${errorReport.message}

🔍 TECHNISCHE DETAILS:
${JSON.stringify(errorReport.details, null, 2)}

💻 BROWSER-INFORMATIONEN:
${errorReport.userAgent}

`;

    // Lead-Daten hinzufügen, falls vorhanden
    if (errorReport.leadData) {
      emailBody += `
👤 LEAD-DATEN (VERLOREN!):
═══════════════════════════════════════════════════════════════
Name: ${errorReport.leadData.name}
E-Mail: ${errorReport.leadData.email}
Telefon: ${errorReport.leadData.phone}

📈 UTM-PARAMETER:
═══════════════════════════════════════════════════════════════
Source: ${errorReport.leadData.utm_source || 'keine'}
Medium: ${errorReport.leadData.utm_medium || 'keine'}
Campaign: ${errorReport.leadData.utm_campaign || 'keine'}
Content: ${errorReport.leadData.utm_content || 'keine'}
Term: ${errorReport.leadData.utm_term || 'keine'}

⚠️  WICHTIG: Dieser Lead ist möglicherweise verloren gegangen!
⚠️  Sofortige Nachbearbeitung erforderlich!

`;
    }

    emailBody += `
═══════════════════════════════════════════════════════════════
🔧 SOFORTIGE MASSNAHMEN ERFORDERLICH:
═══════════════════════════════════════════════════════════════

1. ✅ Website-Status überprüfen
2. ✅ E-Mail-System testen
3. ✅ Lead-Daten sichern (falls verfügbar)
4. ✅ Problem beheben
5. ✅ Lead manuell nachbearbeiten

📞 Kontakt: Technischer Support
🌐 Website: ${window.location.origin}
⏰ Report-Zeit: ${new Date().toLocaleString('de-DE')}

═══════════════════════════════════════════════════════════════
`;

    return emailBody;
  }

  /**
   * Generiert eine eindeutige ID
   */
  private generateId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Testet das Error-Reporting-System
   */
  public async testErrorReporting(): Promise<void> {
    await this.reportError(
      'form_submission_error',
      'Test-Fehler für Error-Reporting-System',
      { test: true, timestamp: new Date().toISOString() },
      'low'
    );
  }
}

// Singleton-Instanz
export const errorReportingManager = ErrorReportingManager.getInstance();
