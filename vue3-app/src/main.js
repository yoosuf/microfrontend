import { createApp } from 'vue';
import App from './App.vue';

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(App);
    app.mount('#app'); // Ensure #app exists in the HTML
});