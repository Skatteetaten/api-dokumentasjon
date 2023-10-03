"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3089],{46:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(7294),a=n(6010),l=n(2263),s=n(1944),o=n(5281),i=n(9058),m=n(9703),c=n(197),d=n(5402);function p(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,l.Z)(),{blogDescription:a,blogTitle:o,permalink:i}=t,m="/"===i?n:o;return r.createElement(r.Fragment,null,r.createElement(s.d,{title:m,description:a}),r.createElement(c.Z,{tag:"blog_posts_list"}))}function u(e){const{metadata:t,items:n,sidebar:a}=e;return r.createElement(i.Z,{sidebar:a},r.createElement(d.Z,{items:n}),r.createElement(m.Z,{metadata:t}))}function g(e){return r.createElement(s.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(p,e),r.createElement(u,e))}},9703:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(5999),l=n(2244);function s(e){const{metadata:t}=e,{previousPage:n,nextPage:s}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&r.createElement(l.Z,{permalink:n,title:r.createElement(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&r.createElement(l.Z,{permalink:s,title:r.createElement(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},5402:(e,t,n)=>{n.d(t,{Z:()=>M});var r=n(7294),a=n(390),l=n(1262),s=n(9960),o=n(5742),i=n(2263),m=n(7462),c=n(3905);const d={toc:[]},p="wrapper";function u(e){let{components:t,...n}=e;return(0,c.kt)(p,(0,m.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Vi legger ut varsel om endringer i dokumentasjon, tekniske l\xf8sninger og hendelser som nyheter p\xe5 denne siden."),(0,c.kt)("p",null,"Varsler som av andre \xe5rsaker b\xf8r kommuniseres direkte, vil bli sendt p\xe5 varslingsadresse man har oppgitt i forbindelse med avtaleinng\xe5else. Konsumenter plikter \xe5 sikre at Skatteetaten til enhver tid har gyldig adresse for disse varslene."))}u.isMDXComponent=!0;const g={toc:[]},h="wrapper";function f(e){let{components:t,...n}=e;return(0,c.kt)(h,(0,m.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Vi publiserer en ATOM feed for nyheter."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"For \xe5 f\xf8lge med p\xe5 feeden i en nettleser m\xe5 man installere en plugin/extension. Det finnes et stort utvalg, s\xf8k p\xe5 \u2018atom feed reader\u2019 eller lignende."),(0,c.kt)("li",{parentName:"ul"},"For \xe5 f\xf8lge med p\xe5 feeden via epost, sms, etc kan man bruke online eller installert programvare som ordner dette. Det finnes et stort utvalg. S\xf8k p\xe5 \u2018atom feed to email\u2019 eller \u2018atom feed to sms\u2019.")),(0,c.kt)("p",null,"Adresse man m\xe5 legge inn i feed plugin/verkt\xf8y: ",(0,c.kt)("a",{parentName:"p",href:"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml"},"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml")))}f.isMDXComponent=!0;const k={toc:[]},b="wrapper";function E(e){let{components:t,...n}=e;return(0,c.kt)(b,(0,m.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"We publish changes to documentation, technical solutions and news/alerts on this page."),(0,c.kt)("p",null,"News/alerts that should be communicated directly, will be sent to the notification address provided during the conclusion of the agreement. It is the consumers responsibility to ensure the Tax Administration has the correct address for these alerts."))}E.isMDXComponent=!0;const v={toc:[]},y="wrapper";function Z(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,m.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"We publish alerts/news to an ATOM feed."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"To subscribe to the feed in a web browser it is necessary to install a plugin/extension. Multiple options are available, search for 'atom feed reader'."),(0,c.kt)("li",{parentName:"ul"},"To subscribe to the feed via email, sms, etc, there are multiple options. Search for \u2018atom feed to email\u2019 eller \u2018atom feed to sms\u2019.")),(0,c.kt)("p",null,"Address to add to the feed plugin/tool: ",(0,c.kt)("a",{parentName:"p",href:"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml"},"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml")))}Z.isMDXComponent=!0;const w="dato-container_RPpL";var N=n(5999);const T=e=>{switch(e){case"nb":return{ingress:r.createElement(u,null),hvordanAbonnere:r.createElement(f,null)};case"en":return{ingress:r.createElement(E,null),hvordanAbonnere:r.createElement(Z,null)}}},x=[{name:"Dato",fieldName:"date",formatFunction:e=>r.createElement("div",{className:w},e)},{name:"Tittel",fieldName:"title"},{name:"Utdrag",fieldName:"description"}];function M(e){let{items:t,component:m=a.Z}=e;const c=(0,i.Z)(),{ingress:d,hvordanAbonnere:p}=T(c.i18n.currentLocale),u=t.map((e=>({date:e.content.metadata.formattedDate,title:r.createElement(s.Z,{to:e.content.metadata.permalink},e.content.metadata.frontMatter.title),description:e.content.metadata.description}))),g=c.siteConfig.title?` - ${c.siteConfig.title}`:"",h=`${(0,N.I)({message:"Nyheter og driftsvarsler"})}${g}`;return r.createElement(r.Fragment,null,r.createElement(o.Z,null,r.createElement("title",null,h)),r.createElement("h1",null,r.createElement(N.Z,null,"Nyheter og driftsvarsler")),r.createElement("h2",null,r.createElement(N.Z,null,"Abonnere p\xe5 nyheter og driftsvarsler")),d,r.createElement("h2",null,r.createElement(N.Z,null,"Hvordan abonnere p\xe5 varsler")),p,r.createElement("h2",null,r.createElement(N.Z,null,"Nyheter og driftsvarsler")),r.createElement(l.Z,null,(()=>{const e=n(1023).iA;return r.createElement(e,{data:u,columns:x,caption:(0,N.I)({message:"Nyheter og driftsvarsler"}),hideCaption:!0})})))}},9074:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(8985),a=n(7294);const l={summary:"summary_ZwcQ"};var s=n(1262),o=n(6550);const i="tabs_r7T9",m="tab";var c=n(4248);const d=e=>a.createElement(s.Z,null,(()=>{const t=n(6506).c;return a.createElement(t,e)}));var p=n(1945);const u={...r.Z,summary:function(e){let{children:t}=e;return a.createElement("div",{className:l.summary},t)},Tabs:e=>{let{children:t,tabName:r}=e;const l=(0,o.TH)(),c=new URLSearchParams(l.search),d=r?c.get(r):c.get(m),[p,u]=(0,a.useState)((e=>{if(t.constructor==Array){const n=t?.find((t=>t.props.headerText===e));return n?n.props.itemKey:void 0}return t.props.headerText===e?t.props.itemKey:void 0})(d)),g=e=>{const t=new URLSearchParams(window.location.search),n=new URL(window.location.origin+window.location.pathname);if(r)t.set(r,e.props.headerText);else{const n=e.props.headerText;t.set(m,n)}n.search=t.toString(),window.history.replaceState({},"",n),u(e.props.itemKey)};return a.createElement(s.Z,null,(()=>{const e=n(7180).m;return a.createElement(e,{className:i,underline:!0,onLinkClick:g,selectedKey:p},t)}))},TabItem:p.E,InfoMessageBar:e=>a.createElement(d,{type:c.f.info},e.children),WarningMessageBar:e=>a.createElement(d,{type:c.f.warning},e.children),SevereWarningMessageBar:e=>a.createElement(d,{type:c.f.severeWarning},e.children),ErrorMessageBar:e=>a.createElement(d,{type:c.f.error},e.children),BlockedMessageBar:e=>a.createElement(d,{type:c.f.blocked},e.children),SuccessMessageBar:e=>a.createElement(d,{type:c.f.success},e.children)}},6547:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7462),a=n(7294),l=n(1262),s=n(3394);const o={icon:"icon_m0lu"};function i(e){const t=e.href?.startsWith("https://"),i=t?{target:"_blank",rel:"noopener noreferrer"}:{};return a.createElement(l.Z,null,(()=>{const l=n(5329).J;return a.createElement(s.Z,(0,r.Z)({},i,e),e.children,t&&a.createElement(l,{className:o.icon,iconName:"OpenInNew",role:"presentation"}))}))}}}]);