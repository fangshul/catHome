(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/y-Fab/y-Fab"],{"017a":function(t,e,i){"use strict";i.r(e);var n=i("3062"),r=i("abda");for(var u in r)"default"!==u&&function(t){i.d(e,t,(function(){return r[t]}))}(u);i("dff2");var a,f=i("f0c5"),s=Object(f["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=s.exports},3062:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=(t._self._c,t.getLeft()),n=t.getRight();t.$mp.data=Object.assign({},{$root:{m0:i,m1:n}})},u=[]},a0b1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiFab",props:{left:{type:Number,default:0},right:{type:Number,default:80},bottom:{type:Number,default:100},width:{type:Number,default:108},height:{type:Number,default:108},radius:{type:String,default:"50%"},bgColor:{type:String,default:"#435257"},color:{type:String,default:"#fff"},btnList:{type:Array,default:function(){return[]}},maskClosable:{type:Boolean,default:!1}},data:function(){return{isOpen:!1,hidden:!0,timer:null}},methods:{getLeft:function(){var t="auto";return this.left&&!this.right&&(t=this.left+"rpx"),t},getRight:function(){var t=this.right+"rpx";return this.left&&!this.right&&(t="auto"),t},handleClick:function(t){var e=this;this.hidden=!1,clearTimeout(this.timer),-1==t&&this.btnList.length?this.isOpen=!this.isOpen:(this.$emit("click",{index:t}),this.isOpen=!1),this.isOpen||(this.timer=setTimeout((function(){e.hidden=!0}),200))},handleClickCancel:function(){this.maskClosable&&(this.isOpen=!1)}},beforeDestroy:function(){clearTimeout(this.timer),this.timer=null}};e.default=n},abda:function(t,e,i){"use strict";i.r(e);var n=i("a0b1"),r=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,(function(){return n[t]}))}(u);e["default"]=r.a},dc15:function(t,e,i){},dff2:function(t,e,i){"use strict";var n=i("dc15"),r=i.n(n);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/y-Fab/y-Fab-create-component',
    {
        'components/y-Fab/y-Fab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("017a"))
        })
    },
    [['components/y-Fab/y-Fab-create-component']]
]);