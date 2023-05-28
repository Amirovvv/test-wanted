import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('@/pages/MainPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router