import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Skills from './components/pages/Skills.vue';
import Portfolio from './components/pages/Portfolio.vue';
import Contatti from './components/pages/Contatti.vue';
import Login from './components/pages/Login.vue';
import Error404 from './components/pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes:[
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
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})
export { router };