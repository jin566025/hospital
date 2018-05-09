<template>
	<div>
		<div class="section">
			<div class="section-content flex-box">
				<img class="section-left" src="../../static/img/test.jpg" />
				<div class="section-right">
					<p class="section-p2">
						<a class="name">徐佩莉</a>
						<a>主任中医师</a>
					</p>
					<p class="section-p">宁波市镇海区中医医院</p>
					<p class="section-p">
						<a>儿科</a>
						<a>主任中医师</a>
					</p>
				</div>
			</div>
		</div>
		<div class="times">
			<p>门诊时间：周四、周六下午</p>
		</div>
		<div class="desc-content">
			<div class="desc-detail">
				<img class="desc-detail-icon" src="../../static/img/zhuanjiajieshao1.png" />
				<a class="desc-detail-a">医生简介：</a>
			</div>
			<p class="desc-detail-p">1984年毕业于浙江中医学院，曾先后在青岛市中医院、宁波妇儿医院进修。1999年参加浙江省中青年中医临床学科带头人和专科技术骨干培训项目。</p>
		</div>
	</div>
</template>

<script>
</script>


<style  lang="less" rel="stylesheet/less" scoped>
.text-over{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.section{
	width: 100%;border-bottom: 1px solid gainsboro;padding: 1rem 0;
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
				height:2.8rem;line-height:2.8rem;.text-over;
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
	.desc-detail-p{width:90%;font-size: 1rem;padding: 1rem 0;margin: 0 auto;line-height: 1.8rem;}
}
</style>