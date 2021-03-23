/*SC_GROUP_JS*//*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
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
/*SC_GROUP_JS*/// Unite Gallery, Version: 1.7.10, released 22 Jan 2016 

function debugLine(e,t,i){e===!0&&(e="true"),e===!1&&(e="false");var n=e;if("object"==typeof e){n="";for(name in e){var r=e[name];n+=" "+name+": "+r}}if(1!=t||i||(n+=" "+Math.random()),1==i){var o=jQuery("#debug_line");o.width(200),o.height()>=500&&o.html("");var a=o.html();n=a+"<br> -------------- <br>"+n}jQuery("#debug_line").show().html(n)}function debugSide(e){var t="";for(name in e){var i=e[name];t+=name+" : "+i+"<br>"}jQuery("#debug_side").show().html(t)}function trace(e){"undefined"!=typeof console&&console.log(e)}function UGFunctions(){function e(e,t,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent?t.attachEvent("on"+e,i):t[e]=i}var t=null,i=this,n={starTime:0,arrThemes:[],isTouchDevice:-1,isRgbaSupported:-1,timeCache:{},dataCache:{},lastEventType:"",lastEventTime:0,handle:null};this.debugVar="",this.z__________FULL_SCREEN___________=function(){},this.toFullscreen=function(e,t){if(e.requestFullscreen)e.requestFullscreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.webkitRequestFullscreen)e.webkitRequestFullscreen();else{if(!e.msRequestFullscreen)return!1;e.msRequestFullscreen()}return!0},this.exitFullscreen=function(){if(0==i.isFullScreen())return!1;if(document.exitFullscreen)document.exitFullscreen();else if(document.cancelFullScreen)document.cancelFullScreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else{if(!document.msExitFullscreen)return!1;document.msExitFullscreen()}return!0},this.addFullScreenChangeEvent=function(t){document.webkitCancelFullScreen?e("webkitfullscreenchange",document,t):document.msExitFullscreen?e("MSFullscreenChange",document,t):document.mozCancelFullScreen?e("mozfullscreenchange",document,t):e("fullscreenchange",document,t)},this.destroyFullScreenChangeEvent=function(){jQuery(document).unbind("fullscreenChange"),jQuery(document).unbind("mozfullscreenchange"),jQuery(document).unbind("webkitfullscreenchange"),jQuery(document).unbind("MSFullscreenChange")},this.getFullScreenElement=function(){var e=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;return e},this.isFullScreen=function(){var e=document.fullscreen||document.mozFullScreen||document.webkitIsFullScreen||document.msFullscreenElement;return e=e?!0:!1},this.z__________END_FULL_SCREEN___________=function(){},this.z__________GET_PROPS___________=function(){},this.getBrowserPrefix=function(){if(null!==t)return t;var e=["webkit","Moz","ms","O"],i=document.createElement("div");for(var n in e){var r=e[n];if(r+"Transform"in i.style)return r=r.toLowerCase(),t=r,r}return t="",""},this.getImageInsideParentDataByImage=function(e,t,n){var r=e.parent(),o=i.getImageOriginalSize(e),a=i.getImageInsideParentData(r,o.width,o.height,t,n);return a},this.getImageInsideParentData=function(e,t,i,n,r,o,a){if(!r)var r={};var s={};if("undefined"==typeof o)var o=e.width();if("undefined"==typeof a)var a=e.height();r.padding_left&&(o-=r.padding_left),r.padding_right&&(o-=r.padding_right),r.padding_top&&(a-=r.padding_top),r.padding_bottom&&(a-=r.padding_bottom);var l=null,u="100%",d=null,_=null,g="display:block;margin:0px auto;";if(t>0&&i>0){if("down"==n&&o>t&&a>i)u=i,l=t,_=(o-l)/2,d=(a-u)/2;else if("fill"==n){var c=t/i;u=a,l=u*c,o>l?(l=o,u=l/c,_=0,d=Math.round((u-a)/2*-1)):(d=0,_=Math.round((l-o)/2*-1))}else{var c=t/i;u=a,l=u*c,d=0,_=(o-l)/2,"fitvert"!=n&&l>o&&(l=o,u=l/c,_=0,d=(a-u)/2)}l=Math.floor(l),u=Math.floor(u),d=Math.floor(d),_=Math.floor(_),g="position:absolute;"}return r.padding_top&&(d+=r.padding_top),r.padding_left&&(_+=r.padding_left),s.imageWidth=l,s.imageHeight=u,s.imageTop=d,s.imageLeft=_,s.imageRight=_+l,0==d||"100%"==u?s.imageBottom=null:s.imageBottom=d+u,s.style=g,s},this.getElementCenterPosition=function(e,t){var n=e.parent(),r=i.getElementSize(e),o=i.getElementSize(n),a=o.width,s=o.height;t&&void 0!==t.padding_top&&(s-=t.padding_top),t&&void 0!==t.padding_bottom&&(s-=t.padding_bottom),t&&void 0!==t.padding_left&&(a-=t.padding_left),t&&void 0!==t.padding_right&&(a-=t.padding_right);var l={};return l.left=Math.round((a-r.width)/2),l.top=Math.round((s-r.height)/2),t&&void 0!==t.padding_top&&(l.top+=t.padding_top),t&&void 0!==t.padding_left&&(l.left+=t.padding_left),l},this.getElementCenterPoint=function(e,t){if(!t)var t=!1;var n=i.getElementSize(e),r={};return r.x=n.width/2,r.y=n.height/2,1==t&&(r.x+=n.left,r.y+=n.top),r.x=Math.round(r.x),r.y=Math.round(r.y),r},this.getMousePosition=function(e,t){var i={pageX:e.pageX,pageY:e.pageY,clientX:e.clientX,clientY:e.clientY};if(e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length>0&&(i.pageX=e.originalEvent.touches[0].pageX,i.pageY=e.originalEvent.touches[0].pageY,i.clientX=e.originalEvent.touches[0].clientX,i.clientY=e.originalEvent.touches[0].clientY),t){var n=t.offset();i.mouseX=i.pageX-n.left,i.mouseY=i.pageY-n.top}return i},this.getMouseElementPoint=function(e,t){var n={x:e.pageX,y:e.pageY},r=i.getElementLocalPoint(n,t);return r},this.getElementLocalPoint=function(e,t){var i={},n=t.offset();return i.x=Math.round(e.x-n.left),i.y=Math.round(e.y-n.top),i},this.getImageOriginalSize=function(e,t,i){if("undefined"!=typeof t&&"undefined"!=typeof i)return{width:t,height:i};var n=e[0];if("undefined"==typeof n)throw new Error("getImageOriginalSize error - Image not found");var r={};if("undefined"==typeof n.naturalWidth){if("number"==typeof e.data("naturalWidth")){var r={};return r.width=e.data("naturalWidth"),r.height=e.data("naturalHeight"),r}var o=new Image;return o.src=n.src,o.complete?(r.width=o.width,r.height=o.height,e.data("naturalWidth",r.width),e.data("naturalHeight",r.height),r):{width:0,height:0}}return r.width=n.naturalWidth,r.height=n.naturalHeight,r},this.getimageRatio=function(e){var t=i.getImageOriginalSize(e),n=i.getElementSize(e),r=n.width/t.width;return r},this.isImageFitParent=function(e){var t=e.parent(),n=i.getElementSize(e),r=i.getElementSize(t);return n.width<=r.width&&n.height<=r.height?!0:!1},this.getElementSize=function(e){if(void 0===e)throw new Error("Can't get size, empty element");var t=e.position();return t.height=e.outerHeight(),t.width=e.outerWidth(),t.left=Math.round(t.left),t.top=Math.round(t.top),t.right=t.left+t.width,t.bottom=t.top+t.height,t},this.isElementBiggerThenParent=function(e){var t=e.parent(),n=i.getElementSize(e),r=i.getElementSize(t);return n.width>r.width||n.height>r.height?!0:!1},this.isPointInsideElement=function(e,t){var i=e.x>=0&&e.x<t.width;if(0==i)return!1;var n=e.y>=0&&e.y<t.height;return 0==n?!1:!0},this.getElementRelativePos=function(e,t,n,r){if(!r)var r=e.parent();if("number"==typeof e)var o={width:e,height:e};else var o=i.getElementSize(e);var a=i.getElementSize(r);switch(t){case"top":case"left":t=0,n&&(t+=n);break;case"center":t=Math.round((a.width-o.width)/2),n&&(t+=n);break;case"right":t=a.width-o.width,n&&(t-=n);break;case"middle":t=Math.round((a.height-o.height)/2),n&&(t+=n);break;case"bottom":t=a.height-o.height,n&&(t-=n)}return t},this.z__________END_GET_PROPS___________=function(){},this.z_________SET_ELEMENT_PROPS_______=function(){},this.zoomImageInsideParent=function(e,t,n,r,o,a,s){if(!n)var n=1.2;if(!o)var o="fit";var l,u,d,_,g=n,c=e.parent(),h=i.getElementSize(e),p=i.getImageOriginalSize(e),f=!1,m=0,v=0,b=0,y=0;if(r){var I=i.getMouseElementPoint(r,e);f=i.isPointInsideElement(I,h),b=I.x,y=I.y}else f=!1;if(0==f){var w=i.getElementCenterPoint(e);b=w.x,y=w.y}if(1==t)l=h.height*g,u=h.width*g,0!=b&&(m=-(b*g-b)),0!=y&&(v=-(y*g-y));else{l=h.height/g,u=h.width/g;var T=i.getImageInsideParentData(c,p.width,p.height,o,s);if(u<T.imageWidth)return i.scaleImageFitParent(e,p.width,p.height,o,s),!0;1==f&&(0!=b&&(m=-(b/g-b)),0!=y&&(v=-(y/g-y)))}if(a){var E=1;if(0!=p.width&&(E=u/p.width),E>a)return!1}if(i.setElementSize(e,u,l),0==t&&0==f){var S=i.getElementCenterPosition(e);d=S.left,_=S.top}else d=h.left+m,_=h.top+v;return i.placeElement(e,d,_),!0},this.placeElement=function(e,t,n,r,o,a){if(0==jQuery.isNumeric(t)||0==jQuery.isNumeric(n)){if(!a)var a=e.parent();var s=i.getElementSize(e),l=i.getElementSize(a)}if(0==jQuery.isNumeric(t))switch(t){case"left":t=0,r&&(t+=r);break;case"center":t=Math.round((l.width-s.width)/2),r&&(t+=r);break;case"right":t=l.width-s.width,r&&(t-=r)}if(0==jQuery.isNumeric(n))switch(n){case"top":n=0,o&&(n+=o);break;case"middle":case"center":n=Math.round((l.height-s.height)/2),o&&(n+=o);break;case"bottom":n=l.height-s.height,o&&(n-=o)}var u={position:"absolute",margin:"0px"};null!==t&&(u.left=t),null!==n&&(u.top=n),e.css(u)},this.placeElementInParentCenter=function(e){i.placeElement(e,"center","middle")},this.setElementSizeAndPosition=function(e,t,i,n,r){var o={width:n+"px",height:r+"px",left:t+"px",top:i+"px",position:"absolute",margin:"0px"};e.css(o)},this.setElementSize=function(e,t,i){var n={width:t+"px"};null!==i&&"undefined"!=typeof i&&(n.height=i+"px"),e.css(n)},this.cloneElementSizeAndPos=function(e,t,n,r,o){var a=e.position();if(void 0==a)throw new Error("Can't get size, empty element");n===!0?(a.height=e.outerHeight(),a.width=e.outerWidth()):(a.height=e.height(),a.width=e.width()),a.left=Math.round(a.left),a.top=Math.round(a.top),r&&(a.left+=r),o&&(a.top+=o),i.setElementSizeAndPosition(t,a.left,a.top,a.width,a.height)},this.placeImageInsideParent=function(e,t,n,r,o,a){var s=i.getImageInsideParentData(t,n,r,o,a),l="<img";null!==s.imageWidth&&(l+=" width = '"+s.imageWidth+"'",s.style+="width:"+s.imageWidth+";"),null!=s.imageHeight&&("100%"==s.imageHeight?(l+=" height = '"+s.imageHeight+"'",s.style+="height:"+s.imageHeight+";"):(l+=" height = '"+s.imageHeight+"'",s.style+="height:"+s.imageHeight+"px;")),null!==s.imageTop&&(s.style+="top:"+s.imageTop+"px;"),null!==s.imageLeft&&(s.style+="left:"+s.imageLeft+"px;"),l+=" style='"+s.style+"'",l+=" src='"+e+"'",l+=">",t.html(l);var u=t.children("img");return u},this.scaleImageCoverParent=function(e,t,n){if("number"==typeof t)var r=t,o=n;else var r=t.outerWidth(),o=t.outerHeight();var a=i.getImageOriginalSize(e),s=a.width,l=a.height,u=s/l,d=o,_=d*u,g=0,c=0;r>_?(_=r,d=_/u,c=0,g=Math.round((d-o)/2*-1)):(g=0,c=Math.round((_-r)/2*-1)),_=Math.round(_),d=Math.round(d),e.css({width:_+"px",height:d+"px",left:c+"px",top:g+"px"})},this.scaleImageFitParent=function(e,t,n,r,o){var a=e.parent(),s=i.getImageInsideParentData(a,t,n,r,o),l=!1,u={};null!==s.imageWidth&&(l=!0,e.removeAttr("width"),u.width=s.imageWidth+"px"),null!=s.imageHeight&&(l=!0,e.removeAttr("height"),u.height=s.imageHeight+"px"),null!==s.imageTop&&(l=!0,u.top=s.imageTop+"px"),null!==s.imageLeft&&(l=!0,u.left=s.imageLeft+"px"),1==l&&(u.position="absolute",u.margin="0px 0px",e.css(u))},this.scaleImageByHeight=function(e,t,n,r){var o=i.getImageOriginalSize(e,n,r),a=o.width/o.height,s=Math.round(t*a);t=Math.round(t),i.setElementSize(e,s,t)},this.scaleImageByWidth=function(e,t,n,r){var o=i.getImageOriginalSize(e,n,r),a=o.width/o.height,s=Math.round(t/a);t=Math.round(t),i.setElementSize(e,t,s)},this.scaleImageExactSizeInParent=function(e,t,n,r,o,a){var s=e.parent(),l=i.getElementSize(s);l.width<r&&(r=l.width),l.height<o&&(o=l.height);var u=i.getImageInsideParentData(null,t,n,a,null,r,o),d=r,_=o,g=u.imageLeft,c=u.imageLeft,h=u.imageTop,p=u.imageTop,f=Math.round((l.width-r)/2),m=Math.round((l.height-o)/2),v=u.imageWidth+g+c,b=r-v;0!=b&&(c+=b);var y=u.imageHeight+h+p,b=o-y;0!=b&&(p+=b),e.removeAttr("width"),e.removeAttr("height");var I={position:"absolute",margin:"0px 0px"};I.width=d+"px",I.height=_+"px",I.left=f+"px",I.top=m+"px",I["padding-left"]=g+"px",I["padding-top"]=h+"px",I["padding-right"]=c+"px",I["padding-bottom"]=p+"px",e.css(I)},this.showElement=function(e,t,i){e.show().fadeTo(0,1),t&&t.show().fadeTo(0,1),i&&i.show().fadeTo(0,1)},this.z_________END_SET_ELEMENT_PROPS_______=function(){},this.z_________GALLERY_RELATED_FUNCTIONS_______=function(){},this.disableButton=function(e,t){if(!t)var t="ug-button-disabled";0==i.isButtonDisabled(e,t)&&e.addClass(t)},this.convertCustomPrefixOptions=function(e,t,i){if(!t)return e;var n={};return jQuery.each(e,function(e,r){if(0===e.indexOf(t+"_"+i+"_")){var o=e.replace(t+"_"+i+"_",i+"_");n[o]=r}else n[e]=r}),n},this.enableButton=function(e,t){if(!t)var t="ug-button-disabled";1==i.isButtonDisabled(e,t)&&e.removeClass(t)},this.isButtonDisabled=function(e,t){if(!t)var t="ug-button-disabled";return e.hasClass(t)?!0:!1},this.z_________END_GALLERY_RELATED_FUNCTIONS_______=function(){},this.z_________MATH_FUNCTIONS_______=function(){},this.normalizeSetting=function(e,t,i,n,r,o){if(!o)var o=!1;var a=(r-i)/(n-i);return r=e+(t-e)*a,1==o&&(e>r&&(r=e),r>t&&(r=t)),r},this.getNormalizedValue=function(e,t,i,n,r){var o=(r-e)/(t-e);return r=e+(n-i)*o},this.getDistance=function(e,t,i,n){var r=Math.round(Math.sqrt(Math.abs((i-e)*(i-e)+(n-t)*(n-t))));return r},this.getMiddlePoint=function(e,t,i,n){var r={};return r.x=e+Math.round((i-e)/2),r.y=t+Math.round((n-t)/2),r},this.getNumItemsInSpace=function(e,t,i){var n=Math.floor((e+i)/(t+i));return n},this.getNumItemsInSpaceRound=function(e,t,i){var n=Math.round((e+i)/(t+i));return n},this.getSpaceByNumItems=function(e,t,i){var n=e*t+(e-1)*i;return n},this.getItemSizeInSpace=function(e,t,i){var n=Math.floor((e-(t-1)*i)/t);return n},this.getColX=function(e,t,i){var n=e*(t+i);return n},this.getColByIndex=function(e,t){var i=t%e;return i},this.getColRowByIndex=function(e,t){var i=Math.floor(e/t),n=Math.floor(e%t);return{col:n,row:i}},this.getIndexByRowCol=function(e,t,i){if(0>e)return-1;if(0>t)return-1;var n=e*i+t;return n},this.getPrevRowSameColIndex=function(e,t){var n=i.getColRowByIndex(e,t),r=i.getIndexByRowCol(n.row-1,n.col,t);return r},this.getNextRowSameColIndex=function(e,t){var n=i.getColRowByIndex(e,t),r=i.getIndexByRowCol(n.row+1,n.col,t);return r},this.z_________DATA_FUNCTIONS_______=function(){},this.setGlobalData=function(e,t){jQuery.data(document.body,e,t)},this.getGlobalData=function(e){var t=jQuery.data(document.body,e);return t},this.z_________EVENT_DATA_FUNCTIONS_______=function(){},this.handleScrollTop=function(e){if(0==i.isTouchDevice())return null;var t=i.getStoredEventData(e),r=15,o=15;if(null===t.scrollDir&&(Math.abs(t.diffMouseX)>r?t.scrollDir="hor":Math.abs(t.diffMouseY)>o&&Math.abs(t.diffMouseY)>Math.abs(t.diffMouseX)&&(t.scrollDir="vert",t.scrollStartY=t.lastMouseClientY,t.scrollOrigin=jQuery(document).scrollTop(),n.dataCache[e].scrollStartY=t.lastMouseClientY,n.dataCache[e].scrollOrigin=t.scrollOrigin),n.dataCache[e].scrollDir=t.scrollDir),"vert"!==t.scrollDir)return t.scrollDir;var a=(jQuery(document).scrollTop(),t.scrollOrigin-(t.lastMouseClientY-t.scrollStartY));return a>=0&&jQuery(document).scrollTop(a),t.scrollDir},this.wasVerticalScroll=function(e){var t=i.getStoredEventData(e);return"vert"===t.scrollDir?!0:!1},this.storeEventData=function(e,t,r){var o=i.getMousePosition(e),a=jQuery.now(),s={startTime:a,lastTime:a,startMouseX:o.pageX,startMouseY:o.pageY,lastMouseX:o.pageX,lastMouseY:o.pageY,startMouseClientY:o.clientY,lastMouseClientY:o.clientY,scrollTop:jQuery(document).scrollTop(),scrollDir:null};r&&(s=jQuery.extend(s,r)),n.dataCache[t]=s},this.updateStoredEventData=function(e,t,r){if(!n.dataCache[t])throw new Error("updateEventData error: must have stored cache object");var o=n.dataCache[t],a=i.getMousePosition(e);o.lastTime=jQuery.now(),void 0!==a.pageX&&(o.lastMouseX=a.pageX,o.lastMouseY=a.pageY,o.lastMouseClientY=a.clientY),r&&(o=jQuery.extend(o,r)),n.dataCache[t]=o},this.getStoredEventData=function(e,t){if(!n.dataCache[e])throw new Error("updateEventData error: must have stored cache object");var i=n.dataCache[e];return i.diffMouseX=i.lastMouseX-i.startMouseX,i.diffMouseY=i.lastMouseY-i.startMouseY,i.diffMouseClientY=i.lastMouseClientY-i.startMouseClientY,i.diffTime=i.lastTime-i.startTime,t===!0?(i.startMousePos=i.lastMouseY,i.lastMousePos=i.lastMouseY,i.diffMousePos=i.diffMouseY):(i.startMousePos=i.lastMouseX,i.lastMousePos=i.lastMouseX,i.diffMousePos=i.diffMouseX),i},this.isApproveStoredEventClick=function(e,t){if(!n.dataCache[e])return!0;var r=i.getStoredEventData(e,t),o=Math.abs(r.diffMousePos);return r.diffTime>400?!1:o>30?!1:!0},this.clearStoredEventData=function(e){n.dataCache[e]=null},this.z_________CHECK_SUPPORT_FUNCTIONS_______=function(){},this.isCanvasExists=function(){var e=jQuery('<canvas width="500" height="500" > </canvas>')[0];return"function"==typeof e.getContext?!0:!1},this.isScrollbarExists=function(){var e=window.innerWidth>document.documentElement.clientWidth;return e},this.isTouchDevice=function(){if(-1!==n.isTouchDevice)return n.isTouchDevice;try{document.createEvent("TouchEvent"),n.isTouchDevice=!0}catch(e){n.isTouchDevice=!1}return n.isTouchDevice},this.isDesktopDevice=function(){var e=void 0===typeof window.screenX||i.isTouchDevice()?!1:!0;return e},this.isRgbaSupported=function(){if(-1!==n.isRgbaSupported)return n.isRgbaSupported;var e=document.getElementsByTagName("script")[0],t=e.style.color;try{e.style.color="rgba(1,5,13,0.44)"}catch(i){}var r=e.style.color!=t;return e.style.color=t,n.isRgbaSupported=r,r},this.z_________GENERAL_FUNCTIONS_______=function(){},this.checkMinJqueryVersion=function(e){for(var t=jQuery.fn.jquery.split("."),i=e.split("."),n=0,r=t.length;r>n;n++){var o=parseInt(t[n]),a=parseInt(i[n]);if("undefined"==typeof i[n])return!0;if(a>o)return!1;if(o>a)return!0}return!0},this.getCssSizeParam=function(e){return jQuery.isNumeric(e)?e+"px":e},this.convertHexToRGB=function(e,t){var i=e.replace("#","");return i===e?e:(r=parseInt(i.substring(0,2),16),g=parseInt(i.substring(2,4),16),b=parseInt(i.substring(4,6),16),result="rgba("+r+","+g+","+b+","+t+")",result)},this.timestampToString=function(e){var t=new Date(e),i=t.getDate()+"/"+t.getMonth();return i+=" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+":"+t.getMilliseconds()},this.getArrTouches=function(e){var t=[];return e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length>0&&(t=e.originalEvent.touches),t},this.getArrTouchPositions=function(e){for(var t=[],i=0;i<e.length;i++){var n={pageX:e[i].pageX,pageY:e[i].pageY};t.push(n)}return t},this.startTimeDebug=function(){n.starTime=jQuery.now()},this.showTimeDebug=function(){var e=jQuery.now(),t=e-n.starTime;debugLine({"Time Passed":t},!0)},this.initProgressIndicator=function(e,t,n){switch("bar"!=e&&0==i.isCanvasExists()&&(e="bar"),e){case"bar":var r=new UGProgressBar;r.putHidden(n,t);break;default:case"pie":var r=new UGProgressPie;r.putHidden(n,t);break;case"pie2":t.type_fill=!0;var r=new UGProgressPie;r.putHidden(n,t)}return r},this.setButtonMobileReady=function(e){e.on("touchstart",function(e){jQuery(this).addClass("ug-nohover")}),e.on("mousedown touchend",function(e){return e.stopPropagation(),e.stopImmediatePropagation(),!1})},this.registerTheme=function(e){n.arrThemes.push(e)},this.getArrThemes=function(){return n.arrThemes},this.isThemeRegistered=function(e){return-1!==jQuery.inArray(e,n.arrThemes)?!0:!1},this.getFirstRegisteredTheme=function(){if(0==n.arrThemes.length)return"";var e=n.arrThemes[0];return e},this.isTimePassed=function(e,t){if(!t)var t=100;var i=jQuery.now();0==n.timeCache.hasOwnProperty(e)?lastTime=0:lastTime=n.timeCache[e];var r=i-lastTime;return n.timeCache[e]=i,t>=r?!1:!0},this.whenContiniousEventOver=function(e,t,i){if(!i)var i=300;1==n.timeCache.hasOwnProperty(e)&&null!=n.timeCache[e]&&(clearTimeout(n.timeCache[e]),n.timeCache[e]=null),n.timeCache[e]=setTimeout(t,i)},this.validateClickTouchstartEvent=function(e){var t=!0,i=jQuery.now()-n.lastEventTime;return"click"==e&&"touchstart"==n.lastEventType&&1e3>i&&(t=!1),n.lastEventTime=jQuery.now(),n.lastEventType=e,t},this.addClassOnHover=function(e,t){if(!t)var t="ug-button-hover";e.hover(function(){jQuery(this).addClass(t)},function(){jQuery(this).removeClass(t)})},this.destroyButton=function(e){e.off("mouseenter"),e.off("mouseleave"),e.off("click"),e.off("touchstart"),e.off("touchend"),e.off("mousedown")},this.setButtonOnClick=function(e,t){i.setButtonMobileReady(e),e.on("click touchstart",function(e){return objThis=jQuery(this),e.stopPropagation(),e.stopImmediatePropagation(),0==i.validateClickTouchstartEvent(e.type)?!0:void t(objThis,e)})},this.loadJs=function(e,t){t===!0&&(e=location.protocol+"//"+e);var i=document.createElement("script");i.src=e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(i,n)},this.loadCss=function(e,t){t===!0&&(e=location.protocol+"//"+e);var i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",e),document.getElementsByTagName("head")[0].appendChild(i)},this.addEvent=function(e,t,i){"undefined"!=typeof e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent&&e.attachEvent("on"+t,i)},this.checkImagesLoaded=function(e,t,i){function n(e,n){r++,"function"==typeof i&&setTimeout(function(){i(e,n)}),r==o&&"function"==typeof t&&setTimeout(function(){t()})}var r=0,o=e.length;return 0==o&&t?(t(),!1):void setTimeout(function(){for(var t=0;o>t;t++){var i=e[t];if(void 0!==i.naturalWidth&&0!==i.naturalWidth)n(e[t],!1);else{var r=jQuery("<img/>");r.data("index",t),r.on("load",function(){var t=jQuery(this).data("index");n(e[t],!1)}),r.on("error",function(){var t=jQuery(this).data("index");n(e[t],!0)}),r.attr("src",i.src)}}})},this.waitForWidth=function(e,t){var i=e.width();return 0!=i?(t(),!1):void(n.handle=setInterval(function(){i=e.width(),0!=i&&(clearInterval(n.handle),t())},300))},this.arrayShuffle=function(e){if("object"!=typeof e)return e;for(var t,i,n=e.length;n;t=parseInt(Math.random()*n),i=e[--n],e[n]=e[t],e[t]=i);return e},this.getObjectLength=function(e){var t=0;for(var i in e)t++;return t},this.normalizePercent=function(e){return 0>e&&(e=0),e>1&&(e=1),e},this.stripTags=function(e){var t=e.replace(/(<([^>]+)>)/gi,"");return t},this.htmlentitles=function(e){var t=jQuery("<div/>").text(e).html();return t},this.z_________END_GENERAL_FUNCTIONS_______=function(){}}function UGThumbsGeneral(){function e(e,t,i,n){var r={width:e+"px",height:t+"px"},o={width:e-j.thumbInnerReduce+"px",height:t-j.thumbInnerReduce+"px"},a=".ug-thumb-loader, .ug-thumb-error, .ug-thumb-border-overlay, .ug-thumb-overlay";i?(n!==!0&&i.css(r),i.children(a).css(o)):(w.children(".ug-thumb-wrapper").css(r),w.find(a).css(o))}function t(e,t,i,n){if(!n)var n=!1;S.isFakeFullscreen()&&(n=!0);var r=e.children(".ug-thumb-border-overlay"),o={};o["border-width"]=t+"px",0!=t&&(o["border-color"]=i),n&&n===!0?(r.css(o),0==t?r.hide():r.show()):(0==t?r.stop().fadeOut(x.thumb_transition_duration):r.show().stop().fadeIn(x.thumb_transition_duration),s(r,o))}function i(e,t,i){var n=e.children(".ug-thumb-overlay"),r=x.thumb_transition_duration;i&&i===!0&&(r=0),t?n.stop(!0).fadeTo(r,j.colorOverlayOpacity):n.stop(!0).fadeTo(r,0)}function n(e,t,i){var n=e.children("img.ug-thumb-image"),r=e.children("img.ug-thumb-image-overlay"),o=x.thumb_transition_duration;i&&i===!0&&(o=0),t?r.stop(!0).fadeTo(o,1):(n.fadeTo(0,1),r.stop(!0).fadeTo(o,0))}function r(e,r){if(j.isEffectBorder&&t(e,x.thumb_selected_border_width,x.thumb_selected_border_color,r),j.isEffectOverlay){var o=1==x.thumb_overlay_reverse?!0:!1;i(e,o,r)}j.isEffectImage&&n(e,!1,r),E.trigger(T.events.SETSELECTEDSTYLE,e)}function o(e){var t=T.getItemByThumb(e);return t.isLoaded=!0,t.isThumbImageLoaded=!1,1==j.customThumbs?(E.trigger(T.events.IMAGELOADERROR,e),!0):(e.children(".ug-thumb-loader").hide(),void e.children(".ug-thumb-error").show())}function a(){if(x.thumb_round_corners_radius<=0)return!1;var e={"border-radius":x.thumb_round_corners_radius+"px"};w.find(".ug-thumb-wrapper, .ug-thumb-wrapper .ug-thumb-border-overlay").css(e)}function s(e,t){e.stop(!0).animate(t,{duration:x.thumb_transition_duration,easing:x.thumb_transition_easing,queue:!1})}function l(e){1==g(e)?r(e,!0,"redraw"):T.setThumbNormalStyle(e,!0,"redraw")}function u(t,i,n){if(1==x.thumb_fixed_size)P.scaleImageCoverParent(i,t);else{"height"==x.thumb_resize_by?P.scaleImageByHeight(i,x.thumb_height):P.scaleImageByWidth(i,x.thumb_width);var r=P.getElementSize(i);P.placeElement(i,0,0),e(r.width,r.height,t)}t.children(".ug-thumb-loader").hide(),i.show(),0==x.thumb_image_overlay_effect?i.fadeTo(0,1):(1==x.thumb_image_overlay_effect&&d(i),i.fadeTo(0,0),l(t)),E.trigger(T.events.AFTERPLACEIMAGE,t)}function d(e){var t=e.siblings(".ug-thumb-image-overlay");if(0==t.length)return!1;var i=P.getElementSize(e),n={width:i.width+"px",height:i.height+"px",left:i.left+"px",top:i.top+"px"};t.css(n),0==j.customThumbs&&t.fadeTo(0,1)}function _(){var e="",t=x.thumb_image_overlay_type.split(",");for(var i in t){var n=t[i];switch(n){case"bw":e+=" ug-bw-effect";break;case"blur":e+=" ug-blur-effect";break;case"sepia":e+=" ug-sepia-effect"}}return e}function g(e){return e.hasClass("ug-thumb-selected")?!0:!1}function c(t,i){i=jQuery(i);var n=(T.getItemByThumb(i),P.getElementSize(i));e(n.width,n.height,i,!0),l(i)}function h(e){return 1==j.touchEnabled?(objThumbs.off("mouseenter").off("mouseleave"),!0):void(0==g(e)&&T.setThumbOverStyle(e))}function p(e){return 1==j.touchEnabled?!0:void(0==g(e)&&T.setThumbNormalStyle(e,!1))}function f(e,t){if(!t)var t=!1;var i=jQuery(e),n=i.parents(".ug-thumb-wrapper");return 0==n.parent().length?!1:(objItem=T.getItemByThumb(n),1==objItem.isLoaded&&t===!1?!1:(T.triggerImageLoadedEvent(n,i),void(1==j.customThumbs?E.trigger(T.events.PLACEIMAGE,[n,i]):u(n,i,objItem))))}function m(e,t,i){objItem=T.getItemByThumb(t),objItem.isLoaded=!0,objItem.isThumbImageLoaded=!0;var n=P.getImageOriginalSize(i);objItem.thumbWidth=n.width,objItem.thumbHeight=n.height,objItem.thumbRatioByWidth=n.width/n.height,objItem.thumbRatioByHeight=n.height/n.width}var v,b,y,I,w,T=this,E=jQuery(T),S=new UniteGalleryMain,P=new UGFunctions;this.events={SETOVERSTYLE:"thumbmouseover",SETNORMALSTYLE:"thumbmouseout",SETSELECTEDSTYLE:"thumbsetselected",PLACEIMAGE:"thumbplaceimage",AFTERPLACEIMAGE:"thumb_after_place_image",IMAGELOADERROR:"thumbimageloaderror",THUMB_IMAGE_LOADED:"thumb_image_loaded"};var x={thumb_width:88,thumb_height:50,thumb_fixed_size:!0,thumb_resize_by:"height",thumb_border_effect:!0,thumb_border_width:0,thumb_border_color:"#000000",thumb_over_border_width:0,thumb_over_border_color:"#d9d9d9",thumb_selected_border_width:1,thumb_selected_border_color:"#d9d9d9",thumb_round_corners_radius:0,thumb_color_overlay_effect:!0,thumb_overlay_color:"#000000",thumb_overlay_opacity:.4,thumb_overlay_reverse:!1,thumb_image_overlay_effect:!1,thumb_image_overlay_type:"bw",thumb_transition_duration:200,thumb_transition_easing:"easeOutQuad",thumb_show_loader:!0,thumb_loader_type:"dark",thumb_wrapper_as_link:!1,thumb_link_newpage:!1},j={touchEnabled:!1,num_thumbs_checking:0,customThumbs:!1,funcSetCustomThumbHtml:null,isEffectBorder:!1,isEffectOverlay:!1,isEffectImage:!1,colorOverlayOpacity:1,thumbInnerReduce:0,allowOnResize:!0},C={timeout_thumb_check:100,thumb_max_check_times:600,eventSizeChange:"thumb_size_change"};this.init=function(e,t){b=e.getObjects(),S=e,v=jQuery(e),y=b.g_objWrapper,I=b.g_arrItems,x=jQuery.extend(x,t),j.isEffectBorder=x.thumb_border_effect,j.isEffectOverlay=x.thumb_color_overlay_effect,j.isEffectImage=x.thumb_image_overlay_effect},this._____________EXTERNAL_SETTERS__________=function(){},this.setHtmlThumbs=function(e){w=e;var t=S.getNumItems();if(1==j.isEffectImage)var i=_();for(var n=0;t>n;n++){var r=I[n],o="";0==j.customThumbs&&(o=" ug-thumb-generated");var a=r.index+1,s="style='z-index:"+a+";'",l="<div class='ug-thumb-wrapper"+o+"' "+s+"></div>";if(1==x.thumb_wrapper_as_link){var u=r.link;""==r.link&&(u="javascript:void(0)");var d="";1==x.thumb_link_newpage&&r.link&&(d=" target='_blank'");var l="<a href='"+u+"'"+d+" class='ug-thumb-wrapper"+o+"'></a>"}var g=jQuery(l),c=r.objThumbImage;if(0==j.customThumbs){if(1==x.thumb_show_loader&&c){var h="ug-thumb-loader-dark";"bright"==x.thumb_loader_type&&(h="ug-thumb-loader-bright"),g.append("<div class='ug-thumb-loader "+h+"'></div>"),g.append("<div class='ug-thumb-error' style='display:none'></div>")}if(c){if(c.addClass("ug-thumb-image"),1==x.thumb_image_overlay_effect){var p=c.clone().appendTo(g);p.addClass("ug-thumb-image-overlay "+i).removeClass("ug-thumb-image"),p.fadeTo(0,0),r.objImageOverlay=p}g.append(c)}}j.isEffectBorder&&g.append("<div class='ug-thumb-border-overlay'></div>"),j.isEffectOverlay&&g.append("<div class='ug-thumb-overlay'></div>"),w.append(g),j.customThumbs&&j.funcSetCustomThumbHtml(g,r),I[n].objThumbWrapper=g}},this.setThumbNormalStyle=function(e,r,o){if(1==j.customThumbs&&e.removeClass("ug-thumb-over"),j.isEffectBorder&&t(e,x.thumb_border_width,x.thumb_border_color,r),j.isEffectOverlay){var a=1==x.thumb_overlay_reverse?!1:!0;i(e,a,r)}j.isEffectImage&&n(e,!0,r),E.trigger(T.events.SETNORMALSTYLE,e)},this.setThumbOverStyle=function(e){if(1==j.customThumbs&&e.addClass("ug-thumb-over"),j.isEffectBorder&&t(e,x.thumb_over_border_width,x.thumb_over_border_color),j.isEffectOverlay){var r=1==x.thumb_overlay_reverse?!0:!1;i(e,r)}1==j.isEffectImage&&n(e,!1),E.trigger(T.events.SETOVERSTYLE,e)},this.setHtmlProperties=function(){if(0==j.customThumbs){1==x.thumb_fixed_size&&e(x.thumb_width,x.thumb_height),a()}if(w.children(".ug-thumb-wrapper").each(function(){var e=jQuery(this);l(e)}),j.isEffectOverlay&&x.thumb_overlay_color){var t={};if(P.isRgbaSupported()){var i=P.convertHexToRGB(x.thumb_overlay_color,x.thumb_overlay_opacity);t["background-color"]=i}else t["background-color"]=x.thumb_overlay_color,j.colorOverlayOpacity=x.thumb_overlay_opacity;w.find(".ug-thumb-wrapper .ug-thumb-overlay").css(t)}},this.setThumbSelected=function(e){return 1==j.customThumbs&&e.removeClass("ug-thumb-over"),1==g(e)?!0:(e.addClass("ug-thumb-selected"),void r(e))},this.setThumbUnselected=function(e){e.removeClass("ug-thumb-selected"),T.setThumbNormalStyle(e,!1,"set unselected")},this.setOptions=function(e){x=jQuery.extend(x,e)},this.setThumbInnerReduce=function(e){j.thumbInnerReduce=e},this.setCustomThumbs=function(e,t,i){if(j.customThumbs=!0,"function"!=typeof e)throw new Error("The argument should be function");j.funcSetCustomThumbHtml=e,-1==jQuery.inArray("overlay",t)&&(j.isEffectOverlay=!1),-1==jQuery.inArray("border",t)&&(j.isEffectBorder=!1),j.isEffectImage=!1,i&&i.allow_onresize===!1&&(j.allowOnResize=!1)},this._____________EXTERNAL_GETTERS__________=function(){},this.getOptions=function(){return x},this.getNumThumbs=function(){var e=I.length;return e},this.getThumbImage=function(e){var t=e.find(".ug-thumb-image");return t},this.getThumbByIndex=function(e){var t=T.getThumbs();if(e>=t.length||0>e)throw new Error("Wrong thumb index");var i=jQuery(t[e]);return i},this.getThumbs=function(){return w.children(".ug-thumb-wrapper")},this.getItemByThumb=function(e){var t=e.data("index");void 0===t&&(t=e.index());var i=I[t];return i},this.isThumbLoaded=function(e){var t=T.getItemByThumb(e);return t.isLoaded},this.getGlobalThumbSize=function(){var e={width:x.thumb_width,height:x.thumb_height};return e},this._____________EXTERNAL_OTHERS__________=function(){},this.initEvents=function(){var e=w.find(".ug-thumb-wrapper");e.on("touchstart",function(){j.touchEnabled=!0,e.off("mouseenter").off("mouseleave")}),1==j.allowOnResize&&y.on(C.eventSizeChange,c),e.hover(function(e){var t=jQuery(this);h(t)},function(e){var t=jQuery(this);p(t)}),E.on(T.events.THUMB_IMAGE_LOADED,m)},this.destroy=function(){var e=w.find(".ug-thumb-wrapper");e.off("touchstart"),y.off(C.eventSizeChange),e.off("mouseenter"),e.off("mouseleave"),E.off(T.events.THUMB_IMAGE_LOADED)},this.loadThumbsImages=function(){var e=w.find(".ug-thumb-image");P.checkImagesLoaded(e,null,function(e,t){if(0==t)f(e,!0);else{var i=jQuery(e).parent();o(i)}})},this.triggerImageLoadedEvent=function(e,t){E.trigger(T.events.THUMB_IMAGE_LOADED,[e,t])},this.hideThumbs=function(){w.find(".ug-thumb-wrapper").hide()}}function UGThumbsStrip(){function e(e,i){S=e.getObjects(),O=e,O.attachThumbsPanel("strip",z),E=jQuery(e),P=S.g_objWrapper,x=S.g_arrItems,N=jQuery.extend(N,i),H=N.strip_vertical_type,1==H&&(N=jQuery.extend(N,Q),
N=jQuery.extend(N,i),i.thumb_resize_by="width"),k.init(e,i),t()}function t(){var e=k.getOptions();R.isNotFixedThumbs=e.thumb_fixed_size===!1,H=N.strip_vertical_type}function n(){k.setHtmlProperties(),o(),l(),s(),0==R.isRunOnce&&(1==N.strip_control_touch&&(M=new UGTouchThumbsControl,M.init(z)),1==N.strip_control_avia&&(A=new UGAviaControl,A.init(z)),p(),k.loadThumbsImages(),y()),R.isRunOnce=!0}function r(e){G.stripSize=e,0==H?G.stripActiveSize=G.stripSize-N.strip_padding_left-N.strip_padding_right:G.stripActiveSize=G.stripSize-N.strip_padding_top-N.strip_padding_bottom,G.stripActiveSize<0&&(G.stripActiveSize=0)}function o(){var e=C.children(".ug-thumb-wrapper"),t=jQuery(e[0]),i=t.outerWidth(),n=t.outerHeight(),o=k.getOptions();0==H?(G.thumbSize=i,1==o.thumb_fixed_size?G.thumbSecondSize=n:G.thumbSecondSize=o.thumb_height,r(j.width()),G.stripInnerSize=C.width()):(G.thumbSize=n,1==o.thumb_fixed_size?G.thumbSecondSize=i:G.thumbSecondSize=o.thumb_width,r(j.height()),G.stripInnerSize=C.height())}function a(e){0==H?C.width(e):C.height(e),G.stripInnerSize=e,p()}function s(){var e=C.children(".ug-thumb-wrapper"),t=0,n=0;for(0==H&&(n=N.strip_padding_top),i=0;i<e.length;i++){var r=jQuery(e[i]);if(1==R.isNotFixedThumbs){if(objItem=k.getItemByThumb(r),0==objItem.isLoaded)continue;r.show()}L.placeElement(r,t,n),0==H?t+=r.outerWidth()+N.strip_space_between_thumbs:n+=r.outerHeight()+N.strip_space_between_thumbs}if(0==H)var o=t-N.strip_space_between_thumbs;else var o=n-N.strip_space_between_thumbs;a(o)}function l(){if(0==H){var e=G.thumbSecondSize,t={};t.height=e+"px";var i={};i.height=e+"px"}else{var n=G.thumbSecondSize,t={};t.width=n+"px";var i={};i.width=n+"px"}j.css(t),C.css(i)}function u(e){var t=z.getInnerStripPos(),i=t+e;i=z.fixInnerStripLimits(i),z.positionInnerStrip(i,!0)}function d(e){var t=T(e),i=-1*t.min;i=z.fixInnerStripLimits(i),z.positionInnerStrip(i,!0)}function _(e){var t=T(e),i=-1*t.max+G.stripSize;i=z.fixInnerStripLimits(i),z.positionInnerStrip(i,!0)}function g(e){if(0==I())return!1;var t=w(),i=T(e);if(i.min<t.minPosThumbs){var n=e.prev();d(n.length?n:e)}else if(i.max>t.maxPosThumbs){var r=e.next();_(r.length?r:e)}}function c(){var e=O.getSelectedItem();if(null==e)return!0;var t=e.objThumbWrapper;t&&g(t)}function h(){if(0==I())return!1;var e=z.getInnerStripPos(),t=z.fixInnerStripLimits(e);e!=t&&z.positionInnerStrip(t,!0)}function p(){var e=I();1==e?(A&&A.enable(),M&&M.enable()):(A&&A.disable(),M&&M.disable())}function f(){return I()?!1:void(0==H?L.placeElement(C,N.strip_thumbs_align,0):L.placeElement(C,0,N.strip_thumbs_align))}function m(e){if(z.isTouchMotionActive()){var t=M.isSignificantPassed();if(1==t)return!0}var i=k.getItemByThumb(e);O.selectItem(i)}function v(){clearTimeout(R.handle),R.handle=setTimeout(function(){s()},50)}function b(){var e=O.getSelectedItem();k.setThumbSelected(e.objThumbWrapper),g(e.objThumbWrapper)}function y(){k.initEvents();var e=j.find(".ug-thumb-wrapper");e.on("click touchend",function(e){var t=jQuery(this);m(t)}),E.on(O.events.ITEM_CHANGE,b),R.isNotFixedThumbs&&jQuery(k).on(k.events.AFTERPLACEIMAGE,v)}function I(){return G.stripInnerSize>G.stripActiveSize?!0:!1}function w(){var e={},t=z.getInnerStripPos();return e.minPosThumbs=-1*t+1,e.maxPosThumbs=-1*t+G.stripSize-1,e}function T(e){var t={},i=e.position();return 0==H?(t.min=i.left,t.max=i.left+G.thumbSize):(t.min=i.top,t.max=i.top+G.thumbSize),t}var E,S,P,x,j,C,A,M,z=this,O=new UniteGalleryMain,L=new UGFunctions,H=!1,k=new UGThumbsGeneral,L=new UGFunctions,N={strip_vertical_type:!1,strip_thumbs_align:"left",strip_space_between_thumbs:6,strip_thumb_touch_sensetivity:15,strip_scroll_to_thumb_duration:500,strip_scroll_to_thumb_easing:"easeOutCubic",strip_control_avia:!0,strip_control_touch:!0,strip_padding_top:0,strip_padding_bottom:0,strip_padding_left:0,strip_padding_right:0},R={isRunOnce:!1,is_placed:!1,isNotFixedThumbs:!1,handle:null},G={stripSize:0,stripActiveSize:0,stripInnerSize:0,thumbSize:0,thumbSecondSize:0};this.events={STRIP_MOVE:"stripmove"};var Q={strip_thumbs_align:"top",thumb_resize_by:"width"};this.setHtml=function(e){if(!e){var e=P;null!=N.parent_container&&(e=N.parent_container)}e.append("<div class='ug-thumbs-strip'><div class='ug-thumbs-strip-inner'></div></div>"),j=e.children(".ug-thumbs-strip"),C=j.children(".ug-thumbs-strip-inner"),k.setHtmlThumbs(C),1==R.isNotFixedThumbs&&k.hideThumbs()},this.destroy=function(){var e=j.find(".ug-thumb-wrapper");e.off("click"),e.off("touchend"),E.off(O.events.ITEM_CHANGE),jQuery(k).off(k.events.AFTERPLACEIMAGE),M&&M.destroy(),A&&A.destroy(),k.destroy()},this.________EXTERNAL_GENERAL___________=function(){},this.init=function(t,i){e(t,i)},this.run=function(){n()},this.positionInnerStrip=function(e,t){if(void 0===t)var t=!1;if(0==H)var i={left:e+"px"};else var i={top:e+"px"};0==t?(C.css(i),z.triggerStripMoveEvent()):(z.triggerStripMoveEvent(),C.stop(!0).animate(i,{duration:N.strip_scroll_to_thumb_duration,easing:N.strip_scroll_to_thumb_easing,queue:!1,progress:function(){z.triggerStripMoveEvent()},always:function(){z.triggerStripMoveEvent()}}))},this.triggerStripMoveEvent=function(){jQuery(z).trigger(z.events.STRIP_MOVE)},this.isTouchMotionActive=function(){if(!M)return!1;var e=M.isTouchActive();return e},this.isItemThumbVisible=function(e){var t=e.objThumbWrapper,i=t.position(),n=-1*z.getInnerStripPos();if(0==H)var r=n+G.stripSize,o=i.left,a=i.left+t.width();else var r=n+G.stripSize,o=i.top,a=i.top+t.height();var s=!1;return a>=n&&r>=o&&(s=!0),s},this.getInnerStripPos=function(){return 0==H?C.position().left:C.position().top},this.getInnerStripLimits=function(){var e={};return 0==H?e.maxPos=N.strip_padding_left:e.maxPos=N.strip_padding_top,e.minPos=-(G.stripInnerSize-G.stripActiveSize),e},this.fixInnerStripLimits=function(e){var t=z.getInnerStripLimits();return e>t.maxPos&&(e=t.maxPos),e<t.minPos&&(e=t.minPos),e},this.scrollForeward=function(){u(-G.stripSize)},this.scrollBack=function(){u(G.stripSize)},this.________EXTERNAL_SETTERS___________=function(){},this.setOptions=function(e){N=jQuery.extend(N,e),k.setOptions(e),t()},this.setSizeVertical=function(e){if(0==H)throw new Error("setSizeVertical error, the strip size is not vertical");var t=G.thumbSecondSize,i={};i.width=t+"px",i.height=e+"px",j.css(i),r(e);var n={};n.width=t+"px",n.left="0px",n.top="0px",C.css(n),R.is_placed=!0,p()},this.setSizeHorizontal=function(e){if(1==H)throw new Error("setSizeHorizontal error, the strip size is not horizontal");var t=G.thumbSecondSize+N.strip_padding_top+N.strip_padding_bottom,i={};i.width=e+"px",i.height=t+"px",j.css(i),r(e);var n=N.strip_padding_left,o={};o.height=t+"px",o.left=n+"px",o.top="0px",C.css(o),R.is_placed=!0,p()},this.setPosition=function(e,t,i,n){L.placeElement(j,e,t,i,n)},this.resize=function(e){0==H?(j.width(e),G.stripActiveSize=e-N.strip_padding_left-N.strip_padding_right):(j.height(e),G.stripActiveSize=e-N.strip_padding_top-N.strip_padding_bottom),r(e),p(),h(),f(),c()},this.setThumbUnselected=function(e){k.setThumbUnselected(e)},this.setCustomThumbs=function(e){k.setCustomThumbs(e)},this.________EXTERNAL_GETTERS___________=function(){},this.getObjects=function(){var e=k.getOptions(),t=jQuery.extend(N,e),i={g_gallery:O,g_objGallery:E,g_objWrapper:P,g_arrItems:x,g_objStrip:j,g_objStripInner:C,g_aviaControl:A,g_touchThumbsControl:M,isVertical:H,g_options:t,g_thumbs:k};return i},this.getObjThumbs=function(){return k},this.getSelectedThumb=function(){var e=O.getSelectedItemIndex();return-1==e?null:k.getThumbByIndex(e)},this.getSizeAndPosition=function(){var e=L.getElementSize(j);return e},this.getHeight=function(){var e=j.outerHeight();return e},this.getWidth=function(){var e=j.outerWidth();return e},this.getSizes=function(){return G},this.isVertical=function(){return H},this.isPlaced=function(){return R.is_placed},this.isMoveEnabled=function(){var e=I();return e}}function UGTouchThumbsControl(){function e(){var e=jQuery.now(),t={};return t.passedTime=E.lastTime-E.startTime,t.lastActiveTime=e-E.buttonReleaseTime,t.passedDistance=E.lastPos-E.startPos,t.passedDistanceAbs=Math.abs(t.passedDistance),t}function t(){T.thumb_touch_slowFactor=w.normalizeSetting(5e-5,.01,1,100,y.strip_thumb_touch_sensetivity,!0)}function i(e){return 0==I?w.getMousePosition(e).pageX:w.getMousePosition(e).pageY}function n(e){var t=E.mousePos-e,i=E.innerPos-t,n=h.getInnerStripLimits();if(i>n.maxPos){var r=i-n.maxPos;i=n.maxPos+r/3}if(i<n.minPos){var r=n.minPos-i;i=n.minPos-r/3}h.positionInnerStrip(i)}function r(e){var t=h.getInnerStripPos();E.mousePos=e,E.innerPos=t,E.lastPortionPos=t,E.lastDeltaTime=0,E.lastDeltaPos=0,E.startTime=jQuery.now(),E.startPos=E.innerPos,E.lastTime=E.startTime,E.lastPos=E.startPos,E.speed=0}function o(){var e=jQuery.now(),t=e-E.lastTime;t>=T.touch_portion_time&&(E.lastDeltaTime=e-E.lastTime,E.lastDeltaTime>T.touch_portion_time&&(E.lastDeltaTime=T.touch_portion_time),E.lastDeltaPos=E.lastPos-E.lastPortionPos,E.lastPortionPos=E.lastPos,E.lastTime=e)}function a(){var e=T.thumb_touch_slowFactor,t=T.minDeltaTime,i=T.minPath,n=h.getInnerStripPos(),r=jQuery.now(),o=r-E.lastTime,a=n-E.lastPortionPos;t>o&&E.lastDeltaTime>0&&(o=E.lastDeltaTime,a=E.lastDeltaPos+a),t>o&&(o=t);var l=a>0?1:-1,u=0;o>0&&(u=a/o);var d=u*u/(2*e)*l;Math.abs(d)<=i&&(d=0);var _=h.getInnerStripPos(),g=_+d,c=h.fixInnerStripLimits(g),p=h.getInnerStripLimits(),f=T.limitsBreakAddition,m=!1,v=c;if(g>p.maxPos&&(m=!0,c=f,f>g&&(c=g)),g<p.minPos){m=!0;var y=p.minPos-f;c=y,g>y&&(c=g)}var w=c-_,S=Math.abs(Math.round(u/e));if(0!=d&&(S=S*w/d),_!=c){var P={left:c+"px"};1==I&&(P={top:c+"px"}),b.animate(P,{duration:S,easing:T.animationEasing,queue:!0,progress:s})}if(1==m){var x=T.returnAnimateSpeed,j={left:v+"px"};1==I&&(j={top:v+"px"}),b.animate(j,{duration:x,easing:T.returnAnimationEasing,queue:!0,progress:s})}}function s(){E.lastPos=h.getInnerStripPos(),h.triggerStripMoveEvent()}function l(){return 1==E.loop_active?!0:(E.loop_active=!0,void(E.handle=setInterval(o,10)))}function u(e){if(0==E.loop_active)return!0;if(e){var t=i(e);a(t)}E.loop_active=!1,E.handle=clearInterval(E.handle)}function d(e){return 0==E.isControlEnabled?!0:(E.buttonReleaseTime=jQuery.now(),0==E.touch_active?(u(e),!0):(e.preventDefault(),E.touch_active=!1,u(e),void v.removeClass("ug-dragging")))}function _(e){if(0==E.isControlEnabled)return!0;e.preventDefault(),E.touch_active=!0;var t=i(e);b.stop(!0),r(t),l(),v.addClass("ug-dragging")}function g(e){if(0==E.isControlEnabled)return!0;if(0==E.touch_active)return!0;if(e.preventDefault(),0==e.buttons)return E.touch_active=!1,u(e),!0;var t=i(e);E.lastPos=h.getInnerStripPos(),n(t),o()}function c(){v.bind("mousedown touchstart",_),jQuery(window).add("body").bind("mouseup touchend",d),jQuery("body").bind("mousemove touchmove",g)}var h,p,f,m,v,b,y,I,w=new UGFunctions,T={touch_portion_time:200,thumb_touch_slowFactor:0,minDeltaTime:70,minPath:10,limitsBreakAddition:30,returnAnimateSpeed:500,animationEasing:"easeOutCubic",returnAnimationEasing:"easeOutCubic"},E={touch_active:!1,loop_active:!1,mousePos:0,innerPos:0,startPos:0,startTime:0,lastTime:0,buttonReleaseTime:0,lastPos:0,lastPortionPos:0,lastDeltaTime:0,lastDeltaPos:0,speed:0,handle:"",touchEnabled:!1,isControlEnabled:!0};this.enable=function(){E.isControlEnabled=!0},this.disable=function(){E.isControlEnabled=!1},this.init=function(e){h=e,m=e.getObjects(),p=m.g_gallery,f=m.g_objGallery,v=m.g_objStrip,b=m.g_objStripInner,y=m.g_options,I=m.isVertical,t(),c()},this.isSignificantPassed=function(){var t=e();return t.passedTime>300?!0:t.passedDistanceAbs>30?!0:!1},this.isTouchActive=function(){if(1==E.touch_active)return!0;if(1==b.is(":animated"))return!0;var t=e();return t.lastActiveTime<50?!0:!1},this.destroy=function(){v.unbind("mousedown"),v.unbind("touchstart"),jQuery(window).add("body").unbind("mouseup").unbind("touchend"),jQuery("body").unbind("mousemove").unbind("touchmove")}}function UGPanelsBase(){function e(e,t){switch(n.orientation){case"right":case"left":var i={left:e+"px"};break;case"top":case"bottom":var i={top:e+"px"}}o.stop(!0).animate(i,{duration:300,easing:"easeInOutQuad",queue:!1,complete:function(){t&&t()}})}function t(e){switch(n.orientation){case"right":case"left":g.placeElement(o,e,null);break;case"top":case"bottom":g.placeElement(o,null,e)}}function i(){s.trigger(r.events.FINISH_MOVE)}var n,r,o,a,s,l,u,d=new UniteGalleryMain,_=this,g=new UGFunctions;this.init=function(e,t,i,o,l){n=t,r=i,d=e,a=o,s=l,u=jQuery(d)},this.setHtml=function(e){if(o=e,"strip"==n.panelType)var t=a.strippanel_enable_handle;else var t=a.gridpanel_enable_handle;if(1==t&&(l=new UGPanelHandle,l.init(r,o,a,n.panelType,d),l.setHtml()),n.isDisabledAtStart===!0){var i="<div class='ug-overlay-disabled'></div>";o.append(i),setTimeout(function(){o.children(".ug-overlay-disabled").hide()},n.disabledAtStartTimeout)}},this.placeElements=function(){l&&l.placeHandle()},this.initEvents=function(){l&&(l.initEvents(),u.on(d.events.SLIDER_ACTION_START,function(){l.hideHandle()}),u.on(d.events.SLIDER_ACTION_END,function(){l.showHandle()}))},this.destroy=function(){l&&(l.destroy(),u.off(d.events.SLIDER_ACTION_START),u.off(d.events.SLIDER_ACTION_END))},this.openPanel=function(a){if(!a)var a=!1;return o.is(":animated")?!1:0==n.isClosed?!1:(n.isClosed=!1,s.trigger(r.events.OPEN_PANEL),void(a===!1?e(n.originalPos,i):(t(n.originalPos),i())))},this.closePanel=function(a){if(!a)var a=!1;if(o.is(":animated"))return!1;if(1==n.isClosed)return!1;var l=_.getClosedPanelDest();n.isClosed=!0,s.trigger(r.events.CLOSE_PANEL),a===!1?e(l,i):(t(l),i())},this.setClosedState=function(e){n.originalPos=e,s.trigger(r.events.CLOSE_PANEL),n.isClosed=!0},this.setOpenedState=function(e){s.trigger(r.events.OPEN_PANEL),n.isClosed=!1},this.getClosedPanelDest=function(){var e,t=g.getElementSize(o);switch(n.orientation){case"left":n.originalPos=t.left,e=-n.panelWidth;break;case"right":n.originalPos=t.left;var i=d.getSize();e=i.width;break;case"top":n.originalPos=t.top,e=-n.panelHeight;break;case"bottom":n.originalPos=t.top;var i=d.getSize();e=i.height}return e},this.isPanelClosed=function(){return n.isClosed},this.setDisabledAtStart=function(e){return 0>=e?!1:(n.isDisabledAtStart=!0,void(n.disabledAtStartTimeout=e))}}function UGPanelHandle(){function e(){s.removeClass("ug-button-hover")}function t(){s.addClass("ug-button-closed")}function i(){s.removeClass("ug-button-closed")}function n(e){return e.stopPropagation(),e.stopImmediatePropagation(),0==l.validateClickTouchstartEvent(e.type)?!0:void(a.isPanelClosed()?a.openPanel():a.closePanel())}function r(){var e=a.getOrientation();switch(e){case"right":case"left":"top"!=u.panel_handle_align&&"bottom"!=u.panel_handle_align&&(u.panel_handle_align="top");break;case"bottom":"left"!=u.panel_handle_align&&"right"!=u.panel_handle_align&&(u.panel_handle_align="left");break;case"top":"left"!=u.panel_handle_align&&"right"!=u.panel_handle_align&&(u.panel_handle_align="right")}}var o,a,s,l=new UGFunctions,u={panel_handle_align:"top",panel_handle_offset:0,panel_handle_skin:0};this.init=function(e,t,i,n,r){switch(a=e,o=t,n){case"grid":u.panel_handle_align=i.gridpanel_handle_align,u.panel_handle_offset=i.gridpanel_handle_offset,u.panel_handle_skin=i.gridpanel_handle_skin;break;case"strip":u.panel_handle_align=i.strippanel_handle_align,u.panel_handle_offset=i.strippanel_handle_offset,u.panel_handle_skin=i.strippanel_handle_skin;break;default:throw new Error("Panel handle error: wrong panel type: "+n)}var s=r.getOptions(),l=s.gallery_skin;""==u.panel_handle_skin&&(u.panel_handle_skin=l)},this.setHtml=function(){var e=a.getOrientation(),t="ug-panel-handle-tip";switch(e){case"right":t+=" ug-handle-tip-left";break;case"left":t+=" ug-handle-tip-right";break;case"bottom":t+=" ug-handle-tip-top";break;case"top":t+=" ug-handle-tip-bottom"}o.append("<div class='"+t+" ug-skin-"+u.panel_handle_skin+"'></div>"),s=o.children(".ug-panel-handle-tip")},this.initEvents=function(){l.addClassOnHover(s),s.bind("click touchstart",n),jQuery(a).on(a.events.OPEN_PANEL,function(){e(),i()}),jQuery(a).on(a.events.CLOSE_PANEL,function(){e(),t()})},this.destroy=function(){l.destroyButton(s),jQuery(a).off(a.events.OPEN_PANEL),jQuery(a).off(a.events.CLOSE_PANEL)},this.placeHandle=function(){var e=l.getElementSize(s);r();var t=a.getOrientation();switch(t){case"left":l.placeElement(s,"right",u.panel_handle_align,-e.width);break;case"right":l.placeElement(s,-e.width,u.panel_handle_align,0,u.panel_handle_offset);break;case"top":l.placeElement(s,u.panel_handle_align,"bottom",u.panel_handle_offset,-e.height);break;case"bottom":l.placeElement(s,u.panel_handle_align,"top",u.panel_handle_offset,-e.height);break;default:throw new Error("Wrong panel orientation: "+t)}},this.hideHandle=function(){1==s.is(":visible")&&s.hide()},this.showHandle=function(){0==s.is(":visible")&&s.show()}}function UGStripPanel(){function e(e,t){E=e,m=jQuery(E),j=jQuery.extend(j,t);var i=!1;1==j.strippanel_vertical_type&&(j=jQuery.extend(j,C),i=!0),0==j.strippanel_enable_buttons&&(j=jQuery.extend(j,A),i=!0),1==i&&(j=jQuery.extend(j,t));var n=E.getOptions(),r=n.gallery_skin;""==j.strippanel_buttons_skin&&(j.strippanel_buttons_skin=r),v=E.getElement(),x.init(E,M,w,j,T),P=new UGThumbsStrip,P.init(E,j)}function t(){if(0==j.strippanel_vertical_type){if(0==M.panelWidth)throw new Error("Strip panel error: The width not set, please set width")}else if(0==M.panelHeight)throw new Error("Strip panel error: The height not set, please set height");if(null==M.orientation)throw new Error("Wrong orientation, please set panel orientation before run");return!0}function i(){return 1==M.isFirstRun&&0==t()?!1:(P.run(),s(),d(),f(),M.isFirstRun=!1,void c())}function n(e){if(!e)var e=v;if(e.append("<div class='ug-strip-panel'></div>"),b=e.children(".ug-strip-panel"),1==j.strippanel_enable_buttons){var t="ug-strip-arrow-left",i="ug-strip-arrow-right";1==j.strippanel_vertical_type&&(t="ug-strip-arrow-up",i="ug-strip-arrow-down"),b.append("<div class='ug-strip-arrow "+t+" ug-skin-"+j.strippanel_buttons_skin+"'><div class='ug-strip-arrow-tip'></div></div>"),b.append("<div class='ug-strip-arrow "+i+" ug-skin-"+j.strippanel_buttons_skin+"'><div class='ug-strip-arrow-tip'></div></div>")}x.setHtml(b),P.setHtml(b),1==j.strippanel_enable_buttons&&(I=b.children("."+t),y=b.children("."+i)),r()}function r(){""!=j.strippanel_background_color&&b.css("background-color",j.strippanel_background_color)}function o(){var e=P.getHeight(),t=M.panelWidth;if(y){I.height(e),y.height(e);var i=I.children(".ug-strip-arrow-tip");S.placeElement(i,"center","middle");var n=y.children(".ug-strip-arrow-tip");S.placeElement(n,"center","middle")}var r=e+j.strippanel_padding_top+j.strippanel_padding_bottom;b.width(t),b.height(r),M.panelHeight=r;var o=t-j.strippanel_padding_left-j.strippanel_padding_right;if(y){var a=y.outerWidth();o=o-2*a-2*j.strippanel_padding_buttons}P.resize(o)}function a(){var e=P.getWidth(),t=M.panelHeight;if(y){I.width(e),y.width(e);var i=I.children(".ug-strip-arrow-tip");S.placeElement(i,"center","middle");var n=y.children(".ug-strip-arrow-tip");S.placeElement(n,"center","middle")}var r=e+j.strippanel_padding_left+j.strippanel_padding_right;b.width(r),b.height(t),M.panelWidth=r;var o=t-j.strippanel_padding_top-j.strippanel_padding_bottom;if(y){var a=y.outerHeight();o=o-2*a-2*j.strippanel_padding_buttons}P.resize(o)}function s(){0==j.strippanel_vertical_type?o():a()}function l(){y&&(S.placeElement(I,"left","top",j.strippanel_padding_left,j.strippanel_padding_top),S.placeElement(y,"right","top",j.strippanel_padding_right,j.strippanel_padding_top));var e=j.strippanel_padding_left;y&&(e+=y.outerWidth()+j.strippanel_padding_buttons),P.setPosition(e,j.strippanel_padding_top)}function u(){y&&(S.placeElement(I,"left","top",j.strippanel_padding_left,j.strippanel_padding_top),S.placeElement(y,"left","bottom",j.strippanel_padding_left,j.strippanel_padding_bottom));var e=j.strippanel_padding_top;y&&(e+=y.outerHeight()+j.strippanel_padding_buttons),P.setPosition(j.strippanel_padding_left,e)}function d(){0==j.strippanel_vertical_type?l():u(),x.placeElements()}function _(e){return S.isButtonDisabled(e)?!0:void("advance_item"==j.strippanel_buttons_role?E.nextItem():P.scrollForeward())}function g(e){return S.isButtonDisabled(e)?!0:void("advance_item"==j.strippanel_buttons_role?E.prevItem():P.scrollBack())}function c(){if(!y)return!0;if(0==P.isMoveEnabled())return S.disableButton(I),S.disableButton(y),!0;var e=P.getInnerStripLimits(),t=P.getInnerStripPos();t>=e.maxPos?S.disableButton(I):S.enableButton(I),t<=e.minPos?S.disableButton(y):S.enableButton(y)}function h(){c()}function p(){E.isLastItem()?S.disableButton(y):S.enableButton(y),E.isFirstItem()?S.disableButton(I):S.enableButton(I)}function f(){if(1==M.isEventsInited)return!1;if(M.isEventsInited=!0,y)if(S.addClassOnHover(y,"ug-button-hover"),S.addClassOnHover(I,"ug-button-hover"),S.setButtonOnClick(I,g),S.setButtonOnClick(y,_),"advance_item"!=j.strippanel_buttons_role)jQuery(P).on(P.events.STRIP_MOVE,h),m.on(E.events.SIZE_CHANGE,c);else{var e=E.getOptions();0==e.gallery_carousel&&jQuery(E).on(E.events.ITEM_CHANGE,p)}x.initEvents()}var m,v,b,y,I,w=this,T=jQuery(this),E=new UniteGalleryMain,S=new UGFunctions,P=new UGThumbsStrip,x=new UGPanelsBase;this.events={FINISH_MOVE:"gridpanel_move_finish",OPEN_PANEL:"open_panel",CLOSE_PANEL:"close_panel"};var j={strippanel_vertical_type:!1,strippanel_padding_top:8,strippanel_padding_bottom:8,strippanel_padding_left:0,strippanel_padding_right:0,strippanel_enable_buttons:!0,strippanel_buttons_skin:"",strippanel_padding_buttons:2,strippanel_buttons_role:"scroll_strip",strippanel_enable_handle:!0,strippanel_handle_align:"top",strippanel_handle_offset:0,strippanel_handle_skin:"",strippanel_background_color:""},C={strip_vertical_type:!0,strippanel_padding_left:8,strippanel_padding_right:8,strippanel_padding_top:0,strippanel_padding_bottom:0},A={strippanel_padding_left:8,strippanel_padding_right:8,strippanel_padding_top:8,strippanel_padding_bottom:8},M={panelType:"strip",panelWidth:0,panelHeight:0,isEventsInited:!1,isClosed:!1,orientation:null,originalPos:null,isFirstRun:!0};this.destroy=function(){y&&(S.destroyButton(y),S.destroyButton(I),jQuery(P).off(P.events.STRIP_MOVE),jQuery(E).off(E.events.ITEM_CHANGE),jQuery(E).off(E.events.SIZE_CHANGE)),x.destroy(),P.destroy()},this.getOrientation=function(){return M.orientation},this.setOrientation=function(e){M.orientation=e},this.init=function(t,i){e(t,i)},this.run=function(){i()},this.setHtml=function(e){n(e)},this.getElement=function(){return b},this.getSize=function(){var e=S.getElementSize(b);return e},this.setWidth=function(e){M.panelWidth=e},this.setHeight=function(e){M.panelHeight=e},this.resize=function(e){w.setWidth(e),s(),d()},this.__________Functions_From_Base_____=function(){},this.isPanelClosed=function(){return x.isPanelClosed()},this.getClosedPanelDest=function(){return x.getClosedPanelDest()},this.openPanel=function(e){x.openPanel(e)},this.closePanel=function(e){x.closePanel(e)},this.setOpenedState=function(e){x.setOpenedState(e)},this.setClosedState=function(e){x.setClosedState(e)},this.setCustomThumbs=function(e){P.setCustomThumbs(e)},this.setDisabledAtStart=function(e){x.setDisabledAtStart(e)}}function UGGridPanel(){function e(e,i){x=e,t(),i&&i.vertical_scroll&&(M.gridpanel_vertical_scroll=i.vertical_scroll),M=jQuery.extend(M,i),1==L.isHorType?(M=jQuery.extend(M,O),M=jQuery.extend(M,i)):1==M.gridpanel_vertical_scroll&&(M=jQuery.extend(M,z),M=jQuery.extend(M,i),M.grid_panes_direction="bottom");var n=x.getOptions(),r=n.gallery_skin;""==M.gridpanel_arrows_skin&&(M.gridpanel_arrows_skin=r);var o=e.getObjects();I=o.g_objWrapper,A.init(x,L,S,M,P),C=new UGThumbsGrid,C.init(x,M)}function t(){if(null==L.orientation)throw new Error("Wrong orientation, please set panel orientation before run")}function i(){t(),o(),C.run(),l(),u(),y(),d()}function n(){I.append("<div class='ug-grid-panel'></div>"),w=I.children(".ug-grid-panel"),L.isHorType?(w.append("<div class='grid-arrow grid-arrow-left-hortype ug-skin-"+M.gridpanel_arrows_skin+"'></div>"),w.append("<div class='grid-arrow grid-arrow-right-hortype ug-skin-"+M.gridpanel_arrows_skin+"'></div>"),E=w.children(".grid-arrow-left-hortype"),T=w.children(".grid-arrow-right-hortype")):0==M.gridpanel_vertical_scroll?(w.append("<div class='grid-arrow grid-arrow-left ug-skin-"+M.gridpanel_arrows_skin+"'></div>"),w.append("<div class='grid-arrow grid-arrow-right ug-skin-"+M.gridpanel_arrows_skin+"'></div>"),E=w.children(".grid-arrow-left"),T=w.children(".grid-arrow-right")):(w.append("<div class='grid-arrow grid-arrow-up ug-skin-"+M.gridpanel_arrows_skin+"'></div>"),w.append("<div class='grid-arrow grid-arrow-down ug-skin-"+M.gridpanel_arrows_skin+"'></div>"),E=w.children(".grid-arrow-up"),T=w.children(".grid-arrow-down")),A.setHtml(w),E.fadeTo(0,0),T.fadeTo(0,0),C.setHtml(w),r()}function r(){""!=M.gridpanel_background_color&&w.css("background-color",M.gridpanel_background_color)}function o(){"center"==M.gridpanel_grid_align&&(M.gridpanel_grid_align="middle")}function a(){var e=M.gridpanel_padding_border_top+M.gridpanel_padding_border_bottom,t=L.panelHeight-e;if(0==M.gridpanel_arrows_always_on){var i=C.getNumPanesEstimationByHeight(t);if(1==i)return t}var n=j.getElementSize(T),r=n.height,e=r+M.gridpanel_arrows_padding_vert;return 1==M.gridpanel_vertical_scroll&&(e*=2),e+=M.gridpanel_padding_border_top+M.gridpanel_padding_border_bottom,t=L.panelHeight-e}function s(){var e=M.gridpanel_padding_border_left+M.gridpanel_padding_border_right,t=L.panelWidth-e;if(0==M.gridpanel_arrows_always_on){var i=C.getNumPanesEstimationByWidth(t);if(1==i)return t}var n=j.getElementSize(T),r=n.width;return e+=2*(r+M.gridpanel_arrows_padding_hor),t=L.panelWidth-e}function l(){var e=!1;if(1==M.gridpanel_arrows_always_on)e=!0;else{var t=C.getNumPanes();t>1&&(e=!0)}1==e?(T.show().fadeTo(0,1),E.show().fadeTo(0,1),L.arrowsVisible=!0):(T.hide(),E.hide(),L.arrowsVisible=!1)}function u(){var e=C.getSize();1==L.isHorType?L.panelHeight=e.height+M.gridpanel_padding_border_top+M.gridpanel_padding_border_bottom:L.panelWidth=e.width+M.gridpanel_padding_border_left+M.gridpanel_padding_border_right,j.setElementSize(w,L.panelWidth,L.panelHeight)}function d(){return 1==L.isEventsInited?!1:(L.isEventsInited=!0,E&&(j.addClassOnHover(E),C.attachPrevPaneButton(E)),T&&(j.addClassOnHover(T),C.attachNextPaneButton(T)),void A.initEvents())}function _(){var e=M.gridpanel_padding_border_left;return e}function g(){var e=M.gridpanel_grid_align,t=0;switch(e){case"top":t=M.gridpanel_padding_border_top;break;case"bottom":t=M.gridpanel_padding_border_bottom}var i=_(),n=C.getElement();j.placeElement(n,i,e,0,t)}function c(){var e,t,i,n,r=j.getElementSize(E),o=C.getSize();switch(M.gridpanel_grid_align){default:case"top":e=M.gridpanel_padding_border_top+r.height+M.gridpanel_arrows_padding_vert;break;case"middle":e="middle";break;case"bottom":e=L.panelHeight-o.height-r.height-M.gridpanel_padding_border_bottom-M.gridpanel_arrows_padding_vert}var a=_(),s=C.getElement();j.placeElement(s,a,e);var o=C.getSize();switch(M.gridpanel_arrows_align_vert){default:case"center":case"middle":t=(o.top-r.height)/2,i=o.bottom+(L.panelHeight-o.bottom-r.height)/2,n=0;break;case"grid":t=o.top-r.height-M.gridpanel_arrows_padding_vert_vert,i=o.bottom+M.gridpanel_arrows_padding_vert,n=0;break;case"border":case"borders":t=M.gridpanel_padding_border_top,i="bottom",n=M.gridpanel_padding_border_bottom}j.placeElement(E,"center",t),j.placeElement(T,"center",i,0,n)}function h(){1==L.arrowsVisible?c():g()}function p(){var e,t,i,n,r=j.getElementSize(E),o=C.getSize(),a=M.gridpanel_padding_border_top;switch(M.gridpanel_grid_align){case"middle":switch(M.gridpanel_arrows_align_vert){default:var s=o.height+M.gridpanel_arrows_padding_vert+r.height;a=(L.panelHeight-s)/2;break;case"border":case"borders":var l=L.panelHeight-r.height-M.gridpanel_padding_border_bottom;a=(l-o.height)/2}break;case"bottom":var s=o.height+r.height+M.gridpanel_arrows_padding_vert;a=L.panelHeight-s-M.gridpanel_padding_border_bottom}var u=C.getElement(),d=_();j.placeElement(u,d,a);var o=C.getSize();switch(M.gridpanel_arrows_align_vert){default:case"center":case"middle":e=o.bottom+(L.panelHeight-o.bottom-r.height)/2,i=0;break;case"grid":e=o.bottom+M.gridpanel_arrows_padding_vert,i=0;break;case"border":case"borders":e="bottom",i=M.gridpanel_padding_border_bottom}t=-r.width/2-M.gridpanel_space_between_arrows/2,j.placeElement(E,"center",e,t,i);var n=Math.abs(t);j.placeElement(T,"center",e,n,i)}function f(){1==L.arrowsVisible?p():g()}function m(){var e,t,i,n,r=j.getElementSize(E),o=C.getSize();switch(M.gridpanel_grid_align){default:case"left":e=M.gridpanel_padding_border_left+M.gridpanel_arrows_padding_hor+r.width;break;case"middle":case"center":e="center";break;case"right":e=L.panelWidth-o.width-r.width-M.gridpanel_padding_border_right-M.gridpanel_arrows_padding_hor}var a=C.getElement();switch(j.placeElement(a,e,M.gridpanel_padding_border_top),o=C.getSize(),M.gridpanel_arrows_align_vert){default:case"center":case"middle":n=(o.height-r.height)/2+o.top;break;case"top":n=M.gridpanel_padding_border_top+M.gridpanel_arrows_padding_vert;break;case"bottom":n=L.panelHeight-M.gridpanel_padding_border_bottom-M.gridpanel_arrows_padding_vert-r.height}switch(M.gridpanel_arrows_align_hor){default:case"borders":t=M.gridpanel_padding_border_left,i=L.panelWidth-M.gridpanel_padding_border_right-r.width;break;case"grid":t=o.left-M.gridpanel_arrows_padding_hor-r.width,i=o.right+M.gridpanel_arrows_padding_hor;break;case"center":t=(o.left-r.width)/2,i=o.right+(L.panelWidth-o.right-r.width)/2}j.placeElement(E,t,n),j.placeElement(T,i,n)}function v(){var e,t=C.getSize();switch(M.gridpanel_grid_align){default:case"left":e=M.gridpanel_padding_border_left;break;case"middle":case"center":e="center";break;case"right":e=L.panelWidth-t.width-M.gridpanel_padding_border_right}var i=C.getElement();j.placeElement(i,e,M.gridpanel_padding_border_top)}function b(){1==L.arrowsVisible?m():v()}function y(){0==L.isHorType?1==M.gridpanel_vertical_scroll?h():f():b(),A.placeElements()}var I,w,T,E,S=this,P=jQuery(this),x=new UniteGalleryMain,j=new UGFunctions,C=new UGThumbsGrid,A=new UGPanelsBase;this.events={FINISH_MOVE:"gridpanel_move_finish",OPEN_PANEL:"open_panel",CLOSE_PANEL:"close_panel"};var M={gridpanel_vertical_scroll:!0,gridpanel_grid_align:"middle",gridpanel_padding_border_top:10,gridpanel_padding_border_bottom:4,gridpanel_padding_border_left:10,gridpanel_padding_border_right:10,gridpanel_arrows_skin:"",gridpanel_arrows_align_vert:"middle",gridpanel_arrows_padding_vert:4,gridpanel_arrows_align_hor:"center",gridpanel_arrows_padding_hor:10,gridpanel_space_between_arrows:20,gridpanel_arrows_always_on:!1,gridpanel_enable_handle:!0,gridpanel_handle_align:"top",gridpanel_handle_offset:0,gridpanel_handle_skin:"",gridpanel_background_color:""},z={gridpanel_grid_align:"middle",gridpanel_padding_border_top:2,gridpanel_padding_border_bottom:2},O={gridpanel_grid_align:"center"},L={panelType:"grid",isHorType:!1,arrowsVisible:!1,panelHeight:0,panelWidth:0,originalPosX:null,isEventsInited:!1,isClosed:!1,orientation:null};this.destroy=function(){E&&j.destroyButton(E),T&&j.destroyButton(T),A.destroy(),C.destroy()},this.getOrientation=function(){return L.orientation},this.setOrientation=function(e){switch(L.orientation=e,e){case"right":case"left":L.isHorType=!1;break;case"top":case"bottom":L.isHorType=!0;break;default:throw new Error("Wrong grid panel orientation: "+e)}},this.setHeight=function(e){if(1==L.isHorType)throw new Error("setHeight is not appliable to this orientatio ("+L.orientation+"). Please use setWidth");L.panelHeight=e;var t=a();C.setMaxHeight(t)},this.setWidth=function(e){if(0==L.isHorType)throw new Error("setWidth is not appliable to this orientatio ("+L.orientation+"). Please use setHeight");L.panelWidth=e;var t=s();C.setMaxWidth(t)},this.init=function(t,i){e(t,i)},this.setHtml=function(){n()},this.run=function(){i()},this.getElement=function(){return w},this.getSize=function(){
var e=j.getElementSize(w);return e},this.__________Functions_From_Base_____=function(){},this.isPanelClosed=function(){return A.isPanelClosed()},this.getClosedPanelDest=function(){return A.getClosedPanelDest()},this.openPanel=function(e){A.openPanel(e)},this.closePanel=function(e){A.closePanel(e)},this.setOpenedState=function(e){A.setOpenedState(e)},this.setClosedState=function(e){A.setClosedState(e)},this.setDisabledAtStart=function(e){A.setDisabledAtStart(e)}}function UGThumbsGrid(){function e(e,t,i){H=e.getObjects(),W=e,W.attachThumbsPanel("grid",Q),L=jQuery(e),k=H.g_objWrapper,N=H.g_arrItems,i===!0&&(V.isTilesMode=!0),V.numThumbs=N.length,d(t),V.isNavigationVertical="top"==U.grid_panes_direction||"bottom"==U.grid_panes_direction,1==V.isTilesMode?(Y.setFixedMode(),Y.setApproveClickFunction(P),Y.init(e,U),B=Y.getObjThumbs()):(t.thumb_fixed_size=!0,B.init(e,t))}function t(e){var t=k;e&&(t=e),t.append("<div class='ug-thumbs-grid'><div class='ug-thumbs-grid-inner'></div></div>"),R=t.children(".ug-thumbs-grid"),G=R.children(".ug-thumbs-grid-inner"),1==V.isTilesMode?Y.setHtml(G):B.setHtmlThumbs(G)}function n(){if(0==V.isHorizontal){if(0==V.gridHeight)throw new Error("You must set height before run.")}else if(0==V.gridWidth)throw new Error("You must set width before run.")}function r(){var e=W.getSelectedItem();if(n(),1==V.isFirstTimeRun&&(O(),1==V.isTilesMode?(l(),Y.run()):(B.setHtmlProperties(),l(),B.loadThumbsImages())),h(),1==V.isFirstTimeRun&&V.isTilesMode){var t=B.getThumbs();t.each(function(e,t){k.trigger(V.eventSizeChange,jQuery(t))}),t.fadeTo(0,1)}null!=e&&u(e.index),D.trigger(Q.events.PANE_CHANGE,V.currentPane),V.isFirstTimeRun=!1}function o(){if(1==V.isTilesMode)var e=Y.getGlobalTileSize();else var e=B.getGlobalThumbSize();return e}function a(){var e=o(),t=e.height,i=V.gridWidth,n=U.grid_num_rows*t+(U.grid_num_rows-1)*U.grid_space_between_rows+2*U.grid_padding;V.gridHeight=n,F.setElementSize(R,i,n),F.setElementSize(G,i,n),V.innerWidth=i,V.innerHeight=n}function s(){var e=o(),t=e.width,i=U.grid_num_cols*t+(U.grid_num_cols-1)*U.grid_space_between_cols+2*U.grid_padding,n=V.gridHeight;V.gridWidth=i,F.setElementSize(R,i,n),F.setElementSize(G,i,n),V.innerWidth=i,V.innerHeight=n}function l(){0==V.isHorizontal?s():a()}function u(e){var t=T(e);return-1==t?!1:void Q.gotoPane(t,"scroll")}function d(e){U=jQuery.extend(U,e),B.setOptions(e)}function _(){var e=G.children(".ug-thumb-wrapper"),t=0,n=0,r=0,o=0,a=0,s=0;V.innerWidth=0,V.numPanes=1,V.arrPanes=[],V.numThumbsInPane=0,V.arrPanes.push(o);var l=e.length;for(i=0;i<l;i++){var u=jQuery(e[i]);F.placeElement(u,t,n);var d=u.outerWidth(),_=u.outerHeight();t>a&&(a=t);var g=n+_;g>s&&(s=g);var c=a+d;c>V.innerWidth&&(V.innerWidth=c),t+=d+U.grid_space_between_cols,r++,r>=U.grid_num_cols&&(n+=_+U.grid_space_between_rows,t=o,r=0),1==V.numPanes&&V.numThumbsInPane++,n+_>V.gridHeight&&(n=0,o=V.innerWidth+U.grid_space_between_cols,t=o,r=0,1==V.isMaxHeight&&1==V.numPanes&&(V.gridHeight=s,R.height(V.gridHeight)),i<l-1&&(V.numPanes++,V.arrPanes.push(o)))}G.width(V.innerWidth),1==V.isMaxHeight&&1==V.numPanes&&(V.gridHeight=s,R.height(s))}function g(){var e=G.children(".ug-thumb-wrapper"),t=0,n=0,r=0,o=0,a=0,s=0;V.innerWidth=0,V.numPanes=1,V.arrPanes=[],V.numThumbsInPane=0,V.arrPanes.push(a);var l=e.length;for(i=0;i<l;i++){var u=jQuery(e[i]);F.placeElement(u,t,n);var d=u.outerWidth(),_=u.outerHeight();t+=d+U.grid_space_between_cols;var g=n+_;g>r&&(r=g),o++,o>=U.grid_num_cols&&(n+=_+U.grid_space_between_rows,t=a,o=0),1==V.numPanes&&V.numThumbsInPane++,g=n+_;var c=s+V.gridHeight;g>c&&(1==V.isMaxHeight&&1==V.numPanes&&(V.gridHeight=r,R.height(V.gridHeight),c=V.gridHeight),n=c+U.grid_space_between_rows,s=n,a=0,t=a,o=0,i<l-1&&(V.numPanes++,V.arrPanes.push(n)))}G.height(r),V.innerHeight=r,1==V.isMaxHeight&&1==V.numPanes&&(V.gridHeight=r,R.height(r))}function c(){var e=G.children(".ug-thumb-wrapper"),t=U.grid_padding,n=U.grid_padding,r=n,o=t,a=0,s=0,l=0,u=0;V.innerWidth=0,V.numPanes=1,V.arrPanes=[],V.numThumbsInPane=0,V.arrPanes.push(t-U.grid_padding);var d=e.length;for(i=0;i<d;i++){var _=jQuery(e[i]),g=_.outerWidth(),c=_.outerHeight();o-t+g>V.gridWidth&&(u++,r=0,u>=U.grid_num_rows?(u=0,t=o,l=0,r=n,1==V.numPanes&&(V.gridWidth=a+U.grid_padding,R.width(V.gridWidth)),V.numPanes++,V.arrPanes.push(t-U.grid_padding)):(o=t,r=l+U.grid_space_between_rows)),F.placeElement(_,o,r);var h=o+g;h>a&&(a=h);var p=r+c;p>l&&(l=p),p>s&&(s=p);var h=a+g;h>V.innerWidth&&(V.innerWidth=h),o+=g+U.grid_space_between_cols,1==V.numPanes&&V.numThumbsInPane++}V.innerWidth=a,V.innerHeight=l,G.width(V.innerWidth),G.height(V.innerHeight),1==V.numPanes&&(V.gridWidth=a+U.grid_padding,V.gridHeight=s+U.grid_padding,R.width(V.gridWidth),R.height(V.gridHeight))}function h(){0==V.isHorizontal?V.isNavigationVertical?g():_():c()}function p(e){if(0>e||e>=V.numThumbs)throw new Error("Thumb not exists: "+e);return!0}function f(e){if(e>=V.numPanes||0>e)throw new Error("Pane "+index+" doesn't exists.");return!0}function m(e){var t=I(e);return 0==t?!1:void G.css(t)}function v(e){var t=I(e);return 0==t?!1:void G.stop(!0).animate(t,{duration:U.grid_transition_duration,easing:U.grid_transition_easing,queue:!1})}function b(){var e=-V.arrPanes[V.currentPane];v(e)}function y(){return 1==V.isNavigationVertical?V.gridHeight:V.gridWidth}function I(e){var t={};return 1==V.isNavigationVertical?t.top=e+"px":t.left=e+"px",t}function w(){var e=F.getElementSize(G);return 1==V.isNavigationVertical?e.top:e.left}function T(e){if(0==p(e))return-1;var t=Math.floor(e/V.numThumbsInPane);return t}function E(){if(1==V.numPanes)return!1;var e=F.getStoredEventData(V.storedEventID),t=e.diffTime,i=w(),n=Math.abs(i-e.startInnerPos);return n>30?!0:n>5&&t>300?!0:!1}function S(){var e=F.getStoredEventData(V.storedEventID),t=w();diffPos=Math.abs(e.startInnerPos-t);var i=y(),n=Math.round(3*i/8);return diffPos>=n?!0:e.diffTime<300&&diffPos>25?!0:!1}function P(){if(1==V.numPanes)return!0;var e=F.isApproveStoredEventClick(V.storedEventID,V.isNavigationVertical);return e}function x(e){if(1==E())return!0;var t=jQuery(this),i=B.getItemByThumb(t);W.selectItem(i)}function j(e){if(1==V.numPanes)return!0;if(1==V.touchActive)return!0;0==V.isTilesMode&&e.preventDefault(),V.touchActive=!0;var t={startInnerPos:w()};F.storeEventData(e,V.storedEventID,t)}function C(){if(0==U.grid_vertical_scroll_ondrag)return!1;if(1==V.isNavigationVertical)return!1;var e=F.handleScrollTop(V.storedEventID);return"vert"===e?!0:!1}function A(e){if(0==V.touchActive)return!0;e.preventDefault(),F.updateStoredEventData(e,V.storedEventID);var t=F.getStoredEventData(V.storedEventID,V.isNavigationVertical),i=C();if(i)return!0;var n=t.diffMousePos,r=t.startInnerPos+n,o=n>0?"prev":"next",a=V.arrPanes[V.numPanes-1];0==U.grid_carousel&&r>0&&"prev"==o&&(r/=3),0==U.grid_carousel&&-a>r&&"next"==o&&(r=t.startInnerPos+n/3),m(r)}function M(e){if(0==V.touchActive)return!0;F.updateStoredEventData(e,V.storedEventID);var t=F.getStoredEventData(V.storedEventID,V.isNavigationVertical);if(V.touchActive=!1,0==S())return b(),!0;var i=w(),n=i-t.startInnerPos,r=n>0?"prev":"next";"next"==r?0==U.grid_carousel&&Q.isLastPane()?b():Q.nextPane():0==U.grid_carousel&&Q.isFirstPane()?b():Q.prevPane()}function z(){var e=W.getSelectedItem();B.setThumbSelected(e.objThumbWrapper),u(e.index)}function O(){if(0==V.isTilesMode){B.initEvents();var e=R.find(".ug-thumb-wrapper");e.on("click touchend",x),L.on(W.events.ITEM_CHANGE,z)}else Y.initEvents();R.bind("mousedown touchstart",j),jQuery("body").bind("mousemove touchmove",A),jQuery(window).add("body").bind("mouseup touchend",M)}var L,H,k,N,R,G,Q=this,D=jQuery(this),W=new UniteGalleryMain,F=new UGFunctions,B=new UGThumbsGeneral,Y=new UGTileDesign,U={grid_panes_direction:"left",grid_num_cols:2,grid_num_rows:2,grid_space_between_cols:10,grid_space_between_rows:10,grid_transition_duration:300,grid_transition_easing:"easeInOutQuad",grid_carousel:!1,grid_padding:0,grid_vertical_scroll_ondrag:!1};this.events={PANE_CHANGE:"pane_change"};var V={eventSizeChange:"thumb_size_change",isHorizontal:!1,isMaxHeight:!1,isMaxWidth:!1,gridHeight:0,gridWidth:0,innerWidth:0,innerHeight:0,numPanes:0,arrPanes:0,numThumbs:0,currentPane:0,numThumbsInPane:0,isNavigationVertical:!1,touchActive:!1,startScrollPos:0,isFirstTimeRun:!0,isTilesMode:!1,storedEventID:"thumbsgrid"};this.destroy=function(){if(0==V.isTilesMode){var e=R.find(".ug-thumb-wrapper");e.off("click"),e.off("touchend"),L.on(W.events.ITEM_CHANGE),B.destroy()}else Y.destroy();R.unbind("mousedown"),R.unbind("touchstart"),jQuery("body").unbind("mousemove"),jQuery("body").unbind("touchmove"),jQuery(window).add("body").unbind("touchend"),jQuery(window).add("body").unbind("mouseup"),D.off(Q.events.PANE_CHANGE)},this.__________EXTERNAL_GENERAL_________=function(){},this.setThumbUnselected=function(e){B.setThumbUnselected(e)},this.isItemThumbVisible=function(e){var t=e.index,i=T(t);return i==V.currentPane?!0:!1},this.__________EXTERNAL_API_________=function(){},this.getNumPanesEstimationByHeight=function(e){if(1==V.isTilesMode)var t=U.tile_height;else var i=B.getOptions(),t=i.thumb_height;var n=B.getNumThumbs(),r=Math.ceil(n/U.grid_num_cols),o=r*t+(r-1)*U.grid_space_between_rows,a=Math.ceil(o/e);return a},this.getNumPanesEstimationByWidth=function(e){if(V.isTilesMode)var t=U.tile_width;else var i=B.getOptions(),t=i.thumb_width;var n=B.getNumThumbs(),r=Math.ceil(n/U.grid_num_rows),o=r*t+(r-1)*U.grid_space_between_cols,a=Math.ceil(o/e);return a},this.getHeightEstimationByWidth=function(e){if(0==V.isTilesMode)throw new Error("This function works only with tiles mode");var t=B.getNumThumbs(),i=F.getNumItemsInSpace(e,U.tile_width,U.grid_space_between_cols),n=Math.ceil(t/i);n>U.grid_num_rows&&(n=U.grid_num_rows);var r=F.getSpaceByNumItems(n,U.tile_height,U.grid_space_between_rows);return r+=2*U.grid_padding},this.getElement=function(){return R},this.getSize=function(){var e=F.getElementSize(R);return e},this.getNumPanes=function(){return V.numPanes},this.isFirstPane=function(){return 0==V.currentPane?!0:!1},this.isLastPane=function(){return V.currentPane==V.numPanes-1?!0:!1},this.getPaneInfo=function(){var e={pane:V.currentPane,total:V.numPanes};return e},this.getPane=function(){return V.currentPane},this.setWidth=function(e){V.gridWidth=e,V.isHorizontal=!0},this.setMaxWidth=function(e){V.gridWidth=e,V.isMaxWidth=!0,V.isHorizontal=!0},this.setHeight=function(e){V.gridHeight=e,V.isHorizontal=!1},this.setMaxHeight=function(e){V.gridHeight=e,V.isMaxHeight=!0,V.isHorizontal=!1},this.gotoPane=function(e,t){if(0==f(e))return!1;if(e==V.currentPane)return!1;var i=-V.arrPanes[e];V.currentPane=e,v(i),D.trigger(Q.events.PANE_CHANGE,e)},this.nextPane=function(){var e=V.currentPane+1;if(e>=V.numPanes){if(0==U.grid_carousel)return!0;e=0}Q.gotoPane(e,"next")},this.prevPane=function(){var e=V.currentPane-1;return 0>e&&(e=V.numPanes-1,0==U.grid_carousel)?!1:void Q.gotoPane(e,"prev")},this.attachNextPaneButton=function(e){return F.setButtonOnClick(e,Q.nextPane),1==U.grid_carousel?!0:(Q.isLastPane()&&e.addClass("ug-button-disabled"),void D.on(Q.events.PANE_CHANGE,function(){Q.isLastPane()?e.addClass("ug-button-disabled"):e.removeClass("ug-button-disabled")}))},this.attachPrevPaneButton=function(e){return F.setButtonOnClick(e,Q.prevPane),1==U.grid_carousel?!0:(Q.isFirstPane()&&e.addClass("ug-button-disabled"),void D.on(Q.events.PANE_CHANGE,function(){Q.isFirstPane()?e.addClass("ug-button-disabled"):e.removeClass("ug-button-disabled")}))},this.attachBullets=function(e){e.setActive(V.currentPane),jQuery(e).on(e.events.BULLET_CLICK,function(t,i){Q.gotoPane(i,"theme"),e.setActive(i)}),jQuery(Q).on(Q.events.PANE_CHANGE,function(t,i){e.setActive(i)})},this.getObjTileDesign=function(){return Y},this.init=function(t,i,n){e(t,i,n)},this.run=function(){r()},this.setHtml=function(e){t(e)}}function UGTiles(){function e(e,i){g_objects=e.getObjects(),re=e,q=jQuery(e),K=g_objects.g_objWrapper,$=g_objects.g_arrItems,ue=jQuery.extend(ue,i),t(),ae.init(e,ue),se=ae.getObjThumbs()}function t(){ue.tiles_min_columns<1&&(ue.tiles_min_columns=1),0!=ue.tiles_max_columns&&ue.tiles_max_columns<ue.tiles_min_columns&&(ue.tiles_max_columns=ue.tiles_min_columns)}function i(e){if(!e)var e=K;J=e;var t=ue.tiles_type;e.addClass("ug-tiletype-"+t),ae.setHtml(e),e.children(".ug-thumb-wrapper").hide()}function n(){if(J.addClass("ug-tiles-rest-mode"),de.isTransInited=!0,1==ue.tiles_enable_transition){J.addClass("ug-tiles-transit");var e=ae.getOptions();1==e.tile_enable_image_effect&&0==e.tile_image_effect_reverse&&J.addClass("ug-tiles-transit-overlays"),de.isTransActive=!0}}function r(){return oe.getElementSize(J).width}function o(){return 0==de.isTransInited?!1:(J.addClass("ug-tiles-transition-active"),J.removeClass("ug-tiles-rest-mode"),0==de.isTransActive?!1:void ae.disableEvents())}function a(){return 0==de.isTransInited?!1:(J.removeClass("ug-tiles-transition-active"),void J.addClass("ug-tiles-rest-mode"))}function s(){1==de.isTransActive?(setTimeout(function(){ae.enableEvents(),ae.triggerSizeChangeEventAllTiles(),a()},800),de.handle&&clearTimeout(de.handle),de.handle=setTimeout(function(){a(),ae.triggerSizeChangeEventAllTiles(),de.handle=null},2e3)):(ae.triggerSizeChangeEventAllTiles(),a())}function l(){le.colWidth=(le.availWidth-le.colGap*(le.numCols-1))/le.numCols,le.colWidth=Math.floor(le.colWidth),le.totalWidth=oe.getSpaceByNumItems(le.numCols,le.colWidth,le.colGap)}function u(){if(le.colWidth=ue.tiles_col_width,le.minCols=ue.tiles_min_columns,0==re.isMobileMode()?le.colGap=ue.tiles_space_between_cols:le.colGap=ue.tiles_space_between_cols_mobile,le.galleryWidth=r(),le.availWidth=le.galleryWidth,1==ue.tiles_include_padding&&(le.availWidth=le.galleryWidth-2*le.colGap),1==ue.tiles_exact_width)le.numCols=oe.getNumItemsInSpace(le.availWidth,le.colWidth,le.colGap),le.maxCols>0&&le.numCols>le.maxCols&&(le.numCols=le.maxCols),le.numCols<le.minCols?(le.numCols=le.minCols,l()):le.totalWidth=le.numCols*(le.colWidth+le.colGap)-le.colGap;else{var e=oe.getNumItemsInSpaceRound(le.availWidth,le.colWidth,le.colGap);e<le.minCols?e=le.minCols:0!=le.maxCols&&e>le.maxCols&&(e=le.maxCols),le.numCols=e,l()}switch(ue.tiles_align){case"center":default:le.addX=Math.round((le.galleryWidth-le.totalWidth)/2);break;case"left":le.addX=0;break;case"right":le.addX=le.galleryWidth-le.totalWidth}for(le.maxColHeight=0,le.arrPosx=[],col=0;col<le.numCols;col++){var t=oe.getColX(col,le.colWidth,le.colGap);le.arrPosx[col]=t+le.addX}le.colHeights=[0]}function d(){var e=0,t=999999999;for(col=0;col<le.numCols;col++){if(void 0==le.colHeights[col]||0==le.colHeights[col])return col;le.colHeights[col]<t&&(e=col,t=le.colHeights[col])}return e}function _(e,t,i,n){if(null===n||"undefined"==typeof n)var n=d();var r=0;void 0!==le.colHeights[n]&&(r=le.colHeights[n]);var o=ae.getTileHeightByWidth(le.colWidth,e);if(null===o){if(1==ue.tiles_enable_transition)throw new Error("Can't know tile height, please turn off transition");var a=oe.getElementSize(e);o=a.height}var s=le.arrPosx[n];oe.placeElement(e,s,r);var l=r+o;le.colHeights[n]=l+le.colGap,le.maxColHeight<l&&(le.maxColHeight=l),1==t&&e.show().fadeTo(0,1),1==i&&J.height(le.maxColHeight)}function g(e){e||(e=!1),u();var t=se.getThumbs();o(),ae.resizeAllTiles(le.colWidth,ae.resizemode.VISIBLE_ELEMENTS);for(var i=0;i<t.length;i++){var n=jQuery(t[i]),r=void 0;1==ue.tiles_keep_order&&(r=oe.getColByIndex(le.numCols,i)),_(n,e,!1,r)}s();var a=J.height();1==de.isTransActive&&a>le.maxColHeight?setTimeout(function(){J.height(le.maxColHeight)},700):J.height(le.maxColHeight)}function c(e){var t=e.index(),i=re.getItem(t);if(i.ordered_placed===!0)return!1;var n=oe.getPrevRowSameColIndex(t,le.numCols);if(0>n)return!0;var r=re.getItem(n);return r.ordered_placed===!0?!0:!1}function h(e,t){if(t!==!0){var i=c(e);if(0==i)return!1}var n=e.index(),r=oe.getColByIndex(le.numCols,n),o=re.getItem(n);ae.resizeTile(e,le.colWidth),_(e,!0,!0,r),o.ordered_placed=!0;var a=re.getNumItems(),s=oe.getNextRowSameColIndex(n,le.numCols);if(s>=a)return!1;var l=se.getThumbByIndex(s),u=re.getItem(s);se.isThumbLoaded(l);se.isThumbLoaded(l)&&!u.ordered_placed&&h(l,!0)}function p(e,t){if(1==t)return!1;e=jQuery(e);var i=jQuery(e).parent();se.triggerImageLoadedEvent(i,e),1==ue.tiles_keep_order?h(i):(ae.resizeTile(i,le.colWidth),_(i,!0,!0))}function f(){var e=se.getThumbs();u();var t=Math.abs(le.galleryWidth-le.totalWidth);if(1==ue.tiles_set_initial_height&&0==oe.isScrollbarExists()&&25>t){var i=(e.length,Math.ceil(e.length/le.numCols)),r=i*ue.tiles_col_width*.75;J.height(r),u()}e.fadeTo(0,0);var o=jQuery(J).find("img.ug-thumb-image");if(1==de.isFixedMode)ne.trigger(ie.events.TILES_FIRST_PLACED),g(!0),oe.checkImagesLoaded(o,function(){n()});else{var a=le.numCols,s=le.galleryWidth,l=!1;oe.checkImagesLoaded(o,function(){u(),(a!=le.numCols||s!=le.galleryWidth)&&g(!1),n()},function(e,t){0==l&&ne.trigger(ie.events.TILES_FIRST_PLACED),l=!0,p(e,t)})}}function m(){var e=r(),t=se.getThumbs(),i=ue.tiles_justified_row_height,n=[],o=0,a=ue.tiles_justified_space_between,s=t.length;jQuery.each(t,function(e,t){t=jQuery(t);var r=se.getItemByThumb(t),a=r.thumbWidth,s=r.thumbHeight;s!==i&&(a=Math.floor(r.thumbRatioByWidth*i)),n[e]=a,o+=a});var l=Math.ceil(o/e);l>s&&(l=s);var u=o/l,d=[],_=0,g=[],c=[],h=0,p=0;jQuery.each(t,function(e,t){var i=n[e];h+i/2>(p+1)*u&&(g[d.length]=_,d.push(c),c=[],_=0,p++),h+=i,_+=i,c.push(t)}),g[d.length]=_,d.push(c);var f=[],m=[],v=0;jQuery.each(d,function(t,r){var o=(r.length,g[t]),s=(r.length-1)*a,l=(e-s)/o,u=Math.round(i*l);v+=u,t>0&&(v+=a),m.push(u);var d=u/i,_=[],c=s;jQuery.each(r,function(e,t){var i=jQuery(t),r=i.index(),o=n[r],a=Math.round(o*d);_[e]=a,c+=a});var h=c-e;jQuery.each(_,function(e,t){return 0==h?!1:(0>h?(_[e]=t+1,h++):(_[e]=t-1,h--),void(e==_.length-1&&0!=h&&(_[e]-=h)))}),f[t]=_});var b={arrRows:d,arrRowWidths:f,arrRowHeights:m,gap:a,totalHeight:v};return b}function v(e){if(!e)var e=!1;var t=r(),i=m();J.height(i.totalHeight);var n=r();n!=t&&(i=m()),o();var a=0,l=0;jQuery.each(i.arrRows,function(t,n){var r=i.arrRowWidths[t],o=i.arrRowHeights[t],s=0;jQuery.each(n,function(t,n){var u=jQuery(n),d=o,_=r[t];ae.resizeTile(u,_,d,ae.resizemode.VISIBLE_ELEMENTS),oe.placeElement(u,s,a),s+=_,s>l&&(l=s),s+=i.gap,1==e&&jQuery(n).show()}),a+=o+i.gap}),s()}function b(){var e=jQuery(K).find("img.ug-thumb-image"),t=se.getThumbs();t.fadeTo(0,0),oe.checkImagesLoaded(e,function(){setTimeout(function(){v(!0),t.fadeTo(0,1),ne.trigger(ie.events.TILES_FIRST_PLACED),n()})},function(e,t){e=jQuery(e);var i=jQuery(e).parent();se.triggerImageLoadedEvent(i,e)})}function y(){var e=jQuery(K).find("img.ug-thumb-image"),t=se.getThumbs();t.fadeTo(0,0),oe.checkImagesLoaded(e,function(){w(!0),ne.trigger(ie.events.TILES_FIRST_PLACED),n()},function(e,t){e=jQuery(e);var i=jQuery(e).parent();se.triggerImageLoadedEvent(i,e)})}function I(){var e=r();_e.galleryWidth=e,ee={},_e.colWidth=ue.tiles_nested_col_width,_e.optimalTileWidth=ue.tiles_nested_optimal_tile_width,_e.currentGap=ue.tiles_space_between_cols,1==re.isMobileMode()&&(_e.currentGap=ue.tiles_space_between_cols_mobile),null==_e.colWidth?_e.colWidth=Math.floor(_e.optimalTileWidth/_e.nestedOptimalCols):_e.optimalTileWidth>_e.colWidth?_e.nestedOptimalCols=Math.ceil(_e.optimalTileWidth/_e.colWidth):_e.nestedOptimalCols=1,_e.maxColumns=oe.getNumItemsInSpace(e,_e.colWidth,_e.currentGap),_e.colWidth=oe.getItemSizeInSpace(e,_e.maxColumns,_e.currentGap),_e.gridY=0,te=[];var t=se.getThumbs();switch(t.each(function(){var e=jQuery(this),t=T(e);te.push(t)}),_e.optimalTileWidth>_e.colWidth?_e.nestedOptimalCols=Math.ceil(_e.optimalTileWidth/_e.colWidth):_e.nestedOptimalCols=1,_e.totalWidth=_e.maxColumns*(_e.colWidth+_e.currentGap)-_e.currentGap,ue.tiles_align){case"center":default:_e.addX=Math.round((_e.galleryWidth-_e.totalWidth)/2);break;case"left":_e.addX=0;break;case"right":_e.addX=_e.galleryWidth-_e.totalWidth}_e.maxGridY=0}function w(e){var t=r();I(),P();var i=_e.maxGridY*(_e.colWidth+_e.currentGap)-_e.currentGap;J.height(i);var n=r();n!=t&&(I(),P()),0==ue.tiles_nested_debug&&Y(e)}function T(e){var t,i,n={},r=_e.colWidth,o=_e.currentGap,a=ae.getTileImageSize(e),s=e.index(),l=Math.ceil(E(s)*(1*_e.nestedOptimalCols/3)+2*_e.nestedOptimalCols/3),u=a.width,d=a.height,_=u/d;return u>d?(t=l,i=Math.round(t/_),0==i&&(i=1)):(i=l,t=Math.round(i*_),0==t&&(t=1)),n.dimWidth=t,n.dimHeight=i,n.width=t*r+o*(t-1),n.height=i*r+o*(i-1),n.imgWidth=u,n.imgHeight=d,n.left=0,n.top=0,n}function E(e){return Math.abs(Math.sin(Math.abs(1e3*Math.sin(e))))}function S(e,t){if(0==t){for(var i=_e.currentItem;i<te.length;i++)x(i,!0);_e.currentItem=te.length-1}else x(_e.currentItem,!0);for(var i=0;i<=_e.currentItem;i++)U(i,!0);_e.currentItem++}function P(e){if(1==ue.tiles_nested_debug)return"undefined"==typeof e&&(e=!0),S(!0,e),!1;for(var t=0;t<te.length;t++)x(t,!0)}function x(e,t){if(!t)var t=!1;_e.maxColHeight=0;for(var i=oe.getObjectLength(ee),n=_e.gridY;i+1>=n;n++){for(var r=0;r<_e.maxColumns;r++)if(0==Q(_e.gridY)||0==F(_e.gridY,r)){var o=G(r);return void j(e,o,r)}_e.gridY++}}function j(e,t,i){var n=jQuery.extend(!0,{},te[e]),r=n.dimWidth,o=t-n.dimWidth,a=_e.nestedOptimalCols,s=t<=n.dimWidth||.33*a>=o||a>=t;if(s)H(e,t);else if(a>=o)a>=4?1==R(Math.floor(t/2),i)?H(e,Math.floor(t/2)+1):H(e,Math.floor(t/2)):H(objImage,t);else if(1==R(r,i))switch(r>=a){case!0:H(e,r-1);break;case!1:H(e,r+1)}n=jQuery.extend(!0,{},te[e]);var l=O(e,n.dimWidth,i);if(_e.columnsValueToEnableHeightResize<=l[0]&&_e.maxColumns>=2*_e.nestedOptimalCols){var u=L(i,n),d=k(e,u.newHeight,!0);te[e].dimHeight=d.dimHeight;var _=z(l,d.dimWidth,i),g=C(_),c=!1;g>=2&&(c=!0),u.newHeight>=n.dimHeight&&(n=k(e,u.newHeight,!0));var h=A(u.idToResize,u.newHeight,n.dimHeight);n.top=_e.gridY,n.left=i,h.push({tileID:e,sizes:n});var p=N(h),f=N(_);return f>p||1==c?void M(h):void M(_)}n.left=i,n.top=_e.gridY,te[e]=n,D(e,n,i,_e.gridY),_e.maxGridY=n.top+n.dimHeight}function C(e){for(var t=0,i=0,n=0;n<e.length-1;n++){var r=e[n].sizes,o=-1,a=-1;Q(r.top+r.dimHeight)&&_e.maxColumns>r.left+r.dimWidth&&(o=ee[r.top+r.dimHeight-1][r.left+r.dimWidth],a=ee[r.top+r.dimHeight][r.left+r.dimWidth]),o!=a&&t++}for(var n=0;n<e.length-1;n++){var r=e[n].sizes,o=-1,a=-1;Q(r.top+r.dimHeight)&&r.left-1>=0&&(o=ee[r.top+r.dimHeight-1][r.left-1],a=ee[r.top+r.dimHeight][r.left-1]),o!=a&&i++}return Math.max(i,t)}function A(e,t,i){var n=te[e],r=n.dimHeight,o=(n.dimWidth,n.left),a=n.top,s=(parseInt(a/(_e.colWidth+_e.currentGap)),parseInt(o/(_e.colWidth+_e.currentGap)),r-t+i),l=k(e,s,!0),u=[];return u.push({tileID:e,sizes:l}),u}function M(e){for(var t=0;t<e.length;t++){var i=e[t].sizes,n=e[t].tileID;te[n]=jQuery.extend(!0,{},i),D(n,i,i.left,i.top)}}function z(e,t){for(var i=0,n=0,r=[],o=0,a=0,s=0;s<e[1].length;s++){var l=e[1][s],u=te[e[1][s]];if(n+=u.dimHeight,0!=s)i+=u.dimHeight,r.push([l,u.dimHeight]);else{var d=H(l,t,!0);i+=d.dimHeight,r.push([e[1][s],d.dimHeight])}}o=u.left,a=u.top;for(var _=n,g=[],s=r.length-1;s>=0;s--){var c,l=r[s][0];0!=s?(c=Math.max(Math.round(1*n/3),Math.floor(r[s][1]*(n/i))),_-=c,d=k(l,c,!0),d.left=o,d.top=a,g.push({tileID:l,sizes:d}),a+=d.dimHeight):(c=_,d=k(l,c,!0),d.left=o,d.top=a,g.push({tileID:l,sizes:d}))}return g}function O(e,t,i){var n=_e.gridY-1,r=0,o=0,a=1,s=[],l=[];if(s.push(e),n>=0){for(o=0;n>=0;){if(r=ee[n][i],"undefined"!=typeof ee[n][i-1]&&ee[n][i-1]==ee[n][i]||"undefined"!=typeof ee[n][i+t]&&ee[n][i+t-1]==ee[n][i+t]||ee[n][i]!=ee[n][i+t-1])return l.push(a),l.push(s),l;o!=r&&(a++,s.push(r)),n--,o=r}return l.push(a),l.push(s),l}return[0,[]]}function L(e,t){var i=0,n=0,r=t.dimWidth,o=t.dimHeight,a=0,s=0,l=jQuery.map(ee,function(e,t){return[e]});if("undefined"==typeof l[_e.gridY]||"undefined"==typeof l[_e.gridY][e-1])n=0;else for(var u=0;;){if("undefined"==typeof ee[_e.gridY+u]||-1==ee[_e.gridY+u][e-1])break;a=ee[_e.gridY+u][e-2],u++,n++}if("undefined"==typeof l[_e.gridY]||"undefined"==typeof l[_e.gridY][e+r])i=0;else for(u=0;;){if("undefined"==typeof ee[_e.gridY+u]||-1==ee[_e.gridY+u][e+r])break;s=ee[_e.gridY+u][e+r+1],u++,i++}var d=0,_=0;Math.abs(o-n)<Math.abs(o-i)&&0!=n?(d=n,_=a):0!=i?(d=i,_=s):d=o;var g={newHeight:d,idToResize:_};return g}function H(e,t,i){i||(i=!1);var n=_e.colWidth,r=_e.currentGap,o=te[e],a=o.imgWidth,s=o.imgHeight,l=a/s;if(dimWidth=t,dimHeight=Math.round(dimWidth/l),1==i){var u=jQuery.extend(!0,{},o);return u.dimWidth=dimWidth,u.dimHeight=dimHeight,u.width=dimWidth*n+r*(dimWidth-1),u.height=dimHeight*n+r*(dimHeight-1),u}o.dimWidth=dimWidth,o.dimHeight=dimHeight,o.width=dimWidth*n+r*(dimWidth-1),o.height=dimHeight*n+r*(dimHeight-1)}function k(e,t,i){i||(i=!1);var n=te[e],r=n.dimWidth,o=_e.colWidth,a=_e.currentGap;if(1==i){var s=jQuery.extend(!0,{},n);return s.dimHeight=t,s.width=r*o+a*(r-1),s.height=t*o+a*(t-1),s}n.dimHeight=t,n.width=r*o+a*(r-1),n.height=t*o+a*(t-1)}function N(e){for(var t=0,i=0,n=0;n<e.length;n++){var r=te[e[n].tileID];if(0==r.dimHeight||0==r.height)return;resizeVal=r.dimWidth/r.dimHeight/(r.imgWidth/r.imgHeight),resizeVal<1&&(resizeVal=1/resizeVal),t+=resizeVal,i++}return t/i}function R(e,t){var i=_e.gridY-1;return 0>=i||0==Q(i)?!1:ee[i][t+e-1]!=ee[i][t+e]?!0:!1}function G(e){var t=e,i=0;if(1==Q(_e.gridY))for(;0==F(_e.gridY,t);)i++,t++;else i=_e.maxColumns;return i}function Q(e){return"undefined"==typeof ee[e]?!1:!0}function D(e,t,i,n){for(var r=0;r<t.dimHeight;r++)for(var o=0;o<t.dimWidth;o++)0==Q(n+r)&&W(n+r),B(n+r,i+o,e)}function W(e){ee[e]=new Object;for(var t=0;t<_e.maxColumns;t++)ee[e][t]=-1}function F(e,t){return-1!=ee[e][t]}function B(e,t,i){ee[e][t]=i}function Y(e){if(!e)var e=!1;o();for(var t=0;t<te.length;t++)U(t,e);J.height(_e.maxColHeight),s()}function U(e,t){var i=se.getThumbByIndex(e),n=te[e],r=n.top*(_e.colWidth+_e.currentGap),o=_e.addX+n.left*(_e.colWidth+_e.currentGap);ae.resizeTile(i,n.width,n.height,ae.resizemode.VISIBLE_ELEMENTS),oe.placeElement(i,o,r),r+n.height>_e.maxColHeight&&(_e.maxColHeight=r+n.height),1==t&&i.fadeTo(0,1)}function V(){if(1==de.isFirstTimeRun)return!0;switch(ue.tiles_type){case"columns":g(!1);break;case"justified":v(!1);break;case"nested":var e=re.isMobileMode();1==e?g(!1):w(!1)}}function X(){q.on(re.events.SIZE_CHANGE,V),ae.initEvents()}function Z(){switch(K.children(".ug-tile").show(),1==de.isFirstTimeRun&&X(),ae.run(),ue.tiles_type){default:case"columns":f();break;case"justified":b();break;case"nested":y()}de.isFirstTimeRun=!1}var q,K,J,$,ee,te,ie=this,ne=jQuery(this),re=new UniteGalleryMain,oe=new UGFunctions,ae=new UGTileDesign,se=new UGThumbsGeneral,le={},ue={tiles_type:"columns",tiles_col_width:250,tiles_align:"center",tiles_exact_width:!1,tiles_space_between_cols:3,tiles_space_between_cols_mobile:3,tiles_include_padding:!0,tiles_min_columns:2,tiles_max_columns:0,tiles_keep_order:!1,tiles_set_initial_height:!0,tiles_justified_row_height:150,tiles_justified_space_between:3,tiles_nested_optimal_tile_width:250,tiles_nested_col_width:null,tiles_nested_debug:!1,tiles_enable_transition:!0};this.events={THUMB_SIZE_CHANGE:"thumb_size_change",TILES_FIRST_PLACED:"tiles_first_placed"};var de={isFixedMode:!1,isFirstTimeRun:!0,handle:null,isTransActive:!1,isTransInited:!1},_e={colWidth:null,nestedOptimalCols:5,gridY:0,maxColumns:0,columnsValueToEnableHeightResize:3,resizeLeftRightToColumn:!0,currentItem:0,currentGap:null,optimalTileWidth:null,maxGridY:0};this.destroy=function(){q.off(re.events.SIZE_CHANGE),ae.destroy()},this.setFixedSizeMode=function(){de.isFixedMode=!0,ae.setFixedMode()},this.init=function(t,i){e(t,i)},this.setHtml=function(e){i(e)},this.getObjTileDesign=function(){return ae},this.run=function(){Z()}}function UGTileDesign(){function e(e,n){R=e,z=jQuery(e);var r=R.getObjects();L=r.g_objWrapper,H=R.getArrItems(),D=jQuery.extend(D,W),D=jQuery.extend(D,n),t(),Q.init(e,D);var o={allow_onresize:!1},a=["overlay"];F.funcCustomTileHtml&&(a=[]),Q.setCustomThumbs(i,a,o);var s=Q.getOptions();D=jQuery.extend(D,s),F.ratioByWidth=D.tile_width/D.tile_height,F.ratioByHeight=D.tile_height/D.tile_width,D.tile_size_by==k.sizeby.GLOBAL_RATIO&&F.isTextpanelOutside&&(F.hasImageContainer=!0)}function t(){if(1==D.tile_enable_overlay?(D.thumb_overlay_opacity=D.tile_overlay_opacity,D.thumb_overlay_color=D.tile_overlay_color):0==D.tile_enable_icons?D.thumb_color_overlay_effect=!1:D.thumb_overlay_opacity=0,D.tile_as_link&&(D.thumb_wrapper_as_link=!0,D.thumb_link_newpage=D.tile_link_newpage),1==D.tile_enable_outline&&0==D.tile_enable_border&&(D.tile_enable_outline=!1),F.tileInnerReduce=0,D.tile_enable_border&&(F.tileInnerReduce=2*D.tile_border_width,Q.setThumbInnerReduce(F.tileInnerReduce)),F.isSaparateIcons=!G.isRgbaSupported(),1==D.tile_enable_textpanel){switch(D.tile_textpanel_position){case"top":D.tile_textpanel_align="top";case"bottom":F.isTextpanelOutside=!0,D.tile_textpanel_always_on=!0,D.tile_textpanel_offset=0;break;case"inside_top":D.tile_textpanel_align="top";break;case"middle":D.tile_textpanel_align="middle",D.tile_textpanel_appear_type="fade"}0==D.tile_textpanel_always_on&&(F.isSaparateIcons=!0)}0!=D.tile_textpanel_offset&&(D.tile_textpanel_appear_type="fade",D.tile_textpanel_margin=D.tile_textpanel_offset),"title_and_desc"==D.tile_textpanel_source&&(D.tile_textpanel_enable_description=!0,D.tile_textpanel_desc_style_as_title=!0)}function i(e,t){if(e.addClass("ug-tile"),F.funcCustomTileHtml)return F.funcCustomTileHtml(e,t),!1;var i="";1==F.hasImageContainer&&(i+="<div class='ug-image-container ug-trans-enabled'>");var n="ug-thumb-image";(0==D.tile_enable_image_effect||1==D.tile_image_effect_reverse)&&(n+=" ug-trans-enabled");var r=G.stripTags(t.title);r=G.htmlentitles(r),i+="<img src='"+t.urlThumb+"' alt='"+r+"' class='"+n+"'>",1==F.hasImageContainer&&(i+="</div>"),e.append(i),D.tile_size_by==k.sizeby.GLOBAL_RATIO&&e.fadeTo(0,0);var o={};if(1==D.tile_enable_background&&(o["background-color"]=D.tile_background_color),1==D.tile_enable_border&&(o["border-width"]=D.tile_border_width+"px",o["border-style"]="solid",o["border-color"]=D.tile_border_color,D.tile_border_radius&&(o["border-radius"]=D.tile_border_radius+"px")),1==D.tile_enable_outline&&(o.outline="1px solid "+D.tile_outline_color),1==D.tile_enable_shadow){var a=D.tile_shadow_h+"px ";a+=D.tile_shadow_v+"px ",a+=D.tile_shadow_blur+"px ",a+=D.tile_shadow_spread+"px ",a+=D.tile_shadow_color,o["box-shadow"]=a}e.css(o);var s="";if(D.tile_enable_icons){if(0==D.tile_as_link&&1==D.tile_enable_action){var l="ug-button-play ug-icon-zoom";"image"!=t.type&&(l="ug-button-play ug-icon-play"),s+="<div class='ug-tile-icon "+l+"' style='display:none'></div>"}if(t.link&&1==D.tile_show_link_icon||1==D.tile_as_link)if(0==D.tile_as_link){var d="";1==D.tile_link_newpage&&(d=" target='_blank'"),s+="<a href='"+t.link+"'"+d+" class='ug-tile-icon ug-icon-link'></a>"}else s+="<div class='ug-tile-icon ug-icon-link' style='display:none'></div>";var _=F.isSaparateIcons;if(0==_&&"image"!=t.type&&1==D.tile_videoplay_icon_always_on&&(_=!0),_)var g=e;else var g=e.children(".ug-thumb-overlay");g.append(s);var c=g.children("."+l);0==c.length?c=null:c.hide();var h=g.children(".ug-icon-link");0==h.length?h=null:h.hide(),h||1!=D.tile_enable_action||e.addClass("ug-tile-clickable")}else 1==D.tile_enable_action&&e.addClass("ug-tile-clickable");if(1==D.tile_enable_image_effect){var p="";0==D.tile_image_effect_reverse&&(p=" ug-trans-enabled");var f="<div class='ug-tile-image-overlay"+p+"' >",m=" ug-"+D.tile_image_effect_type+"-effect";f+="<img src='"+t.urlThumb+"' alt='"+t.title+"' class='"+m+p+"'>",f+="</div>",e.append(f),1==D.tile_image_effect_reverse&&e.children(".ug-tile-image-overlay").fadeTo(0,0)}if(1==D.tile_enable_textpanel){var v=new UGTextPanel;v.init(R,D,"tile");var b="";(1==D.tile_textpanel_always_on||1==F.isTextpanelOutside)&&(b="ug-trans-enabled"),v.appendHTML(e,b);var y=t.title,I="";switch(D.tile_textpanel_source){case"desc":case"description":y=t.description;break;case"desc_title":""!=t.description&&(y=t.description);break;case"title_and_desc":y=t.title,I=t.description}if(v.setTextPlain(y,I),0==D.tile_textpanel_always_on&&v.getElement().fadeTo(0,0),e.data("objTextPanel",v),1==D.tile_textpanel_always_on){
var w=u(e);w.css("z-index",2)}if(1==F.isTextpanelOutside){var T="<div class='ug-tile-cloneswrapper'></div>";e.append(T);var E=e.children(".ug-tile-cloneswrapper"),S=new UGTextPanel;S.init(R,D,"tile"),S.appendHTML(E),S.setTextPlain(y,I),e.data("objTextPanelClone",S)}}null!==t.addHtml&&e.append(t.addHtml)}function n(e){var t=e.children(".ug-tile-image-overlay");return t}function r(e){var t=e.children(".ug-thumb-overlay");return t}function o(e){if(0==F.hasImageContainer)return null;var t=e.children(".ug-image-container");return t}function a(e){var t=e.find(".ug-tile-image-overlay img");return t}function s(e){var t=e.data("objTextPanel");return t}function l(e){var t=e.data("objTextPanelClone");return t}function u(e){var t=e.children(".ug-textpanel");return t}function d(e){var t=e.find(".ug-tile-cloneswrapper .ug-textpanel");if(0==t.length)throw new Error("text panel cloned element not found");return t}function _(e){if(1==F.isTextpanelOutside)var t=d(e);else var t=u(e);if(!t)return 0;var i=G.getElementSize(t);return i.height}function g(e){var t=e.find(".ug-icon-link");return 0==t.length?null:t}function c(e){var t=F.ratioByHeight;switch(D.tile_size_by){default:t=F.ratioByHeight;break;case k.sizeby.IMAGE_RATIO:if(!e)throw new Error("tile should be given for tile ratio");var i=k.getItemByTile(e);if("undefined"!=typeof i.thumbRatioByHeight){if(0==i.thumbRatioByHeight)throw trace(i),new Error("the item ratio not inited yet");t=i.thumbRatioByHeight}break;case k.sizeby.CUSTOM:return null}return t}function h(e){var t=e.find(".ug-button-play");return 0==t.length?null:t}function p(e){return e.hasClass("ug-thumb-over")?!0:!1}function f(e){return e.hasClass("ug-tile-clickable")}function m(e,t,i,r){var s=n(e),l=k.getTileImage(e),u=a(e);t-=F.tileInnerReduce,i-=F.tileInnerReduce;var d=null;if(1==F.isTextpanelOutside){var g=_(e);if(i-=g,"top"==D.tile_textpanel_position&&(d=g),1==F.hasImageContainer){var c=o(e);G.setElementSize(c,t,i),null!==d&&G.placeElement(c,0,d)}}if(0==D.tile_enable_image_effect)G.scaleImageCoverParent(l,t,i),0==F.hasImageContainer&&null!==d&&G.placeElement(l,0,d);else{var h="nothing";r===!0&&0==F.isTextpanelOutside&&(h=1==D.tile_image_effect_reverse?"effect":"image"),"effect"!=h&&(G.setElementSize(s,t,i),null!==d&&G.placeElement(s,0,d),G.scaleImageCoverParent(u,t,i)),"image"!=h&&(1==F.hasImageContainer?G.scaleImageCoverParent(l,t,i):"effect"==h?(G.scaleImageCoverParent(l,t,i),null!==d&&G.placeElement(l,0,d)):G.cloneElementSizeAndPos(u,l,!1,null,d))}}function v(e,t,i,n){var r=null;if(i&&(r=i-F.tileInnerReduce),n&&(n-=F.tileInnerReduce),"clone"==t){var o=l(e);o.refresh(!0,!0,r);var a=k.getItemByTile(e);return a.textPanelCloneSizeSet=!0,!1}var u=s(e);if(!u)return!1;var d=null;1==F.isTextpanelOutside&&(d=_(e)),u.refresh(!1,!0,r,d);var g=1==D.tile_textpanel_always_on||"fade"==D.tile_textpanel_appear_type;if(g)if(1==F.isTextpanelOutside&&n&&"bottom"==D.tile_textpanel_position){var c=n-d;u.positionPanel(c)}else u.positionPanel()}function b(e){var t=(k.getItemByTile(e),h(e)),i=g(e),n=G.getElementSize(e);m(e,n.width,n.height),1==D.tile_enable_textpanel&&v(e,"regular",n.width,n.height);var o=n.width-F.tileInnerReduce,a=n.height-F.tileInnerReduce,s=0;if(1==F.isTextpanelOutside){var l=_(e);a-=l,"top"==D.tile_textpanel_position&&(s=l)}var d=r(e);if(G.setElementSizeAndPosition(d,0,s,o,a),t||i){var c=0;if(1==D.tile_enable_textpanel&&0==F.isTextpanelOutside){var p=u(e),f=G.getElementSize(p);f.height>0&&(c=Math.floor(f.height/2*-1))}}if(t&&i){var b=G.getElementSize(t),y=G.getElementSize(i),I=D.tile_space_between_icons,w=b.width+I+y.width,T=Math.floor((n.width-w)/2);I>T&&(I=Math.floor((n.width-b.width-y.width)/3),w=b.width+I+y.width,T=Math.floor((n.width-w)/2)),G.placeElement(t,T,"middle",0,c),G.placeElement(i,T+b.width+I,"middle",0,c)}else t&&G.placeElement(t,"center","middle",0,c),i&&G.placeElement(i,"center","middle",0,c);t&&t.show(),i&&i.show()}function y(e,t){var i=(k.getItemByTile(e),n(e)),r=D.thumb_transition_duration;if(0==D.tile_image_effect_reverse){var o=k.getTileImage(e);t?(o.fadeTo(1,1),i.stop(!0).fadeTo(r,0)):i.stop(!0).fadeTo(r,1)}else t?i.stop(!0).fadeTo(r,1):i.stop(!0).fadeTo(r,0)}function I(e,t){var i=D.thumb_transition_duration,n=u(e);if(!n)return!0;if("slide"==D.tile_textpanel_appear_type){var r=G.getElementSize(n);if(0==r.width)return!1;var o=-r.height,a=0,s={},l={},d="bottom";"inside_top"==D.tile_textpanel_position&&(d="top"),s[d]=o+"px",l[d]=a+"px",1==t?(n.fadeTo(0,1),0==n.is(":animated")&&n.css(s),n.stop(!0).animate(l,i)):n.stop(!0).animate(s,i)}else 1==t?n.stop(!0).fadeTo(i,1):n.stop(!0).fadeTo(i,0)}function w(e,t,i){var n=D.thumb_transition_duration;i&&i===!0&&(n=0);var r=h(e),o=g(e),a=t?1:0;r&&r.stop(!0).fadeTo(n,a),o&&o.stop(!0).fadeTo(n,a)}function T(e,t){if(t=jQuery(t),D.tile_enable_image_effect&&y(t,!0),1==D.tile_enable_textpanel&&0==D.tile_textpanel_always_on&&I(t,!0),F.isSaparateIcons&&1==D.tile_enable_icons){var i=1==D.thumb_overlay_reverse,n=k.getItemByTile(t);(1!=D.tile_videoplay_icon_always_on||"image"==n.type)&&w(t,i,!1)}}function E(e,t){if(t=jQuery(t),D.tile_enable_image_effect&&y(t,!1),1==D.tile_enable_textpanel&&0==D.tile_textpanel_always_on&&I(t,!1),1==F.isSaparateIcons&&1==D.tile_enable_icons){var i=1==D.thumb_overlay_reverse?!1:!0;w(t,i,!1)}}function S(e){var t=Q.getThumbs().not(e);t.each(function(e,t){Q.setThumbNormalStyle(jQuery(t))})}function P(e,t,i){return t=jQuery(t),1==D.tile_visible_before_image&&t.data("image_placed")!==!0&&i!==!0?!0:void b(t)}function x(e,t,i){b(t),i.fadeTo(0,1),t.data("image_placed",!0)}function j(e){return 1==f(e)?(N.trigger(k.events.TILE_CLICK,e),!0):void(0==p(e)&&(S(e),Q.setThumbOverStyle(e)))}function C(e){var t=jQuery(this),i=t.prop("tagName").toLowerCase(),n=!0;if(F.funcParentApproveClick&&0==F.funcParentApproveClick()&&(n=!1),"a"==i)0==n&&e.preventDefault();else if(0==p(t))1==n&&j(t);else{if(0==f(t))return!0;1==n&&N.trigger(k.events.TILE_CLICK,t)}}function A(e){e.stopPropagation();var t=jQuery(this).parents(".ug-tile"),i=!0;return F.funcParentApproveClick&&0==F.funcParentApproveClick()&&(i=!1),0==p(t)?(j(t),!0):1==i?(N.trigger(k.events.TILE_CLICK,t),!1):void 0}function M(e){var t=jQuery(this).parents(".ug-tile");F.funcParentApproveClick&&0==F.funcParentApproveClick()&&e.preventDefault(),0==p(t)&&0==D.tile_as_link&&(e.preventDefault(),j(t))}var z,O,L,H,k=this,N=jQuery(this),R=new UniteGalleryMain,G=new UGFunctions,Q=new UGThumbsGeneral;this.resizemode={FULL:"full",WRAPPER_ONLY:"wrapper_only",VISIBLE_ELEMENTS:"visible_elements"},this.sizeby={GLOBAL_RATIO:"global_ratio",TILE_RATIO:"tile_ratio",IMAGE_RATIO:"image_ratio",CUSTOM:"custom"},this.events={TILE_CLICK:"tile_click"};var D={tile_width:250,tile_height:200,tile_size_by:k.sizeby.IMAGE_RATIO,tile_visible_before_image:!1,tile_enable_background:!0,tile_background_color:"#F0F0F0",tile_enable_border:!1,tile_border_width:3,tile_border_color:"#F0F0F0",tile_border_radius:0,tile_enable_outline:!1,tile_outline_color:"#8B8B8B",tile_enable_shadow:!1,tile_shadow_h:1,tile_shadow_v:1,tile_shadow_blur:3,tile_shadow_spread:2,tile_shadow_color:"#8B8B8B",tile_enable_action:!0,tile_as_link:!1,tile_link_newpage:!0,tile_enable_overlay:!0,tile_overlay_opacity:.4,tile_overlay_color:"#000000",tile_enable_icons:!0,tile_show_link_icon:!1,tile_videoplay_icon_always_on:!1,tile_space_between_icons:26,tile_enable_image_effect:!1,tile_image_effect_type:"bw",tile_image_effect_reverse:!1,tile_enable_textpanel:!1,tile_textpanel_source:"title",tile_textpanel_always_on:!1,tile_textpanel_appear_type:"slide",tile_textpanel_position:"inside_bottom",tile_textpanel_offset:0},W={thumb_color_overlay_effect:!0,thumb_overlay_reverse:!0,thumb_image_overlay_effect:!1,tile_textpanel_enable_description:!1,tile_textpanel_bg_opacity:.6,tile_textpanel_padding_top:8,tile_textpanel_padding_bottom:8},F={ratioByHeight:0,ratioByWidth:0,eventSizeChange:"thumb_size_change",funcCustomTileHtml:null,funcCustomPositionElements:null,funcParentApproveClick:null,isSaparateIcons:!1,tileInnerReduce:0,isTextpanelOutside:!1,hasImageContainer:!1};this.loadTileImage=function(e){var t=k.getTileImage(e);G.checkImagesLoaded(t,null,function(t,i){x(null,e,jQuery(t))})},this.setHtml=function(e){O=e,Q.setHtmlThumbs(e)},this.initEvents=function(){Q.initEvents(),jQuery(Q).on(Q.events.SETOVERSTYLE,T),jQuery(Q).on(Q.events.SETNORMALSTYLE,E),jQuery(Q).on(Q.events.PLACEIMAGE,x),L.on(F.eventSizeChange,P),O.delegate(".ug-tile .ug-button-play","click",A),O.delegate(".ug-tile","click",C),O.delegate(".ug-tile .ug-icon-link","click",M)},this.destroy=function(){if(jQuery(Q).off(Q.events.SETOVERSTYLE),jQuery(Q).off(Q.events.SETNORMALSTYLE),jQuery(Q).off(Q.events.PLACEIMAGE),L.off(F.eventSizeChange),1==D.tile_enable_textpanel){var e=Q.getThumbs();jQuery.each(e,function(e,t){var i=s(jQuery(t));i&&i.destroy()})}Q.destroy()},this.init=function(t,i,n){e(t,i,n)},this.setFixedMode=function(){D.tile_size_by=k.sizeby.GLOBAL_RATIO,D.tile_visible_before_image=!0},this.setApproveClickFunction=function(e){F.funcParentApproveClick=e},this.resizeTile=function(e,t,i,n){if(1==F.isTextpanelOutside&&v(e,"clone",t),t){if(!i)var i=k.getTileHeightByWidth(t,e)}else var t=D.tile_width,i=D.tile_height;switch(G.setElementSize(e,t,i),n){default:case k.resizemode.FULL:k.triggerSizeChangeEvent(e,!0);break;case k.resizemode.WRAPPER_ONLY:return!0;case k.resizemode.VISIBLE_ELEMENTS:if(F.funcCustomTileHtml)return k.triggerSizeChangeEvent(e,!0),!0;m(e,t,i,!0),1==D.tile_enable_textpanel&&1==D.tile_textpanel_always_on&&t&&v(e,"regular",t,i)}},this.resizeAllTiles=function(e,t){var i=null;D.tile_size_by==k.sizeby.GLOBAL_RATIO&&(i=k.getTileHeightByWidth(e));var n=Q.getThumbs();n.each(function(n,r){k.resizeTile(jQuery(r),e,i,t)})},this.triggerSizeChangeEvent=function(e,t){if(!e)return!1;if(!t)var t=!1;L.trigger(F.eventSizeChange,[e,t])},this.triggerSizeChangeEventAllTiles=function(e){var t=Q.getThumbs();t.each(function(){var t=jQuery(this);k.triggerSizeChangeEvent(t,e)})},this.disableEvents=function(){var e=Q.getThumbs();e.css("pointer-events","none")},this.enableEvents=function(){var e=Q.getThumbs();e.css("pointer-events","auto")},this.setOptions=function(e){D=jQuery.extend(D,e),Q.setOptions(e)},this.setCustomFunctions=function(e,t){F.funcCustomTileHtml=e,F.funcCustomPositionElements=t},this.run=function(){var e=Q.getThumbs();D.tile_size_by==k.sizeby.GLOBAL_RATIO&&k.resizeAllTiles(D.tile_width,k.resizemode.WRAPPER_ONLY),1==D.tile_enable_image_effect&&0==D.tile_image_effect_reverse&&e.children(".ug-thumb-image").fadeTo(0,0),Q.setHtmlProperties(),1==D.tile_visible_before_image&&(e.children(".ug-thumb-image").fadeTo(0,0),Q.loadThumbsImages())},this._____________EXTERNAL_GETTERS____________=function(){},this.getObjThumbs=function(){return Q},this.getOptions=function(){return D},this.getTileImage=function(e){var t=e.find("img.ug-thumb-image");return t},this.getItemByTile=function(e){return Q.getItemByThumb(e)},this.getTileHeightByWidth=function(e,t){var i=c(t);if(null===i)return null;var n=Math.floor((e-F.tileInnerReduce)*i)+F.tileInnerReduce;return t&&1==F.isTextpanelOutside&&D.tile_size_by==k.sizeby.IMAGE_RATIO&&(n+=_(t)),n},this.getTileImageSize=function(e){var t=k.getItemByTile(e);if(!t.thumbWidth||!t.thumbHeight)throw new Error("Can't get image size - image not inited.");var i={width:t.thumbWidth,height:t.thumbHeight};return i},this.getGlobalTileSize=function(){if(D.tile_size_by!=k.sizeby.GLOBAL_RATIO)throw new Error("The size has to be global ratio");var e={width:D.tile_width,height:D.tile_height};return e}}function UGAviaControl(){function e(e){return 0==p?e.pageX:e.pageY}function t(t){jQuery("body").on("touchstart",function(e){return 0==f.isControlEnabled?!0:void(f.touchEnabled=!0)}),jQuery("body").mousemove(function(t){if(0==f.isControlEnabled)return!0;if(1==f.touchEnabled)return jQuery("body").off("mousemove"),!0;f.isMouseInsideStrip=g.ismouseover();var i=u.isTouchMotionActive();if(1==f.isMouseInsideStrip&&0==i){var n=e(t);l(n)}else a()})}function i(e){var t=h.strip_padding_top,i=(h.strip_padding_bottom,g.height()),n=c.height();if(i>n)return null;var r=g.offset(),o=r.top,a=e-o-t;if(0>a)return null;var s=h.thumb_height,l=i-h.thumb_height,u=l-s;s>a&&(a=s),a>l&&(a=l);var d=(a-s)/u,_=(n-i)*d;return _=-1*Math.round(_)+t}function n(e){var t=h.strip_padding_left,i=h.strip_padding_right,n=g.width()-t-i,r=c.width();if(n>r)return null;var o=g.offset(),a=o.left,s=e-a-t,l=h.thumb_width,u=n-h.thumb_width,d=u-l;l>s&&(s=l),s>u&&(s=u);var _=(s-l)/d,p=(r-n)*_;return p=-1*Math.round(p)+t}function r(){if(0==f.is_strip_moving)return!1;var e=u.getInnerStripPos();Math.floor(e)==Math.floor(f.strip_finalPos)&&a();var t,i=Math.abs(f.strip_finalPos-e);1>i?t=i:(t=i/4,t>0&&1>t&&(t=1)),f.strip_finalPos<e&&(t=-1*t);var n=e+t;u.positionInnerStrip(n)}function o(){return 1==f.isStripMoving?!1:(f.isStripMoving=!0,void(f.handle_timeout=setInterval(r,10)))}function a(){return 0==f.isStripMoving?!1:(f.isStripMoving=!1,void(f.handle_timeout=clearInterval(f.handle_timeout)))}function s(e){return 0==p?n(e):i(e)}function l(e){var t=s(e);return null===t?!1:(f.is_strip_moving=!0,f.strip_finalPos=t,void o())}var u,d,_,g,c,h,p,f={touchEnabled:!1,isMouseInsideStrip:!1,strip_finalPos:0,handle_timeout:"",isStripMoving:!1,isControlEnabled:!0};this.enable=function(){f.isControlEnabled=!0},this.disable=function(){f.isControlEnabled=!1},this.init=function(e){u=e,_=e.getObjects(),d=_.g_gallery,g=_.g_objStrip,c=_.g_objStripInner,h=_.g_options,p=_.isVertical,t()},this.destroy=function(){jQuery("body").off("touchstart"),jQuery("body").off("mousemove")}}function UGSlider(){function e(e,t,n){fe=e,n&&(ce=n,t=Ie.convertCustomPrefixOptions(t,ce,"slider")),ee=jQuery(e);var r=fe.getObjects();if(te=r.g_objWrapper,ie=r.g_objThumbs,t.hasOwnProperty("slider_progress_indicator_type")&&(Ee.slider_progress_indicator_type=t.slider_progress_indicator_type),"bar"==Ee.slider_progress_indicator_type&&(Ee=jQuery.extend(Ee,Se)),t&&he.setOptions(t),i(),1==Ee.slider_enable_bullets){be=new UGBullets;var o={bullets_skin:Ee.slider_bullets_skin,bullets_space_between:Ee.slider_bullets_space_between};be.init(fe,o)}Ee.slider_enable_text_panel&&(Te=new UGTextPanel,Te.init(fe,Ee,"slider")),Ee.slider_enable_zoom_panel&&(ge=new UGZoomButtonsPanel,ge.init(he,Ee));var a=fe.getGalleryID();ye.init(Ee,!1,a)}function t(){if(1==Pe.isRunOnce)return!1;if(Pe.isRunOnce=!0,Ee.slider_background_color){var e=Ee.slider_background_color;1!=Ee.slider_background_opacity&&(e=Ie.convertHexToRGB(e,Ee.slider_background_opacity)),ne.css("background-color",e)}else 1!=Ee.slider_background_opacity&&(e=Ie.convertHexToRGB("#000000",Ee.slider_background_opacity),ne.css("background-color",e));1==Ee.slider_control_swipe&&(de=new UGTouchSliderControl,de.init(he,Ee)),1==Ee.slider_control_zoom&&(_e=new UGZoomSliderControl,_e.init(he,Ee)),Te&&Te.run(),V()}function i(){var e=fe.getOptions(),t=e.gallery_skin;""==Ee.slider_bullets_skin&&(Ee.slider_bullets_skin=t),""==Ee.slider_arrows_skin&&(Ee.slider_arrows_skin=t),""==Ee.slider_zoompanel_skin&&(Ee.slider_zoompanel_skin=t),""==Ee.slider_play_button_skin&&(Ee.slider_play_button_skin=t),""==Ee.slider_fullscreen_button_skin&&(Ee.slider_fullscreen_button_skin=t),Ee.video_enable_closebutton=Ee.slider_video_enable_closebutton,"zoom"!=e.gallery_mousewheel_role&&(Ee.slider_zoom_mousewheel=!1)}function n(e,t){var i="ug-type-square";return"round"==Ee.slider_videoplay_button_type&&(i="ug-type-round"),html="",html+="<div class='ug-slide-wrapper ug-slide"+t+"'>",html+="<div class='ug-item-wrapper'></div>",html+="<div class='ug-slider-preloader "+e+"'></div>",html+="<div class='ug-button-videoplay "+i+"' style='display:none'></div>",html+="</div>",html}function r(e){e&&(te=e);var t=X(),i=(fe.getOptions(),"<div class='ug-slider-wrapper'>");if(i+="<div class='ug-slider-inner'>",i+=n(t,1),i+=n(t,2),i+=n(t,3),i+="</div>",1==Ee.slider_enable_arrows&&(i+="<div class='ug-slider-control ug-arrow-left ug-skin-"+Ee.slider_arrows_skin+"'></div>",i+="<div class='ug-slider-control ug-arrow-right ug-skin-"+Ee.slider_arrows_skin+"'></div>"),1==Ee.slider_enable_play_button&&(i+="<div class='ug-slider-control ug-button-play ug-skin-"+Ee.slider_play_button_skin+"'></div>"),1==Ee.slider_enable_fullscreen_button&&(i+="<div class='ug-slider-control ug-button-fullscreen ug-skin-"+Ee.slider_fullscreen_button_skin+"'></div>"),i+="</div>",te.append(i),ne=te.children(".ug-slider-wrapper"),re=ne.children(".ug-slider-inner"),oe=re.children(".ug-slide1"),ae=re.children(".ug-slide2"),se=re.children(".ug-slide3"),oe.data("slidenum",1),ae.data("slidenum",2),se.data("slidenum",3),be&&be.appendHTML(ne),1==Ee.slider_enable_arrows&&(le=ne.children(".ug-arrow-left"),ue=ne.children(".ug-arrow-right")),1==Ee.slider_enable_play_button&&(me=ne.children(".ug-button-play")),1==Ee.slider_enable_fullscreen_button&&(ve=ne.children(".ug-button-fullscreen")),1==Ee.slider_enable_progress_indicator){we=Ie.initProgressIndicator(Ee.slider_progress_indicator_type,Ee,ne);var r=we.getType();"bar"==r&&"pie"==Ee.slider_progress_indicator_type&&(Ee.slider_progress_indicator_type="bar",Ee=jQuery.extend(Ee,Se)),fe.setProgressIndicator(we)}if(1==Ee.slider_enable_text_panel&&(Te.appendHTML(ne),0==Ee.slider_textpanel_always_on)){var o=Te.getElement();o.hide().data("isHidden",!0),Pe.isTextPanelSaparateHover=!0}1==Ee.slider_enable_zoom_panel&&ge.appendHTML(ne),ye.setHtml(re)}function o(e){var t=K(e);Ie.placeElementInParentCenter(t);var i=J(e);Ie.placeElementInParentCenter(i)}function a(){if(be&&(objBullets=be.getElement(),Ie.placeElement(objBullets,Ee.slider_bullets_align_hor,Ee.slider_bullets_align_vert,Ee.slider_bullets_offset_hor,Ee.slider_bullets_offset_vert),Ie.placeElement(objBullets,Ee.slider_bullets_align_hor,Ee.slider_bullets_align_vert,Ee.slider_bullets_offset_hor,Ee.slider_bullets_offset_vert)),1==Ee.slider_enable_arrows&&(Ie.placeElement(le,Ee.slider_arrow_left_align_hor,Ee.slider_arrow_left_align_vert,Ee.slider_arrow_left_offset_hor,Ee.slider_arrow_left_offset_vert),Ie.placeElement(ue,Ee.slider_arrow_right_align_hor,Ee.slider_arrow_left_align_vert,Ee.slider_arrow_right_offset_hor,Ee.slider_arrow_right_offset_vert)),0==Ee.slider_controls_always_on&&A(!0),we){var e=we.getElement();if("bar"==Ee.slider_progress_indicator_type){var t=ne.width();we.setSize(t),Ie.placeElement(e,"left",Ee.slider_progress_indicator_align_vert,0,Ee.slider_progress_indicator_offset_vert)}else Ie.placeElement(e,Ee.slider_progress_indicator_align_hor,Ee.slider_progress_indicator_align_vert,Ee.slider_progress_indicator_offset_hor,Ee.slider_progress_indicator_offset_vert)}Te&&Te.positionPanel(),s(),o(oe),o(ae),o(se),j()}function s(){if(me&&Ie.placeElement(me,Ee.slider_play_button_align_hor,Ee.slider_play_button_align_vert,Ee.slider_play_button_offset_hor,Ee.slider_play_button_offset_vert),ve&&Ie.placeElement(ve,Ee.slider_fullscreen_button_align_hor,Ee.slider_fullscreen_button_align_vert,Ee.slider_fullscreen_button_offset_hor,Ee.slider_fullscreen_button_offset_vert),ge){var e=ge.getElement();Ie.placeElement(e,Ee.slider_zoompanel_align_hor,Ee.slider_zoompanel_align_vert,Ee.slider_zoompanel_offset_hor,Ee.slider_zoompanel_offset_vert)}}function l(){var e,t,i,n,r=he.getSlidesReference(),o=0,a=0,s=0;i=he.isSlideHasItem(r.objNextSlide),n=he.isSlideHasItem(r.objPrevSlide),n?(s=r.objPrevSlide.outerWidth(),r.objPrevSlide.css("z-index",1)):r.objPrevSlide.hide(),t=s+r.objCurrentSlide.outerWidth(),e=t,i?(e=t+r.objNextSlide.outerWidth(),r.objPrevSlide.css("z-index",2)):r.objNextSlide.hide(),r.objCurrentSlide.css("z-index",3),Ie.placeElement(r.objCurrentSlide,s,o),re.css({left:-s+"px",width:e+"px"}),n&&(Ie.placeElement(r.objPrevSlide,a,o),Ie.showElement(r.objPrevSlide)),i&&(Ie.showElement(r.objNextSlide),Ie.placeElement(r.objNextSlide,t,o))}function u(e){var t=e.data("index");if(void 0===t||null==t)return!1;var i=fe.getItem(t);return i?void p(e,i):!1}function d(e){e.stop(!0).show(100)}function _(e){e.stop(!0).hide(100)}function g(e,t){var i={};1==Ee.slider_image_border&&(i["border-style"]="solid",i["border-width"]=Ee.slider_image_border_width+"px",i["border-color"]=Ee.slider_image_border_color,i["border-radius"]=Ee.slider_image_border_radius),"image"!=t&&1==Ee.slider_video_constantsize&&(i["background-color"]="#000000"),1==Ee.slider_image_shadow&&(i["box-shadow"]="3px 3px 10px 0px #353535"),e.css(i)}function c(e,t){var i=Ee.slider_video_constantsize_width,n=Ee.slider_video_constantsize_height,r=Ee.slider_video_constantsize_scalemode;Ie.scaleImageExactSizeInParent(e,t.imageWidth,t.imageHeight,i,n,r)}function h(e,t,i){var n=e.children(".ug-item-wrapper"),r=K(e);if("undefined"==typeof t.urlImage||""==t.urlImage)throw new Error("The slide don't have big image defined ( data-image='imageurl' ). Please check gallery items.","showbig");var o=t.urlImage,a=e.data("urlImage");e.data("urlImage",o);var s=he.getScaleMode(e),l=he.getSlideType(e);if(objPadding=he.getObjImagePadding(),a==o&&i!==!0){var u=n.children("img");(0==t.imageWidth||0==t.imageHeight)&&fe.checkFillImageSize(u,t),"image"!=l&&1==Ee.slider_video_constantsize?c(u,t):Ie.scaleImageFitParent(u,t.imageWidth,t.imageHeight,s,objPadding),pe.trigger(he.events.AFTER_PUT_IMAGE,e)}else u=Ie.placeImageInsideParent(o,n,t.imageWidth,t.imageHeight,s,objPadding),1==t.isBigImageLoaded?(u.fadeTo(0,1),_(r),"image"!=l&&1==Ee.slider_video_constantsize&&c(u,t),pe.trigger(he.events.AFTER_PUT_IMAGE,e)):(u.fadeTo(0,0),d(r),e.data("isLoading",!0),he.isSlideCurrent(e)&&pe.trigger(he.events.CURRENTSLIDE_LOAD_START),u.data("itemIndex",t.index),u.on("load",function(){var e=jQuery(this),t=e.data("itemIndex");e.fadeTo(0,1);var i=e.parent().parent(),n=he.getSlideType(i),r=K(i),o=he.getObjImagePadding(),a=he.getScaleMode(i);_(r),i.data("isLoading",!1),he.isSlideCurrent(i)&&pe.trigger(he.events.CURRENTSLIDE_LOAD_END),fe.onItemBigImageLoaded(null,e);var s=fe.getItem(t);"image"!=n&&1==Ee.slider_video_constantsize?c(e,s):Ie.scaleImageFitParent(e,s.imageWidth,s.imageHeight,a,o),e.fadeTo(0,1),pe.trigger(he.events.AFTER_PUT_IMAGE,i)}));u&&g(u,l)}function p(e,t){try{var i=e.children(".ug-item-wrapper");if(null==t)return i.html(""),e.removeData("index"),e.removeData("type"),e.removeData("urlImage"),!1;e.data("index");e.data("index",t.index),e.data("type",t.type),1==Ee.slider_enable_links&&"image"==t.type&&(t.link?e.addClass("ug-slide-clickable"):e.removeClass("ug-slide-clickable")),h(e,t);var n=J(e);switch(t.type){case"image":n.hide();break;default:n.show()}}catch(r){throw"undefined"!=typeof r.fileName&&"showbig"==r.fileName&&fe.showErrorMessageReplaceGallery(r.message),i.html(""),new Error(r)}}function f(){if(!Te)return!1;if(1==v())return!1;var e=Te.getElement(),t=0;(1==Pe.isTextPanelSaparateHover||1==Ee.slider_textpanel_always_on)&&(t=Ee.slider_controls_appear_duration),e.stop().fadeTo(t,0),e.data("isHidden",!0)}function m(){if(!Te)return!1;if(0==v())return!1;var e=Te.getElement(),t=0;(1==Pe.isTextPanelSaparateHover||1==Ee.slider_textpanel_always_on)&&(e.show(),Te.positionElements(),t=Ee.slider_controls_appear_duration),e.stop().show().fadeTo(t,1),e.data("isHidden",!1)}function v(){var e=Te.getElement(),t=e.data("isHidden");return t===!1?!1:!0}function b(e,t){if(void 0==t)var t=he.getCurrentSlide();var i=he.getSlideType(t);if(i!=e)throw new Error("Wrong slide type: "+i+", should be: "+e);return!0}function y(){var e=he.getCurrentSlide(),t=he.getSlideImage(e),i=Ie.getElementSize(e),n=i.left,r=i.top;if(1==Ee.slider_video_constantsize){var o=Ie.getElementSize(t);n+=o.left,r+=o.top}else n+=Ee.slider_video_padding_left,r+=Ee.slider_video_padding_top;ye.setPosition(n,r)}function I(){var e=Ee.slider_video_constantsize_width,t=Ee.slider_video_constantsize_height;ye.setSize(e,t);var i=ye.getObject();g(i)}function w(e,t,i){pe.trigger(he.events.TRANSITION_START);var n=Ee.slider_transition;switch(i&&(n=i),he.stopSlideAction(null,!0),n){default:case"fade":S(t);break;case"slide":T(e,t);break;case"lightbox_open":S(t,!1,!0)}}function T(e,t){var i=he.isAnimating();if(1==i)return Pe.itemWaiting=t,!0;null!=Pe.itemWaiting&&(Pe.itemWaiting=null);var n=he.getSlidesReference();switch(e){case"right":p(n.objPrevSlide,t),l();var r=Ie.getElementSize(n.objPrevSlide),o=-r.left;he.switchSlideNums("right");break;case"left":p(n.objNextSlide,t),l();var a=Ie.getElementSize(n.objNextSlide),o=-a.left;he.switchSlideNums("left");break;default:throw new Error("wrong direction: "+e)}var s=Ee.slider_transition_speed,u=Ee.slider_transition_easing,d={duration:s,easing:u,queue:!1,always:function(){if(he.stopSlideAction(),ye.hide(),null!=Pe.itemWaiting){var e=q(Pe.itemWaiting);T(e,Pe.itemWaiting)}else he.placeNabourItems(),pe.trigger(he.events.TRANSITION_END)}};re.animate({left:o+"px"},d)}function E(e,t,i){i?e.fadeTo(Ee.slider_transition_speed,t,i):e.fadeTo(Ee.slider_transition_speed,t)}function S(e,t,i){if(!t)var t=!1;var n=he.getSlidesReference();p(n.objNextSlide,e);var r=Ie.getElementSize(n.objCurrentSlide);Ie.placeElement(n.objNextSlide,r.left,r.top);var o=Pe.numCurrent;if(Pe.numCurrent=Pe.numNext,Pe.numNext=o,pe.trigger(he.events.ITEM_CHANGED),n.objNextSlide.stop(!0),n.objCurrentSlide.stop(!0),1==t)n.objCurrentSlide.fadeTo(0,0),n.objNextSlide.fadeTo(0,1),he.placeNabourItems(),pe.trigger(he.events.TRANSITION_END),i!==!0&&ye.hide();else{if(n.objNextSlide.fadeTo(0,0),E(n.objCurrentSlide,0,function(){he.placeNabourItems(),pe.trigger(he.events.TRANSITION_END),i!==!0&&ye.hide()}),1==ye.isVisible()){var a=ye.getObject();E(a,0)}E(n.objNextSlide,1)}}function P(){1==Ee.slider_fullscreen_button_mobilehide&&ve&&ve.hide(),1==Ee.slider_play_button_mobilehide&&me&&me.hide(),1==Ee.slider_zoompanel_mobilehide&&ge&&ge.getElement().hide()}function x(){1==Ee.slider_fullscreen_button_mobilehide&&ve&&ve.show(),1==Ee.slider_play_button_mobilehide&&me&&me.show(),1==Ee.slider_zoompanel_mobilehide&&ge&&ge.getElement().show()}function j(){var e=fe.isMobileMode();e?P():x()}function C(){var e=ne.children(".ug-slider-control");return e}function A(e){if(0==Ie.isTimePassed("sliderControlsToggle"))return!1;if(0==Pe.isControlsVisible)return!1;if(!e)var e=!1;var t=C();e===!0?t.stop().fadeTo(0,0).hide():t.stop().fadeTo(Ee.slider_controls_appear_duration,0,function(){t.hide()}),Pe.isControlsVisible=!1}function M(e){if(0==Ie.isTimePassed("sliderControlsToggle"))return!1;if(1==Pe.isControlsVisible)return!0;if(!e)var e=!1;var t=C();e===!0?t.stop().show():(t.stop().show().fadeTo(0,0),t.fadeTo(Ee.slider_controls_appear_duration,1)),Pe.isControlsVisible=!0}function z(){0==Pe.isControlsVisible?M():A()}function O(e){if(e==Pe.currentControlsMode)return!1;switch(e){case"image":ge&&ge.getElement().show();break;case"video":ge&&ge.getElement().hide();break;default:throw new Error("wrong controld mode: "+e)}Pe.currentControlsMode=e}function L(e,t,i){var n=fe.getSelectedItem();he.setItem(n,!1,i);var r=n.index;be&&be.setActive(r),Te&&0==Pe.isTextPanelSaparateHover&&m(),O("image"==n.type?"image":"video")}function H(e,t){fe.selectItem(t)}function k(e){return de&&0==de.isTapEventOccured(e)?!0:void pe.trigger(he.events.CLICK,e)}function N(){var e=he.getCurrentSlide(),t=e.hasClass("ug-slide-clickable"),i=he.getCurrentItem();return t?(0==Ee.slider_links_newpage?location.href=i.link:window.open(i.link,"_blank"),!0):void(0==Ee.slider_controls_always_on&&1==Ee.slider_controls_appear_ontap&&1==he.isCurrentSlideType("image")&&(z(),Te&&1==Ee.slider_textpanel_always_on&&he.isCurrentSlideType("image")&&he.isCurrentSlideImageFit()&&m()))}function R(e){Te&&he.isCurrentSlideType("image")&&0==he.isCurrentSlideImageFit()&&f()}function G(){M()}function Q(){A()}function D(e){var t=e.parent();he.startSlideAction(t)}function W(){fe.isPlayMode()&&fe.pausePlaying(),pe.trigger(he.events.ACTION_START)}function F(){fe.isPlayMode()&&fe.continuePlaying(),pe.trigger(he.events.ACTION_END)}function B(e,t,i){oe.data("index")==t&&(objItem=fe.getItem(t),h(oe,objItem,!0)),ae.data("index")==t&&(objItem=fe.getItem(t),h(ae,objItem,!0)),se.data("index")==t&&(objItem=fe.getItem(t),h(se,objItem,!0))}function Y(e,t){t=jQuery(t);var i=he.getSlideImage(t),n=J(t),r=Ie.getElementSize(i);Ie.placeElement(n,"center","middle",r.left,r.top,i)}function U(e){var t=J(e);Ie.addClassOnHover(t),Ie.setButtonOnClick(t,D)}function V(){ee.on(fe.events.ITEM_IMAGE_UPDATED,B),ee.on(fe.events.ITEM_CHANGE,L),be&&jQuery(be).on(be.events.BULLET_CLICK,H),1==Ee.slider_enable_arrows&&(Ie.addClassOnHover(ue,"ug-arrow-hover"),Ie.addClassOnHover(le,"ug-arrow-hover"),fe.setNextButton(ue),fe.setPrevButton(le)),0==Ee.slider_controls_always_on&&ne.hover(G,Q),ne.on("touchend click",k),pe.on(he.events.CLICK,N),Te&&1==Pe.isTextPanelSaparateHover&&ne.hover(m,f),me&&(Ie.addClassOnHover(me,"ug-button-hover"),fe.setPlayButton(me)),ve&&(Ie.addClassOnHover(ve,"ug-button-hover"),fe.setFullScreenToggleButton(ve)),_e&&pe.on(he.events.ZOOM_CHANGE,R),ge&&ge.initEvents(),ye.initEvents(),jQuery(ye).on(ye.events.SHOW,W),jQuery(ye).on(ye.events.HIDE,F),U(oe),U(ae),U(se),pe.on(he.events.AFTER_PUT_IMAGE,Y),ne.delegate(".ug-item-wrapper img","mouseenter",function(e){pe.trigger(he.events.IMAGE_MOUSEENTER)}),ne.delegate(".ug-item-wrapper img","mouseleave",function(e){var t=he.isMouseInsideSlideImage(e);0==t&&pe.trigger(he.events.IMAGE_MOUSELEAVE)})}function X(){var e;switch(Ee.slider_loader_type){default:case 1:e="ug-loader1";break;case 2:e="ug-loader2";break;case 3:e="ug-loader3";break;case 4:e="ug-loader4";break;case 5:e="ug-loader5";break;case 6:e="ug-loader6";break;case 7:e="ug-loader7";break;case 8:e="ug-loader8";break;case 9:e="ug-loader9"}return"black"==Ee.slider_loader_color&&(e+=" ug-loader-black"),e}function Z(e){switch(e){case 1:return oe;case 2:return ae;case 3:return se;default:throw new Error("wrong num: "+e)}}function q(e){var t=he.getSlidesReference(),i=t.objCurrentSlide.data("index"),n=e.index,r="left";return i>n&&(r="right"),r}function K(e){if(!e)var e=he.getCurrentSlide();var t=e.children(".ug-slider-preloader");return t}function J(e){var t=e.children(".ug-button-videoplay");return t}function $(e){if(!e)var e=he.getCurrentSlide();var t=e.data("index");if(void 0==t)return null;var i=fe.getItem(t);return i}var ee,te,ie,ne,re,oe,ae,se,le,ue,de,_e,ge,ce,he=this,pe=jQuery(he),fe=new UniteGalleryMain,me=null,ve=null,be=null,ye=new UGVideoPlayer,Ie=new UGFunctions,we=null,Te=null;this.events={ITEM_CHANGED:"item_changed",BEFORE_SWITCH_SLIDES:"before_switch",BEFORE_RETURN:"before_return",AFTER_RETURN:"after_return",ZOOM_START:"slider_zoom_start",ZOOM_END:"slider_zoom_end",ZOOMING:"slider_zooming",ZOOM_CHANGE:"slider_zoom_change",START_DRAG:"start_drag",AFTER_DRAG_CHANGE:"after_drag_change",ACTION_START:"action_start",ACTION_END:"action_end",CLICK:"slider_click",TRANSITION_START:"slider_transition_start",TRANSITION_END:"slider_transition_end",AFTER_PUT_IMAGE:"after_put_image",IMAGE_MOUSEENTER:"slider_image_mouseenter",IMAGE_MOUSELEAVE:"slider_image_mouseleave",CURRENTSLIDE_LOAD_START:"slider_current_loadstart",CURRENTSLIDE_LOAD_END:"slider_current_loadend"};var Ee={slider_scale_mode:"fill",slider_scale_mode_media:"fill",slider_scale_mode_fullscreen:"down",slider_item_padding_top:0,slider_item_padding_bottom:0,slider_item_padding_left:0,slider_item_padding_right:0,slider_background_color:"",slider_background_opacity:1,slider_image_padding_top:0,slider_image_padding_bottom:0,slider_image_padding_left:0,slider_image_padding_right:0,slider_image_border:!1,slider_image_border_width:10,slider_image_border_color:"#ffffff",slider_image_border_radius:0,slider_image_shadow:!1,slider_video_constantsize:!1,slider_video_constantsize_scalemode:"fit",slider_video_constantsize_width:854,slider_video_constantsize_height:480,slider_video_padding_top:0,slider_video_padding_bottom:0,slider_video_padding_left:0,slider_video_padding_right:0,slider_video_enable_closebutton:!0,slider_transition:"slide",slider_transition_speed:300,slider_transition_easing:"easeInOutQuad",slider_control_swipe:!0,slider_control_zoom:!0,slider_zoom_mousewheel:!0,slider_vertical_scroll_ondrag:!1,slider_loader_type:1,slider_loader_color:"white",slider_enable_links:!0,slider_links_newpage:!1,slider_enable_bullets:!1,
slider_bullets_skin:"",slider_bullets_space_between:-1,slider_bullets_align_hor:"center",slider_bullets_align_vert:"bottom",slider_bullets_offset_hor:0,slider_bullets_offset_vert:10,slider_enable_arrows:!0,slider_arrows_skin:"",slider_arrow_left_align_hor:"left",slider_arrow_left_align_vert:"middle",slider_arrow_left_offset_hor:20,slider_arrow_left_offset_vert:0,slider_arrow_right_align_hor:"right",slider_arrow_right_align_vert:"middle",slider_arrow_right_offset_hor:20,slider_arrow_right_offset_vert:0,slider_enable_progress_indicator:!0,slider_progress_indicator_type:"pie",slider_progress_indicator_align_hor:"right",slider_progress_indicator_align_vert:"top",slider_progress_indicator_offset_hor:10,slider_progress_indicator_offset_vert:10,slider_enable_play_button:!0,slider_play_button_skin:"",slider_play_button_align_hor:"left",slider_play_button_align_vert:"top",slider_play_button_offset_hor:40,slider_play_button_offset_vert:8,slider_play_button_mobilehide:!1,slider_enable_fullscreen_button:!0,slider_fullscreen_button_skin:"",slider_fullscreen_button_align_hor:"left",slider_fullscreen_button_align_vert:"top",slider_fullscreen_button_offset_hor:11,slider_fullscreen_button_offset_vert:9,slider_fullscreen_button_mobilehide:!1,slider_enable_zoom_panel:!0,slider_zoompanel_skin:"",slider_zoompanel_align_hor:"left",slider_zoompanel_align_vert:"top",slider_zoompanel_offset_hor:12,slider_zoompanel_offset_vert:92,slider_zoompanel_mobilehide:!1,slider_controls_always_on:!1,slider_controls_appear_ontap:!0,slider_controls_appear_duration:300,slider_enable_text_panel:!0,slider_textpanel_always_on:!0,slider_videoplay_button_type:"square"},Se={slider_progress_indicator_align_hor:"left",slider_progress_indicator_align_vert:"bottom",slider_progress_indicator_offset_hor:0,slider_progress_indicator_offset_vert:0},Pe={isRunOnce:!1,isTextPanelSaparateHover:!1,numPrev:1,numCurrent:2,numNext:3,isControlsVisible:!0,currentControlsMode:"image"};this.switchSlideNums=function(e){switch(pe.trigger(he.events.BEFORE_SWITCH_SLIDES),e){case"left":var t=Pe.numCurrent;Pe.numCurrent=Pe.numNext,Pe.numNext=Pe.numPrev,Pe.numPrev=t;break;case"right":var t=Pe.numCurrent;Pe.numCurrent=Pe.numPrev,Pe.numPrev=Pe.numNext,Pe.numNext=t;break;default:throw new Error("wrong direction: "+e)}pe.trigger(he.events.ITEM_CHANGED)},this.destroy=function(){pe.off(he.events.AFTER_PUT_IMAGE),ee.off(fe.events.ITEM_IMAGE_UPDATED),ee.off(fe.events.ITEM_CHANGE),be&&jQuery(be).on(be.events.BULLET_CLICK),ne.off("mouseenter"),ne.off("mouseleave"),ne.off("touchend"),ne.off("click"),pe.off(he.events.CLICK),_e&&pe.off(he.events.ZOOM_CHANGE),pe.off(he.events.BEFORE_SWITCH_SLIDES),jQuery(ye).off(ye.events.SHOW),jQuery(ye).off(ye.events.HIDE),ye.destroy(),ne.undelegate(".ug-item-wrapper img","mouseenter"),ne.undelegate(".ug-item-wrapper img","mouseleave")},this.________EXTERNAL_GENERAL___________=function(){},this.init=function(t,i,n){e(t,i,n)},this.getSlideImage=function(e){if(!e)var e=he.getCurrentSlide();var t=e.find(".ug-item-wrapper img");return t},this.setHtml=function(e){r(e)},this.run=function(){t()},this.isInnerInPlace=function(){var e=he.getSlidesReference(),t=Ie.getElementSize(e.objCurrentSlide),i=-t.left,n=Ie.getElementSize(re);return i==n.left?!0:!1},this.isAnimating=function(){var e=re.is(":animated");return e},this.isSlideCurrent=function(e){var t=e.data("slidenum");return Pe.numCurrent==t?!0:!1},this.isSlideHasItem=function(e){var t=e.data("index");return void 0===t||null===t?!1:!0},this.getObjImagePadding=function(){var e={padding_top:Ee.slider_image_padding_top,padding_bottom:Ee.slider_image_padding_bottom,padding_left:Ee.slider_image_padding_left,padding_right:Ee.slider_image_padding_right};return e},this.getSlidesReference=function(){var e={objPrevSlide:Z(Pe.numPrev),objNextSlide:Z(Pe.numNext),objCurrentSlide:Z(Pe.numCurrent)};return e},this.getCurrentSlide=function(){var e=he.getSlidesReference();return e.objCurrentSlide},this.getCurrentItemIndex=function(){var e=he.getSlidesReference(),t=e.objCurrentSlide.data("index");return(null===t||void 0===t)&&(t=-1),t},this.getCurrentItem=function(){var e=he.getCurrentItemIndex();if(-1==e)return null;var t=fe.getItem(e);return t},this.getSlideType=function(e){void 0==e&&(e=he.getCurrentSlide());var t=e.data("type");return t},this.isMouseInsideSlideImage=function(e){var t=he.getSlideImage(),i=Ie.getMousePosition(e);void 0===i.pageX&&(i=de.getLastMousePos());var n=Ie.getMouseElementPoint(i,t),r=Ie.getElementSize(t);return isMouseInside=Ie.isPointInsideElement(n,r),isMouseInside},this.isCurrentSlideType=function(e){var t=he.getSlideType();return t==e?!0:!1},this.isCurrentSlideLoadingImage=function(){var e=he.getCurrentSlide(),t=e.data("isLoading");return t===!0?!0:!1},this.setItem=function(e,t,i){var n=he.getSlidesReference(),r=n.objCurrentSlide.data("index"),o=e.index;if(o==r)return!0;var a=void 0==r;if(a)p(n.objCurrentSlide,e),he.placeNabourItems();else{var s="left";fe.getNumItems();"next"==i?s="left":"prev"==i||r>o?s="right":r>o&&(s="right"),w(s,e,t)}},this.placeNabourItems=function(){var e=he.getSlidesReference(),t=e.objCurrentSlide.data("index"),i=fe.getPrevItem(t),n=fe.getNextItem(t);p(e.objNextSlide,n),p(e.objPrevSlide,i),l()},this.________EXTERNAL_API___________=function(){},this.stopSlideAction=function(e,t){e||(e=he.getCurrentSlide()),t===!0?ye.pause():ye.hide()},this.startSlideAction=function(e){e||(e=he.getCurrentSlide());var t=$(e);if("image"==t.type)return!0;switch(1==Ee.slider_video_constantsize&&I(),y(),ye.show(),t.type){case"youtube":ye.playYoutube(t.videoid);break;case"vimeo":ye.playVimeo(t.videoid);break;case"html5video":ye.playHtml5Video(t.videoogv,t.videowebm,t.videomp4,t.urlImage);break;case"soundcloud":ye.playSoundCloud(t.trackid);break;case"wistia":ye.playWistia(t.videoid)}},this.getScaleMode=function(e){if(!e)var e=he.getCurrentSlide();var t=he.getSlideType(e);return"image"!=t?Ee.slider_scale_mode_media:Ee.slider_scale_mode==Ee.slider_scale_mode_fullscreen?Ee.slider_scale_mode:1==fe.isFullScreen()?Ee.slider_scale_mode_fullscreen:Ee.slider_scale_mode},this.getObjects=function(){var e={g_objSlider:ne,g_objInner:re,g_options:Ee,g_objZoomSlider:_e};return e},this.getObjZoom=function(){return _e},this.getOptions=function(){return Ee},this.getElement=function(){return ne},this.getVideoObject=function(){return ye},this.isCurrentSlideImageFit=function(){var e=he.getCurrentSlide();he.getSlideType(e);b("image",e);var t=he.getSlideImage(e);if(0==t.length)return!1;var i=Ie.isImageFitParent(t);return i},this.isCurrentImageInPlace=function(){var e=he.getSlideImage();if(0==e.length)return!1;var t=he.getScaleMode(),i=he.getObjImagePadding(),n=$(),r=e.parent(),o=Ie.getImageInsideParentData(r,n.imageWidth,n.imageHeight,t,i),a=Ie.getElementSize(e);return o.imageWidth==a.width?!0:!1},this.isSlideActionActive=function(){return ye.isVisible()},this.isSwiping=function(){if(!de)return!1;var e=de.isTouchActive();return e},this.isPreloading=function(){var e=K();return e.is(":visible")?!0:!1},this.setOptions=function(e){ce&&(e=Ie.convertCustomPrefixOptions(e,ce,"slider")),Ee=jQuery.extend(Ee,e)},this.setSize=function(e,t){if(0>e||0>t)return!0;var i={};i.width=e+"px",i.height=t+"px",ne.css(i);var n={};n.height=t+"px",n.top="0px",n.left="0px",re.css(n);var r={};r.height=t+"px",r.width=e+"px",oe.css(r),ae.css(r),se.css(r);var o=e-Ee.slider_item_padding_left-Ee.slider_item_padding_right,s=t-Ee.slider_item_padding_top-Ee.slider_item_padding_bottom,d={};d.width=o+"px",d.height=s+"px",d.top=Ee.slider_item_padding_top+"px",d.left=Ee.slider_item_padding_left+"px",ne.find(".ug-item-wrapper").css(d),Te&&Te.setSizeByParent(),a(),u(oe),u(ae),u(se),l();var _=he.getSlideType();if("image"!=_&&1==Ee.slider_video_constantsize)I(),y();else{var g=e-Ee.slider_video_padding_left-Ee.slider_video_padding_right,c=t-Ee.slider_video_padding_top-Ee.slider_video_padding_bottom;ye.setSize(g,c)}},this.refreshSlideItems=function(){return 1==he.isAnimating()?!0:(u(oe),u(ae),u(se),void l())},this.isMouseOver=function(){return ne.ismouseover()},this.setPosition=function(e,t){Ie.placeElement(ne,e,t)},this.zoomIn=function(){return _e?void _e.zoomIn():!0},this.zoomOut=function(){return _e?void _e.zoomOut():!0},this.zoomBack=function(){return _e?void _e.zoomBack():!0}}function UGTextPanel(){function e(e,t){if(!t)var t=v.textpanel_padding_top;var i=t;if(d){var n=i;f.placeElement(d,0,n);var o=f.getElementSize(d),i=o.bottom}var a="";if(_&&(a=jQuery.trim(_.text())),""!=a){var s=i;d&&(s+=v.textpanel_padding_title_description),f.placeElement(_,0,s);var l=f.getElementSize(_);i=l.bottom}if(!v.textpanel_height&&1==b.setInternalHeight){var u=i+v.textpanel_padding_bottom;r(u,e)}}function t(){var e=0;if(d&&(e+=d.outerHeight()),_){var t="";_&&(t=jQuery.trim(_.text())),""!=t&&(d&&(e+=v.textpanel_padding_title_description),e+=_.outerHeight())}return e}function i(){var i=t(),n=(c.height()-i)/2;e(!1,n)}function n(){var i=t(),n=c.height()-i-v.textpanel_padding_bottom;e(!1,n)}function r(e,t){if(!t)var t=!1;if(1==t){if(g){var i=g.height();e>i&&g.height(e)}var n={height:e+"px"};l.add(c).animate(n,v.textpanel_fade_duration)}else g&&g.height(e),l.add(c).height(e)}function o(){if(1==v.textpanel_enable_bg){g=l.children(".ug-textpanel-bg"),g.fadeTo(0,v.textpanel_bg_opacity);var e={"background-color":v.textpanel_bg_color};e=jQuery.extend(e,v.textpanel_bg_css),g.css(e)}if(1==v.textpanel_enable_title){d=c.children(".ug-textpanel-title");var t={};null!==v.textpanel_title_color&&(t.color=v.textpanel_title_color),null!==v.textpanel_title_font_family&&(t["font-family"]=v.textpanel_title_font_family),null!==v.textpanel_title_text_align&&(t["text-align"]=v.textpanel_title_text_align),null!==v.textpanel_title_font_size&&(t["font-size"]=v.textpanel_title_font_size+"px"),null!==v.textpanel_title_bold&&(v.textpanel_title_bold===!0?t["font-weight"]="bold":t["font-weight"]="normal"),v.textpanel_css_title&&(t=jQuery.extend(t,v.textpanel_css_title)),d.css(t)}if(1==v.textpanel_enable_description){_=c.children(".ug-textpanel-description");var i={};null!==v.textpanel_desc_color&&(i.color=v.textpanel_desc_color),null!==v.textpanel_desc_font_family&&(i["font-family"]=v.textpanel_desc_font_family),null!==v.textpanel_desc_text_align&&(i["text-align"]=v.textpanel_desc_text_align),null!==v.textpanel_desc_font_size&&(i["font-size"]=v.textpanel_desc_font_size+"px"),null!==v.textpanel_desc_bold&&(v.textpanel_desc_bold===!0?i["font-weight"]="bold":i["font-weight"]="normal"),v.textpanel_css_title&&(i=jQuery.extend(i,v.textpanel_css_description)),_.css(i)}}function a(){var e=h.getSelectedItem();p.setText(e.title,e.description)}function s(){jQuery(h).on(h.events.ITEM_CHANGE,a)}var l,u,d,_,g,c,h,p=this,f=new UGFunctions,m="",v={textpanel_align:"bottom",textpanel_margin:0,textpanel_text_valign:"middle",textpanel_padding_top:10,textpanel_padding_bottom:10,textpanel_height:null,textpanel_padding_title_description:5,textpanel_padding_right:11,textpanel_padding_left:11,textpanel_fade_duration:200,textpanel_enable_title:!0,textpanel_enable_description:!0,textpanel_enable_bg:!0,textpanel_bg_color:"#000000",textpanel_bg_opacity:.4,textpanel_title_color:null,textpanel_title_font_family:null,textpanel_title_text_align:null,textpanel_title_font_size:null,textpanel_title_bold:null,textpanel_css_title:{},textpanel_desc_color:null,textpanel_desc_font_family:null,textpanel_desc_text_align:null,textpanel_desc_font_size:null,textpanel_desc_bold:null,textpanel_css_description:{},textpanel_desc_style_as_title:!1,textpanel_bg_css:{}},b={isFirstTime:!0,setInternalHeight:!0};this.positionElements=function(t){if(!v.textpanel_height||"top"==v.textpanel_text_valign)return e(t),!1;switch(v.textpanel_text_valign){default:case"top":e(!1);break;case"bottom":n();break;case"center":case"middle":i()}},this.init=function(e,t,i){if(h=e,i&&(m=i,t=f.convertCustomPrefixOptions(t,m,"textpanel")),t&&(v=jQuery.extend(v,t)),0==v.textpanel_enable_title&&0==v.textpanel_enable_description)throw new Error("Textpanel Error: The title or description must be enabled");v.textpanel_height&&v.textpanel_height<0&&(v.textpanel_height=null),1==v.textpanel_desc_style_as_title&&(v.textpanel_desc_color||(v.textpanel_desc_color=v.textpanel_title_color),v.textpanel_desc_bold||(v.textpanel_desc_bold=v.textpanel_title_bold),v.textpanel_desc_font_family||(v.textpanel_desc_font_family=v.textpanel_title_font_family),v.textpanel_desc_font_size||(v.textpanel_desc_font_size=v.textpanel_title_font_size),v.textpanel_desc_text_align||(v.textpanel_desc_text_align=v.textpanel_title_text_align))},this.appendHTML=function(e,t){u=e,t=t?" "+t:"";var i="<div class='ug-textpanel"+t+"'>";1==v.textpanel_enable_bg&&(i+="<div class='ug-textpanel-bg"+t+"'></div>"),i+="<div class='ug-textpanel-textwrapper"+t+"'>",1==v.textpanel_enable_title&&(i+="<div class='ug-textpanel-title"+t+"'></div>"),1==v.textpanel_enable_description&&(i+="<div class='ug-textpanel-description"+t+"'></div>"),i+="</div></div>",e.append(i),l=e.children(".ug-textpanel"),c=l.children(".ug-textpanel-textwrapper"),o()},this.destroy=function(){jQuery(h).off(h.events.ITEM_CHANGE)},this.run=function(){p.setSizeByParent(),s()},this.setPanelSize=function(e,t){if(b.setInternalHeight=!0,t)b.setInternalHeight=!1;else var t=80;v.textpanel_height&&(t=v.textpanel_height),l.width(e),l.height(t),g&&(g.width(e),g.height(t));var i=e-v.textpanel_padding_left-v.textpanel_padding_right,n=v.textpanel_padding_left;f.setElementSizeAndPosition(c,n,0,i,t),d&&d.width(i),_&&_.width(i),0==b.isFirstTime&&p.positionElements(!1)},this.setSizeByParent=function(){var e=f.getElementSize(u);p.setPanelSize(e.width)},this.setTextPlain=function(e,t){d&&d.html(e),_&&_.html(t)},this.setText=function(e,t){1==b.isFirstTime?(p.setTextPlain(e,t),b.isFirstTime=!1,p.positionElements(!1)):c.stop().fadeTo(v.textpanel_fade_duration,0,function(){p.setTextPlain(e,t),p.positionElements(!0),jQuery(this).fadeTo(v.textpanel_fade_duration,1)})},this.positionPanel=function(e,t){var i={};if(void 0!==e&&null!==e)i.top=e,i.bottom="auto";else switch(v.textpanel_align){case"top":i.top=v.textpanel_margin+"px";break;case"bottom":i.top="auto",i.bottom=v.textpanel_margin+"px";break;case"middle":i.top=f.getElementRelativePos(l,"middle",v.textpanel_margin)}void 0!==t&&null!==t&&(i.left=t),l.css(i)},this.setOptions=function(e){m&&(e=f.convertCustomPrefixOptions(e,m,"textpanel")),v=jQuery.extend(v,e)},this.getElement=function(){return l},this.getSize=function(){var e=f.getElementSize(l);return e},this.refresh=function(e,t,i,n){o(),i?p.setPanelSize(i,n):p.setSizeByParent(),p.positionElements(!1),t!==!0&&p.positionPanel(),e===!0&&p.show()},this.hide=function(){l.hide()},this.show=function(){l.show()},this.getOptions=function(){return v},this.getOption=function(e){return 0==v.hasOwnProperty(e)?null:v[e]}}function UGZoomButtonsPanel(){function e(e){return e?e.hasClass("ug-zoompanel-button-disabled")?!0:!1:!0}function t(e){e&&e.addClass("ug-zoompanel-button-disabled")}function i(e){e&&e.removeClass("ug-zoompanel-button-disabled")}function n(){if(0==d.isCurrentSlideType("image"))return!0;var n=d.isCurrentSlideImageFit();1==n?0==e(s)&&(t(s),t(l)):1==e(s)&&(i(s),i(l))}var r,o,a,s,l,u=this,d=new UGSlider,_=new UGFunctions,g={slider_zoompanel_skin:""};this.init=function(e,t){d=e,t&&(g=jQuery.extend(g,t))},this.appendHTML=function(e){o=e;var t="<div class='ug-slider-control ug-zoompanel ug-skin-"+g.slider_zoompanel_skin+"'>";t+="<div class='ug-zoompanel-button ug-zoompanel-plus'></div>",t+="<div class='ug-zoompanel-button ug-zoompanel-minus ug-zoompanel-button-disabled'></div>",t+="<div class='ug-zoompanel-button ug-zoompanel-return ug-zoompanel-button-disabled'></div>",t+="</div>",e.append(t),r=e.children(".ug-zoompanel"),a=r.children(".ug-zoompanel-plus"),s=r.children(".ug-zoompanel-minus"),l=r.children(".ug-zoompanel-return")},this.setObjects=function(e,t,i){a=e,s=t,l=i,s&&s.addClass("ug-zoompanel-button-disabled"),l&&l.addClass("ug-zoompanel-button-disabled")},this.getElement=function(){return r},u.initEvents=function(){_.addClassOnHover(a,"ug-button-hover"),_.addClassOnHover(s,"ug-button-hover"),_.addClassOnHover(l,"ug-button-hover"),_.setButtonOnClick(a,function(){return 1==e(a)?!0:void d.zoomIn()}),_.setButtonOnClick(s,function(){return 1==e(s)?!0:void d.zoomOut()}),_.setButtonOnClick(l,function(){return 1==e(l)?!0:void d.zoomBack()}),jQuery(d).on(d.events.ZOOM_CHANGE,n),jQuery(d).on(d.events.ITEM_CHANGED,n)}}function UGBullets(){function e(){var e="",t="";-1!=h.bullets_space_between&&(t=" style='margin-left:"+h.bullets_space_between+"px'");for(var i=0;u>i;i++)e+=0==i?"<div class='ug-bullet'></div>":"<div class='ug-bullet'"+t+"></div>";if(o.html(e),!s){var n=o.find(".ug-bullet:first-child");n.length&&(s=n.width())}}function t(e){if(1==l.isActive(e))return!0;var t=e.index();jQuery(l).trigger(l.events.BULLET_CLICK,t)}function i(){var e=o.children(".ug-bullet");g.setButtonOnClick(e,t),e.on("mousedown mouseup",function(e){return!1})}function n(e){if(0>e||e>=u)throw new Error("wrong bullet index: "+e)}function r(){if(1==c.isInited)return!0;throw new Error("The bullets are not inited!")}var o,a,s,l=this,u=0,d=new UniteGalleryMain,_=-1,g=new UGFunctions,c={isInited:!1},h={bullets_skin:"",bullets_addclass:"",bullets_space_between:-1};this.events={BULLET_CLICK:"bullet_click"},this.init=function(e,t,i){d=e,u=i?i:d.getNumItems(),c.isInited=!0,h=jQuery.extend(h,t),""==h.bullets_skin&&(h.bullets_skin=h.gallery_skin)},this.getBulletsWidth=function(){if(0==u)return 0;if(!s)return 0;var e=u*s+(u-1)*h.bullets_space_between;return e},this.appendHTML=function(t){a=t,r();var n="";""!=h.bullets_addclass&&(n=" "+h.bullets_addclass);var s="<div class='ug-slider-control ug-bullets ug-skin-"+h.bullets_skin+n+"'>";s+="</div>",o=jQuery(s),t.append(o),e(),i()},this.updateNumBullets=function(t){u=t,e(),i()},this.getElement=function(){return o},this.setActive=function(e){r(),n(e);var t=o.children(".ug-bullet");t.removeClass("ug-bullet-active");var i=jQuery(t[e]);i.addClass("ug-bullet-active"),_=e},this.isActive=function(e){if(n(e),"number"!=typeof e)var t=e;else var t=o.children(".ug-bullet")[e];return t.hasClass("ug-bullet-active")?!0:!1},this.getNumBullets=function(){return u}}function UGProgressBar(){var e,t,i=this,n=0,r=new UGFunctions,o={slider_progressbar_color:"#ffffff",slider_progressbar_opacity:.6,slider_progressbar_line_width:5};this.put=function(i,n){n&&(o=jQuery.extend(o,n)),i.append("<div class='ug-progress-bar'><div class='ug-progress-bar-inner'></div></div>"),e=i.children(".ug-progress-bar"),t=e.children(".ug-progress-bar-inner"),t.css("background-color",o.slider_progressbar_color),e.height(o.slider_progressbar_line_width),t.height(o.slider_progressbar_line_width),t.width("0%");var r=o.slider_progressbar_opacity,a=t[0];a.style.opacity=r,a.style.filter="alpha(opacity="+100*r+")"},this.putHidden=function(t,n){i.put(t,n),e.hide()},this.getElement=function(){return e},this.setSize=function(n){e.width(n),t.width(n),i.draw()},this.setPosition=function(t,i,n,o){r.placeElement(e,t,i,n,o)},this.draw=function(){var e=100*n;t.width(e+"%")},this.setProgress=function(e){n=r.normalizePercent(e),i.draw()},this.getType=function(){return"bar"}}function UGProgressPie(){function e(e){if(!e)var e=0;var t=Math.min(a.slider_progresspie_width,a.slider_progresspie_height)/2,n=i[0].getContext("2d");0==r&&(r=!0,n.rotate(1.5*Math.PI),n.translate(-2*t,0)),n.clearRect(0,0,a.slider_progresspie_width,a.slider_progresspie_height);var o=a.slider_progresspie_width/2,s=a.slider_progresspie_height/2,l=0,u=e*Math.PI*2;if(1==a.slider_progresspie_type_fill)n.beginPath(),n.moveTo(o,s),n.arc(o,s,t,l,u),n.lineTo(o,s),n.fillStyle=a.slider_progresspie_color1,n.fill(),n.closePath();else{n.globalCompositeOperation="source-over",n.beginPath(),n.moveTo(o,s),n.arc(o,s,t,l,u),n.lineTo(o,s),n.fillStyle=a.slider_progresspie_color1,n.fill(),n.closePath(),n.globalCompositeOperation="destination-out";var d=t-a.slider_progresspie_stroke_width;n.beginPath(),n.moveTo(o,s),n.arc(o,s,d,l,u),n.lineTo(o,s),n.fillStyle=a.slider_progresspie_color1,n.fill(),n.closePath()}1==a.slider_progresspie_type_fill&&(l=u,u=2*Math.PI,n.beginPath(),n.arc(o,s,t,l,u),n.lineTo(o,s),n.fillStyle=a.slider_progresspie_color2,n.fill(),n.closePath())}var t,i,n=this,r=!1,o=new UGFunctions,a={slider_progresspie_type_fill:!1,slider_progresspie_color1:"#B5B5B5",slider_progresspie_color2:"#E5E5E5",slider_progresspie_stroke_width:6,slider_progresspie_width:30,slider_progresspie_height:30};this.put=function(e,t){t&&(a=jQuery.extend(a,t)),e.append("<canvas class='ug-canvas-pie' width='"+a.slider_progresspie_width+"' height='"+a.slider_progresspie_height+"'></canvas>"),i=e.children(".ug-canvas-pie")},this.putHidden=function(t,r){n.put(t,r),e(.1),i.hide()},this.getElement=function(){return i},this.setPosition=function(e,t){o.placeElement(i,e,t)},this.getSize=function(){var e={width:a.slider_progresspie_width,height:a.slider_progresspie_height};return e},this.setProgress=function(i){i=o.normalizePercent(i),t=i,e(i)},this.getType=function(){return"pie"}}function UGTouchSliderControl(){function e(e){if(!e)var e=m.getSlidesReference();var t=v.getElementSize(e.objCurrentSlide),i=-t.left,n=v.getElementSize(h),r=i-n.left;return r}function t(){var t=m.getSlidesReference(),i=e(t),n=Math.round(3*t.objCurrentSlide.width()/8);if(Math.abs(i)>=n)return!0;var r=Math.abs(b.lastMouseX-b.startMouseX);Math.abs(b.lastMouseY-b.startMouseY);if(20>r)return!1;var o=jQuery.now(),a=o-b.startTime;return 500>a?!0:!1}function i(e){if(1==m.isInnerInPlace())return!1;if(p.trigger(m.events.BEFORE_RETURN),!e)var e=m.getSlidesReference();var t=v.getElementSize(e.objCurrentSlide),i=-t.left;h.animate({left:i+"px"},{duration:f.slider_transition_return_speed,easing:f.slider_transition_continuedrag_easing,queue:!1,progress:function(e,t,n){if(1==b.isDragVideo){var r=v.getElementSize(h),o=r.left,a=o-i,s=b.videoStartX+a;b.videoObject.css("left",s)}},complete:function(){p.trigger(m.events.AFTER_RETURN)}})}function n(e){m.getVideoObject().hide(),m.switchSlideNums(e),m.placeNabourItems()}function r(){var t=m.getSlidesReference(),r=e(t);if(0==r)return!1;var o=r>0?"left":"right",a=!1;switch(o){case"right":if(m.isSlideHasItem(t.objPrevSlide))var s=v.getElementSize(t.objPrevSlide),l=-s.left;else a=!0;break;case"left":if(m.isSlideHasItem(t.objNextSlide))var u=v.getElementSize(t.objNextSlide),l=-u.left;else a=!0}1==a?i(t):h.stop().animate({left:l+"px"},{duration:f.slider_transition_continuedrag_speed,easing:f.slider_transition_continuedrag_easing,queue:!1,progress:function(){if(1==b.isDragVideo){var e=v.getElementSize(h),t=e.left,i=t-b.startPosx,n=b.videoStartX+i;b.videoObject.css("left",n)}},always:function(){n(o),p.trigger(m.events.AFTER_DRAG_CHANGE)}})}function o(e){var t=b.lastMouseX-b.startMouseX;if(0==t)return!0;var i=0>t?"left":"right",n=m.getObjZoom();if(n){var r=n.isPanEnabled(e,i);if(1==r)return b.isInitDataValid=!1,!0;if(0==b.isInitDataValid)return a(e),!0}var o=b.startPosx+t;if(t>0&&o>0)o/=3;else if(0>t){var s=o+h.width(),l=c.width();l>s&&(o=b.startPosx+t/3)}if(0==b.isDragging&&(b.isDragging=!0,p.trigger(m.events.START_DRAG)),h.css("left",o+"px"),1==b.isDragVideo){var u=o-b.startPosx,d=b.videoStartX+u;b.videoObject.css("left",d)}}function a(e){var t=v.getMousePosition(e);b.startMouseX=t.pageX,b.startMouseY=t.pageY,b.lastMouseX=b.startMouseX,b.lastMouseY=b.startMouseY,b.startTime=jQuery.now();var i=v.getArrTouches(e);b.startArrTouches=v.getArrTouchPositions(i);var n=v.getElementSize(h);b.startPosx=n.left,b.isInitDataValid=!0,b.isDragVideo=!1,v.storeEventData(e,b.storedEventID)}function s(e){b.touch_active=!1}function l(e,t){b.touch_active=!0,a(t)}function u(e){e.preventDefault(),b.isDragging=!1,1==m.isAnimating()&&h.stop(!0,!0);var t=v.getArrTouches(e);return t.length>1?(1==b.touch_active&&s("1"),!0):1==b.touch_active?!0:void l("1",e)}function d(e){if(0==b.touch_active)return!0;if(0==e.buttons)return s("2"),r(),!0;v.updateStoredEventData(e,b.storedEventID),e.preventDefault();var t=v.getMousePosition(e);b.lastMouseX=t.pageX,b.lastMouseY=t.pageY;var i=null;1==f.slider_vertical_scroll_ondrag&&(i=v.handleScrollTop(b.storedEventID)),"vert"!==i&&o(e)}function _(e){var n=v.getArrTouches(e),o=n.length,a=m.isInnerInPlace();if(1==a&&0==b.touch_active&&0==o)return!0;if(0==o&&1==b.touch_active){s("3");var u=!1,d=v.wasVerticalScroll(b.storedEventID);0==d&&(u=t()),1==u?r():i()}else 1==o&&0==b.touch_active&&l("2",e)}function g(){c.bind("mousedown touchstart",u),jQuery("body").bind("mousemove touchmove",d),jQuery(window).add("body").bind("mouseup touchend",_)}var c,h,p,f,m=new UGSlider,v=new UGFunctions,f={slider_transition_continuedrag_speed:250,slider_transition_continuedrag_easing:"linear",slider_transition_return_speed:300,slider_transition_return_easing:"easeInOutQuad"},b={touch_active:!1,startMouseX:0,startMouseY:0,lastMouseX:0,lastMouseY:0,startPosx:0,startTime:0,isInitDataValid:!1,slides:null,lastNumTouches:0,isDragging:!1,storedEventID:"touchSlider",videoStartX:0,isDragVideo:!1,videoObject:null};this.isTapEventOccured=function(t){var i=v.getArrTouches(t),n=i.length;if(0!=n||0!=b.lastNumTouches)return b.lastNumTouches=n,!1;b.lastNumTouches=n;var r=m.getSlidesReference(),o=(e(r),Math.abs(b.lastMouseX-b.startMouseX)),a=Math.abs(b.lastMouseY-b.startMouseY),s=jQuery.now(),l=s-b.startTime;return 20>o&&50>a&&500>l?!0:!1},this.init=function(e,t){m=e,p=jQuery(m),g_objects=e.getObjects(),c=g_objects.g_objSlider,h=g_objects.g_objInner,f=jQuery.extend(f,t),g()},this.getLastMousePos=function(){var e={pageX:b.lastMouseX,pageY:b.lastMouseY};return e},this.isTouchActive=function(){return b.touch_active}}function UGZoomSliderControl(){function e(e,t){T=e,w=jQuery(T),g_objects=e.getObjects(),y=g_objects.g_objSlider,I=g_objects.g_objInner,S=jQuery.extend(S,t),b()}function t(){var e=T.getScaleMode();return"down"!=e&&(e="fit"),e}function i(){var e=jQuery.now(),i=e-P.storeImageLastTime;if(20>i)return!1;var n=T.getSlidesReference();if(P.objSlide=n.objCurrentSlide,P.objImage=n.objCurrentSlide.find("img"),0==P.objImage.length)return!1;P.objImageSize=E.getElementSize(P.objImage),P.objParent=P.objImage.parent(),P.objParentSize=E.getElementSize(P.objParent);var r=t();objPadding=T.getObjImagePadding(),P.objFitImageSize=E.getImageInsideParentDataByImage(P.objImage,r,objPadding);var e=jQuery.now();return P.storeImageLastTime=e,!0}function n(e,i){var n=T.getSlidesReference(),r=n.objCurrentSlide.find("img"),o=t();w.trigger(T.events.ZOOM_START);var a=!0,s=T.getObjImagePadding();if("back"==e){var l=E.getImageOriginalSize(r);E.scaleImageFitParent(r,l.width,l.height,o,s)}else{var u="in"==e?!0:!1;a=E.zoomImageInsideParent(r,u,S.slider_zoom_step,i,o,S.slider_zoom_max_ratio,s)}1==a&&(w.trigger(T.events.ZOOMING),w.trigger(T.events.ZOOM_CHANGE),w.trigger(T.events.ZOOM_END))}function r(e,t,i){var n=E.getArrTouches(t);if(i===!0){if(1!=n.length)return!1}else if(n.length>1)return!1;return E.isElementBiggerThenParent(e)?!0:!1}function o(e){var t=E.getMousePosition(e);P.startMouseX=t.pageX,P.startMouseY=t.pageY,P.lastMouseX=P.startMouseX,P.lastMouseY=P.startMouseY,P.startImageX=P.objImageSize.left,P.startImageY=P.objImageSize.top,P.panXActive=P.objImageSize.width>P.objParentSize.width,P.panYActive=P.objImageSize.height>P.objParentSize.height}function a(e){P.isPanActive=!0,o(e)}function s(e){if(void 0==P.objImage||0==P.objImage.length)return!0;var t=E.getMousePosition(e),i=(t.pageX-P.startMouseX,t.pageY-P.startMouseY,t.pageX-P.lastMouseX),n=t.pageY-P.lastMouseY,r=0>i?"left":"right",o=0>n?"up":"down";P.lastMouseX=t.pageX,P.lastMouseY=t.pageY;var a=E.getElementSize(P.objImage);0==P.panYActive?n=0:"down"==o&&a.top>0?n/=3:"up"==o&&a.bottom<P.objParentSize.height&&(n/=3),0==P.panXActive||0==T.isInnerInPlace()?i=0:"right"==r&&a.left>0?i/=3:"left"==r&&a.right<P.objParentSize.width&&(i/=3);var s=a.left+i,l=a.top+n;E.placeElement(P.objImage,s,l)}function l(){var e=!1,t=!1,i=0,n=0,r=E.getElementSize(P.objImage),o=T.getObjImagePadding(),a=E.getElementCenterPosition(P.objImage,o);P.panXActive=P.objImageSize.width>P.objParentSize.width,P.panYActive=P.objImageSize.height>P.objParentSize.height,1==P.panYActive?r.top>0?(n=0,t=!0):r.bottom<P.objParentSize.height&&(n=P.objParentSize.height-r.height,t=!0):r.top!=a.top&&(t=!0,n=a.top),1==P.panXActive?r.left>0?(i=0,e=!0):r.right<P.objParentSize.width&&(i=P.objParentSize.width-r.width,e=!0):r.left!=a.left&&(e=!0,i=a.left);var s={};1==t&&(s.top=n+"px"),1==e&&(s.left=i+"px"),(1==t||1==e)&&P.objImage.animate(s,{duration:S.slider_zoom_return_pan_duration,easing:S.slider_zoom_return_pan_easing,queue:!1})}function u(){return P.objImage&&P.objImage.is(":animated")?!0:!1}function d(e){P.isZoomActive=!0,P.startDistance=E.getDistance(e[0].pageX,e[0].pageY,e[1].pageX,e[1].pageY),0==P.startDistance&&(P.startDistance=1),P.startMiddlePoint=E.getMiddlePoint(e[0].pageX,e[0].pageY,e[1].pageX,e[1].pageY),P.objImageSize=E.getElementSize(P.objImage),P.startImageX=P.objImageSize.left,P.startImageY=P.objImageSize.top,P.imageOrientPoint=E.getElementLocalPoint(P.startMiddlePoint,P.objImage);var t=E.isPointInsideElement(P.imageOrientPoint,P.objImageSize);0==t&&(P.imageOrientPoint=E.getElementCenterPoint(P.objImage)),w.trigger(T.events.ZOOM_START)}function _(e){if(0==P.isZoomActive)return!1;var t=E.getArrTouches(e);2!=t.length&&(P.isZoomActive=!1,w.trigger(T.events.ZOOM_END))}function g(e){if(1==P.isZoomActive)return!0;var t=E.getArrTouches(e);return 2!=t.length?!0:void d(t)}function c(e){var t=E.getArrTouches(e),i=E.getDistance(t[0].pageX,t[0].pageY,t[1].pageX,t[1].pageY),n=i/P.startDistance,r=E.getMiddlePoint(t[0].pageX,t[0].pageY,t[1].pageX,t[1].pageY),o=P.objImageSize.width*n,a=P.objImageSize.height*n,s=E.getImageOriginalSize(P.objImage),l=1;if(s.width>0&&(l=o/s.width),l>S.slider_zoom_max_ratio)return!0;panX=-(P.imageOrientPoint.x*n-P.imageOrientPoint.x),panY=-(P.imageOrientPoint.y*n-P.imageOrientPoint.y);var u=r.x-P.startMiddlePoint.x,d=r.y-P.startMiddlePoint.y,_=P.startImageX+panX+u,g=P.startImageY+panY+d;E.setElementSizeAndPosition(P.objImage,_,g,o,a),w.trigger(T.events.ZOOMING),w.trigger(T.events.ZOOM_CHANGE)}function h(){if(void 0==P.objImage||0==P.objImage.length)return!0;var e=E.getElementSize(P.objImage);if(e.width<P.objFitImageSize.imageWidth){P.objImage.css({position:"absolute",margin:"none"});var t={top:P.objFitImageSize.imageTop+"px",left:P.objFitImageSize.imageLeft+"px",width:P.objFitImageSize.imageWidth+"px",height:P.objFitImageSize.imageHeight+"px"};P.objImage.animate(t,{duration:S.slider_zoom_return_pan_duration,easing:S.slider_zoom_return_pan_easing,queue:!1})}else l()}function p(e){if(0==T.isCurrentSlideType("image"))return!0;i();return void 0==P.objImage||0==P.objImage.length?!0:(e.preventDefault(),1==u()&&P.objImage.stop(!0),1==P.isZoomActive?_(e):g(e),void(1==P.isZoomActive?P.isPanActive=!1:1==r(P.objImage,e)&&1==P.isZoomedOnce&&a(e)))}function f(e){if(0==T.isCurrentSlideType("image"))return!0;var t=jQuery(e.target);if(1==t.data("ug-button"))return!1;i();if(void 0==P.objImage||0==P.objImage.length)return!0;var n=P.isPanActive,o=P.isZoomActive;if(0==T.isInnerInPlace())return P.isZoomActive=!1,P.isPanActive=!1,!0;if(1==P.isZoomActive?_(e):g(e),1==P.isZoomActive)P.isPanActive=!1;else{var s=r(P.objImage,e,!0);1==P.isPanActive?P.isPanActive=!1:1==s&&a(e)}(n||o)&&0==P.isZoomActive&&0==P.isPanActive&&h()}function m(e){return 0==T.isCurrentSlideType("image")?!0:void(1==P.isZoomActive?c(e):1==P.isPanActive&&s(e))}function v(e,t,i,r){if(0==S.slider_zoom_mousewheel)return!0;if(0==T.isCurrentSlideType("image"))return!0;e.preventDefault();var o=t>0,a=E.getMousePosition(e),s=1==o?"in":"out";n(s,a)}function b(){y.on("mousewheel",v),y.bind("mousedown touchstart",p),jQuery("body").bind("mousemove touchmove",m),jQuery(window).add("body").bind("mouseup touchend",f),w.bind(T.events.BEFORE_RETURN,function(){h()}),w.bind(T.events.ITEM_CHANGED,function(){P.isZoomedOnce=!1}),w.bind(T.events.ZOOM_CHANGE,function(){P.isZoomedOnce=!0})}var y,I,w,T=new UGSlider,E=new UGFunctions,S={
slider_zoom_step:1.2,slider_zoom_max_ratio:6,slider_zoom_return_pan_duration:400,slider_zoom_return_pan_easing:"easeOutCubic"},P={isPanActive:!1,startMouseX:0,startMouseY:0,lastMouseX:0,lastMouseY:0,startImageX:0,startImageY:0,panXActive:!1,panYActive:!1,objImage:null,objImageSize:null,objParent:null,objParentSize:null,objSlide:null,storeImageLastTime:0,isZoomActive:!1,startDistance:0,startMiddlePoint:null,imageOrientPoint:null,objFitImageSize:null,isZoomedOnce:!1};this.________EXTERNAL_____________=function(){},this.isPanEnabled=function(e,t){if(i(),void 0==P.objImage||0==P.objImage.length)return!1;if(0==P.isZoomedOnce)return!1;if(0==r(P.objImage,e))return!1;if(0==T.isInnerInPlace())return!1;if("left"==t){if(P.objImageSize.right<=P.objParentSize.width)return!1}else if(P.objImageSize.left>=0)return!1;return!0},this.init=function(t,i){e(t,i)},this.zoomIn=function(){n("in")},this.zoomOut=function(){n("out")},this.zoomBack=function(){n("back")}}function UGWistiaAPI(){function e(){return"undefined"!=typeof Wistia}function t(e,t,n,o,a){r=null,s=!1;var l=e+"_video",u="<div id='"+l+"' class='wistia_embed' style='width:"+n+";height:"+o+";' data-video-width='"+n+"' data-video-height='"+o+"'>&nbsp;</div>";jQuery("#"+e).html(u),r=Wistia.embed(t,{version:"v1",videoWidth:n,videoHeight:o,container:l,autoPlay:a}),s=!0,i()}function i(){r.bind("play",function(){a.trigger(o.events.START_PLAYING)}),r.bind("pause",function(){a.trigger(o.events.STOP_PLAYING)}),r.bind("end",function(){a.trigger(o.events.STOP_PLAYING)})}this.isAPILoaded=!1;var n,r,o=this,a=jQuery(this),s=!1;this.events={START_PLAYING:"start_playing",STOP_PLAYING:"stop_playing"},this.loadAPI=function(){return 1==g_ugWistiaAPI.isAPILoaded?!0:e()?(g_ugWistiaAPI.isAPILoaded=!0,!0):(g_ugFunctions.loadJs("fast.wistia.com/assets/external/E-v1.js",!0),void(g_ugWistiaAPI.isAPILoaded=!0))},this.doCommand=function(e){if(null==r)return!1;if(0==s)return!1;switch(e){case"play":r.play();break;case"pause":r.pause()}},this.pause=function(){o.doCommand("pause")},this.play=function(){o.doCommand("play")},this.putVideo=function(i,r,o,a,s){return e()?(t(i,r,o,a,s),!0):(this.loadAPI(),void(n=setInterval(function(){e()&&(t(i,r,o,a,s),clearInterval(n))},500)))},this.isPlayerReady=function(){return s&&r?!0:!1}}function UGSoundCloudAPI(){function e(){return"undefined"!=typeof SC}function t(e,t,n,a,s){r=null,g_isPlayerReady=!1;var l=e+"_iframe",u=location.protocol+"//w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/"+t;u+="&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;show_artwork=true&show_comments=false&amp;show_playcount=true&amp;show_user=false&amp;hide_related=true&amp;visual=true&amp;start_track=0&amp;callback=true",u+=s===!0?"&amp;auto_play=true":"&amp;auto_play=false";var d="<iframe id='"+l+"' src="+u+" width='"+n+"' height='"+a+"' frameborder='0' scrolling='no' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";jQuery("#"+e).html(d),r=SC.Widget(l),r.bind(SC.Widget.Events.READY,function(){r&&(g_isPlayerReady=!0,i())}),o=e}function i(){r.bind(SC.Widget.Events.PLAY,function(){s.trigger(a.events.START_PLAYING)}),r.bind(SC.Widget.Events.PAUSE,function(){s.trigger(a.events.STOP_PLAYING)}),r.bind(SC.Widget.Events.FINISH,function(){s.trigger(a.events.STOP_PLAYING)})}this.isAPILoaded=!1;var n,r,o,a=this,s=jQuery(this);this.events={START_PLAYING:"start_playing",STOP_PLAYING:"stop_playing"},this.loadAPI=function(){return 1==g_ugSoundCloudAPI.isAPILoaded?!0:e()?(g_ugSoundCloudAPI.isAPILoaded=!0,!0):(g_ugFunctions.loadJs("w.soundcloud.com/player/api.js",!0),void(g_ugSoundCloudAPI.isAPILoaded=!0))},this.putSound=function(i,r,o,a,s){return e()?(t(i,r,o,a,s),!0):(this.loadAPI(),void(n=setInterval(function(){e()&&(t(i,r,o,a,s),clearInterval(n))},500)))},this.doCommand=function(e){if(null==r)return!1;if(0==g_isPlayerReady)return!1;switch(e){case"play":r.play();break;case"pause":r.pause()}},this.pause=function(){a.doCommand("pause")},this.play=function(){a.doCommand("play")},this.destroy=function(){g_isPlayerReady=!1,r=null,o&&(jQuery("#"+o).html(""),o=null)}}function UGHtml5MediaAPI(){function e(){return"undefined"!=typeof mejs}function t(e,t,n,o,a){r=null,g_isPlayerReady=!1;var s=location.protocol+"//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/flashmediaelement-cdn.swf",l=location.protocol+"//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/silverlightmediaelement.xap",u=e+"_video",d="";a&&a===!0&&(d="autoplay='autoplay'");var _="";t.posterImage&&(_="poster='"+t.posterImage+"'");var g="<video id='"+u+"' width='"+n+"' height='"+o+"'  controls='controls' preload='none' "+d+" "+_+">";""!=t.mp4&&(g+="<source type='video/mp4' src='"+t.mp4+"' />"),""!=t.webm&&(g+="<source type='video/webm' src='"+t.webm+"' />"),""!=t.ogv&&(g+="<source type='video/ogg' src='"+t.ogv+"' />"),g+="<object width='"+n+"' height='"+o+"' type='application/x-shockwave-flash' data='"+s+"'>",g+="<param name='movie' value='"+s+"' />",g+="<param name='flashvars' value='controls=true&file="+t.mp4+"' />",g+="</object>",g+="</video>",jQuery("#"+e).html(g),new MediaElement(u,{enablePluginDebug:!1,flashName:s,silverlightName:l,success:function(e,t){g_isPlayerReady=!0,r=e,0==a&&r.pause(),i()},error:function(e){trace(e)}})}function i(){g_ugFunctions.addEvent(r,"play",function(){a.trigger(o.events.START_PLAYING)}),g_ugFunctions.addEvent(r,"pause",function(){a.trigger(o.events.STOP_PLAYING)}),g_ugFunctions.addEvent(r,"ended",function(){a.trigger(o.events.STOP_PLAYING)})}this.isAPILoaded=!1;var n,r,o=this,a=jQuery(this);this.events={START_PLAYING:"start_playing",STOP_PLAYING:"stop_playing"},this.loadAPI=function(){return 1==g_ugHtml5MediaAPI.isAPILoaded?!0:e()?(g_ugHtml5MediaAPI.isAPILoaded=!0,!0):(g_ugFunctions.loadJs("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelement.min.js",!0),g_ugFunctions.loadCss("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelementplayer.min.css",!0),void(g_ugHtml5MediaAPI.isAPILoaded=!0))},this.putVideo=function(i,r,o,a,s){return e()?(t(i,r,o,a,s),!0):(this.loadAPI(),void(n=setInterval(function(){e()&&(t(i,r,o,a,s),clearInterval(n))},500)))},this.doCommand=function(e){if(null==r)return!1;if(0==g_isPlayerReady)return!1;switch(e){case"play":r.play();break;case"pause":r.pause()}},this.pause=function(){o.doCommand("pause")},this.play=function(){o.doCommand("play")}}function UGVimeoAPI(){function e(){return"undefined"!=typeof Froogaloop}function t(e,t,n,o,a){s=null,l=!1;var u=location.protocol+"//player.vimeo.com/video/"+t+"?api=1";a===!0&&(u+="&amp;byline=0&amp;autoplay=1&amp;title=0&amp;portrait=0");var d="<iframe src="+u+" width='"+n+"' height='"+o+"' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";jQuery("#"+e).html(d);var _=jQuery("#"+e+" iframe")[0];s=Froogaloop(_),s.addEvent("ready",function(){s&&(l=!0,i())}),r=e}function i(){return s?(s.addEvent("cuechange",function(){1==u&&o.play()}),s.addEvent("play",function(){a.trigger(o.events.START_PLAYING)}),s.addEvent("pause",function(){a.trigger(o.events.STOP_PLAYING)}),void s.addEvent("finish",function(){a.trigger(o.events.STOP_PLAYING)})):!1}this.isAPILoaded=!1;var n,r,o=this,a=jQuery(this),s=null,l=!1,u=!1;this.events={START_PLAYING:"start_playing",STOP_PLAYING:"stop_playing"},this.loadAPI=function(){return 1==g_ugVimeoAPI.isAPILoaded?!0:e()?(g_ugVimeoAPI.isAPILoaded=!0,!0):(g_ugFunctions.loadJs("f.vimeocdn.com/js/froogaloop2.min.js",!0),void(g_ugVimeoAPI.isAPILoaded=!0))},this.doCommand=function(e){if(null==s)return!1;if(0==l)return!1;switch(e){default:s.api(e)}},this.pause=function(){o.doCommand("pause")},this.play=function(){o.doCommand("play")},this.destroy=function(){s&&(s.api("unload"),s=null,l=!1),r&&jQuery("#"+r).html("")},this.putVideo=function(i,r,o,a,s){return e()?(t(i,r,o,a,s),!0):(this.loadAPI(),void(n=setInterval(function(){e()&&(t(i,r,o,a,s),clearInterval(n))},500)))},this.isPlayerReady=function(){return l&&s?!0:!1},this.changeVideo=function(e,t){return 0==o.isPlayerReady()?!1:(u=t,void s.api("loadVideo",e))},this.getVideoImages=function(e,t,i){var n=location.protocol+"//vimeo.com/api/v2/video/"+e+".json";jQuery.get(n,{},function(e){var n={};n.preview=e[0].thumbnail_large,n.thumb=e[0].thumbnail_medium,i(t,n)})}}function UGYoutubeAPI(){function e(e,t,r,a,u){s&&l&&s.destroy();var d={controls:2,showinfo:_.video_youtube_showinfo,rel:0};u===!0&&(d.autoplay=1),l=!1,s=new YT.Player(e,{height:a,width:r,videoId:t,playerVars:d,events:{onReady:i,onStateChange:n}}),o=e}function t(){return"undefined"!=typeof YT&&"undefined"!=typeof YT.Player?!0:!1}function i(){l=!0}function n(){if("function"!=typeof s.getPlayerState)return trace("Youtube API error: can't get player state"),!1;var e=s.getPlayerState();switch(e){case YT.PlayerState.PLAYING:u.trigger(a.events.START_PLAYING);break;default:d==YT.PlayerState.PLAYING&&u.trigger(a.events.STOP_PLAYING)}d=e}this.isAPILoaded=!1;var r,o,a=this,s=null,l=!1,u=jQuery(this),d=-1,_={video_youtube_showinfo:!0};this.events={START_PLAYING:"start_playing",STOP_PLAYING:"stop_playing"},this.setOptions=function(e){_=jQuery.extend(_,e)},this.putVideo=function(i,n,o,a,s){return t()?(e(i,n,o,a,s),!0):(this.loadAPI(),void(r=setInterval(function(){t()&&(e(i,n,o,a,s),clearInterval(r))},500)))},this.loadAPI=function(){return 1==g_ugYoutubeAPI.isAPILoaded?!0:"undefined"!=typeof YT?(g_ugYoutubeAPI.isAPILoaded=!0,!0):(g_ugFunctions.loadJs("www.youtube.com/player_api",!0),void(g_ugYoutubeAPI.isAPILoaded=!0))},this.doCommand=function(e,t){if(!s)return!0;if(0==l)return!1;switch(e){case"play":if("function"!=typeof s.playVideo)return!1;s.playVideo();break;case"pause":if("function"!=typeof s.pauseVideo)return!1;s.pauseVideo();break;case"seek":if("function"!=typeof s.seekTo)return!1;s.seekTo(t);break;case"stopToBeginning":var i=s.getPlayerState();switch(s.pauseVideo(),i){case YT.PlayerState.PLAYING:case YT.PlayerState.ENDED:case YT.PlayerState.PAUSED:s.seekTo(0)}}},this.play=function(){a.doCommand("play")},this.pause=function(){a.doCommand("pause")},this.destroy=function(){s&&(l=!1,s.destroy())},this.stopToBeginning=function(){a.doCommand("stopToBeginning")},this.changeVideo=function(e,t){return 0==a.isPlayerReady()?!1:void(t&&1==t?s.loadVideoById(e,0,"large"):s.cueVideoById(e,0,"large"))},this.isPlayerReady=function(){return l&&s?!0:!1},this.getVideoImages=function(e){var t={};return t.preview="https://i.ytimg.com/vi/"+e+"/sddefault.jpg",t.thumb="https://i.ytimg.com/vi/"+e+"/default.jpg",t}}function UGVideoPlayer(){function e(){c.hide()}function t(){h.trigger(c.events.PLAY_START),d&&d.hide()}function i(){h.trigger(c.events.PLAY_STOP),d&&d.show()}function n(){d&&(p.setButtonMobileReady(d),p.setButtonOnClick(d,e)),jQuery(f).on(f.events.START_PLAYING,t),jQuery(f).on(f.events.STOP_PLAYING,i),jQuery(m).on(m.events.START_PLAYING,t),jQuery(m).on(m.events.STOP_PLAYING,i),jQuery(v).on(v.events.START_PLAYING,t),jQuery(v).on(v.events.STOP_PLAYING,i),jQuery(b).on(b.events.START_PLAYING,t),jQuery(b).on(b.events.STOP_PLAYING,i),jQuery(y).on(y.events.START_PLAYING,t),jQuery(y).on(y.events.STOP_PLAYING,i)}function r(e){var t=["youtube","vimeo","html5","soundcloud","wistia"];for(var i in t){var n=t[i];if(n!=e)switch(n){case"youtube":f.pause(),f.destroy(),s.hide();break;case"vimeo":m.pause(),m.destroy(),l.hide();break;case"html5":v.pause(),u.hide();break;case"soundcloud":b.pause(),b.destroy(),_.hide();break;case"wistia":y.pause(),g.hide()}}}var o,a,s,l,u,d,_,g,c=this,h=jQuery(this),p=new UGFunctions,f=new UGYoutubeAPI,m=new UGVimeoAPI,v=new UGHtml5MediaAPI,b=new UGSoundCloudAPI,y=new UGWistiaAPI,I=null,w={video_enable_closebutton:!0};this.events={SHOW:"video_show",HIDE:"video_hide",PLAY_START:"video_play_start",PLAY_STOP:"video_play_stop"};var T={standAloneMode:!1,youtubeInnerID:"",vimeoPlayerID:"",html5PlayerID:"",wistiaPlayerID:"",soundCloudPlayerID:""};this.init=function(e,t,i){if(o=i,!o)throw new Error("missing gallery ID for video player, it's a must!");w=jQuery.extend(w,e),f.setOptions(w),t&&1==t&&(T.standAloneMode=!0)},this.setHtml=function(e){T.youtubeInnerID=o+"_youtube_inner",T.vimeoPlayerID=o+"_videoplayer_vimeo",T.html5PlayerID=o+"_videoplayer_html5",T.wistiaPlayerID=o+"_videoplayer_wistia",T.soundCloudPlayerID=o+"_videoplayer_soundcloud";var t="<div class='ug-videoplayer' style='display:none'>";t+="<div class='ug-videoplayer-wrapper ug-videoplayer-youtube' style='display:none'><div id='"+T.youtubeInnerID+"'></div></div>",t+="<div id='"+T.vimeoPlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-vimeo' style='display:none'></div>",t+="<div id='"+T.html5PlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-html5'></div>",t+="<div id='"+T.soundCloudPlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-soundcloud'></div>",t+="<div id='"+T.wistiaPlayerID+"' class='ug-videoplayer-wrapper ug-videoplayer-wistia'></div>",0==T.standAloneMode&&1==w.video_enable_closebutton&&(t+="<div class='ug-videoplayer-button-close'></div>"),t+="</div>",e.append(t),a=e.children(".ug-videoplayer"),s=a.children(".ug-videoplayer-youtube"),l=a.children(".ug-videoplayer-vimeo"),u=a.children(".ug-videoplayer-html5"),_=a.children(".ug-videoplayer-soundcloud"),g=a.children(".ug-videoplayer-wistia"),0==T.standAloneMode&&1==w.video_enable_closebutton&&(d=a.children(".ug-videoplayer-button-close"))},this.destroy=function(){d&&(d.off("click"),d.off("touchend")),jQuery(f).off(f.events.START_PLAYING),jQuery(f).off(f.events.STOP_PLAYING),jQuery(m).off(m.events.START_PLAYING),jQuery(m).off(m.events.STOP_PLAYING),jQuery(v).off(v.events.START_PLAYING),jQuery(v).off(v.events.STOP_PLAYING),jQuery(b).off(b.events.START_PLAYING,t),jQuery(b).off(b.events.STOP_PLAYING,i),jQuery(y).off(y.events.START_PLAYING,t),jQuery(y).off(y.events.STOP_PLAYING,i),I=null},this.initEvents=function(){n()},this.setSize=function(e,t){p.setElementSize(a,e,t),d&&p.placeElement(d,"right","top")},this.setPosition=function(e,t){p.placeElement(a,e,t)},this.getObject=function(){return a},this.show=function(){return 1==c.isVisible()?!0:(a.show(),a.fadeTo(0,1),d&&d.show(),void h.trigger(c.events.SHOW))},this.hide=function(){return 0==c.isVisible()?!0:(r(),I=null,a.hide(),void h.trigger(c.events.HIDE))},this.getActiveAPI=function(){switch(I){case"youtube":return f;case"vimeo":return m;case"wistia":return y;case"soundcloud":return b;case"html5":return v;default:return null}},this.pause=function(){var e=c.getActiveAPI();return null==e?!1:void("function"==typeof e.pause&&e.pause())},this.isVisible=function(){return a.is(":visible")},this.playYoutube=function(e,t){if("undefined"==typeof t)var t=!0;r("youtube"),s.show();var i=s.children("#"+T.youtubeInnerID);0==i.length&&s.append("<div id='"+T.youtubeInnerID+"'></div>"),1==f.isPlayerReady()&&1==T.standAloneMode?f.changeVideo(e,t):f.putVideo(T.youtubeInnerID,e,"100%","100%",t),I="youtube"},this.playVimeo=function(e,t){if("undefined"==typeof t)var t=!0;r("vimeo"),l.show(),m.isPlayerReady()&&1==T.standAloneMode?m.changeVideo(e,t):m.putVideo(T.vimeoPlayerID,e,"100%","100%",t),I="vimeo"},this.playHtml5Video=function(e,t,i,n,o){if("undefined"==typeof o)var o=!0;r("html5"),u.show();var a={ogv:e,webm:t,mp4:i,posterImage:n};v.putVideo(T.html5PlayerID,a,"100%","100%",o),I="html5"},this.playSoundCloud=function(e,t){if("undefined"==typeof t)var t=!0;r("soundcloud"),_.show(),b.putSound(T.soundCloudPlayerID,e,"100%","100%",t),I="soundcloud"},this.playWistia=function(e,t){if("undefined"==typeof t)var t=!0;r("wistia"),g.show(),y.putVideo(T.wistiaPlayerID,e,"100%","100%",t),I="wistia"}}function ugCheckForMinJQueryVersion(){var e=g_ugFunctions.checkMinJqueryVersion("1.8.0");if(0==e)throw new Error("The gallery can run from jquery 1.8 You have jQuery "+jQuery.fn.jquery+" Please update your jQuery library.")}function ugCheckForErrors(e,t){function i(){if("undefined"==typeof jQuery)throw new Error("jQuery library not included")}function n(){if("function"==typeof jQuery.fn.unitegallery)return!0;var e="You have some jquery.js library include that comes after the gallery files js include.";throw e+="<br> This include eliminates the gallery libraries, and make it not work.","cms"==t?(e+="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Gallery Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.",e+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it."):e+="<br><br> Please find and remove this jquery.js include and the gallery will work. <br> * There should be only one jquery.js include before all other js includes in the page.",new Error(e)}try{"jquery"==t?(i(),ugCheckForMinJQueryVersion()):(ugCheckForMinJQueryVersion(),n())}catch(r){var o=r.message;if(o="Unite Gallery Error: "+o,o="<div style='font-size:16px;color:#BC0C06;max-width:900px;border:1px solid red;padding:10px;'>"+o+"</div>","jquery"==t){var a=document.getElementById(e);a.innerHTML=o,a.style.display="block"}else jQuery(e).show().html(o);return!1}return!0}function UniteGalleryMain(){function __________INIT_GALLERY_______(){}function getThemeFunction(e){var t=e;return-1==t.indexOf("UGTheme_")&&(t="UGTheme_"+t),t}function initTheme(objCustomOptions){if(objCustomOptions.hasOwnProperty("gallery_theme"))g_options.gallery_theme=objCustomOptions.gallery_theme;else{var defaultTheme=g_options.gallery_theme;0==g_ugFunctions.isThemeRegistered(defaultTheme)&&(g_options.gallery_theme=g_ugFunctions.getFirstRegisteredTheme())}var themeFunction=getThemeFunction(g_options.gallery_theme);try{g_options.gallery_theme=eval(themeFunction)}catch(e){}g_options.gallery_theme=eval(themeFunction),g_objTheme=new g_options.gallery_theme,g_objTheme.init(t,objCustomOptions)}function resetOptions(){g_options=jQuery.extend({},g_temp.originalOptions),g_selectedItemIndex=-1,g_selectedItem=null,g_objSlider=void 0,g_objThumbs=void 0,g_objSlider=void 0}function checkForStartupErrors(){try{ugCheckForMinJQueryVersion()}catch(e){throwErrorShowMessage(e.message)}"object"==typeof g_objWrapper.outerWidth()&&throwErrorShowMessage("You have some buggy script. most chances jquery-ui.js that destroy jquery outerWidth, outerHeight functions. The gallery can't run. Please update jquery-ui.js to latest version."),setTimeout(function(){ugCheckForErrors(g_galleryID,"cms")},5e3)}function runGallery(e,i,n,r){var o="object"==typeof i;if(o&&(g_temp.objCustomOptions=i),1==g_temp.isRunFirstTime){if(g_galleryID=e,g_objWrapper=jQuery(g_galleryID),0==g_objWrapper.length)return trace("div with id: "+g_galleryID+" not found"),!1;g_objParent=g_objWrapper.parent(),checkForStartupErrors(),g_temp.originalOptions=jQuery.extend({},g_options),o&&(g_options=jQuery.extend(g_options,i)),1==g_options.gallery_enable_cache&&g_options.gallery_initial_catid&&cacheItems(g_options.gallery_initial_catid);var a=g_objWrapper.children();fillItemsArray(a),loadAPIs(),g_objWrapper.find("img").fadeTo(0,0).hide(),g_objWrapper.show(),clearInitData()}else if(t.destroy(),resetOptions(),g_options=jQuery.extend(g_options,g_temp.objCustomOptions),n){if(r&&1==g_options.gallery_enable_cache&&cacheItems(r,n),"noitems"==n)return showErrorMessage("No items in this category",""),!1;g_objWrapper.html(n);var a=g_objWrapper.children();fillItemsArray(a),loadAPIs(),g_objWrapper.children().fadeTo(0,0).hide(),g_objWrapper.show(),clearInitData()}1==g_temp.isRunFirstTime&&1==g_options.gallery_enable_tabs&&(g_objTabs=new UGTabs,g_objTabs.init(t,g_options)),o&&modifyInitParams(g_temp.objCustomOptions),validateParams(),1==g_options.gallery_shuffle&&t.shuffleItems(),initTheme(g_temp.objCustomOptions),setGalleryHtml(),setHtmlObjectsProperties();var s=g_objWrapper.width();0==s?g_functions.waitForWidth(g_objWrapper,runGalleryActually):runGalleryActually()}function runGalleryActually(){t.setSizeClass(),0==g_temp.isFreestyleMode&&1==g_options.gallery_preserve_ratio&&setHeightByOriginalRatio(),g_objTheme.run(),g_objTabs&&g_temp.isRunFirstTime&&g_objTabs.run(),preloadBigImages(),initEvents(),g_numItems>0&&t.selectItem(0),1==g_options.gallery_autoplay&&t.startPlayMode(),g_temp.isRunFirstTime=!1}function showErrorMessage(e,t){if("undefined"==typeof t)var t="<b>Unite Gallery Error: </b>";e=t+e;var i="<div class='ug-error-message-wrapper'><div class='ug-error-message'>"+e+"</div></div>";g_objWrapper.children().remove(),g_objWrapper.html(i),g_objWrapper.show()}function throwErrorShowMessage(e){throw showErrorMessage(e),new Error(e)}function modifyInitParams(){g_options.gallery_images_preload_type||(g_options.gallery_images_preload_type="minimal"),(void 0==g_options.gallery_min_height||g_options.gallery_height<g_options.gallery_min_height)&&(g_options.gallery_min_height=0),(void 0==g_options.gallery_min_width||g_options.gallery_width<g_options.gallery_min_width)&&(g_options.gallery_min_width=0)}function validateParams(){if(!g_options.gallery_theme)throw new Error("The gallery can't run without theme");if(jQuery.isNumeric(g_options.gallery_height)&&g_options.gallery_height<g_options.gallery_min_height)throw new Error("The <b>gallery_height</b> option must be bigger then <b>gallery_min_height option</b>");if(g_options.gallery_width<g_options.gallery_min_width)throw new Error("The <b>gallery_width</b> option must be bigger then <b>gallery_min_width option</b>")}function setGalleryHtml(){g_objWrapper.addClass("ug-gallery-wrapper"),g_objWrapper.append("<div class='ug-overlay-disabled' style='display:none'></div>"),t.setSizeClass()}function clearInitData(){g_objWrapper.children().remove()}function storeLastSize(){var e=t.getSize();g_temp.lastWidth=e.width,g_temp.lastHeight=e.height}function setHeightByOriginalRatio(){var e=t.getSize(),i=e.width/e.height;if(i!=e.orig_ratio){var n=e.width/e.orig_ratio;n=Math.round(n),n<g_options.gallery_min_height&&(n=g_options.gallery_min_height),g_objWrapper.height(n)}}function setHtmlObjectsProperties(){var e=g_functions.getCssSizeParam(g_options.gallery_width),t={"max-width":e,"min-width":g_functions.getCssSizeParam(g_options.gallery_min_width)};if(0==g_temp.isFreestyleMode){var i=g_functions.getCssSizeParam(g_options.gallery_height);t.height=i}else t.overflow="visible";g_options.gallery_background_color&&(t["background-color"]=g_options.gallery_background_color),g_objWrapper.css(t)}function fillItemsArray(e){g_arrItems=[];for(var t=0,i=0;i<e.length;i++){var n=jQuery(e[i]),r=n.prop("tagName").toLowerCase(),o="";if("a"==r){o=n.attr("href"),n=n.children();var r=n.prop("tagName").toLowerCase()}var a=n.data("type");void 0==a&&(a="image");var s={};if(s.type=a,"img"==r){var l=n.data("lazyload-src");l&&""!=l&&(n.attr("src",l),jQuery.removeData(n,"lazyload-src"));var u=n.attr("src"),d=n.data("thumb");"undefined"!=typeof d&&""!=d?(s.urlThumb=d,s.urlImage=u,n.attr("src",d)):(s.urlThumb=u,s.urlImage=n.data("image")),s.title=n.attr("alt"),s.objThumbImage=n}else{if("image"==a)throw new Error("The item should not be image type");s.urlThumb=n.data("thumb"),s.title=n.data("title"),s.objThumbImage=null,s.urlImage=n.data("image")}s.link=o,s.description=n.attr("title"),s.description||(s.description=n.data("description")),s.description||(s.description=""),s.isLoaded=!1,s.isThumbImageLoaded=!1,s.objPreloadImage=null,s.isBigImageLoadStarted=!1,s.isBigImageLoaded=!1,s.isBigImageLoadError=!1,s.imageWidth=0,s.imageHeight=0,s.thumbWidth=0,s.thumbHeight=0,s.thumbRatioByWidth=0,s.thumbRatioByHeight=0,s.addHtml=null;var _=void 0==s.urlImage||""==s.urlImage,g=void 0==s.urlThumb||""==s.urlThumb;switch(s.type){case"youtube":if(s.videoid=n.data("videoid"),_||g){var c=g_ugYoutubeAPI.getVideoImages(s.videoid);_&&(s.urlImage=c.preview),g&&(s.urlThumb=c.thumb,"img"==r&&n.attr("src",s.urlThumb))}g_temp.isYoutubePresent=!0;break;case"vimeo":s.videoid=n.data("videoid"),g_temp.isVimeoPresent=!0;break;case"html5video":s.videoogv=n.data("videoogv"),s.videowebm=n.data("videowebm"),s.videomp4=n.data("videomp4"),g_temp.isHtml5VideoPresent=!0;break;case"soundcloud":s.trackid=n.data("trackid"),g_temp.isSoundCloudPresent=!0;break;case"wistia":s.videoid=n.data("videoid"),g_temp.isWistiaPresent=!0;break;case"custom":var h=n.children("img");h.length&&(h=jQuery(h[0]),s.urlThumb=h.attr("src"),s.title=h.attr("alt"),s.objThumbImage=h);var p=n.children().not("img:first-child");p.length&&(s.addHtml=p.clone())}s.objThumbImage&&(s.objThumbImage.removeAttr("data-description",""),s.objThumbImage.removeAttr("data-image",""),s.objThumbImage.removeAttr("data-thumb",""),s.objThumbImage.removeAttr("title","")),s.index=t,g_arrItems.push(s),t++}g_numItems=g_arrItems.length}function loadAPIs(){g_temp.isYoutubePresent&&g_ugYoutubeAPI.loadAPI(),g_temp.isVimeoPresent&&g_ugVimeoAPI.loadAPI(),g_temp.isHtml5VideoPresent&&g_ugHtml5MediaAPI.loadAPI(),g_temp.isSoundCloudPresent&&g_ugSoundCloudAPI.loadAPI(),g_temp.isWistiaPresent&&g_ugWistiaAPI.loadAPI()}function preloadBigImages(){if("visible"!=g_options.gallery_images_preload_type||g_objThumbs||(g_options.gallery_images_preload_type="minimal"),1==g_temp.isAllItemsPreloaded)return!0;switch(g_options.gallery_images_preload_type){default:case"minimal":break;case"all":jQuery(g_arrItems).each(function(){preloadItemImage(this)});break;case"visible":jQuery(g_arrItems).each(function(){var e=this,t=g_objThumbs.isItemThumbVisible(e);1==t&&preloadItemImage(e)})}}function checkPreloadItemImage(e){if(1==e.isBigImageLoadStarted||1==e.isBigImageLoaded||1==e.isBigImageLoadError)return!1;switch(g_options.gallery_images_preload_type){default:case"minimal":break;case"all":preloadItemImage(e);break;case"visible":var t=g_objThumbs.isItemThumbVisible(e);1==t&&preloadItemImage(e)}}function preloadItemImage(e){if(1==e.isBigImageLoadStarted||1==e.isBigImageLoaded||1==e.isBigImageLoadError)return!0;var i=e.urlImage;return""==i||void 0==i?(e.isBigImageLoadError=!0,!1):(e.isBigImageLoadStarted=!0,e.objPreloadImage=jQuery("<img/>").attr("src",i),e.objPreloadImage.data("itemIndex",e.index),e.objPreloadImage.on("load",t.onItemBigImageLoaded),e.objPreloadImage.on("error",function(){var e=jQuery(this),i=e.data("itemIndex"),n=g_arrItems[i];n.isBigImageLoadError=!0,n.isBigImageLoaded=!1;var r=jQuery(this).attr("src");console.log("Can't load image: "+r),g_objGallery.trigger(t.events.ITEM_IMAGE_UPDATED,[i,n.urlImage]),n.objThumbImage.attr("src",n.urlThumb)}),void checkAllItemsStartedPreloading())}function preloadNearBigImages(e){if(1==g_temp.isAllItemsPreloaded)return!1;if(!e)var e=g_selectedItem;if(!e)return!0;var t=e.index,i=t-1,n=t+1;i>0&&preloadItemImage(g_arrItems[i]),g_numItems>n&&preloadItemImage(g_arrItems[n])}function checkAllItemsStartedPreloading(){if(1==g_temp.isAllItemsPreloaded)return!1;for(var e in g_arrItems)if(0==g_arrItems[e].isBigImageLoadStarted)return!1;g_temp.isAllItemsPreloaded=!0}function __________END_INIT_GALLERY_______(){}function __________EVENTS_____________(){}function onSliderMouseEnter(e){1==g_options.gallery_pause_on_mouseover&&0==t.isFullScreen()&&1==g_temp.isPlayMode&&g_objSlider&&0==g_objSlider.isSlideActionActive()&&t.pausePlaying()}function onSliderMouseLeave(e){if(1==g_options.gallery_pause_on_mouseover&&1==g_temp.isPlayMode&&g_objSlider&&0==g_objSlider.isSlideActionActive()){var i=g_objSlider.isCurrentSlideLoadingImage();0==i&&t.continuePlaying()}}function onKeyPress(e){var i=jQuery(e.target);if(i.is("textarea")||i.is("select")||i.is("input"))return!0;var n=e.charCode?e.charCode:e.keyCode?e.keyCode:e.which?e.which:0;switch(n){case 39:t.nextItem(),e.preventDefault();break;case 37:t.prevItem(),e.preventDefault()}g_objGallery.trigger(t.events.GALLERY_KEYPRESS,n)}function onGalleryResized(){var e=t.getSize();if(0==e.width)return!0;t.setSizeClass();var e=t.getSize();(e.width!=g_temp.lastWidth||e.height!=g_temp.lastHeight)&&(1==g_options.gallery_preserve_ratio&&0==g_temp.isFreestyleMode&&setHeightByOriginalRatio(),storeLastSize(),g_objGallery.trigger(t.events.SIZE_CHANGE))}function onThumbsChange(e){"visible"==g_options.gallery_images_preload_type&&0==g_temp.isAllItemsPreloaded&&preloadBigImages()}function onFullScreenChange(){var e=g_functions.isFullScreen(),i=e?t.events.ENTER_FULLSCREEN:t.events.EXIT_FULLSCREEN,n=g_functions.getGlobalData("fullscreenID");return g_galleryID!==n?!0:(e?g_objWrapper.addClass("ug-fullscreen"):g_objWrapper.removeClass("ug-fullscreen"),g_objGallery.trigger(i),void onGalleryResized())}function onItemImageUpdated(e,i){var n=t.getItem(i);checkPreloadItemImage(n)}function onCurrentSlideImageLoadEnd(){1==t.isPlayMode()&&t.continuePlaying()}function initEvents(){if(g_objWrapper.on("dragstart",function(e){e.preventDefault()}),g_objGallery.on(t.events.ITEM_IMAGE_UPDATED,onItemImageUpdated),g_objThumbs)switch(g_temp.thumbsType){case"strip":jQuery(g_objThumbs).on(g_objThumbs.events.STRIP_MOVE,onThumbsChange);break;case"grid":jQuery(g_objThumbs).on(g_objThumbs.events.PANE_CHANGE,onThumbsChange)}if("advance"==g_options.gallery_mousewheel_role&&0==g_temp.isFreestyleMode&&g_objWrapper.on("mousewheel",t.onGalleryMouseWheel),storeLastSize(),jQuery(window).resize(function(){g_objWrapper.css("width","auto"),g_functions.whenContiniousEventOver("gallery_resize",onGalleryResized,g_temp.resizeDelay)}),g_functions.addFullScreenChangeEvent(onFullScreenChange),g_objSlider){if(jQuery(g_objSlider).on(g_objSlider.events.ITEM_CHANGED,function(){var e=g_objSlider.getCurrentItemIndex();-1!=e&&t.selectItem(e)}),1==g_options.gallery_pause_on_mouseover){var e=g_objSlider.getElement();e.hover(onSliderMouseEnter,onSliderMouseLeave),g_objGallery.on(t.events.ENTER_FULLSCREEN,function(){onSliderMouseLeave()})}retriggerEvent(g_objSlider,g_objSlider.events.ACTION_START,t.events.SLIDER_ACTION_START),retriggerEvent(g_objSlider,g_objSlider.events.ACTION_END,t.events.SLIDER_ACTION_END),jQuery(g_objSlider).on(g_objSlider.events.CURRENTSLIDE_LOAD_END,onCurrentSlideImageLoadEnd)}1==g_options.gallery_control_keyboard&&jQuery(document).keydown(onKeyPress)}function __________GENERAL_______(){}function cacheItems(e,t){if(t){var i=t;"noitems"!=i&&(i=jQuery(t).clone())}else var i=g_objWrapper.children().clone();g_objCache[e]=i}function removeAllSizeClasses(e){e||(e=g_objWrapper),e.removeClass("ug-under-480"),e.removeClass("ug-under-780"),e.removeClass("ug-under-960")}function retriggerEvent(e,t,i){jQuery(e).on(t,function(e){g_objGallery.trigger(i,[this])})}function advanceNextStep(){var e=jQuery.now(),i=e-g_temp.playTimeLastStep;if(g_temp.playTimePassed+=i,g_temp.playTimeLastStep=e,g_temp.objProgress){var n=g_temp.playTimePassed/g_options.gallery_play_interval;g_temp.objProgress.setProgress(n)}g_temp.playTimePassed>=g_options.gallery_play_interval&&(t.nextItem(),g_temp.playTimePassed=0)}function unselectSeletedItem(){return null==g_selectedItem?!0:(g_objThumbs&&g_objThumbs.setThumbUnselected(g_selectedItem.objThumbWrapper),g_selectedItem=null,void(g_selectedItemIndex=-1))}function toFakeFullScreen(){jQuery("body").addClass("ug-body-fullscreen"),g_objWrapper.addClass("ug-fake-fullscreen"),g_temp.isFakeFullscreen=!0,g_objGallery.trigger(t.events.ENTER_FULLSCREEN),g_objGallery.trigger(t.events.SIZE_CHANGE)}function exitFakeFullscreen(){jQuery("body").removeClass("ug-body-fullscreen"),g_objWrapper.removeClass("ug-fake-fullscreen"),g_temp.isFakeFullscreen=!1,g_objGallery.trigger(t.events.EXIT_FULLSCREEN),g_objGallery.trigger(t.events.SIZE_CHANGE)}var t=this,g_galleryID,g_objGallery=jQuery(t),g_objWrapper,g_objParent,g_objThumbs,g_objSlider,g_functions=new UGFunctions,g_objTabs,g_arrItems=[],g_numItems,g_selectedItem=null,g_selectedItemIndex=-1,g_objTheme,g_objCache={};this.events={ITEM_CHANGE:"item_change",SIZE_CHANGE:"size_change",ENTER_FULLSCREEN:"enter_fullscreen",EXIT_FULLSCREEN:"exit_fullscreen",START_PLAY:"start_play",STOP_PLAY:"stop_play",PAUSE_PLAYING:"pause_playing",CONTINUE_PLAYING:"continue_playing",SLIDER_ACTION_START:"slider_action_start",SLIDER_ACTION_END:"slider_action_end",ITEM_IMAGE_UPDATED:"item_image_updated",GALLERY_KEYPRESS:"gallery_keypress",GALLERY_BEFORE_REQUEST_ITEMS:"gallery_before_request_items"};var g_options={gallery_width:900,gallery_height:500,gallery_min_width:150,gallery_min_height:100,gallery_theme:"default",gallery_skin:"default",
gallery_images_preload_type:"minimal",gallery_autoplay:!1,gallery_play_interval:3e3,gallery_pause_on_mouseover:!0,gallery_mousewheel_role:"zoom",gallery_control_keyboard:!0,gallery_carousel:!0,gallery_preserve_ratio:!0,gallery_background_color:"",gallery_debug_errors:!1,gallery_shuffle:!1,gallery_urlajax:null,gallery_enable_tabs:!1,gallery_enable_cache:!0,gallery_initial_catid:""},g_temp={objCustomOptions:{},isAllItemsPreloaded:!1,isFreestyleMode:!1,lastWidth:0,lastHeigh:0,handleResize:null,isInited:!1,isPlayMode:!1,isPlayModePaused:!1,playTimePassed:0,playTimeLastStep:0,playHandle:"",playStepInterval:33,objProgress:null,isFakeFullscreen:!1,thumbsType:null,isYoutubePresent:!1,isVimeoPresent:!1,isHtml5VideoPresent:!1,isSoundCloudPresent:!1,isWistiaPresent:!1,resizeDelay:100,isRunFirstTime:!0,originalOptions:{}};this.onItemBigImageLoaded=function(e,t){if(!t)var t=jQuery(this);var i=t.data("itemIndex"),n=g_arrItems[i];n.isBigImageLoaded=!0;var r=g_functions.getImageOriginalSize(t);n.imageWidth=r.width,n.imageHeight=r.height},this.checkFillImageSize=function(e,t){if(!t){var i=e.data("itemIndex");if(void 0===i)throw new Error("Wrong image given to gallery.checkFillImageSize");var t=g_arrItems[i]}var n=g_functions.getImageOriginalSize(e);t.imageWidth=n.width,t.imageHeight=n.height},this.setFreestyleMode=function(){g_temp.isFreestyleMode=!0},this.attachThumbsPanel=function(e,t){g_temp.thumbsType=e,g_objThumbs=t},this.initSlider=function(e,i){if(!e)var e={};e=jQuery.extend(e,g_temp.objCustomOptions),g_objSlider=new UGSlider,g_objSlider.init(t,e,i)},this.onGalleryMouseWheel=function(e,i,n,r){e.preventDefault(),i>0?t.prevItem():t.nextItem()},this.destroy=function(){if(g_objWrapper.off("dragstart"),g_objGallery.off(t.events.ITEM_IMAGE_UPDATED),g_objThumbs)switch(g_temp.thumbsType){case"strip":jQuery(g_objThumbs).off(g_objThumbs.events.STRIP_MOVE);break;case"grid":jQuery(g_objThumbs).off(g_objThumbs.events.PANE_CHANGE)}if(g_objWrapper.off("mousewheel"),jQuery(window).off("resize"),g_functions.destroyFullScreenChangeEvent(),g_objSlider){jQuery(g_objSlider).off(g_objSlider.events.ITEM_CHANGED);var e=g_objSlider.getElement();e.off("mouseenter"),e.off("mouseleave"),g_objGallery.off(t.events.ENTER_FULLSCREEN),jQuery(g_objSlider).off(g_objSlider.events.ACTION_START),jQuery(g_objSlider).off(g_objSlider.events.ACTION_END),jQuery(g_objSlider).off(g_objSlider.events.CURRENTSLIDE_LOAD_END)}1==g_options.gallery_control_keyboard&&jQuery(document).off("keydown"),g_objTheme&&"function"==typeof g_objTheme.destroy&&g_objTheme.destroy(),g_objWrapper.html("")},this.getArrItems=function(){return g_arrItems},this.getObjects=function(){var e={g_galleryID:g_galleryID,g_objWrapper:g_objWrapper,g_objThumbs:g_objThumbs,g_objSlider:g_objSlider,g_options:g_options,g_arrItems:g_arrItems,g_numItems:g_numItems};return e},this.getObjSlider=function(){return g_objSlider},this.getItem=function(e){if(0>e)throw new Error("item with index: "+e+" not found");if(e>=g_numItems)throw new Error("item with index: "+e+" not found");return g_arrItems[e]},this.getWidth=function(){var e=t.getSize();return e.width},this.getHeight=function(){var e=t.getSize();return e.height},this.getSize=function(){var e=g_functions.getElementSize(g_objWrapper);return e.orig_width=g_options.gallery_width,e.orig_height=g_options.gallery_height,e.orig_ratio=e.orig_width/e.orig_height,e},this.getGalleryID=function(){var e=g_galleryID.replace("#","");return e},this.getNextItem=function(e,t){"object"==typeof e&&(e=e.index);var i=e+1;if(t!==!0&&1==g_numItems)return null;if(i>=g_numItems){if(1!=g_options.gallery_carousel&&t!==!0)return null;i=0}var n=g_arrItems[i];return n},this.getPrevItem=function(e){"object"==typeof e&&(e=e.index);var t=e-1;if(0>t){if(1!=g_options.gallery_carousel&&forceCarousel!==!0)return null;t=g_numItems-1}var i=g_arrItems[t];return i},this.getSelectedItem=function(){return g_selectedItem},this.getSelectedItemIndex=function(){return g_selectedItemIndex},this.getNumItems=function(){return g_numItems},this.isLastItem=function(){return g_selectedItemIndex==g_numItems-1?!0:!1},this.isFirstItem=function(){return 0==g_selectedItemIndex?!0:!1},this.getOptions=function(){return g_options},this.getElement=function(){return g_objWrapper},this.___________SET_CONTROLS___________=function(){},this.setNextButton=function(e){e.data("ug-button",!0),g_functions.setButtonOnClick(e,t.nextItem)},this.setPrevButton=function(e){e.data("ug-button",!0),g_functions.setButtonOnClick(e,t.prevItem)},this.setFullScreenToggleButton=function(e){e.data("ug-button",!0),g_functions.setButtonOnClick(e,t.toggleFullscreen),g_objGallery.on(t.events.ENTER_FULLSCREEN,function(){e.addClass("ug-fullscreenmode")}),g_objGallery.on(t.events.EXIT_FULLSCREEN,function(){e.removeClass("ug-fullscreenmode")})},this.destroyFullscreenButton=function(e){g_functions.destroyButton(e),g_objGallery.off(t.events.ENTER_FULLSCREEN),g_objGallery.off(t.events.EXIT_FULLSCREEN)},this.setPlayButton=function(e){e.data("ug-button",!0),g_functions.setButtonOnClick(e,t.togglePlayMode),g_objGallery.on(t.events.START_PLAY,function(){e.addClass("ug-stop-mode")}),g_objGallery.on(t.events.STOP_PLAY,function(){e.removeClass("ug-stop-mode")})},this.destroyPlayButton=function(e){g_functions.destroyButton(e),g_objGallery.off(t.events.START_PLAY),g_objGallery.off(t.events.STOP_PLAY)},this.setProgressIndicator=function(e){g_temp.objProgress=e},this.setTextContainers=function(e,i){g_objGallery.on(t.events.ITEM_CHANGE,function(){var n=t.getSelectedItem();e.html(n.title),i.html(n.description)})},this.showDisabledOverlay=function(){g_objWrapper.children(".ug-overlay-disabled").show()},this.hideDisabledOverlay=function(){g_objWrapper.children(".ug-overlay-disabled").hide()},this.___________END_SET_CONTROLS___________=function(){},this.___________PLAY_MODE___________=function(){},this.startPlayMode=function(){if(g_temp.isPlayMode=!0,g_temp.isPlayModePaused=!1,g_temp.playTimePassed=0,g_temp.playTimeLastStep=jQuery.now(),g_temp.playHandle=setInterval(advanceNextStep,g_temp.playStepInterval),g_temp.objProgress){var e=g_temp.objProgress.getElement();g_temp.objProgress.setProgress(0),e.show()}g_objGallery.trigger(t.events.START_PLAY),g_objSlider&&1==g_objSlider.isCurrentSlideLoadingImage()&&t.pausePlaying()},this.resetPlaying=function(){return 0==g_temp.isPlayMode?!0:(g_temp.playTimePassed=0,void(g_temp.playTimeLastStep=jQuery.now()))},this.pausePlaying=function(){return 1==g_temp.isPlayModePaused?!0:(g_temp.isPlayModePaused=!0,clearInterval(g_temp.playHandle),void g_objGallery.trigger(t.events.PAUSE_PLAYING))},this.continuePlaying=function(){return 0==g_temp.isPlayModePaused?!0:(g_temp.isPlayModePaused=!1,g_temp.playTimeLastStep=jQuery.now(),void(g_temp.playHandle=setInterval(advanceNextStep,g_temp.playStepInterval)))},this.stopPlayMode=function(){if(g_temp.isPlayMode=!1,clearInterval(g_temp.playHandle),g_temp.playTimePassed=0,g_temp.objProgress){var e=g_temp.objProgress.getElement();e.hide()}g_objGallery.trigger(t.events.STOP_PLAY)},this.isPlayMode=function(){return g_temp.isPlayMode},this.togglePlayMode=function(){0==t.isPlayMode()?t.startPlayMode():t.stopPlayMode()},this.___________GENERAL_EXTERNAL___________=function(){},this.shuffleItems=function(){g_arrItems=g_functions.arrayShuffle(g_arrItems);for(var e in g_arrItems)g_arrItems[e].index=parseInt(e)},this.setOptions=function(e){g_options=jQuery.extend(g_options,e)},this.selectItem=function(e,i){"number"==typeof e&&(e=t.getItem(e));var n=e.index;if(n==g_selectedItemIndex)return!0;if(unselectSeletedItem(),g_selectedItem=e,g_selectedItemIndex=n,g_objGallery.trigger(t.events.ITEM_CHANGE,[e,i]),1==g_temp.isPlayMode){t.resetPlaying();var r=g_objSlider.isCurrentSlideLoadingImage();1==r&&t.pausePlaying()}},this.nextItem=function(){var e=g_selectedItemIndex+1;return 0==g_numItems?!0:0==g_options.gallery_carousel&&e>=g_numItems?!0:(e>=g_numItems&&(e=0),void t.selectItem(e,"next"))},this.prevItem=function(){var e=g_selectedItemIndex-1;return-1==g_selectedItemIndex&&(e=0),0==g_numItems?!0:0==g_options.gallery_carousel&&0>e?!0:(0>e&&(e=g_numItems-1),void t.selectItem(e,"prev"))},this.isFullScreen=function(){return 1==g_temp.isFakeFullscreen?!0:1==g_functions.isFullScreen()?!0:!1},this.isFakeFullscreen=function(){return g_temp.isFakeFullscreen},this.toFullScreen=function(){g_functions.setGlobalData("fullscreenID",g_galleryID);var e=g_objWrapper.get(0),t=g_functions.toFullscreen(e);0==t&&toFakeFullScreen()},this.exitFullScreen=function(){1==g_temp.isFakeFullscreen?exitFakeFullscreen():g_functions.exitFullscreen()},this.toggleFullscreen=function(){0==t.isFullScreen()?t.toFullScreen():t.exitFullScreen()},this.resize=function(e,t,i){g_objWrapper.css("width","auto"),g_objWrapper.css("max-width",e+"px"),t&&g_objWrapper.height(t),i||i===!0||onGalleryResized()},this.setSizeClass=function(e,i){if(!e)var e=g_objWrapper;if(!i)var n=t.getSize(),i=n.width;var r="";return 480>=i?r="ug-under-480":780>=i?r="ug-under-780":960>i&&(r="ug-under-960"),1==e.hasClass(r)?!0:(removeAllSizeClasses(e),void(""!=r&&e.addClass(r)))},this.isMobileMode=function(){return g_objWrapper.hasClass("ug-under-480")?!0:!1},this.changeItems=function(e,t){if(!e)var e="noitems";runGallery(g_galleryID,"nochange",e,t)},this.showErrorMessageReplaceGallery=function(e){showErrorMessage(e)},this.__________AJAX_REQUEST_______=function(){},this.ajaxRequest=function(e,t,i,n){var r="html";if(1==i&&(r="json"),!n||"function"!=typeof n)throw new Error("ajaxRequest error: success function should be passed");var o=g_options.gallery_urlajax;if(""==o)throw new Error("ajaxRequest error: Ajax url don't passed");if("undefined"==typeof t)var t={};var a={action:"unitegallery_ajax_action",client_action:e,galleryID:g_galleryID,data:t};jQuery.ajax({type:"post",url:g_options.gallery_urlajax,dataType:"json",data:a,success:function(e){return e?-1==e||0===e?(showErrorMessage("ajax error!!!"),!1):"undefined"==typeof e.success?(showErrorMessage("The 'success' param is a must!"),!1):0==e.success?(showErrorMessage(e.message),!1):void n(e):(showErrorMessage("Empty ajax response!","Ajax Error"),!1)},error:function(e,t,i){console.log("Ajax Error!!! "+t)}})},this.requestNewItems=function(e,i,n){var r=g_options.gallery_enable_cache;if(n||(n=e),1==i&&(r=!1),1==r&&g_objCache.hasOwnProperty(n)){var o=g_objCache[n];t.changeItems(o,n)}else g_objGallery.trigger(t.events.GALLERY_BEFORE_REQUEST_ITEMS),t.ajaxRequest("front_get_cat_items",{catid:e},!0,function(e){var i=e.html;t.changeItems(i,n)})},this.run=function(e,t){g_options.gallery_debug_errors;if(t&&t.hasOwnProperty("gallery_debug_errors")&&(g_options.gallery_debug_errors=t.gallery_debug_errors),1==g_options.gallery_debug_errors)try{runGallery(e,t)}catch(i){if("object"==typeof i){var n=i.message,r=i.lineNumber,o=i.fileName;i.stack;n+=" <br><br> in file: "+o,n+=" <b> line "+r+"</b>",trace(i)}else var n=i;n=n.replace("Error:",""),showErrorMessage(n)}else runGallery(e,t)}}function UGLightbox(){function e(e,i){ee=e,B=jQuery(e),re=jQuery.extend(re,ae),re=jQuery.extend(re,i),oe.originalOptions=jQuery.extend({},re),"compact"==re.lightbox_type&&(oe.isCompact=!0,re=jQuery.extend(re,se),re=jQuery.extend(re,i)),t(),1==oe.putSlider?(ee.initSlider(re,"lightbox"),g_objects=e.getObjects(),te=g_objects.g_objSlider):te=null,1==re.lightbox_show_textpanel?ne.init(ee,re,"lightbox"):ne=null}function t(){1==oe.isCompact&&1==re.lightbox_show_textpanel&&(re.lightbox_slider_image_padding_bottom=oe.initTextPanelHeight),1==oe.isCompact&&"inside"==re.lightbox_arrows_position&&(oe.isArrowsInside=!0),1==oe.isArrowsInside&&0==re.lightbox_arrows_inside_alwayson&&(oe.isArrowsOnHoverMode=!0)}function i(){var e="",t="";1==oe.isCompact&&(t=" ug-lightbox-compact"),e+="<div class='ug-gallery-wrapper ug-lightbox"+t+"'>",e+="<div class='ug-lightbox-overlay'></div>",0==oe.isCompact&&(e+="<div class='ug-lightbox-top-panel'>"),e+="<div class='ug-lightbox-top-panel-overlay'></div>",e+="<div class='ug-lightbox-button-close'></div>",re.lightbox_show_numbers&&(e+="<div class='ug-lightbox-numbers'></div>"),0==oe.isCompact&&(e+="</div>"),e+="<div class='ug-lightbox-arrow-left'></div>",e+="<div class='ug-lightbox-arrow-right'></div>",e+="</div>",Y=jQuery(e),jQuery("body").append(Y),te&&te.setHtml(Y),U=Y.children(".ug-lightbox-overlay"),0==oe.isCompact&&(K=Y.children(".ug-lightbox-top-panel")),Z=Y.find(".ug-lightbox-button-close"),re.lightbox_show_numbers&&(q=Y.find(".ug-lightbox-numbers")),V=Y.children(".ug-lightbox-arrow-left"),X=Y.children(".ug-lightbox-arrow-right"),ne&&(K?ne.appendHTML(K):ne.appendHTML(Y))}function n(){if(null!==re.lightbox_overlay_color&&U.css("background-color",re.lightbox_overlay_color),null!==re.lightbox_overlay_opacity&&U.fadeTo(0,re.lightbox_overlay_opacity),K&&null!==re.lightbox_top_panel_opacity&&K.children(".ug-lightbox-top-panel-overlay").fadeTo(0,re.lightbox_top_panel_opacity),q){var e={};null!==re.lightbox_numbers_size&&(e["font-size"]=re.lightbox_numbers_size+"px"),re.lightbox_numbers_color&&(e.color=re.lightbox_numbers_color),null!==re.lightbox_numbers_padding_right&&(e["padding-right"]=re.lightbox_numbers_padding_right+"px"),null!==re.lightbox_numbers_padding_top&&(e["padding-top"]=re.lightbox_numbers_padding_top+"px"),q.css(e)}}function r(e){if(!te)return!0;var t={slider_image_padding_top:e,slider_video_padding_top:e};te.setOptions(t),te.refreshSlideItems()}function o(){if(!K)return!1;if(!ne)return!1;var e=K.height();if(0==e)return!1;var t=e,i=ne.getSize().height;e!=oe.topPanelHeight&&(t=oe.topPanelHeight),i>t&&(t=i),e!=t&&(K.height(t),te&&0==te.isAnimating()&&r(t))}function a(e){var t={},i=re.lightbox_textpanel_width,n=47,r=40,a=e.width-n-r;i>a?(t.textpanel_padding_left=n,t.textpanel_padding_right=r,t.textpanel_title_text_align="center",t.textpanel_desc_text_align="center"):(t.textpanel_padding_left=Math.floor((e.width-i)/2),t.textpanel_padding_right=t.textpanel_padding_left,t.textpanel_title_text_align="left",t.textpanel_desc_text_align="left",re.lightbox_textpanel_title_text_align&&(t.textpanel_title_text_align=re.lightbox_textpanel_desc_text_align),re.lightbox_textpanel_desc_text_align&&(t.textpanel_desc_text_align=re.lightbox_textpanel_desc_text_align)),ne.setOptions(t),ne.refresh(!0,!0),o(),ne.positionPanel()}function s(e){if(0==oe.isOpened)return!1;if(!ne)return!1;if(!te)return!1;var t=ie.getElementSize(Y),i=ne.getSize();if(0==i.width||i.height>120)return!1;if(!e)var n=te.getSlideImage(),e=ie.getElementSize(n);if(0==e.height||0==e.width)return!1;var r=e.bottom+i.height;if(r<t.height)return!1;var o=te.getOptions(),a=i.height;if(a!=o.slider_image_padding_bottom){var s={slider_image_padding_bottom:a};if(0==te.isAnimating())return te.setOptions(s),te.refreshSlideItems(),!0}return!1}function l(e,t){if(!e)var i=te.getSlideImage(),e=ie.getElementSize(i);oe.textPanelTop=e.bottom,t===!0&&ne.positionPanel(oe.textPanelTop,oe.textPanelLeft)}function u(e){var t=(ie.getElementSize(Y),te.getSlideImage()),i=ie.getElementSize(t);if(0==i.width)return!1;oe.textPanelLeft=i.left,oe.textPanelTop=i.bottom;var n=i.width;if(q){var r=ie.getElementSize(q);n-=r.width;var o=i.right-r.width;ie.placeElement(q,o,oe.textPanelTop)}ne&&(ne.show(),ne.refresh(!0,!0,n),l(i));var a=s(i);0==a&&(oe.positionFrom="handleCompactTextpanelSizes",ne&&(ne.positionPanel(oe.textPanelTop,oe.textPanelLeft),e===!0&&(e(),P())))}function d(){if(0==te.isCurrentSlideType("image"))return!0;var e=1==te.isCurrentImageInPlace();return e}function _(e,t){if(0==oe.isArrowsInside)return!1;if(!V)return!1;var i=d();if(V.show(),X.show(),oe.positionFrom="positionArrowsInside",1==oe.isArrowsOnHoverMode&&1==i&&0==v()&&b(!0),0==i)var n=ie.getElementRelativePos(V,"left",re.lightbox_arrows_offset),r=ie.getElementRelativePos(V,"middle"),o=ie.getElementRelativePos(X,"right",re.lightbox_arrows_offset),a=r;else var s=te.getSlideImage(),l=ie.getElementSize(s),n=(ie.getElementSize(te.getElement()),ie.getElementRelativePos(V,"left",0,s)+l.left+re.lightbox_arrows_inside_offset),r=ie.getElementRelativePos(V,"middle",0,s)+l.top,o=ie.getElementRelativePos(V,"right",0,s)+l.left-re.lightbox_arrows_inside_offset,a=r;if(t===!0){var u={left:n,top:r},_={left:o,top:a};V.stop().animate(u,{duration:oe.fadeDuration}),X.stop().animate(_,{duration:oe.fadeDuration})}else V.stop(),X.stop(),ie.placeElement(V,n,r),ie.placeElement(X,o,a);1==e&&I(t)}function g(e,t){oe.positionFrom=null;var i=d(),n=2,r=ie.getElementRelativePos(Z,"right",2,Y);if(0==i)var o=n,a=r;else{var s=te.getSlideImage(),l=ie.getElementSize(s),u=ie.getElementSize(te.getElement()),_=ie.getElementSize(Z);u.top==u.height&&(u.top=0);var a=u.left+l.right-_.width/2+re.lightbox_compact_closebutton_offsetx,o=u.top+l.top-_.height/2-re.lightbox_compact_closebutton_offsety;n>o&&(o=n),a>r&&(a=r)}if(t===!0){var g={left:a,top:o};Z.stop().animate(g,{duration:oe.fadeDuration})}else Z.stop(),ie.placeElement(Z,a,o);e===!0&&w(t)}function c(){Z&&Z.stop().fadeTo(oe.fadeDuration,0),f(),m(),oe.positionFrom="hideCompactElements",1==oe.isArrowsInside&&b()}function h(){Z&&Z.hide(),V&&1==oe.isArrowsInside&&(V.hide(),X.hide()),q&&q.hide(),ne&&ne.hide()}function p(){var e=ie.getElementSize(Y);K&&ie.setElementSizeAndPosition(K,0,0,e.width,oe.topPanelHeight),V&&0==oe.isArrowsInside&&(1==re.lightbox_hide_arrows_onvideoplay&&(V.show(),X.show()),ie.placeElement(V,"left","middle",re.lightbox_arrows_offset),ie.placeElement(X,"right","middle",re.lightbox_arrows_offset)),0==oe.isCompact&&ie.placeElement(Z,"right","top",2,2),ne&&(oe.positionFrom="positionElements",0==oe.isCompact?a(e):(S(),P()));var t=e.width,i=e.height,n=0,r=0;if(te){if(K){var o=K.height(),s={slider_image_padding_top:o,slider_video_padding_top:o};te.setOptions(s)}te.setSize(t,i),te.setPosition(r,n)}}function f(){ne&&ne.getElement().stop().fadeTo(oe.fadeDuration,0)}function m(){q&&q.stop().fadeTo(oe.fadeDuration,0)}function v(){if(!oe.lastMouseX)return!0;var e={pageX:oe.lastMouseX,pageY:oe.lastMouseY},t=te.isMouseInsideSlideImage(e);return t}function b(e,t){return V?1==oe.isArrowsOnHoverMode&&t===!1?(1==v(),!0):void(e===!0?(V.stop().fadeTo(0,0),X.stop().fadeTo(0,0)):(V.stop().fadeTo(oe.fadeDuration,0),X.stop().fadeTo(oe.fadeDuration,0))):!1}function y(){if(!V)return!0;if(0==V.is(":visible"))return!0;var e=V.css("opacity");return 1!=e?!0:!1}function I(e,t){return V?1==oe.isArrowsOnHoverMode&&t!==!0&&1==d()?!0:1==te.isSwiping()?!0:(e!==!0&&(V.stop(),X.stop()),V.fadeTo(oe.fadeDuration,1),void X.fadeTo(oe.fadeDuration,1)):!1}function w(e){e!==!0&&Z.stop(),Z.fadeTo(oe.fadeDuration,1)}function T(e){if(!ne)return!1;if(!e)var e=te.getCurrentItem();ne.setTextPlain(e.title,e.description)}function E(e){if(!q)return!1;if(!e)var e=te.getCurrentItem();var t=ee.getNumItems(),i=e.index+1;q.html(i+" / "+t)}function S(){return ne?void ne.getElement().show().stop().fadeTo(oe.fadeDuration,1):!1}function P(){q&&q.stop().fadeTo(oe.fadeDuration,1)}function x(){return 0==oe.isCompact?!0:void c()}function j(){if(0==oe.isCompact)return!0;if(oe.positionFrom="onZoomChange",g(!1,!0),_(!1,!0),1==oe.isCompact){var e=te.isCurrentSlideType("image")&&1==te.isCurrentImageInPlace();0==e?(f(),m()):(oe.positionFrom="onZoomChange",S(),P())}}function C(){if(0==oe.isCompact)return!0;oe.positionFrom="onSliderAfterReturn",g(!0),_(!0);var e=s();0==e&&u(),S(),P()}function A(e,t){return t=jQuery(t),0==oe.isCompact?!0:0==te.isSlideCurrent(t)?!0:(oe.positionFrom="onSliderAfterPutImage",g(!0),_(!0),void u())}function M(){var e=te.getOptions(),t=e.slider_image_padding_top;if(K){var i=K.height();i!=t&&r(i)}if(1==oe.isCompact&&(T(),E(),oe.positionFrom="onSliderTransitionEnd",g(!0),_(!0),0==te.isSlideActionActive())){var n=s();0==n&&u(),S(),P()}}function z(e,t){0==oe.isCompact?(q&&E(t),ne&&(T(t),ne.positionElements(!1),o(),ne.positionPanel())):0==te.isAnimating()&&(ne&&T(t),q&&E(t)),0==oe.isSliderChangedOnce&&(oe.isSliderChangedOnce=!0,$.trigger(J.events.LIGHTBOX_INIT))}function O(e,t){var i=te.getSlideType();if("image"!=i&&0==oe.isCompact&&te.isSlideActionActive())return!0;var n=te.isPreloading();if(1==n)return J.close("slider"),!0;var r=te.isMouseInsideSlideImage(t);0==r&&J.close("slider_inside")}function L(){p()}function H(){V&&1==re.lightbox_hide_arrows_onvideoplay&&(V.hide(),X.hide())}function k(){V&&1==re.lightbox_hide_arrows_onvideoplay&&(V.show(),X.show())}function N(e,t){switch(t){case 27:1==oe.isOpened&&J.close("keypress")}}function R(){1==oe.isArrowsOnHoverMode&&I(!1,!0)}function G(e){oe.positionFrom="hideCompactElements",1==oe.isArrowsOnHoverMode&&1==d()&&b(!1,!0)}function Q(e){oe.lastMouseX=e.pageX,oe.lastMouseY=e.pageY;var t=y();1==t&&v()&&0==te.isAnimating()&&(oe.positionFrom="onMouseMove",V&&0==V.is(":animated")&&I(!1,!0))}function D(e,t,i,n){if(0==oe.isOpened)return!0;switch(re.gallery_mousewheel_role){default:case"zoom":var r=te.getSlideType();"image"!=r&&e.preventDefault();break;case"none":e.preventDefault();break;case"advance":ee.onGalleryMouseWheel(e,t,i,n)}}function W(){if(U.on("touchstart",function(e){e.preventDefault()}),U.on("touchend",function(e){J.close("overlay")}),ie.addClassOnHover(X,"ug-arrow-hover"),ie.addClassOnHover(V,"ug-arrow-hover"),ie.addClassOnHover(Z),ee.setNextButton(X),ee.setPrevButton(V),Z.click(function(){J.close("button")}),B.on(ee.events.ITEM_CHANGE,z),te){jQuery(te).on(te.events.TRANSITION_END,M),jQuery(te).on(te.events.CLICK,O);var e=te.getVideoObject();jQuery(e).on(e.events.PLAY_START,H),jQuery(e).on(e.events.PLAY_STOP,k),jQuery(te).on(te.events.START_DRAG,x),jQuery(te).on(te.events.TRANSITION_START,x),jQuery(te).on(te.events.AFTER_DRAG_CHANGE,C),jQuery(te).on(te.events.AFTER_RETURN,C),jQuery(te).on(te.events.AFTER_PUT_IMAGE,A),jQuery(te).on(te.events.ZOOM_CHANGE,j),jQuery(te).on(te.events.IMAGE_MOUSEENTER,R),jQuery(te).on(te.events.IMAGE_MOUSELEAVE,G)}jQuery(window).resize(function(){return 0==oe.isOpened?!0:void ie.whenContiniousEventOver("lightbox_resize",L,100)}),B.on(ee.events.GALLERY_KEYPRESS,N),1==oe.isArrowsOnHoverMode&&jQuery(document).bind("mousemove",Q),Y.on("mousewheel",D)}function F(){oe.isCompact=!1,t(),re=jQuery.extend({},oe.originalOptions),trace(re),te.setOptions(re)}var B,Y,U,V,X,Z,q,K,J=this,$=jQuery(this),ee=new UniteGalleryMain,te=new UGSlider,ie=new UGFunctions,ne=new UGTextPanel,re={lightbox_type:"wide",lightbox_show_textpanel:!0,lightbox_textpanel_width:550,lightbox_hide_arrows_onvideoplay:!0,lightbox_arrows_position:"sides",lightbox_arrows_offset:10,lightbox_arrows_inside_offset:10,lightbox_arrows_inside_alwayson:!1,lightbox_overlay_color:null,lightbox_overlay_opacity:1,lightbox_top_panel_opacity:null,lightbox_show_numbers:!0,lightbox_numbers_size:null,lightbox_numbers_color:null,lightbox_numbers_padding_top:null,lightbox_numbers_padding_right:null,lightbox_compact_closebutton_offsetx:1,lightbox_compact_closebutton_offsety:1};this.events={LIGHTBOX_INIT:"lightbox_init"};var oe={topPanelHeight:44,initTextPanelHeight:26,isOpened:!1,putSlider:!0,isCompact:!1,fadeDuration:300,positionFrom:null,textPanelTop:null,textPanelLeft:null,isArrowsInside:!1,isArrowsOnHoverMode:!1,lastMouseX:null,lastMouseY:null,originalOptions:null,isSliderChangedOnce:!1},ae={lightbox_slider_controls_always_on:!0,lightbox_slider_enable_bullets:!1,lightbox_slider_enable_arrows:!1,lightbox_slider_enable_progress_indicator:!1,lightbox_slider_enable_play_button:!1,lightbox_slider_enable_fullscreen_button:!1,lightbox_slider_enable_zoom_panel:!1,lightbox_slider_enable_text_panel:!1,lightbox_slider_scale_mode_media:"down",lightbox_slider_scale_mode:"down",lightbox_slider_loader_type:3,lightbox_slider_loader_color:"black",lightbox_slider_transition:"fade",lightbox_slider_image_padding_top:oe.topPanelHeight,lightbox_slider_image_padding_bottom:10,lightbox_slider_video_padding_top:oe.topPanelHeight,lightbox_slider_video_padding_bottom:0,lightbox_textpanel_align:"middle",lightbox_textpanel_padding_top:5,lightbox_textpanel_padding_bottom:5,slider_video_constantsize:!1,lightbox_slider_image_border:!1,lightbox_textpanel_enable_title:!0,lightbox_textpanel_enable_description:!1,lightbox_textpanel_desc_style_as_title:!0,lightbox_textpanel_enable_bg:!1,video_enable_closebutton:!1,lightbox_slider_video_enable_closebutton:!1,video_youtube_showinfo:!1,lightbox_slider_enable_links:!1},se={lightbox_overlay_opacity:.6,lightbox_slider_image_border:!0,lightbox_slider_image_shadow:!0,lightbox_slider_image_padding_top:30,lightbox_slider_image_padding_bottom:30,slider_video_constantsize:!0,lightbox_textpanel_align:"bottom",lightbox_textpanel_title_text_align:"left",lightbox_textpanel_desc_text_align:"left",lightbox_textpanel_padding_left:10,lightbox_textpanel_padding_right:10};this.destroy=function(){if(jQuery(document).unbind("mousemove"),U.off("touchstart"),U.off("touchend"),Z.off("click"),B.off(ee.events.ITEM_CHANGE),te){jQuery(te).off(te.events.TRANSITION_END),jQuery(te).off(te.events.CLICK),jQuery(te).off(te.events.START_DRAG),jQuery(te).off(te.events.TRANSITION_START),jQuery(te).off(te.events.AFTER_DRAG_CHANGE),jQuery(te).off(te.events.AFTER_RETURN);var e=te.getVideoObject();jQuery(e).off(e.events.PLAY_START),jQuery(e).off(e.events.PLAY_STOP),jQuery(te).on(te.events.IMAGE_MOUSEENTER,R),jQuery(te).on(te.events.IMAGE_MOUSELEAVE,G),te.destroy()}jQuery(window).unbind("resize"),B.off(ee.events.GALLERY_KEYPRESS,N),Y.off("mousewheel"),Y.remove()},this.open=function(e){var t=ee.getItem(e);if(oe.isOpened=!0,te&&te.setItem(t,"lightbox_open"),ne&&ne.setTextPlain(t.title,t.description),U.stop().fadeTo(0,0),Y.show(),Y.fadeTo(0,1),U.stop().fadeTo(oe.fadeDuration,re.lightbox_overlay_opacity),p(),1==oe.isCompact){var i=te.isPreloading();1==i?h():1==oe.isArrowsInside&&(V.hide(),X.hide())}te&&te.startSlideAction()},this.close=function(e){oe.isOpened=!1,1==oe.isCompact&&c(),te&&te.stopSlideAction();var t=te.getSlideType();"image"!=t?Y.hide():Y.fadeTo(oe.fadeDuration,0,function(){Y.hide()})},this.init=function(t,i){e(t,i)},this.putHtml=function(){var e=ee.isMobileMode();e&&1==oe.isCompact&&F(),i()},this.run=function(){n(),te&&te.run(),W()}}function UGCarousel(){function e(e,t){g_objects=e.getObjects(),W=e,H=jQuery(e),k=g_objects.g_objWrapper,N=g_objects.g_arrItems,U=jQuery.extend(U,t),B.setFixedMode(),B.setApproveClickFunction(L),B.init(e,U),Y=B.getObjThumbs(),U=B.getOptions(),V.initTileWidth=U.tile_width,V.initTileHeight=U.tile_height,V.tileWidth=U.tile_width}function t(e){if(!e)var e=k;var t="<div class='ug-carousel-wrapper'><div class='ug-carousel-inner'></div></div>";k.append(t),R=k.children(".ug-carousel-wrapper"),G=R.children(".ug-carousel-inner"),B.setHtml(G),Y.getThumbs().fadeTo(0,1)}function i(e,t){if(!t)var t=V.initTileHeight/V.initTileWidth*e;V.tileWidth=e;var i={tile_width:e,tile_height:t};B.setOptions(i),U.tile_width=e,U.tile_height=t,B.resizeAllTiles(e),m(!0)}function n(){if(null===V.carouselMaxWidth)throw new Error("The carousel width not set");if(V.tileWidth<V.initTileWidth){var e=V.carouselMaxWidth-2*U.carousel_padding;e>V.initTileWidth&&(e=V.initTileWidth),i(e);var t=F.getNumItemsInSpace(V.carouselMaxWidth,e,U.carousel_space_between_tiles)}else{var t=F.getNumItemsInSpace(V.carouselMaxWidth,V.tileWidth,U.carousel_space_between_tiles);if(0>=t){t=1;var e=V.carouselMaxWidth-2*U.carousel_padding;i(e)}}var n=F.getSpaceByNumItems(t,V.tileWidth,U.carousel_space_between_tiles);n+=2*U.carousel_padding,R.width(n),1==V.isFirstTimeRun?(O(),B.run(),jQuery.each(N,function(e,t){t.objThumbWrapper.data("index",e),k.trigger(V.eventSizeChange,[t.objThumbWrapper,!0]),t.objTileOriginal=t.objThumbWrapper.clone(!0,!0)}),m(!0),1==U.carousel_autoplay&&Q.startAutoplay()):(1==U.carousel_autoplay&&Q.pauseAutoplay(),w(0,!1),1==U.carousel_autoplay&&Q.startAutoplay()),P(),V.isFirstTimeRun=!1}function r(){return F.getElementSize(G).left}function o(e){return F.getMousePosition(e).pageX}function a(){var e=G.children(".ug-thumb-wrapper");return e}function s(e){var t=F.getNumItemsInSpace(e,V.tileWidth,U.carousel_space_between_tiles);return t}function l(){return a().length}function u(e){v(e);var t=a(),i=jQuery(t[e]);return i}function d(){return G.children(".ug-thumb-wrapper").first()}function _(){return G.children(".ug-thumb-wrapper").last()}function g(e,t,i){var n=e.data("index");if(void 0==n)throw new Error("every tile should have index!");for(var r=[],o=0;t>o;o++){if("prev"==i)var a=W.getPrevItem(n,!0);else var a=W.getNextItem(n,!0);if(!a)throw new Error("the item to add is empty");var s=a.objTileOriginal.clone(!0,!0);n=a.index,s.addClass("cloned"),r.push(s)}return r}function c(){var e=F.getElementSize(R),t=F.getElementSize(G),i=t.width-e.width+t.left,n=V.sideSpace-i;return n}function h(){var e=-r(),t=V.sideSpace-e;return t}function p(){var e=F.getElementSize(R);return e.width}function f(){var e=p(),t=s(e);return t}function m(e){if(!e)var e=!1;var t,i=a(),n=0,r=0;return jQuery.each(i,function(e,o){o=jQuery(o),F.placeElement(o,n,0);var a=F.getElementSize(o);n+=a.width+U.carousel_space_between_tiles,r=Math.max(r,a.height),e==i.length-1&&(t=a.right)}),G.width(t),r+=2*U.carousel_padding,e===!0&&(G.height(r),R.height(r)),w(V.numCurrent,!1),t}function v(e){if(e>a().length-1)throw new Error("Wrogn tile number: "+e)}function b(e,t){if("left"==t)var i=d();else var i=_();var n="left"==t?"prev":"next",r=g(i,e,n);jQuery.each(r,function(e,i){"left"==t?G.prepend(i):G.append(i),k.trigger(V.eventSizeChange,i),B.loadTileImage(i)})}function y(e,t){v(n);for(var i=a(),n=i.length,r=0;e>r;r++)"left"==t?jQuery(i[r]).remove():jQuery(i[n-1-r]).remove()}function I(e){var t={left:e+"px"};G.css(t)}function w(e,t,i){if(void 0===t){var t=!0;if(G.is(":animated"))return!0}var n=u(e),r=F.getElementSize(n),o=-r.left+U.carousel_padding,a={left:o+"px"};if(t===!0){var s=U.carousel_scroll_duration,l=U.carousel_scroll_easing;i===!0&&(s=V.scrollShortDuration,l=V.scrollShortEasing),G.stop(!0).animate(a,{duration:s,easing:l,queue:!1,complete:function(){V.numCurrent=e,S(!0)}})}else V.numCurrent=e,G.css(a)}function T(){var e=-r(),t=s(e),i=F.getElementSize(u(t)).left,n=F.getElementSize(u(t+1)).left;return Math.abs(i-e)<Math.abs(n-e)?t:t+1}function E(){var e=T();w(e,!0,!0)}function S(){var e=h(),t=c(),i=0,n=0,r=0,o=0,a=l();if(e>V.spaceActionSize)i=s(e),b(i,"left"),V.numCurrent+=i;else if(e<-V.spaceActionSize){var r=s(Math.abs(e));y(r,"left"),V.numCurrent-=r}if(t>V.spaceActionSize?(n=s(t),b(n,"right")):t<-V.spaceActionSize&&(o=s(Math.abs(t)),y(o,"right")),o>a)throw new Error("Can't remove more then num tiles");var u=!1;return(i||n||r||o)&&(m(),u=!0),u}function P(e){F.placeElement(G,0,U.carousel_padding),S()}function x(){"left"==U.carousel_autoplay_direction?Q.scrollRight(1):Q.scrollLeft(1)}function j(e){return 1==V.touchActive?!0:(V.touchActive=!0,Q.pauseAutoplay(),V.startTime=jQuery.now(),V.startMousePos=o(e),V.startInnerPos=r(),V.lastTime=V.startTime,V.lastMousePos=V.startMousePos,void F.storeEventData(e,V.storedEventID))}function C(e){if(0==V.touchActive)return!0;F.updateStoredEventData(e,V.storedEventID),e.preventDefault();var t=null;if(1==U.carousel_vertical_scroll_ondrag&&(t=F.handleScrollTop(V.storedEventID)),"vert"===t)return!0;V.lastMousePos=o(e);var i=V.lastMousePos-V.startMousePos,n=V.startInnerPos+i,r=i>0?"prev":"next",a=F.getElementSize(G).width;n>0&&"prev"==r&&(n/=3),-a>n&&"next"==r&&(n=V.startInnerPos+i/3),I(n)}function A(e){return 0==V.touchActive?!0:(V.touchActive=!1,E(),void Q.unpauseAutoplay())}function M(e){return 0==U.carousel_autoplay_pause_onhover?!0:void(1==V.isPlayMode&&0==V.isPaused&&Q.pauseAutoplay())}function z(e){return 0==U.carousel_autoplay_pause_onhover?!0:void Q.unpauseAutoplay()}function O(){B.initEvents(),R.bind("mousedown touchstart",j),jQuery("body").bind("mousemove touchmove",C),jQuery(window).add("body").bind("mouseup touchend",A),R.hover(M,z)}function L(){var e=V.lastTime-V.startTime,t=Math.abs(V.lastMousePos-V.startMousePos);return e>300?!1:t>30?!1:!0}var H,k,N,R,G,Q=this,D=jQuery(this),W=new UniteGalleryMain,F=new UGFunctions,B=new UGTileDesign,Y=new UGThumbsGeneral,U={carousel_padding:8,carousel_space_between_tiles:20,carousel_navigation_numtiles:3,carousel_scroll_duration:500,carousel_scroll_easing:"easeOutCubic",
carousel_autoplay:!0,carousel_autoplay_timeout:3e3,carousel_autoplay_direction:"right",carousel_autoplay_pause_onhover:!0,carousel_vertical_scroll_ondrag:!1};this.events={START_PLAY:"carousel_start_play",PAUSE_PLAY:"carousel_pause_play",STOP_PLAY:"carousel_stop_play"};var V={eventSizeChange:"thumb_size_change",isFirstTimeRun:!0,carouselMaxWidth:null,tileWidth:0,initTileWidth:0,initTileHeight:0,sideSpace:1500,spaceActionSize:500,numCurrent:0,touchActive:!1,startInnerPos:0,lastTime:0,startTime:0,startMousePos:0,lastMousePos:0,scrollShortDuration:200,scrollShortEasing:"easeOutQuad",handle:null,isPlayMode:!1,isPaused:!1,storedEventID:"carousel"};this.startAutoplay=function(){V.isPlayMode=!0,V.isPaused=!1,D.trigger(Q.events.START_PLAY),V.handle&&clearInterval(V.handle),V.handle=setInterval(x,U.carousel_autoplay_timeout)},this.unpauseAutoplay=function(){return 0==V.isPlayMode?!0:0==V.isPaused?!0:void Q.startAutoplay()},this.pauseAutoplay=function(){return 0==V.isPlayMode?!0:(V.isPaused=!0,V.handle&&clearInterval(V.handle),void D.trigger(Q.events.PAUSE_PLAY))},this.stopAutoplay=function(){return 0==V.isPlayMode?!0:(V.isPaused=!1,V.isPlayMode=!1,V.handle&&clearInterval(V.handle),void D.trigger(Q.events.STOP_PLAY))},this.destroy=function(){V.handle&&clearInterval(V.handle),D.off(Q.events.START_PLAY),D.off(Q.events.STOP_PLAY),R.unbind("mousedown"),R.unbind("touchstart"),jQuery("body").unbind("mousemove"),jQuery("body").unbind("touchmove"),jQuery(window).add("body").unbind("mouseup").unbind("touchend"),R.off("mouseenter").off("mouseleave"),B.destroy()},this.init=function(t,i,n){n&&this.setMaxWidth(n),e(t,i)},this.setMaxWidth=function(e){V.carouselMaxWidth=e},this.setHtml=function(e){t(e)},this.getElement=function(){return R},this.getObjTileDesign=function(){return B},this.getEstimatedHeight=function(){var e=U.tile_height+2*U.carousel_padding;return e},this.run=function(){n()},this.scrollRight=function(e){if(!e||"object"==typeof e)var e=U.carousel_navigation_numtiles;var t=f();e>t&&(e=t);var i=V.numCurrent-e;0>=i&&(i=0),w(i)},this.scrollLeft=function(e){if(!e||"object"==typeof e)var e=U.carousel_navigation_numtiles;var t=f();e>t&&(e=t);var i=l(),n=V.numCurrent+e;n>=i&&(n=i-1),w(n)},this.setScrollLeftButton=function(e){F.setButtonMobileReady(e),F.setButtonOnClick(e,Q.scrollLeft)},this.setScrollRightButton=function(e){F.setButtonMobileReady(e),F.setButtonOnClick(e,Q.scrollRight)},this.setPlayPauseButton=function(e){F.setButtonMobileReady(e),1==V.isPlayMode&&0==V.isPaused&&e.addClass("ug-pause-icon"),D.on(Q.events.START_PLAY,function(){e.addClass("ug-pause-icon")}),D.on(Q.events.STOP_PLAY,function(){e.removeClass("ug-pause-icon")}),F.setButtonOnClick(e,function(){0==V.isPlayMode||1==V.isPaused?Q.startAutoplay():Q.stopAutoplay()})}}function UGTabs(){function e(e,t){u=e,a=jQuery(u),d=jQuery.extend(d,t),"select"==d.tabs_type?l=jQuery(d.tabs_container):s=jQuery(d.tabs_container+" .ug-tab")}function t(){o()}function i(e){u.requestNewItems(e)}function n(){var e=d.tabs_class_selected,t=jQuery(this);if(t.hasClass(e))return!0;s.not(t).removeClass(e),t.addClass(e);var n=t.data("catid");return n?void i(n):!0}function r(){var e=jQuery(this),t=e.val();return t?void i(t):!0}function o(){"select"==d.tabs_type?l.change(r):s.click(n)}var a,s,l,u=(jQuery(this),new UniteGalleryMain),d=(new UGFunctions,{tabs_type:"tabs",tabs_container:"#ug_tabs",tabs_class_selected:"ug-tab-selected"});this.events={},this.destroy=function(){l&&l.off("change"),s&&s.off("click")},this.init=function(t,i){e(t,i)},this.run=function(){t()}}function UG_API(e){function t(e){var t={index:e.index,title:e.title,description:e.description,urlImage:e.urlImage,urlThumb:e.urlThumb},i=e.objThumbImage.data();for(var n in i){switch(n){case"image":case"description":continue}t[n]=i[n]}return t}var i,n=this,r=(jQuery(n),new UniteGalleryMain);r=e,i=jQuery(e),this.events={API_INIT_FUNCTIONS:"api_init",API_ON_EVENT:"api_on_event"},this.on=function(e,o){switch(e){case"item_change":i.on(r.events.ITEM_CHANGE,function(){var e=r.getSelectedItem(),i=t(e);o(i.index,i)});break;case"resize":i.on(r.events.SIZE_CHANGE,o);break;case"enter_fullscreen":i.on(r.events.ENTER_FULLSCREEN,o);break;case"exit_fullscreen":i.on(r.events.EXIT_FULLSCREEN,o);break;case"play":i.on(r.events.START_PLAY,o);break;case"stop":i.on(r.events.STOP_PLAY,o);break;case"pause":i.on(r.events.PAUSE_PLAYING,o);break;case"continue":i.on(r.events.CONTINUE_PLAYING,o);break;default:console&&console.log("wrong api event: "+e)}i.trigger(n.events.API_ON_EVENT,[e,o])},this.play=function(){r.startPlayMode()},this.stop=function(){r.stopPlayMode()},this.togglePlay=function(){r.togglePlayMode()},this.enterFullscreen=function(){r.toFullScreen()},this.exitFullscreen=function(){r.exitFullScreen()},this.toggleFullscreen=function(){r.toggleFullscreen()},this.resetZoom=function(){var e=r.getObjSlider();return e?void e.zoomBack():!1},this.zoomIn=function(){var e=r.getObjSlider();return e?void e.zoomIn():!1},this.zoomOut=function(){var e=r.getObjSlider();return e?void e.zoomOut():!1},this.nextItem=function(){r.nextItem()},this.prevItem=function(){r.prevItem()},this.selectItem=function(e){r.selectItem(e)},this.resize=function(e,t){t?r.resize(e,t):r.resize(e)},this.getItem=function(e){var i=r.getItem(e),n=t(i);return n},this.getNumItems=function(){var e=r.getNumItems();return e},this.reloadGallery=function(e){if(!e)var e={};r.run(null,e)},this.destroy=function(){r.destroy()},i.trigger(n.events.API_INIT_FUNCTIONS,n)}var g_ugFunctions=new UGFunctions;!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var a=t||window.event,s=l.call(arguments,1),u=0,d=0,_=0,g=0;if(t=e.event.fix(a),t.type="mousewheel","detail"in a&&(_=-1*a.detail),"wheelDelta"in a&&(_=a.wheelDelta),"wheelDeltaY"in a&&(_=a.wheelDeltaY),"wheelDeltaX"in a&&(d=-1*a.wheelDeltaX),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(d=-1*_,_=0),u=0===_?d:_,"deltaY"in a&&(_=-1*a.deltaY,u=_),"deltaX"in a&&(d=a.deltaX,0===_&&(u=-1*d)),0!==_||0!==d){if(1===a.deltaMode){var c=e.data(this,"mousewheel-line-height");u*=c,_*=c,d*=c}else if(2===a.deltaMode){var h=e.data(this,"mousewheel-page-height");u*=h,_*=h,d*=h}return g=Math.max(Math.abs(_),Math.abs(d)),(!o||o>g)&&(o=g,n(a,g)&&(o/=40)),n(a,g)&&(u/=40,d/=40,_/=40),u=Math[u>=1?"floor":"ceil"](u/o),d=Math[d>=1?"floor":"ceil"](d/o),_=Math[_>=1?"floor":"ceil"](_/o),t.deltaX=d,t.deltaY=_,t.deltaFactor=o,t.deltaMode=0,s.unshift(t,u,d,_),r&&clearTimeout(r),r=setTimeout(i,200),(e.event.dispatch||e.event.handle).apply(this,s)}}function i(){o=null}function n(e,t){return d.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var r,o,a=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],s="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],l=Array.prototype.slice;if(e.event.fixHooks)for(var u=a.length;u;)e.event.fixHooks[a[--u]]=e.event.mouseHooks;var d=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var i=s.length;i;)this.addEventListener(s[--i],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",d.getLineHeight(this)),e.data(this,"mousewheel-page-height",d.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=s.length;e;)this.removeEventListener(s[--e],t,!1);else this.onmousewheel=null},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,i,n,r){return jQuery.easing[jQuery.easing.def](e,t,i,n,r)},easeInQuad:function(e,t,i,n,r){return n*(t/=r)*t+i},easeOutQuad:function(e,t,i,n,r){return-n*(t/=r)*(t-2)+i},easeInOutQuad:function(e,t,i,n,r){return(t/=r/2)<1?n/2*t*t+i:-n/2*(--t*(t-2)-1)+i},easeInCubic:function(e,t,i,n,r){return n*(t/=r)*t*t+i},easeOutCubic:function(e,t,i,n,r){return n*((t=t/r-1)*t*t+1)+i},easeInOutCubic:function(e,t,i,n,r){return(t/=r/2)<1?n/2*t*t*t+i:n/2*((t-=2)*t*t+2)+i},easeInQuart:function(e,t,i,n,r){return n*(t/=r)*t*t*t+i},easeOutQuart:function(e,t,i,n,r){return-n*((t=t/r-1)*t*t*t-1)+i},easeInOutQuart:function(e,t,i,n,r){return(t/=r/2)<1?n/2*t*t*t*t+i:-n/2*((t-=2)*t*t*t-2)+i},easeInQuint:function(e,t,i,n,r){return n*(t/=r)*t*t*t*t+i},easeOutQuint:function(e,t,i,n,r){return n*((t=t/r-1)*t*t*t*t+1)+i},easeInOutQuint:function(e,t,i,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+i:n/2*((t-=2)*t*t*t*t+2)+i},easeInSine:function(e,t,i,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+i},easeOutSine:function(e,t,i,n,r){return n*Math.sin(t/r*(Math.PI/2))+i},easeInOutSine:function(e,t,i,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+i},easeInExpo:function(e,t,i,n,r){return 0==t?i:n*Math.pow(2,10*(t/r-1))+i},easeOutExpo:function(e,t,i,n,r){return t==r?i+n:n*(-Math.pow(2,-10*t/r)+1)+i},easeInOutExpo:function(e,t,i,n,r){return 0==t?i:t==r?i+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+i:n/2*(-Math.pow(2,-10*--t)+2)+i},easeInCirc:function(e,t,i,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+i},easeOutCirc:function(e,t,i,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+i},easeInOutCirc:function(e,t,i,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+i:n/2*(Math.sqrt(1-(t-=2)*t)+1)+i},easeInElastic:function(e,t,i,n,r){var o=1.70158,a=0,s=n;if(0==t)return i;if(1==(t/=r))return i+n;if(a||(a=.3*r),s<Math.abs(n)){s=n;var o=a/4}else var o=a/(2*Math.PI)*Math.asin(n/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(t*r-o)*Math.PI/a))+i},easeOutElastic:function(e,t,i,n,r){var o=1.70158,a=0,s=n;if(0==t)return i;if(1==(t/=r))return i+n;if(a||(a=.3*r),s<Math.abs(n)){s=n;var o=a/4}else var o=a/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*t)*Math.sin(2*(t*r-o)*Math.PI/a)+n+i},easeInOutElastic:function(e,t,i,n,r){var o=1.70158,a=0,s=n;if(0==t)return i;if(2==(t/=r/2))return i+n;if(a||(a=.3*r*1.5),s<Math.abs(n)){s=n;var o=a/4}else var o=a/(2*Math.PI)*Math.asin(n/s);return 1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(t*r-o)*Math.PI/a)+i:s*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*r-o)*Math.PI/a)*.5+n+i},easeInBack:function(e,t,i,n,r,o){return void 0==o&&(o=1.70158),n*(t/=r)*t*((o+1)*t-o)+i},easeOutBack:function(e,t,i,n,r,o){return void 0==o&&(o=1.70158),n*((t=t/r-1)*t*((o+1)*t+o)+1)+i},easeInOutBack:function(e,t,i,n,r,o){return void 0==o&&(o=1.70158),(t/=r/2)<1?n/2*t*t*(((o*=1.525)+1)*t-o)+i:n/2*((t-=2)*t*(((o*=1.525)+1)*t+o)+2)+i},easeInBounce:function(e,t,i,n,r){return n-jQuery.easing.easeOutBounce(e,r-t,0,n,r)+i},easeOutBounce:function(e,t,i,n,r){return(t/=r)<1/2.75?7.5625*n*t*t+i:2/2.75>t?n*(7.5625*(t-=1.5/2.75)*t+.75)+i:2.5/2.75>t?n*(7.5625*(t-=2.25/2.75)*t+.9375)+i:n*(7.5625*(t-=2.625/2.75)*t+.984375)+i},easeInOutBounce:function(e,t,i,n,r){return r/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,n,r)+i:.5*jQuery.easing.easeOutBounce(e,2*t-r,0,n,r)+.5*n+i}}),!function(e,t){function i(e,t,i){var n=_[t.type]||{};return null==e?i||!t.def?null:t.def:(e=n.floor?~~e:parseFloat(e),isNaN(e)?t.def:n.mod?(e+n.mod)%n.mod:0>e?0:n.max<e?n.max:e)}function n(t){var i=u(),n=i._rgba=[];return t=t.toLowerCase(),h(l,function(e,r){var o,a=r.re.exec(t),s=a&&r.parse(a),l=r.space||"rgba";return s?(o=i[l](s),i[d[l].cache]=o[d[l].cache],n=i._rgba=o._rgba,!1):void 0}),n.length?("0,0,0,0"===n.join()&&e.extend(n,o.transparent),i):o[t]}function r(e,t,i){return i=(i+1)%1,1>6*i?e+(t-e)*i*6:1>2*i?t:2>3*i?e+(t-e)*(2/3-i)*6:e}if("undefined"==typeof e.cssHooks)return!1;var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",s=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=e.Color=function(t,i,n,r){return new e.Color.fn.parse(t,i,n,r)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},_={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},g=u.support={},c=e("<p>")[0],h=e.each;c.style.cssText="background-color:rgba(1,1,1,.5)",g.rgba=c.style.backgroundColor.indexOf("rgba")>-1,h(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=e.extend(u.prototype,{parse:function(r,a,s,l){if(r===t)return this._rgba=[null,null,null,null],this;(r.jquery||r.nodeType)&&(r=e(r).css(a),a=t);var _=this,g=e.type(r),c=this._rgba=[];return a!==t&&(r=[r,a,s,l],g="array"),"string"===g?this.parse(n(r)||o._default):"array"===g?(h(d.rgba.props,function(e,t){c[t.idx]=i(r[t.idx],t)}),this):"object"===g?(r instanceof u?h(d,function(e,t){r[t.cache]&&(_[t.cache]=r[t.cache].slice())}):h(d,function(t,n){var o=n.cache;h(n.props,function(e,t){if(!_[o]&&n.to){if("alpha"===e||null==r[e])return;_[o]=n.to(_._rgba)}_[o][t.idx]=i(r[e],t,!0)}),_[o]&&e.inArray(null,_[o].slice(0,3))<0&&(_[o][3]=1,n.from&&(_._rgba=n.from(_[o])))}),this):void 0},is:function(e){var t=u(e),i=!0,n=this;return h(d,function(e,r){var o,a=t[r.cache];return a&&(o=n[r.cache]||r.to&&r.to(n._rgba)||[],h(r.props,function(e,t){return null!=a[t.idx]?i=a[t.idx]===o[t.idx]:void 0})),i}),i},_space:function(){var e=[],t=this;return h(d,function(i,n){t[n.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var n=u(e),r=n._space(),o=d[r],a=0===this.alpha()?u("transparent"):this,s=a[o.cache]||o.to(a._rgba),l=s.slice();return n=n[o.cache],h(o.props,function(e,r){var o=r.idx,a=s[o],u=n[o],d=_[r.type]||{};null!==u&&(null===a?l[o]=u:(d.mod&&(u-a>d.mod/2?a+=d.mod:a-u>d.mod/2&&(a-=d.mod)),l[o]=i((u-a)*t+a,r)))}),this[r](l)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),r=u(t)._rgba;return u(e.map(i,function(e,t){return(1-n)*r[t]+n*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),n=i.pop();return t&&i.push(~~(255*n)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,n=e[0]/255,r=e[1]/255,o=e[2]/255,a=e[3],s=Math.max(n,r,o),l=Math.min(n,r,o),u=s-l,d=s+l,_=.5*d;return t=l===s?0:n===s?60*(r-o)/u+360:r===s?60*(o-n)/u+120:60*(n-r)/u+240,i=0===u?0:.5>=_?u/d:u/(2-d),[Math.round(t)%360,i,_,null==a?1:a]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],n=e[2],o=e[3],a=.5>=n?n*(1+i):n+i-n*i,s=2*n-a;return[Math.round(255*r(s,a,t+1/3)),Math.round(255*r(s,a,t)),Math.round(255*r(s,a,t-1/3)),o]},h(d,function(n,r){var o=r.props,a=r.cache,l=r.to,d=r.from;u.fn[n]=function(n){if(l&&!this[a]&&(this[a]=l(this._rgba)),n===t)return this[a].slice();var r,s=e.type(n),_="array"===s||"object"===s?n:arguments,g=this[a].slice();return h(o,function(e,t){var n=_["object"===s?e:t.idx];null==n&&(n=g[t.idx]),g[t.idx]=i(n,t)}),d?(r=u(d(g)),r[a]=g,r):u(g)},h(o,function(t,i){u.fn[t]||(u.fn[t]=function(r){var o,a=e.type(r),l="alpha"===t?this._hsla?"hsla":"rgba":n,u=this[l](),d=u[i.idx];return"undefined"===a?d:("function"===a&&(r=r.call(this,d),a=e.type(r)),null==r&&i.empty?this:("string"===a&&(o=s.exec(r),o&&(r=d+parseFloat(o[2])*("+"===o[1]?1:-1))),u[i.idx]=r,this[l](u)))})})}),u.hook=function(t){var i=t.split(" ");h(i,function(t,i){e.cssHooks[i]={set:function(t,r){var o,a,s="";if("transparent"!==r&&("string"!==e.type(r)||(o=n(r)))){if(r=u(o||r),!g.rgba&&1!==r._rgba[3]){for(a="backgroundColor"===i?t.parentNode:t;(""===s||"transparent"===s)&&a&&a.style;)try{s=e.css(a,"backgroundColor"),a=a.parentNode}catch(l){}r=r.blend(s&&"transparent"!==s?s:"_default")}r=r.toRgbaString()}try{t.style[i]=r}catch(l){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=u(t.elem,i),t.end=u(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},u.hook(a),e.cssHooks.borderColor={expand:function(e){var t={};return h(["Top","Right","Bottom","Left"],function(i,n){t["border"+n+"Color"]=e}),t}},o=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),!function(e){function t(){var i=this===document?e(this):e(this).contents();i.mousemove(function(t){e.mlp={x:t.pageX,y:t.pageY}}),i.find("iframe").load(t)}e.mlp={x:0,y:0},e(t),e.fn.ismouseover=function(){var t=!1;return this.eq(0).each(function(){var i=e(this).is("iframe")?e(this).contents().find("body"):e(this),n=i.offset();t=n.left<=e.mlp.x&&n.left+i.outerWidth()>e.mlp.x&&n.top<=e.mlp.y&&n.top+i.outerHeight()>e.mlp.y}),t}}(jQuery);var g_ugYoutubeAPI=new UGYoutubeAPI,g_ugVimeoAPI=new UGVimeoAPI,g_ugHtml5MediaAPI=new UGHtml5MediaAPI,g_ugSoundCloudAPI=new UGSoundCloudAPI,g_ugWistiaAPI=new UGWistiaAPI;jQuery.fn.unitegallery=function(e){var t=jQuery(this),i="#"+t.attr("id");if(!e)var e={};var n=new UniteGalleryMain;n.run(i,e);var r=new UG_API(n);return r};
/*SC_GROUP_JS*/
if(typeof g_ugFunctions != "undefined")
	g_ugFunctions.registerTheme("tilesgrid");
else 
	jQuery(document).ready(function(){g_ugFunctions.registerTheme("tilesgrid")});


/**
 * Fixed tiles theme
 */
function UGTheme_tilesgrid(){

	var t = this;
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper; 
	var g_objThumbsGrid = new UGThumbsGrid(), g_lightbox = new UGLightbox();
	var g_functions = new UGFunctions(), g_objTileDesign = new UGTileDesign();
	var g_objBullets, g_objNavWrapper, g_objButtonLeft, g_objButtonRight, g_objPreloader;
	

	var g_options = {
			theme_gallery_padding: 0,				//padding from sides of the gallery
			theme_grid_align: "center",				//grid align
			theme_navigation_type: "bullets",		//bullets, arrows
			theme_arrows_margin_top: 20,			//the space between arrows and grid
			theme_space_between_arrows: 5,			//horizontal space between arrows
			theme_bullets_margin_top: 40,			//the space 
			theme_navigation_align: "center",		//center, left, right - horizontal align of the navigation
			theme_navigation_offset_hor: 0,			//horizontal offset of the navigation, according the align
			theme_bullets_color: "gray",			//gray, blue, brown, green, red - color of the bullets
			theme_auto_open:null					//auto open lightbox at start
	};
	
	var g_defaults = {
			gallery_width: "100%",
			
			tile_width: 180,
			tile_height: 150,
			
			grid_num_rows: 3,
			grid_padding: 10,
			
			tile_enable_border: true,
			tile_enable_shadow: true,
			
			tile_border_radius: 2,
			
			grid_space_between_cols: 20,
			grid_space_between_rows: 20,
			
			bullets_space_between: 12,
			grid_vertical_scroll_ondrag: true
	};
	
	
	//temp variables
	var g_temp = {
			handle: null		//interval handle
	};
	
	
	/**
	 * Init the theme
	 */
	function initTheme(gallery, customOptions){
		
		g_gallery = gallery;
		
		//set default options
		g_options = jQuery.extend(g_options, g_defaults);
		
		//set custom options
		g_options = jQuery.extend(g_options, customOptions);
		
		modifyOptions();
		
		//set gallery options
		g_gallery.setOptions(g_options);
		
		g_gallery.setFreestyleMode();
		
		g_objects = gallery.getObjects();
		
		//get some objects for local use
		g_objGallery = jQuery(gallery);		
		g_objWrapper = g_objects.g_objWrapper;
		
		//init objects
		g_lightbox.init(gallery, g_options);
		
		g_objThumbsGrid.init(gallery, g_options, true);

		g_objTileDesign = g_objThumbsGrid.getObjTileDesign();
	}
	
	
	/**
	 * modify options
	 */
	function modifyOptions(){
		
		if(!g_options.grid_num_rows)
			g_options.grid_num_rows = 9999;
		
		g_options.bullets_addclass = "ug-bullets-"+g_options.theme_bullets_color;
		
	}
	
	
	/**
	 * get gallery width available for the grid
	 */
	function getGalleryWidth(){
		var galleryWidth = g_gallery.getSize().width;
		galleryWidth -= g_options.theme_gallery_padding * 2;
		
		return(galleryWidth);
	}
	
	
	/**
	 * set gallery html elements
	 */
	function setHtml(){
		
		//init bullets (only after panes size estimation)				
		if(g_options.theme_navigation_type == "bullets"){
			
			g_objBullets = new UGBullets();
			
			var galleryWidth = getGalleryWidth();
			
			var numPanes = g_objThumbsGrid.getNumPanesEstimationByWidth(galleryWidth);
			
			var objOptions = g_gallery.getOptions();
			g_objBullets.init(g_gallery, objOptions, numPanes);			
			
		}
		
		//add html elements
		g_objWrapper.addClass("ug-theme-tilesfixed");
		
		g_objThumbsGrid.setHtml();
		
		if(g_objBullets)
			g_objBullets.appendHTML(g_objWrapper);
		
		if(g_options.theme_navigation_type == "arrows"){
			var htmlAdd = "<div class='ug-tile-navigation-wrapper' style='position:absolute'>";
			htmlAdd += "<div class='ug-button-tile-navigation ug-button-tile-left'></div>";
			htmlAdd += "<div class='ug-button-tile-navigation ug-button-tile-right'></div>";
			htmlAdd += "</div>";
			g_objWrapper.append(htmlAdd);
			
			g_objNavWrapper = g_objWrapper.children(".ug-tile-navigation-wrapper");
			
			g_objButtonLeft = g_objNavWrapper.children(".ug-button-tile-left");
			g_objButtonRight = g_objNavWrapper.children(".ug-button-tile-right");
			
			g_objButtonLeft.css("margin-right",g_options.theme_space_between_arrows+"px");
		}
		
		g_lightbox.putHtml();
		
		//add preloader
		g_objWrapper.append("<div class='ug-tiles-preloader ug-preloader-trans'></div>");
		g_objPreloader = g_objWrapper.children(".ug-tiles-preloader");
		g_objPreloader.fadeTo(0,0);
		
	}
	
	
	/**
	 * get height estimation by width
	 */
	function getHeightEstimation(galleryWidth){
		
		//put the placeholder before run. check the width
		var gridHeight = g_objThumbsGrid.getHeightEstimationByWidth(galleryWidth);
		var numPanes = g_objThumbsGrid.getNumPanesEstimationByWidth(galleryWidth);
		
		//add navigation height
		if(numPanes > 1){
			if(g_options.theme_navigation_type == "arrows"){
				gridHeight += g_options.theme_arrows_margin_top;
				gridHeight += 30;	//arrows size
			}
			else{
				gridHeight += g_options.theme_bullets_margin_top;
				gridHeight += 15;	//bullets size
			}
				
		}
	
		return(gridHeight);
	}
	
	
	/**
	 * actually run the theme
	 */
	function actualRun(){
		
		//get gallery width, set estimation height and get width again.
		var galleryWidth = getGalleryWidth();
		var totalHeight = getHeightEstimation(galleryWidth);
		g_objWrapper.height(totalHeight);
		var galleryWidth = getGalleryWidth();

		initEvents();
		
		//place preloader
		g_functions.placeElement(g_objPreloader, g_options.theme_grid_align, 50);
		
		g_objThumbsGrid.setWidth(galleryWidth);
		
		g_objThumbsGrid.run();
				
		g_lightbox.run();
		
		updateBullets();
		
		positionElements();
		
		
	}

	
	/**
	 * run the theme
	 */
	function runTheme(){
		
		setHtml();
		actualRun();
		
	}
	
	
	/**
	 * position elements
	 */
	function positionElements(){
		
		var objGallerySize = g_gallery.getSize();
		var g_objGridSize = g_objThumbsGrid.getSize();
		
		var gridElement = g_objThumbsGrid.getElement();
		g_functions.placeElement(gridElement, g_options.theme_grid_align, 0);
		
		g_objGridSize = g_objThumbsGrid.getSize();
		
		var galleryHeight = g_objGridSize.height;
		
		var numPanes = g_objThumbsGrid.getNumPanes();

		if(numPanes > 1){
			
			//position bullets
			if(g_objBullets){
				
				g_objBullets.getElement().show();
				
				var bulletsElement = g_objBullets.getElement();
				var bulletsWidth = g_objBullets.getBulletsWidth();
				
				//get bullets offset x (relative to the grid)
				var bulletsX = g_objGridSize.left + g_functions.getElementRelativePos(bulletsWidth, g_options.theme_navigation_align, g_options.theme_navigation_offset_hor, gridElement);
				
				g_functions.placeElement(bulletsElement, bulletsX, galleryHeight + g_options.theme_bullets_margin_top);
				
				var sizeBullets = g_functions.getElementSize(bulletsElement);
				galleryHeight = sizeBullets.bottom;
				
			}
			
			//position buttons
			if(g_objNavWrapper){
				
				g_objNavWrapper.show();
				
				var navX = g_objGridSize.left + g_functions.getElementRelativePos(g_objNavWrapper, g_options.theme_navigation_align, g_options.theme_navigation_offset_hor, gridElement);
								
				g_functions.placeElement(g_objNavWrapper, navX, galleryHeight + g_options.theme_arrows_margin_top);
				
				var sizeNav = g_functions.getElementSize(g_objNavWrapper);
				
				galleryHeight = sizeNav.bottom;
			}
			
		}else{	//if only one pame, hide the navigation
			
			if(g_objNavWrapper)
				g_objNavWrapper.hide();
			
			if(g_objBullets)
				g_objBullets.getElement().hide();
		}
		
		g_objWrapper.height(galleryHeight);
	}
		
	
	/**
	 * on tile click - open lightbox
	 */
	function onTileClick(data, objTile){
		
		objTile = jQuery(objTile);		
		var index = objTile.index();
		
		g_lightbox.open(index);
	}

	
	/**
	 * update the bullets
	 */
	function updateBullets(){
		
		//update bullets
		if(!g_objBullets)
			return(false);
		
		numPanes = g_objThumbsGrid.getNumPanes();
		g_objBullets.updateNumBullets(numPanes);
		g_objBullets.setActive(0);
	}
	
	
	/**
	 * on gallery size change - resize the theme.
	 */
	function onSizeChange(){
		
		var galleryWidth = getGalleryWidth();
		
		g_objThumbsGrid.setWidth(galleryWidth);
		g_objThumbsGrid.run();
		
		updateBullets();
		
		setTimeout(positionElements, 500);
		
	}


	/**
	 * on tile click - open lightbox
	 */
	function onTileClick(data, objTile){
		
		objTile = jQuery(objTile);		
		
		var objItem = g_objTileDesign.getItemByTile(objTile);
		var index = objItem.index;		
			
		g_lightbox.open(index);
	}
	
	/**
	 * before items request: hide items, show preloader
	 */
	function onBeforeReqestItems(){
		
		if(g_objNavWrapper)
			g_objNavWrapper.hide();
	
		if(g_objThumbsGrid)
			g_objThumbsGrid.getElement().hide();
		
		//show preloader:
		g_objPreloader.fadeTo(0,1);
	}
	
	
	/**
	 * open lightbox at start if needed
	 */
	function onLightboxInit(){

		if(g_options.theme_auto_open !== null){
			g_lightbox.open(g_options.theme_auto_open);
			g_options.theme_auto_open = null;
		}
		
	}
	
	
	/**
	 * init buttons functionality and events
	 */
	function initEvents(){
		
		g_objGallery.on(g_gallery.events.SIZE_CHANGE, onSizeChange);
		g_objGallery.on(g_gallery.events.GALLERY_BEFORE_REQUEST_ITEMS, onBeforeReqestItems);
		
		if(g_objBullets)
			g_objThumbsGrid.attachBullets(g_objBullets);		
		
		if(g_objNavWrapper){
			g_objThumbsGrid.attachNextPaneButton(g_objButtonRight);
			g_objThumbsGrid.attachPrevPaneButton(g_objButtonLeft);
		}
		
		jQuery(g_objTileDesign).on(g_objTileDesign.events.TILE_CLICK, onTileClick);
		
		jQuery(g_lightbox).on(g_lightbox.events.LIGHTBOX_INIT, onLightboxInit);
	}
	
	
	/**
	 * destroy the theme
	 */
	this.destroy = function(){
				
		g_objGallery.off(g_gallery.events.SIZE_CHANGE);
		g_objGallery.off(g_gallery.events.GALLERY_BEFORE_REQUEST_ITEMS);

		jQuery(g_objTileDesign).off(g_objTileDesign.events.TILE_CLICK);
		
		if(g_objBullets)
			jQuery(g_objBullets).off(g_objBullets.events.BULLET_CLICK);

		jQuery(g_lightbox).off(g_lightbox.events.LIGHTBOX_INIT);
		
		g_objThumbsGrid.destroy();
		g_lightbox.destroy();
		
	}

	
	/**
	 * run the theme setting
	 */
	this.run = function(){
		
		runTheme();
	}
	
	
	/**
	 * init 
	 */
	this.init = function(gallery, customOptions){
				
		initTheme(gallery, customOptions);
		
	}
	
	
};
/*SC_GROUP_JS*/
				window.onload = function(e) {
					if(typeof ugCheckForErrors == "undefined"){
						document.getElementById("unitegallery_1_1").innerHTML = "<span style='color:red'>Unite Gallery Error - gallery js and css files not included</span>";}
					else{ ugCheckForErrors("unitegallery_1_1", "jquery");}
				};
				var ugapi1;
				jQuery(document).ready(function(){
					var objUGParams = {
						gallery_theme:"tilesgrid",
								gallery_width:"100%",
								tile_space_between_icons:"0",
								grid_num_rows:9999

					};
					if(ugCheckForErrors('#unitegallery_1_1', 'cms'))
						ugapi1 = jQuery('#unitegallery_1_1').unitegallery(objUGParams);
				});
/*SC_GROUP_JS*/
(function($) {
	// Back to top
	$('#back-to-top').on('click', function(){
		$("html, body").animate({scrollTop: 0}, 500);
		return false;
	});
})(jQuery);
