"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=m(n),k=a,d=p["".concat(o,".").concat(k)]||p[k]||u[k]||s;return n?r.createElement(d,l(l({ref:t},g),{},{components:n})):r.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<s;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},59258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const s={title:"Sammensl\xe5ing av Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API",tags:["nyhet","skatteoppgj\xf8r","skattegrunnlag"],date:new Date("2024-05-28T07:50:00.000Z")},l=void 0,i={permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2024/05/28/summertskattegrunnlag-v2",source:"@site/nyheter-og-driftsvarsler/2024-05-28-summertskattegrunnlag-v2.md",title:"Sammensl\xe5ing av Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API",description:"Skatteetaten sl\xe5r sammen Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API, og alle konsumenter av begge API-ene m\xe5 g\xe5 over p\xe5 versjon 2 av Summert skattegrunnlag API.",date:"2024-05-28T07:50:00.000Z",formattedDate:"28. mai 2024",tags:[{label:"nyhet",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/tags/nyhet"},{label:"skatteoppgj\xf8r",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/tags/skatteoppgjor"},{label:"skattegrunnlag",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/tags/skattegrunnlag"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Sammensl\xe5ing av Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API",tags:["nyhet","skatteoppgj\xf8r","skattegrunnlag"],date:"2024-05-28T07:50:00.000Z"},nextItem:{title:"Varsel om driftshendelser flyttes til Skatteetaten statusside",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2024/05/27/ny-statusside"}},o={authorsImageUrls:[]},m=[],g={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Skatteetaten sl\xe5r sammen Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API, og alle konsumenter av begge API-ene m\xe5 g\xe5 over p\xe5 versjon 2 av Summert skattegrunnlag API.  "),(0,a.kt)("p",null,"Summert skattegrunnlag API versjon 2 er tilgjengelig p\xe5 ny URL i Test, og er om f\xe5 dager ogs\xe5 tilgjengelig i Prod: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test: ",(0,a.kt)("a",{parentName:"li",href:"https://summertskattegrunnlag.api.skatteetaten-test.no/v2"},"https://summertskattegrunnlag.api.skatteetaten-test.no/v2")),(0,a.kt)("li",{parentName:"ul"},"Prod: ",(0,a.kt)("a",{parentName:"li",href:"https://summertskattegrunnlag.api.skatteetaten.no/v2"},"https://summertskattegrunnlag.api.skatteetaten.no/v2"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-api/2.0.0"},"Open API spesifikasjonen")," er oppdatert-\n",(0,a.kt)("a",{parentName:"p",href:"../api/summertskattegrunnlag"},"Dokumentasjon p\xe5 Github er oppdatert")),(0,a.kt)("p",null,"Vi anbefaler at endringen testes f\xf8rst. For konsumenter som ikke har testet p\xe5 en stund, s\xe5 minner vi om \xe5 bruke TEST for token mot Maskinporten, ikke VER2."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For konsumenter som i dag benytter Summert skattegrunnlag API")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Endringene i modellen har en breaking-change for de som har brukt Summert skattegrunnlag API siden feltet "kategori" er endret fra liste til enkeltverdi.'),(0,a.kt)("li",{parentName:"ul"},'Feltet "registreringstidpunkt" har byttet navn til "ajourholdstidspunkt".'),(0,a.kt)("li",{parentName:"ul"},"Modellen utvides med nye felter som gj\xf8res tilgjengelig for konsumenter som har behandlingsgrunnlag for disse opplysningene: andelSkattefritt, andelOverfoertFraBarn, skj\xf8nnsfastsatt, svalbardSkj\xf8nnsfastsatt"),(0,a.kt)("li",{parentName:"ul"},"Inntekts\xe5r 2016 er ikke lengre st\xf8ttet."),(0,a.kt)("li",{parentName:"ul"},'{stadie} er n\xe5 en obligatorisk del av URL. Konsumenter som hittil ikke har oppgitt stadie skal benytte stadie "oppgjoer". Eksempel p\xe5 sti i Prod blir da: ',(0,a.kt)("a",{parentName:"li",href:"https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/%7Brettighetspakke%7D/%7Binntektsaar%7D/%7Bpersonidentifikator%7D"},"https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/{rettighetspakke}/{inntektsaar}/{personidentifikator}"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For konsumenter som i dag benytter Spesifisert summert skattegrunnlag API")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Endringene i modellen er non-breaking-change og bakoverkompatibel for de som har brukt Spesifisert summert skattegrunnlag API med JSON."),(0,a.kt)("li",{parentName:"ul"},"Konsumenter som har benyttet XML vil f\xe5 et nytt namespace: summertskattegrunnlag"),(0,a.kt)("li",{parentName:"ul"},"Scopet skatteetaten:spesifisertsummertskattegrunnlag kan fremdeles benyttes, men man kan ogs\xe5 ta i bruk skatteetaten:summertskattegrunnlag."),(0,a.kt)("li",{parentName:"ul"},'Feltet "registreringstidpunkt" har byttet navn til "ajourholdstidspunkt".'),(0,a.kt)("li",{parentName:"ul"},"Modellen utvides med nye felter som gj\xf8res tilgjengelig for konsumenter som har behandlingsgrunnlag for disse opplysningene: andelSkattefritt, andelOverfoertFraBarn"),(0,a.kt)("li",{parentName:"ul"},'{stadie} er n\xe5 en obligatorisk del av URL. Konsumenter som hittil ikke har oppgitt stadie skal benytte stadie "oppgjoer". Eksempel p\xe5 sti i Prod blir da: ',(0,a.kt)("a",{parentName:"li",href:"https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/%7Brettighetspakke%7D/%7Binntektsaar%7D/%7Bpersonidentifikator%7D"},"https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/{rettighetspakke}/{inntektsaar}/{personidentifikator}"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sanering av eksisterende tjenester")),(0,a.kt)("p",null,"Saneringen av Summert skattegrunnlag API V1 og Spesifisert summert skattegrunnlag API vil sammenfalle med sanering av de gamle ",(0,a.kt)("a",{parentName:"p",href:"https://skatteetaten.github.io/api-dokumentasjon/om/url"},"URL-ene"),", og frist vil varsles snart."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.skatteetaten.no/deling/kontakt/"},"Kontakt Skatteetaten")," p\xe5 vanlig m\xe5te dersom du har sp\xf8rsm\xe5l til endringen. Konsumenter som er omfattet av et segmentsamarbeid bes kontakte egen segmentansvarlig."))}u.isMDXComponent=!0}}]);