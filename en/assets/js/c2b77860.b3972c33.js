"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3262],{62217:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/innrapportering-boligselskap","title":"Innrapportering boligselskap API","description":"Tjeneste for innrapportering av tredjepartsopplysninger for boligselskap (RF-1139)","source":"@site/docs/api/innrapportering-boligselskap.md","sourceDirName":"api","slug":"/api/innrapportering-boligselskap","permalink":"/api-dokumentasjon/en/api/innrapportering-boligselskap","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/en/tags/api"},{"inline":true,"label":"Boligselskap","permalink":"/api-dokumentasjon/en/tags/boligselskap"}],"version":"current","frontMatter":{"title":"Innrapportering boligselskap API","slug":"/api/innrapportering-boligselskap","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Boligselskap"],"keywords":["grunnlagsdata"],"last_updated":"Apr 29, 2024","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Innrapportering boligsameie API","permalink":"/api-dokumentasjon/en/api/innrapportering-boligsameie"},"next":{"title":"Innrapportering BSU API","permalink":"/api-dokumentasjon/en/api/innrapportering-bsu"}}');var t=r(74848),i=r(28453);const l={title:"Innrapportering boligselskap API",slug:"/api/innrapportering-boligselskap",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligselskap"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},d=void 0,a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Systemtilgang",id:"systemtilgang",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Parameter: idempotencyKey",id:"parameter-idempotencykey",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Innsending",id:"innsending",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"JSON",id:"json",level:3},{value:"Eksempel p\xe5 innsending",id:"eksempel-p\xe5-innsending",level:4},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:4},{value:"Testmilj\xf8er",id:"testmilj\xf8er",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:3},{value:"Testdata",id:"testdata",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:s,TabItem:l,Tabs:d}=n;return s||j("Summary",!0),l||j("TabItem",!0),d||j("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:"Tjeneste for innrapportering av tredjepartsopplysninger for boligselskap (RF-1139)"}),"\n",(0,t.jsxs)(d,{underline:!0,children:[(0,t.jsxs)(l,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,t.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/systembruker",children:"Systembruker"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,t.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,t.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,t.jsx)(n.code,{children:"skatteetaten:innrapporteringboligselskap"})]}),(0,t.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,t.jsx)(n.p,{children:"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen."}),(0,t.jsx)(n.h2,{id:"systemtilgang",children:"Systemtilgang"}),(0,t.jsxs)(n.p,{children:["Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir.\nInformasjon vedr. dette finnes ",(0,t.jsx)(n.a,{href:"../om/systemtilgang.md",children:"her"}),"."]}),(0,t.jsx)(n.p,{children:"For \xe5 kunne benytte dette api'et med systemtilgang m\xe5 man gi f\xf8lgende rettighet til systemet ved opprettelse i systemregisteret:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'"Rights": [\n    {\n      "Resource": [\n        {\n          "value": "ske-innrapportering-boligselskap",\n          "id": "urn:altinn:resource"\n        }\n      ]\n    }\n  ]\n'})}),(0,t.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,t.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen p\xe5\n",(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/boligselskap-api/0.0.1",children:"SwaggerHub"})]}),(0,t.jsxs)(n.p,{children:["N\xf8dvendige \xe5pninger i en evt. brannmur er beskrevet ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"her"})]}),(0,t.jsx)(n.p,{children:"API-et for boligselskap har bare ett endepunkt:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"POST innsending"}),": Mottar tredjepartsopplysninger for boligselskaper. Ett kall mot API-et er en rapportering for et\nboligselskap gitt av en oppgavegiver og som gjelder et inntekts\xe5r."]}),"\n"]}),(0,t.jsxs)(n.p,{children:["API-et validerer mottatte data mot JSON schema beskrevet p\xe5 SwaggerHub. Se ",(0,t.jsx)(n.a,{href:"boligselskap?tab=Feilkoder",children:"feilkoder"})," for\nrelaterte feilmeldinger."]}),(0,t.jsxs)(n.p,{children:["Se ogs\xe5 ",(0,t.jsx)(n.a,{href:"boligselskap?tab=Eksempler",children:"eksempler"})," for de ulike endepunktene."]}),(0,t.jsx)(n.h3,{id:"parameter-idempotencykey",children:"Parameter: idempotencyKey"}),(0,t.jsx)(n.p,{children:"idempotencyKey parameteren er p\xe5krevet. Innholdet skal v\xe6re en unik UUID. Hvert nye kall til API-et skal ha en\ntilsvarende ny idempotencyKey. Flere etterf\xf8lgende POST kall med samme request-body og samme idempotencyKey vil gi den\nsamme responsen. Kun det f\xf8rste av denne rekken med like API kall vil behandles. IdempotencyKey muliggj\xf8r at man trygt\nkan pr\xf8ve innsendinger p\xe5 nytt der man av ulike \xe5rsaker ikke har f\xe5tt en tilbakemelding fra API-et."}),(0,t.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,t.jsx)(n.p,{children:"Dette API-et er pt. ikke dokumentert i Felles datakatalog."})]}),(0,t.jsxs)(l,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,t.jsx)(n.h2,{id:"innsending",children:"Innsending"}),(0,t.jsx)(n.h3,{id:"eksempel-p\xe5-request-url",children:"Eksempel p\xe5 request URL"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://innrapporteringboligselskap.api.{env}.no/v1/{inntektsaar}\n"})}),(0,t.jsx)(n.h3,{id:"json",children:"JSON"}),(0,t.jsx)(n.h4,{id:"eksempel-p\xe5-innsending",children:"Eksempel p\xe5 innsending"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n  "leveranse": [\n    {\n      "oppgavegiversLeveranseReferanse": "Leveranse-1",\n      "inntektsaar": 2023,\n      "oppgavegiver": {\n        "organisasjonsnummer": "932061899",     \n        "kontaktinformasjon": {\n          "navn": "Realt Testutvikling",\n          "telefonnummer": "00000000",\n          "varselEpostadresse": "anonym.varsel@skatteetaten.no",\n          "varselSmsMobilnummer": "00000000"\n        }\n      },\n      "boligselskapFormaal": "bolig",\n      "oppgaveoppsummering": {\n        "antallOppgaver": 2,\n        "sumAndelLikningsverdiBoenhet": 70000,\n        "sumAndelSkattepliktigeInntekter": 2500,\n        "sumAndelFradragsberettigedeKostnader": 0,\n        "sumAndelFormue": 1500,\n        "sumAndelGjeld": 39500\n      },\n      "leveransetype": "ordinaer",\n      "kildesystem": "SBS-1",\n      "oppgave": [\n        {\n          "oppgaveeier": {\n            "foedselsnummer": "00000000000",\n            "navn": "LJILJANA BORLAUG"\n          },\n          "eiertid": {\n            "start": "0101",\n            "slutt": "3112"\n          },\n          "eierandel": {\n            "eierandelTeller": 2,\n            "eierandelNevner": 10\n          },\n          "boenhet": {\n            "aksjeboenhetsnummer": 11,\n            "kommunenummer": "0301",\n            "bolignummer": "U1111",\n            "gatenavnOgHusnummer": "\xd8vre Sveig 799 \xc5"\n          },\n          "bruksoverlatt": false,\n          "andelLikningsverdiBoenhet": 20000,\n          "andelSkattepliktigeInntekter": 1000,\n          "andelFradragsberettigedeKostnader": 1500,\n          "andelFormue": 135183,\n          "andelGjeld": 6500\n        },\n        {\n          "oppgaveeier": {\n            "foedselsnummer": "00000000000",\n            "navn": "ODD TORE JOSEPH"\n          },\n          "eiertid": {\n            "start": "0101",\n            "slutt": "3112"\n          },\n          "eierandel": {\n            "eierandelTeller": 8,\n            "eierandelNevner": 10\n          },\n          "boenhet": {\n            "aksjeboenhetsnummer": 11,\n            "kommunenummer": "0301",\n            "bolignummer": "U1111",\n            "gatenavnOgHusnummer": "\xd8vre Sveig 799 \xc5"\n          },\n          "bruksoverlatt": false,\n          "andelLikningsverdiBoenhet": 50000,\n          "andelSkattepliktigeInntekter": 1500,\n          "andelFradragsberettigedeKostnader": 0,\n          "andelFormue": 540731,\n          "andelGjeld": 33000\n        }\n      ],\n      "sletteoppgave": []\n    }\n  ]\n}\n'})}),(0,t.jsx)(n.h4,{id:"eksempel-p\xe5-respons",children:"Eksempel p\xe5 respons"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",\n  "dialogelementId": "018f5297-fde1-7301-af34-df1bc3fff6b5",\n  "oppgavegiversLeveranseReferanse": "leveranse-1",\n  "antallOppgaver": 11\n}\n'})})]}),(0,t.jsxs)(l,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,t.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feilkode"}),(0,t.jsx)(n.th,{children:"HTTP Statuskode"}),(0,t.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_001"}),(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_005"}),(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med autorisering"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_006"}),(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Feil i request"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_008"}),(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Strukturell feil i tilknyttet dataformat"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_010"}),(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med validering av payload"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_011"}),(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Feil i metadata"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_017"}),(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"Uspesifisert systemfeil"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_019"}),(0,t.jsx)(n.td,{children:"409"}),(0,t.jsx)(n.td,{children:"Idempotensn\xf8kkel er benyttet tidligere"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_021"}),(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Finner ikke forespurt ressurs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_022"}),(0,t.jsx)(n.td,{children:"405"}),(0,t.jsx)(n.td,{children:"HTTP-metode ikke st\xf8ttet"})]})]})]}),(0,t.jsx)(n.p,{children:"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi\nfeltene."}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feilspesifiseringskode"}),(0,t.jsx)(n.th,{children:"Feilomr\xe5de"}),(0,t.jsx)(n.th,{children:"\xc5rsak"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_1022"}),(0,t.jsx)(n.td,{children:"Feil i parametre"}),(0,t.jsx)(n.td,{children:"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_1023"}),(0,t.jsx)(n.td,{children:"Finner ingen ressurs for denne urlen"}),(0,t.jsx)(n.td,{children:"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_1027"}),(0,t.jsx)(n.td,{children:"Inntekts\xe5r er ikke st\xf8ttet"}),(0,t.jsx)(n.td,{children:"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_1028"}),(0,t.jsx)(n.td,{children:"Header mangler"}),(0,t.jsx)(n.td,{children:"P\xe5krevd header er ikke med i requesten"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_1030"}),(0,t.jsx)(n.td,{children:"Accept-header m\xe5 v\xe6re av type application/json"}),(0,t.jsx)(n.td,{children:"Accept header er feil. APIet har kun st\xf8tte for json i response"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GLD_1047"}),(0,t.jsx)(n.td,{children:"Content type m\xe5 v\xe6re application/json"}),(0,t.jsx)(n.td,{children:"Content-type header er feil. APIet har kun st\xf8tte for json i request body"})]})]})]})]}),(0,t.jsxs)(l,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"informasjonsmodell",src:r(31685).A+"",width:"1377",height:"1092"})}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Eier"}),(0,t.jsx)(n.th,{children:"Element"}),(0,t.jsx)(n.th,{children:"Dokumentasjon"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Boenhet"}),(0,t.jsx)(n.td,{children:"aksjeboenhetsnummer"}),(0,t.jsx)(n.td,{children:"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Boenhet"}),(0,t.jsx)(n.td,{children:"andelsnummer"}),(0,t.jsx)(n.td,{children:"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Boenhet"}),(0,t.jsx)(n.td,{children:"bolignummer"}),(0,t.jsx)(n.td,{children:"En bokstav og fire siffer som entydig identifiserer den enkelte bruksenheten innenfor en adresserbar bygning eller bygningsdel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Boenhet"}),(0,t.jsx)(n.td,{children:"gatenavnOgHusnummer"}),(0,t.jsx)(n.td,{children:"Navn p\xe5 gate og husnummer for boenheten"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Boenhet"}),(0,t.jsx)(n.td,{children:"kommunenummer"}),(0,t.jsx)(n.td,{children:"Nummer p\xe5 kommunen boenheten tilh\xf8rer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Eierandel"}),(0,t.jsx)(n.td,{children:"eierandelNevner"}),(0,t.jsx)(n.td,{children:"Nevner i eierandelsbr\xf8ken"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Eierandel"}),(0,t.jsx)(n.td,{children:"eierandelTeller"}),(0,t.jsx)(n.td,{children:"Teller i eierandelsbr\xf8ken"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Leveranse"}),(0,t.jsx)(n.td,{children:"boligselskapForm\xe5l"}),(0,t.jsx)(n.td,{children:'Boligselskapets form\xe5l. Denne m\xe5 spesifiseres enten p\xe5 leveransen, eller oppgaven. Dersom den blir satt i begge vil boligform\xe5let for oppgaven v\xe6re gjeldende. Verdien skal v\xe6re en av "bolig", "fritidsbolig", "fritidsboligUtland eller "ikkeBolig" (Brukes f.eks. for garasjelag)'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Leveranse"}),(0,t.jsx)(n.td,{children:"inntekts\xe5r"}),(0,t.jsx)(n.td,{children:"Inntekts\xe5ret leveransen gjelder"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Leveranse"}),(0,t.jsx)(n.td,{children:"kildesystem"}),(0,t.jsx)(n.td,{children:"System brukt for \xe5 levere oppgaven"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Leveranse"}),(0,t.jsx)(n.td,{children:"leveransetype"}),(0,t.jsx)(n.td,{children:"type av leveranse som angir om leveransen inneholder ordin\xe6re oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver \xe5 innrapportere"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Leveranse"}),(0,t.jsx)(n.td,{children:"oppgave"}),(0,t.jsx)(n.td,{children:"Oppgave som leveres"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Leveranse"}),(0,t.jsx)(n.td,{children:"oppgavegiver"}),(0,t.jsx)(n.td,{children:"Tredjepart som rapporterer opplysning til Skatteetaten"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Leveranse"}),(0,t.jsx)(n.td,{children:"oppgavegiversLeveranseReferanse"}),(0,t.jsx)(n.td,{children:"Frivillig referanse p\xe5 innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Leveranse"}),(0,t.jsx)(n.td,{children:"oppgaveoppsummering"}),(0,t.jsx)(n.td,{children:"Oppsummering med totalsummer for innleverte oppgaver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Leveranse"}),(0,t.jsx)(n.td,{children:"sletteoppgave"}),(0,t.jsx)(n.td,{children:"Oppgave for sletting av tidligere innrapporterte oppgaver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Melding"}),(0,t.jsx)(n.td,{children:"leveranse"}),(0,t.jsx)(n.td,{children:"Selve leveransen. Alle leveranser p\xe5 en melding m\xe5 ha samme oppgavegiver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"andelFormue"}),(0,t.jsx)(n.td,{children:"Oppgaveeiers andel av felles formue i boligselskap"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"andelFradragsberettigedeKostnader"}),(0,t.jsx)(n.td,{children:"Oppgaveeiers andel av fradragsberettigede kostnader i boligselskapet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"andelGjeld"}),(0,t.jsx)(n.td,{children:"Oppgaveeiers andel av gjeld i boligselskapet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"andelLikningsverdiBoenhet"}),(0,t.jsx)(n.td,{children:"Oppgaveeiers andel av likninsverdi av boenheten"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"andelSkattepliktigeInntekter"}),(0,t.jsx)(n.td,{children:"Oppgaveeiers andel av skattepliktige inntekter i boligselskapet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"boenhet"}),(0,t.jsx)(n.td,{children:"Boenheten oppgaven gjelder"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"boligselskapsForm\xe5l"}),(0,t.jsx)(n.td,{children:'Boligselskapets form\xe5l. Denne m\xe5 spesifiseres enten p\xe5 leveransen, eller oppgaven. Dersom den blir satt i begge vil boligform\xe5let for oppgaven v\xe6re gjeldende. Verdien skal v\xe6re en av "bolig", "fritidsbolig", "fritidsboligUtland eller "ikkeBolig" (Brukes f.eks. for garasjelag)'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"bruksoverlatt"}),(0,t.jsx)(n.td,{children:"Framleid boenhet der boenheten er leid ut av andelshaver i halvparten eller mer av eiertiden det rapporteres for"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"eierandel"}),(0,t.jsx)(n.td,{children:"Oppgaveeiers eierandel i boenheten"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"eiertid"}),(0,t.jsx)(n.td,{children:"Oppgaveeiers tid som eier av boenheten"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"oppgaveeier"}),(0,t.jsx)(n.td,{children:"Eier av oppgaven"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Oppgaveeier"}),(0,t.jsx)(n.td,{children:"f\xf8dselsnummer"}),(0,t.jsx)(n.td,{children:"F\xf8dselsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Oppgaveeier"}),(0,t.jsx)(n.td,{children:"navn"}),(0,t.jsx)(n.td,{children:"Navn p\xe5 oppgaveeier"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Oppgaveeier"}),(0,t.jsx)(n.td,{children:"organisasjonsnummer"}),(0,t.jsx)(n.td,{children:"Organisasjonsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Oppgavegiver"}),(0,t.jsx)(n.td,{children:"kontaktinformasjon"}),(0,t.jsx)(n.td,{children:"Kontaktinformasjon for oppgavegiver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Oppgavegiver"}),(0,t.jsx)(n.td,{children:"organisasjonsnummer"}),(0,t.jsx)(n.td,{children:"Organisasjonsnummer p\xe5 oppgavegiver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,t.jsx)(n.td,{children:"antallOppgaver"}),(0,t.jsx)(n.td,{children:"Totalt antall oppgaver i leveransens oppgaver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,t.jsx)(n.td,{children:"sumAndelFormue"}),(0,t.jsx)(n.td,{children:"Sum av andelFormue i leveransens oppgaver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,t.jsx)(n.td,{children:"sumAndelFradragsberettigedeKostnader"}),(0,t.jsx)(n.td,{children:"Sum av andelFradragsberettigedeKostnader i leveransens oppgaver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,t.jsx)(n.td,{children:"sumAndelGjeld"}),(0,t.jsx)(n.td,{children:"Sum av andelGjeld i leveransens oppgaver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,t.jsx)(n.td,{children:"sumAndelLikningsverdiBoenhet"}),(0,t.jsx)(n.td,{children:"Sum av andelLikningsverdiBoenhet i leveransens oppgaver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,t.jsx)(n.td,{children:"sumAndelSkattepliktigeInntekter"}),(0,t.jsx)(n.td,{children:"Sum av andelSkattepliktigeInntekter i leveransens oppgaver"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SletteoppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"aksjeboenhetsnummer"}),(0,t.jsx)(n.td,{children:"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SletteoppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"andelsnummer"}),(0,t.jsx)(n.td,{children:"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SletteoppgaveBoligselskap"}),(0,t.jsx)(n.td,{children:"oppgaveeier"}),(0,t.jsx)(n.td,{children:"Eier av sletteoppgaven"})]})]})]})]}),(0,t.jsxs)(l,{headerText:"Test",itemKey:"itemKey-5",children:[(0,t.jsx)(n.p,{children:"I f\xf8rste omgang er test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."}),(0,t.jsx)(n.h3,{id:"testmilj\xf8er",children:"Testmilj\xf8er"}),(0,t.jsxs)(n.p,{children:["For spesifikke URL'er til testmilj\xf8 hos Skatteetaten, se ",(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/boligselskap-api/0.0.1",children:"SwaggerHub"}),"."]}),(0,t.jsx)(n.p,{children:"Digdir benytter TT02 som testmilj\xf8, hvor f\xf8lgende tilbys:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DialogPorten"}),"\n",(0,t.jsx)(n.li,{children:"Autentisering - Maskinporten"}),"\n",(0,t.jsx)(n.li,{children:"Autorisering - systembruker"}),"\n",(0,t.jsx)(n.li,{children:"Altinn innboks"}),"\n"]}),(0,t.jsx)(n.p,{children:"Konsumenter m\xe5 ha egne testmilj\xf8er som kan kobles mot testmilj\xf8er hos Skatteetaten og Digdir."}),(0,t.jsx)(n.h3,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,t.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,t.jsx)(n.a,{href:"https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md",children:"Tenor"})," for\ndenne tjenesten. Men egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."]}),(0,t.jsx)(n.h3,{id:"testdata",children:"Testdata"}),(0,t.jsx)(n.p,{children:"Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatas\xf8k tilbyr dette.\nDet er ikke tillatt \xe5 bruke/sende skarpe data i test pga krav fra GDPR-regelverket."}),(0,t.jsx)(n.p,{children:"Det finnes forel\xf8pig ingen testdata for denne tjenesten. Denne siden oppdateres fortl\xf8pende ettersom testdata blir\ntilgjengelig."})]}),(0,t.jsx)(l,{headerText:"Kontakt oss",itemKey:"itemKey-6",children:(0,t.jsxs)(n.p,{children:["Har du sp\xf8rsm\xe5l til Skatteetaten om Boligselskap API, kan du sende oss e-post: ",(0,t.jsx)(n.a,{href:"mailto:altinnreetablering@skatteetaten.no",children:"altinnreetablering@skatteetaten.no"}),(0,t.jsx)(n.br,{}),"\n","V\xe6r oppmerksom p\xe5 at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3."]})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},31685:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/Informasjonsmodell_Boligselskap-cabb384ddaebf55326c27dfd734a074e.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var s=r(96540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);