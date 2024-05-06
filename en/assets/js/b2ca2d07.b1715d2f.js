"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(g,i(i({ref:t},k),{},{components:n})):a.createElement(g,i({ref:t},k))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Boligselskap API",slug:"/api/boligselskap",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligselskap"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},i=void 0,o={unversionedId:"api/boligselskap",id:"api/boligselskap",title:"Boligselskap API",description:"Tjenesten brukes til innsending av Boligselskap.",source:"@site/docs/api/boligselskap.md",sourceDirName:"api",slug:"/api/boligselskap",permalink:"/api-dokumentasjon/en/api/boligselskap",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{label:"Boligselskap",permalink:"/api-dokumentasjon/en/tags/boligselskap"}],version:"current",frontMatter:{title:"Boligselskap API",slug:"/api/boligselskap",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligselskap"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0}},p={},s=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Datakatalog",id:"datakatalog",level:2}],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=k("Tabs"),m=k("TabItem"),u={toc:s},g="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten brukes til innsending av Boligselskap."),(0,r.kt)(d,{underline:!0,mdxType:"Tabs"},(0,r.kt)(m,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:boligselskap")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Boligselskap API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons..."),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"Dette API-et er pt. ikke dokumentert i Felles datakatalog.")),(0,r.kt)(m,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Legg inn eksempel\n"))),(0,r.kt)(m,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_008"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Strukturell feil i tilknyttet dataformat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_010"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_011"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_017"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uspesifisert systemfeil")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_019"),(0,r.kt)("td",{parentName:"tr",align:null},"409"),(0,r.kt)("td",{parentName:"tr",align:null},"Idempotensn\xf8kkel er benyttet tidligere")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_021"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Finner ikke forespurt ressurs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_022"),(0,r.kt)("td",{parentName:"tr",align:null},"405"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP-metode ikke st\xf8ttet")))),(0,r.kt)("p",null,"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi feltene."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilspesifiseringskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"),(0,r.kt)("th",{parentName:"tr",align:null},"\xc5rsak"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1022"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i parametre"),(0,r.kt)("td",{parentName:"tr",align:null},"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1023"),(0,r.kt)("td",{parentName:"tr",align:null},"Finner ingen ressurs for denne urlen"),(0,r.kt)("td",{parentName:"tr",align:null},"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1027"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntekts\xe5r er ikke st\xf8ttet"),(0,r.kt)("td",{parentName:"tr",align:null},"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1028"),(0,r.kt)("td",{parentName:"tr",align:null},"Header mangler"),(0,r.kt)("td",{parentName:"tr",align:null},"P\xe5krevd header er ikke med i requesten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1030"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept-header m\xe5 v\xe6re av type application/json"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept header er feil. APIet har kun st\xf8tte for json i response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1047"),(0,r.kt)("td",{parentName:"tr",align:null},"Content type m\xe5 v\xe6re application/json"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-type header er feil. APIet har kun st\xf8tte for json i request body"))))),(0,r.kt)(m,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,"Her kan du legge inn skjermbilde av informasjonsmodell. ")),(0,r.kt)(m,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("p",null,"Her kan du legge inn tekst om test av tjenesten. "))))}f.isMDXComponent=!0}}]);