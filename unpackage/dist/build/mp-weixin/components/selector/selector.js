(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/selector/selector"],{"2e9e":function(e,n,l){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=o(l("a3dd")),a=o(l("25d9"));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){Promise.all([l.e("common/vendor"),l.e("components/lb-picker/index")]).then(function(){return resolve(l("c965"))}.bind(null,l)).catch(l.oe)},c={name:"selector",components:{LbPicker:i},props:{ifinfo:{type:Boolean,default:!0}},data:function(){return{list1:t.default,value2:["340000","340800"],label2:"",province:"广东",city:"汕头",catlist:a.default,catsex:[{label:"母猫",value:1},{label:"公猫",value:2}],infolist:[{label:"已绝育",value:1},{label:"已驱虫",value:2},{label:"已免疫",value:3}],list:[{label:"综合排序",value:1},{label:"距离最近",value:2},{label:"好评优先",value:3},{label:"起送价最低",value:4},{label:"配送最快",value:5},{label:"通用排序",value:6}],arr:[1],str:"",sex:"",sort:"desc"}},mounted:function(){this.province=e.getStorageSync("province"),this.city=e.getStorageSync("city"),console.log(this.ifinfo);for(var n=0;n<t.default.length;n++)if(t.default[n].label.indexOf(this.province)>-1){this.value2[0]=t.default[n].value;for(var l=0;l<t.default[n].children.length;l++)t.default[n].children[l].label.indexOf(this.city)>-1&&(this.value2[1]=t.default[n].children[l].value)}e.setStorageSync("location",this.value2);var a=this.$refs.picker2.getColumnsInfo(this.value2);console.log("根据value获取的信息：",a),this.label2=a.item.map((function(e){return e.label})).join("-")},methods:{handleChange:function(e){console.log("change::",e)},handleConfirm:function(e){if(console.log("confirm::",e),e){var n=e.dataset.name,l=e.item.map((function(e){return e.label})).join("-");n&&l&&(this[n]=l),this.$emit("changlocation",e.value)}},handleCancel:function(e){console.log("cancel::",e)},handleTap:function(e){this.$refs[e].show()},onChange:function(e){console.log(e),this.$emit("changcatinfo",e)}}};n.default=c}).call(this,l("543d")["default"])},"374c":function(e,n,l){"use strict";var t=l("57be"),a=l.n(t);a.a},"50a9":function(e,n,l){"use strict";l.r(n);var t=l("6d3a"),a=l("baee");for(var o in a)"default"!==o&&function(e){l.d(n,e,(function(){return a[e]}))}(o);l("374c");var i,c=l("f0c5"),u=Object(c["a"])(a["default"],t["b"],t["c"],!1,null,"7292d634",null,!1,t["a"],i);n["default"]=u.exports},"57be":function(e,n,l){},"6d3a":function(e,n,l){"use strict";l.d(n,"b",(function(){return a})),l.d(n,"c",(function(){return o})),l.d(n,"a",(function(){return t}));var t={clFilterBar:function(){return Promise.all([l.e("common/vendor"),l.e("cl-uni/components/cl-filter-bar/cl-filter-bar")]).then(l.bind(null,"b16e"))},clFilterItem:function(){return Promise.all([l.e("common/vendor"),l.e("cl-uni/components/cl-filter-item/cl-filter-item")]).then(l.bind(null,"89c3"))}},a=function(){var e=this,n=e.$createElement;e._self._c},o=[]},baee:function(e,n,l){"use strict";l.r(n);var t=l("2e9e"),a=l.n(t);for(var o in t)"default"!==o&&function(e){l.d(n,e,(function(){return t[e]}))}(o);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/selector/selector-create-component',
    {
        'components/selector/selector-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("50a9"))
        })
    },
    [['components/selector/selector-create-component']]
]);
