import{t as Y,a as K}from"../chunks/CvmVpogm.js";import{i as he}from"../chunks/CgJuelzH.js";import{W as be,b as ye,a0 as X,h as k,X as ge,$ as xe,k as d,K as ke,ai as we,aj as ae,ab as G,c as O,ac as Ae,ak as ce,a as oe,al as Ie,ar as P,ag as de,F as te,as as Ee,N as pe,A as re,at as Ne,au as Te,af as Me,av as Se,d as De,aw as Ce,ax as Re,a9 as Le,I as Ve,ay as He,az as Oe,aA as $e,i as qe,an as Be,t as Z,v as N,w as x,q as Fe,aB as F,aC as Ke,aD as Ye,s as ze,C as E,x as C,aE as We,aF as le}from"../chunks/BdIHopPb.js";import{a as Xe,l as Ge,s as j,e as U}from"../chunks/eZO8bvEL.js";import{o as Pe}from"../chunks/Ca6VP1M0.js";import{p as Ue}from"../chunks/CfJY_SHI.js";function se(e,a){return a}function Je(e,a,t,l){for(var n=[],i=a.length,s=0;s<i;s++)Te(a[s].e,n,!0);var _=i>0&&n.length===0&&t!==null;if(_){var b=t.parentNode;Me(b),b.append(t),l.clear(),M(e,a[0].prev,a[i-1].next)}Se(n,()=>{for(var v=0;v<i;v++){var r=a[v];_||(l.delete(r.k),M(e,r.prev,r.next)),De(r.e,!_)}})}function ne(e,a,t,l,n,i=null){var s=e,_={flags:a,items:new Map,first:null};{var b=e;s=k?X(ge(b)):b.appendChild(be())}k&&xe();var v=null,r=!1,h=ke(()=>{var f=t();return Ve(f)?f:f==null?[]:de(f)});ye(()=>{var f=d(h),c=f.length;if(r&&c===0)return;r=c===0;let o=!1;if(k){var p=s.data===we;p!==(c===0)&&(s=ae(),X(s),G(!1),o=!0)}if(k){for(var w=null,m,y=0;y<c;y++){if(O.nodeType===8&&O.data===Ae){s=O,o=!0,G(!1);break}var R=f[y],A=l(R,y);m=_e(O,_,w,null,R,A,y,n,a,t),_.items.set(A,m),w=m}c>0&&X(ae())}k||Qe(f,_,s,n,a,l,t),i!==null&&(c===0?v?ce(v):v=oe(()=>i(s)):v!==null&&Ie(v,()=>{v=null})),o&&G(!0),d(h)}),k&&(s=O)}function Qe(e,a,t,l,n,i,s){var _=e.length,b=a.items,v=a.first,r=v,h,f=null,c=[],o=[],p,w,m,y;for(y=0;y<_;y+=1){if(p=e[y],w=i(p,y),m=b.get(w),m===void 0){var R=r?r.e.nodes_start:t;f=_e(R,a,f,f===null?a.first:f.next,p,w,y,l,n,s),b.set(w,f),c=[],o=[],r=f.next;continue}if(Ze(m,p,y),(m.e.f&P)!==0&&ce(m.e),m!==r){if(h!==void 0&&h.has(m)){if(c.length<o.length){var A=o[0],I;f=A.prev;var L=c[0],H=c[c.length-1];for(I=0;I<c.length;I+=1)ie(c[I],A,t);for(I=0;I<o.length;I+=1)h.delete(o[I]);M(a,L.prev,H.next),M(a,f,L),M(a,H,A),r=A,f=H,y-=1,c=[],o=[]}else h.delete(m),ie(m,r,t),M(a,m.prev,m.next),M(a,m,f===null?a.first:f.next),M(a,f,m),f=m;continue}for(c=[],o=[];r!==null&&r.k!==w;)(r.e.f&P)===0&&(h??(h=new Set)).add(r),o.push(r),r=r.next;if(r===null)continue;m=r}c.push(m),f=m,r=m.next}if(r!==null||h!==void 0){for(var V=h===void 0?[]:de(h);r!==null;)(r.e.f&P)===0&&V.push(r),r=r.next;var $=V.length;if($>0){var q=_===0?t:null;Je(a,V,q,b)}}te.first=a.first&&a.first.e,te.last=f&&f.e}function Ze(e,a,t,l){Ee(e.v,a),e.i=t}function _e(e,a,t,l,n,i,s,_,b,v){var r=(b&Ce)!==0,h=(b&Re)===0,f=r?h?pe(n):re(n):n,c=(b&Ne)===0?s:re(s),o={i:c,v:f,k:i,a:null,e:null,prev:t,next:l};try{return o.e=oe(()=>_(e,f,c,v),k),o.e.prev=t&&t.e,o.e.next=l&&l.e,t===null?a.first=o:(t.next=o,t.e.next=o.e),l!==null&&(l.prev=o,l.e.prev=o.e),o}finally{}}function ie(e,a,t){for(var l=e.next?e.next.e.nodes_start:t,n=a?a.e.nodes_start:t,i=e.e.nodes_start;i!==l;){var s=Le(i);n.before(i),i=s}}function M(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function je(e,a,t){var l=e==null?"":""+e;return l=l?l+" "+a:a,l===""?null:l}function ve(e,a,t,l,n,i){var s=e.__className;if(k||s!==t){var _=je(t,l);(!k||_!==e.getAttribute("class"))&&(_==null?e.removeAttribute("class"):e.className=_),e.__className=t}return i}function ea(e){if(k){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var l=e.value;fe(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var n=e.checked;fe(e,"checked",null),e.checked=n}}};e.__on_r=t,He(t),Xe()}}function fe(e,a,t,l){var n=e.__attributes??(e.__attributes={});k&&(n[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||n[a]!==(n[a]=t)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Oe]=t),e.removeAttribute(a))}function aa(e,a,t=a){var l=$e();Ge(e,"input",n=>{var i=n?e.defaultValue:e.value;if(i=J(e)?Q(i):i,t(i),l&&i!==(i=a())){var s=e.selectionStart,_=e.selectionEnd;e.value=i??"",_!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(_,e.value.length))}}),(k&&e.defaultValue!==e.value||qe(a)==null&&e.value)&&t(J(e)?Q(e.value):e.value),Be(()=>{var n=a();J(e)&&n===Q(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function J(e){var a=e.type;return a==="number"||a==="range"}function Q(e){return e===""?null:+e}var ta=Y("<td> </td>"),ra=Y('<tr class="row svelte-dd8fw"></tr>'),la=Y('<div><table class="svelte-dd8fw"><tbody></tbody></table></div>');function ue(e,a){const t=Ue(a,"param",3,"num");var l=la(),n=N(l),i=N(n);ne(i,21,()=>a.items,se,(s,_,b)=>{var v=ra();ne(v,21,()=>d(_),se,(r,h,f)=>{var c=ta(),o=N(c,!0);x(c),Z(()=>{ve(c,1,`cell pos-${f??""}-${b??""} ${(d(h).visited?"visited":"")??""}`,"svelte-dd8fw"),j(o,d(h)[t()])}),K(r,c)}),x(v),K(s,v)}),x(i),x(n),x(l),Z(()=>ve(l,1,`container ${a.classes??""}`,"svelte-dd8fw")),K(e,l)}var sa=Y(`<div class="page svelte-cbncnw"><div class="header svelte-cbncnw">Sam's Dijkstra's Alogirthm</div> <div class="block flex svelte-cbncnw" style="align-items: center;"><button class="nice-button svelte-cbncnw">Start</button><button class="nice-button svelte-cbncnw">Reset</button> <button class="nice-button svelte-cbncnw"> </button></div> <div class="block flex svelte-cbncnw" style="align-items: center;"><div class="flex svelte-cbncnw"><label for="slider" style="width: 85px;"> </label> <input id="slider" type="range" min="0" max="400"></div></div> <div class="block flex svelte-cbncnw"><!> <!></div> <div class="block flex svelte-cbncnw" style="align-items: center;"><a class="nice-button svelte-cbncnw" target="_blank" rel="noopener noreferrer" href="https://github.com/IIVioletKingII/DijkstrasAlogirthm/tree/main/src/routes"><span class="material-icons">open_in_new</span> View code here</a></div></div>`);function oa(e,a){Fe(a,!1);let t=F(!1);Pe(()=>{E(t,localStorage.getItem("darkMode")==="true"),n()});function l(){E(t,!d(t)),localStorage.setItem("darkMode",d(t)+""),n()}function n(){document.documentElement.classList.toggle("dark-mode",d(t))}let i=F(0),s=F(!1);const _=["1163751742","1381373672","2136511328","3694931569","7463417111","1319128137","1359912421","3125421639","1293138521","2311944581"];function b(){return E(s,!1),_.map(u=>u.split("").map(g=>({num:parseInt(g),sum:0,visited:!1})))}let v=F(b());function r(u,g,z){return le(v,d(v)[u]=[...d(v)[u]]),le(v,d(v)[u][g]={...d(v)[u][g],...z}),E(v,[...d(v)]),d(v)[u][g]}let h={x:_[_.length-1].length-1,y:_.length-1};function f(u){if(console.log("riun",d(s)),d(s)){E(s,!1);let g=setInterval(()=>{d(s)&&(E(s,!1),clearInterval(g),f(u))},100)}else E(v,b()),E(s,!0),c({x:0,y:0},u)}function c(u,g){let z=r(u.x,u.y,{visited:!0}),B,W={x:0,y:0},T={N:{x:0,y:u.y>0?-1:0},E:{x:u.x<h.x?1:0,y:0},S:{x:0,y:u.y<h.y?1:0},W:{x:u.x>0?-1:0,y:0}};for(const S of Object.keys(T))if(T[S].x!=T[S].y){let D=d(v)[u.x+T[S].x][u.y+T[S].y];if(!D.visited){let ee=D.num+z.sum;(D.sum==0||ee<D.sum)&&(D=r(u.x+T[S].x,u.y+T[S].y,{sum:ee})),(!B||D.sum<B)&&(B=D.sum,W=T[S])}}if(B?(u.x+=W.x,u.y+=W.y):(console.log("Aborted!"),u=h),!d(s)){E(s,!0);return}h.x!=u.x||h.y!=u.y?g<=0?c(u,g):setTimeout(()=>c(u,g),g):(r(h.x,h.y,{visited:!0}),console.log("Finished!"))}Ke(()=>d(s),()=>{console.log("currentlyRunning",d(s))}),Ye(),he();var o=sa(),p=C(N(o),2),w=N(p),m=C(w),y=C(m,2),R=N(y,!0);x(y),x(p);var A=C(p,2),I=N(A),L=N(I),H=N(L);x(L);var V=C(L,2);ea(V),x(I),x(A);var $=C(A,2),q=N($);ue(q,{get items(){return d(v)},classes:"a",param:"num"});var me=C(q,2);ue(me,{get items(){return d(v)},classes:"b",param:"sum"}),x($),We(2),x(o),Z(()=>{j(R,d(t)?"☀️ Light Mode":"🌙 Dark Mode"),j(H,`Delay: ${d(i)??""}`)}),U("click",w,()=>f(d(i))),U("click",m,()=>E(v,b())),U("click",y,l),aa(V,()=>d(i),u=>E(i,u)),K(e,o),ze()}export{oa as component};
