(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();var lt,E,cr,F,ds,hr,ur,$t,Je,Ue,pr,Ot,Pt,Ct,st={},rt=[],pi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,dt=Array.isArray;function B(t,e){for(var s in e)t[s]=e[s];return t}function Lt(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function fi(t,e,s){var r,i,n,a={};for(n in e)n=="key"?r=e[n]:n=="ref"?i=e[n]:a[n]=e[n];if(arguments.length>2&&(a.children=arguments.length>3?lt.call(arguments,2):s),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)a[n]===void 0&&(a[n]=t.defaultProps[n]);return Ke(t,a,r,i,null)}function Ke(t,e,s,r,i){var n={type:t,props:e,key:s,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++cr,__i:-1,__u:0};return i==null&&E.vnode!=null&&E.vnode(n),n}function L(t){return t.children}function Ze(t,e){this.props=t,this.context=e}function le(t,e){if(e==null)return t.__?le(t.__,t.__i+1):null;for(var s;e<t.__k.length;e++)if((s=t.__k[e])!=null&&s.__e!=null)return s.__e;return typeof t.type=="function"?le(t):null}function mi(t){if(t.__P&&t.__d){var e=t.__v,s=e.__e,r=[],i=[],n=B({},e);n.__v=e.__v+1,E.vnode&&E.vnode(n),Wt(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[s]:null,r,s??le(e),!!(32&e.__u),i),n.__v=e.__v,n.__.__k[n.__i]=n,br(r,n,i),e.__e=e.__=null,n.__e!=s&&fr(n)}}function fr(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),fr(t)}function cs(t){(!t.__d&&(t.__d=!0)&&F.push(t)&&!it.__r++||ds!=E.debounceRendering)&&((ds=E.debounceRendering)||hr)(it)}function it(){try{for(var t,e=1;F.length;)F.length>e&&F.sort(ur),t=F.shift(),e=F.length,mi(t)}finally{F.length=it.__r=0}}function mr(t,e,s,r,i,n,a,l,o,h,p){var u,c,f,_,k,w,m=r&&r.__k||rt,g=e.length;for(o=_i(s,e,m,o,g),u=0;u<g;u++)(f=s.__k[u])!=null&&(c=f.__i!=-1&&m[f.__i]||st,f.__i=u,w=Wt(t,f,c,i,n,a,l,o,h,p),_=f.__e,f.ref&&c.ref!=f.ref&&(c.ref&&qt(c.ref,null,f),p.push(f.ref,f.__c||_,f)),k==null&&_!=null&&(k=_),4&f.__u?(o=_r(f,o,t),c.__e&&(c.__e=null)):typeof f.type=="function"&&w!==void 0?o=w:_&&(o=_.nextSibling),f.__u&=-7);return s.__e=k,o}function _i(t,e,s,r,i){var n,a,l,o,h,p=s.length,u=p,c=0;for(t.__k=new Array(i),n=0;n<i;n++)(a=e[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=t.__k[n]=Ke(null,a,null,null,null):dt(a)?a=t.__k[n]=Ke(L,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=t.__k[n]=Ke(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):t.__k[n]=a,o=n+c,a.__=t,a.__b=t.__b+1,l=null,(h=a.__i=gi(a,s,o,u))!=-1&&(u--,(l=s[h])&&(l.__u|=2)),l==null||l.__v==null?(h==-1&&(i>p?c--:i<p&&c++),typeof a.type!="function"&&(a.__u|=4)):h!=o&&(h==o-1?c--:h==o+1?c++:(h>o?c--:c++,a.__u|=4))):t.__k[n]=null;if(u)for(n=0;n<p;n++)(l=s[n])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=le(l)),vr(l,l));return r}function _r(t,e,s){var r,i;if(typeof t.type=="function"){for(r=t.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=t,e=_r(r[i],e,s));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=le(t)),e=s.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function gi(t,e,s,r){var i,n,a,l=t.key,o=t.type,h=e[s],p=h!=null&&(2&h.__u)==0;if(h===null&&l==null||p&&l==h.key&&o==h.type)return s;if(r>(p?1:0)){for(i=s-1,n=s+1;i>=0||n<e.length;)if((h=e[a=i>=0?i--:n++])!=null&&(2&h.__u)==0&&l==h.key&&o==h.type)return a}return-1}function hs(t,e,s){e[0]=="-"?t.setProperty(e,s??""):t[e]=s==null?"":typeof s!="number"||pi.test(e)?s:s+"px"}function je(t,e,s,r,i){var n,a;e:if(e=="style")if(typeof s=="string")t.style.cssText=s;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)s&&e in s||hs(t.style,e,"");if(s)for(e in s)r&&s[e]==r[e]||hs(t.style,e,s[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(pr,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=s,s?r?s[Ue]=r[Ue]:(s[Ue]=Ot,t.addEventListener(e,n?Ct:Pt,n)):t.removeEventListener(e,n?Ct:Pt,n);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=s??"";break e}catch{}typeof s=="function"||(s==null||s===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&s==1?"":s))}}function us(t){return function(e){if(this.l){var s=this.l[e.type+t];if(e[Je]==null)e[Je]=Ot++;else if(e[Je]<s[Ue])return;return s(E.event?E.event(e):e)}}}function Wt(t,e,s,r,i,n,a,l,o,h){var p,u,c,f,_,k,w,m,g,P,R,v,A,M,ue,xe,O=e.type;if(e.constructor!==void 0)return null;128&s.__u&&(o=!!(32&s.__u),n=[l=e.__e=s.__e]),(p=E.__b)&&p(e);e:if(typeof O=="function"){u=a.length;try{if(g=e.props,P=O.prototype&&O.prototype.render,R=(p=O.contextType)&&r[p.__c],v=p?R?R.props.value:p.__:r,s.__c?m=(c=e.__c=s.__c).__=c.__E:(P?e.__c=c=new O(g,v):(e.__c=c=new Ze(g,v),c.constructor=O,c.render=$i),R&&R.sub(c),c.state||(c.state={}),c.__n=r,f=c.__d=!0,c.__h=[],c._sb=[]),P&&c.__s==null&&(c.__s=c.state),P&&O.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=B({},c.__s)),B(c.__s,O.getDerivedStateFromProps(g,c.__s))),_=c.props,k=c.state,c.__v=e,f)P&&O.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),P&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(P&&O.getDerivedStateFromProps==null&&g!==_&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,v),e.__v==s.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,v)===!1){e.__v!=s.__v&&(c.props=g,c.state=c.__s,c.__d=!1),e.__e=s.__e,e.__k=s.__k,e.__k.some(function(C){C&&(C.__=e)}),rt.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&a.push(c),l=le(s);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,v),P&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(_,k,w)})}if(c.context=v,c.props=g,c.__P=t,c.__e=!1,A=E.__r,M=0,P)c.state=c.__s,c.__d=!1,A&&A(e),p=c.render(c.props,c.state,c.context),rt.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,A&&A(e),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++M<25);c.state=c.__s,c.getChildContext!=null&&(r=B(B({},r),c.getChildContext())),P&&!f&&c.getSnapshotBeforeUpdate!=null&&(w=c.getSnapshotBeforeUpdate(_,k)),ue=p!=null&&p.type===L&&p.key==null?$r(p.props.children):p,l=mr(t,dt(ue)?ue:[ue],e,s,r,i,n,a,l,o,h),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),m&&(c.__E=c.__=null)}catch(C){if(a.length=u,e.__v=null,o||n!=null){if(C.then){for(e.__u|=o?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;n!=null&&(n[n.indexOf(l)]=null),e.__e=l}else if(n!=null)for(xe=n.length;xe--;)Lt(n[xe])}else e.__e=s.__e;e.__k==null&&(e.__k=s.__k||[]),C.then||gr(e),E.__e(C,e,s)}}else n==null&&e.__v==s.__v?(e.__k=s.__k,e.__e=s.__e):l=e.__e=bi(s.__e,e,s,r,i,n,a,o,h);return(p=E.diffed)&&p(e),128&e.__u?void 0:l}function gr(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(gr))}function br(t,e,s){for(var r=0;r<s.length;r++)qt(s[r],s[++r],s[++r]);E.__c&&E.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(n){n.call(i)})}catch(n){E.__e(n,i.__v)}})}function $r(t){return typeof t!="object"||t==null||t.__b>0?t:dt(t)?t.map($r):t.constructor!==void 0?null:B({},t)}function bi(t,e,s,r,i,n,a,l,o){var h,p,u,c,f,_,k,w=s.props||st,m=e.props,g=e.type;if(g=="svg"?i="http://www.w3.org/2000/svg":g=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!g&&(g?f.localName==g:f.nodeType==3)){t=f,n[h]=null;break}}if(t==null){if(g==null)return document.createTextNode(m);t=document.createElementNS(i,g,m.is&&m),l&&(E.__m&&E.__m(e,n),l=!1),n=null}if(g==null)w===m||l&&t.data==m||(t.data=m);else{if(n=g=="textarea"&&m.defaultValue!=null?null:n&&lt.call(t.childNodes),!l&&n!=null)for(w={},h=0;h<t.attributes.length;h++)w[(f=t.attributes[h]).name]=f.value;for(h in w)f=w[h],h=="dangerouslySetInnerHTML"?u=f:h=="children"||h in m||h=="value"&&"defaultValue"in m||h=="checked"&&"defaultChecked"in m||je(t,h,null,f,i);for(h in m)f=m[h],h=="children"?c=f:h=="dangerouslySetInnerHTML"?p=f:h=="value"?_=f:h=="checked"?k=f:l&&typeof f!="function"||w[h]===f||je(t,h,f,w[h],i);if(p)l||u&&(p.__html==u.__html||p.__html==t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(u&&(t.innerHTML=""),mr(e.type=="template"?t.content:t,dt(c)?c:[c],e,s,r,g=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,a,n?n[0]:s.__k&&le(s,0),l,o),n!=null)for(h=n.length;h--;)Lt(n[h]);l&&g!="textarea"||(h="value",g=="progress"&&_==null?t.removeAttribute("value"):_!=null&&(_!==t[h]||g=="progress"&&!_||g=="option"&&_!=w[h])&&je(t,h,_,w[h],i),h="checked",k!=null&&k!=t[h]&&je(t,h,k,w[h],i))}return t}function qt(t,e,s){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(i){E.__e(i,s)}}function vr(t,e,s){var r,i;if(E.unmount&&E.unmount(t),(r=t.ref)&&(r.current&&r.current!=t.__e||qt(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){E.__e(n,e)}r.base=r.__P=r.__n=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&vr(r[i],e,s||typeof t.type!="function");s||Lt(t.__e),t.__c=t.__=t.__e=void 0}function $i(t,e,s){return this.constructor(t,s)}function vi(t,e,s){var r,i,n,a;e==document&&(e=document.documentElement),E.__&&E.__(t,e),i=(r=!1)?null:e.__k,n=[],a=[],Wt(e,t=e.__k=fi(L,null,[t]),i||st,st,e.namespaceURI,i?null:e.firstChild?lt.call(e.childNodes):null,n,i?i.__e:e.firstChild,r,a),br(n,t,a),t.props.children=null}lt=rt.slice,E={__e:function(t,e,s,r){for(var i,n,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),a=i.__d),a)return i.__E=i}catch(l){t=l}throw t}},cr=0,Ze.prototype.setState=function(t,e){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B({},this.state),typeof t=="function"&&(t=t(B({},s),this.props)),t&&B(s,t),t!=null&&this.__v&&(e&&this._sb.push(e),cs(this))},Ze.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),cs(this))},Ze.prototype.render=L,F=[],hr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ur=function(t,e){return t.__v.__b-e.__v.__b},it.__r=0,$t=Math.random().toString(8),Je="__d"+$t,Ue="__a"+$t,pr=/(PointerCapture)$|Capture$/i,Ot=0,Pt=us(!1),Ct=us(!0);var yi=0;function d(t,e,s,r,i,n){e||(e={});var a,l,o=e;if("ref"in o)for(l in o={},e)l=="ref"?a=e[l]:o[l]=e[l];var h={type:t,props:o,key:s,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--yi,__i:-1,__u:0,__source:i,__self:n};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)o[l]===void 0&&(o[l]=a[l]);return E.vnode&&E.vnode(h),h}var be,T,vt,ps,Oe=0,yr=[],U=E,fs=U.__b,ms=U.__r,_s=U.diffed,gs=U.__c,bs=U.unmount,$s=U.__;function ct(t,e){U.__h&&U.__h(T,t,Oe||e),Oe=0;var s=T.__H||(T.__H={__:[],__h:[]});return t>=s.__.length&&s.__.push({}),s.__[t]}function S(t){return Oe=1,wi(Ar,t)}function wi(t,e,s){var r=ct(be++,2);if(r.t=t,!r.__c&&(r.__=[Ar(void 0,e),function(l){var o=r.__N?r.__N[0]:r.__[0],h=r.t(o,l);o!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=T,!T.__f)){var i=function(l,o,h){if(!r.__c.__H)return!0;var p=!1,u=r.__c.props!==l;if(r.__c.__H.__.some(function(f){if(f.__N){p=!0;var _=f.__[0];f.__=f.__N,f.__N=void 0,_!==f.__[0]&&(u=!0)}}),n){var c=n.call(this,l,o,h);return p?c||u:c}return!p||u};T.__f=!0;var n=T.shouldComponentUpdate,a=T.componentWillUpdate;T.componentWillUpdate=function(l,o,h){if(this.__e){var p=n;n=void 0,i(l,o,h),n=p}a&&a.call(this,l,o,h)},T.shouldComponentUpdate=i}return r.__N||r.__}function q(t,e){var s=ct(be++,3);!U.__s&&wr(s.__H,e)&&(s.__=t,s.u=e,T.__H.__h.push(s))}function $e(t){return Oe=5,ht(function(){return{current:t}},[])}function ht(t,e){var s=ct(be++,7);return wr(s.__H,e)&&(s.__=t(),s.__H=e,s.__h=t),s.__}function H(t,e){return Oe=8,ht(function(){return t},e)}function zt(){var t=ct(be++,11);if(!t.__){for(var e=T.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var s=e.__m||(e.__m=[0,0]);t.__="P"+s[0]+"-"+s[1]++}return t.__}function Ai(){for(var t;t=yr.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(Ge),e.__h.some(Mt),e.__h=[]}catch(s){e.__h=[],U.__e(s,t.__v)}}}U.__b=function(t){T=null,fs&&fs(t)},U.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),$s&&$s(t,e)},U.__r=function(t){ms&&ms(t),be=0;var e=(T=t.__c).__H;e&&(vt===T?(e.__h=[],T.__h=[],e.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(e.__h.some(Ge),e.__h.some(Mt),e.__h=[],be=0)),vt=T},U.diffed=function(t){_s&&_s(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(yr.push(e)!==1&&ps===U.requestAnimationFrame||((ps=U.requestAnimationFrame)||Si)(Ai)),e.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),vt=T=null},U.__c=function(t,e){e.some(function(s){try{s.__h.some(Ge),s.__h=s.__h.filter(function(r){return!r.__||Mt(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],U.__e(r,s.__v)}}),gs&&gs(t,e)},U.unmount=function(t){bs&&bs(t);var e,s=t.__c;s&&s.__H&&(s.__H.__.some(function(r){try{Ge(r)}catch(i){e=i}}),s.__H=void 0,e&&U.__e(e,s.__v))};var vs=typeof requestAnimationFrame=="function";function Si(t){var e,s=function(){clearTimeout(r),vs&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(s,35);vs&&(e=requestAnimationFrame(s))}function Ge(t){var e=T,s=t.__c;typeof s=="function"&&(t.__c=void 0,s()),T=e}function Mt(t){var e=T;t.__c=t.__(),T=e}function wr(t,e){return!t||t.length!==e.length||e.some(function(s,r){return s!==t[r]})}function Ar(t,e){return typeof e=="function"?e(t):e}function ki({tabs:t,active:e,onSelect:s,label:r="Sections",class:i}){return d("nav",{class:i?`tab-bar ${i}`:"tab-bar",role:"tablist","aria-label":r,children:t.map(n=>d("button",{type:"button",role:"tab",id:`tab-${n.id}`,"aria-selected":n.id===e,"aria-controls":`panel-${n.id}`,class:n.id===e?"active":void 0,onClick:()=>s(n.id),children:n.label},n.id))})}function Ei(){const t=$e(null);return q(()=>{const e=document.createElement("edc-config-backup-page");return e.setAttribute("device-name","Evelyn"),e.setAttribute("archive-file-name","evelyn-config.zip"),e.setAttribute("bin-file-name","config.bin"),t.current?.append(e),()=>e.remove()},[]),d("div",{ref:t})}const b={mqtt:{hostMax:63,portMin:1,portMax:65535,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicPrefixMax:63},modbus:{speeds:[1200,2400,4800,9600,19200,38400,57600,115200],addressMin:1,addressMax:254}},xi=["local_area_backlight","yard_fence_backlight","local_area_garland","left_lawn_watering","local_area_right_watering"],Sr="Device returned an empty response. Check the device logs and try again.",ut="Device returned an empty response.",kr="Could not reach the device. Check that you are connected to its network and try again.",Qe={};function Er(){return{ok:!1,message:kr}}function Pi(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const s=e.message;if(typeof s=="string"&&s)return s}}catch{}}async function xr(t){let e=`Request failed (HTTP ${t.status}).`;try{const s=await t.text();s&&(e=Pi(s)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function Ee(t,e){let s;try{s=await fetch(t,{headers:{Accept:"application/json"}})}catch{return Er()}if(!s.ok)return xr(s);let r;try{r=await s.text()}catch{return{ok:!1,status:s.status,message:kr}}if(!r.trim())return{ok:!1,status:s.status,message:e};try{return{ok:!0,data:JSON.parse(r)}}catch{return{ok:!1,status:s.status,message:e}}}async function Pr(t,e){let s;try{s=await fetch(t,e)}catch{return Er()}if(!s.ok)return xr(s);let r="";try{r=await s.text()}catch{return{ok:!0,data:Qe}}if(!r.trim())return{ok:!0,data:Qe};try{const i=JSON.parse(r);return{ok:!0,data:i&&typeof i=="object"?i:Qe}}catch{return{ok:!0,data:Qe}}}function Bt(t,e){return Pr(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}function fe(t,e,s,r=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!r&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>s)throw new Error(`${e} must be at most ${s} characters.`);return t}function Tt(t,e,s,r){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(t<s||t>r)throw new Error(`${e} must be between ${s} and ${r}.`);return t}function Ci(t,e,s){if(!s.includes(t))throw new Error(`${e} must be one of: ${s.join(", ")}.`);return t}function Mi(){return Ee("/api/status",ut)}function Cr(){return Ee("/healthcheck/healty",ut)}function Ti(){return Ee("/healthcheck/ready",ut)}function Ui(){return Ee("/api/devices",ut)}function Ni(){return Ee("/api/settings/modbus",Sr)}function Di(){return Ee("/api/settings/mqtt",Sr)}function Ri(t){const e=Ci(t.modbusSpeed,"Modbus speed",b.modbus.speeds),s=Tt(t.modbusAddressWBMR6C,"WB-MR6C address",b.modbus.addressMin,b.modbus.addressMax),r=Tt(t.modbusAddressQDY30A,"QDY30A address",b.modbus.addressMin,b.modbus.addressMax),i=new URLSearchParams;return i.set("modbusSpeed",String(e)),i.set("modbusAddressWBMR6C",String(s)),i.set("modbusAddressQDY30A",String(r)),Bt("/api/settings/modbus",i)}function Hi(t){const e=fe(t.host,"MQTT host",b.mqtt.hostMax),s=Tt(t.port,"MQTT port",b.mqtt.portMin,b.mqtt.portMax),r=fe(t.login,"MQTT login",b.mqtt.loginMax,!0),i=fe(t.password,"MQTT password",b.mqtt.passwordMax,!0),n=fe(t.haDiscoveryPrefix,"HA discovery prefix",b.mqtt.haDiscoveryPrefixMax),a=fe(t.topicPrefix,"MQTT topic prefix",b.mqtt.topicPrefixMax);if(a.startsWith("/")||a.endsWith("/")||a.includes(" "))throw new Error('MQTT topic prefix must not start or end with "/" or contain spaces.');const l=new URLSearchParams;return l.set("host",e),l.set("port",String(s)),l.set("login",r),l.set("password",i),l.set("haDiscoveryPrefix",n),l.set("mqttIsHADiscovery",t.mqttIsHADiscovery?"true":"false"),l.set("topicPrefix",a),Bt("/api/settings/mqtt",l)}function Ii(t){const e=fe(t.id,"Device",63);if(!xi.includes(e))throw new Error("Unknown device id.");if(typeof t.enabled!="boolean")throw new Error("Enabled must be true or false.");const s=new URLSearchParams;return s.set("id",e),s.set("enabled",t.enabled?"on":"off"),Bt("/api/devices/set",s)}function Mr(){return Pr("/api/reboot",{method:"POST"})}function N({kind:t="info",message:e,onClose:s}){return d("div",{class:`banner banner-${t}`,role:"status",children:[d("span",{children:e}),s?d("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function Oi(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function I({children:t,variant:e="default",type:s="button",disabled:r,title:i,onClick:n}){return d("button",{type:s,class:Oi(e),disabled:r,title:i,onClick:n,children:t})}function Tr(t){return d(I,{...t,variant:"danger"})}function W({title:t,children:e,class:s}){return d("section",{class:s?`card ${s}`:"card",children:[t?d("h2",{children:t}):null,e]})}const Li=5e3,Wi=[300,1e3];function qi(t){return t.available?t.enabled?{className:"badge badge-on",label:"On"}:{className:"badge badge-off",label:"Off"}:{className:"badge badge-danger",label:"Unavailable"}}function zi(t){return typeof t.value=="boolean"?t.value?"Open":"Closed":t.id==="rainwater_pit_level"?t.value.toFixed(3):String(t.value)}function yt(t,e){return t.find(s=>s.id===e)}function Bi({sw:t,busy:e,onSet:s}){const r=qi(t),i=e||!t.available;return d("div",{class:`device-card${t.available?"":" is-unavailable"}`,children:[d("div",{class:"device-card-head",children:[d("span",{class:"device-name",children:t.name}),d("span",{class:r.className,children:r.label})]}),d("div",{class:"device-actions",children:[d(I,{variant:t.available&&!t.enabled?"primary":"default",disabled:i||t.enabled,onClick:()=>s(t.id,!0),children:"On"}),d(I,{variant:t.available&&t.enabled?"primary":"default",disabled:i||!t.enabled,onClick:()=>s(t.id,!1),children:"Off"})]}),t.id==="left_lawn_watering"||t.id==="local_area_right_watering"?d("p",{class:"device-help",children:"Turns off automatically after 20 minutes."}):null]})}function Fi({sensor:t}){return d("div",{class:`sensor-card${t.available?"":" is-unavailable"}`,children:[d("span",{class:"sensor-name",children:t.name}),t.available?d("span",{class:"sensor-value",children:[zi(t),t.unit?d("span",{class:"sensor-unit",children:t.unit}):null]}):d("span",{class:"sensor-value sensor-unavailable",children:"—"})]})}function ys({section:t,inFlight:e,onSet:s}){return d(W,{title:t.name,children:d("div",{class:"device-grid",children:(t.switches??[]).map(r=>d(Bi,{sw:r,busy:e.includes(r.id),onSet:s},r.id))})})}function ji(){const[t,e]=S(null),[s,r]=S(null),[i,n]=S(null),[a,l]=S(!1),[o,h]=S([]),p=$e(0),u=$e([]),c=H(async()=>{const v=await Ui();v.ok?(e(v.data),r(null)):r(v.message),l(!0)},[]);q(()=>{c();const v=window.setInterval(()=>{p.current===0&&c()},Li);return()=>window.clearInterval(v)},[c]),q(()=>()=>{for(const v of u.current)window.clearTimeout(v)},[]);const f=H(()=>{for(const v of Wi){const A=window.setTimeout(()=>{u.current=u.current.filter(M=>M!==A),c()},v);u.current.push(A)}},[c]),_=H(v=>{p.current+=1,h(A=>A.includes(v)?A:[...A,v])},[]),k=H(v=>{p.current=Math.max(0,p.current-1),h(A=>A.filter(M=>M!==v))},[]),w=H(async(v,A)=>{n(null),_(v);try{const M=await Ii({id:v,enabled:A});M.ok?f():n(M.message)}catch(M){n(M instanceof Error?M.message:String(M))}finally{k(v)}},[_,k,f]);if(!a)return d(W,{title:"Devices",children:d("p",{class:"muted",children:"Loading devices…"})});const m=t?.sections??[],g=yt(m,"lighting"),P=yt(m,"watering"),R=yt(m,"sensors");return d("div",{class:"stack",children:[s?d(L,{children:d(N,{kind:"error",message:s})}):null,i?d(N,{kind:"error",message:i,onClose:()=>n(null)}):null,d("div",{class:"form-actions",children:d(I,{onClick:()=>{c()},children:"Refresh"})}),g?d(ys,{section:g,inFlight:o,onSet:(v,A)=>{w(v,A)}}):null,P?d(ys,{section:P,inFlight:o,onSet:(v,A)=>{w(v,A)}}):null,R?d(W,{title:R.name,children:d("div",{class:"sensor-grid",children:(R.sensors??[]).map(v=>d(Fi,{sensor:v},v.id))})}):null,d("p",{class:"muted",children:"Device values refresh automatically every 5 seconds. The watering relays switch off by themselves after 20 minutes."})]})}function Qi(){const t=$e(null);return q(()=>{const e=document.createElement("edu-log-settings-page");return e.setAttribute("device-name","Evelyn"),t.current?.append(e),()=>e.remove()},[]),d("div",{ref:t})}function j({label:t,value:e,onInput:s,type:r="text",name:i,placeholder:n,maxLength:a,min:l,max:o,step:h,error:p,help:u,disabled:c,required:f,autoComplete:_,inputMode:k}){const w=zt();return d("label",{class:"field",for:w,children:[d("span",{class:"field-label",children:t}),d("input",{id:w,name:i,type:r,value:e,placeholder:n,maxLength:a,min:l,max:o,step:h,disabled:c,required:f,autoComplete:_,inputMode:k,onInput:g=>{s?.(g.currentTarget.value)},"aria-invalid":p?!0:void 0}),u&&!p?d("span",{class:"field-help",children:u}):null,p?d("span",{class:"field-error",children:p}):null]})}function Ur(){return d(N,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}const wt=2e3,Vi=12e4;function Nr(){const[t,e]=S("idle"),s=$e(0);q(()=>{if(t!=="rebooting")return;let a=!1,l;const o=()=>{Cr().then(h=>{if(!a){if(h.ok){e("ready");return}if(s.current+=1,s.current*wt>=Vi){e("timeout");return}l=window.setTimeout(o,wt)}})};return l=window.setTimeout(o,wt),()=>{a=!0,l!==void 0&&window.clearTimeout(l)}},[t]);const r=H(()=>{s.current=0,e("rebooting")},[]),i=H(()=>e("idle"),[]),n=H(()=>{s.current=0,e("rebooting")},[]);return ht(()=>({phase:t,start:r,dismiss:i,retry:n}),[t,r,i,n])}function Dr({flow:t}){return t.phase==="idle"?null:d("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:d("div",{class:"reboot-dialog card",children:[d("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?d(L,{children:[d("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),d("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?d(L,{children:[d(N,{kind:"success",message:"The device is back online."}),d("div",{class:"form-actions",children:d(I,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?d(L,{children:[d(N,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),d("div",{class:"form-actions",children:[d(I,{onClick:t.retry,children:"Keep waiting"}),d(I,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}function Yi({label:t,value:e,options:s,onChange:r,error:i,help:n,disabled:a,required:l,name:o}){const h=zt(),p=u=>{r?.(u.currentTarget.value)};return d("label",{class:"field",for:h,children:[d("span",{class:"field-label",children:t}),d("select",{id:h,name:o,value:String(e),disabled:a,required:l,onChange:p,"aria-invalid":i?!0:void 0,children:s.map(u=>d("option",{value:u.value,disabled:u.disabled,children:u.label},u.value))}),n&&!i?d("span",{class:"field-help",children:n}):null,i?d("span",{class:"field-error",children:i}):null]})}const Ji={modbusSpeed:"9600",modbusAddressWBMR6C:"",modbusAddressQDY30A:""};function Rr(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function Ki(t){return Object.values(t).some(e=>!!e)}function Zi(t){const e=b.modbus.speeds.map(r=>({value:String(r),label:`${r} baud`})),s=Rr(t);return s!==null&&!b.modbus.speeds.includes(s)&&e.unshift({value:t,label:`${t} (current)`}),e}function ws(t,e){const s=Rr(t);if(s===null||!Number.isInteger(s)||s<b.modbus.addressMin||s>b.modbus.addressMax)return`${e} must be an integer between ${b.modbus.addressMin} and ${b.modbus.addressMax}.`}function Gi(){const[t,e]=S(!1),[s,r]=S(null),[i,n]=S(Ji),[a,l]=S({}),[o,h]=S(!1),[p,u]=S(null),[c,f]=S(null),[_,k]=S(!1),[w,m]=S(null),[g,P]=S(!1),R=Nr(),v=ht(()=>Zi(i.modbusSpeed),[i.modbusSpeed]),A=H(async()=>{r(null);const C=await Ni();C.ok?n({modbusSpeed:String(C.data.modbusSpeed),modbusAddressWBMR6C:String(C.data.modbusAddressWBMR6C),modbusAddressQDY30A:String(C.data.modbusAddressQDY30A)}):r(C.message),e(!0)},[]);q(()=>{A()},[A]);const M=C=>n(J=>({...J,...C})),ue=()=>{h(!0),u(null),f(null),m(null)},xe=H(async C=>{C.preventDefault();const J={modbusAddressWBMR6C:ws(i.modbusAddressWBMR6C,"WB-MR6C address"),modbusAddressQDY30A:ws(i.modbusAddressQDY30A,"QDY30A address")};if(l(J),!Ki(J)){ue();try{const pe=await Ri({modbusSpeed:Number(i.modbusSpeed),modbusAddressWBMR6C:Number(i.modbusAddressWBMR6C),modbusAddressQDY30A:Number(i.modbusAddressQDY30A)});pe.ok?(u("Modbus settings saved to flash."),k(!0)):f(pe.message)}catch(pe){f(pe instanceof Error?pe.message:String(pe))}finally{h(!1)}}},[i]),O=H(async()=>{if(!window.confirm("Reboot the device now? Automation and MQTT reporting will be offline for about 20-60 seconds."))return;m(null),P(!0);const J=await Mr();P(!1),J.ok?R.start():m(J.message)},[R.start]);return t?d("div",{class:"stack",children:[d(Ur,{}),s?d(L,{children:[d(N,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(I,{onClick:()=>{A()},children:"Retry"})})]}):null,d(W,{title:"Modbus",children:d("form",{onSubmit:xe,novalidate:!0,children:[d(Yi,{label:"Bus speed",value:i.modbusSpeed,options:v,onChange:C=>M({modbusSpeed:C}),help:"Applies immediately after save. Only the speeds supported by the firmware are listed.",disabled:o}),d(j,{label:"WB-MR6C address",value:i.modbusAddressWBMR6C,onInput:C=>M({modbusAddressWBMR6C:C}),type:"number",min:b.modbus.addressMin,max:b.modbus.addressMax,inputMode:"numeric",error:a.modbusAddressWBMR6C,help:"Relay module on the shared bus. Requires a reboot to take effect.",disabled:o}),d(j,{label:"QDY30A address",value:i.modbusAddressQDY30A,onInput:C=>M({modbusAddressQDY30A:C}),type:"number",min:b.modbus.addressMin,max:b.modbus.addressMax,inputMode:"numeric",error:a.modbusAddressQDY30A,help:"Rainwater pit level sensor. Requires a reboot to take effect.",disabled:o}),d("div",{class:"form-actions",children:d(I,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save Modbus"})})]})}),p?d(N,{kind:"success",message:p,onClose:()=>u(null)}):null,c?d(N,{kind:"error",message:c,onClose:()=>f(null)}):null,d(W,{title:"Reboot",children:[d("p",{class:"muted",children:["Modbus addresses are read during startup, so they apply only after a reboot.",_?" Settings saved — reboot to apply them.":""]}),w?d(N,{kind:"error",message:w,onClose:()=>m(null)}):null,d("div",{class:"form-actions",children:d(Tr,{onClick:()=>{O()},disabled:g||R.phase!=="idle",children:"Reboot device"})})]}),d(Dr,{flow:R})]}):d(W,{title:"Modbus",children:d("p",{class:"muted",children:"Loading Modbus settings…"})})}function Xi({label:t,checked:e,onChange:s,disabled:r,help:i,name:n}){const a=zt();return d("div",{class:"checkbox-field",children:[d("label",{class:"checkbox-label",for:a,children:[d("input",{id:a,name:n,type:"checkbox",checked:e,disabled:r,onChange:o=>{s?.(o.currentTarget.checked)}}),d("span",{children:t})]}),i?d("span",{class:"field-help",children:i}):null]})}function en({label:t,value:e,onInput:s,maxLength:r,error:i,help:n,disabled:a,autoComplete:l}){const[o,h]=S(!1);return d("div",{class:"password-field",children:[d(j,{label:t,value:e,onInput:s,type:o?"text":"password",maxLength:r,error:i,help:n,disabled:a,autoComplete:l}),d("button",{type:"button",class:"btn reveal-toggle","aria-pressed":o,disabled:a,onClick:()=>h(p=>!p),children:o?"Hide":"Show"})]})}const tn={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,topicPrefix:""};function sn(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>b.mqtt.hostMax&&(e.host=`At most ${b.mqtt.hostMax} characters.`);const s=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(s)||s<b.mqtt.portMin||s>b.mqtt.portMax)&&(e.port=`Port must be an integer between ${b.mqtt.portMin} and ${b.mqtt.portMax}.`),t.login.length>b.mqtt.loginMax&&(e.login=`At most ${b.mqtt.loginMax} characters.`),t.password.length>b.mqtt.passwordMax&&(e.password=`At most ${b.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>b.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${b.mqtt.haDiscoveryPrefixMax} characters.`),t.topicPrefix.trim().length===0?e.topicPrefix="Topic prefix is required.":t.topicPrefix.length>b.mqtt.topicPrefixMax?e.topicPrefix=`At most ${b.mqtt.topicPrefixMax} characters.`:t.topicPrefix.startsWith("/")||t.topicPrefix.endsWith("/")?e.topicPrefix='Must not start or end with "/".':t.topicPrefix.includes(" ")&&(e.topicPrefix="Must not contain spaces."),e}function rn(t){return Object.values(t).some(e=>!!e)}function nn(){const[t,e]=S(!1),[s,r]=S(null),[i,n]=S(tn),[a,l]=S({}),[o,h]=S(!1),[p,u]=S(null),[c,f]=S(null),_=H(async()=>{r(null);const m=await Di();m.ok?n({host:m.data.host,port:String(m.data.port),login:m.data.login,password:m.data.password,haDiscoveryPrefix:m.data.haDiscoveryPrefix,mqttIsHADiscovery:m.data.mqttIsHADiscovery,topicPrefix:m.data.topicPrefix}):r(m.message),e(!0)},[]);q(()=>{_()},[_]);const k=m=>n(g=>({...g,...m})),w=H(async m=>{m.preventDefault();const g=sn(i);if(l(g),u(null),f(null),!rn(g)){h(!0);try{const P=await Hi({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,topicPrefix:i.topicPrefix});P.ok?u("MQTT settings saved to flash."):f(P.message)}catch(P){f(P instanceof Error?P.message:String(P))}finally{h(!1)}}},[i]);return t?d("div",{class:"stack",children:[d(Ur,{}),s?d(L,{children:[d(N,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(I,{onClick:()=>{_()},children:"Retry"})})]}):null,d(W,{title:"MQTT",children:d("form",{onSubmit:w,novalidate:!0,children:[d(j,{label:"Host",value:i.host,onInput:m=>k({host:m}),maxLength:b.mqtt.hostMax,error:a.host,autoComplete:"off",disabled:o}),d(j,{label:"Port",value:i.port,onInput:m=>k({port:m}),type:"number",min:b.mqtt.portMin,max:b.mqtt.portMax,inputMode:"numeric",error:a.port,disabled:o}),d(j,{label:"Login",value:i.login,onInput:m=>k({login:m}),maxLength:b.mqtt.loginMax,error:a.login,autoComplete:"off",disabled:o}),d(en,{label:"Password",value:i.password,onInput:m=>k({password:m}),maxLength:b.mqtt.passwordMax,error:a.password,autoComplete:"new-password",disabled:o}),d(j,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:m=>k({haDiscoveryPrefix:m}),maxLength:b.mqtt.haDiscoveryPrefixMax,error:a.haDiscoveryPrefix,autoComplete:"off",disabled:o}),d(j,{label:"MQTT topic prefix",value:i.topicPrefix,onInput:m=>k({topicPrefix:m}),maxLength:b.mqtt.topicPrefixMax,error:a.topicPrefix,help:"Prefix for every Evelyn entity topic, e.g. evelyn/<chipID>.",autoComplete:"off",disabled:o}),d(Xi,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:m=>k({mqttIsHADiscovery:m}),disabled:o}),p?d(N,{kind:"success",message:p,onClose:()=>u(null)}):null,c?d(N,{kind:"error",message:c,onClose:()=>f(null)}):null,d("div",{class:"form-actions",children:d(I,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save MQTT"})})]})})]}):d(W,{title:"MQTT",children:d("p",{class:"muted",children:"Loading MQTT settings…"})})}function an(){const t=$e(null);return q(()=>{const e=document.createElement("edn-network-page");return e.setAttribute("poll-interval-ms","5000"),t.current?.append(e),()=>e.remove()},[]),d("div",{ref:t})}const on=1e4;function ln(t){const e=Math.max(0,Math.floor(t)),s=Math.floor(e/86400),r=Math.floor(e%86400/3600),i=Math.floor(e%3600/60),n=e%60,a=[];return s&&a.push(`${s}d`),(s||r)&&a.push(`${r}h`),(s||r||i)&&a.push(`${i}m`),a.push(`${n}s`),a.join(" ")}function dn(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function cn(){const[t,e]=S(null),[s,r]=S(null),[i,n]=S(!1),[a,l]=S(null),[o,h]=S(null),[p,u]=S(!0),[c,f]=S(null),[_,k]=S(!1),w=Nr(),m=H(async()=>{const A=await Mi();A.ok?(e(A.data),r(null)):r(A.message),n(!0)},[]),g=H(async()=>{u(!0);const[A,M]=await Promise.all([Cr(),Ti()]);l(A),h(M),u(!1)},[]);q(()=>{m();const A=window.setInterval(()=>{m()},on);return()=>window.clearInterval(A)},[m]),q(()=>{g()},[g]);const P=H(async()=>{if(!window.confirm("Reboot the device now? Automation and MQTT reporting will be offline for about 20-60 seconds."))return;f(null),k(!0);const M=await Mr();k(!1),M.ok?w.start():f(M.message)},[w.start]),R=p&&!a?d("p",{class:"muted",children:"Checking device health…"}):a?a.ok?d(N,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):d(N,{kind:"error",message:a.message}):null,v=o?o.ok?d(N,{kind:o.data.ready?"success":"info",message:o.data.ready?"All registered services (MQTT, devices) are ready.":`Not ready: ${o.data.message}`}):o.status===500?d(N,{kind:"info",message:`Not ready: ${o.message}`}):d(N,{kind:"error",message:o.message}):null;return d("div",{class:"stack",children:[d(W,{title:"Device",children:[i?s?d(L,{children:[d(N,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(I,{onClick:()=>{m()},children:"Retry"})})]}):t?d("dl",{class:"kv",children:[d("dt",{children:"Wi-Fi"}),d("dd",{children:d("span",{class:t.wifiStatus==="connected"?"badge badge-on":"badge badge-off",children:t.wifiStatus})}),d("dt",{children:"Free heap"}),d("dd",{children:dn(t.freeHeap)}),d("dt",{children:"Uptime"}),d("dd",{children:ln(t.uptime)}),d("dt",{children:"Last reset reason"}),d("dd",{children:t.lastResetReason})]}):null:d("p",{class:"muted",children:"Loading status…"}),d("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),d(W,{title:"Services",children:[R,v,d("div",{class:"form-actions",children:d(I,{onClick:()=>{g()},disabled:p,children:p?"Checking…":"Refresh health"})})]}),d(W,{title:"Maintenance",children:[d("p",{class:"muted",children:"A reboot briefly interrupts automation and MQTT reporting. Configuration changes saved on the other tabs only take effect after a reboot."}),c?d(N,{kind:"error",message:c,onClose:()=>f(null)}):null,d("div",{class:"form-actions",children:d(Tr,{onClick:()=>{P()},disabled:_||w.phase!=="idle",children:"Reboot device"})})]}),d(Dr,{flow:w})]})}const hn=[{id:"status",label:"Status"},{id:"devices",label:"Devices"},{id:"logger",label:"Logger"},{id:"modbus",label:"Modbus"},{id:"mqtt",label:"MQTT"},{id:"network",label:"Network"},{id:"backup",label:"Backup"}];function un(t){switch(t){case"status":return d(cn,{});case"devices":return d(ji,{});case"logger":return d(Qi,{});case"modbus":return d(Gi,{});case"mqtt":return d(nn,{});case"network":return d(an,{});case"backup":return d(Ei,{})}}function pn(){const[t,e]=S("status");return d(L,{children:[d("header",{class:"app-header",children:[d("div",{class:"brand",children:d("h1",{children:"Evelyn"})}),d("span",{class:"hint",children:"WB-MGE yard controller"})]}),d(ki,{tabs:hn,active:t,onSelect:e}),d("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:un(t)})]})}function fn(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function Hr(t={}){let e=t.baseUrl??"",s=t.headers??{};async function r(i,n){let a;try{a=await fetch(`${e}${i}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(p){return n?.signal?.aborted===!0||typeof p=="object"&&p&&p.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let l=await a.text().catch(()=>""),o,h=!1;if(l.length>0)try{o=JSON.parse(l),h=!0}catch{h=!1}if(!a.ok){let p=fn(o);return{ok:!1,status:a.status,message:p??`Request failed with HTTP ${a.status}.`}}return h?{ok:!0,data:o}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(i){return r("/api/network/settings",{signal:i})},saveSettings(i,n){return r("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:n})},getStatus(i){return r("/api/network/status",{signal:i})},wifiList(i){return r("/api/wifi/list",{signal:i})}}}var Xe=globalThis,Ft=Xe.ShadowRoot&&(Xe.ShadyCSS===void 0||Xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jt=Symbol(),As=new WeakMap,Ir=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(Ft&&e===void 0){let r=s!==void 0&&s.length===1;r&&(e=As.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&As.set(s,e))}return e}toString(){return this.cssText}},mn=t=>new Ir(typeof t=="string"?t:t+"",void 0,jt),Qt=(t,...e)=>new Ir(t.length===1?t[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,jt),_n=(t,e)=>{if(Ft)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=Xe.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},Ss=Ft?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return mn(s)})(t):t,{is:gn,defineProperty:bn,getOwnPropertyDescriptor:$n,getOwnPropertyNames:vn,getOwnPropertySymbols:yn,getPrototypeOf:wn}=Object,pt=globalThis,ks=pt.trustedTypes,An=ks?ks.emptyScript:"",Sn=pt.reactiveElementPolyfillSupport,Ne=(t,e)=>t,Ut={toAttribute(t,e){switch(e){case Boolean:t=t?An:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Or=(t,e)=>!gn(t,e),Es={attribute:!0,type:String,converter:Ut,reflect:!1,useDefault:!1,hasChanged:Or};Symbol.metadata??=Symbol("metadata"),pt.litPropertyMetadata??=new WeakMap;var me=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Es){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,s);i!==void 0&&bn(this.prototype,e,i)}}static getPropertyDescriptor(e,s,r){let{get:i,set:n}=$n(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let l=i?.call(this);n?.call(this,a),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Es}static _$Ei(){if(this.hasOwnProperty(Ne("elementProperties")))return;let e=wn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ne("properties"))){let s=this.properties,r=[...vn(s),...yn(s)];for(let i of r)this.createProperty(i,s[i])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)s.unshift(Ss(i))}else e!==void 0&&s.push(Ss(e));return s}static _$Eu(e,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _n(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$ET(e,s){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?Ut:r.converter).toAttribute(s,r.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,s){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Ut:n.converter;this._$Em=i;let l=a.fromAttribute(s,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,s,r,i=!1,n){if(e!==void 0){let a=this.constructor;if(i===!1&&(n=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??Or)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??s??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(s=void 0),this._$AL.set(e,s)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[Ne("elementProperties")]=new Map,me[Ne("finalized")]=new Map,Sn?.({ReactiveElement:me}),(pt.reactiveElementVersions??=[]).push("2.1.2");var Vt=globalThis,xs=t=>t,nt=Vt.trustedTypes,Ps=nt?nt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Lr="$lit$",Q=`lit$${Math.random().toFixed(9).slice(2)}$`,Wr="?"+Q,kn=`<${Wr}>`,de=document,Le=()=>de.createComment(""),We=t=>t===null||typeof t!="object"&&typeof t!="function",Yt=Array.isArray,En=t=>Yt(t)||typeof t?.[Symbol.iterator]=="function",At=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cs=/-->/g,Ms=/>/g,K=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ts=/'/g,Us=/"/g,qr=/^(?:script|style|textarea|title)$/i,$=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),ve=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Ns=new WeakMap,X=de.createTreeWalker(de,129);function zr(t,e){if(!Yt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ps===void 0?e:Ps.createHTML(e)}var xn=(t,e)=>{let s=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Pe;for(let l=0;l<s;l++){let o=t[l],h,p,u=-1,c=0;for(;c<o.length&&(a.lastIndex=c,p=a.exec(o),p!==null);)c=a.lastIndex,a===Pe?p[1]==="!--"?a=Cs:p[1]===void 0?p[2]===void 0?p[3]!==void 0&&(a=K):(qr.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=K):a=Ms:a===K?p[0]===">"?(a=i??Pe,u=-1):p[1]===void 0?u=-2:(u=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?K:p[3]==='"'?Us:Ts):a===Us||a===Ts?a=K:a===Cs||a===Ms?a=Pe:(a=K,i=void 0);let f=a===K&&t[l+1].startsWith("/>")?" ":"";n+=a===Pe?o+kn:u>=0?(r.push(h),o.slice(0,u)+Lr+o.slice(u)+Q+f):o+Q+(u===-2?l:f)}return[zr(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Nt=class Br{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,l=e.length-1,o=this.parts,[h,p]=xn(e,s);if(this.el=Br.createElement(h,r),X.currentNode=this.el.content,s===2||s===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=X.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Lr)){let c=p[a++],f=i.getAttribute(u).split(Q),_=/([.?@])?(.*)/.exec(c);o.push({type:1,index:n,name:_[2],strings:f,ctor:_[1]==="."?Cn:_[1]==="?"?Mn:_[1]==="@"?Tn:ft}),i.removeAttribute(u)}else u.startsWith(Q)&&(o.push({type:6,index:n}),i.removeAttribute(u));if(qr.test(i.tagName)){let u=i.textContent.split(Q),c=u.length-1;if(c>0){i.textContent=nt?nt.emptyScript:"";for(let f=0;f<c;f++)i.append(u[f],Le()),X.nextNode(),o.push({type:2,index:++n});i.append(u[c],Le())}}}else if(i.nodeType===8)if(i.data===Wr)o.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(Q,u+1))!==-1;)o.push({type:7,index:n}),u+=Q.length-1}n++}}static createElement(e,s){let r=de.createElement("template");return r.innerHTML=e,r}};function ye(t,e,s=t,r){if(e===ve)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],n=We(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=ye(t,i._$AS(t,e.values),i,r)),e}var Pn=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:r}=this._$AD,i=(e?.creationScope??de).importNode(s,!0);X.currentNode=i;let n=X.nextNode(),a=0,l=0,o=r[0];for(;o!==void 0;){if(a===o.index){let h;o.type===2?h=new Jt(n,n.nextSibling,this,e):o.type===1?h=new o.ctor(n,o.name,o.strings,this,e):o.type===6&&(h=new Un(n,this,e)),this._$AV.push(h),o=r[++l]}a!==o?.index&&(n=X.nextNode(),a++)}return X.currentNode=de,i}p(e){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[s]):(r._$AI(e,r,s),s+=r.strings.length-2)),s++}},Jt=class Fr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=ye(this,e,s),We(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==ve&&this._(e):e._$litType$===void 0?e.nodeType===void 0?En(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&We(this._$AH)?this._$AA.nextSibling.data=e:this.T(de.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Nt.createElement(zr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new Pn(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(e){let s=Ns.get(e.strings);return s===void 0&&Ns.set(e.strings,s=new Nt(e)),s}k(e){Yt(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of e)i===s.length?s.push(r=new Fr(this.O(Le()),this.O(Le()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=xs(e).nextSibling;xs(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ft=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,i,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=y}_$AI(e,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)e=ye(this,e,s,0),a=!We(e)||e!==this._$AH&&e!==ve,a&&(this._$AH=e);else{let l=e,o,h;for(e=n[0],o=0;o<n.length-1;o++)h=ye(this,l[r+o],s,o),h===ve&&(h=this._$AH[o]),a||=!We(h)||h!==this._$AH[o],h===y?e=y:e!==y&&(e+=(h??"")+n[o+1]),this._$AH[o]=h}a&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Cn=class extends ft{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Mn=class extends ft{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Tn=class extends ft{constructor(e,s,r,i,n){super(e,s,r,i,n),this.type=5}_$AI(e,s=this){if((e=ye(this,e,s,0)??y)===ve)return;let r=this._$AH,i=e===y&&r!==y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==y&&(r===y||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Un=class{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ye(this,e)}},Nn=Vt.litHtmlPolyfillSupport;Nn?.(Nt,Jt),(Vt.litHtmlVersions??=[]).push("3.3.3");var Dn=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new Jt(e.insertBefore(Le(),n),n,void 0,s??{})}return i._$AI(t),i},Kt=globalThis,se=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Dn(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ve}};se._$litElement$=!0,se.finalized=!0,Kt.litElementHydrateSupport?.({LitElement:se});var Rn=Kt.litElementPolyfillSupport;Rn?.({LitElement:se}),(Kt.litElementVersions??=[]).push("4.2.2");var Hn={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function In(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function On(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function Ln(t){let e=s=>String(s).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var re,Wn=(re=class extends se{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return $`
      <div class="card">
        <header class="head">
          ${e?$`<span class="badge badge-${e.mode}">${Hn[e.mode]}</span>`:$`<span class="badge badge-unknown">Unknown</span>`}
          ${e?$`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:y}
          ${this.loading?$`<span class="muted loading">Refreshing…</span>`:y}
        </header>

        ${e?.fallbackAP?$`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:y}
        ${this.errorMessage?$`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:y}
        ${e?this.renderSections(e):$`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?$`Updated ${Ln(this.lastUpdated)}`:$`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return $`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${In(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let s=e.ap;return $`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let s=e.eth;return $`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:On(s.duplex))}
        </dl>
      </section>
    `}row(e,s){return s===void 0||s===""?y:$`<dt>${e}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Hr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},re.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},re.styles=Qt`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_danger: var(--edn-danger, #dc2626);
      --_muted: var(--edn-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      max-width: 28rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    .head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .badge {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
      background: #eef2ff;
      color: var(--_accent);
    }

    .badge-ethernet {
      background: #e0f2fe;
      color: #0369a1;
    }

    .badge-wifi_ap {
      background: #fef3c7;
      color: #b45309;
    }

    .badge-unknown {
      background: #f3f4f6;
      color: var(--_muted);
    }

    .state {
      font-size: 0.85rem;
      font-weight: 600;
    }

    .state-up {
      color: #15803d;
    }

    .state-down {
      color: var(--_muted);
    }

    .loading {
      font-size: 0.8rem;
      margin-left: auto;
    }

    .banner {
      margin-top: 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
    }

    .banner-warn {
      background: #fffbeb;
      border: 1px solid #fde68a;
      color: #92400e;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    section {
      margin-top: 1rem;
    }

    h2 {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin: 0 0 0.5rem;
    }

    .rows {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.35rem 0.75rem;
      margin: 0;
    }

    dt {
      color: var(--_muted);
      font-size: 0.85rem;
    }

    dd {
      margin: 0;
      font-size: 0.9rem;
      word-break: break-word;
    }

    .muted {
      color: var(--_muted);
    }

    .foot {
      margin-top: 1rem;
      font-size: 0.75rem;
    }

    button {
      font: inherit;
      font-size: 0.8rem;
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      border: 1px solid currentColor;
      background: transparent;
      color: var(--_accent);
      cursor: pointer;
    }

    button:hover {
      background: rgba(37, 99, 235, 0.08);
    }
  `,re);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",Wn);var Ve=32,Ce=64,St=8,qn=5e3,zn=new TextEncoder;function Ye(t){return zn.encode(t).length}function Ds(t){return t.isAPMode?"ap":"station"}var ie,Bn=(ie=class extends se{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return $`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?$`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:y}
        ${this.successMessage?$`<div class="banner banner-success" role="status">${this.successMessage}</div>`:y}
        ${e?$`${this.renderForm(e)} ${this.renderScan()}`:this.loading?$`<p class="status">Loading settings…</p>`:$`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return $`
      <form @submit=${this.handleSubmit}>
        <fieldset>
          <legend>Mode</legend>
          <div class="segmented" role="group" aria-label="Network mode">
            <button
              type="button"
              class="seg ${this.draftMode==="station"?"active":""}"
              aria-pressed=${this.draftMode==="station"}
              @click=${()=>this.setMode("station")}
            >
              Station
            </button>
            <button
              type="button"
              class="seg ${this.draftMode==="ap"?"active":""}"
              aria-pressed=${this.draftMode==="ap"}
              @click=${()=>this.setMode("ap")}
            >
              Access Point
            </button>
          </div>
        </fieldset>

        ${this.draftMode==="station"?this.renderStation(e):this.renderAccessPoint(e)}

        <div class="actions">
          <button class="primary" type="submit" ?disabled=${this.submitting||!this.dirty}>
            ${this.submitting?"Saving…":"Save"}
          </button>
          ${this.dirty?$`<span class="muted">Unsaved changes</span>`:y}
        </div>
      </form>
    `}renderStation(e){return $`
      <section class="group">
        <h2>Station</h2>
        <label>
          Wi-Fi name
          <input
            name="wifiSSID"
            type="text"
            autocomplete="off"
            .value=${this.draftWifiSSID}
            @input=${this.handleWifiSSIDInput}
          />
        </label>
        ${this.renderFieldError("wifiSSID")}
        <label>
          Wi-Fi password
          <input
            name="wifiPassword"
            type="password"
            autocomplete="new-password"
            placeholder=${e.hasWifiPassword?"Leave blank to keep saved password":"No password set"}
            .value=${this.draftWifiPassword}
            @input=${this.handleWifiPasswordInput}
          />
        </label>
        ${e.hasWifiPassword?$`<p class="hint">Password saved •••• (leave blank to keep)</p>`:y}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return $`
      <section class="group">
        <h2>Access point</h2>
        <label>
          Access point name
          <input
            name="wifiAPSSID"
            type="text"
            autocomplete="off"
            .value=${this.draftApSSID}
            @input=${this.handleApSSIDInput}
          />
        </label>
        ${this.renderFieldError("wifiAPSSID")}
        <label class="check">
          <input
            type="checkbox"
            .checked=${this.draftApHasPassword}
            @change=${this.handleApHasPasswordChange}
          />
          Require password
        </label>
        ${this.draftApHasPassword?$`
              <label>
                Access point password
                <input
                  name="wifiAPPassword"
                  type="password"
                  autocomplete="new-password"
                  placeholder=${e.hasWifiAPPassword?"Leave blank to keep saved password":"At least 8 characters"}
                  .value=${this.draftApPassword}
                  @input=${this.handleApPasswordInput}
                />
              </label>
              ${e.hasWifiAPPassword?$`<p class="hint">Password saved •••• (leave blank to keep)</p>`:y}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:y}
      </section>
    `}renderScan(){return $`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?$`<div class="banner banner-error" role="alert">${this.scanError}</div>`:y}
        ${this.scanResults.length>0?$`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:y}
      </section>
    `}renderNetwork(e){return $`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?$`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:y}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let s=this.fieldErrors[e];return s?$`<p class="field-error" role="alert">${s}</p>`:y}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?$`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:y}get dirty(){let e=this.settings;return e?this.draftMode!==Ds(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Hr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=Ds(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,s={};if(!e)return s;let r=this.draftMode==="ap";if(Ye(this.draftWifiSSID)>Ve&&(s.wifiSSID=`Wi-Fi name must be ${Ve} characters or fewer.`),Ye(this.draftApSSID)>Ve&&(s.wifiAPSSID=`Access point name must be ${Ve} characters or fewer.`),r?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&Ye(this.draftWifiPassword)>Ce&&(s.wifiPassword=`Wi-Fi password must be ${Ce} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=Ye(this.draftApPassword);(i<St||i>Ce)&&(s.wifiAPPassword=`Access point password must be ${St}–${Ce} characters.`)}else e.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${St}–${Ce} characters).`);return s}buildPatch(){let e=this.settings,s={};if(!e)return s;let r=this.draftMode==="ap";return r!==e.isAPMode&&(s.isAPMode=r),this.draftWifiSSID!==e.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let r=await this.ensureClient().saveSettings(s);if(this.submitting=!1,r.ok){this.applyServerSettings(r.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:r.data,bubbles:!0,composed:!0}));return}let i=r.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":r.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let s,r=new Promise(n=>{s=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},qn)}),i=await Promise.race([this.ensureClient().wifiList(e.signal),r]);if(s!==void 0&&clearTimeout(s),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((n,a)=>a.rssi-n.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},ie.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},ie.styles=Qt`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_danger: var(--edn-danger, #dc2626);
      --_muted: var(--edn-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      max-width: 30rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h1 {
      font-size: 1rem;
      margin: 0 0 0.75rem;
    }

    h2 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin: 0 0 0.5rem;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-success {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #15803d;
    }

    fieldset {
      border: 0;
      padding: 0;
      margin: 0 0 0.75rem;
    }

    legend {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin-bottom: 0.35rem;
    }

    .segmented {
      display: inline-flex;
      border: 1px solid var(--_border);
      border-radius: 8px;
      overflow: hidden;
    }

    .seg {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.35rem 0.85rem;
      border: 0;
      background: transparent;
      color: var(--_muted);
      cursor: pointer;
    }

    .seg.active {
      background: var(--_accent);
      color: #ffffff;
    }

    .group {
      border-top: 1px solid var(--_border);
      padding-top: 0.75rem;
      margin-bottom: 0.75rem;
    }

    label {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.6rem;
    }

    input[type='text'],
    input[type='password'] {
      display: block;
      width: 100%;
      box-sizing: border-box;
      margin-top: 0.25rem;
      font: inherit;
      font-size: 0.9rem;
      padding: 0.4rem 0.55rem;
      border: 1px solid var(--_border);
      border-radius: 6px;
      background: #fff;
      color: inherit;
    }

    input[type='text']:focus,
    input[type='password']:focus {
      outline: 2px solid color-mix(in srgb, var(--_accent) 45%, transparent);
      outline-offset: 1px;
      border-color: var(--_accent);
    }

    .check {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.85rem;
    }

    .hint {
      font-size: 0.78rem;
      color: var(--_muted);
      margin: -0.3rem 0 0.5rem;
    }

    .field-error {
      font-size: 0.78rem;
      color: var(--_danger);
      margin: -0.3rem 0 0.6rem;
    }

    .clear-warning {
      font-size: 0.78rem;
      color: var(--_danger);
      margin: -0.3rem 0 0.6rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border-top: 1px solid var(--_border);
      padding-top: 0.75rem;
    }

    button {
      font: inherit;
      font-size: 0.8rem;
      padding: 0.3rem 0.7rem;
      border-radius: 6px;
      border: 1px solid currentColor;
      background: transparent;
      color: var(--_accent);
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      background: rgba(37, 99, 235, 0.08);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    .primary:hover:not(:disabled) {
      background: color-mix(in srgb, var(--_accent) 88%, #000);
    }

    .scan-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .scan-head h2 {
      margin: 0;
    }

    ul.networks {
      list-style: none;
      margin: 0.5rem 0 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .network {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      width: 100%;
      text-align: left;
      border: 1px solid var(--_border);
      border-radius: 6px;
      padding: 0.35rem 0.55rem;
      color: inherit;
    }

    .network .ssid {
      font-size: 0.85rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .network .meta {
      font-size: 0.75rem;
      color: var(--_muted);
      white-space: nowrap;
    }

    .lock {
      color: var(--_muted);
    }

    .muted {
      color: var(--_muted);
    }

    .status {
      font-size: 0.85rem;
      color: var(--_muted);
    }
  `,ie);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Bn);var Fn=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],ne,jn=(ne=class extends se{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return $`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Fn.map(e=>$`
            <button
              type="button"
              role="tab"
              id="tab-${e.id}"
              aria-controls="panel-${e.id}"
              aria-selected=${this.activeTab===e.id}
              @click=${()=>this.selectTab(e.id)}
            >
              ${e.label}
            </button>
          `)}
      </div>
      <div class="panel" id="panel-${this.activeTab}" role="tabpanel">
        ${this.renderActive()}
      </div>
    `}renderActive(){return this.activeTab==="settings"?$`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:$`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},ne.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},ne.styles=Qt`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_border: #e2e5ea;
    }

    .tabs {
      display: flex;
      gap: 0.25rem;
      border-bottom: 1px solid var(--_border);
      max-width: 30rem;
    }

    [role='tab'] {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.8rem;
      border: 0;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: var(--edn-muted, #6b7280);
      cursor: pointer;
      margin-bottom: -1px;
    }

    [role='tab'][aria-selected='true'] {
      color: var(--_accent);
      border-bottom-color: var(--_accent);
      font-weight: 600;
    }

    .panel {
      margin-top: 1rem;
    }
  `,ne);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",jn);var jr="Network request failed. Check the device connection and try again.",Qn={};function Vn(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function Yn(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function Qr(t,e){return Yn(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:jr}}async function Vr(t,e){let s=e;try{let r=await t.text();if(r.length>0)try{s=Vn(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}async function Rs(t,e,s,r,i,n){let a;try{a=await fetch(t,{headers:{Accept:e,...i},signal:n})}catch(o){return Qr(o,n)}if(!a.ok)return Vr(a,a.status===404?r:`Request failed with HTTP ${a.status}.`);let l;try{l=new Uint8Array(await a.arrayBuffer())}catch{return{ok:!1,status:a.status,message:jr}}return l.byteLength===0?{ok:!1,status:a.status,message:s}:{ok:!0,data:l}}async function Hs(t,e,s,r,i){if(e.byteLength===0)return{ok:!1,message:s};let n=new ArrayBuffer(e.byteLength);new Uint8Array(n).set(e);let a;try{a=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...r},body:n,signal:i})}catch(l){return Qr(l,i)}return a.ok?(await a.text().catch(()=>""),{ok:!0,data:Qn}):Vr(a,`Upload failed with HTTP ${a.status}.`)}function Jn(t={}){let e=t.baseUrl??"",s=t.backupPath??"/api/config/backup",r=t.configPath??"/api/config",i=t.headers??{},n=`${e}${s}`,a=`${e}${r}`;return{downloadBackup(l){return Rs(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,l)},downloadConfig(l){return Rs(a,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,l)},uploadBackup(l,o){return Hs(n,l,"Cannot upload an empty archive.",i,o)},uploadConfig(l,o){return Hs(a,l,"Cannot upload an empty config file.",i,o)}}}var et=globalThis,Zt=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gt=Symbol(),Is=new WeakMap,Yr=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==Gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(Zt&&e===void 0){let r=s!==void 0&&s.length===1;r&&(e=Is.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Is.set(s,e))}return e}toString(){return this.cssText}},Kn=t=>new Yr(typeof t=="string"?t:t+"",void 0,Gt),Zn=(t,...e)=>new Yr(t.length===1?t[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,Gt),Gn=(t,e)=>{if(Zt)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=et.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},Os=Zt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return Kn(s)})(t):t,{is:Xn,defineProperty:ea,getOwnPropertyDescriptor:ta,getOwnPropertyNames:sa,getOwnPropertySymbols:ra,getPrototypeOf:ia}=Object,mt=globalThis,Ls=mt.trustedTypes,na=Ls?Ls.emptyScript:"",aa=mt.reactiveElementPolyfillSupport,De=(t,e)=>t,Dt={toAttribute(t,e){switch(e){case Boolean:t=t?na:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Jr=(t,e)=>!Xn(t,e),Ws={attribute:!0,type:String,converter:Dt,reflect:!1,useDefault:!1,hasChanged:Jr};Symbol.metadata??=Symbol("metadata"),mt.litPropertyMetadata??=new WeakMap;var _e=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Ws){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,s);i!==void 0&&ea(this.prototype,e,i)}}static getPropertyDescriptor(e,s,r){let{get:i,set:n}=ta(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let l=i?.call(this);n?.call(this,a),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ws}static _$Ei(){if(this.hasOwnProperty(De("elementProperties")))return;let e=ia(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(De("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(De("properties"))){let s=this.properties,r=[...sa(s),...ra(s)];for(let i of r)this.createProperty(i,s[i])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)s.unshift(Os(i))}else e!==void 0&&s.push(Os(e));return s}static _$Eu(e,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$ET(e,s){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?Dt:r.converter).toAttribute(s,r.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,s){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Dt:n.converter;this._$Em=i;let l=a.fromAttribute(s,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,s,r,i=!1,n){if(e!==void 0){let a=this.constructor;if(i===!1&&(n=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??Jr)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??s??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(s=void 0),this._$AL.set(e,s)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};_e.elementStyles=[],_e.shadowRootOptions={mode:"open"},_e[De("elementProperties")]=new Map,_e[De("finalized")]=new Map,aa?.({ReactiveElement:_e}),(mt.reactiveElementVersions??=[]).push("2.1.2");var Xt=globalThis,qs=t=>t,at=Xt.trustedTypes,zs=at?at.createPolicy("lit-html",{createHTML:t=>t}):void 0,Kr="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,Zr="?"+V,oa=`<${Zr}>`,ce=document,qe=()=>ce.createComment(""),ze=t=>t===null||typeof t!="object"&&typeof t!="function",es=Array.isArray,la=t=>es(t)||typeof t?.[Symbol.iterator]=="function",kt=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bs=/-->/g,Fs=/>/g,Z=RegExp(`>|${kt}(?:([^\\s"'>=/]+)(${kt}*=${kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),js=/'/g,Qs=/"/g,Gr=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),we=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Vs=new WeakMap,ee=ce.createTreeWalker(ce,129);function Xr(t,e){if(!es(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return zs===void 0?e:zs.createHTML(e)}var da=(t,e)=>{let s=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Me;for(let l=0;l<s;l++){let o=t[l],h,p,u=-1,c=0;for(;c<o.length&&(a.lastIndex=c,p=a.exec(o),p!==null);)c=a.lastIndex,a===Me?p[1]==="!--"?a=Bs:p[1]===void 0?p[2]===void 0?p[3]!==void 0&&(a=Z):(Gr.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=Z):a=Fs:a===Z?p[0]===">"?(a=i??Me,u=-1):p[1]===void 0?u=-2:(u=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?Z:p[3]==='"'?Qs:js):a===Qs||a===js?a=Z:a===Bs||a===Fs?a=Me:(a=Z,i=void 0);let f=a===Z&&t[l+1].startsWith("/>")?" ":"";n+=a===Me?o+oa:u>=0?(r.push(h),o.slice(0,u)+Kr+o.slice(u)+V+f):o+V+(u===-2?l:f)}return[Xr(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Rt=class ei{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,l=e.length-1,o=this.parts,[h,p]=da(e,s);if(this.el=ei.createElement(h,r),ee.currentNode=this.el.content,s===2||s===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=ee.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Kr)){let c=p[a++],f=i.getAttribute(u).split(V),_=/([.?@])?(.*)/.exec(c);o.push({type:1,index:n,name:_[2],strings:f,ctor:_[1]==="."?ha:_[1]==="?"?ua:_[1]==="@"?pa:_t}),i.removeAttribute(u)}else u.startsWith(V)&&(o.push({type:6,index:n}),i.removeAttribute(u));if(Gr.test(i.tagName)){let u=i.textContent.split(V),c=u.length-1;if(c>0){i.textContent=at?at.emptyScript:"";for(let f=0;f<c;f++)i.append(u[f],qe()),ee.nextNode(),o.push({type:2,index:++n});i.append(u[c],qe())}}}else if(i.nodeType===8)if(i.data===Zr)o.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(V,u+1))!==-1;)o.push({type:7,index:n}),u+=V.length-1}n++}}static createElement(e,s){let r=ce.createElement("template");return r.innerHTML=e,r}};function Ae(t,e,s=t,r){if(e===we)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],n=ze(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=Ae(t,i._$AS(t,e.values),i,r)),e}var ca=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:r}=this._$AD,i=(e?.creationScope??ce).importNode(s,!0);ee.currentNode=i;let n=ee.nextNode(),a=0,l=0,o=r[0];for(;o!==void 0;){if(a===o.index){let h;o.type===2?h=new ts(n,n.nextSibling,this,e):o.type===1?h=new o.ctor(n,o.name,o.strings,this,e):o.type===6&&(h=new fa(n,this,e)),this._$AV.push(h),o=r[++l]}a!==o?.index&&(n=ee.nextNode(),a++)}return ee.currentNode=ce,i}p(e){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[s]):(r._$AI(e,r,s),s+=r.strings.length-2)),s++}},ts=class ti{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Ae(this,e,s),ze(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==we&&this._(e):e._$litType$===void 0?e.nodeType===void 0?la(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(ce.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Rt.createElement(Xr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new ca(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(e){let s=Vs.get(e.strings);return s===void 0&&Vs.set(e.strings,s=new Rt(e)),s}k(e){es(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of e)i===s.length?s.push(r=new ti(this.O(qe()),this.O(qe()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=qs(e).nextSibling;qs(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},_t=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(e,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)e=Ae(this,e,s,0),a=!ze(e)||e!==this._$AH&&e!==we,a&&(this._$AH=e);else{let l=e,o,h;for(e=n[0],o=0;o<n.length-1;o++)h=Ae(this,l[r+o],s,o),h===we&&(h=this._$AH[o]),a||=!ze(h)||h!==this._$AH[o],h===x?e=x:e!==x&&(e+=(h??"")+n[o+1]),this._$AH[o]=h}a&&!i&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ha=class extends _t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},ua=class extends _t{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},pa=class extends _t{constructor(e,s,r,i,n){super(e,s,r,i,n),this.type=5}_$AI(e,s=this){if((e=Ae(this,e,s,0)??x)===we)return;let r=this._$AH,i=e===x&&r!==x||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==x&&(r===x||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},fa=class{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ae(this,e)}},ma=Xt.litHtmlPolyfillSupport;ma?.(Rt,ts),(Xt.litHtmlVersions??=[]).push("3.3.3");var _a=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new ts(e.insertBefore(qe(),n),n,void 0,s??{})}return i._$AI(t),i},ss=globalThis,Re=class extends _e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_a(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return we}};Re._$litElement$=!0,Re.finalized=!0,ss.litElementHydrateSupport?.({LitElement:Re});var ga=ss.litElementPolyfillSupport;ga?.({LitElement:Re}),(ss.litElementVersions??=[]).push("4.2.2");var Ys=2e3,ba=12e4,Js="Unsupported file type. Choose a .zip full backup or a .bin config file.";function Et(t){let e=t.toLowerCase();return e.endsWith(".zip")?"archive":e.endsWith(".bin")?"config":null}function $a(t,e){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(t.byteLength);new Uint8Array(s).set(t);let r=new Blob([s],{type:"application/octet-stream"}),i=URL.createObjectURL(r),n=document.createElement("a");n.href=i,n.download=e,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var ae,va=(ae=class extends Re{constructor(...e){super(...e),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return z`
      <div class="stack">
        <section class="card" aria-labelledby="edc-download-heading">
          <h2 id="edc-download-heading">Download backup</h2>
          ${this.renderNotice(this.downloadNotice)}
          <div class="download-row">
            <div class="download-copy">
              <strong>Full backup (.zip)</strong>
              <p class="muted">${this.effectiveZipNotes}</p>
            </div>
            <button
              type="button"
              class="primary"
              data-action="download-backup"
              ?disabled=${this.downloading||this.phase!=="idle"}
              @click=${()=>{this.handleDownload("archive")}}
            >
              ${this.downloading?"Downloading…":"Download full backup (.zip)"}
            </button>
          </div>
          <div class="download-row">
            <div class="download-copy">
              <strong>${this.binFileName} only</strong>
              <p class="muted">${this.effectiveBinNotes}</p>
            </div>
            <button
              type="button"
              data-action="download-config"
              ?disabled=${this.downloading||this.phase!=="idle"}
              @click=${()=>{this.handleDownload("config")}}
            >
              Download ${this.binFileName} only
            </button>
          </div>
        </section>

        <section class="card" aria-labelledby="edc-restore-heading">
          <h2 id="edc-restore-heading">Restore from file</h2>
          <p class="muted">
            Restore a previously downloaded .zip full backup, or a single .bin
            config file. The device validates size, version and CRC and, for a
            full archive, commits all members atomically before rebooting. A
            rejected file changes nothing.
          </p>
          <label class="field" for="edc-restore-file">
            <span class="field-label">Backup file</span>
            <input
              id="edc-restore-file"
              type="file"
              accept=".zip,.bin,application/octet-stream"
              ?disabled=${this.busy}
              @change=${e=>this.handleFileChange(e)}
            />
            ${this.fileError?z`<span class="field-error" role="alert">${this.fileError}</span>`:x}
          </label>
          ${this.selectedFile&&!this.fileError?z`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${Et(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:x}
          ${this.uploadError?z`<div class="banner banner-error" role="alert">
                ${this.uploadError}
              </div>`:x}
          <div class="form-actions">
            <button
              type="button"
              class="danger"
              data-action="upload"
              ?disabled=${!this.selectedFile||!!this.fileError||this.busy}
              @click=${()=>{this.handleUpload()}}
            >
              ${this.uploading?"Uploading…":"Upload & reboot device"}
            </button>
          </div>
        </section>
      </div>
      ${this.renderRebootOverlay()}
    `}renderNotice(e){return e?z`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.message}
    </div>`:x}renderRebootOverlay(){return this.phase==="idle"?x:z`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?z`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:x}
          ${this.phase==="ready"?z`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:x}
          ${this.phase==="timeout"?z`
                <div class="banner banner-error" role="alert">
                  No response after about two minutes. Check the power and
                  network, then keep waiting or dismiss.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.retryReboot()}>
                    Keep waiting
                  </button>
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:x}
        </div>
      </div>
    `}createClient(){return Jn({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(e){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),r=e==="archive"?await s.downloadBackup():await s.downloadConfig();if(!r.ok){this.downloadNotice={kind:"error",message:r.message};return}let i=e==="archive"?this.archiveFileName:this.binFileName;$a(r.data,i),this.downloadNotice={kind:"info",message:e==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(e){let s=e.currentTarget,r=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=r,this.uploadError=null,this.fileError=r?r.size===0?"The selected file is empty.":r.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:Et(r.name)?null:Js:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let e=Et(this.selectedFile.name);if(!e)this.uploadError=Js;else if(window.confirm(e==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let r=this.createClient(),i=e==="archive"?await r.uploadBackup(s):await r.uploadConfig(s);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:e},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let e=this.renderRoot.querySelector("#edc-restore-file");e&&(e.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},Ys)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let e=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let r=await s.json();e=!!r&&typeof r=="object"&&r.healty===!0}}catch{e=!1}this.isConnected&&this.phase==="rebooting"&&(e?this.phase="ready":(this._attempts+=1,this._attempts*Ys>=ba?this.phase="timeout":this.schedulePoll()))}},ae.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},ae.styles=Zn`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edc-accent, #2563eb);
      --_danger: var(--edc-danger, #dc2626);
      --_muted: var(--edc-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .stack {
      display: grid;
      gap: 1rem;
      max-width: 34rem;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h2 {
      font-size: 1rem;
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0 0 0.75rem;
      font-size: 0.875rem;
      line-height: 1.45;
    }

    .muted {
      color: var(--_muted);
    }

    .form-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .download-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.75rem 0;
      border-top: 1px solid var(--_border);
    }

    .download-row:first-of-type {
      border-top: 0;
      padding-top: 0;
    }

    .download-row:last-of-type {
      padding-bottom: 0;
    }

    .download-copy {
      min-width: 0;
    }

    .download-copy p {
      margin-bottom: 0;
    }

    .download-copy strong {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.2rem;
    }

    button {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.85rem;
      border-radius: 8px;
      border: 1px solid var(--_border);
      background: var(--_surface);
      color: inherit;
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      border-color: var(--_accent);
    }

    button.primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    button.danger {
      background: var(--_danger);
      border-color: var(--_danger);
      color: #ffffff;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .field {
      display: grid;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
    }

    .field-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
    }

    input[type='file'] {
      font: inherit;
      font-size: 0.85rem;
      max-width: 100%;
    }

    .field-error {
      color: var(--_danger);
      font-size: 0.8rem;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-info {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
    }

    .banner-success {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #15803d;
    }

    .reboot-overlay {
      position: fixed;
      inset: 0;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background: rgba(15, 23, 42, 0.55);
    }

    .reboot-dialog {
      width: min(26rem, 100%);
      background: var(--_surface);
      border-radius: 12px;
      padding: 1.25rem;
      box-shadow: 0 20px 50px rgba(15, 23, 42, 0.35);
    }

    .spinner {
      width: 1.5rem;
      height: 1.5rem;
      border: 3px solid var(--_border);
      border-top-color: var(--_accent);
      border-radius: 50%;
      animation: edc-spin 0.9s linear infinite;
    }

    @keyframes edc-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner {
        animation: none;
      }
    }
  `,ae);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",va);var Ks="Invalid settings response.";function ya(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function wa(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function si(t,e){return wa(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function ri(t,e){let s=e;try{let r=await t.text();if(r.length>0)try{s=ya(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}function Aa(t){if(!t||typeof t!="object")return;let{host:e,uri:s,port:r,enabled:i}=t;if(typeof e=="string"&&typeof s=="string"&&typeof r=="number"&&Number.isFinite(r)&&typeof i=="boolean")return{host:e,uri:s,port:r,enabled:i}}async function ii(t){let e;try{e=await t.json()}catch{return{ok:!1,status:t.status,message:Ks}}let s=Aa(e);return s?{ok:!0,data:s}:{ok:!1,status:t.status,message:Ks}}async function Sa(t,e,s){let r;try{r=await fetch(t,{headers:{Accept:"application/json",...e},signal:s})}catch(i){return si(i,s)}return r.ok?ii(r):ri(r,"Could not load the logger settings from the device.")}async function ka(t,e,s,r){let i;try{i=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...s},body:JSON.stringify(e),signal:r})}catch(n){return si(n,r)}return i.ok?ii(i):ri(i,"The device rejected the logger settings.")}function Ea(t={}){let e=t.baseUrl??"",s=t.settingsPath??"/api/log/settings",r=t.headers??{},i=`${e}${s}`;return{getSettings(n){return Sa(i,r,n)},saveSettings(n,a){return ka(i,n,r,a)}}}var tt=globalThis,rs=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,is=Symbol(),Zs=new WeakMap,ni=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==is)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(rs&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Zs.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Zs.set(e,t))}return t}toString(){return this.cssText}},xa=t=>new ni(typeof t=="string"?t:t+"",void 0,is),Pa=(t,...e)=>new ni(t.length===1?t[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,is),Ca=(t,e)=>{if(rs)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=tt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},Gs=rs?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return xa(s)})(t):t,{is:Ma,defineProperty:Ta,getOwnPropertyDescriptor:Ua,getOwnPropertyNames:Na,getOwnPropertySymbols:Da,getPrototypeOf:Ra}=Object,gt=globalThis,Xs=gt.trustedTypes,Ha=Xs?Xs.emptyScript:"",Ia=gt.reactiveElementPolyfillSupport,He=(t,e)=>t,Ht={toAttribute(t,e){switch(e){case Boolean:t=t?Ha:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ai=(t,e)=>!Ma(t,e),er={attribute:!0,type:String,converter:Ht,reflect:!1,useDefault:!1,hasChanged:ai};Symbol.metadata??=Symbol("metadata"),gt.litPropertyMetadata??=new WeakMap;var ge=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=er){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Ta(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=Ua(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);i?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??er}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;let t=Ra(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){let e=this.properties,s=[...Na(e),...Da(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(Gs(r))}else t!==void 0&&e.push(Gs(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ca(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute===void 0?Ht:s.converter).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?Ht:i.converter;this._$Em=r;let a=n.fromAttribute(e,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(t!==void 0){let n=this.constructor;if(r===!1&&(i=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??ai)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:n}=i,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ge.elementStyles=[],ge.shadowRootOptions={mode:"open"},ge[He("elementProperties")]=new Map,ge[He("finalized")]=new Map,Ia?.({ReactiveElement:ge}),(gt.reactiveElementVersions??=[]).push("2.1.2");var ns=globalThis,tr=t=>t,ot=ns.trustedTypes,sr=ot?ot.createPolicy("lit-html",{createHTML:t=>t}):void 0,oi="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,li="?"+Y,Oa=`<${li}>`,he=document,Be=()=>he.createComment(""),Fe=t=>t===null||typeof t!="object"&&typeof t!="function",as=Array.isArray,La=t=>as(t)||typeof t?.[Symbol.iterator]=="function",xt=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rr=/-->/g,ir=/>/g,G=RegExp(`>|${xt}(?:([^\\s"'>=/]+)(${xt}*=${xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nr=/'/g,ar=/"/g,di=/^(?:script|style|textarea|title)$/i,or=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),Se=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),lr=new WeakMap,te=he.createTreeWalker(he,129);function ci(t,e){if(!as(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return sr===void 0?e:sr.createHTML(e)}var Wa=(t,e)=>{let s=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Te;for(let l=0;l<s;l++){let o=t[l],h,p,u=-1,c=0;for(;c<o.length&&(a.lastIndex=c,p=a.exec(o),p!==null);)c=a.lastIndex,a===Te?p[1]==="!--"?a=rr:p[1]===void 0?p[2]===void 0?p[3]!==void 0&&(a=G):(di.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=G):a=ir:a===G?p[0]===">"?(a=i??Te,u=-1):p[1]===void 0?u=-2:(u=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?G:p[3]==='"'?ar:nr):a===ar||a===nr?a=G:a===rr||a===ir?a=Te:(a=G,i=void 0);let f=a===G&&t[l+1].startsWith("/>")?" ":"";n+=a===Te?o+Oa:u>=0?(r.push(h),o.slice(0,u)+oi+o.slice(u)+Y+f):o+Y+(u===-2?l:f)}return[ci(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},It=class hi{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,l=e.length-1,o=this.parts,[h,p]=Wa(e,s);if(this.el=hi.createElement(h,r),te.currentNode=this.el.content,s===2||s===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=te.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(oi)){let c=p[a++],f=i.getAttribute(u).split(Y),_=/([.?@])?(.*)/.exec(c);o.push({type:1,index:n,name:_[2],strings:f,ctor:_[1]==="."?za:_[1]==="?"?Ba:_[1]==="@"?Fa:bt}),i.removeAttribute(u)}else u.startsWith(Y)&&(o.push({type:6,index:n}),i.removeAttribute(u));if(di.test(i.tagName)){let u=i.textContent.split(Y),c=u.length-1;if(c>0){i.textContent=ot?ot.emptyScript:"";for(let f=0;f<c;f++)i.append(u[f],Be()),te.nextNode(),o.push({type:2,index:++n});i.append(u[c],Be())}}}else if(i.nodeType===8)if(i.data===li)o.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(Y,u+1))!==-1;)o.push({type:7,index:n}),u+=Y.length-1}n++}}static createElement(e,s){let r=he.createElement("template");return r.innerHTML=e,r}};function ke(t,e,s=t,r){if(e===Se)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Fe(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=ke(t,i._$AS(t,e.values),i,r)),e}var qa=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??he).importNode(e,!0);te.currentNode=r;let i=te.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let o;l.type===2?o=new os(i,i.nextSibling,this,t):l.type===1?o=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(o=new ja(i,this,t)),this._$AV.push(o),l=s[++a]}n!==l?.index&&(i=te.nextNode(),n++)}return te.currentNode=he,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(t[e]):(s._$AI(t,s,e),e+=s.strings.length-2)),e++}},os=class ui{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=ke(this,e,s),Fe(e)?e===D||e==null||e===""?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==Se&&this._(e):e._$litType$===void 0?e.nodeType===void 0?La(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==D&&Fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(he.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=It.createElement(ci(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new qa(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(e){let s=lr.get(e.strings);return s===void 0&&lr.set(e.strings,s=new It(e)),s}k(e){as(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of e)i===s.length?s.push(r=new ui(this.O(Be()),this.O(Be()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=tr(e).nextSibling;tr(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},bt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=D}_$AI(t,e=this,s,r){let i=this.strings,n=!1;if(i===void 0)t=ke(this,t,e,0),n=!Fe(t)||t!==this._$AH&&t!==Se,n&&(this._$AH=t);else{let a=t,l,o;for(t=i[0],l=0;l<i.length-1;l++)o=ke(this,a[s+l],e,l),o===Se&&(o=this._$AH[l]),n||=!Fe(o)||o!==this._$AH[l],o===D?t=D:t!==D&&(t+=(o??"")+i[l+1]),this._$AH[l]=o}n&&!r&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},za=class extends bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}},Ba=class extends bt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}},Fa=class extends bt{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=ke(this,t,e,0)??D)===Se)return;let s=this._$AH,r=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==D&&(s===D||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ja=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){ke(this,t)}},Qa=ns.litHtmlPolyfillSupport;Qa?.(It,os),(ns.litHtmlVersions??=[]).push("3.3.3");var Va=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new os(e.insertBefore(Be(),n),n,void 0,s??{})}return i._$AI(t),i},ls=globalThis,Ie=class extends ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Va(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Se}};Ie._$litElement$=!0,Ie.finalized=!0,ls.litElementHydrateSupport?.({LitElement:Ie});var Ya=ls.litElementPolyfillSupport;Ya?.({LitElement:Ie}),(ls.litElementVersions??=[]).push("4.2.2");var oe,Ja=(oe=class extends Ie{constructor(...e){super(...e),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return or`
      <div class="stack">
        <section class="card" aria-labelledby="edu-log-heading">
          <h2 id="edu-log-heading">${this.deviceName} settings</h2>
          <p class="muted">
            Configure the network logger on the ${this.deviceName}. Changes apply
            immediately; persistence depends on the device firmware.
          </p>
          ${this.renderNotice(this.notice)}
          <label class="field" for="edu-log-host">
            <span class="field-label">Host</span>
            <input
              id="edu-log-host"
              type="text"
              .value=${this.formHost}
              maxlength=${this.maxHostLength}
              ?disabled=${this.loading||this.saving}
              @input=${e=>this.handleHostInput(e)}
            />
          </label>
          <label class="field" for="edu-log-uri">
            <span class="field-label">URI</span>
            <input
              id="edu-log-uri"
              type="text"
              .value=${this.formUri}
              maxlength=${this.maxHostLength}
              ?disabled=${this.loading||this.saving}
              @input=${e=>this.handleUriInput(e)}
            />
          </label>
          <label class="field" for="edu-log-port">
            <span class="field-label">Port</span>
            <input
              id="edu-log-port"
              type="number"
              min="1"
              max="65535"
              inputmode="numeric"
              .value=${this.formPort}
              ?disabled=${this.loading||this.saving}
              @input=${e=>this.handlePortInput(e)}
            />
          </label>
          <label class="checkbox-row" for="edu-log-enabled">
            <input
              id="edu-log-enabled"
              type="checkbox"
              .checked=${this.formEnabled}
              ?disabled=${this.loading||this.saving}
              @change=${e=>this.handleEnabledChange(e)}
            />
            <span>Enabled</span>
          </label>
          <div class="form-actions">
            <button
              type="button"
              class="primary"
              data-action="save"
              ?disabled=${this.loading||this.saving}
              @click=${()=>{this.handleSave()}}
            >
              ${this.saving?"Saving…":"Save"}
            </button>
            <button
              type="button"
              data-action="reload"
              ?disabled=${this.loading||this.saving}
              @click=${()=>{this.load()}}
            >
              ${this.loading?"Loading…":"Reload"}
            </button>
          </div>
        </section>
      </div>
    `}renderNotice(e){return e?or`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.text}
    </div>`:D}createClient(){return Ea({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let e=await this.createClient().getSettings();if(!e.ok){this.notice={kind:"error",text:e.message};return}this.applySettings(e.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(e){this.formHost=e.host,this.formUri=e.uri,this.formPort=String(e.port),this.formEnabled=e.enabled}handleHostInput(e){this.formHost=e.currentTarget.value}handleUriInput(e){this.formUri=e.currentTarget.value}handlePortInput(e){this.formPort=e.currentTarget.value}handleEnabledChange(e){this.formEnabled=e.currentTarget.checked}validate(){let e=this.formHost.trim(),s=this.formUri.trim();if(e.length===0)return"Host is required.";if(e.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(s.length===0)return"URI is required.";if(s.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let r=this.formPort.trim();if(!/^\d+$/.test(r))return"Port must be a whole number between 1 and 65535.";let i=Number(r);return!Number.isInteger(i)||i<1||i>65535?"Port must be a whole number between 1 and 65535.":{host:e,uri:s,port:i,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let e=this.validate();if(typeof e=="string")this.notice={kind:"error",text:e};else{this.saving=!0,this.notice=null;try{let s=await this.createClient().saveSettings(e);if(!s.ok){this.notice={kind:"error",text:s.message};return}this.applySettings(s.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:s.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},oe.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},oe.styles=Pa`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edu-accent, #2563eb);
      --_danger: var(--edu-danger, #dc2626);
      --_muted: var(--edu-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .stack {
      display: grid;
      gap: 1rem;
      max-width: 34rem;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h2 {
      font-size: 1rem;
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0 0 0.75rem;
      font-size: 0.875rem;
      line-height: 1.45;
    }

    .muted {
      color: var(--_muted);
    }

    .field {
      display: grid;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
    }

    .field-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
    }

    input[type='text'],
    input[type='number'] {
      font: inherit;
      font-size: 0.875rem;
      padding: 0.45rem 0.6rem;
      border: 1px solid var(--_border);
      border-radius: 8px;
      background: var(--_surface);
      color: inherit;
      max-width: 100%;
    }

    input:focus {
      outline: 2px solid var(--_accent);
      outline-offset: 1px;
    }

    .checkbox-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
    }

    .form-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    button {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.85rem;
      border-radius: 8px;
      border: 1px solid var(--_border);
      background: var(--_surface);
      color: inherit;
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      border-color: var(--_accent);
    }

    button.primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-info {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
    }
  `,oe);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",Ja);const dr=document.getElementById("app");dr&&vi(d(pn,{}),dr);
