import{S as A,i as I,s as D,j as S,k as E,J as G,d as p,l as j,f,n as y,o as O,p as b,m as P,v as Q,w,x as J,A as L,e as h,t as k,c as N,a as v,g,H as $,h as R,I as _}from"../../../chunks/vendor-1a106b99.js";import{b as U}from"../../../chunks/paths-28a87002.js";import{g as q,G as z}from"../../../chunks/githubIntrospectionStore-afa31460.js";function B(l){let t,o;return t=new z({props:{introspectionQuery:l[1].introspectionQuery,typeName:l[0],rootPath:`${U}/examples/github`}}),{c(){Q(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,n){J(t,e,n),o=!0},p(e,n){const s={};n&2&&(s.introspectionQuery=e[1].introspectionQuery),n&1&&(s.typeName=e[0]),t.$set(s)},i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){y(t.$$.fragment,e),o=!1},d(e){L(t,e)}}}function C(l){let t,o,e,n,s=JSON.stringify(l[1].error,null,4)+"",c;return{c(){t=h("span"),o=k("Error"),e=S(),n=h("pre"),c=k(s)},l(i){t=N(i,"SPAN",{});var a=v(t);o=g(a,"Error"),a.forEach(p),e=j(i),n=N(i,"PRE",{});var m=v(n);c=g(m,s),m.forEach(p)},m(i,a){f(i,t,a),$(t,o),f(i,e,a),f(i,n,a),$(n,c)},p(i,a){a&2&&s!==(s=JSON.stringify(i[1].error,null,4)+"")&&R(c,s)},i:_,o:_,d(i){i&&p(t),i&&p(e),i&&p(n)}}}function H(l){let t,o;return{c(){t=h("span"),o=k("LOADING")},l(e){t=N(e,"SPAN",{});var n=v(t);o=g(n,"LOADING"),n.forEach(p)},m(e,n){f(e,t,n),$(t,o)},p:_,i:_,o:_,d(e){e&&p(t)}}}function F(l){let t,o,e,n,s,c;document.title=t=l[0];const i=[H,C,B],a=[];function m(r,u){return!r[1]||r[1].kind==="initialising"?0:r[1].kind==="error"?1:2}return e=m(l),n=a[e]=i[e](l),{c(){o=S(),n.c(),s=E()},l(r){G('[data-svelte="svelte-165z05y"]',document.head).forEach(p),o=j(r),n.l(r),s=E()},m(r,u){f(r,o,u),a[e].m(r,u),f(r,s,u),c=!0},p(r,[u]){(!c||u&1)&&t!==(t=r[0])&&(document.title=t);let d=e;e=m(r),e===d?a[e].p(r,u):(P(),y(a[d],1,1,()=>{a[d]=null}),O(),n=a[e],n?n.p(r,u):(n=a[e]=i[e](r),n.c()),b(n,1),n.m(s.parentNode,s))},i(r){c||(b(n),c=!0)},o(r){y(n),c=!1},d(r){r&&p(o),a[e].d(r),r&&p(s)}}}async function W({fetch:l,params:t,url:o}){const e=o.pathname.split("/").reverse().slice(1).reverse().join("/");return await q.init(()=>l(`${e}/introspection.json`)),{props:{typeName:t.typeName}}}function K(l,t,o){let e;q.subscribe(s=>{o(1,e=s)});let{typeName:n}=t;return l.$$set=s=>{"typeName"in s&&o(0,n=s.typeName)},[n,e]}class X extends A{constructor(t){super();I(this,t,K,F,D,{typeName:0})}}export{X as default,W as load};
