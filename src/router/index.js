import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Saves from '../views/Saves.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/saved-shapes',
    name: 'Saves',
    component: Saves
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
