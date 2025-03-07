"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8145],{91888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/innrapportering-innskuddutlaanrenter","title":"Innrapportering innskudd, utl\xe5n og renter API","description":"Tjeneste for innrapportering av tredjepartsopplysninger om innskudd, utl\xe5n og renter (RF-1183)","source":"@site/docs/api/innrapportering-innskuddutlaanrenter.md","sourceDirName":"api","slug":"/api/innrapportering-innskuddutlaanrenter","permalink":"/api-dokumentasjon/api/innrapportering-innskuddutlaanrenter","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"innskuddutlaanrenter","permalink":"/api-dokumentasjon/tags/innskuddutlaanrenter"},{"inline":true,"label":"innskudd","permalink":"/api-dokumentasjon/tags/innskudd"},{"inline":true,"label":"utl\xe5n","permalink":"/api-dokumentasjon/tags/utlan"},{"inline":true,"label":"renter","permalink":"/api-dokumentasjon/tags/renter"},{"inline":true,"label":"finans","permalink":"/api-dokumentasjon/tags/finans"}],"version":"current","frontMatter":{"title":"Innrapportering innskudd, utl\xe5n og renter API","slug":"/api/innrapportering-innskuddutlaanrenter","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","innskuddutlaanrenter","innskudd","utl\xe5n","renter","finans"],"keywords":["grunnlagsdata"],"last_updated":"Apr 29, 2024","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Innrapportering BSU API","permalink":"/api-dokumentasjon/api/innrapportering-bsu"},"next":{"title":"Innrapportering gaver til frivillige API","permalink":"/api-dokumentasjon/api/innrapportering-gavertilfrivillige"}}');var s=t(74848),i=t(28453);const d={title:"Innrapportering innskudd, utl\xe5n og renter API",slug:"/api/innrapportering-innskuddutlaanrenter",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","innskuddutlaanrenter","innskudd","utl\xe5n","renter","finans"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},l=void 0,a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Systemtilgang",id:"systemtilgang",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Parameter: idempotencyKey",id:"parameter-idempotencykey",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Innsending",id:"innsending",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"JSON",id:"json",level:3},{value:"Eksempel p\xe5 innsending",id:"eksempel-p\xe5-innsending",level:4},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:4},{value:"Eksempel p\xe5 sletteoppgave",id:"eksempel-p\xe5-sletteoppgave",level:4},{value:"Testmilj\xf8er",id:"testmilj\xf8er",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:3},{value:"Testdata",id:"testdata",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:r,TabItem:d,Tabs:l}=n;return r||j("Summary",!0),d||j("TabItem",!0),l||j("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{children:"Tjeneste for innrapportering av tredjepartsopplysninger om innskudd, utl\xe5n og renter (RF-1183)"}),"\n",(0,s.jsxs)(l,{underline:!0,children:[(0,s.jsxs)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/systembruker",children:"Systembruker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:innrapporteringinnskuddutlaanrenter"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsx)(n.p,{children:"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen."}),(0,s.jsx)(n.h2,{id:"systemtilgang",children:"Systemtilgang"}),(0,s.jsxs)(n.p,{children:["Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir.\nInformasjon vedr. dette finnes ",(0,s.jsx)(n.a,{href:"../om/systemtilgang.md",children:"her"}),"."]}),(0,s.jsx)(n.p,{children:"For \xe5 kunne benytte dette api'et med systemtilgang m\xe5 man gi f\xf8lgende rettighet til systemet ved opprettelse i systemregisteret:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JSON",children:'"Rights": [\n    {\n      "Resource": [\n        {\n          "value": "ske-innrapportering-innskudd-utlaan-renter",\n          "id": "urn:altinn:resource"\n        }\n      ]\n    }\n  ]\n'})}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen p\xe5\n",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/innrapportering-innskuddutlaanrenter-api/0.0.1",children:"SwaggerHub"})]}),(0,s.jsxs)(n.p,{children:["N\xf8dvendige \xe5pninger i en evt. brannmur er beskrevet ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"her"})]}),(0,s.jsx)(n.p,{children:"API-et for innrapportering av innskudd, utl\xe5n og renter har to endepunkter:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"POST innsending"}),": Mottar tredjepartsopplysninger om innskudd, utl\xe5n og renter. Et kall mot API-et sender inn\nrapportering av innskudd, utl\xe5n og renter for \xe9n oppgavegiver p\xe5 et gitt inntekts\xe5r."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GET uthenting_dokument"}),": Henter ut ett spesifikt dokument knyttet til en transmission i dialogporten"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["API-et validerer mottatte data mot JSON schema beskrevet p\xe5 SwaggerHub.\nSe ",(0,s.jsx)(n.a,{href:"innrapportering-innskuddutlaanrenter?tab=Feilkoder",children:"feilkoder"}),"\nfor relaterte feilmeldinger."]}),(0,s.jsxs)(n.p,{children:["Se ogs\xe5 ",(0,s.jsx)(n.a,{href:"innrapportering-innskuddutlaanrenter?tab=Eksempler",children:"eksempler"})," for de ulike endepunktene."]}),(0,s.jsx)(n.h3,{id:"parameter-idempotencykey",children:"Parameter: idempotencyKey"}),(0,s.jsx)(n.p,{children:"idempotencyKey-parameteren er p\xe5krevet. Innholdet skal v\xe6re en unik UUID. Hvert nye kall til API-et skal ha en ny\nidempotencyKey. Flere etterf\xf8lgende POST kall med samme request-body og samme idempotencyKey vil gi den\nsamme responsen. Kun det f\xf8rste av denne rekken med like API kall vil behandles. IdempotencyKey muliggj\xf8r at man trygt\nkan pr\xf8ve innsendinger p\xe5 nytt der man av ulike \xe5rsaker ikke har f\xe5tt en tilbakemelding fra API-et."}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsx)(n.p,{children:"Dette API-et er pt. ikke dokumentert i Felles datakatalog."})]}),(0,s.jsxs)(d,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"innsending",children:"Innsending"}),(0,s.jsx)(n.h3,{id:"eksempel-p\xe5-request-url",children:"Eksempel p\xe5 request URL"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://innrapporteringinnskuddutlaanrenter.api.{env}.no/v1/{inntektsaar}\n"})}),(0,s.jsx)(n.h3,{id:"json",children:"JSON"}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-innsending",children:"Eksempel p\xe5 innsending"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "leveranse": {\n    "kildesystem": "Kildesystemet v2.0.5",\n    "oppgavegiver": {\n      "organisasjonsnummer": "310218480",\n      "kontaktinformasjon": {\n        "navn": "Kari Kontakt",\n        "telefonnummer": "80080000",\n        "varselEpostadresse": "kontakt@eksempelbanken.no",\n        "varselSmsMobilnummer": "43999123"\n      }\n    },\n    "inntektsaar": 2023,\n    "oppgavegiversLeveranseReferanse": "2013_1",\n    "leveransetype": "ordinaer",\n    "presentasjonsnavn": "presentasjonsnavn",\n    "oppgave": [\n      {\n        "oppgaveeier": {\n          "oppgaveeierPerson": {\n            "foedselsnummer": "25044552222",\n            "fornavn": "Ola",\n            "etternavn": "Nordmann"\n          },\n          "sektorkode": "8500"\n        },\n        "kontonummer": "20130000100",\n        "skattekontoEgnethet": "1",\n        "innskudd": 50569,\n        "renter": {\n          "opptjenteRenter": 221\n        },\n        "kontotype": "innskuddskontoINok"\n      },\n      {\n        "oppgaveeier": {\n          "oppgaveeierOrganisasjon": {\n            "organisasjonsnummer": "987012345",\n            "organisasjonsnavn": "Kontoeier AS"\n          }\n        },\n        "kontonummer": "201300002000",\n        "skattekontoEgnethet": "0",\n        "utlaan": 0,\n        "innskudd": 5000,\n        "renter": {\n          "opptjenteRenter": 200,\n          "paaloepteRenter": 0\n        },\n        "kontotype": "laanekontoINok"\n      },\n      {\n        "oppgaveeier": {\n          "oppgaveeierOrganisasjon": {\n            "organisasjonsnummer": "000000000",\n            "organisasjonsnavn": "Forreningen"\n          },\n          "alternativIdentifikator": "InterntKundennummer123456",\n          "sektorkode": "7000"\n        },\n        "kontonummer": "201300003000",\n        "innskudd": 4500,\n        "renter": {\n          "opptjenteRenter": 3\n        },\n        "kontotype": "innskuddskontoINok",\n        "disponent": [\n          {\n            "disponentPerson": {\n              "foedselsnummer": "17046594876",\n              "fornavn": "Jens",\n              "etternavn": "Hansen"\n            }\n          }\n        ]\n      },\n      {\n        "oppgaveeier": {\n          "oppgaveeierPerson": {\n            "foedselsnummer": "12056700000",\n            "fornavn": "Jonas",\n            "mellomnavn": "August",\n            "etternavn": "Svensson"\n          },\n          "adresse": {\n            "landkode": "SE",\n            "adresseStrukturert": {\n              "adressenavn": "Hasselgatan 27",\n              "postkode": "61433",\n              "byEllerStedsnavn": "S\xf6derk\xf6ping",\n              "adresseTekstForUtskrift": "Utskrift"\n            }\n          },\n          "sektorkode": "9000"\n        },\n        "kontonummer": "20130000400",\n        "utlaan": 1000,\n        "innskudd": 45687,\n        "renter": {\n          "opptjenteRenter": 3,\n          "paaloepteRenter": 50\n        },\n        "kontotype": "laanekontoINok"\n      },\n      {\n        "oppgaveeier": {\n          "oppgaveeierOrganisasjon": {\n            "organisasjonsnummer": "000000000",\n            "organisasjonsnavn": "Garfield Street Auto Ltd"\n          },\n          "internasjonalIdentifikator": {\n            "identifikator": "900-70-0000",\n            "identifikatortype": "TIN",\n            "utstedtAvLand": "US"\n          },\n          "adresse": {\n            "landkode": "US",\n            "adresseStrukturert": {\n              "postboks": "POB 65502",\n              "postkode": "85728",\n              "byEllerStedsnavn": "TUCSON AZ",\n              "adresseTekstForUtskrift": "Utskrift"\n            }\n          },\n          "sektorkode": "9000"\n        },\n        "kontonummer": "00501300005000",\n        "utlaan": 0,\n        "innskudd": 50000000,\n        "renter": {\n          "opptjenteRenter": 150000,\n          "paaloepteRenter": 0\n        },\n        "kontotype": "innskuddskontoIUtenlandskValuta",\n        "valutakode": "USD",\n        "innskuddIAnnenValuta": 6250000,\n        "renteinntektIAnnenValuta": 18750\n      }\n    ],\n    "oppgaveoppsummering": {\n      "antallOppgaver": 5,\n      "sumInnskudd": 50105756,\n      "sumUtlaan": 1000,\n      "sumOpptjenteRenter": 150427,\n      "sumPaaloepteRenter": 50,\n      "sumBetalteMisligholdteRenter": 0,\n      "sumTilbakebetalteMisligholdteRenter": 0,\n      "sumSkattepliktigGevinst": 0,\n      "sumFradragsberettigetTap": 0\n    }\n  }\n}\n'})}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-respons",children:"Eksempel p\xe5 respons"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",\n  "forsendelseId": "018f521e-5488-79e3-8817-48e94cb75455",\n  "oppgavegiversLeveranseReferanse": "leveranse-1",\n  "antallOppgaver": 23\n}\n'})}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-sletteoppgave",children:"Eksempel p\xe5 sletteoppgave"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "leveranse": {\n    "kildesystem": "Kildesystemet v2.0.5",\n    "oppgavegiver": {\n      "organisasjonsnummer": "310218480",\n      "kontaktinformasjon": {\n        "navn": "Kari Kontakt",\n        "telefonnummer": "80080000",\n        "varselEpostadresse": "kontakt@eksempelbanken.no",\n        "varselSmsMobilnummer": "43999123"\n      }\n    },\n    "inntektsaar": 2023,\n    "oppgavegiversLeveranseReferanse": "2016_3",\n    "leveransetype": "ordinaer",\n    "sletteoppgave": [\n      {\n        "oppgaveeierOrganisasjonsnummer": "000000000",\n        "oppgaveeierAlternativIdentifikator": "InterntKundennummer123456",\n        "kontonummer": "201300003000"\n      }\n    ],\n    "oppgaveoppsummering": {\n      "antallOppgaver": 1,\n      "sumInnskudd": 0,\n      "sumUtlaan": 0,\n      "sumOpptjenteRenter": 0,\n      "sumPaaloepteRenter": 0,\n      "sumBetalteMisligholdteRenter": 0,\n      "sumTilbakebetalteMisligholdteRenter": 0,\n      "sumSkattepliktigGevinst": 0,\n      "sumFradragsberettigetTap": 0\n    }\n  }\n}\n'})})]}),(0,s.jsxs)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i request"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_008"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Strukturell feil i tilknyttet dataformat"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_010"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av payload"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_011"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i metadata"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_017"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uspesifisert systemfeil"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_019"}),(0,s.jsx)(n.td,{children:"409"}),(0,s.jsx)(n.td,{children:"Idempotensn\xf8kkel er benyttet tidligere"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_021"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Finner ikke forespurt ressurs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_022"}),(0,s.jsx)(n.td,{children:"405"}),(0,s.jsx)(n.td,{children:"HTTP-metode ikke st\xf8ttet"})]})]})]}),(0,s.jsx)(n.p,{children:"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi\nfeltene."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilspesifiseringskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"}),(0,s.jsx)(n.th,{children:"\xc5rsak"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1007"}),(0,s.jsx)(n.td,{children:"Mangler Token"}),(0,s.jsx)(n.td,{children:"Det er ikke lagt ved noen authorization header med token p\xe5 request"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1008"}),(0,s.jsx)(n.td,{children:"Ugyldig token"}),(0,s.jsx)(n.td,{children:"Token oppgitt i authorization header er ugyldig"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1015"}),(0,s.jsx)(n.td,{children:"Ikke autorisert for \xe5 levere p\xe5 denne dialogen"}),(0,s.jsx)(n.td,{children:"Organisasjonen som leverer har ikke rettighet til \xe5 levere for denne oppgavegiveren"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1022"}),(0,s.jsx)(n.td,{children:"Feil i parametre"}),(0,s.jsx)(n.td,{children:"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1023"}),(0,s.jsx)(n.td,{children:"Finner ingen ressurs for denne urlen"}),(0,s.jsx)(n.td,{children:"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1027"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r er ikke st\xf8ttet"}),(0,s.jsx)(n.td,{children:"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1028"}),(0,s.jsx)(n.td,{children:"Header mangler"}),(0,s.jsx)(n.td,{children:"P\xe5krevd header er ikke med i requesten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1030"}),(0,s.jsx)(n.td,{children:"Accept-header m\xe5 v\xe6re av type application/json"}),(0,s.jsx)(n.td,{children:"Accept header er feil. APIet har kun st\xf8tte for json i response"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1032"}),(0,s.jsx)(n.td,{children:"Feil i JSON-innhold"}),(0,s.jsx)(n.td,{children:"Innhold i JSON er ikke i henhold til spesifikasjonen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1047"}),(0,s.jsx)(n.td,{children:"Content type m\xe5 v\xe6re application/json"}),(0,s.jsx)(n.td,{children:"Content-type header er feil. APIet har kun st\xf8tte for json i request body"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1050"}),(0,s.jsx)(n.td,{children:"Finner ikke et dokument med denne IDen p\xe5 denne forsendelsen"}),(0,s.jsx)(n.td,{children:"Det finnes ikke noe dokument med gitt id p\xe5 angitt forsendelse"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1052"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r i path og i innsending er ulike"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r i innsending i JSON body og inntekts\xe5r i path m\xe5 v\xe6re like"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1053"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system, vennligst pr\xf8v igjen senere"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1054"}),(0,s.jsx)(n.td,{children:"Det finnes ingen dialog for denne kombinasjonen av inntekts\xe5r, organisjonsnummer og ordning"}),(0,s.jsx)(n.td,{children:"Det har blitt fors\xf8kt \xe5 hente ut dokument p\xe5 en dialog som ikke finnes"})]})]})]})]}),(0,s.jsxs)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"innskuddutlaanrenter",src:t(32110).A+"",width:"2098",height:"1756"})}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Eier"}),(0,s.jsx)(n.th,{children:"Element"}),(0,s.jsx)(n.th,{children:"Dokumentasjon"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Melding"}),(0,s.jsx)(n.td,{children:"leveranse"}),(0,s.jsx)(n.td,{children:"Selve leveransen. Merk at det kun er tillatt med \xe9n leveranse pr Melding"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"inntekts\xe5r"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5ret leveransen gjelder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"kildesystem"}),(0,s.jsx)(n.td,{children:"System brukt for \xe5 levere oppgaven"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"leveransetype"}),(0,s.jsx)(n.td,{children:"Type av leveranse som angir om leveransen inneholder ordin\xe6re oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver \xe5 innrapportere"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"Oppgave(r) som leveres"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"sletteoppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"Sletteoppgave(r) som leveres"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgavegiver"}),(0,s.jsx)(n.td,{children:"Tredjepart som rapporterer opplysning til Skatteetaten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgavegiversLeveranseReferanse"}),(0,s.jsx)(n.td,{children:"Frivillig referanse p\xe5 innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"Oppsummering med totalsummer for innleverte oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"presentasjonsnavn"}),(0,s.jsx)(n.td,{children:"Erstatter oppgavegivers navn i skatteyters skattemelding. NB! Kan bare benyttes etter avtale med Skatteetaten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"kontonummer"}),(0,s.jsx)(n.td,{children:"Unikt identifiserende felt for en konto for en oppgaveeier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"skattekontoEgnethet"}),(0,s.jsx)(n.td,{children:"Kun aktuelt for banker. Prioritering om kontoen kan brukes for utbetaling av overskytende skatt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"utl\xe5n"}),(0,s.jsx)(n.td,{children:"Saldo p\xe5 kontoen (i hele norske kroner) ved \xe5rsskiftet hvis kontoen gjelder utl\xe5n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"innskudd"}),(0,s.jsx)(n.td,{children:"Saldo p\xe5 kontoen (i hele norske kroner) ved \xe5rsskiftet hvis kontoen gjelder innskudd"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"renter"}),(0,s.jsx)(n.td,{children:"Opptjente renter (i hele norske kroner) ved \xe5rsskiftet hvis kontoen gjelder innskudd"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"kontotype"}),(0,s.jsx)(n.td,{children:"Informasjon om kontoen som rapporters er en innskudds-, eller l\xe5nekonto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"valutakode"}),(0,s.jsx)(n.td,{children:"Er en 3 sifret bokstavkode som identifiserer et lands offisielle myntenhet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"gevinstEllerTap"}),(0,s.jsx)(n.td,{children:"Informasjon om skattepliktig gevinst, eller fradragsberettiget tap"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"innskuddIAnnenValuta"}),(0,s.jsx)(n.td,{children:"Innskudd i original valuta (heltall)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"renteinntektIAnnenValuta"}),(0,s.jsx)(n.td,{children:"Renteinntekter i original valuta (heltall)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"oppgaveeier"}),(0,s.jsx)(n.td,{children:"Person eller organisasjon oppgaven gjelder for"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"disponent"}),(0,s.jsx)(n.td,{children:"Informasjon om disponenter av kontoen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"medl\xe5ntaker"}),(0,s.jsx)(n.td,{children:"Informasjon om medl\xe5ntakere"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"reellRettighetshaver"}),(0,s.jsx)(n.td,{children:"En fysisk person som ut\xf8ver kontroll over organisasjon som st\xe5r som eier av kontoen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SletteoppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"oppgaveeierOrganisasjonsnummer"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers organisasjonsnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SletteoppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"oppgaveeierF\xf8dselsnummer"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers f\xf8dselsnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SletteoppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"oppgaveeierAlternativIdentifikator"}),(0,s.jsx)(n.td,{children:"Hvis oppgaveeier (kontoeier) ikke har f\xf8dselsnummer eller organisasjonsnummer, s\xe5 skal oppgavegiver angi en unik verdi for kontoeier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SletteoppgaveSaldoRente"}),(0,s.jsx)(n.td,{children:"kontonummer"}),(0,s.jsx)(n.td,{children:"Unikt identifiserende felt for en konto for en oppgaveeier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgavegiver"}),(0,s.jsx)(n.td,{children:"kontaktinformasjon"}),(0,s.jsx)(n.td,{children:"Kontaktinformasjon for oppgavegiver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgavegiver"}),(0,s.jsx)(n.td,{children:"organisasjonsnummer"}),(0,s.jsx)(n.td,{children:"Organisasjonsnummer p\xe5 oppgavegiver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"organisasjon"}),(0,s.jsx)(n.td,{children:"Fylles ut dersom oppgaveeier er en organisasjon"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"person"}),(0,s.jsx)(n.td,{children:"Fylles ut dersom oppgaveeier er en person"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"internasjonalIdentifikator"}),(0,s.jsx)(n.td,{children:"Utenlands identifikatornummer brukt til \xe5 identifisere personer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"adresse"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers adresse"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"sektorkode"}),(0,s.jsx)(n.td,{children:"Sektorkoden for kontoeieren jfr. Statistisk sentralbyr\xe5 (SSB) sin standard"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"alternativIdentifikator"}),(0,s.jsx)(n.td,{children:"Hvis oppgaveeier (kontoeier) ikke har f\xf8dselsnummer, eller organisasjonsnummer s\xe5 skal oppgavegiver angi en unik verdi for kontoeier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"antallOppgaver"}),(0,s.jsx)(n.td,{children:"Totalt antall oppgaver i leveransens oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"sumInnskudd"}),(0,s.jsx)(n.td,{children:"Summering av innskudd"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"sumUtl\xe5n"}),(0,s.jsx)(n.td,{children:"Summering av utl\xe5n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"sumOpptjenteRenter"}),(0,s.jsx)(n.td,{children:"Summering av opptjente renter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"sumP\xe5l\xf8pteRenter"}),(0,s.jsx)(n.td,{children:"Summering av p\xe5l\xf8pte renter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"sumBetalteMisligholdteRenter"}),(0,s.jsx)(n.td,{children:"Summering av betalte misligholdte renter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"sumTilbakebetalteMisligholdteRenter"}),(0,s.jsx)(n.td,{children:"Summering av tilbakebetalte misligholdte renter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"sumSkattepliktigGevinst"}),(0,s.jsx)(n.td,{children:"Summering av skattepliktig gevinst"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringSaldoRente"}),(0,s.jsx)(n.td,{children:"sumFradragsberettigetTap"}),(0,s.jsx)(n.td,{children:"Summering av fradragsberettiget tap"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Disponent"}),(0,s.jsx)(n.td,{children:"organisasjon"}),(0,s.jsx)(n.td,{children:"Fylles ut dersom disponent er en organisasjon"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Disponent"}),(0,s.jsx)(n.td,{children:"person"}),(0,s.jsx)(n.td,{children:"Fylles ut dersom disponent er en person"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Medl\xe5ntaker"}),(0,s.jsx)(n.td,{children:"organisasjonsnummer"}),(0,s.jsx)(n.td,{children:"Medl\xe5ntakers organisasjonsnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Medl\xe5ntaker"}),(0,s.jsx)(n.td,{children:"f\xf8dselsnummer"}),(0,s.jsx)(n.td,{children:"Medl\xe5ntakers f\xf8dselsnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReellRettighetshaver"}),(0,s.jsx)(n.td,{children:"organisasjon"}),(0,s.jsx)(n.td,{children:"Fylles ut dersom reell rettighetshaver er en organisasjon"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReellRettighetshaver"}),(0,s.jsx)(n.td,{children:"person"}),(0,s.jsx)(n.td,{children:"Fylles ut dersom reell rettighetshaver er en person"})]})]})]})]}),(0,s.jsxs)(d,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.p,{children:"I f\xf8rste omgang er test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."}),(0,s.jsx)(n.h3,{id:"testmilj\xf8er",children:"Testmilj\xf8er"}),(0,s.jsxs)(n.p,{children:["For spesifikke URL'er til testmilj\xf8 hos Skatteetaten, se ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/innrapportering-innskuddutlaanrenter-api/0.0.1",children:"SwaggerHub"}),"."]}),(0,s.jsx)(n.p,{children:"Digdir benytter TT02 som testmilj\xf8, hvor f\xf8lgende tilbys:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DialogPorten"}),"\n",(0,s.jsx)(n.li,{children:"Autentisering - Maskinporten"}),"\n",(0,s.jsx)(n.li,{children:"Autorisering - systembruker"}),"\n",(0,s.jsx)(n.li,{children:"Altinn innboks"}),"\n"]}),(0,s.jsx)(n.p,{children:"Konsumenter m\xe5 ha egne testmilj\xf8er som kan kobles mot testmilj\xf8er hos Skatteetaten og Digdir."}),(0,s.jsx)(n.h3,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md",children:"Tenor"})," for\ndenne tjenesten. Men egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."]}),(0,s.jsx)(n.h3,{id:"testdata",children:"Testdata"}),(0,s.jsx)(n.p,{children:"Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatas\xf8k tilbyr dette.\nDet er ikke tillatt \xe5 bruke/sende skarpe data i test pga krav fra GDPR-regelverket."}),(0,s.jsx)(n.p,{children:"Det finnes forel\xf8pig ingen testdata for denne tjenesten. Denne siden oppdateres fortl\xf8pende ettersom testdata blir\ntilgjengelig."})]}),(0,s.jsx)(d,{headerText:"Kontakt oss",itemKey:"itemKey-6",children:(0,s.jsxs)(n.p,{children:["Har du sp\xf8rsm\xe5l til Skatteetaten om Innskudd, utl\xe5n og renter-API, kan du sende oss\ne-post: ",(0,s.jsx)(n.a,{href:"mailto:altinnreetablering@skatteetaten.no",children:"altinnreetablering@skatteetaten.no"}),(0,s.jsx)(n.br,{}),"\n","V\xe6r oppmerksom p\xe5 at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra\nAltinn II til Altinn 3."]})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32110:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Informasjonsmodell_Innskuddutlaanrenter-ff6932b6f27a03a1a706f16ab1691308.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);