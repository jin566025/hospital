<template>
	<div class="swiper-container" id="swiper1">
	    <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="(item,index) in listImg">
		      <img  :onerror="errorImg01" :src="item.imgUrl ? imgurl+item.imgUrl:'./static/img/banner.png'">
		    </div>
	    </div>
    	<div class="swiper-pagination"></div>
  	</div>
</template>

<script>
  import Swiper from 'swiper';

  
  export default {
    props: ['listImg'],
	data(){
		return {
			errorImg01: 'this.onerror=null;this.src="./static/img/banner.png"'
		}
	},
    mounted() {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
		autoplay : 2500,
		autoplayDisableOnInteraction : false,
        speed: 600,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper

      });
    }
  }
</script>
<style scoped>
  @import url("../../static/css/swiper.min.css");
  .swiper-container {
    width: 100%;
    height:100%;
    background-color: #E5EBF4;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
 
  }
  .swiper-slide img{
    width: 100%;
  }
  
 
</style>