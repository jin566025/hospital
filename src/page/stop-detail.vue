<template>
	<div class="content">
		<p class="title">9月专家停诊信息</p>
		<div class="section flex-box">
			<div class="section-left">9月2日</div>
			<div class="section-right">
				<p>
					<a>头颈肿瘤科</a>
					<a class="name">王旭东</a>
				</p>
			</div>
		</div>
		<div class="section flex-box">
			<div class="section-left">9月3日</div>
			<div class="section-right">
				<p>
					<a>乳腺肿瘤三科</a>
					<a class="name">张瑾</a>
				</p>
			</div>
		</div>
		<div class="section flex-box">
			<div class="section-left">9月3日-5日</div>
			<div class="section-right">
				<p>
					<a>放假6日开始上班</a>
					<a class="name"></a>
				</p>
			</div>
		</div>
		<div class="section flex-box">
			<div class="section-left">9月7日</div>
			<div class="section-right">
				<p>
					<a>乳腺肿瘤三科</a>
					<a class="name">赵颖</a>
				</p>
				<p>
					<a>肝胆肿瘤科</a>
					<a class="name">张惆</a>
				</p>
				<p>
					<a>妇部肿瘤科</a>
					<a class="name">刘文欣</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	font-size: 1.3rem;color: #000000;font-family: arial;width: 90%;margin: 0 auto;
	.title{padding: 2rem 0;}
	.section{
		width: 100%;padding: 0.2rem 0;
		.section-left{margin-right: 1rem;padding:0.2rem 0;}
		.section-right{
			flex: 1;
			p{
				padding:0.2rem 0;
				.name{margin-left: 1rem;}
			}
			
		}
	}
}
</style>