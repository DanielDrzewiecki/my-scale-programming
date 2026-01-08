/**
 * UTM Parameter Tracking Utility
 * Erfasst und speichert UTM-Parameter für Lead-Tracking
 */

export interface UTMParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

/**
 * Extrahiert UTM-Parameter aus der aktuellen URL
 */
export function extractUTMParameters(): UTMParameters {
  const urlParams = new URLSearchParams(window.location.search);
  
  const utmParams: UTMParameters = {};
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  
  utmKeys.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      utmParams[key as keyof UTMParameters] = value;
    }
  });
  
  console.log('🔍 UTM-Parameter aus URL extrahiert:', utmParams);
  console.log('🔍 Aktuelle URL:', window.location.href);
  console.log('🔍 URL Search:', window.location.search);
  
  return utmParams;
}

/**
 * Speichert UTM-Parameter im sessionStorage
 */
export function saveUTMParameters(params: UTMParameters): void {
  if (Object.keys(params).length > 0) {
    sessionStorage.setItem('utm_parameters', JSON.stringify(params));
    console.log('UTM Parameters gespeichert:', params);
  }
}

/**
 * Lädt gespeicherte UTM-Parameter aus dem sessionStorage
 */
export function loadUTMParameters(): UTMParameters {
  const stored = sessionStorage.getItem('utm_parameters');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Fehler beim Laden der UTM-Parameter:', e);
      return {};
    }
  }
  return {};
}

/**
 * Initialisiert UTM-Tracking beim Seitenbesuch
 * Sollte beim App-Start aufgerufen werden
 */
export function initializeUTMTracking(): UTMParameters {
  const currentParams = extractUTMParameters();
  
  console.log('🚀 UTM-Tracking initialisiert');
  console.log('🚀 Aktuelle Parameter:', currentParams);
  
  // Wenn neue UTM-Parameter vorhanden sind, speichere sie
  if (Object.keys(currentParams).length > 0) {
    saveUTMParameters(currentParams);
    console.log('✅ Neue UTM-Parameter gespeichert');
    return currentParams;
  }
  
  // Sonst lade gespeicherte Parameter
  const storedParams = loadUTMParameters();
  console.log('📂 Gespeicherte UTM-Parameter geladen:', storedParams);
  return storedParams;
}

/**
 * Gibt alle verfügbaren UTM-Parameter zurück
 * (aktuelle oder gespeicherte)
 */
export function getUTMParameters(): UTMParameters {
  const currentParams = extractUTMParameters();
  console.log('📊 getUTMParameters aufgerufen');
  console.log('📊 Aktuelle Parameter:', currentParams);
  
  if (Object.keys(currentParams).length > 0) {
    console.log('✅ Aktuelle Parameter verwendet');
    return currentParams;
  }
  
  const storedParams = loadUTMParameters();
  console.log('📂 Gespeicherte Parameter verwendet:', storedParams);
  return storedParams;
}

/**
 * Erstellt einen lesbaren String aus den UTM-Parametern
 */
export function formatUTMParameters(params: UTMParameters): string {
  return Object.entries(params)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ') || 'Keine UTM-Parameter';
}

