(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/index"],{"497e":function(t,e,a){"use strict";a.r(e);var i=a("fed1"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},6227:function(t,e,a){"use strict";a("53c4");var i=n(a("b0ce")),s=n(a("964d"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},"964d":function(t,e,a){"use strict";a.r(e);var i=a("97c3"),s=a("497e");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);var c=a("2877"),r=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"97c3":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"flex-col"},[a("view",{staticClass:"tabs-border"},[a("view",{staticClass:"tabs-border-item",class:t.defaultActive,attrs:{eventid:"421c48dc-0"},on:{click:function(e){t.setCat(0)}}},[t._v("推荐")]),t._l(t.pageData.catlist,function(e,i){return a("view",{key:i,staticClass:"tabs-border-item",class:{"tabs-border-active":e.isactive},attrs:{eventid:"421c48dc-1-"+i},on:{click:function(a){t.setCat(e.id)}}},[t._v(t._s(e.title))])})],2),a("view",{staticClass:"flex-main"},[a("view",{staticClass:"flexlist"},t._l(t.pageData.list,function(e,i){return a("view",{key:i,staticClass:"flexlist-item pdb-10",attrs:{eventid:"421c48dc-2-"+i},on:{click:function(a){t.goArticle(e.id)}}},[""!=e.imgurl?a("image",{staticClass:"flexlist-img",attrs:{src:e.imgurl+".100x100.jpg"}}):t._e(),a("view",{staticClass:"flex-1"},[a("view",{staticClass:"flexlist-title f16"},[t._v(t._s(e.title))]),a("view",{staticClass:"flexlist-desc cl2 f14"},[t._v(t._s(e.description))])])])}))]),a("mt-footer",{attrs:{mpcomid:"421c48dc-0"}})],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},fed1:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("55ef"));function s(t){return t&&t.__esModule?t:{default:t}}var n=a("3b97"),c=0,r=!0,l=0,o="tabs-border-active",u={components:{mtFooter:i.default},data:function(){return{pageLoad:!1,pageData:{},winHeight:600,defaultActive:"tabs-border-active"}},onLoad:function(e){console.log("文章");var a=t.getSystemInfoSync();this.winHeight=a.windowHeight-50,t.setNavigationBarTitle({title:"资讯"}),this.getPage()},onReachBottom:function(){this.getList()},onPullDownRefresh:function(){this.refresh()},methods:{getPage:function(){var e=this;t.request({url:n.apiHost+"?m=article&ajax=1",success:function(t){r=!1,e.pageData=t.data.data,c=t.data.data.per_page}})},setCat:function(t){l=t,r=!0,c=0,this.defaultActive=0==l?o:"";var e=this.pageData.catlist;for(var a in e)e[a].id==l?e[a].isactive=1:e[a].isactive=0;this.pageData.catlist=e,this.getList()},getList:function(){var e=this;if(!r&&0==c)return!1;t.request({url:n.apiHost+"?m=article&ajax=1",data:{per_page:c,shop_cid:l},success:function(t){t.data.error||(r?(e.pageData.list=t.data.data.list,r=!1):e.pageData.list=n.json_add(e.pageData.list,t.data.data.list),c=t.data.data.per_page)}})},goArticle:function(e){t.navigateTo({url:"/pages/article/show?id="+e})},refresh:function(){this.getPage(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},loadMore:function(){this.getList()}}};e.default=u}).call(this,a("543d")["default"])}},[["6227","common/runtime","common/vendor"]]]);