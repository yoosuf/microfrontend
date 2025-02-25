import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

const routes = [
    {
        path: '/',
        redirect: '/v2', // Redirect root to the v2 route
    },
    {
        path: '/v2',
        name: 'Home',
        component: Home,
    },
    {
        path: '/v2/about',
        name: 'About',
        component: About,
    },
    {
        path: '/v2/contact',
        name: 'Contact',
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Dynamic Route Handling
router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.path} to ${to.path}`);
    next(); // Proceed to the route
});

export default router;