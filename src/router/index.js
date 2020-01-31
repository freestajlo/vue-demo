import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

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
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('../components/TestComponent2.vue')
  },
  {
    path: '/test3',
    name: 'test3',
    component: () => import('../views/CrossComponentValidation.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
