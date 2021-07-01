exports.ids = [6];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/list/_id/index.vue?vue&type=template&id=21ba7f6a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nuxt-link',{attrs:{"to":"/list"}},[_vm._v("Back to sightings")]),_vm._ssrNode(" <h2>"+_vm._ssrEscape(_vm._s(_vm.sighting))+"</h2> <hr> <small>"+_vm._ssrEscape("Sighting ID: "+_vm._s(_vm.$route.params.id))+"</small>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/list/_id/index.vue?vue&type=template&id=21ba7f6a&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/list/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      sighting: {}
    };
  },

  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await external_axios_default.a.get("http://localhost:3004/s/${this.$route.params.id}", config);
      this.sighting = res.data.sighting;
    } catch (err) {
      console.log(err);
    }
  }

});
// CONCATENATED MODULE: ./pages/list/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var list_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/list/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  list_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a088e0b"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map