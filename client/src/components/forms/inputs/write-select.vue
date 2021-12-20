<template>
	<section style="max-height: 200px;">
		<label>{{ label }} <sup><i class="fa fa-asterisk text-danger font-xs" v-if="required" v-show="empty"></i></sup></label>
		<div class="input-group" v-bind:class="{ nolabel: nolabel }">
			<input type="text" class="form-control font-bold" v-model="option.nome" :placeholder="'Pesquisar '+ _search"
				@keyup="keynav($event)"
				@click="search"
				@focusout="hide"
			/>
			<ul v-show="typing" class="typew-list" v-bind:class="{ toTop: totop }">
				<template v-for="(option, i) in options">
					<li class="font-bold" :value="option.id" 
						v-show="option.show" 
						v-bind:class="{ highlight: option.highlight }" 
						@click="slctItem(option)"
					>{{ option.nome }}</li>
				</template>
			</ul>
			<i class="fa fa-times" v-show="this.option.id != 0 && !this.readonly" @click="slctItem({ id: 0, nome: '' })"></i>
		</div>
	</section>
</template>
<script>
	module.exports = {
		props: {
			options: Array,
			target: Object,
			label: String,
			attr: String,
			required: Boolean,
			readonly: Boolean,
			_totop: Boolean,
			_search: String,
			_onchange: Function
		},
		data() { return {
			highlight_index: 0,
			option: { id: 0, nome: ''},
			typing: false,
			totop: this._totop,
			limit: 7
		}},
		computed: {
			empty(){ return !this.option.id; },
			nolabel() {
				if(this.label == undefined) return true;
				return false;
			}
		},
		methods: {
			slctItem(option){
				this.target[this.attr] = option.id;
				this.option.nome = option.nome;
				this.option.id = option.id;
				this.search();
				this.typing = false;
				if(this._onchange != undefined) return this._onchange(option);
				return true;
			},
			search(){
				if(!this.readonly){
					const text  = this.option.nome.toUpperCase();
					const limit = this.limit;
					this.typing = false;
					var count = 0;
					this.options.forEach(function(option){
						if(count < limit){
							if(option.nome.toUpperCase().startsWith(text)){
								option.show = true;
								count++;
							} else {
								option.show = false;
								option.highlight = false;
							}
						} else {
							option.show = false;
							option.highlight = false;
						}
					});
					this.typing = true;
					return this.highlight();
				}
				return false;
			},
			highlight(){
				var show_index = 0;
				var highlight_index = this.highlight_index;
				this.options.forEach(function(option){
					if(option.show) {
						if (show_index == highlight_index){
							option.highlight = true;
						} else {
							option.highlight = false;
						}
						show_index++;
					}
				});
			},
			keynav(e){
				switch(e.key){
					case 'ArrowDown': this.highlight_index++; break;
					case 'ArrowUp'	 : this.highlight_index--; break;
					case 'Enter'	 : 
						this.slctItem(this.options[this.highlight_index]);
						this.highlight_index = 0; 
						this.hide();
					break;
					default: this.highlight_index = 0; break;
				}
				if(this.highlight_index < 0) this.highlight_index = 0;
				if(this.highlight_index >= this.options.length-1) this.highlight_index = this.options.length-1;
				this.search();
			},
			hide(){
				var me = this;
				setTimeout(function(){
					me.typing = false; 
				}, 200);
			}
		},
		created(){
			var me = this;
			me.$router.onReady(function(){
				var index = me.$route.params.index;
				if(index != undefined){
					var id = me.target[me.attr];
					if(id != 0) {
						me.options.forEach(function(option){
							if(option.id == id) {
								me.option.id = option.id;
								me.option.nome = option.nome;
							}
						});
					}
				}
			});
			me.search();
			me.typing = false;
		},
		updated(){
			if(this.$parent.checkForm != undefined) if(this.required) this.$parent.submit_disabled = !this.$parent.checkForm();
			if(this.$parent.fieldsEdited != undefined) this.$parent.fieldsEdited(this.target, this.attr);
		}
	}
</script>
<style scoped>
	.toTop {
		z-index: 0; 
		transform: translate(0, -100%);
		margin-top: -33px;
	}
	.highlight {
		background: #2ccbe3 !important;
		color: #fff;
	}
	.fa-times {
		position: absolute;
		right: 1.75%;
		margin-right: 6px;
		margin-top: 11px;
		font-size: 13px;
		color: #333;
		z-index: 3;
	}
	.nolabel {
		padding-top: 0px !important;
	}
	.typew-list {
		background: #fff;
		list-style-type: none;
		font-size: 13px;
		position: absolute; 
		padding: 5px;
		margin-left: 1px;
		width: 99.75%;
		top: 100%;
		z-index: 4; 
	}
	.typew-list li {
		margin: 0;
		padding: 0;
		border-bottom: 1px solid #dbdbdb;
		padding: 5px;
		cursor: pointer;
	}
	section: {
		margin: 0;
		padding: 0;
	}
	.input-group {
		padding-top: 18px;
	}
	.input-group-text{
		width: 33px;
		font-size: 10px;
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
		background: #f5f5f5;
		border-radius: 2px;
	}
</style>