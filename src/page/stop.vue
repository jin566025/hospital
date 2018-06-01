<template>
	<div>
		<my-swiper :listImg="swiperImg"></my-swiper>
		<div class="section" @click="toDetail(item.id)" v-for="(item,index) in MaterialList">
			<div class="section-content  flex-box">
				<div class="section-left">
					<div class="head">
						<img class="headimg" :src="item.img ? imgurl+item.img:'./static/img/morentupian.png'" :onerror="errorImg01" />
					</div>
				</div>
				<div class="section-right">
					<p class="title">{{ item.title }}</p>
					<p class="detail">{{ item.summary }}</p>
				</div>
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
				MaterialList:[],
				errorImg01: 'this.onerror=null;this.src="./static/img/morentupian.png"'
			}
		},
		methods:{
			
			getMaterialList:function(){
				this.$ajax({
					type:"post",
					dataType:"json",
					params:{
						"typeId":1
					},
					url:this.url_path+"/getMaterialList.json"
				}).then((res)=>{
					if(res){
						var data = res.data;
						this.MaterialList = data.list;
						console.log(this.MaterialList)
					}
				})
			}
			
		},
		created(){
			this.getMaterialList()
		},
		components:{
			MySwiper
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.section{
	width: 100%;padding: 1rem 0;border-bottom: 1px solid gainsboro;
	.section-content{
		width: 90%;margin: 0 auto;align-items: center;
		.section-left{
			width: 8rem;height:8rem;background: url(../../static/img/keshitese.png) no-repeat center/contain;position: relative;
			.head{
				width:5.4rem;height:3.4rem;position: absolute;left: 1rem;bottom: 1.4rem;
				.headimg{height: 3.4rem;margin: 0 auto;display: block;}
			}
		}
		.section-right{
			width: calc(100% - 8rem);padding-left: 0.4rem;
			.title{height: 2.4rem;line-height: 2.4rem;color: #000000;font-size: 1.2rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
			.detail{color: gray;font-size: 1rem;height: 3rem;overflow: hidden;line-height: 1.5rem;text-overflow: ellipsis;
			display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
		}
	}
}
</style>
