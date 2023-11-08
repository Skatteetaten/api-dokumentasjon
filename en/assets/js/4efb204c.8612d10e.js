"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},k=Object.keys(e);for(a=0;a<k.length;a++)n=k[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(e);for(a=0;a<k.length;a++)n=k[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,k=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,g=p["".concat(o,".").concat(u)]||p[u]||d[u]||k;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var k=n.length,s=new Array(k);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<k;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>k,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const k={title:"Samtykke",slug:"/om/samtykke",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["Samtykke","Sikkerhet"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},s=void 0,i={unversionedId:"om/samtykke",id:"om/samtykke",title:"Samtykke",description:"Skatteetaten tilbyr samtykkebasert datauthenting basert p\xe5 Altinn sin l\xf8sning for digitalt samtykke.",source:"@site/docs/om/samtykke.md",sourceDirName:"om",slug:"/om/samtykke",permalink:"/api-dokumentasjon/en/om/samtykke",draft:!1,tags:[{label:"Samtykke",permalink:"/api-dokumentasjon/en/tags/samtykke"},{label:"Sikkerhet",permalink:"/api-dokumentasjon/en/tags/sikkerhet"}],version:"current",frontMatter:{title:"Samtykke",slug:"/om/samtykke",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["Samtykke","Sikkerhet"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Rettighetspakker",permalink:"/api-dokumentasjon/en/om/rettighetspakker"},next:{title:"Sikkerhet",permalink:"/api-dokumentasjon/en/om/sikkerhet"}},o={},l=[{value:"F\xe5 tilgang",id:"f\xe5-tilgang",level:2},{value:"Be om samtykke",id:"be-om-samtykke",level:2},{value:"Tjenester med st\xf8tte for samtykke",id:"tjenester-med-st\xf8tte-for-samtykke",level:2}],m=(p="InfoMessageBar",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const d={toc:l},u="wrapper";function g(e){let{components:t,...k}=e;return(0,r.kt)(u,(0,a.Z)({},d,k,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null," Skatteetaten tilbyr samtykkebasert datauthenting basert p\xe5 Altinn sin l\xf8sning for digitalt samtykke."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(60748).Z},(0,r.kt)("img",{alt:"illustrasjon av samtykkeprosessen",src:n(17938).Z,width:"1249",height:"676"}))),(0,r.kt)("h2",{id:"f\xe5-tilgang"},"F\xe5 tilgang"),(0,r.kt)("p",null,"F\xf8r du som konsument kan benytte Skatteetaten API'er som krever samtykke eller fullmakt m\xe5 du f\xe5 tilgang til Altinn's samtykkel\xf8sning. Altinn har beskrevet det som skal til for \xe5 ",(0,r.kt)("a",{parentName:"p",href:"https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/komme-i-gang"},"komme i gang med samtykke"),". Skatteetaten er her datakilden og har p\xe5 forh\xe5nd opprettet tjenestekoder og tjenesteutgavekoder for api'ene. N\xe6rmere informasjon om dette finner du i api-dokumentasjonen. Merk at Skatteetaten ikke benytter tjenesteeierstyrt rettighetsregister."),(0,r.kt)("h2",{id:"be-om-samtykke"},"Be om samtykke"),(0,r.kt)("p",null,"N\xe5r du har f\xe5tt tilgang til Altinn's samtykkel\xf8sning og API'et til Skatteetaten kan det ",(0,r.kt)("a",{parentName:"p",href:"https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/be-om-samtykke"},"bes om samtykke"),". Skatteetaten st\xf8tter kun ",(0,r.kt)("em",{parentName:"p"},"Forh\xe5ndsregistrerte samtykkeforesp\xf8rsler")," og det er heller ikke mulig \xe5 overstyre de forh\xe5ndsdefinerte tekstene. ",(0,r.kt)("em",{parentName:"p"},"Request Message")," skal derfor ikke benyttes i foresp\xf8rselen. "),(0,r.kt)("p",null,"Den overordnetete flyten for samtykkedialogen blir da som f\xf8lger:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Bruker logger seg p\xe5 nettl\xf8sningen for \xe5 f.eks. s\xf8ke om l\xe5n eller se sine Krav og betalinger. Konsumenter m\xe5 dermed ha et samtykke eller fullmakt for \xe5 innhente opplysninger p\xe5 vegne av brukeren.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Konsument innhenter samtykket ved \xe5 sende en samtykkeforesp\xf8rsel for bruker til Altinn med ",(0,r.kt)("em",{parentName:"p"},"ServiceCode")," og ",(0,r.kt)("em",{parentName:"p"},"ServiceCodeEdition")," for de aktuelle tjenestene og mottar en ",(0,r.kt)("em",{parentName:"p"},"AuthorizationCode"),". Dersom det allerede foreligger et gyldig samtykke som er innenfor utl\xf8pstiden (f.eks. 90 dager for ",(0,r.kt)("em",{parentName:"p"},"Krav og betalinger"),"), fortsetter flyten i steg 6.  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Konsument sender deretter brukeren til samtykkesiden hos Altinn med ",(0,r.kt)("em",{parentName:"p"},"Authorization Code")," fra samtykkeforesp\xf8rselen og en ",(0,r.kt)("em",{parentName:"p"},"RedirectURL"),", som er en lenke til siden brukeren skal sendes tilbake til etter at samtykket er gitt.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Brukeren blir presentert for samtykkesiden som inneholder en beskrivelse av hva det skal gis samtykke til. Det er Skatteetaten som har definert dette innholdet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Brukeren gir samtykke og sendes tilbake til konsumentens nettsider p\xe5 ",(0,r.kt)("em",{parentName:"p"},"Redirect URL'en")," som ble oppgitt.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Konsument ",(0,r.kt)("a",{parentName:"p",href:"https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/hente-token"},"henter et Samtykketoken")," fra Altinn ved bruk av ",(0,r.kt)("em",{parentName:"p"},"Authorization Code"),". Samtykketokenet har vanligvis utl\xf8pstid p\xe5 30 sekunder, men kan innhentes p\xe5 nytt med samme ",(0,r.kt)("em",{parentName:"p"},"AuthorizationCode")," s\xe5 lenge samtykket fortsatt er gyldig.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Konsument sender med samtykketokenet i foresp\xf8rslene til api'et gjennom \xe5 sette en HTTP-headerverdi: ",(0,r.kt)("inlineCode",{parentName:"p"},"AltinnSamtykke: <samtykketoken>"),". Foresp\xf8rselen m\xe5 ogs\xe5 inneholde et ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/sikkerhet"},"Maskinporten-token"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Skatteetaten sjekker Maskinporten- og Samtykketoken og utleverer dataene."))),(0,r.kt)(m,{mdxType:"InfoMessageBar"},(0,r.kt)("p",null,"Samtykkedialogen kan ikke innpakkes i en iFrame eller annen branding som er egnet til \xe5 utydeliggj\xf8re domenet samtykkedialogen foreg\xe5r p\xe5 (som er altinn + idporten). Dette er begrunnet med et potensielt misbruksscenario beskrevet i ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/draft-ietf-oauth-v2-23#section-10.13"},"OAuth2-spesifikasjonen")," (clickjacking)")),(0,r.kt)("h2",{id:"tjenester-med-st\xf8tte-for-samtykke"},"Tjenester med st\xf8tte for samtykke"),(0,r.kt)("p",null,"F\xf8lgende api'er hos Skatteetaten st\xf8tter utlevering gjennom samtykke eller fullmakt. Detaljer om parameterne som er n\xf8dvendig for \xe5 f\xe5 utstedt samtykker eller fullmakt er beskrevet i dokumentasjonen for hvert enkelt api."),(0,r.kt)("p",null,"Samtykke fra skatteyter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/api/inntekt"},"Inntekt API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/api/spesifisertsummertskattegrunnlag"},"Spesifisert summert skattegrunnlag API"))),(0,r.kt)("p",null,"Samtykke fra virksomhet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/api/kravogbetalinger"},"Krav og betalinger API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/api/arbeidsgiveravgift"},"Arbeidsgiveravgift API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/api/mva_meldingsopplysning"},"Mva meldingsopplysning API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/api/oppdragutenlandskevirksomheter"},"Oppdrag utenlanske virksomheter API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/api/restanser"},"Restanser API"))),(0,r.kt)("p",null,"Se egen dokumentasjon for ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/test/testavsamtykke"},"hvordan teste med samtykke"),"."))}g.isMDXComponent=!0},60748:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/samtykke-30129d9cf8a5f23caed1f5596aa7d6e4.png"},17938:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/samtykke-30129d9cf8a5f23caed1f5596aa7d6e4.png"}}]);