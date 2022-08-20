import { createRouter, createWebHistory, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('@/views/EmployeePage.vue'),
    children: [
      {
        path: '',
        redirect: '/employee/staff'
      },
      {
        path: 'staff',
        name: 'Staff',
        component: () => import('@/views/EmployeeStaff.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/AdminPage.vue'),
    children: [
      {
        path: '',
        redirect: '/admin/list'
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/AdminList.vue')
      }
    ]
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('@/views/ExamplePage.vue')
  }
]

const options: RouterOptions = {
  history: (import.meta.env.VITE_APP_ROUTER_MODE === 'history') ? createWebHistory(import.meta.env.VITE_APP_BASE_URL) : createWebHashHistory(import.meta.env.VITE_APP_BASE_URL),
  routes
}

const router: Router = createRouter(options)

export default router
