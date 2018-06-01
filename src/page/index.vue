<template>
	<div class="content">
		<my-swiper :listImg="swiperImg"></my-swiper>
    	<div class="container flex-box">
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
	import wx from 'weixin-js-sdk'
	export default {
		data(){
			return {
				swiperImg:["../static/img/banner.png"],
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
		methods:{
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
			},
			fenXiang:function(){
			    var fxData = {  
				    title: "龙华医院", // 分享标题  
				    desc: "龙华医院", // 分享描述  
				    link: "./static/img/banner.png", // 分享链接  
				    imgUrl: "./static/img/banner.png", // 分享图标  
				    type: 'link', // 分享类型,music、video或link，不填默认为link  
				    dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空  
			    };  
			    $.post('请求后端配置文件信息', {url:fxData.link},function(re){  
			    // console.log(re.data)  
			    wx.config(re.data);  
			    // console.log(fxData)  
			    wx.ready(function() { //通过ready接口处理成功验证  
			      // config信息验证成功后会执行ready方法  
			  
			      wx.onMenuShareAppMessage({ // 分享给朋友  ,在config里面填写需要使用的JS接口列表，然后这个方法才可以用   
			        desc: fxData.desc, // 分享描述  
			        title: fxData.title, // 分享标题  
			        link: fxData.link,  
			        imgUrl: fxData.imgUrl, // 分享图标  
			        type: '', // 分享类型,music、video或link，不填默认为link  
			        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空  
			        success: function() {  
			        // 用户确认分享后执行的回调函数  
			        },  
			        cancel: function() {  
			        // 用户取消分享后执行的回调函数  
			        }  
			      });  
			  
			      wx.onMenuShareTimeline({ //分享朋友圈  
			        title: fxData.title, // 分享标题  
			        link: fxData.link,  
			        imgUrl: fxData.imgUrl, // 分享图标  
			        success: function() {  
			        // 用户确认分享后执行的回调函数  
			        },  
			        cancel: function() {  
			        // 用户取消分享后执行的回调函数  
			        }  
			      });  
			  
			      // 分享到QQ  
			      wx.onMenuShareQQ({  
			        title: fxData.title, // 分享标题  
			        desc: fxData.desc, // 分享描述  
			        link: fxData.link,  
			        imgUrl: fxData.imgUrl, // 分享图标  
			        success: function () {  
			        // 用户确认分享后执行的回调函数  
			        },  
			        cancel: function () {  
			        // 用户取消分享后执行的回调函数  
			        }  
			      });  
			  
			      // 分享到腾讯微博  
			      wx.onMenuShareWeibo({  
			        title: fxData.title, // 分享标题  
			        desc: fxData.desc, // 分享描述  
			        link: fxData.link,  
			        imgUrl: fxData.imgUrl, // 分享图标  
			        success: function () {  
			        // 用户确认分享后执行的回调函数  
			        },  
			        cancel: function () {  
			        // 用户取消分享后执行的回调函数  
			        }  
			      });  
			  
			      // 分享到QQ空间  
			      wx.onMenuShareQZone({  
			        title: fxData.title, // 分享标题  
			        desc: fxData.desc, // 分享描述  
			        link: fxData.link,  
			        imgUrl: fxData.imgUrl, // 分享图标  
			        success: function () {  
			        // 用户确认分享后执行的回调函数  
			        },  
			        cancel: function () {  
			        // 用户取消分享后执行的回调函数  
			        }  
			      });  
			  
			    });  
			    wx.error(function(res){//通过error接口处理失败验证  
			      // config信息验证失败会执行error函数  
			    });  
			    });  
			}
		}
	}
</script>
<style  lang="less" rel="stylesheet/less" scoped>
.content{
	height: 100%;
	.container{
		flex-flow:wrap;background-color:#E5EBF4;padding:1rem 10%;
		.section{
			width:50%;height: 6rem;line-height:6rem;background-size: contain;background-repeat: no-repeat;background-position: center;margin: 1rem 0;font-size: 1.25rem;
		}
		.recommend{margin-top: 2rem;width: 100%;height: 6rem;background-image: url(../../static/img/tuijian.png);background-position: center;background-size:contain;background-repeat: no-repeat;}
		@media  screen  and (min-width: 414px) {
			.section{width: 100%;}
		}
	}
	#mask{width: 100%;height: 100%;position: fixed;top: 0;left: 0;z-index: 9999;}
}
</style>