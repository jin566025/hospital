<template>
	<div>
		<banner></banner>
		<div class="section" @click="toDetail(index)" v-for="(item,index) in MaterialList">
			<div class="section-content  flex-box">
				<div class="section-left">
					<div class="head"  :style="item.img ? {backgroundImage: 'url(' + item.img+ ')'} : {backgroundImage: 'url(./static/img/morentupian.png)'}" ></div>
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
	import Banner from '../components/banner'
	export default{
		data(){
			return {
				MaterialList:[
					{title:"这是测试的title",summary:"这是测试的summary",img:""}
				]
			}
		},
		methods:{
			
			getMaterialList:function(){
				this.$ajax({
					type:"post",
					dataType:"json",
					params:{
						"typeId":4
					},
					url:this.url_path+"/getMaterialList.json"
				}).then((res)=>{
					var data = res.data;
					this.MaterialList = data.list;
					console.log(this.MaterialList)
				})
			}
		},
		components:{
			Banner
		},
		created(){
			this.getMaterialList()
		},
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.section{
	width: 100%;padding: 1rem 0;border-bottom: 1px solid gainsboro;
	.section-content{
		width: 90%;margin: 0 auto;align-items: center;
		.section-left{
			width: 8rem;height:8rem;background: url(../../static/img/keshitese.png) no-repeat center/contain;position: relative;
			.head{width:5.4rem;height:3.4rem;position: absolute;left: 1rem;bottom: 1.4rem;background-repeat: no-repeat;background-position: center;background-size: contain;}
		}
		.section-right{
			flex: 1;padding-left: 0.4rem;
			.title{height: 2.4rem;line-height: 2.4rem;color: #000000;font-size: 1.2rem;}
			.detail{color: gray;font-size: 1rem;height: 3rem;overflow: hidden;line-height: 1.5rem;text-overflow: ellipsis;
			display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
		}
	}
}
</style>