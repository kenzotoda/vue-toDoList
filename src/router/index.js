import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // path: '/about',
      // name: 'about',
      // component: () => import('../views/AboutView.vue'),
    },
    {
      // path: '/usuarios/:id',
      // name: 'usuarios-editar',
      // component: () => import('../views/UserEditView.vue'),
    },
  ],
})

export default router
