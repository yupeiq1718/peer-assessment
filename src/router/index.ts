import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('@/views/ExamplePage.vue')
  }
]

const options: RouterOptions = {
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes
}

const router: Router = createRouter(options)

export default router
