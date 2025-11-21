import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Skills from './components/pages/Skills.vue'
import Portfolio from './components/pages/Portfolio.vue'
import Contatti from './components/pages/Contatti.vue'
import Login from './components/pages/Login.vue'
import Error404 from './components/pages/Error404.vue'
import { createI18n } from 'vue-i18n'

import it from './locales/it'
import en from './locales/en'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,      
  },
  {
    path: '/chi-sono',
    name: 'chi-sono',
    component: About
  },
  {
    path: '/competenze',
    name: 'competenze',
    component: Skills
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/contatti',
    name: 'contatti',
    component: Contatti
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  { 
    path: '/:pathMatch(.*)*',
    component: Error404
  }
]

let savedLang = 'it';
if (typeof window !== 'undefined') {
  savedLang = localStorage.getItem('user-language') || 'it';
}

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: {
    it,
    en
  }
})

export const createApp = ViteSSG(
  App,
  { 
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
  },
  ({ app, router, routes, isClient, initialState }) => {
    const head = createHead()
    app.use(i18n)
    app.use(head)
  }
)
