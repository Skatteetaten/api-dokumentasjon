"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8610],{9703:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(5999),l=n(2244);function s(e){const{metadata:t}=e,{previousPage:n,nextPage:s}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&a.createElement(l.Z,{permalink:s,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},1714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(7294),r=n(6010),l=n(5999),s=n(8824),o=n(1944),i=n(5281),c=n(9960),m=n(9058),d=n(9703),p=n(197),g=n(8906);function u(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const n=u(t);return a.createElement(a.Fragment,null,a.createElement(o.d,{title:n}),a.createElement(p.Z,{tag:"blog_tags_posts"}))}function f(e){let{tag:t,items:n,sidebar:r,listMetadata:s}=e;const o=u(t);return a.createElement(m.Z,{sidebar:r},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,o),a.createElement(c.Z,{href:t.allTagsPath},a.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement(g.Z,{items:n}),a.createElement(d.Z,{metadata:s}))}function E(e){return a.createElement(o.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},a.createElement(h,e),a.createElement(f,e))}},8906:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7294),r=n(390),l=n(1262),s=n(9960),o=n(5742),i=n(2263),c=n(7462),m=n(3905);const d={toc:[]},p="wrapper";function g(e){let{components:t,...n}=e;return(0,m.kt)(p,(0,c.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Vi legger ut varsel om endringer i dokumentasjon, tekniske l\xf8sninger og hendelser som nyheter p\xe5 denne siden."),(0,m.kt)("p",null,"Varsler som av andre \xe5rsaker b\xf8r kommuniseres direkte, vil bli sendt p\xe5 varslingsadresse man har oppgitt i forbindelse med avtaleinng\xe5else. Konsumenter plikter \xe5 sikre at Skatteetaten til enhver tid har gyldig adresse for disse varslene."))}g.isMDXComponent=!0;const u={toc:[]},h="wrapper";function f(e){let{components:t,...n}=e;return(0,m.kt)(h,(0,c.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Vi publiserer en ATOM feed for nyheter."),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"For \xe5 f\xf8lge med p\xe5 feeden i en nettleser m\xe5 man installere en plugin/extension. Det finnes et stort utvalg, s\xf8k p\xe5 \u2018atom feed reader\u2019 eller lignende."),(0,m.kt)("li",{parentName:"ul"},"For \xe5 f\xf8lge med p\xe5 feeden via epost, sms, etc kan man bruke online eller installert programvare som ordner dette. Det finnes et stort utvalg. S\xf8k p\xe5 \u2018atom feed to email\u2019 eller \u2018atom feed to sms\u2019.")),(0,m.kt)("p",null,"Adresse man m\xe5 legge inn i feed plugin/verkt\xf8y: ",(0,m.kt)("a",{parentName:"p",href:"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml"},"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml")))}f.isMDXComponent=!0;const E="dato-container_RPpL",k=[{name:"Dato",fieldName:"date",formatFunction:e=>a.createElement("div",{className:E},e)},{name:"Tittel",fieldName:"title"},{name:"Utdrag",fieldName:"description"}];function v(e){let{items:t,component:c=r.Z}=e;const m=(0,i.Z)(),d=t.map((e=>({date:e.content.metadata.formattedDate,title:a.createElement(s.Z,{to:e.content.metadata.permalink},e.content.metadata.frontMatter.title),description:e.content.metadata.description}))),p=`Nyheter og driftsvarsler${m.siteConfig.title?` - ${m.siteConfig.title}`:""}`;return a.createElement(a.Fragment,null,a.createElement(o.Z,null,a.createElement("title",null,p)),a.createElement("h1",null,"Nyheter og driftsvarsler"),a.createElement("h2",null,"Abonnere p\xe5 nyheter og driftsvarsler"),a.createElement(g,null),a.createElement("h2",null,"Hvordan abonnere p\xe5 varsler"),a.createElement(f,null),a.createElement("h2",null,"Nyheter og driftsvarsler"),a.createElement(l.Z,null,(()=>{const e=n(1023).iA;return a.createElement(e,{data:d,columns:k,caption:"Nyheter og driftsvarsler",hideCaption:!0})})))}},9074:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(2320),r=n(7294);const l={summary:"summary_ZwcQ"};var s=n(1262),o=n(6550);const i="tabs_r7T9",c="tab";var m=n(4248);const d=e=>r.createElement(s.Z,null,(()=>{const t=n(6506).c;return r.createElement(t,e)}));var p=n(1945);const g={...a.Z,summary:function(e){let{children:t}=e;return r.createElement("div",{className:l.summary},t)},Tabs:e=>{let{children:t,tabName:a}=e;const l=(0,o.TH)(),m=new URLSearchParams(l.search),d=a?m.get(a):m.get(c),[p,g]=(0,r.useState)((e=>{if(t.constructor==Array){const n=t?.find((t=>t.props.headerText===e));return n?n.props.itemKey:void 0}return t.props.headerText===e?t.props.itemKey:void 0})(d)),u=e=>{const t=new URLSearchParams(window.location.search),n=new URL(window.location.origin+window.location.pathname);if(a)t.set(a,e.props.headerText);else{const n=e.props.headerText;t.set(c,n)}n.search=t.toString(),window.history.replaceState({},"",n),g(e.props.itemKey)};return r.createElement(s.Z,null,(()=>{const e=n(7180).m;return r.createElement(e,{className:i,underline:!0,onLinkClick:u,selectedKey:p},t)}))},TabItem:p.E,InfoMessageBar:e=>r.createElement(d,{type:m.f.info},e.children),WarningMessageBar:e=>r.createElement(d,{type:m.f.warning},e.children),SevereWarningMessageBar:e=>r.createElement(d,{type:m.f.severeWarning},e.children),ErrorMessageBar:e=>r.createElement(d,{type:m.f.error},e.children),BlockedMessageBar:e=>r.createElement(d,{type:m.f.blocked},e.children),SuccessMessageBar:e=>r.createElement(d,{type:m.f.success},e.children)}},6547:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(1262),s=n(3394);const o={icon:"icon_m0lu"};function i(e){const t=e.href?.startsWith("https://"),i=t?{target:"_blank",rel:"noopener noreferrer"}:{};return r.createElement(l.Z,null,(()=>{const l=n(5329).J;return r.createElement(s.Z,(0,a.Z)({},i,e),e.children,t&&r.createElement(l,{className:o.icon,iconName:"OpenInNew",role:"presentation"}))}))}}}]);