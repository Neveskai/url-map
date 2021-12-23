<template>
	<section>
		<label> {{ label }} 
			<sup><i class="fa fa-asterisk text-danger font-xs" v-if="required" v-show="empty"></i></sup>
		</label>
		<div class="input-group" v-bind:class="{ nolabel: nolabel }">
			<input :type="type" class="form-control font-bold"
				:placeholder="placeholder" 
				v-model="valor"
				:readonly="readonly"
			/>
		</div>
	</section>
</template>
<script>
	export default {
		props: {
			placeholder: String,
			required: Boolean,
			target: String,
			label: String,
			attr: String,
			type: String,
			keyup: Function,
			readonly: Boolean
		},
		computed: {
			valor: {
				get()	{ return this.$store.state[this.target][this.attr]; },
				set(val){ 
					this.$store.commit('updateObjAttr', { target: this.target, attr: this.attr, data: val }); 
				}
			},
			empty(){
				if(this.valor == 0) return true;
				return !this.valor.toString().length; 
			},
			nolabel() {
				if(this.label == undefined) return true;
				return false;
			}
		},
		updated(){
			if(this.keyup != undefined) this.keyup();
			if(this.$parent.checkForm != undefined) if(this.required) this.$parent.submit_disabled = !this.$parent.checkForm();
			if(this.$parent.fieldsEdited != undefined) this.$parent.fieldsEdited(this.target, this.attr);
		}
	}
</script>
<style scoped>
	section { padding: 0; margin: 0; }
	.nolabel {
		padding-top: 0px !important;
	}
	label {
		position: absolute; 
		margin-left: 5px;
		font-size: 12px;
		font-weight: 500;
	}
	.form-control {
		height: 33px;
		font-size: 13px;
		color: #222;
		background: #f5f5f5;
		border-radius: 2px;
	}
	.form-select {
		height: 33px;
		font-size: 13px;
		color: #222;
		background: #f5f5f5;
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