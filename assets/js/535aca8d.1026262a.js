"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[2207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,u=m["".concat(o,".").concat(g)]||m[g]||d[g]||i;return n?a.createElement(u,l(l({ref:t},k),{},{components:n})):a.createElement(u,l({ref:t},k))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API",slug:"/api/mvaregisteravgiftssubjekt",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","MVA"],keywords:["mva"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},l=void 0,s={unversionedId:"api/mvaregisteravgiftssubjekt",id:"api/mvaregisteravgiftssubjekt",title:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API",description:"Tjenesten leverer infomasjon fra mva-register om avgiftssubjekter med skatteplikt.",source:"@site/docs/api/mvaregisteravgiftssubjekt.md",sourceDirName:"api",slug:"/api/mvaregisteravgiftssubjekt",permalink:"/api-dokumentasjon/api/mvaregisteravgiftssubjekt",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"MVA",permalink:"/api-dokumentasjon/tags/mva"}],version:"current",frontMatter:{title:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API",slug:"/api/mvaregisteravgiftssubjekt",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","MVA"],keywords:["mva"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Mva-melding API",permalink:"/api-dokumentasjon/api/mvamelding"},next:{title:"N\xe6ringsspesifikasjon API",permalink:"/api-dokumentasjon/api/naeringsspesifikasjon"}},o={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=k("Tabs"),d=k("TabItem"),g={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer infomasjon fra mva-register om avgiftssubjekter med skatteplikt."),(0,r.kt)(m,{underline:!0,mdxType:"Tabs"},(0,r.kt)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/versjoner"},"Versjonering"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:mvaregisteravgiftssubjekt")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-register-avgiftssubjekter-med-skattemeldingsplikt-api/"},"Open API spesifikasjon")," ligger p\xe5 SwaggerHub."),(0,r.kt)("p",null,"I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssb")))),(0,r.kt)("h2",{id:"st\xf8ttetjenester"},"St\xf8ttetjenester"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/api/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API")),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"[Datatjenestebeskrivelse]"," i Felles datakatalog.")),(0,r.kt)(d,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "organisasjonsnummer": "313327337",\n  "registrertAvgiftssubjekt": {\n    "registreringsstatus": "aktiv",\n    "foersteregistreringsdato": "2022-01-01",\n    "skattemeldingsplikt": [\n      {\n        "meldingskategori": "alminnelig",\n        "skattleggingsperiodetype": "toMaaned",\n        "registreringsperiode": {\n          "start": "2022-01-01"\n        },\n        "foersteTermin": {\n          "periode": "januar-februar",\n          "aar": "2022"\n        }\n      }\n    ]\n  }\n}\n'))),(0,r.kt)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MRA-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MRA-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MRA-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MRA-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MRA-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MRA-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MRA-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen treff p\xe5 opgitt organisasjonsnummer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MRA-008"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."))))),(0,r.kt)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,"[Informasjonsmodell]"," i Felles datakatalog. ")),(0,r.kt)(d,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/test/tenor"},"Tenor")," for denne tjenesten, men man kan benytt hendelseslisten for \xe5 finne referanser man kan benytte for \xe5 teste oppslagstjenesten."))))}f.isMDXComponent=!0}}]);