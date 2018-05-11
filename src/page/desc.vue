<template>
	<div>
		<banner></banner>
		<div class="content clearfix">
			<div class="section fl" v-for="(item,index) in list" @click="toList(item.name,item.id)">
				<p class="type">{{ item.name }}</p>
			</div>

		</div>
		
	</div>
</template>

	
<script>
	import Banner from '../components/banner'
	export default{
		data(){
			return {
				list:[],
//				typeList:["儿科","中医内科","内一科","内二科","内三科","骨伤科","外科","康复科","妇科","口腔科","针灸科","眼耳鼻喉科","皮肤科","麻醉科","检验科","放射科","特检科","内镜科","西药房","中药房"]
			}
		},
		created(){
			this.getDepartmentTypeForDoctorList();
		},
		methods:{
			toList:function(name,id){
				document.title = name;
				this.$router.push({path:'/desc-list?id='+id})
			},
			getDepartmentTypeForDoctorList:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getDepartmentTypeForDoctorList.json",
					dataType:"json"
				}).then((res)=>{
			 		if(res){
			 			var data = res.data;
			 			this.list = data.list;
			 			console.log(data)
			 		}
			 	})
			}
			
		},
		components:{
			Banner
		}
	}
</script>
<style  lang="less" rel="stylesheet/less" scoped>
.content{
	padding: 2rem 0;
	.section{
		width: 33.3%;background: url(../../static/img/zhuanjiajieshao2.png) no-repeat center/contain;height:8rem;text-align: center;line-height: 8rem;
		.type{font-size: 1.2em;}
	}
}

</style>