<template>
	<div>
		<banner></banner>
		<div class="section">
			<p class="text">门诊流程</p>
		</div>
		<div class="section">
			<p class="text">挂号须知</p>
		</div>
	</div>
</template>
<script>
	import Banner from '../components/banner'
	export default{
		components:{
			Banner
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.section{
	width: 100%;height: 10rem;background: url(../../static/img/bg3.png) no-repeat center/94%;line-height: 12rem;
	.text{width: 80%;margin: 0 auto;font-size: 1.3rem;}
}
</style>