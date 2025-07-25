import { createApp } from 'vue';
import App from './App.vue';
import { router } from "./router";
import {createHead} from '@vueuse/head';
import { createI18n } from 'vue-i18n'

import it from './locales/it'
import en from './locales/en'

const savedLang = localStorage.getItem('user-language') || 'it';

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: {
    it,
    en
  }
})

createApp(App).use(i18n).use(router).use(createHead()).mount('#app');
