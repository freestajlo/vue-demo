import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue')
  }
  ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
