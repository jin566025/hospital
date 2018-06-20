<template>
	<div>
		<loading v-show="loadingShow"></loading>
		<banner :listImg="swiperImg"></banner>
		<div class="content clearfix">
			<div class="section fl" v-for="(item,index) in list" @click="toList(item.name,item.id)">
				<p class="type">{{ item.name }}</p>
			</div>


		</div>
		
	</div>
</template>

	
<script>
	import Banner from '../components/banner'
	import Loading from '../components/loading'
	export default{
		data(){
			return {
				swiperImg:["../static/img/bg3.jpg"],
				list:[],	
				loadingShow:true
			}
		},
		created(){
			this.getDepartmentTypeList();
		},
		methods:{
			toList:function(name,id){
				this.$ajax({
					type:"get",
					url:this.url_path+"/getDepartmentInfo.json",
					dataType:"json",
					params:{
						"departmentId":id
					}
				}).then((res)=>{
					if(res){
						
						var data = res.data;
						console.log(res)
						if(data.openway==1 && data.outUrl!==""){
							window.location.href=data.outUrl+"&scene=4#wechat_redirect"
						}else{
							alert("暂无")
						}
					}
					
				})

//				this.$router.push({path:'/feature-detail?id='+id})
			},
			getDepartmentTypeList:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getDepartmentTypeList.json",
					dataType:"json"
				}).then((res)=>{
			 		if(res){
			 			this.loadingShow = false;
			 			var data = res.data;
			 			this.list = data.list;
			 			console.log(data)
			 		}
			 	})
			}
		},
		components:{
			Banner,
			Loading
		}
	}
</script>
<style  lang="less" rel="stylesheet/less" scoped>
.section{
	width: 33.3%;background: url(../../static/img/zhuanjiajieshao1.png) no-repeat center/contain;height:8rem;text-align: center;line-height: 8rem;
	.type{font-size: 1.2em;}
}
</style>