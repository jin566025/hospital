<template>
	<div>
		<div class="section" v-for="(item,index) in list" @click="toDetail(item.id)">
			<div class="section-content flex-box">
				<img  :onerror="errorImg01" class="section-left" :src="item.headImg ? imgurl+item.headImg:'./static/img/circle4.png'"  />
				<div class="section-right">
					<p class="section-p2">
						
						<a class="name">{{ item.name }}</a>
						<a>{{ item.job }}</a>
					</p>
					<p class="section-p">
						<a>科室：</a>
						<a>{{ item.department }}</a>
					</p>
					<p class="section-p">
						<a>门诊时间：</a>
						<a>{{ item.outpatientTime }}</a>
					</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[],
				errorImg01: 'this.onerror=null;this.src="./static/img/circle4.png"'
			}
		},
		created(){
			this.getDoctorList()
		},
		methods:{
			toDetail:function(id){
				this.$router.push({path:'/desc-detail?id='+id})
			},
			getDoctorList:function(){
				var id = window.location.href.split("id=")[1];
				this.$ajax({
					type:"post",
					url:this.url_path+"/getDoctorList.json",
					params:{
						"departmentId":id
					},
					dataType:"json"
				}).then((res)=>{
					console.log(res)
					if(res){
			 			var data = res.data;
			 			this.list = data.list;
			 		}
				})
			}
		},
		watch:{
			 "$route": "getDoctorList"
		}
	}
</script>

<style  lang="less" rel="stylesheet/less" scoped>
.section{
	width: 100%;border-bottom: 1px solid gainsboro;padding: 1rem 0;
	.section-content{
		width: 90%;margin: 0 auto;align-items: center;
		.section-left{width: 6rem;height: 6rem;border-radius: 5px;}
		.section-right{
			padding-left: 1.5rem;color: gray;font-size: 1rem;width: calc(100% - 6rem);
			.section-p{height:1.6rem;line-height:1.6rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
			.section-p2 {
				height:2.8rem;line-height:2.8rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;
				.name{font-size: 1.3rem;color: #000000;margin-right: 1rem;}
			}
			
		}
	}
	
}
</style>