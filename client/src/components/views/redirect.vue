<template>
	<section>
		<div class="col-12">
			<h2 class="ml-3"> Short not found </h2>
		</div>
	</section>
</template>
<script>
	import urlsProvider from './../../provider/url.provider.js';
	export default {
		computed: {
			shorturl(){ return this.$store.state.shortUrl; },
		},
		methods: {
			redirect(){
				const shortUrl = this.$route.params.code;
				// Add Local Cache to Request
				urlsProvider.getUrl(shortUrl).then( resp => {
					if(resp.error != undefined) {
						return resp.error;
					} else {
						window.location.href = resp.url;
					}
				});
			}
		},
		created(){
			this.redirect();
		}
	}
</script>