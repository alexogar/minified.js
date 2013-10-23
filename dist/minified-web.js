if(/^u/.test(typeof define)){var N={};this.define=function(a,b){N[a]=b()},this.require=function(a){return N[a]}}define("minified",function(){function a(a){return a!=B?""+a:""}function b(a){return"string"==typeof a}function c(a){return a&&a.nodeType}function d(a){return a}function e(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function f(a,b){var c=[];return i(a,function(a,d){b(a,d)&&c.push(a)}),c}function g(a,b,c){var d=[];return a(b,function(a,b){i(c(a,b),function(a){d.push(a)})}),d}function h(b,c,d){return a(b).replace(c,d||"")}function i(a,b){if(k(a))for(var c=0;c<a.length;c++)b(a[c],c);else a!=B&&b(a,0);return a}function j(a){return"function"==typeof a&&!a.item}function k(a){return a&&a.length!=B&&!b(a)&&!c(a)&&!j(a)&&a!==E}function l(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):C}}function m(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function n(a,b){E.setTimeout(a,b||0)}function o(a){return parseFloat(h(a,/^[^\d-]+/))}function p(a){return a.Mid=a.Mid||++G}function q(a,b){var d,e=[],f={};return i(a,function(a){i(b(a),function(a){c(a)&&!f[d=p(a)]&&(e.push(a),f[d]=C)})}),e}function r(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:B},c=a.get(b);return a.set(b),b=a.get("$height",C),a.set(c),b}function s(a){a()}function t(a){H?H.push(a):n(a)}function u(a,b,c){return a=w(F.createElement(a)),k(b)||b!=B&&"object"!=typeof b?a.add(b):a.set(b).add(c)}function v(a){return g(i,a,function(a){var d,e;return b(a)?a:k(a)?v(a):1==(d=c(a))?(e={},i(a.attributes,function(a){var b=a.name;"id"!=b&&(e["@"+b]=a.value)}),u(a.tagName,e,v(a.childNodes))):5>d?a.data:B})}function w(a,b,c){return j(a)?t(a):new A(x(a,b,c))}function x(a,c,d){function e(a){return a=g(i,a,function b(a){return k(a)?g(i,a,b):a}),h?f(a,function(a){for(;a=a.parentNode;)if(a==h||d)return a==h}):a}var h;return c&&1!=(c=x(c)).length?q(c,function(b){return x(a,b,d)}):(h=c&&c[0],b(a)?(c=(h||F).querySelectorAll(a),d?e(c):c):e(a))}function y(a,d){var e,f,g,h={};return j(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||b(a)&&(e=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(f=l(e&&e[1],"nodeName"),g=l(e&&e[2],"className"),function(a){return 1==c(a)&&f(a)&&g(a)}):d?function(b){return w(a,d).find(b)!=B}:(w(a).each(function(a){h[p(a)]=C}),function(a){return h[p(a)]})}function z(){function a(a,e){b==B&&(b=a,c=e,n(function(){i(d,s)}))}var b,c=[],d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,j(d)?(f=d.apply(B,c),f&&j(f.then)?f.then(function(a){g(C,[a])},function(a){g(D,[a])}):g(C,[f])):g(b,c)}catch(h){g(D,[h])}}var g=z();return b!=B?n(f):d.push(f),g};return a.error=function(a){return e(0,a)},a}function A(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var B=null,C=!0,D=!1,E=this,F=document,G=1,H=[],I=[],J=E.requestAnimationFrame||function(a){n(a,33)};return e({each:function(a){return i(this,a)},filter:function(a){return new A(f(this,a))},collect:function(a){return new A(g(i,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&d>b})},find:function(a,b){for(var c,d=j(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d(this[e],e))!=B)return c},remove:function(){i(this,function(a){a.parentNode.removeChild(a)})},text:function(){function a(b){var d=c(b);return 1==d?g(i,b.childNodes,a):5>d?b.data:B}return g(i,this,a).join("")},trav:function(a,b,c){var d="number"==typeof b,e=y(d?B:b),f=d?b:c;return new A(q(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},select:function(a,b){return w(a,this,b)},is:function(a){var b=y(a);return!this.find(function(a){return b(a)?void 0:C})},only:function(a){return this.filter(y(a))},get:function(a,c){var d,f,g,j=this,l=j[0];return l?b(a)?(f=h(h(a,/^%/,"data-"),/^[$@]+/),d="$"==a?l.className:"$$"==a?l.getAttribute("style"):!/^\$\$/.test(a)||"hidden"!=l.style.visibility&&"none"!=l.style.display?"$$fade"==a?isNaN(d=o(l.style.opacity))?1:d:"$$slide"==a?j.get("$height"):/^\$[^$]/.test(a)?E.getComputedStyle(l,B).getPropertyValue(h(f,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^[@%]/.test(a)?l.getAttribute(f):l[f]:0,c?o(d):d):(g={},(k(a)?i:e)(a,function(a){g[a]=j.get(a,c)}),g):void 0},set:function(a,c){function d(a,b,c){c!=B?a.setAttribute(b,c):a.removeAttribute(b)}var f,g=this;return void 0!==c?"$$fade"==a||"$$slide"==a?g.set({$visibility:0<(f=o(c))?"visible":"hidden",$display:"block"}).set("$$fade"==a?{$opacity:f}:{$height:/px/.test(c)?c:function(a,b,c){return f*(f&&r(w(c)))+"px"},$overflow:"hidden"}):i(g,function(b,e){var f=h(h(a,/^%/,"data-"),/^[@$]+/),g=b.className||"",k=/^\$/.test(a)?b.style:b,l=j(c)?c(w(b).get(a),e,b):c;"$"==a?l!=B&&(i(l.split(/\s+/),function(a){var b=h(a,/^[+-]/),c=g;g=h(g,RegExp("(^|\\s)"+b+"(?=$|\\s)","i")),(/^\+/.test(a)||b==a&&c==g)&&(g+=" "+b)}),b.className=h(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?d(b,"style",l):"$$scrollX"==a?b.scroll(l,b.scrollY):"$$scrollY"==a?b.scroll(b.scrollX,l):/^[@%]/.test(a)?d(k,f,l):k[f]=l}):b(a)||j(a)?g.set("$",a):e(a,function(a,b){g.set(a,b)}),g},add:function(a,b){return this.each(function(d,e){var f;!function g(a){k(a)?i(a,g):j(a)?g(a(d,e)):a!=B&&(a=c(a)?a:F.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,d,d.parentNode):d.appendChild(a),f=a)}(e&&!j(a)?v(a):a)})},fill:function(a){return this.each(function(a){w(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new A(v(this))},animate:function(a,b,c){var d,f=this,g=[],h=z(),k=0;return h.stop=function(){return h(D),d(),k},b=b||500,i(f,function(b,d){var f,h=w(b),i={};e(f=h.get(a),function(c,e){var f=a[c];i[c]=j(f)?f(e,d,b):"$$slide"==c?a[c]*r(h)+"px":f}),g.push(h.dial(f,i,c))}),d=w.loop(function(a){a>=b||0>a?(k=b,d(),h(C,[f])):k=a,i(g,function(a){a(k/b)})}),h},dial:function(b,c,d){function f(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(h(a,/[^\d,]+/g).split(",")[b])}var g=this,i=j(d)?d:function(a,b,c){return a+c*(b-a)*(d+(1-d)*c*(3-2*c))};return d=d||0,function(d){e(b,function(b,e){var j=c[b],k=0;g.set(b,0>=d?e:d>=1?j:/^#|rgb\(/.test(j)?"rgb("+Math.round(i(f(e,k),f(j,k++),d))+","+Math.round(i(f(e,k),f(j,k++),d))+","+Math.round(i(f(e,k),f(j,k++),d))+")":h(j,/-?[\d.]+/,a(i(o(e),o(j),d))))})}},toggle:function(a,b,c,d){var e,f,g=this,i=D,j=/\b(?=\w)/g;return b?g.set(a)&&function(h){h!==i&&(f=(i=h===C||h===D?h:!i)?b:a,c?(e=g.animate(f,e?e.stop():c,d)).d(function(){e=B}):g.set(f)&&void 0)}:g.toggle(h(a,j,"-"),h(a,j,"+"))},values:function(b){var c=b||{};return this.each(function(b){var e=b.name,f=a(b.value);if(/form/i.test(b.tagName))for(e=0;e<b.elements.length;e++)w(b.elements[e]).values(c);else!e||/kbox|dio/i.test(b.type)&&!b.checked||(c[e]=null==c[e]?f:g(i,[c[e],f],d))}),c},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,c,d,e,f){return j(c)?this.on(null,a,c,d,f):b(e)?this.on(a,c,d,null,e):this.each(function(b,g){i(a?x(a,b):b,function(a){i(c.split(/\s/),function(b){function c(a,b,c){return j==a&&i(b,c)}function i(b,c){var h,i,j=!f,l=f?c||b.target:a;if(f)for(i=y(f,a);l&&l!=a&&!j;)i(l)?j=C:l=l.parentNode;return j&&(h=(!d.apply(l,e||[b,g])||""==k)&&"|"!=k)&&!c&&(b.preventDefault(),b.stopPropagation()),h}var j=h(b,/[?|]/),k=h(b,/[^?|]/g);(a.M=a.M||[]).push(c),(d.M=d.M||[]).push(function(){a.removeEventListener(j,i,D),m(a.M,c)}),a.addEventListener(j,i,D)})})})},onOver:function(a){var b=this,c=[];return b.on("|mouseover |mouseout",function(d,e){var f="mouseout"!=d.type,g=d.relatedTarget||d.toElement;c[e]===f||!f&&g&&(g==b[e]||w(g).trav("parentNode",b[e]).length)||(c[e]=f,a.call(this,f,e,d))})},onChange:function(a){var b=[];each(this,function(c,d){function e(d,e,f){b[f]=c[e],w(c).on(d,function(){var d=c[e];d!=b[f]&&(a.call(this,d,f),b[f]=d)})}/kbox|dio/i.test(c.type)?e("|click","checked",d):e("|input |change |keyup","value",d)})},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)i(e.M,function(e){d=d||e(a,b,c)}),e=e.parentNode})}},function(a,b){A.prototype[a]=b}),e({request:function(d,f,h,j,k,l){var m,n=h,o=0,p=z();try{m=new XMLHttpRequest,h!=B&&(j=j||{},b(h)||c(h)||(n=g(e,h,function(a,b){return g(i,b,function(b){return encodeURIComponent(a)+(b!=B?"="+encodeURIComponent(b):"")})}).join("&")),/post/i.test(d)?c(h)||b(h)||j["Content-Type"]||(j["Content-Type"]="application/x-www-form-urlencoded"):(f+="?"+n,n=B)),m.open(d,f,C,k,l),e(j,function(a,b){m.setRequestHeader(a,b)}),m.onreadystatechange=function(){4!=m.readyState||o++||(200==m.status?p(C,[m.responseText,m.responseXML]):p(D,[m.status,m.statusText,m.responseText]))},m.send(n)}catch(q){o||p(D,[0,B,a(q)])}return p},toJSON:E.JSON&&JSON.stringify,parseJSON:E.JSON&&JSON.parse,ready:t,loop:function(a){var b={b:a,c:(new Date).getTime(),a:function(){m(I,b)}};return 2>I.push(b)&&function c(){i(I,function(a){a.b(Math.max(0,(new Date).getTime()-a.c),a.a)}).length&&J(c)}(),b.a},off:function(a){i(a.M,s),a.M=B}},function(a,b){w[a]=b}),F.addEventListener("DOMContentLoaded",function(){i(H,s),H=B},D),{$:w,$$:function(a){return x(a)[0]},EE:u,M:A}});