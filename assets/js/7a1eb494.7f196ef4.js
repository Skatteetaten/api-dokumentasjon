"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),k=s(n),g=r,u=k["".concat(p,".").concat(g)]||k[g]||o[g]||l;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[k]="string"==typeof e?e:r,i[1]=m;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},53145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Boligsameie API",slug:"/api/boligsameie",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligsameie"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},i=void 0,m={unversionedId:"api/boligsameie",id:"api/boligsameie",title:"Boligsameie API",description:"Tjenesten brukes til innsending av Boligsameie.",source:"@site/docs/api/boligsameie.md",sourceDirName:"api",slug:"/api/boligsameie",permalink:"/api-dokumentasjon/api/boligsameie",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"Boligsameie",permalink:"/api-dokumentasjon/tags/boligsameie"}],version:"current",frontMatter:{title:"Boligsameie API",slug:"/api/boligsameie",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligsameie"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0}},p={},s=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Parameter: idempotencyKey",id:"parameter-idempotencykey",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Innsending",id:"innsending",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"JSON",id:"json",level:3},{value:"Eksempel p\xe5 innsending",id:"eksempel-p\xe5-innsending",level:4},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:4},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:3},{value:"Testdata",id:"testdata",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},k=d("Tabs"),o=d("TabItem"),g={toc:s},u="wrapper";function N(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten brukes til innsending av Boligsameie."),(0,r.kt)(k,{underline:!0,mdxType:"Tabs"},(0,r.kt)(o,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:boligsameie")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen."),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen p\xe5\nSwaggerHub"),(0,r.kt)("p",null,"API-et for boligsameie har bare ett endepunkt:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"POST innsending"),": Mottar tredjepartsopplysninger for boligsameier. Ett kall mot API-et er en rapportering for et\nboligsameie gitt av en oppgavegiver og som gjelder et inntekts\xe5r.")),(0,r.kt)("p",null,"API-et validerer mottatte data mot JSON schema beskrevet p\xe5 SwaggerHub. Se ",(0,r.kt)("a",{parentName:"p",href:"boligsameie?tab=Feilkoder"},"feilkoder")," for\nrelaterte feilmeldinger."),(0,r.kt)("p",null,"Se ogs\xe5 ",(0,r.kt)("a",{parentName:"p",href:"boligsameie?tab=Eksempler"},"eksempler")," for de ulike endepunktene."),(0,r.kt)("h3",{id:"parameter-idempotencykey"},"Parameter: idempotencyKey"),(0,r.kt)("p",null,"idempotencyKey parameteren er p\xe5krevet. Innholdet skal v\xe6re en unik UUID. Hvert nye kall til API-et skal ha en\ntilsvarende ny idempotencyKey. Flere etterf\xf8lgende POST kall med samme request-body og samme idempotencyKey vil gi den\nsamme repsponsen. Kun det f\xf8rste av denne rekken med like API kall vil behandles. IdempotencyKey muliggj\xf8r at man trygt\nkan pr\xf8ve innsendinger p\xe5 nytt der man av ulike \xe5rsaker ikke har f\xe5tt en tilbakemelding fra API-et."),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"Dette API-et er pt. ikke dokumentert i Felles datakatalog.")),(0,r.kt)(o,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"innsending"},"Innsending"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://{env}/api/boligsameie/v1/{inntekts\xe5r}/innsending\n")),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("h4",{id:"eksempel-p\xe5-innsending"},"Eksempel p\xe5 innsending"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "leveranse": {\n    "oppgavegiversLeveranseReferanse": "Leveranse-1",\n    "leveransetype": "ordinaer",\n    "oppgavegiver": {\n      "organisasjonsnummer": "819897522",\n      "organisasjonsnavn": "SPENNENDE MENINGSFULLE G\xc5RDER ESEK",\n      "kontaktinformasjon": {\n        "navn": "Realt Testutvikling",\n        "telefonnummer": "00000000",\n        "varselEpostadresse": "anonym.varsel@skatteetaten.no",\n        "varselSmsMobilnummer": "12345678"\n      }\n    },\n    "oppgaveoppsummering": {\n      "antallOppgaver": 2,\n      "sumAndelSkattepliktigeInntekter": 2249,\n      "sumAndelFradragsberettigedeKostnader": 2249,\n      "sumAndelFormue": 11888,\n      "sumAndelGjeld": 27709\n    },\n    "inntektsaar": 2023,\n    "kildesystem": "SBS-1",\n    "sletteoppgave": [],\n    "oppgave": [\n      {\n        "oppgaveeier": {\n          "organisasjonsnummer": "800877830",\n          "navn": "N\xd8YTRALE FORURENSEDE SPISESTEDER AS"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 11\n        },\n        "andelSkattepliktigeInntekter": 1766,\n        "andelFradragsberettigedeKostnader": 1766,\n        "andelFormue": 9336,\n        "andelGjeld": 21761\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "00000000000",\n          "navn": "ALLA STIE"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 30\n        },\n        "andelSkattepliktigeInntekter": 483,\n        "andelFradragsberettigedeKostnader": 483,\n        "andelFormue": 2552,\n        "andelGjeld": 5948\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h4",{id:"eksempel-p\xe5-respons"},"Eksempel p\xe5 respons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",\n  "dialogelementId": "018f521e-5488-79e3-8817-48e94cb75455",\n  "oppgavegiversLeveranseReferanse": "leveranse-1",\n  "antallOppgaver": 23\n}\n'))),(0,r.kt)(o,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_008"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Strukturell feil i tilknyttet dataformat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_010"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_011"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_017"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uspesifisert systemfeil")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_019"),(0,r.kt)("td",{parentName:"tr",align:null},"409"),(0,r.kt)("td",{parentName:"tr",align:null},"Idempotensn\xf8kkel er benyttet tidligere")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_021"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Finner ikke forespurt ressurs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_022"),(0,r.kt)("td",{parentName:"tr",align:null},"405"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP-metode ikke st\xf8ttet")))),(0,r.kt)("p",null,"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi\nfeltene."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilspesifiseringskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"),(0,r.kt)("th",{parentName:"tr",align:null},"\xc5rsak"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1022"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i parametre"),(0,r.kt)("td",{parentName:"tr",align:null},"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1023"),(0,r.kt)("td",{parentName:"tr",align:null},"Finner ingen ressurs for denne urlen"),(0,r.kt)("td",{parentName:"tr",align:null},"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1027"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntekts\xe5r er ikke st\xf8ttet"),(0,r.kt)("td",{parentName:"tr",align:null},"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1028"),(0,r.kt)("td",{parentName:"tr",align:null},"Header mangler"),(0,r.kt)("td",{parentName:"tr",align:null},"P\xe5krevd header er ikke med i requesten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1030"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept-header m\xe5 v\xe6re av type application/json"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept header er feil. APIet har kun st\xf8tte for json i response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1047"),(0,r.kt)("td",{parentName:"tr",align:null},"Content type m\xe5 v\xe6re application/json"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-type header er feil. APIet har kun st\xf8tte for json i request body"))))),(0,r.kt)(o,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"boligsameie",src:n(12490).Z,width:"905",height:"800"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Eier"),(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Dokumentasjon"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"inntekts\xe5r"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntekts\xe5ret leveransen gjelder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"kildesystem"),(0,r.kt)("td",{parentName:"tr",align:null},"System brukt for \xe5 levere oppgaven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"leveransetype"),(0,r.kt)("td",{parentName:"tr",align:null},"Type av leveranse som angir om leveransen inneholder ordin\xe6re oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver \xe5 innrapportere")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgave"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgave som leveres")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgavegiver"),(0,r.kt)("td",{parentName:"tr",align:null},"Tredjepart som rapporterer opplysning til Skatteetaten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgavegiversLeveranseReferanse"),(0,r.kt)("td",{parentName:"tr",align:null},"Frivillig referanse p\xe5 innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgaveoppsummering"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppsummering med totalsummer for innleverte oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"sletteoppgave"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgave for sletting av tidligere innrapporterte oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Melding"),(0,r.kt)("td",{parentName:"tr",align:null},"leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"Selve leveransen. Merk at det kun er tillatt med en leveranse pr Melding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"andelFormue"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av felles formue i boligsameiet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"andelFradragsberettigedeKostnader"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av fradragsberettigede kostnader i boligsameiet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"andelGjeld"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av gjeld i boligselsameiet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"andelSkattepliktigeInntekter"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av skattepliktige inntekter i boligsameiet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"eiertid"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers tid som eier av boenheten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Boenhetens matrikkelnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"Eier av oppgaven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"f\xf8dselsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"navn"),(0,r.kt)("td",{parentName:"tr",align:null},"Navn p\xe5 oppgaveeier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"organisasjonsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Organisasjonsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgavegiver"),(0,r.kt)("td",{parentName:"tr",align:null},"organisasjonsnavn"),(0,r.kt)("td",{parentName:"tr",align:null},"Navn p\xe5 oppgavegiver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgavegiver"),(0,r.kt)("td",{parentName:"tr",align:null},"organisasjonsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Organisasjonsnummer p\xe5 oppgavegiver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"antallOppgaver"),(0,r.kt)("td",{parentName:"tr",align:null},"Totalt antall oppgaver i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelFormue"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelFormue i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelFradragsberettigedeKostnader"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelFradragsberettigedeKostnader i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelGjeld"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelGjeld i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelSkattepliktigeInntekter"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelSkattepliktigeInntekter i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SletteoppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Boenhetens matrikkelnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SletteoppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"Eier av sletteoppgaven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"bruksnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Del av matrikkelnummeret som sammen med kommunenummer, g\xe5rdsnummer og seksjonsnummer unikt identifiserer en eierseksjon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"festenummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Festenummer tilh\xf8rende eierseksjonen dersom eiendommen er festet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"g\xe5rdsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Del av matrikkelnummeret som sammen med kommunenummer, bruksnummer og seksjonsnummer unikt identifiserer en eierseksjon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"kommunenummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Boenhetens kommunenummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"seksjonsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Del av matrikkelnummeret som sammen med kommunenummer, g\xe5rdsnummer og bruksnummer unikt identifiserer en eierseksjon"))))),(0,r.kt)(o,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("p",null,"I f\xf8rste omgang er test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."),(0,r.kt)("h3",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md"},"Tenor")," for\ndenne tjenesten. Men egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."),(0,r.kt)("h3",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"Det finnes forel\xf8pig ingen testdata for denne tjenesten. Denne siden oppdateres fortl\xf8pende ettersom testdata blir\ntilgjengelig."))))}N.isMDXComponent=!0},12490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Informasjonsmodell_Boligsameie-2bfce9e122e9e96a88ebaab0b5cc5820.png"}}]);