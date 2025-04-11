"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8291],{54348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/utleggsbegjaering","title":"Utleggsbegj\xe6ring API","description":"Tjeneste som tilbyr oversikt av krav, innbetalinger og utbetalinger tilh\xf8rende en part.","source":"@site/docs/api/utleggsbegjaering.md","sourceDirName":"api","slug":"/api/utleggsbegjaering","permalink":"/api-dokumentasjon/api/utleggsbegjaering","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"Innkreving","permalink":"/api-dokumentasjon/tags/innkreving"}],"version":"current","frontMatter":{"title":"Utleggsbegj\xe6ring API","slug":"/api/utleggsbegjaering","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Innkreving"],"keywords":["utleggsbegjaering","innkreving"],"last_updated":"Apr 11, 2025","hide_table_of_contents":true}}');var s=t(74848),a=t(28453);const i={title:"Utleggsbegj\xe6ring API",slug:"/api/utleggsbegjaering",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Innkreving"],keywords:["utleggsbegjaering","innkreving"],last_updated:"Apr 11, 2025",hide_table_of_contents:!0},l=void 0,o={},d=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"\xc5pne krav",id:"\xe5pne-krav",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:3},{value:"Krav",id:"krav",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url-1",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons-1",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function k(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Summary:r,TabItem:i,Tabs:l}=n;return r||g("Summary",!0),i||g("TabItem",!0),l||g("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{children:"Tjeneste som tilbyr oversikt av krav, innbetalinger og utbetalinger tilh\xf8rende en part."}),"\n",(0,s.jsxs)(l,{underline:!0,children:[(0,s.jsxs)(i,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/systembruker",children:"Systembruker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:utleggsbegjaering"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,s.jsx)(n.code,{children:"Utleggstrekkbegj\xe6ring API - P\xe5 vegne av"})]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/utleggsbegjaering-app",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsx)(n.p,{children:"Dette API-et finnes forel\xf8pig ikke i Felles datakatalog."})]}),(0,s.jsxs)(i,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"\xe5pne-krav",children:"\xc5pne krav"}),(0,s.jsx)(n.h3,{id:"eksempel-p\xe5-request-url",children:"Eksempel p\xe5 request URL"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://{env}/api/innkreving/kravogbetalinger/v1/finans/212201782/aapnekrav\n"})}),(0,s.jsx)(n.h3,{id:"eksempel-p\xe5-respons",children:"Eksempel p\xe5 respons"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "partIdentifikator": "212201782",\n  "skjermet": false,\n  "aapentKravMedGjenstaaendeBeloep": [\n    {\n      "partIdentifikator": "212201782",\n      "kravidentifikator": "krav-1234",\n      "kravtype": "RESTSKATT",\n      "opprinneligBeloep": 10000.0,\n      "gjenstaaendeBeloep": 10000.0,\n      "kravforfall": [\n        {\n          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n          "forfallsdato": "2023-02-21",\n          "opprinneligBeloep": 10000.0,\n          "gjenstaaendeBeloep": 10000.0,\n          "betalingsinformasjon": {\n            "konto": {\n              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",\n              "kontonummer": "63450624804",\n              "iban": "NO42 6345 06 24804",\n              "swiftBIC": "NDEANOKK"\n            }\n          },\n          "plassertInnbetaling": [\n            {\n              "innbetalingsIdentifikator": "inn-12345",\n              "plassertBeloep": -1000.0,\n              "plassertDato": "2023-02-05",\n              "innbetalingsdato": "2023-01-30",\n              "innbetaltBeloep": 0.0,\n              "innbetaltFra": {\n                "konto": {}\n              },\n              "innbetalingstype": "Bankoverf\xf8ring"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n              "plassertBeloep": -1000.0,\n              "kravtype": "RESTSKATT",\n              "plassertDato": "2023-02-05",\n              "kravbeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Restskatt",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "forfallsdato": "2023-01-30",\n              "kravperiode": {\n                "periodeBeskrivelse": {\n                  "spraakTekst": [\n                    {\n                      "tekst": "2023/02",\n                      "spraak": "nb"\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      ],\n      "stipulerteRenter": 200.0,\n      "kravbeskrivelse": {\n        "spraakTekst": [\n          {\n            "tekst": "Restskatt",\n            "spraak": "nb"\n          }\n        ]\n      },\n      "kravperiode": {\n        "periodeBeskrivelse": {\n          "spraakTekst": [\n            {\n              "tekst": "2023/02",\n              "spraak": "nb"\n            }\n          ]\n        }\n      },\n      "opprettelsesdatoForKrav": "2023-01-30",\n      "kravgruppe": "Skatt",\n      "fastsettingsmaate": "blank"\n    },\n    {\n      "partIdentifikator": "04827896468",\n      "kravidentifikator": "krav-1234",\n      "kravtype": "RESTSKATT",\n      "opprinneligBeloep": 10000.0,\n      "gjenstaaendeBeloep": 10000.0,\n      "kravforfall": [\n        {\n          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n          "forfallsdato": "2023-02-21",\n          "opprinneligBeloep": 10000.0,\n          "gjenstaaendeBeloep": 10000.0,\n          "betalingsinformasjon": {\n            "konto": {\n              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",\n              "kontonummer": "63450624804",\n              "iban": "NO42 6345 06 24804",\n              "swiftBIC": "NDEANOKK"\n            }\n          },\n          "plassertInnbetaling": [\n            {\n              "innbetalingsIdentifikator": "inn-12345",\n              "plassertBeloep": -1000.0,\n              "plassertDato": "2023-02-05",\n              "innbetalingsdato": "2023-01-30",\n              "innbetaltBeloep": 0.0,\n              "innbetaltFra": {\n                "konto": {}\n              },\n              "innbetalingstype": "Bankoverf\xf8ring"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n              "plassertBeloep": -1000.0,\n              "kravtype": "RESTSKATT",\n              "plassertDato": "2023-02-05",\n              "kravbeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Restskatt",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "forfallsdato": "2023-01-30",\n              "kravperiode": {\n                "periodeBeskrivelse": {\n                  "spraakTekst": [\n                    {\n                      "tekst": "2023/02",\n                      "spraak": "nb"\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      ],\n      "stipulerteRenter": 200.0,\n      "kravbeskrivelse": {\n        "spraakTekst": [\n          {\n            "tekst": "Restskatt",\n            "spraak": "nb"\n          }\n        ]\n      },\n      "kravperiode": {\n        "periodeBeskrivelse": {\n          "spraakTekst": [\n            {\n              "tekst": "2023/02",\n              "spraak": "nb"\n            }\n          ]\n        }\n      },\n      "opprettelsesdatoForKrav": "2023-01-30",\n      "kravgruppe": "Skatt",\n      "fastsettingsmaate": "blank"\n    }\n  ],\n  "innbetalingMedUplassertBeloep": [\n    {\n      "partIdentifikator": "212201782",\n      "innbetalingsidentifikator": "inn-1234",\n      "innbetalingsdato": "2023-03-01",\n      "innbetaltBeloep": 1000.0,\n      "uplassertBeloep": 0.0,\n      "mottakersKontonummer": {\n        "kontonummer": "98766543210"\n      },\n      "innbetaltFra": {\n        "konto": {\n          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",\n          "kontonummer": "******43210"\n        }\n      },\n      "innbetalingstype": "bankoverf\xf8ring"\n    },\n    {\n      "partIdentifikator": "04827896468",\n      "innbetalingsidentifikator": "inn-1234",\n      "innbetalingsdato": "2023-03-01",\n      "innbetaltBeloep": 1000.0,\n      "uplassertBeloep": 0.0,\n      "mottakersKontonummer": {\n        "kontonummer": "98766543210"\n      },\n      "innbetaltFra": {\n        "konto": {\n          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",\n          "kontonummer": "******43210"\n        }\n      },\n      "innbetalingstype": "bankoverf\xf8ring"\n    }\n  ]\n}\n'})}),(0,s.jsx)(n.h2,{id:"krav",children:"Krav"}),(0,s.jsx)(n.h3,{id:"eksempel-p\xe5-request-url-1",children:"Eksempel p\xe5 request URL"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://{env}/api/innkreving/kravogbetalinger/v1/finans/212201782/krav?fraOgMed=2023-01-01&tilOgMed=2023-09-01\n"})}),(0,s.jsx)(n.h3,{id:"eksempel-p\xe5-respons-1",children:"Eksempel p\xe5 respons"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "partIdentifikator": "212201782",\n  "periode": {\n    "fraOgMed": "2023-01-01",\n    "tilOgMed": "2023-09-01"\n  },\n  "skjermet": false,\n  "krav": [\n    {\n      "partIdentifikator": "212201782",\n      "kravidentifikator": "krav-1234",\n      "kravtype": "RESTSKATT",\n      "opprinneligBeloep": 10000.0,\n      "gjenstaaendeBeloep": 10000.0,\n      "kravforfall": [\n        {\n          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n          "forfallsdato": "2023-02-21",\n          "opprinneligBeloep": 10000.0,\n          "gjenstaaendeBeloep": 10000.0,\n          "betalingsinformasjon": {\n            "konto": {\n              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",\n              "kontonummer": "63450624804",\n              "iban": "NO42 6345 06 24804",\n              "swiftBIC": "NDEANOKK"\n            }\n          },\n          "plassertInnbetaling": [\n            {\n              "innbetalingsIdentifikator": "inn-12345",\n              "plassertBeloep": -1000.0,\n              "plassertDato": "2023-02-05",\n              "innbetalingsdato": "2023-01-30",\n              "innbetaltBeloep": 0.0,\n              "innbetaltFra": {\n                "konto": {}\n              },\n              "innbetalingstype": "Bankoverf\xf8ring"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n              "plassertBeloep": -1000.0,\n              "kravtype": "RESTSKATT",\n              "plassertDato": "2023-02-05",\n              "kravbeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Restskatt",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "forfallsdato": "2023-01-30",\n              "kravperiode": {\n                "periodeBeskrivelse": {\n                  "spraakTekst": [\n                    {\n                      "tekst": "2023/02",\n                      "spraak": "nb"\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      ],\n      "stipulerteRenter": 200.0,\n      "kravbeskrivelse": {\n        "spraakTekst": [\n          {\n            "tekst": "Restskatt",\n            "spraak": "nb"\n          }\n        ]\n      },\n      "kravperiode": {\n        "periodeBeskrivelse": {\n          "spraakTekst": [\n            {\n              "tekst": "2023/02",\n              "spraak": "nb"\n            }\n          ]\n        }\n      },\n      "opprettelsesdatoForKrav": "2023-01-30",\n      "kravgruppe": "Skatt",\n      "fastsettingsmaate": "blank"\n    },\n    {\n      "partIdentifikator": "04827896468",\n      "kravidentifikator": "krav-1234",\n      "kravtype": "RESTSKATT",\n      "opprinneligBeloep": 10000.0,\n      "gjenstaaendeBeloep": 10000.0,\n      "kravforfall": [\n        {\n          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n          "forfallsdato": "2023-02-21",\n          "opprinneligBeloep": 10000.0,\n          "gjenstaaendeBeloep": 10000.0,\n          "betalingsinformasjon": {\n            "konto": {\n              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",\n              "kontonummer": "63450624804",\n              "iban": "NO42 6345 06 24804",\n              "swiftBIC": "NDEANOKK"\n            }\n          },\n          "plassertInnbetaling": [\n            {\n              "innbetalingsIdentifikator": "inn-12345",\n              "plassertBeloep": -1000.0,\n              "plassertDato": "2023-02-05",\n              "innbetalingsdato": "2023-01-30",\n              "innbetaltBeloep": 0.0,\n              "innbetaltFra": {\n                "konto": {}\n              },\n              "innbetalingstype": "Bankoverf\xf8ring"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",\n              "plassertBeloep": -1000.0,\n              "kravtype": "RESTSKATT",\n              "plassertDato": "2023-02-05",\n              "kravbeskrivelse": {\n                "spraakTekst": [\n                  {\n                    "tekst": "Restskatt",\n                    "spraak": "nb"\n                  }\n                ]\n              },\n              "forfallsdato": "2023-01-30",\n              "kravperiode": {\n                "periodeBeskrivelse": {\n                  "spraakTekst": [\n                    {\n                      "tekst": "2023/02",\n                      "spraak": "nb"\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      ],\n      "stipulerteRenter": 200.0,\n      "kravbeskrivelse": {\n        "spraakTekst": [\n          {\n            "tekst": "Restskatt",\n            "spraak": "nb"\n          }\n        ]\n      },\n      "kravperiode": {\n        "periodeBeskrivelse": {\n          "spraakTekst": [\n            {\n              "tekst": "2023/02",\n              "spraak": "nb"\n            }\n          ]\n        }\n      },\n      "opprettelsesdatoForKrav": "2023-01-30",\n      "kravgruppe": "Skatt",\n      "fastsettingsmaate": "blank"\n    }\n  ]\n}\n'})})]}),(0,s.jsxs)(i,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KB-001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KB-002"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KB-003"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KB-004"}),(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KB-005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med samtykketoken."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KB-006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KB-007"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Fant ingen krav/betalinger p\xe5 angitt identifikator og periode."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KB-008"}),(0,s.jsx)(n.td,{children:"406"}),(0,s.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KB-009"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ingen treff p\xe5 oppgitt identifikator."})]})]})]})]}),(0,s.jsxs)(i,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,s.jsx)(n.p,{children:"Her ser du hele informasjonsmodellen for Krav og betalinger API med alle 4 endepunktene."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(43654).A+"",children:(0,s.jsx)(n.img,{alt:"Informasjonsmodell",src:t(93042).A+"",width:"1651",height:"1940"})})})]}),(0,s.jsxs)(i,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.p,{children:"I f\xf8rste omgang er det test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."}),(0,s.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, og testdata er derfor listet her.\nMen egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."]}),(0,s.jsx)(n.h2,{id:"testdata",children:"Testdata"}),(0,s.jsx)(n.p,{children:"F\xf8lgende enkeltmannsforetak (ENK) er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne.\nV\xe6r oppmerksom p\xe5 at det er et levende testdatasett som kan endre seg i l\xf8pet av testperioden. Ta kontakt dersom du har\nbehov for ytterligere testdata."}),(0,s.jsx)(n.p,{children:"Obs. regnskapssystemer som tester vil i Test kunne gj\xf8re oppslag p\xe5 alle testvirksomheter, selv om de i pilotperioden kun kan gj\xf8re oppslag for egen virksomhet i Prod."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Organisasjonsnummer"})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"313367002"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"311851381"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"314961900"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"314055403"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"212201782"})})]})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},43654:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/Informasjonsmodell_Kravogbetalinger-83b7cef76d3e289656f523575a0becfd.png"},93042:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Informasjonsmodell_Kravogbetalinger-83b7cef76d3e289656f523575a0becfd.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);