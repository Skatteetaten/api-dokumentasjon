"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),k=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return a.createElement(s.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=k(n),g=r,u=o["".concat(s,".").concat(g)]||o[g]||d[g]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[o]="string"==typeof e?e:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(87462),r=(n(67294),n(3905));const l={title:"Boligselskap API",slug:"/api/boligselskap",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligselskap"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},i=void 0,p={unversionedId:"api/boligselskap",id:"api/boligselskap",title:"Boligselskap API",description:"Tjeneste for innrapportering av tredjepartsopplysninger for boligselskap.",source:"@site/docs/api/boligselskap.md",sourceDirName:"api",slug:"/api/boligselskap",permalink:"/api-dokumentasjon/api/boligselskap",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"Boligselskap",permalink:"/api-dokumentasjon/tags/boligselskap"}],version:"current",frontMatter:{title:"Boligselskap API",slug:"/api/boligselskap",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligselskap"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Boligsameie API",permalink:"/api-dokumentasjon/api/boligsameie"},next:{title:"Boligsparing for ungdom API",permalink:"/api-dokumentasjon/api/bsu"}},s={},k=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Systemtilgang",id:"systemtilgang",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Parameter: idempotencyKey",id:"parameter-idempotencykey",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Innsending",id:"innsending",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"JSON",id:"json",level:3},{value:"Eksempel p\xe5 innsending",id:"eksempel-p\xe5-innsending",level:4},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:4},{value:"Testmilj\xf8er",id:"testmilj\xf8er",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:3},{value:"Testdata",id:"testdata",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},o=m("Tabs"),d=m("TabItem"),g={toc:k},u="wrapper";function v(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjeneste for innrapportering av tredjepartsopplysninger for boligselskap."),(0,r.kt)(o,{underline:!0,mdxType:"Tabs"},(0,r.kt)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/systemtilgang"},"Systemtilgang")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:innrapporteringboligselskap")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. "),(0,r.kt)("h2",{id:"systemtilgang"},"Systemtilgang"),(0,r.kt)("p",null,"Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir.\nInformasjon vedr. dette finnes ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/systemtilgang"},"her"),"."),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen p\xe5\n",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/skatteetaten/boligselskap-api/0.0.1"},"SwaggerHub")),(0,r.kt)("p",null,"Oppbygning av URL-er og \xe5pninger i en evt. brannmur er beskrevet her ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/url"},"URL-er")),(0,r.kt)("p",null,"API-et for boligselskap har bare ett endepunkt:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"POST innsending"),": Mottar tredjepartsopplysninger for boligselskaper. Ett kall mot API-et er en rapportering for et\nboligselskap gitt av en oppgavegiver og som gjelder et inntekts\xe5r.")),(0,r.kt)("p",null,"API-et validerer mottatte data mot JSON schema beskrevet p\xe5 SwaggerHub. Se ",(0,r.kt)("a",{parentName:"p",href:"boligselskap?tab=Feilkoder"},"feilkoder")," for\nrelaterte feilmeldinger."),(0,r.kt)("p",null,"Se ogs\xe5 ",(0,r.kt)("a",{parentName:"p",href:"boligselskap?tab=Eksempler"},"eksempler")," for de ulike endepunktene."),(0,r.kt)("h3",{id:"parameter-idempotencykey"},"Parameter: idempotencyKey"),(0,r.kt)("p",null,"idempotencyKey parameteren er p\xe5krevet. Innholdet skal v\xe6re en unik UUID. Hvert nye kall til API-et skal ha en\ntilsvarende ny idempotencyKey. Flere etterf\xf8lgende POST kall med samme request-body og samme idempotencyKey vil gi den\nsamme responsen. Kun det f\xf8rste av denne rekken med like API kall vil behandles. IdempotencyKey muliggj\xf8r at man trygt\nkan pr\xf8ve innsendinger p\xe5 nytt der man av ulike \xe5rsaker ikke har f\xe5tt en tilbakemelding fra API-et."),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"Dette API-et er pt. ikke dokumentert i Felles datakatalog.")),(0,r.kt)(d,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"innsending"},"Innsending"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://innrapporteringboligselskap.api.{env}.no/v1/{inntektsaar}\n")),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("h4",{id:"eksempel-p\xe5-innsending"},"Eksempel p\xe5 innsending"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "leveranse": [\n    {\n      "oppgavegiversLeveranseReferanse": "Leveranse-1",\n      "inntektsaar": 2023,\n      "oppgavegiver": {\n        "organisasjonsnummer": "932061899",     \n        "kontaktinformasjon": {\n          "navn": "Realt Testutvikling",\n          "telefonnummer": "00000000",\n          "varselEpostadresse": "anonym.varsel@skatteetaten.no",\n          "varselSmsMobilnummer": "00000000"\n        }\n      },\n      "oppgaveoppsummering": {\n        "antallOppgaver": 2,\n        "sumAndelLikningsverdiBoenhet": 70000,\n        "sumAndelSkattepliktigeInntekter": 2500,\n        "sumAndelFradragsberettigedeKostnader": 0,\n        "sumAndelFormue": 1500,\n        "sumAndelGjeld": 39500\n      },\n      "leveransetype": "ordinaer",\n      "kildesystem": "SBS-1",\n      "oppgave": [\n        {\n          "oppgaveeier": {\n            "foedselsnummer": "00000000000",\n            "navn": "LJILJANA BORLAUG"\n          },\n          "eiertid": {\n            "start": "0101",\n            "slutt": "3112"\n          },\n          "eierandel": {\n            "eierandelTeller": 2,\n            "eierandelNevner": 10\n          },\n          "boenhet": {\n            "aksjeboenhetsnummer": 11,\n            "kommunenummer": "0301",\n            "bolignummer": "U1111",\n            "gatenavnOgHusnummer": "\xd8vre Sveig 799 \xc5"\n          },\n          "bruksoverlatt": false,\n          "andelLikningsverdiBoenhet": 20000,\n          "andelSkattepliktigeInntekter": 1000,\n          "andelFradragsberettigedeKostnader": 1500,\n          "andelFormue": 135183,\n          "andelGjeld": 6500,\n          "boligselskapsFormaal": "bolig"\n        },\n        {\n          "oppgaveeier": {\n            "foedselsnummer": "00000000000",\n            "navn": "ODD TORE JOSEPH"\n          },\n          "eiertid": {\n            "start": "0101",\n            "slutt": "3112"\n          },\n          "eierandel": {\n            "eierandelTeller": 8,\n            "eierandelNevner": 10\n          },\n          "boenhet": {\n            "aksjeboenhetsnummer": 11,\n            "kommunenummer": "0301",\n            "bolignummer": "U1111",\n            "gatenavnOgHusnummer": "\xd8vre Sveig 799 \xc5"\n          },\n          "bruksoverlatt": false,\n          "andelLikningsverdiBoenhet": 50000,\n          "andelSkattepliktigeInntekter": 1500,\n          "andelFradragsberettigedeKostnader": 0,\n          "andelFormue": 540731,\n          "andelGjeld": 33000,\n          "boligselskapsFormaal": "bolig"\n        }\n      ],\n      "sletteoppgave": []\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"eksempel-p\xe5-respons"},"Eksempel p\xe5 respons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",\n  "dialogelementId": "018f5297-fde1-7301-af34-df1bc3fff6b5",\n  "oppgavegiversLeveranseReferanse": "leveranse-1",\n  "antallOppgaver": 11\n}\n'))),(0,r.kt)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_008"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Strukturell feil i tilknyttet dataformat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_010"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_011"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_017"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uspesifisert systemfeil")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_019"),(0,r.kt)("td",{parentName:"tr",align:null},"409"),(0,r.kt)("td",{parentName:"tr",align:null},"Idempotensn\xf8kkel er benyttet tidligere")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_021"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Finner ikke forespurt ressurs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_022"),(0,r.kt)("td",{parentName:"tr",align:null},"405"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP-metode ikke st\xf8ttet")))),(0,r.kt)("p",null,"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi\nfeltene."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilspesifiseringskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"),(0,r.kt)("th",{parentName:"tr",align:null},"\xc5rsak"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1022"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i parametre"),(0,r.kt)("td",{parentName:"tr",align:null},"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1023"),(0,r.kt)("td",{parentName:"tr",align:null},"Finner ingen ressurs for denne urlen"),(0,r.kt)("td",{parentName:"tr",align:null},"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1027"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntekts\xe5r er ikke st\xf8ttet"),(0,r.kt)("td",{parentName:"tr",align:null},"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1028"),(0,r.kt)("td",{parentName:"tr",align:null},"Header mangler"),(0,r.kt)("td",{parentName:"tr",align:null},"P\xe5krevd header er ikke med i requesten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1030"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept-header m\xe5 v\xe6re av type application/json"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept header er feil. APIet har kun st\xf8tte for json i response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1047"),(0,r.kt)("td",{parentName:"tr",align:null},"Content type m\xe5 v\xe6re application/json"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-type header er feil. APIet har kun st\xf8tte for json i request body"))))),(0,r.kt)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"informasjonsmodell",src:n(67128).Z,width:"1377",height:"1092"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Eier"),(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Dokumentasjon"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boenhet"),(0,r.kt)("td",{parentName:"tr",align:null},"aksjeboenhetsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boenhet"),(0,r.kt)("td",{parentName:"tr",align:null},"andelsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boenhet"),(0,r.kt)("td",{parentName:"tr",align:null},"bolignummer"),(0,r.kt)("td",{parentName:"tr",align:null},"En bokstav og fire siffer som entydig identifiserer den enkelte bruksenheten innenfor en adresserbar bygning eller bygningsdel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boenhet"),(0,r.kt)("td",{parentName:"tr",align:null},"gatenavnOgHusnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Navn p\xe5 gate og husnummer for boenheten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boenhet"),(0,r.kt)("td",{parentName:"tr",align:null},"kommunenummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Nummer p\xe5 kommunen boenheten tilh\xf8rer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Eierandel"),(0,r.kt)("td",{parentName:"tr",align:null},"eierandelNevner"),(0,r.kt)("td",{parentName:"tr",align:null},"Nevner i eierandelsbr\xf8ken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Eierandel"),(0,r.kt)("td",{parentName:"tr",align:null},"eierandelTeller"),(0,r.kt)("td",{parentName:"tr",align:null},"Teller i eierandelsbr\xf8ken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"boligselskapForm\xe5l"),(0,r.kt)("td",{parentName:"tr",align:null},'Boligselskapets form\xe5l. Denne m\xe5 spesifiseres enten p\xe5 leveransen, eller oppgaven. Dersom den blir satt i begge vil boligform\xe5let for oppgaven v\xe6re gjeldende. Verdien skal v\xe6re en av "bolig", "fritidsbolig", "fritidsboligUtland eller "ikkeBolig" (Brukes f.eks. for garasjelag)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"inntekts\xe5r"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntekts\xe5ret leveransen gjelder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"kildesystem"),(0,r.kt)("td",{parentName:"tr",align:null},"System brukt for \xe5 levere oppgaven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"leveransetype"),(0,r.kt)("td",{parentName:"tr",align:null},"type av leveranse som angir om leveransen inneholder ordin\xe6re oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver \xe5 innrapportere")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgave"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgave som leveres")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgavegiver"),(0,r.kt)("td",{parentName:"tr",align:null},"Tredjepart som rapporterer opplysning til Skatteetaten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgavegiversLeveranseReferanse"),(0,r.kt)("td",{parentName:"tr",align:null},"Frivillig referanse p\xe5 innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgaveoppsummering"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppsummering med totalsummer for innleverte oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"sletteoppgave"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgave for sletting av tidligere innrapporterte oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Melding"),(0,r.kt)("td",{parentName:"tr",align:null},"leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"Selve leveransen. Alle leveranser p\xe5 en melding m\xe5 ha samme oppgavegiver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"andelFormue"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av felles formue i boligselskap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"andelFradragsberettigedeKostnader"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av fradragsberettigede kostnader i boligselskapet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"andelGjeld"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av gjeld i boligselskapet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"andelLikningsverdiBoenhet"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av likninsverdi av boenheten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"andelSkattepliktigeInntekter"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av skattepliktige inntekter i boligselskapet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"boenhet"),(0,r.kt)("td",{parentName:"tr",align:null},"Boenheten oppgaven gjelder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"boligselskapsForm\xe5l"),(0,r.kt)("td",{parentName:"tr",align:null},'Boligselskapets form\xe5l. Denne m\xe5 spesifiseres enten p\xe5 leveransen, eller oppgaven. Dersom den blir satt i begge vil boligform\xe5let for oppgaven v\xe6re gjeldende. Verdien skal v\xe6re en av "bolig", "fritidsbolig", "fritidsboligUtland eller "ikkeBolig" (Brukes f.eks. for garasjelag)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"bruksoverlatt"),(0,r.kt)("td",{parentName:"tr",align:null},"Framleid boenhet der boenheten er leid ut av andelshaver i halvparten eller mer av eiertiden det rapporteres for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"eierandel"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers eierandel i boenheten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"eiertid"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers tid som eier av boenheten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"Eier av oppgaven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"f\xf8dselsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"navn"),(0,r.kt)("td",{parentName:"tr",align:null},"Navn p\xe5 oppgaveeier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"organisasjonsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Organisasjonsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgavegiver"),(0,r.kt)("td",{parentName:"tr",align:null},"kontaktinformasjon"),(0,r.kt)("td",{parentName:"tr",align:null},"Kontaktinformasjon for oppgavegiver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgavegiver"),(0,r.kt)("td",{parentName:"tr",align:null},"organisasjonsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Organisasjonsnummer p\xe5 oppgavegiver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"antallOppgaver"),(0,r.kt)("td",{parentName:"tr",align:null},"Totalt antall oppgaver i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelFormue"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelFormue i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelFradragsberettigedeKostnader"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelFradragsberettigedeKostnader i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelGjeld"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelGjeld i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelLikningsverdiBoenhet"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelLikningsverdiBoenhet i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelSkattepliktigeInntekter"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelSkattepliktigeInntekter i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SletteoppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"aksjeboenhetsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SletteoppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"andelsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SletteoppgaveBoligselskap"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"Eier av sletteoppgaven"))))),(0,r.kt)(d,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("p",null,"I f\xf8rste omgang er test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."),(0,r.kt)("h3",{id:"testmilj\xf8er"},"Testmilj\xf8er"),(0,r.kt)("p",null,"Skatteetaten benytter ETM2 som testmilj\xf8. For spesifikke URL'er, se ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/skatteetaten/boligselskap-api/0.0.1"},"SwaggerHub"),"."),(0,r.kt)("p",null,"Digdir benytter TT02 som testmilj\xf8, hvor f\xf8lgende tilbys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DialogPorten"),(0,r.kt)("li",{parentName:"ul"},"Autentisering - Maskinporten"),(0,r.kt)("li",{parentName:"ul"},"Autorisering - systembruker"),(0,r.kt)("li",{parentName:"ul"},"Altinn innboks")),(0,r.kt)("p",null,"Konsumenter m\xe5 ha egne testmilj\xf8er som kan kobles mot testmilj\xf8er hos Skatteetaten og Digdir."),(0,r.kt)("h3",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md"},"Tenor")," for\ndenne tjenesten. Men egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."),(0,r.kt)("h3",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatas\xf8k tilbyr dette.\nDet er ikke tillatt \xe5 bruke/sende skarpe data i test pga krav fra GDPR-regelverket."),(0,r.kt)("p",null,"Det finnes forel\xf8pig ingen testdata for denne tjenesten. Denne siden oppdateres fortl\xf8pende ettersom testdata blir\ntilgjengelig."))))}v.isMDXComponent=!0},67128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Informasjonsmodell_Boligselskap-cabb384ddaebf55326c27dfd734a074e.png"}}]);