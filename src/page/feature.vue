<template>
	<div>
		<banner></banner>
		<div class="content clearfix">
			<div class="section fl" v-for="(item,index) in list" @click="toList(index,item.id)">
				<p class="type">{{ item.name }}</p>
			</div>
			<div class="section fl" v-for="(item,index) in typeList" @click="toList(index)">
				<p class="type">{{ item }}</p>
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
				typeList:["儿科","中医内科","内一科","内二科","内三科","骨伤科","外科","康复科","妇科","口腔科","针灸科","眼耳鼻喉科","皮肤科","麻醉科","检验科","放射科","特检科","内镜科","西药房","中药房"]
			
			}
		},
		created(){
			this.getDepartmentTypeList();
		},
		methods:{
			toList:function(index,id){
				var title = this.typeList[index];
				document.title = title;
				this.$router.push({path:'/feature-detail?id='+id})
			},
			getDepartmentTypeList:function(){
				this.$ajax({
					type:"post",
					url:this.url_path+"/getDepartmentTypeList.json",
					dataType:"json"
				}).then((res)=>{
			 		if(res){
			 			var data = res.data;
			 			this.list = data.list;
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
.section{
	width: 33.3%;background: url(../../static/img/zhuanjiajieshao2.png) no-repeat center/contain;height:8rem;text-align: center;line-height: 8rem;
	.type{font-size: 1.2em;}
}
</style>