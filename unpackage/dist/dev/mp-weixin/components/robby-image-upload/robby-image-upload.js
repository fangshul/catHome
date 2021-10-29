(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/robby-image-upload/robby-image-upload"],{

/***/ 270:
/*!*****************************************************************************************!*\
  !*** E:/project/cat_home/cat-home/components/robby-image-upload/robby-image-upload.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _robby_image_upload_vue_vue_type_template_id_f5aed778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./robby-image-upload.vue?vue&type=template&id=f5aed778& */ 271);
/* harmony import */ var _robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./robby-image-upload.vue?vue&type=script&lang=js& */ 273);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _robby_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robby-image-upload.vue?vue&type=style&index=0&lang=css& */ 275);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _robby_image_upload_vue_vue_type_template_id_f5aed778___WEBPACK_IMPORTED_MODULE_0__["render"],
  _robby_image_upload_vue_vue_type_template_id_f5aed778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _robby_image_upload_vue_vue_type_template_id_f5aed778___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/robby-image-upload/robby-image-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 271:
/*!************************************************************************************************************************!*\
  !*** E:/project/cat_home/cat-home/components/robby-image-upload/robby-image-upload.vue?vue&type=template&id=f5aed778& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_template_id_f5aed778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./robby-image-upload.vue?vue&type=template&id=f5aed778& */ 272);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_template_id_f5aed778___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_template_id_f5aed778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_template_id_f5aed778___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_template_id_f5aed778___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 272:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/cat_home/cat-home/components/robby-image-upload/robby-image-upload.vue?vue&type=template&id=f5aed778& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    clToast: function() {
      return Promise.all(/*! import() | cl-uni/components/cl-toast/cl-toast */[__webpack_require__.e("common/vendor"), __webpack_require__.e("cl-uni/components/cl-toast/cl-toast")]).then(__webpack_require__.bind(null, /*! @/cl-uni/components/cl-toast/cl-toast.vue */ 253))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.imageListData, function(path, index) {
    var $orig = _vm.__get_orig(path)

    var m0 = _vm.isDragging(index)
    return {
      $orig: $orig,
      m0: m0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 273:
/*!******************************************************************************************************************!*\
  !*** E:/project/cat_home/cat-home/components/robby-image-upload/robby-image-upload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./robby-image-upload.vue?vue&type=script&lang=js& */ 274);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 274:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/cat_home/cat-home/components/robby-image-upload/robby-image-upload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























var _randomName = _interopRequireDefault(__webpack_require__(/*! ../../static/randomName.js */ 96));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { name: 'robby-image-upload', props: ['value', 'enableDel', 'enableAdd', 'enableDrag', 'serverUrl', 'formData', 'header', 'limit', 'fileKeyName', 'showUploadProgress', 'serverUrlDeleteImage'], data: function data() {return { imageBasePos: { x0: -1, y0: -1, w: -1, h: -1 }, showMoveImage: false, moveImagePath: '', moveLeft: 0, moveTop: 0, deltaLeft: 0, deltaTop: 0, dragIndex: null, targetImageIndex: null,
      imageList: [],
      isDestroyed: false };

  },
  mounted: function mounted() {
    this.imageList = this.value;

    if (this.showUploadProgress === false) {
      this.showUploadProgress = false;
    } else {
      this.showUploadProgress = true;
    }
  },
  destroyed: function destroyed() {
    this.isDestroyed = true;
  },
  computed: {
    imageListData: function imageListData() {
      if (this.value) {
        return this.value;
      }
    },
    posMoveImageLeft: function posMoveImageLeft() {
      return this.moveLeft + 'px';
    },
    posMoveImageTop: function posMoveImageTop() {
      return this.moveTop + 'px';
    },
    isShowDel: function isShowDel() {
      if (this.enableDel === false) {
        return false;
      } else {
        return true;
      }
    },
    isShowAdd: function isShowAdd() {
      if (this.enableAdd === false) {
        return false;
      }

      if (this.limit && this.imageList.length >= this.limit) {
        return false;
      }

      return true;
    },
    isDragable: function isDragable() {
      if (this.enableDrag === false) {
        return false;
      } else {
        return true;
      }
    } },

  methods: {
    selectImage: function selectImage() {
      var _self = this;
      if (!_self.imageList) {
        _self.imageList = [];
      }

      uni.chooseImage({
        count: _self.limit ? _self.limit - _self.imageList.length : 999,
        success: function success(e) {
          var imagePathArr = e.tempFilePaths;
          console.log(imagePathArr);
          //如果设置了limit限制，在web上count参数无效，这里做判断控制选择的数量是否合要求
          //在非微信小程序里，虽然可以选多张，但选择的结果会被截掉
          //在app里，会自动做选择数量的限制
          if (_self.limit) {
            var availableImageNumber = _self.limit - _self.imageList.length;
            if (availableImageNumber < imagePathArr.length) {
              uni.showToast({
                title: '图片总数限制为' + _self.limit + '张，当前还可以选' + availableImageNumber + '张',
                icon: 'none',
                mask: false,
                duration: 2000 });

              return;
            }
          }

          //检查服务器地址是否设置，设置即表示图片要上传到服务器
          if (_self.serverUrl) {
            console.log(imagePathArr);
            uni.showToast({
              title: '上传进度：0/' + imagePathArr.length,
              icon: 'none',
              mask: false });


            var remoteIndexStart = _self.imageList.length - imagePathArr.length;
            var promiseWorkList = [];
            var keyname = _self.fileKeyName ? _self.fileKeyName : 'upload-images';
            var completeImages = 0;
            for (var i = 0; i < imagePathArr.length; i++) {
              _self.imageList.push(imagePathArr[i]);
            }

            _self.$emit('add', {
              currentImages: imagePathArr,
              allImages: _self.imageList });

            _self.$emit('input', _self.imageList);
            console.log((0, _randomName.default)());
            for (var _i = 0; _i < imagePathArr.length; _i++) {
              console.log('/findCat/' + (0, _randomName.default)() + '.png');
              var remoteUrlIndex = remoteIndexStart + _i;
              wx.cloud.uploadFile({
                cloudPath: 'findCat/' + (0, _randomName.default)() + '.png', // 上传至云端的路径
                filePath: imagePathArr[_i], // 小程序临时文件路径
                success: function success(res) {
                  // 返回文件 ID
                  console.log(res.fileID);
                  completeImages++;
                  if (_self.showUploadProgress) {
                    uni.showToast({
                      title: '上传进度：' + completeImages + '/' + imagePathArr.length,
                      icon: 'none',
                      mask: false,
                      duration: 500 });

                  }
                },
                fail: console.error });

              // promiseWorkList.push(new Promise((resolve, reject)=>{
              // 	let remoteUrlIndex = remoteIndexStart + i
              // 	uni.uploadFile({
              // 		url:_self.serverUrl,
              // 		fileType: 'image',
              // 		header: _self.header,
              // 		formData:_self.formData,
              // 		filePath: imagePathArr[i], 
              // 		name: keyname,
              // 		success: function(res){
              // 			if(res.statusCode === 200){
              // 				if(_self.isDestroyed){
              // 					return
              // 				}

              // 				completeImages ++

              // 				if(_self.showUploadProgress){
              // 					uni.showToast({
              // 						title: '上传进度：' + completeImages + '/' + imagePathArr.length,
              // 						icon: 'none',
              // 						mask: false,
              // 						duration: 500
              // 					});
              // 				}
              // 				console.log('success to upload image: ' + res.data)
              // 				resolve(res.data)
              // 			}else{
              // 				console.log('fail to upload image:'+res.data)
              // 				reject('fail to upload image:' + remoteUrlIndex)
              // 			}
              // 		},
              // 		fail: function(res){
              // 			console.log('fail to upload image:'+res)
              // 			reject('fail to upload image:' + remoteUrlIndex)
              // 		}
              // 	})
              // }))
            }
            Promise.all(promiseWorkList).then(function (result) {
              if (_self.isDestroyed) {
                return;
              }

              for (var _i2 = 0; _i2 < result.length; _i2++) {
                _self.imageList.push(result[_i2]);
              }

              _self.$emit('add', {
                currentImages: imagePathArr,
                allImages: _self.imageList });

              _self.$emit('input', _self.imageList);
            });
          } else {

            // 普通的显示图片

            imagePathArr.forEach(function (items) {
              wx.getFileSystemManager().readFile({
                filePath: items,
                success: function success(res) {
                  wx.cloud.callFunction({
                    name: 'imgSecCheck',
                    data: {
                      img: res.data } }).

                  then(function (res) {
                    console.log('checkimg', res);
                    if (res.result.code == 200) {
                      // for(let i=0; i<imagePathArr.length;i++){
                      // 	_self.imageList.push(imagePathArr[i])
                      // }
                      _self.imageList.push(items);

                      _self.$emit('add', {
                        currentImages: imagePathArr,
                        allImages: _self.imageList });

                      _self.$emit('input', _self.imageList);
                      console.log("图片可以");
                    } else if (res.result.code == 500) {
                      console.log("图片不ok");
                      _self.$refs["toast"].open({
                        type: "warning",
                        message: "内容含有违法违规内容",
                        position: "middle",
                        icon: "warning"
                        // duration: 100000
                        // type: 'warning'
                      });
                    }
                  });
                } });

            });





          }
        } });

    },
    deleteImage: function deleteImage(e) {
      var imageIndex = e.currentTarget.dataset.index;
      var deletedImagePath = this.imageList[imageIndex];
      this.imageList.splice(imageIndex, 1);

      //检查删除图片的服务器地址是否设置，如果设置则调用API，在服务器端删除该图片
      if (this.serverUrlDeleteImage) {
        uni.request({
          url: this.serverUrlDeleteImage,
          method: 'GET',
          data: {
            imagePath: deletedImagePath },

          success: function success(res) {
            console.log(res.data);
          } });

      }

      this.$emit('delete', {
        currentImage: deletedImagePath,
        allImages: this.imageList,
        imgindex: imageIndex });

      this.$emit('input', this.imageList);
    },
    previewImage: function previewImage(e) {
      var imageIndex = e.currentTarget.dataset.index;
      uni.previewImage({
        current: this.imageList[imageIndex],
        indicator: "number",
        loop: "true",
        urls: this.imageList });

    },
    initImageBasePos: function initImageBasePos() {
      var paddingRate = 0.024;
      var _self = this;
      //计算图片基准位置
      uni.getSystemInfo({
        success: function success(obj) {
          var screenWidth = obj.screenWidth;
          var leftPadding = Math.ceil(paddingRate * screenWidth);
          var imageWidth = Math.ceil((screenWidth - 2 * leftPadding) / 4);

          _self.imageBasePos.x0 = leftPadding;
          _self.imageBasePos.w = imageWidth;
          _self.imageBasePos.h = imageWidth;
        } });

    },
    findOverlapImage: function findOverlapImage(posX, posY) {
      var rows = Math.floor((posX - this.imageBasePos.x0) / this.imageBasePos.w);
      var cols = Math.floor((posY - this.imageBasePos.y0) / this.imageBasePos.h);
      var indx = cols * 4 + rows;
      return indx;
    },
    isDragging: function isDragging(indx) {
      return this.dragIndex === indx;
    },
    start: function start(e) {
      console.log(this.isDragable);
      if (!this.isDragable) {
        return;
      }
      this.dragIndex = e.currentTarget.dataset.index;
      this.moveImagePath = this.imageList[this.dragIndex];
      this.showMoveImage = true;

      //计算纵向图片基准位置
      if (this.imageBasePos.y0 === -1) {
        this.initImageBasePos();

        var basePosY = Math.floor(this.dragIndex / 4) * this.imageBasePos.h;
        var currentImageOffsetTop = e.currentTarget.offsetTop;
        this.imageBasePos.y0 = currentImageOffsetTop - basePosY;
      }

      //设置选中图片当前左上角的坐标
      this.moveLeft = e.target.offsetLeft;
      this.moveTop = e.target.offsetTop;
    },
    move: function move(e) {
      if (!this.isDragable) {
        return;
      }
      var touch = e.touches[0];
      this.targetImageIndex = this.findOverlapImage(touch.clientX, touch.clientY);

      //初始化deltaLeft/deltaTop
      if (this.deltaLeft === 0) {
        this.deltaLeft = touch.clientX - this.moveLeft;
        this.deltaTop = touch.clientY - this.moveTop;
      }

      //设置移动图片位置
      this.moveLeft = touch.clientX - this.deltaLeft;
      this.moveTop = touch.clientY - this.deltaTop;
    },
    stop: function stop(e) {
      if (!this.isDragable) {
        return;
      }
      if (this.dragIndex !== null && this.targetImageIndex !== null) {
        if (this.targetImageIndex < 0) {
          this.targetImageIndex = 0;
        }

        if (this.targetImageIndex >= this.imageList.length) {
          this.targetImageIndex = this.imageList.length - 1;
        }
        //交换图片
        if (this.dragIndex !== this.targetImageIndex) {
          this.imageList[this.dragIndex] = this.imageList[this.targetImageIndex];
          this.imageList[this.targetImageIndex] = this.moveImagePath;
        }
      }

      this.dragIndex = null;
      this.targetImageIndex = null;
      this.deltaLeft = 0;
      this.deltaTop = 0;
      this.showMoveImage = false;

      this.$emit('input', this.imageList);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 275:
/*!**************************************************************************************************************************!*\
  !*** E:/project/cat_home/cat-home/components/robby-image-upload/robby-image-upload.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./robby-image-upload.vue?vue&type=style&index=0&lang=css& */ 276);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_robby_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 276:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/cat_home/cat-home/components/robby-image-upload/robby-image-upload.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/robby-image-upload/robby-image-upload.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/robby-image-upload/robby-image-upload-create-component',
    {
        'components/robby-image-upload/robby-image-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(270))
        })
    },
    [['components/robby-image-upload/robby-image-upload-create-component']]
]);
