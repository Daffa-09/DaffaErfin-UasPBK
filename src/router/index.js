import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/products/:id', component: ProductDetail, props: true },
  { path: '/cart', component: Cart },
  { path: '/admin', component: Admin },
   { path: '/login', component: Login } 
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
