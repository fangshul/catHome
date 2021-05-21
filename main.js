import Vue from 'vue'
import App from './App'

import ClUni from "cl-uni";
import lodash from 'lodash'
// 挂载全局状态管理
import store from './store/index.js'
Vue.prototype.$store = store
Vue.prototype.$lodash = lodash


Vue.config.productionTip = false

var haveInfo
var info = uni.getStorageSync('userInfo')
if (info == null || info == '' || info == undefined) {
	haveInfo = false
} else {
	haveInfo = true
}




Vue.prototype.$haveInfo = haveInfo
Vue.prototype.$province = ''
Vue.prototype.$city = ''



App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

//格式化时间  此处应该写在公共方法里面  但本人习惯写这
Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, // 月份
		"d+": this.getDate(), // 日
		"h+": this.getHours(), // 小时
		"m+": this.getMinutes(), // 分
		"s+": this.getSeconds(), // 秒
		"q+": Math.floor((this.getMonth() + 3) / 3), // 季度
		"S": this.getMilliseconds() // 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[
			k]).substr(("" + o[k]).length)));
	return fmt;
}


