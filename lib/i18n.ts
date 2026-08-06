export type Locale = "en" | "ar";

export interface Localized<T = string> {
  en: T;
  ar: T;
}

export function pick<T>(field: Localized<T>, locale: Locale): T {
  return field[locale];
}
