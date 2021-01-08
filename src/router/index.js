import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'musicPlay',
    component: () => import(/* webpackChunkName: "play" */ '../views/music/play.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "my" */ '../views/my/index.vue')
  },
  {
    path:'/waterfall',
    name:'waterfall',
    component:()=>import(/*webpackChunkName:"waterfall"*/ '../views/waterfall/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
