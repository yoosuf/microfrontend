import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './styles.css'

console.log('Initializing Vue 3 Application');

const app = createApp(App)
    .use(router) // Use the router
    .mount('#app');

if (process.env.NODE_ENV === 'development') {
    console.log('Vue Devtools enabled');
}