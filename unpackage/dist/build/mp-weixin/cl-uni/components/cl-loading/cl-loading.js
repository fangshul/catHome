(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["cl-uni/components/cl-loading/cl-loading"],{"5ecc":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cl-loading",props:{color:String,borderColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},borderWidth:{type:String,default:"4rpx"},theme:{type:String,default:"default"},size:{type:Number,default:25}},computed:{rh:function(){return this.size/8},rw:function(){return this.size/20},spinStyle:function(){return{height:2*this.rh+"px",width:2*this.rw+"px",color:this.color}}}};e.default=n},"78ba":function(t,e,r){"use strict";r.r(e);var n=r("5ecc"),l=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=l.a},"7f53":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var l=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__get_style([t.spinStyle,{top:0,left:"calc(50% - "+t.rw+"px)"}])),n=t.__get_style([t.spinStyle,{top:"calc(50% - "+t.rh+"px)",right:t.rh-t.rw+"px",transform:"rotate(90deg)"}]),l=t.__get_style([t.spinStyle,{left:"calc(50% - "+t.rw+"px)",bottom:0}]),o=t.__get_style([t.spinStyle,{left:t.rh-t.rw+"px",top:"calc(50% - "+t.rh+"px)",transform:"rotate(90deg)"}]);t.$mp.data=Object.assign({},{$root:{s0:r,s1:n,s2:l,s3:o}})},o=[]},9273:function(t,e,r){"use strict";r.r(e);var n=r("7f53"),l=r("78ba");for(var o in l)"default"!==o&&function(t){r.d(e,t,(function(){return l[t]}))}(o);var c,i=r("f0c5"),a=Object(i["a"])(l["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'cl-uni/components/cl-loading/cl-loading-create-component',
    {
        'cl-uni/components/cl-loading/cl-loading-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9273"))
        })
    },
    [['cl-uni/components/cl-loading/cl-loading-create-component']]
]);
