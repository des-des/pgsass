import{S as I,i as j,s as D,j as E,k as $,J as G,d as u,l as q,f,n as y,o as O,p as b,m as P,v as Q,w,x as J,A as L,e as k,t as N,c as h,a as g,g as v,H as S,h as R,I as m}from"../../../chunks/vendor-1a106b99.js";import{g as A,G as z}from"../../../chunks/githubIntrospectionStore-6f9b6ce5.js";function B(l){let t,r;return t=new z({props:{introspectionQuery:l[1].introspectionQuery,typeName:l[0],rootPath:"/examples/github"}}),{c(){Q(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,n){J(t,e,n),r=!0},p(e,n){const s={};n&2&&(s.introspectionQuery=e[1].introspectionQuery),n&1&&(s.typeName=e[0]),t.$set(s)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function C(l){let t,r,e,n,s=JSON.stringify(l[1].error,null,4)+"",c;return{c(){t=k("span"),r=N("Error"),e=E(),n=k("pre"),c=N(s)},l(i){t=h(i,"SPAN",{});var a=g(t);r=v(a,"Error"),a.forEach(u),e=q(i),n=h(i,"PRE",{});var _=g(n);c=v(_,s),_.forEach(u)},m(i,a){f(i,t,a),S(t,r),f(i,e,a),f(i,n,a),S(n,c)},p(i,a){a&2&&s!==(s=JSON.stringify(i[1].error,null,4)+"")&&R(c,s)},i:m,o:m,d(i){i&&u(t),i&&u(e),i&&u(n)}}}function H(l){let t,r;return{c(){t=k("span"),r=N("LOADING")},l(e){t=h(e,"SPAN",{});var n=g(t);r=v(n,"LOADING"),n.forEach(u)},m(e,n){f(e,t,n),S(t,r)},p:m,i:m,o:m,d(e){e&&u(t)}}}function U(l){let t,r,e,n,s,c;document.title=t=l[0];const i=[H,C,B],a=[];function _(o,p){return!o[1]||o[1].kind==="initialising"?0:o[1].kind==="error"?1:2}return e=_(l),n=a[e]=i[e](l),{c(){r=E(),n.c(),s=$()},l(o){G('[data-svelte="svelte-165z05y"]',document.head).forEach(u),r=q(o),n.l(o),s=$()},m(o,p){f(o,r,p),a[e].m(o,p),f(o,s,p),c=!0},p(o,[p]){(!c||p&1)&&t!==(t=o[0])&&(document.title=t);let d=e;e=_(o),e===d?a[e].p(o,p):(P(),y(a[d],1,1,()=>{a[d]=null}),O(),n=a[e],n?n.p(o,p):(n=a[e]=i[e](o),n.c()),b(n,1),n.m(s.parentNode,s))},i(o){c||(b(n),c=!0)},o(o){y(n),c=!1},d(o){o&&u(r),a[e].d(o),o&&u(s)}}}async function M({fetch:l,params:t,url:r}){return await A.init(()=>l("/examples/github/introspection.json")),{props:{typeName:t.typeName}}}function x(l,t,r){let e;A.subscribe(s=>{r(1,e=s)});let{typeName:n}=t;return l.$$set=s=>{"typeName"in s&&r(0,n=s.typeName)},[n,e]}class T extends I{constructor(t){super();j(this,t,x,U,D,{typeName:0})}}export{T as default,M as load};
