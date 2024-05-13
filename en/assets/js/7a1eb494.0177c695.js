"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4884],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},k="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=d(t),u=r,g=k["".concat(s,".").concat(u)]||k[u]||o[u]||l;return t?a.createElement(g,m(m({ref:n},p),{},{components:t})):a.createElement(g,m({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,m=new Array(l);m[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[k]="string"==typeof e?e:r,m[1]=i;for(var d=2;d<l;d++)m[d]=t[d];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const l={title:"Boligsameie API",slug:"/api/boligsameie",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligsameie"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},m=void 0,i={unversionedId:"api/boligsameie",id:"api/boligsameie",title:"Boligsameie API",description:"Tjenesten brukes til innsending av Boligsameie.",source:"@site/docs/api/boligsameie.md",sourceDirName:"api",slug:"/api/boligsameie",permalink:"/api-dokumentasjon/en/api/boligsameie",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{label:"Boligsameie",permalink:"/api-dokumentasjon/en/tags/boligsameie"}],version:"current",frontMatter:{title:"Boligsameie API",slug:"/api/boligsameie",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligsameie"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0}},s={},d=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Parameter: idempotencyKey",id:"parameter-idempotencykey",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Innsending",id:"innsending",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"JSON",id:"json",level:3},{value:"Eksempel p\xe5 innsending",id:"eksempel-p\xe5-innsending",level:4},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:4},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:3},{value:"Testdata",id:"testdata",level:3}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},k=p("Tabs"),o=p("TabItem"),u={toc:d},g="wrapper";function v(e){let{components:n,...l}=e;return(0,r.kt)(g,(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten brukes til innsending av Boligsameie."),(0,r.kt)(k,{underline:!0,mdxType:"Tabs"},(0,r.kt)(o,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:boligsameie")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen.\nS\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Boligsameie API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen p\xe5\nSwaggerHub"),(0,r.kt)("p",null,"API-et for boligsameie har bare ett endepunkt:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"POST innsending"),": Mottar tredjepartsopplysninger for boligsameier. Ett kall mot API-et er en rapportering for et\nboligsameie gitt av en oppgavegiver og som gjelder et inntekts\xe5r.")),(0,r.kt)("p",null,"API-et validerer mottatte data mot JSON schema beskrevet p\xe5 SwaggerHub. Se ",(0,r.kt)("a",{parentName:"p",href:"boligsameie?tab=Feilkoder"},"feilkoder")," for\nrelaterte feilmeldinger."),(0,r.kt)("p",null,"Se ogs\xe5 ",(0,r.kt)("a",{parentName:"p",href:"boligsameie?tab=Eksempler"},"eksempler")," for de ulike endepunktene."),(0,r.kt)("h3",{id:"parameter-idempotencykey"},"Parameter: idempotencyKey"),(0,r.kt)("p",null,"idempotencyKey parameteren er p\xe5krevet. Innholdet skal v\xe6re en unik UUID. Hvert nye kall til API-et skal ha en\ntilsvarende ny idempotencyKey. Flere etterf\xf8lgende POST kall med samme request-body og samme idempotencyKey vil gi den\nsamme repsponsen. Kun det f\xf8rste av denne rekken med like API kall vil behandles. IdempotencyKey muliggj\xf8r at man trygt\nkan pr\xf8ve innsendinger p\xe5 nytt der man av ulike \xe5rsaker ikke har f\xe5tt en tilbakemelding fra API-et."),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"Dette API-et er pt. ikke dokumentert i Felles datakatalog.")),(0,r.kt)(o,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"innsending"},"Innsending"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://{env}/api/boligsameie/v1/{inntekts\xe5r}/innsending\n")),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("h4",{id:"eksempel-p\xe5-innsending"},"Eksempel p\xe5 innsending"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "leveranse": {\n    "oppgavegiversLeveranseReferanse": "Leveranse-1",\n    "leveransetype": "ordinaer",\n    "oppgavegiver": {\n      "organisasjonsnummer": "819897522",\n      "organisasjonsnavn": "SPENNENDE MENINGSFULLE G\xc5RDER ESEK",\n      "kontaktinformasjon": {\n        "navn": "Realt Testutvikling",\n        "telefonnummer": "00000000",\n        "varselEpostadresse": "anonym.varsel@skatteetaten.no",\n        "varselSmsMobilnummer": "12345678"\n      }\n    },\n    "oppgaveoppsummering": {\n      "antallOppgaver": 23,\n      "sumAndelSkattepliktigeInntekter": 0,\n      "sumAndelFradragsberettigedeKostnader": 11777,\n      "sumAndelFormue": 62240,\n      "sumAndelGjeld": 145075\n    },\n    "inntektsaar": 2023,\n    "kildesystem": "SBS-1",\n    "sletteoppgave": [],\n    "oppgave": [\n      {\n        "oppgaveeier": {\n          "organisasjonsnummer": "800877830",\n          "navn": "N\xd8YTRALE FORURENSEDE SPISESTEDER AS"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 11\n        },\n        "andelSkattepliktigeInntekter": 1766,\n        "andelFradragsberettigedeKostnader": 1766,\n        "andelFormue": 9336,\n        "andelGjeld": 21761\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "17045802256",\n          "navn": "ALLA STIE"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 30\n        },\n        "andelSkattepliktigeInntekter": 483,\n        "andelFradragsberettigedeKostnader": 483,\n        "andelFormue": 2552,\n        "andelGjeld": 5948\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "06096215671",\n          "navn": "IHOR EVJE"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3012"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 74\n        },\n        "andelSkattepliktigeInntekter": 443,\n        "andelFradragsberettigedeKostnader": 443,\n        "andelFormue": 0,\n        "andelGjeld": 0\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "03056904602",\n          "navn": "HANS ANDERS CZERWINSKI"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 17\n        },\n        "andelSkattepliktigeInntekter": 377,\n        "andelFradragsberettigedeKostnader": 377,\n        "andelFormue": 1992,\n        "andelGjeld": 4642\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "15065700589",\n          "navn": "VALDAS S\xd8RVIK GL\xd8RSTAD"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 49\n        },\n        "andelSkattepliktigeInntekter": 495,\n        "andelFradragsberettigedeKostnader": 495,\n        "andelFormue": 2614,\n        "andelGjeld": 6093\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "28097317803",\n          "navn": "MAY BENTE KLINGENBERG GRONGSTAD"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 93\n        },\n        "andelSkattepliktigeInntekter": 377,\n        "andelFradragsberettigedeKostnader": 377,\n        "andelFormue": 1992,\n        "andelGjeld": 4642\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "23113402067",\n          "navn": "ROGER ANDRE HALLING"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 86\n        },\n        "andelSkattepliktigeInntekter": 589,\n        "andelFradragsberettigedeKostnader": 589,\n        "andelFormue": 3112,\n        "andelGjeld": 7254\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "28095102613",\n          "navn": "STYRK KLEPPA"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 23\n        },\n        "andelSkattepliktigeInntekter": 824,\n        "andelFradragsberettigedeKostnader": 824,\n        "andelFormue": 4357,\n        "andelGjeld": 10155\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "31085909676",\n          "navn": "AIVIS VAGLE"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 43\n        },\n        "andelSkattepliktigeInntekter": 436,\n        "andelFradragsberettigedeKostnader": 436,\n        "andelFormue": 2303,\n        "andelGjeld": 5368\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "09128506265",\n          "navn": "MIROSLAW STANISLAW JENSVOLL"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 67\n        },\n        "andelSkattepliktigeInntekter": 495,\n        "andelFradragsberettigedeKostnader": 495,\n        "andelFormue": 2614,\n        "andelGjeld": 6093\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "22128126639",\n          "navn": "ARNE EMIL GR\xd8TTA"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 5\n        },\n        "andelSkattepliktigeInntekter": 389,\n        "andelFradragsberettigedeKostnader": 389,\n        "andelFormue": 2054,\n        "andelGjeld": 4787\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "31035117388",\n          "navn": "SEBASTIAN NORLI"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 87\n        },\n        "andelSkattepliktigeInntekter": 412,\n        "andelFradragsberettigedeKostnader": 412,\n        "andelFormue": 2178,\n        "andelGjeld": 5078\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "09085926443",\n          "navn": "LIV HEIDI OSBORNE"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 42\n        },\n        "andelSkattepliktigeInntekter": 377,\n        "andelFradragsberettigedeKostnader": 377,\n        "andelFormue": 1992,\n        "andelGjeld": 4642\n      },\n      {\n        "oppgaveeier": {\n          "organisasjonsnummer": "804266801",\n          "navn": "SENDREKTIGE BRILJANTE FANS AS"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 61\n        },\n        "andelSkattepliktigeInntekter": 353,\n        "andelFradragsberettigedeKostnader": 353,\n        "andelFormue": 1867,\n        "andelGjeld": 4352\n      },\n      {\n        "oppgaveeier": {\n          "organisasjonsnummer": "805518731",\n          "navn": "ROSA FLOTTE MUS AS"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 80\n        },\n        "andelSkattepliktigeInntekter": 441,\n        "andelFradragsberettigedeKostnader": 441,\n        "andelFormue": 2116,\n        "andelGjeld": 4933\n      },\n      {\n        "oppgaveeier": {\n          "organisasjonsnummer": "805518731",\n          "navn": "ROSA FLOTTE MUS AS"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 99\n        },\n        "andelSkattepliktigeInntekter": 989,\n        "andelFradragsberettigedeKostnader": 989,\n        "andelFormue": 5228,\n        "andelGjeld": 12186\n      },\n      {\n        "oppgaveeier": {\n          "organisasjonsnummer": "805518731",\n          "navn": "ROSA FLOTTE MUS AS"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 36\n        },\n        "andelSkattepliktigeInntekter": 683,\n        "andelFradragsberettigedeKostnader": 683,\n        "andelFormue": 3610,\n        "andelGjeld": 8414\n      },\n      {\n        "oppgaveeier": {\n          "organisasjonsnummer": "810382392",\n          "navn": "KONSERVATIVE GLADE KVINNER AS"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 55\n        },\n        "andelSkattepliktigeInntekter": 283,\n        "andelFradragsberettigedeKostnader": 283,\n        "andelFormue": 1494,\n        "andelGjeld": 3482\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "19116312894",\n          "navn": "SYLWESTER LARSEN"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 92\n        },\n        "andelSkattepliktigeInntekter": 824,\n        "andelFradragsberettigedeKostnader": 824,\n        "andelFormue": 4357,\n        "andelGjeld": 10155\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "14078907968",\n          "navn": "KJELL VIDAR K\xc5SA JANKOWSKA"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 24\n        },\n        "andelSkattepliktigeInntekter": 353,\n        "andelFradragsberettigedeKostnader": 353,\n        "andelFormue": 1867,\n        "andelGjeld": 4352\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "11107627822",\n          "navn": "KNUT ERIK GJELLESTAD"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 68\n        },\n        "andelSkattepliktigeInntekter": 389,\n        "andelFradragsberettigedeKostnader": 389,\n        "andelFormue": 2054,\n        "andelGjeld": 4787\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "07020069796",\n          "navn": "PER KRISTIAN FORFANG"\n        },\n        "eiertid": {\n          "start": "3012",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 74\n        },\n        "andelSkattepliktigeInntekter": 0,\n        "andelFradragsberettigedeKostnader": 0,\n        "andelFormue": 1276,\n        "andelGjeld": 2974\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "12060253798",\n          "navn": "\xc5SE MARIT HALVORSRUD"\n        },\n        "eiertid": {\n          "start": "3012",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 74\n        },\n        "andelSkattepliktigeInntekter": 0,\n        "andelFradragsberettigedeKostnader": 0,\n        "andelFormue": 1276,\n        "andelGjeld": 2974\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h4",{id:"eksempel-p\xe5-respons"},"Eksempel p\xe5 respons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",\n  "dialogelementId": "018f521e-5488-79e3-8817-48e94cb75455",\n  "oppgavegiversLeveranseReferanse": "leveranse-1",\n  "antallOppgaver": 23\n}\n'))),(0,r.kt)(o,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_008"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Strukturell feil i tilknyttet dataformat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_010"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_011"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_017"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uspesifisert systemfeil")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_019"),(0,r.kt)("td",{parentName:"tr",align:null},"409"),(0,r.kt)("td",{parentName:"tr",align:null},"Idempotensn\xf8kkel er benyttet tidligere")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_021"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Finner ikke forespurt ressurs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_022"),(0,r.kt)("td",{parentName:"tr",align:null},"405"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP-metode ikke st\xf8ttet")))),(0,r.kt)("p",null,"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi\nfeltene."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilspesifiseringskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"),(0,r.kt)("th",{parentName:"tr",align:null},"\xc5rsak"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1022"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i parametre"),(0,r.kt)("td",{parentName:"tr",align:null},"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1023"),(0,r.kt)("td",{parentName:"tr",align:null},"Finner ingen ressurs for denne urlen"),(0,r.kt)("td",{parentName:"tr",align:null},"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1027"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntekts\xe5r er ikke st\xf8ttet"),(0,r.kt)("td",{parentName:"tr",align:null},"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1028"),(0,r.kt)("td",{parentName:"tr",align:null},"Header mangler"),(0,r.kt)("td",{parentName:"tr",align:null},"P\xe5krevd header er ikke med i requesten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1030"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept-header m\xe5 v\xe6re av type application/json"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept header er feil. APIet har kun st\xf8tte for json i response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GLD_1047"),(0,r.kt)("td",{parentName:"tr",align:null},"Content type m\xe5 v\xe6re application/json"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-type header er feil. APIet har kun st\xf8tte for json i request body"))))),(0,r.kt)(o,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"boligsameie",src:t(12490).Z,width:"905",height:"800"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Eier"),(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Dokumentasjon"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"inntekts\xe5r"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntekts\xe5ret leveransen gjelder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"kildesystem"),(0,r.kt)("td",{parentName:"tr",align:null},"System brukt for \xe5 levere oppgaven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"leveransetype"),(0,r.kt)("td",{parentName:"tr",align:null},"Type av leveranse som angir om leveransen inneholder ordin\xe6re oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver \xe5 innrapportere")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgave"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgave som leveres")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgavegiver"),(0,r.kt)("td",{parentName:"tr",align:null},"Tredjepart som rapporterer opplysning til Skatteetaten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgavegiversLeveranseReferanse"),(0,r.kt)("td",{parentName:"tr",align:null},"Frivillig referanse p\xe5 innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgaveoppsummering"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppsummering med totalsummer for innleverte oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"sletteoppgave"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgave for sletting av tidligere innrapporterte oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Melding"),(0,r.kt)("td",{parentName:"tr",align:null},"leveranse"),(0,r.kt)("td",{parentName:"tr",align:null},"Selve leveransen. Merk at det kun er tillatt med en leveranse pr Melding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"andelFormue"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av felles formue i boligsameiet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"andelFradragsberettigedeKostnader"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av fradragsberettigede kostnader i boligsameiet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"andelGjeld"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av gjeld i boligselsameiet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"andelSkattepliktigeInntekter"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers andel av skattepliktige inntekter i boligsameiet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"eiertid"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeiers tid som eier av boenheten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Boenhetens matrikkelnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"Eier av oppgaven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"f\xf8dselsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"navn"),(0,r.kt)("td",{parentName:"tr",align:null},"Navn p\xe5 oppgaveeier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"organisasjonsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Organisasjonsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgavegiver"),(0,r.kt)("td",{parentName:"tr",align:null},"organisasjonsnavn"),(0,r.kt)("td",{parentName:"tr",align:null},"Navn p\xe5 oppgavegiver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oppgavegiver"),(0,r.kt)("td",{parentName:"tr",align:null},"organisasjonsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Organisasjonsnummer p\xe5 oppgavegiver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"antallOppgaver"),(0,r.kt)("td",{parentName:"tr",align:null},"Totalt antall oppgaver i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelFormue"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelFormue i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelFradragsberettigedeKostnader"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelFradragsberettigedeKostnader i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelGjeld"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelGjeld i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OppgaveoppsummeringBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"sumAndelSkattepliktigeInntekter"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum av andelSkattepliktigeInntekter i leveransens oppgaver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SletteoppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Boenhetens matrikkelnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SletteoppgaveBoligsameie"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgaveeier"),(0,r.kt)("td",{parentName:"tr",align:null},"Eier av sletteoppgaven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"bruksnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Del av matrikkelnummeret som sammen med kommunenummer, g\xe5rdsnummer og seksjonsnummer unikt identifiserer en eierseksjon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"festenummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Festenummer tilh\xf8rende eierseksjonen dersom eiendommen er festet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"g\xe5rdsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Del av matrikkelnummeret som sammen med kommunenummer, bruksnummer og seksjonsnummer unikt identifiserer en eierseksjon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"kommunenummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Boenhetens kommunenummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matrikkelnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"seksjonsnummer"),(0,r.kt)("td",{parentName:"tr",align:null},"Del av matrikkelnummeret som sammen med kommunenummer, g\xe5rdsnummer og bruksnummer unikt identifiserer en eierseksjon"))))),(0,r.kt)(o,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("p",null,"I f\xf8rste omgang er test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."),(0,r.kt)("h3",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md"},"Tenor")," for\ndenne tjenesten. Men egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."),(0,r.kt)("h3",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"Det finnes forel\xf8pig ingen testdata for denne tjenesten. Denne siden oppdateres fortl\xf8pende ettersom testdata blir\ntilgjengelig."))))}v.isMDXComponent=!0},12490:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Informasjonsmodell_Boligsameie-2bfce9e122e9e96a88ebaab0b5cc5820.png"}}]);