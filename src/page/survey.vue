<template>
	<div class="content">
		<banner></banner>
		<div class="container">
			<p>镇海区中医医院成立于1990年5月，是一所集中医医疗、教学、科研、预防于一体的国家级二级甲等中医医院。</p>
			<p>医院坐落于镇海区招宝山街道环城西路51号，总建筑面积34615平方米，主楼高15层。</p>
			<p>医院先后获得浙江省平安医院、浙江省卫生先进单位、浙江省绿色医院、宁波市文明单位、宁波市职业道德建设先进单位、宁波市行风建设先进集体、宁波市“创先争优”活动“双强”示范点、宁波市文明窗口、宁波市爱国卫生工作先进集体、宁波市治安安全单位、宁波市人民满意医院先进单位等荣誉称号。</p>
		</div>
	</div>
</template>

<script>
	import Banner from '../components/banner'
	export default{
		components:{
			Banner
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>

.container{
	width: 92%;margin: 0 auto;margin-top: 1rem;
	p{font-size: 1.3333rem;color: rgb(51, 51, 51);font-family: arial;text-indent: 2em;line-height: 2rem;}
}
</style>