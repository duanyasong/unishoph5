(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"006f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("view",{staticClass:"header flex"},[a("image",{staticClass:"header-logo",attrs:{src:"https://deitui-weizhan1.oss-cn-hangzhou.aliyuncs.com/attach/2018/07/06/94385ce66afa493729176ced1540f84e.png"}}),a("view",{staticClass:"header-search-box"},[a("view",{staticClass:"header-search-icon iconfont icon-search"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWord,expression:"searchWord"}],staticClass:"header-search",attrs:{type:"text",value:t.searchWord,eventid:"6c4b56a4-0"},domProps:{value:t.searchWord},on:{input:function(e){e.target.composing||(t.searchWord=e.target.value)}}}),a("div",{staticClass:"header-search-btn",attrs:{"form-type":"submit",eventid:"6c4b56a4-1"},on:{click:function(e){t.search()}}},[t._v("搜")])])]),t.pageLoad?a("view",{staticClass:"main-body"},[a("swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.pageData.flashlist,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"6c4b56a4-0-"+e}},[a("view",{staticClass:"swiper-item"},[a("image",{staticStyle:{width:"100%"},attrs:{src:t.imgurl,mode:"widthFix"}})])])})),a("view",{staticClass:"m-navPic mgt-5 mgb-5"},t._l(t.pageData.navList,function(e,i){return a("navigator",{key:i,staticClass:"m-navPic-item",attrs:{url:e.link_url}},[a("img",{staticClass:"m-navPic-img",attrs:{src:e.logo}}),a("view",{staticClass:"m-navPic-title"},[t._v(t._s(e.title))])])})),a("view",{staticClass:"bg-fff pd-10 mgb-5"},t._l(t.pageData.articlelist,function(e,i){return i<4?a("view",{key:i,staticClass:"row-item",attrs:{eventid:"6c4b56a4-2-"+i},on:{click:function(a){t.goArticle(e.id)}}},[a("view",{staticClass:"flex-1"},[t._v(t._s(e.title))])]):t._e()})),t._m(0),a("view",{staticClass:"mtlist"},t._l(t.pageData.productlist,function(e,i){return a("view",{key:i,staticClass:"mtlist-item",attrs:{eventid:"6c4b56a4-3-"+i},on:{click:function(a){t.goProduct(e.id)}}},[a("view",{staticClass:"mtlist-item-bd"},[a("view",{staticClass:"mtlist-imgbox"},[a("image",{staticClass:"mtlist-img",attrs:{mode:"widthFix",src:e.imgurl+".small.jpg"}})]),a("view",{staticClass:"mtlist-item-pd"},[a("view",{staticClass:"mtlist-item-money"},[a("view",{staticClass:"mtlist-item-money-flex"},[t._v("￥"),a("text",{staticClass:"mtlist-item-money_money"},[t._v(t._s(e.price))])]),a("view",{staticClass:"mtlist-item-money_num"},[t._v("月销"+t._s(e.month_buy_num)+"件")])]),a("view",{staticClass:"mtlist-title"},[t._v(t._s(e.title))]),a("view",{staticClass:"mtlist-desc"},[t._v(t._s(e.description))])])])])}))],1):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"row-box-hd pdl-10 bg-fff"},[a("div",{staticClass:"flex-1 f16 fw-600"},[t._v("有品推荐")]),a("div",{staticClass:"row-box-more"},[t._v("更多")])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"275d":function(t,e,a){"use strict";a.r(e);var i=a("6eda"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},"5fb1":function(t,e,a){"use strict";a.r(e);var i=a("006f"),s=a("275d");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("cdb3");var c=a("2877"),r=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"60b3":function(t,e,a){"use strict";a("53c4");var i=n(a("b0ce")),s=n(a("5fb1"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},"6eda":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("55ef"));function s(t){return t&&t.__esModule?t:{default:t}}var n=a("3b97"),c={components:{mtFooter:i.default},data:function(){return{pageLoad:!1,pageHide:!1,pageData:{},searchWord:""}},onLoad:function(e){t.showNavigationBarLoading(),this.getPage()},onReady:function(){t.setNavigationBarTitle({title:"uniShop"})},onShow:function(){this.pageHide&&(this.pageHide=!1,this.getPage())},onHide:function(){this.pageHide=!0},methods:{getPage:function(){var e=this;t.request({url:n.apiHost+"?ajax=1&fromapp="+n.fromapp(),success:function(a){e.pageLoad=!0,e.pageData=a.data.data,t.hideNavigationBarLoading()}})},goProduct:function(e){t.navigateTo({url:"/pages/product/show?id="+e})},goArticle:function(e){t.navigateTo({url:"/pages/article/show?id="+e})},search:function(){if(""==this.searchWord)return!1;t.navigateTo({url:"/pages/search/index?searchWord="+encodeURI(this.searchWord)})}}};e.default=c}).call(this,a("543d")["default"])},"707b":function(t,e,a){},cdb3:function(t,e,a){"use strict";var i=a("707b"),s=a.n(i);s.a}},[["60b3","common/runtime","common/vendor"]]]);