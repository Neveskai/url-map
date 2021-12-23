import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/main.vue'
import SignIn from '../components/forms/user-form.vue'
import Redirect from '../components/views/redirect.vue'
import Logscreen from '../components/views/logscreen.vue'
import ForgotForm from '../components/forms/forgot-form.vue'
import TableTopUrls from '../components/tables/tabletopurls.vue'
import TableMyUrls from '../components/tables/tablemyurls.vue'

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
		path: '/page/myurls',
		name: '/myurls',
		component: TableMyUrls
	},{
		path: '/page/top100',
		name: 'Top100',
		component: TableTopUrls
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
