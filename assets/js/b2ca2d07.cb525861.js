"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8202],{15188:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=s(74848),t=s(28453);const i={title:"Boligselskap API",slug:"/api/boligselskap",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligselskap"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},l=void 0,d={id:"api/boligselskap",title:"Boligselskap API",description:"Tjeneste for innrapportering av tredjepartsopplysninger for boligselskap.",source:"@site/docs/api/boligselskap.md",sourceDirName:"api",slug:"/api/boligselskap",permalink:"/api-dokumentasjon/api/boligselskap",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/tags/api"},{inline:!0,label:"Boligselskap",permalink:"/api-dokumentasjon/tags/boligselskap"}],version:"current",frontMatter:{title:"Boligselskap API",slug:"/api/boligselskap",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligselskap"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Boligsameie API",permalink:"/api-dokumentasjon/api/boligsameie"},next:{title:"Krav og betalinger",permalink:"/api-dokumentasjon/anvendelsesomraader/kravogbetalinger"}},a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Systemtilgang",id:"systemtilgang",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Parameter: idempotencyKey",id:"parameter-idempotencykey",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Innsending",id:"innsending",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"JSON",id:"json",level:3},{value:"Eksempel p\xe5 innsending",id:"eksempel-p\xe5-innsending",level:4},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:4},{value:"Testmilj\xf8er",id:"testmilj\xf8er",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:3},{value:"Testdata",id:"testdata",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Summary:i,TabItem:l,Tabs:d}=n;return i||j("Summary",!0),l||j("TabItem",!0),d||j("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{children:"Tjeneste for innrapportering av tredjepartsopplysninger for boligselskap."}),"\n",(0,r.jsxs)(d,{underline:!0,children:[(0,r.jsxs)(l,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,r.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/systemtilgang",children:"Systemtilgang"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,r.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,r.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.jsx)(n.code,{children:"skatteetaten:innrapporteringboligselskap"})]}),(0,r.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,r.jsx)(n.p,{children:"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen."}),(0,r.jsx)(n.h2,{id:"systemtilgang",children:"Systemtilgang"}),(0,r.jsxs)(n.p,{children:["Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir.\nInformasjon vedr. dette finnes ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/systemtilgang",children:"her"}),"."]}),(0,r.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,r.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen p\xe5\n",(0,r.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/boligselskap-api/0.0.1",children:"SwaggerHub"})]}),(0,r.jsxs)(n.p,{children:["Oppbygning av URL-er og \xe5pninger i en evt. brannmur er beskrevet her ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/url",children:"URL-er"})]}),(0,r.jsx)(n.p,{children:"API-et for boligselskap har bare ett endepunkt:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"POST innsending"}),": Mottar tredjepartsopplysninger for boligselskaper. Ett kall mot API-et er en rapportering for et\nboligselskap gitt av en oppgavegiver og som gjelder et inntekts\xe5r."]}),"\n"]}),(0,r.jsxs)(n.p,{children:["API-et validerer mottatte data mot JSON schema beskrevet p\xe5 SwaggerHub. Se ",(0,r.jsx)(n.a,{href:"boligselskap?tab=Feilkoder",children:"feilkoder"})," for\nrelaterte feilmeldinger."]}),(0,r.jsxs)(n.p,{children:["Se ogs\xe5 ",(0,r.jsx)(n.a,{href:"boligselskap?tab=Eksempler",children:"eksempler"})," for de ulike endepunktene."]}),(0,r.jsx)(n.h3,{id:"parameter-idempotencykey",children:"Parameter: idempotencyKey"}),(0,r.jsx)(n.p,{children:"idempotencyKey parameteren er p\xe5krevet. Innholdet skal v\xe6re en unik UUID. Hvert nye kall til API-et skal ha en\ntilsvarende ny idempotencyKey. Flere etterf\xf8lgende POST kall med samme request-body og samme idempotencyKey vil gi den\nsamme responsen. Kun det f\xf8rste av denne rekken med like API kall vil behandles. IdempotencyKey muliggj\xf8r at man trygt\nkan pr\xf8ve innsendinger p\xe5 nytt der man av ulike \xe5rsaker ikke har f\xe5tt en tilbakemelding fra API-et."}),(0,r.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,r.jsx)(n.p,{children:"Dette API-et er pt. ikke dokumentert i Felles datakatalog."})]}),(0,r.jsxs)(l,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,r.jsx)(n.h2,{id:"innsending",children:"Innsending"}),(0,r.jsx)(n.h3,{id:"eksempel-p\xe5-request-url",children:"Eksempel p\xe5 request URL"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://innrapporteringboligselskap.api.{env}.no/v1/{inntektsaar}\n"})}),(0,r.jsx)(n.h3,{id:"json",children:"JSON"}),(0,r.jsx)(n.h4,{id:"eksempel-p\xe5-innsending",children:"Eksempel p\xe5 innsending"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "leveranse": [\n    {\n      "oppgavegiversLeveranseReferanse": "Leveranse-1",\n      "inntektsaar": 2023,\n      "oppgavegiver": {\n        "organisasjonsnummer": "932061899",     \n        "kontaktinformasjon": {\n          "navn": "Realt Testutvikling",\n          "telefonnummer": "00000000",\n          "varselEpostadresse": "anonym.varsel@skatteetaten.no",\n          "varselSmsMobilnummer": "00000000"\n        }\n      },\n      "boligselskapFormaal": "bolig",\n      "oppgaveoppsummering": {\n        "antallOppgaver": 2,\n        "sumAndelLikningsverdiBoenhet": 70000,\n        "sumAndelSkattepliktigeInntekter": 2500,\n        "sumAndelFradragsberettigedeKostnader": 0,\n        "sumAndelFormue": 1500,\n        "sumAndelGjeld": 39500\n      },\n      "leveransetype": "ordinaer",\n      "kildesystem": "SBS-1",\n      "oppgave": [\n        {\n          "oppgaveeier": {\n            "foedselsnummer": "00000000000",\n            "navn": "LJILJANA BORLAUG"\n          },\n          "eiertid": {\n            "start": "0101",\n            "slutt": "3112"\n          },\n          "eierandel": {\n            "eierandelTeller": 2,\n            "eierandelNevner": 10\n          },\n          "boenhet": {\n            "aksjeboenhetsnummer": 11,\n            "kommunenummer": "0301",\n            "bolignummer": "U1111",\n            "gatenavnOgHusnummer": "\xd8vre Sveig 799 \xc5"\n          },\n          "bruksoverlatt": false,\n          "andelLikningsverdiBoenhet": 20000,\n          "andelSkattepliktigeInntekter": 1000,\n          "andelFradragsberettigedeKostnader": 1500,\n          "andelFormue": 135183,\n          "andelGjeld": 6500\n        },\n        {\n          "oppgaveeier": {\n            "foedselsnummer": "00000000000",\n            "navn": "ODD TORE JOSEPH"\n          },\n          "eiertid": {\n            "start": "0101",\n            "slutt": "3112"\n          },\n          "eierandel": {\n            "eierandelTeller": 8,\n            "eierandelNevner": 10\n          },\n          "boenhet": {\n            "aksjeboenhetsnummer": 11,\n            "kommunenummer": "0301",\n            "bolignummer": "U1111",\n            "gatenavnOgHusnummer": "\xd8vre Sveig 799 \xc5"\n          },\n          "bruksoverlatt": false,\n          "andelLikningsverdiBoenhet": 50000,\n          "andelSkattepliktigeInntekter": 1500,\n          "andelFradragsberettigedeKostnader": 0,\n          "andelFormue": 540731,\n          "andelGjeld": 33000\n        }\n      ],\n      "sletteoppgave": []\n    }\n  ]\n}\n'})}),(0,r.jsx)(n.h4,{id:"eksempel-p\xe5-respons",children:"Eksempel p\xe5 respons"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",\n  "dialogelementId": "018f5297-fde1-7301-af34-df1bc3fff6b5",\n  "oppgavegiversLeveranseReferanse": "leveranse-1",\n  "antallOppgaver": 11\n}\n'})})]}),(0,r.jsxs)(l,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,r.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feilkode"}),(0,r.jsx)(n.th,{children:"HTTP Statuskode"}),(0,r.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_001"}),(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_005"}),(0,r.jsx)(n.td,{children:"403"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med autorisering"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_006"}),(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Feil i request"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_008"}),(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Strukturell feil i tilknyttet dataformat"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_010"}),(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med validering av payload"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_011"}),(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Feil i metadata"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_017"}),(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Uspesifisert systemfeil"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_019"}),(0,r.jsx)(n.td,{children:"409"}),(0,r.jsx)(n.td,{children:"Idempotensn\xf8kkel er benyttet tidligere"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_021"}),(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Finner ikke forespurt ressurs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_022"}),(0,r.jsx)(n.td,{children:"405"}),(0,r.jsx)(n.td,{children:"HTTP-metode ikke st\xf8ttet"})]})]})]}),(0,r.jsx)(n.p,{children:"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi\nfeltene."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feilspesifiseringskode"}),(0,r.jsx)(n.th,{children:"Feilomr\xe5de"}),(0,r.jsx)(n.th,{children:"\xc5rsak"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_1022"}),(0,r.jsx)(n.td,{children:"Feil i parametre"}),(0,r.jsx)(n.td,{children:"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_1023"}),(0,r.jsx)(n.td,{children:"Finner ingen ressurs for denne urlen"}),(0,r.jsx)(n.td,{children:"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_1027"}),(0,r.jsx)(n.td,{children:"Inntekts\xe5r er ikke st\xf8ttet"}),(0,r.jsx)(n.td,{children:"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_1028"}),(0,r.jsx)(n.td,{children:"Header mangler"}),(0,r.jsx)(n.td,{children:"P\xe5krevd header er ikke med i requesten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_1030"}),(0,r.jsx)(n.td,{children:"Accept-header m\xe5 v\xe6re av type application/json"}),(0,r.jsx)(n.td,{children:"Accept header er feil. APIet har kun st\xf8tte for json i response"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GLD_1047"}),(0,r.jsx)(n.td,{children:"Content type m\xe5 v\xe6re application/json"}),(0,r.jsx)(n.td,{children:"Content-type header er feil. APIet har kun st\xf8tte for json i request body"})]})]})]})]}),(0,r.jsxs)(l,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"informasjonsmodell",src:s(31685).A+"",width:"1377",height:"1092"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Eier"}),(0,r.jsx)(n.th,{children:"Element"}),(0,r.jsx)(n.th,{children:"Dokumentasjon"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boenhet"}),(0,r.jsx)(n.td,{children:"aksjeboenhetsnummer"}),(0,r.jsx)(n.td,{children:"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boenhet"}),(0,r.jsx)(n.td,{children:"andelsnummer"}),(0,r.jsx)(n.td,{children:"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boenhet"}),(0,r.jsx)(n.td,{children:"bolignummer"}),(0,r.jsx)(n.td,{children:"En bokstav og fire siffer som entydig identifiserer den enkelte bruksenheten innenfor en adresserbar bygning eller bygningsdel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boenhet"}),(0,r.jsx)(n.td,{children:"gatenavnOgHusnummer"}),(0,r.jsx)(n.td,{children:"Navn p\xe5 gate og husnummer for boenheten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boenhet"}),(0,r.jsx)(n.td,{children:"kommunenummer"}),(0,r.jsx)(n.td,{children:"Nummer p\xe5 kommunen boenheten tilh\xf8rer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Eierandel"}),(0,r.jsx)(n.td,{children:"eierandelNevner"}),(0,r.jsx)(n.td,{children:"Nevner i eierandelsbr\xf8ken"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Eierandel"}),(0,r.jsx)(n.td,{children:"eierandelTeller"}),(0,r.jsx)(n.td,{children:"Teller i eierandelsbr\xf8ken"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leveranse"}),(0,r.jsx)(n.td,{children:"boligselskapForm\xe5l"}),(0,r.jsx)(n.td,{children:'Boligselskapets form\xe5l. Denne m\xe5 spesifiseres enten p\xe5 leveransen, eller oppgaven. Dersom den blir satt i begge vil boligform\xe5let for oppgaven v\xe6re gjeldende. Verdien skal v\xe6re en av "bolig", "fritidsbolig", "fritidsboligUtland eller "ikkeBolig" (Brukes f.eks. for garasjelag)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leveranse"}),(0,r.jsx)(n.td,{children:"inntekts\xe5r"}),(0,r.jsx)(n.td,{children:"Inntekts\xe5ret leveransen gjelder"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leveranse"}),(0,r.jsx)(n.td,{children:"kildesystem"}),(0,r.jsx)(n.td,{children:"System brukt for \xe5 levere oppgaven"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leveranse"}),(0,r.jsx)(n.td,{children:"leveransetype"}),(0,r.jsx)(n.td,{children:"type av leveranse som angir om leveransen inneholder ordin\xe6re oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver \xe5 innrapportere"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leveranse"}),(0,r.jsx)(n.td,{children:"oppgave"}),(0,r.jsx)(n.td,{children:"Oppgave som leveres"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leveranse"}),(0,r.jsx)(n.td,{children:"oppgavegiver"}),(0,r.jsx)(n.td,{children:"Tredjepart som rapporterer opplysning til Skatteetaten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leveranse"}),(0,r.jsx)(n.td,{children:"oppgavegiversLeveranseReferanse"}),(0,r.jsx)(n.td,{children:"Frivillig referanse p\xe5 innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leveranse"}),(0,r.jsx)(n.td,{children:"oppgaveoppsummering"}),(0,r.jsx)(n.td,{children:"Oppsummering med totalsummer for innleverte oppgaver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Leveranse"}),(0,r.jsx)(n.td,{children:"sletteoppgave"}),(0,r.jsx)(n.td,{children:"Oppgave for sletting av tidligere innrapporterte oppgaver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Melding"}),(0,r.jsx)(n.td,{children:"leveranse"}),(0,r.jsx)(n.td,{children:"Selve leveransen. Alle leveranser p\xe5 en melding m\xe5 ha samme oppgavegiver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"andelFormue"}),(0,r.jsx)(n.td,{children:"Oppgaveeiers andel av felles formue i boligselskap"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"andelFradragsberettigedeKostnader"}),(0,r.jsx)(n.td,{children:"Oppgaveeiers andel av fradragsberettigede kostnader i boligselskapet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"andelGjeld"}),(0,r.jsx)(n.td,{children:"Oppgaveeiers andel av gjeld i boligselskapet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"andelLikningsverdiBoenhet"}),(0,r.jsx)(n.td,{children:"Oppgaveeiers andel av likninsverdi av boenheten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"andelSkattepliktigeInntekter"}),(0,r.jsx)(n.td,{children:"Oppgaveeiers andel av skattepliktige inntekter i boligselskapet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"boenhet"}),(0,r.jsx)(n.td,{children:"Boenheten oppgaven gjelder"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"boligselskapsForm\xe5l"}),(0,r.jsx)(n.td,{children:'Boligselskapets form\xe5l. Denne m\xe5 spesifiseres enten p\xe5 leveransen, eller oppgaven. Dersom den blir satt i begge vil boligform\xe5let for oppgaven v\xe6re gjeldende. Verdien skal v\xe6re en av "bolig", "fritidsbolig", "fritidsboligUtland eller "ikkeBolig" (Brukes f.eks. for garasjelag)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"bruksoverlatt"}),(0,r.jsx)(n.td,{children:"Framleid boenhet der boenheten er leid ut av andelshaver i halvparten eller mer av eiertiden det rapporteres for"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"eierandel"}),(0,r.jsx)(n.td,{children:"Oppgaveeiers eierandel i boenheten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"eiertid"}),(0,r.jsx)(n.td,{children:"Oppgaveeiers tid som eier av boenheten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"oppgaveeier"}),(0,r.jsx)(n.td,{children:"Eier av oppgaven"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Oppgaveeier"}),(0,r.jsx)(n.td,{children:"f\xf8dselsnummer"}),(0,r.jsx)(n.td,{children:"F\xf8dselsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Oppgaveeier"}),(0,r.jsx)(n.td,{children:"navn"}),(0,r.jsx)(n.td,{children:"Navn p\xe5 oppgaveeier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Oppgaveeier"}),(0,r.jsx)(n.td,{children:"organisasjonsnummer"}),(0,r.jsx)(n.td,{children:"Organisasjonsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Oppgavegiver"}),(0,r.jsx)(n.td,{children:"kontaktinformasjon"}),(0,r.jsx)(n.td,{children:"Kontaktinformasjon for oppgavegiver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Oppgavegiver"}),(0,r.jsx)(n.td,{children:"organisasjonsnummer"}),(0,r.jsx)(n.td,{children:"Organisasjonsnummer p\xe5 oppgavegiver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,r.jsx)(n.td,{children:"antallOppgaver"}),(0,r.jsx)(n.td,{children:"Totalt antall oppgaver i leveransens oppgaver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,r.jsx)(n.td,{children:"sumAndelFormue"}),(0,r.jsx)(n.td,{children:"Sum av andelFormue i leveransens oppgaver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,r.jsx)(n.td,{children:"sumAndelFradragsberettigedeKostnader"}),(0,r.jsx)(n.td,{children:"Sum av andelFradragsberettigedeKostnader i leveransens oppgaver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,r.jsx)(n.td,{children:"sumAndelGjeld"}),(0,r.jsx)(n.td,{children:"Sum av andelGjeld i leveransens oppgaver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,r.jsx)(n.td,{children:"sumAndelLikningsverdiBoenhet"}),(0,r.jsx)(n.td,{children:"Sum av andelLikningsverdiBoenhet i leveransens oppgaver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OppgaveoppsummeringBoligselskap"}),(0,r.jsx)(n.td,{children:"sumAndelSkattepliktigeInntekter"}),(0,r.jsx)(n.td,{children:"Sum av andelSkattepliktigeInntekter i leveransens oppgaver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SletteoppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"aksjeboenhetsnummer"}),(0,r.jsx)(n.td,{children:"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SletteoppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"andelsnummer"}),(0,r.jsx)(n.td,{children:"Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SletteoppgaveBoligselskap"}),(0,r.jsx)(n.td,{children:"oppgaveeier"}),(0,r.jsx)(n.td,{children:"Eier av sletteoppgaven"})]})]})]})]}),(0,r.jsxs)(l,{headerText:"Test",itemKey:"itemKey-5",children:[(0,r.jsx)(n.p,{children:"I f\xf8rste omgang er test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."}),(0,r.jsx)(n.h3,{id:"testmilj\xf8er",children:"Testmilj\xf8er"}),(0,r.jsxs)(n.p,{children:["Skatteetaten benytter ETM2 som testmilj\xf8. For spesifikke URL'er, se ",(0,r.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/boligselskap-api/0.0.1",children:"SwaggerHub"}),"."]}),(0,r.jsx)(n.p,{children:"Digdir benytter TT02 som testmilj\xf8, hvor f\xf8lgende tilbys:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DialogPorten"}),"\n",(0,r.jsx)(n.li,{children:"Autentisering - Maskinporten"}),"\n",(0,r.jsx)(n.li,{children:"Autorisering - systembruker"}),"\n",(0,r.jsx)(n.li,{children:"Altinn innboks"}),"\n"]}),(0,r.jsx)(n.p,{children:"Konsumenter m\xe5 ha egne testmilj\xf8er som kan kobles mot testmilj\xf8er hos Skatteetaten og Digdir."}),(0,r.jsx)(n.h3,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,r.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,r.jsx)(n.a,{href:"https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md",children:"Tenor"})," for\ndenne tjenesten. Men egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."]}),(0,r.jsx)(n.h3,{id:"testdata",children:"Testdata"}),(0,r.jsx)(n.p,{children:"Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatas\xf8k tilbyr dette.\nDet er ikke tillatt \xe5 bruke/sende skarpe data i test pga krav fra GDPR-regelverket."}),(0,r.jsx)(n.p,{children:"Det finnes forel\xf8pig ingen testdata for denne tjenesten. Denne siden oppdateres fortl\xf8pende ettersom testdata blir\ntilgjengelig."})]}),(0,r.jsx)(l,{headerText:"Kontakt oss",itemKey:"itemKey-6",children:(0,r.jsxs)(n.p,{children:["Har du sp\xf8rsm\xe5l til Skatteetaten om Boligselskap API, kan du sende oss e-post: ",(0,r.jsx)(n.a,{href:"mailto:altinnreetablering@skatteetaten.no",children:"altinnreetablering@skatteetaten.no"}),(0,r.jsx)(n.br,{}),"\n","V\xe6r oppmerksom p\xe5 at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3."]})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},31685:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/Informasjonsmodell_Boligselskap-cabb384ddaebf55326c27dfd734a074e.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);