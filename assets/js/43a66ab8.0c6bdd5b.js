"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),k=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=k(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=k(n),g=r,u=p["".concat(s,".").concat(g)]||p[g]||m[g]||l;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var a=n(7462),r=(n(7294),n(3905));const l={title:"Skattemelding upersonlig API",slug:"/api/skattemeldingupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skattemelding"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,o={unversionedId:"api/skattemeldingupersonlig",id:"api/skattemeldingupersonlig",title:"Skattemelding upersonlig API",description:"Tjenesten leverer opplysninger som fremkommer i skattemeldingen for en virksomhet.",source:"@site/docs/api/skattemeldingupersonlig.md",sourceDirName:"api",slug:"/api/skattemeldingupersonlig",permalink:"/api-dokumentasjon/api/skattemeldingupersonlig",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"Skattemelding",permalink:"/api-dokumentasjon/tags/skattemelding"}],version:"current",frontMatter:{title:"Skattemelding upersonlig API",slug:"/api/skattemeldingupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skattemelding"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Skattemelding API",permalink:"/api-dokumentasjon/api/skattemelding"},next:{title:"Skatteplikt API",permalink:"/api-dokumentasjon/api/skatteplikt"}},s={},k=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=d("Tabs"),m=d("TabItem"),g={toc:k},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer opplysninger som fremkommer i skattemeldingen for en virksomhet."),(0,r.kt)(p,{underline:!0,mdxType:"Tabs"},(0,r.kt)(m,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:skattemeldingupersonlig")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Skattemelding upersonlig API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"Skattemelding upersonlig API f\xf8lger ikke de generelle reglene for ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/versjoner"},"versjonering"),", men har en egen versjon pr. inntekts\xe5r. For \xf8yeblikket leverer api'et skattemeldinger for 2022."),(0,r.kt)("p",null,"Url\u2019er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/skatteetaten/skattemelding-upersonlig-api"},"Open API spesifikasjonen")," i SwaggerHub."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssb")))),(0,r.kt)("h2",{id:"st\xf8ttetjenester"},"St\xf8ttetjenester"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/api/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Skattemelding upersonlig hendelser API")),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/04d29ccb-2bd2-3512-9f0d-138ff342f360"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(m,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"curl"},"Curl"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 et kall med curl mot tjenesten for \xe5 hente fastsatt skattemelding. Du m\xe5 legge sertifikat og n\xf8kkel som parametre til curl-kommandoen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/skattemeldingupersonlig/v2/fastsatt/ssb/2022/210962492"\n')),(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "norskIdentifikator": "824889880",\n  "inntektsaar": "2022",\n  "spesifikasjonAvSkattefradragForKostnaderTilForskningOgUtvikling": {\n    "forskningOgUtviklingsprosjekt": [\n      {\n        "id": "1c9c453c-a54a-4193-8a0e-e491bda1d5a5",\n        "prosjektnummer": 1,\n        "prosjekttittel": "2",\n        "prosjektperiode": {\n          "start": "2022-04-27",\n          "slutt": "2022-11-03"\n        },\n        "prosjektstatus": {\n          "status": "8"\n        },\n        "prosjektkategori": "forskning",\n        "samledeKostnaderTidligereAar": 32432,\n        "skattefradragForKostnaderTilForskningOgUtvikling": {\n          "nettoSkattefradragFoerAvkortingMotAnnenOffentligStoette": 0,\n          "tilleggIBeregnetSkattPerProsjekt": 0\n        },\n        "annenOffentligStoette": {\n          "virksomhetskategori": "liten",\n          "harOmfattendeSpredningGjennomKonferanserPublikasjonerMv": false,\n          "samletBruttoOffentligStoetteIProsjektperioden": 0\n        },\n        "samledeKostnaderIHeleProsjektperioden": 32432,\n        "maksimalGodkjentOffentligStoetteSomAndelAvTotalkostnad": 70.0,\n        "vurderingAvOekonomiskeVanskeligheter": {\n          "varIOekonomiskeVanskeligheterPaaSoeknadstidspunktet": false\n        },\n        "maksimaltGodkjentBruttobeloepForOffentligStoette": 22702\n      },\n      {\n        "id": "22ceb123-0f28-4de8-8e5c-dc22c4511a99",\n        "prosjektnummer": 1,\n        "prosjekttittel": "Me",\n        "prosjektperiode": {\n          "start": "2022-09-28",\n          "slutt": "2022-12-08"\n        },\n        "prosjektstatus": {\n          "dato": "2023-02-09",\n          "status": "4"\n        },\n        "prosjektkategori": "forskning",\n        "samledeKostnaderTidligereAar": 0,\n        "samletBruttoSkattefradragFraTidligereAar": 0,\n        "kostnadIInntektsaaret": {\n          "kostnad": 50000,\n          "heravPersonalkostnad": 677,\n          "antallEgneTimer": 776\n        },\n        "skattefradragForKostnaderTilForskningOgUtvikling": {\n          "nettoSkattefradragFoerAvkortingMotAnnenOffentligStoette": 9500,\n          "skattefradragPerProsjekt": 9500\n        },\n        "erSamarbeidsprosjektMellomFlereVirksomheter": false,\n        "annenOffentligStoette": {\n          "virksomhetskategori": "liten",\n          "harOmfattendeSpredningGjennomKonferanserPublikasjonerMv": false,\n          "offentligStoetteSomRedusertArbeidsgiveravgift": 677,\n          "samletBruttoOffentligStoetteIProsjektperioden": 677\n        },\n        "samledeKostnaderIHeleProsjektperioden": 50000,\n        "maksimalGodkjentOffentligStoetteSomAndelAvTotalkostnad": 70.0,\n        "vurderingAvOekonomiskeVanskeligheter": {\n          "varIOekonomiskeVanskeligheterPaaSoeknadstidspunktet": false,\n          "grunnlagsdokumentasjon": "aarsregnskap"\n        },\n        "maksimaltGodkjentBruttobeloepForOffentligStoette": 35000\n      }\n    ],\n    "samletTotalkostnad": 50000,\n    "samletSkattefradrag": 9500\n  },\n  "skjermet": false,\n  "registreringstidspunkt": "2023-02-28T17:05:58.823951Z",\n  "opprettetDato": "2023-02-28T17:05:58.259609725+01:00"\n}\n'))),(0,r.kt)(m,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen skattemelding funnet p\xe5 oppgitt gitt inntekts\xe5r og identifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-008"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-009"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen organisasjon funnet med oppgitt identifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMU-010"),(0,r.kt)("td",{parentName:"tr",align:null},"410"),(0,r.kt)("td",{parentName:"tr",align:null},"Skattemeldingen finnes ikke lenger."))))),(0,r.kt)(m,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/e48e70c9-70b2-3349-9c32-983febe9a2e6"},"Informasjonsmodell")," i Felles datakatalog. ")),(0,r.kt)(m,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/test/tenor"},"Tenor")," for denne tjenesten, og testdata er derfor listet her."),(0,r.kt)("h2",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Organisasjonsnummer"),(0,r.kt)("th",{parentName:"tr",align:null},"Inntekts\xe5r"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"210962492"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"310962074"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"312547678"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"313269906"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"314247914"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"310322881"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"314238478"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"314024621"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"313739007"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"311772236"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")))),(0,r.kt)("p",null,"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."))))}f.isMDXComponent=!0}}]);