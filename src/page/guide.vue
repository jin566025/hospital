<template>
	<div>
		<banner></banner>
		<div class="section" v-for="item in list">
			<a class="text" :href="item.outUrl">{{ item.name }}</a>
		</div>
		
	</div>
</template>
<script>
	import Banner from '../components/banner'
	export default{
		data(){
			return {
				list:[]
			}
		},
		components:{
			Banner
		},
		created(){
			this.getMedicalGuideList();
		},
		methods:{
			toList:function(index){
				var title = this.typeList[index];
				document.title = title;
				this.$router.push({path:'/feature-detail'})
			},
			getMedicalGuideList:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getMedicalGuideList.json",
					dataType:"json"
				}).then((res)=>{
			 		if(res){
			 			var data = res.data;
			 			this.list = data.list;
			 			console.log(this.list)
			 		}
			 	})
			}
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.section{
	width: 100%;height: 9rem;background: url(../../static/img/bg3.png) no-repeat center/94%;line-height: 11rem;
	.text{width: 80%;margin: 0 auto;font-size: 1.3rem;display: block;color: #000000;}
}
</style>