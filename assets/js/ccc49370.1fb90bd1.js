"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7294),r=n(6010),l=n(1944),o=n(5281),c=n(9460),i=n(9058),s=n(390),m=n(7462),d=n(5999),u=n(2244);function p(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function g(){const{assets:e,metadata:t}=(0,c.C)(),{title:n,description:r,date:o,tags:i,authors:s,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(l.d,{title:n,description:r,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&a.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var f=n(9407);function h(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,c.C)(),{nextItem:o,prevItem:m,frontMatter:d}=r,{hide_table_of_contents:u,toc_min_heading_level:g,toc_max_heading_level:h}=d;return a.createElement(i.Z,{sidebar:t,toc:!u&&l.length>0?a.createElement(f.Z,{toc:l,minHeadingLevel:g,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(p,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return a.createElement(c.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(g,null),a.createElement(h,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(3743);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},i="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(c.tableOfContents,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:i,linkActiveClassName:s})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),r=n(7294),l=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>i(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),i=s(c,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=r.memo(u);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...g}=e;const f=(0,l.L)(),h=m??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return d((0,r.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:v}}),[i,s,h,v])),r.createElement(p,(0,a.Z)({toc:b,className:n,linkClassName:i},g))}},9074:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(2320),r=n(7294);const l={summary:"summary_ZwcQ"};var o=n(1262),c=n(6550);const i="tabs_r7T9",s="tab";var m=n(4248);const d=e=>r.createElement(o.Z,null,(()=>{const t=n(6506).c;return r.createElement(t,e)}));var u=n(1945);const p={...a.Z,summary:function(e){let{children:t}=e;return r.createElement("div",{className:l.summary},t)},Tabs:e=>{let{children:t,tabName:a}=e;const l=(0,c.TH)(),m=new URLSearchParams(l.search),d=a?m.get(a):m.get(s),[u,p]=(0,r.useState)((e=>{if(t.constructor==Array){const n=t?.find((t=>t.props.headerText===e));return n?n.props.itemKey:void 0}return t.props.headerText===e?t.props.itemKey:void 0})(d)),g=e=>{const t=new URLSearchParams(window.location.search),n=new URL(window.location.origin+window.location.pathname);if(a)t.set(a,e.props.headerText);else{const n=e.props.headerText;t.set(s,n)}n.search=t.toString(),window.history.replaceState({},"",n),p(e.props.itemKey)};return r.createElement(o.Z,null,(()=>{const e=n(7180).m;return r.createElement(e,{className:i,underline:!0,onLinkClick:g,selectedKey:u},t)}))},TabItem:u.E,InfoMessageBar:e=>r.createElement(d,{type:m.f.info},e.children),WarningMessageBar:e=>r.createElement(d,{type:m.f.warning},e.children),SevereWarningMessageBar:e=>r.createElement(d,{type:m.f.severeWarning},e.children),ErrorMessageBar:e=>r.createElement(d,{type:m.f.error},e.children),BlockedMessageBar:e=>r.createElement(d,{type:m.f.blocked},e.children),SuccessMessageBar:e=>r.createElement(d,{type:m.f.success},e.children)}},6547:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(1262),o=n(3394);const c={icon:"icon_m0lu"};function i(e){const t=e.href?.startsWith("https://"),i=t?{target:"_blank",rel:"noopener noreferrer"}:{};return r.createElement(l.Z,null,(()=>{const l=n(5329).J;return r.createElement(o.Z,(0,a.Z)({},i,e),e.children,t&&r.createElement(l,{className:c.icon,iconName:"OpenInNew",role:"presentation"}))}))}}}]);