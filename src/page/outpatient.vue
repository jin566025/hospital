<template>
	<div class="content">
		<banner></banner>
		<div class="container">
			<p class="tip">挂号须知</p>
			<div class="title flex-box">
				<div class="title-left">1、</div>
				<div class="title-right">挂号时间：</div>
			</div>
			<p class="detail">上午7：30—11：30下午13：15—17：00</p>
			<div class="title flex-box">
				<div class="title-left">2、</div>
				<div class="title-right">挂号费用：</div>
			</div>
			<p class="detail">普通挂号：挂号费1元，诊疗费1.5元</p>
			<p class="detail">急诊挂号：挂号费2元，诊疗费1.5元</p>
			<p class="detail">副主任医师：挂号费5元，诊疗费1.5元</p>
			<p class="detail">主任医师：挂号费7元，诊疗费1.5元</p>
			<div class="title flex-box">
				<div class="title-left">3、</div>
				<div class="title-right">实名制挂号说明：</div>
			</div>
			<div class="title2 flex-box">
				<div class="title2-left">一、</div>
				<div class="title2-right">
					<p>严格实行实名制挂号、实名制就诊。</p>
					<p>实名制挂号：前来看病的患者在专家门诊挂号时必须实名挂号，也就是凭医保卡、身份证，户口本进行实名挂号</p>
				</div>
			</div>
			<div class="title2 flex-box">
				<div class="title2-left">二、</div>
				<div class="title2-right">
					<p>实名制挂号和就诊具体流程</p>
					<p>完成预约挂号用户,前来看病的患者在专家门诊挂号时必须实名挂号，也就是凭医保卡、身份证，户口本进行实名挂号</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Banner from '../components/banner'
	export default{
		components:{
			Banner
		},
		created(){
			this.getOutpatinetInfo();
		},
		methods:{
			getOutpatinetInfo:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getOutpatinetInfo.json",
					dataType:"json"
				}).then((res)=>{
			 		console.log(res)
			 	},(err)=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>

.container{
	line-height: 2rem;width: 92%;margin: 0 auto;margin-top: 1rem;font-family: arial;font-weight: 500;color: #000000;font-size: 1.25rem;
	.tip{font-size: 1.5rem;margin-bottom: 1.6rem;margin-top: 1.4rem;}
	.title{
		margin-top: 0.4rem;
		.title-left{width: 2rem;}
		.title-right{flex: 1;}
	}
	.detail{padding-left: 2rem;margin-top: 0.4rem;}
	.title2{
		padding-left: 2rem;
	}
}
</style>