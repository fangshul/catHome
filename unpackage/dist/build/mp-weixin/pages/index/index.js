(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0945":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,a,o,c,i){try{var r=t[c](i),d=r.value}catch(u){return void n(u)}r.done?e(d):Promise.resolve(d).then(a,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function r(t){c(i,a,o,r,d,"next",t)}function d(t){c(i,a,o,r,d,"throw",t)}r(void 0)}))}}var r=wx.cloud.database(),d=r.collection("findCat"),u=r.collection("adopt"),s=function(){n.e("components/vear-carousel/vear-carousel").then(function(){return resolve(n("f67a"))}.bind(null,n)).catch(n.oe)},l={components:{carousel:s},data:function(){return{load:"",title:"Hello",imgList:[{url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3488207672,3352446836&fm=26&gp=0.jpg",id:1},{url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2653786338,2258592089&fm=26&gp=0.jpg",id:2}],findcat:[],adoptdata:[]}},onShow:function(){this.load=!0,this.findcat=[],this.adoptdata=[],this.getfindcatdata(),this.getadoptdata()},onLoad:function(){var t=this,e=this;wx.getLocation({type:"wgs84",success:function(t){console.log(t);var n=t.latitude,a=t.longitude;t.speed,t.accuracy;e.getProvinceName(n,a)}}),wx.cloud.downloadFile({fileID:"cloud://cloud1-4grgkkd40c94fb6a.636c-cloud1-4grgkkd40c94fb6a-1305831904/lunbo.png",success:function(e){console.log(e.tempFilePath),t.imgList.push({url:e.tempFilePath,id:3})}})},methods:{getProvinceName:function(e,n){wx.request({url:"https://apis.map.qq.com/ws/geocoder/v1/?location="+e+","+n+"&key=4W2BZ-WTC3J-IC4FD-KFYJG-63EF6-K2FAA",data:{},success:function(e){console.log("now",e),t.setStorageSync("city",e.data.result.address_component.city),t.setStorageSync("province",e.data.result.address_component.province)}})},selectedBanner:function(t,e){console.log("",t,e)},getadoptdata:function(){var t=this;return i(a.default.mark((function e(){var n,o,c,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.orderBy("date","desc").get({});case 2:n=e.sent,o=n.data.length>3?3:n.data.length,console.log(n),c=0;case 6:if(!(c<o)){e.next=15;break}return t.adoptdata.push(n.data[c]),e.next=10,wx.cloud.downloadFile({fileID:n.data[c].imgList[0]});case 10:i=e.sent,t.adoptdata[c].headImg=i.tempFilePath;case 12:c++,e.next=6;break;case 15:t.$forceUpdate(),t.load&&(t.load=!1);case 17:case"end":return e.stop()}}),e)})))()},getfindcatdata:function(){var t=this;return i(a.default.mark((function e(){var n,o,c,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.orderBy("date","desc").get({});case 2:n=e.sent,console.log("find",n),o=n.data.length>3?3:n.data.length,c=0;case 6:if(!(c<o)){e.next=15;break}return t.findcat.push(n.data[c]),e.next=10,wx.cloud.downloadFile({fileID:n.data[c].imgList[0]});case 10:i=e.sent,t.findcat[c].headImg=i.tempFilePath;case 12:c++,e.next=6;break;case 15:t.$forceUpdate(),t.load&&(t.load=!1);case 17:case"end":return e.stop()}}),e)})))()}}};e.default=l}).call(this,n("543d")["default"])},1576:function(t,e,n){},"440d":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={clLoadingMask:function(){return n.e("cl-uni/components/cl-loading-mask/cl-loading-mask").then(n.bind(null,"f1a3"))}},o=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"659a":function(t,e,n){"use strict";n.r(e);var a=n("440d"),o=n("e8a2");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("fa45");var i,r=n("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"3599543c",null,!1,a["a"],i);e["default"]=d.exports},"83d8":function(t,e,n){"use strict";(function(t){n("8df7");a(n("66fd"));var e=a(n("659a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e8a2:function(t,e,n){"use strict";n.r(e);var a=n("0945"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=o.a},fa45:function(t,e,n){"use strict";var a=n("1576"),o=n.n(a);o.a}},[["83d8","common/runtime","common/vendor"]]]);