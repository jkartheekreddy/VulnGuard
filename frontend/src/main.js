import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

// Create Vue instance
createApp(App)
  .use(router)
  .mount('#app')