<template>
	<div>
		<div class="section" v-for="(item,index) in list" @click="toDetail(index)">
			<div class="section-content flex-box">
				<img class="section-left" :src="item.img" />
				<div class="section-right">
					<p class="section-p2">
						<a class="name">{{ item.name }}</a>
						<a>{{ item.type }}</a>
					</p>
					<p class="section-p">
						<a>科室：</a>
						<a>{{ item.type2 }}</a>
					</p>
					<p class="section-p">
						<a>门诊时间：</a>
						<a>{{ item.time }}</a>
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
				list:[
					{name:"徐佩莉",img:"../../static/img/test.jpg",type:"主任中医师",type2:"儿科",time:"周四上午"},
					{name:"徐佩莉",img:"../../static/img/test.jpg",type:"主任中医师",type2:"儿科",time:"周四上午"},
					{name:"徐佩莉",img:"../../static/img/test.jpg",type:"主任中医师",type2:"儿科",time:"周四上午"},
					{name:"徐佩莉",img:"../../static/img/test.jpg",type:"主任中医师",type2:"儿科",time:"周四上午"},
					{name:"徐佩莉",img:"../../static/img/test.jpg",type:"主任中医师",type2:"儿科",time:"周四上午"},
					{name:"徐佩莉",img:"../../static/img/test.jpg",type:"主任中医师",type2:"儿科",time:"周四上午"}
				]
			}
		},
		methods:{
			toDetail:function(index){
				this.$router.push({path:'/desc-detail'})
			}
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
			flex: 1;padding-left: 1.5rem;color: gray;font-size: 1rem;
			.section-p{height:1.6rem;line-height:1.6rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
			.section-p2 {
				height:2.8rem;line-height:2.8rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;
				.name{font-size: 1.3rem;color: #000000;margin-right: 1rem;}
			}
			
		}
	}
	
}
</style>