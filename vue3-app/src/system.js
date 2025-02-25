import { registerApplication, start } from 'single-spa';
import Vue from 'vue';
import App from './App.vue';

console.log('SHELL is Loaded');

registerApplication({
    name: '@yoosuf/vue2-app',
    app: () => {
        console.log('Loading Vue 2 App');
        return System.import('http://localhost:3001/primary.bundle.js').then(application => {
            console.log('Vue 2 App loaded:', application);
            const { createApp } = application.default;

            let appInstance; // Declare appInstance in the outer scope

            return {
                bootstrap: () => Promise.resolve(),
                mount: () => {
                    appInstance = createApp(App); // Create app instance here
                    appInstance.mount('#app');
                    return Promise.resolve();
                },
                unmount: () => {
                    console.log('Unmounting Vue 2 App');
                    return appInstance.unmount(); // Call unmount on the app instance
                },
            };
        });
    },
    activeWhen: ['/'], // Vue 2 app will be active on the root path
});

// Register Vue 3 application
registerApplication({
    name: '@yoosuf/vue3-app',
    app: () => {
        console.log('Loading Vue 3 App');
        return System.import('./v2/primary.bundle.js').then(application => {
            console.log('Vue 3 App loaded:', application);
            const { createApp } = application.default;

            let appInstance; // Declare appInstance in the outer scope

            return {
                bootstrap: () => Promise.resolve(),
                mount: () => {
                    // Unmount Vue 2 app before mounting Vue 3 app
                    return unmountVue2App().then(() => {
                        appInstance = createApp(App); // Create app instance here
                        appInstance.mount('#app');
                        return Promise.resolve();
                    });
                },
                unmount: () => {
                    console.log('Unmounting Vue 3 App');
                    return appInstance.unmount(); // Call unmount on the app instance
                },
            };
        });
    },
    activeWhen: ['/v2'], // Vue 3 app will be active on the /v2 path
});

// Function to unmount Vue 2 App
function unmountVue2App() {
    return new Promise((resolve) => {
        const vue2App = document.getElementById('app');
        if (vue2App) {
            vue2App.innerHTML = '';
            resolve();
        } else {
            resolve(); // Resolve if Vue 2 app is not found
        }
    });
};

// Start single-spa
start();