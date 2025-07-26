/**
 * 国际化配置文件
 * 配置i18next和语言资源
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './locales/zh.json';
import en from './locales/en.json';

/**
 * 初始化i18next配置
 */
i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        translation: zh
      },
      en: {
        translation: en
      }
    },
    lng: 'zh', // 默认语言
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
