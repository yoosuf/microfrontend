import { registerApplication, start } from 'single-spa';

registerApplication({
    name: '@my-org/vue2-app',
    app: () => System.import('http://localhost:3001/bundle.js'),
    activeWhen: ['/']
});

registerApplication({
    name: '@my-org/vue3-app',
    app: () => System.import('http://localhost:3002/bundle.js'),
    activeWhen: ['/v2']
});

start();
