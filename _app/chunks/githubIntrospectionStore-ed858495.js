import{S as O,i as J,s as K,k as S,f as y,m as H,n as v,o as G,p as $,d as _,K as ue,L as ae,e as E,t as P,c as N,a as L,g as T,b as V,H as Q,h as M,I as q,v as j,w as R,x as B,A,M as ce,j as w,J as pe,l as I,N as _e,O as U,P as me,Q as he,R as ye,T as be,C as ke}from"./vendor-34c9f772.js";function ge(a){let l,i=a[0].name+"",o,r;return{c(){l=E("a"),o=P(i),this.h()},l(f){l=N(f,"A",{href:!0,class:!0});var t=L(l);o=T(t,i),t.forEach(_),this.h()},h(){V(l,"href",r=`${a[1]}/${a[0].name}`),V(l,"class","svelte-1y48hv4")},m(f,t){y(f,l,t),Q(l,o)},p(f,t){t&1&&i!==(i=f[0].name+"")&&M(o,i),t&3&&r!==(r=`${f[1]}/${f[0].name}`)&&V(l,"href",r)},i:q,o:q,d(f){f&&_(l)}}}function $e(a){let l,i,o,r;return i=new C({props:{type:a[0].ofType,rootPath:a[1]}}),{c(){l=P("["),j(i.$$.fragment),o=P("]")},l(f){l=T(f,"["),R(i.$$.fragment,f),o=T(f,"]")},m(f,t){y(f,l,t),B(i,f,t),y(f,o,t),r=!0},p(f,t){const n={};t&1&&(n.type=f[0].ofType),t&2&&(n.rootPath=f[1]),i.$set(n)},i(f){r||($(i.$$.fragment,f),r=!0)},o(f){v(i.$$.fragment,f),r=!1},d(f){f&&_(l),A(i,f),f&&_(o)}}}function ve(a){let l,i,o;return l=new C({props:{type:a[0].ofType,rootPath:a[1]}}),{c(){j(l.$$.fragment),i=P("!")},l(r){R(l.$$.fragment,r),i=T(r,"!")},m(r,f){B(l,r,f),y(r,i,f),o=!0},p(r,f){const t={};f&1&&(t.type=r[0].ofType),f&2&&(t.rootPath=r[1]),l.$set(t)},i(r){o||($(l.$$.fragment,r),o=!0)},o(r){v(l.$$.fragment,r),o=!1},d(r){A(l,r),r&&_(i)}}}function Pe(a){let l,i,o,r;const f=[ve,$e,ge],t=[];function n(u,e){return u[0]instanceof ue?0:u[0]instanceof ae?1:2}return l=n(a),i=t[l]=f[l](a),{c(){i.c(),o=S()},l(u){i.l(u),o=S()},m(u,e){t[l].m(u,e),y(u,o,e),r=!0},p(u,[e]){let s=l;l=n(u),l===s?t[l].p(u,e):(H(),v(t[s],1,1,()=>{t[s]=null}),G(),i=t[l],i?i.p(u,e):(i=t[l]=f[l](u),i.c()),$(i,1),i.m(o.parentNode,o))},i(u){r||($(i),r=!0)},o(u){v(i),r=!1},d(u){t[l].d(u),u&&_(o)}}}function Te(a,l,i){let{type:o}=l,{rootPath:r}=l;return a.$$set=f=>{"type"in f&&i(0,o=f.type),"rootPath"in f&&i(1,r=f.rootPath)},[o,r]}class C extends O{constructor(l){super();J(this,l,Te,Pe,K,{type:0,rootPath:1})}}const Ee=()=>{const a=ce("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}},Ne={subscribe(a){return Ee().page.subscribe(a)}};function z(a,l,i){const o=a.slice();return o[12]=l[i],o}function W(a,l,i){const o=a.slice();return o[15]=l[i],o}function X(a,l,i){const o=a.slice();return o[24]=l[i],o}function Y(a,l,i){const o=a.slice();return o[21]=l[i],o}function Z(a,l,i){const o=a.slice();return o[18]=l[i],o}function Qe(a){let l,i,o,r,f=("description"in a[1]&&a[1].description||"No Description")+"",t,n,u,e,s,c,p;const k=[He,Ie,we,de],h=[];function m(b,d){return b[1]instanceof me?0:b[1]instanceof he?1:b[1]instanceof ye?2:b[1]instanceof be?3:-1}~(u=m(a))&&(e=h[u]=k[u](a));let g=a[5]&&a[5].length>0&&le(a);return{c(){l=E("h1"),i=P(a[0]),o=w(),r=E("p"),t=P(f),n=w(),e&&e.c(),s=w(),g&&g.c(),c=S()},l(b){l=N(b,"H1",{});var d=L(l);i=T(d,a[0]),d.forEach(_),o=I(b),r=N(b,"P",{});var F=L(r);t=T(F,f),F.forEach(_),n=I(b),e&&e.l(b),s=I(b),g&&g.l(b),c=S()},m(b,d){y(b,l,d),Q(l,i),y(b,o,d),y(b,r,d),Q(r,t),y(b,n,d),~u&&h[u].m(b,d),y(b,s,d),g&&g.m(b,d),y(b,c,d),p=!0},p(b,d){(!p||d&1)&&M(i,b[0]),(!p||d&2)&&f!==(f=("description"in b[1]&&b[1].description||"No Description")+"")&&M(t,f);let F=u;u=m(b),u===F?~u&&h[u].p(b,d):(e&&(H(),v(h[F],1,1,()=>{h[F]=null}),G()),~u?(e=h[u],e?e.p(b,d):(e=h[u]=k[u](b),e.c()),$(e,1),e.m(s.parentNode,s)):e=null),b[5]&&b[5].length>0?g?(g.p(b,d),d&32&&$(g,1)):(g=le(b),g.c(),$(g,1),g.m(c.parentNode,c)):g&&(H(),v(g,1,1,()=>{g=null}),G())},i(b){p||($(e),$(g),p=!0)},o(b){v(e),v(g),p=!1},d(b){b&&_(l),b&&_(o),b&&_(r),b&&_(n),~u&&h[u].d(b),b&&_(s),g&&g.d(b),b&&_(c)}}}function Le(a){let l,i,o,r,f=(a[2].description||"A GraphQL schema provides a root type for each kind of operation.")+"",t,n,u,e,s,c,p=a[8]&&oe(a),k=a[7]&&fe(a),h=a[6]&&se(a);return{c(){l=E("h1"),i=P("Root types"),o=w(),r=E("p"),t=P(f),n=w(),p&&p.c(),u=w(),k&&k.c(),e=w(),h&&h.c(),s=S()},l(m){l=N(m,"H1",{});var g=L(l);i=T(g,"Root types"),g.forEach(_),o=I(m),r=N(m,"P",{});var b=L(r);t=T(b,f),b.forEach(_),n=I(m),p&&p.l(m),u=I(m),k&&k.l(m),e=I(m),h&&h.l(m),s=S()},m(m,g){y(m,l,g),Q(l,i),y(m,o,g),y(m,r,g),Q(r,t),y(m,n,g),p&&p.m(m,g),y(m,u,g),k&&k.m(m,g),y(m,e,g),h&&h.m(m,g),y(m,s,g),c=!0},p(m,g){(!c||g&4)&&f!==(f=(m[2].description||"A GraphQL schema provides a root type for each kind of operation.")+"")&&M(t,f),m[8]?p?(p.p(m,g),g&256&&$(p,1)):(p=oe(m),p.c(),$(p,1),p.m(u.parentNode,u)):p&&(H(),v(p,1,1,()=>{p=null}),G()),m[7]?k?(k.p(m,g),g&128&&$(k,1)):(k=fe(m),k.c(),$(k,1),k.m(e.parentNode,e)):k&&(H(),v(k,1,1,()=>{k=null}),G()),m[6]?h?(h.p(m,g),g&64&&$(h,1)):(h=se(m),h.c(),$(h,1),h.m(s.parentNode,s)):h&&(H(),v(h,1,1,()=>{h=null}),G())},i(m){c||($(p),$(k),$(h),c=!0)},o(m){v(p),v(k),v(h),c=!1},d(m){m&&_(l),m&&_(o),m&&_(r),m&&_(n),p&&p.d(m),m&&_(u),k&&k.d(m),m&&_(e),h&&h.d(m),m&&_(s)}}}function de(a){let l,i,o,r,f,t=a[1].getInterfaces(),n=[];for(let e=0;e<t.length;e+=1)n[e]=x(X(a,t,e));const u=e=>v(n[e],1,1,()=>{n[e]=null});return{c(){l=E("h2"),i=P("Implements"),o=w(),r=E("ul");for(let e=0;e<n.length;e+=1)n[e].c()},l(e){l=N(e,"H2",{});var s=L(l);i=T(s,"Implements"),s.forEach(_),o=I(e),r=N(e,"UL",{});var c=L(r);for(let p=0;p<n.length;p+=1)n[p].l(c);c.forEach(_)},m(e,s){y(e,l,s),Q(l,i),y(e,o,s),y(e,r,s);for(let c=0;c<n.length;c+=1)n[c].m(r,null);f=!0},p(e,s){if(s&10){t=e[1].getInterfaces();let c;for(c=0;c<t.length;c+=1){const p=X(e,t,c);n[c]?(n[c].p(p,s),$(n[c],1)):(n[c]=x(p),n[c].c(),$(n[c],1),n[c].m(r,null))}for(H(),c=t.length;c<n.length;c+=1)u(c);G()}},i(e){if(!f){for(let s=0;s<t.length;s+=1)$(n[s]);f=!0}},o(e){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)v(n[s]);f=!1},d(e){e&&_(l),e&&_(o),e&&_(r),U(n,e)}}}function we(a){let l,i,o,r,f,t=a[2].getPossibleTypes(a[1]),n=[];for(let e=0;e<t.length;e+=1)n[e]=ee(Y(a,t,e));const u=e=>v(n[e],1,1,()=>{n[e]=null});return{c(){l=E("h2"),i=P("Implementations"),o=w(),r=E("ul");for(let e=0;e<n.length;e+=1)n[e].c()},l(e){l=N(e,"H2",{});var s=L(l);i=T(s,"Implementations"),s.forEach(_),o=I(e),r=N(e,"UL",{});var c=L(r);for(let p=0;p<n.length;p+=1)n[p].l(c);c.forEach(_)},m(e,s){y(e,l,s),Q(l,i),y(e,o,s),y(e,r,s);for(let c=0;c<n.length;c+=1)n[c].m(r,null);f=!0},p(e,s){if(s&14){t=e[2].getPossibleTypes(e[1]);let c;for(c=0;c<t.length;c+=1){const p=Y(e,t,c);n[c]?(n[c].p(p,s),$(n[c],1)):(n[c]=ee(p),n[c].c(),$(n[c],1),n[c].m(r,null))}for(H(),c=t.length;c<n.length;c+=1)u(c);G()}},i(e){if(!f){for(let s=0;s<t.length;s+=1)$(n[s]);f=!0}},o(e){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)v(n[s]);f=!1},d(e){e&&_(l),e&&_(o),e&&_(r),U(n,e)}}}function Ie(a){let l,i,o,r,f=a[1].getValues(),t=[];for(let n=0;n<f.length;n+=1)t[n]=te(Z(a,f,n));return{c(){l=E("h2"),i=P("Possible Values"),o=w(),r=E("ul");for(let n=0;n<t.length;n+=1)t[n].c()},l(n){l=N(n,"H2",{});var u=L(l);i=T(u,"Possible Values"),u.forEach(_),o=I(n),r=N(n,"UL",{});var e=L(r);for(let s=0;s<t.length;s+=1)t[s].l(e);e.forEach(_)},m(n,u){y(n,l,u),Q(l,i),y(n,o,u),y(n,r,u);for(let e=0;e<t.length;e+=1)t[e].m(r,null)},p(n,u){if(u&2){f=n[1].getValues();let e;for(e=0;e<f.length;e+=1){const s=Z(n,f,e);t[e]?t[e].p(s,u):(t[e]=te(s),t[e].c(),t[e].m(r,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=f.length}},i:q,o:q,d(n){n&&_(l),n&&_(o),n&&_(r),U(t,n)}}}function He(a){let l,i;return{c(){l=E("h2"),i=P("Possible Types")},l(o){l=N(o,"H2",{});var r=L(l);i=T(r,"Possible Types"),r.forEach(_)},m(o,r){y(o,l,r),Q(l,i)},p:q,i:q,o:q,d(o){o&&_(l)}}}function x(a){let l,i,o;return i=new C({props:{type:a[24],rootPath:a[3]}}),{c(){l=E("li"),j(i.$$.fragment)},l(r){l=N(r,"LI",{});var f=L(l);R(i.$$.fragment,f),f.forEach(_)},m(r,f){y(r,l,f),B(i,l,null),o=!0},p(r,f){const t={};f&2&&(t.type=r[24]),f&8&&(t.rootPath=r[3]),i.$set(t)},i(r){o||($(i.$$.fragment,r),o=!0)},o(r){v(i.$$.fragment,r),o=!1},d(r){r&&_(l),A(i)}}}function ee(a){let l,i,o;return i=new C({props:{type:a[21],rootPath:a[3]}}),{c(){l=E("li"),j(i.$$.fragment)},l(r){l=N(r,"LI",{});var f=L(l);R(i.$$.fragment,f),f.forEach(_)},m(r,f){y(r,l,f),B(i,l,null),o=!0},p(r,f){const t={};f&6&&(t.type=r[21]),f&8&&(t.rootPath=r[3]),i.$set(t)},i(r){o||($(i.$$.fragment,r),o=!0)},o(r){v(i.$$.fragment,r),o=!1},d(r){r&&_(l),A(i)}}}function te(a){let l,i=a[18].name+"",o;return{c(){l=E("li"),o=P(i)},l(r){l=N(r,"LI",{});var f=L(l);o=T(f,i),f.forEach(_)},m(r,f){y(r,l,f),Q(l,o)},p(r,f){f&2&&i!==(i=r[18].name+"")&&M(o,i)},d(r){r&&_(l)}}}function le(a){let l,i,o,r,f,t=a[5],n=[];for(let e=0;e<t.length;e+=1)n[e]=ie(z(a,t,e));const u=e=>v(n[e],1,1,()=>{n[e]=null});return{c(){l=E("h2"),i=P("Fields"),o=w();for(let e=0;e<n.length;e+=1)n[e].c();r=S()},l(e){l=N(e,"H2",{});var s=L(l);i=T(s,"Fields"),s.forEach(_),o=I(e);for(let c=0;c<n.length;c+=1)n[c].l(e);r=S()},m(e,s){y(e,l,s),Q(l,i),y(e,o,s);for(let c=0;c<n.length;c+=1)n[c].m(e,s);y(e,r,s),f=!0},p(e,s){if(s&40){t=e[5];let c;for(c=0;c<t.length;c+=1){const p=z(e,t,c);n[c]?(n[c].p(p,s),$(n[c],1)):(n[c]=ie(p),n[c].c(),$(n[c],1),n[c].m(r.parentNode,r))}for(H(),c=t.length;c<n.length;c+=1)u(c);G()}},i(e){if(!f){for(let s=0;s<t.length;s+=1)$(n[s]);f=!0}},o(e){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)v(n[s]);f=!1},d(e){e&&_(l),e&&_(o),U(n,e),e&&_(r)}}}function re(a){let l,i,o,r,f=a[12].args,t=[];for(let u=0;u<f.length;u+=1)t[u]=ne(W(a,f,u));const n=u=>v(t[u],1,1,()=>{t[u]=null});return{c(){l=P("("),i=E("br");for(let u=0;u<t.length;u+=1)t[u].c();o=P(`
                )`)},l(u){l=T(u,"("),i=N(u,"BR",{});for(let e=0;e<t.length;e+=1)t[e].l(u);o=T(u,`
                )`)},m(u,e){y(u,l,e),y(u,i,e);for(let s=0;s<t.length;s+=1)t[s].m(u,e);y(u,o,e),r=!0},p(u,e){if(e&40){f=u[12].args;let s;for(s=0;s<f.length;s+=1){const c=W(u,f,s);t[s]?(t[s].p(c,e),$(t[s],1)):(t[s]=ne(c),t[s].c(),$(t[s],1),t[s].m(o.parentNode,o))}for(H(),s=f.length;s<t.length;s+=1)n(s);G()}},i(u){if(!r){for(let e=0;e<f.length;e+=1)$(t[e]);r=!0}},o(u){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)v(t[e]);r=!1},d(u){u&&_(l),u&&_(i),U(t,u),u&&_(o)}}}function ne(a){let l,i,o=a[15].name+"",r,f,t,n,u;return t=new C({props:{type:a[15].type,rootPath:a[3]}}),{c(){l=P("\xA0 \xA0 \xA0 \xA0"),i=E("span"),r=P(o),f=P(": "),j(t.$$.fragment),n=E("br")},l(e){l=T(e,"\xA0 \xA0 \xA0 \xA0"),i=N(e,"SPAN",{});var s=L(i);r=T(s,o),f=T(s,": "),R(t.$$.fragment,s),s.forEach(_),n=N(e,"BR",{})},m(e,s){y(e,l,s),y(e,i,s),Q(i,r),Q(i,f),B(t,i,null),y(e,n,s),u=!0},p(e,s){(!u||s&32)&&o!==(o=e[15].name+"")&&M(r,o);const c={};s&32&&(c.type=e[15].type),s&8&&(c.rootPath=e[3]),t.$set(c)},i(e){u||($(t.$$.fragment,e),u=!0)},o(e){v(t.$$.fragment,e),u=!1},d(e){e&&_(l),e&&_(i),A(t),e&&_(n)}}}function ie(a){let l,i=a[12].name+"",o,r,f,t=": ",n,u,e,s,c,p="args"in a[12]&&a[12].args.length&&re(a);return e=new C({props:{type:a[12].type,rootPath:a[3]}}),{c(){l=E("p"),o=P(i),r=w(),p&&p.c(),f=w(),n=P(t),u=w(),j(e.$$.fragment),s=w()},l(k){l=N(k,"P",{});var h=L(l);o=T(h,i),r=I(h),p&&p.l(h),f=I(h),n=T(h,t),u=I(h),R(e.$$.fragment,h),s=I(h),h.forEach(_)},m(k,h){y(k,l,h),Q(l,o),Q(l,r),p&&p.m(l,null),Q(l,f),Q(l,n),Q(l,u),B(e,l,null),Q(l,s),c=!0},p(k,h){(!c||h&32)&&i!==(i=k[12].name+"")&&M(o,i),"args"in k[12]&&k[12].args.length?p?(p.p(k,h),h&32&&$(p,1)):(p=re(k),p.c(),$(p,1),p.m(l,f)):p&&(H(),v(p,1,1,()=>{p=null}),G());const m={};h&32&&(m.type=k[12].type),h&8&&(m.rootPath=k[3]),e.$set(m)},i(k){c||($(p),$(e.$$.fragment,k),c=!0)},o(k){v(p),v(e.$$.fragment,k),c=!1},d(k){k&&_(l),p&&p.d(),A(e)}}}function oe(a){let l,i,o,r,f;return r=new C({props:{type:a[8],rootPath:a[3]}}),{c(){l=E("h2"),i=P("Query Type"),o=w(),j(r.$$.fragment)},l(t){l=N(t,"H2",{});var n=L(l);i=T(n,"Query Type"),n.forEach(_),o=I(t),R(r.$$.fragment,t)},m(t,n){y(t,l,n),Q(l,i),y(t,o,n),B(r,t,n),f=!0},p(t,n){const u={};n&256&&(u.type=t[8]),n&8&&(u.rootPath=t[3]),r.$set(u)},i(t){f||($(r.$$.fragment,t),f=!0)},o(t){v(r.$$.fragment,t),f=!1},d(t){t&&_(l),t&&_(o),A(r,t)}}}function fe(a){let l,i,o,r,f;return r=new C({props:{type:a[7],rootPath:a[3]}}),{c(){l=E("h2"),i=P("Mutation Type"),o=w(),j(r.$$.fragment)},l(t){l=N(t,"H2",{});var n=L(l);i=T(n,"Mutation Type"),n.forEach(_),o=I(t),R(r.$$.fragment,t)},m(t,n){y(t,l,n),Q(l,i),y(t,o,n),B(r,t,n),f=!0},p(t,n){const u={};n&128&&(u.type=t[7]),n&8&&(u.rootPath=t[3]),r.$set(u)},i(t){f||($(r.$$.fragment,t),f=!0)},o(t){v(r.$$.fragment,t),f=!1},d(t){t&&_(l),t&&_(o),A(r,t)}}}function se(a){let l,i,o,r,f;return r=new C({props:{type:a[6],rootPath:a[3]}}),{c(){l=E("h2"),i=P("Subscription Type"),o=w(),j(r.$$.fragment)},l(t){l=N(t,"H2",{});var n=L(l);i=T(n,"Subscription Type"),n.forEach(_),o=I(t),R(r.$$.fragment,t)},m(t,n){y(t,l,n),Q(l,i),y(t,o,n),B(r,t,n),f=!0},p(t,n){const u={};n&64&&(u.type=t[6]),n&8&&(u.rootPath=t[3]),r.$set(u)},i(t){f||($(r.$$.fragment,t),f=!0)},o(t){v(r.$$.fragment,t),f=!1},d(t){t&&_(l),t&&_(o),A(r,t)}}}function Ge(a){let l,i,o,r,f,t;document.title=l=`
        `+a[4]+`
    `;const n=[Le,Qe],u=[];function e(s,c){return typeof s[0]!="string"?0:1}return o=e(a),r=u[o]=n[o](a),{c(){i=w(),r.c(),f=S()},l(s){pe('[data-svelte="svelte-j5a8lh"]',document.head).forEach(_),i=I(s),r.l(s),f=S()},m(s,c){y(s,i,c),u[o].m(s,c),y(s,f,c),t=!0},p(s,[c]){(!t||c&16)&&l!==(l=`
        `+s[4]+`
    `)&&(document.title=l);let p=o;o=e(s),o===p?u[o].p(s,c):(H(),v(u[p],1,1,()=>{u[p]=null}),G(),r=u[o],r?r.p(s,c):(r=u[o]=n[o](s),r.c()),$(r,1),r.m(f.parentNode,f))},i(s){t||($(r),t=!0)},o(s){v(r),t=!1},d(s){s&&_(i),u[o].d(s),s&&_(f)}}}function Se(a,l,i){let o,r,f,t,n,u,e,s,c,{typeName:p=void 0}=l,{introspectionQuery:k}=l,h="";return Ne.subscribe(m=>{i(10,h=m.url.pathname)}),console.log({rootPath:c,path:h}),a.$$set=m=>{"typeName"in m&&i(0,p=m.typeName),"introspectionQuery"in m&&i(9,k=m.introspectionQuery)},a.$$.update=()=>{a.$$.dirty&512&&i(2,o=_e(k)),a.$$.dirty&4&&i(8,r=o.getQueryType()),a.$$.dirty&4&&i(7,f=o.getMutationType()),a.$$.dirty&4&&i(6,t=o.getSubscriptionType()),a.$$.dirty&5&&i(1,n=p&&o.getType(p)),a.$$.dirty&2&&i(11,u=n&&"getFields"in n&&n.getFields()),a.$$.dirty&2048&&i(5,e=u&&Object.keys(u).map(m=>u[m])),a.$$.dirty&1&&i(4,s=typeof p=="string"?p:"Root types"),a.$$.dirty&1025&&i(3,c=typeof p!="string"?h:h.split("/").reverse().slice(1).reverse().join("/"))},[p,n,o,c,s,e,t,f,r,k,h,u]}class Ae extends O{constructor(l){super();J(this,l,Se,Ge,K,{typeName:0,introspectionQuery:9})}}const{subscribe:je,set:D}=ke({kind:"initialising"}),Re=()=>{let a=!1;return{subscribe:je,init:async l=>{if(!a){a=!0;try{const i=await l();if(!i.ok){const r=await i.json();console.error(r),D({kind:"error",status:i.status,error:r})}const o=await i.json();D({kind:"success",status:i.status,introspectionQuery:o})}catch(i){console.error(i),D({kind:"error",status:500,error:i})}}}}},Ce=Re();export{Ae as G,Ce as g};