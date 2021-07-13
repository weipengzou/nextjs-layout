/*
 * @Author: ZWP
 * @LastEditors: ZWP
 * @Description: i18n国际化，文档 https://react.i18next.com/
 */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { zh, en } from '../locales/index'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

// 数据源
const resources = {
    en: {
        translation: {
            ...en
        }
    },
    zh: {
        translation: {
            ...zh
        }
    }
};
// 初始化
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;