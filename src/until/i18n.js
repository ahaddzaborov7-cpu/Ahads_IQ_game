import i18next from "i18next"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

i18next
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ["translate"],
    fallbackLng: "tj", 
    debug: true,

    detection: {
      order: ["querystring", "cookie"], 
      caches: ["cookie"]
    },

    interpolation: {
      escapeValue: false
    }
  })
