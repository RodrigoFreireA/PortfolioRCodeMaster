function r(r,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,"symbol"==typeof(i=function(r,t){if("object"!=typeof r||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var e=n.call(r,"string");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key))?i:String(i),e)}var i}function t(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(){return n=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},n.apply(this,arguments)}function e(r){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},e(r)}function i(r,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},i(r,t)}function o(r,t,n){return o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(r){return!1}}()?Reflect.construct.bind():function(r,t,n){var e=[null];e.push.apply(e,t);var o=new(Function.bind.apply(r,e));return n&&i(o,n.prototype),o},o.apply(null,arguments)}function u(r){var t="function"==typeof Map?new Map:void 0;return u=function(r){if(null===r||-1===Function.toString.call(r).indexOf("[native code]"))return r;if("function"!=typeof r)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(r))return t.get(r);t.set(r,n)}function n(){return o(r,arguments,e(this).constructor)}return n.prototype=Object.create(r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,r)},u(r)}var f=String.prototype.replace,a=/%20/g,c="RFC3986",l={default:c,formatters:{RFC1738:function(r){return f.call(r,a,"+")},RFC3986:function(r){return String(r)}},RFC1738:"RFC1738",RFC3986:c},s=Object.prototype.hasOwnProperty,v=Array.isArray,p=function(){for(var r=[],t=0;t<256;++t)r.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return r}(),y=function(r,t){for(var n=t&&t.plainObjects?Object.create(null):{},e=0;e<r.length;++e)void 0!==r[e]&&(n[e]=r[e]);return n},d={arrayToObject:y,assign:function(r,t){return Object.keys(t).reduce(function(r,n){return r[n]=t[n],r},r)},combine:function(r,t){return[].concat(r,t)},compact:function(r){for(var t=[{obj:{o:r},prop:"o"}],n=[],e=0;e<t.length;++e)for(var i=t[e],o=i.obj[i.prop],u=Object.keys(o),f=0;f<u.length;++f){var a=u[f],c=o[a];"object"==typeof c&&null!==c&&-1===n.indexOf(c)&&(t.push({obj:o,prop:a}),n.push(c))}return function(r){for(;r.length>1;){var t=r.pop(),n=t.obj[t.prop];if(v(n)){for(var e=[],i=0;i<n.length;++i)void 0!==n[i]&&e.push(n[i]);t.obj[t.prop]=e}}}(t),r},decode:function(r,t,n){var e=r.replace(/\+/g," ");if("iso-8859-1"===n)return e.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(e)}catch(r){return e}},encode:function(r,t,n,e,i){if(0===r.length)return r;var o=r;if("symbol"==typeof r?o=Symbol.prototype.toString.call(r):"string"!=typeof r&&(o=String(r)),"iso-8859-1"===n)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(r){return"%26%23"+parseInt(r.slice(2),16)+"%3B"});for(var u="",f=0;f<o.length;++f){var a=o.charCodeAt(f);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||i===l.RFC1738&&(40===a||41===a)?u+=o.charAt(f):a<128?u+=p[a]:a<2048?u+=p[192|a>>6]+p[128|63&a]:a<55296||a>=57344?u+=p[224|a>>12]+p[128|a>>6&63]+p[128|63&a]:(a=65536+((1023&a)<<10|1023&o.charCodeAt(f+=1)),u+=p[240|a>>18]+p[128|a>>12&63]+p[128|a>>6&63]+p[128|63&a])}return u},isBuffer:function(r){return!(!r||"object"!=typeof r||!(r.constructor&&r.constructor.isBuffer&&r.constructor.isBuffer(r)))},isRegExp:function(r){return"[object RegExp]"===Object.prototype.toString.call(r)},maybeMap:function(r,t){if(v(r)){for(var n=[],e=0;e<r.length;e+=1)n.push(t(r[e]));return n}return t(r)},merge:function r(t,n,e){if(!n)return t;if("object"!=typeof n){if(v(t))t.push(n);else{if(!t||"object"!=typeof t)return[t,n];(e&&(e.plainObjects||e.allowPrototypes)||!s.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(n);var i=t;return v(t)&&!v(n)&&(i=y(t,e)),v(t)&&v(n)?(n.forEach(function(n,i){if(s.call(t,i)){var o=t[i];o&&"object"==typeof o&&n&&"object"==typeof n?t[i]=r(o,n,e):t.push(n)}else t[i]=n}),t):Object.keys(n).reduce(function(t,i){var o=n[i];return t[i]=s.call(t,i)?r(t[i],o,e):o,t},i)}},b=Object.prototype.hasOwnProperty,h={brackets:function(r){return r+"[]"},comma:"comma",indices:function(r,t){return r+"["+t+"]"},repeat:function(r){return r}},g=Array.isArray,m=String.prototype.split,j=Array.prototype.push,w=function(r,t){j.apply(r,g(t)?t:[t])},O=Date.prototype.toISOString,E=l.default,R={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:d.encode,encodeValuesOnly:!1,format:E,formatter:l.formatters[E],indices:!1,serializeDate:function(r){return O.call(r)},skipNulls:!1,strictNullHandling:!1},S=function r(t,n,e,i,o,u,f,a,c,l,s,v,p,y){var b,h=t;if("function"==typeof f?h=f(n,h):h instanceof Date?h=l(h):"comma"===e&&g(h)&&(h=d.maybeMap(h,function(r){return r instanceof Date?l(r):r})),null===h){if(i)return u&&!p?u(n,R.encoder,y,"key",s):n;h=""}if("string"==typeof(b=h)||"number"==typeof b||"boolean"==typeof b||"symbol"==typeof b||"bigint"==typeof b||d.isBuffer(h)){if(u){var j=p?n:u(n,R.encoder,y,"key",s);if("comma"===e&&p){for(var O=m.call(String(h),","),E="",S=0;S<O.length;++S)E+=(0===S?"":",")+v(u(O[S],R.encoder,y,"value",s));return[v(j)+"="+E]}return[v(j)+"="+v(u(h,R.encoder,y,"value",s))]}return[v(n)+"="+v(String(h))]}var k,T=[];if(void 0===h)return T;if("comma"===e&&g(h))k=[{value:h.length>0?h.join(",")||null:void 0}];else if(g(f))k=f;else{var x=Object.keys(h);k=a?x.sort(a):x}for(var N=0;N<k.length;++N){var C=k[N],D="object"==typeof C&&void 0!==C.value?C.value:h[C];if(!o||null!==D){var $=g(h)?"function"==typeof e?e(n,C):n:n+(c?"."+C:"["+C+"]");w(T,r(D,$,e,i,o,u,f,a,c,l,s,v,p,y))}}return T},k=Object.prototype.hasOwnProperty,T=Array.isArray,x={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:d.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},N=function(r){return r.replace(/&#(\d+);/g,function(r,t){return String.fromCharCode(parseInt(t,10))})},C=function(r,t){return r&&"string"==typeof r&&t.comma&&r.indexOf(",")>-1?r.split(","):r},D=function(r,t,n,e){if(r){var i=n.allowDots?r.replace(/\.([^.[]+)/g,"[$1]"):r,o=/(\[[^[\]]*])/g,u=n.depth>0&&/(\[[^[\]]*])/.exec(i),f=u?i.slice(0,u.index):i,a=[];if(f){if(!n.plainObjects&&k.call(Object.prototype,f)&&!n.allowPrototypes)return;a.push(f)}for(var c=0;n.depth>0&&null!==(u=o.exec(i))&&c<n.depth;){if(c+=1,!n.plainObjects&&k.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;a.push(u[1])}return u&&a.push("["+i.slice(u.index)+"]"),function(r,t,n,e){for(var i=e?t:C(t,n),o=r.length-1;o>=0;--o){var u,f=r[o];if("[]"===f&&n.parseArrays)u=[].concat(i);else{u=n.plainObjects?Object.create(null):{};var a="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,c=parseInt(a,10);n.parseArrays||""!==a?!isNaN(c)&&f!==a&&String(c)===a&&c>=0&&n.parseArrays&&c<=n.arrayLimit?(u=[])[c]=i:"__proto__"!==a&&(u[a]=i):u={0:i}}i=u}return i}(a,t,n,e)}},$=function(r,t){var n=function(r){if(!r)return x;if(null!=r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==r.charset&&"utf-8"!==r.charset&&"iso-8859-1"!==r.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");return{allowDots:void 0===r.allowDots?x.allowDots:!!r.allowDots,allowPrototypes:"boolean"==typeof r.allowPrototypes?r.allowPrototypes:x.allowPrototypes,arrayLimit:"number"==typeof r.arrayLimit?r.arrayLimit:x.arrayLimit,charset:void 0===r.charset?x.charset:r.charset,charsetSentinel:"boolean"==typeof r.charsetSentinel?r.charsetSentinel:x.charsetSentinel,comma:"boolean"==typeof r.comma?r.comma:x.comma,decoder:"function"==typeof r.decoder?r.decoder:x.decoder,delimiter:"string"==typeof r.delimiter||d.isRegExp(r.delimiter)?r.delimiter:x.delimiter,depth:"number"==typeof r.depth||!1===r.depth?+r.depth:x.depth,ignoreQueryPrefix:!0===r.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof r.interpretNumericEntities?r.interpretNumericEntities:x.interpretNumericEntities,parameterLimit:"number"==typeof r.parameterLimit?r.parameterLimit:x.parameterLimit,parseArrays:!1!==r.parseArrays,plainObjects:"boolean"==typeof r.plainObjects?r.plainObjects:x.plainObjects,strictNullHandling:"boolean"==typeof r.strictNullHandling?r.strictNullHandling:x.strictNullHandling}}(t);if(""===r||null==r)return n.plainObjects?Object.create(null):{};for(var e="string"==typeof r?function(r,t){var n,e={},i=(t.ignoreQueryPrefix?r.replace(/^\?/,""):r).split(t.delimiter,Infinity===t.parameterLimit?void 0:t.parameterLimit),o=-1,u=t.charset;if(t.charsetSentinel)for(n=0;n<i.length;++n)0===i[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[n]?u="utf-8":"utf8=%26%2310003%3B"===i[n]&&(u="iso-8859-1"),o=n,n=i.length);for(n=0;n<i.length;++n)if(n!==o){var f,a,c=i[n],l=c.indexOf("]="),s=-1===l?c.indexOf("="):l+1;-1===s?(f=t.decoder(c,x.decoder,u,"key"),a=t.strictNullHandling?null:""):(f=t.decoder(c.slice(0,s),x.decoder,u,"key"),a=d.maybeMap(C(c.slice(s+1),t),function(r){return t.decoder(r,x.decoder,u,"value")})),a&&t.interpretNumericEntities&&"iso-8859-1"===u&&(a=N(a)),c.indexOf("[]=")>-1&&(a=T(a)?[a]:a),e[f]=k.call(e,f)?d.combine(e[f],a):a}return e}(r,n):r,i=n.plainObjects?Object.create(null):{},o=Object.keys(e),u=0;u<o.length;++u){var f=o[u],a=D(f,e[f],n,"string"==typeof r);i=d.merge(i,a,n)}return d.compact(i)},F=/*#__PURE__*/function(){function r(r,t,n){var e,i;this.name=r,this.definition=t,this.bindings=null!=(e=t.bindings)?e:{},this.wheres=null!=(i=t.wheres)?i:{},this.config=n}var n=r.prototype;return n.matchesUrl=function(r){var t=this;if(!this.definition.methods.includes("GET"))return!1;var n=this.template.replace(/(\/?){([^}?]*)(\??)}/g,function(r,n,e,i){var o,u="(?<"+e+">"+((null==(o=t.wheres[e])?void 0:o.replace(/(^\^)|(\$$)/g,""))||"[^/?]+")+")";return i?"("+n+u+")?":""+n+u}).replace(/^\w+:\/\//,""),e=r.replace(/^\w+:\/\//,"").split("?"),i=e[0],o=e[1],u=new RegExp("^"+n+"/?$").exec(decodeURI(i));if(u){for(var f in u.groups)u.groups[f]="string"==typeof u.groups[f]?decodeURIComponent(u.groups[f]):u.groups[f];return{params:u.groups,query:$(o)}}return!1},n.compile=function(r){var t=this;return this.parameterSegments.length?this.template.replace(/{([^}?]+)(\??)}/g,function(n,e,i){var o,u;if(!i&&[null,void 0].includes(r[e]))throw new Error("Ziggy error: '"+e+"' parameter is required for route '"+t.name+"'.");if(t.wheres[e]&&!new RegExp("^"+(i?"("+t.wheres[e]+")?":t.wheres[e])+"$").test(null!=(u=r[e])?u:""))throw new Error("Ziggy error: '"+e+"' parameter does not match required format '"+t.wheres[e]+"' for route '"+t.name+"'.");return encodeURI(null!=(o=r[e])?o:"").replace(/%7C/g,"|").replace(/%25/g,"%").replace(/\$/g,"%24")}).replace(this.origin+"//",this.origin+"/").replace(/\/+$/,""):this.template},t(r,[{key:"template",get:function(){var r=(this.origin+"/"+this.definition.uri).replace(/\/+$/,"");return""===r?"/":r}},{key:"origin",get:function(){return this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:""}},{key:"parameterSegments",get:function(){var r,t;return null!=(r=null==(t=this.template.match(/{[^}?]+\??}/g))?void 0:t.map(function(r){return{name:r.replace(/{|\??}/g,""),required:!/\?}$/.test(r)}}))?r:[]}}]),r}(),P=/*#__PURE__*/function(r){var e,o;function u(t,e,i,o){var u;if(void 0===i&&(i=!0),(u=r.call(this)||this).t=null!=o?o:"undefined"!=typeof Ziggy?Ziggy:null==globalThis?void 0:globalThis.Ziggy,u.t=n({},u.t,{absolute:i}),t){if(!u.t.routes[t])throw new Error("Ziggy error: route '"+t+"' is not in the route list.");u.i=new F(t,u.t.routes[t],u.t),u.u=u.l(e)}return u}o=r,(e=u).prototype=Object.create(o.prototype),e.prototype.constructor=e,i(e,o);var f=u.prototype;return f.toString=function(){var r=this,t=Object.keys(this.u).filter(function(t){return!r.i.parameterSegments.some(function(r){return r.name===t})}).filter(function(r){return"_query"!==r}).reduce(function(t,e){var i;return n({},t,((i={})[e]=r.u[e],i))},{});return this.i.compile(this.u)+function(r,t){var n,e=r,i=function(r){if(!r)return R;if(null!=r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var t=r.charset||R.charset;if(void 0!==r.charset&&"utf-8"!==r.charset&&"iso-8859-1"!==r.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=l.default;if(void 0!==r.format){if(!b.call(l.formatters,r.format))throw new TypeError("Unknown format option provided.");n=r.format}var e=l.formatters[n],i=R.filter;return("function"==typeof r.filter||g(r.filter))&&(i=r.filter),{addQueryPrefix:"boolean"==typeof r.addQueryPrefix?r.addQueryPrefix:R.addQueryPrefix,allowDots:void 0===r.allowDots?R.allowDots:!!r.allowDots,charset:t,charsetSentinel:"boolean"==typeof r.charsetSentinel?r.charsetSentinel:R.charsetSentinel,delimiter:void 0===r.delimiter?R.delimiter:r.delimiter,encode:"boolean"==typeof r.encode?r.encode:R.encode,encoder:"function"==typeof r.encoder?r.encoder:R.encoder,encodeValuesOnly:"boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:R.encodeValuesOnly,filter:i,format:n,formatter:e,serializeDate:"function"==typeof r.serializeDate?r.serializeDate:R.serializeDate,skipNulls:"boolean"==typeof r.skipNulls?r.skipNulls:R.skipNulls,sort:"function"==typeof r.sort?r.sort:null,strictNullHandling:"boolean"==typeof r.strictNullHandling?r.strictNullHandling:R.strictNullHandling}}(t);"function"==typeof i.filter?e=(0,i.filter)("",e):g(i.filter)&&(n=i.filter);var o=[];if("object"!=typeof e||null===e)return"";var u=h[t&&t.arrayFormat in h?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"];n||(n=Object.keys(e)),i.sort&&n.sort(i.sort);for(var f=0;f<n.length;++f){var a=n[f];i.skipNulls&&null===e[a]||w(o,S(e[a],a,u,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.format,i.formatter,i.encodeValuesOnly,i.charset))}var c=o.join(i.delimiter),s=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&(s+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),c.length>0?s+c:""}(n({},t,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:function(r,t){return"boolean"==typeof r?Number(r):t(r)}})},f.v=function(r){var t=this;r?this.t.absolute&&r.startsWith("/")&&(r=this.p().host+r):r=this.h();var e={},i=Object.entries(this.t.routes).find(function(n){return e=new F(n[0],n[1],t.t).matchesUrl(r)})||[void 0,void 0];return n({name:i[0]},e,{route:i[1]})},f.h=function(){var r=this.p(),t=r.pathname,n=r.search;return(this.t.absolute?r.host+t:t.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+n},f.current=function(r,t){var e=this.v(),i=e.name,o=e.params,u=e.query,f=e.route;if(!r)return i;var a=new RegExp("^"+r.replace(/\./g,"\\.").replace(/\*/g,".*")+"$").test(i);if([null,void 0].includes(t)||!a)return a;var c=new F(i,f,this.t);t=this.l(t,c);var l=n({},o,u);return!(!Object.values(t).every(function(r){return!r})||Object.values(l).some(function(r){return void 0!==r}))||Object.entries(t).every(function(r){return l[r[0]]==r[1]})},f.p=function(){var r,t,n,e,i,o,u="undefined"!=typeof window?window.location:{},f=u.host,a=u.pathname,c=u.search;return{host:null!=(r=null==(t=this.t.location)?void 0:t.host)?r:void 0===f?"":f,pathname:null!=(n=null==(e=this.t.location)?void 0:e.pathname)?n:void 0===a?"":a,search:null!=(i=null==(o=this.t.location)?void 0:o.search)?i:void 0===c?"":c}},f.has=function(r){return Object.keys(this.t.routes).includes(r)},f.l=function(r,t){var e=this;void 0===r&&(r={}),void 0===t&&(t=this.i),null!=r||(r={}),r=["string","number"].includes(typeof r)?[r]:r;var i=t.parameterSegments.filter(function(r){return!e.t.defaults[r.name]});if(Array.isArray(r))r=r.reduce(function(r,t,e){var o,u;return n({},r,i[e]?((o={})[i[e].name]=t,o):"object"==typeof t?t:((u={})[t]="",u))},{});else if(1===i.length&&!r[i[0].name]&&(r.hasOwnProperty(Object.values(t.bindings)[0])||r.hasOwnProperty("id"))){var o;(o={})[i[0].name]=r,r=o}return n({},this.g(t),this.m(r,t))},f.g=function(r){var t=this;return r.parameterSegments.filter(function(r){return t.t.defaults[r.name]}).reduce(function(r,e,i){var o,u=e.name;return n({},r,((o={})[u]=t.t.defaults[u],o))},{})},f.m=function(r,t){var e=t.bindings,i=t.parameterSegments;return Object.entries(r).reduce(function(r,t){var o,u,f=t[0],a=t[1];if(!a||"object"!=typeof a||Array.isArray(a)||!i.some(function(r){return r.name===f}))return n({},r,((u={})[f]=a,u));if(!a.hasOwnProperty(e[f])){if(!a.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+f+"' parameter is missing route model binding key '"+e[f]+"'.");e[f]="id"}return n({},r,((o={})[f]=a[e[f]],o))},{})},f.valueOf=function(){return this.toString()},f.check=function(r){return this.has(r)},t(u,[{key:"params",get:function(){var r=this.v();return n({},r.params,r.query)}}]),u}(/*#__PURE__*/u(String));function Z(r){if(!r&&!globalThis.Ziggy&&"undefined"==typeof Ziggy)throw new Error("Ziggy error: missing configuration. Ensure that a `Ziggy` variable is defined globally or pass a config object into `useRoute()`.");return function(t,n,e,i){return void 0===i&&(i=r),function(r,t,n,e){var i=new P(r,t,n,e);return r?i.toString():i}(t,n,e,i)}}export{Z as useRoute};
