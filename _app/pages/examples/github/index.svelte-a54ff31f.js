import{S as A,i as G,s as I,j as S,k as E,J as j,d as c,l as N,f,n as d,o as w,p as h,m as x,v as O,w as P,x as Q,A as D,e as b,t as k,c as y,a as $,g,H as v,h as J,I as _}from"../../../chunks/vendor-1a106b99.js";import{g as q,G as R}from"../../../chunks/githubIntrospectionStore-6f9b6ce5.js";function L(a){let t,n;return t=new R({props:{introspectionQuery:a[0].introspectionQuery,rootPath:"/examples/github"}}),{c(){O(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,o){Q(t,e,o),n=!0},p(e,o){const i={};o&1&&(i.introspectionQuery=e[0].introspectionQuery),t.$set(i)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function C(a){let t,n,e,o,i=JSON.stringify(a[0].error,null,4)+"",p;return{c(){t=b("span"),n=k("Error"),e=S(),o=b("pre"),p=k(i)},l(s){t=y(s,"SPAN",{});var l=$(t);n=g(l,"Error"),l.forEach(c),e=N(s),o=y(s,"PRE",{});var r=$(o);p=g(r,i),r.forEach(c)},m(s,l){f(s,t,l),v(t,n),f(s,e,l),f(s,o,l),v(o,p)},p(s,l){l&1&&i!==(i=JSON.stringify(s[0].error,null,4)+"")&&J(p,i)},i:_,o:_,d(s){s&&c(t),s&&c(e),s&&c(o)}}}function H(a){let t,n;return{c(){t=b("span"),n=k("LOADING")},l(e){t=y(e,"SPAN",{});var o=$(t);n=g(o,"LOADING"),o.forEach(c)},m(e,o){f(e,t,o),v(t,n)},p:_,i:_,o:_,d(e){e&&c(t)}}}function z(a){let t,n,e,o,i;const p=[H,C,L],s=[];function l(r,u){return!r[0]||r[0].kind==="initialising"?0:r[0].kind==="error"?1:2}return n=l(a),e=s[n]=p[n](a),{c(){t=S(),e.c(),o=E(),this.h()},l(r){j('[data-svelte="svelte-1pw0t1i"]',document.head).forEach(c),t=N(r),e.l(r),o=E(),this.h()},h(){document.title="Root types"},m(r,u){f(r,t,u),s[n].m(r,u),f(r,o,u),i=!0},p(r,[u]){let m=n;n=l(r),n===m?s[n].p(r,u):(x(),d(s[m],1,1,()=>{s[m]=null}),w(),e=s[n],e?e.p(r,u):(e=s[n]=p[n](r),e.c()),h(e,1),e.m(o.parentNode,o))},i(r){i||(h(e),i=!0)},o(r){d(e),i=!1},d(r){r&&c(t),s[n].d(r),r&&c(o)}}}async function M({fetch:a,url:t}){return await q.init(()=>a("/examples/github/introspection.json")),{props:{}}}function B(a,t,n){let e;return q.subscribe(o=>{n(0,e=o)}),[e]}class T extends A{constructor(t){super();G(this,t,B,z,I,{})}}export{T as default,M as load};
