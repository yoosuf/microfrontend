import { registerApplication, start } from 'single-spa';
import Vue from 'vue';
import App from './App.vue';

console.log('Vue 2 Application Loaded');

registerApplication({
    name: '@yoosuf/vue2-app',
    app: () => {
        console.log('Loading Vue 2 App');
        return System.import('http://localhost:3001/primary.bundle.js') 
            .then(() => {
                console.log('Vue 2 App loaded');
                return Promise.resolve();
            });
    },
    activeWhen: ['/'], // Vue 2 app will be active on the root path
});

registerApplication({
    name: '@yoosuf/vue3-app',
    app: () => {
        console.log('Loading Vue 3 App');
        return System.import('http://localhost:3002/v2/bundle.js').then(application => {
            console.log('Vue 3 App loaded:', application);
            const { createApp } = application.default; // Ensure this is correctly accessing createApp
            return {
                bootstrap: () => Promise.resolve(),
                mount: (props) => {
                    console.log('Mounting Vue 3 App');
                    return new Promise((resolve) => {
                        const appInstance = createApp(App); // Ensure App is imported correctly
                        appInstance.mount('#app');
                        resolve();
                    });
                },
                unmount: () => {
                    console.log('Unmounting Vue 3 App');
                    // Logic to unmount the Vue instance if needed
                    return Promise.resolve();
                }
            };
        });
    },
    activeWhen: ['/v2'], // Vue 3 app will be active on the /v2 path
});

start();