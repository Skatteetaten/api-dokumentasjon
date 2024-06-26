"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8033],{12674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var s=n(74848),r=n(28453);const a={title:"Sammensl\xe5ing av Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API",tags:["nyhet","skatteoppgj\xf8r","skattegrunnlag","summertskattegrunnlag"],date:new Date("2024-05-28T07:50:00.000Z")},i=void 0,l={permalink:"/api-dokumentasjon/en/nyheter-og-driftsvarsler/2024/05/28/summertskattegrunnlag-v2",source:"@site/nyheter-og-driftsvarsler/2024-05-28-summertskattegrunnlag-v2.md",title:"Sammensl\xe5ing av Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API",description:"Skatteetaten sl\xe5r sammen Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API, og alle konsumenter av begge API-ene m\xe5 g\xe5 over p\xe5 versjon 2 av Summert skattegrunnlag API.",date:"2024-05-28T07:50:00.000Z",tags:[{inline:!0,label:"nyhet",permalink:"/api-dokumentasjon/en/nyheter-og-driftsvarsler/tags/nyhet"},{inline:!0,label:"skatteoppgj\xf8r",permalink:"/api-dokumentasjon/en/nyheter-og-driftsvarsler/tags/skatteoppgjor"},{inline:!0,label:"skattegrunnlag",permalink:"/api-dokumentasjon/en/nyheter-og-driftsvarsler/tags/skattegrunnlag"},{inline:!0,label:"summertskattegrunnlag",permalink:"/api-dokumentasjon/en/nyheter-og-driftsvarsler/tags/summertskattegrunnlag"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Sammensl\xe5ing av Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API",tags:["nyhet","skatteoppgj\xf8r","skattegrunnlag","summertskattegrunnlag"],date:"2024-05-28T07:50:00.000Z"},unlisted:!1,prevItem:{title:"Varsel om sanering av gamle URL-er, Spesifisert summert skattegrunnlag API og Summert skattegrunnlag API V1",permalink:"/api-dokumentasjon/en/nyheter-og-driftsvarsler/2024/05/31/sanering"},nextItem:{title:"Varsel om driftshendelser flyttes til Skatteetaten statusside",permalink:"/api-dokumentasjon/en/nyheter-og-driftsvarsler/2024/05/27/ny-statusside"}},o={authorsImageUrls:[]},g=[];function m(e){const t={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Skatteetaten sl\xe5r sammen Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API, og alle konsumenter av begge API-ene m\xe5 g\xe5 over p\xe5 versjon 2 av Summert skattegrunnlag API."}),"\n",(0,s.jsx)(t.p,{children:"Summert skattegrunnlag API versjon 2 er tilgjengelig p\xe5 ny URL i Test, og er om f\xe5 dager ogs\xe5 tilgjengelig i Prod:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Test: ",(0,s.jsx)(t.a,{href:"https://summertskattegrunnlag.api.skatteetaten-test.no/v2",children:"https://summertskattegrunnlag.api.skatteetaten-test.no/v2"})]}),"\n",(0,s.jsxs)(t.li,{children:["Prod: ",(0,s.jsx)(t.a,{href:"https://summertskattegrunnlag.api.skatteetaten.no/v2",children:"https://summertskattegrunnlag.api.skatteetaten.no/v2"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-api/2.0.0",children:"Open API spesifikasjonen"})," er oppdatert-\n",(0,s.jsx)(t.a,{href:"../api/summertskattegrunnlag",children:"Dokumentasjon p\xe5 Github er oppdatert"})]}),"\n",(0,s.jsx)(t.p,{children:"Vi anbefaler at endringen testes f\xf8rst. For konsumenter som ikke har testet p\xe5 en stund, s\xe5 minner vi om \xe5 bruke TEST for token mot Maskinporten, ikke VER2."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"For konsumenter som i dag benytter Summert skattegrunnlag API"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Endringene i modellen har en breaking-change for de som har brukt Summert skattegrunnlag API siden feltet "kategori" er endret fra liste til enkeltverdi.'}),"\n",(0,s.jsx)(t.li,{children:'Feltet "registreringstidpunkt" har byttet navn til "ajourholdstidspunkt".'}),"\n",(0,s.jsx)(t.li,{children:"Modellen utvides med nye felter som gj\xf8res tilgjengelig for konsumenter som har behandlingsgrunnlag for disse opplysningene: andelSkattefritt, andelOverfoertFraBarn, skj\xf8nnsfastsatt, svalbardSkj\xf8nnsfastsatt"}),"\n",(0,s.jsx)(t.li,{children:"Inntekts\xe5r 2016 er ikke lengre st\xf8ttet."}),"\n",(0,s.jsxs)(t.li,{children:['{stadie} er n\xe5 en obligatorisk del av URL. Konsumenter som hittil ikke har oppgitt stadie skal benytte stadie "oppgjoer". Eksempel p\xe5 sti i Prod blir da: ',(0,s.jsx)(t.a,{href:"https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/%7Brettighetspakke%7D/%7Binntektsaar%7D/%7Bpersonidentifikator%7D",children:"https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/{rettighetspakke}/{inntektsaar}/{personidentifikator}"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"For konsumenter som i dag benytter Spesifisert summert skattegrunnlag API"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Endringene i modellen er non-breaking-change og bakoverkompatibel for de som har brukt Spesifisert summert skattegrunnlag API med JSON."}),"\n",(0,s.jsx)(t.li,{children:"Konsumenter som har benyttet XML vil f\xe5 et nytt namespace: summertskattegrunnlag"}),"\n",(0,s.jsxs)(t.li,{children:["Scopet skatteetaten",":spesifisertsummertskattegrunnlag"," kan fremdeles benyttes, men man kan ogs\xe5 ta i bruk skatteetaten",":summertskattegrunnlag","."]}),"\n",(0,s.jsx)(t.li,{children:'Feltet "registreringstidpunkt" har byttet navn til "ajourholdstidspunkt".'}),"\n",(0,s.jsx)(t.li,{children:"Modellen utvides med nye felter som gj\xf8res tilgjengelig for konsumenter som har behandlingsgrunnlag for disse opplysningene: andelSkattefritt, andelOverfoertFraBarn"}),"\n",(0,s.jsxs)(t.li,{children:['{stadie} er n\xe5 en obligatorisk del av URL. Konsumenter som hittil ikke har oppgitt stadie skal benytte stadie "oppgjoer". Eksempel p\xe5 sti i Prod blir da: ',(0,s.jsx)(t.a,{href:"https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/%7Brettighetspakke%7D/%7Binntektsaar%7D/%7Bpersonidentifikator%7D",children:"https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/{rettighetspakke}/{inntektsaar}/{personidentifikator}"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Sanering av eksisterende tjenester"})}),"\n",(0,s.jsxs)(t.p,{children:["Saneringen av Summert skattegrunnlag API V1 og Spesifisert summert skattegrunnlag API vil sammenfalle med sanering av de gamle ",(0,s.jsx)(t.a,{href:"https://skatteetaten.github.io/api-dokumentasjon/om/url",children:"URL-ene"}),", og frist vil varsles snart."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.skatteetaten.no/deling/kontakt/",children:"Kontakt Skatteetaten"})," p\xe5 vanlig m\xe5te dersom du har sp\xf8rsm\xe5l til endringen. Konsumenter som er omfattet av et segmentsamarbeid bes kontakte egen segmentansvarlig."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);