(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5aa8d76"],{4867:function(t,a,e){},"48b7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"feedback"},[e("header",{staticClass:"page-header"},[e("span",{staticClass:"btn-left",on:{click:function(a){return t.$router.go(-1)}}},[e("svg-icon",{attrs:{"icon-class":"green-btn"}})],1),e("div",{staticClass:"header-content"},[t._v("问题反馈")])]),e("section",{staticClass:"mine-content"},[e("ul",{staticClass:"options-list"},[t._m(0),e("van-radio-group",{staticClass:"radio-list",model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},[e("li",{staticClass:"radio-item"},[e("van-radio",{attrs:{name:"1","checked-color":"#91C95B"}},[t._v("功能异常")])],1),e("li",{staticClass:"radio-item"},[e("van-radio",{attrs:{name:"2","checked-color":"#91C95B"}},[t._v("体验问题")])],1),e("li",{staticClass:"radio-item"},[e("van-radio",{attrs:{name:"3","checked-color":"#91C95B"}},[t._v("新功能建议")])],1),e("li",{staticClass:"radio-item"},[e("van-radio",{attrs:{name:"4","checked-color":"#91C95B"}},[t._v("其他问题")])],1)]),e("van-cell-group",{staticClass:"others-textarea"},[e("van-field",{attrs:{rows:"5",autosize:{minHeight:280,maxHeight:280},type:"textarea",placeholder:"请填写问题描述",error:t.isDisInput},on:{input:t.descInput},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},[e("span",{attrs:{slot:"right-icon"},slot:"right-icon"},[t._v(t._s(t.remnant)+"/200")])])],1)],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"item-header"},[e("span",[t._v("选择类型")])])}],n={name:"feedback",data:function(){return{radio:"1",value:"",isDisInput:!1,remnant:0}},created:function(){},methods:{descInput:function(t){var a=this.value.length;this.remnant=200-a,this.remnant<0&&(this.remnant=0),200-a<0?(this.value=t.slice(0,200),this.isDisInput=!0):this.isDisInput=!1}}},r=n,c=(e("deb1"),e("2877")),o=Object(c["a"])(r,s,i,!1,null,"5c4856a8",null);a["default"]=o.exports},deb1:function(t,a,e){"use strict";var s=e("4867"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-d5aa8d76.620d2eef.js.map