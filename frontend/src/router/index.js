import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from '@/components/Login.vue'
import HomePage from '@/components/Home.vue'
import RegisterPage from '@/components/Register.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login',  component: LoginPage },
  { path: '/register',  component: RegisterPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
