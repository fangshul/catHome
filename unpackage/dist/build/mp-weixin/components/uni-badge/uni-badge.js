(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{2348:function(t,e,n){},"4e4a":function(t,e,n){"use strict";n.r(e);var u=n("551e"),i=n("e12d");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("5b71");var r,c=n("f0c5"),f=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"f952f9e2",null,!1,u["a"],r);e["default"]=f.exports},"551e":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"5b71":function(t,e,n){"use strict";var u=n("2348"),i=n.n(u);i.a},bfc3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},e12d:function(t,e,n){"use strict";n.r(e);var u=n("bfc3"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4e4a"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
