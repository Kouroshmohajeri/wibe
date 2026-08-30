export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const STORAGE_KEY = "wibe_cookie_consent";
const CONSENT_VALID_MONTHS = 12;

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: ConsentState = JSON.parse(raw);
    const monthsElapsed =
      (Date.now() - parsed.timestamp) / (1000 * 60 * 60 * 24 * 30);

    if (monthsElapsed > CONSENT_VALID_MONTHS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(
  choices: Omit<ConsentState, "necessary" | "timestamp">,
): ConsentState {
  const state: ConsentState = {
    necessary: true,
    analytics: choices.analytics,
    marketing: choices.marketing,
    timestamp: Date.now(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(
    new CustomEvent("wibe-consent-updated", { detail: state }),
  );

  return state;
}

export function acceptAll(): ConsentState {
  return saveConsent({ analytics: true, marketing: true });
}

export function rejectAll(): ConsentState {
  return saveConsent({ analytics: false, marketing: false });
}

export function hasConsentFor(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  const consent = getStoredConsent();
  return consent ? consent[category] : false;
}
