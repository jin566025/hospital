<template>
	<div>
		<my-swiper :listImg="swiperImg"></my-swiper>
		<div class="content clearfix">
			<div class="section fl" v-for="(item,index) in list" @click="toList(item.name,item.id)">
				<p class="type">{{ item.name }}</p>
			</div>


		</div>
		
	</div>
</template>

	
<script>
	import MySwiper from '../components/my-swiper'
	export default{
		data(){
			return {
				swiperImg:["../static/img/banner.png"],
				list:[],			
			}
		},
		created(){
			this.getDepartmentTypeList();
		},
		methods:{
			toList:function(name,id){
				document.title = name;


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
						console.log(data)
						if(data.openway==1){
							window.location.href=data.outUrl+"&scene=4#wechat_redirect"
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
			 			var data = res.data;
			 			this.list = data.list;
			 			console.log(data)
			 		}
			 	})
			}
		},
		components:{
			MySwiper
		}
	}
</script>
<style  lang="less" rel="stylesheet/less" scoped>
.section{
	width: 33.3%;background: url(../../static/img/zhuanjiajieshao1.png) no-repeat center/contain;height:8rem;text-align: center;line-height: 8rem;
	.type{font-size: 1.2em;}
}
</style>