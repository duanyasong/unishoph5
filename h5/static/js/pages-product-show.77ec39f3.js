(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-show"],{"03ca":function(t,a,i){"use strict";i.r(a);var e=i("57ec"),s=i("5773");for(var n in s)"default"!==n&&function(t){i.d(a,t,function(){return s[t]})}(n);i("5e73");var o=i("2877"),l=Object(o["a"])(s["default"],e["a"],e["b"],!1,null,"2a3bd330",null);a["default"]=l.exports},5773:function(t,a,i){"use strict";i.r(a);var e=i("68dc"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,function(){return e[t]})}(n);a["default"]=s.a},"57ec":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[t.pageLoad?i("v-uni-view",{staticClass:"main-body"},[t.pageData.imglist.length>0?i("v-uni-view",[i("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.pageData.imglist,function(t,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{attrs:{src:t.imgurl}})],1)],1)}))],1):i("v-uni-view",[i("v-uni-image",{staticClass:"d-img",attrs:{src:t.pageData.data.imgurl}})],1),i("v-uni-view",{staticClass:"row-box mgb-5"},[i("v-uni-view",{staticClass:"d-title"},[t._v(t._s(t.pageData.data.title))]),i("v-uni-view",{staticClass:"flex flex-1 mgb-10"},[i("v-uni-view",{staticClass:"flex-1 f20 cl-money"},[t._v("￥"+t._s(t.pageData.data.price))]),i("v-uni-view",{staticClass:"market-price"},[t._v("￥"+t._s(t.pageData.data.market_price))])],1)],1),i("v-uni-view",{staticClass:"bg-fff pd-10 d-content"},[i("v-uni-rich-text",{attrs:{type:"text",nodes:t.pageData.data.content}})],1),i("v-uni-view",{staticClass:"flcart"},[i("v-uni-view",{staticClass:"flcart-f1"},[i("v-uni-view",{staticClass:"iconfont flcart-icon icon-favor_fill_light"}),t._v("收藏")],1),i("v-uni-view",{staticClass:"flcart-f1",on:{click:function(a){a=t.$handleEvent(a),t.goCart()}}},[i("v-uni-view",{staticClass:"iconfont flcart-icon icon-cart"}),t._v("购物车")],1),i("v-uni-view",{staticClass:"flcart-f2",on:{click:function(a){a=t.$handleEvent(a),t.showCart()}}},[t._v("加入购物车")]),i("v-uni-view",{staticClass:"flcart-f2",on:{click:function(a){a=t.$handleEvent(a),t.showCart()}}},[t._v("立即购买")])],1),i("div",{staticClass:"cBox-mask",class:t.cBoxClass}),i("div",{staticClass:"cBox",class:t.cBoxClass},[i("div",{staticClass:"cBox-close",on:{click:function(a){a=t.$handleEvent(a),t.closeCart()}}}),i("div",{staticClass:"flex mgb-20"},[i("v-uni-image",{staticClass:"wh-60",attrs:{src:t.pageData.data.imgurl+".100x100.jpg",mode:"widthFix"}}),i("div",{staticClass:"flex-1 mgl-10"},[i("div",{staticClass:"cl1 mgb-5"},[t._v(t._s(t.pageData.data.title))]),i("div",{staticClass:"flex"},[i("div",{staticClass:"cl-money f14 flex-jc-end"},[t._v("￥")]),i("div",{staticClass:"cl-money f22"},[t._v(t._s(t.pageData.data.price))])])])],1),Object.keys(t.kslist).length>0?i("div",[i("div",{staticClass:"bd-mp-10"},[t._v("尺寸选择")]),i("v-uni-view",{staticClass:"kslist bd-mp-10 "},[i("v-uni-view",{staticClass:"kslist-label"},[t._v("颜色")]),t._l(t.kslist,function(a,e){return i("v-uni-view",{key:e,staticClass:"kslist-item",class:a.ksClass,on:{click:function(i){i=t.$handleEvent(i),t.getSize(a.id)}}},[t._v(t._s(a.title))])})],2)],1):t._e(),Object.keys(t.kslist2).length>0?i("v-uni-view",{staticClass:"kslist"},[i("v-uni-view",{staticClass:"kslist-label"},[t._v("尺寸")]),i("v-uni-view",{staticClass:"flex-1 flex"},t._l(t.kslist2,function(a,e){return i("v-uni-view",{key:e,staticClass:"kslist-item",class:a.ksClass},[t._v(t._s(a.size))])}))],1):t._e(),i("div",{staticClass:"mgb-5"},[t._v("数量")]),i("div",{staticClass:"flex mgb-10"},[i("v-uni-view",{staticClass:"numbox"},[i("v-uni-view",{staticClass:"numbox-minus",on:{click:function(a){a=t.$handleEvent(a),t.minus(a)}}},[t._v("-")]),i("v-uni-input",{staticClass:"numbox-num",attrs:{type:"text",value:t.num},model:{value:t.num,callback:function(a){t.num=a},expression:"num"}}),i("v-uni-view",{staticClass:"numbox-plus",on:{click:function(a){a=t.$handleEvent(a),t.plus(a)}}},[t._v("+")])],1)],1),i("div",{staticClass:"flex"},[i("div",{staticClass:"btn-small flex-1 mgr-20",on:{click:function(a){a=t.$handleEvent(a),t.goBuy()}}},[t._v("立即购买")]),i("div",{staticClass:"btn-small flex-1",on:{click:function(a){a=t.$handleEvent(a),t.addCart()}}},[t._v("加入购物车")])])],1)],1):t._e()],1)},s=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return s})},"5e73":function(t,a,i){"use strict";var e=i("e4eb"),s=i.n(e);s.a},"68dc":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i("3b97"),s={data:function(){return{pageLoad:!1,pageData:{},cBoxClass:"none",ksid:0,id:0,num:1,kslist:[],kslist2:[]}},onLoad:function(t){this.id=t.id,this.getPage()},methods:{getPage:function(){var t=this;uni.request({url:e.apiHost+"?m=product&ajax=1&a=show&id="+this.id,data:{authcode:e.getAuthCode()},success:function(a){t.pageLoad=!0,t.pageData=a.data.data,t.num=a.data.data.data.cart_num;var i=a.data.data.kslist;Object.keys(i).length>0&&(i[0].ksClass="kslist-active",t.ksid=i[0].id),t.kslist=i;var e=a.data.data.kslist2;Object.keys(e).length>0&&(e[0].ksClass="kslist-active"),t.kslist2=e}})},addCart:function(){var t=this;uni.request({url:t.app.apiHost+"?m=order_cart&a=add&ajax=1&object_id="+t.id,data:{authcode:e.getAuthCode(),ksid:t.ksid,fromapp:t.app.fromapp(),amount:t.num},method:"GET",success:function(a){uni.showToast({title:a.data.message}),a.data.error||(t.pageData.data.cart_num=1)}})},goHome:function(){e.goHome()},goCart:function(){e.goCart()},goBuy:function(){var t=this;uni.request({url:t.app.apiHost+"?m=order_cart&a=add&ajax=1&object_id="+t.id,data:{authcode:e.getAuthCode(),ksid:t.ksid,fromapp:t.app.fromapp(),amount:t.num},method:"GET",success:function(t){uni.showToast({title:t.data.message}),t.data.error||uni.navigateTo({url:"/pages/order/confirm?cart_id="+t.data.data.cart_id})}})},showCart:function(){this.cBoxClass=""},closeCart:function(){this.cBoxClass="none"},minus:function(){var t=this.num;if(t<=1)return!1;this.num--},plus:function(){this.num++},getSize:function(t){var a=this,i=a.kslist;for(var s in i)t==i[s].id?i[s].ksClass="kslist-active":i[s].ksClass="";uni.request({url:a.app.apiHost+"?m=product_ks&a=getSize&ajax=1&id="+t,data:{authcode:e.getAuthCode()},success:function(t){a.kslist2=t.data.data.kslist}})}}};a.default=s},a92e:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,'.kslist[data-v-2a3bd330]{padding-left:0}.flcart[data-v-2a3bd330]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:fixed;left:%?0?%;right:%?0?%;bottom:%?0?%;font-size:%?29?%;line-height:1.2;border-top:%?2?% solid #eee;background-color:#fff;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center}.flcart-f1[data-v-2a3bd330]{width:%?100?%;display:inline-block;height:%?92?%;line-height:%?40?%;padding-bottom:%?8?%;font-size:%?29?%}.flcart-f2[data-v-2a3bd330]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?70?%;line-height:%?70?%;background-color:#f30;color:#fff;font-size:%?29?%;border-radius:%?20?%;margin-left:%?20?%;margin-right:%?20?%;position:relative;top:%?16?%}.flcart-icon[data-v-2a3bd330]{font-size:%?32?%}.cBox-mask[data-v-2a3bd330]{background-color:#333;opacity:.2;position:fixed;left:0;right:0;top:0;bottom:0;z-index:998}.cBox[data-v-2a3bd330]{position:fixed;bottom:0;left:0;right:0;z-index:999;background-color:#fff;border:%?1?% solid #eee;padding:%?20?%;border-radius:%?10?%}.cBox-close[data-v-2a3bd330]{position:absolute;right:%?5?%;top:%?5?%;font-family:iconfont;width:%?80?%;height:%?80?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;text-align:center}.cBox-close[data-v-2a3bd330]:after{content:"\\E7E3";font-size:%?32?%}.kslist[data-v-2a3bd330]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-left:%?10?%}.kslist-label[data-v-2a3bd330]{margin-right:%?6?%;color:#646464}.kslist-item[data-v-2a3bd330]{border:%?1?% solid #eee;padding:%?4?% %?8?%;margin-right:%?10?%}.kslist-active[data-v-2a3bd330]{color:#007aff}',""])},e4eb:function(t,a,i){var e=i("a92e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("738c9dd2",e,!0,{sourceMap:!1,shadowMode:!1})}}]);