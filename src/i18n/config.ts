import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

i18n
.use(initReactI18next)
.use(new LanguageDetector(null, {lookupLocalStorage: "lng"}))
.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    hr: {
      translations: require('./locales/hr/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  detection: {
    caches: ["localStorage"]
  }
});

i18n.languages = ['en', 'en'];

export default i18n;