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
Vue.prototype.url_path = "http://192.168.16.100:8080/LongHua/rest"
Vue.prototype.toDetail = function(index){
	var id = index+1
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
				window.location.href=data.outUrl
			}
		}
	})
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

