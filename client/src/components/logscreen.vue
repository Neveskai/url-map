<template>
	<section>
		<div id="loginBody">
			<img id="logoTop"  :src="logo" />
			<div id="loginForm">
				<div class="form-group mb-2"> 
					<input type="text" placeholder="Usuario" v-model="login" class="form-control text-center" />
				</div>
				<div class="form-group mb-2">
					<input type="password" placeholder="Senha" v-model="senha" class="form-control text-center" />
				</div>
				<button type="submit" class="btn btn-block btn-primary" @click="logIn">
					Login <i v-show="submit_clicked" class="fa fa-spinner fa-spin"></i>
				</button>
				<div class="col-12 text-right text-muted mt-2">
					<router-link to="sign-in">Sign In</router-link>
				</div>
				<span id="copyright">&copy; {{ copy }}</span>
				<span id="copyright2">v{{ version }}</span>
			</div>
		</div>
	</section>
</template>
<script>
	import logo from "../assets/logo.png";
	import userService from './../services/user.service.js';
	export default {
		data() { return {
			login: '',
			senha: '',
			version: '0.1.0',
			copy: 'Speedio 2022, Todos os direitos reservados.',
			submit_clicked: false,
			logo: logo
		}},
		computed: {
			user: {
				get()	{ return this.$store.state.user; },
				set(obj){ 
					this.$store.commit('setObject', { target: 'user', data: obj }); 
				}
			},
			reqs: {
				get() { return this.$store.state.reqs; },
				set(arr)	{ 
					this.$store.commit('setArray', { target:'reqs', data: arr }); 
				}
			},
			api_dir() { return this.$store.state.api_dir; }
		},
		methods: {
			userAuth(login, senha) {
				const url = this.api_dir+'/user/auth';
				userService.userAuth(url, login, senha);
			},
			logout(){
				userService.logout();
			},
			createUser(arr){
				userService.createUser(arr)
			},
			logIn(){
				this.submit_clicked = true;
				this.$parent.userAuth(this.login, this.senha);
			}
		}
	}
</script>
<style scoped>
	section { padding: 0px; }
	#loginBody {
		width: 30%; 
		height: 80%;
		margin-left: 50%;
		z-index: 1;
		font-size: 14px;
		min-width: 60%;
		max-width: 300px;
	}
	#loginForm {
		position: absolute;
		top: 42%;
		transform:translate(-50%,0);
		z-index: 1;
		height: 25%;
		width: 25%;
		font-size: 18px;
		color: #000;
	}
	@media only screen and (min-device-width: 900px) {
		#loginForm {
			min-width: 50%;
		}
		#logoTop {
			position: absolute; 
			top: 0%;
			left: auto;
			transform:translate(-50%,0); 
			z-index: 1;
			height: 50%;
			width: 25%;
			min-width: 400px;
		}
		#copyright {
			position: absolute;
			bottom: -85%;
			margin-left: 10px;
			font-size: 75%;
			font-style: italic;
			width: 100%;
			min-width: 350px;
		}
		#copyright2 {
			position: absolute;
			bottom: -100%;
			margin-left: 10px;
			font-size: 75%;
			font-style: italic;
			width: 100%;
			min-width: 350px;
		}
	}
	@media only screen and (max-device-width: 900px) {
		#loginForm {
			min-width: 70%;
		}
		#logoTop {
			position: absolute; 
			top: 0%;
			transform:translate(-50%,0); 
			z-index: 1;
			max-width: 100%;
			max-height: 50%;
		}
		#copyright {
			position: absolute;
			bottom: -65%;
			margin-left: 10px;
			color: #fff;
			font-style: italic;
			font-size: 14px;
			min-width: 80%;
			max-width: 300px;
		}
		#copyright2 {
			position: absolute;
			bottom: -80%;
			margin-left: 10px;
			color: #fff;
			font-size: 75%;
			font-style: italic;
			width: 100%;
			min-width: 80%;
			max-width: 300px;
		}
	}
</style>
