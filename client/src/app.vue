<template>
	<section id="app">
		<header-vue title="URL SHORTENER"></header-vue>
		<div id="bgapp"></div>
		<router-view></router-view>
	</section>
</template>
<script>
	import headerVue from './components/menus/header.vue'
	import urlsProvider from './provider/url.provider.js'
	export default {
		components: {
			'headerVue': headerVue
		},
		computed: {
			id(){ return this.$store.state.user.id; },
			table: {
				get()	{ return this.$store.state.tablemyurls; },
				set(obj){ this.$store.commit('updateObjAttr', { target: 'tablemyurls', data: obj, attr: 'data' }); }
			},
			sync(){ return this.$store.state.sync; }
		},
		watch: {
			id: {
				handler(id){
					if(id != 0) this.getMyUrls(id);
				}
			},
			'sync.myurls': {
				handler(val){
					if(val) {
						var id = this.id;
						this.getMyUrls(id);
						this.$store.commit('updateObjAttr', { target: 'sync', attr: 'myurls', data: false });
					}
				}
			}
		},
		methods: {
			getMyUrls(id){
				var me = this;
				var url = me.$store.state.api_dir + '/url/myurls';
				urlsProvider.getMyUrls(url, id).then( urls => {
					me.table = urls;
				})
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