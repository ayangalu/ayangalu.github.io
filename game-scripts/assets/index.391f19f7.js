var xl=Object.defineProperty;var kl=(e,t,r)=>t in e?xl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ae=(e,t,r)=>(kl(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function De(e,t){return new Promise(r=>{function s(i){i.target===e&&(e.removeEventListener(t,s),r())}e.addEventListener(t,s)})}var $l=Object.create,us=Object.defineProperty,Cl=Object.defineProperties,Ga=Object.getOwnPropertyDescriptor,Sl=Object.getOwnPropertyDescriptors,Ja=Object.getOwnPropertyNames,Es=Object.getOwnPropertySymbols,Al=Object.getPrototypeOf,_o=Object.prototype.hasOwnProperty,Qa=Object.prototype.propertyIsEnumerable,Ho=(e,t,r)=>t in e?us(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ae=(e,t)=>{for(var r in t||(t={}))_o.call(t,r)&&Ho(e,r,t[r]);if(Es)for(var r of Es(t))Qa.call(t,r)&&Ho(e,r,t[r]);return e},Fe=(e,t)=>Cl(e,Sl(t)),wo=(e,t)=>{var r={};for(var s in e)_o.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&Es)for(var s of Es(e))t.indexOf(s)<0&&Qa.call(e,s)&&(r[s]=e[s]);return r},zt=(e,t)=>function(){return t||(0,e[Ja(e)[0]])((t={exports:{}}).exports,t),t.exports},zl=(e,t)=>{for(var r in t)us(e,r,{get:t[r],enumerable:!0})},El=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ja(t))!_o.call(e,i)&&i!==r&&us(e,i,{get:()=>t[i],enumerable:!(s=Ga(t,i))||s.enumerable});return e},Tl=(e,t,r)=>(r=e!=null?$l(Al(e)):{},El(t||!e||!e.__esModule?us(r,"default",{value:e,enumerable:!0}):r,e)),d=(e,t,r,s)=>{for(var i=s>1?void 0:s?Ga(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&us(t,r,i),i};function de(e,t,r){return new Promise(s=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Fe(ae({},r),{duration:Ol()?0:r.duration}));i.addEventListener("cancel",s,{once:!0}),i.addEventListener("finish",s,{once:!0})})}function Zo(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Ol(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function fe(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const s=requestAnimationFrame(r);t.addEventListener("cancel",()=>s,{once:!0}),t.addEventListener("finish",()=>s,{once:!0}),t.cancel()})))}function Ts(e,t){return e.map(r=>Fe(ae({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var en=new Map,Il=new WeakMap;function Ll(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function qo(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function se(e,t){en.set(e,Ll(t))}function ue(e,t,r){const s=Il.get(e);if(s!=null&&s[t])return qo(s[t],r.dir);const i=en.get(t);return i?qo(i,r.dir):{keyframes:[],options:{duration:0}}}var Ki=new Set,Dl=new MutationObserver(sn),Gt=new Map,tn=document.documentElement.dir||"ltr",rn=document.documentElement.lang||navigator.language,Tr;Dl.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Pl(...e){e.map(t=>{const r=t.$code.toLowerCase();Gt.has(r)?Gt.set(r,Object.assign(Object.assign({},Gt.get(r)),t)):Gt.set(r,t),Tr||(Tr=t)}),sn()}function sn(){tn=document.documentElement.dir||"ltr",rn=document.documentElement.lang||navigator.language,[...Ki.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Rl=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ki.add(this.host)}hostDisconnected(){Ki.delete(this.host)}dir(){return`${this.host.dir||tn}`.toLowerCase()}lang(){return`${this.host.lang||rn}`.toLowerCase()}term(e,...t){var r,s;const i=new Intl.Locale(this.lang()),o=i==null?void 0:i.language.toLowerCase(),a=(s=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&s!==void 0?s:"",n=Gt.get(`${o}-${a}`),l=Gt.get(o);let c;if(n&&n[e])c=n[e];else if(l&&l[e])c=l[e];else if(Tr&&Tr[e])c=Tr[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof c=="function"?c(...t):c}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},te=class extends Rl{},Ml={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Pl(Ml);var Ue=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function on(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(r+=s.textContent)}),r}var Cs=window,xo=Cs.ShadowRoot&&(Cs.ShadyCSS===void 0||Cs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ko=Symbol(),Ko=new WeakMap,an=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ko)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(xo&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Ko.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ko.set(t,e))}return e}toString(){return this.cssText}},Bl=e=>new an(typeof e=="string"?e:e+"",void 0,ko),M=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,i,o)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new an(r,e,ko)},Vl=(e,t)=>{xo?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const s=document.createElement("style"),i=Cs.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)})},Wo=xo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return Bl(r)})(e):e,_i,Os=window,Yo=Os.trustedTypes,Ul=Yo?Yo.emptyScript:"",Xo=Os.reactiveElementPolyfillSupport,Br={toAttribute(e,t){switch(t){case Boolean:e=e?Ul:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},nn=(e,t)=>t!==e&&(t==t||e==e),wi={attribute:!0,type:String,converter:Br,reflect:!1,hasChanged:nn},Wt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const s=this._$Ep(r,t);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,t=wi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||wi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of r)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(Wo(s))}else e!==void 0&&t.push(Wo(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Vl(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=wi){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Br).toAttribute(t,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,t){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Br;this._$El=i,this[i]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||nn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Wt.finalized=!0,Wt.elementProperties=new Map,Wt.elementStyles=[],Wt.shadowRootOptions={mode:"open"},Xo==null||Xo({ReactiveElement:Wt}),((_i=Os.reactiveElementVersions)!==null&&_i!==void 0?_i:Os.reactiveElementVersions=[]).push("1.4.2");var xi,Is=window,ir=Is.trustedTypes,Go=ir?ir.createPolicy("lit-html",{createHTML:e=>e}):void 0,_t=`lit$${(Math.random()+"").slice(9)}$`,ln="?"+_t,Nl=`<${ln}>`,or=document,Vr=(e="")=>or.createComment(e),Ur=e=>e===null||typeof e!="object"&&typeof e!="function",cn=Array.isArray,Fl=e=>cn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",kr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jo=/-->/g,Qo=/>/g,Et=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ea=/'/g,ta=/"/g,dn=/^(?:script|style|textarea|title)$/i,jl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),C=jl(1),Ee=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),ra=new WeakMap,Qt=or.createTreeWalker(or,129,null,!1),Hl=(e,t)=>{const r=e.length-1,s=[];let i,o=t===2?"<svg>":"",a=kr;for(let l=0;l<r;l++){const c=e[l];let h,u,p=-1,g=0;for(;g<c.length&&(a.lastIndex=g,u=a.exec(c),u!==null);)g=a.lastIndex,a===kr?u[1]==="!--"?a=Jo:u[1]!==void 0?a=Qo:u[2]!==void 0?(dn.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=Et):u[3]!==void 0&&(a=Et):a===Et?u[0]===">"?(a=i!=null?i:kr,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?Et:u[3]==='"'?ta:ea):a===ta||a===ea?a=Et:a===Jo||a===Qo?a=kr:(a=Et,i=void 0);const b=a===Et&&e[l+1].startsWith("/>")?" ":"";o+=a===kr?c+Nl:p>=0?(s.push(h),c.slice(0,p)+"$lit$"+c.slice(p)+_t+b):c+_t+(p===-2?(s.push(void 0),l):b)}const n=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Go!==void 0?Go.createHTML(n):n,s]},Ls=class{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,n=this.parts,[l,c]=Hl(e,t);if(this.el=Ls.createElement(l,r),Qt.currentNode=this.el.content,t===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=Qt.nextNode())!==null&&n.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(_t)){const p=c[o++];if(h.push(u),p!==void 0){const g=s.getAttribute(p.toLowerCase()+"$lit$").split(_t),b=/([.?@])?(.*)/.exec(p);n.push({type:1,index:i,name:b[2],strings:g,ctor:b[1]==="."?ql:b[1]==="?"?Wl:b[1]==="@"?Yl:oi})}else n.push({type:6,index:i})}for(const u of h)s.removeAttribute(u)}if(dn.test(s.tagName)){const h=s.textContent.split(_t),u=h.length-1;if(u>0){s.textContent=ir?ir.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],Vr()),Qt.nextNode(),n.push({type:2,index:++i});s.append(h[u],Vr())}}}else if(s.nodeType===8)if(s.data===ln)n.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(_t,h+1))!==-1;)n.push({type:7,index:i}),h+=_t.length-1}i++}}static createElement(e,t){const r=or.createElement("template");return r.innerHTML=e,r}};function ar(e,t,r=e,s){var i,o,a,n;if(t===Ee)return t;let l=s!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[s]:r._$Cl;const c=Ur(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,s)),s!==void 0?((a=(n=r)._$Co)!==null&&a!==void 0?a:n._$Co=[])[s]=l:r._$Cl=l),l!==void 0&&(t=ar(e,l._$AS(e,t.values),l,s)),t}var Zl=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:s}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:or).importNode(r,!0);Qt.currentNode=i;let o=Qt.nextNode(),a=0,n=0,l=s[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new ii(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Xl(o,this,e)),this.u.push(c),l=s[++n]}a!==(l==null?void 0:l.index)&&(o=Qt.nextNode(),a++)}return i}p(e){let t=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ii=class{constructor(e,t,r,s){var i;this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ar(this,e,t),Ur(e)?e===le||e==null||e===""?(this._$AH!==le&&this._$AR(),this._$AH=le):e!==this._$AH&&e!==Ee&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fl(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==le&&Ur(this._$AH)?this._$AA.nextSibling.data=e:this.T(or.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ls.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.p(r);else{const o=new Zl(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let t=ra.get(e.strings);return t===void 0&&ra.set(e.strings,t=new Ls(e)),t}k(e){cn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const i of e)s===t.length?t.push(r=new ii(this.O(Vr()),this.O(Vr()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},oi=class{constructor(e,t,r,s,i){this.type=1,this._$AH=le,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=le}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=ar(this,e,t,0),o=!Ur(e)||e!==this._$AH&&e!==Ee,o&&(this._$AH=e);else{const a=e;let n,l;for(e=i[0],n=0;n<i.length-1;n++)l=ar(this,a[r+n],t,n),l===Ee&&(l=this._$AH[n]),o||(o=!Ur(l)||l!==this._$AH[n]),l===le?e=le:e!==le&&(e+=(l!=null?l:"")+i[n+1]),this._$AH[n]=l}o&&!s&&this.j(e)}j(e){e===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ql=class extends oi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===le?void 0:e}},Kl=ir?ir.emptyScript:"",Wl=class extends oi{constructor(){super(...arguments),this.type=4}j(e){e&&e!==le?this.element.setAttribute(this.name,Kl):this.element.removeAttribute(this.name)}},Yl=class extends oi{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=ar(this,e,t,0))!==null&&r!==void 0?r:le)===Ee)return;const s=this._$AH,i=e===le&&s!==le||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==le&&(s===le||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Xl=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ar(this,e)}},sa=Is.litHtmlPolyfillSupport;sa==null||sa(Ls,ii),((xi=Is.litHtmlVersions)!==null&&xi!==void 0?xi:Is.litHtmlVersions=[]).push("2.4.0");var Gl=(e,t,r)=>{var s,i;const o=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:t;let a=o._$litPart$;if(a===void 0){const n=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=a=new ii(t.insertBefore(Vr(),n),n,void 0,r!=null?r:{})}return a._$AI(e),a},ki,$i,Or=class extends Wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Gl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Ee}};Or.finalized=!0,Or._$litElement$=!0,(ki=globalThis.litElementHydrateSupport)===null||ki===void 0||ki.call(globalThis,{LitElement:Or});var ia=globalThis.litElementPolyfillSupport;ia==null||ia({LitElement:Or});(($i=globalThis.litElementVersions)!==null&&$i!==void 0?$i:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B=M`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Jl=M`
  ${B}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,at={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},hs=e=>(...t)=>({_$litDirective$:e,values:t}),ai=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var N=hs(class extends ai{constructor(e){var t;if(super(e),e.type!==at.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,s;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(t)}const i=e.element.classList;this.nt.forEach(o=>{o in t||(i.remove(o),this.nt.delete(o))});for(const o in t){const a=!!t[o];a===this.nt.has(o)||((s=this.st)===null||s===void 0?void 0:s.has(o))||(a?(i.add(o),this.nt.add(o)):(i.remove(o),this.nt.delete(o)))}return Ee}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(e,t){const r=ae({waitUntilFirstUpdate:!1},t);return(s,i)=>{const{update:o}=s;if(e in s){const a=e;s.update=function(n){if(n.has(a)){const l=n.get(a),c=this[a];l!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](l,c)}o.call(this,n)}}}}var D=e=>t=>typeof t=="function"?((r,s)=>(customElements.define(r,s),s))(e,t):((r,s)=>{const{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(a){customElements.define(r,a)}}})(e,t),Ql=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Fe(ae({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function f(e){return(t,r)=>r!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(e,t,r):Ql(e,t)}function R(e){return f(Fe(ae({},e),{state:!0}))}var un=({finisher:e,descriptor:t})=>(r,s)=>{var i;if(s===void 0){const o=(i=r.originalKey)!==null&&i!==void 0?i:r.key,a=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:Fe(ae({},r),{key:o});return e!=null&&(a.finisher=function(n){e(n,o)}),a}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,s,t(s)),e==null||e(o,s)}};function z(e,t){return un({descriptor:r=>{const s={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;s.get=function(){var o,a;return this[i]===void 0&&(this[i]=(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&a!==void 0?a:null),this[i]}}return s}})}function ec(e){return un({descriptor:t=>({async get(){var r;return await this.updateComplete,(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}var Ci;((Ci=window.HTMLSlotElement)===null||Ci===void 0?void 0:Ci.prototype.assignedElements)!=null;var I=class extends Or{emit(e,t){const r=new CustomEvent(e,ae({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};d([f()],I.prototype,"dir",2);d([f()],I.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Ge=class extends I{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"icon","suffix"),this.localize=new te(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,De(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,De(this,"sl-after-hide")}async toast(){return new Promise(e=>{qt.parentElement===null&&document.body.append(qt),qt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{qt.removeChild(this),e(),qt.querySelector("sl-alert")===null&&qt.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await fe(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=ue(this,"alert.show",{dir:this.localize.dir()});await de(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await fe(this.base);const{keyframes:e,options:t}=ue(this,"alert.hide",{dir:this.localize.dir()});await de(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return C`
      <div
        part="base"
        class=${N({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};Ge.styles=Jl;d([z('[part~="base"]')],Ge.prototype,"base",2);d([f({type:Boolean,reflect:!0})],Ge.prototype,"open",2);d([f({type:Boolean,reflect:!0})],Ge.prototype,"closable",2);d([f({reflect:!0})],Ge.prototype,"variant",2);d([f({type:Number})],Ge.prototype,"duration",2);d([$("open",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleOpenChange",1);d([$("duration")],Ge.prototype,"handleDurationChange",1);Ge=d([D("sl-alert")],Ge);se("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});se("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var tc=M`
  ${B}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,hn=Symbol.for(""),rc=e=>{if((e==null?void 0:e.r)===hn)return e==null?void 0:e._$litStatic$},Ds=(e,...t)=>({_$litStatic$:t.reduce((r,s,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0]),r:hn}),oa=new Map,sc=e=>(t,...r)=>{const s=r.length;let i,o;const a=[],n=[];let l,c=0,h=!1;for(;c<s;){for(l=t[c];c<s&&(o=r[c],(i=rc(o))!==void 0);)l+=i+t[++c],h=!0;n.push(o),a.push(l),c++}if(c===s&&a.push(t[s]),h){const u=a.join("$$lit$$");(t=oa.get(u))===void 0&&(a.raw=a,oa.set(u,t=a)),r=n}return e(t,...r)},Ir=sc(C);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var E=e=>e!=null?e:le;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te=class extends I{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}render(){const e=!!this.href,t=e?Ds`a`:Ds`button`;return Ir`
      <${t}
        part="base"
        class=${N({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${E(e?void 0:this.disabled)}
        type=${E(e?void 0:"button")}
        href=${E(e?this.href:void 0)}
        target=${E(e?this.target:void 0)}
        download=${E(e?this.download:void 0)}
        rel=${E(e&&this.target?"noreferrer noopener":void 0)}
        role=${E(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${E(this.name)}
          library=${E(this.library)}
          src=${E(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Te.styles=tc;d([R()],Te.prototype,"hasFocus",2);d([z(".icon-button")],Te.prototype,"button",2);d([f()],Te.prototype,"name",2);d([f()],Te.prototype,"library",2);d([f()],Te.prototype,"src",2);d([f()],Te.prototype,"href",2);d([f()],Te.prototype,"target",2);d([f()],Te.prototype,"download",2);d([f()],Te.prototype,"label",2);d([f({type:Boolean,reflect:!0})],Te.prototype,"disabled",2);Te=d([D("sl-icon-button")],Te);var Wi="";function Yi(e){Wi=e}function ic(){if(!Wi){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)Yi(t.getAttribute("data-shoelace"));else{const r=e.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src));let s="";r&&(s=r.getAttribute("src")),Yi(s.split("/").slice(0,-1).join("/"))}}return Wi.replace(/\/$/,"")}var oc={name:"default",resolver:e=>`${ic()}/assets/icons/${e}.svg`},ac=oc,aa={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},nc={name:"system",resolver:e=>e in aa?`data:image/svg+xml,${encodeURIComponent(aa[e])}`:""},lc=nc,cc=[ac,lc],Xi=[];function dc(e){Xi.push(e)}function uc(e){Xi=Xi.filter(t=>t!==e)}function na(e){return cc.find(t=>t.name===e)}var Si=new Map;function pn(e,t="cors"){if(Si.has(e))return Si.get(e);const r=fetch(e,{mode:t}).then(async s=>({ok:s.ok,status:s.status,html:await s.text()}));return Si.set(e,r),r}var Ai=new Map;async function hc(e){if(Ai.has(e))return Ai.get(e);const t=await pn(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const s=document.createElement("div");s.innerHTML=t.html;const i=s.firstElementChild;r.svg=(i==null?void 0:i.tagName.toLowerCase())==="svg"?i.outerHTML:""}return Ai.set(e,r),r}var pc=M`
  ${B}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ps=class extends ai{constructor(e){if(super(e),this.it=le,e.type!==at.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===le||e==null)return this._t=void 0,this.it=e;if(e===Ee)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ps.directiveName="unsafeHTML",Ps.resultType=1;var la=hs(Ps),Gi=class extends Ps{};Gi.directiveName="unsafeSVG",Gi.resultType=2;var fc=hs(Gi),zi,Je=class extends I{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),dc(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),uc(this)}getUrl(){const e=na(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=na(this.library),r=this.getUrl();if(zi||(zi=new DOMParser),r)try{const s=await hc(r);if(r!==this.getUrl())return;if(s.ok){const o=zi.parseFromString(s.svg,"text/html").body.querySelector("svg");o!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,o),this.svg=o.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){return C` ${fc(this.svg)} `}};Je.styles=pc;d([R()],Je.prototype,"svg",2);d([f({reflect:!0})],Je.prototype,"name",2);d([f()],Je.prototype,"src",2);d([f()],Je.prototype,"label",2);d([f({reflect:!0})],Je.prototype,"library",2);d([$("label")],Je.prototype,"handleLabelChange",1);d([$("name"),$("src"),$("library")],Je.prototype,"setIcon",1);Je=d([D("sl-icon")],Je);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mc=M`
  ${B}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`,nr=class extends I{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return C`
      <div
        part="base"
        class=${N({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${e?C`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${E(this.target?this.target:void 0)}"
                rel=${E(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:C`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `}};nr.styles=mc;d([f()],nr.prototype,"href",2);d([f()],nr.prototype,"target",2);d([f()],nr.prototype,"rel",2);nr=d([D("sl-breadcrumb-item")],nr);var gc=M`
  ${B}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,lr=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const s=t.querySelector('[slot="separator"]');s===null?t.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),C`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
      </slot>
    `}};lr.styles=gc;d([z("slot")],lr.prototype,"defaultSlot",2);d([z('slot[name="separator"]')],lr.prototype,"separatorSlot",2);d([f()],lr.prototype,"label",2);lr=d([D("sl-breadcrumb")],lr);var fn=M`
  ${B}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,bc=class extends Event{constructor(e){super("formdata"),this.formData=e}},vc=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new bc(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const s=this.getAll(e),i=s.indexOf(r.value);i!==-1&&s.splice(i,1),s.push(t),this.set(e,s)}else super.append(e,t);r.value=t}};function yc(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function ca(){!window.FormData||yc()||(window.FormData=vc,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?ca():window.addEventListener("DOMContentLoaded",()=>ca());var $r=new WeakMap,da=new WeakMap,Cr=new WeakMap,bt=class{constructor(e,t){(this.host=e).addController(this),this.options=ae({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var s;return(s=r.disabled)!=null?s:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,s)=>r.value=s},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&($r.has(this.form)?$r.get(this.form).add(this.host):$r.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Cr.has(this.form)||(Cr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var e;this.form&&((e=$r.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Cr.has(this.form)&&(this.form.reportValidity=Cr.get(this.form),Cr.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var e;const t=this.host,r=Boolean(da.get(t)),s=Boolean(t.invalid),i=Boolean(t.required);(e=this.form)!=null&&e.noValidate?(t.removeAttribute("data-required"),t.removeAttribute("data-optional"),t.removeAttribute("data-invalid"),t.removeAttribute("data-valid"),t.removeAttribute("data-user-invalid"),t.removeAttribute("data-user-valid")):(t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",s),t.toggleAttribute("data-valid",!s),t.toggleAttribute("data-user-invalid",s&&r),t.toggleAttribute("data-user-valid",!s&&r))}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),i=this.host.tagName.toLowerCase()==="sl-button";!t&&!i&&typeof r=="string"&&typeof s<"u"&&(Array.isArray(s)?s.forEach(o=>{e.formData.append(r,o.toString())}):e.formData.append(r,s.toString()))}handleFormSubmit(e){var t;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=$r.get(this.form))==null||t.forEach(i=>{this.setUserInteracted(i,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){da.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&r.setAttribute(s,t.getAttribute(s))})),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},Q=class extends I{constructor(){super(...arguments),this.formSubmitController=new bt(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new Ue(this,"[default]","prefix","suffix"),this.localize=new te(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}isButton(){return!this.href}isLink(){return!!this.href}render(){const e=this.isLink(),t=e?Ds`a`:Ds`button`;return Ir`
      <${t}
        part="base"
        class=${N({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${E(e?void 0:this.disabled)}
        type=${E(e?void 0:this.type)}
        title=${this.title}
        name=${E(e?void 0:this.name)}
        value=${E(e?void 0:this.value)}
        href=${E(e?this.href:void 0)}
        target=${E(e?this.target:void 0)}
        download=${E(e?this.download:void 0)}
        rel=${E(e&&this.target?"noreferrer noopener":void 0)}
        role=${E(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ir` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ir`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};Q.styles=fn;d([z(".button")],Q.prototype,"button",2);d([R()],Q.prototype,"hasFocus",2);d([R()],Q.prototype,"invalid",2);d([f()],Q.prototype,"title",2);d([f({reflect:!0})],Q.prototype,"variant",2);d([f({reflect:!0})],Q.prototype,"size",2);d([f({type:Boolean,reflect:!0})],Q.prototype,"caret",2);d([f({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],Q.prototype,"loading",2);d([f({type:Boolean,reflect:!0})],Q.prototype,"outline",2);d([f({type:Boolean,reflect:!0})],Q.prototype,"pill",2);d([f({type:Boolean,reflect:!0})],Q.prototype,"circle",2);d([f()],Q.prototype,"type",2);d([f()],Q.prototype,"name",2);d([f()],Q.prototype,"value",2);d([f()],Q.prototype,"href",2);d([f()],Q.prototype,"target",2);d([f()],Q.prototype,"download",2);d([f()],Q.prototype,"form",2);d([f({attribute:"formaction"})],Q.prototype,"formAction",2);d([f({attribute:"formenctype"})],Q.prototype,"formEnctype",2);d([f({attribute:"formmethod"})],Q.prototype,"formMethod",2);d([f({attribute:"formnovalidate",type:Boolean})],Q.prototype,"formNoValidate",2);d([f({attribute:"formtarget"})],Q.prototype,"formTarget",2);d([$("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);Q=d([D("sl-button")],Q);var _c=M`
  ${B}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      rotate: 450deg;
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      rotate: 1080deg;
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Ji=class extends I{constructor(){super(...arguments),this.localize=new te(this)}render(){return C`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ji.styles=_c;Ji=d([D("sl-spinner")],Ji);var wc=e=>e.strings===void 0,xc={},kc=(e,t=xc)=>e._$AH=t,$t=hs(class extends ai{constructor(e){if(super(e),e.type!==at.PROPERTY&&e.type!==at.ATTRIBUTE&&e.type!==at.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!wc(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ee||t===le)return t;const r=e.element,s=e.name;if(e.type===at.PROPERTY){if(t===r[s])return Ee}else if(e.type===at.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(s))return Ee}else if(e.type===at.ATTRIBUTE&&r.getAttribute(s)===t+"")return Ee;return kc(e),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ht=(e="value")=>(t,r)=>{const s=t.constructor,i=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(o,a,n){var l;const c=s.getPropertyOptions(e),h=typeof c.attribute=="string"?c.attribute:e;if(o===h){const u=c.converter||Br,g=(typeof u=="function"?u:(l=u==null?void 0:u.fromAttribute)!=null?l:Br.fromAttribute)(n,c.type);this[e]!==g&&(this[r]=g)}i.call(this,o,a,n)}},$c=M`
  ${B}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--sl-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,ge=class extends I{constructor(){super(...arguments),this.formSubmitController=new bt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.invalid=!1,this.title="",this.name="",this.disabled=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.invalid=!this.input.checkValidity()}render(){return C`
      <label
        part="base"
        class=${N({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${E(this.value)}
          .indeterminate=${$t(this.indeterminate)}
          .checked=${$t(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked?C` <sl-icon part="checked-icon" library="system" name="check"></sl-icon> `:""}
          ${!this.checked&&this.indeterminate?C` <sl-icon part="indeterminate-icon" library="system" name="indeterminate"></sl-icon> `:""}
        </span>

        <slot part="label" class="checkbox__label"></slot>
      </label>
    `}};ge.styles=$c;d([z('input[type="checkbox"]')],ge.prototype,"input",2);d([R()],ge.prototype,"hasFocus",2);d([R()],ge.prototype,"invalid",2);d([f()],ge.prototype,"title",2);d([f()],ge.prototype,"name",2);d([f()],ge.prototype,"value",2);d([f({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],ge.prototype,"required",2);d([f({type:Boolean,reflect:!0})],ge.prototype,"checked",2);d([f({type:Boolean,reflect:!0})],ge.prototype,"indeterminate",2);d([Ht("checked")],ge.prototype,"defaultChecked",2);d([$("disabled",{waitUntilFirstUpdate:!0})],ge.prototype,"handleDisabledChange",1);d([$("checked",{waitUntilFirstUpdate:!0}),$("indeterminate",{waitUntilFirstUpdate:!0})],ge.prototype,"handleStateChange",1);ge=d([D("sl-checkbox")],ge);var ps=M`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Cc=M`
  ${B}
  ${ps}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,ua,Sc=(ua=navigator.userAgentData)==null?void 0:ua.brands.some(e=>e.brand.includes("Chromium")),Ac=Sc?!1:navigator.userAgent.includes("Firefox"),F=class extends I{constructor(){super(...arguments),this.formSubmitController=new bt(this),this.hasSlotController=new Ue(this,"help-text","label"),this.localize=new te(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.type="text",this.size="medium",this.name="",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1}get valueAsDate(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsDate)!=null?t:null}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsNumber)!=null?t:parseFloat(this.value)}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){this.input.setRangeText(e,t,r,s),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleStepChange(){this.input.step=String(this.step),this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formSubmitController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleValueChange(){this.input.value=this.value,this.invalid=!this.input.checkValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return C`
      <div
        part="form-control"
        class=${N({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${N({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":Ac})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${E(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${E(this.placeholder)}
              minlength=${E(this.minlength)}
              maxlength=${E(this.maxlength)}
              min=${E(this.min)}
              max=${E(this.max)}
              step=${E(this.step)}
              .value=${$t(this.value)}
              autocapitalize=${E(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${E(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${E(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${E(this.spellcheck)}
              pattern=${E(this.pattern)}
              enterkeyhint=${E(this.enterkeyhint)}
              inputmode=${E(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?C`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?C`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?C`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:C`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};F.styles=Cc;d([z(".input__control")],F.prototype,"input",2);d([R()],F.prototype,"hasFocus",2);d([R()],F.prototype,"invalid",2);d([f()],F.prototype,"title",2);d([f({reflect:!0})],F.prototype,"type",2);d([f({reflect:!0})],F.prototype,"size",2);d([f()],F.prototype,"name",2);d([f()],F.prototype,"value",2);d([Ht()],F.prototype,"defaultValue",2);d([f({type:Boolean,reflect:!0})],F.prototype,"filled",2);d([f({type:Boolean,reflect:!0})],F.prototype,"pill",2);d([f()],F.prototype,"label",2);d([f({attribute:"help-text"})],F.prototype,"helpText",2);d([f({type:Boolean})],F.prototype,"clearable",2);d([f({attribute:"password-toggle",type:Boolean})],F.prototype,"passwordToggle",2);d([f({attribute:"password-visible",type:Boolean})],F.prototype,"passwordVisible",2);d([f({attribute:"no-spin-buttons",type:Boolean})],F.prototype,"noSpinButtons",2);d([f()],F.prototype,"placeholder",2);d([f({type:Boolean,reflect:!0})],F.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],F.prototype,"readonly",2);d([f({type:Number})],F.prototype,"minlength",2);d([f({type:Number})],F.prototype,"maxlength",2);d([f()],F.prototype,"min",2);d([f()],F.prototype,"max",2);d([f()],F.prototype,"step",2);d([f()],F.prototype,"pattern",2);d([f({type:Boolean,reflect:!0})],F.prototype,"required",2);d([f()],F.prototype,"autocapitalize",2);d([f()],F.prototype,"autocorrect",2);d([f()],F.prototype,"autocomplete",2);d([f({type:Boolean})],F.prototype,"autofocus",2);d([f()],F.prototype,"enterkeyhint",2);d([f({type:Boolean})],F.prototype,"spellcheck",2);d([f()],F.prototype,"inputmode",2);d([$("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);d([$("step",{waitUntilFirstUpdate:!0})],F.prototype,"handleStepChange",1);d([$("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);F=d([D("sl-input")],F);var zc=M`
  ${B}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Qe=class extends I{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return on(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("sl-label-change"))}render(){return C`
      <div
        part="base"
        class=${N({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};Qe.styles=zc;d([z("slot:not([name])")],Qe.prototype,"defaultSlot",2);d([z(".menu-item")],Qe.prototype,"menuItem",2);d([f({type:Boolean,reflect:!0})],Qe.prototype,"checked",2);d([f()],Qe.prototype,"value",2);d([f({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);d([$("checked")],Qe.prototype,"handleCheckedChange",1);d([$("disabled")],Qe.prototype,"handleDisabledChange",1);Qe=d([D("sl-menu-item")],Qe);var Ec=M`
  ${B}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`,Qi=class extends I{render(){return C` <slot part="base" class="menu-label"></slot> `}};Qi.styles=Ec;Qi=d([D("sl-menu-label")],Qi);var Tc=M`
  ${B}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Rs=class extends I{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.getAttribute("role")!=="menuitem"||!e.includeDisabled&&t.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){const t=this.getAllItems({includeDisabled:!1}),r=e.disabled?t[0]:e;t.forEach(s=>{s.setAttribute("tabindex",s===r?"0":"-1")})}typeToSelect(e){var t;const r=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const s of r){const i=(t=s.shadowRoot)==null?void 0:t.querySelector("slot:not([name])");if(on(i).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(s),s.focus();break}}}handleClick(e){const r=e.target.closest("sl-menu-item");(r==null?void 0:r.disabled)===!1&&this.emit("sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems({includeDisabled:!1}),r=this.getCurrentItem();let s=r?t.indexOf(r):0;if(t.length>0){e.preventDefault(),e.key==="ArrowDown"?s++:e.key==="ArrowUp"?s--:e.key==="Home"?s=0:e.key==="End"&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus();return}}this.typeToSelect(e)}handleMouseDown(e){const t=e.target;t.getAttribute("role")==="menuitem"&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return C`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Rs.styles=Tc;d([z("slot")],Rs.prototype,"defaultSlot",2);Rs=d([D("sl-menu")],Rs);var Oc=M`
  ${B}

  :host {
    display: contents;
  }
`,je=class extends I{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleMutation=this.handleMutation.bind(this),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){this.stopObserver()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}handleMutation(e){this.emit("sl-mutation",{detail:{mutationList:e}})}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}render(){return C` <slot></slot> `}};je.styles=Oc;d([f({reflect:!0})],je.prototype,"attr",2);d([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],je.prototype,"attrOldValue",2);d([f({attribute:"char-data",type:Boolean,reflect:!0})],je.prototype,"charData",2);d([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],je.prototype,"charDataOldValue",2);d([f({attribute:"child-list",type:Boolean,reflect:!0})],je.prototype,"childList",2);d([f({type:Boolean,reflect:!0})],je.prototype,"disabled",2);d([$("disabled")],je.prototype,"handleDisabledChange",1);d([$("attr",{waitUntilFirstUpdate:!0}),$("attr-old-value",{waitUntilFirstUpdate:!0}),$("char-data",{waitUntilFirstUpdate:!0}),$("char-data-old-value",{waitUntilFirstUpdate:!0}),$("childList",{waitUntilFirstUpdate:!0})],je.prototype,"handleChange",1);je=d([D("sl-mutation-observer")],je);var Ic=M`
  ${B}
  ${ps}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select::part(panel) {
    overflow: hidden;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select::part(panel) {
    border-radius: var(--sl-border-radius-medium);
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    color: var(--sl-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
    outline: none;
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .select--open .select__icon {
    rotate: -180deg;
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`,X=class extends I{constructor(){super(...arguments),this.formSubmitController=new bt(this),this.hasSlotController=new Ue(this,"help-text","label"),this.localize=new te(this),this.menuItems=[],this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.invalid=!1,this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.value="",this.placeholder="",this.size="medium",this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(e){this.control.focus(e)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,this.emit("sl-blur"))}handleClearClick(e){e.stopPropagation(),this.value=this.multiple?[]:"",this.emit("sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,this.emit("sl-focus"))}handleKeyDown(e){const t=e.target,r=this.menuItems[0],s=this.menuItems[this.menuItems.length-1];if(t.tagName.toLowerCase()!=="sl-tag"){if(e.key==="Tab"){this.isOpen&&this.dropdown.hide();return}if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.isOpen||this.dropdown.show(),e.key==="ArrowDown"){this.menu.setCurrentItem(r),r.focus();return}if(e.key==="ArrowUp"){this.menu.setCurrentItem(s),s.focus();return}}e.ctrlKey||e.metaKey||!this.isOpen&&e.key.length===1&&(e.stopPropagation(),e.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(e))}}handleLabelClick(){this.focus()}handleMenuSelect(e){const t=e.detail.item;this.multiple?this.value=this.value.includes(t.value)?this.value.filter(r=>r!==t.value):[...this.value,t.value]:this.value=t.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMenuItemLabelChange(){if(!this.multiple){const e=this.menuItems.find(t=>t.value===this.value);this.displayLabel=e?e.getTextLabel():""}}handleMultipleChange(){var e;const t=this.getValueAsArray();this.value=this.multiple?t:(e=t[0])!=null?e:"",this.syncItemsFromValue()}async handleMenuSlotChange(){this.menuItems=[...this.querySelectorAll("sl-menu-item")];const e=[];this.menuItems.forEach(t=>{e.includes(t.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${t.value}'`,t),e.push(t.value)}),await Promise.all(this.menuItems.map(t=>t.render)),this.syncItemsFromValue()}handleTagInteraction(e){e.composedPath().find(s=>s instanceof HTMLElement?s.classList.contains("tag__remove"):!1)&&e.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),this.emit("sl-change"),this.emit("sl-input")}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,requestAnimationFrame(()=>this.dropdown.reposition())}syncItemsFromValue(){const e=this.getValueAsArray();if(this.menuItems.forEach(t=>t.checked=e.includes(t.value)),this.multiple){const t=this.menuItems.filter(r=>e.includes(r.value));if(this.displayLabel=t.length>0?t[0].getTextLabel():"",this.displayTags=t.map(r=>C`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${s=>{s.stopPropagation(),this.disabled||(r.checked=!1,this.syncValueFromItems())}}
          >
            ${r.getTextLabel()}
          </sl-tag>
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const r=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(C`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
          >
            +${r-this.maxTagsVisible}
          </sl-tag>
        `)}}else{const t=this.menuItems.find(r=>r.value===e[0]);this.displayLabel=t?t.getTextLabel():"",this.displayTags=[]}}syncValueFromItems(){const t=this.menuItems.filter(r=>r.checked).map(r=>r.value);this.multiple?this.value=this.value.filter(r=>t.includes(r)):this.value=t.length>0?t[0]:""}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.multiple?this.value.length>0:this.value!=="",s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&r;return C`
      <div
        part="form-control"
        class=${N({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement==="bottom"?"bottom-start":"top-start"}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${N({select:!0,"select--open":this.isOpen,"select--empty":!this.value,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid})}
            @sl-show=${this.handleMenuShow}
            @sl-hide=${this.handleMenuHide}
          >
            <div
              part="control"
              slot="trigger"
              id="input"
              class="select__control"
              role="combobox"
              aria-describedby="help-text"
              aria-haspopup="true"
              aria-disabled=${this.disabled?"true":"false"}
              aria-expanded=${this.isOpen?"true":"false"}
              aria-controls="menu"
              tabindex=${this.disabled?"-1":"0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <slot name="prefix" part="prefix" class="select__prefix"></slot>

              <div part="display-label" class="select__label">
                ${this.displayTags.length>0?C` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${o?C`
                    <button
                      part="clear-button"
                      class="select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term("clearEntry")}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <span part="icon" class="select__icon" aria-hidden="true">
                <sl-icon name="chevron-down" library="system"></sl-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. The focus
              handler is used to move focus to the primary control when it's marked invalid.  -->
              <input
                class="select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${r?"1":""}
                tabindex="-1"
                @focus=${()=>this.control.focus()}
              />
            </div>

            <sl-menu part="menu" id="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @sl-label-change=${this.handleMenuItemLabelChange}></slot>
            </sl-menu>
          </sl-dropdown>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};X.styles=Ic;d([z(".select")],X.prototype,"dropdown",2);d([z(".select__control")],X.prototype,"control",2);d([z(".select__hidden-select")],X.prototype,"input",2);d([z(".select__menu")],X.prototype,"menu",2);d([R()],X.prototype,"hasFocus",2);d([R()],X.prototype,"isOpen",2);d([R()],X.prototype,"displayLabel",2);d([R()],X.prototype,"displayTags",2);d([R()],X.prototype,"invalid",2);d([f({type:Boolean,reflect:!0})],X.prototype,"multiple",2);d([f({attribute:"max-tags-visible",type:Number})],X.prototype,"maxTagsVisible",2);d([f({type:Boolean,reflect:!0})],X.prototype,"disabled",2);d([f()],X.prototype,"name",2);d([f()],X.prototype,"value",2);d([f()],X.prototype,"placeholder",2);d([f()],X.prototype,"size",2);d([f({type:Boolean})],X.prototype,"hoist",2);d([f({type:Boolean,reflect:!0})],X.prototype,"filled",2);d([f({type:Boolean,reflect:!0})],X.prototype,"pill",2);d([f()],X.prototype,"label",2);d([f()],X.prototype,"placement",2);d([f({attribute:"help-text"})],X.prototype,"helpText",2);d([f({type:Boolean,reflect:!0})],X.prototype,"required",2);d([f({type:Boolean})],X.prototype,"clearable",2);d([Ht()],X.prototype,"defaultValue",2);d([$("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);d([$("multiple")],X.prototype,"handleMultipleChange",1);d([$("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",1);X=d([D("sl-select")],X);var Lc=M`
  ${B}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Dt=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return C`
      <span
        part="base"
        class=${N({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?C`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};Dt.styles=Lc;d([f({reflect:!0})],Dt.prototype,"variant",2);d([f({reflect:!0})],Dt.prototype,"size",2);d([f({type:Boolean,reflect:!0})],Dt.prototype,"pill",2);d([f({type:Boolean})],Dt.prototype,"removable",2);Dt=d([D("sl-tag")],Dt);var Dc=M`
  ${B}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function ha(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function mn(e){var t,r;const s=[];function i(n){n instanceof HTMLElement&&(s.push(n),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)),[...n.children].forEach(l=>i(l))}i(e);const o=(t=s.find(n=>ha(n)))!=null?t:null,a=(r=s.reverse().find(n=>ha(n)))!=null?r:null;return{start:o,end:a}}function Pc(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var eo=new Set;function Ms(e){eo.add(e),document.body.classList.add("sl-scroll-lock")}function Bs(e){eo.delete(e),eo.size===0&&document.body.classList.remove("sl-scroll-lock")}function to(e,t,r="vertical",s="smooth"){const i=Pc(e,t),o=i.top+t.scrollTop,a=i.left+t.scrollLeft,n=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(a<n?t.scrollTo({left:a,behavior:s}):a+e.clientWidth>l&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:s})),(r==="vertical"||r==="both")&&(o<c?t.scrollTo({top:o,behavior:s}):o+e.clientHeight>h&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:s}))}var _e=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(e){var t;if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,s,i;const o=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(i=(s=document.activeElement)==null?void 0:s.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;to(t,this.panel)}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.defaultSlot.assignedElements({flatten:!0}),s=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&requestAnimationFrame(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(s),s.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}));const o=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!o.includes(e.key)&&t.typeToSelect(e)}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(s=>mn(s).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,De(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,De(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await fe(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ue(this,"dropdown.show",{dir:this.localize.dir()});await de(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await fe(this);const{keyframes:e,options:t}=ue(this,"dropdown.hide",{dir:this.localize.dir()});await de(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return C`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${N({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};_e.styles=Dc;d([z(".dropdown")],_e.prototype,"popup",2);d([z(".dropdown__trigger")],_e.prototype,"trigger",2);d([z(".dropdown__panel")],_e.prototype,"panel",2);d([f({type:Boolean,reflect:!0})],_e.prototype,"open",2);d([f({reflect:!0})],_e.prototype,"placement",2);d([f({type:Boolean,reflect:!0})],_e.prototype,"disabled",2);d([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],_e.prototype,"stayOpenOnSelect",2);d([f({attribute:!1})],_e.prototype,"containingElement",2);d([f({type:Number})],_e.prototype,"distance",2);d([f({type:Number})],_e.prototype,"skidding",2);d([f({type:Boolean})],_e.prototype,"hoist",2);d([$("open",{waitUntilFirstUpdate:!0})],_e.prototype,"handleOpenChange",1);_e=d([D("sl-dropdown")],_e);se("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});se("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Rc=M`
  ${B}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;function yr(e){return e.split("-")[0]}function fs(e){return e.split("-")[1]}function ms(e){return["top","bottom"].includes(yr(e))?"x":"y"}function $o(e){return e==="y"?"height":"width"}function pa(e,t,r){let{reference:s,floating:i}=e;const o=s.x+s.width/2-i.width/2,a=s.y+s.height/2-i.height/2,n=ms(t),l=$o(n),c=s[l]/2-i[l]/2,h=n==="x";let u;switch(yr(t)){case"top":u={x:o,y:s.y-i.height};break;case"bottom":u={x:o,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:a};break;case"left":u={x:s.x-i.width,y:a};break;default:u={x:s.x,y:s.y}}switch(fs(t)){case"start":u[n]-=c*(r&&h?-1:1);break;case"end":u[n]+=c*(r&&h?-1:1)}return u}var Mc=async(e,t,r)=>{const{placement:s="bottom",strategy:i="absolute",middleware:o=[],platform:a}=r,n=o.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:u}=pa(c,s,l),p=s,g={},b=0;for(let m=0;m<n.length;m++){const{name:v,fn:y}=n[m],{x:_,y:x,data:w,reset:k}=await y({x:h,y:u,initialPlacement:s,placement:p,strategy:i,middlewareData:g,rects:c,platform:a,elements:{reference:e,floating:t}});h=_!=null?_:h,u=x!=null?x:u,g=Fe(ae({},g),{[v]:ae(ae({},g[v]),w)}),k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(p=k.placement),k.rects&&(c=k.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):k.rects),{x:h,y:u}=pa(c,p,l)),m=-1)}return{x:h,y:u,placement:p,strategy:i,middlewareData:g}};function gn(e){return typeof e!="number"?function(t){return ae({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Vs(e){return Fe(ae({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function Co(e,t){var r;t===void 0&&(t={});const{x:s,y:i,platform:o,rects:a,elements:n,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=t,b=gn(g),m=n[p?u==="floating"?"reference":"floating":u],v=Vs(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(m)))==null||r?m:m.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(n.floating)),boundary:c,rootBoundary:h,strategy:l})),y=Vs(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?Fe(ae({},a.floating),{x:s,y:i}):a.reference,offsetParent:await(o.getOffsetParent==null?void 0:o.getOffsetParent(n.floating)),strategy:l}):a[u]);return{top:v.top-y.top+b.top,bottom:y.bottom-v.bottom+b.bottom,left:v.left-y.left+b.left,right:y.right-v.right+b.right}}var Bc=Math.min,It=Math.max;function ro(e,t,r){return It(e,Bc(t,r))}var Vc=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:s=0}=e!=null?e:{},{x:i,y:o,placement:a,rects:n,platform:l}=t;if(r==null)return{};const c=gn(s),h={x:i,y:o},u=ms(a),p=fs(a),g=$o(u),b=await l.getDimensions(r),m=u==="y"?"top":"left",v=u==="y"?"bottom":"right",y=n.reference[g]+n.reference[u]-h[u]-n.floating[g],_=h[u]-n.reference[u],x=await(l.getOffsetParent==null?void 0:l.getOffsetParent(r));let w=x?u==="y"?x.clientHeight||0:x.clientWidth||0:0;w===0&&(w=n.floating[g]);const k=y/2-_/2,O=c[m],q=w-b[g]-c[v],K=w/2-b[g]/2+k,P=ro(O,K,q),L=(p==="start"?c[m]:c[v])>0&&K!==P&&n.reference[g]<=n.floating[g];return{[u]:h[u]-(L?K<O?O-K:q-K:0),data:{[u]:P,centerOffset:K-P}}}}),Uc={left:"right",right:"left",bottom:"top",top:"bottom"};function Us(e){return e.replace(/left|right|bottom|top/g,t=>Uc[t])}function Nc(e,t,r){r===void 0&&(r=!1);const s=fs(e),i=ms(e),o=$o(i);let a=i==="x"?s===(r?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=Us(a)),{main:a,cross:Us(a)}}var Fc={start:"end",end:"start"};function fa(e){return e.replace(/start|end/g,t=>Fc[t])}var jc=["top","right","bottom","left"];jc.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var Hc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:s,middlewareData:i,rects:o,initialPlacement:a,platform:n,elements:l}=t,c=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",flipAlignment:b=!0}=c,m=wo(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),v=yr(s),y=p||(v===a||!b?[Us(a)]:function(P){const L=Us(P);return[fa(P),L,fa(L)]}(a)),_=[a,...y],x=await Co(t,m),w=[];let k=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&w.push(x[v]),u){const{main:P,cross:L}=Nc(s,o,await(n.isRTL==null?void 0:n.isRTL(l.floating)));w.push(x[P],x[L])}if(k=[...k,{placement:s,overflows:w}],!w.every(P=>P<=0)){var O,q;const P=((O=(q=i.flip)==null?void 0:q.index)!=null?O:0)+1,L=_[P];if(L)return{data:{index:P,overflows:k},reset:{placement:L}};let ye="bottom";switch(g){case"bestFit":{var K;const Ie=(K=k.map(Le=>[Le,Le.overflows.filter(We=>We>0).reduce((We,Zt)=>We+Zt,0)]).sort((Le,We)=>Le[1]-We[1])[0])==null?void 0:K[0].placement;Ie&&(ye=Ie);break}case"initialPlacement":ye=a}if(s!==ye)return{reset:{placement:ye}}}return{}}}},Zc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:s}=t,i=await async function(o,a){const{placement:n,platform:l,elements:c}=o,h=await(l.isRTL==null?void 0:l.isRTL(c.floating)),u=yr(n),p=fs(n),g=ms(n)==="x",b=["left","top"].includes(u)?-1:1,m=h&&g?-1:1,v=typeof a=="function"?a(o):a;let{mainAxis:y,crossAxis:_,alignmentAxis:x}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:ae({mainAxis:0,crossAxis:0,alignmentAxis:null},v);return p&&typeof x=="number"&&(_=p==="end"?-1*x:x),g?{x:_*m,y:y*b}:{x:y*b,y:_*m}}(t,e);return{x:r+i.x,y:s+i.y,data:i}}}};function qc(e){return e==="x"?"y":"x"}var Kc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:s,placement:i}=t,o=e,{mainAxis:a=!0,crossAxis:n=!1,limiter:l={fn:y=>{let{x:_,y:x}=y;return{x:_,y:x}}}}=o,c=wo(o,["mainAxis","crossAxis","limiter"]),h={x:r,y:s},u=await Co(t,c),p=ms(yr(i)),g=qc(p);let b=h[p],m=h[g];if(a){const y=p==="y"?"bottom":"right";b=ro(b+u[p==="y"?"top":"left"],b,b-u[y])}if(n){const y=g==="y"?"bottom":"right";m=ro(m+u[g==="y"?"top":"left"],m,m-u[y])}const v=l.fn(Fe(ae({},t),{[p]:b,[g]:m}));return Fe(ae({},v),{data:{x:v.x-r,y:v.y-s}})}}},ma=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:s,platform:i,elements:o}=t,a=e,{apply:n=()=>{}}=a,l=wo(a,["apply"]),c=await Co(t,l),h=yr(r),u=fs(r);let p,g;h==="top"||h==="bottom"?(p=h,g=u===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(g=h,p=u==="end"?"top":"bottom");const b=It(c.left,0),m=It(c.right,0),v=It(c.top,0),y=It(c.bottom,0),_={availableHeight:s.floating.height-(["left","right"].includes(r)?2*(v!==0||y!==0?v+y:It(c.top,c.bottom)):c[p]),availableWidth:s.floating.width-(["top","bottom"].includes(r)?2*(b!==0||m!==0?b+m:It(c.left,c.right)):c[g])};await n(ae(ae({},t),_));const x=await i.getDimensions(o.floating);return s.floating.width!==x.width||s.floating.height!==x.height?{reset:{rects:!0}}:{}}}};function bn(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function vt(e){if(e==null)return window;if(!bn(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function lt(e){return vt(e).getComputedStyle(e)}function Ct(e){return bn(e)?"":e?(e.nodeName||"").toLowerCase():""}function vn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function ct(e){return e instanceof vt(e).HTMLElement}function dt(e){return e instanceof vt(e).Element}function ga(e){return typeof ShadowRoot>"u"?!1:e instanceof vt(e).ShadowRoot||e instanceof ShadowRoot}function ni(e){const{overflow:t,overflowX:r,overflowY:s,display:i}=lt(e);return/auto|scroll|overlay|hidden/.test(t+s+r)&&!["inline","contents"].includes(i)}function Wc(e){return["table","td","th"].includes(Ct(e))}function so(e){const t=/firefox/i.test(vn()),r=lt(e),s=r.backdropFilter||r.WebkitBackdropFilter;return r.transform!=="none"||r.perspective!=="none"||!!s&&s!=="none"||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"||["transform","perspective"].some(i=>r.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const o=r.contain;return o!=null&&o.includes(i)})}function yn(){return!/^((?!chrome|android).)*safari/i.test(vn())}function So(e){return["html","body","#document"].includes(Ct(e))}var ba=Math.min,Lr=Math.max,Ns=Math.round;function ut(e,t,r){var s,i,o,a;t===void 0&&(t=!1),r===void 0&&(r=!1);const n=e.getBoundingClientRect();let l=1,c=1;t&&ct(e)&&(l=e.offsetWidth>0&&Ns(n.width)/e.offsetWidth||1,c=e.offsetHeight>0&&Ns(n.height)/e.offsetHeight||1);const h=dt(e)?vt(e):window,u=!yn()&&r,p=(n.left+(u&&(s=(i=h.visualViewport)==null?void 0:i.offsetLeft)!=null?s:0))/l,g=(n.top+(u&&(o=(a=h.visualViewport)==null?void 0:a.offsetTop)!=null?o:0))/c,b=n.width/l,m=n.height/c;return{width:b,height:m,top:g,right:p+b,bottom:g+m,left:p,x:p,y:g}}function xt(e){return(t=e,(t instanceof vt(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function li(e){return dt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function _n(e){return ut(xt(e)).left+li(e).scrollLeft}function Yc(e,t,r){const s=ct(t),i=xt(t),o=ut(e,s&&function(l){const c=ut(l);return Ns(c.width)!==l.offsetWidth||Ns(c.height)!==l.offsetHeight}(t),r==="fixed");let a={scrollLeft:0,scrollTop:0};const n={x:0,y:0};if(s||!s&&r!=="fixed")if((Ct(t)!=="body"||ni(i))&&(a=li(t)),ct(t)){const l=ut(t,!0);n.x=l.x+t.clientLeft,n.y=l.y+t.clientTop}else i&&(n.x=_n(i));return{x:o.left+a.scrollLeft-n.x,y:o.top+a.scrollTop-n.y,width:o.width,height:o.height}}function Nr(e){if(Ct(e)==="html")return e;const t=e.assignedSlot||e.parentNode||(ga(e)?e.host:null)||xt(e);return ga(t)?t.host:t}function va(e){return ct(e)&&lt(e).position!=="fixed"?e.offsetParent:null}function ya(e){const t=vt(e);let r=va(e);for(;r&&Wc(r)&&lt(r).position==="static";)r=va(r);return r&&(Ct(r)==="html"||Ct(r)==="body"&&lt(r).position==="static"&&!so(r))?t:r||function(s){let i=Nr(s);for(;ct(i)&&!So(i);){if(so(i))return i;i=Nr(i)}return null}(e)||t}function wn(e){const t=Nr(e);return So(t)?e.ownerDocument.body:ct(t)&&ni(t)?t:wn(t)}function Dr(e,t){var r;t===void 0&&(t=[]);const s=wn(e),i=s===((r=e.ownerDocument)==null?void 0:r.body),o=vt(s),a=i?[o].concat(o.visualViewport||[],ni(s)?s:[]):s,n=t.concat(a);return i?n:n.concat(Dr(a))}function _a(e,t,r){return t==="viewport"?Vs(function(s,i){const o=vt(s),a=xt(s),n=o.visualViewport;let l=a.clientWidth,c=a.clientHeight,h=0,u=0;if(n){l=n.width,c=n.height;const p=yn();(p||!p&&i==="fixed")&&(h=n.offsetLeft,u=n.offsetTop)}return{width:l,height:c,x:h,y:u}}(e,r)):dt(t)?function(s,i){const o=ut(s,!1,i==="fixed"),a=o.top+s.clientTop,n=o.left+s.clientLeft;return{top:a,left:n,x:n,y:a,right:n+s.clientWidth,bottom:a+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}(t,r):Vs(function(s){var i;const o=xt(s),a=li(s),n=(i=s.ownerDocument)==null?void 0:i.body,l=Lr(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=Lr(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0);let h=-a.scrollLeft+_n(s);const u=-a.scrollTop;return lt(n||o).direction==="rtl"&&(h+=Lr(o.clientWidth,n?n.clientWidth:0)-l),{width:l,height:c,x:h,y:u}}(xt(e)))}var Xc={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:s,strategy:i}=e;const o=r==="clippingAncestors"?function(c){let h=Dr(c).filter(b=>dt(b)&&Ct(b)!=="body"),u=null;const p=lt(c).position==="fixed";let g=p?Nr(c):c;for(;dt(g)&&!So(g);){const b=lt(g),m=so(g);(p?m||u:m||b.position!=="static"||!u||!["absolute","fixed"].includes(u.position))?u=b:h=h.filter(v=>v!==g),g=Nr(g)}return h}(t):[].concat(r),a=[...o,s],n=a[0],l=a.reduce((c,h)=>{const u=_a(t,h,i);return c.top=Lr(u.top,c.top),c.right=ba(u.right,c.right),c.bottom=ba(u.bottom,c.bottom),c.left=Lr(u.left,c.left),c},_a(t,n,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:s}=e;const i=ct(r),o=xt(r);if(r===o)return t;let a={scrollLeft:0,scrollTop:0};const n={x:0,y:0};if((i||!i&&s!=="fixed")&&((Ct(r)!=="body"||ni(o))&&(a=li(r)),ct(r))){const l=ut(r,!0);n.x=l.x+r.clientLeft,n.y=l.y+r.clientTop}return Fe(ae({},t),{x:t.x-a.scrollLeft+n.x,y:t.y-a.scrollTop+n.y})},isElement:dt,getDimensions:function(e){if(ct(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=ut(e);return{width:t.width,height:t.height}},getOffsetParent:ya,getDocumentElement:xt,async getElementRects(e){let{reference:t,floating:r,strategy:s}=e;const i=this.getOffsetParent||ya,o=this.getDimensions;return{reference:Yc(t,await i(r),s),floating:ae({x:0,y:0},await o(r))}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>lt(e).direction==="rtl"};function Gc(e,t,r,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=!0,animationFrame:n=!1}=s,l=i&&!n,c=l||o?[...dt(e)?Dr(e):e.contextElement?Dr(e.contextElement):[],...Dr(t)]:[];c.forEach(g=>{l&&g.addEventListener("scroll",r,{passive:!0}),o&&g.addEventListener("resize",r)});let h,u=null;if(a){let g=!0;u=new ResizeObserver(()=>{g||r(),g=!1}),dt(e)&&!n&&u.observe(e),dt(e)||!e.contextElement||n||u.observe(e.contextElement),u.observe(t)}let p=n?ut(e):null;return n&&function g(){const b=ut(e);!p||b.x===p.x&&b.y===p.y&&b.width===p.width&&b.height===p.height||r(),p=b,h=requestAnimationFrame(g)}(),r(),()=>{var g;c.forEach(b=>{l&&b.removeEventListener("scroll",r),o&&b.removeEventListener("resize",r)}),(g=u)==null||g.disconnect(),u=null,n&&cancelAnimationFrame(h)}}var Jc=(e,t,r)=>Mc(e,t,ae({platform:Xc},r)),re=class extends I{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=Gc(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const e=[Zc({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ma({apply:({rects:t})=>{const r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${t.reference.width}px`:"",this.popup.style.height=s?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Hc({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Kc({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(ma({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Vc({element:this.arrowEl,padding:this.arrowPadding})),Jc(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy}).then(({x:t,y:r,middlewareData:s,placement:i})=>{const o=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${r}px`}),this.arrow){const n=s.arrow.x,l=s.arrow.y;let c="",h="",u="",p="";if(this.arrowPlacement==="start"){const g=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=o?g:"",p=o?"":g}else if(this.arrowPlacement==="end"){const g=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=o?"":g,p=o?g:"",u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof n=="number"?"calc(50% - var(--arrow-size-diagonal))":"",c=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof n=="number"?`${n}px`:"",c=typeof l=="number"?`${l}px`:"");Object.assign(this.arrowEl.style,{top:c,right:h,bottom:u,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${N({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?C`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};re.styles=Rc;d([z(".popup")],re.prototype,"popup",2);d([z(".popup__arrow")],re.prototype,"arrowEl",2);d([f()],re.prototype,"anchor",2);d([f({type:Boolean,reflect:!0})],re.prototype,"active",2);d([f({reflect:!0})],re.prototype,"placement",2);d([f({reflect:!0})],re.prototype,"strategy",2);d([f({type:Number})],re.prototype,"distance",2);d([f({type:Number})],re.prototype,"skidding",2);d([f({type:Boolean})],re.prototype,"arrow",2);d([f({attribute:"arrow-placement"})],re.prototype,"arrowPlacement",2);d([f({attribute:"arrow-padding",type:Number})],re.prototype,"arrowPadding",2);d([f({type:Boolean})],re.prototype,"flip",2);d([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],re.prototype,"flipFallbackPlacements",2);d([f({attribute:"flip-fallback-strategy"})],re.prototype,"flipFallbackStrategy",2);d([f({type:Object})],re.prototype,"flipBoundary",2);d([f({attribute:"flip-padding",type:Number})],re.prototype,"flipPadding",2);d([f({type:Boolean})],re.prototype,"shift",2);d([f({type:Object})],re.prototype,"shiftBoundary",2);d([f({attribute:"shift-padding",type:Number})],re.prototype,"shiftPadding",2);d([f({attribute:"auto-size"})],re.prototype,"autoSize",2);d([f()],re.prototype,"sync",2);d([f({type:Object})],re.prototype,"autoSizeBoundary",2);d([f({attribute:"auto-size-padding",type:Number})],re.prototype,"autoSizePadding",2);re=d([D("sl-popup")],re);var Qc=M`
  ${B}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;function wa(e,t,r){return e?t():r==null?void 0:r()}var J=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}async animateExpand(){this.emit("sl-expand"),await fe(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:t}=ue(this,"tree-item.expand",{dir:this.localize.dir()});await de(this.childrenContainer,Ts(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}async animateCollapse(){this.emit("sl-collapse"),await fe(this.childrenContainer);const{keyframes:e,options:t}=ue(this,"tree-item.collapse",{dir:this.localize.dir()});await de(this.childrenContainer,Ts(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>J.isTreeItem(t)&&(e||!t.disabled)):[]}isNestedItem(){const e=this.parentElement;return!!e&&J.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}render(){const e=this.localize.dir()==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return C`
      <div
        part="base"
        class="${N({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${N({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${wa(this.loading,()=>C` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${wa(this.selectable,()=>C`
                <sl-checkbox
                  tabindex="-1"
                  class="tree-item__checkbox"
                  ?disabled="${this.disabled}"
                  ?checked="${$t(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                >
                  <slot class="tree-item__label" part="label"></slot>
                </sl-checkbox>
              `,()=>C` <slot class="tree-item__label" part="label"></slot> `)}
        </div>

        <slot
          name="children"
          class="tree-item__children"
          part="children"
          role="group"
          @slotchange="${this.handleChildrenSlotChange}"
        ></slot>
      </div>
    `}};J.styles=Qc;d([R()],J.prototype,"indeterminate",2);d([R()],J.prototype,"isLeaf",2);d([R()],J.prototype,"loading",2);d([R()],J.prototype,"selectable",2);d([f({type:Boolean,reflect:!0})],J.prototype,"expanded",2);d([f({type:Boolean,reflect:!0})],J.prototype,"selected",2);d([f({type:Boolean,reflect:!0})],J.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],J.prototype,"lazy",2);d([z("slot:not([name])")],J.prototype,"defaultSlot",2);d([z("slot[name=children]")],J.prototype,"childrenSlot",2);d([z(".tree-item__item")],J.prototype,"itemElement",2);d([z(".tree-item__children")],J.prototype,"childrenContainer",2);d([z(".tree-item__expand-button slot")],J.prototype,"expandButtonSlot",2);d([$("loading",{waitUntilFirstUpdate:!0})],J.prototype,"handleLoadingChange",1);d([$("disabled")],J.prototype,"handleDisabledChange",1);d([$("selected")],J.prototype,"handleSelectedChange",1);d([$("expanded",{waitUntilFirstUpdate:!0})],J.prototype,"handleExpandedChange",1);d([$("expanded",{waitUntilFirstUpdate:!0})],J.prototype,"handleExpandAnimation",1);d([$("lazy",{waitUntilFirstUpdate:!0})],J.prototype,"handleLazyChange",1);J=d([D("sl-tree-item")],J);se("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});se("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ed=M`
  ${B}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function ce(e,t,r){return e<t?t:e>r?r:e}function td(e){function t(s){const i=s.parentElement;if(J.isTreeItem(i)){const o=i.getChildrenItems({includeDisabled:!1}),a=!!o.length&&o.every(l=>l.selected),n=o.every(l=>!l.selected&&!l.indeterminate);i.selected=a,i.indeterminate=!a&&!n,t(i)}}function r(s){for(const i of s.getChildrenItems())i.selected=!i.disabled&&s.selected,r(i)}t(e),r(e)}var St=class extends I{constructor(){super(...arguments),this.selection="single",this.localize=new te(this),this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`);r===null?e.append(this.getExpandButtonIcon(t)):r.hasAttribute("data-default")&&r.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(J.isTreeItem),s=[...t.removedNodes].filter(J.isTreeItem);r.forEach(this.initTreeItem),s.includes(this.lastFocusedItem)&&this.focusItem(this.getFocusableItems()[0])}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),J.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)}}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut),this.removeEventListener("sl-lazy-change",this.handleSlotChange)}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const s=r.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${e}-icon`,s}return null}handleSelectionChange(){const e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",this.selection==="multiple"?"true":"false");for(const t of e)t.selectable=this.selection==="multiple"}syncTreeItems(e){const t=this.getAllTreeItems();if(this.selection==="multiple")td(e);else for(const r of t)r!==e&&(r.selected=!1)}selectItem(e){const t=[...this.selectedItems];this.selection==="multiple"?(e.selected=!e.selected,e.lazy&&(e.expanded=!0),this.syncTreeItems(e)):this.selection==="single"||e.isLeaf?(e.expanded=!e.expanded,e.selected=!0,this.syncTreeItems(e)):this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(s=>!t.includes(s)))&&this.emit("sl-selection-change",{detail:{selection:r}})}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var s;if(r.disabled)return!1;const i=(s=r.parentElement)==null?void 0:s.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||t.has(i))&&t.add(r),!t.has(r)})}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(l=>l.matches(":focus")),o=t[i],a=l=>{const c=t[ce(l,0,t.length-1)];this.focusItem(c)},n=l=>{o.expanded=l};e.key==="ArrowDown"?a(i+1):e.key==="ArrowUp"?a(i-1):r&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?a(i+1):n(!0):r&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?a(i-1):n(!1):e.key==="Home"?a(0):e.key==="End"?a(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const r=e.target.closest("sl-tree-item"),s=e.composedPath().some(i=>{var o;return(o=i==null?void 0:i.classList)==null?void 0:o.contains("tree-item__expand-button")});!r||r.disabled||(this.selection==="multiple"&&s?r.expanded=!r.expanded:this.selectItem(r))}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}render(){return C`
      <div part="base" class="tree" @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <slot @slotchange=${this.handleSlotChange}></slot>
        <slot name="expand-icon" hidden aria-hidden="true"> </slot>
        <slot name="collapse-icon" hidden aria-hidden="true"> </slot>
      </div>
    `}};St.styles=ed;d([z("slot:not([name])")],St.prototype,"defaultSlot",2);d([z("slot[name=expand-icon]")],St.prototype,"expandedIconSlot",2);d([z("slot[name=collapse-icon]")],St.prototype,"collapsedIconSlot",2);d([f()],St.prototype,"selection",2);d([$("selection")],St.prototype,"handleSelectionChange",1);St=d([D("sl-tree")],St);var rd=M`
  ${B}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`,me=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}async show(){if(!this.open)return this.open=!0,De(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,De(this,"sl-after-hide")}getTarget(){const e=[...this.children].find(t=>t.tagName.toLowerCase()!=="style"&&t.getAttribute("slot")!=="content");if(!e)throw new Error("Invalid tooltip target: no child element was found.");return e}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const e=Zo(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}}handleMouseOut(){if(this.hasTrigger("hover")){const e=Zo(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await fe(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ue(this,"tooltip.show",{dir:this.localize.dir()});await de(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await fe(this.body);const{keyframes:e,options:t}=ue(this,"tooltip.hide",{dir:this.localize.dir()});await de(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}hasTrigger(e){return this.trigger.split(" ").includes(e)}render(){return C`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${N({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open?"polite":"off"}
        >
          ${this.content}
        </slot>
      </sl-popup>
    `}};me.styles=rd;d([z("slot:not([name])")],me.prototype,"defaultSlot",2);d([z(".tooltip__body")],me.prototype,"body",2);d([z("sl-popup")],me.prototype,"popup",2);d([f()],me.prototype,"content",2);d([f()],me.prototype,"placement",2);d([f({type:Boolean,reflect:!0})],me.prototype,"disabled",2);d([f({type:Number})],me.prototype,"distance",2);d([f({type:Boolean,reflect:!0})],me.prototype,"open",2);d([f({type:Number})],me.prototype,"skidding",2);d([f()],me.prototype,"trigger",2);d([f({type:Boolean})],me.prototype,"hoist",2);d([$("open",{waitUntilFirstUpdate:!0})],me.prototype,"handleOpenChange",1);d([$("content"),$("distance"),$("hoist"),$("placement"),$("skidding")],me.prototype,"handleOptionsChange",1);d([$("disabled")],me.prototype,"handleDisabledChange",1);me=d([D("sl-tooltip")],me);se("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});se("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var sd=M`
  ${B}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Oe=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>t.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,r)=>{var s;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),r.unobserve(t[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){let a=this.tabs.indexOf(i);e.key==="Home"?a=0:e.key==="End"?a=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?a--:(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&a++,a<0&&(a=this.tabs.length-1),a>this.tabs.length-1&&(a=0),this.tabs[a].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[a],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&to(this.tabs[a],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(e,t){if(t=ae({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.map(s=>s.active=s===this.activeTab),this.panels.map(s=>{var i;return s.active=s.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&to(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,s=this.localize.dir()==="rtl",i=this.getAllTabs(),a=i.slice(0,i.indexOf(e)).reduce((n,l)=>({left:n.left+l.clientWidth,top:n.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*a.left}px`:`${a.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator()}render(){const e=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        class=${N({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Oe.styles=sd;d([z(".tab-group")],Oe.prototype,"tabGroup",2);d([z(".tab-group__body")],Oe.prototype,"body",2);d([z(".tab-group__nav")],Oe.prototype,"nav",2);d([z(".tab-group__indicator")],Oe.prototype,"indicator",2);d([R()],Oe.prototype,"hasScrollControls",2);d([f()],Oe.prototype,"placement",2);d([f()],Oe.prototype,"activation",2);d([f({attribute:"no-scroll-controls",type:Boolean})],Oe.prototype,"noScrollControls",2);d([$("noScrollControls",{waitUntilFirstUpdate:!0})],Oe.prototype,"updateScrollControls",1);d([$("placement",{waitUntilFirstUpdate:!0})],Oe.prototype,"syncIndicator",1);Oe=d([D("sl-tab-group")],Oe);var id=M`
  ${B}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }

  .tab-panel:not(.tab-panel--active) {
    display: none;
  }
`,od=0,cr=class extends I{constructor(){super(...arguments),this.attrId=++od,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return C`
      <slot
        part="base"
        class=${N({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};cr.styles=id;d([f({reflect:!0})],cr.prototype,"name",2);d([f({type:Boolean,reflect:!0})],cr.prototype,"active",2);d([$("active")],cr.prototype,"handleActiveChange",1);cr=d([D("sl-tab-panel")],cr);var ad=M`
  ${B}
  ${ps}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`,Y=class extends I{constructor(){super(...arguments),this.formSubmitController=new bt(this),this.hasSlotController=new Ue(this,"help-text","label"),this.hasFocus=!1,this.invalid=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){this.input.setRangeText(e,t,r,s),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input")),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-input"),this.emit("sl-change"))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.input.value=this.value,this.invalid=!this.input.checkValidity(),this.updateComplete.then(()=>this.setTextareaHeight())}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${N({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${N({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${E(this.name)}
              .value=${$t(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${E(this.placeholder)}
              rows=${E(this.rows)}
              minlength=${E(this.minlength)}
              maxlength=${E(this.maxlength)}
              autocapitalize=${E(this.autocapitalize)}
              autocorrect=${E(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${E(this.spellcheck)}
              enterkeyhint=${E(this.enterkeyhint)}
              inputmode=${E(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};Y.styles=ad;d([z(".textarea__control")],Y.prototype,"input",2);d([R()],Y.prototype,"hasFocus",2);d([R()],Y.prototype,"invalid",2);d([f()],Y.prototype,"title",2);d([f()],Y.prototype,"name",2);d([f()],Y.prototype,"value",2);d([f({reflect:!0})],Y.prototype,"size",2);d([f({type:Boolean,reflect:!0})],Y.prototype,"filled",2);d([f()],Y.prototype,"label",2);d([f({attribute:"help-text"})],Y.prototype,"helpText",2);d([f()],Y.prototype,"placeholder",2);d([f({type:Number})],Y.prototype,"rows",2);d([f()],Y.prototype,"resize",2);d([f({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],Y.prototype,"readonly",2);d([f({type:Number})],Y.prototype,"minlength",2);d([f({type:Number})],Y.prototype,"maxlength",2);d([f({type:Boolean,reflect:!0})],Y.prototype,"required",2);d([f()],Y.prototype,"autocapitalize",2);d([f()],Y.prototype,"autocorrect",2);d([f()],Y.prototype,"autocomplete",2);d([f({type:Boolean})],Y.prototype,"autofocus",2);d([f()],Y.prototype,"enterkeyhint",2);d([f({type:Boolean})],Y.prototype,"spellcheck",2);d([f()],Y.prototype,"inputmode",2);d([Ht()],Y.prototype,"defaultValue",2);d([$("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);d([$("rows",{waitUntilFirstUpdate:!0})],Y.prototype,"handleRowsChange",1);d([$("value",{waitUntilFirstUpdate:!0})],Y.prototype,"handleValueChange",1);Y=d([D("sl-textarea")],Y);var nd=M`
  ${B}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Pr(e,t){var r;function s(o){const a=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,l=a.left+n.pageXOffset,c=a.top+n.pageYOffset,h=o.pageX-l,u=o.pageY-c;t!=null&&t.onMove&&t.onMove(h,u)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),((r=t==null?void 0:t.initialEvent)==null?void 0:r.type)==="pointermove"&&s(t.initialEvent)}var $e=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Pr(this,{onMove:(r,s)=>{let i=this.vertical?s:r;this.primary==="end"&&(i=this.size-i),this.snap&&this.snap.split(" ").forEach(a=>{let n;a.endsWith("%")?n=this.size*(parseFloat(a)/100):n=parseFloat(a),t&&!this.vertical&&(n=this.size-n),i>=n-this.snapThreshold&&i<=n+this.snapThreshold&&(i=n)}),this.position=ce(this.pixelsToPercentage(i),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=ce(t,0,100)}}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${s} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${s}`:r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${i}`,this.style[t]="",C`
      <slot name="start" part="panel start" class="start"></slot>

      <slot
        name="divider"
        part="divider"
        class="divider"
        tabindex=${E(this.disabled?void 0:"0")}
        role="separator"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      ></slot>

      <slot name="end" part="panel end" class="end"></slot>
    `}};$e.styles=nd;d([z(".divider")],$e.prototype,"divider",2);d([f({type:Number,reflect:!0})],$e.prototype,"position",2);d([f({attribute:"position-in-pixels",type:Number})],$e.prototype,"positionInPixels",2);d([f({type:Boolean,reflect:!0})],$e.prototype,"vertical",2);d([f({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);d([f()],$e.prototype,"primary",2);d([f()],$e.prototype,"snap",2);d([f({type:Number,attribute:"snap-threshold"})],$e.prototype,"snapThreshold",2);d([$("position")],$e.prototype,"handlePositionChange",1);d([$("positionInPixels")],$e.prototype,"handlePositionInPixelsChange",1);d([$("vertical")],$e.prototype,"handleVerticalChange",1);$e=d([D("sl-split-panel")],$e);var ld=M`
  ${B}

  :host {
    --height: var(--sl-toggle-size);
    --thumb-size: calc(var(--sl-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,we=class extends I{constructor(){super(...arguments),this.formSubmitController=new bt(this,{value:e=>e.checked?e.value:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.invalid=!1,this.title="",this.name="",this.disabled=!1,this.required=!1,this.checked=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleCheckedChange(){this.input.checked=this.checked,this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"))}render(){return C`
      <label
        part="base"
        class=${N({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${E(this.value)}
          .checked=${$t(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <slot part="label" class="switch__label"></slot>
      </label>
    `}};we.styles=ld;d([z('input[type="checkbox"]')],we.prototype,"input",2);d([R()],we.prototype,"hasFocus",2);d([R()],we.prototype,"invalid",2);d([f()],we.prototype,"title",2);d([f()],we.prototype,"name",2);d([f()],we.prototype,"value",2);d([f({type:Boolean,reflect:!0})],we.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],we.prototype,"required",2);d([f({type:Boolean,reflect:!0})],we.prototype,"checked",2);d([Ht("checked")],we.prototype,"defaultChecked",2);d([$("checked",{waitUntilFirstUpdate:!0})],we.prototype,"handleCheckedChange",1);d([$("disabled",{waitUntilFirstUpdate:!0})],we.prototype,"handleDisabledChange",1);we=d([D("sl-switch")],we);var cd=M`
  ${B}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,dd=0,et=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.attrId=++dd,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}handleCloseClick(){this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return this.id=this.id.length>0?this.id:this.componentId,C`
      <div
        part="base"
        class=${N({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};et.styles=cd;d([z(".tab")],et.prototype,"tab",2);d([f({reflect:!0})],et.prototype,"panel",2);d([f({type:Boolean,reflect:!0})],et.prototype,"active",2);d([f({type:Boolean})],et.prototype,"closable",2);d([f({type:Boolean,reflect:!0})],et.prototype,"disabled",2);d([$("active")],et.prototype,"handleActiveChange",1);d([$("disabled")],et.prototype,"handleDisabledChange",1);et=d([D("sl-tab")],et);var ud=M`
  ${B}

  :host {
    display: contents;
  }
`,Fr=class extends I{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};Fr.styles=ud;d([f({type:Boolean,reflect:!0})],Fr.prototype,"disabled",2);d([$("disabled",{waitUntilFirstUpdate:!0})],Fr.prototype,"handleDisabledChange",1);Fr=d([D("sl-resize-observer")],Fr);var hd=M`
  ${B}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbols--indicator {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--symbol-color-active);
    pointer-events: none;
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbols--indicator {
      color: SelectedItem;
    }
  }
`,ze=hs(class extends ai{constructor(e){var t;if(super(e),e.type!==at.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const s=e[r];return s==null?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:r}=e.element;if(this.vt===void 0){this.vt=new Set;for(const s in t)this.vt.add(s);return this.render(t)}this.vt.forEach(s=>{t[s]==null&&(this.vt.delete(s),s.includes("-")?r.removeProperty(s):r[s]="")});for(const s in t){const i=t[s];i!=null&&(this.vt.add(s),s.includes("-")?r.setProperty(s,i):r[s]=i)}return Ee}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:s,width:i}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((s-e)/i*this.max,this.precision):this.roundToPrecision((e-r)/i*this.max,this.precision);return ce(o,0,this.max)}handleClick(e){this.setValue(this.getValueFromMousePosition(e))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const s=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-s),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const s=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+s),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault())}}handleMouseEnter(){this.isHovering=!0}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),e.preventDefault()}handleValueChange(){this.emit("sl-change")}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,C`
      <div
        part="base"
        class=${N({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols rating__symbols--inactive">
          ${t.map(s=>C`
              <span
                class=${N({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===s+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${la(this.getSymbol(s+1))}
              </span>
            `)}
        </span>

        <span class="rating__symbols rating__symbols--indicator">
          ${t.map(s=>C`
              <span
                class=${N({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===s+1})}
                style=${ze({clipPath:r>s+1?"none":e?`inset(0 0 0 ${100-(r-s)/1*100}%)`:`inset(0 ${100-(r-s)/1*100}% 0 0)`})}
                role="presentation"
              >
                ${la(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Ce.styles=hd;d([z(".rating")],Ce.prototype,"rating",2);d([R()],Ce.prototype,"hoverValue",2);d([R()],Ce.prototype,"isHovering",2);d([f()],Ce.prototype,"label",2);d([f({type:Number})],Ce.prototype,"value",2);d([f({type:Number})],Ce.prototype,"max",2);d([f({type:Number})],Ce.prototype,"precision",2);d([f({type:Boolean,reflect:!0})],Ce.prototype,"readonly",2);d([f({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);d([f()],Ce.prototype,"getSymbol",2);d([$("value",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleValueChange",1);Ce=d([D("sl-rating")],Ce);var pd=M`
  ${B}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Fs=class extends I{constructor(){super(...arguments),this.effect="none"}render(){return C`
      <div
        part="base"
        class=${N({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Fs.styles=pd;d([f()],Fs.prototype,"effect",2);Fs=d([D("sl-skeleton")],Fs);var fd=M`
  ${fn}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Pe=class extends I{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}focus(e){this.input.focus(e)}blur(){this.input.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}render(){return Ir`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${N({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${E(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Pe.styles=fd;d([z(".button")],Pe.prototype,"input",2);d([z(".hidden-input")],Pe.prototype,"hiddenInput",2);d([R()],Pe.prototype,"hasFocus",2);d([R()],Pe.prototype,"checked",2);d([f()],Pe.prototype,"value",2);d([f({type:Boolean,reflect:!0})],Pe.prototype,"disabled",2);d([f({reflect:!0})],Pe.prototype,"size",2);d([f({type:Boolean,reflect:!0})],Pe.prototype,"pill",2);d([$("disabled",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleDisabledChange",1);Pe=d([D("sl-radio-button")],Pe);var md=M`
  ${B}
  ${ps}

  :host {
    display: block;
  }

  .form-control {
    border: none;
    padding: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,be=class extends I{constructor(){super(...arguments),this.formSubmitController=new bt(this,{defaultValue:e=>e.defaultValue}),this.hasSlotController=new Ue(this,"help-text","label"),this.hasButtonGroup=!1,this.errorMessage="",this.customErrorMessage="",this.defaultValue="",this.invalid=!1,this.label="",this.helpText="",this.name="option",this.value="",this.required=!1}handleValueChange(){this.hasUpdated&&(this.emit("sl-change"),this.updateCheckedRadio())}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.invalid=!this.validity.valid}checkValidity(){return this.validity.valid}setCustomValidity(e=""){this.customErrorMessage=e,this.errorMessage=e,e?(this.invalid=!0,this.input.setCustomValidity(e)):this.invalid=!1}get validity(){const e=!(this.value&&this.required||!this.required),t=this.customErrorMessage!=="";return{badInput:!1,customError:t,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!(e||t),valueMissing:!e}}reportValidity(){const e=this.validity;return this.errorMessage=this.customErrorMessage||e.valid?"":this.input.validationMessage,this.invalid=!e.valid,e.valid||this.showNativeErrorMessage(),!this.invalid}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target;if(t.disabled)return;this.value=t.value,this.getAllRadios().forEach(s=>s.checked=s===t)}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(a=>!a.disabled),s=(t=r.find(a=>a.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let o=r.indexOf(s)+i;o<0&&(o=r.length-1),o>r.length-1&&(o=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||(a.tabIndex=-1)}),this.value=r[o].value,r[o].checked=!0,this.hasButtonGroup?r[o].shadowRoot.querySelector("button").focus():(r[o].tabIndex=0,r[o].focus()),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(s=>s.checked)||e[0];r&&r.focus()}handleSlotChange(){var e;const t=this.getAllRadios();if(t.forEach(r=>r.checked=r.value===this.value),this.hasButtonGroup=t.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),!t.some(r=>r.checked))if(this.hasButtonGroup){const r=t[0].shadowRoot.querySelector("button");r.tabIndex=0}else t[0].tabIndex=0;if(this.hasButtonGroup){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");r&&(r.disableRole=!0)}}showNativeErrorMessage(){this.input.hidden=!1,this.input.reportValidity(),setTimeout(()=>this.input.hidden=!0,1e4)}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.invalid=!this.validity.valid}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,i=C`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return C`
      <fieldset
        part="form-control"
        class=${N({"form-control":!0,"form-control--medium":!0,"form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
              />
            </label>
          </div>

          ${this.hasButtonGroup?C`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `}};be.styles=md;d([z("slot:not([name])")],be.prototype,"defaultSlot",2);d([z(".radio-group__validation-input")],be.prototype,"input",2);d([R()],be.prototype,"hasButtonGroup",2);d([R()],be.prototype,"errorMessage",2);d([R()],be.prototype,"customErrorMessage",2);d([R()],be.prototype,"defaultValue",2);d([R()],be.prototype,"invalid",2);d([f()],be.prototype,"label",2);d([f({attribute:"help-text"})],be.prototype,"helpText",2);d([f()],be.prototype,"name",2);d([f({reflect:!0})],be.prototype,"value",2);d([f({type:Boolean,reflect:!0})],be.prototype,"required",2);d([$("value")],be.prototype,"handleValueChange",1);be=d([D("sl-radio-group")],be);var gd=M`
  ${B}
  ${ps}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,ne=class extends I{constructor(){super(...arguments),this.formSubmitController=new bt(this),this.hasSlotController=new Ue(this,"help-text","label"),this.localize=new te(this),this.hasFocus=!1,this.hasTooltip=!1,this.invalid=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value),this.emit("sl-change"))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value),this.emit("sl-change"))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-change"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleValueChange(){this.invalid=!this.input.checkValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",o=t*e;if(i){const a=`${t-o}px + ${e} * ${s}`;this.output.style.translate=`calc((${a} - ${r/2}px - ${s} / 2))`}else{const a=`${o}px - ${e} * ${s}`;this.output.style.translate=`calc(${a} - ${r/2}px + ${s} / 2)`}}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${N({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${N({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${E(this.name)}
              ?disabled=${this.disabled}
              min=${E(this.min)}
              max=${E(this.max)}
              step=${E(this.step)}
              .value=${$t(this.value.toString())}
              aria-describedby="help-text"
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?C`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};ne.styles=gd;d([z(".range__control")],ne.prototype,"input",2);d([z(".range__tooltip")],ne.prototype,"output",2);d([R()],ne.prototype,"hasFocus",2);d([R()],ne.prototype,"hasTooltip",2);d([R()],ne.prototype,"invalid",2);d([f()],ne.prototype,"title",2);d([f()],ne.prototype,"name",2);d([f({type:Number})],ne.prototype,"value",2);d([f()],ne.prototype,"label",2);d([f({attribute:"help-text"})],ne.prototype,"helpText",2);d([f({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);d([f({type:Number})],ne.prototype,"min",2);d([f({type:Number})],ne.prototype,"max",2);d([f({type:Number})],ne.prototype,"step",2);d([f()],ne.prototype,"tooltip",2);d([f({attribute:!1})],ne.prototype,"tooltipFormatter",2);d([Ht()],ne.prototype,"defaultValue",2);d([$("value",{waitUntilFirstUpdate:!0})],ne.prototype,"handleValueChange",1);d([$("disabled",{waitUntilFirstUpdate:!0})],ne.prototype,"handleDisabledChange",1);d([$("hasTooltip",{waitUntilFirstUpdate:!0})],ne.prototype,"syncRange",1);ne=d([D("sl-range")],ne);var bd=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],pt=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:s,value:i}=bd.find(o=>Math.abs(r)<o.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/i),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;s==="minute"?o=_s("second"):s==="hour"?o=_s("minute"):s==="day"?o=_s("hour"):o=_s("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return C` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};d([R()],pt.prototype,"isoTime",2);d([R()],pt.prototype,"relativeTime",2);d([R()],pt.prototype,"titleTime",2);d([f()],pt.prototype,"date",2);d([f()],pt.prototype,"format",2);d([f()],pt.prototype,"numeric",2);d([f({type:Boolean})],pt.prototype,"sync",2);pt=d([D("sl-relative-time")],pt);function _s(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var vd=M`
  ${B}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,dr=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return C`
      <div
        part="base"
        class=${N({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${E(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ze({width:`${this.value}%`})}>
          ${this.indeterminate?"":C` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};dr.styles=vd;d([f({type:Number,reflect:!0})],dr.prototype,"value",2);d([f({type:Boolean,reflect:!0})],dr.prototype,"indeterminate",2);d([f()],dr.prototype,"label",2);dr=d([D("sl-progress-bar")],dr);var yd=M`
  ${B}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`,Pt=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,s=r-this.value/100*r;this.indicatorOffset=`${s}px`}}render(){return C`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Pt.styles=yd;d([z(".progress-ring__indicator")],Pt.prototype,"indicator",2);d([R()],Pt.prototype,"indicatorOffset",2);d([f({type:Number,reflect:!0})],Pt.prototype,"value",2);d([f()],Pt.prototype,"label",2);Pt=d([D("sl-progress-ring")],Pt);var _d=M`
  ${B}

  :host {
    display: inline-block;
  }
`,xn=null,kn=class{};kn.render=function(e,t){xn(e,t)};self.QrCreator=kn;(function(e){function t(n,l,c,h){var u={},p=e(c,l);p.u(n),p.J(),h=h||0;var g=p.h(),b=p.h()+2*h;return u.text=n,u.level=l,u.version=c,u.O=b,u.a=function(m,v){return m-=h,v-=h,0>m||m>=g||0>v||v>=g?!1:p.a(m,v)},u}function r(n,l,c,h,u,p,g,b,m,v){function y(_,x,w,k,O,q,K){_?(n.lineTo(x+q,w+K),n.arcTo(x,w,k,O,p)):n.lineTo(x,w)}g?n.moveTo(l+p,c):n.moveTo(l,c),y(b,h,c,h,u,-p,0),y(m,h,u,l,u,0,-p),y(v,l,u,l,c,p,0),y(g,l,c,h,c,0,p)}function s(n,l,c,h,u,p,g,b,m,v){function y(_,x,w,k){n.moveTo(_+w,x),n.lineTo(_,x),n.lineTo(_,x+k),n.arcTo(_,x,_+w,x,p)}g&&y(l,c,p,p),b&&y(h,c,-p,p),m&&y(h,u,-p,-p),v&&y(l,u,p,-p)}function i(n,l){var c=l.fill;if(typeof c=="string")n.fillStyle=c;else{var h=c.type,u=c.colorStops;if(c=c.position.map(g=>Math.round(g*l.size)),h==="linear-gradient")var p=n.createLinearGradient.apply(n,c);else if(h==="radial-gradient")p=n.createRadialGradient.apply(n,c);else throw Error("Unsupported fill");u.forEach(([g,b])=>{p.addColorStop(g,b)}),n.fillStyle=p}}function o(n,l){e:{var c=l.text,h=l.v,u=l.N,p=l.K,g=l.P;for(u=Math.max(1,u||1),p=Math.min(40,p||40);u<=p;u+=1)try{var b=t(c,h,u,g);break e}catch{}b=void 0}if(!b)return null;for(c=n.getContext("2d"),l.background&&(c.fillStyle=l.background,c.fillRect(l.left,l.top,l.size,l.size)),h=b.O,p=l.size/h,c.beginPath(),g=0;g<h;g+=1)for(u=0;u<h;u+=1){var m=c,v=l.left+u*p,y=l.top+g*p,_=g,x=u,w=b.a,k=v+p,O=y+p,q=_-1,K=_+1,P=x-1,L=x+1,ye=Math.floor(Math.min(.5,Math.max(0,l.R))*p),Ie=w(_,x),Le=w(q,P),We=w(q,x);q=w(q,L);var Zt=w(_,L);L=w(K,L),x=w(K,x),K=w(K,P),_=w(_,P),v=Math.round(v),y=Math.round(y),k=Math.round(k),O=Math.round(O),Ie?r(m,v,y,k,O,ye,!We&&!_,!We&&!Zt,!x&&!Zt,!x&&!_):s(m,v,y,k,O,ye,We&&_&&Le,We&&Zt&&q,x&&Zt&&L,x&&_&&K)}return i(c,l),c.fill(),n}var a={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};xn=function(n,l){var c={};Object.assign(c,a,n),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,l instanceof HTMLCanvasElement?((l.width!==c.size||l.height!==c.size)&&(l.width=c.size,l.height=c.size),l.getContext("2d").clearRect(0,0,l.width,l.height),o(l,c)):(n=document.createElement("canvas"),n.width=c.size,n.height=c.size,c=o(n,c),l.appendChild(c))}})(function(){function e(l){var c=r.s(l);return{S:function(){return 4},b:function(){return c.length},write:function(h){for(var u=0;u<c.length;u+=1)h.put(c[u],8)}}}function t(){var l=[],c=0,h={B:function(){return l},c:function(u){return(l[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,p){for(var g=0;g<p;g+=1)h.m((u>>>p-g-1&1)==1)},f:function(){return c},m:function(u){var p=Math.floor(c/8);l.length<=p&&l.push(0),u&&(l[p]|=128>>>c%8),c+=1}};return h}function r(l,c){function h(_,x){for(var w=-1;7>=w;w+=1)if(!(-1>=_+w||b<=_+w))for(var k=-1;7>=k;k+=1)-1>=x+k||b<=x+k||(g[_+w][x+k]=0<=w&&6>=w&&(k==0||k==6)||0<=k&&6>=k&&(w==0||w==6)||2<=w&&4>=w&&2<=k&&4>=k)}function u(_,x){for(var w=b=4*l+17,k=Array(w),O=0;O<w;O+=1){k[O]=Array(w);for(var q=0;q<w;q+=1)k[O][q]=null}for(g=k,h(0,0),h(b-7,0),h(0,b-7),w=o.G(l),k=0;k<w.length;k+=1)for(O=0;O<w.length;O+=1){q=w[k];var K=w[O];if(g[q][K]==null)for(var P=-2;2>=P;P+=1)for(var L=-2;2>=L;L+=1)g[q+P][K+L]=P==-2||P==2||L==-2||L==2||P==0&&L==0}for(w=8;w<b-8;w+=1)g[w][6]==null&&(g[w][6]=w%2==0);for(w=8;w<b-8;w+=1)g[6][w]==null&&(g[6][w]=w%2==0);for(w=o.w(p<<3|x),k=0;15>k;k+=1)O=!_&&(w>>k&1)==1,g[6>k?k:8>k?k+1:b-15+k][8]=O,g[8][8>k?b-k-1:9>k?15-k:14-k]=O;if(g[b-8][8]=!_,7<=l){for(w=o.A(l),k=0;18>k;k+=1)O=!_&&(w>>k&1)==1,g[Math.floor(k/3)][k%3+b-8-3]=O;for(k=0;18>k;k+=1)O=!_&&(w>>k&1)==1,g[k%3+b-8-3][Math.floor(k/3)]=O}if(m==null){for(_=n.I(l,p),w=t(),k=0;k<v.length;k+=1)O=v[k],w.put(4,4),w.put(O.b(),o.f(4,l)),O.write(w);for(k=O=0;k<_.length;k+=1)O+=_[k].j;if(w.f()>8*O)throw Error("code length overflow. ("+w.f()+">"+8*O+")");for(w.f()+4<=8*O&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*O)&&(w.put(236,8),!(w.f()>=8*O));)w.put(17,8);var ye=0;for(O=k=0,q=Array(_.length),K=Array(_.length),P=0;P<_.length;P+=1){var Ie=_[P].j,Le=_[P].o-Ie;for(k=Math.max(k,Ie),O=Math.max(O,Le),q[P]=Array(Ie),L=0;L<q[P].length;L+=1)q[P][L]=255&w.B()[L+ye];for(ye+=Ie,L=o.C(Le),Ie=s(q[P],L.b()-1).l(L),K[P]=Array(L.b()-1),L=0;L<K[P].length;L+=1)Le=L+Ie.b()-K[P].length,K[P][L]=0<=Le?Ie.c(Le):0}for(L=w=0;L<_.length;L+=1)w+=_[L].o;for(w=Array(w),L=ye=0;L<k;L+=1)for(P=0;P<_.length;P+=1)L<q[P].length&&(w[ye]=q[P][L],ye+=1);for(L=0;L<O;L+=1)for(P=0;P<_.length;P+=1)L<K[P].length&&(w[ye]=K[P][L],ye+=1);m=w}for(_=m,w=-1,k=b-1,O=7,q=0,x=o.F(x),K=b-1;0<K;K-=2)for(K==6&&--K;;){for(P=0;2>P;P+=1)g[k][K-P]==null&&(L=!1,q<_.length&&(L=(_[q]>>>O&1)==1),x(k,K-P)&&(L=!L),g[k][K-P]=L,--O,O==-1&&(q+=1,O=7));if(k+=w,0>k||b<=k){k-=w,w=-w;break}}}var p=i[c],g=null,b=0,m=null,v=[],y={u:function(_){_=e(_),v.push(_),m=null},a:function(_,x){if(0>_||b<=_||0>x||b<=x)throw Error(_+","+x);return g[_][x]},h:function(){return b},J:function(){for(var _=0,x=0,w=0;8>w;w+=1){u(!0,w);var k=o.D(y);(w==0||_>k)&&(_=k,x=w)}u(!1,x)}};return y}function s(l,c){if(typeof l.length>"u")throw Error(l.length+"/"+c);var h=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var g=Array(l.length-p+c),b=0;b<l.length-p;b+=1)g[b]=l[b+p];return g}(),u={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(u.b()+p.b()-1),b=0;b<u.b();b+=1)for(var m=0;m<p.b();m+=1)g[b+m]^=a.i(a.g(u.c(b))+a.g(p.c(m)));return s(g,0)},l:function(p){if(0>u.b()-p.b())return u;for(var g=a.g(u.c(0))-a.g(p.c(0)),b=Array(u.b()),m=0;m<u.b();m+=1)b[m]=u.c(m);for(m=0;m<p.b();m+=1)b[m]^=a.i(a.g(p.c(m))+g);return s(b,0).l(p)}};return u}r.s=function(l){for(var c=[],h=0;h<l.length;h++){var u=l.charCodeAt(h);128>u?c.push(u):2048>u?c.push(192|u>>6,128|u&63):55296>u||57344<=u?c.push(224|u>>12,128|u>>6&63,128|u&63):(h++,u=65536+((u&1023)<<10|l.charCodeAt(h)&1023),c.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return c};var i={L:1,M:0,Q:3,H:2},o=function(){function l(u){for(var p=0;u!=0;)p+=1,u>>>=1;return p}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(u){for(var p=u<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(u<<10|p)^21522},A:function(u){for(var p=u<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return u<<12|p},G:function(u){return c[u-1]},F:function(u){switch(u){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var p=s([1],0),g=0;g<u;g+=1)p=p.multiply(s([1,a.i(g)],0));return p},f:function(u,p){if(u!=4||1>p||40<p)throw Error("mode: "+u+"; type: "+p);return 10>p?8:16},D:function(u){for(var p=u.h(),g=0,b=0;b<p;b+=1)for(var m=0;m<p;m+=1){for(var v=0,y=u.a(b,m),_=-1;1>=_;_+=1)if(!(0>b+_||p<=b+_))for(var x=-1;1>=x;x+=1)0>m+x||p<=m+x||(_!=0||x!=0)&&y==u.a(b+_,m+x)&&(v+=1);5<v&&(g+=3+v-5)}for(b=0;b<p-1;b+=1)for(m=0;m<p-1;m+=1)v=0,u.a(b,m)&&(v+=1),u.a(b+1,m)&&(v+=1),u.a(b,m+1)&&(v+=1),u.a(b+1,m+1)&&(v+=1),(v==0||v==4)&&(g+=3);for(b=0;b<p;b+=1)for(m=0;m<p-6;m+=1)u.a(b,m)&&!u.a(b,m+1)&&u.a(b,m+2)&&u.a(b,m+3)&&u.a(b,m+4)&&!u.a(b,m+5)&&u.a(b,m+6)&&(g+=40);for(m=0;m<p;m+=1)for(b=0;b<p-6;b+=1)u.a(b,m)&&!u.a(b+1,m)&&u.a(b+2,m)&&u.a(b+3,m)&&u.a(b+4,m)&&!u.a(b+5,m)&&u.a(b+6,m)&&(g+=40);for(m=v=0;m<p;m+=1)for(b=0;b<p;b+=1)u.a(b,m)&&(v+=1);return g+=Math.abs(100*v/p/p-50)/5*10}};return h}(),a=function(){for(var l=Array(256),c=Array(256),h=0;8>h;h+=1)l[h]=1<<h;for(h=8;256>h;h+=1)l[h]=l[h-4]^l[h-5]^l[h-6]^l[h-8];for(h=0;255>h;h+=1)c[l[h]]=h;return{g:function(u){if(1>u)throw Error("glog("+u+")");return c[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return l[u]}}}(),n=function(){function l(u,p){switch(p){case i.L:return c[4*(u-1)];case i.M:return c[4*(u-1)+1];case i.Q:return c[4*(u-1)+2];case i.H:return c[4*(u-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(u,p){var g=l(u,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+p);u=g.length/3,p=[];for(var b=0;b<u;b+=1)for(var m=g[3*b],v=g[3*b+1],y=g[3*b+2],_=0;_<m;_+=1){var x=y,w={};w.o=v,w.j=x,p.push(w)}return p}};return h}();return r}());var wd=QrCreator,Re=class extends I{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){!this.hasUpdated||wd.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:null,size:this.size*2},this.canvas)}render(){return C`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label.length>0?this.label:this.value}
        style=${ze({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Re.styles=_d;d([z("canvas")],Re.prototype,"canvas",2);d([f()],Re.prototype,"value",2);d([f()],Re.prototype,"label",2);d([f({type:Number})],Re.prototype,"size",2);d([f()],Re.prototype,"fill",2);d([f()],Re.prototype,"background",2);d([f({type:Number})],Re.prototype,"radius",2);d([f({attribute:"error-correction"})],Re.prototype,"errorCorrection",2);d([$("background"),$("errorCorrection"),$("fill"),$("radius"),$("size"),$("value")],Re.prototype,"generate",1);Re=d([D("sl-qr-code")],Re);var xd=M`
  ${B}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--sl-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`,ft=class extends I{constructor(){super(...arguments),this.checked=!1,this.hasFocus=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setInitialAttributes(),this.addEventListeners()}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}addEventListeners(){this.addEventListener("blur",()=>this.handleBlur()),this.addEventListener("click",()=>this.handleClick()),this.addEventListener("focus",()=>this.handleFocus())}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return C`
      <span
        part="base"
        class=${N({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?C` <sl-icon part="checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};ft.styles=xd;d([R()],ft.prototype,"checked",2);d([R()],ft.prototype,"hasFocus",2);d([f()],ft.prototype,"value",2);d([f({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);d([$("checked")],ft.prototype,"handleCheckedChange",1);d([$("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);ft=d([D("sl-radio")],ft);var kd=M`
  ${B}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Rt=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),Pr(this.base,{onMove:s=>{this.position=parseFloat(ce(s/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const s=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(i-=s),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(i+=s),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=ce(i,0,100),this.position=i}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        id="image-comparer"
        class=${N({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <slot name="before" part="before" class="image-comparer__before"></slot>

          <slot
            name="after"
            part="after"
            class="image-comparer__after"
            style=${ze({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          ></slot>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${ze({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <slot
            name="handle"
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <sl-icon library="system" name="grip-vertical"></sl-icon>
          </slot>
        </div>
      </div>
    `}};Rt.styles=kd;d([z(".image-comparer")],Rt.prototype,"base",2);d([z(".image-comparer__handle")],Rt.prototype,"handle",2);d([f({type:Number,reflect:!0})],Rt.prototype,"position",2);d([$("position",{waitUntilFirstUpdate:!0})],Rt.prototype,"handlePositionChange",1);Rt=d([D("sl-image-comparer")],Rt);var $d=M`
  ${B}

  :host {
    display: block;
  }
`,Mt=class extends I{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await pn(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return C`<slot></slot>`}};Mt.styles=$d;d([f()],Mt.prototype,"src",2);d([f()],Mt.prototype,"mode",2);d([f({attribute:"allow-scripts",type:Boolean})],Mt.prototype,"allowScripts",2);d([$("src")],Mt.prototype,"handleSrcChange",1);Mt=d([D("sl-include")],Mt);var Cd=M`
  ${B}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    position: absolute;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Sr=[],$n=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Sr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Sr=Sr.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Sr[Sr.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=mn(this.element),r=this.tabDirection==="forward"?e:t;typeof(r==null?void 0:r.focus)=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}};function xa(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Me=class extends I{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"footer"),this.localize=new te(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new $n(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&!this.contained&&(this.addOpenListeners(),this.modal.activate(),Ms(this))}disconnectedCallback(){super.disconnectedCallback(),Bs(this)}async show(){if(!this.open)return this.open=!0,De(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,De(this,"sl-after-hide")}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=ue(this,"drawer.denyClose",{dir:this.localize.dir()});de(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ms(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([fe(this.drawer),fe(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ue(this,`drawer.show${xa(this.placement)}`,{dir:this.localize.dir()}),r=ue(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([de(this.panel,t.keyframes,t.options),de(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),Bs(this),await Promise.all([fe(this.drawer),fe(this.overlay)]);const e=ue(this,`drawer.hide${xa(this.placement)}`,{dir:this.localize.dir()}),t=ue(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([de(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),de(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}render(){return C`
      <div
        part="base"
        class=${N({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${E(this.noHeader?this.label:void 0)}
          aria-labelledby=${E(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":C`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Me.styles=Cd;d([z(".drawer")],Me.prototype,"drawer",2);d([z(".drawer__panel")],Me.prototype,"panel",2);d([z(".drawer__overlay")],Me.prototype,"overlay",2);d([f({type:Boolean,reflect:!0})],Me.prototype,"open",2);d([f({reflect:!0})],Me.prototype,"label",2);d([f({reflect:!0})],Me.prototype,"placement",2);d([f({type:Boolean,reflect:!0})],Me.prototype,"contained",2);d([f({attribute:"no-header",type:Boolean,reflect:!0})],Me.prototype,"noHeader",2);d([$("open",{waitUntilFirstUpdate:!0})],Me.prototype,"handleOpenChange",1);Me=d([D("sl-drawer")],Me);se("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});se("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});se("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});se("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});se("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});se("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});se("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});se("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});se("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});se("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});se("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var jr=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),i=r[s]+this.unit,o=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};d([f({type:Number})],jr.prototype,"value",2);d([f()],jr.prototype,"unit",2);d([f()],jr.prototype,"display",2);jr=d([D("sl-format-bytes")],jr);var Se=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return C`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};d([f()],Se.prototype,"date",2);d([f()],Se.prototype,"weekday",2);d([f()],Se.prototype,"era",2);d([f()],Se.prototype,"year",2);d([f()],Se.prototype,"month",2);d([f()],Se.prototype,"day",2);d([f()],Se.prototype,"hour",2);d([f()],Se.prototype,"minute",2);d([f()],Se.prototype,"second",2);d([f({attribute:"time-zone-name"})],Se.prototype,"timeZoneName",2);d([f({attribute:"time-zone"})],Se.prototype,"timeZone",2);d([f({attribute:"hour-format"})],Se.prototype,"hourFormat",2);Se=d([D("sl-format-date")],Se);var Be=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};d([f({type:Number})],Be.prototype,"value",2);d([f()],Be.prototype,"type",2);d([f({attribute:"no-grouping",type:Boolean})],Be.prototype,"noGrouping",2);d([f()],Be.prototype,"currency",2);d([f({attribute:"currency-display"})],Be.prototype,"currencyDisplay",2);d([f({attribute:"minimum-integer-digits",type:Number})],Be.prototype,"minimumIntegerDigits",2);d([f({attribute:"minimum-fraction-digits",type:Number})],Be.prototype,"minimumFractionDigits",2);d([f({attribute:"maximum-fraction-digits",type:Number})],Be.prototype,"maximumFractionDigits",2);d([f({attribute:"minimum-significant-digits",type:Number})],Be.prototype,"minimumSignificantDigits",2);d([f({attribute:"maximum-significant-digits",type:Number})],Be.prototype,"maximumSignificantDigits",2);Be=d([D("sl-format-number")],Be);var Sd=M`
  ${B}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Cn=zt({"node_modules/color-name/index.js"(e,t){t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),Ad=zt({"node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(e,t){t.exports=function(s){return!s||typeof s=="string"?!1:s instanceof Array||Array.isArray(s)||s.length>=0&&(s.splice instanceof Function||Object.getOwnPropertyDescriptor(s,s.length-1)&&s.constructor.name!=="String")}}}),zd=zt({"node_modules/simple-swizzle/index.js"(e,t){var r=Ad(),s=Array.prototype.concat,i=Array.prototype.slice,o=t.exports=function(n){for(var l=[],c=0,h=n.length;c<h;c++){var u=n[c];r(u)?l=s.call(l,i.call(u)):l.push(u)}return l};o.wrap=function(a){return function(){return a(o(arguments))}}}}),Ed=zt({"node_modules/color-string/index.js"(e,t){var r=Cn(),s=zd(),i=Object.hasOwnProperty,o={};for(a in r)i.call(r,a)&&(o[r[a]]=a);var a,n=t.exports={to:{},get:{}};n.get=function(h){var u=h.substring(0,3).toLowerCase(),p,g;switch(u){case"hsl":p=n.get.hsl(h),g="hsl";break;case"hwb":p=n.get.hwb(h),g="hwb";break;default:p=n.get.rgb(h),g="rgb";break}return p?{model:g,value:p}:null},n.get.rgb=function(h){if(!h)return null;var u=/^#([a-f0-9]{3,4})$/i,p=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,g=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,b=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,m=/^(\w+)$/,v=[0,0,0,1],y,_,x;if(y=h.match(p)){for(x=y[2],y=y[1],_=0;_<3;_++){var w=_*2;v[_]=parseInt(y.slice(w,w+2),16)}x&&(v[3]=parseInt(x,16)/255)}else if(y=h.match(u)){for(y=y[1],x=y[3],_=0;_<3;_++)v[_]=parseInt(y[_]+y[_],16);x&&(v[3]=parseInt(x+x,16)/255)}else if(y=h.match(g)){for(_=0;_<3;_++)v[_]=parseInt(y[_+1],0);y[4]&&(y[5]?v[3]=parseFloat(y[4])*.01:v[3]=parseFloat(y[4]))}else if(y=h.match(b)){for(_=0;_<3;_++)v[_]=Math.round(parseFloat(y[_+1])*2.55);y[4]&&(y[5]?v[3]=parseFloat(y[4])*.01:v[3]=parseFloat(y[4]))}else return(y=h.match(m))?y[1]==="transparent"?[0,0,0,0]:i.call(r,y[1])?(v=r[y[1]],v[3]=1,v):null:null;for(_=0;_<3;_++)v[_]=l(v[_],0,255);return v[3]=l(v[3],0,1),v},n.get.hsl=function(h){if(!h)return null;var u=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,p=h.match(u);if(p){var g=parseFloat(p[4]),b=(parseFloat(p[1])%360+360)%360,m=l(parseFloat(p[2]),0,100),v=l(parseFloat(p[3]),0,100),y=l(isNaN(g)?1:g,0,1);return[b,m,v,y]}return null},n.get.hwb=function(h){if(!h)return null;var u=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,p=h.match(u);if(p){var g=parseFloat(p[4]),b=(parseFloat(p[1])%360+360)%360,m=l(parseFloat(p[2]),0,100),v=l(parseFloat(p[3]),0,100),y=l(isNaN(g)?1:g,0,1);return[b,m,v,y]}return null},n.to.hex=function(){var h=s(arguments);return"#"+c(h[0])+c(h[1])+c(h[2])+(h[3]<1?c(Math.round(h[3]*255)):"")},n.to.rgb=function(){var h=s(arguments);return h.length<4||h[3]===1?"rgb("+Math.round(h[0])+", "+Math.round(h[1])+", "+Math.round(h[2])+")":"rgba("+Math.round(h[0])+", "+Math.round(h[1])+", "+Math.round(h[2])+", "+h[3]+")"},n.to.rgb.percent=function(){var h=s(arguments),u=Math.round(h[0]/255*100),p=Math.round(h[1]/255*100),g=Math.round(h[2]/255*100);return h.length<4||h[3]===1?"rgb("+u+"%, "+p+"%, "+g+"%)":"rgba("+u+"%, "+p+"%, "+g+"%, "+h[3]+")"},n.to.hsl=function(){var h=s(arguments);return h.length<4||h[3]===1?"hsl("+h[0]+", "+h[1]+"%, "+h[2]+"%)":"hsla("+h[0]+", "+h[1]+"%, "+h[2]+"%, "+h[3]+")"},n.to.hwb=function(){var h=s(arguments),u="";return h.length>=4&&h[3]!==1&&(u=", "+h[3]),"hwb("+h[0]+", "+h[1]+"%, "+h[2]+"%"+u+")"},n.to.keyword=function(h){return o[h.slice(0,3)]};function l(h,u,p){return Math.min(Math.max(u,h),p)}function c(h){var u=Math.round(h).toString(16).toUpperCase();return u.length<2?"0"+u:u}}}),Sn=zt({"node_modules/color-convert/conversions.js"(e,t){var r=Cn(),s={};for(const a of Object.keys(r))s[r[a]]=a;var i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=i;for(const a of Object.keys(i)){if(!("channels"in i[a]))throw new Error("missing channels property: "+a);if(!("labels"in i[a]))throw new Error("missing channel labels property: "+a);if(i[a].labels.length!==i[a].channels)throw new Error("channel and label counts mismatch: "+a);const{channels:n,labels:l}=i[a];delete i[a].channels,delete i[a].labels,Object.defineProperty(i[a],"channels",{value:n}),Object.defineProperty(i[a],"labels",{value:l})}i.rgb.hsl=function(a){const n=a[0]/255,l=a[1]/255,c=a[2]/255,h=Math.min(n,l,c),u=Math.max(n,l,c),p=u-h;let g,b;u===h?g=0:n===u?g=(l-c)/p:l===u?g=2+(c-n)/p:c===u&&(g=4+(n-l)/p),g=Math.min(g*60,360),g<0&&(g+=360);const m=(h+u)/2;return u===h?b=0:m<=.5?b=p/(u+h):b=p/(2-u-h),[g,b*100,m*100]},i.rgb.hsv=function(a){let n,l,c,h,u;const p=a[0]/255,g=a[1]/255,b=a[2]/255,m=Math.max(p,g,b),v=m-Math.min(p,g,b),y=function(_){return(m-_)/6/v+1/2};return v===0?(h=0,u=0):(u=v/m,n=y(p),l=y(g),c=y(b),p===m?h=c-l:g===m?h=1/3+n-c:b===m&&(h=2/3+l-n),h<0?h+=1:h>1&&(h-=1)),[h*360,u*100,m*100]},i.rgb.hwb=function(a){const n=a[0],l=a[1];let c=a[2];const h=i.rgb.hsl(a)[0],u=1/255*Math.min(n,Math.min(l,c));return c=1-1/255*Math.max(n,Math.max(l,c)),[h,u*100,c*100]},i.rgb.cmyk=function(a){const n=a[0]/255,l=a[1]/255,c=a[2]/255,h=Math.min(1-n,1-l,1-c),u=(1-n-h)/(1-h)||0,p=(1-l-h)/(1-h)||0,g=(1-c-h)/(1-h)||0;return[u*100,p*100,g*100,h*100]};function o(a,n){return(a[0]-n[0])**2+(a[1]-n[1])**2+(a[2]-n[2])**2}i.rgb.keyword=function(a){const n=s[a];if(n)return n;let l=1/0,c;for(const h of Object.keys(r)){const u=r[h],p=o(a,u);p<l&&(l=p,c=h)}return c},i.keyword.rgb=function(a){return r[a]},i.rgb.xyz=function(a){let n=a[0]/255,l=a[1]/255,c=a[2]/255;n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,l=l>.04045?((l+.055)/1.055)**2.4:l/12.92,c=c>.04045?((c+.055)/1.055)**2.4:c/12.92;const h=n*.4124+l*.3576+c*.1805,u=n*.2126+l*.7152+c*.0722,p=n*.0193+l*.1192+c*.9505;return[h*100,u*100,p*100]},i.rgb.lab=function(a){const n=i.rgb.xyz(a);let l=n[0],c=n[1],h=n[2];l/=95.047,c/=100,h/=108.883,l=l>.008856?l**(1/3):7.787*l+16/116,c=c>.008856?c**(1/3):7.787*c+16/116,h=h>.008856?h**(1/3):7.787*h+16/116;const u=116*c-16,p=500*(l-c),g=200*(c-h);return[u,p,g]},i.hsl.rgb=function(a){const n=a[0]/360,l=a[1]/100,c=a[2]/100;let h,u,p;if(l===0)return p=c*255,[p,p,p];c<.5?h=c*(1+l):h=c+l-c*l;const g=2*c-h,b=[0,0,0];for(let m=0;m<3;m++)u=n+1/3*-(m-1),u<0&&u++,u>1&&u--,6*u<1?p=g+(h-g)*6*u:2*u<1?p=h:3*u<2?p=g+(h-g)*(2/3-u)*6:p=g,b[m]=p*255;return b},i.hsl.hsv=function(a){const n=a[0];let l=a[1]/100,c=a[2]/100,h=l;const u=Math.max(c,.01);c*=2,l*=c<=1?c:2-c,h*=u<=1?u:2-u;const p=(c+l)/2,g=c===0?2*h/(u+h):2*l/(c+l);return[n,g*100,p*100]},i.hsv.rgb=function(a){const n=a[0]/60,l=a[1]/100;let c=a[2]/100;const h=Math.floor(n)%6,u=n-Math.floor(n),p=255*c*(1-l),g=255*c*(1-l*u),b=255*c*(1-l*(1-u));switch(c*=255,h){case 0:return[c,b,p];case 1:return[g,c,p];case 2:return[p,c,b];case 3:return[p,g,c];case 4:return[b,p,c];case 5:return[c,p,g]}},i.hsv.hsl=function(a){const n=a[0],l=a[1]/100,c=a[2]/100,h=Math.max(c,.01);let u,p;p=(2-l)*c;const g=(2-l)*h;return u=l*h,u/=g<=1?g:2-g,u=u||0,p/=2,[n,u*100,p*100]},i.hwb.rgb=function(a){const n=a[0]/360;let l=a[1]/100,c=a[2]/100;const h=l+c;let u;h>1&&(l/=h,c/=h);const p=Math.floor(6*n),g=1-c;u=6*n-p,(p&1)!==0&&(u=1-u);const b=l+u*(g-l);let m,v,y;switch(p){default:case 6:case 0:m=g,v=b,y=l;break;case 1:m=b,v=g,y=l;break;case 2:m=l,v=g,y=b;break;case 3:m=l,v=b,y=g;break;case 4:m=b,v=l,y=g;break;case 5:m=g,v=l,y=b;break}return[m*255,v*255,y*255]},i.cmyk.rgb=function(a){const n=a[0]/100,l=a[1]/100,c=a[2]/100,h=a[3]/100,u=1-Math.min(1,n*(1-h)+h),p=1-Math.min(1,l*(1-h)+h),g=1-Math.min(1,c*(1-h)+h);return[u*255,p*255,g*255]},i.xyz.rgb=function(a){const n=a[0]/100,l=a[1]/100,c=a[2]/100;let h,u,p;return h=n*3.2406+l*-1.5372+c*-.4986,u=n*-.9689+l*1.8758+c*.0415,p=n*.0557+l*-.204+c*1.057,h=h>.0031308?1.055*h**(1/2.4)-.055:h*12.92,u=u>.0031308?1.055*u**(1/2.4)-.055:u*12.92,p=p>.0031308?1.055*p**(1/2.4)-.055:p*12.92,h=Math.min(Math.max(0,h),1),u=Math.min(Math.max(0,u),1),p=Math.min(Math.max(0,p),1),[h*255,u*255,p*255]},i.xyz.lab=function(a){let n=a[0],l=a[1],c=a[2];n/=95.047,l/=100,c/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,l=l>.008856?l**(1/3):7.787*l+16/116,c=c>.008856?c**(1/3):7.787*c+16/116;const h=116*l-16,u=500*(n-l),p=200*(l-c);return[h,u,p]},i.lab.xyz=function(a){const n=a[0],l=a[1],c=a[2];let h,u,p;u=(n+16)/116,h=l/500+u,p=u-c/200;const g=u**3,b=h**3,m=p**3;return u=g>.008856?g:(u-16/116)/7.787,h=b>.008856?b:(h-16/116)/7.787,p=m>.008856?m:(p-16/116)/7.787,h*=95.047,u*=100,p*=108.883,[h,u,p]},i.lab.lch=function(a){const n=a[0],l=a[1],c=a[2];let h;h=Math.atan2(c,l)*360/2/Math.PI,h<0&&(h+=360);const p=Math.sqrt(l*l+c*c);return[n,p,h]},i.lch.lab=function(a){const n=a[0],l=a[1],h=a[2]/360*2*Math.PI,u=l*Math.cos(h),p=l*Math.sin(h);return[n,u,p]},i.rgb.ansi16=function(a,n=null){const[l,c,h]=a;let u=n===null?i.rgb.hsv(a)[2]:n;if(u=Math.round(u/50),u===0)return 30;let p=30+(Math.round(h/255)<<2|Math.round(c/255)<<1|Math.round(l/255));return u===2&&(p+=60),p},i.hsv.ansi16=function(a){return i.rgb.ansi16(i.hsv.rgb(a),a[2])},i.rgb.ansi256=function(a){const n=a[0],l=a[1],c=a[2];return n===l&&l===c?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(l/255*5)+Math.round(c/255*5)},i.ansi16.rgb=function(a){let n=a%10;if(n===0||n===7)return a>50&&(n+=3.5),n=n/10.5*255,[n,n,n];const l=(~~(a>50)+1)*.5,c=(n&1)*l*255,h=(n>>1&1)*l*255,u=(n>>2&1)*l*255;return[c,h,u]},i.ansi256.rgb=function(a){if(a>=232){const u=(a-232)*10+8;return[u,u,u]}a-=16;let n;const l=Math.floor(a/36)/5*255,c=Math.floor((n=a%36)/6)/5*255,h=n%6/5*255;return[l,c,h]},i.rgb.hex=function(a){const l=(((Math.round(a[0])&255)<<16)+((Math.round(a[1])&255)<<8)+(Math.round(a[2])&255)).toString(16).toUpperCase();return"000000".substring(l.length)+l},i.hex.rgb=function(a){const n=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];let l=n[0];n[0].length===3&&(l=l.split("").map(g=>g+g).join(""));const c=parseInt(l,16),h=c>>16&255,u=c>>8&255,p=c&255;return[h,u,p]},i.rgb.hcg=function(a){const n=a[0]/255,l=a[1]/255,c=a[2]/255,h=Math.max(Math.max(n,l),c),u=Math.min(Math.min(n,l),c),p=h-u;let g,b;return p<1?g=u/(1-p):g=0,p<=0?b=0:h===n?b=(l-c)/p%6:h===l?b=2+(c-n)/p:b=4+(n-l)/p,b/=6,b%=1,[b*360,p*100,g*100]},i.hsl.hcg=function(a){const n=a[1]/100,l=a[2]/100,c=l<.5?2*n*l:2*n*(1-l);let h=0;return c<1&&(h=(l-.5*c)/(1-c)),[a[0],c*100,h*100]},i.hsv.hcg=function(a){const n=a[1]/100,l=a[2]/100,c=n*l;let h=0;return c<1&&(h=(l-c)/(1-c)),[a[0],c*100,h*100]},i.hcg.rgb=function(a){const n=a[0]/360,l=a[1]/100,c=a[2]/100;if(l===0)return[c*255,c*255,c*255];const h=[0,0,0],u=n%1*6,p=u%1,g=1-p;let b=0;switch(Math.floor(u)){case 0:h[0]=1,h[1]=p,h[2]=0;break;case 1:h[0]=g,h[1]=1,h[2]=0;break;case 2:h[0]=0,h[1]=1,h[2]=p;break;case 3:h[0]=0,h[1]=g,h[2]=1;break;case 4:h[0]=p,h[1]=0,h[2]=1;break;default:h[0]=1,h[1]=0,h[2]=g}return b=(1-l)*c,[(l*h[0]+b)*255,(l*h[1]+b)*255,(l*h[2]+b)*255]},i.hcg.hsv=function(a){const n=a[1]/100,l=a[2]/100,c=n+l*(1-n);let h=0;return c>0&&(h=n/c),[a[0],h*100,c*100]},i.hcg.hsl=function(a){const n=a[1]/100,c=a[2]/100*(1-n)+.5*n;let h=0;return c>0&&c<.5?h=n/(2*c):c>=.5&&c<1&&(h=n/(2*(1-c))),[a[0],h*100,c*100]},i.hcg.hwb=function(a){const n=a[1]/100,l=a[2]/100,c=n+l*(1-n);return[a[0],(c-n)*100,(1-c)*100]},i.hwb.hcg=function(a){const n=a[1]/100,c=1-a[2]/100,h=c-n;let u=0;return h<1&&(u=(c-h)/(1-h)),[a[0],h*100,u*100]},i.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]},i.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]},i.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]},i.gray.hsl=function(a){return[0,0,a[0]]},i.gray.hsv=i.gray.hsl,i.gray.hwb=function(a){return[0,100,a[0]]},i.gray.cmyk=function(a){return[0,0,0,a[0]]},i.gray.lab=function(a){return[a[0],0,0]},i.gray.hex=function(a){const n=Math.round(a[0]/100*255)&255,c=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(c.length)+c},i.rgb.gray=function(a){return[(a[0]+a[1]+a[2])/3/255*100]}}}),Td=zt({"node_modules/color-convert/route.js"(e,t){var r=Sn();function s(){const n={},l=Object.keys(r);for(let c=l.length,h=0;h<c;h++)n[l[h]]={distance:-1,parent:null};return n}function i(n){const l=s(),c=[n];for(l[n].distance=0;c.length;){const h=c.pop(),u=Object.keys(r[h]);for(let p=u.length,g=0;g<p;g++){const b=u[g],m=l[b];m.distance===-1&&(m.distance=l[h].distance+1,m.parent=h,c.unshift(b))}}return l}function o(n,l){return function(c){return l(n(c))}}function a(n,l){const c=[l[n].parent,n];let h=r[l[n].parent][n],u=l[n].parent;for(;l[u].parent;)c.unshift(l[u].parent),h=o(r[l[u].parent][u],h),u=l[u].parent;return h.conversion=c,h}t.exports=function(n){const l=i(n),c={},h=Object.keys(l);for(let u=h.length,p=0;p<u;p++){const g=h[p];l[g].parent!==null&&(c[g]=a(g,l))}return c}}}),Od=zt({"node_modules/color-convert/index.js"(e,t){var r=Sn(),s=Td(),i={},o=Object.keys(r);function a(l){const c=function(...h){const u=h[0];return u==null?u:(u.length>1&&(h=u),l(h))};return"conversion"in l&&(c.conversion=l.conversion),c}function n(l){const c=function(...h){const u=h[0];if(u==null)return u;u.length>1&&(h=u);const p=l(h);if(typeof p=="object")for(let g=p.length,b=0;b<g;b++)p[b]=Math.round(p[b]);return p};return"conversion"in l&&(c.conversion=l.conversion),c}o.forEach(l=>{i[l]={},Object.defineProperty(i[l],"channels",{value:r[l].channels}),Object.defineProperty(i[l],"labels",{value:r[l].labels});const c=s(l);Object.keys(c).forEach(u=>{const p=c[u];i[l][u]=n(p),i[l][u].raw=a(p)})}),t.exports=i}}),Id=zt({"node_modules/color/index.js"(e,t){var r=Ed(),s=Od(),i=[].slice,o=["keyword","gray","hex"],a={};for(const m of Object.keys(s))a[i.call(s[m].labels).sort().join("")]=m;var n={};function l(m,v){if(!(this instanceof l))return new l(m,v);if(v&&v in o&&(v=null),v&&!(v in s))throw new Error("Unknown model: "+v);let y,_;if(m==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(m instanceof l)this.model=m.model,this.color=m.color.slice(),this.valpha=m.valpha;else if(typeof m=="string"){const x=r.get(m);if(x===null)throw new Error("Unable to parse color from string: "+m);this.model=x.model,_=s[this.model].channels,this.color=x.value.slice(0,_),this.valpha=typeof x.value[_]=="number"?x.value[_]:1}else if(m.length>0){this.model=v||"rgb",_=s[this.model].channels;const x=i.call(m,0,_);this.color=b(x,_),this.valpha=typeof m[_]=="number"?m[_]:1}else if(typeof m=="number")this.model="rgb",this.color=[m>>16&255,m>>8&255,m&255],this.valpha=1;else{this.valpha=1;const x=Object.keys(m);"alpha"in m&&(x.splice(x.indexOf("alpha"),1),this.valpha=typeof m.alpha=="number"?m.alpha:0);const w=x.sort().join("");if(!(w in a))throw new Error("Unable to parse color from object: "+JSON.stringify(m));this.model=a[w];const k=s[this.model].labels,O=[];for(y=0;y<k.length;y++)O.push(m[k[y]]);this.color=b(O)}if(n[this.model])for(_=s[this.model].channels,y=0;y<_;y++){const x=n[this.model][y];x&&(this.color[y]=x(this.color[y]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}l.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(m){let v=this.model in r.to?this:this.rgb();v=v.round(typeof m=="number"?m:1);const y=v.valpha===1?v.color:v.color.concat(this.valpha);return r.to[v.model](y)},percentString(m){const v=this.rgb().round(typeof m=="number"?m:1),y=v.valpha===1?v.color:v.color.concat(this.valpha);return r.to.rgb.percent(y)},array(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha)},object(){const m={},v=s[this.model].channels,y=s[this.model].labels;for(let _=0;_<v;_++)m[y[_]]=this.color[_];return this.valpha!==1&&(m.alpha=this.valpha),m},unitArray(){const m=this.rgb().color;return m[0]/=255,m[1]/=255,m[2]/=255,this.valpha!==1&&m.push(this.valpha),m},unitObject(){const m=this.rgb().object();return m.r/=255,m.g/=255,m.b/=255,this.valpha!==1&&(m.alpha=this.valpha),m},round(m){return m=Math.max(m||0,0),new l(this.color.map(h(m)).concat(this.valpha),this.model)},alpha(m){return arguments.length>0?new l(this.color.concat(Math.max(0,Math.min(1,m))),this.model):this.valpha},red:u("rgb",0,p(255)),green:u("rgb",1,p(255)),blue:u("rgb",2,p(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,m=>(m%360+360)%360),saturationl:u("hsl",1,p(100)),lightness:u("hsl",2,p(100)),saturationv:u("hsv",1,p(100)),value:u("hsv",2,p(100)),chroma:u("hcg",1,p(100)),gray:u("hcg",2,p(100)),white:u("hwb",1,p(100)),wblack:u("hwb",2,p(100)),cyan:u("cmyk",0,p(100)),magenta:u("cmyk",1,p(100)),yellow:u("cmyk",2,p(100)),black:u("cmyk",3,p(100)),x:u("xyz",0,p(100)),y:u("xyz",1,p(100)),z:u("xyz",2,p(100)),l:u("lab",0,p(100)),a:u("lab",1),b:u("lab",2),keyword(m){return arguments.length>0?new l(m):s[this.model].keyword(this.color)},hex(m){return arguments.length>0?new l(m):r.to.hex(this.rgb().round().color)},hexa(m){if(arguments.length>0)return new l(m);const v=this.rgb().round().color;let y=Math.round(this.valpha*255).toString(16).toUpperCase();return y.length===1&&(y="0"+y),r.to.hex(v)+y},rgbNumber(){const m=this.rgb().color;return(m[0]&255)<<16|(m[1]&255)<<8|m[2]&255},luminosity(){const m=this.rgb().color,v=[];for(const[y,_]of m.entries()){const x=_/255;v[y]=x<=.03928?x/12.92:((x+.055)/1.055)**2.4}return .2126*v[0]+.7152*v[1]+.0722*v[2]},contrast(m){const v=this.luminosity(),y=m.luminosity();return v>y?(v+.05)/(y+.05):(y+.05)/(v+.05)},level(m){const v=this.contrast(m);return v>=7.1?"AAA":v>=4.5?"AA":""},isDark(){const m=this.rgb().color;return(m[0]*299+m[1]*587+m[2]*114)/1e3<128},isLight(){return!this.isDark()},negate(){const m=this.rgb();for(let v=0;v<3;v++)m.color[v]=255-m.color[v];return m},lighten(m){const v=this.hsl();return v.color[2]+=v.color[2]*m,v},darken(m){const v=this.hsl();return v.color[2]-=v.color[2]*m,v},saturate(m){const v=this.hsl();return v.color[1]+=v.color[1]*m,v},desaturate(m){const v=this.hsl();return v.color[1]-=v.color[1]*m,v},whiten(m){const v=this.hwb();return v.color[1]+=v.color[1]*m,v},blacken(m){const v=this.hwb();return v.color[2]+=v.color[2]*m,v},grayscale(){const m=this.rgb().color,v=m[0]*.3+m[1]*.59+m[2]*.11;return l.rgb(v,v,v)},fade(m){return this.alpha(this.valpha-this.valpha*m)},opaquer(m){return this.alpha(this.valpha+this.valpha*m)},rotate(m){const v=this.hsl();let y=v.color[0];return y=(y+m)%360,y=y<0?360+y:y,v.color[0]=y,v},mix(m,v){if(!m||!m.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof m);const y=m.rgb(),_=this.rgb(),x=v===void 0?.5:v,w=2*x-1,k=y.alpha()-_.alpha(),O=((w*k===-1?w:(w+k)/(1+w*k))+1)/2,q=1-O;return l.rgb(O*y.red()+q*_.red(),O*y.green()+q*_.green(),O*y.blue()+q*_.blue(),y.alpha()*x+_.alpha()*(1-x))}};for(const m of Object.keys(s)){if(o.includes(m))continue;const v=s[m].channels;l.prototype[m]=function(){if(this.model===m)return new l(this);if(arguments.length>0)return new l(arguments,m);const y=typeof arguments[v]=="number"?v:this.valpha;return new l(g(s[this.model][m].raw(this.color)).concat(y),m)},l[m]=function(y){return typeof y=="number"&&(y=b(i.call(arguments),v)),new l(y,m)}}function c(m,v){return Number(m.toFixed(v))}function h(m){return function(v){return c(v,m)}}function u(m,v,y){m=Array.isArray(m)?m:[m];for(const _ of m)(n[_]||(n[_]=[]))[v]=y;return m=m[0],function(_){let x;return arguments.length>0?(y&&(_=y(_)),x=this[m](),x.color[v]=_,x):(x=this[m]().color[v],y&&(x=y(x)),x)}}function p(m){return function(v){return Math.max(0,Math.min(m,v))}}function g(m){return Array.isArray(m)?m:[m]}function b(m,v){for(let y=0;y<v;y++)typeof m[y]!="number"&&(m[y]=0);return m}t.exports=l}}),Ld=Tl(Id(),1),ka="EyeDropper"in window,G=class extends I{constructor(){super(...arguments),this.formSubmitController=new bt(this),this.isSafeValue=!1,this.localize=new te(this),this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.lightness=100,this.brightness=100,this.alpha=100,this.invalid=!1,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}connectedCallback(){super.connectedCallback(),this.value?(this.setColor(this.value),this.inputValue=this.value,this.lastValueEmitted=this.value,this.syncValues()):(this.isEmpty=!0,this.inputValue="",this.lastValueEmitted="")}getFormattedValue(e="hex"){const t=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;default:return""}}getBrightness(e){return ce(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return ce((200-this.saturation)*e/100*5/10,0,100)}checkValidity(){return this.input.checkValidity()}reportValidity(){return!this.inline&&this.input.invalid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.checkValidity()):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=this.input.invalid}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t]}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();r.focus(),e.preventDefault(),Pr(t,{onMove:i=>{this.alpha=ce(i/s*100,0,100),this.syncValues()},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();r.focus(),e.preventDefault(),Pr(t,{onMove:i=>{this.hue=ce(i/s*360,0,360),this.syncValues()},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:s,height:i}=t.getBoundingClientRect();r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Pr(t,{onMove:(o,a)=>{this.saturation=ce(o/s*100,0,100),this.brightness=ce(100-a/i*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=ce(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=ce(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues())}handleHueKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=ce(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=ce(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues())}handleGridKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=ce(this.saturation-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=ce(this.saturation+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=ce(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=ce(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}handleInputChange(e){const t=e.target;this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",e.stopPropagation()}handleInputKeyDown(e){e.key==="Enter"&&(this.input.value?(this.setColor(this.input.value),this.input.value=this.value,setTimeout(()=>this.input.select())):this.hue=0)}normalizeColorString(e){if(/rgba?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}if(/hsla?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`hsla(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}return/^[0-9a-f]+$/i.test(e)?`#${e}`:e}parseColor(e){let t;e=this.normalizeColorString(e);try{t=(0,Ld.default)(e)}catch{return null}const r=t.hsl(),s={h:r.hue(),s:r.saturationl(),l:r.lightness(),a:r.alpha()},i=t.rgb(),o={r:i.red(),g:i.green(),b:i.blue(),a:i.alpha()},a={r:ws(o.r),g:ws(o.g),b:ws(o.b),a:ws(o.a*255)};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(`#${a.r}${a.g}${a.b}`),hexa:this.setLetterCase(`#${a.r}${a.g}${a.b}${a.a}`)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsla.h,this.saturation=t.hsla.s,this.lightness=t.hsla.l,this.brightness=this.getBrightness(t.hsla.l),this.alpha=this.opacity?t.hsla.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!ka)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=100,this.brightness=100,this.lightness=this.getLightness(this.brightness),this.alpha=100),!this.isSafeValue&&e!==void 0){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsla.h,this.saturation=r.hsla.s,this.lightness=r.hsla.l,this.brightness=this.getBrightness(r.hsla.l),this.alpha=r.hsla.a*100):this.inputValue=e}this.value!==this.lastValueEmitted&&(this.emit("sl-change"),this.lastValueEmitted=this.value)}render(){const e=this.saturation,t=100-this.brightness,r=C`
      <div
        part="base"
        class=${N({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?C`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ze({backgroundColor:`hsl(${this.hue}deg, 100%, 50%)`})}
          @mousedown=${this.handleGridDrag}
          @touchstart=${this.handleGridDrag}
        >
          <span
            part="grid-handle"
            class=${N({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ze({top:`${t}%`,left:`${e}%`,backgroundColor:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`})}
            role="application"
            aria-label="HSL"
            tabindex=${E(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @mousedown=${this.handleHueDrag}
              @touchstart=${this.handleHueDrag}
            >
              <span
                part="slider-handle"
                class="color-picker__slider-handle"
                style=${ze({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${E(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?C`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @mousedown="${this.handleAlphaDrag}"
                    @touchstart="${this.handleAlphaDrag}"
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ze({backgroundImage:`linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle"
                      class="color-picker__slider-handle"
                      style=${ze({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${E(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${ze({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${$t(this.isEmpty?"":this.inputValue)}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":C`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${ka?C`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${this.swatches.length>0?C`
              <div part="swatches" class="color-picker__swatches">
                ${this.swatches.map(s=>C`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${E(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${s}
                      @click=${()=>!this.disabled&&this.setColor(s)}
                      @keydown=${i=>!this.disabled&&i.key==="Enter"&&this.setColor(s)}
                    >
                      <div class="color-picker__swatch-color" style=${ze({backgroundColor:s})}></div>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `;return this.inline?r:C`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${N({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-picker__transparent-bg":!0})}
          style=${ze({color:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};G.styles=Sd;d([z('[part~="input"]')],G.prototype,"input",2);d([z('[part~="preview"]')],G.prototype,"previewButton",2);d([z(".color-dropdown")],G.prototype,"dropdown",2);d([R()],G.prototype,"isDraggingGridHandle",2);d([R()],G.prototype,"isEmpty",2);d([R()],G.prototype,"inputValue",2);d([R()],G.prototype,"hue",2);d([R()],G.prototype,"saturation",2);d([R()],G.prototype,"lightness",2);d([R()],G.prototype,"brightness",2);d([R()],G.prototype,"alpha",2);d([R()],G.prototype,"invalid",2);d([f()],G.prototype,"value",2);d([Ht()],G.prototype,"defaultValue",2);d([f()],G.prototype,"label",2);d([f()],G.prototype,"format",2);d([f({type:Boolean,reflect:!0})],G.prototype,"inline",2);d([f()],G.prototype,"size",2);d([f({attribute:"no-format-toggle",type:Boolean})],G.prototype,"noFormatToggle",2);d([f()],G.prototype,"name",2);d([f({type:Boolean,reflect:!0})],G.prototype,"disabled",2);d([f({type:Boolean})],G.prototype,"hoist",2);d([f({type:Boolean})],G.prototype,"opacity",2);d([f({type:Boolean})],G.prototype,"uppercase",2);d([f({attribute:!1})],G.prototype,"swatches",2);d([$("format",{waitUntilFirstUpdate:!0})],G.prototype,"handleFormatChange",1);d([$("opacity",{waitUntilFirstUpdate:!0})],G.prototype,"handleOpacityChange",1);d([$("value")],G.prototype,"handleValueChange",1);G=d([D("sl-color-picker")],G);function ws(e){const t=Math.round(e).toString(16);return t.length===1?`0${t}`:t}var Dd=M`
  ${B}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,io=class extends I{render(){return C` <slot></slot> `}};io.styles=Dd;io=d([D("sl-visually-hidden")],io);var Pd=M`
  ${B}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,He=class extends I{constructor(){super(...arguments),this.localize=new te(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}async show(){if(!(this.open||this.disabled))return this.open=!0,De(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,De(this,"sl-after-hide")}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1;return}await fe(this.body),this.body.hidden=!1;const{keyframes:t,options:r}=ue(this,"details.show",{dir:this.localize.dir()});await de(this.body,Ts(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.open=!0;return}await fe(this.body);const{keyframes:t,options:r}=ue(this,"details.hide",{dir:this.localize.dir()});await de(this.body,Ts(t,this.body.scrollHeight),r),this.body.hidden=!0,this.body.style.height="auto",this.emit("sl-after-hide")}}render(){const e=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        class=${N({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <header
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </header>

        <div class="details__body">
          <slot part="content" id="content" class="details__content" role="region" aria-labelledby="header"></slot>
        </div>
      </div>
    `}};He.styles=Pd;d([z(".details")],He.prototype,"details",2);d([z(".details__header")],He.prototype,"header",2);d([z(".details__body")],He.prototype,"body",2);d([z(".details__expand-icon-slot")],He.prototype,"expandIconSlot",2);d([f({type:Boolean,reflect:!0})],He.prototype,"open",2);d([f()],He.prototype,"summary",2);d([f({type:Boolean,reflect:!0})],He.prototype,"disabled",2);d([$("open",{waitUntilFirstUpdate:!0})],He.prototype,"handleOpenChange",1);He=d([D("sl-details")],He);se("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});se("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var Rd=M`
  ${B}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,tt=class extends I{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"footer"),this.localize=new te(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new $n(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ms(this))}disconnectedCallback(){super.disconnectedCallback(),Bs(this)}async show(){if(!this.open)return this.open=!0,De(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,De(this,"sl-after-hide")}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=ue(this,"dialog.denyClose",{dir:this.localize.dir()});de(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ms(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([fe(this.dialog),fe(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ue(this,"dialog.show",{dir:this.localize.dir()}),r=ue(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([de(this.panel,t.keyframes,t.options),de(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([fe(this.dialog),fe(this.overlay)]);const e=ue(this,"dialog.hide",{dir:this.localize.dir()}),t=ue(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([de(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),de(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Bs(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}render(){return C`
      <div
        part="base"
        class=${N({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${E(this.noHeader?this.label:void 0)}
          aria-labelledby=${E(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":C`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};tt.styles=Rd;d([z(".dialog")],tt.prototype,"dialog",2);d([z(".dialog__panel")],tt.prototype,"panel",2);d([z(".dialog__overlay")],tt.prototype,"overlay",2);d([f({type:Boolean,reflect:!0})],tt.prototype,"open",2);d([f({reflect:!0})],tt.prototype,"label",2);d([f({attribute:"no-header",type:Boolean,reflect:!0})],tt.prototype,"noHeader",2);d([$("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);tt=d([D("sl-dialog")],tt);se("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});se("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});se("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});se("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});se("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Md=M`
  ${B}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Hr=class extends I{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Hr.styles=Md;d([f({type:Boolean,reflect:!0})],Hr.prototype,"vertical",2);d([$("vertical")],Hr.prototype,"handleVerticalChange",1);Hr=d([D("sl-divider")],Hr);var Bd=M`
  ${B}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,ur=class extends I{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Ar(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Ar(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Ar(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Ar(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),s=Ar(t);s!==null&&(s.classList.add("sl-button-group__button"),s.classList.toggle("sl-button-group__button--first",r===0),s.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),s.classList.toggle("sl-button-group__button--last",r===e.length-1),s.classList.toggle("sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return C`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};ur.styles=Bd;d([z("slot")],ur.prototype,"defaultSlot",2);d([R()],ur.prototype,"disableRole",2);d([f()],ur.prototype,"label",2);ur=d([D("sl-button-group")],ur);function Ar(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var Vd=M`
  ${B}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,oo=class extends I{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"footer","header","image")}render(){return C`
      <div
        part="base"
        class=${N({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};oo.styles=Vd;oo=d([D("sl-card")],oo);var Ud=M`
  ${B}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='pause-icon'],
  :host(:not([play])) slot[name='play-icon'] {
    display: none;
  }
`,Ze=class extends I{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return C`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?C`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Ze.styles=Ud;d([R()],Ze.prototype,"frozenFrame",2);d([R()],Ze.prototype,"isLoaded",2);d([z(".animated-image__animated")],Ze.prototype,"animatedImage",2);d([f()],Ze.prototype,"src",2);d([f()],Ze.prototype,"alt",2);d([f({type:Boolean,reflect:!0})],Ze.prototype,"play",2);d([$("play",{waitUntilFirstUpdate:!0})],Ze.prototype,"handlePlayChange",1);d([$("src")],Ze.prototype,"handleSrcChange",1);Ze=d([D("sl-animated-image")],Ze);var Nd=M`
  ${B}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,rt=class extends I{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){return C`
      <div
        part="base"
        class=${N({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.initials?C` <div part="initials" class="avatar__initials">${this.initials}</div> `:C`
              <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
                <sl-icon name="person-fill" library="system"></sl-icon>
              </slot>
            `}
        ${this.image&&!this.hasError?C`
              <img
                part="image"
                class="avatar__image"
                src="${this.image}"
                loading="${this.loading}"
                alt=""
                @error="${()=>this.hasError=!0}"
              />
            `:""}
      </div>
    `}};rt.styles=Nd;d([R()],rt.prototype,"hasError",2);d([f()],rt.prototype,"image",2);d([f()],rt.prototype,"label",2);d([f()],rt.prototype,"initials",2);d([f()],rt.prototype,"loading",2);d([f({reflect:!0})],rt.prototype,"shape",2);d([$("image")],rt.prototype,"handleImageChange",1);rt=d([D("sl-avatar")],rt);var Fd=M`
  ${B}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,hr=class extends I{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return C`
      <slot
        part="base"
        class=${N({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};hr.styles=Fd;d([f({reflect:!0})],hr.prototype,"variant",2);d([f({type:Boolean,reflect:!0})],hr.prototype,"pill",2);d([f({type:Boolean,reflect:!0})],hr.prototype,"pulse",2);hr=d([D("sl-badge")],hr);var jd=M`
  ${B}

  :host {
    display: contents;
  }
`,ao={};zl(ao,{backInDown:()=>su,backInLeft:()=>iu,backInRight:()=>ou,backInUp:()=>au,backOutDown:()=>nu,backOutLeft:()=>lu,backOutRight:()=>cu,backOutUp:()=>du,bounce:()=>Hd,bounceIn:()=>uu,bounceInDown:()=>hu,bounceInLeft:()=>pu,bounceInRight:()=>fu,bounceInUp:()=>mu,bounceOut:()=>gu,bounceOutDown:()=>bu,bounceOutLeft:()=>vu,bounceOutRight:()=>yu,bounceOutUp:()=>_u,easings:()=>Dh,fadeIn:()=>wu,fadeInBottomLeft:()=>xu,fadeInBottomRight:()=>ku,fadeInDown:()=>$u,fadeInDownBig:()=>Cu,fadeInLeft:()=>Su,fadeInLeftBig:()=>Au,fadeInRight:()=>zu,fadeInRightBig:()=>Eu,fadeInTopLeft:()=>Tu,fadeInTopRight:()=>Ou,fadeInUp:()=>Iu,fadeInUpBig:()=>Lu,fadeOut:()=>Du,fadeOutBottomLeft:()=>Pu,fadeOutBottomRight:()=>Ru,fadeOutDown:()=>Mu,fadeOutDownBig:()=>Bu,fadeOutLeft:()=>Vu,fadeOutLeftBig:()=>Uu,fadeOutRight:()=>Nu,fadeOutRightBig:()=>Fu,fadeOutTopLeft:()=>ju,fadeOutTopRight:()=>Hu,fadeOutUp:()=>Zu,fadeOutUpBig:()=>qu,flash:()=>Zd,flip:()=>Ku,flipInX:()=>Wu,flipInY:()=>Yu,flipOutX:()=>Xu,flipOutY:()=>Gu,headShake:()=>qd,heartBeat:()=>Kd,hinge:()=>_h,jackInTheBox:()=>wh,jello:()=>Wd,lightSpeedInLeft:()=>Ju,lightSpeedInRight:()=>Qu,lightSpeedOutLeft:()=>eh,lightSpeedOutRight:()=>th,pulse:()=>Yd,rollIn:()=>xh,rollOut:()=>kh,rotateIn:()=>rh,rotateInDownLeft:()=>sh,rotateInDownRight:()=>ih,rotateInUpLeft:()=>oh,rotateInUpRight:()=>ah,rotateOut:()=>nh,rotateOutDownLeft:()=>lh,rotateOutDownRight:()=>ch,rotateOutUpLeft:()=>dh,rotateOutUpRight:()=>uh,rubberBand:()=>Xd,shake:()=>Gd,shakeX:()=>Jd,shakeY:()=>Qd,slideInDown:()=>hh,slideInLeft:()=>ph,slideInRight:()=>fh,slideInUp:()=>mh,slideOutDown:()=>gh,slideOutLeft:()=>bh,slideOutRight:()=>vh,slideOutUp:()=>yh,swing:()=>eu,tada:()=>tu,wobble:()=>ru,zoomIn:()=>$h,zoomInDown:()=>Ch,zoomInLeft:()=>Sh,zoomInRight:()=>Ah,zoomInUp:()=>zh,zoomOut:()=>Eh,zoomOutDown:()=>Th,zoomOutLeft:()=>Oh,zoomOutRight:()=>Ih,zoomOutUp:()=>Lh});var Hd=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Zd=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],qd=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Kd=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Wd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Yd=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Xd=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Gd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Jd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Qd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],eu=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],tu=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],ru=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],su=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],iu=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],ou=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],au=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],nu=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],lu=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],cu=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],du=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],uu=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],hu=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],pu=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],fu=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],mu=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],gu=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],bu=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],vu=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],yu=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],_u=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],wu=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],xu=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ku=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$u=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cu=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Su=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Au=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],zu=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Eu=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Tu=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ou=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Iu=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Lu=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Du=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Pu=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Ru=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Mu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Bu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Vu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Uu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Nu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Fu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],ju=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Hu=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Zu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],qu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Ku=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Wu=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Yu=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Xu=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Gu=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Ju=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Qu=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],eh=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],th=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],rh=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],sh=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],ih=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],oh=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],ah=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],nh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],lh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],ch=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],dh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],uh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],hh=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ph=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],fh=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],mh=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],gh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],bh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],vh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],yh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],_h=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],wh=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],xh=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],kh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],$h=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Ch=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Sh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ah=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Eh=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Th=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Oh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Ih=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Lh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Dh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},pe=class extends I{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation(),this.handleAnimationCancel=this.handleAnimationCancel.bind(this),this.handleAnimationFinish=this.handleAnimationFinish.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleAnimationChange(){!this.hasUpdated||this.createAnimation()}handleAnimationFinish(){this.play=!1,this.hasStarted=!1,this.emit("sl-finish")}handleAnimationCancel(){this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=ao.easings[this.easing])!=null?e:this.easing,s=(t=this.keyframes)!=null?t:ao[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!s?!1:(this.destroyAnimation(),this.animation=o.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};pe.styles=jd;d([ec("slot")],pe.prototype,"defaultSlot",2);d([f()],pe.prototype,"name",2);d([f({type:Boolean,reflect:!0})],pe.prototype,"play",2);d([f({type:Number})],pe.prototype,"delay",2);d([f()],pe.prototype,"direction",2);d([f({type:Number})],pe.prototype,"duration",2);d([f()],pe.prototype,"easing",2);d([f({attribute:"end-delay",type:Number})],pe.prototype,"endDelay",2);d([f()],pe.prototype,"fill",2);d([f({type:Number})],pe.prototype,"iterations",2);d([f({attribute:"iteration-start",type:Number})],pe.prototype,"iterationStart",2);d([f({attribute:!1})],pe.prototype,"keyframes",2);d([f({attribute:"playback-rate",type:Number})],pe.prototype,"playbackRate",2);d([$("name"),$("delay"),$("direction"),$("duration"),$("easing"),$("endDelay"),$("fill"),$("iterations"),$("iterationsStart"),$("keyframes")],pe.prototype,"handleAnimationChange",1);d([$("play")],pe.prototype,"handlePlayChange",1);d([$("playbackRate")],pe.prototype,"handlePlaybackRateChange",1);pe=d([D("sl-animation")],pe);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ss=window,Ao=Ss.ShadowRoot&&(Ss.ShadyCSS===void 0||Ss.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zo=Symbol(),$a=new WeakMap;class An{constructor(t,r,s){if(this._$cssResult$=!0,s!==zo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ao&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=$a.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&$a.set(r,t))}return t}toString(){return this.cssText}}const Ph=e=>new An(typeof e=="string"?e:e+"",void 0,zo),_r=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,i,o)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new An(r,e,zo)},Rh=(e,t)=>{Ao?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const s=document.createElement("style"),i=Ss.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)})},Ca=Ao?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return Ph(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ei;const js=window,Sa=js.trustedTypes,Mh=Sa?Sa.emptyScript:"",Aa=js.reactiveElementPolyfillSupport,no={toAttribute(e,t){switch(t){case Boolean:e=e?Mh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},zn=(e,t)=>t!==e&&(t==t||e==e),Ti={attribute:!0,type:String,converter:no,reflect:!1,hasChanged:zn};class Yt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,s)=>{const i=this._$Ep(s,r);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,r=Ti){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,s){return{get(){return this[r]},set(i){const o=this[t];this[r]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ti}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,s=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of s)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)r.unshift(Ca(i))}else t!==void 0&&r.push(Ca(t));return r}static _$Ep(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,s;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Rh(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostConnected)===null||s===void 0?void 0:s.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostDisconnected)===null||s===void 0?void 0:s.call(r)})}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$EO(t,r,s=Ti){var i;const o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){const a=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:no).toAttribute(r,s.type);this._$El=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(t,r){var s;const i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){const a=i.getPropertyOptions(o),n=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?a.converter:no;this._$El=o,this[o]=n.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||zn)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let r=!1;const s=this._$AL;try{r=this.shouldUpdate(s),r?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(s)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,s)=>this._$EO(s,this[s],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Yt.finalized=!0,Yt.elementProperties=new Map,Yt.elementStyles=[],Yt.shadowRootOptions={mode:"open"},Aa==null||Aa({ReactiveElement:Yt}),((Ei=js.reactiveElementVersions)!==null&&Ei!==void 0?Ei:js.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oi;const Hs=window,pr=Hs.trustedTypes,za=pr?pr.createPolicy("lit-html",{createHTML:e=>e}):void 0,nt=`lit$${(Math.random()+"").slice(9)}$`,Eo="?"+nt,Bh=`<${Eo}>`,fr=document,Zr=(e="")=>fr.createComment(e),qr=e=>e===null||typeof e!="object"&&typeof e!="function",En=Array.isArray,Tn=e=>En(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",zr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ea=/-->/g,Ta=/>/g,Tt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oa=/'/g,Ia=/"/g,On=/^(?:script|style|textarea|title)$/i,Vh=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ee=Vh(1),qe=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),La=new WeakMap,er=fr.createTreeWalker(fr,129,null,!1),In=(e,t)=>{const r=e.length-1,s=[];let i,o=t===2?"<svg>":"",a=zr;for(let l=0;l<r;l++){const c=e[l];let h,u,p=-1,g=0;for(;g<c.length&&(a.lastIndex=g,u=a.exec(c),u!==null);)g=a.lastIndex,a===zr?u[1]==="!--"?a=Ea:u[1]!==void 0?a=Ta:u[2]!==void 0?(On.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=Tt):u[3]!==void 0&&(a=Tt):a===Tt?u[0]===">"?(a=i!=null?i:zr,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?Tt:u[3]==='"'?Ia:Oa):a===Ia||a===Oa?a=Tt:a===Ea||a===Ta?a=zr:(a=Tt,i=void 0);const b=a===Tt&&e[l+1].startsWith("/>")?" ":"";o+=a===zr?c+Bh:p>=0?(s.push(h),c.slice(0,p)+"$lit$"+c.slice(p)+nt+b):c+nt+(p===-2?(s.push(void 0),l):b)}const n=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[za!==void 0?za.createHTML(n):n,s]};class Kr{constructor({strings:t,_$litType$:r},s){let i;this.parts=[];let o=0,a=0;const n=t.length-1,l=this.parts,[c,h]=In(t,r);if(this.el=Kr.createElement(c,s),er.currentNode=this.el.content,r===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(i=er.nextNode())!==null&&l.length<n;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const p of i.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(nt)){const g=h[a++];if(u.push(p),g!==void 0){const b=i.getAttribute(g.toLowerCase()+"$lit$").split(nt),m=/([.?@])?(.*)/.exec(g);l.push({type:1,index:o,name:m[2],strings:b,ctor:m[1]==="."?Dn:m[1]==="?"?Pn:m[1]==="@"?Rn:gs})}else l.push({type:6,index:o})}for(const p of u)i.removeAttribute(p)}if(On.test(i.tagName)){const u=i.textContent.split(nt),p=u.length-1;if(p>0){i.textContent=pr?pr.emptyScript:"";for(let g=0;g<p;g++)i.append(u[g],Zr()),er.nextNode(),l.push({type:2,index:++o});i.append(u[p],Zr())}}}else if(i.nodeType===8)if(i.data===Eo)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(nt,u+1))!==-1;)l.push({type:7,index:o}),u+=nt.length-1}o++}}static createElement(t,r){const s=fr.createElement("template");return s.innerHTML=t,s}}function Bt(e,t,r=e,s){var i,o,a,n;if(t===qe)return t;let l=s!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[s]:r._$Cl;const c=qr(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,s)),s!==void 0?((a=(n=r)._$Co)!==null&&a!==void 0?a:n._$Co=[])[s]=l:r._$Cl=l),l!==void 0&&(t=Bt(e,l._$AS(e,t.values),l,s)),t}class Ln{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:s},parts:i}=this._$AD,o=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:fr).importNode(s,!0);er.currentNode=o;let a=er.nextNode(),n=0,l=0,c=i[0];for(;c!==void 0;){if(n===c.index){let h;c.type===2?h=new wr(a,a.nextSibling,this,t):c.type===1?h=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(h=new Mn(a,this,t)),this.u.push(h),c=i[++l]}n!==(c==null?void 0:c.index)&&(a=er.nextNode(),n++)}return o}p(t){let r=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class wr{constructor(t,r,s,i){var o;this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Bt(this,t,r),qr(t)?t===oe||t==null||t===""?(this._$AH!==oe&&this._$AR(),this._$AH=oe):t!==this._$AH&&t!==qe&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tn(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==oe&&qr(this._$AH)?this._$AA.nextSibling.data=t:this.T(fr.createTextNode(t)),this._$AH=t}$(t){var r;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Kr.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.p(s);else{const a=new Ln(o,this),n=a.v(this.options);a.p(s),this.T(n),this._$AH=a}}_$AC(t){let r=La.get(t.strings);return r===void 0&&La.set(t.strings,r=new Kr(t)),r}k(t){En(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const o of t)i===r.length?r.push(s=new wr(this.O(Zr()),this.O(Zr()),this,this.options)):s=r[i],s._$AI(o),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class gs{constructor(t,r,s,i,o){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=oe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,s,i){const o=this.strings;let a=!1;if(o===void 0)t=Bt(this,t,r,0),a=!qr(t)||t!==this._$AH&&t!==qe,a&&(this._$AH=t);else{const n=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Bt(this,n[s+l],r,l),c===qe&&(c=this._$AH[l]),a||(a=!qr(c)||c!==this._$AH[l]),c===oe?t=oe:t!==oe&&(t+=(c!=null?c:"")+o[l+1]),this._$AH[l]=c}a&&!i&&this.j(t)}j(t){t===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Dn extends gs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===oe?void 0:t}}const Uh=pr?pr.emptyScript:"";class Pn extends gs{constructor(){super(...arguments),this.type=4}j(t){t&&t!==oe?this.element.setAttribute(this.name,Uh):this.element.removeAttribute(this.name)}}class Rn extends gs{constructor(t,r,s,i,o){super(t,r,s,i,o),this.type=5}_$AI(t,r=this){var s;if((t=(s=Bt(this,t,r,0))!==null&&s!==void 0?s:oe)===qe)return;const i=this._$AH,o=t===oe&&i!==oe||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==oe&&(i===oe||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Mn{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Bt(this,t)}}const Nh={P:"$lit$",A:nt,M:Eo,C:1,L:In,R:Ln,D:Tn,V:Bt,I:wr,H:gs,N:Pn,U:Rn,B:Dn,F:Mn},Da=Hs.litHtmlPolyfillSupport;Da==null||Da(Kr,wr),((Oi=Hs.litHtmlVersions)!==null&&Oi!==void 0?Oi:Hs.litHtmlVersions=[]).push("2.5.0");const Bn=(e,t,r)=>{var s,i;const o=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:t;let a=o._$litPart$;if(a===void 0){const n=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=a=new wr(t.insertBefore(Zr(),n),n,void 0,r!=null?r:{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ii,Li;class ke extends Yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const s=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=s.firstChild),s}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return qe}}ke.finalized=!0,ke._$litElement$=!0,(Ii=globalThis.litElementHydrateSupport)===null||Ii===void 0||Ii.call(globalThis,{LitElement:ke});const Pa=globalThis.litElementPolyfillSupport;Pa==null||Pa({LitElement:ke});((Li=globalThis.litElementVersions)!==null&&Li!==void 0?Li:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=e=>t=>typeof t=="function"?((r,s)=>(customElements.define(r,s),s))(e,t):((r,s)=>{const{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(a){customElements.define(r,a)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fh=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function ci(e){return(t,r)=>r!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(e,t,r):Fh(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function di(e){return ci({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=({finisher:e,descriptor:t})=>(r,s)=>{var i;if(s===void 0){const o=(i=r.originalKey)!==null&&i!==void 0?i:r.key,a=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:{...r,key:o};return e!=null&&(a.finisher=function(n){e(n,o)}),a}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,s,t(s)),e==null||e(o,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Un(e,t){return Vn({descriptor:r=>{const s={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;s.get=function(){var o,a;return this[i]===void 0&&(this[i]=(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&a!==void 0?a:null),this[i]}}return s}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jh(e){return Vn({descriptor:t=>({get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelectorAll(e))!==null&&s!==void 0?s:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Di;((Di=window.HTMLSlotElement)===null||Di===void 0?void 0:Di.prototype.assignedElements)!=null;var Hh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,To=(e,t,r,s)=>{for(var i=s>1?void 0:s?Zh(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&Hh(t,r,i),i},Ui;let Vt=(Ui=class extends ke{static update(){this.elementRegistry.forEach(e=>e.requestUpdate())}constructor(){super(),this.moeum="",this.batchim="",Vt.elementRegistry.add(this)}disconnectedCallback(){super.disconnectedCallback(),Vt.elementRegistry.delete(this)}createRenderRoot(){return this}render(){var i,o,a,n;const e=this.previousSibling,r=(((n=((a=(o=(i=e==null?void 0:e.shadowRoot)==null?void 0:i.textContent)!=null?o:e==null?void 0:e.textContent)!=null?a:"").slice(-1).codePointAt(0))!=null?n:0)-44032)%28;let s=this.moeum;return r>0&&(this.batchim==="\uC73C\uB85C"?r!==8&&(s=this.batchim):s=this.batchim),s}},Ae(Ui,"elementRegistry",new Set),Ui);To([ci()],Vt.prototype,"moeum",2);To([ci()],Vt.prototype,"batchim",2);Vt=To([ot("ko-josa")],Vt);var qh=Object.defineProperty,Kh=Object.getOwnPropertyDescriptor,Nn=(e,t,r,s)=>{for(var i=s>1?void 0:s?Kh(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&qh(t,r,i),i},$s;let Ye=($s=class extends ke{constructor(){var t;super();Ae(this,"capitalize",!1);this.character="",Ye.elementRegistry.add(this),(t=this.parentElement)!=null&&t.classList.contains("capitalize")&&(this.style.textTransform="none",this.capitalize=!0)}static reset(t){if(Ye.characterRegistry.clear(),t!=null&&t.characters)for(const[r,s]of Object.entries(t.characters))Ye.register(r,s)}static register(t,r){Ye.characterRegistry.set(t,r),[...this.elementRegistry].filter(({character:s})=>s===t).forEach(s=>s.requestUpdate())}renderValue(t){return this.capitalize?`${t.charAt(0).toUpperCase()}${t.slice(1)}`:t}disconnectedCallback(){super.disconnectedCallback(),Ye.elementRegistry.delete(this)}createRenderRoot(){return this}render(){var r,s,i;const t=Ye.characterRegistry.get(this.character);if(typeof t=="string")return this.renderValue(t);if(t){const o=(s=(r=this.closest("td[lang]"))==null?void 0:r.lang)!=null?s:"";return this.renderValue((i=t[o])!=null?i:t["*"])}}},Ae($s,"characterRegistry",new Map),Ae($s,"elementRegistry",new Set),$s);Nn([ci()],Ye.prototype,"character",2);Ye=Nn([ot("player-name")],Ye);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rr(e,t,r){return e?t():r==null?void 0:r()}function yt(e,t="value"in e?e.value:void 0){return(r,s)=>{const i=r.connectedCallback,o=r.disconnectedCallback,a=r._initialize;let n;return r._initialize=function(){a.call(this),this[s]=t},r.connectedCallback=function(){i.call(this),n=e.subscribe({next:l=>{this[s]=l}})},r.disconnectedCallback=function(){o.call(this),n.unsubscribe()},di()(r,s)}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var lo=function(e,t){return lo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,s){r.__proto__=s}||function(r,s){for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(r[i]=s[i])},lo(e,t)};function xr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");lo(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}function Wh(e,t,r,s){function i(o){return o instanceof r?o:new r(function(a){a(o)})}return new(r||(r=Promise))(function(o,a){function n(h){try{c(s.next(h))}catch(u){a(u)}}function l(h){try{c(s.throw(h))}catch(u){a(u)}}function c(h){h.done?o(h.value):i(h.value).then(n,l)}c((s=s.apply(e,t||[])).next())})}function Fn(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},s,i,o,a;return a={next:n(0),throw:n(1),return:n(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function n(c){return function(h){return l([c,h])}}function l(c){if(s)throw new TypeError("Generator is already executing.");for(;r;)try{if(s=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){r.label=c[1];break}if(c[0]===6&&r.label<o[1]){r.label=o[1],o=c;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(c);break}o[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(h){c=[6,h],i=0}finally{s=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function mr(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],s=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Wr(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var s=r.call(e),i,o=[],a;try{for(;(t===void 0||t-- >0)&&!(i=s.next()).done;)o.push(i.value)}catch(n){a={error:n}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(a)throw a.error}}return o}function Yr(e,t,r){if(r||arguments.length===2)for(var s=0,i=t.length,o;s<i;s++)(o||!(s in t))&&(o||(o=Array.prototype.slice.call(t,0,s)),o[s]=t[s]);return e.concat(o||Array.prototype.slice.call(t))}function tr(e){return this instanceof tr?(this.v=e,this):new tr(e)}function Yh(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=r.apply(e,t||[]),i,o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(p){s[p]&&(i[p]=function(g){return new Promise(function(b,m){o.push([p,g,b,m])>1||n(p,g)})})}function n(p,g){try{l(s[p](g))}catch(b){u(o[0][3],b)}}function l(p){p.value instanceof tr?Promise.resolve(p.value.v).then(c,h):u(o[0][2],p)}function c(p){n("next",p)}function h(p){n("throw",p)}function u(p,g){p(g),o.shift(),o.length&&n(o[0][0],o[0][1])}}function Xh(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof mr=="function"?mr(e):e[Symbol.iterator](),r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r);function s(o){r[o]=e[o]&&function(a){return new Promise(function(n,l){a=e[o](a),i(n,l,a.done,a.value)})}}function i(o,a,n,l){Promise.resolve(l).then(function(c){o({value:c,done:n})},a)}}function he(e){return typeof e=="function"}function jn(e){var t=function(s){Error.call(s),s.stack=new Error().stack},r=e(t);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var Pi=jn(function(e){return function(r){e(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(s,i){return i+1+") "+s.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function co(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var ui=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,r,s,i,o;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var n=mr(a),l=n.next();!l.done;l=n.next()){var c=l.value;c.remove(this)}}catch(m){t={error:m}}finally{try{l&&!l.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}else a.remove(this);var h=this.initialTeardown;if(he(h))try{h()}catch(m){o=m instanceof Pi?m.errors:[m]}var u=this._finalizers;if(u){this._finalizers=null;try{for(var p=mr(u),g=p.next();!g.done;g=p.next()){var b=g.value;try{Ra(b)}catch(m){o=o!=null?o:[],m instanceof Pi?o=Yr(Yr([],Wr(o)),Wr(m.errors)):o.push(m)}}}catch(m){s={error:m}}finally{try{g&&!g.done&&(i=p.return)&&i.call(p)}finally{if(s)throw s.error}}}if(o)throw new Pi(o)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)Ra(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(t)}},e.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},e.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},e.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&co(r,t)},e.prototype.remove=function(t){var r=this._finalizers;r&&co(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),Hn=ui.EMPTY;function Zn(e){return e instanceof ui||e&&"closed"in e&&he(e.remove)&&he(e.add)&&he(e.unsubscribe)}function Ra(e){he(e)?e():e.unsubscribe()}var Oo={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},uo={setTimeout:function(e,t){for(var r=[],s=2;s<arguments.length;s++)r[s-2]=arguments[s];var i=uo.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,Yr([e,t],Wr(r))):setTimeout.apply(void 0,Yr([e,t],Wr(r)))},clearTimeout:function(e){var t=uo.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function qn(e){uo.setTimeout(function(){throw e})}function Ma(){}var xs=null;function As(e){if(Oo.useDeprecatedSynchronousErrorHandling){var t=!xs;if(t&&(xs={errorThrown:!1,error:null}),e(),t){var r=xs,s=r.errorThrown,i=r.error;if(xs=null,s)throw i}}else e()}var Io=function(e){xr(t,e);function t(r){var s=e.call(this)||this;return s.isStopped=!1,r?(s.destination=r,Zn(r)&&r.add(s)):s.destination=ep,s}return t.create=function(r,s,i){return new ho(r,s,i)},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(ui),Gh=Function.prototype.bind;function Ri(e,t){return Gh.call(e,t)}var Jh=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(s){ks(s)}},e.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(s){ks(s)}else ks(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(r){ks(r)}},e}(),ho=function(e){xr(t,e);function t(r,s,i){var o=e.call(this)||this,a;if(he(r)||!r)a={next:r!=null?r:void 0,error:s!=null?s:void 0,complete:i!=null?i:void 0};else{var n;o&&Oo.useDeprecatedNextContext?(n=Object.create(r),n.unsubscribe=function(){return o.unsubscribe()},a={next:r.next&&Ri(r.next,n),error:r.error&&Ri(r.error,n),complete:r.complete&&Ri(r.complete,n)}):a=r}return o.destination=new Jh(a),o}return t}(Io);function ks(e){qn(e)}function Qh(e){throw e}var ep={closed:!0,next:Ma,error:Qh,complete:Ma},Lo=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Do(e){return e}function tp(e){return e.length===0?Do:e.length===1?e[0]:function(r){return e.reduce(function(s,i){return i(s)},r)}}var Ve=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(t,r,s){var i=this,o=sp(t)?t:new ho(t,r,s);return As(function(){var a=i,n=a.operator,l=a.source;o.add(n?n.call(o,l):l?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},e.prototype.forEach=function(t,r){var s=this;return r=Ba(r),new r(function(i,o){var a=new ho({next:function(n){try{t(n)}catch(l){o(l),a.unsubscribe()}},error:o,complete:i});s.subscribe(a)})},e.prototype._subscribe=function(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)},e.prototype[Lo]=function(){return this},e.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return tp(t)(this)},e.prototype.toPromise=function(t){var r=this;return t=Ba(t),new t(function(s,i){var o;r.subscribe(function(a){return o=a},function(a){return i(a)},function(){return s(o)})})},e.create=function(t){return new e(t)},e}();function Ba(e){var t;return(t=e!=null?e:Oo.Promise)!==null&&t!==void 0?t:Promise}function rp(e){return e&&he(e.next)&&he(e.error)&&he(e.complete)}function sp(e){return e&&e instanceof Io||rp(e)&&Zn(e)}function ip(e){return he(e==null?void 0:e.lift)}function Po(e){return function(t){if(ip(t))return t.lift(function(r){try{return e(r,this)}catch(s){this.error(s)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ro(e,t,r,s,i){return new op(e,t,r,s,i)}var op=function(e){xr(t,e);function t(r,s,i,o,a,n){var l=e.call(this,r)||this;return l.onFinalize=a,l.shouldUnsubscribe=n,l._next=s?function(c){try{s(c)}catch(h){r.error(h)}}:e.prototype._next,l._error=o?function(c){try{o(c)}catch(h){r.error(h)}finally{this.unsubscribe()}}:e.prototype._error,l._complete=i?function(){try{i()}catch(c){r.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,l}return t.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var s=this.closed;e.prototype.unsubscribe.call(this),!s&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},t}(Io),ap=jn(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Kn=function(e){xr(t,e);function t(){var r=e.call(this)||this;return r.closed=!1,r.currentObservers=null,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return t.prototype.lift=function(r){var s=new Va(this,this);return s.operator=r,s},t.prototype._throwIfClosed=function(){if(this.closed)throw new ap},t.prototype.next=function(r){var s=this;As(function(){var i,o;if(s._throwIfClosed(),!s.isStopped){s.currentObservers||(s.currentObservers=Array.from(s.observers));try{for(var a=mr(s.currentObservers),n=a.next();!n.done;n=a.next()){var l=n.value;l.next(r)}}catch(c){i={error:c}}finally{try{n&&!n.done&&(o=a.return)&&o.call(a)}finally{if(i)throw i.error}}}})},t.prototype.error=function(r){var s=this;As(function(){if(s._throwIfClosed(),!s.isStopped){s.hasError=s.isStopped=!0,s.thrownError=r;for(var i=s.observers;i.length;)i.shift().error(r)}})},t.prototype.complete=function(){var r=this;As(function(){if(r._throwIfClosed(),!r.isStopped){r.isStopped=!0;for(var s=r.observers;s.length;)s.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var r;return((r=this.observers)===null||r===void 0?void 0:r.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(r){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,r)},t.prototype._subscribe=function(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)},t.prototype._innerSubscribe=function(r){var s=this,i=this,o=i.hasError,a=i.isStopped,n=i.observers;return o||a?Hn:(this.currentObservers=null,n.push(r),new ui(function(){s.currentObservers=null,co(n,r)}))},t.prototype._checkFinalizedStatuses=function(r){var s=this,i=s.hasError,o=s.thrownError,a=s.isStopped;i?r.error(o):a&&r.complete()},t.prototype.asObservable=function(){var r=new Ve;return r.source=this,r},t.create=function(r,s){return new Va(r,s)},t}(Ve),Va=function(e){xr(t,e);function t(r,s){var i=e.call(this)||this;return i.destination=r,i.source=s,i}return t.prototype.next=function(r){var s,i;(i=(s=this.destination)===null||s===void 0?void 0:s.next)===null||i===void 0||i.call(s,r)},t.prototype.error=function(r){var s,i;(i=(s=this.destination)===null||s===void 0?void 0:s.error)===null||i===void 0||i.call(s,r)},t.prototype.complete=function(){var r,s;(s=(r=this.destination)===null||r===void 0?void 0:r.complete)===null||s===void 0||s.call(r)},t.prototype._subscribe=function(r){var s,i;return(i=(s=this.source)===null||s===void 0?void 0:s.subscribe(r))!==null&&i!==void 0?i:Hn},t}(Kn),Mo=function(e){xr(t,e);function t(r){var s=e.call(this)||this;return s._value=r,s}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(r){var s=e.prototype._subscribe.call(this,r);return!s.closed&&r.next(this._value),s},t.prototype.getValue=function(){var r=this,s=r.hasError,i=r.thrownError,o=r._value;if(s)throw i;return this._throwIfClosed(),o},t.prototype.next=function(r){e.prototype.next.call(this,this._value=r)},t}(Kn);function np(e){return e&&he(e.schedule)}function Wn(e){return e[e.length-1]}function lp(e){return he(Wn(e))?e.pop():void 0}function cp(e){return np(Wn(e))?e.pop():void 0}var Yn=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function Xn(e){return he(e==null?void 0:e.then)}function Gn(e){return he(e[Lo])}function Jn(e){return Symbol.asyncIterator&&he(e==null?void 0:e[Symbol.asyncIterator])}function Qn(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function dp(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var el=dp();function tl(e){return he(e==null?void 0:e[el])}function rl(e){return Yh(this,arguments,function(){var r,s,i,o;return Fn(this,function(a){switch(a.label){case 0:r=e.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,tr(r.read())];case 3:return s=a.sent(),i=s.value,o=s.done,o?[4,tr(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,tr(i)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}})})}function sl(e){return he(e==null?void 0:e.getReader)}function Bo(e){if(e instanceof Ve)return e;if(e!=null){if(Gn(e))return up(e);if(Yn(e))return hp(e);if(Xn(e))return pp(e);if(Jn(e))return il(e);if(tl(e))return fp(e);if(sl(e))return mp(e)}throw Qn(e)}function up(e){return new Ve(function(t){var r=e[Lo]();if(he(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function hp(e){return new Ve(function(t){for(var r=0;r<e.length&&!t.closed;r++)t.next(e[r]);t.complete()})}function pp(e){return new Ve(function(t){e.then(function(r){t.closed||(t.next(r),t.complete())},function(r){return t.error(r)}).then(null,qn)})}function fp(e){return new Ve(function(t){var r,s;try{for(var i=mr(e),o=i.next();!o.done;o=i.next()){var a=o.value;if(t.next(a),t.closed)return}}catch(n){r={error:n}}finally{try{o&&!o.done&&(s=i.return)&&s.call(i)}finally{if(r)throw r.error}}t.complete()})}function il(e){return new Ve(function(t){gp(e,t).catch(function(r){return t.error(r)})})}function mp(e){return il(rl(e))}function gp(e,t){var r,s,i,o;return Wh(this,void 0,void 0,function(){var a,n;return Fn(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),r=Xh(e),l.label=1;case 1:return[4,r.next()];case 2:if(s=l.sent(),!!s.done)return[3,4];if(a=s.value,t.next(a),t.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return n=l.sent(),i={error:n},[3,11];case 6:return l.trys.push([6,,9,10]),s&&!s.done&&(o=r.return)?[4,o.call(r)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function kt(e,t,r,s,i){s===void 0&&(s=0),i===void 0&&(i=!1);var o=t.schedule(function(){r(),i?e.add(this.schedule(null,s)):this.unsubscribe()},s);if(e.add(o),!i)return o}function ol(e,t){return t===void 0&&(t=0),Po(function(r,s){r.subscribe(Ro(s,function(i){return kt(s,e,function(){return s.next(i)},t)},function(){return kt(s,e,function(){return s.complete()},t)},function(i){return kt(s,e,function(){return s.error(i)},t)}))})}function al(e,t){return t===void 0&&(t=0),Po(function(r,s){s.add(e.schedule(function(){return r.subscribe(s)},t))})}function bp(e,t){return Bo(e).pipe(al(t),ol(t))}function vp(e,t){return Bo(e).pipe(al(t),ol(t))}function yp(e,t){return new Ve(function(r){var s=0;return t.schedule(function(){s===e.length?r.complete():(r.next(e[s++]),r.closed||this.schedule())})})}function _p(e,t){return new Ve(function(r){var s;return kt(r,t,function(){s=e[el](),kt(r,t,function(){var i,o,a;try{i=s.next(),o=i.value,a=i.done}catch(n){r.error(n);return}a?r.complete():r.next(o)},0,!0)}),function(){return he(s==null?void 0:s.return)&&s.return()}})}function nl(e,t){if(!e)throw new Error("Iterable cannot be null");return new Ve(function(r){kt(r,t,function(){var s=e[Symbol.asyncIterator]();kt(r,t,function(){s.next().then(function(i){i.done?r.complete():r.next(i.value)})},0,!0)})})}function wp(e,t){return nl(rl(e),t)}function xp(e,t){if(e!=null){if(Gn(e))return bp(e,t);if(Yn(e))return yp(e,t);if(Xn(e))return vp(e,t);if(Jn(e))return nl(e,t);if(tl(e))return _p(e,t);if(sl(e))return wp(e,t)}throw Qn(e)}function ll(e,t){return t?xp(e,t):Bo(e)}function hi(e,t){return Po(function(r,s){var i=0;r.subscribe(Ro(s,function(o){s.next(e.call(t,o,i++))}))})}var kp=Array.isArray;function $p(e,t){return kp(t)?e.apply(void 0,Yr([],Wr(t))):e(t)}function Cp(e){return hi(function(t){return $p(e,t)})}var Sp=Array.isArray,Ap=Object.getPrototypeOf,zp=Object.prototype,Ep=Object.keys;function Tp(e){if(e.length===1){var t=e[0];if(Sp(t))return{args:t,keys:null};if(Op(t)){var r=Ep(t);return{args:r.map(function(s){return t[s]}),keys:r}}}return{args:e,keys:null}}function Op(e){return e&&typeof e=="object"&&Ap(e)===zp}function Ip(e,t){return e.reduce(function(r,s,i){return r[s]=t[i],r},{})}function Vo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=cp(e),s=lp(e),i=Tp(e),o=i.args,a=i.keys;if(o.length===0)return ll([],r);var n=new Ve(Lp(o,r,a?function(l){return Ip(a,l)}:Do));return s?n.pipe(Cp(s)):n}function Lp(e,t,r){return r===void 0&&(r=Do),function(s){Ua(t,function(){for(var i=e.length,o=new Array(i),a=i,n=i,l=function(h){Ua(t,function(){var u=ll(e[h],t),p=!1;u.subscribe(Ro(s,function(g){o[h]=g,p||(p=!0,n--),n||s.next(r(o.slice()))},function(){--a||s.complete()}))},s)},c=0;c<i;c++)l(c)},s)}}function Ua(e,t,r){e?kt(r,e,t):t()}const Ut=new Mo(null);var W;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function r(i){throw new Error}e.assertNever=r,e.arrayToEnum=i=>{const o={};for(const a of i)o[a]=a;return o},e.getValidEnumValues=i=>{const o=e.objectKeys(i).filter(n=>typeof i[i[n]]!="number"),a={};for(const n of o)a[n]=i[n];return e.objectValues(a)},e.objectValues=i=>e.objectKeys(i).map(function(o){return i[o]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const o=[];for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&o.push(a);return o},e.find=(i,o)=>{for(const a of i)if(o(a))return a},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function s(i,o=" | "){return i.map(a=>typeof a=="string"?`'${a}'`:a).join(o)}e.joinValues=s,e.jsonStringifyReplacer=(i,o)=>typeof o=="bigint"?o.toString():o})(W||(W={}));const A=W.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),wt=e=>{switch(typeof e){case"undefined":return A.undefined;case"string":return A.string;case"number":return isNaN(e)?A.nan:A.number;case"boolean":return A.boolean;case"function":return A.function;case"bigint":return A.bigint;case"symbol":return A.symbol;case"object":return Array.isArray(e)?A.array:e===null?A.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?A.promise:typeof Map<"u"&&e instanceof Map?A.map:typeof Set<"u"&&e instanceof Set?A.set:typeof Date<"u"&&e instanceof Date?A.date:A.object;default:return A.unknown}},S=W.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Dp=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class ht extends Error{constructor(t){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const r=t||function(o){return o.message},s={_errors:[]},i=o=>{for(const a of o.issues)if(a.code==="invalid_union")a.unionErrors.map(i);else if(a.code==="invalid_return_type")i(a.returnTypeError);else if(a.code==="invalid_arguments")i(a.argumentsError);else if(a.path.length===0)s._errors.push(r(a));else{let n=s,l=0;for(;l<a.path.length;){const c=a.path[l];l===a.path.length-1?(n[c]=n[c]||{_errors:[]},n[c]._errors.push(r(a))):n[c]=n[c]||{_errors:[]},n=n[c],l++}}};return i(this),s}toString(){return this.message}get message(){return JSON.stringify(this.issues,W.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=r=>r.message){const r={},s=[];for(const i of this.issues)i.path.length>0?(r[i.path[0]]=r[i.path[0]]||[],r[i.path[0]].push(t(i))):s.push(t(i));return{formErrors:s,fieldErrors:r}}get formErrors(){return this.flatten()}}ht.create=e=>new ht(e);const Xr=(e,t)=>{let r;switch(e.code){case S.invalid_type:e.received===A.undefined?r="Required":r=`Expected ${e.expected}, received ${e.received}`;break;case S.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,W.jsonStringifyReplacer)}`;break;case S.unrecognized_keys:r=`Unrecognized key(s) in object: ${W.joinValues(e.keys,", ")}`;break;case S.invalid_union:r="Invalid input";break;case S.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${W.joinValues(e.options)}`;break;case S.invalid_enum_value:r=`Invalid enum value. Expected ${W.joinValues(e.options)}, received '${e.received}'`;break;case S.invalid_arguments:r="Invalid function arguments";break;case S.invalid_return_type:r="Invalid function return type";break;case S.invalid_date:r="Invalid date";break;case S.invalid_string:typeof e.validation=="object"?"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:W.assertNever(e.validation):e.validation!=="regex"?r=`Invalid ${e.validation}`:r="Invalid";break;case S.too_small:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(e.minimum)}`:r="Invalid input";break;case S.too_big:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(e.maximum)}`:r="Invalid input";break;case S.custom:r="Invalid input";break;case S.invalid_intersection_types:r="Intersection results could not be merged";break;case S.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case S.not_finite:r="Number must be finite";break;default:r=t.defaultError,W.assertNever(e)}return{message:r}};let cl=Xr;function Pp(e){cl=e}function Zs(){return cl}const qs=e=>{const{data:t,path:r,errorMaps:s,issueData:i}=e,o=[...r,...i.path||[]],a={...i,path:o};let n="";const l=s.filter(c=>!!c).slice().reverse();for(const c of l)n=c(a,{data:t,defaultError:n}).message;return{...i,path:o,message:i.message||n}},Rp=[];function T(e,t){const r=qs({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Zs(),Xr].filter(s=>!!s)});e.common.issues.push(r)}class xe{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,r){const s=[];for(const i of r){if(i.status==="aborted")return U;i.status==="dirty"&&t.dirty(),s.push(i.value)}return{status:t.value,value:s}}static async mergeObjectAsync(t,r){const s=[];for(const i of r)s.push({key:await i.key,value:await i.value});return xe.mergeObjectSync(t,s)}static mergeObjectSync(t,r){const s={};for(const i of r){const{key:o,value:a}=i;if(o.status==="aborted"||a.status==="aborted")return U;o.status==="dirty"&&t.dirty(),a.status==="dirty"&&t.dirty(),(typeof a.value<"u"||i.alwaysSet)&&(s[o.value]=a.value)}return{status:t.value,value:s}}}const U=Object.freeze({status:"aborted"}),dl=e=>({status:"dirty",value:e}),ve=e=>({status:"valid",value:e}),po=e=>e.status==="aborted",fo=e=>e.status==="dirty",Ks=e=>e.status==="valid",Ws=e=>typeof Promise!==void 0&&e instanceof Promise;var Z;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(Z||(Z={}));class st{constructor(t,r,s,i){this.parent=t,this.data=r,this._path=s,this._key=i}get path(){return this._path.concat(this._key)}}const Na=(e,t)=>{if(Ks(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,error:new ht(e.common.issues)}};function H(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:s,description:i}=e;if(t&&(r||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(a,n)=>a.code!=="invalid_type"?{message:n.defaultError}:typeof n.data>"u"?{message:s!=null?s:n.defaultError}:{message:r!=null?r:n.defaultError},description:i}}class j{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return wt(t.data)}_getOrReturnCtx(t,r){return r||{common:t.parent.common,data:t.data,parsedType:wt(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new xe,ctx:{common:t.parent.common,data:t.data,parsedType:wt(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const r=this._parse(t);if(Ws(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(t){const r=this._parse(t);return Promise.resolve(r)}parse(t,r){const s=this.safeParse(t,r);if(s.success)return s.data;throw s.error}safeParse(t,r){var s;const i={common:{issues:[],async:(s=r==null?void 0:r.async)!==null&&s!==void 0?s:!1,contextualErrorMap:r==null?void 0:r.errorMap},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:wt(t)},o=this._parseSync({data:t,path:i.path,parent:i});return Na(i,o)}async parseAsync(t,r){const s=await this.safeParseAsync(t,r);if(s.success)return s.data;throw s.error}async safeParseAsync(t,r){const s={common:{issues:[],contextualErrorMap:r==null?void 0:r.errorMap,async:!0},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:wt(t)},i=this._parse({data:t,path:s.path,parent:s}),o=await(Ws(i)?i:Promise.resolve(i));return Na(s,o)}refine(t,r){const s=i=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(i):r;return this._refinement((i,o)=>{const a=t(i),n=()=>o.addIssue({code:S.custom,...s(i)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(n(),!1)):a?!0:(n(),!1)})}refinement(t,r){return this._refinement((s,i)=>t(s)?!0:(i.addIssue(typeof r=="function"?r(s,i):r),!1))}_refinement(t){return new Ke({schema:this,typeName:V.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return Xe.create(this)}nullable(){return jt.create(this)}nullish(){return this.optional().nullable()}array(){return Ne.create(this)}promise(){return br.create(this)}or(t){return ts.create([this,t])}and(t){return rs.create(this,t)}transform(t){return new Ke({schema:this,typeName:V.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const r=typeof t=="function"?t:()=>t;return new ns({innerType:this,defaultValue:r,typeName:V.ZodDefault})}brand(){return new hl({typeName:V.ZodBranded,type:this,...H(void 0)})}catch(t){const r=typeof t=="function"?t:()=>t;return new Qs({innerType:this,defaultValue:r,typeName:V.ZodCatch})}describe(t){const r=this.constructor;return new r({...this._def,description:t})}pipe(t){return vs.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Mp=/^c[^\s-]{8,}$/i,Bp=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Vp=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,Up=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}:\\d{2})|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}:\\d{2})|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}:\\d{2})|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class mt extends j{constructor(){super(...arguments),this._regex=(t,r,s)=>this.refinement(i=>t.test(i),{validation:r,code:S.invalid_string,...Z.errToObj(s)}),this.nonempty=t=>this.min(1,Z.errToObj(t)),this.trim=()=>new mt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==A.string){const o=this._getOrReturnCtx(t);return T(o,{code:S.invalid_type,expected:A.string,received:o.parsedType}),U}const s=new xe;let i;for(const o of this._def.checks)if(o.kind==="min")t.data.length<o.value&&(i=this._getOrReturnCtx(t,i),T(i,{code:S.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),s.dirty());else if(o.kind==="max")t.data.length>o.value&&(i=this._getOrReturnCtx(t,i),T(i,{code:S.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),s.dirty());else if(o.kind==="length"){const a=t.data.length>o.value,n=t.data.length<o.value;(a||n)&&(i=this._getOrReturnCtx(t,i),a?T(i,{code:S.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):n&&T(i,{code:S.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),s.dirty())}else if(o.kind==="email")Vp.test(t.data)||(i=this._getOrReturnCtx(t,i),T(i,{validation:"email",code:S.invalid_string,message:o.message}),s.dirty());else if(o.kind==="uuid")Bp.test(t.data)||(i=this._getOrReturnCtx(t,i),T(i,{validation:"uuid",code:S.invalid_string,message:o.message}),s.dirty());else if(o.kind==="cuid")Mp.test(t.data)||(i=this._getOrReturnCtx(t,i),T(i,{validation:"cuid",code:S.invalid_string,message:o.message}),s.dirty());else if(o.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),T(i,{validation:"url",code:S.invalid_string,message:o.message}),s.dirty()}else o.kind==="regex"?(o.regex.lastIndex=0,o.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),T(i,{validation:"regex",code:S.invalid_string,message:o.message}),s.dirty())):o.kind==="trim"?t.data=t.data.trim():o.kind==="startsWith"?t.data.startsWith(o.value)||(i=this._getOrReturnCtx(t,i),T(i,{code:S.invalid_string,validation:{startsWith:o.value},message:o.message}),s.dirty()):o.kind==="endsWith"?t.data.endsWith(o.value)||(i=this._getOrReturnCtx(t,i),T(i,{code:S.invalid_string,validation:{endsWith:o.value},message:o.message}),s.dirty()):o.kind==="datetime"?Up(o).test(t.data)||(i=this._getOrReturnCtx(t,i),T(i,{code:S.invalid_string,validation:"datetime",message:o.message}),s.dirty()):W.assertNever(o);return{status:s.value,value:t.data}}_addCheck(t){return new mt({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...Z.errToObj(t)})}url(t){return this._addCheck({kind:"url",...Z.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...Z.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...Z.errToObj(t)})}datetime(t){var r;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(r=t==null?void 0:t.offset)!==null&&r!==void 0?r:!1,...Z.errToObj(t==null?void 0:t.message)})}regex(t,r){return this._addCheck({kind:"regex",regex:t,...Z.errToObj(r)})}startsWith(t,r){return this._addCheck({kind:"startsWith",value:t,...Z.errToObj(r)})}endsWith(t,r){return this._addCheck({kind:"endsWith",value:t,...Z.errToObj(r)})}min(t,r){return this._addCheck({kind:"min",value:t,...Z.errToObj(r)})}max(t,r){return this._addCheck({kind:"max",value:t,...Z.errToObj(r)})}length(t,r){return this._addCheck({kind:"length",value:t,...Z.errToObj(r)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get minLength(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxLength(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}}mt.create=e=>{var t;return new mt({checks:[],typeName:V.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...H(e)})};function Np(e,t){const r=(e.toString().split(".")[1]||"").length,s=(t.toString().split(".")[1]||"").length,i=r>s?r:s,o=parseInt(e.toFixed(i).replace(".","")),a=parseInt(t.toFixed(i).replace(".",""));return o%a/Math.pow(10,i)}class At extends j{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==A.number){const o=this._getOrReturnCtx(t);return T(o,{code:S.invalid_type,expected:A.number,received:o.parsedType}),U}let s;const i=new xe;for(const o of this._def.checks)o.kind==="int"?W.isInteger(t.data)||(s=this._getOrReturnCtx(t,s),T(s,{code:S.invalid_type,expected:"integer",received:"float",message:o.message}),i.dirty()):o.kind==="min"?(o.inclusive?t.data<o.value:t.data<=o.value)&&(s=this._getOrReturnCtx(t,s),T(s,{code:S.too_small,minimum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?t.data>o.value:t.data>=o.value)&&(s=this._getOrReturnCtx(t,s),T(s,{code:S.too_big,maximum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="multipleOf"?Np(t.data,o.value)!==0&&(s=this._getOrReturnCtx(t,s),T(s,{code:S.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):o.kind==="finite"?Number.isFinite(t.data)||(s=this._getOrReturnCtx(t,s),T(s,{code:S.not_finite,message:o.message}),i.dirty()):W.assertNever(o);return{status:i.value,value:t.data}}gte(t,r){return this.setLimit("min",t,!0,Z.toString(r))}gt(t,r){return this.setLimit("min",t,!1,Z.toString(r))}lte(t,r){return this.setLimit("max",t,!0,Z.toString(r))}lt(t,r){return this.setLimit("max",t,!1,Z.toString(r))}setLimit(t,r,s,i){return new At({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:s,message:Z.toString(i)}]})}_addCheck(t){return new At({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:Z.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Z.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Z.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Z.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Z.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:Z.toString(r)})}finite(t){return this._addCheck({kind:"finite",message:Z.toString(t)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int")}}At.create=e=>new At({checks:[],typeName:V.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...H(e)});class Gr extends j{_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==A.bigint){const s=this._getOrReturnCtx(t);return T(s,{code:S.invalid_type,expected:A.bigint,received:s.parsedType}),U}return ve(t.data)}}Gr.create=e=>{var t;return new Gr({typeName:V.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...H(e)})};class Jr extends j{_parse(t){if(this._def.coerce&&(t.data=Boolean(t.data)),this._getType(t)!==A.boolean){const s=this._getOrReturnCtx(t);return T(s,{code:S.invalid_type,expected:A.boolean,received:s.parsedType}),U}return ve(t.data)}}Jr.create=e=>new Jr({typeName:V.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...H(e)});class Nt extends j{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==A.date){const o=this._getOrReturnCtx(t);return T(o,{code:S.invalid_type,expected:A.date,received:o.parsedType}),U}if(isNaN(t.data.getTime())){const o=this._getOrReturnCtx(t);return T(o,{code:S.invalid_date}),U}const s=new xe;let i;for(const o of this._def.checks)o.kind==="min"?t.data.getTime()<o.value&&(i=this._getOrReturnCtx(t,i),T(i,{code:S.too_small,message:o.message,inclusive:!0,exact:!1,minimum:o.value,type:"date"}),s.dirty()):o.kind==="max"?t.data.getTime()>o.value&&(i=this._getOrReturnCtx(t,i),T(i,{code:S.too_big,message:o.message,inclusive:!0,exact:!1,maximum:o.value,type:"date"}),s.dirty()):W.assertNever(o);return{status:s.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Nt({...this._def,checks:[...this._def.checks,t]})}min(t,r){return this._addCheck({kind:"min",value:t.getTime(),message:Z.toString(r)})}max(t,r){return this._addCheck({kind:"max",value:t.getTime(),message:Z.toString(r)})}get minDate(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t!=null?new Date(t):null}}Nt.create=e=>new Nt({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:V.ZodDate,...H(e)});class Ys extends j{_parse(t){if(this._getType(t)!==A.symbol){const s=this._getOrReturnCtx(t);return T(s,{code:S.invalid_type,expected:A.symbol,received:s.parsedType}),U}return ve(t.data)}}Ys.create=e=>new Ys({typeName:V.ZodSymbol,...H(e)});class Qr extends j{_parse(t){if(this._getType(t)!==A.undefined){const s=this._getOrReturnCtx(t);return T(s,{code:S.invalid_type,expected:A.undefined,received:s.parsedType}),U}return ve(t.data)}}Qr.create=e=>new Qr({typeName:V.ZodUndefined,...H(e)});class es extends j{_parse(t){if(this._getType(t)!==A.null){const s=this._getOrReturnCtx(t);return T(s,{code:S.invalid_type,expected:A.null,received:s.parsedType}),U}return ve(t.data)}}es.create=e=>new es({typeName:V.ZodNull,...H(e)});class gr extends j{constructor(){super(...arguments),this._any=!0}_parse(t){return ve(t.data)}}gr.create=e=>new gr({typeName:V.ZodAny,...H(e)});class Lt extends j{constructor(){super(...arguments),this._unknown=!0}_parse(t){return ve(t.data)}}Lt.create=e=>new Lt({typeName:V.ZodUnknown,...H(e)});class gt extends j{_parse(t){const r=this._getOrReturnCtx(t);return T(r,{code:S.invalid_type,expected:A.never,received:r.parsedType}),U}}gt.create=e=>new gt({typeName:V.ZodNever,...H(e)});class Xs extends j{_parse(t){if(this._getType(t)!==A.undefined){const s=this._getOrReturnCtx(t);return T(s,{code:S.invalid_type,expected:A.void,received:s.parsedType}),U}return ve(t.data)}}Xs.create=e=>new Xs({typeName:V.ZodVoid,...H(e)});class Ne extends j{_parse(t){const{ctx:r,status:s}=this._processInputParams(t),i=this._def;if(r.parsedType!==A.array)return T(r,{code:S.invalid_type,expected:A.array,received:r.parsedType}),U;if(i.exactLength!==null){const a=r.data.length>i.exactLength.value,n=r.data.length<i.exactLength.value;(a||n)&&(T(r,{code:a?S.too_big:S.too_small,minimum:n?i.exactLength.value:void 0,maximum:a?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),s.dirty())}if(i.minLength!==null&&r.data.length<i.minLength.value&&(T(r,{code:S.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),s.dirty()),i.maxLength!==null&&r.data.length>i.maxLength.value&&(T(r,{code:S.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),s.dirty()),r.common.async)return Promise.all(r.data.map((a,n)=>i.type._parseAsync(new st(r,a,r.path,n)))).then(a=>xe.mergeArray(s,a));const o=r.data.map((a,n)=>i.type._parseSync(new st(r,a,r.path,n)));return xe.mergeArray(s,o)}get element(){return this._def.type}min(t,r){return new Ne({...this._def,minLength:{value:t,message:Z.toString(r)}})}max(t,r){return new Ne({...this._def,maxLength:{value:t,message:Z.toString(r)}})}length(t,r){return new Ne({...this._def,exactLength:{value:t,message:Z.toString(r)}})}nonempty(t){return this.min(1,t)}}Ne.create=(e,t)=>new Ne({type:e,minLength:null,maxLength:null,exactLength:null,typeName:V.ZodArray,...H(t)});var Gs;(function(e){e.mergeShapes=(t,r)=>({...t,...r})})(Gs||(Gs={}));const Fa=e=>t=>new ie({...e,shape:()=>({...e.shape(),...t})});function Xt(e){if(e instanceof ie){const t={};for(const r in e.shape){const s=e.shape[r];t[r]=Xe.create(Xt(s))}return new ie({...e._def,shape:()=>t})}else return e instanceof Ne?Ne.create(Xt(e.element)):e instanceof Xe?Xe.create(Xt(e.unwrap())):e instanceof jt?jt.create(Xt(e.unwrap())):e instanceof it?it.create(e.items.map(t=>Xt(t))):e}class ie extends j{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=Fa(this._def),this.extend=Fa(this._def)}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),r=W.objectKeys(t);return this._cached={shape:t,keys:r}}_parse(t){if(this._getType(t)!==A.object){const c=this._getOrReturnCtx(t);return T(c,{code:S.invalid_type,expected:A.object,received:c.parsedType}),U}const{status:s,ctx:i}=this._processInputParams(t),{shape:o,keys:a}=this._getCached(),n=[];if(!(this._def.catchall instanceof gt&&this._def.unknownKeys==="strip"))for(const c in i.data)a.includes(c)||n.push(c);const l=[];for(const c of a){const h=o[c],u=i.data[c];l.push({key:{status:"valid",value:c},value:h._parse(new st(i,u,i.path,c)),alwaysSet:c in i.data})}if(this._def.catchall instanceof gt){const c=this._def.unknownKeys;if(c==="passthrough")for(const h of n)l.push({key:{status:"valid",value:h},value:{status:"valid",value:i.data[h]}});else if(c==="strict")n.length>0&&(T(i,{code:S.unrecognized_keys,keys:n}),s.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const h of n){const u=i.data[h];l.push({key:{status:"valid",value:h},value:c._parse(new st(i,u,i.path,h)),alwaysSet:h in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const c=[];for(const h of l){const u=await h.key;c.push({key:u,value:await h.value,alwaysSet:h.alwaysSet})}return c}).then(c=>xe.mergeObjectSync(s,c)):xe.mergeObjectSync(s,l)}get shape(){return this._def.shape()}strict(t){return Z.errToObj,new ie({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(r,s)=>{var i,o,a,n;const l=(a=(o=(i=this._def).errorMap)===null||o===void 0?void 0:o.call(i,r,s).message)!==null&&a!==void 0?a:s.defaultError;return r.code==="unrecognized_keys"?{message:(n=Z.errToObj(t).message)!==null&&n!==void 0?n:l}:{message:l}}}:{}})}strip(){return new ie({...this._def,unknownKeys:"strip"})}passthrough(){return new ie({...this._def,unknownKeys:"passthrough"})}setKey(t,r){return this.augment({[t]:r})}merge(t){return new ie({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>Gs.mergeShapes(this._def.shape(),t._def.shape()),typeName:V.ZodObject})}catchall(t){return new ie({...this._def,catchall:t})}pick(t){const r={};return W.objectKeys(t).map(s=>{this.shape[s]&&(r[s]=this.shape[s])}),new ie({...this._def,shape:()=>r})}omit(t){const r={};return W.objectKeys(this.shape).map(s=>{W.objectKeys(t).indexOf(s)===-1&&(r[s]=this.shape[s])}),new ie({...this._def,shape:()=>r})}deepPartial(){return Xt(this)}partial(t){const r={};if(t)return W.objectKeys(this.shape).map(s=>{W.objectKeys(t).indexOf(s)===-1?r[s]=this.shape[s]:r[s]=this.shape[s].optional()}),new ie({...this._def,shape:()=>r});for(const s in this.shape){const i=this.shape[s];r[s]=i.optional()}return new ie({...this._def,shape:()=>r})}required(t){const r={};if(t)W.objectKeys(this.shape).map(s=>{if(W.objectKeys(t).indexOf(s)===-1)r[s]=this.shape[s];else{let o=this.shape[s];for(;o instanceof Xe;)o=o._def.innerType;r[s]=o}});else for(const s in this.shape){let o=this.shape[s];for(;o instanceof Xe;)o=o._def.innerType;r[s]=o}return new ie({...this._def,shape:()=>r})}keyof(){return ul(W.objectKeys(this.shape))}}ie.create=(e,t)=>new ie({shape:()=>e,unknownKeys:"strip",catchall:gt.create(),typeName:V.ZodObject,...H(t)});ie.strictCreate=(e,t)=>new ie({shape:()=>e,unknownKeys:"strict",catchall:gt.create(),typeName:V.ZodObject,...H(t)});ie.lazycreate=(e,t)=>new ie({shape:e,unknownKeys:"strip",catchall:gt.create(),typeName:V.ZodObject,...H(t)});class ts extends j{_parse(t){const{ctx:r}=this._processInputParams(t),s=this._def.options;function i(o){for(const n of o)if(n.result.status==="valid")return n.result;for(const n of o)if(n.result.status==="dirty")return r.common.issues.push(...n.ctx.common.issues),n.result;const a=o.map(n=>new ht(n.ctx.common.issues));return T(r,{code:S.invalid_union,unionErrors:a}),U}if(r.common.async)return Promise.all(s.map(async o=>{const a={...r,common:{...r.common,issues:[]},parent:null};return{result:await o._parseAsync({data:r.data,path:r.path,parent:a}),ctx:a}})).then(i);{let o;const a=[];for(const l of s){const c={...r,common:{...r.common,issues:[]},parent:null},h=l._parseSync({data:r.data,path:r.path,parent:c});if(h.status==="valid")return h;h.status==="dirty"&&!o&&(o={result:h,ctx:c}),c.common.issues.length&&a.push(c.common.issues)}if(o)return r.common.issues.push(...o.ctx.common.issues),o.result;const n=a.map(l=>new ht(l));return T(r,{code:S.invalid_union,unionErrors:n}),U}}get options(){return this._def.options}}ts.create=(e,t)=>new ts({options:e,typeName:V.ZodUnion,...H(t)});const zs=e=>e instanceof is?zs(e.schema):e instanceof Ke?zs(e.innerType()):e instanceof os?[e.value]:e instanceof bs?e.options:e instanceof as?Object.keys(e.enum):e instanceof ns?zs(e._def.innerType):e instanceof Qr?[void 0]:e instanceof es?[null]:null;class pi extends j{_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==A.object)return T(r,{code:S.invalid_type,expected:A.object,received:r.parsedType}),U;const s=this.discriminator,i=r.data[s],o=this.optionsMap.get(i);return o?r.common.async?o._parseAsync({data:r.data,path:r.path,parent:r}):o._parseSync({data:r.data,path:r.path,parent:r}):(T(r,{code:S.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),U)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,r,s){const i=new Map;for(const o of r){const a=zs(o.shape[t]);if(!a)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const n of a){if(i.has(n))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(n)}`);i.set(n,o)}}return new pi({typeName:V.ZodDiscriminatedUnion,discriminator:t,options:r,optionsMap:i,...H(s)})}}function mo(e,t){const r=wt(e),s=wt(t);if(e===t)return{valid:!0,data:e};if(r===A.object&&s===A.object){const i=W.objectKeys(t),o=W.objectKeys(e).filter(n=>i.indexOf(n)!==-1),a={...e,...t};for(const n of o){const l=mo(e[n],t[n]);if(!l.valid)return{valid:!1};a[n]=l.data}return{valid:!0,data:a}}else if(r===A.array&&s===A.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let o=0;o<e.length;o++){const a=e[o],n=t[o],l=mo(a,n);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return r===A.date&&s===A.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class rs extends j{_parse(t){const{status:r,ctx:s}=this._processInputParams(t),i=(o,a)=>{if(po(o)||po(a))return U;const n=mo(o.value,a.value);return n.valid?((fo(o)||fo(a))&&r.dirty(),{status:r.value,value:n.data}):(T(s,{code:S.invalid_intersection_types}),U)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([o,a])=>i(o,a)):i(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}rs.create=(e,t,r)=>new rs({left:e,right:t,typeName:V.ZodIntersection,...H(r)});class it extends j{_parse(t){const{status:r,ctx:s}=this._processInputParams(t);if(s.parsedType!==A.array)return T(s,{code:S.invalid_type,expected:A.array,received:s.parsedType}),U;if(s.data.length<this._def.items.length)return T(s,{code:S.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),U;!this._def.rest&&s.data.length>this._def.items.length&&(T(s,{code:S.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const o=s.data.map((a,n)=>{const l=this._def.items[n]||this._def.rest;return l?l._parse(new st(s,a,s.path,n)):null}).filter(a=>!!a);return s.common.async?Promise.all(o).then(a=>xe.mergeArray(r,a)):xe.mergeArray(r,o)}get items(){return this._def.items}rest(t){return new it({...this._def,rest:t})}}it.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new it({items:e,typeName:V.ZodTuple,rest:null,...H(t)})};class ss extends j{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:r,ctx:s}=this._processInputParams(t);if(s.parsedType!==A.object)return T(s,{code:S.invalid_type,expected:A.object,received:s.parsedType}),U;const i=[],o=this._def.keyType,a=this._def.valueType;for(const n in s.data)i.push({key:o._parse(new st(s,n,s.path,n)),value:a._parse(new st(s,s.data[n],s.path,n))});return s.common.async?xe.mergeObjectAsync(r,i):xe.mergeObjectSync(r,i)}get element(){return this._def.valueType}static create(t,r,s){return r instanceof j?new ss({keyType:t,valueType:r,typeName:V.ZodRecord,...H(s)}):new ss({keyType:mt.create(),valueType:t,typeName:V.ZodRecord,...H(r)})}}class Js extends j{_parse(t){const{status:r,ctx:s}=this._processInputParams(t);if(s.parsedType!==A.map)return T(s,{code:S.invalid_type,expected:A.map,received:s.parsedType}),U;const i=this._def.keyType,o=this._def.valueType,a=[...s.data.entries()].map(([n,l],c)=>({key:i._parse(new st(s,n,s.path,[c,"key"])),value:o._parse(new st(s,l,s.path,[c,"value"]))}));if(s.common.async){const n=new Map;return Promise.resolve().then(async()=>{for(const l of a){const c=await l.key,h=await l.value;if(c.status==="aborted"||h.status==="aborted")return U;(c.status==="dirty"||h.status==="dirty")&&r.dirty(),n.set(c.value,h.value)}return{status:r.value,value:n}})}else{const n=new Map;for(const l of a){const c=l.key,h=l.value;if(c.status==="aborted"||h.status==="aborted")return U;(c.status==="dirty"||h.status==="dirty")&&r.dirty(),n.set(c.value,h.value)}return{status:r.value,value:n}}}}Js.create=(e,t,r)=>new Js({valueType:t,keyType:e,typeName:V.ZodMap,...H(r)});class Ft extends j{_parse(t){const{status:r,ctx:s}=this._processInputParams(t);if(s.parsedType!==A.set)return T(s,{code:S.invalid_type,expected:A.set,received:s.parsedType}),U;const i=this._def;i.minSize!==null&&s.data.size<i.minSize.value&&(T(s,{code:S.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),r.dirty()),i.maxSize!==null&&s.data.size>i.maxSize.value&&(T(s,{code:S.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),r.dirty());const o=this._def.valueType;function a(l){const c=new Set;for(const h of l){if(h.status==="aborted")return U;h.status==="dirty"&&r.dirty(),c.add(h.value)}return{status:r.value,value:c}}const n=[...s.data.values()].map((l,c)=>o._parse(new st(s,l,s.path,c)));return s.common.async?Promise.all(n).then(l=>a(l)):a(n)}min(t,r){return new Ft({...this._def,minSize:{value:t,message:Z.toString(r)}})}max(t,r){return new Ft({...this._def,maxSize:{value:t,message:Z.toString(r)}})}size(t,r){return this.min(t,r).max(t,r)}nonempty(t){return this.min(1,t)}}Ft.create=(e,t)=>new Ft({valueType:e,minSize:null,maxSize:null,typeName:V.ZodSet,...H(t)});class rr extends j{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==A.function)return T(r,{code:S.invalid_type,expected:A.function,received:r.parsedType}),U;function s(n,l){return qs({data:n,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Zs(),Xr].filter(c=>!!c),issueData:{code:S.invalid_arguments,argumentsError:l}})}function i(n,l){return qs({data:n,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Zs(),Xr].filter(c=>!!c),issueData:{code:S.invalid_return_type,returnTypeError:l}})}const o={errorMap:r.common.contextualErrorMap},a=r.data;return this._def.returns instanceof br?ve(async(...n)=>{const l=new ht([]),c=await this._def.args.parseAsync(n,o).catch(p=>{throw l.addIssue(s(n,p)),l}),h=await a(...c);return await this._def.returns._def.type.parseAsync(h,o).catch(p=>{throw l.addIssue(i(h,p)),l})}):ve((...n)=>{const l=this._def.args.safeParse(n,o);if(!l.success)throw new ht([s(n,l.error)]);const c=a(...l.data),h=this._def.returns.safeParse(c,o);if(!h.success)throw new ht([i(c,h.error)]);return h.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new rr({...this._def,args:it.create(t).rest(Lt.create())})}returns(t){return new rr({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,r,s){return new rr({args:t||it.create([]).rest(Lt.create()),returns:r||Lt.create(),typeName:V.ZodFunction,...H(s)})}}class is extends j{get schema(){return this._def.getter()}_parse(t){const{ctx:r}=this._processInputParams(t);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}is.create=(e,t)=>new is({getter:e,typeName:V.ZodLazy,...H(t)});class os extends j{_parse(t){if(t.data!==this._def.value){const r=this._getOrReturnCtx(t);return T(r,{code:S.invalid_literal,expected:this._def.value}),U}return{status:"valid",value:t.data}}get value(){return this._def.value}}os.create=(e,t)=>new os({value:e,typeName:V.ZodLiteral,...H(t)});function ul(e,t){return new bs({values:e,typeName:V.ZodEnum,...H(t)})}class bs extends j{_parse(t){if(typeof t.data!="string"){const r=this._getOrReturnCtx(t),s=this._def.values;return T(r,{expected:W.joinValues(s),received:r.parsedType,code:S.invalid_type}),U}if(this._def.values.indexOf(t.data)===-1){const r=this._getOrReturnCtx(t),s=this._def.values;return T(r,{received:r.data,code:S.invalid_enum_value,options:s}),U}return ve(t.data)}get options(){return this._def.values}get enum(){const t={};for(const r of this._def.values)t[r]=r;return t}get Values(){const t={};for(const r of this._def.values)t[r]=r;return t}get Enum(){const t={};for(const r of this._def.values)t[r]=r;return t}}bs.create=ul;class as extends j{_parse(t){const r=W.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(t);if(s.parsedType!==A.string&&s.parsedType!==A.number){const i=W.objectValues(r);return T(s,{expected:W.joinValues(i),received:s.parsedType,code:S.invalid_type}),U}if(r.indexOf(t.data)===-1){const i=W.objectValues(r);return T(s,{received:s.data,code:S.invalid_enum_value,options:i}),U}return ve(t.data)}get enum(){return this._def.values}}as.create=(e,t)=>new as({values:e,typeName:V.ZodNativeEnum,...H(t)});class br extends j{_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==A.promise&&r.common.async===!1)return T(r,{code:S.invalid_type,expected:A.promise,received:r.parsedType}),U;const s=r.parsedType===A.promise?r.data:Promise.resolve(r.data);return ve(s.then(i=>this._def.type.parseAsync(i,{path:r.path,errorMap:r.common.contextualErrorMap})))}}br.create=(e,t)=>new br({type:e,typeName:V.ZodPromise,...H(t)});class Ke extends j{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===V.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:r,ctx:s}=this._processInputParams(t),i=this._def.effect||null;if(i.type==="preprocess"){const a=i.transform(s.data);return s.common.async?Promise.resolve(a).then(n=>this._def.schema._parseAsync({data:n,path:s.path,parent:s})):this._def.schema._parseSync({data:a,path:s.path,parent:s})}const o={addIssue:a=>{T(s,a),a.fatal?r.abort():r.dirty()},get path(){return s.path}};if(o.addIssue=o.addIssue.bind(o),i.type==="refinement"){const a=n=>{const l=i.refinement(n,o);if(s.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return n};if(s.common.async===!1){const n=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return n.status==="aborted"?U:(n.status==="dirty"&&r.dirty(),a(n.value),{status:r.value,value:n.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(n=>n.status==="aborted"?U:(n.status==="dirty"&&r.dirty(),a(n.value).then(()=>({status:r.value,value:n.value}))))}if(i.type==="transform")if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!Ks(a))return a;const n=i.transform(a.value,o);if(n instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:n}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>Ks(a)?Promise.resolve(i.transform(a.value,o)).then(n=>({status:r.value,value:n})):a);W.assertNever(i)}}Ke.create=(e,t,r)=>new Ke({schema:e,typeName:V.ZodEffects,effect:t,...H(r)});Ke.createWithPreprocess=(e,t,r)=>new Ke({schema:t,effect:{type:"preprocess",transform:e},typeName:V.ZodEffects,...H(r)});class Xe extends j{_parse(t){return this._getType(t)===A.undefined?ve(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Xe.create=(e,t)=>new Xe({innerType:e,typeName:V.ZodOptional,...H(t)});class jt extends j{_parse(t){return this._getType(t)===A.null?ve(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}jt.create=(e,t)=>new jt({innerType:e,typeName:V.ZodNullable,...H(t)});class ns extends j{_parse(t){const{ctx:r}=this._processInputParams(t);let s=r.data;return r.parsedType===A.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}ns.create=(e,t)=>new ns({innerType:e,typeName:V.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...H(t)});class Qs extends j{_parse(t){const{ctx:r}=this._processInputParams(t),s=this._def.innerType._parse({data:r.data,path:r.path,parent:r});return Ws(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.defaultValue()})):{status:"valid",value:s.status==="valid"?s.value:this._def.defaultValue()}}removeDefault(){return this._def.innerType}}Qs.create=(e,t)=>new Qs({innerType:e,typeName:V.ZodCatch,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...H(t)});class ei extends j{_parse(t){if(this._getType(t)!==A.nan){const s=this._getOrReturnCtx(t);return T(s,{code:S.invalid_type,expected:A.nan,received:s.parsedType}),U}return{status:"valid",value:t.data}}}ei.create=e=>new ei({typeName:V.ZodNaN,...H(e)});const Fp=Symbol("zod_brand");class hl extends j{_parse(t){const{ctx:r}=this._processInputParams(t),s=r.data;return this._def.type._parse({data:s,path:r.path,parent:r})}unwrap(){return this._def.type}}class vs extends j{_parse(t){const{status:r,ctx:s}=this._processInputParams(t);if(s.common.async)return(async()=>{const o=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return o.status==="aborted"?U:o.status==="dirty"?(r.dirty(),dl(o.value)):this._def.out._parseAsync({data:o.value,path:s.path,parent:s})})();{const i=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?U:i.status==="dirty"?(r.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:s.path,parent:s})}}static create(t,r){return new vs({in:t,out:r,typeName:V.ZodPipeline})}}const pl=(e,t={},r)=>e?gr.create().superRefine((s,i)=>{if(!e(s)){const o=typeof t=="function"?t(s):t,a=typeof o=="string"?{message:o}:o;i.addIssue({code:"custom",...a,fatal:r})}}):gr.create(),jp={object:ie.lazycreate};var V;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(V||(V={}));const Hp=(e,t={message:`Input not instance of ${e.name}`})=>pl(r=>r instanceof e,t,!0),fl=mt.create,ml=At.create,Zp=ei.create,qp=Gr.create,gl=Jr.create,Kp=Nt.create,Wp=Ys.create,Yp=Qr.create,Xp=es.create,Gp=gr.create,Jp=Lt.create,Qp=gt.create,ef=Xs.create,tf=Ne.create,rf=ie.create,sf=ie.strictCreate,of=ts.create,af=pi.create,nf=rs.create,lf=it.create,cf=ss.create,df=Js.create,uf=Ft.create,hf=rr.create,pf=is.create,ff=os.create,mf=bs.create,gf=as.create,bf=br.create,ja=Ke.create,vf=Xe.create,yf=jt.create,_f=Ke.createWithPreprocess,wf=vs.create,xf=()=>fl().optional(),kf=()=>ml().optional(),$f=()=>gl().optional(),Cf={string:e=>mt.create({...e,coerce:!0}),number:e=>At.create({...e,coerce:!0}),boolean:e=>Jr.create({...e,coerce:!0}),bigint:e=>Gr.create({...e,coerce:!0}),date:e=>Nt.create({...e,coerce:!0})},Sf=U;var Jt=Object.freeze({__proto__:null,defaultErrorMap:Xr,setErrorMap:Pp,getErrorMap:Zs,makeIssue:qs,EMPTY_PATH:Rp,addIssueToContext:T,ParseStatus:xe,INVALID:U,DIRTY:dl,OK:ve,isAborted:po,isDirty:fo,isValid:Ks,isAsync:Ws,get util(){return W},ZodParsedType:A,getParsedType:wt,ZodType:j,ZodString:mt,ZodNumber:At,ZodBigInt:Gr,ZodBoolean:Jr,ZodDate:Nt,ZodSymbol:Ys,ZodUndefined:Qr,ZodNull:es,ZodAny:gr,ZodUnknown:Lt,ZodNever:gt,ZodVoid:Xs,ZodArray:Ne,get objectUtil(){return Gs},ZodObject:ie,ZodUnion:ts,ZodDiscriminatedUnion:pi,ZodIntersection:rs,ZodTuple:it,ZodRecord:ss,ZodMap:Js,ZodSet:Ft,ZodFunction:rr,ZodLazy:is,ZodLiteral:os,ZodEnum:bs,ZodNativeEnum:as,ZodPromise:br,ZodEffects:Ke,ZodTransformer:Ke,ZodOptional:Xe,ZodNullable:jt,ZodDefault:ns,ZodCatch:Qs,ZodNaN:ei,BRAND:Fp,ZodBranded:hl,ZodPipeline:vs,custom:pl,Schema:j,ZodSchema:j,late:jp,get ZodFirstPartyTypeKind(){return V},coerce:Cf,any:Gp,array:tf,bigint:qp,boolean:gl,date:Kp,discriminatedUnion:af,effect:ja,enum:mf,function:hf,instanceof:Hp,intersection:nf,lazy:pf,literal:ff,map:df,nan:Zp,nativeEnum:gf,never:Qp,null:Xp,nullable:yf,number:ml,object:rf,oboolean:$f,onumber:kf,optional:vf,ostring:xf,pipeline:wf,preprocess:_f,promise:bf,record:cf,set:uf,strictObject:sf,string:fl,symbol:Wp,transformer:ja,tuple:lf,undefined:Yp,union:of,unknown:Jp,void:ef,NEVER:Sf,ZodIssueCode:S,quotelessJson:Dp,ZodError:ht});const Af=new Set;function Uo({initialValue:e,key:t,schema:r,onUpdate:s}){var n;if(Af.has(t))throw new Error(`persistence key '${t}' already in use`);let i=e;const o=localStorage.getItem(t);if(o)try{const l=JSON.parse(o);i=(n=r==null?void 0:r.parse(l))!=null?n:l}catch{const l=Object.assign(document.createElement("sl-alert"),{variant:"warning",closable:!0,duration:3e3,innerHTML:`
					<sl-icon name="exclamation-triangle" slot="icon"></sl-icon>
					Invalid data for local storage item <code>${t}</code>!
				`});document.body.appendChild(l),l.toast()}s==null||s(i);const a=new Mo(i);return a.subscribe(l=>{localStorage.setItem(t,JSON.stringify(l)),s==null||s(l)}),a}const sr=Uo({initialValue:[],key:"selectedLocales",schema:Jt.string().array().refine(e=>e.length===new Set(e).size)}),bl=Vo([Ut,sr]).pipe(hi(([e,t])=>e?e.info.locales.filter(r=>t.includes(r)):[])),vr=Uo({initialValue:null,key:"focusedLocale",schema:Jt.string().nullable()}),zf=new Intl.DisplayNames("en-US",{type:"language"}),No={format:e=>{const{language:t,region:r}=new Intl.Locale(e),s=zf.of(t);let i="";return r&&(i=[...r.toUpperCase()].map(o=>String.fromCodePoint(o.codePointAt(0)+127397)).join("")),i?`${i} ${s}`:s}};var Ef=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,Fo=(e,t,r,s)=>{for(var i=s>1?void 0:s?Tf(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&Ef(t,r,i),i},Ni;let ti=(Ni=class extends ke{render(){var e;return ee`
			<sl-mutation-observer
				child-list
				@sl-mutation=${()=>{this.selectedLocales.includes(this.select.value)||(this.select.value="")}}
			>
				<sl-select
					label="Focus"
					clearable
					.value=${(e=vr.value)!=null?e:""}
					.disabled=${this.selectedLocales.length===0}
					@sl-change=${t=>{vr.next(t.currentTarget.value||null)}}
				>
					${this.selectedLocales.map(t=>ee`<sl-menu-item value=${t}>${No.format(t)}</sl-menu-item>`)}
				</sl-select>
			</sl-mutation-observer>
		`}},Ae(Ni,"styles",_r`
		:host {
			flex-basis: 15em;
		}
	`),Ni);Fo([yt(bl,[])],ti.prototype,"selectedLocales",2);Fo([Un("sl-select")],ti.prototype,"select",2);ti=Fo([ot("gs-focus-select")],ti);var Of=Object.defineProperty,If=Object.getOwnPropertyDescriptor,vl=(e,t,r,s)=>{for(var i=s>1?void 0:s?If(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&Of(t,r,i),i},Fi;let go=(Fi=class extends ke{render(){var e;return ee`
			${(e=this.gameData)==null?void 0:e.info.locales.map(t=>ee`
						<sl-checkbox
							.checked=${sr.value.includes(t)}
							@click=${r=>{const s=new Set(sr.value);r.currentTarget.checked?s.add(t):s.delete(t),sr.next([...s])}}
						>
							${No.format(t)}</sl-checkbox
						>
					`)}
		`}},Ae(Fi,"styles",_r`
		:host {
			display: flex;
			flex-wrap: wrap;
			gap: var(--sl-spacing-medium);
		}
	`),Fi);vl([yt(Ut)],go.prototype,"gameData",2);go=vl([ot("gs-locales-select")],go);const fi=new Mo([]);var Lf=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,yl=(e,t,r,s)=>{for(var i=s>1?void 0:s?Df(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&Lf(t,r,i),i},ji;let bo=(ji=class extends ke{render(){return ee`
			<sl-breadcrumb>
				${this.path.map(({item:e,label:t})=>ee`
						<sl-breadcrumb-item
							@click=${async()=>{for(const r of this.path){if(r.item===e)break;r.item.expanded||(r.item.expanded=!0,await new Promise(s=>{r.item.addEventListener("sl-after-expand",()=>s(),{once:!0})}))}e.scrollIntoView({behavior:"smooth"})}}
						>
							${t}
						</sl-breadcrumb-item>
					`)}
			</sl-breadcrumb>
		`}},Ae(ji,"styles",_r`
		sl-breadcrumb-item::part(label) {
			color: var(--sl-color-primary-600);
		}

		sl-breadcrumb-item::part(label):not(:active):hover {
			color: var(--sl-color-primary-500);
		}
	`),ji);yl([yt(fi)],bo.prototype,"path",2);bo=yl([ot("gs-path")],bo);const Pf=Jt.union([Jt.literal("toggle"),Jt.literal("show"),Jt.literal("hide")]),Ha=e=>{var t;e.target instanceof HTMLElement&&(vr.value&&((t=e.target.closest("td[lang]"))==null?void 0:t.lang)!==vr.value||e.target.tagName==="RT"&&e.target.classList.toggle("show"))},Za=Uo({initialValue:"toggle",key:"showRuby",schema:Pf,onUpdate:e=>{const t=document.querySelector("gs-app");if(!!t)switch(t.removeEventListener("click",Ha),e){case"toggle":t.classList.remove("ruby-hide"),t.classList.add("ruby-toggle"),t.addEventListener("click",Ha);break;case"show":t.classList.remove("ruby-hide"),t.classList.remove("ruby-toggle");break;case"hide":t.classList.remove("ruby-toggle"),t.classList.add("ruby-hide");break}}});var Rf=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,Bf=(e,t,r,s)=>{for(var i=s>1?void 0:s?Mf(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&Rf(t,r,i),i},Hi;let qa=(Hi=class extends ke{render(){return ee`
			<sl-select
				label="Ruby text"
				.value=${Za.value}
				@sl-change=${e=>{Za.next(e.currentTarget.value)}}
			>
				<sl-menu-item value="toggle">Toggle</sl-menu-item>
				<sl-menu-item value="hide">Hide</sl-menu-item>
				<sl-menu-item value="show">Show</sl-menu-item>
			</sl-select>
		`}},Ae(Hi,"styles",_r`
		:host {
			flex-basis: 8em;
		}
	`),Hi);qa=Bf([ot("gs-ruby-toggle")],qa);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Vf}=Nh,Uf=e=>e===null||typeof e!="object"&&typeof e!="function",Nf=e=>e.strings===void 0,Ka=()=>document.createComment(""),Er=(e,t,r)=>{var s;const i=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=i.insertBefore(Ka(),o),n=i.insertBefore(Ka(),o);r=new Vf(a,n,e,e.options)}else{const a=r._$AB.nextSibling,n=r._$AM,l=n!==e;if(l){let c;(s=r._$AQ)===null||s===void 0||s.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==n._$AU&&r._$AP(c)}if(a!==o||l){let c=r._$AA;for(;c!==a;){const h=c.nextSibling;i.insertBefore(c,o),c=h}}}return r},Ot=(e,t,r=e)=>(e._$AI(t,r),e),Ff={},jf=(e,t=Ff)=>e._$AH=t,Hf=e=>e._$AH,Mi=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const s=e._$AB.nextSibling;for(;r!==s;){const i=r.nextSibling;r.remove(),r=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ys=e=>(...t)=>({_$litDirective$:e,values:t});class gi{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=(e,t)=>{var r,s;const i=e._$AN;if(i===void 0)return!1;for(const o of i)(s=(r=o)._$AO)===null||s===void 0||s.call(r,t,!1),Mr(o,t);return!0},ri=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},_l=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Kf(t)}};function Zf(e){this._$AN!==void 0?(ri(this),this._$AM=e,_l(this)):this._$AM=e}function qf(e,t=!1,r=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=r;o<s.length;o++)Mr(s[o],!1),ri(s[o]);else s!=null&&(Mr(s,!1),ri(s));else Mr(this,e)}const Kf=e=>{var t,r,s,i;e.type==mi.CHILD&&((t=(s=e)._$AP)!==null&&t!==void 0||(s._$AP=qf),(r=(i=e)._$AQ)!==null&&r!==void 0||(i._$AQ=Zf))};class wl extends gi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,s){super._$AT(t,r,s),_l(this),this.isConnected=t._$AU}_$AO(t,r=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),r&&(Mr(this,t),ri(this))}setValue(t){if(Nf(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wf{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Yf{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var t;(t=this.Z)!==null&&t!==void 0||(this.Z=new Promise(r=>this.q=r))}resume(){var t;(t=this.q)===null||t===void 0||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wa=e=>!Uf(e)&&typeof e.then=="function";class Xf extends wl{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new Wf(this),this._$CX=new Yf}render(...t){var r;return(r=t.find(s=>!Wa(s)))!==null&&r!==void 0?r:qe}update(t,r){const s=this._$Cyt;let i=s.length;this._$Cyt=r;const o=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let n=0;n<r.length&&!(n>this._$Cwt);n++){const l=r[n];if(!Wa(l))return this._$Cwt=n,l;n<i&&l===s[n]||(this._$Cwt=1073741823,i=0,Promise.resolve(l).then(async c=>{for(;a.get();)await a.get();const h=o.deref();if(h!==void 0){const u=h._$Cyt.indexOf(l);u>-1&&u<h._$Cwt&&(h._$Cwt=u,h.setValue(c))}}))}return qe}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Kt=ys(Xf);var Gf=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,bi=(e,t,r,s)=>{for(var i=s>1?void 0:s?Jf(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&Gf(t,r,i),i},Zi;let ls=(Zi=class extends ke{constructor(){super();Ae(this,"debounceTimer",0);this.searchIndex=0}async load(t){var r,s,i;(r=document.querySelector("gs-menu"))==null||r.selectPath([...fi.value.slice(0,2).map(({label:o})=>o),...t.path]),await((s=document.querySelector("gs-message-table"))==null?void 0:s.updateComplete),(i=document.querySelector(`tr#row-${t.key}`))==null||i.scrollIntoView()}search(t){if(t instanceof InputEvent&&t.isComposing)return;const{currentTarget:r}=t;window.clearTimeout(this.debounceTimer),this.debounceTimer=window.setTimeout(()=>{var s;if(!r.value){this.searchResult=void 0,requestAnimationFrame(()=>r.focus());return}(s=this.gameData.search)==null||s.postMessage(r.value),this.searchResult=new Promise((i,o)=>{var n;const a=async l=>{var c;if(requestAnimationFrame(()=>r.focus()),(c=this.gameData.search)==null||c.removeEventListener("message",a),Array.isArray(l.data)){const h=l.data.filter(({locale:u})=>sr.value.includes(u));this.searchIndex=0,h.length&&await this.load(h[0]),i(h)}else o()};(n=this.gameData.search)==null||n.addEventListener("message",a)})},250)}stepSearchResult(t){return async()=>{var i;const r=(i=await this.searchResult)!=null?i:[],{length:s}=r;this.searchIndex=((this.searchIndex+t)%s+s)%s,await this.load(r[this.searchIndex])}}render(){var t,r,s,i,o,a;return ee`
			<sl-input
				label="Search"
				placeholder=${Kt(this.gameData.indexed.then(()=>""),"indexing")}
				.disabled=${Kt(this.gameData.indexed.then(()=>!1),!0)}
				help-text=${Kt((r=(t=this.searchResult)==null?void 0:t.then(n=>{if(n.length===0)return"No results";const l=n[this.searchIndex];return`Search results: ${this.searchIndex+1} / ${n.length} \u2014 ${l.path.join("/")} \u2014 ${No.format(l.locale)}`}))!=null?r:"\xA0","\xA0")}
				@input=${this.search}
				@compositionend=${this.search}
			>
				${Kt(this.gameData.indexed.then(()=>ee`<sl-icon name="search" slot="prefix"></sl-icon>`),ee`<sl-spinner slot="prefix"></sl-spinner>`)}
				<div slot="suffix">
					<sl-button
						@click=${this.stepSearchResult(-1)}
						variant="default"
						size="small"
						.disabled=${Kt((i=(s=this.searchResult)==null?void 0:s.then(({length:n})=>!n))!=null?i:!0,!0)}
						circle
						><sl-icon name="caret-left-fill"></sl-icon
					></sl-button>
					<sl-button
						@click=${this.stepSearchResult(1)}
						variant="default"
						size="small"
						.disabled=${Kt((a=(o=this.searchResult)==null?void 0:o.then(({length:n})=>!n))!=null?a:!0,!0)}
						circle
						><sl-icon name="caret-right-fill"></sl-icon
					></sl-button>
				</div>
			</sl-input>
		`}},Ae(Zi,"styles",_r`
		:host {
			flex: 1;
		}

		sl-spinner {
			--track-color: var(--slategrey-darker-1);
			--indicator-color: var(--sl-color-primary-700);
		}
	`),Zi);bi([yt(Ut)],ls.prototype,"gameData",2);bi([di()],ls.prototype,"searchResult",2);bi([di()],ls.prototype,"searchIndex",2);ls=bi([ot("gs-search-bar")],ls);const Bi=new WeakMap,Qf=ys(class extends wl{render(e){return oe}update(e,[t]){var r;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.dt=(r=e.options)===null||r===void 0?void 0:r.host,this.rt(this.ct=e.element)),oe}rt(e){var t;if(typeof this.Y=="function"){const r=(t=this.dt)!==null&&t!==void 0?t:globalThis;let s=Bi.get(r);s===void 0&&(s=new WeakMap,Bi.set(r,s)),s.get(this.Y)!==void 0&&this.Y.call(this.dt,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.dt,e)}else this.Y.value=e}get lt(){var e,t,r;return typeof this.Y=="function"?(t=Bi.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.Y):(r=this.Y)===null||r===void 0?void 0:r.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ya={json:e=>fetch(e).then(t=>t.json())};function em(){return new Worker("/game-scripts/assets/search.67336d20.js")}var tm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,vi=(e,t,r,s)=>{for(var i=s>1?void 0:s?rm(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&tm(t,r,i),i};const vo=new WeakMap,Vi=e=>Qf(t=>{t&&vo.set(t,e)});var qi;let cs=(qi=class extends ke{constructor(){super(),Ya.json("games.json").then(e=>{this.games=e})}parseTree(e,t){const r=new Set,s=new Set;for(const[i,o]of Object.entries(e)){const a=([l,c,h=[]])=>ee`
					<sl-tree-item ${Vi(l)}>
						<sl-icon name=${c}></sl-icon>
						${l} ${h}
					</sl-tree-item>
				`,n=({forWildcard:l,forEntry:c})=>{if(i==="*")for(const[h,u]of Object.entries(t))s.has(h)||r.add(a(l(h,u)));else s.add(i),r.add(a(c()))};n(o?{forWildcard:(l,c)=>[l,"folder",this.parseTree(o,c)],forEntry:()=>[i,"folder",this.parseTree(o,t[i])]}:{forWildcard:l=>[l,"file-earmark"],forEntry:()=>[i,"file-earmark"]})}return r}selectPath(e,t=this.renderRoot.querySelector("sl-tree")){var r;if(!!t){for(const s of t.querySelectorAll("sl-tree-item"))if(vo.get(s)===e[0]){e.length===1?(r=this.renderRoot.querySelector("sl-tree"))==null||r.selectItem(s):(s.expanded||(s.expanded=!0),this.selectPath(e.slice(1),s));return}}}render(){return this.games?ee`
			<sl-tree
				.selection=${"leaf"}
				@sl-selection-change=${e=>{let[t]=e.detail.selection;if(!t)return;const r=i=>({item:i,label:vo.get(i)}),s=[r(t)];for(;t.parentElement instanceof J;)t=t.parentElement,s.unshift(r(t));fi.next(s)}}
			>
				${Object.entries(this.games).map(([e,t])=>ee`
						<sl-tree-item ${Vi(e)}>
							<sl-icon name="pc-display-horizontal"></sl-icon>
							${e}
							${Object.entries(t).map(([r,s])=>ee`
									<sl-tree-item
										lazy
										${Vi(r)}
										@sl-lazy-load=${async({currentTarget:i})=>{var l;for(const c of this.lazyItems)c!==i&&c.expanded&&await new Promise(h=>{c.addEventListener("sl-after-collapse",()=>{for(const u of c.querySelectorAll("sl-tree-item"))u.remove();h()},{once:!0}),c.expanded=!1});const o=await Ya.json(`${s.root}/message.json`),a=document.createDocumentFragment();Bn(this.parseTree(s.messageFormat,o),a,{host:this}),i.addEventListener("sl-expand",()=>{const h=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,p=>p instanceof J&&p.isLeaf?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP).firstChild(),u=h.parentElement;this.tree.selectItem(h),u.expanded||(u.expanded=!0)},{once:!0}),i.appendChild(a);for(const c of this.lazyItems)c.lazy=c!==i;const n=new em;(l=Ut.value)==null||l.search.terminate(),Ye.reset(s),Vt.update(),Ut.next({info:s,data:o,search:n,indexed:new Promise(c=>{const h=u=>{u.data==="indexed"&&(n.removeEventListener("message",h),c())};n.addEventListener("message",h),n.postMessage({format:s.messageFormat,data:o})})})}}
									>
										<sl-icon name="controller"></sl-icon>
										${r}
									</sl-tree-item>
								`)}
						</sl-tree-item>
					`)}
			</sl-tree>
		`:ee`<sl-spinner></sl-spinner>`}},Ae(qi,"styles",_r`
		sl-tree {
			--indent-guide-width: 1px;
			--indent-guide-color: var(--slategrey-darker-8);
		}

		sl-tree-item::part(label) {
			padding-right: var(--sl-spacing-small);
		}
	`),qi);vi([Un("sl-tree")],cs.prototype,"tree",2);vi([jh("sl-tree > sl-tree-item > sl-tree-item")],cs.prototype,"lazyItems",2);vi([di()],cs.prototype,"games",2);cs=vi([ot("gs-menu")],cs);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sm=ys(class extends gi{constructor(e){var t;if(super(e),e.type!==mi.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,s;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(t)}const i=e.element.classList;this.nt.forEach(o=>{o in t||(i.remove(o),this.nt.delete(o))});for(const o in t){const a=!!t[o];a===this.nt.has(o)||((s=this.st)===null||s===void 0?void 0:s.has(o))||(a?(i.add(o),this.nt.add(o)):(i.remove(o),this.nt.delete(o)))}return qe}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xa=(e,t,r)=>{const s=new Map;for(let i=t;i<=r;i++)s.set(e[i],i);return s},im=ys(class extends gi{constructor(e){if(super(e),e.type!==mi.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let s;r===void 0?r=t:t!==void 0&&(s=t);const i=[],o=[];let a=0;for(const n of e)i[a]=s?s(n,a):a,o[a]=r(n,a),a++;return{values:o,keys:i}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,s]){var i;const o=Hf(e),{values:a,keys:n}=this.ht(t,r,s);if(!Array.isArray(o))return this.ut=n,a;const l=(i=this.ut)!==null&&i!==void 0?i:this.ut=[],c=[];let h,u,p=0,g=o.length-1,b=0,m=a.length-1;for(;p<=g&&b<=m;)if(o[p]===null)p++;else if(o[g]===null)g--;else if(l[p]===n[b])c[b]=Ot(o[p],a[b]),p++,b++;else if(l[g]===n[m])c[m]=Ot(o[g],a[m]),g--,m--;else if(l[p]===n[m])c[m]=Ot(o[p],a[m]),Er(e,c[m+1],o[p]),p++,m--;else if(l[g]===n[b])c[b]=Ot(o[g],a[b]),Er(e,o[p],o[g]),g--,b++;else if(h===void 0&&(h=Xa(n,b,m),u=Xa(l,p,g)),h.has(l[p]))if(h.has(l[g])){const v=u.get(n[b]),y=v!==void 0?o[v]:null;if(y===null){const _=Er(e,o[p]);Ot(_,a[b]),c[b]=_}else c[b]=Ot(y,a[b]),Er(e,o[p],y),o[v]=null;b++}else Mi(o[g]),g--;else Mi(o[p]),p++;for(;b<=m;){const v=Er(e,c[m+1]);Ot(v,a[b]),c[b++]=v}for(;p<=g;){const v=o[p++];v!==null&&Mi(v)}return this.ut=n,jf(e,c),qe}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yo extends gi{constructor(t){if(super(t),this.it=oe,t.type!==mi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===oe||t==null)return this._t=void 0,this.it=t;if(t===qe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}yo.directiveName="unsafeHTML",yo.resultType=1;const om=ys(yo);var am=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,yi=(e,t,r,s)=>{for(var i=s>1?void 0:s?nm(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&am(t,r,i),i};const lm=Vo([fi,Ut]).pipe(hi(([e,t])=>{if(!t)return{};let{data:r}=t;for(const{label:s}of e.slice(2))if(r=r[s],!r)return{};return r})),cm=Vo([bl,vr]).pipe(hi(([e,t])=>[...e].sort((r,s)=>{switch(t){case r:return-1;case s:return 1}return 0})));let ds=class extends ke{constructor(){super(...arguments);Ae(this,"resize",new ResizeObserver(([t])=>{var i,o;const r=(o=(i=this.parentElement)==null?void 0:i.clientHeight)!=null?o:0,s=this.querySelector("table");t.contentRect.height>r?s==null||s.classList.add("no-bottom"):s==null||s.classList.remove("no-bottom")}))}renderMessage(t){return t?om(t):oe}connectedCallback(){super.connectedCallback(),this.resize.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resize.disconnect()}createRenderRoot(){return this}updated(){var r,s;const t={};for(const i of(s=(r=this.renderRoot.querySelector("tr"))==null?void 0:r.querySelectorAll("td[lang]"))!=null?s:[]){const o=new Intl.Locale(i.lang),a=i.appendChild(document.createElement("span"));a.textContent=(()=>{switch(o.language){case"ja":return"\u3042";case"ko":return"\uD574";case"zh":return"\u4E2D";default:return"A"}})(),t[i.lang]=a.getBoundingClientRect().height,i.removeChild(a)}for(const i of this.renderRoot.querySelectorAll("td[lang]"))i.style.setProperty("--inline-height",`${t[i.lang]}px`)}render(){var r,s;if(this.selectedLocales.length===0)return(r=this.parentElement)==null||r.classList.add("no-data"),ee`
				<sl-alert open>
					<sl-icon slot="icon" name="info-circle"></sl-icon>
					Select a locale
				</sl-alert>
			`;(s=this.parentElement)==null||s.classList.remove("no-data");const t=Object.entries(this.messages).filter(([i,o])=>Object.entries(o).some(([a,n])=>this.selectedLocales.includes(a)&&n));return ee`
			<table>
				${im(t,([i])=>i,([i,o])=>ee`
							<tr id=${`row-${i}`}>
								${Rr(!Array.isArray(this.messages),()=>ee`<td>${i}</td>`)}
								${Rr(this.focusedLocale,()=>this.selectedLocales.map(a=>ee`
												<td
													lang=${a}
													class=${sm({focus:a===this.focusedLocale,dim:a!==this.focusedLocale})}
												>
													${Rr(a===this.focusedLocale,()=>ee`<pre>${this.renderMessage(o[a])}</pre>`,()=>ee`
															<pre
																class="blur"
																@click=${n=>{n.currentTarget.classList.toggle("blur")}}
															>
${this.renderMessage(o[a])}</pre
															>
														`)}
												</td>
											`),()=>this.selectedLocales.map(a=>ee`<td lang=${a}><pre>${this.renderMessage(o[a])}</pre></td>`))}
							</tr>
						`)}
			</table>
		`}};yi([yt(lm,{})],ds.prototype,"messages",2);yi([yt(cm,[])],ds.prototype,"selectedLocales",2);yi([yt(vr)],ds.prototype,"focusedLocale",2);ds=yi([ot("gs-message-table")],ds);var dm=Object.defineProperty,um=Object.getOwnPropertyDescriptor,jo=(e,t,r,s)=>{for(var i=s>1?void 0:s?um(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,r,i):a(i))||i);return s&&i&&dm(t,r,i),i};let si=class extends ke{createRenderRoot(){return this}render(){return ee`
			<aside>
				<gs-menu></gs-menu>
			</aside>
			${Rr(this.gameData,()=>{var e,t,r;return ee`
					<link rel="stylesheet" href=${`${(e=this.gameData)==null?void 0:e.info.root}/style.css`} />
					<header>
						<gs-path></gs-path>
						<gs-locales-select></gs-locales-select>
						<div class="focus-search-container">
							<gs-focus-select></gs-focus-select>
							${Rr((r=(t=this.gameData)==null?void 0:t.info.ruby)==null?void 0:r.some(s=>this.selectedLocales.includes(s)),()=>ee`<gs-ruby-toggle></gs-ruby-toggle>`)}
							<gs-search-bar></gs-search-bar>
						</div>
					</header>
					<main>
						<gs-message-table></gs-message-table>
					</main>
				`},()=>ee`
					<main class="no-data">
						<sl-alert open>
							<sl-icon slot="icon" name="info-circle"></sl-icon>
							Select a game
						</sl-alert>
					</main>
				`)}
		`}};jo([yt(Ut)],si.prototype,"gameData",2);jo([yt(sr)],si.prototype,"selectedLocales",2);si=jo([ot("gs-app")],si);Yi("shoelace");
