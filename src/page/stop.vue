<template>
	<div>
		<banner></banner>
		<div class="section" @click="toDetail()">
			<div class="section-content  flex-box">
				<img class="section-left"  src="../../static/img/stop.png" />
				<div class="section-right">
					<p class="title">9月专家停诊信息</p>
					<p class="detail">9月2日 头颈肿瘤科 王旭东 9月3日 乳腺瘤 王旭东 9月2日 头颈肿瘤科 王旭东 9月3日 乳腺瘤 王旭东 9月2日 头颈肿瘤科 王旭东 9月3日 乳腺瘤 王旭东</p>
				</div>
			</div>
			
		</div>
		<div class="section">
			<div class="section-content  flex-box">
				<img class="section-left"  src="../../static/img/stop.png" />
				<div class="section-right">
					<p class="title">8月专家停诊信息</p>
					<p class="detail">9月2日 头颈肿瘤科 王旭东 9月3日 乳腺瘤 王旭东 9月2日 头颈肿瘤科 王旭东 9月3日 乳腺瘤 王旭东 9月2日 头颈肿瘤科 王旭东 9月3日 乳腺瘤 王旭东</p>
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
				this.$router.push({path:'/stop-detail'})
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
		.section-left{width: 8rem;height:8rem;}
		.section-right{
			flex: 1;padding-left: 0.4rem;
			.title{height: 2.4rem;line-height: 2.4rem;color: #000000;font-size: 1.2rem;}
			.detail{color: gray;font-size: 1rem;height: 3rem;overflow: hidden;line-height: 1.5rem;text-overflow: ellipsis;
			display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
		}
	}
}
</style>