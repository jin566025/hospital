<template>
	<div>
		<banner></banner>
		<div class="section" @click="toDetail()">
			<div class="section-content  flex-box">
				<img class="section-left"  src="../../static/img/stop.png" />
				<div class="section-right">
					<p class="title">【养生】冬季御寒不能只靠一身“正气”做好这些过“暖”冬</p>
					<p class="detail">2018年01月12日</p>
				</div>
			</div>
			
		</div>
		<div class="section">
			<div class="section-content  flex-box">
				<img class="section-left"  src="../../static/img/stop.png" />
				<div class="section-right">
					<p class="title">【预告】这朵云不容小觑！我院“影像云”即将上线，开启数字化智能数字化智能</p>
					<p class="detail">2018年01月12日</p>
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
				this.$router.push({path:'/news-detail'})
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
			.title{margin-top: 2rem;color: #000000;font-size: 1.2rem;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
			.detail{color: gray;font-size: 1rem;height: 3rem;overflow: hidden;line-height: 1.5rem;text-overflow: ellipsis;
			display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
		}
	}
}
</style>