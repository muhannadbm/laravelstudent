/*SC_GROUP_JS*//*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map;
/*SC_GROUP_JS*//*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.1.9
* Updated: September 5th, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function($){
	$.fn.slides = function( option ) {
		// override defaults with specified option
		option = $.extend( {}, $.fn.slides.option, option );

		return this.each(function(){
			// wrap slides in control container, make sure slides are block level
			$('.' + option.container, $(this)).children().wrapAll('<div class="slides_control"/>');
			var elem = $(this),
				control = $('.slides_control',elem),
				total = control.children().size(),
				width = getWidth(),
				height = getHeight(),
				start = option.start - 1,
				effect = option.effect.indexOf(',') < 0 ? option.effect : option.effect.replace(' ', '').split(',')[0],
				paginationEffect = option.effect.indexOf(',') < 0 ? effect : option.effect.replace(' ', '').split(',')[1],
				next = 0, prev = 0, number = 0, current = 0, loaded, active, clicked, position, direction, imageParent, pauseTimeout, playInterval;
			equalHeight();
			if(option.width=="auto"){
				$(window).resize(function(){
					var width = getWidth();
					elem.find('.slide').css({
					left: width,
					width: width
					});
					equalHeight();
					control.css({
					left: -width,
					width: (width * 3),
					height:getHeight()
					});
					
				});
			}
			
			// is there only one slide?
			if (total < 2) {
				// Fade in .slides_container
				$('.' + option.container, $(this)).fadeIn(option.fadeSpeed, option.fadeEasing, function(){
					// let the script know everything is loaded
					loaded = true;
					// call the loaded funciton
					option.slidesLoaded();
				});
				// Hide the next/previous buttons
				$('.' + option.next + ', .' + option.prev,elem).fadeOut(0);
				return false;
			}
			
			// animate slides
			function animate(direction, effect, clicked) {
				if (!active && loaded) {
					active = true;
					// start of animation
					option.animationStart(current + 1);
					switch(direction) {
						case 'next':
							// change current slide to previous
							prev = current;
							// get next from current + 1
							next = current + 1;
							// if last slide, set next to first slide
							next = total === next ? 0 : next;
							// set position of next slide to right of previous
							position = option.currentWidth*2;
							// distance to slide based on width of slides
							direction = -option.currentWidth*2;
							// store new current slide
							current = next;
						break;
						case 'prev':
							// change current slide to previous
							prev = current;
							// get next from current - 1
							next = current - 1;
							// if first slide, set next to last slide
							next = next === -1 ? total-1 : next;								
							// set position of next slide to left of previous
							position = 0;								
							// distance to slide based on width of slides
							direction = 0;		
							// store new current slide
							current = next;
						break;
						case 'pagination':
							// get next from pagination item clicked, convert to number
							next = parseInt(clicked,10);
							// get previous from pagination item with class of current
							prev = $('.' + option.paginationClass + ' li.'+ option.currentClass +' a', elem).attr('href').match('[^#/]+$');
							// if next is greater then previous set position of next slide to right of previous
							if (next > prev) {
								position = option.currentWidth*2;
								direction = -option.currentWidth*2;
							} else {
							// if next is less then previous set position of next slide to left of previous
								position = 0;
								direction = 0;
							}
							// store new current slide
							current = next;
						break;
					}

					// fade animation
					if (effect === 'fade') {
						// fade animation with crossfade
						if (option.crossfade) {
							// put hidden next above current
							control.children(':eq('+ next +')', elem).css({
								zIndex: 10
							// fade in next
							}).fadeIn(option.fadeSpeed, option.fadeEasing, function(){
								if (option.autoHeight) {
									// animate container to height of next
									equalHeight(next);
									control.animate({
										height: control.children(':eq('+ next +')', elem).outerHeight()
									}, option.autoHeightSpeed, function(){
										// hide previous
										control.children(':eq('+ prev +')', elem).css({
											display: 'none',
											zIndex: 0
										});								
										// reset z index
										control.children(':eq('+ next +')', elem).css({
											zIndex: 0
										});									
										// end of animation
										option.animationComplete(next + 1);
										active = false;
									});
								} else {
									// hide previous
									control.children(':eq('+ prev +')', elem).css({
										display: 'none',
										zIndex: 0
									});									
									// reset zindex
									control.children(':eq('+ next +')', elem).css({
										zIndex: 0
									});									
									// end of animation
									option.animationComplete(next + 1);
									active = false;
								}
							});
						} else {
							// fade animation with no crossfade
							control.children(':eq('+ prev +')', elem).fadeOut(option.fadeSpeed,  option.fadeEasing, function(){
								// animate to new height
								equalHeight(next);
								if (option.autoHeight) {
									control.animate({
										// animate container to height of next
										height: control.children(':eq('+ next +')', elem).outerHeight()
									}, option.autoHeightSpeed,
									// fade in next slide
									function(){
										control.children(':eq('+ next +')', elem).fadeIn(option.fadeSpeed, option.fadeEasing);
									});
								} else {
								// if fixed height
									control.children(':eq('+ next +')', elem).fadeIn(option.fadeSpeed, option.fadeEasing, function(){
										// fix font rendering in ie, lame
										if($.browser.msie) {
											$(this).get(0).style.removeAttribute('filter');
										}
									});
								}									
								// end of animation
								option.animationComplete(next + 1);
								active = false;
							});
						}
					// slide animation
					} else {
						// move next slide to right of previous
						control.children(':eq('+ next +')').css({
							left: position,
							display: 'block'
						});
						// animate to new height
						if (option.autoHeight) {
							equalHeight(next);
							control.animate({
								left: direction,
								height: control.children(':eq('+ next +')').outerHeight()
							},option.slideSpeed, option.slideEasing, function(){
								control.css({
									left: -option.currentWidth
								});
								control.children(':eq('+ next +')').css({
									left: option.currentWidth,
									zIndex: 5
								});
								// reset previous slide
								control.children(':eq('+ prev +')').css({
									left: option.currentWidth,
									display: 'none',
									zIndex: 0
								});
								// end of animation
								option.animationComplete(next + 1);
								active = false;
							});
							// if fixed height
							} else {
								// animate control
								equalHeight(next);
								control.animate({
									left: direction
								},option.slideSpeed, option.slideEasing, function(){
									// after animation reset control position
									control.css({
										left: -option.currentWidth
									});
									// reset and show next
									control.children(':eq('+ next +')').css({
										left: option.currentWidth,
										zIndex: 5
									});
									// reset previous slide
									control.children(':eq('+ prev +')').css({
										left: option.currentWidth,
										display: 'none',
										zIndex: 0
									});
									// end of animation
									option.animationComplete(next + 1);
									active = false;
								});
							}
						}
					// set current state for pagination
					if (option.pagination) {
						// remove current class from all
						$('.'+ option.paginationClass +' li.' + option.currentClass, elem).removeClass(option.currentClass);
						// add current class to next
						$('.' + option.paginationClass + ' li:eq('+ next +')', elem).addClass(option.currentClass);
					}
					
				}
				
			} // end animate function
			
			function stop() {
				// clear interval from stored id
				clearInterval(elem.data('interval'));
			}
			function equalHeight(pointer){
				// equal height for title/description
				if(!pointer) pointer = current;
 				if(option.equalHeight){
					//setEqualHeight(control.children(':eq('+ pointer +')'));
					var el = control.children(':eq('+ pointer +')');
					jQuery('.bt-title,.bt-introtext',el).height('auto');
					var maxHeight = Math.max.apply(null, jQuery('.bt-title',el).map(function (){return jQuery(this).height();}).get());
					if(maxHeight) jQuery('.bt-title',el).height(maxHeight);
					maxHeight = Math.max.apply(null, jQuery('.bt-introtext',el).map(function (){return jQuery(this).height();}).get());
					if(maxHeight) jQuery('.bt-introtext',el).height(maxHeight);
				}
			}
			function getWidth(){
				option.currentWidth = option.width!="auto"?option.width:elem.width();
				return option.currentWidth;
			}
			function getHeight(){
				var mheight = 0;
				
				if(option.autoHeight){
					mheight = control.children(':eq('+ current +')').outerHeight();
				}else{
					if(option.height=='auto'){
						mheight= Math.max.apply(null, control.children().map(function (){return $(this).outerHeight();}).get());
					}else{
						mheight = option.height;
					}
				}
				return mheight? mheight:'auto';
			}
			function pause() {
				if (option.pause) {
					// clear timeout and interval
					clearTimeout(elem.data('pause'));
					clearInterval(elem.data('interval'));
					// pause slide show for option.pause amount
					pauseTimeout = setTimeout(function() {
						// clear pause timeout
						clearTimeout(elem.data('pause'));
						// start play interval after pause
						playInterval = setInterval(	function(){
							animate("next", effect);
						},option.play);
						// store play interval
						elem.data('interval',playInterval);
					},option.pause);
					// store pause interval
					elem.data('pause',pauseTimeout);
				} else {
					// if no pause, just stop
					stop();
				}
			}
				
			// 2 or more slides required
			if (total < 2) {
				return;
			}
			
			// error corection for start slide
			if (start < 0) {
				start = 0;
			}
			
			if (start > total) {
				start = total - 1;
			}
					
			// change current based on start option number
			if (option.start) {
				current = start;
			}
			
			// randomizes slide order
			if (option.randomize) {
				control.randomize();
			}
			
			// make sure overflow is hidden, width is set
			$('.' + option.container, elem).css({
				overflow: 'hidden',
				// fix for ie
				position: 'relative'
			});
			
			// set css for slides
			control.children().css({
				position: 'absolute',
				top: 0, 
				left: control.children().outerWidth(),
				zIndex: 0,
				display: 'none'
			 });
			
			// set css for control div
			control.css({
				position: 'relative',
				// size of control 3 x slide width
				width: (option.currentWidth * 3),
				// set height to slide height
				height: height,
				// center control to slide
				left: -option.currentWidth
			});
			
			// show slides
			$('.' + option.container, elem).css({
				display: 'block'
			});

			// if autoHeight true, get and set height of first slide
			if (option.autoHeight) {
				control.children().css({
					height: 'auto'
				});
				control.animate({
					height: control.children(':eq('+ start +')').outerHeight()
				},option.autoHeightSpeed);
			}
			
			// checks if image is loaded
			if (option.preload && control.find('img:eq(' + start + ')').length) {
				// adds preload image
				$('.' + option.container, elem).css({
					background: 'url(' + option.preloadImage + ') no-repeat 50% 50%'
				});
				
				/*
				// gets image src, with cache buster
				var img = control.find('img:eq(' + start + ')').attr('src') + '?' + (new Date()).getTime();
				
				// check if the image has a parent
				if ($('img', elem).parent().attr('class') != 'slides_control') {
					// If image has parent, get tag name
					imageParent = control.children(':eq(0)')[0].tagName.toLowerCase();
				} else {
					// Image doesn't have parent, use image tag name
					imageParent = control.find('img:eq(' + start + ')');
				}
				*/
				// checks if image is loaded
				var $imgs = control.find('img');
				var imgsl = $imgs.length;
				var u=0;
				$imgs.each(function(){
					var img = new Image();
					$(img).load(function(){
						++u;
						if (u == imgsl) {
							startSlider();
						}
					}).error(function () {
						++u;
						if (u == imgsl) {
							startSlider();
						}
					}).attr('src',this.src);
				});
			} else {
				// if no preloader fade in start slide
				control.children(':eq(' + start + ')').fadeIn(option.fadeSpeed, option.fadeEasing, function(){
					// let the script know everything is loaded
					loaded = true;
					// call the loaded funciton
					option.slidesLoaded();
				});
			}
			function startSlider(){
				// once image is fully loaded, fade in
				control.children(':eq(' + start + ')').fadeIn(option.fadeSpeed, option.fadeEasing, function(){
					$(this).css({
						zIndex: 5
					});
					// removes preload image
					$('.' + option.container, elem).css({
						background: ''
					});
					control.css({
						height:getHeight()
					});
					// let the script know everything is loaded
					loaded = true;
					// call the loaded funciton
					option.slidesLoaded();
				});
			}
			
			// click slide for next
			if (option.bigTarget) {
				// set cursor to pointer
				control.children().css({
					cursor: 'pointer'
				});
				// click handler
				control.children().click(function(){
					// animate to next on slide click
					animate('next', effect);
					return false;
				});									
			}
			
			// pause on mouseover
			if (option.hoverPause && option.play) {
				control.bind('mouseover',function(){
					// on mouse over stop
					stop();
				});
				control.bind('mouseleave',function(){
					// on mouse leave start pause timeout
					pause();
				});
			}
			
			// generate next/prev buttons
			if (option.generateNextPrev) {
				$('.' + option.container, elem).after('<a href="#" class="'+ option.prev +'">Prev</a>');
				$('.' + option.prev, elem).after('<a href="#" class="'+ option.next +'">Next</a>');
			}
			
			// next button
			$('.' + option.next ,elem).click(function(e){
				e.preventDefault();
				if (option.play) {
					pause();
				}
				animate('next', effect);
			});
			
			// previous button
			$('.' + option.prev, elem).click(function(e){
				e.preventDefault();
				if (option.play) {
					 pause();
				}
				animate('prev', effect);
			});
			
			// generate pagination
			if (option.generatePagination) {
				// create unordered list
				if($('.' + option.next ,elem).length){
					$('.' + option.next ,elem).before('<ul class='+ option.paginationClass +'></ul>');
				}else
				if (option.prependPagination){
					elem.prepend('<ul class='+ option.paginationClass +'></ul>');
				}else{
					elem.append('<ul class='+ option.paginationClass +'></ul>');
				}
				// for each slide create a list item and link
				control.children().each(function(){
					$('.' + option.paginationClass, elem).append('<li><a href="#'+ number +'">'+ (number+1) +'</a></li>');
					number++;
				});
			} else {
				// if pagination exists, add href w/ value of item number to links
				$('.' + option.paginationClass + ' li a', elem).each(function(){
					$(this).attr('href', '#' + number);
					number++;
				});
			}
			
			// add current class to start slide pagination
			$('.' + option.paginationClass + ' li:eq('+ start +')', elem).addClass(option.currentClass);
			
			// click handling 
			$('.' + option.paginationClass + ' li a', elem ).click(function(){
				// pause slideshow
				if (option.play) {
					 pause();
				}
				// get clicked, pass to animate function					
				clicked = $(this).attr('href').match('[^#/]+$');
				// if current slide equals clicked, don't do anything
				if (current != clicked) {
					animate('pagination', paginationEffect, clicked);
				}
				return false;
			});
			
			// click handling 
			$('a.link', elem).click(function(){
				// pause slideshow
				if (option.play) {
					 pause();
				}
				// get clicked, pass to animate function					
				clicked = $(this).attr('href').match('[^#/]+$') - 1;
				// if current slide equals clicked, don't do anything
				if (current != clicked) {
					animate('pagination', paginationEffect, clicked);
				}
				return false;
			});
		
			if (option.play) {
				// set interval
				playInterval = setInterval(function() {
					animate('next', effect);
				}, option.play);
				// store interval id
				elem.data('interval',playInterval);
			}

			
			if(option.touchScreen){
				var timeStart, xStart, yStart;
				$(control).on('touchstart', function(e){
					var touch = e.originalEvent.touches[0];
					xStart = touch.pageX;
					yStart = touch.pageY;
					timeStart = Number(new Date());
					
				});
				$(control).on('touchend', function(e){
					var touch = e.originalEvent.changedTouches[0];
					var duration = Number(new Date()) - timeStart;
					var xDistance = touch.pageX - xStart;
					var yDistance = touch.pageY - yStart;
					
					if(duration <= 300 && Math.abs(yDistance) <= 20 && xDistance != 0){
						if (option.play) {
							pause();
						}
						if(xDistance < 0){
							animate('next', effect);
						}else{
							animate('prev', effect);
						}
					}else{
						return;
					}
					
				});
			}
			
		});
	};
	
	// default options
	$.fn.slides.option = {
		preload: false, // boolean, Set true to preload images in an image based slideshow
		preloadImage: '/img/loading.gif', // string, Name and location of loading image for preloader. Default is "/img/loading.gif"
		container: 'slides_container', // string, Class name for slides container. Default is "slides_container"
		generateNextPrev: false, // boolean, Auto generate next/prev buttons
		next: 'next', // string, Class name for next button
		prev: 'prev', // string, Class name for previous button
		pagination: true, // boolean, If you're not using pagination you can set to false, but don't have to
		generatePagination: true, // boolean, Auto generate pagination
		prependPagination: false, // boolean, prepend pagination
		paginationClass: 'pagination', // string, Class name for pagination
		currentClass: 'current', // string, Class name for current class
		fadeSpeed: 350, // number, Set the speed of the fading animation in milliseconds
		fadeEasing: '', // string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
		slideSpeed: 350, // number, Set the speed of the sliding animation in milliseconds
		slideEasing: '', // string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
		start: 1, // number, Set the speed of the sliding animation in milliseconds
		effect: 'slide', // string, '[next/prev], [pagination]', e.g. 'slide, fade' or simply 'fade' for both
		crossfade: false, // boolean, Crossfade images in a image based slideshow
		randomize: false, // boolean, Set to true to randomize slides
		play: 0, // number, Autoplay slideshow, a positive number will set to true and be the time between slide animation in milliseconds
		pause: 0, // number, Pause slideshow on click of next/prev or pagination. A positive number will set to true and be the time of pause in milliseconds
		hoverPause: false, // boolean, Set to true and hovering over slideshow will pause it
		autoHeight: false, // boolean, Set to true to auto adjust height
		autoHeightSpeed: 350, // number, Set auto height animation time in milliseconds
		bigTarget: false, // boolean, Set to true and the whole slide will link to next slide on click
		animationStart: function(){}, // Function called at the start of animation
		animationComplete: function(){}, // Function called at the completion of animation
		slidesLoaded: function() {}, // Function is called when slides is fully loaded
		width:'auto',
		equalHeight:true,
		currentWidth: '',
	};
	
	// Randomize slide order on load
	$.fn.randomize = function(callback) {
		function randomizeOrder() { return(Math.round(Math.random())-0.5); }
			return($(this).each(function() {
			var $this = $(this);
			var $children = $this.children();
			var childCount = $children.length;
			if (childCount > 1) {
				$children.hide();
				var indices = [];
				for (i=0;i<childCount;i++) { indices[indices.length] = i; }
				indices = indices.sort(randomizeOrder);
				$.each(indices,function(j,k) { 
					var $child = $children.eq(k);
					var $clone = $child.clone(true);
					$clone.show().appendTo($this);
					if (callback !== undefined) {
						callback($child, $clone);
					}
				$child.remove();
			});
			}
		}));
	};
})(jQuery);
/*SC_GROUP_JS*/BTCJ = jQuery.noConflict();
jQuery(document).ready(function () {
	if (typeof(btcModuleIds) != 'undefined') {
		for (var i = 0; i < btcModuleIds.length; i++) {
			jQuery('#btcontentslider' + btcModuleIds[i]).css("direction", "ltr");
			jQuery('#btcontentslider' + btcModuleIds[i]).fadeIn("fast");
			
			if(btcModuleOpts[i].width=='auto'){
				jQuery('#btcontentslider' + btcModuleIds[i] + ' .slide').width(jQuery('#btcontentslider' + btcModuleIds[i] + ' .slide').width());
			}
			
			BTCJ('#btcontentslider' + btcModuleIds[i]).slides(btcModuleOpts[i]);
			if (jQuery("html").css("direction") == "rtl") {
				jQuery('#btcontentslider' + btcModuleIds[i] + ' .slides_control').css("direction", "rtl");
			}
		}
	}
	jQuery('img.hovereffect').hover(function () {
		jQuery(this).stop(true).animate({
			opacity : 0.5
		}, 300)
	}, function () {
		jQuery(this).animate({
			opacity : 1
		}, 300)
	})
});
/*SC_GROUP_JS*//*
 * BTCJ Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In BTCJ 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - BTCJ Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
BTCJ.easing['jswing'] = BTCJ.easing['swing'];

BTCJ.extend( BTCJ.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(BTCJ.easing.default);
		return BTCJ.easing[BTCJ.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - BTCJ.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return BTCJ.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return BTCJ.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/*SC_GROUP_JS*//*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){var n=[],r=e.document,i=n.slice,o=n.concat,a=n.push,s=n.indexOf,u={},l=u.toString,c=u.hasOwnProperty,f={},d=function(e,t){return new d.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,g=/-([\da-z])/gi,m=function(e,t){return t.toUpperCase()};function v(e){var t=!!e&&"length"in e&&e.length,n=d.type(e);return"function"!==n&&!d.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}d.fn=d.prototype={jquery:"1.12.4",constructor:d,selector:"",length:0,toArray:function(){return i.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:i.call(this)},pushStack:function(e){var t=d.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return d.each(this,e)},map:function(e){return this.pushStack(d.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},d.extend=d.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||d.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],"__proto__"!==r&&a!==n&&(l&&n&&(d.isPlainObject(n)||(t=d.isArray(n)))?(t?(t=!1,o=e&&d.isArray(e)?e:[]):o=e&&d.isPlainObject(e)?e:{},a[r]=d.extend(l,o,n)):void 0!==n&&(a[r]=n));return a},d.extend({expando:"jQuery"+("1.12.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===d.type(e)},isArray:Array.isArray||function(e){return"array"===d.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){var t=e&&e.toString();return!d.isArray(e)&&t-parseFloat(t)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==d.type(e)||e.nodeType||d.isWindow(e))return!1;try{if(e.constructor&&!c.call(e,"constructor")&&!c.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(!f.ownFirst)for(t in e)return c.call(e,t);for(t in e);return void 0===t||c.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[l.call(e)]||"object":typeof e},globalEval:function(t){t&&d.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(h,"ms-").replace(g,m)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(v(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(v(Object(e))?d.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(s)return s.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];if(n!=n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,a=0,s=[];if(v(e))for(r=e.length;a<r;a++)null!=(i=t(e[a],a,n))&&s.push(i);else for(a in e)null!=(i=t(e[a],a,n))&&s.push(i);return o.apply([],s)},guid:1,proxy:function(e,t){var n,r,o;if("string"==typeof t&&(o=e[t],t=e,e=o),d.isFunction(e))return n=i.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(i.call(arguments)))}).guid=e.guid=e.guid||d.guid++,r},now:function(){return+new Date},support:f}),"function"==typeof Symbol&&(d.fn[Symbol.iterator]=n[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});var y=function(e){var t,n,r,i,o,a,s,u,l,c,f,d,p,h,g,m,v,y,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=oe(),N=oe(),k=oe(),S=function(e,t){return e===t&&(f=!0),0},A=1<<31,D={}.hasOwnProperty,j=[],L=j.pop,H=j.push,q=j.push,_=j.slice,F=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",O="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",P="\\["+O+"*("+R+")(?:"+O+"*([*^$|!~]?=)"+O+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+O+"*\\]",B=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",W=new RegExp(O+"+","g"),I=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),$=new RegExp("^"+O+"*,"+O+"*"),z=new RegExp("^"+O+"*([>+~]|"+O+")"+O+"*"),X=new RegExp("="+O+"*([^\\]'\"]*?)"+O+"*\\]","g"),U=new RegExp(B),V=new RegExp("^"+R+"$"),Y={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+O+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)","i")},J=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,ee=/'|\\/g,te=new RegExp("\\\\([\\da-f]{1,6}"+O+"?|("+O+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=function(){d()};try{q.apply(j=_.call(w.childNodes),w.childNodes),j[w.childNodes.length].nodeType}catch(e){q={apply:j.length?function(e,t){H.apply(e,_.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ie(e,t,r,i){var o,s,l,c,f,h,v,y,T=t&&t.ownerDocument,C=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return r;if(!i&&((t?t.ownerDocument||t:w)!==p&&d(t),t=t||p,g)){if(11!==C&&(h=K.exec(e)))if(o=h[1]){if(9===C){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(T&&(l=T.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(h[2])return q.apply(r,t.getElementsByTagName(e)),r;if((o=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return q.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!m||!m.test(e))){if(1!==C)T=t,y=e;else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(ee,"\\$&"):t.setAttribute("id",c=b),s=(v=a(e)).length,f=V.test(c)?"#"+c:"[id='"+c+"']";s--;)v[s]=f+" "+ge(v[s]);y=v.join(","),T=Z.test(e)&&pe(t.parentNode)||t}if(y)try{return q.apply(r,T.querySelectorAll(y)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(I,"$1"),t,r,i)}function oe(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ae(e){return e[b]=!0,e}function se(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function le(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ce(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return ae(function(t){return t=+t,ae(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function pe(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ie.support={},o=ie.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=ie.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(h=(p=a).documentElement,g=!o(p),(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=b,!p.getElementsByName||!p.getElementsByName(b).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}},r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=Q.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+O+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+O+"*(?:value|"+M+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]")}),se(function(e){var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+O+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=Q.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),v.push("!=",B)}),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&x(w,e)?-1:t===p||t.ownerDocument===w&&x(w,t)?1:c?F(c,e)-F(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:c?F(c,e)-F(c,t):0;if(i===o)return le(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?le(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},p):p},ie.matches=function(e,t){return ie(e,null,null,t)},ie.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),t=t.replace(X,"='$1']"),n.matchesSelector&&g&&!k[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return ie(t,p,null,[e]).length>0},ie.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),x(e,t)},ie.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ie.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ie.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(S),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=ie.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=ie.selectors={cacheLength:50,createPseudo:ae,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ie.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ie.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1;if(m){if(o){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(x=(p=(l=(c=(f=(d=m)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(x=p=0)||h.pop();)if(1===d.nodeType&&++x&&d===t){c[e]=[T,p,x];break}}else if(y&&(x=p=(l=(c=(f=(d=t)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)for(;(d=++p&&d&&d[g]||(x=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++x||(y&&((c=(f=d[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[T,x]),d!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ie.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=F(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ae(function(e){var t=[],n=[],r=s(e.replace(I,"$1"));return r[b]?ae(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return ie(e,t).length>0}}),contains:ae(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return V.test(e||"")||ie.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[n<0?n+t:n]}),even:de(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:de(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:de(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:de(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=ce(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=fe(t);function he(){}function ge(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=[T,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((s=(u=(l=t[b]||(t[b]={}))[t.uniqueID]||(l[t.uniqueID]={}))[r])&&s[0]===T&&s[1]===o)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,a))return!0}}}function ve(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ye(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function xe(e,t,n,r,i,o){return r&&!r[b]&&(r=xe(r)),i&&!i[b]&&(i=xe(i,o)),ae(function(o,a,s,u){var l,c,f,d=[],p=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ie(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:ye(g,d,e,s,u),v=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,v,s,u),r)for(l=ye(v,p),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[p[c]]=!(m[p[c]]=f));if(o){if(i||e){if(i){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(m[c]=f);i(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=i?F(o,f):d[c])>-1&&(o[l]=!(a[l]=f))}}else v=ye(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):q.apply(a,v)})}function be(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return F(t,e)>-1},s,!0),d=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])d=[me(ve(d),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return xe(u>1&&ve(d),u>1&&ge(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(I,"$1"),n,u<i&&be(e.slice(u,i)),i<o&&be(e=e.slice(i)),i<o&&ge(e))}d.push(n)}return ve(d)}return he.prototype=r.filters=r.pseudos,r.setFilters=new he,a=ie.tokenize=function(e,t){var n,i,o,a,s,u,l,c=N[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=$.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=z.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(I," ")}),s=s.slice(n.length)),r.filter)!(i=Y[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ie.error(e):N(e,u).slice(0)},s=ie.compile=function(e,t){var n,i=[],o=[],s=k[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=be(t[n]))[b]?i.push(s):o.push(s);(s=k(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,m,v=0,y="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,N=C.length;for(c&&(l=a===p||a||c);y!==N&&null!=(f=C[y]);y++){if(i&&f){for(h=0,a||f.ownerDocument===p||(d(f),s=!g);m=e[h++];)if(m(f,a||p,s)){u.push(f);break}c&&(T=E)}n&&((f=!m&&f)&&v--,o&&x.push(f))}if(v+=y,n&&y!==v){for(h=0;m=t[h++];)m(x,b,a,s);if(o){if(v>0)for(;y--;)x[y]||b[y]||(b[y]=L.call(u));b=ye(b)}q.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&ie.uniqueSort(u)}return c&&(T=E,l=w),x};return n?ae(o):o}(o,i))).selector=e}return s},u=ie.select=function(e,t,i,o){var u,l,c,f,d,p="function"==typeof e&&e,h=!o&&a(e=p.selector||e);if(i=i||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&n.getById&&9===t.nodeType&&g&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return i;p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(u=Y.needsContext.test(e)?0:l.length;u--&&(c=l[u],!r.relative[f=c.type]);)if((d=r.find[f])&&(o=d(c.matches[0].replace(te,ne),Z.test(l[0].type)&&pe(t.parentNode)||t))){if(l.splice(u,1),!(e=o.length&&ge(l)))return q.apply(i,o),i;break}}return(p||s(e,h))(o,t,!g,i,!t||Z.test(e)&&pe(t.parentNode)||t),i},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!f,d(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||ue(M,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),ie}(e);d.find=y,d.expr=y.selectors,d.expr[":"]=d.expr.pseudos,d.uniqueSort=d.unique=y.uniqueSort,d.text=y.getText,d.isXMLDoc=y.isXML,d.contains=y.contains;var x=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&d(e).is(n))break;r.push(e)}return r},b=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},w=d.expr.match.needsContext,T=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,C=/^.[^:#\[\.,]*$/;function E(e,t,n){if(d.isFunction(t))return d.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return d.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(C.test(t))return d.filter(t,e,n);t=d.filter(t,e)}return d.grep(e,function(e){return d.inArray(e,t)>-1!==n})}d.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?d.find.matchesSelector(r,e)?[r]:[]:d.find.matches(e,d.grep(t,function(e){return 1===e.nodeType}))},d.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(d(e).filter(function(){for(t=0;t<i;t++)if(d.contains(r[t],this))return!0}));for(t=0;t<i;t++)d.find(e,r[t],n);return(n=this.pushStack(i>1?d.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(E(this,e||[],!1))},not:function(e){return this.pushStack(E(this,e||[],!0))},is:function(e){return!!E(this,"string"==typeof e&&w.test(e)?d(e):e||[],!1).length}});var N,k=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(d.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||N,"string"==typeof e){if(!(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:k.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof d?t[0]:t,d.merge(this,d.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),T.test(i[1])&&d.isPlainObject(t))for(i in t)d.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}if((o=r.getElementById(i[2]))&&o.parentNode){if(o.id!==i[2])return N.find(e);this.length=1,this[0]=o}return this.context=r,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):d.isFunction(e)?void 0!==n.ready?n.ready(e):e(d):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),d.makeArray(e,this))}).prototype=d.fn,N=d(r);var S=/^(?:parents|prev(?:Until|All))/,A={children:!0,contents:!0,next:!0,prev:!0};function D(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}d.fn.extend({has:function(e){var t,n=d(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(d.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=w.test(e)||"string"!=typeof e?d(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&d.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?d.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?d.inArray(this[0],d(e)):d.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),d.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x(e,"parentNode")},parentsUntil:function(e,t,n){return x(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return x(e,"nextSibling")},prevAll:function(e){return x(e,"previousSibling")},nextUntil:function(e,t,n){return x(e,"nextSibling",n)},prevUntil:function(e,t,n){return x(e,"previousSibling",n)},siblings:function(e){return b((e.parentNode||{}).firstChild,e)},children:function(e){return b(e.firstChild)},contents:function(e){return d.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:d.merge([],e.childNodes)}},function(e,t){d.fn[e]=function(n,r){var i=d.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=d.filter(r,i)),this.length>1&&(A[e]||(i=d.uniqueSort(i)),S.test(e)&&(i=i.reverse())),this.pushStack(i)}});var j,L,H=/\S+/g;function q(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_)):(r.detachEvent("onreadystatechange",_),e.detachEvent("onload",_))}function _(){(r.addEventListener||"load"===e.event.type||"complete"===r.readyState)&&(q(),d.ready())}for(L in d.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return d.each(e.match(H)||[],function(e,n){t[n]=!0}),t}(e):d.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){d.each(n,function(n,r){d.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==d.type(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return d.each(arguments,function(e,t){for(var n;(n=d.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?d.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=!0,n||l.disable(),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},d.extend({Deferred:function(e){var t=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return d.Deferred(function(n){d.each(t,function(t,o){var a=d.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&d.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?d.extend(e,r):r}},i={};return r.pipe=r.then,d.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,o=0,a=i.call(arguments),s=a.length,u=1!==s||e&&d.isFunction(e.promise)?s:0,l=1===u?e:d.Deferred(),c=function(e,n,r){return function(o){n[e]=this,r[e]=arguments.length>1?i.call(arguments):o,r===t?l.notifyWith(n,r):--u||l.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);o<s;o++)a[o]&&d.isFunction(a[o].promise)?a[o].promise().progress(c(o,n,t)).done(c(o,r,a)).fail(l.reject):--u;return u||l.resolveWith(r,a),l.promise()}}),d.fn.ready=function(e){return d.ready.promise().done(e),this},d.extend({isReady:!1,readyWait:1,holdReady:function(e){e?d.readyWait++:d.ready(!0)},ready:function(e){(!0===e?--d.readyWait:d.isReady)||(d.isReady=!0,!0!==e&&--d.readyWait>0||(j.resolveWith(r,[d]),d.fn.triggerHandler&&(d(r).triggerHandler("ready"),d(r).off("ready"))))}}),d.ready.promise=function(t){if(!j)if(j=d.Deferred(),"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll)e.setTimeout(d.ready);else if(r.addEventListener)r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_);else{r.attachEvent("onreadystatechange",_),e.attachEvent("onload",_);var n=!1;try{n=null==e.frameElement&&r.documentElement}catch(e){}n&&n.doScroll&&function t(){if(!d.isReady){try{n.doScroll("left")}catch(n){return e.setTimeout(t,50)}q(),d.ready()}}()}return j.promise(t)},d.ready.promise(),d(f))break;f.ownFirst="0"===L,f.inlineBlockNeedsLayout=!1,d(function(){var e,t,n,i;(n=r.getElementsByTagName("body")[0])&&n.style&&(t=r.createElement("div"),(i=r.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),void 0!==t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",f.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))}),function(){var e=r.createElement("div");f.deleteExpando=!0;try{delete e.test}catch(e){f.deleteExpando=!1}e=null}();var F,M=function(e){var t=d.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)},O=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function P(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(R,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:O.test(n)?d.parseJSON(n):n)}catch(e){}d.data(e,t,n)}else n=void 0}return n}function B(e){var t;for(t in e)if(("data"!==t||!d.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function W(e,t,r,i){if(M(e)){var o,a,s=d.expando,u=e.nodeType,l=u?d.cache:e,c=u?e[s]:e[s]&&s;if(c&&l[c]&&(i||l[c].data)||void 0!==r||"string"!=typeof t)return c||(c=u?e[s]=n.pop()||d.guid++:s),l[c]||(l[c]=u?{}:{toJSON:d.noop}),"object"!=typeof t&&"function"!=typeof t||(i?l[c]=d.extend(l[c],t):l[c].data=d.extend(l[c].data,t)),a=l[c],i||(a.data||(a.data={}),a=a.data),void 0!==r&&(a[d.camelCase(t)]=r),"string"==typeof t?null==(o=a[t])&&(o=a[d.camelCase(t)]):o=a,o}}function I(e,t,n){if(M(e)){var r,i,o=e.nodeType,a=o?d.cache:e,s=o?e[d.expando]:d.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){i=(t=d.isArray(t)?t.concat(d.map(t,d.camelCase)):t in r?[t]:(t=d.camelCase(t))in r?[t]:t.split(" ")).length;for(;i--;)delete r[t[i]];if(n?!B(r):!d.isEmptyObject(r))return}(n||(delete a[s].data,B(a[s])))&&(o?d.cleanData([e],!0):f.deleteExpando||a!=a.window?delete a[s]:a[s]=void 0)}}}d.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?d.cache[e[d.expando]]:e[d.expando])&&!B(e)},data:function(e,t,n){return W(e,t,n)},removeData:function(e,t){return I(e,t)},_data:function(e,t,n){return W(e,t,n,!0)},_removeData:function(e,t){return I(e,t,!0)}}),d.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=d.data(o),1===o.nodeType&&!d._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&P(o,r=d.camelCase(r.slice(5)),i[r]);d._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){d.data(this,e)}):arguments.length>1?this.each(function(){d.data(this,e,t)}):o?P(o,e,d.data(o,e)):void 0},removeData:function(e){return this.each(function(){d.removeData(this,e)})}}),d.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=d._data(e,t),n&&(!r||d.isArray(n)?r=d._data(e,t,d.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=d.queue(e,t),r=n.length,i=n.shift(),o=d._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){d.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return d._data(e,n)||d._data(e,n,{empty:d.Callbacks("once memory").add(function(){d._removeData(e,t+"queue"),d._removeData(e,n)})})}}),d.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?d.queue(this[0],e):void 0===t?this:this.each(function(){var n=d.queue(this,e,t);d._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&d.dequeue(this,e)})},dequeue:function(e){return this.each(function(){d.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=d.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=d._data(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}}),f.shrinkWrapBlocks=function(){return null!=F?F:(F=!1,(t=r.getElementsByTagName("body")[0])&&t.style?(e=r.createElement("div"),(n=r.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(n).appendChild(e),void 0!==e.style.zoom&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(r.createElement("div")).style.width="5px",F=3!==e.offsetWidth),t.removeChild(n),F):void 0);var e,t,n};var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,z=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),X=["Top","Right","Bottom","Left"],U=function(e,t){return e=t||e,"none"===d.css(e,"display")||!d.contains(e.ownerDocument,e)};function V(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return d.css(e,t,"")},u=s(),l=n&&n[3]||(d.cssNumber[t]?"":"px"),c=(d.cssNumber[t]||"px"!==l&&+u)&&z.exec(d.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do{c/=o=o||".5",d.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var Y,J,G,Q=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===d.type(n))for(s in i=!0,n)Q(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,d.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(d(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},K=/^(?:checkbox|radio)$/i,Z=/<([\w:-]+)/,ee=/^$|\/(?:java|ecma)script/i,te=/^\s+/,ne="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function re(e){var t=ne.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}Y=r.createElement("div"),J=r.createDocumentFragment(),G=r.createElement("input"),Y.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",f.leadingWhitespace=3===Y.firstChild.nodeType,f.tbody=!Y.getElementsByTagName("tbody").length,f.htmlSerialize=!!Y.getElementsByTagName("link").length,f.html5Clone="<:nav></:nav>"!==r.createElement("nav").cloneNode(!0).outerHTML,G.type="checkbox",G.checked=!0,J.appendChild(G),f.appendChecked=G.checked,Y.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!Y.cloneNode(!0).lastChild.defaultValue,J.appendChild(Y),(G=r.createElement("input")).setAttribute("type","radio"),G.setAttribute("checked","checked"),G.setAttribute("name","t"),Y.appendChild(G),f.checkClone=Y.cloneNode(!0).cloneNode(!0).lastChild.checked,f.noCloneEvent=!!Y.addEventListener,Y[d.expando]=1,f.attributes=!Y.getAttribute(d.expando);var ie={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:f.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};function oe(e,t){var n,r,i=0,o=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||d.nodeName(r,t)?o.push(r):d.merge(o,oe(r,t));return void 0===t||t&&d.nodeName(e,t)?d.merge([e],o):o}function ae(e,t){for(var n,r=0;null!=(n=e[r]);r++)d._data(n,"globalEval",!t||d._data(t[r],"globalEval"))}ie.optgroup=ie.option,ie.tbody=ie.tfoot=ie.colgroup=ie.caption=ie.thead,ie.th=ie.td;var se=/<|&#?\w+;/,ue=/<tbody/i;function le(e){K.test(e.type)&&(e.defaultChecked=e.checked)}function ce(e,t,n,r,i){for(var o,a,s,u,l,c,p,h=e.length,g=re(t),m=[],v=0;v<h;v++)if((a=e[v])||0===a)if("object"===d.type(a))d.merge(m,a.nodeType?[a]:a);else if(se.test(a)){for(u=u||g.appendChild(t.createElement("div")),l=(Z.exec(a)||["",""])[1].toLowerCase(),p=ie[l]||ie._default,u.innerHTML=p[1]+d.htmlPrefilter(a)+p[2],o=p[0];o--;)u=u.lastChild;if(!f.leadingWhitespace&&te.test(a)&&m.push(t.createTextNode(te.exec(a)[0])),!f.tbody)for(o=(a="table"!==l||ue.test(a)?"<table>"!==p[1]||ue.test(a)?0:u:u.firstChild)&&a.childNodes.length;o--;)d.nodeName(c=a.childNodes[o],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(d.merge(m,u.childNodes),u.textContent="";u.firstChild;)u.removeChild(u.firstChild);u=g.lastChild}else m.push(t.createTextNode(a));for(u&&g.removeChild(u),f.appendChecked||d.grep(oe(m,"input"),le),v=0;a=m[v++];)if(r&&d.inArray(a,r)>-1)i&&i.push(a);else if(s=d.contains(a.ownerDocument,a),u=oe(g.appendChild(a),"script"),s&&ae(u),n)for(o=0;a=u[o++];)ee.test(a.type||"")&&n.push(a);return u=null,g}!function(){var t,n,i=r.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(f[t]=n in e)||(i.setAttribute(n,"t"),f[t]=!1===i.attributes[n].expando);i=null}();var fe=/^(?:input|select|textarea)$/i,de=/^key/,pe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,he=/^(?:focusinfocus|focusoutblur)$/,ge=/^([^.]*)(?:\.(.+)|)/;function me(){return!0}function ve(){return!1}function ye(){try{return r.activeElement}catch(e){}}function xe(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)xe(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ve;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return d().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=d.guid++)),e.each(function(){d.event.add(this,t,i,r,n)})}d.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,g,m,v=d._data(e);if(v){for(n.handler&&(n=(u=n).handler,i=u.selector),n.guid||(n.guid=d.guid++),(a=v.events)||(a=v.events={}),(c=v.handle)||((c=v.handle=function(e){return void 0===d||e&&d.event.triggered===e.type?void 0:d.event.dispatch.apply(c.elem,arguments)}).elem=e),s=(t=(t||"").match(H)||[""]).length;s--;)h=m=(o=ge.exec(t[s])||[])[1],g=(o[2]||"").split(".").sort(),h&&(l=d.event.special[h]||{},h=(i?l.delegateType:l.bindType)||h,l=d.event.special[h]||{},f=d.extend({type:h,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&d.expr.match.needsContext.test(i),namespace:g.join(".")},u),(p=a[h])||((p=a[h]=[]).delegateCount=0,l.setup&&!1!==l.setup.call(e,r,g,c)||(e.addEventListener?e.addEventListener(h,c,!1):e.attachEvent&&e.attachEvent("on"+h,c))),l.add&&(l.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,f):p.push(f),d.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,g,m,v=d.hasData(e)&&d._data(e);if(v&&(c=v.events)){for(l=(t=(t||"").match(H)||[""]).length;l--;)if(h=m=(s=ge.exec(t[l])||[])[1],g=(s[2]||"").split(".").sort(),h){for(f=d.event.special[h]||{},p=c[h=(r?f.delegateType:f.bindType)||h]||[],s=s[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=p.length;o--;)a=p[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));u&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,g,v.handle)||d.removeEvent(e,h,v.handle),delete c[h])}else for(h in c)d.event.remove(e,h+t[l],n,r,!0);d.isEmptyObject(c)&&(delete v.handle,d._removeData(e,"events"))}},trigger:function(t,n,i,o){var a,s,u,l,f,p,h,g=[i||r],m=c.call(t,"type")?t.type:t,v=c.call(t,"namespace")?t.namespace.split("."):[];if(u=p=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!he.test(m+d.event.triggered)&&(m.indexOf(".")>-1&&(v=m.split("."),m=v.shift(),v.sort()),s=m.indexOf(":")<0&&"on"+m,(t=t[d.expando]?t:new d.Event(m,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:d.makeArray(n,[t]),f=d.event.special[m]||{},o||!f.trigger||!1!==f.trigger.apply(i,n))){if(!o&&!f.noBubble&&!d.isWindow(i)){for(l=f.delegateType||m,he.test(l+m)||(u=u.parentNode);u;u=u.parentNode)g.push(u),p=u;p===(i.ownerDocument||r)&&g.push(p.defaultView||p.parentWindow||e)}for(h=0;(u=g[h++])&&!t.isPropagationStopped();)t.type=h>1?l:f.bindType||m,(a=(d._data(u,"events")||{})[t.type]&&d._data(u,"handle"))&&a.apply(u,n),(a=s&&u[s])&&a.apply&&M(u)&&(t.result=a.apply(u,n),!1===t.result&&t.preventDefault());if(t.type=m,!o&&!t.isDefaultPrevented()&&(!f._default||!1===f._default.apply(g.pop(),n))&&M(i)&&s&&i[m]&&!d.isWindow(i)){(p=i[s])&&(i[s]=null),d.event.triggered=m;try{i[m]()}catch(e){}d.event.triggered=void 0,p&&(i[s]=p)}return t.result}},dispatch:function(e){e=d.event.fix(e);var t,n,r,o,a,s,u=i.call(arguments),l=(d._data(this,"events")||{})[e.type]||[],c=d.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=d.event.handlers.call(this,e,l),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(a=o.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(a.namespace)||(e.handleObj=a,e.data=a.data,void 0!==(r=((d.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(r=[],n=0;n<s;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?d(i,this).index(u)>-1:d.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[d.expando])return e;var t,n,i,o=e.type,a=e,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=pe.test(o)?this.mouseHooks:de.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new d.Event(a),t=i.length;t--;)e[n=i[t]]=a[n];return e.target||(e.target=a.srcElement||r),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,a=t.button,s=t.fromElement;return null==e.pageX&&null!=t.clientX&&(o=(i=e.target.ownerDocument||r).documentElement,n=i.body,e.pageX=t.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?t.toElement:s),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ye()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===ye()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(d.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return d.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n){var r=d.extend(new d.Event,n,{type:e,isSimulated:!0});d.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}},d.removeEvent=r.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var r="on"+t;e.detachEvent&&(void 0===e[r]&&(e[r]=null),e.detachEvent(r,n))},d.Event=function(e,t){if(!(this instanceof d.Event))return new d.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?me:ve):this.type=e,t&&d.extend(this,t),this.timeStamp=e&&e.timeStamp||d.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:ve,isPropagationStopped:ve,isImmediatePropagationStopped:ve,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=me,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=me,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=me,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){d.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||d.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),f.submit||(d.event.special.submit={setup:function(){if(d.nodeName(this,"form"))return!1;d.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=d.nodeName(t,"input")||d.nodeName(t,"button")?d.prop(t,"form"):void 0;n&&!d._data(n,"submit")&&(d.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),d._data(n,"submit",!0))})},postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&d.event.simulate("submit",this.parentNode,e))},teardown:function(){if(d.nodeName(this,"form"))return!1;d.event.remove(this,"._submit")}}),f.change||(d.event.special.change={setup:function(){if(fe.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(d.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),d.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),d.event.simulate("change",this,e)})),!1;d.event.add(this,"beforeactivate._change",function(e){var t=e.target;fe.test(t.nodeName)&&!d._data(t,"change")&&(d.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||d.event.simulate("change",this.parentNode,e)}),d._data(t,"change",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return d.event.remove(this,"._change"),!fe.test(this.nodeName)}}),f.focusin||d.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){d.event.simulate(t,e.target,d.event.fix(e))};d.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=d._data(r,t);i||r.addEventListener(e,n,!0),d._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=d._data(r,t)-1;i?d._data(r,t,i):(r.removeEventListener(e,n,!0),d._removeData(r,t))}}}),d.fn.extend({on:function(e,t,n,r){return xe(this,e,t,n,r)},one:function(e,t,n,r){return xe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,d(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ve),this.each(function(){d.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){d.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return d.event.trigger(e,t,n,!0)}});var be=/ jQuery\d+="(?:null|\d+)"/g,we=new RegExp("<(?:"+ne+")[\\s/>]","i"),Te=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ce=/<script|<style|<link/i,Ee=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^true\/(.*)/,ke=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Se=re(r).appendChild(r.createElement("div"));function Ae(e,t){return d.nodeName(e,"table")&&d.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function De(e){return e.type=(null!==d.find.attr(e,"type"))+"/"+e.type,e}function je(e){var t=Ne.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Le(e,t){if(1===t.nodeType&&d.hasData(e)){var n,r,i,o=d._data(e),a=d._data(t,o),s=o.events;if(s)for(n in delete a.handle,a.events={},s)for(r=0,i=s[n].length;r<i;r++)d.event.add(t,n,s[n][r]);a.data&&(a.data=d.extend({},a.data))}}function He(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!f.noCloneEvent&&t[d.expando]){for(r in(i=d._data(t)).events)d.removeEvent(t,r,i.handle);t.removeAttribute(d.expando)}"script"===n&&t.text!==e.text?(De(t).text=e.text,je(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),f.html5Clone&&e.innerHTML&&!d.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&K.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function qe(e,t,n,r){t=o.apply([],t);var i,a,s,u,l,c,p=0,h=e.length,g=h-1,m=t[0],v=d.isFunction(m);if(v||h>1&&"string"==typeof m&&!f.checkClone&&Ee.test(m))return e.each(function(i){var o=e.eq(i);v&&(t[0]=m.call(this,i,o.html())),qe(o,t,n,r)});if(h&&(i=(c=ce(t,e[0].ownerDocument,!1,e,r)).firstChild,1===c.childNodes.length&&(c=i),i||r)){for(s=(u=d.map(oe(c,"script"),De)).length;p<h;p++)a=c,p!==g&&(a=d.clone(a,!0,!0),s&&d.merge(u,oe(a,"script"))),n.call(e[p],a,p);if(s)for(l=u[u.length-1].ownerDocument,d.map(u,je),p=0;p<s;p++)a=u[p],ee.test(a.type||"")&&!d._data(a,"globalEval")&&d.contains(l,a)&&(a.src?d._evalUrl&&d._evalUrl(a.src):d.globalEval((a.text||a.textContent||a.innerHTML||"").replace(ke,"")));c=i=null}return e}function _e(e,t,n){for(var r,i=t?d.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||d.cleanData(oe(r)),r.parentNode&&(n&&d.contains(r.ownerDocument,r)&&ae(oe(r,"script")),r.parentNode.removeChild(r));return e}d.extend({htmlPrefilter:function(e){return e.replace(Te,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u=d.contains(e.ownerDocument,e);if(f.html5Clone||d.isXMLDoc(e)||!we.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Se.innerHTML=e.outerHTML,Se.removeChild(o=Se.firstChild)),!(f.noCloneEvent&&f.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||d.isXMLDoc(e)))for(r=oe(o),s=oe(e),a=0;null!=(i=s[a]);++a)r[a]&&He(i,r[a]);if(t)if(n)for(s=s||oe(e),r=r||oe(o),a=0;null!=(i=s[a]);a++)Le(i,r[a]);else Le(e,o);return(r=oe(o,"script")).length>0&&ae(r,!u&&oe(e,"script")),r=s=i=null,o},cleanData:function(e,t){for(var r,i,o,a,s=0,u=d.expando,l=d.cache,c=f.attributes,p=d.event.special;null!=(r=e[s]);s++)if((t||M(r))&&(a=(o=r[u])&&l[o])){if(a.events)for(i in a.events)p[i]?d.event.remove(r,i):d.removeEvent(r,i,a.handle);l[o]&&(delete l[o],c||void 0===r.removeAttribute?r[u]=void 0:r.removeAttribute(u),n.push(o))}}}),d.fn.extend({domManip:qe,detach:function(e){return _e(this,e,!0)},remove:function(e){return _e(this,e)},text:function(e){return Q(this,function(e){return void 0===e?d.text(this):this.empty().append((this[0]&&this[0].ownerDocument||r).createTextNode(e))},null,e,arguments.length)},append:function(){return qe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ae(this,e).appendChild(e)})},prepend:function(){return qe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ae(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&d.cleanData(oe(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&d.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return d.clone(this,e,t)})},html:function(e){return Q(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(be,""):void 0;if("string"==typeof e&&!Ce.test(e)&&(f.htmlSerialize||!we.test(e))&&(f.leadingWhitespace||!te.test(e))&&!ie[(Z.exec(e)||["",""])[1].toLowerCase()]){e=d.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(d.cleanData(oe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return qe(this,arguments,function(t){var n=this.parentNode;d.inArray(this,e)<0&&(d.cleanData(oe(this)),n&&n.replaceChild(t,this))},e)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){d.fn[e]=function(e){for(var n,r=0,i=[],o=d(e),s=o.length-1;r<=s;r++)n=r===s?this:this.clone(!0),d(o[r])[t](n),a.apply(i,n.get());return this.pushStack(i)}});var Fe,Me={HTML:"block",BODY:"block"};function Oe(e,t){var n=d(t.createElement(e)).appendTo(t.body),r=d.css(n[0],"display");return n.detach(),r}function Re(e){var t=r,n=Me[e];return n||("none"!==(n=Oe(e,t))&&n||((t=((Fe=(Fe||d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||Fe[0].contentDocument).document).write(),t.close(),n=Oe(e,t),Fe.detach()),Me[e]=n),n}var Pe=/^margin/,Be=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),We=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i},Ie=r.documentElement;!function(){var t,n,i,o,a,s,u=r.createElement("div"),l=r.createElement("div");function c(){var c,f,d=r.documentElement;d.appendChild(u),l.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",t=i=s=!1,n=a=!0,e.getComputedStyle&&(f=e.getComputedStyle(l),t="1%"!==(f||{}).top,s="2px"===(f||{}).marginLeft,i="4px"===(f||{width:"4px"}).width,l.style.marginRight="50%",n="4px"===(f||{marginRight:"4px"}).marginRight,(c=l.appendChild(r.createElement("div"))).style.cssText=l.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",l.style.width="1px",a=!parseFloat((e.getComputedStyle(c)||{}).marginRight),l.removeChild(c)),l.style.display="none",(o=0===l.getClientRects().length)&&(l.style.display="",l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",l.childNodes[0].style.borderCollapse="separate",(c=l.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(o=0===c[0].offsetHeight)&&(c[0].style.display="",c[1].style.display="none",o=0===c[0].offsetHeight)),d.removeChild(u)}l.style&&(l.style.cssText="float:left;opacity:.5",f.opacity="0.5"===l.style.opacity,f.cssFloat=!!l.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===l.style.backgroundClip,(u=r.createElement("div")).style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",l.innerHTML="",u.appendChild(l),f.boxSizing=""===l.style.boxSizing||""===l.style.MozBoxSizing||""===l.style.WebkitBoxSizing,d.extend(f,{reliableHiddenOffsets:function(){return null==t&&c(),o},boxSizingReliable:function(){return null==t&&c(),i},pixelMarginRight:function(){return null==t&&c(),n},pixelPosition:function(){return null==t&&c(),t},reliableMarginRight:function(){return null==t&&c(),a},reliableMarginLeft:function(){return null==t&&c(),s}}))}();var $e,ze,Xe=/^(top|right|bottom|left)$/;function Ue(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}e.getComputedStyle?($e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},ze=function(e,t,n){var r,i,o,a,s=e.style;return""!==(a=(n=n||$e(e))?n.getPropertyValue(t)||n[t]:void 0)&&void 0!==a||d.contains(e.ownerDocument,e)||(a=d.style(e,t)),n&&!f.pixelMarginRight()&&Be.test(a)&&Pe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),void 0===a?a:a+""}):Ie.currentStyle&&($e=function(e){return e.currentStyle},ze=function(e,t,n){var r,i,o,a,s=e.style;return null==(a=(n=n||$e(e))?n[t]:void 0)&&s&&s[t]&&(a=s[t]),Be.test(a)&&!Xe.test(t)&&(r=s.left,(o=(i=e.runtimeStyle)&&i.left)&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"});var Ve=/alpha\([^)]*\)/i,Ye=/opacity\s*=\s*([^)]*)/i,Je=/^(none|table(?!-c[ea]).+)/,Ge=new RegExp("^("+$+")(.*)$","i"),Qe={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},Ze=["Webkit","O","Moz","ms"],et=r.createElement("div").style;function tt(e){if(e in et)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=Ze.length;n--;)if((e=Ze[n]+t)in et)return e}function nt(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)(r=e[a]).style&&(o[a]=d._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&U(r)&&(o[a]=d._data(r,"olddisplay",Re(r.nodeName)))):(i=U(r),(n&&"none"!==n||!i)&&d._data(r,"olddisplay",i?n:d.css(r,"display"))));for(a=0;a<s;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function rt(e,t,n){var r=Ge.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function it(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=d.css(e,n+X[o],!0,i)),r?("content"===n&&(a-=d.css(e,"padding"+X[o],!0,i)),"margin"!==n&&(a-=d.css(e,"border"+X[o]+"Width",!0,i))):(a+=d.css(e,"padding"+X[o],!0,i),"padding"!==n&&(a+=d.css(e,"border"+X[o]+"Width",!0,i)));return a}function ot(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=$e(e),a=f.boxSizing&&"border-box"===d.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=ze(e,t,o))<0||null==i)&&(i=e.style[t]),Be.test(i))return i;r=a&&(f.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+it(e,t,n||(a?"border":"content"),r,o)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}d.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:f.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=d.camelCase(t),u=e.style;if(t=d.cssProps[s]||(d.cssProps[s]=tt(s)||s),a=d.cssHooks[t]||d.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];if("string"===(o=typeof n)&&(i=z.exec(n))&&i[1]&&(n=V(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(d.cssNumber[s]?"":"px")),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=d.camelCase(t);return t=d.cssProps[s]||(d.cssProps[s]=tt(s)||s),(a=d.cssHooks[t]||d.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=ze(e,t,r)),"normal"===o&&t in Ke&&(o=Ke[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),d.each(["height","width"],function(e,t){d.cssHooks[t]={get:function(e,n,r){if(n)return Je.test(d.css(e,"display"))&&0===e.offsetWidth?We(e,Qe,function(){return ot(e,t,r)}):ot(e,t,r)},set:function(e,n,r){var i=r&&$e(e);return rt(0,n,r?it(e,t,r,f.boxSizing&&"border-box"===d.css(e,"boxSizing",!1,i),i):0)}}}),f.opacity||(d.cssHooks.opacity={get:function(e,t){return Ye.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=d.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===d.trim(o.replace(Ve,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Ve.test(o)?o.replace(Ve,i):o+" "+i)}}),d.cssHooks.marginRight=Ue(f.reliableMarginRight,function(e,t){if(t)return We(e,{display:"inline-block"},ze,[e,"marginRight"])}),d.cssHooks.marginLeft=Ue(f.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ze(e,"marginLeft"))||(d.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(e,t){d.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+X[r]+t]=o[r]||o[r-2]||o[0];return i}},Pe.test(e)||(d.cssHooks[e+t].set=rt)}),d.fn.extend({css:function(e,t){return Q(this,function(e,t,n){var r,i,o={},a=0;if(d.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=d.css(e,t[a],!1,r);return o}return void 0!==n?d.style(e,t,n):d.css(e,t)},e,t,arguments.length>1)},show:function(){return nt(this,!0)},hide:function(){return nt(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){U(this)?d(this).show():d(this).hide()})}}),d.Tween=at,at.prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||d.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(d.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=d.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}},at.prototype.init.prototype=at.prototype,at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=d.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){d.fx.step[e.prop]?d.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[d.cssProps[e.prop]]&&!d.cssHooks[e.prop]?e.elem[e.prop]=e.now:d.style(e.elem,e.prop,e.now+e.unit)}}},at.propHooks.scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},d.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},d.fx=at.prototype.init,d.fx.step={};var st,ut,lt=/^(?:toggle|show|hide)$/,ct=/queueHooks$/;function ft(){return e.setTimeout(function(){st=void 0}),st=d.now()}function dt(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=X[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function pt(e,t,n){for(var r,i=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ht(e,t,n){var r,i,o=0,a=ht.prefilters.length,s=d.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=st||ft(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:d.extend({},t),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},n),originalProperties:t,originalOptions:n,startTime:st||ft(),duration:n.duration,tweens:[],createTween:function(t,n){var r=d.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=d.camelCase(n)],o=e[n],d.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=d.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=ht.prefilters[o].call(l,e,c,l.opts))return d.isFunction(r.stop)&&(d._queueHooks(l.elem,l.opts.queue).stop=d.proxy(r.stop,r)),r;return d.map(c,pt,l),d.isFunction(l.opts.start)&&l.opts.start.call(e,l),d.fx.timer(d.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}d.Animation=d.extend(ht,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return V(n.elem,e,z.exec(t),n),n}]},tweener:function(e,t){d.isFunction(e)?(t=e,e=["*"]):e=e.match(H);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ht.tweeners[n]=ht.tweeners[n]||[],ht.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c=this,p={},h=e.style,g=e.nodeType&&U(e),m=d._data(e,"fxshow");for(r in n.queue||(null==(s=d._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,d.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===("none"===(l=d.css(e,"display"))?d._data(e,"olddisplay")||Re(e.nodeName):l)&&"none"===d.css(e,"float")&&(f.inlineBlockNeedsLayout&&"inline"!==Re(e.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.shrinkWrapBlocks()||c.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),t)if(i=t[r],lt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}p[r]=m&&m[r]||d.style(e,r)}else l=void 0;if(d.isEmptyObject(p))"inline"===("none"===l?Re(e.nodeName):l)&&(h.display=l);else for(r in m?"hidden"in m&&(g=m.hidden):m=d._data(e,"fxshow",{}),o&&(m.hidden=!g),g?d(e).show():c.done(function(){d(e).hide()}),c.done(function(){var t;for(t in d._removeData(e,"fxshow"),p)d.style(e,t,p[t])}),p)a=pt(g?m[r]:0,r,c),r in m||(m[r]=a.start,g&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),d.speed=function(e,t,n){var r=e&&"object"==typeof e?d.extend({},e):{complete:n||!n&&t||d.isFunction(e)&&e,duration:e,easing:n&&t||t&&!d.isFunction(t)&&t};return r.duration=d.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in d.fx.speeds?d.fx.speeds[r.duration]:d.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){d.isFunction(r.old)&&r.old.call(this),r.queue&&d.dequeue(this,r.queue)},r},d.fn.extend({fadeTo:function(e,t,n,r){return this.filter(U).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=d.isEmptyObject(e),o=d.speed(t,n,r),a=function(){var t=ht(this,d.extend({},e),o);(i||d._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=d.timers,a=d._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ct.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||d.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=d._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=d.timers,a=r?r.length:0;for(n.finish=!0,d.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),d.each(["toggle","show","hide"],function(e,t){var n=d.fn[t];d.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(dt(t,!0),e,r,i)}}),d.each({slideDown:dt("show"),slideUp:dt("hide"),slideToggle:dt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){d.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),d.timers=[],d.fx.tick=function(){var e,t=d.timers,n=0;for(st=d.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||d.fx.stop(),st=void 0},d.fx.timer=function(e){d.timers.push(e),e()?d.fx.start():d.timers.pop()},d.fx.interval=13,d.fx.start=function(){ut||(ut=e.setInterval(d.fx.tick,d.fx.interval))},d.fx.stop=function(){e.clearInterval(ut),ut=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(t,n){return t=d.fx&&d.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e,t=r.createElement("input"),n=r.createElement("div"),i=r.createElement("select"),o=i.appendChild(r.createElement("option"));(n=r.createElement("div")).setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],t.setAttribute("type","checkbox"),n.appendChild(t),(e=n.getElementsByTagName("a")[0]).style.cssText="top:1px",f.getSetAttribute="t"!==n.className,f.style=/top/.test(e.getAttribute("style")),f.hrefNormalized="/a"===e.getAttribute("href"),f.checkOn=!!t.value,f.optSelected=o.selected,f.enctype=!!r.createElement("form").enctype,i.disabled=!0,f.optDisabled=!o.disabled,(t=r.createElement("input")).setAttribute("value",""),f.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),f.radioValue="t"===t.value}();var gt=/\r/g,mt=/[\x20\t\r\n\f]+/g;d.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=d.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,d(this).val()):e)?i="":"number"==typeof i?i+="":d.isArray(i)&&(i=d.map(i,function(e){return null==e?"":e+""})),(t=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=d.valHooks[i.type]||d.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(gt,""):null==n?"":n:void 0}}),d.extend({valHooks:{option:{get:function(e){var t=d.find.attr(e,"value");return null!=t?t:d.trim(d.text(e)).replace(mt," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(((n=r[u]).selected||u===i)&&(f.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!d.nodeName(n.parentNode,"optgroup"))){if(t=d(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=d.makeArray(t),a=i.length;a--;)if(r=i[a],d.inArray(d.valHooks.option.get(r),o)>-1)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(e,t){if(d.isArray(t))return e.checked=d.inArray(d(e).val(),t)>-1}},f.checkOn||(d.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var vt,yt,xt=d.expr.attrHandle,bt=/^(?:checked|selected)$/i,wt=f.getSetAttribute,Tt=f.input;d.fn.extend({attr:function(e,t){return Q(this,d.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){d.removeAttr(this,e)})}}),d.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?d.prop(e,t,n):(1===o&&d.isXMLDoc(e)||(t=t.toLowerCase(),i=d.attrHooks[t]||(d.expr.match.bool.test(t)?yt:vt)),void 0!==n?null===n?void d.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=d.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&"radio"===t&&d.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(H);if(o&&1===e.nodeType)for(;n=o[i++];)r=d.propFix[n]||n,d.expr.match.bool.test(n)?Tt&&wt||!bt.test(n)?e[r]=!1:e[d.camelCase("default-"+n)]=e[r]=!1:d.attr(e,n,""),e.removeAttribute(wt?n:r)}}),yt={set:function(e,t,n){return!1===t?d.removeAttr(e,n):Tt&&wt||!bt.test(n)?e.setAttribute(!wt&&d.propFix[n]||n,n):e[d.camelCase("default-"+n)]=e[n]=!0,n}},d.each(d.expr.match.bool.source.match(/\w+/g),function(e,t){var n=xt[t]||d.find.attr;Tt&&wt||!bt.test(t)?xt[t]=function(e,t,r){var i,o;return r||(o=xt[t],xt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,xt[t]=o),i}:xt[t]=function(e,t,n){if(!n)return e[d.camelCase("default-"+t)]?t.toLowerCase():null}}),Tt&&wt||(d.attrHooks.value={set:function(e,t,n){if(!d.nodeName(e,"input"))return vt&&vt.set(e,t,n);e.defaultValue=t}}),wt||(vt={set:function(e,t,n){var r=e.getAttributeNode(n);if(r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n))return t}},xt.id=xt.name=xt.coords=function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},d.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:vt.set},d.attrHooks.contenteditable={set:function(e,t,n){vt.set(e,""!==t&&t,n)}},d.each(["width","height"],function(e,t){d.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),f.style||(d.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Ct=/^(?:input|select|textarea|button|object)$/i,Et=/^(?:a|area)$/i;d.fn.extend({prop:function(e,t){return Q(this,d.prop,e,t,arguments.length>1)},removeProp:function(e){return e=d.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),d.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&d.isXMLDoc(e)||(t=d.propFix[t]||t,i=d.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=d.find.attr(e,"tabindex");return t?parseInt(t,10):Ct.test(e.nodeName)||Et.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.hrefNormalized||d.each(["href","src"],function(e,t){d.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),f.optSelected||(d.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this}),f.enctype||(d.propFix.enctype="encoding");var Nt=/[\t\r\n\f]/g;function kt(e){return d.attr(e,"class")||""}d.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(d.isFunction(e))return this.each(function(t){d(this).addClass(e.call(this,t,kt(this)))});if("string"==typeof e&&e)for(t=e.match(H)||[];n=this[u++];)if(i=kt(n),r=1===n.nodeType&&(" "+i+" ").replace(Nt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=d.trim(r))&&d.attr(n,"class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(d.isFunction(e))return this.each(function(t){d(this).removeClass(e.call(this,t,kt(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(H)||[];n=this[u++];)if(i=kt(n),r=1===n.nodeType&&(" "+i+" ").replace(Nt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=d.trim(r))&&d.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):d.isFunction(e)?this.each(function(n){d(this).toggleClass(e.call(this,n,kt(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=d(this),o=e.match(H)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=kt(this))&&d._data(this,"__className__",t),d.attr(this,"class",t||!1===e?"":d._data(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+kt(n)+" ").replace(Nt," ").indexOf(t)>-1)return!0;return!1}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){d.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),d.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var St=e.location,At=d.now(),Dt=/\?/,jt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;d.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=d.trim(t+"");return i&&!d.trim(i.replace(jt,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():d.error("Invalid JSON: "+t)},d.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{e.DOMParser?n=(new e.DOMParser).parseFromString(t,"text/xml"):((n=new e.ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||d.error("Invalid XML: "+t),n};var Lt=/#.*$/,Ht=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,_t=/^(?:GET|HEAD)$/,Ft=/^\/\//,Mt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ot={},Rt={},Pt="*/".concat("*"),Bt=St.href,Wt=Mt.exec(Bt.toLowerCase())||[];function It(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(H)||[];if(d.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function $t(e,t,n,r){var i={},o=e===Rt;function a(s){var u;return i[s]=!0,d.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=d.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&d.extend(!0,e,n),e}function Xt(e){return e.style&&e.style.display||d.css(e,"display")}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Bt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Wt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,d.ajaxSettings),t):zt(d.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Rt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,o,a,s,u,l,c,f=d.ajaxSetup({},n),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?d(p):d.event,g=d.Deferred(),m=d.Callbacks("once memory"),v=f.statusCode||{},y={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=qt.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)v[t]=[v[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return l&&l.abort(t),C(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,f.url=((t||f.url||Bt)+"").replace(Lt,"").replace(Ft,Wt[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=d.trim(f.dataType||"*").toLowerCase().match(H)||[""],null==f.crossDomain&&(r=Mt.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===Wt[1]&&r[2]===Wt[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(Wt[3]||("http:"===Wt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=d.param(f.data,f.traditional)),$t(Ot,f,n,T),2===b)return T;for(i in(u=d.event&&f.global)&&0==d.active++&&d.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!_t.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(Dt.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=Ht.test(o)?o.replace(Ht,"$1_="+At++):o+(Dt.test(o)?"&":"?")+"_="+At++)),f.ifModified&&(d.lastModified[o]&&T.setRequestHeader("If-Modified-Since",d.lastModified[o]),d.etag[o]&&T.setRequestHeader("If-None-Match",d.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Pt+"; q=0.01":""):f.accepts["*"]),f.headers)T.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(!1===f.beforeSend.call(p,T,f)||2===b))return T.abort();for(i in w="abort",{success:1,error:1,complete:1})T[i](f[i]);if(l=$t(Rt,f,n,T)){if(T.readyState=1,u&&h.trigger("ajaxSend",[T,f]),2===b)return T;f.async&&f.timeout>0&&(s=e.setTimeout(function(){T.abort("timeout")},f.timeout));try{b=1,l.send(y,C)}catch(e){if(!(b<2))throw e;C(-1,e)}}else C(-1,"No Transport");function C(t,n,r,i){var c,y,x,w,C,E=n;2!==b&&(b=2,s&&e.clearTimeout(s),l=void 0,a=i||"",T.readyState=t>0?4:0,c=t>=200&&t<300||304===t,r&&(w=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break}if(u[0]in n)o=u[0];else{for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break}r||(r=a)}o=o||r}if(o)return o!==u[0]&&u.unshift(o),n[o]}(f,T,r)),w=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(e.crossDomain&&"script"===o)continue;if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(f,w,T,c),c?(f.ifModified&&((C=T.getResponseHeader("Last-Modified"))&&(d.lastModified[o]=C),(C=T.getResponseHeader("etag"))&&(d.etag[o]=C)),204===t||"HEAD"===f.type?E="nocontent":304===t?E="notmodified":(E=w.state,y=w.data,c=!(x=w.error))):(x=E,!t&&E||(E="error",t<0&&(t=0))),T.status=t,T.statusText=(n||E)+"",c?g.resolveWith(p,[y,E,T]):g.rejectWith(p,[T,E,x]),T.statusCode(v),v=void 0,u&&h.trigger(c?"ajaxSuccess":"ajaxError",[T,f,c?y:x]),m.fireWith(p,[T,E]),u&&(h.trigger("ajaxComplete",[T,f]),--d.active||d.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return d.get(e,t,n,"json")},getScript:function(e,t){return d.get(e,void 0,t,"script")}}),d.each(["get","post"],function(e,t){d[t]=function(e,n,r,i){return d.isFunction(n)&&(i=i||r,r=n,n=void 0),d.ajax(d.extend({url:e,type:t,dataType:i,data:n,success:r},d.isPlainObject(e)&&e))}}),d._evalUrl=function(e){return d.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},d.fn.extend({wrapAll:function(e){if(d.isFunction(e))return this.each(function(t){d(this).wrapAll(e.call(this,t))});if(this[0]){var t=d(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return d.isFunction(e)?this.each(function(t){d(this).wrapInner(e.call(this,t))}):this.each(function(){var t=d(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=d.isFunction(e);return this.each(function(n){d(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()}}),d.expr.filters.hidden=function(e){return f.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:function(e){if(!d.contains(e.ownerDocument||r,e))return!0;for(;e&&1===e.nodeType;){if("none"===Xt(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1}(e)},d.expr.filters.visible=function(e){return!d.expr.filters.hidden(e)};var Ut=/%20/g,Vt=/\[\]$/,Yt=/\r?\n/g,Jt=/^(?:submit|button|image|reset|file)$/i,Gt=/^(?:input|select|textarea|keygen)/i;function Qt(e,t,n,r){var i;if(d.isArray(t))d.each(t,function(t,i){n||Vt.test(e)?r(e,i):Qt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==d.type(t))r(e,t);else for(i in t)Qt(e+"["+i+"]",t[i],n,r)}d.param=function(e,t){var n,r=[],i=function(e,t){t=d.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=d.ajaxSettings&&d.ajaxSettings.traditional),d.isArray(e)||e.jquery&&!d.isPlainObject(e))d.each(e,function(){i(this.name,this.value)});else for(n in e)Qt(n,e[n],t,i);return r.join("&").replace(Ut,"+")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=d.prop(this,"elements");return e?d.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!d(this).is(":disabled")&&Gt.test(this.nodeName)&&!Jt.test(e)&&(this.checked||!K.test(e))}).map(function(e,t){var n=d(this).val();return null==n?null:d.isArray(n)?d.map(n,function(e){return{name:t.name,value:e.replace(Yt,"\r\n")}}):{name:t.name,value:n.replace(Yt,"\r\n")}}).get()}}),d.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return this.isLocal?nn():r.documentMode>8?tn():/^(get|post|head|put|delete|options)$/i.test(this.type)&&tn()||nn()}:tn;var Kt=0,Zt={},en=d.ajaxSettings.xhr();function tn(){try{return new e.XMLHttpRequest}catch(e){}}function nn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Zt)Zt[e](void 0,!0)}),f.cors=!!en&&"withCredentials"in en,(en=f.ajax=!!en)&&d.ajaxTransport(function(t){var n;if(!t.crossDomain||f.cors)return{send:function(r,i){var o,a=t.xhr(),s=++Kt;if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)void 0!==r[o]&&a.setRequestHeader(o,r[o]+"");a.send(t.hasContent&&t.data||null),n=function(e,r){var o,u,l;if(n&&(r||4===a.readyState))if(delete Zt[s],n=void 0,a.onreadystatechange=d.noop,r)4!==a.readyState&&a.abort();else{l={},o=a.status,"string"==typeof a.responseText&&(l.text=a.responseText);try{u=a.statusText}catch(e){u=""}o||!t.isLocal||t.crossDomain?1223===o&&(o=204):o=l.text?200:404}l&&i(o,u,l,a.getAllResponseHeaders())},t.async?4===a.readyState?e.setTimeout(n):a.onreadystatechange=Zt[s]=n:n()},abort:function(){n&&n(void 0,!0)}}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return d.globalEval(e),e}}}),d.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),d.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=r.head||d("head")[0]||r.documentElement;return{send:function(i,o){(t=r.createElement("script")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||o(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var rn=[],on=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=rn.pop()||d.expando+"_"+At++;return this[e]=!0,e}}),d.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(on.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=d.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(on,"$1"+i):!1!==t.jsonp&&(t.url+=(Dt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||d.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?d(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,rn.push(i)),a&&d.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),d.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||r;var i=T.exec(e),o=!n&&[];return i?[t.createElement(i[1])]:(i=ce([e],t,o),o&&o.length&&d(o).remove(),d.merge([],i.childNodes))};var an=d.fn.load;function sn(e){return d.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}d.fn.load=function(e,t,n){if("string"!=typeof e&&an)return an.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=d.trim(e.slice(s,e.length)),e=e.slice(0,s)),d.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&d.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?d("<div>").append(d.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){d.fn[t]=function(e){return this.on(t,e)}}),d.expr.filters.animated=function(e){return d.grep(d.timers,function(t){return e===t.elem}).length},d.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=d.css(e,"position"),c=d(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=d.css(e,"top"),u=d.css(e,"left"),("absolute"===l||"fixed"===l)&&d.inArray("auto",[o,u])>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),d.isFunction(t)&&(t=t.call(e,n,d.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},d.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){d.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,d.contains(t,i)?(void 0!==i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=sn(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===d.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),d.nodeName(e[0],"html")||(n=e.offset()),n.top+=d.css(e[0],"borderTopWidth",!0),n.left+=d.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-d.css(r,"marginTop",!0),left:t.left-n.left-d.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!d.nodeName(e,"html")&&"static"===d.css(e,"position");)e=e.offsetParent;return e||Ie})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);d.fn[e]=function(r){return Q(this,function(e,r,i){var o=sn(e);if(void 0===i)return o?t in o?o[t]:o.document.documentElement[r]:e[r];o?o.scrollTo(n?d(o).scrollLeft():i,n?i:d(o).scrollTop()):e[r]=i},e,r,arguments.length,null)}}),d.each(["top","left"],function(e,t){d.cssHooks[t]=Ue(f.pixelPosition,function(e,n){if(n)return n=ze(e,t),Be.test(n)?d(e).position()[t]+"px":n})}),d.each({Height:"height",Width:"width"},function(e,t){d.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){d.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return Q(this,function(t,n,r){var i;return d.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?d.css(t,n,a):d.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),d.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),d.fn.size=function(){return this.length},d.fn.andSelf=d.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return d});var un=e.jQuery,ln=e.$;return d.noConflict=function(t){return e.$===d&&(e.$=ln),t&&e.jQuery===d&&(e.jQuery=un),d},t||(e.jQuery=e.$=d),d});
/*SC_GROUP_JS*/jQuery.noConflict();
/*SC_GROUP_JS*//*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
/*SC_GROUP_JS*//*
        GNU General Public License version 2 or later; see LICENSE.txt
*/
var JCaption=function(c){var e,b,a=function(f){e=jQuery.noConflict();b=f;e(b).each(function(g,h){d(h)})},d=function(i){var h=e(i),f=h.attr("title"),j=h.attr("width")||i.width,l=h.attr("align")||h.css("float")||i.style.styleFloat||"none",g=e("<p/>",{text:f,"class":b.replace(".","_")}),k=e("<div/>",{"class":b.replace(".","_")+" "+l,css:{"float":l,width:j}});h.before(k);k.append(h);if(f!==""){k.append(g)}};a(c)};
/*SC_GROUP_JS*//*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.6'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.6'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.6'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.6'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.6'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.6'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.6'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.6'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.6'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.6'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.6'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
/*SC_GROUP_JS*/!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);
/*SC_GROUP_JS*//**
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org
 *------------------------------------------------------------------------------
 */
jQuery (document).ready(function($){
    function getAndroidVersion(ua) {
        var ua = ua || navigator.userAgent;
        var match = ua.match(/Android\s([0-9\.]*)/);
        return match ? match[1] : false;
    };

    if (parseInt(getAndroidVersion()) == 4) {
        $('#t3-mainnav').addClass('t3-mainnav-android');
    }
    var JA_isLoading = false;
    // fix for old ie
    if (/MSIE\s([\d.]+)/.test(navigator.userAgent) ? new Number(RegExp.$1) < 10 : false) {
        $('html').addClass ('old-ie');
    } else if(/constructor/i.test(window.HTMLElement)){
        $('html').addClass('safari');
    }

    var $wrapper = $('body'),
        $inner = $('.t3-wrapper'),
        $toggles = $('.off-canvas-toggle'),
        $offcanvas = $('.t3-off-canvas'),
        $close = $('.t3-off-canvas .close'),
        $btn=null,
        $nav=null,
        direction = 'left',
        $fixed = null;
    // no wrapper, just exit
    if (!$wrapper.length) return ;

    // add effect class for nav
    $toggles.each (function () {
        var $this = $(this),
            $nav = $($this.data('nav')),
            effect = $this.data('effect'),
            direction = ($('html').attr('dir') == 'rtl' && $this.data('pos')!='right') || ($('html').attr('dir') != 'rtl' && $this.data('pos')=='right')  ? 'right':'left';
        $nav.addClass (effect).addClass ('off-canvas-'+direction);

        // move to outside wrapper-content
        var inside_effect = ['off-canvas-effect-3','off-canvas-effect-16','off-canvas-effect-7','off-canvas-effect-8','off-canvas-effect-14'];
        if ($.inArray(effect, inside_effect) == -1) {
            $inner.before($nav);
        } else {
            $inner.prepend($nav);
        }
    });

    $toggles.on('tap', function(e){
        // detect direction

        stopBubble (e);

        if ($wrapper.hasClass ('off-canvas-open')) {
            oc_hide (e);
            return false;
        }

        $btn = $(this);
        $nav = $($btn.data('nav'));
        if (!$fixed) $fixed = $inner.find('*').filter (function() {return $(this).css("position") === 'fixed';});
        else $fixed = $fixed.filter (function() {return $(this).css("position") === 'fixed';}).add($inner.find('.affix'));

        $nav.addClass ('off-canvas-current');

        direction = ($('html').attr('dir') == 'rtl' && $btn.data('pos')!='right') || ($('html').attr('dir') != 'rtl' && $btn.data('pos')=='right')  ? 'right':'left';

        // add direction class to body
        // $('html').removeClass ('off-canvas-left off-canvas-right').addClass ('off-canvas-' + direction);

        $offcanvas.height($(window).height());

        // disable scroll event
        var events = $(window).data('events');
        if (events && events.scroll && events.scroll.length) {
          // store current handler for scroll
          var handlers = [];
          for (var i=0; i<events.scroll.length; i++){
            handlers[i] = events.scroll[i].handler;
          }
          $(window).data('scroll-events', handlers);
          $(window).off ('scroll');
        }
        // disable scroll on page
        var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
        $('html').addClass('noscroll').css('top',-scrollTop).data('top', scrollTop);
        $('.t3-off-canvas').css('top',scrollTop);

        // make the fixed element become absolute
        $fixed.each (function () {
            var $this = $(this),
                $parent = $this.parent(),
                mtop = 0;
            // find none static parent
            while (!$parent.is($inner) && $parent.css("position") === 'static') $parent = $parent.parent();
            mtop = -$parent.offset().top;
            $this.css ({'position': 'absolute', 'margin-top': mtop});
        });

        $wrapper.scrollTop (scrollTop);
        // update effect class
        $wrapper[0].className = $.trim($wrapper[0].className.replace (/\s*off\-canvas\-effect\-\d+\s*/g, ' ')) +
            ' ' + $btn.data('effect') + ' ' + 'off-canvas-' + direction;

        setTimeout(oc_show, 50);

        return false;
    });
    var oc_show = function () {
        if (JA_isLoading == true) {
            return;
        }
        JA_isLoading=true;
        $wrapper.addClass ('off-canvas-open');
        $inner.on ('click', oc_hide);
        $close.on ('click', oc_hide);
        $offcanvas.on ('click', handleClick);

        // fix for old ie
        if ($.browser.msie && $.browser.version < 10) {
            var p1 = {}, p2 = {};
            p1['padding-'+direction] = $('.t3-off-canvas').width();
            p2[direction] = 0;
            $inner.animate (p1);
            $nav.animate (p2);
        }
        setTimeout (function (){JA_isLoading=false;}, 200);
    };

    var oc_hide = function () {
        if (JA_isLoading == true) {
            return;
        }
        JA_isLoading=true;

        //remove events
        $inner.off ('click', oc_hide);
        $close.off ('click', oc_hide);
        $offcanvas.off ('click', handleClick);

        //delay for click action
        setTimeout(function(){
            $wrapper.removeClass ('off-canvas-open');
        }, 100);

        setTimeout (function (){
            $wrapper.removeClass ($btn.data('effect')).removeClass ('off-canvas-'+direction);
            $wrapper.scrollTop (0);
            // enable scroll
            $('html').removeClass ('noscroll').css('top', '');
            $('html,body').scrollTop ($('html').data('top'));
            $nav.removeClass ('off-canvas-current');
            // restore fixed elements
            $fixed.css ({'position': '', 'margin-top': ''});
            // re-enable scroll
            if ($(window).data('scroll-events')) {
              var handlers = $(window).data('scroll-events');
              for (var i=0; i<handlers.length; i++) {
                $(window).on ('scroll', handlers[i]);
              }
              $(window).data('scroll-events', null);
            }
            JA_isLoading=false;
        }, 700);

        // fix for old ie
        if ($('html').hasClass ('old-ie')) {
            var p1 = {}, p2 = {};
            p1['padding-'+direction] = 0;
            p2[direction] = -$('.t3-off-canvas').width();
            $inner.animate (p1);
            $nav.animate (p2);
        }

    };

    var handleClick = function (e) {        
        if ($(e.target).closest('a').length) {
            if (!e.target.href) return;
            // handle the anchor link
            var arr1 = e.target.href.split('#'),
                arr2 = location.href.split('#');
            if (arr1[0] == arr2[0] && arr1.length > 1 && arr1[1].length) {
                oc_hide();
                setTimeout(function(){
                    var anchor = $("a[name='"+ arr1[1] +"']");
                    if (!anchor.length) anchor = $('#' + arr1[1]);
                    if (anchor.length) 
                        $('html,body').animate({scrollTop: anchor.offset().top},'slow');
                }, 1000);
            }
            return;
        }
        stopBubble(e);
        return true;
    }

    var stopBubble = function (e) {
        e.stopPropagation();
    }

    // preload fixed items
    $(window).load(function() {
      setTimeout(function(){
        $fixed = $inner.find('*').filter (function() {return $(this).css("position") === 'fixed';});
      }, 100);
    });
});
/*SC_GROUP_JS*//** 
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github 
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org 
 *------------------------------------------------------------------------------
 */

!function($){

  // legacy for $.browser to detect IE
  if ($.browser == undefined || $.browser.msie == undefined) {
    $.browser={msie:false,version:0};
    if (match = navigator.userAgent.match (/MSIE ([0-9]{1,}[\.0-9]{0,})/) || navigator.userAgent.match (/Trident.*rv:([0-9]{1,}[\.0-9]{0,})/)) {
      $.browser.msie=true;
      $.browser.version=match[1];
    }
  }
	// add ie version to html tag
  if ($.browser.msie) {
    $('html').addClass('ie'+ Math.floor($.browser.version));
  }

	// Detect grid-float-breakpoint value and put to $(body) data
	$(document).ready(function(){
			if (!window.getComputedStyle) {
					window.getComputedStyle = function(el, pseudo) {
							this.el = el;
							this.getPropertyValue = function(prop) {
									var re = /(\-([a-z]){1})/g;
									if (prop == 'float') prop = 'styleFloat';
									if (re.test(prop)) {
											prop = prop.replace(re, function () {
													return arguments[2].toUpperCase();
											});
									}
									return el.currentStyle[prop] ? el.currentStyle[prop] : null;
							}
							return this;
					}
			}
			var fromClass = 'body-data-holder',
					prop = 'content',
					$inspector = $('<div>').css('display', 'none').addClass(fromClass).appendTo($('body'));

			try {
				
				var computedStyle = window.getComputedStyle(
							$inspector[0], ':before'
					);
				if (computedStyle) {
					var attrs = computedStyle.getPropertyValue(prop);
					if(attrs){
							var matches = attrs.match(/([\da-z\-]+)/gi),
									data = {};
							if (matches && matches.length) {
									for (var i=0; i<matches.length; i++) {
											data[matches[i++]] = i<matches.length ? matches[i] : null;
									}
							}
							$('body').data (data);
					}
				}
			} finally {
					$inspector.remove(); // and remove from DOM
			}
	});
	
	
	//detect transform (https://github.com/cubiq/)
	(function(){
		$.support.t3transform = (function () {
			var style = document.createElement('div').style,
			vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform, i = 0, l = vendors.length;

			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in style ) {
					return transform;
				}
			}

			return false;
		})();

	})();
	
	//basic detect touch
	(function(){
		$('html').addClass('ontouchstart' in window ? 'touch' : 'no-touch');
	})();
	
	//document ready
	$(document).ready(function(){

		//remove conflict of mootools more show/hide function of element
		(function(){
			if(window.MooTools && window.MooTools.More && Element && Element.implement){

				var mthide = Element.prototype.hide,
					mtshow = Element.prototype.show,
					mtslide = Element.prototype.slide;

				Element.implement({
					show: function(args){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}

						return $.isFunction(mtshow) && mtshow.apply(this, args);
					},

					hide: function(){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}

						return $.isFunction(mthide) && mthide.apply(this, arguments);
					},

					slide: function(args){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}

						return $.isFunction(mtslide) && mtslide.apply(this, args);
					}
				})
			}
		})();

		// overwrite default tooltip/popover behavior (same as Joomla 3.1.5)
		$.fn.tooltip.Constructor && $.fn.tooltip.Constructor.DEFAULTS && ($.fn.tooltip.Constructor.DEFAULTS.html = true);
		$.fn.popover.Constructor && $.fn.popover.Constructor.DEFAULTS && ($.fn.popover.Constructor.DEFAULTS.html = true);
		$.fn.tooltip.defaults && ($.fn.tooltip.defaults.html = true);
		$.fn.popover.defaults && ($.fn.popover.defaults.html = true);

		//fix JomSocial navbar-collapse toggle
		(function(){
			if(window.jomsQuery && jomsQuery.fn.collapse){
			
				$('[data-toggle="collapse"]').on('click', function(e){
					
					//toggle manual
					$($(this).attr('data-target')).eq(0).collapse('toggle');
					
					//stop
					e.stopPropagation();

					return false;
				});

				//remove conflict on touch screen
				jomsQuery('html, body').off('touchstart.dropdown.data-api');
			}	
		})();


		//fix chosen select
		(function(){
			if($.fn.chosen && $(document.documentElement).attr('dir') == 'rtl'){
				$('select').addClass('chzn-rtl');
			}	
		})();

	});

	$(window).load(function(){

		//fix animation for navbar-collapse-fixed-top||bottom
		if(!$(document.documentElement).hasClass('off-canvas-ready') &&
			($('.navbar-collapse-fixed-top').length ||
			$('.navbar-collapse-fixed-bottom').length)){

			var btn = $('.btn-navbar[data-toggle="collapse"]');
			if (!btn.length){
				return;
			}

			if(btn.data('target')){
				var nav = $(btn.data('target'));
				if(!nav.length){
					return;
				}

				var fixedtop = nav.closest('.navbar-collapse-fixed-top').length;

				btn.on('click', function(){

					var wheight = (window.innerHeight || $(window).height());

					if(!$.support.transition){
						nav.parent().css('height', !btn.hasClass('collapsed') && btn.data('t3-clicked') ? '' : wheight);
						btn.data('t3-clicked', 1);
					}

					nav
						.addClass('animate')
						.css('max-height', wheight -
							(fixedtop ? (parseFloat(nav.css('top')) || 0) : (parseFloat(nav.css('bottom')) || 0)));
				});
				nav.on('shown hidden', function(){
					nav.removeClass('animate');
				});
			}
		}

	});

}(jQuery);
/*SC_GROUP_JS*//**
 * ------------------------------------------------------------------------------
 * 
 * @package T3 Framework for Joomla!
 *          ------------------------------------------------------------------------------
 * @copyright Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license GNU General Public License version 2 or later; see LICENSE.txt
 * @authors JoomlArt, JoomlaBamboo, (contribute to this project at github &
 *          Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link: http://t3-framework.org
 *        ------------------------------------------------------------------------------
 */

;
(function($) {

	var T3Menu = function(elm, options) {
		this.$menu = $(elm);
		if (!this.$menu.length) {
			return;
		}

		this.options = $.extend({}, $.fn.t3menu.defaults, options);
		this.child_open = [];
		this.loaded = false;

		this.start();
	};

	T3Menu.prototype = {
		constructor : T3Menu,

		start : function() {
			// init once
			if (this.loaded) {
				return;
			}
			this.loaded = true;

			// start
			var self = this, options = this.options, $menu = this.$menu;

			this.$items = $menu.find('li');
			this.$items
					.each(function(idx, li) {

						var $item = $(this), $child = $item
								.children('.dropdown-menu'), $link = $item
								.children('a'), item = {
							$item : $item,
							child : $child.length,
							link : $link.length,
							clickable : !($link.length && $child.length),
							mega : $item.hasClass('mega'),
							status : 'close',
							timer : null,
							atimer : null
						};

						// store
						$item.data('t3menu.item', item);

						// click action
						if ($child.length && !options.hover) {
							$item.on('click', function(e) {
								e.stopPropagation();

								if ($item.hasClass('group')) {
									return;
								}

								if (item.status == 'close') {
									e.preventDefault();
									self.show(item);
								}
							});
						} else {

							// stop if click on menu item - prevent bubble event
							$item.on('click', function(e) {
								// ignore if this is toggle button
								if ($(e.target).data('toggle')) return;
								e.stopPropagation()
							});
						}

						// click on caret, no action on link
						$item.find('a > .caret').on('click tap', function(e) {
							item.clickable = false;
						});

						if (options.hover) {
							$item.on('mouseover', function(e) {
								if ($item.hasClass('group'))
									return;

								// check and handle only once - replace for
								// stopPropagation
								var $target = $(e.target);
								if ($target.data('show-processed'))
									return;
								$target.data('show-processed', true);
								setTimeout(function() {
									$target.data('show-processed', false);
								}, 10);

								self.show(item);

							}).on('mouseleave', function(e) {
								if ($item.hasClass('group'))
									return;

								// check and handle only once - replace for
								// stopPropagation
								var $target = $(e.target);
								if ($target.data('hide-processed'))
									return;
								$target.data('hide-processed', true);
								setTimeout(function() {
									$target.data('hide-processed', false);
								}, 10);

								self.hide(item, $target);
							});

							// if has child, don't goto link before open child -
							// fix for touch screen
							if ($link.length && $child.length) {
								$link.on('click', function(e) {
									if (item.clickable) {
										e.stopPropagation();
									}
									return item.clickable;
								});
							}
						}

					});

			$(document.body)
					.on(
							'tap hideall.t3menu',
							function(e) {
								clearTimeout(self.timer);
								self.timer = setTimeout($.proxy(self.hide_alls,
										self), e.type == 'tap' ? 500
										: self.options.hidedelay);
							});

			// ignore click on direct child
			$menu.find('.mega-dropdown-menu').on('hideall.t3menu', function(e) {
				e.stopPropagation();
				e.preventDefault();
				return false;
			});

			// prevent close menu if click on form element
			$menu.find('input, select, textarea, label').on('click tap',
					function(e) {
						e.stopPropagation();
					});

			// update mega-tab height
			var $megatab = $menu.find('.mega-tab');
			if ($megatab.length) {
				$megatab.each(function() {
					var $tabul = $(this).find('>div>ul'), 
						$tabItems = $tabul.children('.dropdown-submenu'),
						$tabs = $tabul.find('>li>.dropdown-menu'), 
						tabheight = 0,
						$parentItem = $(this).closest('li');
					// mark item as tab-item
					$tabItems.data('mega-tab-item', 1);
					// add this tabs to parent item
					var megatabs = $parentItem.data('mega-tabs') ? $parentItem.data('mega-tabs') : [];
					megatabs.push($tabul);
					$parentItem.data('mega-tabs', megatabs);

					// default active the first
					// $tabul.data('mega-tab', 0);
					$tabItems.first().data('mega-tab-active', true).addClass('open');
					// make all parent visible to get height
					var $p = $tabul.parents('.dropdown-menu');
					$p.each(function() {
						var $this = $(this);
						$this.data('prev-style', $this.attr('style')).css({
							visibility : "visible",
							display : "block"
						});
					})
					$tabs.each(function() {
						var $this = $(this), thisstyle = $this.attr('style');
						$this.css({
							visibility : "hidden",
							display : "block"
						});
						tabheight = Math.max(tabheight, $this.children()
								.innerHeight());
						// restore style
						if (thisstyle) {
							$this.attr('style', thisstyle);
						} else {
							$this.removeAttr('style');
						}
					});
					$tabul.css('min-height', tabheight);
					// restore
					$p.each(function() {
						var $this = $(this);
						if ($this.data('prev-style'))
							$this.attr('style', $this.data('prev-style'));
						else
							$this.removeAttr('style');
						$this.removeData('prev-style');
					})
				})
			}
			// fix for modal in menu
			$menu.find('.modal').appendTo('body');
		},

		show : function(item) {
			// check if current item is mega-tab
			if (item.$item.data('mega-tab-item')) {
				item.$item.parent().children().removeClass('open').data('mega-tab-active', false);
				item.$item.addClass('open').data('mega-tab-active', true);
			}			
			// hide all others menu of this instance
			if ($.inArray(item, this.child_open) < this.child_open.length - 1) {
				this.hide_others(item);
			}

			// hide all for other instances as well
			$(document.body).trigger('hideall.t3menu', [ this ]);

			clearTimeout(this.timer); // hide alls
			clearTimeout(item.timer); // hide this item
			clearTimeout(item.ftimer); // on hidden
			clearTimeout(item.ctimer); // on hidden

			if (item.status != 'open' || !item.$item.hasClass('open')
					|| !this.child_open.length) {
				if (item.mega) {
					// remove timer
					clearTimeout(item.astimer); // animate
					clearTimeout(item.atimer); // animate

					// place menu
					this.position(item.$item);

					// add class animate
					item.astimer = setTimeout(function() {
						item.$item.addClass('animating')
					}, 10);
					item.atimer = setTimeout(function() {
						item.$item.removeClass('animating')
					}, this.options.duration + 50);
					item.timer = setTimeout(function() {
						item.$item.addClass('open');
					}, 100);
				} else {
					item.$item.addClass('open');
				}

				item.status = 'open';
				if (item.child && $.inArray(item, this.child_open) == -1) {
					this.child_open.push(item);
				}
			}

			item.ctimer = setTimeout($.proxy(this.clickable, this, item), 300);

		},

		hide : function(item, $target) {
			clearTimeout(this.timer); // hide alls
			clearTimeout(item.timer); // hide this item
			clearTimeout(item.astimer); // animate timer
			clearTimeout(item.atimer); // animate timer
			clearTimeout(item.ftimer); // on hidden

			// cancel hide if still in menu
			if ($target && $target.is('input', item.$item)) {
				return;
			}

			if (item.mega) {
				// animate out
				item.$item.addClass('animating');
				item.atimer = setTimeout(function() {
					item.$item.removeClass('animating')
				}, this.options.duration);
				item.timer = setTimeout(function() {
					if (!item.$item.data('mega-tab-active'))
						item.$item.removeClass('open')
				}, 100);
			} else {
				item.timer = setTimeout(function() {
					if (!item.$item.data('mega-tab-active'))
						item.$item.removeClass('open');
				}, 100);
			}

			item.status = 'close';
			for (var i = this.child_open.length; i--;) {
				if (this.child_open[i] === item) {
					this.child_open.splice(i, 1);
				}
			}

			item.ftimer = setTimeout($.proxy(this.hidden, this, item),
					this.options.duration);
			this.timer = setTimeout($.proxy(this.hide_alls, this),
					this.options.hidedelay);
		},

		hidden : function(item) {
			// hide done
			if (item.status == 'close') {
				item.clickable = false;
			}
		},

		hide_others : function(item) {
			var self = this;
			$
					.each(this.child_open.slice(),
							function(idx, open) {
								if (!item
										|| (open != item && !open.$item
												.has(item.$item).length)) {
									self.hide(open);
								}
							});
		},

		hide_alls : function(e, inst) {
			if (!e || e.type == 'tap' || (e.type == 'hideall' && this != inst)) {
				var self = this;
				$.each(this.child_open.slice(), function(idx, item) {
					item && self.hide(item);
				});
			}
		},

		clickable : function(item) {
			item.clickable = true;
		},

		position : function($item) {
			var sub = $item.children('.mega-dropdown-menu'), is_show = sub
					.is(':visible');

			if (!is_show) {
				sub.show();
			}

			var offset = $item.offset(), width = $item.outerWidth(), screen_width = $(
					window).width()
					- this.options.sb_width, sub_width = sub.outerWidth(), level = $item
					.data('level');

			if (!is_show) {
				sub.css('display', '');
			}

			// reset custom align
			sub.css({
				left : '',
				right : ''
			});

			if (level == 1) {

				var align = $item.data('alignsub'), align_offset = 0, align_delta = 0, align_trans = 0;

				if (align == 'justify') {
					return; // do nothing
				}

				if (!align) {
					align = 'left';
				}

				if (align == 'center') {
					align_offset = offset.left + (width / 2);

					if (!$.support.t3transform) {
						align_trans = -sub_width / 2;
						sub.css(this.options.rtl ? 'right' : 'left',
								align_trans + width / 2);
					}

				} else {
					align_offset = offset.left
							+ ((align == 'left' && this.options.rtl || align == 'right'
									&& !this.options.rtl) ? width : 0);
				}

				if (this.options.rtl) {

					if (align == 'right') {
						if (align_offset + sub_width > screen_width) {
							align_delta = screen_width - align_offset
									- sub_width;
							sub.css('left', align_delta);

							if (screen_width < sub_width) {
								sub.css('left', align_delta + sub_width
										- screen_width);
							}
						}
					} else {
						if (align_offset < (align == 'center' ? sub_width / 2
								: sub_width)) {
							align_delta = align_offset
									- (align == 'center' ? sub_width / 2
											: sub_width);
							sub.css('right', align_delta + align_trans);
						}

						if (align_offset
								+ (align == 'center' ? sub_width / 2 : 0)
								- align_delta > screen_width) {
							sub
									.css(
											'right',
											align_offset
													+ (align == 'center' ? (sub_width + width) / 2
															: 0) + align_trans
													- screen_width);
						}
					}

				} else {

					if (align == 'right') {
						if (align_offset < sub_width) {
							align_delta = align_offset - sub_width;
							sub.css('right', align_delta);

							if (sub_width > screen_width) {
								sub.css('right', sub_width - screen_width
										+ align_delta);
							}
						}
					} else {

						if (align_offset
								+ (align == 'center' ? sub_width / 2
										: sub_width) > screen_width) {
							align_delta = screen_width
									- align_offset
									- (align == 'center' ? sub_width / 2
											: sub_width);
							sub.css('left', align_delta + align_trans);
						}

						if (align_offset
								- (align == 'center' ? sub_width / 2 : 0)
								+ align_delta < 0) {
							sub
									.css(
											'left',
											(align == 'center' ? (sub_width + width) / 2
													: 0)
													+ align_trans
													- align_offset);
						}
					}
				}
			} else {

				if (this.options.rtl) {
					if ($item.closest('.mega-dropdown-menu').parent().hasClass(
							'mega-align-right')) {

						// should be align to the right as parent
						// $item.removeClass('mega-align-left').addClass('mega-align-right');

						// check if not able => revert the direction
						if (offset.left + width + sub_width > screen_width) {
							$item.removeClass('mega-align-right'); // should we
							// add align
							// left ? it
							// is th
							// default
							// now

							if (offset.left - sub_width < 0) {
								sub.css('right', offset.left + width
										- sub_width);
							}
						}
					} else {
						if (offset.left - sub_width < 0) {
							$item.removeClass('mega-align-left').addClass(
									'mega-align-right');

							if (offset.left + width + sub_width > screen_width) {
								sub.css('left', screen_width - offset.left
										- sub_width);
							}
						}
					}
				} else {

					if ($item.closest('.mega-dropdown-menu').parent().hasClass(
							'mega-align-right')) {
						// should be align to the right as parent
						// $item.removeClass('mega-align-left').addClass('mega-align-right');

						// check if not able => revert the direction
						if (offset.left - sub_width < 0) {
							$item.removeClass('mega-align-right'); // should we
							// add align
							// left ? it
							// is th
							// default
							// now

							if (offset.left + width + sub_width > screen_width) {
								sub.css('left', screen_width - offset.left
										- sub_width);
							}
						}
					} else {

						if (offset.left + width + sub_width > screen_width) {
							$item.removeClass('mega-align-left').addClass(
									'mega-align-right');

							if (offset.left - sub_width < 0) {
								sub.css('right', offset.left + width
										- sub_width);
							}
						}
					}
				}
			}
		}
	};

	$.fn.t3menu = function(option) {
		return this
				.each(function() {
					var $this = $(this), data = $this.data('megamenu'), options = typeof option == 'object'
							&& option;

					// Ignore off-canvas navigation
					if ($this.parents('#off-canvas-nav').length)
						return;
					if ($this.parents('#t3-off-canvas').length)
						return;

					if (!data) {
						$this.data('megamenu',
								(data = new T3Menu(this, options)));

					} else {
						if (typeof option == 'string' && data[option]) {
							data[option]()
						}
					}
				})
	};

	$.fn.t3menu.defaults = {
		duration : 400,
		timeout : 100,
		hidedelay : 200,
		hover : true,
		sb_width : 20
	};

	// apply script
	$(document)
			.ready(
					function() {

						// detect settings
						var mm_duration = $('.t3-megamenu').data('duration') || 0;
						if (mm_duration) {

							$(
									'<style type="text/css">'
											+ '.t3-megamenu.animate .animating > .mega-dropdown-menu,'
											+ '.t3-megamenu.animate.slide .animating > .mega-dropdown-menu > div {'
											+ 'transition-duration: '
											+ mm_duration + 'ms !important;'
											+ '-webkit-transition-duration: '
											+ mm_duration + 'ms !important;'
											+ '}' + '</style>')
									.appendTo('head');
						}

						var mm_timeout = mm_duration ? 100 + mm_duration : 500, mm_rtl = $(
								document.documentElement).attr('dir') == 'rtl', mm_trigger = $(
								document.documentElement).hasClass('mm-hover'), sb_width = (function() {
							var parent = $(
									'<div style="width:50px;height:50px;overflow:auto"><div/></div>')
									.appendTo('body'), child = parent
									.children(), width = child.innerWidth()
									- child.height(100).innerWidth();

							parent.remove();

							return width;
						})();

						// lt IE 10
						if (!$.support.transition) {
							// it is not support animate
							$('.t3-megamenu').removeClass('animate');

							mm_timeout = 100;
						}

						// get ready
						$('ul.nav').has('.dropdown-menu').t3menu({
							duration : mm_duration,
							timeout : mm_timeout,
							rtl : mm_rtl,
							sb_width : sb_width,
							hover : mm_trigger
						});

						$(window).load(function() {

							// check we miss any nav
							$('ul.nav').has('.dropdown-menu').t3menu({
								duration : mm_duration,
								timeout : mm_timeout,
								rtl : mm_rtl,
								sb_width : sb_width,
								hover : mm_trigger
							});

						});
					});

})(jQuery);
/*SC_GROUP_JS*//*SC_MINIFIED_JS*/jQuery(function($){"use strict";$(window).on('scroll',function(){if($(window).scrollTop()>100){$('#t3-mainnav').addClass('navbar-fixed');}else{$('#t3-mainnav').removeClass('navbar-fixed');}});$('.counterUp').counterUp({delay:10,time:1000});$("#team-carousel").owlCarousel({navigation:true,navigationText:["<i class='fa fa fa-angle-left'></i>","<i class='fa fa fa-angle-right'></i>"],slideSpeed:800,pagination:false,items:4,rewindNav:true,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],stopOnHover:true});});
/*SC_GROUP_JS*//*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);
/*SC_GROUP_JS*/// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
/*SC_GROUP_JS*//*SC_MINIFIED_JS*/if(typeof Object.create!=="function"){Object.create=function(obj){function F(){}
F.prototype=obj;return new F();};}
(function($,window,document){var Carousel={init:function(options,el){var base=this;base.$elem=$(el);base.options=$.extend({},$.fn.owlCarousel.options,base.$elem.data(),options);base.userOptions=options;base.loadContent();},loadContent:function(){var base=this,url;function getData(data){var i,content="";if(typeof base.options.jsonSuccess==="function"){base.options.jsonSuccess.apply(this,[data]);}else{for(i in data.owl){if(data.owl.hasOwnProperty(i)){content+=data.owl[i].item;}}
base.$elem.html(content);}
base.logIn();}
if(typeof base.options.beforeInit==="function"){base.options.beforeInit.apply(this,[base.$elem]);}
if(typeof base.options.jsonPath==="string"){url=base.options.jsonPath;$.getJSON(url,getData);}else{base.logIn();}},logIn:function(){var base=this;base.$elem.data("owl-originalStyles",base.$elem.attr("style"));base.$elem.data("owl-originalClasses",base.$elem.attr("class"));base.$elem.css({opacity:0});base.orignalItems=base.options.items;base.checkBrowser();base.wrapperWidth=0;base.checkVisible=null;base.setVars();},setVars:function(){var base=this;if(base.$elem.children().length===0){return false;}
base.baseClass();base.eventTypes();base.$userItems=base.$elem.children();base.itemsAmount=base.$userItems.length;base.wrapItems();base.$owlItems=base.$elem.find(".owl-item");base.$owlWrapper=base.$elem.find(".owl-wrapper");base.playDirection="next";base.prevItem=0;base.prevArr=[0];base.currentItem=0;base.customEvents();base.onStartup();},onStartup:function(){var base=this;base.updateItems();base.calculateAll();base.buildControls();base.updateControls();base.response();base.moveEvents();base.stopOnHover();base.owlStatus();if(base.options.transitionStyle!==false){base.transitionTypes(base.options.transitionStyle);}
if(base.options.autoPlay===true){base.options.autoPlay=5000;}
base.play();base.$elem.find(".owl-wrapper").css("display","block");if(!base.$elem.is(":visible")){base.watchVisibility();}else{base.$elem.css("opacity",1);}
base.onstartup=false;base.eachMoveUpdate();if(typeof base.options.afterInit==="function"){base.options.afterInit.apply(this,[base.$elem]);}},eachMoveUpdate:function(){var base=this;if(base.options.lazyLoad===true){base.lazyLoad();}
if(base.options.autoHeight===true){base.autoHeight();}
base.onVisibleItems();if(typeof base.options.afterAction==="function"){base.options.afterAction.apply(this,[base.$elem]);}},updateVars:function(){var base=this;if(typeof base.options.beforeUpdate==="function"){base.options.beforeUpdate.apply(this,[base.$elem]);}
base.watchVisibility();base.updateItems();base.calculateAll();base.updatePosition();base.updateControls();base.eachMoveUpdate();if(typeof base.options.afterUpdate==="function"){base.options.afterUpdate.apply(this,[base.$elem]);}},reload:function(){var base=this;window.setTimeout(function(){base.updateVars();},0);},watchVisibility:function(){var base=this;if(base.$elem.is(":visible")===false){base.$elem.css({opacity:0});window.clearInterval(base.autoPlayInterval);window.clearInterval(base.checkVisible);}else{return false;}
base.checkVisible=window.setInterval(function(){if(base.$elem.is(":visible")){base.reload();base.$elem.animate({opacity:1},200);window.clearInterval(base.checkVisible);}},500);},wrapItems:function(){var base=this;base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");base.wrapperOuter=base.$elem.find(".owl-wrapper-outer");base.$elem.css("display","block");},baseClass:function(){var base=this,hasBaseClass=base.$elem.hasClass(base.options.baseClass),hasThemeClass=base.$elem.hasClass(base.options.theme);if(!hasBaseClass){base.$elem.addClass(base.options.baseClass);}
if(!hasThemeClass){base.$elem.addClass(base.options.theme);}},updateItems:function(){var base=this,width,i;if(base.options.responsive===false){return false;}
if(base.options.singleItem===true){base.options.items=base.orignalItems=1;base.options.itemsCustom=false;base.options.itemsDesktop=false;base.options.itemsDesktopSmall=false;base.options.itemsTablet=false;base.options.itemsTabletSmall=false;base.options.itemsMobile=false;return false;}
width=$(base.options.responsiveBaseWidth).width();if(width>(base.options.itemsDesktop[0]||base.orignalItems)){base.options.items=base.orignalItems;}
if(base.options.itemsCustom!==false){base.options.itemsCustom.sort(function(a,b){return a[0]-b[0];});for(i=0;i<base.options.itemsCustom.length;i+=1){if(base.options.itemsCustom[i][0]<=width){base.options.items=base.options.itemsCustom[i][1];}}}else{if(width<=base.options.itemsDesktop[0]&&base.options.itemsDesktop!==false){base.options.items=base.options.itemsDesktop[1];}
if(width<=base.options.itemsDesktopSmall[0]&&base.options.itemsDesktopSmall!==false){base.options.items=base.options.itemsDesktopSmall[1];}
if(width<=base.options.itemsTablet[0]&&base.options.itemsTablet!==false){base.options.items=base.options.itemsTablet[1];}
if(width<=base.options.itemsTabletSmall[0]&&base.options.itemsTabletSmall!==false){base.options.items=base.options.itemsTabletSmall[1];}
if(width<=base.options.itemsMobile[0]&&base.options.itemsMobile!==false){base.options.items=base.options.itemsMobile[1];}}
if(base.options.items>base.itemsAmount&&base.options.itemsScaleUp===true){base.options.items=base.itemsAmount;}},response:function(){var base=this,smallDelay,lastWindowWidth;if(base.options.responsive!==true){return false;}
lastWindowWidth=$(window).width();base.resizer=function(){if($(window).width()!==lastWindowWidth){if(base.options.autoPlay!==false){window.clearInterval(base.autoPlayInterval);}
window.clearTimeout(smallDelay);smallDelay=window.setTimeout(function(){lastWindowWidth=$(window).width();base.updateVars();},base.options.responsiveRefreshRate);}};$(window).resize(base.resizer);},updatePosition:function(){var base=this;base.jumpTo(base.currentItem);if(base.options.autoPlay!==false){base.checkAp();}},appendItemsSizes:function(){var base=this,roundPages=0,lastItem=base.itemsAmount-base.options.items;base.$owlItems.each(function(index){var $this=$(this);$this.css({"width":base.itemWidth}).data("owl-item",Number(index));if(index%base.options.items===0||index===lastItem){if(!(index>lastItem)){roundPages+=1;}}
$this.data("owl-roundPages",roundPages);});},appendWrapperSizes:function(){var base=this,width=base.$owlItems.length*base.itemWidth;base.$owlWrapper.css({"width":width*2,"left":0});base.appendItemsSizes();},calculateAll:function(){var base=this;base.calculateWidth();base.appendWrapperSizes();base.loops();base.max();},calculateWidth:function(){var base=this;base.itemWidth=Math.round(base.$elem.width()/base.options.items);},max:function(){var base=this,maximum=((base.itemsAmount*base.itemWidth)-base.options.items*base.itemWidth)*-1;if(base.options.items>base.itemsAmount){base.maximumItem=0;maximum=0;base.maximumPixels=0;}else{base.maximumItem=base.itemsAmount-base.options.items;base.maximumPixels=maximum;}
return maximum;},min:function(){return 0;},loops:function(){var base=this,prev=0,elWidth=0,i,item,roundPageNum;base.positionsInArray=[0];base.pagesInArray=[];for(i=0;i<base.itemsAmount;i+=1){elWidth+=base.itemWidth;base.positionsInArray.push(-elWidth);if(base.options.scrollPerPage===true){item=$(base.$owlItems[i]);roundPageNum=item.data("owl-roundPages");if(roundPageNum!==prev){base.pagesInArray[prev]=base.positionsInArray[i];prev=roundPageNum;}}}},buildControls:function(){var base=this;if(base.options.navigation===true||base.options.pagination===true){base.owlControls=$("<div class=\"owl-controls\"/>").toggleClass("clickable",!base.browser.isTouch).appendTo(base.$elem);}
if(base.options.pagination===true){base.buildPagination();}
if(base.options.navigation===true){base.buildButtons();}},buildButtons:function(){var base=this,buttonsWrapper=$("<div class=\"owl-buttons\"/>");base.owlControls.append(buttonsWrapper);base.buttonPrev=$("<div/>",{"class":"owl-prev","html":base.options.navigationText[0]||""});base.buttonNext=$("<div/>",{"class":"owl-next","html":base.options.navigationText[1]||""});buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);buttonsWrapper.on("touchstart.owlControls mousedown.owlControls","div[class^=\"owl\"]",function(event){event.preventDefault();});buttonsWrapper.on("touchend.owlControls mouseup.owlControls","div[class^=\"owl\"]",function(event){event.preventDefault();if($(this).hasClass("owl-next")){base.next();}else{base.prev();}});},buildPagination:function(){var base=this;base.paginationWrapper=$("<div class=\"owl-pagination\"/>");base.owlControls.append(base.paginationWrapper);base.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(event){event.preventDefault();if(Number($(this).data("owl-page"))!==base.currentItem){base.goTo(Number($(this).data("owl-page")),true);}});},updatePagination:function(){var base=this,counter,lastPage,lastItem,i,paginationButton,paginationButtonInner;if(base.options.pagination===false){return false;}
base.paginationWrapper.html("");counter=0;lastPage=base.itemsAmount-base.itemsAmount%base.options.items;for(i=0;i<base.itemsAmount;i+=1){if(i%base.options.items===0){counter+=1;if(lastPage===i){lastItem=base.itemsAmount-base.options.items;}
paginationButton=$("<div/>",{"class":"owl-page"});paginationButtonInner=$("<span></span>",{"text":base.options.paginationNumbers===true?counter:"","class":base.options.paginationNumbers===true?"owl-numbers":""});paginationButton.append(paginationButtonInner);paginationButton.data("owl-page",lastPage===i?lastItem:i);paginationButton.data("owl-roundPages",counter);base.paginationWrapper.append(paginationButton);}}
base.checkPagination();},checkPagination:function(){var base=this;if(base.options.pagination===false){return false;}
base.paginationWrapper.find(".owl-page").each(function(){if($(this).data("owl-roundPages")===$(base.$owlItems[base.currentItem]).data("owl-roundPages")){base.paginationWrapper.find(".owl-page").removeClass("active");$(this).addClass("active");}});},checkNavigation:function(){var base=this;if(base.options.navigation===false){return false;}
if(base.options.rewindNav===false){if(base.currentItem===0&&base.maximumItem===0){base.buttonPrev.addClass("disabled");base.buttonNext.addClass("disabled");}else if(base.currentItem===0&&base.maximumItem!==0){base.buttonPrev.addClass("disabled");base.buttonNext.removeClass("disabled");}else if(base.currentItem===base.maximumItem){base.buttonPrev.removeClass("disabled");base.buttonNext.addClass("disabled");}else if(base.currentItem!==0&&base.currentItem!==base.maximumItem){base.buttonPrev.removeClass("disabled");base.buttonNext.removeClass("disabled");}}},updateControls:function(){var base=this;base.updatePagination();base.checkNavigation();if(base.owlControls){if(base.options.items>=base.itemsAmount){base.owlControls.hide();}else{base.owlControls.show();}}},destroyControls:function(){var base=this;if(base.owlControls){base.owlControls.remove();}},next:function(speed){var base=this;if(base.isTransition){return false;}
base.currentItem+=base.options.scrollPerPage===true?base.options.items:1;if(base.currentItem>base.maximumItem+(base.options.scrollPerPage===true?(base.options.items-1):0)){if(base.options.rewindNav===true){base.currentItem=0;speed="rewind";}else{base.currentItem=base.maximumItem;return false;}}
base.goTo(base.currentItem,speed);},prev:function(speed){var base=this;if(base.isTransition){return false;}
if(base.options.scrollPerPage===true&&base.currentItem>0&&base.currentItem<base.options.items){base.currentItem=0;}else{base.currentItem-=base.options.scrollPerPage===true?base.options.items:1;}
if(base.currentItem<0){if(base.options.rewindNav===true){base.currentItem=base.maximumItem;speed="rewind";}else{base.currentItem=0;return false;}}
base.goTo(base.currentItem,speed);},goTo:function(position,speed,drag){var base=this,goToPixel;if(base.isTransition){return false;}
if(typeof base.options.beforeMove==="function"){base.options.beforeMove.apply(this,[base.$elem]);}
if(position>=base.maximumItem){position=base.maximumItem;}else if(position<=0){position=0;}
base.currentItem=base.owl.currentItem=position;if(base.options.transitionStyle!==false&&drag!=="drag"&&base.options.items===1&&base.browser.support3d===true){base.swapSpeed(0);if(base.browser.support3d===true){base.transition3d(base.positionsInArray[position]);}else{base.css2slide(base.positionsInArray[position],1);}
base.afterGo();base.singleItemTransition();return false;}
goToPixel=base.positionsInArray[position];if(base.browser.support3d===true){base.isCss3Finish=false;if(speed===true){base.swapSpeed("paginationSpeed");window.setTimeout(function(){base.isCss3Finish=true;},base.options.paginationSpeed);}else if(speed==="rewind"){base.swapSpeed(base.options.rewindSpeed);window.setTimeout(function(){base.isCss3Finish=true;},base.options.rewindSpeed);}else{base.swapSpeed("slideSpeed");window.setTimeout(function(){base.isCss3Finish=true;},base.options.slideSpeed);}
base.transition3d(goToPixel);}else{if(speed===true){base.css2slide(goToPixel,base.options.paginationSpeed);}else if(speed==="rewind"){base.css2slide(goToPixel,base.options.rewindSpeed);}else{base.css2slide(goToPixel,base.options.slideSpeed);}}
base.afterGo();},jumpTo:function(position){var base=this;if(typeof base.options.beforeMove==="function"){base.options.beforeMove.apply(this,[base.$elem]);}
if(position>=base.maximumItem||position===-1){position=base.maximumItem;}else if(position<=0){position=0;}
base.swapSpeed(0);if(base.browser.support3d===true){base.transition3d(base.positionsInArray[position]);}else{base.css2slide(base.positionsInArray[position],1);}
base.currentItem=base.owl.currentItem=position;base.afterGo();},afterGo:function(){var base=this;base.prevArr.push(base.currentItem);base.prevItem=base.owl.prevItem=base.prevArr[base.prevArr.length-2];base.prevArr.shift(0);if(base.prevItem!==base.currentItem){base.checkPagination();base.checkNavigation();base.eachMoveUpdate();if(base.options.autoPlay!==false){base.checkAp();}}
if(typeof base.options.afterMove==="function"&&base.prevItem!==base.currentItem){base.options.afterMove.apply(this,[base.$elem]);}},stop:function(){var base=this;base.apStatus="stop";window.clearInterval(base.autoPlayInterval);},checkAp:function(){var base=this;if(base.apStatus!=="stop"){base.play();}},play:function(){var base=this;base.apStatus="play";if(base.options.autoPlay===false){return false;}
window.clearInterval(base.autoPlayInterval);base.autoPlayInterval=window.setInterval(function(){base.next(true);},base.options.autoPlay);},swapSpeed:function(action){var base=this;if(action==="slideSpeed"){base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));}else if(action==="paginationSpeed"){base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));}else if(typeof action!=="string"){base.$owlWrapper.css(base.addCssSpeed(action));}},addCssSpeed:function(speed){return{"-webkit-transition":"all "+speed+"ms ease","-moz-transition":"all "+speed+"ms ease","-o-transition":"all "+speed+"ms ease","transition":"all "+speed+"ms ease"};},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"","transition":""};},doTranslate:function(pixels){return{"-webkit-transform":"translate3d("+pixels+"px, 0px, 0px)","-moz-transform":"translate3d("+pixels+"px, 0px, 0px)","-o-transform":"translate3d("+pixels+"px, 0px, 0px)","-ms-transform":"translate3d("+pixels+"px, 0px, 0px)","transform":"translate3d("+pixels+"px, 0px,0px)"};},transition3d:function(value){var base=this;base.$owlWrapper.css(base.doTranslate(value));},css2move:function(value){var base=this;base.$owlWrapper.css({"left":value});},css2slide:function(value,speed){var base=this;base.isCssFinish=false;base.$owlWrapper.stop(true,true).animate({"left":value},{duration:speed||base.options.slideSpeed,complete:function(){base.isCssFinish=true;}});},checkBrowser:function(){var base=this,translate3D="translate3d(0px, 0px, 0px)",tempElem=document.createElement("div"),regex,asSupport,support3d,isTouch;tempElem.style.cssText="  -moz-transform:"+translate3D+"; -ms-transform:"+translate3D+"; -o-transform:"+translate3D+"; -webkit-transform:"+translate3D+"; transform:"+translate3D;regex=/translate3d\(0px, 0px, 0px\)/g;asSupport=tempElem.style.cssText.match(regex);support3d=(asSupport!==null&&asSupport.length===1);isTouch="ontouchstart"in window||window.navigator.msMaxTouchPoints;base.browser={"support3d":support3d,"isTouch":isTouch};},moveEvents:function(){var base=this;if(base.options.mouseDrag!==false||base.options.touchDrag!==false){base.gestures();base.disabledEvents();}},eventTypes:function(){var base=this,types=["s","e","x"];base.ev_types={};if(base.options.mouseDrag===true&&base.options.touchDrag===true){types=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"];}else if(base.options.mouseDrag===false&&base.options.touchDrag===true){types=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"];}else if(base.options.mouseDrag===true&&base.options.touchDrag===false){types=["mousedown.owl","mousemove.owl","mouseup.owl"];}
base.ev_types.start=types[0];base.ev_types.move=types[1];base.ev_types.end=types[2];},disabledEvents:function(){var base=this;base.$elem.on("dragstart.owl",function(event){event.preventDefault();});base.$elem.on("mousedown.disableTextSelect",function(e){return $(e.target).is('input, textarea, select, option');});},gestures:function(){var base=this,locals={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};base.isCssFinish=true;function getTouches(event){if(event.touches!==undefined){return{x:event.touches[0].pageX,y:event.touches[0].pageY};}
if(event.touches===undefined){if(event.pageX!==undefined){return{x:event.pageX,y:event.pageY};}
if(event.pageX===undefined){return{x:event.clientX,y:event.clientY};}}}
function swapEvents(type){if(type==="on"){$(document).on(base.ev_types.move,dragMove);$(document).on(base.ev_types.end,dragEnd);}else if(type==="off"){$(document).off(base.ev_types.move);$(document).off(base.ev_types.end);}}
function dragStart(event){var ev=event.originalEvent||event||window.event,position;if(ev.which===3){return false;}
if(base.itemsAmount<=base.options.items){return;}
if(base.isCssFinish===false&&!base.options.dragBeforeAnimFinish){return false;}
if(base.isCss3Finish===false&&!base.options.dragBeforeAnimFinish){return false;}
if(base.options.autoPlay!==false){window.clearInterval(base.autoPlayInterval);}
if(base.browser.isTouch!==true&&!base.$owlWrapper.hasClass("grabbing")){base.$owlWrapper.addClass("grabbing");}
base.newPosX=0;base.newRelativeX=0;$(this).css(base.removeTransition());position=$(this).position();locals.relativePos=position.left;locals.offsetX=getTouches(ev).x-position.left;locals.offsetY=getTouches(ev).y-position.top;swapEvents("on");locals.sliding=false;locals.targetElement=ev.target||ev.srcElement;}
function dragMove(event){var ev=event.originalEvent||event||window.event,minSwipe,maxSwipe;base.newPosX=getTouches(ev).x-locals.offsetX;base.newPosY=getTouches(ev).y-locals.offsetY;base.newRelativeX=base.newPosX-locals.relativePos;if(typeof base.options.startDragging==="function"&&locals.dragging!==true&&base.newRelativeX!==0){locals.dragging=true;base.options.startDragging.apply(base,[base.$elem]);}
if((base.newRelativeX>8||base.newRelativeX<-8)&&(base.browser.isTouch===true)){if(ev.preventDefault!==undefined){ev.preventDefault();}else{ev.returnValue=false;}
locals.sliding=true;}
if((base.newPosY>10||base.newPosY<-10)&&locals.sliding===false){$(document).off("touchmove.owl");}
minSwipe=function(){return base.newRelativeX/5;};maxSwipe=function(){return base.maximumPixels+base.newRelativeX/5;};base.newPosX=Math.max(Math.min(base.newPosX,minSwipe()),maxSwipe());if(base.browser.support3d===true){base.transition3d(base.newPosX);}else{base.css2move(base.newPosX);}}
function dragEnd(event){var ev=event.originalEvent||event||window.event,newPosition,handlers,owlStopEvent;ev.target=ev.target||ev.srcElement;locals.dragging=false;if(base.browser.isTouch!==true){base.$owlWrapper.removeClass("grabbing");}
if(base.newRelativeX<0){base.dragDirection=base.owl.dragDirection="left";}else{base.dragDirection=base.owl.dragDirection="right";}
if(base.newRelativeX!==0){newPosition=base.getNewPosition();base.goTo(newPosition,false,"drag");if(locals.targetElement===ev.target&&base.browser.isTouch!==true){$(ev.target).on("click.disable",function(ev){ev.stopImmediatePropagation();ev.stopPropagation();ev.preventDefault();$(ev.target).off("click.disable");});handlers=$._data(ev.target,"events").click;owlStopEvent=handlers.pop();handlers.splice(0,0,owlStopEvent);}}
swapEvents("off");}
base.$elem.on(base.ev_types.start,".owl-wrapper",dragStart);},getNewPosition:function(){var base=this,newPosition=base.closestItem();if(newPosition>base.maximumItem){base.currentItem=base.maximumItem;newPosition=base.maximumItem;}else if(base.newPosX>=0){newPosition=0;base.currentItem=0;}
return newPosition;},closestItem:function(){var base=this,array=base.options.scrollPerPage===true?base.pagesInArray:base.positionsInArray,goal=base.newPosX,closest=null;$.each(array,function(i,v){if(goal-(base.itemWidth/20)>array[i+1]&&goal-(base.itemWidth/20)<v&&base.moveDirection()==="left"){closest=v;if(base.options.scrollPerPage===true){base.currentItem=$.inArray(closest,base.positionsInArray);}else{base.currentItem=i;}}else if(goal+(base.itemWidth/20)<v&&goal+(base.itemWidth/20)>(array[i+1]||array[i]-base.itemWidth)&&base.moveDirection()==="right"){if(base.options.scrollPerPage===true){closest=array[i+1]||array[array.length-1];base.currentItem=$.inArray(closest,base.positionsInArray);}else{closest=array[i+1];base.currentItem=i+1;}}});return base.currentItem;},moveDirection:function(){var base=this,direction;if(base.newRelativeX<0){direction="right";base.playDirection="next";}else{direction="left";base.playDirection="prev";}
return direction;},customEvents:function(){var base=this;base.$elem.on("owl.next",function(){base.next();});base.$elem.on("owl.prev",function(){base.prev();});base.$elem.on("owl.play",function(event,speed){base.options.autoPlay=speed;base.play();base.hoverStatus="play";});base.$elem.on("owl.stop",function(){base.stop();base.hoverStatus="stop";});base.$elem.on("owl.goTo",function(event,item){base.goTo(item);});base.$elem.on("owl.jumpTo",function(event,item){base.jumpTo(item);});},stopOnHover:function(){var base=this;if(base.options.stopOnHover===true&&base.browser.isTouch!==true&&base.options.autoPlay!==false){base.$elem.on("mouseover",function(){base.stop();});base.$elem.on("mouseout",function(){if(base.hoverStatus!=="stop"){base.play();}});}},lazyLoad:function(){var base=this,i,$item,itemNumber,$lazyImg,follow;if(base.options.lazyLoad===false){return false;}
for(i=0;i<base.itemsAmount;i+=1){$item=$(base.$owlItems[i]);if($item.data("owl-loaded")==="loaded"){continue;}
itemNumber=$item.data("owl-item");$lazyImg=$item.find(".lazyOwl");if(typeof $lazyImg.data("src")!=="string"){$item.data("owl-loaded","loaded");continue;}
if($item.data("owl-loaded")===undefined){$lazyImg.hide();$item.addClass("loading").data("owl-loaded","checked");}
if(base.options.lazyFollow===true){follow=itemNumber>=base.currentItem;}else{follow=true;}
if(follow&&itemNumber<base.currentItem+base.options.items&&$lazyImg.length){base.lazyPreload($item,$lazyImg);}}},lazyPreload:function($item,$lazyImg){var base=this,iterations=0,isBackgroundImg;if($lazyImg.prop("tagName")==="DIV"){$lazyImg.css("background-image","url("+$lazyImg.data("src")+")");isBackgroundImg=true;}else{$lazyImg[0].src=$lazyImg.data("src");}
function showImage(){$item.data("owl-loaded","loaded").removeClass("loading");$lazyImg.removeAttr("data-src");if(base.options.lazyEffect==="fade"){$lazyImg.fadeIn(400);}else{$lazyImg.show();}
if(typeof base.options.afterLazyLoad==="function"){base.options.afterLazyLoad.apply(this,[base.$elem]);}}
function checkLazyImage(){iterations+=1;if(base.completeImg($lazyImg.get(0))||isBackgroundImg===true){showImage();}else if(iterations<=100){window.setTimeout(checkLazyImage,100);}else{showImage();}}
checkLazyImage();},autoHeight:function(){var base=this,$currentimg=$(base.$owlItems[base.currentItem]).find("img"),iterations;function addHeight(){var $currentItem=$(base.$owlItems[base.currentItem]).height();base.wrapperOuter.css("height",$currentItem+"px");if(!base.wrapperOuter.hasClass("autoHeight")){window.setTimeout(function(){base.wrapperOuter.addClass("autoHeight");},0);}}
function checkImage(){iterations+=1;if(base.completeImg($currentimg.get(0))){addHeight();}else if(iterations<=100){window.setTimeout(checkImage,100);}else{base.wrapperOuter.css("height","");}}
if($currentimg.get(0)!==undefined){iterations=0;checkImage();}else{addHeight();}},completeImg:function(img){var naturalWidthType;if(!img.complete){return false;}
naturalWidthType=typeof img.naturalWidth;if(naturalWidthType!=="undefined"&&img.naturalWidth===0){return false;}
return true;},onVisibleItems:function(){var base=this,i;if(base.options.addClassActive===true){base.$owlItems.removeClass("active");}
base.visibleItems=[];for(i=base.currentItem;i<base.currentItem+base.options.items;i+=1){base.visibleItems.push(i);if(base.options.addClassActive===true){$(base.$owlItems[i]).addClass("active");}}
base.owl.visibleItems=base.visibleItems;},transitionTypes:function(className){var base=this;base.outClass="owl-"+className+"-out";base.inClass="owl-"+className+"-in";},singleItemTransition:function(){var base=this,outClass=base.outClass,inClass=base.inClass,$currentItem=base.$owlItems.eq(base.currentItem),$prevItem=base.$owlItems.eq(base.prevItem),prevPos=Math.abs(base.positionsInArray[base.currentItem])+base.positionsInArray[base.prevItem],origin=Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2,animEnd='webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';base.isTransition=true;base.$owlWrapper.addClass('owl-origin').css({"-webkit-transform-origin":origin+"px","-moz-perspective-origin":origin+"px","perspective-origin":origin+"px"});function transStyles(prevPos){return{"position":"relative","left":prevPos+"px"};}
$prevItem.css(transStyles(prevPos,10)).addClass(outClass).on(animEnd,function(){base.endPrev=true;$prevItem.off(animEnd);base.clearTransStyle($prevItem,outClass);});$currentItem.addClass(inClass).on(animEnd,function(){base.endCurrent=true;$currentItem.off(animEnd);base.clearTransStyle($currentItem,inClass);});},clearTransStyle:function(item,classToRemove){var base=this;item.css({"position":"","left":""}).removeClass(classToRemove);if(base.endPrev&&base.endCurrent){base.$owlWrapper.removeClass('owl-origin');base.endPrev=false;base.endCurrent=false;base.isTransition=false;}},owlStatus:function(){var base=this;base.owl={"userOptions":base.userOptions,"baseElement":base.$elem,"userItems":base.$userItems,"owlItems":base.$owlItems,"currentItem":base.currentItem,"prevItem":base.prevItem,"visibleItems":base.visibleItems,"isTouch":base.browser.isTouch,"browser":base.browser,"dragDirection":base.dragDirection};},clearEvents:function(){var base=this;base.$elem.off(".owl owl mousedown.disableTextSelect");$(document).off(".owl owl");$(window).off("resize",base.resizer);},unWrap:function(){var base=this;if(base.$elem.children().length!==0){base.$owlWrapper.unwrap();base.$userItems.unwrap().unwrap();if(base.owlControls){base.owlControls.remove();}}
base.clearEvents();base.$elem.attr("style",base.$elem.data("owl-originalStyles")||"").attr("class",base.$elem.data("owl-originalClasses"));},destroy:function(){var base=this;base.stop();window.clearInterval(base.checkVisible);base.unWrap();base.$elem.removeData();},reinit:function(newOptions){var base=this,options=$.extend({},base.userOptions,newOptions);base.unWrap();base.init(options,base.$elem);},addItem:function(htmlString,targetPosition){var base=this,position;if(!htmlString){return false;}
if(base.$elem.children().length===0){base.$elem.append(htmlString);base.setVars();return false;}
base.unWrap();if(targetPosition===undefined||targetPosition===-1){position=-1;}else{position=targetPosition;}
if(position>=base.$userItems.length||position===-1){base.$userItems.eq(-1).after(htmlString);}else{base.$userItems.eq(position).before(htmlString);}
base.setVars();},removeItem:function(targetPosition){var base=this,position;if(base.$elem.children().length===0){return false;}
if(targetPosition===undefined||targetPosition===-1){position=-1;}else{position=targetPosition;}
base.unWrap();base.$userItems.eq(position).remove();base.setVars();}};$.fn.owlCarousel=function(options){return this.each(function(){if($(this).data("owl-init")===true){return false;}
$(this).data("owl-init",true);var carousel=Object.create(Carousel);carousel.init(options,this);$.data(this,"owlCarousel",carousel);});};$.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:window,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false};}(jQuery,window,document));
/*SC_GROUP_JS*//*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;if(!window.jQuery)throw new Error("UIkit 2.x requires jQuery");i=t(window.jQuery),"function"==typeof define&&define.amd&&define("uikit",function(){return i.load=function(t,e,n,o){var s,a=t.split(","),r=[],l=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!l)throw new Error("Please define base path to UIkit in the requirejs config.");for(s=0;s<a.length;s+=1){var c=a[s].replace(/\./g,"/");r.push(l+"/components/"+c)}e(r,function(){n(i)})},i})}(function(t){"use strict";if(window.UIkit2)return window.UIkit2;var i={},e=window.UIkit||void 0;if(i.version="2.27.5",i.noConflict=function(){return e&&(window.UIkit=e,t.UIkit=e,t.fn.uk=e.fn),i},window.UIkit2=i,e||(window.UIkit=i),i.$=t,i.$doc=i.$(document),i.$win=i.$(window),i.$html=i.$("html"),i.support={},i.support.transition=function(){var t=function(){var t,i=document.body||document.documentElement,e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in e)if(void 0!==i.style[t])return e[t]}();return t&&{end:t}}(),i.support.animation=function(){var t=function(){var t,i=document.body||document.documentElement,e={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in e)if(void 0!==i.style[t])return e[t]}();return t&&{end:t}}(),function(){Date.now=Date.now||function(){return(new Date).getTime()};for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var e=t[i];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var i=Date.now(),e=Math.max(n+16,i);return setTimeout(function(){t(n=e)},e-i)},window.cancelAnimationFrame=clearTimeout}}(),i.support.touch="ontouchstart"in document||window.DocumentTouch&&document instanceof window.DocumentTouch||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0||!1,i.support.mutationobserver=window.MutationObserver||window.WebKitMutationObserver||null,i.Utils={},i.Utils.isFullscreen=function(){return document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement||!1},i.Utils.str2json=function(t,i){try{return i?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,i){return'"'+i+'":'}).replace(/'([^']+)'/g,function(t,i){return'"'+i+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(e){return!1}},i.Utils.debounce=function(t,i,e){var n;return function(){var o=this,s=arguments,a=function(){n=null,e||t.apply(o,s)},r=e&&!n;clearTimeout(n),n=setTimeout(a,i),r&&t.apply(o,s)}},i.Utils.throttle=function(t,i){var e=!1;return function(){e||(t.call(),e=!0,setTimeout(function(){e=!1},i))}},i.Utils.removeCssRules=function(t){var i,e,n,o,s,a,r,l,c,u;t&&setTimeout(function(){try{for(u=document.styleSheets,o=0,r=u.length;r>o;o++){for(n=u[o],e=[],n.cssRules=n.cssRules,i=s=0,l=n.cssRules.length;l>s;i=++s)n.cssRules[i].type===CSSRule.STYLE_RULE&&t.test(n.cssRules[i].selectorText)&&e.unshift(i);for(a=0,c=e.length;c>a;a++)n.deleteRule(e[a])}}catch(d){}},0)},i.Utils.isInView=function(e,n){var o=t(e);if(!o.is(":visible"))return!1;var s=i.$win.scrollLeft(),a=i.$win.scrollTop(),r=o.offset(),l=r.left,c=r.top;return n=t.extend({topoffset:0,leftoffset:0},n),c+o.height()>=a&&c-n.topoffset<=a+i.$win.height()&&l+o.width()>=s&&l-n.leftoffset<=s+i.$win.width()?!0:!1},i.Utils.checkDisplay=function(e,n){var o=i.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",e||document);return e&&!o.length&&(o=t(e)),o.trigger("display.uk.check"),n&&("string"!=typeof n&&(n='[class*="uk-animation-"]'),o.find(n).each(function(){var t=i.$(this),e=t.attr("class"),n=e.match(/uk-animation-(.+)/);t.removeClass(n[0]).width(),t.addClass(n[0])})),o},i.Utils.options=function(e){if("string"!=t.type(e))return e;-1!=e.indexOf(":")&&"}"!=e.trim().substr(-1)&&(e="{"+e+"}");var n=e?e.indexOf("{"):-1,o={};if(-1!=n)try{o=i.Utils.str2json(e.substr(n))}catch(s){}return o},i.Utils.animate=function(e,n){var o=t.Deferred();return e=i.$(e),e.css("display","none").addClass(n).one(i.support.animation.end,function(){e.removeClass(n),o.resolve()}),e.css("display",""),o.promise()},i.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},i.Utils.template=function(t,i){for(var e,n,o,s,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),r=0,l=[],c=0;r<a.length;){if(e=a[r],e.match(/\{\{\s*(.+?)\s*\}\}/))switch(r+=1,e=a[r],n=e[0],o=e.substring(e.match(/^(\^|\#|\!|\~|\:)/)?1:0),n){case"~":l.push("for(var $i=0;$i<"+o+".length;$i++) { var $item = "+o+"[$i];"),c++;break;case":":l.push("for(var $key in "+o+") { var $val = "+o+"[$key];"),c++;break;case"#":l.push("if("+o+") {"),c++;break;case"^":l.push("if(!"+o+") {"),c++;break;case"/":l.push("}"),c--;break;case"!":l.push("__ret.push("+o+");");break;default:l.push("__ret.push(escape("+o+"));")}else l.push("__ret.push('"+e.replace(/\'/g,"\\'")+"');");r+=1}return s=new Function("$data",["var __ret = [];","try {","with($data){",c?'__ret = ["Not all blocks are closed correctly."]':l.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),i?s(i):s},i.Utils.focus=function(i,e){if(i=t(i),!i.length)return i;var n,o=i.find("[autofocus]:first");return o.length?o.focus():(o=i.find(":input"+(e&&","+e||"")).first(),o.length?o.focus():(i.attr("tabindex")||(n=1e3,i.attr("tabindex",n)),i[0].focus(),n&&i.attr("tabindex",""),i))},i.Utils.events={},i.Utils.events.click=i.support.touch?"tap":"click",i.fn=function(e,n){var o=arguments,s=e.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=s[1],r=s[2];return i[a]?this.each(function(){var e=t(this),s=e.data(a);s||e.data(a,s=i[a](this,r?void 0:n)),r&&s[r].apply(s,Array.prototype.slice.call(o,1))}):(t.error("UIkit component ["+a+"] does not exist."),this)},t.UIkit=i,t.fn.uk=i.fn,i.langdirection="rtl"==i.$html.attr("dir")?"right":"left",i.components={},i.component=function(e,n,o){if(i.components[e]&&!o)return i.components[e];var s=function(n,o){var a=this;return this.UIkit=i,this.element=n?i.$(n):null,this.options=t.extend(!0,{},this.defaults,o),this.plugins={},this.element&&this.element.data(e,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(s.plugins)).forEach(function(t){s.plugins[t].init&&(s.plugins[t].init(a),a.plugins[t]=!0)}),this.trigger("init.uk.component",[e,this]),this};return s.plugins={},t.extend(!0,s.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,e,n){return i.$(this.element||this).on(t,e,n)},one:function(t,e,n){return i.$(this.element||this).one(t,e,n)},off:function(t){return i.$(this.element||this).off(t)},trigger:function(t,e){return i.$(this.element||this).trigger(t,e)},find:function(t){return i.$(this.element?this.element:[]).find(t)},proxy:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=function(){return t[i].apply(t,arguments)})})},mixin:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=t[i].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:(2==arguments.length&&(this.options[arguments[0]]=arguments[1]),void 0)}},n),this.components[e]=s,this[e]=function(){var n,o;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?n=t(arguments[0]):o=arguments[0];break;case 2:n=t(arguments[0]),o=arguments[1]}return n&&n.data(e)?n.data(e):new i.components[e](n,o)},i.domready&&i.component.boot(e),s},i.plugin=function(t,i,e){this.components[t].plugins[i]=e},i.component.boot=function(t){i.components[t].prototype&&i.components[t].prototype.boot&&!i.components[t].booted&&(i.components[t].prototype.boot.apply(i,[]),i.components[t].booted=!0)},i.component.bootComponents=function(){for(var t in i.components)i.component.boot(t)},i.domObservers=[],i.domready=!1,i.ready=function(t){i.domObservers.push(t),i.domready&&t(document)},i.on=function(t,e,n){return t&&t.indexOf("ready.uk.dom")>-1&&i.domready&&e.apply(i.$doc),i.$doc.on(t,e,n)},i.one=function(t,e,n){return t&&t.indexOf("ready.uk.dom")>-1&&i.domready?(e.apply(i.$doc),i.$doc):i.$doc.one(t,e,n)},i.trigger=function(t,e){return i.$doc.trigger(t,e)},i.domObserve=function(t,e){i.support.mutationobserver&&(e=e||function(){},i.$(t).each(function(){var t=this,n=i.$(t);if(!n.data("observer"))try{var o=new i.support.mutationobserver(i.Utils.debounce(function(){e.apply(t,[n]),n.trigger("changed.uk.dom")},50),{childList:!0,subtree:!0});o.observe(t,{childList:!0,subtree:!0}),n.data("observer",o)}catch(s){}}))},i.init=function(t){t=t||document,i.domObservers.forEach(function(i){i(t)})},i.on("domready.uk.dom",function(){i.init(),i.domready&&i.Utils.checkDisplay()}),document.addEventListener("DOMContentLoaded",function(){var e=function(){i.$body=i.$("body"),i.trigger("beforeready.uk.dom"),i.component.bootComponents();var e=requestAnimationFrame(function(){var t={dir:{x:0,y:0},x:window.pageXOffset,y:window.pageYOffset},n=function(){var o=window.pageXOffset,s=window.pageYOffset;(t.x!=o||t.y!=s)&&(t.dir.x=o!=t.x?o>t.x?1:-1:0,t.dir.y=s!=t.y?s>t.y?1:-1:0,t.x=o,t.y=s,i.$doc.trigger("scrolling.uk.document",[{dir:{x:t.dir.x,y:t.dir.y},x:o,y:s}])),cancelAnimationFrame(e),e=requestAnimationFrame(n)};return i.support.touch&&i.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",n),(t.x||t.y)&&n(),n}());if(i.trigger("domready.uk.dom"),i.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&i.$win.on("load orientationchange resize",i.Utils.debounce(function(){var i=function(){return t(".uk-height-viewport").css("height",window.innerHeight),i};return i()}(),100)),i.trigger("afterready.uk.dom"),i.domready=!0,i.support.mutationobserver){var n=i.Utils.debounce(function(){requestAnimationFrame(function(){i.init(document.body)})},10);new i.support.mutationobserver(function(t){var i=!1;t.every(function(t){if("childList"!=t.type)return!0;for(var e,n=0;n<t.addedNodes.length;++n)if(e=t.addedNodes[n],e.outerHTML&&-1!==e.outerHTML.indexOf("data-uk-"))return(i=!0)&&!1;return!0}),i&&n()}).observe(document.body,{childList:!0,subtree:!0})}};return("complete"==document.readyState||"interactive"==document.readyState)&&setTimeout(e),e}()),i.$html.addClass(i.support.touch?"uk-touch":"uk-notouch"),i.support.touch){var n,o=!1,s="uk-hover",a=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";i.$html.on("mouseenter touchstart MSPointerDown pointerdown",a,function(){o&&t("."+s).removeClass(s),o=t(this).addClass(s)}).on("mouseleave touchend MSPointerUp pointerup",function(i){n=t(i.target).parents(a),o&&o.not(n).removeClass(s)})}return i}),function(t){function i(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"}function e(){c=null,d.last&&(void 0!==d.el&&d.el.trigger("longTap"),d={})}function n(){c&&clearTimeout(c),c=null}function o(){a&&clearTimeout(a),r&&clearTimeout(r),l&&clearTimeout(l),c&&clearTimeout(c),a=r=l=c=null,d={}}function s(t){return t.pointerType==t.MSPOINTER_TYPE_TOUCH&&t.isPrimary}if(!t.fn.swipeLeft){var a,r,l,c,u,d={},h=750,p="ontouchstart"in window,f=window.PointerEvent,m=p||window.DocumentTouch&&document instanceof DocumentTouch||navigator.msPointerEnabled&&navigator.msMaxTouchPoints>0||navigator.pointerEnabled&&navigator.maxTouchPoints>0;t(function(){var g,v,k,w=0,b=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),t(document).on("MSGestureEnd gestureend",function(t){var i=t.originalEvent.velocityX>1?"Right":t.originalEvent.velocityX<-1?"Left":t.originalEvent.velocityY>1?"Down":t.originalEvent.velocityY<-1?"Up":null;i&&void 0!==d.el&&(d.el.trigger("swipe"),d.el.trigger("swipe"+i))}).on("touchstart MSPointerDown pointerdown",function(i){("MSPointerDown"!=i.type||s(i.originalEvent))&&(k="MSPointerDown"==i.type||"pointerdown"==i.type?i:i.originalEvent.touches[0],g=Date.now(),v=g-(d.last||g),d.el=t("tagName"in k.target?k.target:k.target.parentNode),a&&clearTimeout(a),d.x1=k.pageX,d.y1=k.pageY,v>0&&250>=v&&(d.isDoubleTap=!0),d.last=g,c=setTimeout(e,h),i.originalEvent&&i.originalEvent.pointerId&&u&&("MSPointerDown"==i.type||"pointerdown"==i.type||"touchstart"==i.type)&&u.addPointer(i.originalEvent.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){("MSPointerMove"!=t.type||s(t.originalEvent))&&(k="MSPointerMove"==t.type||"pointermove"==t.type?t:t.originalEvent.touches[0],n(),d.x2=k.pageX,d.y2=k.pageY,w+=Math.abs(d.x1-d.x2),b+=Math.abs(d.y1-d.y2))}).on("touchend MSPointerUp pointerup",function(e){("MSPointerUp"!=e.type||s(e.originalEvent))&&(n(),d.x2&&Math.abs(d.x1-d.x2)>30||d.y2&&Math.abs(d.y1-d.y2)>30?l=setTimeout(function(){void 0!==d.el&&(d.el.trigger("swipe"),d.el.trigger("swipe"+i(d.x1,d.x2,d.y1,d.y2))),d={}},0):"last"in d&&(isNaN(w)||30>w&&30>b?r=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=o,void 0!==d.el&&d.el.trigger(i),d.isDoubleTap?(void 0!==d.el&&d.el.trigger("doubleTap"),d={}):a=setTimeout(function(){a=null,void 0!==d.el&&d.el.trigger("singleTap"),d={}},250)},0):d={},w=b=0))}).on("touchcancel MSPointerCancel pointercancel",function(t){("touchcancel"==t.type&&p&&m||!p&&"pointercancel"==t.type&&f)&&o()}),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(i){t.fn[i]=function(e){return t(this).on(i,e)}})}}(jQuery),function(t){"use strict";var i=[];t.component("stackMargin",{defaults:{cls:"uk-margin-small-top",rowfirst:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-margin]",i).each(function(){var i=t.$(this);i.data("stackMargin")||t.stackMargin(i,t.Utils.options(i.attr("data-uk-margin")))})})},init:function(){var e=this;t.$win.on("resize orientationchange",function(){var i=function(){e.process()};return t.$(function(){i(),t.$win.on("load",i)}),t.Utils.debounce(i,20)}()),this.on("display.uk.check",function(){this.element.is(":visible")&&this.process()}.bind(this)),this.options.observe&&t.domObserve(this.element,function(){e.element.is(":visible")&&e.process()}),i.push(this)},process:function(){var i=this.element.children();if(t.Utils.stackMargin(i,this.options),!this.options.rowfirst||!i.length)return this;var e={},n=!1;return i.removeClass(this.options.rowfirst).each(function(i,o){o=t.$(this),"none"!=this.style.display&&(i=o.offset().left,((e[i]=e[i]||[])&&e[i]).push(this),n=n===!1?i:Math.min(n,i))}),t.$(e[n]).addClass(this.options.rowfirst),this}}),function(){var i=[],e=function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,o=Math.floor(n*t.data("height"));t.css({height:e>i?o:t.data("height")})}};t.component("responsiveElement",{defaults:{},boot:function(){t.ready(function(i){t.$("iframe.uk-responsive-width, [data-uk-responsive]",i).each(function(){var i,e=t.$(this);e.data("responsiveElement")||(i=t.responsiveElement(e,{}))})})},init:function(){var t=this.element;t.attr("width")&&t.attr("height")&&(t.data({width:t.attr("width"),height:t.attr("height")}).on("display.uk.check",function(){e(t)}),e(t),i.push(t))}}),t.$win.on("resize load",t.Utils.debounce(function(){i.forEach(function(t){e(t)})},15))}(),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"uk-margin-small-top"},e),i=t.$(i).removeClass(e.cls);var n=!1;i.each(function(i,e,o,s){s=t.$(this),"none"!=s.css("display")&&(i=s.offset(),e=s.outerHeight(),o=i.top+e,s.data({ukMarginPos:o,ukMarginTop:i.top}),(n===!1||i.top<n.top)&&(n={top:i.top,left:i.left,pos:o}))}).each(function(i){i=t.$(this),"none"!=i.css("display")&&i.data("ukMarginTop")>n.top&&i.data("ukMarginPos")>n.pos&&i.addClass(e.cls)})},t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each(function(){e=Math.max(e,t.$(this).outerHeight())}).each(function(){var i=t.$(this),n=e-("border-box"==i.css("box-sizing")?0:i.outerHeight()-i.height());i.css("min-height",n+"px")})}};e.row?(i.first().width(),setTimeout(function(){var e=!1,o=[];i.each(function(){var i=t.$(this),s=i.offset().top;s!=e&&o.length&&(n(t.$(o)),o=[],s=i.offset().top),o.push(i),e=s}),o.length&&n(t.$(o))},0)):n(i)},function(i){t.Utils.inlineSvg=function(e,n){t.$(e||'img[src$=".svg"]',n||document).each(function(){var e=t.$(this),n=e.attr("src");if(!i[n]){var o=t.$.Deferred();t.$.get(n,{nc:Math.random()},function(i){o.resolve(t.$(i).find("svg"))}),i[n]=o.promise()}i[n].then(function(i){var n=t.$(i).clone();e.attr("id")&&n.attr("id",e.attr("id")),e.attr("class")&&n.attr("class",e.attr("class")),e.attr("style")&&n.attr("style",e.attr("style")),e.attr("width")&&(n.attr("width",e.attr("width")),e.attr("height")||n.removeAttr("height")),e.attr("height")&&(n.attr("height",e.attr("height")),e.attr("width")||n.removeAttr("width")),e.replaceWith(n)})})},t.ready(function(i){t.Utils.inlineSvg("[data-uk-svg]",i)})}({}),t.Utils.getCssVar=function(t){var i,e=document.documentElement,n=e.appendChild(document.createElement("div"));n.classList.add("var-"+t);try{i=JSON.parse(i=getComputedStyle(n,":before").content.replace(/^["'](.*)["']$/,"$1"))}catch(o){i=void 0}return e.removeChild(n),i}}(UIkit2),function(t){"use strict";function i(i,e){e=t.$.extend({duration:1e3,transition:"easeOutExpo",offset:0,complete:function(){}},e);var n=i.offset().top-e.offset,o=t.$doc.height(),s=window.innerHeight;n+s>o&&(n=o-s),t.$("html,body").stop().animate({scrollTop:n},e.duration,e.transition).promise().done(e.complete)}t.component("smoothScroll",{boot:function(){t.$html.on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var i=t.$(this);if(!i.data("smoothScroll")){{t.smoothScroll(i,t.Utils.options(i.attr("data-uk-smooth-scroll")))}i.trigger("click")}return!1})},init:function(){var e=this;this.on("click",function(n){n.preventDefault(),i(t.$(this.hash).length?t.$(this.hash):t.$("body"),e.options)})}}),t.Utils.scrollToElement=i,t.$.easing.easeOutExpo||(t.$.easing.easeOutExpo=function(t,i,e,n,o){return i==o?e+n:n*(-Math.pow(2,-10*i/o)+1)+e})}(UIkit2),function(t){"use strict";var i=t.$win,e=t.$doc,n=[],o=function(){for(var t=0;t<n.length;t++)window.requestAnimationFrame.apply(window,[n[t].check])};t.component("scrollspy",{defaults:{target:!1,cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},boot:function(){e.on("scrolling.uk.document",o),i.on("load resize orientationchange",t.Utils.debounce(o,50)),t.ready(function(i){t.$("[data-uk-scrollspy]",i).each(function(){var i=t.$(this);if(!i.data("scrollspy")){t.scrollspy(i,t.Utils.options(i.attr("data-uk-scrollspy")))}})})},init:function(){var i,e=this,o=this.options.cls.split(/,/),s=function(){var n=e.options.target?e.element.find(e.options.target):e.element,s=1===n.length?1:0,a=0;n.each(function(){var n=t.$(this),r=n.data("inviewstate"),l=t.Utils.isInView(n,e.options),c=n.attr("data-uk-scrollspy-cls")||o[a].trim();!l||r||n.data("scrollspy-idle")||(i||(n.addClass(e.options.initcls),e.offset=n.offset(),i=!0,n.trigger("init.uk.scrollspy")),n.data("scrollspy-idle",setTimeout(function(){n.addClass("uk-scrollspy-inview").toggleClass(c).width(),n.trigger("inview.uk.scrollspy"),n.data("scrollspy-idle",!1),n.data("inviewstate",!0)},e.options.delay*s)),s++),!l&&r&&e.options.repeat&&(n.data("scrollspy-idle")&&(clearTimeout(n.data("scrollspy-idle")),n.data("scrollspy-idle",!1)),n.removeClass("uk-scrollspy-inview").toggleClass(c),n.data("inviewstate",!1),n.trigger("outview.uk.scrollspy")),a=o[a+1]?a+1:0})};s(),this.check=s,n.push(this)}});var s=[],a=function(){for(var t=0;t<s.length;t++)window.requestAnimationFrame.apply(window,[s[t].check])};t.component("scrollspynav",{defaults:{cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},boot:function(){e.on("scrolling.uk.document",a),i.on("resize orientationchange",t.Utils.debounce(a,50)),t.ready(function(i){t.$("[data-uk-scrollspy-nav]",i).each(function(){var i=t.$(this);if(!i.data("scrollspynav")){t.scrollspynav(i,t.Utils.options(i.attr("data-uk-scrollspy-nav")))}})})},init:function(){var e,n=[],o=this.find("a[href^='#']").each(function(){"#"!==this.getAttribute("href").trim()&&n.push(this.getAttribute("href"))}),a=t.$(n.join(",")),r=this.options.cls,l=this.options.closest||this.options.closest,c=this,u=function(){e=[];for(var n=0;n<a.length;n++)t.Utils.isInView(a.eq(n),c.options)&&e.push(a.eq(n));if(e.length){var s,u=i.scrollTop(),d=function(){for(var t=0;t<e.length;t++)if(e[t].offset().top-c.options.topoffset>=u)return e[t]}();if(!d)return;c.options.closest?(o.blur().closest(l).removeClass(r),s=o.filter("a[href='#"+d.attr("id")+"']").closest(l).addClass(r)):s=o.removeClass(r).filter("a[href='#"+d.attr("id")+"']").addClass(r),c.element.trigger("inview.uk.scrollspynav",[d,s])}};this.options.smoothscroll&&t.smoothScroll&&o.each(function(){t.smoothScroll(this,c.options.smoothscroll)}),u(),this.element.data("scrollspynav",this),this.check=u,s.push(this)}})}(UIkit2),function(t){"use strict";var i=[];t.component("toggle",{defaults:{target:!1,cls:"uk-hidden",animation:!1,duration:200},boot:function(){t.ready(function(e){t.$("[data-uk-toggle]",e).each(function(){var i=t.$(this);if(!i.data("toggle")){t.toggle(i,t.Utils.options(i.attr("data-uk-toggle")))}}),setTimeout(function(){i.forEach(function(t){t.getToggles()})},0)})},init:function(){var t=this;this.aria=-1!==this.options.cls.indexOf("uk-hidden"),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle()}),i.push(this)},toggle:function(){if(this.getToggles(),this.totoggle.length){if(this.options.animation&&t.support.animation){var i=this,e=this.options.animation.split(",");1==e.length&&(e[1]=e[0]),e[0]=e[0].trim(),e[1]=e[1].trim(),this.totoggle.css("animation-duration",this.options.duration+"ms"),this.totoggle.each(function(){var n=t.$(this);n.hasClass(i.options.cls)?(n.toggleClass(i.options.cls),t.Utils.animate(n,e[0]).then(function(){n.css("animation-duration",""),t.Utils.checkDisplay(n)})):t.Utils.animate(this,e[1]+" uk-animation-reverse").then(function(){n.toggleClass(i.options.cls).css("animation-duration",""),t.Utils.checkDisplay(n)})})}else this.totoggle.toggleClass(this.options.cls),t.Utils.checkDisplay(this.totoggle);this.updateAria()}},getToggles:function(){this.totoggle=this.options.target?t.$(this.options.target):[],this.updateAria()},updateAria:function(){this.aria&&this.totoggle.length&&this.totoggle.not("[aria-hidden]").each(function(){t.$(this).attr("aria-hidden",t.$(this).hasClass("uk-hidden"))})}})}(UIkit2),function(t){"use strict";t.component("alert",{defaults:{fade:!0,duration:200,trigger:".uk-alert-close"},boot:function(){t.$html.on("click.alert.uikit","[data-uk-alert]",function(i){var e=t.$(this);if(!e.data("alert")){var n=t.alert(e,t.Utils.options(e.attr("data-uk-alert")));t.$(i.target).is(n.options.trigger)&&(i.preventDefault(),n.close())}})},init:function(){var t=this;this.on("click",this.options.trigger,function(i){i.preventDefault(),t.close()})},close:function(){var t=this.trigger("close.uk.alert"),i=function(){this.trigger("closed.uk.alert").remove()}.bind(this);this.options.fade?t.css("overflow","hidden").css("max-height",t.height()).animate({height:0,opacity:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0},this.options.duration,i):i()}})}(UIkit2),function(t){"use strict";t.component("buttonRadio",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttonradio.uikit","[data-uk-button-radio]",function(i){var e=t.$(this);if(!e.data("buttonRadio")){var n=t.buttonRadio(e,t.Utils.options(e.attr("data-uk-button-radio"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(),n.addClass(i.options.activeClass),i.find(i.options.target).not(n).attr("aria-checked","false"),n.attr("aria-checked","true"),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("buttonCheckbox",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var e=t.$(this);if(!e.data("buttonCheckbox")){var n=t.buttonCheckbox(e,t.Utils.options(e.attr("data-uk-button-checkbox"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),n.toggleClass(i.options.activeClass).blur(),n.attr("aria-checked",n.hasClass(i.options.activeClass)),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("button",{defaults:{},boot:function(){t.$html.on("click.button.uikit","[data-uk-button]",function(){var i=t.$(this);if(!i.data("button")){{t.button(i,t.Utils.options(i.attr("data-uk-button")))}i.trigger("click")}})},init:function(){var t=this;this.element.attr("aria-pressed",this.element.hasClass("uk-active")),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle(),t.trigger("change.uk.button",[t.element.blur().hasClass("uk-active")])})},toggle:function(){this.element.toggleClass("uk-active"),this.element.attr("aria-pressed",this.element.hasClass("uk-active"))}})}(UIkit2),function(t){"use strict";function i(i,e,n,o){if(i=t.$(i),e=t.$(e),n=n||window.innerWidth,o=o||i.offset(),e.length){var s=e.outerWidth();if(i.css("min-width",s),"right"==t.langdirection){var a=n-(e.offset().left+s),r=n-(i.offset().left+i.outerWidth());i.css("margin-right",a-r)}else i.css("margin-left",e.offset().left-o.left)}}var e,n=!1,o={x:{"bottom-left":"bottom-right","bottom-right":"bottom-left","bottom-center":"bottom-center","top-left":"top-right","top-right":"top-left","top-center":"top-center","left-top":"right-top","left-bottom":"right-bottom","left-center":"right-center","right-top":"left-top","right-bottom":"left-bottom","right-center":"left-center"},y:{"bottom-left":"top-left","bottom-right":"top-right","bottom-center":"top-center","top-left":"bottom-left","top-right":"bottom-right","top-center":"bottom-center","left-top":"left-bottom","left-bottom":"left-top","left-center":"left-center","right-top":"right-bottom","right-bottom":"right-top","right-center":"right-center"},xy:{"bottom-left":"top-right","bottom-right":"top-left","bottom-center":"top-center","top-left":"bottom-right","top-right":"bottom-left","top-center":"bottom-center","left-top":"right-bottom","left-bottom":"right-top","left-center":"right-center","right-top":"left-bottom","right-bottom":"left-top","right-center":"left-center"}};t.component("dropdown",{defaults:{mode:"hover",pos:"bottom-left",offset:0,remaintime:800,justify:!1,boundary:t.$win,delay:0,dropdownSelector:".uk-dropdown,.uk-dropdown-blank",hoverDelayIdle:250,preventflip:!1},remainIdle:!1,boot:function(){var i=t.support.touch?"click":"mouseenter";t.$html.on(i+".dropdown.uikit focus pointerdown","[data-uk-dropdown]",function(e){var n=t.$(this);if(!n.data("dropdown")){var o=t.dropdown(n,t.Utils.options(n.attr("data-uk-dropdown")));("click"==e.type||"mouseenter"==e.type&&"hover"==o.options.mode)&&o.element.trigger(i),o.dropdown.length&&e.preventDefault()}})},init:function(){var i=this;this.dropdown=this.find(this.options.dropdownSelector),this.offsetParent=this.dropdown.parents().filter(function(){return-1!==t.$.inArray(t.$(this).css("position"),["relative","fixed","absolute"])}).slice(0,1),this.offsetParent.length||(this.offsetParent=this.element),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t.$(this.options.justify):!1,this.boundary=t.$(this.options.boundary),this.boundary.length||(this.boundary=t.$win),this.dropdown.hasClass("uk-dropdown-up")&&(this.options.pos="top-left"),this.dropdown.hasClass("uk-dropdown-flip")&&(this.options.pos=this.options.pos.replace("left","right")),this.dropdown.hasClass("uk-dropdown-center")&&(this.options.pos=this.options.pos.replace(/(left|right)/,"center")),this.element.attr("aria-haspopup","true"),this.element.attr("aria-expanded",this.element.hasClass("uk-open")),this.dropdown.attr("aria-hidden","true"),"click"==this.options.mode||t.support.touch?this.on("click.uk.dropdown",function(e){var n=t.$(e.target);n.parents(i.options.dropdownSelector).length||((n.is("a[href='#']")||n.parent().is("a[href='#']")||i.dropdown.length&&!i.dropdown.is(":visible"))&&e.preventDefault(),n.blur()),i.element.hasClass("uk-open")?(!i.dropdown.find(e.target).length||n.is(".uk-dropdown-close")||n.parents(".uk-dropdown-close").length)&&i.hide():i.show()}):this.on("mouseenter",function(){i.trigger("pointerenter.uk.dropdown",[i]),i.remainIdle&&clearTimeout(i.remainIdle),e&&clearTimeout(e),n&&n==i||(e=n&&n!=i?setTimeout(function(){e=setTimeout(i.show.bind(i),i.options.delay)},i.options.hoverDelayIdle):setTimeout(i.show.bind(i),i.options.delay))}).on("mouseleave",function(){e&&clearTimeout(e),i.remainIdle=setTimeout(function(){n&&n==i&&i.hide()},i.options.remaintime),i.trigger("pointerleave.uk.dropdown",[i])}).on("click",function(e){var o=t.$(e.target);return i.remainIdle&&clearTimeout(i.remainIdle),n&&n==i?((!i.dropdown.find(e.target).length||o.is(".uk-dropdown-close")||o.parents(".uk-dropdown-close").length)&&i.hide(),void 0):((o.is("a[href='#']")||o.parent().is("a[href='#']"))&&e.preventDefault(),i.show(),void 0)})},show:function(){t.$html.off("click.outer.dropdown"),n&&n!=this&&n.hide(!0),e&&clearTimeout(e),this.trigger("beforeshow.uk.dropdown",[this]),this.checkDimensions(),this.element.addClass("uk-open"),this.element.attr("aria-expanded","true"),this.dropdown.attr("aria-hidden","false"),this.trigger("show.uk.dropdown",[this]),t.Utils.checkDisplay(this.dropdown,!0),t.Utils.focus(this.dropdown),n=this,this.registerOuterClick()},hide:function(t){this.trigger("beforehide.uk.dropdown",[this,t]),this.element.removeClass("uk-open"),this.remainIdle&&clearTimeout(this.remainIdle),this.remainIdle=!1,this.element.attr("aria-expanded","false"),this.dropdown.attr("aria-hidden","true"),this.trigger("hide.uk.dropdown",[this,t]),n==this&&(n=!1)},registerOuterClick:function(){var i=this;t.$html.off("click.outer.dropdown"),setTimeout(function(){t.$html.on("click.outer.dropdown",function(o){e&&clearTimeout(e);t.$(o.target);n!=i||i.element.find(o.target).length||(i.hide(!0),t.$html.off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip").css({topLeft:"",left:"",marginLeft:"",marginRight:""}),this.justified&&this.justified.length&&this.dropdown.css("min-width","");var e,n=t.$.extend({},this.offsetParent.offset(),{width:this.offsetParent[0].offsetWidth,height:this.offsetParent[0].offsetHeight}),s=this.options.offset,a=this.dropdown,r=(a.show().offset()||{left:0,top:0},a.outerWidth()),l=a.outerHeight(),c=this.boundary.width(),u=(this.boundary[0]!==window&&this.boundary.offset()?this.boundary.offset():{top:0,left:0},this.options.pos),d={"bottom-left":{top:0+n.height+s,left:0},"bottom-right":{top:0+n.height+s,left:0+n.width-r},"bottom-center":{top:0+n.height+s,left:0+n.width/2-r/2},"top-left":{top:0-l-s,left:0},"top-right":{top:0-l-s,left:0+n.width-r},"top-center":{top:0-l-s,left:0+n.width/2-r/2},"left-top":{top:0,left:0-r-s},"left-bottom":{top:0+n.height-l,left:0-r-s},"left-center":{top:0+n.height/2-l/2,left:0-r-s},"right-top":{top:0,left:0+n.width+s},"right-bottom":{top:0+n.height-l,left:0+n.width+s},"right-center":{top:0+n.height/2-l/2,left:0+n.width+s}},h={};
if(e=u.split("-"),h=d[u]?d[u]:d["bottom-left"],this.justified&&this.justified.length)i(a.css({left:0}),this.justified,c);else if(this.options.preventflip!==!0){var p;switch(this.checkBoundary(n.left+h.left,n.top+h.top,r,l,c)){case"x":"x"!==this.options.preventflip&&(p=o.x[u]||"right-top");break;case"y":"y"!==this.options.preventflip&&(p=o.y[u]||"top-left");break;case"xy":this.options.preventflip||(p=o.xy[u]||"right-bottom")}p&&(e=p.split("-"),h=d[p]?d[p]:d["bottom-left"],a.addClass("uk-dropdown-autoflip"),this.checkBoundary(n.left+h.left,n.top+h.top,r,l,c)&&(e=u.split("-"),h=d[u]?d[u]:d["bottom-left"]))}r>c&&(a.addClass("uk-dropdown-stack"),this.trigger("stack.uk.dropdown",[this])),a.css(h).css("display","").addClass("uk-dropdown-"+e[0])}},checkBoundary:function(i,e,n,o,s){var a="";return(0>i||i-t.$win.scrollLeft()+n>s)&&(a+="x"),(e-t.$win.scrollTop()<0||e-t.$win.scrollTop()+o>window.innerHeight)&&(a+="y"),a}}),t.component("dropdownOverlay",{defaults:{justify:!1,cls:"",duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-dropdown-overlay]",i).each(function(){var i=t.$(this);i.data("dropdownOverlay")||t.dropdownOverlay(i,t.Utils.options(i.attr("data-uk-dropdown-overlay")))})})},init:function(){var e=this;this.justified=this.options.justify?t.$(this.options.justify):!1,this.overlay=this.element.find("uk-dropdown-overlay"),this.overlay.length||(this.overlay=t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)),this.overlay.addClass(this.options.cls),this.on({"beforeshow.uk.dropdown":function(t,n){e.dropdown=n,e.justified&&e.justified.length&&i(e.overlay.css({display:"block",marginLeft:"",marginRight:""}),e.justified,e.justified.outerWidth())},"show.uk.dropdown":function(){var i=e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"),e.overlay.stop().css("display","block").animate({height:i},e.options.duration,function(){e.dropdown.dropdown.css("visibility",""),e.dropdown.element.addClass("uk-open"),t.Utils.checkDisplay(e.dropdown.dropdown,!0)}),e.pointerleave=!1},"hide.uk.dropdown":function(){e.overlay.stop().animate({height:0},e.options.duration)},"pointerenter.uk.dropdown":function(){clearTimeout(e.remainIdle)},"pointerleave.uk.dropdown":function(){e.pointerleave=!0}}),this.overlay.on({mouseenter:function(){e.remainIdle&&(clearTimeout(e.dropdown.remainIdle),clearTimeout(e.remainIdle))},mouseleave:function(){e.pointerleave&&n&&(e.remainIdle=setTimeout(function(){n&&n.hide()},n.options.remaintime))}})}})}(UIkit2),function(t){"use strict";var i=[];t.component("gridMatchHeight",{defaults:{target:!1,row:!0,ignorestacked:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-grid-match]",i).each(function(){var i,e=t.$(this);e.data("gridMatchHeight")||(i=t.gridMatchHeight(e,t.Utils.options(e.attr("data-uk-grid-match"))))})})},init:function(){var e=this;this.columns=this.element.children(),this.elements=this.options.target?this.find(this.options.target):this.columns,this.columns.length&&(t.$win.on("load resize orientationchange",function(){var i=function(){e.element.is(":visible")&&e.match()};return t.$(function(){i()}),t.Utils.debounce(i,50)}()),this.options.observe&&t.domObserve(this.element,function(){e.element.is(":visible")&&e.match()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.match()}.bind(this)),i.push(this))},match:function(){var i=this.columns.filter(":visible:first");if(i.length){var e=Math.ceil(100*parseFloat(i.css("width"))/parseFloat(i.parent().css("width")))>=100;return e&&!this.options.ignorestacked?this.revert():t.Utils.matchHeights(this.elements,this.options),this}},revert:function(){return this.elements.css("min-height",""),this}}),t.component("gridMargin",{defaults:{cls:"uk-grid-margin",rowfirst:"uk-row-first"},boot:function(){t.ready(function(i){t.$("[data-uk-grid-margin]",i).each(function(){var i,e=t.$(this);e.data("gridMargin")||(i=t.gridMargin(e,t.Utils.options(e.attr("data-uk-grid-margin"))))})})},init:function(){t.stackMargin(this.element,this.options)}})}(UIkit2),function(t){"use strict";function i(i,e){return e?("object"==typeof i?(i=i instanceof jQuery?i:t.$(i),i.parent().length&&(e.persist=i,e.persist.data("modalPersistParent",i.parent()))):i="string"==typeof i||"number"==typeof i?t.$("<div></div>").html(i):t.$("<div></div>").html("UIkit2.modal Error: Unsupported data type: "+typeof i),i.appendTo(e.element.find(".uk-modal-dialog")),e):void 0}var e,n=!1,o=0,s=t.$html;t.$win.on("resize orientationchange",t.Utils.debounce(function(){t.$(".uk-modal.uk-open").each(function(){return t.$(this).data("modal")&&t.$(this).data("modal").resize()})},150)),t.component("modal",{defaults:{keyboard:!0,bgclose:!0,minScrollHeight:150,center:!1,modal:!0},scrollable:!1,transition:!1,hasTransitioned:!0,init:function(){if(e||(e=t.$("body")),this.element.length){var i=this;this.paddingdir="padding-"+("left"==t.langdirection?"right":"left"),this.dialog=this.find(".uk-modal-dialog"),this.active=!1,this.element.attr("aria-hidden",this.element.hasClass("uk-open")),this.on("click",".uk-modal-close",function(e){e.preventDefault();var n=t.$(e.target).closest(".uk-modal");n[0]===i.element[0]&&i.hide()}).on("click",function(e){var n=t.$(e.target);n[0]==i.element[0]&&i.options.bgclose&&i.hide()}),t.domObserve(this.element,function(){i.resize()})}},toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(this.element.length){var i=this;if(!this.isActive())return this.options.modal&&n&&n.hide(!0),this.element.removeClass("uk-open").show(),this.resize(!0),this.options.modal&&(n=this),this.active=!0,o++,t.support.transition?(this.hasTransitioned=!1,this.element.one(t.support.transition.end,function(){i.hasTransitioned=!0,t.Utils.focus(i.dialog,"a[href]")}).addClass("uk-open")):(this.element.addClass("uk-open"),t.Utils.focus(this.dialog,"a[href]")),s.addClass("uk-modal-page").height(),this.element.attr("aria-hidden","false"),this.element.trigger("show.uk.modal"),t.Utils.checkDisplay(this.dialog,!0),this}},hide:function(i){if(!i&&t.support.transition&&this.hasTransitioned){var e=this;this.one(t.support.transition.end,function(){e._hide()}).removeClass("uk-open")}else this._hide();return this},resize:function(t){if(this.isActive()||t){var i=e.width();if(this.scrollbarwidth=window.innerWidth-i,e.css(this.paddingdir,this.scrollbarwidth),this.element.css("overflow-y",this.scrollbarwidth?"scroll":"auto"),!this.updateScrollable()&&this.options.center){var n=this.dialog.outerHeight(),o=parseInt(this.dialog.css("margin-top"),10)+parseInt(this.dialog.css("margin-bottom"),10);n+o<window.innerHeight?this.dialog.css({top:window.innerHeight/2-n/2-o}):this.dialog.css({top:""})}}},updateScrollable:function(){var t=this.dialog.find(".uk-overflow-container:visible:first");if(t.length){t.css("height",0);var i=Math.abs(parseInt(this.dialog.css("margin-top"),10)),e=this.dialog.outerHeight(),n=window.innerHeight,o=n-2*(20>i?20:i)-e;return t.css({maxHeight:o<this.options.minScrollHeight?"":o,height:""}),!0}return!1},_hide:function(){this.active=!1,o>0?o--:o=0,this.element.hide().removeClass("uk-open"),this.element.attr("aria-hidden","true"),o||(s.removeClass("uk-modal-page"),e.css(this.paddingdir,"")),n===this&&(n=!1),this.trigger("hide.uk.modal")},isActive:function(){return this.element.hasClass("uk-open")}}),t.component("modalTrigger",{boot:function(){t.$html.on("click.modal.uikit","[data-uk-modal]",function(i){var e=t.$(this);if(e.is("a")&&i.preventDefault(),!e.data("modalTrigger")){var n=t.modalTrigger(e,t.Utils.options(e.attr("data-uk-modal")));n.show()}}),t.$html.on("keydown.modal.uikit",function(t){n&&27===t.keyCode&&n.options.keyboard&&(t.preventDefault(),n.hide())})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.modal=t.modal(this.options.target,this.options),this.on("click",function(t){t.preventDefault(),i.show()}),this.proxy(this.modal,"show hide isActive")}}),t.modal.dialog=function(e,n){var o=t.modal(t.$(t.modal.dialog.template).appendTo("body"),n);return o.on("hide.uk.modal",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),i(e,o),o},t.modal.dialog.template='<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>',t.modal.alert=function(i,e){e=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},e);var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+e.labels.Ok+"</button></div>"].join(""),e);return n.on("show.uk.modal",function(){setTimeout(function(){n.element.find("button:first").focus()},50)}),n.show()},t.modal.confirm=function(i,e,n){var o=arguments.length>1&&arguments[arguments.length-1]?arguments[arguments.length-1]:{};e=t.$.isFunction(e)?e:function(){},n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},t.$.isFunction(o)?{}:o);var s=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+o.labels.Ok+"</button></div>"].join(""),o);return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click",function(){t.$(this).is(".js-modal-confirm")?e():n(),s.hide()}),s.on("show.uk.modal",function(){setTimeout(function(){s.element.find(".js-modal-confirm").focus()},50)}),s.show()},t.modal.prompt=function(i,e,n,o){n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},o);var s=t.modal.dialog([i?'<div class="uk-modal-content uk-form">'+String(i)+"</div>":"",'<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>','<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+o.labels.Ok+"</button></div>"].join(""),o),a=s.element.find("input[type='text']").val(e||"").on("keyup",function(t){13==t.keyCode&&s.element.find(".js-modal-ok").trigger("click")});return s.element.find(".js-modal-ok").on("click",function(){n(a.val())!==!1&&s.hide()}),s.show()},t.modal.blockUI=function(i,e){var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i||'<div class="uk-text-center">...</div>')+"</div>"].join(""),t.$.extend({bgclose:!1,keyboard:!1,modal:!1},e));return n.content=n.element.find(".uk-modal-content:first"),n.show()},t.modal.labels={Ok:"Ok",Cancel:"Cancel"}}(UIkit2),function(t){"use strict";function i(i){var e=t.$(i),n="auto";if(e.is(":visible"))n=e.outerHeight();else{var o={position:e.css("position"),visibility:e.css("visibility"),display:e.css("display")};n=e.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),e.css(o)}return n}t.component("nav",{defaults:{toggle:'>li.uk-parent > a[href="#"]',lists:">li.uk-parent > ul",multiple:!1},boot:function(){t.ready(function(i){t.$("[data-uk-nav]",i).each(function(){var i=t.$(this);if(!i.data("nav")){t.nav(i,t.Utils.options(i.attr("data-uk-nav")))}})})},init:function(){var i=this;this.on("click.uk.nav",this.options.toggle,function(e){e.preventDefault();var n=t.$(this);i.open(n.parent()[0]==i.element[0]?n:n.parent("li"))}),this.update(),t.domObserve(this.element,function(){i.element.find(i.options.lists).not("[role]").length&&i.update()})},update:function(){var i=this;this.find(this.options.lists).each(function(){var e=t.$(this).attr("role","menu"),n=e.closest("li"),o=n.hasClass("uk-active");n.data("list-container")||(e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),n.data("list-container",e.parent()[o?"removeClass":"addClass"]("uk-hidden"))),n.attr("aria-expanded",n.hasClass("uk-open")),o&&i.open(n,!0)})},open:function(e,n){var o=this,s=this.element,a=t.$(e),r=a.data("list-container");this.options.multiple||s.children(".uk-open").not(e).each(function(){var i=t.$(this);i.data("list-container")&&i.data("list-container").stop().animate({height:0},function(){t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")})}),a.toggleClass("uk-open"),a.attr("aria-expanded",a.hasClass("uk-open")),r&&(a.hasClass("uk-open")&&r.removeClass("uk-hidden"),n?(r.stop().height(a.hasClass("uk-open")?"auto":0),a.hasClass("uk-open")||r.addClass("uk-hidden"),this.trigger("display.uk.check")):r.stop().animate({height:a.hasClass("uk-open")?i(r.find("ul:first")):0},function(){a.hasClass("uk-open")?r.css("height",""):r.addClass("uk-hidden"),o.trigger("display.uk.check")}))}})}(UIkit2),function(t){"use strict";var i={x:window.scrollX,y:window.scrollY},e=(t.$win,t.$doc,t.$html),n={show:function(n,o){if(n=t.$(n),n.length){o=t.$.extend({mode:"push"},o);var s=t.$("body"),a=n.find(".uk-offcanvas-bar:first"),r="right"==t.langdirection,l=a.hasClass("uk-offcanvas-bar-flip")?-1:1,c=l*(r?-1:1),u=window.innerWidth-s.width();i={x:window.pageXOffset,y:window.pageYOffset},a.attr("mode",o.mode),n.addClass("uk-active"),s.css({width:window.innerWidth-u,height:window.innerHeight}).addClass("uk-offcanvas-page"),("push"==o.mode||"reveal"==o.mode)&&s.css(r?"margin-right":"margin-left",(r?-1:1)*a.outerWidth()*c),"reveal"==o.mode&&a.css("clip","rect(0, "+a.outerWidth()+"px, 100vh, 0)"),e.css("margin-top",-1*i.y).width(),a.addClass("uk-offcanvas-bar-show"),this._initElement(n),a.trigger("show.uk.offcanvas",[n,a]),n.attr("aria-hidden","false")}},hide:function(n){var o=t.$("body"),s=t.$(".uk-offcanvas.uk-active"),a="right"==t.langdirection,r=s.find(".uk-offcanvas-bar:first"),l=function(){o.removeClass("uk-offcanvas-page").css({width:"",height:"",marginLeft:"",marginRight:""}),s.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),e.css("margin-top",""),window.scrollTo(i.x,i.y),r.trigger("hide.uk.offcanvas",[s,r]),s.attr("aria-hidden","true")};s.length&&("none"==r.attr("mode")&&(n=!0),t.support.transition&&!n?(o.one(t.support.transition.end,function(){l()}).css(a?"margin-right":"margin-left",""),"reveal"==r.attr("mode")&&r.css("clip",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},0)):l())},_initElement:function(i){i.data("OffcanvasInit")||(i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas",function(i){var e=t.$(i.target);if(i.type.match(/swipe/)){if(e.parents(".uk-offcanvas-bar:first").length)return}else if(!e.hasClass("uk-offcanvas-close")){if(e.hasClass("uk-offcanvas-bar"))return;if(e.parents(".uk-offcanvas-bar:first").length)return}i.stopImmediatePropagation(),n.hide()}),i.on("click",'a[href*="#"]',function(){var i=t.$(this),e=i.attr("href");"#"!=e&&(t.$doc.one("hide.uk.offcanvas",function(){var n;try{n=t.$(i[0].hash)}catch(o){n=""}n.length||(n=t.$('[name="'+i[0].hash.replace("#","")+'"]')),n.length&&t.Utils.scrollToElement?t.Utils.scrollToElement(n,t.Utils.options(i.attr("data-uk-smooth-scroll")||"{}")):window.location.href=e}),n.hide())}),i.data("OffcanvasInit",!0))}};t.component("offcanvasTrigger",{boot:function(){e.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(i){i.preventDefault();var e=t.$(this);if(!e.data("offcanvasTrigger")){{t.offcanvasTrigger(e,t.Utils.options(e.attr("data-uk-offcanvas")))}e.trigger("click")}}),e.on("keydown.uk.offcanvas",function(t){27===t.keyCode&&n.hide()})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1,mode:"push"},this.options),this.on("click",function(t){t.preventDefault(),n.show(i.options.target,i.options)})}}),t.offcanvas=n}(UIkit2),function(t){"use strict";function i(i,e,n){var o,s=t.$.Deferred(),a=i,r=i;return n[0]===e[0]?(s.resolve(),s.promise()):("object"==typeof i&&(a=i[0],r=i[1]||i[0]),t.$body.css("overflow-x","hidden"),o=function(){e&&e.hide().removeClass("uk-active "+r+" uk-animation-reverse"),n.addClass(a).one(t.support.animation.end,function(){setTimeout(function(){n.removeClass(""+a).css({opacity:"",display:""})},0),s.resolve(),t.$body.css("overflow-x",""),e&&e.css({opacity:"",display:""})}.bind(this)).show()},n.css("animation-duration",this.options.duration+"ms"),e&&e.length?(e.css("animation-duration",this.options.duration+"ms"),e.css("display","none").addClass(r+" uk-animation-reverse").one(t.support.animation.end,function(){o()}.bind(this)).css("display","")):(n.addClass("uk-active"),o()),s.promise())}var e;t.component("switcher",{defaults:{connect:!1,toggle:">*",active:0,animation:!1,duration:200,swiping:!0},animating:!1,boot:function(){t.ready(function(i){t.$("[data-uk-switcher]",i).each(function(){var i=t.$(this);if(!i.data("switcher")){t.switcher(i,t.Utils.options(i.attr("data-uk-switcher")))}})})},init:function(){var i=this;this.on("click.uk.switcher",this.options.toggle,function(t){t.preventDefault(),i.show(this)}),this.options.connect&&(this.connect=t.$(this.options.connect),this.connect.length&&(this.connect.on("click.uk.switcher","[data-uk-switcher-item]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-switcher-item");if(i.index!=n)switch(n){case"next":case"previous":i.show(i.index+("next"==n?1:-1));break;default:i.show(parseInt(n,10))}}),this.options.swiping&&this.connect.on("swipeRight swipeLeft",function(t){t.preventDefault(),window.getSelection().toString()||i.show(i.index+("swipeLeft"==t.type?1:-1))}),this.update()))},update:function(){this.connect.children().removeClass("uk-active").attr("aria-hidden","true");var t=this.find(this.options.toggle),i=t.filter(".uk-active");if(i.length)this.show(i,!1);else{if(this.options.active===!1)return;i=t.eq(this.options.active),this.show(i.length?i:t.eq(0),!1)}t.not(i).attr("aria-expanded","false"),i.attr("aria-expanded","true")},show:function(n,o){if(!this.animating){var s=this.find(this.options.toggle);isNaN(n)?n=t.$(n):(n=0>n?s.length-1:n,n=s.eq(s[n]?n:0));var a=this,r=t.$(n),l=e[this.options.animation]||function(t,n){if(!a.options.animation)return e.none.apply(a);var o=a.options.animation.split(",");return 1==o.length&&(o[1]=o[0]),o[0]=o[0].trim(),o[1]=o[1].trim(),i.apply(a,[o,t,n])};o!==!1&&t.support.animation||(l=e.none),r.hasClass("uk-disabled")||(s.attr("aria-expanded","false"),r.attr("aria-expanded","true"),s.filter(".uk-active").removeClass("uk-active"),r.addClass("uk-active"),this.options.connect&&this.connect.length&&(this.index=this.find(this.options.toggle).index(r),-1==this.index&&(this.index=0),this.connect.each(function(){var i=t.$(this),e=t.$(i.children()),n=t.$(e.filter(".uk-active")),o=t.$(e.eq(a.index));a.animating=!0,l.apply(a,[n,o]).then(function(){n.removeClass("uk-active"),o.addClass("uk-active"),n.attr("aria-hidden","true"),o.attr("aria-hidden","false"),t.Utils.checkDisplay(o,!0),a.animating=!1})})),this.trigger("show.uk.switcher",[r]))}}}),e={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e){var n=["uk-animation-slide-top","uk-animation-slide-bottom"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},"slide-left":function(t,e){return i.apply(this,["uk-animation-slide-left",t,e])},"slide-right":function(t,e){return i.apply(this,["uk-animation-slide-right",t,e])},"slide-horizontal":function(t,e){var n=["uk-animation-slide-right","uk-animation-slide-left"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.switcher.animations=e}(UIkit2),function(t){"use strict";t.component("tab",{defaults:{target:">li:not(.uk-tab-responsive, .uk-disabled)",connect:!1,active:0,animation:!1,duration:200,swiping:!0},boot:function(){t.ready(function(i){t.$("[data-uk-tab]",i).each(function(){var i=t.$(this);if(!i.data("tab")){t.tab(i,t.Utils.options(i.attr("data-uk-tab")))}})})},init:function(){var i=this;this.current=!1,this.on("click.uk.tab",this.options.target,function(e){if(e.preventDefault(),!i.switcher||!i.switcher.animating){var n=i.find(i.options.target).not(this);n.removeClass("uk-active").blur(),i.trigger("change.uk.tab",[t.$(this).addClass("uk-active"),i.current]),i.current=t.$(this),i.options.connect||(n.attr("aria-expanded","false"),t.$(this).attr("aria-expanded","true"))}}),this.options.connect&&(this.connect=t.$(this.options.connect)),this.responsivetab=t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),this.responsivetab.dropdown=this.responsivetab.find(".uk-dropdown"),this.responsivetab.lst=this.responsivetab.dropdown.find("ul"),this.responsivetab.caption=this.responsivetab.find("a:first"),this.element.hasClass("uk-tab-bottom")&&this.responsivetab.dropdown.addClass("uk-dropdown-up"),this.responsivetab.lst.on("click.uk.tab","a",function(e){e.preventDefault(),e.stopPropagation();var n=t.$(this);i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")}),this.on("show.uk.switcher change.uk.tab",function(t,e){i.responsivetab.caption.html(e.text())}),this.element.append(this.responsivetab),this.options.connect&&(this.switcher=t.switcher(this.element,{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active,animation:this.options.animation,duration:this.options.duration,swiping:this.options.swiping})),t.dropdown(this.responsivetab,{mode:"click",preventflip:"y"}),i.trigger("change.uk.tab",[this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]),this.check(),t.$win.on("resize orientationchange",t.Utils.debounce(function(){i.element.is(":visible")&&i.check()},100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.check()})},check:function(){var i=this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");if(!i.length)return this.responsivetab.addClass("uk-hidden"),void 0;var e,n,o,s=i.eq(0).offset().top+Math.ceil(i.eq(0).height()/2),a=!1;if(this.responsivetab.lst.empty(),i.each(function(){t.$(this).offset().top>s&&(a=!0)}),a)for(var r=0;r<i.length;r++)e=t.$(i.eq(r)),n=e.find("a"),"none"==e.css("float")||e.attr("uk-dropdown")||(e.hasClass("uk-disabled")||(o=t.$(e[0].outerHTML),o.find("a").data("index",r),this.responsivetab.lst.append(o)),e.addClass("uk-hidden"));this.responsivetab[this.responsivetab.lst.children("li").length?"removeClass":"addClass"]("uk-hidden")}})}(UIkit2),function(t){"use strict";t.component("cover",{defaults:{automute:!0},boot:function(){t.ready(function(i){t.$("[data-uk-cover]",i).each(function(){var i=t.$(this);if(!i.data("cover")){t.cover(i,t.Utils.options(i.attr("data-uk-cover")))}})})},init:function(){if(this.parent=this.element.parent(),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){this.check()}.bind(this),100)),this.on("display.uk.check",function(){this.element.is(":visible")&&this.check()}.bind(this)),this.check(),this.element.is("iframe")&&this.options.automute){var i=this.element.attr("src");this.element.attr("src","").on("load",function(){this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}).attr("src",[i,i.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1"].join(""))}},check:function(){this.element.css({width:"",height:""}),this.dimension={w:this.element.width(),h:this.element.height()},this.element.attr("width")&&!isNaN(this.element.attr("width"))&&(this.dimension.w=this.element.attr("width")),this.element.attr("height")&&!isNaN(this.element.attr("height"))&&(this.dimension.h=this.element.attr("height")),this.ratio=this.dimension.w/this.dimension.h;var t,i,e=this.parent.width(),n=this.parent.height();e/this.ratio<n?(t=Math.ceil(n*this.ratio),i=n):(t=e,i=Math.ceil(e/this.ratio)),this.element.css({width:t,height:i})}})}(UIkit2);

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit2&&(i=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-slideset",["uikit"],function(){return i||t(UIkit2)})}(function(t){"use strict";function i(i,e,n,s){var a,o,r,l,h=t.$.Deferred(),u=this.options.delay===!1?Math.floor(this.options.duration/2):this.options.delay,d=this;if(s=s||1,this.element.css("min-height",this.element.height()),n[0]===e[0])return h.resolve(),h.promise();if("object"==typeof i?(a=i[0],o=i[1]||i[0]):(a=i,o=a),t.$body.css("overflow-x","hidden"),r=function(){if(e&&e.length&&e.hide().removeClass(o+" uk-animation-reverse").css({opacity:"","animation-delay":"",animation:""}),!n.length)return h.resolve(),void 0;for(l=0;l<n.length;l++)n.eq(1==s?l:n.length-l-1).css("animation-delay",l*u+"ms");var i=function(){n.removeClass(""+a).css({opacity:"",display:"","animation-delay":"",animation:""}),h.resolve(),t.$body.css("overflow-x",""),d.element.css("min-height",""),i=!1};n.addClass(a)[1==s?"last":"first"]().one(t.support.animation.end,function(){i&&i()}).end().css("display",""),setTimeout(function(){i&&i()},n.length*u*2)},n.length&&n.css("animation-duration",this.options.duration+"ms"),e&&e.length)for(e.css("animation-duration",this.options.duration+"ms")[1==s?"last":"first"]().one(t.support.animation.end,function(){r()}),l=0;l<e.length;l++)!function(i,e){setTimeout(function(){e.css("display","none").css("display","").css("opacity",0).on(t.support.animation.end,function(){e.removeClass(o)}).addClass(o+" uk-animation-reverse")}.bind(this),l*u)}(l,e.eq(1==s?l:e.length-l-1));else r();return h.promise()}function e(t,i){var e,n=0,s=-1,a=t.length||0,o=[];if(1>i)return null;for(;a>n;)e=n%i,e?o[s][e]=t[n]:o[++s]=[t[n]],n++;for(n=0,a=o.length;a>n;)o[n]=jQuery(o[n]),n++;return o}var n;t.component("slideset",{defaults:{"default":1,animation:"fade",duration:200,filter:"",delay:!1,controls:!1,autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},sets:[],boot:function(){t.ready(function(i){t.$("[data-uk-slideset]",i).each(function(){var i=t.$(this);i.data("slideset")||t.slideset(i,t.Utils.options(i.attr("data-uk-slideset")))})})},init:function(){var i=this;this.activeSet=!1,this.list=this.element.find(".uk-slideset"),this.nav=this.element.find(".uk-slideset-nav"),this.controls=this.options.controls?t.$(this.options.controls):this.element,t.$win.on("resize load",t.Utils.debounce(function(){i.update()},100)),i.list.addClass("uk-grid-width-1-"+i.options.default),["xlarge","large","medium","small"].forEach(function(t){i.options[t]&&i.list.addClass("uk-grid-width-"+t+"-1-"+i.options[t])}),this.on("click.uk.slideset","[data-uk-slideset-item]",function(e){if(e.preventDefault(),!i.animating){var n=t.$(this).attr("data-uk-slideset-item");if(i.activeSet!==n)switch(n){case"next":case"previous":i["next"==n?"next":"previous"]();break;default:i.show(parseInt(n,10))}}}),this.controls.on("click.uk.slideset","[data-uk-filter]",function(e){var n=t.$(this);n.parent().hasClass("uk-slideset")||(e.preventDefault(),i.animating||i.currentFilter==n.attr("data-uk-filter")||(i.updateFilter(n.attr("data-uk-filter")),i._hide().then(function(){i.update(!0,!0)})))}),this.on("swipeRight swipeLeft",function(t){i["swipeLeft"==t.type?"next":"previous"]()}),this.updateFilter(this.options.filter),this.update(),this.element.on({mouseenter:function(){i.options.pauseOnHover&&(i.hovering=!0)},mouseleave:function(){i.hovering=!1}}),this.options.autoplay&&this.start(),t.domObserve(this.list,function(){i.list.children(":visible:not(.uk-active)").length&&i.update(!1,!0)})},update:function(t,i){var n,s=this.visible;if(this.visible=this.getVisibleOnCurrenBreakpoint(),s!=this.visible||i){for(this.children=this.list.children().hide(),this.items=this.getItems(),this.sets=e(this.items,this.visible),n=0;n<this.sets.length;n++)this.sets[n].css({display:"none"});if(this.nav.length&&this.nav.empty()){for(n=0;n<this.sets.length;n++)this.nav.append('<li data-uk-slideset-item="'+n+'"><a></a></li>');this.nav[1==this.nav.children().length?"addClass":"removeClass"]("uk-invisible")}this.activeSet=!1,this.show(0,!t)}},updateFilter:function(i){var e,n=this;this.currentFilter=i,this.controls.find("[data-uk-filter]").each(function(){e=t.$(this),e.parent().hasClass("uk-slideset")||(e.attr("data-uk-filter")==n.currentFilter?e.addClass("uk-active"):e.removeClass("uk-active"))})},getVisibleOnCurrenBreakpoint:function(){var i=null,e=t.$('<div style="position:absolute;height:1px;top:-1000px;width:100px"><div></div></div>').appendTo("body"),n=e.children().eq(0),s=this.options;return["xlarge","large","medium","small"].forEach(function(t){s[t]&&!i&&(e.attr("class","uk-grid-width-"+t+"-1-2").width(),50==n.width()&&(i=t))}),e.remove(),this.options[i]||this.options["default"]},getItems:function(){var i,e=[];return this.currentFilter?(i=this.currentFilter||[],"string"==typeof i&&(i=i.split(/,/).map(function(t){return t.trim()})),this.children.each(function(){var n=t.$(this),s=n.attr("data-uk-filter"),a=i.length?!1:!0;s&&(s=s.split(/,/).map(function(t){return t.trim()}),i.forEach(function(t){s.indexOf(t)>-1&&(a=!0)})),a&&e.push(n[0])}),e=t.$(e)):e=this.list.children(),e},show:function(i,e,s){var a=this;if(this.activeSet!==i&&!this.animating){s=s||(i<this.activeSet?-1:1);var o=this.sets[this.activeSet]||[],r=this.sets[i],l=this._getAnimation();(e||!t.support.animation)&&(l=n.none),this.animating=!0,this.nav.length&&this.nav.children().removeClass("uk-active").eq(i).addClass("uk-active"),l.apply(a,[o,r,s]).then(function(){t.Utils.checkDisplay(r,!0),a.children.hide().removeClass("uk-active"),r.addClass("uk-active").css({display:"",opacity:""}),a.animating=!1,a.activeSet=i,t.Utils.checkDisplay(r,!0),a.trigger("show.uk.slideset",[r])})}},_getAnimation:function(){var i=n[this.options.animation]||n.none;return t.support.animation||(i=n.none),i},_hide:function(){var t=this,i=this.sets[this.activeSet]||[],e=this._getAnimation();return this.animating=!0,e.apply(t,[i,[],1]).then(function(){t.animating=!1})},next:function(){this.show(this.sets[this.activeSet+1]?this.activeSet+1:0,!1,1)},previous:function(){this.show(this.sets[this.activeSet-1]?this.activeSet-1:this.sets.length-1,!1,-1)},start:function(){this.stop();var t=this;this.interval=setInterval(function(){t.hovering||t.animating||t.next()},this.options.autoplayInterval)},stop:function(){this.interval&&clearInterval(this.interval)}}),n={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e,n){var s=["uk-animation-slide-top","uk-animation-slide-bottom"];return-1==n&&s.reverse(),i.apply(this,[s,t,e])},"slide-horizontal":function(t,e,n){var s=["uk-animation-slide-right","uk-animation-slide-left"];return-1==n&&s.reverse(),i.apply(this,[s,t,e,n])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.slideset.animations=n});

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(e){var t;window.UIkit2&&(t=e(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-parallax",["uikit"],function(){return t||e(UIkit2)})}(function(e){"use strict";function t(t,a,r){var i,n,s,o,c,l,p,f=new Image;return n=t.element.css({backgroundSize:"cover",backgroundRepeat:"no-repeat"}),i=n.css("background-image").replace(/^url\(/g,"").replace(/\)$/g,"").replace(/("|')/g,""),o=function(){var e=n.innerWidth(),i=n.innerHeight(),o="bg"==a?r.diff:r.diff/100*i;return i+=o,e+=Math.ceil(o*c),e-o<s.w&&i<s.h?t.element.css({backgroundSize:"auto"}):(i>e/c?(l=Math.ceil(i*c),p=i,i>window.innerHeight&&(l=1.2*l,p=1.2*p)):(l=e,p=Math.ceil(e/c)),n.css({backgroundSize:l+"px "+p+"px"}).data("bgsize",{w:l,h:p}),void 0)},f.onerror=function(){},f.onload=function(){s={w:f.width,h:f.height},c=f.width/f.height,e.$win.on("load resize orientationchange",e.Utils.debounce(function(){o()},50)),o()},f.src=i,!0}function a(e,t,a){return e=i(e),t=i(t),a=a||0,r(e,t,a)}function r(e,t,a){var r="rgba("+parseInt(e[0]+a*(t[0]-e[0]),10)+","+parseInt(e[1]+a*(t[1]-e[1]),10)+","+parseInt(e[2]+a*(t[2]-e[2]),10)+","+(e&&t?parseFloat(e[3]+a*(t[3]-e[3])):1);return r+=")"}function i(e){var t,a;return a=(t=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(e))?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),1]:(t=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(e))?[17*parseInt(t[1],16),17*parseInt(t[2],16),17*parseInt(t[3],16),1]:(t=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))?[parseInt(t[1]),parseInt(t[2]),parseInt(t[3]),1]:(t=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(e))?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10),parseFloat(t[4])]:p[e]||[255,255,255,0]}var n=[],s=!1,o=0,c=window.innerHeight,l=function(){o=e.$win.scrollTop(),window.requestAnimationFrame(function(){for(var e=0;e<n.length;e++)n[e].process()})};e.component("parallax",{defaults:{velocity:.5,target:!1,viewport:!1,media:!1},boot:function(){s=function(){var e,t=document.createElement("div"),a={WebkitTransform:"-webkit-transform",MSTransform:"-ms-transform",MozTransform:"-moz-transform",Transform:"transform"};document.body.insertBefore(t,null);for(var r in a)void 0!==t.style[r]&&(t.style[r]="translate3d(1px,1px,1px)",e=window.getComputedStyle(t).getPropertyValue(a[r]));return document.body.removeChild(t),void 0!==e&&e.length>0&&"none"!==e}(),e.$doc.on("scrolling.uk.document",l),e.$win.on("load resize orientationchange",e.Utils.debounce(function(){c=window.innerHeight,l()},50)),e.ready(function(t){e.$("[data-uk-parallax]",t).each(function(){var t=e.$(this);t.data("parallax")||e.parallax(t,e.Utils.options(t.attr("data-uk-parallax")))})})},init:function(){this.base=this.options.target?e.$(this.options.target):this.element,this.props={},this.velocity=this.options.velocity||1;var t=["target","velocity","viewport","plugins","media"];Object.keys(this.options).forEach(function(e){if(-1===t.indexOf(e)){var a,r,i,n,s=String(this.options[e]).split(",");e.match(/color/i)?(a=s[1]?s[0]:this._getStartValue(e),r=s[1]?s[1]:s[0],a||(a="rgba(255,255,255,0)")):(a=parseFloat(s[1]?s[0]:this._getStartValue(e)),r=parseFloat(s[1]?s[1]:s[0]),n=r>a?r-a:a-r,i=r>a?1:-1),this.props[e]={start:a,end:r,dir:i,diff:n}}}.bind(this)),n.push(this)},process:function(){if(this.options.media)switch(typeof this.options.media){case"number":if(window.innerWidth<this.options.media)return!1;break;case"string":if(window.matchMedia&&!window.matchMedia(this.options.media).matches)return!1}var e=this.percentageInViewport();this.options.viewport!==!1&&(e=0===this.options.viewport?1:e/this.options.viewport),this.update(e)},percentageInViewport:function(){var e,t,a,r=this.base.offset().top,i=this.base.outerHeight();return r>o+c?a=0:o>r+i?a=1:c>r+i?a=(c>o?o:o-c)/(r+i):(e=o+c-r,t=Math.round(e/((c+i)/100)),a=t/100),a},update:function(e){var r,i,n={transform:"",filter:""},o=e*(1-(this.velocity-this.velocity*e));0>o&&(o=0),o>1&&(o=1),(void 0===this._percent||this._percent!=o)&&(Object.keys(this.props).forEach(function(c){switch(r=this.props[c],0===e?i=r.start:1===e?i=r.end:void 0!==r.diff&&(i=r.start+r.diff*o*r.dir),"bg"!=c&&"bgp"!=c||this._bgcover||(this._bgcover=t(this,c,r)),c){case"x":n.transform+=s?" translate3d("+i+"px, 0, 0)":" translateX("+i+"px)";break;case"xp":n.transform+=s?" translate3d("+i+"%, 0, 0)":" translateX("+i+"%)";break;case"y":n.transform+=s?" translate3d(0, "+i+"px, 0)":" translateY("+i+"px)";break;case"yp":n.transform+=s?" translate3d(0, "+i+"%, 0)":" translateY("+i+"%)";break;case"rotate":n.transform+=" rotate("+i+"deg)";break;case"scale":n.transform+=" scale("+i+")";break;case"bg":n["background-position"]="50% "+i+"px";break;case"bgp":n["background-position"]="50% "+i+"%";break;case"color":case"background-color":case"border-color":n[c]=a(r.start,r.end,o);break;case"blur":n.filter+=" blur("+i+"px)";break;case"hue":n.filter+=" hue-rotate("+i+"deg)";break;case"grayscale":n.filter+=" grayscale("+i+"%)";break;case"invert":n.filter+=" invert("+i+"%)";break;case"fopacity":n.filter+=" opacity("+i+"%)";break;case"saturate":n.filter+=" saturate("+i+"%)";break;case"sepia":n.filter+=" sepia("+i+"%)";break;default:n[c]=i}}.bind(this)),n.filter&&(n["-webkit-filter"]=n.filter),this.element.css(n),this._percent=o)},_getStartValue:function(e){var t=0;switch(e){case"scale":t=1;break;default:t=this.element.css(e)}return t||0}});var p={black:[0,0,0,1],blue:[0,0,255,1],brown:[165,42,42,1],cyan:[0,255,255,1],fuchsia:[255,0,255,1],gold:[255,215,0,1],green:[0,128,0,1],indigo:[75,0,130,1],khaki:[240,230,140,1],lime:[0,255,0,1],magenta:[255,0,255,1],maroon:[128,0,0,1],navy:[0,0,128,1],olive:[128,128,0,1],orange:[255,165,0,1],pink:[255,192,203,1],purple:[128,0,128,1],violet:[128,0,128,1],red:[255,0,0,1],silver:[192,192,192,1],white:[255,255,255,1],yellow:[255,255,0,1],transparent:[255,255,255,0]};return e.parallax});

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit2&&(e=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-slider",["uikit"],function(){return e||t(UIkit2)})}(function(t){"use strict";var e,i,s,n,a={};return t.component("slider",{defaults:{center:!1,threshold:10,infinite:!0,autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0,activecls:"uk-active"},boot:function(){t.ready(function(e){setTimeout(function(){t.$("[data-uk-slider]",e).each(function(){var e=t.$(this);e.data("slider")||t.slider(e,t.Utils.options(e.attr("data-uk-slider")))})},0)})},init:function(){var o=this;this.container=this.element.find(".uk-slider"),this.focus=0,t.$win.on("resize load",t.Utils.debounce(function(){o.update(!0)},100)),this.on("click.uk.slider","[data-uk-slider-item]",function(e){e.preventDefault();var i=t.$(this).attr("data-uk-slider-item");if(o.focus!=i)switch(o.stop(),i){case"next":case"previous":o["next"==i?"next":"previous"]();break;default:o.updateFocus(parseInt(i,10))}}),this.container.on({"touchstart mousedown":function(h){h.originalEvent&&h.originalEvent.touches&&(h=h.originalEvent.touches[0]),h.button&&2==h.button||!o.active||(o.stop(),s=t.$(h.target).is("a")?t.$(h.target):t.$(h.target).parents("a:first"),n=!1,s.length&&s.one("click",function(t){n&&t.preventDefault()}),i=function(t){n=!0,e=o,a={touchx:parseInt(t.pageX,10),dir:1,focus:o.focus,base:o.options.center?"center":"area"},t.originalEvent&&t.originalEvent.touches&&(t=t.originalEvent.touches[0]),e.element.data({"pointer-start":{x:parseInt(t.pageX,10),y:parseInt(t.pageY,10)},"pointer-pos-start":o.pos}),o.container.addClass("uk-drag"),i=!1},i.x=parseInt(h.pageX,10),i.threshold=o.options.threshold)},mouseenter:function(){o.options.pauseOnHover&&(o.hovering=!0)},mouseleave:function(){o.hovering=!1}}),this.update(!0),this.on("display.uk.check",function(){o.element.is(":visible")&&o.update(!0)}),this.element.find("a,img").attr("draggable","false"),this.options.autoplay&&this.start(),t.domObserve(this.element,function(){o.element.children(":not([data-slider-slide])").length&&o.update(!0)})},update:function(e){var i,s,n,a,o=this,h=0,r=0;return this.items=this.container.children().filter(":visible"),this.vp=this.element[0].getBoundingClientRect().width,this.container.css({"min-width":"","min-height":""}),this.items.each(function(e){i=t.$(this).attr("data-slider-slide",e),a=i.css({left:"",width:""})[0].getBoundingClientRect(),s=a.width,n=i.width(),r=Math.max(r,a.height),i.css({left:h,width:s}).data({idx:e,left:h,width:s,cwidth:n,area:h+s,center:h-(o.vp/2-n/2)}),h+=s}),this.container.css({"min-width":h,"min-height":r}),this.options.infinite&&(h<=2*this.vp||this.items.length<5)&&!this.itemsResized?(this.container.children().each(function(t){o.container.append(o.items.eq(t).clone(!0).attr("id",""))}).each(function(t){o.container.append(o.items.eq(t).clone(!0).attr("id",""))}),this.itemsResized=!0,this.update()):(this.cw=h,this.pos=0,this.active=h>=this.vp,this.container.css({"-ms-transform":"","-webkit-transform":"",transform:""}),e&&this.updateFocus(this.focus),void 0)},updatePos:function(t){this.pos=t,this.container.css({"-ms-transform":"translateX("+t+"px)","-webkit-transform":"translateX("+t+"px)",transform:"translateX("+t+"px)"})},updateFocus:function(e,i){if(this.active){i=i||(e>this.focus?1:-1);var s,n,a=this.items.eq(e);if(this.options.infinite&&this.infinite(e,i),this.options.center)this.updatePos(-1*a.data("center")),this.items.filter("."+this.options.activecls).removeClass(this.options.activecls),a.addClass(this.options.activecls);else if(this.options.infinite)this.updatePos(-1*a.data("left"));else{for(s=0,n=e;n<this.items.length;n++)s+=this.items.eq(n).data("width");if(s>this.vp)this.updatePos(-1*a.data("left"));else if(1==i){for(s=0,n=this.items.length-1;n>=0;n--){if(s+=this.items.eq(n).data("width"),s==this.vp){e=n;break}if(s>this.vp){e=n<this.items.length-1?n+1:n;break}}s>this.vp?this.updatePos(-1*(this.container.width()-this.vp)):this.updatePos(-1*this.items.eq(e).data("left"))}}var o=this.items.eq(e).data("left");this.items.removeClass("uk-slide-before uk-slide-after").each(function(i){i!==e&&t.$(this).addClass(t.$(this).data("left")<o?"uk-slide-before":"uk-slide-after")}),this.focus=e,this.trigger("focusitem.uk.slider",[e,this.items.eq(e),this])}},next:function(){var t=this.items[this.focus+1]?this.focus+1:this.options.infinite?0:this.focus;this.updateFocus(t,1)},previous:function(){var t=this.items[this.focus-1]?this.focus-1:this.options.infinite?this.items[this.focus-1]?this.items-1:this.items.length-1:this.focus;this.updateFocus(t,-1)},start:function(){this.stop();var t=this;this.interval=setInterval(function(){t.hovering||t.next()},this.options.autoplayInterval)},stop:function(){this.interval&&clearInterval(this.interval)},infinite:function(t,e){var i,s=this,n=this.items.eq(t),a=t,o=[],h=0;if(1==e){for(i=0;i<this.items.length&&(a!=t&&(h+=this.items.eq(a).data("width"),o.push(this.items.eq(a))),!(h>this.vp));i++)a=a+1==this.items.length?0:a+1;o.length&&o.forEach(function(t){var e=n.data("area");t.css({left:e}).data({left:e,area:e+t.data("width"),center:e-(s.vp/2-t.data("cwidth")/2)}),n=t})}else{for(i=this.items.length-1;i>-1&&(h+=this.items.eq(a).data("width"),a!=t&&o.push(this.items.eq(a)),!(h>this.vp));i--)a=a-1==-1?this.items.length-1:a-1;o.length&&o.forEach(function(t){var e=n.data("left")-t.data("width");t.css({left:e}).data({left:e,area:e+t.data("width"),center:e-(s.vp/2-t.data("cwidth")/2)}),n=t})}}}),t.$doc.on("mousemove.uk.slider touchmove.uk.slider",function(t){if(t.originalEvent&&t.originalEvent.touches&&(t=t.originalEvent.touches[0]),i&&Math.abs(t.pageX-i.x)>i.threshold&&(window.getSelection().toString()?e=i=!1:i(t)),e){var s,n,o,h,r,c,d,u,f,l;if(t.clientX||t.clientY?s=t.clientX:(t.pageX||t.pageY)&&(s=t.pageX-document.body.scrollLeft-document.documentElement.scrollLeft),r=a.focus,n=s-e.element.data("pointer-start").x,o=e.element.data("pointer-pos-start")+n,h=s>e.element.data("pointer-start").x?-1:1,c=e.items.eq(a.focus),1==h)for(d=c.data("left")+Math.abs(n),u=0,f=a.focus;u<e.items.length;u++){if(l=e.items.eq(f),f!=a.focus&&l.data("left")<d&&l.data("area")>d){r=f;break}f=f+1==e.items.length?0:f+1}else for(d=c.data("left")-Math.abs(n),u=0,f=a.focus;u<e.items.length;u++){if(l=e.items.eq(f),f!=a.focus&&l.data("area")<=c.data("left")&&l.data("center")<d){r=f;break}f=f-1==-1?e.items.length-1:f-1}e.options.infinite&&r!=a._focus&&e.infinite(r,h),e.updatePos(o),a.dir=h,a._focus=r,a.touchx=parseInt(t.pageX,10),a.diff=d}}),t.$doc.on("mouseup.uk.slider touchend.uk.slider",function(){if(e){e.container.removeClass("uk-drag"),e.items.eq(a.focus);var t,s,n,o=!1;if(1==a.dir){for(s=0,n=a.focus;s<e.items.length;s++){if(t=e.items.eq(n),n!=a.focus&&t.data("left")>a.diff){o=n;break}n=n+1==e.items.length?0:n+1}e.options.infinite||o||(o=e.items.length)}else{for(s=0,n=a.focus;s<e.items.length;s++){if(t=e.items.eq(n),n!=a.focus&&t.data("left")<a.diff){o=n;break}n=n-1==-1?e.items.length-1:n-1}e.options.infinite||o||(o=0)}e.updateFocus(o!==!1?o:a._focus)}e=i=!1}),t.slider});

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(i){var t;window.UIkit2&&(t=i(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-slideshow",["uikit"],function(){return t||i(UIkit2)})}(function(i){"use strict";var t,s=0;i.component("slideshow",{defaults:{animation:"fade",duration:500,height:"auto",start:0,autoplay:!1,autoplayInterval:7e3,videoautoplay:!0,videomute:!0,slices:15,pauseOnHover:!0,kenburns:!1,kenburnsanimations:["uk-animation-middle-left","uk-animation-top-right","uk-animation-bottom-left","uk-animation-top-center","","uk-animation-bottom-right"]},current:!1,interval:null,hovering:!1,boot:function(){i.ready(function(t){i.$("[data-uk-slideshow]",t).each(function(){var t=i.$(this);t.data("slideshow")||i.slideshow(t,i.Utils.options(t.attr("data-uk-slideshow")))})})},init:function(){var t=this;this.container=this.element.hasClass("uk-slideshow")?this.element:i.$(this.find(".uk-slideshow:first")),this.current=this.options.start,this.animating=!1,this.fixFullscreen=navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&this.container.hasClass("uk-slideshow-fullscreen"),this.options.kenburns&&(this.kbanimduration=this.options.kenburns===!0?"15s":this.options.kenburns,String(this.kbanimduration).match(/(ms|s)$/)||(this.kbanimduration+="ms"),"string"==typeof this.options.kenburnsanimations&&(this.options.kenburnsanimations=this.options.kenburnsanimations.split(","))),this.update(),this.on("click.uk.slideshow","[data-uk-slideshow-item]",function(s){s.preventDefault();var e=i.$(this).attr("data-uk-slideshow-item");if(t.current!=e){switch(e){case"next":case"previous":t["next"==e?"next":"previous"]();break;default:t.show(parseInt(e,10))}t.stop()}}),i.$win.on("resize load",i.Utils.debounce(function(){t.resize(),t.fixFullscreen&&(t.container.css("height",window.innerHeight),t.slides.css("height",window.innerHeight))},100)),setTimeout(function(){t.resize()},80),this.options.autoplay&&this.start(),this.options.videoautoplay&&this.slides.eq(this.current).data("media")&&this.playmedia(this.slides.eq(this.current).data("media")),this.options.kenburns&&this.applyKenBurns(this.slides.eq(this.current)),this.container.on({mouseenter:function(){t.options.pauseOnHover&&(t.hovering=!0)},mouseleave:function(){t.hovering=!1}}),this.on("swipeRight swipeLeft",function(i){t["swipeLeft"==i.type?"next":"previous"]()}),this.on("display.uk.check",function(){t.element.is(":visible")&&(t.resize(),t.fixFullscreen&&(t.container.css("height",window.innerHeight),t.slides.css("height",window.innerHeight)))}),i.domObserve(this.element,function(){t.container.children(":not([data-slideshow-slide])").not(".uk-slideshow-ghost").length&&t.update(!0)})},update:function(t){var e,a=this,n=0;this.slides=this.container.children(),this.slidesCount=this.slides.length,this.slides.eq(this.current).length||(this.current=0),this.slides.each(function(t){var o=i.$(this);if(!o.data("processed")){var r=o.children("img,video,iframe").eq(0),d="html";if(o.data("media",r),o.data("sizer",r),r.length){var u;switch(d=r[0].nodeName.toLowerCase(),r[0].nodeName){case"IMG":var h=i.$('<div class="uk-cover-background uk-position-cover"></div>').css({"background-image":"url("+r.attr("src")+")"});r.attr("width")&&r.attr("height")&&(u=i.$("<canvas></canvas>").attr({width:r.attr("width"),height:r.attr("height")}),r.replaceWith(u),r=u,u=void 0),r.css({width:"100%",height:"auto",opacity:0}),o.prepend(h).data("cover",h);break;case"IFRAME":var c=r[0].src,l="sw-"+ ++s;r.attr("src","").on("load",function(){if((t!==a.current||t==a.current&&!a.options.videoautoplay)&&a.pausemedia(r),a.options.videomute){a.mutemedia(r);var i=setInterval(function(t){return function(){a.mutemedia(r),++t>=4&&clearInterval(i)}}(0),250)}}).data("slideshow",a).attr("data-player-id",l).attr("src",[c,c.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1&player_id="+l].join("")).addClass("uk-position-absolute"),i.support.touch||r.css("pointer-events","none"),u=!0,i.cover&&(i.cover(r),r.attr("data-uk-cover","{}"));break;case"VIDEO":r.addClass("uk-cover-object uk-position-absolute"),u=!0,a.options.videomute&&a.mutemedia(r)}if(u){e=i.$("<canvas></canvas>").attr({width:r[0].width,height:r[0].height});var p=i.$('<img style="width:100%;height:auto;">').attr("src",e[0].toDataURL());o.prepend(p),o.data("sizer",p)}}else o.data("sizer",o);a.hasKenBurns(o)&&o.data("cover").css({"-webkit-animation-duration":a.kbanimduration,"animation-duration":a.kbanimduration}),o.data("processed",++n),o.attr("data-slideshow-slide",d)}}),n&&(this.triggers=this.find("[data-uk-slideshow-item]"),this.slides.attr("aria-hidden","true").removeClass("uk-active").eq(this.current).addClass("uk-active").attr("aria-hidden","false"),this.triggers.filter('[data-uk-slideshow-item="'+this.current+'"]').addClass("uk-active")),t&&n&&this.resize()},resize:function(){if(!this.container.hasClass("uk-slideshow-fullscreen")){var t=this.options.height;"auto"===this.options.height&&(t=0,this.slides.css("height","").each(function(){t=Math.max(t,i.$(this).height())})),this.container.css("height",t),this.slides.css("height",t)}},show:function(s,e){if(!this.animating&&this.current!=s){this.animating=!0;var a=this,n=this.slides.eq(this.current),o=this.slides.eq(s),r=e?e:this.current<s?1:-1,d=n.data("media"),u=t[this.options.animation]?this.options.animation:"fade",h=o.data("media"),c=function(){a.animating&&(d&&d.is("video,iframe")&&a.pausemedia(d),h&&h.is("video,iframe")&&a.playmedia(h),o.addClass("uk-active").attr("aria-hidden","false"),n.removeClass("uk-active").attr("aria-hidden","true"),a.animating=!1,a.current=s,i.Utils.checkDisplay(o,'[class*="uk-animation-"]:not(.uk-cover-background.uk-position-cover)'),a.trigger("show.uk.slideshow",[o,n,a]))};a.applyKenBurns(o),i.support.animation||(u="none"),n=i.$(n),o=i.$(o),a.trigger("beforeshow.uk.slideshow",[o,n,a]),t[u].apply(this,[n,o,r]).then(c),a.triggers.removeClass("uk-active"),a.triggers.filter('[data-uk-slideshow-item="'+s+'"]').addClass("uk-active")}},applyKenBurns:function(i){if(this.hasKenBurns(i)){var t=this.options.kenburnsanimations,s=this.kbindex||0;i.data("cover").attr("class","uk-cover-background uk-position-cover").width(),i.data("cover").addClass(["uk-animation-scale","uk-animation-reverse",t[s].trim()].join(" ")),this.kbindex=t[s+1]?s+1:0}},hasKenBurns:function(i){return this.options.kenburns&&i.data("cover")},next:function(){this.show(this.slides[this.current+1]?this.current+1:0,1)},previous:function(){this.show(this.slides[this.current-1]?this.current-1:this.slides.length-1,-1)},start:function(){this.stop();var i=this;this.interval=setInterval(function(){i.hovering||i.next()},this.options.autoplayInterval)},stop:function(){this.interval&&clearInterval(this.interval)},playmedia:function(i){if(i&&i[0])switch(i[0].nodeName){case"VIDEO":this.options.videomute||(i[0].muted=!1),i[0].play();break;case"IFRAME":this.options.videomute||i[0].contentWindow.postMessage('{ "event": "command", "func": "unmute", "method":"setVolume", "value":1}',"*"),i[0].contentWindow.postMessage('{ "event": "command", "func": "playVideo", "method":"play"}',"*")}},pausemedia:function(i){switch(i[0].nodeName){case"VIDEO":i[0].pause();break;case"IFRAME":i[0].contentWindow.postMessage('{ "event": "command", "func": "pauseVideo", "method":"pause"}',"*")}},mutemedia:function(i){switch(i[0].nodeName){case"VIDEO":i[0].muted=!0;break;case"IFRAME":i[0].contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}}}),t={none:function(){var t=i.$.Deferred();return t.resolve(),t.promise()},scroll:function(t,s,e){var a=i.$.Deferred();return t.css("animation-duration",this.options.duration+"ms"),s.css("animation-duration",this.options.duration+"ms"),s.css("opacity",1).one(i.support.animation.end,function(){t.css("opacity",0).removeClass(-1==e?"uk-slideshow-scroll-backward-out":"uk-slideshow-scroll-forward-out"),s.removeClass(-1==e?"uk-slideshow-scroll-backward-in":"uk-slideshow-scroll-forward-in"),a.resolve()}.bind(this)),t.addClass(-1==e?"uk-slideshow-scroll-backward-out":"uk-slideshow-scroll-forward-out"),s.addClass(-1==e?"uk-slideshow-scroll-backward-in":"uk-slideshow-scroll-forward-in"),s.width(),a.promise()},swipe:function(t,s,e){var a=i.$.Deferred();return t.css("animation-duration",this.options.duration+"ms"),s.css("animation-duration",this.options.duration+"ms"),s.css("opacity",1).one(i.support.animation.end,function(){t.css("opacity",0).removeClass(-1===e?"uk-slideshow-swipe-backward-out":"uk-slideshow-swipe-forward-out"),s.removeClass(-1===e?"uk-slideshow-swipe-backward-in":"uk-slideshow-swipe-forward-in"),a.resolve()}.bind(this)),t.addClass(-1==e?"uk-slideshow-swipe-backward-out":"uk-slideshow-swipe-forward-out"),s.addClass(-1==e?"uk-slideshow-swipe-backward-in":"uk-slideshow-swipe-forward-in"),s.width(),a.promise()},scale:function(t,s){var e=i.$.Deferred();return t.css("animation-duration",this.options.duration+"ms"),s.css("animation-duration",this.options.duration+"ms"),s.css("opacity",1),t.one(i.support.animation.end,function(){t.css("opacity",0).removeClass("uk-slideshow-scale-out"),e.resolve()}.bind(this)),t.addClass("uk-slideshow-scale-out"),t.width(),e.promise()},fade:function(t,s){var e=i.$.Deferred();return t.css("animation-duration",this.options.duration+"ms"),s.css("animation-duration",this.options.duration+"ms"),s.css("opacity",1),s.data("cover")||s.data("placeholder")||s.css("opacity",1).one(i.support.animation.end,function(){s.removeClass("uk-slideshow-fade-in")}).addClass("uk-slideshow-fade-in"),t.one(i.support.animation.end,function(){t.css("opacity",0).removeClass("uk-slideshow-fade-out"),e.resolve()}.bind(this)),t.addClass("uk-slideshow-fade-out"),t.width(),e.promise()}},i.slideshow.animations=t,window.addEventListener("message",function(t){var s,e=t.data;if("string"==typeof e)try{e=JSON.parse(e)}catch(a){e={}}t.origin&&t.origin.indexOf("vimeo")>-1&&"ready"==e.event&&e.player_id&&(s=i.$('[data-player-id="'+e.player_id+'"]'),s.length&&s.data("slideshow").mutemedia(s))},!1)});

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit2&&(i=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-grid",["uikit"],function(){return i||t(UIkit2)})}(function(t){"use strict";t.component("grid",{defaults:{colwidth:"auto",animation:!0,duration:300,gutter:0,controls:!1,filter:!1,origin:t.langdirection},boot:function(){t.ready(function(i){t.$("[data-uk-grid]",i).each(function(){var i=t.$(this);i.data("grid")||t.grid(i,t.Utils.options(i.attr("data-uk-grid")))})})},init:function(){var i=this,e=String(this.options.gutter).trim().split(" ");this.gutterv=parseInt(e[0],10),this.gutterh=parseInt(e[1]||e[0],10),this.element.css({position:"relative"}),this.controls=null,this.origin=this.options.origin,this.options.controls&&(this.controls=t.$(this.options.controls),this.controls.on("click","[data-uk-filter]",function(e){e.preventDefault(),i.filter(t.$(this).attr("data-uk-filter"))}),this.controls.on("click","[data-uk-sort]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-sort").split(":");i.sort(n[0],n[1])})),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){i.currentfilter?i.filter(i.currentfilter):this.update()}.bind(this),100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.update()}),t.domObserve(this.element,function(){i.update()}),this.options.filter!==!1?this.filter(this.options.filter):this.update()},_prepareElements:function(){var t,i=this.element.children().not("[data-grid-prepared]");i.length&&(t={position:"absolute",boxSizing:"border-box",width:"auto"==this.options.colwidth?"":this.options.colwidth},this.options.gutter&&(t["padding-"+this.origin]=this.gutterh,t["padding-bottom"]=this.gutterv,this.element.css("margin-"+this.origin,-1*this.gutterh)),i.attr("data-grid-prepared","true").css(t))},update:function(i){var e=this;this._prepareElements(),i=i||this.element.children(":visible");var n,o,s,r,a,h,d,l,u,c=i,f=this.element.width()+2*this.gutterh+2,p=0,g=0,m=[];this.trigger("beforeupdate.uk.grid",[c]),c.each(function(){for(n=t.$(this),u=this.getBoundingClientRect(),o=u.width,s=u.height,p=0,g=0,h=0,l=m.length;l>h;h++)r=m[h],p<=r.aX&&(p=r.aX),p+o>f&&(p=0),g<=r.aY&&(g=r.aY);a={ele:n,top:g,width:o,height:s,aY:g+s,aX:p+o},a[e.origin]=p,m.push(a)});var v,k,b=0;for(h=0,l=m.length;l>h;h++){for(r=m[h],g=0,d=0;h>d;d++)v=m[d],r[this.origin]<v.aX&&v[this.origin]+1<r.aX&&(g=v.aY);r.top=g,r.aY=g+r.height,b=Math.max(b,r.aY)}b-=this.gutterv,this.options.animation?(this.element.stop().animate({height:b},100),m.forEach(function(t){k={top:t.top,opacity:1},k[e.origin]=t[e.origin],t.ele.stop().animate(k,this.options.duration)}.bind(this))):(this.element.css("height",b),m.forEach(function(t){k={top:t.top,opacity:1},k[e.origin]=t[e.origin],t.ele.css(k)}.bind(this))),setTimeout(function(){t.$doc.trigger("scrolling.uk.document")},2*this.options.duration*(this.options.animation?1:0)),this.trigger("afterupdate.uk.grid",[c])},filter:function(i){this.currentfilter=i,i=i||[],"number"==typeof i&&(i=i.toString()),"string"==typeof i&&(i=i.split(/,/).map(function(t){return t.trim()}));var e=this,n=this.element.children(),o={visible:[],hidden:[]};n.each(function(){var e=t.$(this),n=e.attr("data-uk-filter"),s=i.length?!1:!0;n&&(n=n.split(/,/).map(function(t){return t.trim()}),i.forEach(function(t){n.indexOf(t)>-1&&(s=!0)})),o[s?"visible":"hidden"].push(e)}),o.hidden=t.$(o.hidden).map(function(){return this[0]}),o.visible=t.$(o.visible).map(function(){return this[0]}),o.hidden.attr("aria-hidden","true").filter(":visible").fadeOut(this.options.duration),o.visible.attr("aria-hidden","false").filter(":hidden").css("opacity",0).show(),e.update(o.visible),this.controls&&this.controls.length&&this.controls.find("[data-uk-filter]").removeClass("uk-active").filter('[data-uk-filter="'+i+'"]').addClass("uk-active")},sort:function(i,e){e=e||1,"string"==typeof e&&(e="desc"==e.toLowerCase()?-1:1);var n=this.element.children();n.sort(function(n,o){return n=t.$(n),o=t.$(o),(o.data(i)||"")<(n.data(i)||"")?e:-1*e}).appendTo(this.element),this.update(n.filter(":visible")),this.controls&&this.controls.length&&this.controls.find("[data-uk-sort]").removeClass("uk-active").filter('[data-uk-sort="'+i+":"+(-1==e?"desc":"asc")+'"]').addClass("uk-active")}})});

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var n;window.UIkit2&&(n=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-grid-parallax",["uikit"],function(){return n||t(UIkit2)})}(function(t){function n(t){for(var n=t.children(),i=n.filter(":visible:first"),e=i[0].offsetTop+i.outerHeight(),o=0;o<n.length&&!(n[o].offsetTop>=e);o++);return o||1}function i(n){var i,e,o,r=n.offset().top,s=n.outerHeight(),a=t.$win.scrollTop(),l=window.innerHeight;return r>a+l?o=0:a>r+s?o=1:(l>r+s?o=(l>a?a:a-l)/(r+s):(i=a+l-r,e=Math.round(i/((l+s)/100)),o=e/100),l>r&&(o=o*a/(r+s-l))),o>1?1:o}var e=[],o=function(){requestAnimationFrame(function(){for(var t=0;t<e.length;t++)e[t].process()})};t.component("gridparallax",{defaults:{target:!1,smooth:150,translate:150},boot:function(){t.$doc.on("scrolling.uk.document",o),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){o()},50)),t.ready(function(n){t.$("[data-uk-grid-parallax]",n).each(function(){var n=t.$(this);n.data("gridparallax")||t.gridparallax(n,t.Utils.options(n.attr("data-uk-grid-parallax")))})})},init:function(){var i=this;this.initItems().process(),e.push(this),t.$win.on("load resize orientationchange",function(){var e=function(){var t=n(i.element);i.element.css("margin-bottom",""),t>1&&i.element.css("margin-bottom",i.options.translate+parseInt(i.element.css("margin-bottom")))};return t.$(function(){e()}),t.Utils.debounce(e,50)}())},initItems:function(){var n=this.options.smooth;return this.items=(this.options.target?this.element.find(this.options.target):this.element.children()).each(function(){t.$(this).css({transition:"transform "+n+"ms linear",transform:""})}),this},process:function(){var e=i(this.element),o=n(this.element),r=this.items,s=[o-1];if(1==o||!e)return r.css("transform",""),void 0;for(;s.length<o&&s[s.length-1]-2;)s.push(s[s.length-1]-2);var a=this.options.translate,l=e*a;r.each(function(n,i,e){e=-1!=s.indexOf((n+1)%o)?l:l/8,t.$(this).css("transform","translate3d(0,"+e+"px, 0)")})}})});

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit2&&(i=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-accordion",["uikit"],function(){return i||t(UIkit2)})}(function(t){"use strict";function i(i){var e=t.$(i),o="auto";if(e.is(":visible"))o=e.outerHeight();else{var a={position:e.css("position"),visibility:e.css("visibility"),display:e.css("display")};o=e.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),e.css(a)}return o}return t.component("accordion",{defaults:{showfirst:!0,collapse:!0,animate:!0,easing:"swing",duration:300,toggle:".uk-accordion-title",containers:".uk-accordion-content",clsactive:"uk-active"},boot:function(){t.ready(function(i){setTimeout(function(){t.$("[data-uk-accordion]",i).each(function(){var i=t.$(this);i.data("accordion")||t.accordion(i,t.Utils.options(i.attr("data-uk-accordion")))})},0)})},init:function(){var i=this;this.element.on("click.uk.accordion",this.options.toggle,function(e){e.preventDefault(),i.toggleItem(t.$(this).data("wrapper"),i.options.animate,i.options.collapse)}),this.update(!0),t.domObserve(this.element,function(){i.element.children(i.options.containers).length&&i.update()})},toggleItem:function(e,o,a){var n=this;e.data("toggle").toggleClass(this.options.clsactive),e.data("content").toggleClass(this.options.clsactive);var s=e.data("toggle").hasClass(this.options.clsactive);a&&(this.toggle.not(e.data("toggle")).removeClass(this.options.clsactive),this.content.not(e.data("content")).removeClass(this.options.clsactive).parent().stop().css("overflow","hidden").animate({height:0},{easing:this.options.easing,duration:o?this.options.duration:0}).attr("aria-expanded","false")),e.stop().css("overflow","hidden"),o?e.animate({height:s?i(e.data("content")):0},{easing:this.options.easing,duration:this.options.duration,complete:function(){s&&(e.css({overflow:"",height:"auto"}),t.Utils.checkDisplay(e.data("content"))),n.trigger("display.uk.check")}}):(e.height(s?"auto":0),s&&(e.css({overflow:""}),t.Utils.checkDisplay(e.data("content"))),this.trigger("display.uk.check")),e.attr("aria-expanded",s),this.element.trigger("toggle.uk.accordion",[s,e.data("toggle"),e.data("content")])},update:function(i){var e,o,a,n=this;this.toggle=this.find(this.options.toggle),this.content=this.find(this.options.containers),this.content.each(function(i){e=t.$(this),e.parent().data("wrapper")?o=e.parent():(o=t.$(this).wrap('<div data-wrapper="true" style="overflow:hidden;height:0;position:relative;"></div>').parent(),o.attr("aria-expanded","false")),a=n.toggle.eq(i),o.data("toggle",a),o.data("content",e),a.data("wrapper",o),e.data("wrapper",o)}),this.element.trigger("update.uk.accordion",[this]),i&&this.options.showfirst&&this.toggleItem(this.toggle.eq(0).data("wrapper"),!1,!1)}}),t.accordion});

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(i){var t;window.UIkit2&&(t=i(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-slideshow-fx",["uikit"],function(){return t||i(UIkit2)})}(function(i){"use strict";var t=i.slideshow.animations;i.$.extend(i.slideshow.animations,{slice:function(e,s,n,o){if(!e.data("cover"))return t.fade.apply(this,arguments);for(var r,a=i.$.Deferred(),c=Math.ceil(this.element.width()/this.options.slices),h=s.data("cover").css("background-image"),d=i.$('<li class="uk-slideshow-ghost"></li>').css({top:0,left:0,width:this.container.width(),height:this.container.height(),opacity:1,zIndex:15}),p=d.width(),l=d.height(),u="slice-up"==o?l:"0",f=0;f<this.options.slices;f++){"slice-up-down"==o&&(u=(f%2+2)%2==0?"0":l);var m,g=f==this.options.slices-1?c:c,x="rect(0px, "+g*(f+1)+"px, "+l+"px, "+c*f+"px)";m="rect(0px, "+g*(f+1)+"px, 0px, "+c*f+"px)",("slice-up"==o||"slice-up-down"==o&&(f%2+2)%2==0)&&(m="rect("+l+"px, "+g*(f+1)+"px, "+l+"px, "+c*f+"px)"),r=i.$('<div class="uk-cover-background"></div>').css({position:"absolute",top:0,left:0,width:p,height:l,"background-image":h,clip:m,opacity:0,transition:"all "+this.options.duration+"ms ease-in-out "+60*f+"ms","-webkit-transition":"all "+this.options.duration+"ms ease-in-out "+60*f+"ms"}).data("clip",x),d.append(r)}return this.container.append(d),d.children().last().on(i.support.transition.end,function(){setTimeout(function(){d.remove(),a.resolve()},0)}),d.width(),d.children().each(function(){r=i.$(this),r.css({clip:r.data("clip"),opacity:1})}),a.promise()},"slice-up":function(i,e,s){return t.slice.apply(this,[i,e,s,"slice-up"])},"slice-down":function(i,e,s){return t.slice.apply(this,[i,e,s,"slice-down"])},"slice-up-down":function(i,e,s){return t.slice.apply(this,[i,e,s,"slice-up-down"])},fold:function(e,s){if(!s.data("cover"))return t.fade.apply(this,arguments);for(var n,o=i.$.Deferred(),r=Math.ceil(this.element.width()/this.options.slices),a=s.data("cover").css("background-image"),c=i.$('<li class="uk-slideshow-ghost"></li>').css({width:s.width(),height:s.height(),opacity:1,zIndex:15}),h=s.width(),d=s.height(),p=0;p<this.options.slices;p++)n=i.$('<div class="uk-cover-background"></div>').css({position:"absolute",top:0,left:0,width:h,height:d,"background-image":a,"transform-origin":r*p+"px 0 0",clip:"rect(0px, "+r*(p+1)+"px, "+d+"px, "+r*p+"px)",opacity:0,transform:"scaleX(0.000001)",transition:"all "+this.options.duration+"ms ease-in-out "+(100+60*p)+"ms","-webkit-transition":"all "+this.options.duration+"ms ease-in-out "+(100+60*p)+"ms"}),c.prepend(n);return this.container.append(c),c.width(),c.children().first().on(i.support.transition.end,function(){setTimeout(function(){c.remove(),o.resolve()},0)}).end().css({transform:"scaleX(1)",opacity:1}),o.promise()},puzzle:function(s,n){if(!n.data("cover"))return t.fade.apply(this,arguments);for(var o,r,a,c=i.$.Deferred(),h=this,d=Math.round(this.options.slices/2),p=Math.round(n.width()/d),l=Math.round(n.height()/p),u=Math.round(n.height()/l)+1,f=n.data("cover").css("background-image"),m=i.$('<li class="uk-slideshow-ghost"></li>').css({width:this.container.width(),height:this.container.height(),opacity:1,zIndex:15}),g=this.container.width(),x=this.container.height(),w=0;l>w;w++)for(var v=0;d>v;v++)a=v==d-1?p+2:p,r=[u*w+"px",a*(v+1)+"px",u*(w+1)+"px",p*v+"px"],o=i.$('<div class="uk-cover-background"></div>').css({position:"absolute",top:0,left:0,opacity:0,width:g,height:x,"background-image":f,clip:"rect("+r.join(",")+")","-webkit-transform":"translateZ(0)",transform:"translateZ(0)"}),m.append(o);this.container.append(m);var k=e(m.children());return k.each(function(t){i.$(this).css({transition:"all "+h.options.duration+"ms ease-in-out "+(50+25*t)+"ms","-webkit-transition":"all "+h.options.duration+"ms ease-in-out "+(50+25*t)+"ms"})}).last().on(i.support.transition.end,function(){setTimeout(function(){m.remove(),c.resolve()},0)}),m.width(),k.css({opacity:1}),c.promise()},boxes:function(e,s,n,o){if(!s.data("cover"))return t.fade.apply(this,arguments);for(var r,a,c,h,d=i.$.Deferred(),p=Math.round(this.options.slices/2),l=Math.round(s.width()/p),u=Math.round(s.height()/l),f=Math.round(s.height()/u)+1,m=s.data("cover").css("background-image"),g=i.$('<li class="uk-slideshow-ghost"></li>').css({width:s.width(),height:s.height(),opacity:1,zIndex:15}),x=s.width(),w=s.height(),v=0;u>v;v++)for(h=0;p>h;h++)c=h==p-1?l+2:l,a=[f*v+"px",c*(h+1)+"px",f*(v+1)+"px",l*h+"px"],r=i.$('<div class="uk-cover-background"></div>').css({position:"absolute",top:0,left:0,opacity:1,width:x,height:w,"background-image":m,"transform-origin":a[3]+" "+a[0]+" 0",clip:"rect("+a.join(",")+")","-webkit-transform":"scale(0.0000000000000001)",transform:"scale(0.0000000000000001)"}),g.append(r);this.container.append(g);var k,b=0,y=0,$=0,I=[[]],M=g.children();for("boxes-reverse"==o&&(M=[].reverse.apply(M)),M.each(function(){I[b][y]=i.$(this),y++,y==p&&(b++,y=0,I[b]=[])}),h=0,k=0;p*u>h;h++){k=h;for(var z=0;u>z;z++)k>=0&&p>k&&I[z][k].css({transition:"all "+this.options.duration+"ms linear "+(50+$)+"ms","-webkit-transition":"all "+this.options.duration+"ms linear "+(50+$)+"ms"}),k--;$+=100}return M.last().on(i.support.transition.end,function(){setTimeout(function(){g.remove(),d.resolve()},0)}),g.width(),M.css({"-webkit-transform":"scale(1)",transform:"scale(1)"}),d.promise()},"boxes-reverse":function(i,e,s){return t.boxes.apply(this,[i,e,s,"boxes-reverse"])},"random-fx":function(){var i=["slice-up","fold","puzzle","slice-down","boxes","slice-up-down","boxes-reverse"];return this.fxIndex=(void 0===this.fxIndex?-1:this.fxIndex)+1,i[this.fxIndex]||(this.fxIndex=0),t[i[this.fxIndex]].apply(this,arguments)}});var e=function(i){for(var t,e,s=i.length;s;t=parseInt(Math.random()*s),e=i[--s],i[s]=i[t],i[t]=e);return i};return i.slideshow.animations});

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(i){var t;window.UIkit2&&(t=i(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-lightbox",["uikit"],function(){return t||i(UIkit2)})}(function(i){"use strict";function t(t){if(e)return e.lightbox=t,e;e=i.$(['<div class="uk-modal">','<div class="uk-modal-dialog uk-modal-dialog-lightbox uk-slidenav-position" style="margin-left:auto;margin-right:auto;width:200px;height:200px;top:'+Math.abs(window.innerHeight/2-200)+'px;">','<a href="#" class="uk-modal-close uk-close uk-close-alt"></a>','<div class="uk-lightbox-content"></div>','<div class="uk-modal-spinner uk-hidden"></div>',"</div>","</div>"].join("")).appendTo("body"),e.dialog=e.find(".uk-modal-dialog:first"),e.content=e.find(".uk-lightbox-content:first"),e.loader=e.find(".uk-modal-spinner:first"),e.closer=e.find(".uk-close.uk-close-alt"),e.modal=i.modal(e,{modal:!1}),e.on("swipeRight swipeLeft",function(i){e.lightbox["swipeLeft"==i.type?"next":"previous"]()}).on("click","[data-lightbox-previous], [data-lightbox-next]",function(t){t.preventDefault(),e.lightbox[i.$(this).is("[data-lightbox-next]")?"next":"previous"]()}),e.on("hide.uk.modal",function(){e.content.html("")});var o={w:window.innerWidth,h:window.innerHeight};return i.$win.on("load resize orientationchange",i.Utils.debounce(function(){o.w!==window.innerWidth&&e.is(":visible")&&!i.Utils.isFullscreen()&&e.lightbox.fitSize(),o={w:window.innerWidth,h:window.innerHeight}},100)),e.lightbox=t,e}var e,o={};return i.component("lightbox",{defaults:{allowfullscreen:!0,duration:400,group:!1,keyboard:!0},index:0,items:!1,boot:function(){i.$html.on("click","[data-uk-lightbox]",function(t){t.preventDefault();var e=i.$(this);e.data("lightbox")||i.lightbox(e,i.Utils.options(e.attr("data-uk-lightbox"))),e.data("lightbox").show(e)}),i.$doc.on("keyup",function(i){if(e&&e.is(":visible")&&e.lightbox.options.keyboard)switch(i.preventDefault(),i.keyCode){case 37:e.lightbox.previous();break;case 39:e.lightbox.next()}})},init:function(){var t=[];if(this.index=0,this.siblings=[],this.element&&this.element.length){var e=this.options.group?i.$('[data-uk-lightbox*="'+this.options.group+'"]'):this.element;e.each(function(){var e=i.$(this);t.push({source:e.attr("href"),title:e.attr("data-title")||e.attr("title"),type:e.attr("data-lightbox-type")||"auto",link:e})}),this.index=e.index(this.element),this.siblings=t}else this.options.group&&this.options.group.length&&(this.siblings=this.options.group);this.trigger("lightbox-init",[this])},show:function(e){this.modal=t(this),this.modal.dialog.stop(),this.modal.content.stop();var o,n,s=this,h=i.$.Deferred();e=e||0,"object"==typeof e&&this.siblings.forEach(function(i,t){e[0]===i.link[0]&&(e=t)}),0>e?e=this.siblings.length-e:this.siblings[e]||(e=0),n=this.siblings[e],o={lightbox:s,source:n.source,type:n.type,index:e,promise:h,title:n.title,item:n,meta:{content:"",width:null,height:null}},this.index=e,this.modal.content.empty(),this.modal.is(":visible")||(this.modal.content.css({width:"",height:""}).empty(),this.modal.modal.show()),this.modal.loader.removeClass("uk-hidden"),h.promise().done(function(){s.data=o,s.fitSize(o)}).fail(function(){o.meta.content='<div class="uk-position-cover uk-flex uk-flex-middle uk-flex-center"><strong>Loading resource failed!</strong></div>',o.meta.width=400,o.meta.height=300,s.data=o,s.fitSize(o)}),s.trigger("showitem.uk.lightbox",[o])},fitSize:function(){var t=this,e=this.data,o=this.modal.dialog.outerWidth()-this.modal.dialog.width(),n=parseInt(this.modal.dialog.css("margin-top"),10),s=parseInt(this.modal.dialog.css("margin-bottom"),10),h=n+s,a=e.meta.content,l=t.options.duration;this.siblings.length>1&&(a=[a,'<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous uk-hidden-touch" data-lightbox-previous></a>','<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next uk-hidden-touch" data-lightbox-next></a>'].join(""));var d,r,u=i.$("<div>&nbsp;</div>").css({opacity:0,position:"absolute",top:0,left:0,width:"100%",maxWidth:t.modal.dialog.css("max-width"),padding:t.modal.dialog.css("padding"),margin:t.modal.dialog.css("margin")}),c=e.meta.width,g=e.meta.height;u.appendTo("body").width(),d=u.width(),r=window.innerHeight-h,u.remove(),this.modal.dialog.find(".uk-modal-caption").remove(),e.title&&(this.modal.dialog.append('<div class="uk-modal-caption">'+e.title+"</div>"),r-=this.modal.dialog.find(".uk-modal-caption").outerHeight()),d<e.meta.width&&(g=Math.floor(g*(d/c)),c=d),g>r&&(g=Math.floor(r),c=Math.ceil(e.meta.width*(r/e.meta.height))),this.modal.content.css("opacity",0).width(c).html(a),"iframe"==e.type&&this.modal.content.find("iframe:first").height(g);var m=g+o,p=Math.floor(window.innerHeight/2-m/2)-h;0>p&&(p=0),this.modal.closer.addClass("uk-hidden"),t.modal.data("mwidth")==c&&t.modal.data("mheight")==g&&(l=0),this.modal.dialog.animate({width:c+o,height:g+o,top:p},l,"swing",function(){t.modal.loader.addClass("uk-hidden"),t.modal.content.css({width:""}).animate({opacity:1},function(){t.modal.closer.removeClass("uk-hidden")}),t.modal.data({mwidth:c,mheight:g})})},next:function(){this.show(this.siblings[this.index+1]?this.index+1:0)},previous:function(){this.show(this.siblings[this.index-1]?this.index-1:this.siblings.length-1)}}),i.plugin("lightbox","image",{init:function(i){i.on("showitem.uk.lightbox",function(i,t){if("image"==t.type||t.source&&t.source.match(/\.(jpg|jpeg|png|gif|svg)$/i)){var e=function(i,e,o){t.meta={content:'<img class="uk-responsive-width" width="'+e+'" height="'+o+'" src ="'+i+'">',width:e,height:o},t.type="image",t.promise.resolve()};if(o[t.source])e(t.source,o[t.source].width,o[t.source].height);else{var n=new Image;n.onerror=function(){t.promise.reject("Loading image failed")},n.onload=function(){o[t.source]={width:n.width,height:n.height},e(t.source,o[t.source].width,o[t.source].height)},n.src=t.source}}})}}),i.plugin("lightbox","youtube",{init:function(i){var t=/(\/\/.*?youtube\.[a-z]+)\/watch\?v=([^&]+)&?(.*)/,n=/youtu\.be\/(.*)/;i.on("showitem.uk.lightbox",function(i,s){var h,a,l=function(i,t,o){s.meta={content:'<iframe src="//www.youtube.com/embed/'+i+'" width="'+t+'" height="'+o+'" style="max-width:100%;"'+(e.lightbox.options.allowfullscreen?" allowfullscreen":"")+"></iframe>",width:t,height:o},s.type="iframe",s.promise.resolve()};if((a=s.source.match(t))&&(h=a[2]),(a=s.source.match(n))&&(h=a[1]),h){if(o[h])l(h,o[h].width,o[h].height);else{var d=new Image,r=!1;d.onerror=function(){o[h]={width:640,height:320},l(h,o[h].width,o[h].height)},d.onload=function(){120==d.width&&90==d.height?r?(o[h]={width:640,height:320},l(h,o[h].width,o[h].height)):(r=!0,d.src="//img.youtube.com/vi/"+h+"/0.jpg"):(o[h]={width:d.width,height:d.height},l(h,d.width,d.height))},d.src="//img.youtube.com/vi/"+h+"/maxresdefault.jpg"}i.stopImmediatePropagation()}})}}),i.plugin("lightbox","vimeo",{init:function(t){var n,s=/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/;t.on("showitem.uk.lightbox",function(t,h){var a,l=function(i,t,o){h.meta={content:'<iframe src="//player.vimeo.com/video/'+i+'" width="'+t+'" height="'+o+'" style="width:100%;box-sizing:border-box;"'+(e.lightbox.options.allowfullscreen?" allowfullscreen":"")+"></iframe>",width:t,height:o},h.type="iframe",h.promise.resolve()};(n=h.source.match(s))&&(a=n[2],o[a]?l(a,o[a].width,o[a].height):i.$.ajax({type:"GET",url:"//vimeo.com/api/oembed.json?url="+encodeURI(h.source),jsonp:"callback",dataType:"jsonp",success:function(i){o[a]={width:i.width,height:i.height},l(a,o[a].width,o[a].height)}}),t.stopImmediatePropagation())})}}),i.plugin("lightbox","video",{init:function(t){t.on("showitem.uk.lightbox",function(t,e){var n=function(i,t,o){e.meta={content:'<video class="uk-responsive-width" src="'+i+'" width="'+t+'" height="'+o+'" controls></video>',width:t,height:o},e.type="video",e.promise.resolve()};if("video"==e.type||e.source.match(/\.(mp4|webm|ogv)$/i))if(o[e.source])n(e.source,o[e.source].width,o[e.source].height);else var s=i.$('<video style="position:fixed;visibility:hidden;top:-10000px;"></video>').attr("src",e.source).appendTo("body"),h=setInterval(function(){s[0].videoWidth&&(clearInterval(h),o[e.source]={width:s[0].videoWidth,height:s[0].videoHeight},n(e.source,o[e.source].width,o[e.source].height),s.remove())},20)})}}),i.plugin("lightbox","iframe",{init:function(i){i.on("showitem.uk.lightbox",function(t,o){var n=function(i,t,n){o.meta={content:'<iframe class="uk-responsive-width" src="'+i+'" width="'+t+'" height="'+n+'"'+(e.lightbox.options.allowfullscreen?" allowfullscreen":"")+"></iframe>",width:t,height:n},o.type="iframe",o.promise.resolve()};("iframe"===o.type||o.source.match(/\.(html|php)$/))&&n(o.source,i.options.width||800,i.options.height||600)})}}),i.lightbox.create=function(t,e){if(t){var o,n=[];return t.forEach(function(t){n.push(i.$.extend({source:"",title:"",type:"auto",link:!1},"string"==typeof t?{source:t}:t))}),o=i.lightbox(i.$.extend({},e,{group:n}))}},i.lightbox});
/*SC_GROUP_JS*/!function(t){"use strict";function e(t,i,r){this.extend(e,google.maps.OverlayView),this.map_=t,this.markers_=[],this.clusters_=[],this.sizes=[53,56,66,78,90],this.styles_=[],this.ready_=!1;var s=r||{};this.gridSize_=s.gridSize||60,this.minClusterSize_=s.minimumClusterSize||2,this.maxZoom_=s.maxZoom||null,this.styles_=s.styles||[],this.imagePath_=s.imagePath||this.MARKER_CLUSTER_IMAGE_PATH_,this.imageExtension_=s.imageExtension||this.MARKER_CLUSTER_IMAGE_EXTENSION_,this.zoomOnClick_=!0,void 0!=s.zoomOnClick&&(this.zoomOnClick_=s.zoomOnClick),this.averageCenter_=!1,void 0!=s.averageCenter&&(this.averageCenter_=s.averageCenter),this.setupStyles_(),this.setMap(t),this.prevZoom_=this.map_.getZoom();var o=this;google.maps.event.addListener(this.map_,"zoom_changed",function(){var t=o.map_.getZoom();o.prevZoom_!=t&&(o.prevZoom_=t,o.resetViewport())}),google.maps.event.addListener(this.map_,"idle",function(){o.redraw()}),i&&i.length&&this.addMarkers(i,!1)}function i(t){this.markerClusterer_=t,this.map_=t.getMap(),this.gridSize_=t.getGridSize(),this.minClusterSize_=t.getMinClusterSize(),this.averageCenter_=t.isAverageCenter(),this.center_=null,this.markers_=[],this.bounds_=null,this.clusterIcon_=new r(this,t.getStyles(),t.getGridSize())}function r(t,e,i){t.getMarkerClusterer().extend(r,google.maps.OverlayView),this.styles_=e,this.padding_=i||0,this.cluster_=t,this.center_=null,this.map_=t.getMap(),this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(this.map_)}var s,o=function(){return s||(s=t.Deferred(),window.wkInitializeGoogleMapsApi=s.resolve,t.getScript("//maps.google.com/maps/api/js?callback=wkInitializeGoogleMapsApi&key="+(window.GOOGLE_MAPS_API_KEY||""))),s.promise()};t(function(){t('script[type="widgetkit/map"]').each(function(){var i=t(this),r=t("<div data-uk-check-display data-wk-check-display></div>").attr(i.data()),s=JSON.parse(this.innerHTML);i.replaceWith(r),o().then(function(){var i,o,n,a,h,p=s.markers,l=[],u=window.MapsMarkerHelper||!1;Object.keys(s).forEach(function(t){isNaN(s[t])||(s[t]=Number(s[t]))}),n=p.length?new google.maps.LatLng(p[0].lat,p[0].lng):new google.maps.LatLng((-34.397),150.644),o={zoom:parseInt(s.zoom,10),center:n,streetViewControl:s.mapctrl,navigationControl:s.mapctrl,scrollwheel:s.zoomwheel,draggable:s.draggable,mapTypeId:google.maps.MapTypeId[s.maptypeid.toUpperCase()],mapTypeControl:s.maptypecontrol,zoomControl:s.zoomcontrol,disableDefaultUI:s.disabledefaultui,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU,mapTypeIds:["styled_map",google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.SATELLITE]},zoomControlOptions:{style:s.mapctrl?google.maps.ZoomControlStyle.DEFAULT:google.maps.ZoomControlStyle.SMALL}},i=new google.maps.Map(r[0],o),r.data("googlemap",i).on("display.uk.check",function(){google.maps.event.trigger(i,"resize")}),p.length&&s.directions&&(a=t('<a target="_blank"></a>').css({padding:"5px 1px","text-decoration":"none"}),h=t("<div></div>").css({"-webkit-background-clip":"padding-box",padding:"1px 4px",backgroundColor:"white",borderColor:"rgba(0, 0, 0, 0.14902)",borderStyle:"solid",borderWidth:"1px",cursor:"pointer",textAlign:"center",fontFamily:"Roboto, Arial, sans-serif",fontWeight:500,boxShadow:"rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px",index:1}),h.html('<span style="color:#000;"><span style="color:blue;">&#8627;</span>'+(s.directionsText||"Get Directions")+"</span>"),a.append(h),a.setHref=function(t,e){this.attr("href","http://maps.google.com/?daddr="+t+","+e)},i.controls[google.maps.ControlPosition.TOP_RIGHT].push(a[0])),p.length&&s.marker&&(p.forEach(function(t,e){var r,o=new google.maps.Marker({position:new google.maps.LatLng(t.lat,t.lng),map:i,title:t.title});(u&&t.icon||s.marker_icon)&&u.setIcon(o,t.icon||s.marker_icon),l.push(o),s.marker>=1&&(r=new google.maps.InfoWindow({content:t.content,maxWidth:s.popup_max_width?parseInt(s.popup_max_width,10):300}),google.maps.event.addListener(o,"click",function(){s.marker>=2&&t.content&&r.open(i,o),a&&(a.setHref(t.lat,t.lng),a.show())}),0===e&&(3===s.marker&&t.content&&r.open(i,o),a&&(a.setHref(t.lat,t.lng),a.show())))}),i.panTo(new google.maps.LatLng(p[0].lat,p[0].lng))),s.markercluster&&(this.markerCluster=new e(i,l));var g=new google.maps.StyledMapType([{featureType:"all",elementType:"all",stylers:[{invert_lightness:s.styler_invert_lightness},{hue:s.styler_hue},{saturation:s.styler_saturation},{lightness:s.styler_lightness},{gamma:s.styler_gamma}]}],{name:"Styled"});i.mapTypes.set("styled_map",g),"ROADMAP"==s.maptypeid.toUpperCase()&&i.setMapTypeId("styled_map")})})}),e.prototype.MARKER_CLUSTER_IMAGE_PATH_="https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m",e.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_="png",e.prototype.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},e.prototype.onAdd=function(){this.setReady_(!0)},e.prototype.draw=function(){},e.prototype.setupStyles_=function(){if(!this.styles_.length)for(var t,e=0;t=this.sizes[e];e++)this.styles_.push({url:this.imagePath_+(e+1)+"."+this.imageExtension_,height:t,width:t})},e.prototype.fitMapToMarkers=function(){for(var t,e=this.getMarkers(),i=new google.maps.LatLngBounds,r=0;t=e[r];r++)i.extend(t.getPosition());this.map_.fitBounds(i)},e.prototype.setStyles=function(t){this.styles_=t},e.prototype.getStyles=function(){return this.styles_},e.prototype.isZoomOnClick=function(){return this.zoomOnClick_},e.prototype.isAverageCenter=function(){return this.averageCenter_},e.prototype.getMarkers=function(){return this.markers_},e.prototype.getTotalMarkers=function(){return this.markers_.length},e.prototype.setMaxZoom=function(t){this.maxZoom_=t},e.prototype.getMaxZoom=function(){return this.maxZoom_},e.prototype.calculator_=function(t,e){for(var i=0,r=t.length,s=r;0!==s;)s=parseInt(s/10,10),i++;return i=Math.min(i,e),{text:r,index:i}},e.prototype.setCalculator=function(t){this.calculator_=t},e.prototype.getCalculator=function(){return this.calculator_},e.prototype.addMarkers=function(t,e){for(var i,r=0;i=t[r];r++)this.pushMarkerTo_(i);e||this.redraw()},e.prototype.pushMarkerTo_=function(t){if(t.isAdded=!1,t.draggable){var e=this;google.maps.event.addListener(t,"dragend",function(){t.isAdded=!1,e.repaint()})}this.markers_.push(t)},e.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw()},e.prototype.removeMarker_=function(t){var e=-1;if(this.markers_.indexOf)e=this.markers_.indexOf(t);else for(var i,r=0;i=this.markers_[r];r++)if(i==t){e=r;break}return e!=-1&&(t.setMap(null),this.markers_.splice(e,1),!0)},e.prototype.removeMarker=function(t,e){var i=this.removeMarker_(t);return!(e||!i)&&(this.resetViewport(),this.redraw(),!0)},e.prototype.removeMarkers=function(t,e){for(var i,r=!1,s=0;i=t[s];s++){var o=this.removeMarker_(i);r=r||o}if(!e&&r)return this.resetViewport(),this.redraw(),!0},e.prototype.setReady_=function(t){this.ready_||(this.ready_=t,this.createClusters_())},e.prototype.getTotalClusters=function(){return this.clusters_.length},e.prototype.getMap=function(){return this.map_},e.prototype.setMap=function(t){this.map_=t},e.prototype.getGridSize=function(){return this.gridSize_},e.prototype.setGridSize=function(t){this.gridSize_=t},e.prototype.getMinClusterSize=function(){return this.minClusterSize_},e.prototype.setMinClusterSize=function(t){this.minClusterSize_=t},e.prototype.getExtendedBounds=function(t){var e=this.getProjection(),i=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),r=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),s=e.fromLatLngToDivPixel(i);s.x+=this.gridSize_,s.y-=this.gridSize_;var o=e.fromLatLngToDivPixel(r);o.x-=this.gridSize_,o.y+=this.gridSize_;var n=e.fromDivPixelToLatLng(s),a=e.fromDivPixelToLatLng(o);return t.extend(n),t.extend(a),t},e.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},e.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers_=[]},e.prototype.resetViewport=function(t){for(var e,i=0;e=this.clusters_[i];i++)e.remove();for(var r,i=0;r=this.markers_[i];i++)r.isAdded=!1,t&&r.setMap(null);this.clusters_=[]},e.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_.length=0,this.resetViewport(),this.redraw(),window.setTimeout(function(){for(var e,i=0;e=t[i];i++)e.remove()},0)},e.prototype.redraw=function(){this.createClusters_()},e.prototype.distanceBetweenPoints_=function(t,e){if(!t||!e)return 0;var i=6371,r=(e.lat()-t.lat())*Math.PI/180,s=(e.lng()-t.lng())*Math.PI/180,o=Math.sin(r/2)*Math.sin(r/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(s/2)*Math.sin(s/2),n=2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)),a=i*n;return a},e.prototype.addToClosestCluster_=function(t){for(var e,r=4e4,s=null,o=(t.getPosition(),0);e=this.clusters_[o];o++){var n=e.getCenter();if(n){var a=this.distanceBetweenPoints_(n,t.getPosition());a<r&&(r=a,s=e)}}if(s&&s.isMarkerInClusterBounds(t))s.addMarker(t);else{var e=new i(this);e.addMarker(t),this.clusters_.push(e)}},e.prototype.createClusters_=function(){if(this.ready_)for(var t,e=new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),this.map_.getBounds().getNorthEast()),i=this.getExtendedBounds(e),r=0;t=this.markers_[r];r++)!t.isAdded&&this.isMarkerInBounds_(t,i)&&this.addToClosestCluster_(t)},i.prototype.isMarkerAlreadyAdded=function(t){if(this.markers_.indexOf)return this.markers_.indexOf(t)!=-1;for(var e,i=0;e=this.markers_[i];i++)if(e==t)return!0;return!1},i.prototype.addMarker=function(t){if(this.isMarkerAlreadyAdded(t))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,i=(this.center_.lat()*(e-1)+t.getPosition().lat())/e,r=(this.center_.lng()*(e-1)+t.getPosition().lng())/e;this.center_=new google.maps.LatLng(i,r),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();t.isAdded=!0,this.markers_.push(t);var s=this.markers_.length;if(s<this.minClusterSize_&&t.getMap()!=this.map_&&t.setMap(this.map_),s==this.minClusterSize_)for(var o=0;o<s;o++)this.markers_[o].setMap(null);return s>=this.minClusterSize_&&t.setMap(null),this.updateIcon(),!0},i.prototype.getMarkerClusterer=function(){return this.markerClusterer_},i.prototype.getBounds=function(){for(var t,e=new google.maps.LatLngBounds(this.center_,this.center_),i=this.getMarkers(),r=0;t=i[r];r++)e.extend(t.getPosition());return e},i.prototype.remove=function(){this.clusterIcon_.remove(),this.markers_.length=0,delete this.markers_},i.prototype.getSize=function(){return this.markers_.length},i.prototype.getMarkers=function(){return this.markers_},i.prototype.getCenter=function(){return this.center_},i.prototype.calculateBounds_=function(){var t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},i.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},i.prototype.getMap=function(){return this.map_},i.prototype.updateIcon=function(){var t=this.map_.getZoom(),e=this.markerClusterer_.getMaxZoom();if(e&&t>e)for(var i,r=0;i=this.markers_[r];r++)i.setMap(this.map_);else{if(this.markers_.length<this.minClusterSize_)return void this.clusterIcon_.hide();var s=this.markerClusterer_.getStyles().length,o=this.markerClusterer_.getCalculator()(this.markers_,s);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.setSums(o),this.clusterIcon_.show()}},r.prototype.triggerClusterClick=function(){var t=this.cluster_.getMarkerClusterer();google.maps.event.trigger(t,"clusterclick",this.cluster_),t.isZoomOnClick()&&this.map_.fitBounds(this.cluster_.getBounds())},r.prototype.onAdd=function(){if(this.div_=document.createElement("DIV"),this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.innerHTML=this.sums_.text}var e=this.getPanes();e.overlayMouseTarget.appendChild(this.div_);var i=this;google.maps.event.addDomListener(this.div_,"click",function(){i.triggerClusterClick()})},r.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return e.x-=parseInt(this.width_/2,10),e.y-=parseInt(this.height_/2,10),e},r.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px"}},r.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},r.prototype.show=function(){if(this.div_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.style.display=""}this.visible_=!0},r.prototype.remove=function(){this.setMap(null)},r.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),this.div_.parentNode.removeChild(this.div_),this.div_=null)},r.prototype.setSums=function(t){this.sums_=t,this.text_=t.text,this.index_=t.index,this.div_&&(this.div_.innerHTML=t.text),this.useStyle()},r.prototype.useStyle=function(){var t=Math.max(0,this.sums_.index-1);t=Math.min(this.styles_.length-1,t);var e=this.styles_[t];this.url_=e.url,this.height_=e.height,this.width_=e.width,this.textColor_=e.textColor,this.anchor_=e.anchor,this.textSize_=e.textSize,this.backgroundPosition_=e.backgroundPosition},r.prototype.setCenter=function(t){this.center_=t},r.prototype.createCss=function(t){var e=[];e.push("background-image:url("+this.url_+");");var i=this.backgroundPosition_?this.backgroundPosition_:"0 0";e.push("background-position:"+i+";"),"object"==typeof this.anchor_?("number"==typeof this.anchor_[0]&&this.anchor_[0]>0&&this.anchor_[0]<this.height_?e.push("height:"+(this.height_-this.anchor_[0])+"px; padding-top:"+this.anchor_[0]+"px;"):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px;"),"number"==typeof this.anchor_[1]&&this.anchor_[1]>0&&this.anchor_[1]<this.width_?e.push("width:"+(this.width_-this.anchor_[1])+"px; padding-left:"+this.anchor_[1]+"px;"):e.push("width:"+this.width_+"px; text-align:center;")):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px; width:"+this.width_+"px; text-align:center;");var r=this.textColor_?this.textColor_:"black",s=this.textSize_?this.textSize_:11;return e.push("cursor:pointer; top:"+t.y+"px; left:"+t.x+"px; color:"+r+"; position:absolute; font-size:"+s+"px; font-family:Arial,sans-serif; font-weight:bold"),e.join("")}}(jQuery);

var MapsMarkerHelper={colors:{black:[0,0,0,1],blue:[0,0,255,1],brown:[165,42,42,1],cyan:[0,255,255,1],fuchsia:[255,0,255,1],gold:[255,215,0,1],green:[0,128,0,1],indigo:[75,0,130,1],khaki:[240,230,140,1],lime:[0,255,0,1],magenta:[255,0,255,1],maroon:[128,0,0,1],navy:[0,0,128,1],olive:[128,128,0,1],orange:[255,165,0,1],pink:[255,192,203,1],purple:[128,0,128,1],violet:[128,0,128,1],red:[255,0,0,1],silver:[192,192,192,1],white:[255,255,255,1],yellow:[255,255,0,1],transparent:[255,255,255,0]},getSVG:function(e,s){return e=this.parseColor(e||"#E65857"),s=this.parseColor(s||"rgba(255,255,255,0)"),'<?xml version="1.0" encoding="utf-8"?>            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"             width="22px" height="34px" viewBox="0 0 22 34" enable-background="new 0 0 22 34" xml:space="preserve">             <circle id="circle" fill="'+s+'" cx="11" cy="11" r="6.5"/>            <path id="path" d="M11,0C4.94,0,0,4.876,0,10.9C0,19.458,11,34,11,34s11-14.581,11-23.1C22,4.876,17.061,0,11,0z M11,16.5             c-3.038,0-5.5-2.463-5.5-5.5c0-3.038,2.462-5.5,5.5-5.5c3.037,0,5.5,2.462,5.5,5.5C16.5,14.037,14.037,16.5,11,16.5z" fill="'+e+'"/>            </svg>'},parseColor:function(e){var s,a;return a=(s=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(e))?[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16),1]:(s=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(e))?[17*parseInt(s[1],16),17*parseInt(s[2],16),17*parseInt(s[3],16),1]:(s=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))?[parseInt(s[1]),parseInt(s[2]),parseInt(s[3]),1]:(s=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(e))?[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10),parseFloat(s[4])]:this.colors[e]||[230,88,87,1],"rgba("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"},setIcon:function(e,s){var a,r=new google.maps.Point(11,40),t=function(){e.setIcon({url:a,anchor:r})};if(!s.trim())return a="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png",t();if(s.indexOf("/")!=-1){var n=new Image;n.onload=function(){a=n.src,r=new google.maps.Point(Math.ceil(n.width/2),n.height),t()},n.onerror=function(){return a="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png",t()},n.src=s}else a="data:image/svg+xml;base64,"+btoa(this.getSVG.apply(this,s.split(" "))),r=new google.maps.Point(11,34),t()}};
/*SC_GROUP_JS*/
jQuery(window).on('load',  function() {
				new JCaption('img.caption');
			});jQuery(function($){ initTooltips(); $("body").on("subform-row-add", initTooltips); function initTooltips (event, container) { container = container || document;$(container).find(".hasTooltip").tooltip({"html": true,"container": "body"});} });
/*SC_GROUP_JS*/
		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			var msViewportStyle = document.createElement("style");
			msViewportStyle.appendChild(
				document.createTextNode("@-ms-viewport{width:auto!important}")
			);
			document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
		};
/*SC_GROUP_JS*/	
	if(typeof(btcModuleIds)=='undefined'){var btcModuleIds = new Array();var btcModuleOpts = new Array();}
	btcModuleIds.push(263);
	btcModuleOpts.push({
			slideEasing : 'easeInQuad',
			fadeEasing : 'easeInQuad',
			effect: 'slide,slide',
			preloadImage: 'https://www.sonaxmerkezservis.com//modules/mod_bt_contentslider/tmpl/images/loading.gif',
			generatePagination: true,
			play: 5000,						
			hoverPause: true,	
			slideSpeed : 500,
			autoHeight:true,
			fadeSpeed : 500,
			equalHeight:false,
			width: 'auto',
			height: 'auto',
			pause: 100,
			preload: true,
			paginationClass: 'bt_handles',
			generateNextPrev:false,
			prependPagination:true,
			touchScreen:0	});
/*SC_GROUP_JS*/
(function($) {
	// Back to top
	$('#back-to-top').on('click', function(){
		$("html, body").animate({scrollTop: 0}, 500);
		return false;
	});
})(jQuery);
