(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0585":function(t,e,n){"use strict";n.r(e);var r=n("e2bc"),i=n("9a22");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var a=n("f0c5"),o=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"39eabd9f",null,!1,r["a"],void 0);e["default"]=o.exports},"0676":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports["default"]=t.exports},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function s(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var o=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,s)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(o.length>1){var c=o.pop();u=o.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=o[0];console[a](u)}n.r(e),n.d(e,"log",(function(){return a})),n.d(e,"default",(function(){return o}))},"11b0":function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},"21fa":function(t,e,n){"use strict";n.r(e);var r=n("e4d9"),i=n("6663");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var a=n("f0c5"),o=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"15840e05",null,!1,r["a"],void 0);e["default"]=o.exports},2236:function(t,e,n){var r=n("5a43");t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},2298:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"newsBox",props:{item:{type:Object,default:function(){return{title:"\u7ec4\u4ef6\u5185\u9ed8\u8ba4\u7684\u6807\u9898",author:"\u5f20\u4e09",hits:668,picurl:"../../static/images/nopic.jpg",looktime:"2023-03-09 16:05:48"}}}},data:function(){return{}}};e.default=r},"2fa0":function(t,e){t.exports="/static/images/nohis.png"},"34e7":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","newsBox"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","pic"),attrs:{_i:1}},[n("image",{attrs:{src:t._$s(2,"a-src",t.item.picurl),_i:2}})]),n("view",{staticClass:t._$s(3,"sc","text"),attrs:{_i:3}},[n("view",{staticClass:t._$s(4,"sc","title"),attrs:{_i:4}},[t._v(t._$s(4,"t0-0",t._s(t.item.title)))]),t._$s(5,"i",!t.item.looktime)?n("view",{staticClass:t._$s(5,"sc","info"),attrs:{_i:5}},[n("text",[t._v(t._$s(6,"t0-0",t._s(t.item.author)))]),n("text",[t._v(t._$s(7,"t0-0",t._s(t.item.hits)))])]):n("view",{staticClass:t._$s(8,"sc","info"),attrs:{_i:8}},[n("text",[t._v(t._$s(9,"t0-0",t._s(t.item.looktime)))])])])])},i=[]},"3bc5":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.parseTime=function(t,e){if(0===arguments.length||!t)return null;var n,r=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===(0,i.default)(t)?n=t:("string"===typeof t&&/^[0-9]+$/.test(t)?t=parseInt(t):"string"===typeof t&&(t=t.replace(new RegExp(/-/gm),"/").replace("T"," ").replace(new RegExp(/\.[\d]{3}/gm),"")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var s={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},a=r.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,e){var n=s[e];return"a"===e?["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"][n]:(t.length>0&&n<10&&(n="0"+n),n||0)}));return a},e.timeInterval=function(t){var e=t,n=new Date,r=Math.abs(n.getTime()-e),i=Math.floor(r/31536e6),s=Math.floor(r/864e5),a=r%864e5,o=Math.floor(a/36e5),u=a%36e5,c=Math.floor(u/6e4),f=u%6e4,l=Math.round(f/1e3),d="";0!=i?d=i+"\u5e74\u524d":0==i&&0!=s?d=s+"\u5929\u524d":0==s&&0!=o?d=o+"\u5c0f\u65f6\u524d":0==o&&0!=c?d=c+"\u5206\u949f\u524d":0==c&&l<60&&(d="\u521a\u521a");return d};var i=r(n("7037"))},"3c2c":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","detail"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","title"),attrs:{_i:1}},[t._v(t._$s(1,"t0-0",t._s(t.detail.title)))]),n("view",{staticClass:t._$s(2,"sc","info"),attrs:{_i:2}},[n("view",{staticClass:t._$s(3,"sc","author"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.detail.author)))]),n("view",{staticClass:t._$s(4,"sc","time"),attrs:{_i:4}},[t._v(t._$s(4,"t0-0",t._s(t.detail.posttime)))])]),n("view",{staticClass:t._$s(5,"sc","content"),attrs:{_i:5}},[n("rich-text",{attrs:{nodes:t._$s(6,"a-nodes",t.detail.content),_i:6}})]),n("view",{staticClass:t._$s(7,"sc","description"),attrs:{_i:7}})])},i=[]},"3c7e":function(t,e,n){"use strict";n.r(e);var r=n("575e");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var s=n("f0c5"),a=Object(s["a"])(r["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=a.exports},"448a":function(t,e,n){var r=n("2236"),i=n("11b0"),s=n("6613"),a=n("0676");t.exports=function(t){return r(t)||i(t)||s(t)||a()},t.exports.__esModule=!0,t.exports["default"]=t.exports},"4e99":function(t,e,n){"use strict";n.r(e);var r=n("2298"),i=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=i.a},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"575e":function(t,e,n){"use strict";n.r(e);var r=n("b4e7"),i=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=i.a},"5a43":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.__esModule=!0,t.exports["default"]=t.exports},6613:function(t,e,n){var r=n("5a43");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.__esModule=!0,t.exports["default"]=t.exports},6663:function(t,e,n){"use strict";n.r(e);var r=n("b44f"),i=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=i.a},7037:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},"743f":function(t,e,n){"use strict";n.r(e);var r=n("98b3"),i=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=i.a},"82b9":function(t,e,n){"use strict";var r=n("4ea4"),i=r(n("9523")),s=r(n("7037"));n("c9dd");var a=r(n("3c7e")),o=r(n("8bbf"));function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}o.default.config.productionTip=!1,a.default.mpType="app";try{uni.addInterceptor({returnValue:function(t){return function(t){return!!t&&("object"===(0,s.default)(t)||"function"===typeof t)&&"function"===typeof t.then}(t)?new Promise((function(e,n){t.then((function(t){t[0]?n(t[0]):e(t[1])}))})):t}})}catch(f){}var c=new o.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},a.default));c.$mount()},8392:function(t,e,n){"use strict";n.r(e);var r=n("3c2c"),i=n("743f");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var a=n("f0c5"),o=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"2798d292",null,!1,r["a"],void 0);e["default"]=o.exports},"8bbf":function(t,e){t.exports=Vue},9523:function(t,e,n){var r=n("a395");t.exports=function(t,e,n){return e=r(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},"98b3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("3bc5"),i={data:function(){return{options:null,detail:{}}},onLoad:function(t){this.options=t,this.getDetail()},methods:{getDetail:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/detail.php",data:this.options,success:function(e){e.data.posttime=(0,r.parseTime)(e.data.posttime),e.data.content=e.data.content.replace(/<img/gi,'<img style="max-width: 100%"'),t.detail=e.data,t.saveHistory(),uni.setNavigationBarTitle({title:t.detail.title})}})},saveHistory:function(){var t=this,e=uni.getStorageSync("historyArr")||[],n={id:this.detail.id,classid:this.detail.classid,picurl:this.detail.picurl,title:this.detail.title,looktime:(0,r.parseTime)(Date.now())},i=e.findIndex((function(e){return e.id==t.detail.id}));i>=0&&e.splice(i,1),e.unshift(n),e=e.slice(0,10),uni.setStorageSync("historyArr",e)}}};e.default=i},"9a22":function(t,e,n){"use strict";n.r(e);var r=n("e39a"),i=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=i.a},"9c37":function(t,e){t.exports="/static/images/history.png"},a395:function(t,e,n){var r=n("7037")["default"],i=n("e50d");t.exports=function(t){var e=i(t,"string");return"symbol"===r(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},b44f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{listArr:[],historyArr:[]}},onShow:function(){this.getHistory()},methods:{goDetails:function(t){uni.navigateTo({url:"/pages/newsDetail/newsDetail?cid=".concat(t.classid,"&id=").concat(t.id)})},getHistory:function(){var t=uni.getStorageSync("historyArr")||[];this.historyArr=t}}};e.default=r},b4e7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},c9dd:function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("0585").default)})),__definePage("pages/user/user",(function(){return Vue.extend(n("21fa").default)})),__definePage("pages/newsDetail/newsDetail",(function(){return Vue.extend(n("8392").default)}))},e2bc:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r}));var r={newsBox:n("ece2").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:t._$s(0,"sc","outer"),attrs:{_i:0}},[r("scroll-view",{staticClass:t._$s(1,"sc","navscroll"),attrs:{_i:1}},t._l(t._$s(2,"f",{forItems:t.navData}),(function(e,n,i,s){return r("view",{key:t._$s(2,"f",{forIndex:i,key:e.id}),staticClass:t._$s("2-"+s,"sc","item"),class:t._$s("2-"+s,"c",t.clickNum===n?"active":""),attrs:{_i:"2-"+s},on:{click:function(r){return t.clickGetNum(n,e.id)}}},[t._v(t._$s("2-"+s,"t0-0",t._s(e.classname)))])})),0),r("view",{staticClass:t._$s(3,"sc","content"),attrs:{_i:3}},t._l(t._$s(4,"f",{forItems:t.news}),(function(e,n,i,s){return r("div",{key:t._$s(4,"f",{forIndex:i,key:e.id}),staticClass:t._$s("4-"+s,"sc","row"),attrs:{_i:"4-"+s}},[r("newsBox",{attrs:{item:e,_i:"5-"+s},nativeOn:{click:function(n){return t.goDetails(e)}}})],1)})),0),t._$s(6,"i",!t.news.length)?r("view",{staticClass:t._$s(6,"sc","nodata"),attrs:{_i:6}},[r("image",{attrs:{src:t._$s(7,"a-src",n("f6b3")),_i:7}})]):t._e(),t._$s(8,"i",t.news.length)?r("view",{staticClass:t._$s(8,"sc","loading"),attrs:{_i:8}},[t._$s(9,"i",1==t.loading)?r("view"):t._e(),t._$s(10,"i",2==t.loading)?r("view"):t._e()]):t._e()])},s=[]},e39a:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("448a")),s={data:function(){return{clickNum:0,navData:[],news:[],currentPage:1,loading:0}},onLoad:function(){this.getNavData(),this.getNews()},onReachBottom:function(){2!=this.loading&&(this.currentPage++,this.loading=1,this.getNews())},methods:{clickGetNum:function(t,e){this.clickNum=t,this.loading=0,this.currentPage=1,this.news=[],this.getNews(e)},goDetails:function(t){uni.navigateTo({url:"/pages/newsDetail/newsDetail?cid=".concat(t.classid,"&id=").concat(t.id)})},getNavData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/navlist.php",success:function(e){t.navData=e.data}})},getNews:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;uni.request({url:"https://ku.qingnian8.com/dataApi/news/newslist.php",data:{cid:e,page:this.currentPage},success:function(e){0==e.length&&(t.loading=2),t.news=[].concat((0,i.default)(t.news),(0,i.default)(e.data))}})}}};e.default=s},e4d9:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r}));var r={newsBox:n("ece2").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:t._$s(0,"sc","user"),attrs:{_i:0}},[r("view",{staticClass:t._$s(1,"sc","top"),attrs:{_i:1}},[r("image",{attrs:{src:t._$s(2,"a-src",n("9c37")),_i:2}}),r("view",{staticClass:t._$s(3,"sc","text"),attrs:{_i:3}})]),r("view",{staticClass:t._$s(4,"sc","content"),attrs:{_i:4}},t._l(t._$s(5,"f",{forItems:t.historyArr}),(function(e,n,i,s){return r("view",{key:t._$s(5,"f",{forIndex:i,key:"5-"+s}),staticClass:t._$s("5-"+s,"sc","row"),attrs:{_i:"5-"+s}},[r("newsBox",{attrs:{item:e,_i:"6-"+s},nativeOn:{click:function(n){return t.goDetails(e)}}})],1)})),0),t._$s(7,"i",!t.historyArr.length)?r("view",{staticClass:t._$s(7,"sc","noHistory"),attrs:{_i:7}},[r("image",{attrs:{src:t._$s(8,"a-src",n("2fa0")),_i:8}}),r("view",{staticClass:t._$s(9,"sc","text"),attrs:{_i:9}})]):t._e()])},s=[]},e50d:function(t,e,n){var r=n("7037")["default"];t.exports=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},ece2:function(t,e,n){"use strict";n.r(e);var r=n("34e7"),i=n("4e99");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var a=n("f0c5"),o=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"5ce8a15b",null,!1,r["a"],void 0);e["default"]=o.exports},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,s,a,o,u,c){var f,l="function"===typeof t?t.options:t;if(u){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(l.components,p)&&(l.components[p]=u[p])}if(c&&("function"===typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),a?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):i&&(f=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var _=l.render;l.render=function(t,e){return f.call(e),_(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},f6b3:function(t,e){t.exports="/static/images/nodata.png"}},[["82b9","app-config"]]]);