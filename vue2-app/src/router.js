import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // Use history mode for cleaner URLs
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    // {
    //   path: "/v2",
    //   beforeEnter: (to, from, next) => {
    //     console.log("Attempting to load Vue 3 application");
    //     console.log(`Navigating from ${from.path} to ${to.path}`); // Log the navigation paths
    //     // Load the Vue 3 application using SystemJS
    //     System.import("http://localhost:3002/v2/primary.bundle.js") // Adjust this URL to point to your Vue 3 app
    //       .then(() => {
    //         console.log("Vue 3 application loaded successfully");
    //         next(); // Proceed to load the Vue 3 app
    //       })
    //       .catch((err) => {
    //         console.error("Error loading Vue 3 app:", err);
    //         next(false); // Cancel navigation if there's an error
    //       });
    //   },
    // },
    // Other routes can be added here
  ],
});
