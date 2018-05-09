<template>
  <div id="app">
    	<keep-alive>
    			<router-view v-wechat-title='$route.meta.title'></router-view>
    	</keep-alive>
  </div>
</template>



<style  lang="less" rel="stylesheet/less">
@import url("../static/css/common.css");
@import url("../static/css/font-awesome.min.css");
#app{overflow-x: hidden;}
.swiper-pagination-bullet{width: 1rem;height:1rem;background-color: #FFFFFF;border-radius: 50%;display: inline-block;}
.swiper-pagination-bullet-active{background-color: dodgerblue;}
</style>
