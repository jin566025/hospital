<template>
	<div class="content">
		<p class="desc">儿科是我院重点特色科室之一，宁波市中医扶植专科，目前有床位41张，年收治病人1850人次，科室年门急诊量达10万人次，床位使用率96%。门诊大厅设立了电子叫号系统，方便了患儿就诊。</p>
		<p class="desc">科室共有专科医生十四名，中、西医各7名，其中中医正高级职称3人，西医正高级职称1人,中医正高级职称3人，西医正高级职称1人,中医正高级职称3人，西医正高级职称1人</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				datas:[]
			}
		},
		created(){
			this.getDepartmentInfo()
		},
		methods:{
			getDepartmentInfo:function(){
				var id = window.location.href.split("=")[1]
				this.$ajax({
					type:"post",
					url:this.url_path+"/getDepartmentTypeList.json",
					dataType:"json",
					params:{
						"departmentId":id
					}
				}).then((res)=>{
					if(res){
						var data = res.data;
						console.log(data)
					}
					
				})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	width: 90%;margin: 0 auto;padding: 2rem 0;font-family: arial;color: #000000;
	.desc{text-indent: 2em;font-size: 1.2rem;line-height: 2rem;}
}
</style>