(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myAdopt/myAdopt","components/uni-list-item/uni-list-item","components/uni-list/uni-list"],{"000d":function(t,e,n){"use strict";n.r(e);var o=n("ad0e"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"2d3d":function(t,e,n){"use strict";n.r(e);var o=n("9aa4"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"2fe6":function(t,e,n){"use strict";var o=n("ea74"),i=n.n(o);i.a},"768b":function(t,e,n){"use strict";var o=n("7f8f"),i=n.n(o);i.a},"7b53":function(t,e,n){"use strict";n.r(e);var o=n("be24"),i=n("000d");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("9354");var c,r=n("f0c5"),l=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=l.exports},"7f8f":function(t,e,n){},"85bc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(function(){return resolve(n("3b0a"))}.bind(null,n)).catch(n.oe)},i=function(){n.e("components/uni-badge/uni-badge").then(function(){return resolve(n("4e4a"))}.bind(null,n)).catch(n.oe)},a={name:"UniListItem",components:{uniIcons:o,uniBadge:i},props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:function(){return{type:"contact",color:"#000000",size:20}}},border:{type:Boolean,default:!0}},data:function(){return{isFirstChild:!1}},mounted:function(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{getForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniList",e=this.$parent,n=e.$options.name;while(n!==t){if(e=e.$parent,!e)return!1;n=e.$options.name}return e},onClick:function(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange:function(t){this.$emit("switchChange",t.detail)},openPage:function(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi:function(e){var n=this;t[e]({url:this.to,success:function(t){n.$emit("click",{data:t})},fail:function(t){n.$emit("click",{data:t}),console.error(t.errMsg)}})}}};e.default=a}).call(this,n("543d")["default"])},9354:function(t,e,n){"use strict";var o=n("aa9c"),i=n.n(o);i.a},9426:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"3b0a"))},uniBadge:function(){return n.e("components/uni-badge/uni-badge").then(n.bind(null,"4e4a"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"9aa4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a"));i(n("7b53")),i(n("e516"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,i,a,c){try{var r=t[a](c),l=r.value}catch(u){return void n(u)}r.done?e(l):Promise.resolve(l).then(o,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function r(t){a(c,o,i,r,l,"next",t)}function l(t){a(c,o,i,r,l,"throw",t)}r(void 0)}))}}var r=wx.cloud.database(),l=r.collection("adopt"),u={data:function(){return{bar:["已被领养","未被领养"],TabCur:0,list:[{label:"已被领养",value:1},{label:"未被领养",value:2}],val:2,info:"",id:"",itemindex:0,changeindex:"",load:!0}},onLoad:function(t){console.log(t),this.id=t.id,this.getadopted()},methods:{deleteadopt:function(t){var e=this,n=this;console.log(n.info[t]._id),this.$refs["confirmdelete"].open({title:"提示",message:"确定删除该领养",callback:function(o){var i=o.action;"confirm"==i?(e.load=!0,l.doc(n.info[t]._id).remove({success:function(t){console.log("delete",t),n.load=!1,0==n.itemindex?n.getadopted():n.getnotadopt()}})):console.log("can"),console.log(i)}})},open:function(){var t=this,e=this;this.$refs["confirm"].open({title:"提示",message:"确定更改领养状态",callback:function(n){var o=n.action;if("confirm"==o){console.log("con"),console.log(t.info[t.changeindex]._id);var i=!t.info[t.changeindex].ifadopt;l.doc(t.info[t.changeindex]._id).update({data:{ifadopt:i},success:function(t){console.log(t),console.log(i),console.log(e),e.$refs["toast"].open({message:"更改成功"}),i?(console.log("no"),e.getnotadopt()):e.getadopted()}})}else console.log("can");console.log(o)}})},changtype:function(t,e){this.changeindex=e,console.log(t),console.log(this.info[e]),(0==this.info[e].ifadopt&&1==t.value||1==this.info[e].ifadopt&&2==t.value)&&this.open()},getimg:function(){var t=this;return c(o.default.mark((function e(){var n,i;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.info.length)){e.next=10;break}return e.next=4,wx.cloud.downloadFile({fileID:t.info[n].imgList[0]});case 4:i=e.sent,console.log(i.tempFilePath),t.info[n].headImg=i.tempFilePath;case 7:n++,e.next=1;break;case 10:t.load=!1,t.$forceUpdate(),console.log(t.info);case 13:case"end":return e.stop()}}),e)})))()},getadopted:function(){var t=this;return c(o.default.mark((function e(){var n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.load=!0,e.next=3,l.orderBy("date","desc").where({_openid:t.id,ifadopt:!0}).get();case 3:n=e.sent,t.info=n.data,console.log(n),t.getimg();case 7:case"end":return e.stop()}}),e)})))()},getnotadopt:function(){var t=this;return c(o.default.mark((function e(){var n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.load=!0,e.next=3,l.orderBy("date","desc").where({_openid:t.id,ifadopt:!1}).get();case 3:n=e.sent,t.info=n.data,console.log(n),t.getimg();case 7:case"end":return e.stop()}}),e)})))()},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),console.log(t.currentTarget.dataset.id),1==t.currentTarget.dataset.id?(this.itemindex=1,this.getnotadopt(),this.val=2):0==t.currentTarget.dataset.id&&(this.itemindex=0,this.val=1,this.getadopted())}}};e.default=u},"9ec9":function(t,e,n){"use strict";n.r(e);var o=n("85bc"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},aa9c:function(t,e,n){},ad0e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=o},bd7a:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uniList:function(){return Promise.resolve().then(n.bind(null,"7b53"))},uniListChat:function(){return n.e("components/uni-list-chat/uni-list-chat").then(n.bind(null,"8b53"))},clIcon:function(){return Promise.all([n.e("common/vendor"),n.e("cl-uni/components/cl-icon/cl-icon")]).then(n.bind(null,"5a7c"))},clSelect:function(){return Promise.all([n.e("common/vendor"),n.e("cl-uni/components/cl-select/cl-select")]).then(n.bind(null,"795e"))},clConfirm:function(){return n.e("cl-uni/components/cl-confirm/cl-confirm").then(n.bind(null,"a330"))},clLoadingMask:function(){return n.e("cl-uni/components/cl-loading-mask/cl-loading-mask").then(n.bind(null,"f1a3"))},clToast:function(){return Promise.all([n.e("common/vendor"),n.e("cl-uni/components/cl-toast/cl-toast")]).then(n.bind(null,"e69c"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},be24:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},d478:function(t,e,n){"use strict";(function(t){n("8df7");o(n("66fd"));var e=o(n("ec1f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e516:function(t,e,n){"use strict";n.r(e);var o=n("9426"),i=n("9ec9");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("768b");var c,r=n("f0c5"),l=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=l.exports},ea74:function(t,e,n){},ec1f:function(t,e,n){"use strict";n.r(e);var o=n("bd7a"),i=n("2d3d");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("2fe6");var c,r=n("f0c5"),l=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"148d3c81",null,!1,o["a"],c);e["default"]=l.exports}},[["d478","common/runtime","common/vendor"]]]);