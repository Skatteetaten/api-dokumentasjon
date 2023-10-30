"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=a.createContext({}),o=function(e){var t=a.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(k.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,k=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,u=d["".concat(k,".").concat(m)]||d[m]||g[m]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var k in t)hasOwnProperty.call(t,k)&&(s[k]=t[k]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={title:"N\xe6ringsspesifikasjon API",slug:"/api/naeringsspesifikasjon",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","N\xe6ringsspesifikasjon","Skattemelding"],keywords:["N\xe6ringsspesifikasjon","naeringsspesifikasjon","api"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},l=void 0,s={unversionedId:"api/naeringsspesifikasjon",id:"api/naeringsspesifikasjon",title:"N\xe6ringsspesifikasjon API",description:"Tjenesten leverer n\xe6ringsopplysninger som enkeltpersonforetak og selskaper har innrapportert til Skatteetaten i forbindelse med skattemeldingen.",source:"@site/docs/api/naeringsspesifikasjon.md",sourceDirName:"api",slug:"/api/naeringsspesifikasjon",permalink:"/api-dokumentasjon/api/naeringsspesifikasjon",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"N\xe6ringsspesifikasjon",permalink:"/api-dokumentasjon/tags/naeringsspesifikasjon"},{label:"Skattemelding",permalink:"/api-dokumentasjon/tags/skattemelding"}],version:"current",frontMatter:{title:"N\xe6ringsspesifikasjon API",slug:"/api/naeringsspesifikasjon",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","N\xe6ringsspesifikasjon","Skattemelding"],keywords:["N\xe6ringsspesifikasjon","naeringsspesifikasjon","api"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API",permalink:"/api-dokumentasjon/api/mvaregisteravgiftssubjekt"},next:{title:"Omregistreringsavgift API",permalink:"/api-dokumentasjon/api/omregistreringsavgift"}},k={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjeneste",id:"st\xf8ttetjeneste",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Toppniv\xe5",id:"toppniv\xe5",level:2},{value:"N\xe6ringsinntekt",id:"n\xe6ringsinntekt",level:2},{value:"Personinntekt",id:"personinntekt",level:2},{value:"Balanse",id:"balanse",level:2},{value:"Resultatregnskap",id:"resultatregnskap",level:2},{value:"Avskrivning",id:"avskrivning",level:2},{value:"Spesifikasjon av resultatregnskap og balanse",id:"spesifikasjon-av-resultatregnskap-og-balanse",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("Tabs"),g=p("TabItem"),m={toc:o},u="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer n\xe6ringsopplysninger som enkeltpersonforetak og selskaper har innrapportert til Skatteetaten i forbindelse med skattemeldingen."),(0,r.kt)(d,{underline:!0,mdxType:"Tabs"},(0,r.kt)(g,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/rettighetspakker"},"Rettighetspakker")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:naeringsspesifikasjon")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"N\xe6ringsspesifikasjon API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"N\xe6ringsspesifikasjon API f\xf8lger ikke de generelle reglene for ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/versjoner"},"versjonering"),", men har en egen versjon pr. inntekts\xe5r. For \xf8yeblikket leverer tjenesten n\xe6ringsspesifikasjon for 2022."),(0,r.kt)("p",null,"Url\u2019er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/skatteetaten/naeringsspesifikasjon-api"},"Open API spesifikasjonen")," p\xe5 SwaggerHub."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssb")))),(0,r.kt)("h2",{id:"st\xf8ttetjeneste"},"St\xf8ttetjeneste"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/api/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"N\xe6ringsspesifikasjon hendelser API")),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/6ed9209d-c7c0-376f-a4b5-b4ce7cc1933b"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(g,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"curl"},"Curl"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 ha et gyldig maskinportentoken som legges ved som headerer i curl-kommandoen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/naeringsspesifikasjon/v3/ssb/2022/12345678901?gjelderpaaTidspunkt=2022-08-08T12:12:12"\n')),(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("p",null,"Eksempel p\xe5 en gyldig respons for inntekts\xe5r 2022 (v3):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "norskIdentifikator" : "14074924167",\n  "inntektsaar" : "2022",\n  "resultatregnskap" : {\n    "driftsinntekt" : {\n      "sumDriftsinntekt" : 450000.0,\n      "salgsinntekt" : {\n        "inntekt" : [ {\n          "id" : "3000",\n          "type" : "3000",\n          "beloep" : 450000.0\n        } ]\n      }\n    },\n    "driftskostnad" : {\n      "sumDriftskostnad" : 36000.0,\n      "annenDriftskostnad" : {\n        "kostnad" : [ {\n          "id" : "7099",\n          "type" : "7099",\n          "beloep" : 0.0\n        }, {\n          "id" : "6000",\n          "type" : "6000",\n          "beloep" : 36000.0\n        } ]\n      }\n    },\n    "aarsresultat" : 414000.0\n  },\n  "balanseregnskap" : {\n    "anleggsmiddel" : {\n      "sumBalanseverdiForAnleggsmiddel" : 144000.0,\n      "balanseverdiForAnleggsmiddel" : {\n        "balanseverdi" : [ {\n          "id" : "1205",\n          "beloep" : 144000.0,\n          "type" : "1205"\n        } ]\n      }\n    },\n    "sumBalanseverdiForEiendel" : 144000.0\n  },\n  "spesifikasjonAvAnleggsmiddel" : {\n    "saldoavskrevetAnleggsmiddel" : [ {\n      "id" : "60285fd5-2bbf-4e11-8576-8ee5ed3b70c2",\n      "objektidentifikator" : "1",\n      "inngaaendeVerdi" : 180000.0,\n      "erRealisasjonenUfrivilligOgGevinstenBetingetSkattefri" : false,\n      "grunnlagForAvskrivningOgInntektsfoering" : 180000.0,\n      "utgaaendeVerdi" : 144000.0,\n      "aaretsAvskrivning" : 36000.0,\n      "saldogruppe" : "d",\n      "avskrivningssats" : 20.0,\n      "erDetFysiskAnleggsmiddelIUtgaaendeVerdi" : true\n    } ],\n    "motorkjoeretoeyINaering" : [ {\n      "id" : "1824b811-7349-46f4-941e-2484e2c666dc",\n      "kjennemerke" : "KH15678",\n      "aarForFoerstegangsregistrering" : "2015",\n      "biltype" : "varebilKlasse2",\n      "listeprisSomNy" : 300000.0,\n      "drivstoffkostnad" : 100000.0,\n      "vedlikeholdskostnad" : 50000.0,\n      "kostnadTilForsikringOgAvgift" : 15000.0,\n      "antallKilometerYrkeskjoering" : 25000,\n      "antallKilometerKjoertIAar" : 25000,\n      "disponertIPeriode" : {\n        "start" : "2022-01-01",\n        "slutt" : "2022-01-31"\n      },\n      "erElektroniskKjoerebokFoertVedroerendeYrkeskjoering" : false,\n      "erYrkesbilenIBrukPrivat" : false,\n      "tilbakefoertBilkostnadForPrivatBrukAvYrkesbil" : 0.0\n    } ],\n    "oevrigTilVisningForSpesifikasjonAvAnleggsmiddel" : {\n      "samletSaldoavskrivning" : 36000.0\n    }\n  },\n  "beregnetNaeringsinntekt" : {\n    "fordeltBeregnetNaeringsinntekt" : [ {\n      "id" : "9748c60c-f8cf-45d3-9e9a-5262328a88c5",\n      "identifikatorForFordeltBeregnetPersoninntekt" : "1",\n      "identifikatorForFordeltBeregnetNaeringsinntekt" : "1",\n      "naeringstype" : "reindrift",\n      "fordeltSkattemessigResultat" : 414000.0,\n      "reindrift" : {\n        "korrigertResultat" : 414000.0\n      },\n      "fordeltSkattemessigResultatEtterKorreksjon" : 414000.0,\n      "andelAvFordeltSkattemessigResultatTilordnetInnehaver" : 100.0,\n      "fordeltSkattemessigResultatEtterKorreksjonTilordnetInnehaver" : 414000.0\n    } ],\n    "skattemessigResultat" : 414000.0\n  },\n  "beregnetPersoninntekt" : {\n    "fordeltBeregnetPersoninntekt" : [ {\n      "id" : "1",\n      "identifikatorForFordeltBeregnetPersoninntekt" : "1",\n      "identifikatorForFordeltBeregnetNaeringsinntekt" : "1",\n      "aaretsBeregnedePersoninntektFoerFordelingOgSamordning" : 414000.0,\n      "andelAvPersoninntektTilordnetInnehaver" : 100.0,\n      "aaretsBeregnedePersoninntektFoerFordelingOgSamordningTilordnetInnehaver" : 414000.0\n    } ]\n  },\n  "virksomhet" : {\n    "regnskapspliktstype" : "ingenRegnskapsplikt",\n    "regnskapsperiode" : {\n      "start" : "2022-01-01T00:00:00+01:00",\n      "slutt" : "2022-12-31T23:59:59+01:00"\n    },\n    "virksomhetstype" : "enkeltpersonforetak",\n    "regeltypeForAarsregnskap" : "regnskapslovensAlminneligeRegler"\n  },\n  "samletGjeldOgFormuesobjekter" : {\n    "verdiFoerVerdsettingsrabattForFormuesobjekterOmfattetAvVerdsettingsrabatt" : 144000.0\n  },\n  "skjermet" : false,\n  "opprettetDato" : "2023-02-08T15:12:38+01:00"\n}\n'))),(0,r.kt)(g,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Fikk ikke treff p\xe5 gitt identifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-008"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Fant ikke naeringsspesifikasjon for gitt identifikator og inntektsaar.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-009"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS-010"),(0,r.kt)("td",{parentName:"tr",align:null},"410"),(0,r.kt)("td",{parentName:"tr",align:null},"Naeringsspesifikasjon er ikke lenger tilgjenglig."))))),(0,r.kt)(g,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/c45bfb1b-766e-386a-b560-c57eca638c1a"},"Informasjonsmodell")," i Felles datakatalog."),(0,r.kt)("p",null,"Obs. Hvis modellene p\xe5 denne siden avviker fra Open API spesifikasjonen p\xe5 Swaggerhub, er det Open API spesifikasjonen som er mest oppdatert."),(0,r.kt)("p",null,"Modellene nedenfor avviker litt fra modellen slik den benyttes i tjenesten.  Modellen har f\xf8lgende avvik:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Part er erstattet med personidentifikator"),(0,r.kt)("li",{parentName:"ul"},"Intern systemreferanse er ikke med"),(0,r.kt)("li",{parentName:"ul"},"Type Endringsmetadata er ikke med"),(0,r.kt)("li",{parentName:"ul"},"Type Bel\xf8pIValuta er konvertert til Bel\xf8p ")),(0,r.kt)("h2",{id:"toppniv\xe5"},"Toppniv\xe5"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Toppniv\xe5",src:n(7973).Z,width:"1365",height:"844"})),(0,r.kt)("h2",{id:"n\xe6ringsinntekt"},"N\xe6ringsinntekt"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Naeringsinntekt",src:n(3465).Z,width:"1817",height:"796"})),(0,r.kt)("h2",{id:"personinntekt"},"Personinntekt"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Personinntekt",src:n(6014).Z,width:"1495",height:"779"})),(0,r.kt)("h2",{id:"balanse"},"Balanse"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Balanse",src:n(674).Z,width:"2542",height:"1341"})),(0,r.kt)("h2",{id:"resultatregnskap"},"Resultatregnskap"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Resultatregnskap",src:n(4562).Z,width:"2325",height:"1964"})),(0,r.kt)("h2",{id:"avskrivning"},"Avskrivning"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Avskrivning",src:n(6026).Z,width:"1755",height:"1724"})),(0,r.kt)("h2",{id:"spesifikasjon-av-resultatregnskap-og-balanse"},"Spesifikasjon av resultatregnskap og balanse"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spesifikasjon av resultatregnskap og balanse",src:n(4719).Z,width:"3388",height:"2020"}))),(0,r.kt)(g,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/test/tenor"},"Tenor")," for denne tjenesten, og testdata er derfor listet her."),(0,r.kt)("h2",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type skattepliktig"),(0,r.kt)("th",{parentName:"tr",align:null},"Identifikator"),(0,r.kt)("th",{parentName:"tr",align:null},"Inntekts\xe5r"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Personlig"),(0,r.kt)("td",{parentName:"tr",align:null},"02914499103"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Personlig"),(0,r.kt)("td",{parentName:"tr",align:null},"07810099598"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Personlig"),(0,r.kt)("td",{parentName:"tr",align:null},"09928798752"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Personlig"),(0,r.kt)("td",{parentName:"tr",align:null},"10835098228"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Personlig"),(0,r.kt)("td",{parentName:"tr",align:null},"14839699914"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Personlig"),(0,r.kt)("td",{parentName:"tr",align:null},"29896399711"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upersonlig"),(0,r.kt)("td",{parentName:"tr",align:null},"310962805"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upersonlig"),(0,r.kt)("td",{parentName:"tr",align:null},"313422348"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upersonlig"),(0,r.kt)("td",{parentName:"tr",align:null},"311051431"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upersonlig"),(0,r.kt)("td",{parentName:"tr",align:null},"310799262"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upersonlig"),(0,r.kt)("td",{parentName:"tr",align:null},"311772236"),(0,r.kt)("td",{parentName:"tr",align:null},"2022")))),(0,r.kt)("p",null,"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."))))}f.isMDXComponent=!0},6014:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Personinntekt-a4f95379e8452f265d171a7b2862c81a.png"},6026:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/avskrivning-6d9414e0d2de92ffb63f9405f0fcdcf4.png"},674:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/balanse-a207f0dd24bd2afb55f83784f62cc2a3.png"},3465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/naeringsinntekt-3f6bb9b538e75ff8e187f95bf4125e6d.png"},7973:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/naeringsopplysninger_v1-6a7e83a253788d4c6a63941cfda6ede4.png"},4562:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/resultatregnskap-0efa31565d2e1c65b6ea16709d152245.png"},4719:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spesifikasjonAvResultatregnskapOgBalanse-31de2271611af2a1d6706ed2d652b8a7.png"}}]);