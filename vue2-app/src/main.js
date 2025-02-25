import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Ensure the router is included

import './styles.css'; // Ensure this import is present

export default {
    bootstrap: () => Promise.resolve(),
    mount: () => {
        const appInstance = new Vue({
            router,
            render: h => h(App),
        }).$mount('#app');
        return Promise.resolve();
    },
    unmount: () => {
        // Logic to unmount the Vue instance if needed
        return Promise.resolve();
    }
};