
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'dashboard', component: () => import('pages/Dashboard.vue') }]
  },
  {
    path: '/kpis',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'kpis', component: () => import('pages/KPIs.vue') }]
  },
  {
    path: '/account-info',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'account-info', component: () => import('pages/Account-Info.vue') }]
  },
  {
    path: '/records',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'records', component: () => import('pages/Records.vue') }]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'login', component: () => import('pages/Login.vue') }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
