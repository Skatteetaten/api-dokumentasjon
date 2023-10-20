"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),k=p(n),g=r,u=k["".concat(o,".").concat(g)]||k[g]||d[g]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[k]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Mva meldingsopplysning API",slug:"/api/mva_meldingsopplysning",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Seri\xf8sitet","MVA"],keywords:["mva","meldingsopplysning"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,s={unversionedId:"api/mva_meldingsopplysning",id:"api/mva_meldingsopplysning",title:"Mva meldingsopplysning API",description:"Tjenesten leverer status p\xe5 mva-melding og informasjon fra reskontro for en virksomhet for de siste tre terminene.",source:"@site/docs/api/mva_meldingsopplysning.md",sourceDirName:"api",slug:"/api/mva_meldingsopplysning",permalink:"/api-dokumentasjon/api/mva_meldingsopplysning",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"Seri\xf8sitet",permalink:"/api-dokumentasjon/tags/seriositet"},{label:"MVA",permalink:"/api-dokumentasjon/tags/mva"}],version:"current",frontMatter:{title:"Mva meldingsopplysning API",slug:"/api/mva_meldingsopplysning",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Seri\xf8sitet","MVA"],keywords:["mva","meldingsopplysning"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Inntektsmottakere API",permalink:"/api-dokumentasjon/api/inntektsmottakere"},next:{title:"Mva-melding API",permalink:"/api-dokumentasjon/api/mvamelding"}},o={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Samtykke",id:"samtykke",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},k=m("Tabs"),d=m("TabItem"),g={toc:p},u="wrapper";function N(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer status p\xe5 mva-melding og informasjon fra reskontro for en virksomhet for de siste tre terminene."),(0,r.kt)(k,{underline:!0,mdxType:"Tabs"},(0,r.kt)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/rettighetspakker"},"Rettighetspakker")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:mvameldingsopplysning")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Mva meldingsopplysning API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"Url\u2019er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-meldingsopplysning-api"},"Open API spesifikasjonen")," p\xe5 SwaggerHub."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"),(0,r.kt)("th",{parentName:"tr",align:null},"Egenskaper ved rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dibk"),(0,r.kt)("td",{parentName:"tr",align:null},"Hjemmel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ebevis"),(0,r.kt)("td",{parentName:"tr",align:null},"Krever samtykke")))),(0,r.kt)("h2",{id:"samtykke"},"Samtykke"),(0,r.kt)("p",null,"Tjenesten kan kreve ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/samtykke"},"samtykke"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tjenestekode"),(0,r.kt)("th",{parentName:"tr",align:null},"Form\xe5l"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5616_4"),(0,r.kt)("td",{parentName:"tr",align:null},"Kreves for rettighetspakke ",(0,r.kt)("inlineCode",{parentName:"td"},"ebevis"))))),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/38eb829e-33cb-3976-b789-5209c926473e"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(d,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"curl"},"Curl"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 ha et gyldig maskinportentoken og altinn samtykketoken som legges ved som headerer i curl-kommandoen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -H "Authorization: Bearer <maskinporten_token>" -H "AltinnSamtykke: <samtykke_token>" "https://api-test.sits.no/api/mvamelding/v1/ebevis/974761076"\n')),(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "levert": "2020-09-21T10:11:25.117551",\n    "forespurteOrganisasjon": "974761076",\n    "mvaAlminneligNaering": {\n        "skattemeldingsplikt": {\n            "termintype": "toMaanedlig",\n            "foersteTermin": {\n                "termin": "mar-apr",\n                "aar": "2004"\n            },\n            "sisteTermin": {\n                "termin": null,\n                "aar": null\n            }\n        },\n        "ansvarligForMvaMelding": {\n            "organisasjonsnummer": "974761076",\n            "organisasjonsnavn": "SKATTEETATEN AS"\n        },\n        "samletFastsattOgReskontrofoertForTermin": [\n            {\n                "gjelderTermin": {\n                    "termin": "jan-feb",\n                    "aar": "2020"\n                },\n                "fastsettingsperiodeStatus": "meldingLevertUnderBehandling",\n                "erMyndighetsfastsatt": null,\n                "grunnMyndighetsfastsatt": null,\n                "mvaAvgift": null,\n                "mvaGrunnlag": null\n            },\n            {\n                "gjelderTermin": {\n                    "termin": "mar-apr",\n                    "aar": "2020"\n                },\n                "fastsettingsperiodeStatus": "meldingLevertUnderBehandling",\n                "erMyndighetsfastsatt": null,\n                "grunnMyndighetsfastsatt": null,\n                "mvaAvgift": null,\n                "mvaGrunnlag": null\n            },\n            {\n                "gjelderTermin": {\n                    "termin": "mai-jun",\n                    "aar": "2020"\n                },\n                "fastsettingsperiodeStatus": "meldingIkkeLevert",\n                "erMyndighetsfastsatt": null,\n                "grunnMyndighetsfastsatt": null,\n                "mvaAvgift": null,\n                "mvaGrunnlag": null\n            }\n        ]\n    }\n}\n'))),(0,r.kt)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-007"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med samtykke.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-008"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen meldingsopplysninger funnet p\xe5 oppgitt organisasjonsnummer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-009"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MVA-MELDINGSOPPLYSNING-010"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke treff p\xe5 oppgitt organisasjonsnummer."))))),(0,r.kt)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null," ",(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/61726311-9a02-3ccc-adcd-0a18f3a059d4"},"Informasjonsmodell")," i Felles datakatalog.")),(0,r.kt)(d,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/test/tenor"},"Tenor")," for denne tjenesten."),(0,r.kt)("h2",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"Tjenesten har for n\xe5 kun enkle mockdata, med en statisk mocket respons. For \xe5 kunne teste API'et er det nok \xe5 benytte et syntetisk organisasjonsnummer som har et samtykke. Syntetiske organisasjonsnumre finner du i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/test/tenor"},"Tenor"),"."))))}N.isMDXComponent=!0}}]);