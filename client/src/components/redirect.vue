<template>
	<section>
		{{ redirect() }}
	</section>
</template>
<script>
	import urlsProvider from './../provider/url.provider.js';
	export default {
		computed: {
			shorturl(){ return this.$store.state.shortUrl; },
		},
		methods: {
			redirect(){
				var shortUrl = this.$route.params.code;
				var url = this.$store.state.api_dir+'/url/redirect';
				urlsProvider.getUrl(url, shortUrl).then( resp => {
					console.log(resp.url);
					window.location.href = resp.url;
				});
			}
		}
	}
</script>