import { createMemoryHistory, createRouter } from 'vue-router'

import LoginPage from '@/components/Login.vue'

const routes = [
  { path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
