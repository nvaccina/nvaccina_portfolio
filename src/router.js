import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Contacts from './components/pages/Contacts.vue';
import Portfolio from './components/pages/Portfolio.vue';
import Skills from './components/pages/Skills.vue';


const router = createRouter({
    history: createWebHistory(),
    //aggiungo una classe per i colori del click al router
    linkExactActiveClass: 'active',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },

        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
    ]


});

export { router }