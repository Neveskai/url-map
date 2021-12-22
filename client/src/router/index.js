import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/main.vue'
import SignIn from '../components/forms/user-form.vue'
import Redirect from '../components/redirect.vue'
import Logscreen from '../components/logscreen.vue'
import ForgotForm from '../components/forms/forgot-form.vue'
import TableTop100 from '../components/tables/tabletop100.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },{
    path: '/:code',
    name: 'url-redirect',
    component: Redirect
  },{
    path: '/page/login',
    name: '/Login',
    component: Logscreen
  },{
    path: '/page/top100',
    name: 'Top100',
    component: TableTop100 
  },{
    path: '/page/sign-in',
    name: 'sign-in',
    component: SignIn
  },{
	path: '/page/forgot-keyword',
    name: 'forgot-keyword',
    component: ForgotForm
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
