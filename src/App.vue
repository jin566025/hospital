<template>
  <div id="app" class="wrapper"  ref="wrapper">
  		<div>
	    	<keep-alive>
	    			<router-view v-wechat-title='$route.meta.title'></router-view>
	    	</keep-alive>
    	</div>
  </div>
</template>



<style  lang="less" rel="stylesheet/less">
@import url("../static/css/common.css");
@import url("../static/css/font-awesome.min.css");
#app{overflow-x: hidden;height: 100%;z-index: 1;width: 100%;position:absolute;}
.swiper-pagination-bullet{width: 0.8rem;height:0.8rem;background-color: #FFFFFF;border-radius: 50%;display: inline-block;margin: 0 5px;}
.swiper-pagination-bullet-active{background-color: dodgerblue;}
</style>
<script>
		import BScroll from 'better-scroll'
		
		export default{
				mounted(){
					this.$nextTick(() => {
				        //$refs绑定元素
				        if(!this.scroll){
				            this.scroll = new BScroll(this.$refs.wrapper, {
				            //开启点击事件 默认为false
				            click:true
				        })
				        // console.log(this.scroll)
				        }else if(!this.$refs.wrapper){
				            return
				        }
				        else{
				            this.scroll.refresh()
				        }
				    })
				},
		}
</script>