(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/diary/diary"],{1959:function(t,e,n){"use strict";n.r(e);var a=n("4335"),r=n("8a0f");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("69d3");var i,c=n("f0c5"),d=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"2f8e3476",null,!1,a["a"],i);e["default"]=d.exports},4335:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={clLoadingMask:function(){return n.e("cl-uni/components/cl-loading-mask/cl-loading-mask").then(n.bind(null,"f1a3"))},yEmpty:function(){return n.e("components/y-Empty/y-Empty").then(n.bind(null,"3908"))}},r=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"5ae1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,a,r,o,i){try{var c=t[o](i),d=c.value}catch(u){return void n(u)}c.done?e(d):Promise.resolve(d).then(a,r)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function c(t){o(i,a,r,c,d,"next",t)}function d(t){o(i,a,r,c,d,"throw",t)}c(void 0)}))}}var c,d=wx.cloud.database(),u=d.collection("forum"),l={data:function(){return{load:!0,detailId:"",commentVal:"",current:0,commentList:[{avatarUrl:"https://6d61-matchbox-79a395-1302390714.tcb.qcloud.la/matchbox/avatar.png",content:"生活已经如此艰辛，让我怎能不努力",nickName:"小紫",time:"6-15",children:[{avatarUrl:"https://6d61-matchbox-79a395-1302390714.tcb.qcloud.la/matchbox/avatar.png",content:"生活已经如此艰辛，让我怎能不努力",nickName:"小紫",time:"6-15"}]}],detail:{}}},onLoad:function(e){if(console.log(e),c=this,e&&e.id){c.detailId=e.id,c.getdetail();var n=c.$store.state.diary.cardList;n.forEach((function(t){e.id==t.id&&(c.detail=t)}))}t.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]})},methods:{getdetail:function(){var t=this;return i(a.default.mark((function e(){var n,r,o,i,c,l;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.load=!0,e.next=3,u.doc(t.detailId).get({});case 3:return n=e.sent,r={},r.title=n.data.content,r.time="".concat(n.data.date.getMonth()+1,"-").concat(n.data.date.getDate()),r.openid=n.data._openid,e.next=10,d.collection("user").where({_openid:n.data._openid}).get();case 10:o=e.sent,r.avatarUrl=o.data[0].avatarUrl,r.nickName=o.data[0].name,i=[],c=0;case 15:if(!(c<n.data.imgList.length)){e.next=23;break}return e.next=18,wx.cloud.downloadFile({fileID:n.data.imgList[c]});case 18:l=e.sent,i.push({url:l.tempFilePath});case 20:c++,e.next=15;break;case 23:r.imgList=i,t.detail=r,t.commentList=n.data.comment,t.load=!1;case 27:case"end":return e.stop()}}),e)})))()},ViewImage:function(e,n){for(var a=[],r=0;r<n.length;r++)a.push(n[r].url);t.previewImage({current:e,urls:a})},addCommon:function(){var e=this;return i(a.default.mark((function n(){var r,o,i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=(new Date).Format("MM-dd hh:mm"),n.next=3,d.collection("user").where({_openid:t.getStorageSync("openid")}).get();case 3:o=n.sent,console.log(o),""===c.commentVal||(i={avatarUrl:o.data[0].avatarUrl,content:c.commentVal,nickName:o.data[0].name,time:r},c.commentList.splice(0,0,i),u.doc(e.detailId).update({data:{comment:c.commentList}})),c.commentVal="";case 7:case"end":return n.stop()}}),n)})))()},swiperChange:function(t){this.current=t.detail.current},toOthers:function(){t.navigateTo({url:"../personalCenter/personalCenter?id="+this.detail.openid})}}};e.default=l}).call(this,n("543d")["default"])},"69d3":function(t,e,n){"use strict";var a=n("d4dd"),r=n.n(a);r.a},"83c3":function(t,e,n){"use strict";(function(t){n("8df7");a(n("66fd"));var e=a(n("1959"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"8a0f":function(t,e,n){"use strict";n.r(e);var a=n("5ae1"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=r.a},d4dd:function(t,e,n){}},[["83c3","common/runtime","common/vendor"]]]);