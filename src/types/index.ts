export interface Language {
  code: string;
  label: string;
}

export type TranslationKeys = {
  [key: string]: string;
};

export interface Translations {
  [key: string]: TranslationKeys;
}

export interface Category {
  name: string;
  phrases: string[];
}

export type ActiveTab = "main" | "favorites" | "access" | "sos" | "about";