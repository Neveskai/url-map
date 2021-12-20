<template>
	<section id="app">
		<header-vue title="URL SHORTENER"></header-vue>
		<div id="bgapp"></div>
		<router-view></router-view>
	</section>
</template>
<script>
	import headerVue from './components/menus/header.vue';
	export default {
		components: {
			'headerVue': headerVue
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