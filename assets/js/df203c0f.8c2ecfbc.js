"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[9924],{9960:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),l=n(3727),o=n(8780),s=n(2263),c=n(3919),i=n(412);const u=a.createContext({collectLink:()=>{}});var d=n(4996);function g(e,t){var n;let{isNavLink:g,to:m,href:f,activeClassName:p,isActive:h,"data-noBrokenLinkCheck":v,autoAddBaseUrl:w=!0,...E}=e;const{siteConfig:{trailingSlash:b,baseUrl:k}}=(0,s.Z)(),{withBaseUrl:_}=(0,d.C)(),P=(0,a.useContext)(u),T=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,(()=>T.current));const Z=m||f;const C=(0,c.Z)(Z),N=null==Z?void 0:Z.replace("pathname://","");let y=void 0!==N?(D=N,w&&(e=>e.startsWith("/"))(D)?_(D):D):void 0;var D;y&&C&&(y=(0,o.applyTrailingSlash)(y,{trailingSlash:b,baseUrl:k}));const I=(0,a.useRef)(!1),L=g?l.OL:l.rU,F=i.Z.canUseIntersectionObserver,O=(0,a.useRef)(),M=()=>{I.current||null==y||(window.docusaurus.preload(y),I.current=!0)};(0,a.useEffect)((()=>(!F&&C&&null!=y&&window.docusaurus.prefetch(y),()=>{F&&O.current&&O.current.disconnect()})),[O,y,F,C]);const R=(null==(n=y)?void 0:n.startsWith("#"))??!1,U=!y||!C||R;return U||v||P.collectLink(y),U?a.createElement("a",(0,r.Z)({ref:T,href:y},Z&&!C&&{target:"_blank",rel:"noopener noreferrer"},E)):a.createElement(L,(0,r.Z)({},E,{onMouseEnter:M,onTouchStart:M,innerRef:e=>{T.current=e,F&&e&&C&&(O.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(O.current.unobserve(e),O.current.disconnect(),null!=y&&window.docusaurus.prefetch(y))}))})),O.current.observe(e))},to:y},g&&{isActive:h,activeClassName:p}))}const m=a.forwardRef(g)},7068:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(7294),a=n(6010),l=n(9960),o=n(2263);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}var g=n(1944),m=n(5281),f=n(5999),p=n(6844),h=n(197);function v(e){let{doc:t}=e;return r.createElement("article",{className:"margin-vert--lg"},r.createElement(l.Z,{to:t.permalink},r.createElement("h2",null,t.title)),t.description&&r.createElement("p",null,t.description))}function w(e){let{tag:t}=e;const n=function(){const{selectMessage:e}=d();return t=>e(t,(0,f.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),o=(0,f.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:n(t.count),tagName:t.label});return r.createElement(g.FG,{className:(0,a.Z)(m.k.wrapper.docsPages,m.k.page.docsTagDocListPage)},r.createElement(g.d,{title:o}),r.createElement(h.Z,{tag:"doc_tag_doc_list"}),r.createElement(p.Z,null,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,o),r.createElement(l.Z,{href:t.allTagsPath},r.createElement(f.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement("section",{className:"margin-vert--lg"},t.items.map((e=>r.createElement(v,{key:e.id,doc:e})))))))))}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),l="/"===a||a===r?a:(o=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,l)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}})}}]);