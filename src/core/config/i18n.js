/*See further doc here
https://www.i18next.com/overview/api#init
and tutorial
https://www.youtube.com/watch?v=UBTlJydjduo
*/

import i18next from 'i18next';
import Backend from 'i18next-http-backend'; //this one picks up the languages from public/locales/{lang}/translations.json
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const options = {
    // order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    order: ['navigator'],
    lookupLocalStorage: 'lng'
  }

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['it', 'es', 'pt'], // List all your supported languages here
        fallbackLng: 'es',
        detection: options,
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;