"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3089],{46:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(7294),r=n(6010),o=n(2263),s=n(1944),l=n(5281),i=n(9058),c=n(9703),m=n(197),p=n(9193);function d(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,o.Z)(),{blogDescription:r,blogTitle:l,permalink:i}=t,c="/"===i?n:l;return a.createElement(a.Fragment,null,a.createElement(s.d,{title:c,description:r}),a.createElement(m.Z,{tag:"blog_posts_list"}))}function u(e){const{metadata:t,items:n,sidebar:r}=e;return a.createElement(i.Z,{sidebar:r},a.createElement(p.Z,{items:n}),a.createElement(c.Z,{metadata:t}))}function g(e){return a.createElement(s.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogListPage)},a.createElement(d,e),a.createElement(u,e))}},9703:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(5999),o=n(2244);function s(e){const{metadata:t}=e,{previousPage:n,nextPage:s}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(o.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&a.createElement(o.Z,{permalink:s,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9193:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(7294),r=n(390),o=n(1262),s=n(9960),l=n(5742),i=n(2263),c=n(7462),m=n(3905);const p={toc:[]},d="wrapper";function u(e){let{components:t,...n}=e;return(0,m.kt)(d,(0,c.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Vi legger ut nyheter om endringer i tekniske l\xf8sninger og i dokumentasjon eller hendelser i driften av v\xe5re eksterne api'er p\xe5 denne siden."),(0,m.kt)("p",null,"Informasjon om ",(0,m.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/varsler"},"hvordan abonnere")," og ",(0,m.kt)("a",{parentName:"p",href:"/api-dokumentasjon/nyheter-og-driftsvarsler/tags"},"oversikt over tags")," p\xe5 egne sider."))}u.isMDXComponent=!0;const g={toc:[]},h="wrapper";function f(e){let{components:t,...n}=e;return(0,m.kt)(h,(0,c.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"We publish changes to documentation, technical solutions and news/alerts on this page."),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/varsler"},"How to subscribe")," and ",(0,m.kt)("a",{parentName:"p",href:"/api-dokumentasjon/nyheter-og-driftsvarsler/tags"},"tags")," are described on separate pages."))}f.isMDXComponent=!0;const E="dato-container_RPpL";var k=n(5999);const v=e=>{switch(e){case"nb":return{ingress:a.createElement(u,null)};case"en":return{ingress:a.createElement(f,null)}}},b=[{name:"Dato",fieldName:"date",formatFunction:e=>a.createElement("div",{className:E},e)},{name:"Tittel",fieldName:"title"},{name:"Utdrag",fieldName:"description"}];function Z(e){let{items:t,component:c=r.Z}=e;const m=(0,i.Z)(),{ingress:p}=v(m.i18n.currentLocale),d=t.map((e=>({date:e.content.metadata.formattedDate,title:a.createElement(s.Z,{to:e.content.metadata.permalink},e.content.metadata.frontMatter.title),description:e.content.metadata.description}))),u=m.siteConfig.title?` - ${m.siteConfig.title}`:"",g=`${(0,k.I)({message:"Nyheter og driftsvarsler"})}${u}`;return a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement("title",null,g)),a.createElement("h1",null,a.createElement(k.Z,null,"Nyheter og driftsvarsler")),p,a.createElement(o.Z,null,(()=>{const e=n(1023).iA;return a.createElement(e,{data:d,columns:b,caption:(0,k.I)({message:"Nyheter og driftsvarsler"}),hideCaption:!0})})))}},9074:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(8985),r=n(7294);const o={summary:"summary_ZwcQ"};var s=n(1262),l=n(6550);const i="tabs_r7T9",c="tab";var m=n(4248);const p=e=>r.createElement(s.Z,null,(()=>{const t=n(6506).c;return r.createElement(t,e)}));var d=n(1945);const u={...a.Z,summary:function(e){let{children:t}=e;return r.createElement("div",{className:o.summary},t)},Tabs:e=>{let{children:t,tabName:a}=e;const o=(0,l.TH)(),m=new URLSearchParams(o.search),p=a?m.get(a):m.get(c),[d,u]=(0,r.useState)((e=>{if(t.constructor==Array){const n=t?.find((t=>t.props.headerText===e));return n?n.props.itemKey:void 0}return t.props.headerText===e?t.props.itemKey:void 0})(p)),g=e=>{const t=new URLSearchParams(window.location.search),n=new URL(window.location.origin+window.location.pathname);if(a)t.set(a,e.props.headerText);else{const n=e.props.headerText;t.set(c,n)}n.search=t.toString(),window.history.replaceState({},"",n),u(e.props.itemKey)};return r.createElement(s.Z,null,(()=>{const e=n(7180).m;return r.createElement(e,{className:i,underline:!0,onLinkClick:g,selectedKey:d},t)}))},TabItem:d.E,InfoMessageBar:e=>r.createElement(p,{type:m.f.info},e.children),WarningMessageBar:e=>r.createElement(p,{type:m.f.warning},e.children),SevereWarningMessageBar:e=>r.createElement(p,{type:m.f.severeWarning},e.children),ErrorMessageBar:e=>r.createElement(p,{type:m.f.error},e.children),BlockedMessageBar:e=>r.createElement(p,{type:m.f.blocked},e.children),SuccessMessageBar:e=>r.createElement(p,{type:m.f.success},e.children)}},6547:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),o=n(1262),s=n(3394);const l={icon:"icon_m0lu"};function i(e){const t=e.href?.startsWith("https://"),i=t?{target:"_blank",rel:"noopener noreferrer"}:{};return r.createElement(o.Z,null,(()=>{const o=n(5329).J;return r.createElement(s.Z,(0,a.Z)({},i,e),e.children,t&&r.createElement(o,{className:l.icon,iconName:"OpenInNew",role:"presentation"}))}))}}}]);