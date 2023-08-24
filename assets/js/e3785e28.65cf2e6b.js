"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[7550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),k=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=k(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=k(n),m=r,u=d["".concat(s,".").concat(m)]||d[m]||g[m]||l;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var a=n(7462),r=(n(7294),n(3905));const l={title:"Pensjonsgivende inntekt for folketrygden API",slug:"/api/pgi_folketrygden",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["pgi","folketrygden","skatteberegning","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,o={unversionedId:"api/pgi_folketrygden",id:"api/pgi_folketrygden",title:"Pensjonsgivende inntekt for folketrygden API",description:"Tjenesten leverer informasjon om grunnlag for pensjonsopptjening i folketrygden.",source:"@site/docs/api/pgi_folketrygden.md",sourceDirName:"api",slug:"/api/pgi_folketrygden",permalink:"/api-dokumentasjon/api/pgi_folketrygden",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"Skatteoppgj\xf8r",permalink:"/api-dokumentasjon/tags/skatteoppgjor"}],version:"current",frontMatter:{title:"Pensjonsgivende inntekt for folketrygden API",slug:"/api/pgi_folketrygden",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["pgi","folketrygden","skatteberegning","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Pensjonsgivende inntekt API",permalink:"/api-dokumentasjon/api/pgi"},next:{title:"Restanser API",permalink:"/api-dokumentasjon/api/restanser"}},s={},k=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Rotobjekt",id:"rotobjekt",level:2},{value:"Objekt i pensjonsgivendeInntekt-listen",id:"objekt-i-pensjonsgivendeinntekt-listen",level:2},{value:"Informasjonsmodell - skjema",id:"informasjonsmodell---skjema",level:2},{value:"Oversikt",id:"oversikt",level:3},{value:"XML skjema",id:"xml-skjema",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("Tabs"),g=p("TabItem"),m={toc:k},u="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer informasjon om grunnlag for pensjonsopptjening i folketrygden."),(0,r.kt)(d,{underline:!0,mdxType:"Tabs"},(0,r.kt)(g,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/rettighetspakker"},"Rettighetspakker")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:pensjonsgivendeinntektforfolketrygden")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Pensjonsgivende inntekt for folketrygden API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"Url\u2019er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/pensjonsgivende-inntekt-for-folketrygden-hendelser-api"},"Open API spesifikasjonen")," p\xe5 SwaggerHub.\nTjenesten st\xf8tter inntekts\xe5r 2017 og utover."),(0,r.kt)("h2",{id:"st\xf8ttetjenester"},"St\xf8ttetjenester"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/api/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Pensjonsgivende inntekt for folketrygden hendelser API")),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"Dette api'et er pt. ikke dokumentert i Felles datakatalog.")),(0,r.kt)(g,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"curl"},"Curl"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 generere et gyldig ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/sikkerhet"},"Maskinporten"),"-token og legge til i header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/pensjonsgivendeinntektforfolketrygden/2022/08819797596"\n')),(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "norskPersonidentifikator": "02116049964",\n    "inntektsaar": 2019,\n    "pensjonsgivendeInntekt": [\n        {\n            "skatteordning": "FASTLAND",\n            "datoForFastsetting": "2020-09-27",\n            "pensjonsgivendeInntektAvLoennsinntekt": 698219,\n            "pensjonsgivendeInntektAvLoennsinntektBarePensjonsdel": null,\n            "pensjonsgivendeInntektAvNaeringsinntekt": 150000,\n            "pensjonsgivendeInntektAvNaeringsinntektFraFiskeFangstEllerFamiliebarnehage": 85000\n        },\n        {\n            "skatteordning": "SVALBARD",\n            "datoForFastsetting": "2020-09-27",\n            "pensjonsgivendeInntektAvLoennsinntekt": 492160,\n            "pensjonsgivendeInntektAvLoennsinntektBarePensjonsdel": null,\n            "pensjonsgivendeInntektAvNaeringsinntekt": 2530000,\n            "pensjonsgivendeInntektAvNaeringsinntektFraFiskeFangstEllerFamiliebarnehage": null\n        }\n    ]\n}\n'))),(0,r.kt)(g,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP status"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilmelding"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"PGIF-005"),(0,r.kt)("td",{parentName:"tr",align:null},"Det forespurte inntekts\xe5ret er ikke st\xf8ttet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"PGIF-006"),(0,r.kt)("td",{parentName:"tr",align:null},"Fant ikke PGI for gitt inntekts\xe5r og identifikator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"PGIF-007"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntekts\xe5r har ikke gyldig format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"PGIF-008"),(0,r.kt)("td",{parentName:"tr",align:null},"Personidentifikator har ikke gyldig format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"PGIF-009"),(0,r.kt)("td",{parentName:"tr",align:null},"Fant ingen person for gitt identifikator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"PGIF-010"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"PGIF-011"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json st\xf8ttet."))))),(0,r.kt)(g,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,"JSON-objektet er basert p\xe5 et XML-dokument med et tilknyttet skjema."),(0,r.kt)("h2",{id:"rotobjekt"},"Rotobjekt"),(0,r.kt)("p",null,"Rotobjektet vil alltid returneres ved en positiv repons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 felt"),(0,r.kt)("th",{parentName:"tr",align:null},"JSON-type"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"personidentifikator"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Gjeldende personidentifikator for personen det ble s\xf8kt p\xe5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inntektsaar"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntekts\xe5ret det ble s\xf8kt p\xe5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pensjonsgivendeInntekt"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"En liste med ",(0,r.kt)("a",{parentName:"td",href:"#objekt-i-pensjonsgivendeinntekt-listen"},"objekter av pensjonsgivende inntekt"))))),(0,r.kt)("h2",{id:"objekt-i-pensjonsgivendeinntekt-listen"},"Objekt i pensjonsgivendeInntekt-listen"),(0,r.kt)("p",null,"Definerer objektet som kan ligge i listen pensjonsgivendeInntekt i ",(0,r.kt)("a",{parentName:"p",href:"#rotobjekt"},"rotobjektet")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 felt"),(0,r.kt)("th",{parentName:"tr",align:null},"JSON-type"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skatteordning"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Skatteordningen det leveres data for. Gyldige verdier er: ","[FASTLAND, SVALBARD, KILDESKATT_PAA_LOENN]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datoForFastsetting"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Dato for fastsetting. Gyldig format ","[YYYY-MM-DD]"," (ISO 8601 datoformat)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pensjonsgivendeInntektAvLoennsinntekt"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Pensjonsgivende l\xf8nnsinntekt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pensjonsgivendeInntektAvLoennsinntektBarePensjonsdel"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Pensjonsgivende l\xf8nnsinntekt, bare pensjonsdel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pensjonsgivendeInntektAvNaeringsinntekt"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Pensjonsgivende inntekt av n\xe6ringsinntekt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pensjonsgivendeInntektAvNaeringsinntektFraFiskeFangstEllerFamiliebarnehage"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Pensjonsgivende inntekt av n\xe6ringsinntekt fra fiske, fangst eller familiebarnehage")))),(0,r.kt)("h2",{id:"informasjonsmodell---skjema"},"Informasjonsmodell - skjema"),(0,r.kt)("h3",{id:"oversikt"},"Oversikt"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(3973).Z},(0,r.kt)("img",{alt:"Oversikt",src:n(602).Z,width:"1177",height:"697"}))),(0,r.kt)("h3",{id:"xml-skjema"},"XML skjema"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(8563).Z},"pensjonsgivendeinntektforfolketrygden_nav_overfoering_v1.xsd")," ")),(0,r.kt)(g,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Testdata for tjenesten kan finnes i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/test/tenor"},"Tenor"),' med s\xf8ket for "Beregnet skatt".'))))}f.isMDXComponent=!0},8563:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/pensjonsgivendeinntektforfolketrygden_nav_overfoering_v1-3e4c883a7a24da170e9fac0e87d1d9bb.xsd"},3973:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/pgi-folketrygden-a45e6316f01eb4ae678d5df6b143ea23.png"},602:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pgi-folketrygden-a45e6316f01eb4ae678d5df6b143ea23.png"}}]);