<template>
	<section id="app">
		<div id="bgapp"></div>
		<header-vue title="URL SHORTENER"></header-vue>
		<router-view></router-view>
	</section>
</template>
<script>
	import headerVue from './components/menus/header.vue'
	import urlsProvider from './provider/url.provider.js'
	import userProvider from './provider/user.provider.js'
	export default {
		components: {
			'headerVue': headerVue
		},
		computed: {
			id(){ return this.$store.state.user.id; },
			sync(){ return this.$store.state.sync; }
		},
		watch: {
			'sync.myurls': {
				handler(val){
					if(val) this.getMyUrls(this.id);
				}
			},
			'sync.topurls': {
				handler(val){
					if(val) this.getTopUrls();
				}
			}
		},
		methods: {
			getMyUrls(id){
				var me = this;
				urlsProvider.getMyUrls(me.$store, id);
			},
			getTopUrls(){
				var me = this;
				urlsProvider.getTopUrls(me.$store);
			},
			checkLogIn(){
				var me = this;
				var token = userProvider.getCookieToken();
				if (!token) return false;
				userProvider.checkLogin(token).then( user => {
					if(!user) return false;
					userProvider.setUser(me.$store, user);
				})
			},
		},
		created(){
			this.checkLogIn();
			this.getTopUrls();
		}
	}
</script>
<style scoped>
	#bgapp {
		background: linear-gradient(-15deg, #ccc, #f9f9f9);
		opacity: 1; 
		position: fixed;
		width: 100vw; 
		height: 100%; 
		z-index: -1; 
		left: 0;
		top: 0;
	}
	#app { 
		width: 100%;
		height: 100vh;
	}
	section { padding: 0px; }
</style>