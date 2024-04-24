"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[2853],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var k=a.createContext({}),o=function(e){var n=a.useContext(k),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(k.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,b=d["".concat(k,".").concat(m)]||d[m]||g[m]||l;return t?a.createElement(b,i(i({ref:n},p),{},{components:t})):a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var k in n)hasOwnProperty.call(n,k)&&(s[k]=n[k]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={title:"Krav og betalinger API",slug:"/api/kravogbetalinger",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Innkreving"],keywords:["kravogbetalinger","krav og betalinger","innkreving"],last_updated:"Apr 24, 2024",hide_table_of_contents:!0},i=void 0,s={unversionedId:"api/kravogbetalinger",id:"api/kravogbetalinger",title:"Krav og betalinger API",description:"Tjeneste som tilbyr oversikt av krav, innbetalinger og utbetalinger tilh\xf8rende en part.",source:"@site/docs/api/kravogbetalinger.md",sourceDirName:"api",slug:"/api/kravogbetalinger",permalink:"/api-dokumentasjon/en/api/kravogbetalinger",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{label:"Innkreving",permalink:"/api-dokumentasjon/en/tags/innkreving"}],version:"current",frontMatter:{title:"Krav og betalinger API",slug:"/api/kravogbetalinger",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Innkreving"],keywords:["kravogbetalinger","krav og betalinger","innkreving"],last_updated:"Apr 24, 2024",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Inntektsmottakere API",permalink:"/api-dokumentasjon/en/api/inntektsmottakere"},next:{title:"Mva meldingsopplysning API",permalink:"/api-dokumentasjon/en/api/mva_meldingsopplysning"}},k={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Samtykke",id:"samtykke",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"\xc5pne krav",id:"\xe5pne-krav",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:3},{value:"Krav",id:"krav",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url-1",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons-1",level:3},{value:"Innbetalinger",id:"innbetalinger",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url-2",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons-2",level:3},{value:"Utbetalinger",id:"utbetalinger",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url-3",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons-3",level:3},{value:"Modell pr endepunkt",id:"modell-pr-endepunkt",level:2},{value:"\xc5pne krav",id:"\xe5pne-krav-1",level:3},{value:"Krav",id:"krav-1",level:3},{value:"Innbetalinger",id:"innbetalinger-1",level:3},{value:"Utbetalinger",id:"utbetalinger-1",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},d=p("Tabs"),g=p("TabItem"),m={toc:o},b="wrapper";function u(e){let{components:n,...l}=e;return(0,r.kt)(b,(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,(0,r.kt)("p",null,"Tjeneste som tilbyr oversikt av krav, innbetalinger og utbetalinger tilh\xf8rende en part. ")),(0,r.kt)(d,{underline:!0,mdxType:"Tabs"},(0,r.kt)(g,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:kravogbetalinger")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Krav og betalinger API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/skatteetaten/krav-og-betalinger-api"},"Open API spesifikasjonen")," p\xe5 SwaggerHub."),(0,r.kt)("p",null,"API-et har 4 endepunkter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\xc5pne krav"),": Hent oversikt over \xe5pne krav og uplasserte innbetalinger. Gj\xf8r oppslag mot reskontrosystemene p\xe5 \xe5pne\nkrav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Krav"),": Hent alle krav innen et gitt tidsrom. Gj\xf8r oppslag mot reskontrosystemene p\xe5 alle krav innen et gitt tidsrom\np\xe5 maks ett \xe5r."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Innbetalinger"),": Hent alle innbetalinger innen et gitt tidsrom. Gj\xf8r oppslag mot reskontrosystemene p\xe5 alle\ninnbetalinger innen et gitt tidsrom p\xe5 maks ett \xe5r."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Utbetalinger"),": Hent alle utbetalinger innen et gitt tidsrom. Gj\xf8r oppslag mot reskontrosystemene p\xe5 alle\nutbetalinger innen et gitt tidsrom p\xe5 maks ett \xe5r.")),(0,r.kt)("p",null,"Se ogs\xe5 ",(0,r.kt)("a",{parentName:"p",href:"kravogbetalinger?tab=Eksempler"},"eksempler")," for de ulike endepunktene."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("p",null,"For denne tjenesten finns f\xf8lgende rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"),(0,r.kt)("th",{parentName:"tr",align:null},"Form\xe5l med rettighetspakke"),(0,r.kt)("th",{parentName:"tr",align:null},"Egenskaper ved rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"finans"),(0,r.kt)("td",{parentName:"tr",align:null},"Banker og finansforetak som skal vise krav og betalinger i nettbank"),(0,r.kt)("td",{parentName:"tr",align:null},"Finans-rettighetspakken krever bruk av Altinn-samtykke, og den gir tilgang til alle 4 endepunkter med oppslag for virksomheter (vil etter hvert bli utvidet ogs\xe5 til oppslag for personer)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regnskapssystem"),(0,r.kt)("td",{parentName:"tr",align:null},"Regnskapssystemer som skal vise krav og betalinger i sine sluttbrukersystemer"),(0,r.kt)("td",{parentName:"tr",align:null},"Regnskapssystem-rettighetspakken krever bruk av den nye Systembruker-l\xf8sningen fra Digdir for virksomhet, og gir tilgang til alle 4 endepunkter. Det kommer mer informasjon om Systembruker etter hvert. I pilotfasen vil systemleverand\xf8rer kun f\xe5 tilgang til egne data.")))),(0,r.kt)("h2",{id:"samtykke"},"Samtykke"),(0,r.kt)("p",null,"For rettighetspakken ",(0,r.kt)("inlineCode",{parentName:"p"},"finans")," kreves ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/samtykke"},"samtykke")," for dette API-et."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ServiceCode"),(0,r.kt)("th",{parentName:"tr",align:null},"ServiceEditionCode"),(0,r.kt)("th",{parentName:"tr",align:null},"Form\xe5l"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5928"),(0,r.kt)("td",{parentName:"tr",align:null},"202301"),(0,r.kt)("td",{parentName:"tr",align:null},"Kreves for rettighetspakken ",(0,r.kt)("inlineCode",{parentName:"td"},"finans"))))),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"Siden dette er en beta-tjeneste, er den pt. ikke publisert i Felles datakatalog.")),(0,r.kt)(g,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"\xe5pne-krav"},"\xc5pne krav"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://{env}/api/innkreving/kravogbetalinger/v1/finans/212201782/aapnekrav\n")),(0,r.kt)("h3",{id:"eksempel-p\xe5-respons"},"Eksempel p\xe5 respons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "212201782",\n  "skjermet": false,\n  "aapentKravMedGjenstaaendeBeloep": [\n    {\n      "partIdentifikator": "212201782",\n      "kravidentifikator": "krav-1234",\n      "kravtype": "RESTSKATT",\n      "opprinneligBeloep": 10000.0,\n      "gjenstaaendeBeloep": 10000.0,\n      "kravforfall": [\n        {\n          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n          "forfallsdato": "2023-02-21",\n          "opprinneligBeloep": 10000.0,\n          "gjenstaaendeBeloep": 10000.0,\n          "betalingsinformasjon": {\n            "konto": {\n              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",\n              "kontonummer": "63450624804",\n              "iban": "NO42 6345 06 24804",\n              "swiftBIC": "NDEANOKK"\n            }\n          },\n          "plassertInnbetaling": [\n            {\n              "innbetalingsIdentifikator": "inn-12345",\n              "plassertBeloep": -1000.0,\n              "plassertDato": "2023-02-05",\n              "innbetalingsdato": "2023-01-30",\n              "innbetaltBeloep": 0.0,\n              "innbetaltFra": {\n                "konto": {}\n              },\n              "innbetalingstype": "Bankoverf\xf8ring"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n              "plassertBeloep": -1000.0,\n              "kravtype": "RESTSKATT",\n              "plassertDato": "2023-02-05",\n              "kravbeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Restskatt",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "forfallsdato": "2023-01-30",\n              "kravperiode": {\n                "periodeBeskrivelse": {\n                  "spraakTekst": [\n                    {\n                      "tekst": "2023/02",\n                      "spraak": "nb"\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      ],\n      "stipulerteRenter": 200.0,\n      "kravbeskrivelse": {\n        "spraakTekst": [\n          {\n            "tekst": "Restskatt",\n            "spraak": "nb"\n          }\n        ]\n      },\n      "kravperiode": {\n        "periodeBeskrivelse": {\n          "spraakTekst": [\n            {\n              "tekst": "2023/02",\n              "spraak": "nb"\n            }\n          ]\n        }\n      },\n      "opprettelsesdatoForKrav": "2023-01-30",\n      "kravgruppe": "Skatt",\n      "fastsettingsmaate": "blank"\n    },\n    {\n      "partIdentifikator": "04827896468",\n      "kravidentifikator": "krav-1234",\n      "kravtype": "RESTSKATT",\n      "opprinneligBeloep": 10000.0,\n      "gjenstaaendeBeloep": 10000.0,\n      "kravforfall": [\n        {\n          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n          "forfallsdato": "2023-02-21",\n          "opprinneligBeloep": 10000.0,\n          "gjenstaaendeBeloep": 10000.0,\n          "betalingsinformasjon": {\n            "konto": {\n              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",\n              "kontonummer": "63450624804",\n              "iban": "NO42 6345 06 24804",\n              "swiftBIC": "NDEANOKK"\n            }\n          },\n          "plassertInnbetaling": [\n            {\n              "innbetalingsIdentifikator": "inn-12345",\n              "plassertBeloep": -1000.0,\n              "plassertDato": "2023-02-05",\n              "innbetalingsdato": "2023-01-30",\n              "innbetaltBeloep": 0.0,\n              "innbetaltFra": {\n                "konto": {}\n              },\n              "innbetalingstype": "Bankoverf\xf8ring"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n              "plassertBeloep": -1000.0,\n              "kravtype": "RESTSKATT",\n              "plassertDato": "2023-02-05",\n              "kravbeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Restskatt",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "forfallsdato": "2023-01-30",\n              "kravperiode": {\n                "periodeBeskrivelse": {\n                  "spraakTekst": [\n                    {\n                      "tekst": "2023/02",\n                      "spraak": "nb"\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      ],\n      "stipulerteRenter": 200.0,\n      "kravbeskrivelse": {\n        "spraakTekst": [\n          {\n            "tekst": "Restskatt",\n            "spraak": "nb"\n          }\n        ]\n      },\n      "kravperiode": {\n        "periodeBeskrivelse": {\n          "spraakTekst": [\n            {\n              "tekst": "2023/02",\n              "spraak": "nb"\n            }\n          ]\n        }\n      },\n      "opprettelsesdatoForKrav": "2023-01-30",\n      "kravgruppe": "Skatt",\n      "fastsettingsmaate": "blank"\n    }\n  ],\n  "innbetalingMedUplassertBeloep": [\n    {\n      "partIdentifikator": "212201782",\n      "innbetalingsidentifikator": "inn-1234",\n      "innbetalingsdato": "2023-03-01",\n      "innbetaltBeloep": 1000.0,\n      "uplassertBeloep": 0.0,\n      "mottakersKontonummer": {\n        "kontonummer": "98766543210"\n      },\n      "innbetaltFra": {\n        "konto": {\n          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",\n          "kontonummer": "******43210"\n        }\n      },\n      "innbetalingstype": "bankoverf\xf8ring"\n    },\n    {\n      "partIdentifikator": "04827896468",\n      "innbetalingsidentifikator": "inn-1234",\n      "innbetalingsdato": "2023-03-01",\n      "innbetaltBeloep": 1000.0,\n      "uplassertBeloep": 0.0,\n      "mottakersKontonummer": {\n        "kontonummer": "98766543210"\n      },\n      "innbetaltFra": {\n        "konto": {\n          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",\n          "kontonummer": "******43210"\n        }\n      },\n      "innbetalingstype": "bankoverf\xf8ring"\n    }\n  ],\n  "totalOversikt": {\n    "sumStipulerteRenter": 400.0,\n    "sumForfalteKrav": 20000.0,\n    "sumIkkeForfalteKrav": 0.0,\n    "sumUplasserteInnbetalinger": 0.0,\n    "saldo": 20400.0\n  },\n  "oversiktPerKravgruppe": [\n    {\n      "kravgruppe": "Skatt",\n      "sumStipulerteRenter": 400.0,\n      "sumForfalteKrav": 20000.0,\n      "sumIkkeForfalteKrav": 0.0,\n      "saldo": 20400.0\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"krav"},"Krav"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url-1"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://{env}/api/innkreving/kravogbetalinger/v1/finans/212201782/krav?fraOgMed=2023-01-01&tilOgMed=2023-09-01\n")),(0,r.kt)("h3",{id:"eksempel-p\xe5-respons-1"},"Eksempel p\xe5 respons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "212201782",\n  "periode": {\n    "fraOgMed": "2023-01-01",\n    "tilOgMed": "2023-09-01"\n  },\n  "skjermet": false,\n  "krav": [\n    {\n      "partIdentifikator": "212201782",\n      "kravidentifikator": "krav-1234",\n      "kravtype": "RESTSKATT",\n      "opprinneligBeloep": 10000.0,\n      "gjenstaaendeBeloep": 10000.0,\n      "kravforfall": [\n        {\n          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n          "forfallsdato": "2023-02-21",\n          "opprinneligBeloep": 10000.0,\n          "gjenstaaendeBeloep": 10000.0,\n          "betalingsinformasjon": {\n            "konto": {\n              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",\n              "kontonummer": "63450624804",\n              "iban": "NO42 6345 06 24804",\n              "swiftBIC": "NDEANOKK"\n            }\n          },\n          "plassertInnbetaling": [\n            {\n              "innbetalingsIdentifikator": "inn-12345",\n              "plassertBeloep": -1000.0,\n              "plassertDato": "2023-02-05",\n              "innbetalingsdato": "2023-01-30",\n              "innbetaltBeloep": 0.0,\n              "innbetaltFra": {\n                "konto": {}\n              },\n              "innbetalingstype": "Bankoverf\xf8ring"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n              "plassertBeloep": -1000.0,\n              "kravtype": "RESTSKATT",\n              "plassertDato": "2023-02-05",\n              "kravbeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Restskatt",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "forfallsdato": "2023-01-30",\n              "kravperiode": {\n                "periodeBeskrivelse": {\n                  "spraakTekst": [\n                    {\n                      "tekst": "2023/02",\n                      "spraak": "nb"\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      ],\n      "stipulerteRenter": 200.0,\n      "kravbeskrivelse": {\n        "spraakTekst": [\n          {\n            "tekst": "Restskatt",\n            "spraak": "nb"\n          }\n        ]\n      },\n      "kravperiode": {\n        "periodeBeskrivelse": {\n          "spraakTekst": [\n            {\n              "tekst": "2023/02",\n              "spraak": "nb"\n            }\n          ]\n        }\n      },\n      "opprettelsesdatoForKrav": "2023-01-30",\n      "kravgruppe": "Skatt",\n      "fastsettingsmaate": "blank"\n    },\n    {\n      "partIdentifikator": "04827896468",\n      "kravidentifikator": "krav-1234",\n      "kravtype": "RESTSKATT",\n      "opprinneligBeloep": 10000.0,\n      "gjenstaaendeBeloep": 10000.0,\n      "kravforfall": [\n        {\n          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n          "forfallsdato": "2023-02-21",\n          "opprinneligBeloep": 10000.0,\n          "gjenstaaendeBeloep": 10000.0,\n          "betalingsinformasjon": {\n            "konto": {\n              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",\n              "kontonummer": "63450624804",\n              "iban": "NO42 6345 06 24804",\n              "swiftBIC": "NDEANOKK"\n            }\n          },\n          "plassertInnbetaling": [\n            {\n              "innbetalingsIdentifikator": "inn-12345",\n              "plassertBeloep": -1000.0,\n              "plassertDato": "2023-02-05",\n              "innbetalingsdato": "2023-01-30",\n              "innbetaltBeloep": 0.0,\n              "innbetaltFra": {\n                "konto": {}\n              },\n              "innbetalingstype": "Bankoverf\xf8ring"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n              "plassertBeloep": -1000.0,\n              "kravtype": "RESTSKATT",\n              "plassertDato": "2023-02-05",\n              "kravbeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Restskatt",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "forfallsdato": "2023-01-30",\n              "kravperiode": {\n                "periodeBeskrivelse": {\n                  "spraakTekst": [\n                    {\n                      "tekst": "2023/02",\n                      "spraak": "nb"\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      ],\n      "stipulerteRenter": 200.0,\n      "kravbeskrivelse": {\n        "spraakTekst": [\n          {\n            "tekst": "Restskatt",\n            "spraak": "nb"\n          }\n        ]\n      },\n      "kravperiode": {\n        "periodeBeskrivelse": {\n          "spraakTekst": [\n            {\n              "tekst": "2023/02",\n              "spraak": "nb"\n            }\n          ]\n        }\n      },\n      "opprettelsesdatoForKrav": "2023-01-30",\n      "kravgruppe": "Skatt",\n      "fastsettingsmaate": "blank"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"innbetalinger"},"Innbetalinger"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url-2"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/212201782/innbetalinger?fraOgMed=2023-01-01&tilOgMed=2023-09-01\n")),(0,r.kt)("h3",{id:"eksempel-p\xe5-respons-2"},"Eksempel p\xe5 respons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "212201782",\n  "periode": {\n    "fraOgMed": "2023-01-01",\n    "tilOgMed": "2023-09-01"\n  },\n  "skjermet": false,\n  "innbetaling": [\n    {\n      "partIdentifikator": "212201782",\n      "innbetalingsidentifikator": "inn-1234",\n      "innbetalingsdato": "2023-03-01",\n      "innbetaltBeloep": 1000.0,\n      "uplassertBeloep": 0.0,\n      "mottakersKontonummer": {\n        "kontonummer": "98766543210"\n      },\n      "innbetaltFra": {\n        "konto": {\n          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",\n          "kontonummer": "******43210"\n        }\n      },\n      "innbetalingstype": "bankoverf\xf8ring"\n    },\n    {\n      "partIdentifikator": "04827896468",\n      "innbetalingsidentifikator": "inn-1234",\n      "innbetalingsdato": "2023-03-01",\n      "innbetaltBeloep": 1000.0,\n      "uplassertBeloep": 0.0,\n      "mottakersKontonummer": {\n        "kontonummer": "98766543210"\n      },\n      "innbetaltFra": {\n        "konto": {\n          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",\n          "kontonummer": "******43210"\n        }\n      },\n      "innbetalingstype": "bankoverf\xf8ring"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"utbetalinger"},"Utbetalinger"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url-3"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/utbetalinger?fraOgMed=2022-01-01&tilOgMed=2021-12-31\n")),(0,r.kt)("h3",{id:"eksempel-p\xe5-respons-3"},"Eksempel p\xe5 respons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "312438623",\n  "periode": {\n    "fraOgMed": "2023-01-01",\n    "tilOgMed": "2023-09-01"\n  },\n  "skjermet": false,\n  "utbetaling": [\n    {\n      "partIdentifikator": "312438623",\n      "utbetalingsidentifikator": "147654",\n      "utbetaltdato": "2023-08-21",\n      "utbetaltBeloep": 62374.0,\n      "betaltTil": {\n        "meldingSendtTilMottaker": "Tilgode skatt 2023",\n        "konto": {\n          "kontoeiersNavn": "OVERF\xd8LSOM GLAD TIGER AS",\n          "kontonummer": "627xxxxxx"\n        },\n        "valutakode": "NOK"\n      },\n      "grunnlagForUtbetaling": {\n        "kreditKrav": [\n          {\n            "kravforfallidentifikator": "6412123",\n            "opprinneligBeloep": -62374.0,\n            "gjenstaaendeBeloep": 0.0,\n            "utbetaltBeloep": 62374.0,\n            "kravbeskrivelse": {\n              "spraakTekst": [\n                {\n                  "tekst": "Tibakebetaling restskatt - 2023",\n                  "spraak": "nb"\n                }\n              ]\n            },\n            "kravtype": "RESTERENDE_SKT_TILB",\n            "kravperiode": {\n              "periodeBeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Inntektst\xe5r",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "aar": "2023"\n            }\n          }\n        ]\n      },\n      "utbetalingstatus": "bekreftet"\n    },\n    {\n      "partIdentifikator": "312438623",\n      "utbetalingsidentifikator": "147654",\n      "utbetaltdato": "2023-08-21",\n      "utbetaltBeloep": 62374.0,\n      "betaltTil": {\n        "meldingSendtTilMottaker": "Tilgode skatt 2023",\n        "konto": {\n          "kontoeiersNavn": "OVERF\xd8LSOM GLAD TIGER AS",\n          "kontonummer": "627xxxxxx"\n        },\n        "valutakode": "NOK"\n      },\n      "grunnlagForUtbetaling": {\n        "kreditKrav": [\n          {\n            "kravforfallidentifikator": "6412123",\n            "opprinneligBeloep": -62374.0,\n            "gjenstaaendeBeloep": 0.0,\n            "utbetaltBeloep": 62374.0,\n            "kravbeskrivelse": {\n              "spraakTekst": [\n                {\n                  "tekst": "Tibakebetaling restskatt - 2023",\n                  "spraak": "nb"\n                }\n              ]\n            },\n            "kravtype": "RESTERENDE_SKT_TILB",\n            "kravperiode": {\n              "periodeBeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Inntektst\xe5r",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "aar": "2023"\n            }\n          }\n        ]\n      },\n      "utbetalingstatus": "bekreftet"\n    },\n    {\n      "partIdentifikator": "312438623",\n      "utbetalingsidentifikator": "147654",\n      "utbetaltdato": "2023-08-21",\n      "utbetaltBeloep": 62374.0,\n      "betaltTil": {\n        "meldingSendtTilMottaker": "Tilgode skatt 2023",\n        "konto": {\n          "kontoeiersNavn": "OVERF\xd8LSOM GLAD TIGER AS",\n          "kontonummer": "627xxxxxx"\n        },\n        "valutakode": "NOK"\n      },\n      "grunnlagForUtbetaling": {\n        "kreditKrav": [\n          {\n            "kravforfallidentifikator": "6412123",\n            "opprinneligBeloep": -62374.0,\n            "gjenstaaendeBeloep": 0.0,\n            "utbetaltBeloep": 62374.0,\n            "kravbeskrivelse": {\n              "spraakTekst": [\n                {\n                  "tekst": "Tibakebetaling restskatt - 2023",\n                  "spraak": "nb"\n                }\n              ]\n            },\n            "kravtype": "RESTERENDE_SKT_TILB",\n            "kravperiode": {\n              "periodeBeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Inntektst\xe5r",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "aar": "2023"\n            }\n          }\n        ]\n      },\n      "utbetalingstatus": "bekreftet"\n    }\n  ]\n}\n'))),(0,r.kt)(g,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med samtykketoken.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Fant ingen krav/betalinger p\xe5 angitt identifikator og periode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-008"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-009"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen treff p\xe5 oppgitt identifikator."))))),(0,r.kt)(g,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,"Her ser du hele informasjonsmodellen for Krav og betalinger API med alle 4 endepunktene."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(92744).Z},(0,r.kt)("img",{alt:"Informasjonsmodell",src:t(16723).Z,width:"1651",height:"1940"}))),(0,r.kt)("h2",{id:"modell-pr-endepunkt"},"Modell pr endepunkt"),(0,r.kt)("h3",{id:"\xe5pne-krav-1"},"\xc5pne krav"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(43341).Z},(0,r.kt)("img",{alt:"\xe5pnekrav",src:t(64830).Z,width:"1651",height:"1940"}))),(0,r.kt)("h3",{id:"krav-1"},"Krav"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(91570).Z},(0,r.kt)("img",{alt:"krav",src:t(55380).Z,width:"1653",height:"1940"}))),(0,r.kt)("h3",{id:"innbetalinger-1"},"Innbetalinger"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(3616).Z},(0,r.kt)("img",{alt:"innbetalinger",src:t(37513).Z,width:"1763",height:"1940"}))),(0,r.kt)("h3",{id:"utbetalinger-1"},"Utbetalinger"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(27879).Z},(0,r.kt)("img",{alt:"utbetalinger",src:t(68467).Z,width:"1686",height:"1936"})))),(0,r.kt)(g,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("p",null,"I f\xf8rste omgang er det test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."),(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/test/tenor"},"Tenor")," for denne tjenesten, og testdata er derfor listet her.\nMen egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."),(0,r.kt)("h2",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"F\xf8lgende enkeltmannsforetak (ENK) er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne.\nV\xe6r oppmerksom p\xe5 at det er et levende testdatasett som kan endre seg i l\xf8pet av testperioden. Ta kontakt dersom du har\nbehov for ytterligere testdata."),(0,r.kt)("p",null,"Obs. regnskapssystemer som tester vil i Test kunne gj\xf8re oppslag p\xe5 alle testvirksomheter, selv om de i pilotperioden kun kan gj\xf8re oppslag for egen virksomhet i Prod."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Organisasjonsnummer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"313367002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"311851381")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"314961900")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"314055403")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"212201782")))))))}u.isMDXComponent=!0},92744:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/Informasjonsmodell_Kravogbetalinger-83b7cef76d3e289656f523575a0becfd.png"},43341:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/Informasjonsmodell_Kravogbetalinger_Aapnekrav-ef702006a112a2b121c9baddee7d1ece.png"},3616:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/Informasjonsmodell_Kravogbetalinger_Innbetalinger-6386ccef411ab1ba5f678464c24e5df1.png"},91570:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/Informasjonsmodell_Kravogbetalinger_Krav-7f19ddaa89fe1b554b9fda2050117669.png"},27879:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/Informasjonsmodell_Kravogbetalinger_Utbetalinger-c1ce536ec083d26b7c78f09e4d822406.png"},16723:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Informasjonsmodell_Kravogbetalinger-83b7cef76d3e289656f523575a0becfd.png"},64830:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Informasjonsmodell_Kravogbetalinger_Aapnekrav-ef702006a112a2b121c9baddee7d1ece.png"},37513:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Informasjonsmodell_Kravogbetalinger_Innbetalinger-6386ccef411ab1ba5f678464c24e5df1.png"},55380:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Informasjonsmodell_Kravogbetalinger_Krav-7f19ddaa89fe1b554b9fda2050117669.png"},68467:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Informasjonsmodell_Kravogbetalinger_Utbetalinger-c1ce536ec083d26b7c78f09e4d822406.png"}}]);