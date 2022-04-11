import {en, fr} from './assets';
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector) //tu peux demander à détecter si tu veux, le langage de base du navigateur de la personne
  .use(initReactI18next) // outil qui te permet de faire correspondre i18n et react
  .init({
    resources: { //langues de ressources
        fr,
        en,
      },
    fallbackLng: "fr", //langue par défaut
    debug: true,

    ns: ["common"], //namespace par défaut si pas spécifié lorsque tu appelles useTranslation()
    defaultNS: "",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
