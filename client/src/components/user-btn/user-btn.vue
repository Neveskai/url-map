<template>
	<div class="navi text-center">
		<div class="mr-2 mr-md-4 navi text-center">
			<router-link to="/page/login" v-if="user.id == 0">
				<i class="fa fa-user-secret"></i><br>
				<span class="font-bold">Login</span>
			</router-link>
			<a v-else href="#" class="user-btn" v-bind:class="{ highlight: show }" @click="show = !show;">
				<i class="fa fa-user"></i><br>
				<span class="font-bold">{{ user.name }}</span>
			</a>
			<section v-show="show" class="user-menu">
				<button class="menu-btn" @click="logout">
					<span>LogOut</span>
				</button>
				<button class="menu-btn" @click="myUrls">
					<span>My Urls</span>
				</button>
			</section>
		</div>
	</div>
</template>
<script>
	import userProvider from './../../provider/user.provider.js';
	import urlsProvider from './../../provider/url.provider.js';
	export default {
		computed: {
			user(){ return this.$store.state.user; }
		},
		data() { return {
			show: false
		}},
		methods: {
			logout() {
				userProvider.logout(this.$store);
				this.show = false;
			},
			myUrls() {
				urlsProvider.getMyUrls(this.user.id);
				this.show = false;
			}
		}
	}
</script>
<style scoped>
	.user-menu {
		position: absolute;
		transform: translate(-18px, 3px);
		z-index: 3;
	}
	.user-menu .menu-btn {
		border: 1px solid #999;
		padding: 5px 15px;
		margin-top: 2px;
		cursor: pointer;
	}
	.user-menu .menu-btn:hover {
		color: #0077c9;
	}
	.user-btn:hover {
		color: #0077c9;
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
</style>