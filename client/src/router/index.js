import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/main.vue'
import Logscreen from '../components/logscreen.vue'
import TableTop100 from '../components/tables/tabletop100.vue'
import SignIn from '../components/forms/user-form.vue'
import ForgotForm from '../components/forms/forgot-form.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },{
    path: '/login',
    name: 'Login',
    component: Logscreen
  },{
    path: '/top100',
    name: 'Top100',
    component: TableTop100 
  },{
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn
  },{
	path: '/forgot-keyword',
    name: 'forgot-keyword',
    component: ForgotForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
