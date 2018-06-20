<template>
	<div>
		<loading v-show="loadingShow"></loading>
		<div class="section">
			<div class="section-content flex-box">
				<img class="section-left" :onerror="errorImg01" :src="imgurl+doctorInfo.headImg" />
				<div class="section-right">
					<p class="section-p2">
						<a class="name">{{ doctorInfo.name }}</a>
						<a>{{ doctorInfo.job }}</a>
					</p>
					<p class="section-p">宁波市镇海区中医医院</p>
					<p class="section-p">
						<a>{{ doctorInfo.department }}</a>
						<a>{{ doctorInfo.job }}</a>
					</p>
				</div>
			</div>
		</div>
		<div class="times">
			<p>门诊时间：{{ doctorInfo.outpatientTime }}</p>
		</div>
		<div class="desc-content">
			<div class="desc-detail">
				<img class="desc-detail-icon" src="../../static/img/zhuanjiajieshao2.png" />
				<a class="desc-detail-a">医生简介：</a>
			</div>
			<p id="content-p" class="desc-detail-p" v-html="doctorInfo.content" ></p>
			<p id="content-p2"></p>
		</div>
	</div>
</template>

<script>
	import Loading from '../components/loading'
	export default{
		data(){
			return{
				doctorInfo:{},
				errorImg01: 'this.onerror=null;this.src="./static/img/circle4.png"',
				loadingShow:true
			}
		},
		created(){
			this.getDoctorInfo();
		},
		
		methods:{
			getDoctorInfo:function(){
				var id = window.location.href.split("id=")[1];
				this.$ajax({
					type:"post",
					url:this.url_path+"/getDoctorInfo.json",
					params:{
						"id":id
					},
					dataType:"json"
				}).then((res)=>{
			 		console.log(res)
			 		this.doctorInfo = res.data;
			 		this.loadingShow = false;
			 		this.$nextTick(function () {
				       var texts = document.getElementById("content-p");
				       var texts2 = document.getElementById("content-p2");
				       if(texts){
				       		var text_p = texts.querySelectorAll("p");
				 		    for(var i=0;i<text_p.length;i++){
				 		   		var node=document.createElement("p");
				 		   		node.style.padding = "0.2rem 0";
				 		   		node.style.textIndent = "2em";
				 		   		var textnode=document.createTextNode(text_p[i].innerText);
				 		   		node.appendChild(textnode);
				 		   		texts2.appendChild(node);
				 		    }
				       }
			 		   
				    })
			 	},(err)=>{
					console.log(err)
				})
			}
		},
		watch:{
			 "$route": "getDoctorInfo"
		},
		components:{
			Loading
		}
	}
</script>


<style  lang="less" rel="stylesheet/less" scoped>
.text-over{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.section{
	width: 100%;border-bottom: 1px solid gainsboro;padding: 0.5rem 0;
	.section-content{
		width: 90%;margin: 0 auto;align-items: center;
		.section-left{width: 6rem;height: 6rem;border-radius: 5px;}
		.section-right{
			flex: 1;padding-left: 1.5rem;color: gray;font-size: 1rem;
			.section-p{
				height:1.6rem;line-height:1.6rem;.text-over;
				a{margin-right: 0.5rem;}
			}
			.section-p2 {
				height:2.6rem;line-height:2.6rem;.text-over;
				.name{font-size: 1.3rem;color: #000000;margin-right: 1rem;}
			}
			
		}
	}
}
.times{
	width: 100%;border-bottom: 1px solid gainsboro;color: gray;padding: 2rem 0;
	p{width: 90%;margin: 0 auto;}
}
.desc-content{
	width:100%;color: gray;
	.desc-detail{
		width:90%;border-bottom: 1px solid gainsboro;padding: 1rem 0;margin: 0 auto;
		.desc-detail-icon{width: 2rem;height: 2rem;text-align: left;vertical-align: middle;margin-right: 1rem;}
		.desc-detail-a{vertical-align: middle;font-size: 1.2rem;}
	}
	.desc-detail-p{
		width:90%;font-size: 1rem;padding: 1rem 0;margin: 0 auto;line-height: 1.8rem;letter-spacing: 2px;display: none;
		p{
			span{white-space:none;}
		}
		
	}
	#content-p2{
		width:90%;font-size: 1rem;padding: 1rem 0;margin: 0 auto;line-height: 1.8rem;letter-spacing: 2px;
		
	}
}
span{white-space:none;}
</style>