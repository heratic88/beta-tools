import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/roller/new',
      name: 'new-roller',
      component: () => import('../views/NewRollerView.vue')
    },
    {
      path: '/roller/:config(.*)',
      name: 'roller',
      component: () => import('../views/RollerView.vue')
    },
    {
      path: '/red-dot/new',
      name: 'new-red-dot',
      component: () => import('../views/NewRedDotView.vue')
    },
    {
      path: '/red-dot/:config(.*)',
      name: 'red-dot',
      component: () => import('../views/RedDotView.vue')
    },
  ]
})

export default router
