import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Ensure this import is present

new Vue({
    router, // Ensure the router is included here
    render: h => h(App),
}).$mount('#app');