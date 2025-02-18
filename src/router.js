import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Skills from './components/pages/Skills.vue';
import Portfolio from './components/pages/Portfolio.vue';
import Contatti from './components/pages/Contatti.vue';
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
      path: '/about',
      name: 'about',
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
      path: '/:pathMatch(.*)*',
      component: Error404 
    }
  ]
})
export { router };