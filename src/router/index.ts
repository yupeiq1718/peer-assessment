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
            path: 'new',
            name: 'StaffNew',
            component: () => import('@/views/EmployeeStaffNew.vue')
          },
          {
            path: 'edit/:id',
            name: 'StaffEdit',
            component: () => import('@/views/EmployeeStaffEdit.vue')
          }
        ]
      },
      {
        path: 'leader',
        name: 'Leader',
        component: () => import('@/views/EmployeeLeader.vue'),
        children: [
          {
            path: 'new',
            name: 'LeaderNew',
            component: () => import('@/views/EmployeeLeaderNew.vue')
          },
          {
            path: 'edit/:id',
            name: 'LeaderEdit',
            component: () => import('@/views/EmployeeLeaderEdit.vue')
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
        redirect: '/admin/users'
      },
      {
        path: 'system',
        name: 'System',
        component: () => import('@/views/AdminSystem.vue')
      },
      {
        path: 'warning',
        name: 'Warning',
        component: () => import('@/views/AdminWarning.vue')
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/AdminUsers.vue'),
        children: [
          {
            path: 'new',
            name: 'UsersNew',
            component: () => import('@/views/AdminUsersNew.vue')
          },
          {
            path: 'edit/:id',
            name: 'UsersEdit',
            component: () => import('@/views/AdminUsersEdit.vue')
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
        path: 'question/:roleId',
        name: 'Question',
        component: () => import('@/views/AdminQuestion.vue'),
        children: [
          {
            path: 'new',
            name: 'QuestionNew',
            component: () => import('@/views/AdminQuestionNew.vue')
          },
          {
            path: 'edit/:id',
            name: 'QuestionEdit',
            component: () => import('@/views/AdminQuestionEdit.vue')
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
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/'
  }
]

const options: RouterOptions = {
  history: (import.meta.env.VITE_APP_ROUTER_MODE === 'history') ? createWebHistory(import.meta.env.VITE_APP_BASE_URL) : createWebHashHistory(import.meta.env.VITE_APP_BASE_URL),
  routes
}

const router: Router = createRouter(options)

export default router
