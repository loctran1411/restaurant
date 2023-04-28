import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Vi_Trans from './assets/translation/vi_translation.json'
import En_Trans from './assets/translation/en_translation.json'

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'vn',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // language resources
        resources: {
            vn: {
                translation: Vi_Trans
            },
            en: {
                translation: En_Trans
            }
        }
    });

export default i18n;