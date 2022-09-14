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
        component: () => import('@/views/EmployeeStaff.vue'),
        children: [
          {
            path: 'create',
            name: 'StaffCreate',
            component: () => import('@/views/EmployeeStaffCreate.vue')
          },
          {
            path: 'update',
            name: 'StaffUpdate',
            component: () => import('@/views/EmployeeStaffUpdate.vue')
          }
        ]
      },
      {
        path: 'leader',
        name: 'Leader',
        component: () => import('@/views/EmployeeLeader.vue'),
        children: [
          {
            path: 'create',
            name: 'LeaderCreate',
            component: () => import('@/views/EmployeeLeaderCreate.vue')
          },
          {
            path: 'update',
            name: 'LeaderUpdate',
            component: () => import('@/views/EmployeeLeaderUpdate.vue')
          }
        ]
      },
      {
        path: 'result',
        name: 'Result',
        component: () => import('@/views/EmployeeResult.vue'),
        children: [
          {
            path: 'filter',
            name: 'ResultFilter',
            component: () => import('@/views/EmployeeResultFilter.vue')
          }
        ]
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
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/AdminUsers.vue'),
        children: [
          {
            path: 'create',
            name: 'UsersCreate',
            component: () => import('@/views/AdminUsersCreate.vue')
          },
          {
            path: 'update/:id',
            name: 'UsersUpdate',
            component: () => import('@/views/AdminUsersUpdate.vue')
          },
          {
            path: 'filter',
            name: 'UsersFilter',
            component: () => import('@/views/AdminUsersFilter.vue')
          }
        ]
      },
      {
        path: 'results',
        name: 'Results',
        component: () => import('@/views/AdminResults.vue'),
        children: [
          {
            path: 'filter',
            name: 'ResultsFilter',
            component: () => import('@/views/AdminResultsFilter.vue')
          }
        ]
      },
      {
        path: 'question',
        name: 'Question',
        component: () => import('@/views/AdminQuestion.vue'),
        children: [
          {
            path: 'create',
            name: 'QuestionCreate',
            component: () => import('@/views/AdminQuestionCreate.vue')
          },
          {
            path: 'update',
            name: 'QuestionUpdate',
            component: () => import('@/views/AdminQuestionUpdate.vue')
          },
          {
            path: 'filter',
            name: 'QuestionFilter',
            component: () => import('@/views/AdminQuestionFilter.vue')
          }
        ]
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
