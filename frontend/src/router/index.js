import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from '@/components/Login.vue'
import HomePage from '@/components/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
