"use strict";(self.webpackChunkgitengineer=self.webpackChunkgitengineer||[]).push([[967],{4967:(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Battle});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(5671),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(3144),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(7326),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(136),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6215),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1120),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4942),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7294),axios__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9669),axios__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__),react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(246),react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__),react_router_dom__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(3727),formik__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4649),yup__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9501),_config_axios_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3762),_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(7299),enterModule;function ownKeys(_,e){var s=Object.keys(_);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(_);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),s.push.apply(s,t)}return s}function _objectSpread(_){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(s),!0).forEach((function(e){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(_,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(s)):ownKeys(Object(s)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(s,e))}))}return _}function _createSuper(_){var e=_isNativeReflectConstruct();return function(){var s,t=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(_);if(e){var a=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(this).constructor;s=Reflect.construct(t,arguments,a)}else s=t.apply(this,arguments);return(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(this,s)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(_){return!1}}module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Battle=function(_React$Component){(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__.Z)(Battle,_React$Component);var _super=_createSuper(Battle);function Battle(_){var e;return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__.Z)(this,Battle),e=_super.call(this,_),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__.Z)(e),"handleSubmit",(function(_,s){var t=s.props,a=void 0===t?e.props:t,E=s.setSubmitting;console.log("提交",_,a,E),E(!1),e.setState(_objectSpread({},_),(function(){console.log("存储first_name",_.first_name),console.log("存储last_name",_.last_name),_.first_name&&e.setState({first_loading:!0,isFirstError:!1,firstMessage:""},(function(){e.getUser("first_data","isFirstError","firstMessage","first_loading",e.state.first_name)})),_.last_name&&e.setState({last_loading:!0,isLastError:!1,lastMessage:""},(function(){e.getUser("last_data","isLastError","lastMessage","last_loading",e.state.last_name)}))}))})),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__.Z)(e),"getUser",(function(_,s,t,a,E){axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.github.com/users/".concat(E)).then((function(E){var r,c;E.avatar_url?e.setState((r={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(r,_,E),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(r,a,!1),r),(function(){console.log("请求到的数据1",e.state.first_data),console.log("请求到的数据2",e.state.last_data)})):(console.log("报错了",E),e.setState((c={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(c,s,!0),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(c,t,E.msg),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(c,a,!1),c),(function(){console.log("报错1",e.state.isFirstError,e.state.firstMessage),console.log("报错2",e.state.isLastError,e.state.lastMessage)})))}))})),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__.Z)(e),"closeResult",(function(_){e.setState((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)({},_,null))})),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__.Z)(e),"changeVal",(function(_,s){switch(console.log("type",_,s),_){case"first_name":e.setState({isFirstError:!1,firstMessage:""});break;case"last_name":e.setState({isLastError:!1,lastMessage:""})}})),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__.Z)(e),"clear",(function(_,e){console.log("clear",_,e)})),e.state={first_name:"",first_data:null,last_name:"",last_data:null,first_loading:!1,last_loading:!1,isFirstError:!1,firstMessage:"",isLastError:!1,lastMessage:""},e}return(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_13__.Z)(Battle,[{key:"render",value:function(){var _=this;return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"container ".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.instructions)},react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["text-center"])},"Instructions"),react__WEBPACK_IMPORTED_MODULE_3__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["instructions-title"]},"Enter two Github"),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("i",{className:"fa fa-users ".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["instructions-icon"]),style:{color:"rgb(255, 191, 116)"}}))),react__WEBPACK_IMPORTED_MODULE_3__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["instructions-title"]},"Battle"),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("i",{className:"fa fa-fighter-jet ".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["instructions-icon"]),style:{color:"gray"}}))),react__WEBPACK_IMPORTED_MODULE_3__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["instructions-title"]},"See the winner"),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("i",{className:"fa fa-trophy ".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["instructions-icon"]),style:{color:"rgb(244, 234, 42)"}})))),react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["text-center"]," ").concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["play-modal"])},"Players"),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["form-list"]},react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_6__.J9,{initialValues:{first_name:""},validate:function(e){_.changeVal("first_name",e);var s={};return e.first_name||(s.first_name="play1 name Required"),s},onSubmit:this.handleSubmit,setFieldValue:this.clear},(function(e){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_6__.l0,{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["form-content"]},react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["list-title"]," ").concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["play-modal"])},"Players1"),_.state.first_data&&_.state.first_data.avatar_url?react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["form-result"]},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.info},react__WEBPACK_IMPORTED_MODULE_3__.createElement("img",{src:_.state.first_data.avatar_url,alt:""}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,_.state.first_name)),react__WEBPACK_IMPORTED_MODULE_3__.createElement("i",{className:"fa fa-close",style:{color:"#1890ff"},onClick:function(){_.closeResult("first_data")}})):react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["form-item"],key:1},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["form-input"]},react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_6__.gN,{type:"text",name:"first_name",placeholder:"enter username"}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["input-error"]},react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_6__.Bc,{name:"first_name"}),_.state.isFirstError?react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["error-info"]},_.state.firstMessage):null)),react__WEBPACK_IMPORTED_MODULE_3__.createElement("button",{type:"submit",disabled:e.isSubmitting,style:{flex:1}},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["btn-loading"]},_.state.first_loading?react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.spinner},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["spinner-container"]," ").concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.container1)},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle1}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle2}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle3}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle4})),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["spinner-container"]," ").concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.container2)},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle1}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle2}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle3}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle4})),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["spinner-container"]," ").concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.container3)},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle1}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle2}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle3}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle4}))):null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,"Submit")))))})),react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_6__.J9,{initialValues:{last_name:""},validate:function(e){_.changeVal("last_name",e);var s={};return e.last_name||(s.last_name="play2 name Required"),s},onSubmit:this.handleSubmit},(function(e){return console.log("formProps",e),react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_6__.l0,{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["form-content"]},react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["list-title"]," ").concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["play-modal"])},"Players2"),_.state.last_data&&_.state.last_data.avatar_url?react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["form-result"]},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.info},react__WEBPACK_IMPORTED_MODULE_3__.createElement("img",{src:_.state.last_data.avatar_url,alt:""}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,_.state.last_name)),react__WEBPACK_IMPORTED_MODULE_3__.createElement("i",{className:"fa fa-close",style:{color:"#1890ff"},onClick:function(){_.closeResult("last_data")}})):react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["form-item"],key:2},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["form-input"]},react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_6__.gN,{type:"text",name:"last_name",placeholder:"enter username"}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["input-error"]},react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_6__.Bc,{name:"last_name"}),_.state.isLastError?react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["error-info"]},_.state.lastMessage):null)),react__WEBPACK_IMPORTED_MODULE_3__.createElement("button",{type:"submit",disabled:e.isSubmitting,style:{flex:1}},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["btn-loading"]},_.state.last_loading?react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.spinner},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["spinner-container"]," ").concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.container1)},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle1}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle2}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle3}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle4})),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["spinner-container"]," ").concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.container2)},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle1}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle2}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle3}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle4})),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"".concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z["spinner-container"]," ").concat(_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.container3)},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle1}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle2}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle3}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.circle4}))):null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,"Submit")))))}))),this.state.first_data&&this.state.last_data?react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:_assets_css_index_less__WEBPACK_IMPORTED_MODULE_9__.Z.battle},react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.rU,{to:"/battle/result?play1=".concat(this.state.first_name,"&play2=").concat(this.state.last_name)},"Battle")):null)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Battle}(react__WEBPACK_IMPORTED_MODULE_3__.Component),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(Battle,"Battle","D:\\作业\\作业4-完成github热门项目（工程)\\gitEngineer2\\src\\pages\\battle.js"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}}]);
//# sourceMappingURL=967.b411b03f.chunk.js.map