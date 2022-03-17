(function(){"use strict";var t={5502:function(t,r,n){n(6992),n(8674),n(9601),n(7727);var e=n(9567),i=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{id:"oper container"}},[n("NavbarSimple"),n("div",{staticClass:"row"},[n("AlertSorry"),n("OrderInfo"),n("DisasterRegion")],1)],1)},s=[],a=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"opernav"},[e("img",{staticClass:"opernav-logo",attrs:{src:n(7145),alt:"logo"}})])}],c={name:"NavbarSimple"},l=c,u=n(1001),d=(0,u.Z)(l,a,o,!1,null,"63e48e93",null),f=d.exports,p=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"payinfo"},[n("div",{staticClass:"payinfo_head"},[n("div",{staticClass:"payinfo_head_txt"},[t._v("Оплата заказа: "+t._s(t.order_number))]),t._m(0)]),n("div",{staticClass:"payinfo_notice"},[t._v(" Необходимо оплатить заказ в течении 20 минут. ")]),n("ul",{staticClass:"payinfo_list"},[n("li",{staticClass:"payinfo_item"},[n("span",{staticClass:"payinfo_key"},[t._v("Трансфер:")]),n("span",{staticClass:"payinfo_val"},[t._v(t._s(t.order_desc))])]),n("li",{staticClass:"payinfo_item"},[n("span",{staticClass:"payinfo_key"},[t._v("Получатель:")]),n("span",{staticClass:"payinfo_val"},[t._v(t._s(t.order_recepient))])]),n("li",{staticClass:"payinfo_item"},[n("span",{staticClass:"payinfo_key"},[t._v("К оплате:")]),n("span",{staticClass:"payinfo_val"},[t._v(t._s(t.order_amount)+" р.")])])])])},_=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"payinfo_head_icons"},[e("img",{staticClass:"payinfo-visa",attrs:{src:n(5753),alt:"Visa"}}),e("img",{staticClass:"payinfo-master",attrs:{src:n(851),alt:"Master"}}),e("img",{staticClass:"payinfo-mir",attrs:{src:n(4763),alt:"Mir"}})])}],v={name:"OrderInfo",data:function(){return{order_number:null,order_desc:null,order_amount:null,order_recepient:null,order_prepayID:null,order_hash:null}},mounted:function(){this.order_number=window.orderDATA.order_number,this.order_desc=window.orderDATA.order_desc,this.order_amount=window.orderDATA.order_amount,this.order_recepient=window.orderDATA.order_recepient,this.order_prepayID=window.orderDATA.order_prepayID,this.order_hash=window.orderDATA.order_hash}},h=v,m=(0,u.Z)(h,p,_,!1,null,"624885ff",null),g=m.exports,y=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"sorry"},[n("i",{staticClass:"sorry-icon"}),n("div",{staticClass:"sorry-text"},[t._v("Ввиду участившихся случаев ошибок оплаты картами виза и мастеркард, необходимо указать страну в которой была выпущена ваша карта.")])])}],w={name:"AlertSorry"},b=w,A=(0,u.Z)(b,y,C,!1,null,"8be3227c",null),x=A.exports,k=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"disregion"},[n("h3",{staticClass:"disregion-head"},[t._v("Выберите регион выпуска банковской карты")]),n("div",{staticClass:"disregion-cont"},[n("div",{staticClass:"disregion-item"},[n("p",{staticClass:"disregion-text"},[t._v("Карта выпущена на территории Российской Федерации")]),n("kw-switcher",{attrs:{slot:"activator",checked:t.russia},on:{change:t.onChange},slot:"activator"})],1),n("div",{staticClass:"disregion-item"},[n("p",{staticClass:"disregion-text"},[t._v("Карта выпущена вне территории Российской Федерации")]),n("kw-switcher",{attrs:{slot:"activator",checked:!t.russia},on:{change:t.onChange},slot:"activator"})],1),n("div",{staticClass:"disregion-line"}),n("div",{staticClass:"disregion-link",on:{click:t.submit}},[t._v(" Оплатить ")])])])},D=[],O=(n(2222),n(1539),n(5044)),T=n.n(O),E={name:"DisasterRegion",components:{KwSwitcher:T()},data:function(){return{russia:!0}},methods:{onChange:function(){this.russia=!this.russia},submit:function(){var t="/services/prepay/confirmation?prepay_id=".concat(window.orderDATA.order_prepayID,"&hash=").concat(window.orderDATA.order_hash,"&is_rus_card=").concat(this.russia?1:0);fetch(t).then((function(t){t.json().then((function(t){window.location=t["formUrl"]}))}))}}},$=E,j=(0,u.Z)($,k,D,!1,null,"0705418c",null),I=j.exports,S={name:"App",components:{AlertSorry:x,OrderInfo:g,NavbarSimple:f,DisasterRegion:I}},Z=S,M=(0,u.Z)(Z,i,s,!1,null,null,null),N=M.exports;e.Z.config.productionTip=!1,new e.Z({render:function(t){return t(N)}}).$mount("#app")},7145:function(t,r,n){t.exports=n.p+"img/kiwitaxi-logo.7d3e48d7.svg"},851:function(t,r,n){t.exports=n.p+"img/master.748aaebe.svg"},4763:function(t,r,n){t.exports=n.p+"img/mir.d115888a.svg"},5753:function(t,r,n){t.exports=n.p+"img/visa.6d2c1f8d.svg"}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(r,e,i,s){if(!e){var a=1/0;for(u=0;u<t.length;u++){e=t[u][0],i=t[u][1],s=t[u][2];for(var o=!0,c=0;c<e.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](e[c])}))?e.splice(c--,1):(o=!1,s<a&&(a=s));if(o){t.splice(u--,1);var l=i();void 0!==l&&(r=l)}}return r}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[e,i,s]}}(),function(){n.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(r,{a:r}),r}}(),function(){n.d=function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(r){return 0===t[r]};var r=function(r,e){var i,s,a=e[0],o=e[1],c=e[2],l=0;if(a.some((function(r){return 0!==t[r]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(c)var u=c(n)}for(r&&r(e);l<a.length;l++)s=a[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},e=self["webpackChunkota_cards_issue"]=self["webpackChunkota_cards_issue"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(5502)}));e=n.O(e)})();
//# sourceMappingURL=app-legacy.375c77ae.js.map