"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3249],{73858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(96540);var a=n(18215),i=n(61213),r=n(17559),s=n(7131),o=n(26535),l=n(24651),c=n(21312),d=n(39022),u=n(74848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,s.e)(),{title:n,description:a,date:r,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.be,{title:n,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:r}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var h=n(5260),p=n(6676);function f(){const e=(0,p.J)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var v=n(67763),x=n(50996);function b(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,s.e)(),{nextItem:r,prevItem:c,frontMatter:d,unlisted:g}=a,{hide_table_of_contents:h,toc_min_heading_level:p,toc_max_heading_level:f}=d;return(0,u.jsxs)(o.A,{sidebar:t,toc:!h&&i.length>0?(0,u.jsx)(v.A,{toc:i,minHeadingLevel:p,maxHeadingLevel:f}):void 0,children:[g&&(0,u.jsx)(x.A,{}),(0,u.jsx)(l.A,{children:n}),(r||c)&&(0,u.jsx)(m,{nextItem:r,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(s.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(f,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},67763:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(18215),i=n(65195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=n(74848);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,a.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,s.jsx)(i.A,{...n,linkClassName:o,linkActiveClassName:l})})}},65195:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(96540),i=n(6342);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(28774),m=n(74848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const p=(0,i.p)(),f=c??p.tableOfContents.minHeadingLevel,v=u??p.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>s({toc:r(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:f,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:v}}),[o,l,f,v])),(0,m.jsx)(h,{toc:x,className:n,linkClassName:o,...g})}},50996:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var a=n(18215),i=n(21312),r=n(5260),s=n(74848);function o(){return(0,s.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(r.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(17559),u=n(27293);function m(e){let{className:t}=e;return(0,s.jsx)(u.A,{type:"caution",title:(0,s.jsx)(o,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,s.jsx)(l,{})})}function g(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(m,{...e})]})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var a=n(86025),i=n(44586),r=n(36803);var s=n(7131);const o=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:n}=(0,a.hH)(),{metadata:{blogDescription:r,blogTitle:s,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:s,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:s,title:d,description:u,lastUpdatedAt:m}=r,g=a.image??i.image,h=i.keywords??[],p=`${t.url}${r.permalink}`,f=m?o(m):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:u,datePublished:s,...f?{dateModified:f}:{},...l(r.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,s.e)(),{siteConfig:d}=(0,i.A)(),{withBaseUrl:u}=(0,a.hH)(),{date:m,title:g,description:h,frontMatter:p,lastUpdatedAt:f}=n,v=t.image??p.image,x=p.keywords??[],b=f?o(f):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:g,name:g,description:h,datePublished:m,...b?{dateModified:b}:{},...l(n.authors),...c(v,u,g),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},66796:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(72774),i=n(96540);const r="summary_ZwcQ";var s=n(74848);var o=n(78478),l=n(56347);const c="tabs_r7T9",d="tab";var u=n(25698);const m=e=>(0,s.jsx)(o.A,{children:()=>{const t=n(38695).n;return(0,s.jsx)(t,{...e})}});var g=n(26888);const h={...a.A,Summary:function(e){let{children:t}=e;return(0,s.jsx)("div",{className:r,children:t})},Tabs:e=>{let{children:t,tabName:a}=e;const r=(0,l.zy)(),u=new URLSearchParams(r.search),m=a?u.get(a):u.get(d),[g,h]=(0,i.useState)((e=>{if(t.constructor==Array){const n=t?.find((t=>t.props.headerText===e));return n?n.props.itemKey:void 0}return t.props.headerText===e?t.props.itemKey:void 0})(m)),p=e=>{const t=new URLSearchParams(window.location.search),n=new URL(window.location.origin+window.location.pathname);if(a)t.set(a,e.props.headerText);else{const n=e.props.headerText;t.set(d,n)}n.search=t.toString(),window.history.replaceState({},"",n),h(e.props.itemKey)};return(0,s.jsx)(o.A,{children:()=>{const e=n(8214).t;return(0,s.jsx)(e,{className:c,underline:!0,onLinkClick:p,selectedKey:g,children:t})}})},TabItem:g.V,InfoMessageBar:e=>(0,s.jsx)(m,{type:u.H.info,children:e.children}),WarningMessageBar:e=>(0,s.jsx)(m,{type:u.H.warning,children:e.children}),SevereWarningMessageBar:e=>(0,s.jsx)(m,{type:u.H.severeWarning,children:e.children}),ErrorMessageBar:e=>(0,s.jsx)(m,{type:u.H.error,children:e.children}),BlockedMessageBar:e=>(0,s.jsx)(m,{type:u.H.blocked,children:e.children}),SuccessMessageBar:e=>(0,s.jsx)(m,{type:u.H.success,children:e.children})}}}]);