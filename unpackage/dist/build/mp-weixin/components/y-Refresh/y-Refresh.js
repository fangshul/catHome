(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/y-Refresh/y-Refresh"],{"0e32":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i,r,a,s=500,o=0,u={props:{top:{type:Number,default:0}},data:function(){return{pageDeviation:0,pageTransition:0,refreshReady:!1,refreshing:!1,loadingText:["人前显贵，人后受罪"]}},computed:{pageTop:function(){return e.upx2px(this.top)}},created:function(){e.getSystemInfo({success:function(e){r=e.platform,s=e.windowHeight}})},methods:{pageTouchstart:function(e){a=!1,this.pageTransition=0,n=e.touches[0].pageY},pageTouchmove:function(e){a||(i=.4*(e.touches[0].pageY-n),i>=0&&(this.pageDeviation=i,this.$emit("setEnableScroll",!1)),i>=50&&!1===this.refreshReady?this.refreshReady=!0:i<50&&!0===this.refreshReady&&(this.refreshReady=!1),"ios"===r&&e.touches[0].pageY>s+10&&this.pageTouchend())},pageTouchend:function(){a=!0,0!==i&&(this.pageTransition=.3,i>=50?this.startPulldownRefresh():this.pageDeviation=0,!0===this.refreshReady&&(this.refreshReady=!1),this.$emit("setEnableScroll",!0),n=i=0)},startPulldownRefresh:function(){+new Date-o<100||(o=+new Date,this.refreshing=!0,this.pageDeviation=e.upx2px(90),this.$emit("refresh"))},endPulldownRefresh:function(){var t=this;setTimeout((function(){t.refreshing=!1,t.pageDeviation=e.upx2px(0)}),1200)}}};t.default=u}).call(this,n("543d")["default"])},"254e":function(e,t,n){"use strict";n.r(t);var i=n("0e32"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},6152:function(e,t,n){"use strict";n.r(t);var i=n("ebf0"),r=n("254e");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("6599");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"1b1b81ae",null,!1,i["a"],s);t["default"]=u.exports},6599:function(e,t,n){"use strict";var i=n("c9bd"),r=n.n(i);r.a},c9bd:function(e,t,n){},ebf0:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement;e._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/y-Refresh/y-Refresh-create-component',
    {
        'components/y-Refresh/y-Refresh-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6152"))
        })
    },
    [['components/y-Refresh/y-Refresh-create-component']]
]);