<template>

	<div class="device">
	    <div class="swiper-container">
	      <div class="swiper-wrapper">
	        <div class="swiper-slide"  v-for="(item,index) in listImg">  
	        	<img  :onerror="errorImg01" :src="item.imgUrl ? imgurl+item.imgUrl:'./static/img/banner.png'">
	        </div>
	
	      </div>
	    </div>
	    <div class="pagination"></div>
	</div>
</template>

<script>
  import Swiper from '../../static/js/idangerous.swiper.min.js';
  
  export default {
    props: ['listImg'],
	data(){
		return {
			errorImg01: 'this.onerror=null;this.src="./static/img/banner.png"'
		}
	},
    mounted() {
    	var that = this;
    	setTimeout(function(){
    		that.createSwiper();
    	},500)

    },
    methods:{
    	createSwiper:function(){
    		console.log("bbb")
    		var swiper = new Swiper('.swiper-container', {  
				updateOnImagesReady : true,
			    pagination: '.pagination',
			    loop:true,
			    grabCursor: true,
			    paginationClickable: true,
			    observer:true, //修改swiper自己或子元素时，自动初始化swiper
	        	observeParents:true,//修改swiper的父元素时，自动初始化swiper
			    onInit: function(swiper){
			      console.log('aaaa');
			    }
     		}) 
    	}
    }
  }
</script>
<style scoped>
.device{position: relative;}
 .swiper-container {
    width: 100%;
    height:12rem;
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
  .pagination{position: absolute;bottom:20px;text-align: center;width:100%;z-index: 100;}
</style>