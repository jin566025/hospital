<template>
	<div class="banner">
		<!--<img  id="banner-img" src="../../static/img/banner.png" />-->
		<img style="height: 100%;width: 100%;"  :onerror="errorImg01" :src="listImg">
	</div>
</template>

<script>

  export default {
    props: ['listImg'],
	data(){
		return {
			errorImg01: 'this.onerror=null;this.src="./static/img/banner.png"'
		}
	}
  }
</script>
<style scoped>
	.banner{
		width: 100%;
	}
</style>