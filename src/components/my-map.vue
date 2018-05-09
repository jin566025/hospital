<template>
    <div>
        <div id="container" style="width:500px; height:300px"></div>

    </div>
</template>
<script>
    import AMap from 'AMap'
    var map
    export default {
        mounted: function () {
            this.init()
        },
        methods: {
            init: function () {
                var lnglat = [121.697123,29.952446];
			    map = new AMap.Map('container', {
			        resizeEnable: true,
			        center: lnglat,
					zoom: 15
			    });
			    var marker = new AMap.Marker({
			        position: lnglat,
			        offset: new AMap.Pixel(-60, 0)
			    });
			    marker.setMap(map);
			
			    var content='<div class="info-title">宁波市镇海区中医医院</div>' +
			   				'<div class="info-content">'+
			   				'<p>地址:镇海区招宝山街道环城西路51号</p>'+
			   				'<p>导医台电话:0574-86282800  传真:0574-86291689</p>'+
			   				'</div>';
			    var infowindow1 = new AMap.AdvancedInfoWindow({
			        content: content,
			        offset: new AMap.Pixel(-80, -30)
			    });
			    infowindow1.open(map,lnglat)
			    var amapLogo = document.querySelector(".amap-logo");
			    var amapCopyright = document.querySelector(".amap-copyright");
			    amapLogo.style.display =  "none";
			    amapCopyright.style.visibility = "hidden";
            }
        }
    }
</script>
<style scoped>
	
</style>