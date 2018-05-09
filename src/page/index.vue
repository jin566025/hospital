<template>
	<div class="content">
		<my-swiper :listImg="swiperImg"></my-swiper>
    	<div class="container flex-box">
    		<router-link  class="section" v-for="(item,index) in sectionBg"  :style="{backgroundImage: 'url(' + item.bgImg + ')'}" :to="item.path"></router-link>

			<div class="recommend"></div>
    	</div>

	</div>
</template>

<script>
	import MySwiper from '../components/my-swiper'
	export default {
		data(){
			return {
				swiperImg:["../static/img/banner.png"],
				sectionBg:[
					{bgImg:"./static/img/home1.png",path:"/survey"},
					{bgImg:"./static/img/home2.png",path:"/outpatient"},
					{bgImg:"./static/img/home3.png",path:"/desc"},
					{bgImg:"./static/img/home4.png",path:"/guide"},
					{bgImg:"./static/img/home5.png",path:"/survey"},
					{bgImg:"./static/img/home6.png",path:"/stop"},
					{bgImg:"./static/img/home7.png",path:"/lecture"},
					{bgImg:"./static/img/home8.png",path:"/recruit"},
					{bgImg:"./static/img/home9.png",path:"/media"},
					{bgImg:"./static/img/home10.png",path:"/feature"},
					{bgImg:"./static/img/home11.png",path:"/map"},
					{bgImg:"./static/img/home12.png",path:"/news"}
				]
			}
		},
		components:{
			MySwiper
		}
	}
</script>
<style  lang="less" rel="stylesheet/less" scoped>
	.container{
		flex-flow:wrap;padding:1rem 0;background-image: url(../../static/img/bg.png);background-size: contain;background-position: 0 100%;background-repeat: no-repeat;
		.section{
			width: 33.3%;height: 4.5rem;line-height: 4.5rem;background-size: contain;background-repeat: no-repeat;background-position: center;margin: 1rem 0;font-size: 1.25rem;
		}
		.recommend{margin-top: 2rem;width: 100%;height: 8.333333rem;background-image: url(../../static/img/tuijian.png);background-position: center;background-size: 12.5rem;background-repeat: no-repeat;}
	}
</style>