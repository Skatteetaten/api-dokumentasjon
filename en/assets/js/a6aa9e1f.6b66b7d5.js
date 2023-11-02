"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3089],{46:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(7294),a=n(6010),o=n(2263),l=n(1944),s=n(5281),i=n(9058),c=n(9703),m=n(197),p=n(5402);function d(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,o.Z)(),{blogDescription:a,blogTitle:s,permalink:i}=t,c="/"===i?n:s;return r.createElement(r.Fragment,null,r.createElement(l.d,{title:c,description:a}),r.createElement(m.Z,{tag:"blog_posts_list"}))}function u(e){const{metadata:t,items:n,sidebar:a}=e;return r.createElement(i.Z,{sidebar:a},r.createElement(p.Z,{items:n}),r.createElement(c.Z,{metadata:t}))}function g(e){return r.createElement(l.FG,{className:(0,a.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},r.createElement(d,e),r.createElement(u,e))}},9703:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(5999),o=n(2244);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&r.createElement(o.Z,{permalink:n,title:r.createElement(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&r.createElement(o.Z,{permalink:l,title:r.createElement(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},5402:(e,t,n)=>{n.d(t,{Z:()=>M});var r=n(7294),a=n(390),o=n(1262),l=n(9960),s=n(5742),i=n(2263),c=n(7462),m=n(3905);const p={toc:[]},d="wrapper";function u(e){let{components:t,...n}=e;return(0,m.kt)(d,(0,c.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Vi legger ut nyheter om endringer i tekniske l\xf8sninger og i dokumentasjon eller hendelser i driften av v\xe5re eksterne api'er p\xe5 denne siden."),(0,m.kt)("p",null,"Informasjon om ",(0,m.kt)("a",{parentName:"p",href:"/om/varsler"},"hvordan abonnere")," og ",(0,m.kt)("a",{parentName:"p",href:"tags"},"oversikt over tags")," p\xe5 egne sider."))}u.isMDXComponent=!0;const g={toc:[]},h="wrapper";function f(e){let{components:t,...n}=e;return(0,m.kt)(h,(0,c.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Vi publiserer en ATOM feed for nyheter."),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"For \xe5 f\xf8lge med p\xe5 feeden i en nettleser m\xe5 man installere en plugin/extension. Det finnes et stort utvalg, s\xf8k p\xe5 \u2018atom feed reader\u2019 eller lignende."),(0,m.kt)("li",{parentName:"ul"},"For \xe5 f\xf8lge med p\xe5 feeden via epost, sms, etc kan man bruke online eller installert programvare som ordner dette. Det finnes et stort utvalg. S\xf8k p\xe5 \u2018atom feed to email\u2019 eller \u2018atom feed to sms\u2019.")),(0,m.kt)("p",null,"Adresse man m\xe5 legge inn i feed plugin/verkt\xf8y: ",(0,m.kt)("a",{parentName:"p",href:"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml"},"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml")))}f.isMDXComponent=!0;const k={toc:[]},E="wrapper";function b(e){let{components:t,...n}=e;return(0,m.kt)(E,(0,c.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"We publish changes to documentation, technical solutions and news/alerts on this page."),(0,m.kt)("p",null,"News/alerts that should be communicated directly, will be sent to the notification address provided during the conclusion of the agreement. It is the consumers responsibility to ensure the Tax Administration has the correct address for these alerts."))}b.isMDXComponent=!0;const v={toc:[]},y="wrapper";function Z(e){let{components:t,...n}=e;return(0,m.kt)(y,(0,c.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"We publish alerts/news to an ATOM feed."),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"To subscribe to the feed in a web browser it is necessary to install a plugin/extension. Multiple options are available, search for 'atom feed reader'."),(0,m.kt)("li",{parentName:"ul"},"To subscribe to the feed via email, sms, etc, there are multiple options. Search for \u2018atom feed to email\u2019 eller \u2018atom feed to sms\u2019.")),(0,m.kt)("p",null,"Address to add to the feed plugin/tool: ",(0,m.kt)("a",{parentName:"p",href:"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml"},"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml")))}Z.isMDXComponent=!0;const w="dato-container_RPpL";var N=n(5999);const T=e=>{switch(e){case"nb":return{ingress:r.createElement(u,null),hvordanAbonnere:r.createElement(f,null)};case"en":return{ingress:r.createElement(b,null),hvordanAbonnere:r.createElement(Z,null)}}},x=[{name:"Dato",fieldName:"date",formatFunction:e=>r.createElement("div",{className:w},e)},{name:"Tittel",fieldName:"title"},{name:"Utdrag",fieldName:"description"}];function M(e){let{items:t,component:c=a.Z}=e;const m=(0,i.Z)(),{ingress:p,hvordanAbonnere:d}=T(m.i18n.currentLocale),u=t.map((e=>({date:e.content.metadata.formattedDate,title:r.createElement(l.Z,{to:e.content.metadata.permalink},e.content.metadata.frontMatter.title),description:e.content.metadata.description}))),g=m.siteConfig.title?` - ${m.siteConfig.title}`:"",h=`${(0,N.I)({message:"Nyheter og driftsvarsler"})}${g}`;return r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("title",null,h)),r.createElement("h1",null,r.createElement(N.Z,null,"Nyheter og driftsvarsler")),r.createElement("h2",null,r.createElement(N.Z,null,"Abonnere p\xe5 nyheter og driftsvarsler")),p,r.createElement("h2",null,r.createElement(N.Z,null,"Hvordan abonnere p\xe5 varsler")),d,r.createElement("h2",null,r.createElement(N.Z,null,"Nyheter og driftsvarsler")),r.createElement(o.Z,null,(()=>{const e=n(1023).iA;return r.createElement(e,{data:u,columns:x,caption:(0,N.I)({message:"Nyheter og driftsvarsler"}),hideCaption:!0})})))}},9074:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(8985),a=n(7294);const o={summary:"summary_ZwcQ"};var l=n(1262),s=n(6550);const i="tabs_r7T9",c="tab";var m=n(4248);const p=e=>a.createElement(l.Z,null,(()=>{const t=n(6506).c;return a.createElement(t,e)}));var d=n(1945);const u={...r.Z,summary:function(e){let{children:t}=e;return a.createElement("div",{className:o.summary},t)},Tabs:e=>{let{children:t,tabName:r}=e;const o=(0,s.TH)(),m=new URLSearchParams(o.search),p=r?m.get(r):m.get(c),[d,u]=(0,a.useState)((e=>{if(t.constructor==Array){const n=t?.find((t=>t.props.headerText===e));return n?n.props.itemKey:void 0}return t.props.headerText===e?t.props.itemKey:void 0})(p)),g=e=>{const t=new URLSearchParams(window.location.search),n=new URL(window.location.origin+window.location.pathname);if(r)t.set(r,e.props.headerText);else{const n=e.props.headerText;t.set(c,n)}n.search=t.toString(),window.history.replaceState({},"",n),u(e.props.itemKey)};return a.createElement(l.Z,null,(()=>{const e=n(7180).m;return a.createElement(e,{className:i,underline:!0,onLinkClick:g,selectedKey:d},t)}))},TabItem:d.E,InfoMessageBar:e=>a.createElement(p,{type:m.f.info},e.children),WarningMessageBar:e=>a.createElement(p,{type:m.f.warning},e.children),SevereWarningMessageBar:e=>a.createElement(p,{type:m.f.severeWarning},e.children),ErrorMessageBar:e=>a.createElement(p,{type:m.f.error},e.children),BlockedMessageBar:e=>a.createElement(p,{type:m.f.blocked},e.children),SuccessMessageBar:e=>a.createElement(p,{type:m.f.success},e.children)}},6547:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7462),a=n(7294),o=n(1262),l=n(3394);const s={icon:"icon_m0lu"};function i(e){const t=e.href?.startsWith("https://"),i=t?{target:"_blank",rel:"noopener noreferrer"}:{};return a.createElement(o.Z,null,(()=>{const o=n(5329).J;return a.createElement(l.Z,(0,r.Z)({},i,e),e.children,t&&a.createElement(o,{className:s.icon,iconName:"OpenInNew",role:"presentation"}))}))}}}]);