"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[7425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},k=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),g=p(r),d=a,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},k),{},{components:r})):n.createElement(m,o({ref:t},k))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Rettighetspakker",slug:"/rettighetspakker",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["Rettighetspakke"],last_updated:"Feb 23, 2017",keywords:["a-ordning","oppgave","arbeidsgiver","l\xf8nn","inntektsmottaker"],hide_table_of_contents:!0},o=void 0,l={unversionedId:"om/rettighetspakker",id:"om/rettighetspakker",title:"Rettighetspakker",description:"Her finner du sentrale prinsipper knyttet til hvordan Skatteetaten styrer hvilke opplysninger som utleveres.",source:"@site/docs/om/rettighetspakker.md",sourceDirName:"om",slug:"/rettighetspakker",permalink:"/api-dokumentasjon/rettighetspakker",draft:!1,tags:[{label:"Rettighetspakke",permalink:"/api-dokumentasjon/tags/rettighetspakke"}],version:"current",frontMatter:{title:"Rettighetspakker",slug:"/rettighetspakker",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["Rettighetspakke"],last_updated:"Feb 23, 2017",keywords:["a-ordning","oppgave","arbeidsgiver","l\xf8nn","inntektsmottaker"],hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Feil",permalink:"/api-dokumentasjon/feil"},next:{title:"Samtykke",permalink:"/api-dokumentasjon/samtykke"}},s={},p=[{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Filtrering",id:"filtrering",level:2}],k={toc:p},g="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Her finner du sentrale prinsipper knyttet til hvordan Skatteetaten styrer hvilke opplysninger som utleveres."),(0,a.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Rettighetspakke:")," Et sett regler som styrer hvilke data som utleveres til behandlingsansvarlig virksomhet. Rettighetspakker styrer skjerming, filtrering og detaljniv\xe5 for data som utleveres.")),(0,a.kt)("p",null,"Virksomheter kan ha ulikt rettslig grunnlag for behandling og utlevering av opplysninger. Skatteetaten etablerer rettighetspakker basert p\xe5 en juridisk vurdering av behandlingsgrunnlaget. Rettighetspakken styrer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/skjerming"},"Skjerming"),", regler for skjerming av enkeltopplysninger eller hele datasettet basert p\xe5 personens skjermingsbehov og virksomhetens rettigheter.   "),(0,a.kt)("li",{parentName:"ul"},"Filtrering, dvs hvilke opplysninger i datasettet som utleveres til den enkelte virksomhet. Se informasjonsmodell for hvert datasett for informasjon om hvilke opplysninger som kan utleveres.")),(0,a.kt)("h2",{id:"filtrering"},"Filtrering"),(0,a.kt)("p",null,"Personopplysningsloven, Skatteforvaltningsloven og andre lover og forskrifter regulerer hvilke data Skatteetaten kan utlevere. Ut i fra vurdering av behov og lovregulert behandlingsgrunnlag vil virksomheter f\xe5 tilgang til deler av et datasett, herunder spesifisering av hva som inng\xe5r i informasjonselementene i datasettet der dette er aktuelt."),(0,a.kt)("p",null,"Vurderinger av hvilke opplysninger som ikke utleveres er gjerne begrunnet med:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"at opplysningene ikke er n\xf8dvendige for virksomhetens oppgavel\xf8sning (opplysninger om barn, opplysninger om vurderinger skatteetaten har gjort, etc)"),(0,a.kt)("li",{parentName:"ul"},"at opplysninger er sensitive (fagforeningskontingent, sykdomsrelatert, etc)")),(0,a.kt)("p",null,"\xc5 identifisere hva som kan utleveres er del av prosessen med \xe5 s\xf8ke tilgang til tjenestene."))}u.isMDXComponent=!0}}]);