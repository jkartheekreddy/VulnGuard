import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index';

// Initialize Vue Router
Vue.use(VueRouter);

// Create Vue instance
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
