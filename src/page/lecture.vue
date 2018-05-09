<template>
	<div>
		<banner></banner>
		<div class="section" @click="toDetail()">
			<div class="section-content  flex-box">
				<div class="section-left">
					<img class="head" src="../../static/img/test.jpg" />
				</div>
				<div class="section-right">
					<p class="title">中西医结合科系列讲座（一）</p>
					<p class="detail">开展中西医结合科肿瘤特色门诊，具体分为乳腺癌、肺癌、胃肠道肿瘤、妇科肿瘤、肝胆肿瘤科</p>
				</div>
			</div>
			
		</div>
		<div class="section">
			<div class="section-content  flex-box">
				<div class="section-left">
					<img class="head" src="../../static/img/test.jpg" />
				</div>
				<div class="section-right">
					<p class="title">中西医结合科系列讲座（二）</p>
					<p class="detail">开展中西医结合科肿瘤特色门诊，具体分为乳腺癌、肺癌、胃肠道肿瘤、妇科肿瘤、肝胆肿瘤科</p>
				</div>
			</div>
			
		</div>
	</div>
</template>


<script>
	import Banner from '../components/banner'
	export default{
		methods:{
			toDetail:function(){
				this.$router.push({path:'/lecture-detail'})
			}
		},
		components:{
			Banner
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.section{
	width: 100%;padding: 1rem 0;border-bottom: 1px solid gainsboro;
	.section-content{
		width: 90%;margin: 0 auto;align-items: center;
		.section-left{
			width: 8rem;height:8rem;background: url(../../static/img/keshitese.png) no-repeat center/contain;position: relative;
			.head{width:5.4rem;height: 4rem;position: absolute;left: 1rem;bottom: 1rem;}
		}
		.section-right{
			flex: 1;padding-left: 0.4rem;
			.title{height: 2.4rem;line-height: 2.4rem;color: #000000;font-size: 1.2rem;}
			.detail{color: gray;font-size: 1rem;height: 3rem;overflow: hidden;line-height: 1.5rem;text-overflow: ellipsis;
			display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
		}
	}
}
</style>