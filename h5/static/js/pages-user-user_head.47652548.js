(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user_head"],{"697d":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{pageLoad:!1,pageData:{},user_head:""}},onLoad:function(a){this.getPage()},methods:{getPage:function(){var a=this;uni.request({url:a.app.apiHost+"?m=user&a=user_head&ajax=1",data:{authcode:a.app.getAuthCode()},success:function(e){a.pageLoad=!0,a.pageData=e.data.data,a.user_head=e.data.data.data.user_head}})},upload:function(){var a=this;uni.chooseImage({success:function(e){var t=e.tempFilePaths;uni.uploadFile({url:a.app.apiHost+"?m=upload&a=img&ajax=1&authcode="+a.app.getAuthCode(),filePath:t[0],name:"upimg",success:function(e){var t=JSON.parse(e.data);uni.request({url:a.app.apiHost+"?m=user&a=user_head_save&ajax=1&authcode="+a.app.getAuthCode(),data:{user_head:t.data.imgurl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){a.user_head=t.data.trueimgurl}})}})}})}}};e.default=u},c087:function(a,e,t){"use strict";t.r(e);var u=t("697d"),n=t.n(u);for(var r in u)"default"!==r&&function(a){t.d(e,a,function(){return u[a]})}(r);e["default"]=n.a},c21e:function(a,e,t){"use strict";t.r(e);var u=t("f276"),n=t("c087");for(var r in n)"default"!==r&&function(a){t.d(e,a,function(){return n[a]})}(r);var i=t("2877"),s=Object(i["a"])(n["default"],u["a"],u["b"],!1,null,"339a1ffd",null);e["default"]=s.exports},f276:function(a,e,t){"use strict";var u=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-uni-view",[a.pageLoad?t("v-uni-view",[t("v-uni-view",{staticClass:"flex flex-center mgt-10 mgb-10"},[t("v-uni-image",{staticClass:"wh-200 pointer",attrs:{src:a.user_head},on:{click:function(e){e=a.$handleEvent(e),a.upload()}}})],1)],1):a._e()],1)},n=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return n})}}]);