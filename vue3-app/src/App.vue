<template>
  <div id="app">
    <nav>
      <router-link to="/v2">Home</router-link>
      <router-link to="/v2/about">About</router-link>
      <router-link to="/v2/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import router from './router'; // Ensure this import is present

export default defineComponent({
  name: 'App',
  setup() {
    return {
      router,
    };
  },
});
</script>

<style>
/* Add your styles here */
</style>