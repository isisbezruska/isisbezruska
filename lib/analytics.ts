/**
 * Medição — ponto único para o Marcelo colar os IDs reais.
 *
 * Não coloque IDs fictícios de GTM, GA4 ou Google Ads.
 * Quando existirem, preencha os campos abaixo e descomente a injeção
 * correspondente em `app/layout.tsx`.
 *
 * Parâmetros de campanha (utm_*, gclid, gbraid, wbraid) são guardados em
 * sessionStorage na chave `recar_session_params` e não são acrescentados
 * ao texto do WhatsApp.
 */
export const analyticsIds = {
  gtmId: "",
  ga4MeasurementId: "",
  googleAdsId: "",
} as const;

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

export const ATTRIBUTION_STORAGE_KEY = "recar_session_params";

type DataLayerPayload = {
  event: string;
  contact_method?: "whatsapp" | "phone";
};

declare global {
  interface Window {
    dataLayer?: DataLayerPayload[];
  }
}

export function ensureDataLayer() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
}

export function trackWhatsAppClick() {
  ensureDataLayer();
  window.dataLayer?.push({
    event: "whatsapp_click",
    contact_method: "whatsapp",
  });
}

export function trackPhoneClick() {
  ensureDataLayer();
  window.dataLayer?.push({
    event: "phone_click",
    contact_method: "phone",
  });
}

export function trackDirectionsClick() {
  ensureDataLayer();
  window.dataLayer?.push({ event: "directions_click" });
}

export function captureAttribution() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  let stored: Record<string, string> = {};

  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (raw) stored = JSON.parse(raw) as Record<string, string>;
  } catch {
    stored = {};
  }

  let changed = false;
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) {
      stored[key] = value;
      changed = true;
    }
  }

  if (!changed) return;

  try {
    window.sessionStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(stored),
    );
  } catch {
    // sessionStorage pode estar bloqueado; a navegação segue sem gravar.
  }
}
