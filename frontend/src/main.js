import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create Vue instance
const app = createApp(App)
app.use(router)
app.mount('#app')