import { useEffect, useState, useCallback } from "react";

const KEY = "swiftcargo:tracking-history";

export type HistoryEntry = { id: string; ts: number };

function read(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((e) => e && typeof e.id === "string" && typeof e.ts === "number");
  } catch {
    return [];
  }
}

export function useTrackingHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    setHistory(read());
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setHistory(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const push = useCallback((id: string) => {
    const normalized = id.trim().toUpperCase();
    if (!normalized) return;
    const next = [{ id: normalized, ts: Date.now() }, ...read().filter((e) => e.id !== normalized)].slice(0, 10);
    window.localStorage.setItem(KEY, JSON.stringify(next));
    setHistory(next);
  }, []);

  const clear = useCallback(() => {
    window.localStorage.removeItem(KEY);
    setHistory([]);
  }, []);

  const remove = useCallback((id: string) => {
    const next = read().filter((e) => e.id !== id);
    window.localStorage.setItem(KEY, JSON.stringify(next));
    setHistory(next);
  }, []);

  return { history, push, clear, remove };
}
