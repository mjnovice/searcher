(function(e){function t(t){for(var s,c,i=t[0],o=t[1],d=t[2],f=0,u=[];f<i.length;f++)c=i[f],n[c]&&u.push(n[c][0]),n[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},r=[];function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3711:function(e,t,a){"use strict";var s=a("a03c"),n=a.n(s);n.a},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},4879:function(e,t,a){"use strict";var s=a("bbf5"),n=a.n(s);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("6b54"),a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("SearchForm",{on:{search:e.search}}),e.videos.length>0?a("SearchResults",{attrs:{videos:e.videos,reformattedSearchString:e.reformattedSearchString}}):e._e(),e.videos.length>0?a("Pagination",{attrs:{prevPageToken:e.api.prevPageToken,nextPageToken:e.api.nextPageToken},on:{"prev-page":e.prevPage,"next-page":e.nextPage}}):e._e()],1)},r=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-dark mb-5"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-youtube fa-2x"}),a("span",{staticClass:"ml-3"},[e._v("YouTube Search")])])])])])}],o={name:"Header"},d=o,l=(a("dded"),a("2877")),f=Object(l["a"])(d,c,i,!1,null,"66bba258",null),u=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("form",{staticClass:"mb-5"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search ..."},domProps:{value:e.searchString},on:{keydown:function(t){return"button"in t||13===t.keyCode?(t.preventDefault(),e.parseSearchString(t)):null},input:function(t){t.target.composing||(e.searchString=t.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:e.parseSearchString}},[a("i",{staticClass:"fas fa-search"})])])])])])},j=[],p=(a("28a5"),{name:"SearchForm",data:function(){return{searchString:""}},methods:{parseSearchString:function(){var e=this.searchString.trim();if(""!==e){var t=e.split(/\s+/);this.$emit("search",t),this.searchString=""}}}}),v=p,h=(a("ed8a"),Object(l["a"])(v,b,j,!1,null,"e3b55ef6",null)),m=h.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container mb-3"},[a("div",{staticClass:"d-flex mb-3"},[a("div",{staticClass:"mr-auto"},[a("h3",[e._v('Search Results for "'+e._s(e.reformattedSearchString)+'"')])]),a("div",{staticClass:"btn-group ml-auto",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-outline-secondary",class:{active:"grid"===e.displayMode},attrs:{type:"button"},on:{click:function(t){e.changeDisplayMode("grid")}}},[a("i",{staticClass:"fas fa-th"})]),a("button",{staticClass:"btn btn-outline-secondary",class:{active:"list"===e.displayMode},attrs:{type:"button"},on:{click:function(t){e.changeDisplayMode("list")}}},[a("i",{staticClass:"fas fa-list"})])])]),"grid"===e.displayMode?a("div",{staticClass:"card-columns"},e._l(e.videos,function(e){return a("div",{key:e.name,staticClass:"card"},[a("VideoGridItem",{attrs:{video:e}})],1)}),0):a("div",e._l(e.videos,function(e){return a("div",{key:e.name,staticClass:"card mb-2"},[a("VideoListItem",{attrs:{video:e}})],1)}),0)])},k=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("a",{staticClass:"card-link",attrs:{href:e.video.url,target:"_blank"}},[e._v(e._s(e.video.title))])]),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(e.video.title)+" | "+e._s(e._f("formatDate")(e.video.created)))]),a("p",{staticClass:"card-text"},[e._v(e._s(e.video.selftext))])])])},_=[],x={name:"VideoListItem",props:["video"]},S=x,C=Object(l["a"])(S,y,_,!1,null,null,null),P=C.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{attrs:{href:e.video.url,target:"_blank"}},[e._v("\n    "+e._s(e.video.title)+"\n  ")]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.video.title))]),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(e.video.title)+" | "+e._s(e._f("formatDate")(e.video.created)))]),a("p",{staticClass:"card-text"},[e._v(e._s(e.video.selftext))])])])},w=[],T={name:"VideoGridItem",props:["video"]},O=T,D=Object(l["a"])(O,z,w,!1,null,null,null),M=D.exports,$={name:"SearchResults",components:{VideoListItem:P,VideoGridItem:M},data:function(){return{title:"Search Results",displayMode:"grid"}},methods:{changeDisplayMode:function(e){this.displayMode=e}},props:["videos","reformattedSearchString"]},E=$,R=(a("3711"),Object(l["a"])(E,g,k,!1,null,"5f9bcc7b",null)),q=R.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("nav",[a("ul",{staticClass:"pagination justify-content-end"},[a("li",{staticClass:"page-item",class:{disabled:void 0===e.prevPageToken}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:e.prevPage}},[e._v("Previous")])]),a("li",{staticClass:"page-item",class:{disabled:void 0===e.nextPageToken}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:e.nextPage}},[e._v("Next")])])])])])},U=[],V={name:"Pagination",props:["prevPageToken","nextPageToken"],methods:{prevPage:function(){this.$emit("prev-page")},nextPage:function(){this.$emit("next-page")}}},G=V,Y=(a("4879"),Object(l["a"])(G,I,U,!1,null,"2c8c4eaa",null)),F=Y.exports,L=a("bc3a"),N=a.n(L),H={name:"app",components:{Header:u,SearchForm:m,SearchResults:q,Pagination:F},data:function(){return{videos:[],reformattedSearchString:"",api:{baseUrl:"http://localhost:8080/subreddit?",order:"viewCount",maxResults:12,q:"",prevPageToken:"",nextPageToken:""}}},methods:{search:function(e){this.reformattedSearchString=e.join(" "),this.api.q=e.join("+");var t=this.api,a=t.baseUrl,s=(t.order,t.maxResults,t.q),n="".concat(a,"&srname=").concat(s);this.getData(n)},prevPage:function(){var e=this.api,t=e.baseUrl,a=(e.order,e.maxResults,e.q),s=e.prevPageToken,n=e.nextPageToken,r="".concat(t,"&srname=").concat(a,"&prev=").concat(s,"&next=").concat(n);this.getData(r)},nextPage:function(){var e=this.api,t=e.baseUrl,a=(e.order,e.maxResults,e.q),s=(e.key,e.prevPageToken),n=e.nextPageToken,r="".concat(t,"&srname=").concat(a,"&prev=").concat(s,"&next=").concat(n);this.getData(r)},getData:function(e){var t=this;N.a.get(e,{headers:{Accept:"application/json"}}).then(function(e){t.videos=e.items,t.api.prevPageToken=e.before,t.api.nextPageToken=e.after}).catch(function(t){return console.log(t+e)})}}},J=H,A=Object(l["a"])(J,n,r,!1,null,null,null),B=A.exports,K=a("c1df"),Q=a.n(K);s["a"].config.productionTip=!1,s["a"].filter("formatDate",function(e){return e?Q()(e.toString()).format("MM/DD/YYYY hh:mm"):""}),new s["a"]({render:function(e){return e(B)}}).$mount("#app")},a03c:function(e,t,a){},b1c4:function(e,t,a){},bbf5:function(e,t,a){},d3bf:function(e,t,a){},dded:function(e,t,a){"use strict";var s=a("d3bf"),n=a.n(s);n.a},ed8a:function(e,t,a){"use strict";var s=a("b1c4"),n=a.n(s);n.a}});
//# sourceMappingURL=app.a4b5c536.js.map