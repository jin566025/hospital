<template>
	<div>
		<loading v-show="loadingShow"></loading>
		<!--<my-swiper :listImg="swiperImg"></my-swiper>-->
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
				swiperImg:["../static/img/bg1.jpg"],
				list:[],
				loadingShow:true
			}
		},
		created(){
			this.getDepartmentTypeForDoctorList();
			
		},
		methods:{
			toList:function(name,id){
				document.title = name;
				this.$router.push({path:'/desc-list?id='+id})
			},
			getDepartmentTypeForDoctorList:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getDepartmentTypeForDoctorList.json",
					dataType:"json"
				}).then((res)=>{
			 		if(res){
			 			this.loadingShow = false;
			 			var data = res.data;
			 			this.list = data.list;

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
.content{
	padding: 2rem 0;
	.section{
		width: 33.3%;background: url(../../static/img/zhuanjiajieshao1.png) no-repeat center/contain;height:8rem;text-align: center;line-height: 8rem;
		.type{font-size: 1.2em;}
	}
}

</style>