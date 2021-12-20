<template>
	<section>
		<div id="bgapp"></div>
		<router-view v-if="user.id != undefined" style="z-index: 2;"></router-view>
		<user-auth v-else></user-auth>
	</section>
</template>
<script>
	import userAuth from './components/logscreen.vue';
	import userService from './services/user.service.js';

	export default {
		components: {
			'userAuth' : userAuth
		},
		computed: {
			user: {
				get()	{ return this.$store.state.user; },
				set(obj){ 
					this.$store.commit('setObject', { target: 'user', data: obj }); 
				}
			},
			reqs: {
				get() { return this.$store.state.reqs; },
				set(arr)	{ 
					this.$store.commit('setArray', { target:'reqs', data: arr }); 
				}
			},
			api_dir() { return this.$store.state.api_dir; }
		},
		methods: {
			userAuth(login, senha) {
				const url = this.api_dir+'/user/auth';
				userService.userAuth(url, login, senha);
			},
			logout(){
				userService.logout();
			},
			createUser(arr){
				userService.createUser(arr)
			},
			goBack(){
				if(window.history.length == 0){
					this.$router.push({ path: 'home' });
				} else {
					this.$router.go(-1);
				}
			}
		}
	}
</script>
<style scoped>
	#bgapp {
		background: linear-gradient(-15deg, #00a25b, #00d99d);
		opacity: 1; 
		position: fixed;
		width: 100vw; 
		height: 100%; 
		z-index: -1; 
		left: 0;
		top: 0;
	}
	section { padding: 0px; }
</style>