import { createApp } from 'vue'
import router from './router/router'
import store from './store/store'
import App from './app.vue'
	
createApp(App).use(store).use(router).mount('#app')
