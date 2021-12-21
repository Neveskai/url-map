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