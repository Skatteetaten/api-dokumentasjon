"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1520],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>c});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),f=a,c=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(c,s(s({ref:r},p),{},{components:t})):n.createElement(c,s({ref:r},p))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63440:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const o={title:"Varsler",slug:"/om/varsler",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["varsler","drift","nyhet"],keywords:["varsel","drift","nyhet"],last_updated:"Nov 02, 2023",hide_table_of_contents:!0},s=void 0,l={unversionedId:"om/varsler",id:"om/varsler",title:"Varsler",description:"Varsler om Skatteetatens eksterne API-er",source:"@site/docs/om/varsler.md",sourceDirName:"om",slug:"/om/varsler",permalink:"/api-dokumentasjon/en/om/varsler",draft:!1,tags:[{label:"varsler",permalink:"/api-dokumentasjon/en/tags/varsler"},{label:"drift",permalink:"/api-dokumentasjon/en/tags/drift"},{label:"nyhet",permalink:"/api-dokumentasjon/en/tags/nyhet"}],version:"current",frontMatter:{title:"Varsler",slug:"/om/varsler",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["varsler","drift","nyhet"],keywords:["varsel","drift","nyhet"],last_updated:"Nov 02, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Teknisk spesifikasjon",permalink:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},next:{title:"Versjoner",permalink:"/api-dokumentasjon/en/om/versjoner"}},i={},d=[{value:"Hvordan abonnere p\xe5 varsler",id:"hvordan-abonnere-p\xe5-varsler",level:2}],p={toc:d},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Varsler om Skatteetatens eksterne API-er"),(0,a.kt)("p",null,"Vi legger ut nyheter om endringer i tekniske l\xf8sninger og i dokumentasjon eller hendelser i driften av v\xe5re eksterne API-er p\xe5 en egen side: ",(0,a.kt)("a",{parentName:"p",href:"/nyheter-og-driftsvarsler"},"Nyheter og driftsvarsler"),"\nNyheter og driftsvarsler tagges slik at det skal v\xe6re mulig for konsumenter og se om det er relevant. Se egen ",(0,a.kt)("a",{parentName:"p",href:"/nyheter-og-driftsvarsler/tags"},"oversikt over varsler for ulike tagger"),"."),(0,a.kt)("p",null,"Varsler som av andre \xe5rsaker b\xf8r kommuniseres direkte, vil bli sendt p\xe5 varslingsadresse man har oppgitt i forbindelse med avtaleinng\xe5else. Konsumenter plikter \xe5 sikre at Skatteetaten til enhver tid har gyldig adresse for disse varslene."),(0,a.kt)("h2",{id:"hvordan-abonnere-p\xe5-varsler"},"Hvordan abonnere p\xe5 varsler"),(0,a.kt)("p",null,"Vi publiserer en ATOM feed for nyheter og driftsvarsler."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For \xe5 f\xf8lge med p\xe5 feeden i en nettleser m\xe5 man installere en plugin/extension. Det finnes et stort utvalg, s\xf8k p\xe5 \u2018atom feed reader\u2019 eller lignende."),(0,a.kt)("li",{parentName:"ul"},"For \xe5 f\xf8lge med p\xe5 feeden via epost, sms, etc kan man bruke online eller installert programvare som ordner dette. Det finnes et stort utvalg og det st\xf8ttes i Outlook. S\xf8k p\xe5 \u2018atom feed to email\u2019 eller \u2018atom feed to sms\u2019.")),(0,a.kt)("p",null,"Adresse man m\xe5 legge inn i feed plugin/verkt\xf8y: ",(0,a.kt)("a",{parentName:"p",href:"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml"},"https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler/atom.xml")))}u.isMDXComponent=!0}}]);