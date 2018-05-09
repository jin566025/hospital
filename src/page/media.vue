<template>
	<div>
		<banner></banner>
		<div class="section" @click="toDetail()">
			<div class="section-content  flex-box">
				<img class="section-left"  src="../../static/img/stop.png" />
				<div class="section-right">
					<p class="title">我院启动中医药法宣传月活动</p>
					<p class="detail">为提高全社会对中医药发展的认识度和关注度，扩大》中华人民共和国中医药法》的社会影响</p>
				</div>
			</div>
			
		</div>
		<div class="section">
			<div class="section-content  flex-box">
				<img class="section-left"  src="../../static/img/stop.png" />
				<div class="section-right">
					<p class="title">治胃病科推出重要驱蚊防感香包</p>
					<p class="detail">随着气温转暖，隐匿了一冬天又蠢蠢欲动，一旦它们得手就给人们留下“挠不尽”的瘙痒的痛苦</p>
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
				this.$router.push({path:'/media-detail'})
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