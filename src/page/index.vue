<template>
	<div class="content">
		<my-swiper :listImg="swiperImg"></my-swiper>
    	<div class="container clearfix">
    		<div @click="toSurvey()" class="section" style="background-image: url(./static/img/home1.png);"></div>
    		<div @click="toOutpatient()" class="section" style="background-image: url(./static/img/home2.png);"></div>
    		
    		<div @click="toDesc()" class="section" style="background-image: url(./static/img/home3.png);"></div>
    		<div @click="toGuide()" class="section" style="background-image: url(./static/img/home4.png);"></div>
    		<div @click="toFeature()" class="section" style="background-image: url(./static/img/home10.png);"></div>
    		<div @click="toGuahao()" class="section" style="background-image: url(./static/img/home5.png);"></div>
    		<router-link  class="section" v-for="(item,index) in sectionBg"  :style="{backgroundImage: 'url(' + item.bgImg + ')'}" :to="item.path"></router-link>
		
			<div @click="toMap()" class="section" style="background-image: url(./static/img/home11.png);"></div>
			<div @click="toNews()" class="section" style="background-image: url(./static/img/home12.png);"></div>
			<div @click="toFenxian()" class="recommend"></div>
    	</div>
		<img v-show="maskshow" @click="toFenxian()" id="mask" src="../../static/img/mask.png" />
	</div>
</template>

<script>
	import MySwiper from '../components/my-swiper'
	
//	import wx from 'weixin-js-sdk'
	export default {
		data(){
			return {
				swiperImg:[],
				sectionBg:[
//					{bgImg:"./static/img/home1.png",path:"/survey"},
//					{bgImg:"./static/img/home2.png",path:"/outpatient"},
//					{bgImg:"./static/img/home3.png",path:"/desc"},
//					{bgImg:"./static/img/home4.png",path:"/guide"},
//					{bgImg:"./static/img/home10.png",path:"/feature"},
//					{bgImg:"./static/img/home5.png",path:"/survey"},
					{bgImg:"./static/img/home6.png",path:"/stop"},
					{bgImg:"./static/img/home7.png",path:"/lecture"},
					{bgImg:"./static/img/home8.png",path:"/recruit"},
					{bgImg:"./static/img/home9.png",path:"/media"}
				],
				maskshow:false
			}
		},
		components:{
			MySwiper
		},
		created(){
			this.getAdList()
		},
		
		methods:{
			getAdList:function(){
	    		this.$ajax({
	    			type:"post",
	    			url:this.url_path+"/getAdList.json",
	    			dataType:"json",
	    			params:{
	    				"position":1,
	    				"max":999
	    			}
	    		}).then((res)=>{
	    			if(res.data.stateCode==0){
	    				
	    				var data = res.data;
	    				this.swiperImg = data.list;
	    			}
	    		})
	    	},

			toDesc:function(){
				this.$router.push({path:'/desc'})
			},
			toGuide:function(){
				this.$router.push({path:'/guide'})
			},
			toFeature:function(){
				this.$router.push({path:'/feature'})
			},
			toGuahao:function(){
				window.location.href="http://wxwebsite.kingtsoft.com/makeapp?yybh=41956646"
			},
			toSurvey:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getHospitalInfo.json",
					dataType:"json"
				}).then((res)=>{
			 		console.log(res)
			 		if(res){
			 			var data = res.data;
			 			if(data.openway==1){
			 				window.location.href=data.outUrl+"&scene=4#wechat_redirect";
			 			}
			 		}
			 	})
			},
			toOutpatient:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getOutpatinetInfo.json",
					dataType:"json"
				}).then((res)=>{
			 		console.log(res)
			 		if(res){
			 			var data = res.data;
			 			if(data.openway==1){
			 				
			 				window.location.href=data.outUrl+"&scene=4#wechat_redirect";
			 			}
			 		}
			 	})
			},
			toMap:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getTrafficInfo.json",
					dataType:"json"
				}).then((res)=>{
			 		if(res){
			 			var data = res.data;
			 			if(data.openway==1){
			 				window.location.href=data.outUrl+"&scene=4#wechat_redirect";
			 			}
			 		}
			 	})
			},
			toNews:function(){
				this.$router.push({path:'/news'})
			},
			toFenxian:function(){
				this.maskshow = !this.maskshow
			}
		}
	}
</script>
<style  lang="less" rel="stylesheet/less" scoped>
.content{
	height: 100%;
	.container{
		background-color:#E5EBF4;padding:1rem 10%;
		.section{
			float: left;width:50%;height: 6rem;line-height:6rem;background-size: contain;background-repeat: no-repeat;background-position: center;margin: 1rem 0;font-size: 1.25rem;
		}
		.recommend{float: left;margin-top: 2rem;width: 100%;height: 6rem;background-image: url(../../static/img/tuijian.png);background-position: center;background-size:contain;background-repeat: no-repeat;}

		@media  screen  and (min-height: 812px) and (max-width: 375px) {
			.section{width: 100%;}
		}
	}
	#mask{width: 100%;height: 100%;position: fixed;top: 0;left: 0;z-index: 9999;}
}
</style>