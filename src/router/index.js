import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LinkView.vue'
import LoginView from '../views/LoginView.vue'
import ReportView from '../views/ReportView.vue'
import LinkTambah from '../views/LinkTambahView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/link',
    name: 'link',
    component: HomeView
  },
  {
    path: '/report',
    name: 'report',
    component: ReportView
  },
  {
    path: '/linkTambah',
    name: 'linkTambah',
    component: LinkTambah
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
