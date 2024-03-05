"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[559],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),k=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},o=function(t){var e=k(t.components);return n.createElement(i.Provider,{value:e},t.children)},g="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),g=k(a),m=r,u=g["".concat(i,".").concat(m)]||g[m]||d[m]||l;return a?n.createElement(u,s(s({ref:e},o),{},{components:a})):n.createElement(u,s({ref:e},o))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[g]="string"==typeof t?t:r,s[1]=p;for(var k=2;k<l;k++)s[k]=a[k];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85110:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={title:"URL-er",slug:"/om/urler",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","URL"],last_updated:"Mar 5, 2024",hide_table_of_contents:!0},s=void 0,p={unversionedId:"om/url",id:"om/url",title:"URL-er",description:"URL-er til Skatteetatens API-er",source:"@site/docs/om/url.md",sourceDirName:"om",slug:"/om/urler",permalink:"/api-dokumentasjon/en/om/urler",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{label:"URL",permalink:"/api-dokumentasjon/en/tags/url"}],version:"current",frontMatter:{title:"URL-er",slug:"/om/urler",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","URL"],last_updated:"Mar 5, 2024",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Teknisk spesifikasjon",permalink:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},next:{title:"Varsler",permalink:"/api-dokumentasjon/en/om/varsler"}},i={},k=[{value:"Brannmur",id:"brannmur",level:2},{value:"Status og ny URL pr. API",id:"status-og-ny-url-pr-api",level:2}],o={toc:k},g="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"URL-er til Skatteetatens API-er"),(0,r.kt)("p",null,"Skatteetaten etablerer en l\xf8sning for API management og API gateway for de eksterne API-ene."),(0,r.kt)("p",null,"I den forbindelse g\xe5r vi over til host basert routing, og alle eksterne konsumenter m\xe5 derfor ta i bruk nye URL-er til API-ene v\xe5re. Nye URL-er vil i en periode v\xe6re tilgjengelig i parallell med gamle URL-er f\xf8r de gamle URL-ene saneres. De fleste tjenestene v\xe5re er n\xe5 gjort tilgjenglig med nye URL-er i Test og Produksjon (detaljert oversikt under), og Open API spesifikasjonene (OAS) p\xe5 ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/organizations/skatteetaten"},"Swaggerhub")," er oppdatert for de enkelte tjenestene."),(0,r.kt)("p",null,"Vi oppfordrer til \xe5 teste overgangen mot v\xe5rt testmilj\xf8 f\xf8rst."),(0,r.kt)("h2",{id:"brannmur"},"Brannmur"),(0,r.kt)("p",null,"Det kan v\xe6re at enkelte virksomheter m\xe5 endre sine brannmurregler. IP-range vil v\xe6re:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prod (*.api.skatteetaten.no): 20.100.51.138 / 2a13:6200:1065:13d:f5:52a2:e633:8625"),(0,r.kt)("li",{parentName:"ul"},"Test (*.api.skatteetaten-test.no): 51.13.21.170 / 2a13:6201:1066:c63:f5:fc5f:3c74:30c0")),(0,r.kt)("h2",{id:"status-og-ny-url-pr-api"},"Status og ny URL pr. API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Test"),(0,r.kt)("th",{parentName:"tr",align:null},"Produksjon"),(0,r.kt)("th",{parentName:"tr",align:null},"Kommentar"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aksjebeholdning API"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke klar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aksjebeholdning.api.skatteetaten-test.no/v1"},"https://aksjebeholdning.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aksjebeholdning.api.skatteetaten.no/v1"},"https://aksjebeholdning.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aksjon\xe6r i virksomhet API"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke klar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aksjonaerivirksomhet.api.skatteetaten-test.no/v1"},"https://aksjonaerivirksomhet.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aksjonaerivirksomhet.api.skatteetaten.no/v1"},"https://aksjonaerivirksomhet.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aktiv konto API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aktivkonto.api.skatteetaten-test.no/v3"},"https://aktivkonto.api.skatteetaten-test.no/v3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aktivkonto.api.skatteetaten.no/v3"},"https://aktivkonto.api.skatteetaten.no/v3")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arbeidsforhold i oppdrag API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://arbeidsforholdioppdrag.api.skatteetaten-test.no/v1"},"https://arbeidsforholdioppdrag.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://arbeidsforholdioppdrag.api.skatteetaten.no/v1"},"https://arbeidsforholdioppdrag.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arbeidsgiveravgift API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://arbeidsgiveravgift.api.skatteetaten-test.no/v1"},"https://arbeidsgiveravgift.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://arbeidsgiveravgift.api.skatteetaten.no/v1"},"https://arbeidsgiveravgift.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Avregning API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://avregning.api.skatteetaten-test.no/v2"},"https://avregning.api.skatteetaten-test.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://avregning.api.skatteetaten.no/v2"},"https://avregning.api.skatteetaten.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Beregnet skatt API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://beregnetskatt.api.skatteetaten-test.no/v2"},"https://beregnetskatt.api.skatteetaten-test.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://beregnetskatt.api.skatteetaten.no/v2"},"https://beregnetskatt.api.skatteetaten.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null},"Kun V2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Beregnet skatt upersonlig API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://beregnetskattupersonlig.api.skatteetaten-test.no/v1"},"https://beregnetskattupersonlig.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://beregnetskattupersonlig.api.skatteetaten.no/v1"},"https://beregnetskattupersonlig.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boligsparing for ungdom API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bsu.api.skatteetaten-test.no/v1"},"https://bsu.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bsu.api.skatteetaten.no/v1"},"https://bsu.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Formuesgrunnlag for eiendomsskatt API"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke klar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://formuesgrunnlagforeiendomsskatt.api.skatteetaten-test.no/v1"},"https://formuesgrunnlagforeiendomsskatt.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://formuesgrunnlagforeiendomsskatt.api.skatteetaten.no/v1"},"https://formuesgrunnlagforeiendomsskatt.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Inntekt API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://inntekt.api.skatteetaten-test.no/v1"},"https://inntekt.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://inntekt.api.skatteetaten.no/v1"},"https://inntekt.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Endepunkt med oppgave saneres")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Inntekt hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://inntekthendelser.api.skatteetaten-test.no/v1"},"https://inntekthendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://inntekthendelser.api.skatteetaten.no/v1"},"https://inntekthendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing slash er fjernet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Inntektsmottakere API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://inntektsmottakere.api.skatteetaten-test.no/v1"},"https://inntektsmottakere.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://inntektsmottakere.api.skatteetaten.no/v1"},"https://inntektsmottakere.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Krav og betalinger API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kravogbetalinger.api.skatteetaten-test.no/v1"},"https://kravogbetalinger.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kravogbetalinger.api.skatteetaten.no/v1"},"https://kravogbetalinger.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mva meldingsopplysning API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvameldingsopplysning.api.skatteetaten-test.no/v1"},"https://mvameldingsopplysning.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvameldingsopplysning.api.skatteetaten.no/v1"},"https://mvameldingsopplysning.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mva-melding API"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke klar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvamelding.api.skatteetaten-test.no/v1"},"https://mvamelding.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvamelding.api.skatteetaten.no/v1"},"https://mvamelding.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mva-melding hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke klar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvameldinghendelser.api.skatteetaten-test.no/v1"},"https://mvameldinghendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvameldinghendelser.api.skatteetaten.no/v1"},"https://mvameldinghendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mva-register avgiftssubjekt API"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke klar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvaregister.api.skatteetaten-test.no/v1"},"https://mvaregister.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvaregister.api.skatteetaten.no/v1"},"https://mvaregister.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mva-register avgiftssubjekt hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke klar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvaregisterhendelser.api.skatteetaten-test.no/v1"},"https://mvaregisterhendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvaregisterhendelser.api.skatteetaten.no/v1"},"https://mvaregisterhendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"N\xe6ringsspesifikasjon API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://naeringsspesifikasjon.api.skatteetaten-test.no/v3"},"https://naeringsspesifikasjon.api.skatteetaten-test.no/v3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://naeringsspesifikasjon.api.skatteetaten.no/v3"},"https://naeringsspesifikasjon.api.skatteetaten.no/v3")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"N\xe6ringsspesifikasjon hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://naeringsspesifikasjonhendelser.api.skatteetaten-test.no/v1"},"https://naeringsspesifikasjonhendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://naeringsspesifikasjonhendelser.api.skatteetaten.no/v1"},"https://naeringsspesifikasjonhendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing slash er fjernet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Omregistreringsavgift API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://omregistreringsavgift.api.skatteetaten-test.no/v1"},"https://omregistreringsavgift.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://omregistreringsavgift.api.skatteetaten.no/v1"},"https://omregistreringsavgift.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppdrag utenlandske virksomheter API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://oppdragutenlandskevirksomheter.api.skatteetaten-test.no/v1"},"https://oppdragutenlandskevirksomheter.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://oppdragutenlandskevirksomheter.api.skatteetaten.no/v1"},"https://oppdragutenlandskevirksomheter.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pensjonsgivende inntekt API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pgi.api.skatteetaten-test.no/v1"},"https://pgi.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pgi.api.skatteetaten.no/v1"},"https://pgi.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pensjonsgivende inntekt for folketrygden API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pgiforfolketrygden.api.skatteetaten-test.no/v1"},"https://pgiforfolketrygden.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pgiforfolketrygden.api.skatteetaten.no/v1"},"https://pgiforfolketrygden.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pensjonsgivende inntekt for folketrygden hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pgiforfolketrygdenhendelser.api.skatteetaten-test.no/v1"},"https://pgiforfolketrygdenhendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pgiforfolketrygdenhendelser.api.skatteetaten.no/v1"},"https://pgiforfolketrygdenhendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing slash er fjernet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Restanser API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://restanser.api.skatteetaten-test.no/v2"},"https://restanser.api.skatteetaten-test.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://restanser.api.skatteetaten.no/v2"},"https://restanser.api.skatteetaten.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Siste tilgjengelige skatteoppgj\xf8r API (tidl. Tilgjengeligdata API)"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten-test.no/v1"},"https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten.no/v1"},"https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Endepunkt med ressurs saneres")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skatteberegningsgrunnlag upersonlig API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skatteberegningsgrunnlagupersonlig.api.skatteetaten-test.no/v1"},"https://skatteberegningsgrunnlagupersonlig.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skatteberegningsgrunnlagupersonlig.api.skatteetaten.no/v1"},"https://skatteberegningsgrunnlagupersonlig.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skattemelding API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemelding.api.skatteetaten-test.no/v3"},"https://skattemelding.api.skatteetaten-test.no/v3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemelding.api.skatteetaten.no/v3"},"https://skattemelding.api.skatteetaten.no/v3")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skattemelding fastsatt hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemeldingfastsatthendelser.api.skatteetaten-test.no/v1"},"https://skattemeldingfastsatthendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemeldingfastsatthendelser.api.skatteetaten.no/v1"},"https://skattemeldingfastsatthendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing slash er fjernet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skattemelding upersonlig API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemeldingupersonlig.api.skatteetaten-test.no/v2"},"https://skattemeldingupersonlig.api.skatteetaten-test.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemeldingupersonlig.api.skatteetaten.no/v2"},"https://skattemeldingupersonlig.api.skatteetaten.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skattemelding upersonlig hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemeldingupersonlighendelser.api.skatteetaten-test.no/v1"},"https://skattemeldingupersonlighendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemeldingupersonlighendelser.api.skatteetaten.no/v1"},"https://skattemeldingupersonlighendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing slash er fjernet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skattemelding utkast hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemeldingutkasthendelser.api.skatteetaten-test.no/v1"},"https://skattemeldingutkasthendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattemeldingutkasthendelser.api.skatteetaten.no/v1"},"https://skattemeldingutkasthendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing slash er fjernet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skatteoppgj\xf8r hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skatteoppgjoerhendelser.api.skatteetaten-test.no/v1"},"https://skatteoppgjoerhendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skatteoppgjoerhendelser.api.skatteetaten.no/v1"},"https://skatteoppgjoerhendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing slash er fjernet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skatteoppgj\xf8r upersonlig hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skatteoppgjoerupersonlighendelser.api.skatteetaten-test.no/v1"},"https://skatteoppgjoerupersonlighendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skatteoppgjoerupersonlighendelser.api.skatteetaten.no/v1"},"https://skatteoppgjoerupersonlighendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing slash er fjernet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skatteplikt API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skatteplikt.api.skatteetaten-test.no/v2"},"https://skatteplikt.api.skatteetaten-test.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skatteplikt.api.skatteetaten.no/v2"},"https://skatteplikt.api.skatteetaten.no/v2")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skatteplikt upersonlig API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattepliktupersonlig.api.skatteetaten-test.no/v1"},"https://skattepliktupersonlig.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://skattepliktupersonlig.api.skatteetaten.no/v1"},"https://skattepliktupersonlig.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Summert skattegrunnlag API"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke klar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://summertskattegrunnlag.api.skatteetaten-test.no/v1"},"https://summertskattegrunnlag.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://summertskattegrunnlag.api.skatteetaten.no/v1"},"https://summertskattegrunnlag.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Endepunkt uten stadie saneres")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Summert skattegrunnlag upersonlig API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://summertskattegrunnlagupersonlig.api.skatteetaten-test.no/v1"},"https://summertskattegrunnlagupersonlig.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://summertskattegrunnlagupersonlig.api.skatteetaten.no/v1"},"https://summertskattegrunnlagupersonlig.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tilleggsskatt API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tilleggsskatt.api.skatteetaten-test.no/v1"},"https://tilleggsskatt.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tilleggsskatt.api.skatteetaten.no/v1"},"https://tilleggsskatt.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tilleggsskatt hendelser"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tilleggsskatthendelser.api.skatteetaten-test.no/v1"},"https://tilleggsskatthendelser.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tilleggsskatthendelser.api.skatteetaten.no/v1"},"https://tilleggsskatthendelser.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Trailing slash er fjernet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tjenestepensjonsavtale API"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke klar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tjenestepensjonsavtale.api.skatteetaten-test.no/v1"},"https://tjenestepensjonsavtale.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tjenestepensjonsavtale.api.skatteetaten.no/v1"},"https://tjenestepensjonsavtale.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trukket kildeskatt p\xe5 l\xf8nn API"),(0,r.kt)("td",{parentName:"tr",align:null},"Klar i Test og Prod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://trukketkildeskattpaaloenn.api.skatteetaten-test.no/v1"},"https://trukketkildeskattpaaloenn.api.skatteetaten-test.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://trukketkildeskattpaaloenn.api.skatteetaten.no/v1"},"https://trukketkildeskattpaaloenn.api.skatteetaten.no/v1")),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);