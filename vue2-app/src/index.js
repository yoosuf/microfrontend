import { registerApplication, start } from 'single-spa';

registerApplication({
    name: '@my-org/vue2-app',
    app: () => System.import('http://localhost:3001/bundle.js'),
    activeWhen: ['/'], // Vue 2 app will be active on the root path
});

registerApplication({
    name: '@my-org/vue3-app',
    app: () => System.import('http://localhost:3002/bundle.js'),
    activeWhen: ['/v2'], // Vue 3 app will be active on the /v3 path
});

start();