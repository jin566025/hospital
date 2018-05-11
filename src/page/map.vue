<template>
	<div class="content">
		<p class="title">公交路线：</p>
		<p class="detail">张监砌（镇海中医院站）：27路，371路，372路，373路，374路，375路，376路，377路，378路，379路</p>
		<p class="detail detail2">地理位置：宁波市镇海区招宝山街道环城西路51号</p>
		<p class="title2">地理位置</p>
		<my-map></my-map>
	</div>
</template>

<script>
	import MyMap from '../components/my-map'
	export default{
		components:{
			MyMap
		},
		created(){
			this.getTrafficInfo();
		},
		methods:{
			toList:function(index){
				var title = this.typeList[index];
				document.title = title;
				this.$router.push({path:'/feature-detail'})
			},
			getTrafficInfo:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getTrafficInfo.json",
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
	.content{
		width: 90%;margin: 0 auto;font-family: arial;color: #000000;padding: 2rem 0;
		.title{font-size: 1.4rem;}
		.detail{font-size: 1.2rem;margin-top: 1rem;line-height: 2rem;}
		.detail2{margin-top: 2rem;}
		.title2{font-size: 1.3rem;margin-top: 3rem;margin-bottom: 2rem;}
	}
</style>