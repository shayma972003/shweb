"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Locale, Localized } from "@/lib/i18n";

const STORAGE_KEY = "shweb-locale";

interface LocaleContextValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  function toggleLocale() {
    setLocale(locale === "en" ? "ar" : "en");
  }

  return (
    <LocaleContext.Provider
      value={{ locale, dir: locale === "ar" ? "rtl" : "ltr", setLocale, toggleLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

export function useT<T>(field: Localized<T>): T {
  const { locale } = useLocale();
  return field[locale];
}
