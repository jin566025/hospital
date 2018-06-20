// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueWechatTitle from 'vue-wechat-title'

Vue.use(VueWechatTitle)
Vue.use(VueRouter)
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

Vue.prototype.$ajax = axios
Vue.prototype.url_path = "http://longhuaweb.nbjiakai.com:8484/LongHua/rest"
Vue.prototype.imgurl = "http://longhuaweb.nbjiakai.com:8484/"
Vue.prototype.toDetail = function(id){
	this.$ajax({
		type:"post",
		url:this.url_path+"/getMaterialInfo.json",
		params:{
			"id":id
		},
		dataType:"json",
	}).then((res)=>{
		if(res){
			var data = res.data;
			if(data.openway){
				var urls = data.outUrl;
				var strs = "mp.weixin.qq.com";
			 	if(urls.indexOf(strs)!=-1){
			 		window.location.href=data.outUrl+"&scene=4#wechat_redirect"
			 	}else{
			 		window.location.href=data.outUrl
			 	}

			}
		}
	})
}
//Vue.prototype.getAdList = function(position,max){
//	var param = {};
//	param.position = position;
//	if(max){
//		param.max = max;
//	}
//	this.$ajax({
//		type:"post",
//		url:this.url_path+"/getAdList.json",
//		dataType:"json",
//		params:param,
//	}).then((res)=>{
//		console.log(res)
//		if(res.data.stateCode==0){
//			console.log(position)
//			var data = res.data;
//			this.swiperImg = data.list;
//		}
//	})
//}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

