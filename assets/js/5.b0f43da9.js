(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{397:function(t,e,r){var n=r(3),i=r(17),o=Date.prototype,s=n(o.toString),u=n(o.getTime);"Invalid Date"!=String(new Date(NaN))&&i(o,"toString",(function(){var t=u(this);return t==t?s(this):"Invalid Date"}))},398:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return p}));r(9),r(22),r(26);var n={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;r.e(3).then(r.t.bind(null,500,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(r(435),r(8)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.comp?r(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(r(436),Object(i.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?r("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?r("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,r(437),r(111)),u=r.n(s),a=r(439),c=r.n(a),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},p=Object(i.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},399:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(101),r(74),r(38),r(9),r(460),r(108),r(109),r(232),r(461),r(113);var n=r(32);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},402:function(t,e,r){},403:function(t,e,r){},404:function(t,e,r){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g;return function(n,i,o){var s=i.prototype;o.utc=function(t){var e={date:t,utc:!0,args:arguments};return new i(e)},s.utc=function(e){var r=o(this.toDate(),{locale:this.$L,utc:!0});return e?r.add(this.utcOffset(),t):r},s.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var u=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),u.call(this,t)};var a=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else a.call(this)};var c=s.utcOffset;s.utcOffset=function(n,i){var o=this.$utils().u;if(o(n))return this.$u?0:o(this.$offset)?c.call(this):this.$offset;if("string"==typeof n&&null===(n=function(t){void 0===t&&(t="");var n=t.match(e);if(!n)return null;var i=(""+n[0]).match(r)||["-",0,0],o=i[0],s=60*+i[1]+ +i[2];return 0===s?0:"+"===o?s:-s}(n)))return this;var s=Math.abs(n)<=16?60*n:n,u=this;if(i)return u.$offset=s,u.$u=0===n,u;if(0!==n){var a=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(u=this.local().add(s+a,t)).$offset=s,u.$x.$localOffset=a}else u=this.utc();return u};var f=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var p=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():p.call(this)};var l=s.diff;s.diff=function(t,e,r){if(t&&this.$u===t.$u)return l.call(this,t,e,r);var n=this.local(),i=o(t).local();return l.call(n,i,e,r)}}}()},435:function(t,e,r){"use strict";r(402)},436:function(t,e,r){"use strict";r(403)},437:function(t,e,r){"use strict";var n=r(10),i=r(0),o=r(3),s=r(107),u=r(17),a=r(14),c=r(151),f=r(34),p=r(105),l=r(231),h=r(4),v=r(53).f,g=r(39).f,d=r(15).f,m=r(438),b=r(157).trim,$=i.Number,O=$.prototype,y=i.TypeError,x=o("".slice),_=o("".charCodeAt),S=function(t){var e=l(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,n,i,o,s,u,a,c=l(t,"number");if(p(c))throw y("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=b(c),43===(e=_(c,0))||45===e){if(88===(r=_(c,2))||120===r)return NaN}else if(48===e){switch(_(c,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(s=(o=x(c,2)).length,u=0;u<s;u++)if((a=_(o,u))<48||a>i)return NaN;return parseInt(o,n)}return+c};if(s("Number",!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var P,D=function(t){var e=arguments.length<1?0:$(S(t)),r=this;return f(O,r)&&h((function(){m(r)}))?c(Object(e),r,D):e},w=n?v($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),N=0;w.length>N;N++)a($,P=w[N])&&!a(D,P)&&d(D,P,g($,P));D.prototype=O,O.constructor=D,u(i,"Number",D)}},438:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},439:function(t,e,r){var n=r(240),i=r(233),o=r(440),s=r(444);t.exports=function(t,e){if(null==t)return{};var r=n(s(t),(function(t){return[t]}));return e=i(e),o(t,r,(function(t,r){return e(t,r[0])}))}},440:function(t,e,r){var n=r(156),i=r(441),o=r(149);t.exports=function(t,e,r){for(var s=-1,u=e.length,a={};++s<u;){var c=e[s],f=n(t,c);r(f,c)&&i(a,o(c,t),f)}return a}},441:function(t,e,r){var n=r(442),i=r(149),o=r(154),s=r(103),u=r(76);t.exports=function(t,e,r,a){if(!s(t))return t;for(var c=-1,f=(e=i(e,t)).length,p=f-1,l=t;null!=l&&++c<f;){var h=u(e[c]),v=r;if("__proto__"===h||"constructor"===h||"prototype"===h)return t;if(c!=p){var g=l[h];void 0===(v=a?a(g,h,l):void 0)&&(v=s(g)?g:o(e[c+1])?[]:{})}n(l,h,v),l=l[h]}return t}},442:function(t,e,r){var n=r(443),i=r(153),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var s=t[e];o.call(t,e)&&i(s,r)&&(void 0!==r||e in t)||n(t,e,r)}},443:function(t,e,r){var n=r(241);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},444:function(t,e,r){var n=r(234),i=r(445),o=r(447);t.exports=function(t){return n(t,o,i)}},445:function(t,e,r){var n=r(152),i=r(446),o=r(235),s=r(236),u=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,o(t)),t=i(t);return e}:s;t.exports=u},446:function(t,e,r){var n=r(239)(Object.getPrototypeOf,Object);t.exports=n},447:function(t,e,r){var n=r(237),i=r(448),o=r(155);t.exports=function(t){return o(t)?n(t,!0):i(t)}},448:function(t,e,r){var n=r(103),i=r(238),o=r(449),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=i(t),r=[];for(var u in t)("constructor"!=u||!e&&s.call(t,u))&&r.push(u);return r}},449:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},451:function(t,e,r){"use strict";var n=r(2),i=r(452).start;n({target:"String",proto:!0,forced:r(454)},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},452:function(t,e,r){var n=r(3),i=r(45),o=r(13),s=r(453),u=r(20),a=n(s),c=n("".slice),f=Math.ceil,p=function(t){return function(e,r,n){var s,p,l=o(u(e)),h=i(r),v=l.length,g=void 0===n?" ":o(n);return h<=v||""==g?l:((p=a(g,f((s=h-v)/g.length))).length>s&&(p=c(p,0,s)),t?l+p:p+l)}};t.exports={start:p(!1),end:p(!0)}},453:function(t,e,r){"use strict";var n=r(0),i=r(72),o=r(13),s=r(20),u=n.RangeError;t.exports=function(t){var e=o(s(this)),r="",n=i(t);if(n<0||n==1/0)throw u("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r}},454:function(t,e,r){var n=r(33);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},455:function(t,e,r){var n=r(2),i=r(456).entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},456:function(t,e,r){var n=r(10),i=r(3),o=r(71),s=r(21),u=i(r(106).f),a=i([].push),c=function(t){return function(e){for(var r,i=s(e),c=o(i),f=c.length,p=0,l=[];f>p;)r=c[p++],n&&!u(i,r)||a(l,t?[r,i[r]]:i[r]);return l}};t.exports={entries:c(!0),values:c(!1)}},460:function(t,e,r){var n=r(2),i=r(4),o=r(21),s=r(39).f,u=r(10),a=i((function(){s(1)}));n({target:"Object",stat:!0,forced:!u||a,sham:!u},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},461:function(t,e,r){var n=r(2),i=r(10),o=r(150).f;n({target:"Object",stat:!0,forced:Object.defineProperties!==o,sham:!i},{defineProperties:o})},471:function(t,e,r){"use strict";var n=r(2),i=r(472);n({target:"String",proto:!0,forced:r(473)("link")},{link:function(t){return i(this,"a","href",t)}})},472:function(t,e,r){var n=r(3),i=r(20),o=r(13),s=/"/g,u=n("".replace);t.exports=function(t,e,r,n){var a=o(i(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+u(o(n),s,"&quot;")+'"'),c+">"+a+"</"+e+">"}},473:function(t,e,r){var n=r(4);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);