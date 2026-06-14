import { useEffect, useState, useCallback } from "react";

const KEY = "swiftcargo:cookie-consent";

export type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  ts: number;
};

function read(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

let listeners = new Set<() => void>();

export function useCookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setConsent(read());
    const l = () => {
      setConsent(read());
    };
    listeners.add(l);
    return () => { listeners.delete(l); };
  }, []);

  const save = useCallback((c: Omit<Consent, "ts" | "necessary">) => {
    const full: Consent = { necessary: true, ts: Date.now(), ...c };
    window.localStorage.setItem(KEY, JSON.stringify(full));
    setConsent(full);
    listeners.forEach((f) => f());
  }, []);

  const acceptAll = useCallback(() => save({ analytics: true, marketing: true, preferences: true }), [save]);
  const rejectAll = useCallback(() => save({ analytics: false, marketing: false, preferences: false }), [save]);

  return { consent, open, setOpen, save, acceptAll, rejectAll };
}

// Global trigger so footer button can open the preferences dialog
let openTrigger: (() => void) | null = null;
export const registerCookieOpen = (fn: () => void) => { openTrigger = fn; };
export const openCookiePreferences = () => openTrigger?.();
