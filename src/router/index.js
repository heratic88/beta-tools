import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ]
})

export default router
