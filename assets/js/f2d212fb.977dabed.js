"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(n),k=a,u=g["".concat(s,".").concat(k)]||g[k]||m[k]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"Informasjonsmodell for virkningsperiodens gyldighet for tjenestepensjonsavtale",slug:"/virkningsperiode_gyldighet",folder:"informasjonsmodeller/tjenestepensjonsavtale",sidebar:"mydoc_sidebar",datatable:!0,tags:["OTP"],keywords:["informasjonsmodell"],last_updated:"Des 13, 2022",hide_table_of_contents:!0},i=void 0,l={unversionedId:"informasjonsmodeller/tjenestepensjonsavtale/virkningsperiode_gyldighet",id:"informasjonsmodeller/tjenestepensjonsavtale/virkningsperiode_gyldighet",title:"Informasjonsmodell for virkningsperiodens gyldighet for tjenestepensjonsavtale",description:"Informasjonsmodell for virkningsperiodens gyldighet for tjenestepensjonsavtale.",source:"@site/docs/informasjonsmodeller/tjenestepensjonsavtale/virkningsperiode_gyldighet.md",sourceDirName:"informasjonsmodeller/tjenestepensjonsavtale",slug:"/virkningsperiode_gyldighet",permalink:"/api-dokumentasjon/virkningsperiode_gyldighet",draft:!1,editUrl:"https://github.com/Skatteetaten/api-dokumentasjon/tree/gh-pages/docs/informasjonsmodeller/tjenestepensjonsavtale/virkningsperiode_gyldighet.md",tags:[{label:"OTP",permalink:"/api-dokumentasjon/tags/otp"}],version:"current",frontMatter:{title:"Informasjonsmodell for virkningsperiodens gyldighet for tjenestepensjonsavtale",slug:"/virkningsperiode_gyldighet",folder:"informasjonsmodeller/tjenestepensjonsavtale",sidebar:"mydoc_sidebar",datatable:!0,tags:["OTP"],keywords:["informasjonsmodell"],last_updated:"Des 13, 2022",hide_table_of_contents:!0}},s={},d=[{value:"M\xe5nederUtenforGyldigVirkningsperiode",id:"m\xe5nederutenforgyldigvirkningsperiode",level:2}],p={toc:d},g="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(g,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Informasjonsmodell for virkningsperiodens gyldighet for tjenestepensjonsavtale."),(0,a.kt)("p",null,"Oversikt over verdier som returneres i data fra endepunktet virkningsperiode/gyldighet i ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/tjenestepensjonsavtale"},"Tjenestepensjonsavtale API"),"."),(0,a.kt)("h1",{id:"om-rettighetspakker"},"Om Rettighetspakker"),(0,a.kt)("p",null,"Rettighetspakker benyttes til \xe5 styre hvem som har tilgang til denne informasjonen, se ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker"),"."),(0,a.kt)("p",null,"Rettighetspakker som kan benyttes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rettighetspakke"),(0,a.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NAV"),(0,a.kt)("td",{parentName:"tr",align:null},"NAV")))),(0,a.kt)("h1",{id:"virkningsperiodegyldighet"},"VirkningsperiodeGyldighet"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 felt"),(0,a.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gyldig"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolsk felt som er sann/true dersom det finnes en eller flere avtaleforhold med gyldig virkningsperiode for hele perioden det blir spurt om. Se ",(0,a.kt)("a",{parentName:"td",href:"/api-dokumentasjon/forutsetningerforbruk"},"Forutsetning for bruk")," for ytterligere informasjon om virkningsperiode.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"m\xe5ndederUtenforGyldigVirkningsperiode"),(0,a.kt)("td",{parentName:"tr",align:null},'Liste med m\xe5neder som ikke har avtale med gyldig virkningsperiode.  Fylles kun ut n\xe5r "gyldig" er usann/false')))),(0,a.kt)("h2",{id:"m\xe5nederutenforgyldigvirkningsperiode"},"M\xe5nederUtenforGyldigVirkningsperiode"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 felt"),(0,a.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"m\xe5ned"),(0,a.kt)("td",{parentName:"tr",align:null},"M\xe5ned som er utenfor gyldig virkningsperiode for avtaler")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"virkningsperiode gyldighet",src:n(4581).Z,width:"870",height:"695"})))}m.isMDXComponent=!0},4581:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/virkningsperiodeGyldighet-4ed7eefe0376017f7b64f7cc3c4b2605.png"}}]);