(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-index"],{"15a9":function(t,i,e){"use strict";e.r(i);var a=e("c33b"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"253f":function(t,i,e){"use strict";e.r(i);var a=e("84a9"),n=e("15a9");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("9a61");var r=e("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"481999ea",null);i["default"]=s.exports},"50d3":function(t,i,e){var a=e("f2a5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("257dce7e",a,!0,{sourceMap:!1,shadowMode:!1})},"535d":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"footer-row"}),e("v-uni-view",{staticClass:"footer"},[e("v-uni-view",{staticClass:"footer-item footer-active icon-home",on:{click:function(i){i=t.$handleEvent(i),t.goHome()}}},[t._v("首页")]),e("v-uni-view",{staticClass:"footer-item icon-goods",on:{click:function(i){i=t.$handleEvent(i),t.goCategory()}}},[t._v("分类")]),e("v-uni-view",{staticClass:"footer-item icon-cart",on:{click:function(i){i=t.$handleEvent(i),t.goCart()}}},[t._v("购物车")]),e("v-uni-view",{staticClass:"footer-item icon-my_light",on:{click:function(i){i=t.$handleEvent(i),t.goUser()}}},[t._v("我的")])],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"55ef":function(t,i,e){"use strict";e.r(i);var a=e("535d"),n=e("698e");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("7f9a");var r=e("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"4c6d425d",null);i["default"]=s.exports},"698e":function(t,i,e){"use strict";e.r(i);var a=e("955c"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"7f9a":function(t,i,e){"use strict";var a=e("50d3"),n=e.n(a);n.a},"84a9":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.pageLoad?e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"list-side"},[e("v-uni-view",{staticClass:"list-side-item",class:t.defaultActive,on:{click:function(i){i=t.$handleEvent(i),t.setCat(0)}}},[t._v("推荐")]),t._l(t.pageData.catlist,function(i,a){return e("v-uni-view",{key:a,staticClass:"list-side-item",class:{"list-side-item-active":i.isactive},on:{click:function(e){e=t.$handleEvent(e),t.setCat(i.id)}}},[t._v(t._s(i.title))])})],2),e("v-uni-view",{staticClass:"flex-main bg-fff"},t._l(t.pageData.list,function(i,a){return e("v-uni-view",{key:a,staticClass:"prolist-item"},[e("v-uni-image",{staticClass:"prolist-img",attrs:{src:i.imgurl+".100x100.jpg"},on:{click:function(e){e=t.$handleEvent(e),t.goProduct(i.id)}}}),e("v-uni-view",{staticClass:"prolist-flex-1"},[e("v-uni-view",{staticClass:"prolist-title",on:{click:function(e){e=t.$handleEvent(e),t.goProduct(i.id)}}},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"prolist-row-price"},[t._v("价格："),e("v-uni-text",{staticClass:"prolist-price"},[t._v("￥"+t._s(i.price))]),e("v-uni-view",{staticClass:"flex-1"}),e("v-uni-view",{staticClass:"fr cor2"},[t._v(t._s(i.buy_num)+"件已售")])],1),e("v-uni-view",{staticClass:"prolist-cart"},[e("v-uni-view",{staticClass:"flex-1"}),i.isksid?e("v-uni-view",[0==i.cart_num?e("v-uni-view",{staticClass:"prolist-buy-btn",on:{click:function(e){e=t.$handleEvent(e),t.addCart(i.id)}}},[t._v("选规格")]):t._e()],1):e("v-uni-view",{staticClass:"pdb-5"},[i.cart_num>0?e("v-uni-view",{staticClass:"numbox prolist-numbox"},[e("v-uni-view",{staticClass:"numbox-minus",on:{click:function(e){e=t.$handleEvent(e),t.minusCart(i.id,i.cart_num)}}},[t._v("-")]),e("v-uni-input",{staticClass:"numbox-num",attrs:{type:"text",name:"amount",value:i.cart_num}}),e("v-uni-view",{staticClass:"numbox-plus",on:{click:function(e){e=t.$handleEvent(e),t.plusCart(i.id,i.cart_num)}}},[t._v("+")])],1):t._e(),0==i.cart_num?e("v-uni-view",{staticClass:"prolist-buy-btn",on:{click:function(e){e=t.$handleEvent(e),t.addCart(i.id)}}},[t._v("买")]):t._e()],1)],1)],1)],1)}))],1):t._e()},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"955c":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{tab:"index"},methods:{goHome:function(){uni.navigateBack({delta:50})},goCategory:function(){uni.navigateTo({url:"/pages/category/index"})},goProduct:function(){uni.navigateTo({url:"/pages/product/index"})},goCart:function(){uni.navigateTo({url:"/pages/cart/index"})},goUser:function(){wx.getStorageSync("authcode")?uni.navigateTo({url:"/pages/user/index"}):uni.navigateTo({url:"/pages/login/index"})}}};i.default=a},"9a61":function(t,i,e){"use strict";var a=e("b178"),n=e.n(a);n.a},"9bcb":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".flex[data-v-481999ea]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.list-side[data-v-481999ea]{position:fixed;left:%?0?%;top:%?0?%;bottom:%?132?%;width:%?184?%;padding-top:%?20?%;border-right:%?2?% solid #eee;padding-left:%?10?%;text-align:center}.list-side-item[data-v-481999ea]{color:#707070;margin-bottom:%?22?%;padding-bottom:%?22?%;border-bottom:%?1?% solid #eee;font-size:%?36?%;display:block}.list-side-item-active[data-v-481999ea]{color:#ff842b;border-left:%?6?% solid #ff842b}.flex-main[data-v-481999ea]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin-left:%?200?%}.prolist-item[data-v-481999ea]{position:relative;padding:%?5?% %?10?% %?5?% %?0?%;border-bottom:%?1?% solid #e4e4e4;margin-bottom:%?5?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.prolist-img[data-v-481999ea]{width:%?110?%;height:%?110?%;margin-right:%?22?%}.prolist-flex-1[data-v-481999ea]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.prolist-title[data-v-481999ea]{height:%?76?%;line-height:%?76?%;font-size:%?30?%;color:#333;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;margin-bottom:%?12?%}.prolist-row-price[data-v-481999ea]{line-height:%?22?%;font-size:%?32?%;margin-bottom:%?20?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.prolist-price[data-v-481999ea]{color:#fa215f;margin-right:%?5?%;display:inline-block}.prolist-cart[data-v-481999ea]{padding-right:%?5?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.prolist-sold-num[data-v-481999ea]{color:#999;font-size:%?12?%;display:inline-block}.prolist-numbox[data-v-481999ea]{float:right;margin-right:%?10?%}.prolist-buy-btn[data-v-481999ea]{display:block;height:%?66?%;line-height:%?66?%;text-align:center;width:%?66?%;background-color:#83c44e;color:#fff;border-radius:50%;float:right;margin-right:%?10?%;cursor:pointer}.prolist-row-sold[data-v-481999ea]{line-height:%?30?%;height:%?30?%;color:#aaa}.prolist-market-price[data-v-481999ea]{text-decoration:line-through;color:#999}",""])},b178:function(t,i,e){var a=e("9bcb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("53ea93e0",a,!0,{sourceMap:!1,shadowMode:!1})},c33b:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("55ef"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var r=e("3b97"),s=0,l=!0,c=0,d="list-side-item-active",u={components:{mtFooter:a.default},data:function(){return{pageLoad:!1,pageHide:!1,pageData:{},winHeight:600,defaultActive:"list-side-item-active"}},onLoad:function(t){var i=uni.getSystemInfoSync();this.winHeight=i.windowHeight-50,uni.setNavigationBarTitle({title:"产品"}),this.getPage()},onShow:function(){this.pageHide&&(this.pageHide=!1,this.getPage())},onHide:function(){this.pageHide=!0},onPullDownRefresh:function(){this.refresh()},onReachBottom:function(){this.getList()},methods:{getPage:function(){var t=this;uni.request({url:r.apiHost+"?m=product&ajax=1",data:{authcode:r.getAuthCode()},success:function(i){l=!1,t.pageLoad=!0,t.pageData=i.data.data,s=i.data.data.per_page}})},setCat:function(t){c=t,l=!0,s=0,this.defaultActive=0==c?d:"";var i=this.pageData.catlist;for(var e in i)i[e].id==c?i[e].isactive=1:i[e].isactive=0;this.pageData.catlist=i,this.getList()},getList:function(){var t=this;if(!l&&0==s)return!1;uni.request({url:r.apiHost+"?m=product&ajax=1",data:{per_page:s,shop_cid:c,authcode:r.getAuthCode()},success:function(i){i.data.error||(l?(t.pageData.list=i.data.data.list,l=!1):t.pageData.list=r.json_add(t.pageData.list,i.data.data.list),s=i.data.data.per_page)}})},goProduct:function(t){uni.navigateTo({url:"/pages/product/show?id="+t})},refresh:function(){this.getPage(),setTimeout(function(){uni.stopPullDownRefresh()},1e3)},loadMore:function(){this.getList()},addCart:function(t,i){var e=this;t=t,i=void 0==i?0:i;uni.request({url:r.apiHost+"?m=order_cart&a=add&fromapp=wxapp&ajax=1&object_id="+t,data:{authcode:r.getAuthCode(),ksid:i},method:"GET",success:function(i){console.log(i.data.data.product_amount);for(var a=e.pageData.list,n=0;n<a.length;n++)if(a[n].id==t){a[n].cart_num=i.data.data.product_amount;break}e.pageData.list=e.parseList(a)}})},plusCart:function(t,i,e){var a=this;t=t,i=i,e=void 0==e?0:e;i++,uni.request({url:r.apiHost+"?m=order_cart&a=add&fromapp=wxapp&ajax=1",data:{authcode:r.getAuthCode(),object_id:t,amount:i,isplus:1,ksid:e},method:"GET",success:function(i){for(var e=a.pageData.list,n=0;n<e.length;n++)if(e[n].id==t){e[n].cart_num=i.data.data.product_amount;break}a.pageData.list=a.parseList(e)}})},minusCart:function(t,i,e){var a=this;t=t,i=i;i--;var n=0;0==i&&(n=1),uni.request({url:r.apiHost+"?m=order_cart&a=add&fromapp=wxapp&ajax=1",data:o({authcode:r.getAuthCode(),amount:i,isdelete:n,isminus:1,object_id:t},"amount",i),method:"GET",success:function(i){for(var e=a.pageData.list,n=0;n<e.length;n++)if(e[n].id==t){e[n].cart_num=i.data.data.product_amount;break}a.pageData.list=a.parseList(e)}})},parseList:function(t){for(var i=0;i<t.length;i++)t[i].cart_num>0?t[i].cart_num_class="prolist-item-row-cart-active":t[i].cart_num_class="";return t}}};i.default=u},f2a5:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/***mfooter***/.mfooter-row[data-v-4c6d425d]{height:%?120?%}.mfooter[data-v-4c6d425d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:fixed;bottom:0;left:0;right:0;background-color:#eee;height:%?120?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:99}.mfooter-item[data-v-4c6d425d]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;text-decoration:none;color:#555;font-size:%?36?%;cursor:pointer;display:block}.mfooter-icon[data-v-4c6d425d]{display:block;font-size:%?35?%}.mfooter-active[data-v-4c6d425d]{color:#0069cd}",""])}}]);