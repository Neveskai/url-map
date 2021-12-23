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
				<div class="col-12 text-center links mb-3">
					<router-link to="forgot-keyword">Esqueci minha Senha</router-link>
				</div>
				<button type="submit" class="btn btn-block btn-primary" @click="logIn">
					Login <i v-show="submit_clicked" class="fa fa-spinner fa-spin"></i>
				</button>
				<div class="col-12 text-center links mt-2">
					<router-link to="sign-in">Registrar-se</router-link>
				</div>
				<span id="copyright">&copy; {{ copy }}</span>
				<span id="copyright2">v{{ version }}</span>
			</div>
		</div>
	</section>
</template>
<script>
	import logo from "../../assets/logo.png";
	import userProvider from './../../provider/user.provider.js';
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
			}
		},
		methods: {
			logIn(){
				this.submit_clicked = true;
				userProvider.userAuth(this.login, this.senha).then( user => {
					if(user.error != undefined) {
						console.log(user.error);
					} else {
						this.user = user;
						this.$router.push('/');
					}
				})
			}
		}
	}
</script>
<style scoped>
	.links {
		font-size: 14px;
	}
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
