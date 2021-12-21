<template>
	<div class="navi text-center">
		<div class="mr-2 mr-md-4 navi text-center">
			<router-link to="login" v-if="user.id == 0">
				<i class="fa fa-user-secret"></i><br>
				<span class="font-bold">Login</span>
			</router-link>
			<a href="#" v-else >
				<i class="fa fa-user"></i><br>
				<span class="font-bold">{{ user.name }}</span>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		computed: {
			user(){ return this.$store.state.user; }
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
</style>