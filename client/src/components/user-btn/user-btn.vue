<template>
	<div class="navi text-center">
		<div class="mr-2 mr-md-4 navi text-center">
			<router-link to="login" v-if="user.id == 0">
				<i class="fa fa-user-secret"></i><br>
				<span class="font-bold">Login</span>
			</router-link>
			<a href="#" class="user-btn" v-else>
				<i class="fa fa-user"></i><br>
				<span class="font-bold">{{ user.name }}</span>
				<div class="hover-user-menu">
					<button @click="logout">Logout</button>
				</div>
			</a>
		</div>
	</div>
</template>
<script>
	import userProvider from './../../provider/user.provider.js';
	export default {
		computed: {
			user(){ return this.$store.state.user; }
		},
		methods: {
			logout() {
				userProvider.logout(this.$store);
			}
		}
	}
</script>
<style scoped>
	.user-btn .hover-user-menu {
		position: absolute;
		transform: translate(-15px, 0);
		padding: 5px;
		display: none;
	}
	.user-btn:hover .hover-user-menu {
		display: block;
	}
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