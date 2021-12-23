<template>
	<section class="ml-4 mr-4 pt-4 pt-2 mb-3">
		<div class="row m-md-0 m-2">
			<div class="col-12">
				<main-form></main-form>
			</div>
		</div>
	</section>
</template>
<script>
	import mainForm from './forms/main-form.vue';
	export default {
		components: {
			'mainForm' : mainForm
		}
	}
</script>
<style scoped>
	section { padding: 0px; }
</style>