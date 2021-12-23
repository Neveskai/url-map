<template>
	<section class="ml-2 mr-3 pt-md-4 pt-2 mb-3">
		<div class="row m-md-0 m-2">
			<h5 class="col-12 ml-3 pl-1 mb-2">
				Recuperar Senha <button id="btn-back" class="btn btnBack" @click="goBack()"><i class="fa fa-arrow-right"></i> Retornar</button>
			</h5>
			<div class="col-12 mt-md-2">
				<vue-input type="text" target="userform" attr="email" :required="true" :readonly="readonly" label="Email" placeholder="Email"></vue-input>
			</div>
			<div class="col-12 mt-4 mb-1">
				<button class="btn btn-block btn-info font-bold" @click="put()" :disabled="submit_disabled">
					{{ submit_text }} <i v-show="submit_clicked" class="fa fa-spinner fa-spin"></i>
				</button>
			</div>
		</div>
	</section>
</template>
<script>
	import vueInput from './fields/input.vue'
	import userProvider from './../../provider/user.provider.js';
	import { goBack } from './../../provider/goback.js';
	export default {
		components: {
			'vueInput': vueInput
		},
		data() {
			return {
				reg_backup: null,
				fields_edited: {},
				submit_clicked: false,
				submit_disabled: true,
				submit_text: 'Registrar'
			}
		},
		computed:{
			userform(){ return this.$store.state.userform; },
			readonly(){ return false; }
		},
		methods: {
			empty(val){
				if(val == 0 || val == '') return true;
				return false;
			},
			goBack(){
				goBack(this.$router);
			},
			checkForm(){
				var me = this;
				var reg = me.userform;
				if(me.empty(reg.email)) return false;
				return true;
			},
			put(){
				userProvider.recoverUser(this.userform);
				this.$router.push('/');
			}
		},
	}
</script>
<style scoped>
	section { padding-bottom: 0.75px; z-index: 2; }
	.iconbdr {
		border: 1px solid #555;
	}
	.iconsq {
		border-radius: 2px;
		width: 25%;
		max-width: 95px;
	}
	.iconsq img {
		height: 80px;
		cursor: pointer;
	}
	.row {
		margin: 0;
		padding: 0;
	}
	@media only screen and (min-device-width: 800px) {
		h5 {
			margin: 0;
			padding-left: 16px;
			font-size: 16px;
		}
		.btnBack {
			background: transparent;
			font-weight: 600;
			position: absolute; 
			right: 20px;
			top: -7px;
			cursor: pointer;
			font-size: 15px;
		}
		.btnDate {
			color: #0066bb;
			font-weight: 600;
			position: absolute;
			z-index: 3;
			right: 0px;
			top: -15px;
			cursor: pointer;
			font-size: 13px;
		}
	}
	@media only screen and (max-device-width: 800px) {
		h5 {
			font-size: 14px;
		}
		.btnBack {
			color: #0066bb;
			font-weight: 600;
			position: absolute; 
			right: 20px;
			top: -8.25px;
			cursor: pointer;
			font-size: 14px;
		}
		.btnDate {
		color: #0066bb;
			font-weight: 600;
			position: absolute;
			z-index: 3;
			right: 0px;
			top: -10px;
			cursor: pointer;
			font-size: 12px;
		}
	}
	label {
		color: #f4f4f4;
		position: absolute; 
		margin-left: 5px;
		font-size: 12px;
		font-weight: 500;
	}
	.form-control {
		height: 33px;
		font-size: 13px;
		color: #222;
		background: #f3f3f3;
		border-radius: 2px;
	}
	.form-select {
		height: 33px;
		font-size: 13px;
		color: #222;
		background: #f3f3f3;
		width: 100%;
	}
	.form-control:read-only {
		background: #e9eef2;
		border: 1px solid #aaa;
	}
	.input-group {
		padding-top: 18px;
	}
	.input-group-text{
		width: 33px;
		font-size: 10px;
	}
</style>
