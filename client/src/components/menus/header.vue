<template>
	<header id="header" style="z-index: 2;" class="row">
		<div class="col-md-3 col-12 text-center text-md-left">
			<h2> {{ title }} </h2>
		</div>
		<div class="col-md-9 text-md-right col-12 text-center p-0 m-md-0">
			<section class="d-inline-flex pl-1">
				<div class="mr-2 mr-md-4 navi text-center">
					<router-link to="/">
						<i class="fa fa-home"></i><br>
						<span class="font-bold">Home</span>
					</router-link>
				</div>
				<div class="mr-2 mr-md-4 navi text-center">
					<router-link to="top100">
						<i class="fa fa-link"></i><br>
						<span class="font-bold">Top 100</span>
					</router-link>
				</div>
				<div class="mr-2 mr-md-4 navi text-center">
					<router-link to="login">
						<i class="fa fa-user"></i><br>
						<span class="font-bold">Login</span>
					</router-link>
				</div>
			</section>
		</div>
	</header>
</template>
<script>
	module.exports = {
		props: {
			title: String
		},
		data() { return {
			theme: 'Light',
			highlight: 0
		}},
		methods: {
			goBack(){
				this.$parent.$parent.goBack();
			},
		}
	}
</script>
<style scoped>
	.highlight{
		color: #0077bb !important;
	}
	.navi {
		line-height: 14px;
	}
	.navi a {
		text-decoration: none;
		underline: none;
		color: #222;
		font-size: 13px;
	}
	.navi i {
		transition: 0.5s;
	}
	.navi span {
		font-size: 12px;
		white-space: nowrap;
		transition: 0.5s;
	}
	.navi:hover span, .navi:hover i {
		color: #0077c9;
	}
	#header {
		padding: 5px 1.5% 10px 1.4%;
		margin: 0;
		display: inline-flex;
		width: 100%;
	}
	#header h2 { 
		color: #0077c9;
		font-size: 152%;
		margin-top: 5px; 
		margin-bottom: 0px; 
	}
	#header h2 img {
		width: 25px;
		margin-top: -6px;
	}
	@media only screen and (max-device-width: 800px) {
		#home-btn {
			top: -6px;
		}
		.navi i {
			font-size: 11px !important;
		}
		.navi span {
			font-size: 10.5px !important;
		}
	}
	#home-btn {
		right: 5%; 
		position: absolute;
		text-align: right;
		color: #0066cc;
		font-weight: 600;
		cursor: pointer;
	}
</style>