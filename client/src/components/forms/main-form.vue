<template>
	<section>
		<div class="col-12">
			<h2> Paste the URL to be shortened </h2>
		</div>
		<div class="col-12 mt-3">
			<div class="input-group mb-2"> 
				<div class="input-group-prepend">
					<span class="input-group-text" id="basic-addon1">@</span>
				</div>
				<input type="text" placeholder="Digite a url principal" v-model="url" class="form-control" />
				<button class="btn btn-primary" @click="shortUrl">
					Short URL <i v-show="submit_clicked" class="fa fa-spinner fa-spin"></i>
				</button>
			</div>
		</div>
		<div class="col-12 mt-3">
			<p> URL Shortener is a free tool to shorten a URL or reduce a link <br>
			Use URL Shortener to create a shortened link making it easy to remember</p>
		</div>
	</section>
</template>
<script>
	import urlsProvider from './../../provider/url.provider.js';
	export default {
		data() { return {
			url: '',
			submit_clicked: false,
			submit_disabled: true
		}},
		methods: {
			empty(val){
				if(val == 0 || val == '') return true;
				return false;
			},
			checkForm(){
				if(this.empty(this.url)) return false;
				return true;
			},
			put(){
				const url = this.$store.state.api_dir+'/url/register';
				urlsProvider.registerUrl(url, this.url);
			}
		},
	}
</script>
<style scoped>
	section { padding-bottom: 0px; z-index: 2; }
	.btn.btn-primary {
		font-weight: 500 !important;
		width: 180px;
		border-radius: 0 3px 3px 0;
	}
	@media screen and (max-width: 800px) {
		.btn.btn-primary {
			display:inline-block;
			width: 100%;
			border-radius: 3px;
			margin-top: 5px;
		}
	}   
</style>
