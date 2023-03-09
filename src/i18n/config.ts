import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// This file is used to share reused values in the i18n configs of
// src/i18n/server.ts, src/entry.server.ts, src/entry.client.ts
export const allNameSpaces = ["common", "home"];
export const defaultNamespace = "common";
export const fallbackLanguage = "en";
export const supportedLanguages = ["en", "it"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Basic shared configs
    supportedLngs: supportedLanguages,
    defaultNS: defaultNamespace,
    fallbackLng: fallbackLanguage,
    // This function detects the namespaces your routes rendered while SSR use
    // and pass them here to load the translations
    ns: allNameSpaces,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
