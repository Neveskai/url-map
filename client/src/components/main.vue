<template>
	<section class="ml-4 mr-4 pt-4 pt-2 mb-3">
		<div class="row m-md-0 m-2">
			<div class="col-12">
				<h2> Paste the URL to be shortened </h2>
			</div>
			<div class="col-12 mt-2">
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
			<div class="col-12 mt-2">
				<p> URL Shortener is a free tool to shorten a URL or reduce a link <br>
				Use URL Shortener to create a shortened link making it easy to remember</p>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		data(){ return {
			url: '',
			submit_clicked: false
		}},
		methods: {
			shortUrl(){
				this.submit_clicked = true;
			}
		}
	}
</script>
<style scoped>
	section { padding: 0px; }
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