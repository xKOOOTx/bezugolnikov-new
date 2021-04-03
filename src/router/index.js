import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/gallery/Events.vue')
  },
  {
    path: '/official',
    name: 'Official',
    component: () => import('../views/gallery/Official.vue')
  },
  {
    path: '/portrait',
    name: 'Portrait',
    component: () => import('../views/gallery/Portrait.vue')
  },
  {
    path: '/repo',
    name: 'Repo',
    component: () => import('../views/gallery/Repo.vue')
  },
  {
    path: '/studio',
    name: 'Studio',
    component: () => import('../views/gallery/Studio.vue')
  },
  {
    path: '/wedding',
    name: 'Wedding',
    component: () => import('../views/gallery/Wedding.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
