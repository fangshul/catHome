(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/FindcatDetail/FindcatDetail"],{"28d0":function(t,e,n){"use strict";n.r(e);var a=n("5cd3"),i=n("ddb5");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a1e0");var c,l=n("f0c5"),d=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"bfecee1c",null,!1,a["a"],c);e["default"]=d.exports},"5cd3":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={clLoadingMask:function(){return n.e("cl-uni/components/cl-loading-mask/cl-loading-mask").then(n.bind(null,"f1a3"))},clButton:function(){return n.e("cl-uni/components/cl-button/cl-button").then(n.bind(null,"73b2"))}},i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},a1e0:function(t,e,n){"use strict";var a=n("d6a8"),i=n.n(a);i.a},cc05:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("a34a")),i=c(n("a3dd")),o=c(n("25d9"));function c(t){return t&&t.__esModule?t:{default:t}}function l(t,e,n,a,i,o,c){try{var l=t[o](c),d=l.value}catch(u){return void n(u)}l.done?e(d):Promise.resolve(d).then(a,i)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){l(o,a,i,c,d,"next",t)}function d(t){l(o,a,i,c,d,"throw",t)}c(void 0)}))}}var u=wx.cloud.database(),s=u.collection("findCat"),r={data:function(){return{loading:!0,allok:{getimgurl:!1,getLocation:!1,getdate:!1},findcatdata:"",imgs:[],location:"",province:"",date:"",type:"",headimg:"",catData:[{icon:"emoji",info:"宿舍"},{icon:"male",info:"男生"},{icon:"magic",info:"1岁"},{icon:"favor",info:"已驱虫"},{icon:"vip",info:"已绝育"},{icon:"tag",info:"已免疫"}],swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}]}},onLoad:function(t){var e=this;console.log(o.default),s.doc(t.id).get().then((function(t){console.log(t),e.findcatdata=t.data,e.getimgurl(),e.getLocation(e.findcatdata.lostLocation),e.getdate(e.findcatdata.date),e.getheadimg()}))},methods:{getheadimg:function(){var t=this;u.collection("user").where({_openid:this.findcatdata._openid}).get({}).then((function(e){t.headimg=e.data[0].avatarUrl,console.log("4")}))},gotoCenter:function(){t.navigateTo({url:"../personalCenter/personalCenter?id="+this.findcatdata._openid})},copywechat:function(){console.log(this.findcatdata.masterWechat),wx.setClipboardData({data:this.findcatdata.masterWechat,success:function(t){console.log(t)},fail:function(t){console.log(t)}})},copyphone:function(){wx.setClipboardData({data:this.findcatdata.masterPhone,success:function(t){}})},getdate:function(t){this.date="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate(),"  ").concat(t.getHours(),":").concat(t.getMinutes()),console.log("3")},getLocation:function(t){for(var e=0;e<i.default.length;e++)if(i.default[e].value==t[0])for(var n=0;n<i.default[e].children.length;n++)if(i.default[e].children[n].value==t[1]){this.location=i.default[e].children[n].label,this.province=i.default[e].label;break}},getimgurl:function(){var t=this;return d(a.default.mark((function e(){var n,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.findcatdata.imgList.length)){e.next=9;break}return e.next=4,wx.cloud.downloadFile({fileID:t.findcatdata.imgList[n]});case 4:i=e.sent,t.imgs.push(i.tempFilePath);case 6:n++,e.next=1;break;case 9:t.loading=!1;case 10:case"end":return e.stop()}}),e)})))()}}};e.default=r}).call(this,n("543d")["default"])},d6a8:function(t,e,n){},d72c:function(t,e,n){"use strict";(function(t){n("8df7");a(n("66fd"));var e=a(n("28d0"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ddb5:function(t,e,n){"use strict";n.r(e);var a=n("cc05"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}},[["d72c","common/runtime","common/vendor"]]]);