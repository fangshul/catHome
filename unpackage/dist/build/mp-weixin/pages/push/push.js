(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/push/push"],{"0dc9":function(n,e,t){},"104c":function(n,e,t){"use strict";var o=t("0dc9"),i=t.n(o);i.a},"285a":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("a34a")),i=a(t("8328"));function a(n){return n&&n.__esModule?n:{default:n}}function c(n,e,t,o,i,a,c){try{var s=n[a](c),u=s.value}catch(r){return void t(r)}s.done?e(u):Promise.resolve(u).then(o,i)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(o,i){var a=n.apply(e,t);function s(n){c(a,o,i,s,u,"next",n)}function u(n){c(a,o,i,s,u,"throw",n)}s(void 0)}))}}var u=wx.cloud.database(),r=u.collection("forum"),l={data:function(){return{imgList:[],content:"",ifloading:!1,loadingText:""}},methods:{ChooseImage:function(){var e=this;n.chooseImage({count:9,sizeType:["original"],sourceType:["album"],success:function(n){var t=n;n.tempFilePaths.forEach((function(n){wx.getFileSystemManager().readFile({filePath:n,success:function(n){wx.cloud.callFunction({name:"imgSecCheck",data:{img:n.data}}).then((function(n){200==n.result.code?(0!=e.imgList.length?e.imgList=e.imgList.concat(t.tempFilePaths):e.imgList=t.tempFilePaths,console.log("图片可以")):500==n.result.code&&(console.log("图片不ok"),e.$refs["toast"].open({type:"warning",message:"内容含有违法违规内容",position:"middle",icon:"warning"}))}))}})}))}})},DelImg:function(n){var e=this;e.imgList.splice(n.currentTarget.dataset.index,1)},ViewImage:function(e){var t=this;n.previewImage({current:e,urls:t.imgList})},push:function(){var e=this;return s(o.default.mark((function t(){var a,c,s,u;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,c=[],console.log(e.imgList),console.log(e.content),s=0;case 5:if(!(s<e.imgList.length)){t.next=13;break}return t.next=8,wx.cloud.uploadFile({cloudPath:"forum/"+(0,i.default)()+".png",filePath:e.imgList[s]});case 8:u=t.sent,c.push(u.fileID);case 10:s++,t.next=5;break;case 13:console.log(a.content),""===e.content?e.$refs["toast"].open({type:"warning",message:"内容不能为空",position:"middle",icon:"warning"}):(a.ifloading=!0,a.loadingText="发布中",wx.cloud.callFunction({name:"checkStr",data:{inputText:a.content},success:function(e){console.log("ok",e),r.add({data:{content:a.content,viewed:0,imgList:c,date:new Date,like:0,comment:[],likes:[]},success:function(e){a.ifloading=!1,a.$refs["toast"].open({type:"success",message:"发布成功",position:"middle",icon:"success"}),n.reLaunch({url:"../Forum/Forum"})},fail:function(n){a.ifloading=!1,a.$refs["toast"].open({type:"error",message:"发布失败",position:"middle",icon:"error"}),console.log(n)}})},fail:function(n){a.ifloading=!1,a.content="",a.$refs["toast"].open({type:"warning",message:"内容含有违法违规内容",position:"middle",icon:"warning"})}}));case 15:case"end":return t.stop()}}),t)})))()}}};e.default=l}).call(this,t("543d")["default"])},"821e":function(n,e,t){"use strict";t.r(e);var o=t("ba71"),i=t("8c3e");for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);t("104c");var c,s=t("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"30ac4abe",null,!1,o["a"],c);e["default"]=u.exports},"8c3e":function(n,e,t){"use strict";t.r(e);var o=t("285a"),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=i.a},ba71:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return o}));var o={clToast:function(){return Promise.all([t.e("common/vendor"),t.e("cl-uni/components/cl-toast/cl-toast")]).then(t.bind(null,"e69c"))},clLoadingMask:function(){return t.e("cl-uni/components/cl-loading-mask/cl-loading-mask").then(t.bind(null,"f1a3"))}},i=function(){var n=this,e=n.$createElement;n._self._c},a=[]},d3a9:function(n,e,t){"use strict";(function(n){t("8df7");o(t("66fd"));var e=o(t("821e"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["d3a9","common/runtime","common/vendor"]]]);