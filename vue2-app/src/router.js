import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history', // Use history mode for cleaner URLs
    routes: [
        {
            path: '/',
            beforeEnter: (to, from, next) => {
                // Load the Vue 1 application using SystemJS
                System.import('http://localhost:3001/bundle.js') // Adjust this URL to point to your Vue 1 app
                    .then(() => {
                        next(); // Proceed to load the Vue 1 app
                    })
                    .catch(err => {
                        console.error('Error loading Vue 1 app:', err);
                        next(false); // Cancel navigation if there's an error
                    });
            },
        },
        {
            path: '/v2',
            beforeEnter: (to, from, next) => {
                // Load the Vue 3 application using SystemJS
                System.import('http://localhost:3002/bundle.js') // Adjust this URL to point to your Vue 3 app
                    .then(() => {
                        next(); // Proceed to load the Vue 3 app
                    })
                    .catch(err => {
                        console.error('Error loading Vue 3 app:', err);
                        next(false); // Cancel navigation if there's an error
                    });
            },
        },
        // Other routes can be added here
    ],
});