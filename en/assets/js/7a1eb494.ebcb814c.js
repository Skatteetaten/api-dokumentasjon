"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6520],{3699:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=r(74848),i=r(28453);const t={title:"Boligsameie API",slug:"/api/boligsameie",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligsameie"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},d=void 0,l={id:"api/boligsameie",title:"Boligsameie API",description:"Tjeneste for innrapportering av tredjepartsopplysninger for boligsameie.",source:"@site/docs/api/boligsameie.md",sourceDirName:"api",slug:"/api/boligsameie",permalink:"/api-dokumentasjon/en/api/boligsameie",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{inline:!0,label:"Boligsameie",permalink:"/api-dokumentasjon/en/tags/boligsameie"}],version:"current",frontMatter:{title:"Boligsameie API",slug:"/api/boligsameie",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Boligsameie"],keywords:["grunnlagsdata"],last_updated:"Apr 29, 2024",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Underenhet fra A-ordningen API",permalink:"/api-dokumentasjon/en/api/underenhetaordningen"},next:{title:"Boligselskap API",permalink:"/api-dokumentasjon/en/api/boligselskap"}},a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Systemtilgang",id:"systemtilgang",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Parameter: idempotencyKey",id:"parameter-idempotencykey",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Innsending",id:"innsending",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"JSON",id:"json",level:3},{value:"Eksempel p\xe5 innsending",id:"eksempel-p\xe5-innsending",level:4},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:4},{value:"Testmilj\xf8er",id:"testmilj\xf8er",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:3},{value:"Testdata",id:"testdata",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:t,TabItem:d,Tabs:l}=n;return t||h("Summary",!0),d||h("TabItem",!0),l||h("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:"Tjeneste for innrapportering av tredjepartsopplysninger for boligsameie."}),"\n",(0,s.jsxs)(l,{underline:!0,children:[(0,s.jsxs)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/systemtilgang",children:"Systemtilgang"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:innrapporteringboligsameie"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsx)(n.p,{children:"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen."}),(0,s.jsx)(n.h2,{id:"systemtilgang",children:"Systemtilgang"}),(0,s.jsxs)(n.p,{children:["Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir.\nInformasjon vedr. dette finnes ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/systemtilgang",children:"her"}),"."]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen p\xe5\n",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/boligsameie-api/0.0.1",children:"SwaggerHub"})]}),(0,s.jsxs)(n.p,{children:["Oppbygning av URL-er og \xe5pninger i en evt. brannmur er beskrevet her ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/url",children:"URL-er"})]}),(0,s.jsx)(n.p,{children:"API-et for boligsameie har bare ett endepunkt:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"POST innsending"}),": Mottar tredjepartsopplysninger for boligsameier. Ett kall mot API-et er en rapportering for et\nboligsameie gitt av en oppgavegiver og som gjelder et inntekts\xe5r."]}),"\n"]}),(0,s.jsxs)(n.p,{children:["API-et validerer mottatte data mot JSON schema beskrevet p\xe5 SwaggerHub. Se ",(0,s.jsx)(n.a,{href:"boligsameie?tab=Feilkoder",children:"feilkoder"})," for\nrelaterte feilmeldinger."]}),(0,s.jsxs)(n.p,{children:["Se ogs\xe5 ",(0,s.jsx)(n.a,{href:"boligsameie?tab=Eksempler",children:"eksempler"})," for de ulike endepunktene."]}),(0,s.jsx)(n.h3,{id:"parameter-idempotencykey",children:"Parameter: idempotencyKey"}),(0,s.jsx)(n.p,{children:"idempotencyKey parameteren er p\xe5krevet. Innholdet skal v\xe6re en unik UUID. Hvert nye kall til API-et skal ha en\ntilsvarende ny idempotencyKey. Flere etterf\xf8lgende POST kall med samme request-body og samme idempotencyKey vil gi den\nsamme responsen. Kun det f\xf8rste av denne rekken med like API kall vil behandles. IdempotencyKey muliggj\xf8r at man trygt\nkan pr\xf8ve innsendinger p\xe5 nytt der man av ulike \xe5rsaker ikke har f\xe5tt en tilbakemelding fra API-et."}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsx)(n.p,{children:"Dette API-et er pt. ikke dokumentert i Felles datakatalog."})]}),(0,s.jsxs)(d,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"innsending",children:"Innsending"}),(0,s.jsx)(n.h3,{id:"eksempel-p\xe5-request-url",children:"Eksempel p\xe5 request URL"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://innrapporteringboligsameie.api.{env}.no/v1/{inntektsaar}\n"})}),(0,s.jsx)(n.h3,{id:"json",children:"JSON"}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-innsending",children:"Eksempel p\xe5 innsending"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "leveranse": {\n    "oppgavegiversLeveranseReferanse": "Leveranse-1",\n    "leveransetype": "ordinaer",\n    "oppgavegiver": {\n      "organisasjonsnummer": "819897522",      \n      "kontaktinformasjon": {\n        "navn": "Realt Testutvikling",\n        "telefonnummer": "00000000",\n        "varselEpostadresse": "anonym.varsel@skatteetaten.no",\n        "varselSmsMobilnummer": "12345678"\n      }\n    },\n    "oppgaveoppsummering": {\n      "antallOppgaver": 2,\n      "sumAndelSkattepliktigeInntekter": 2249,\n      "sumAndelFradragsberettigedeKostnader": 2249,\n      "sumAndelFormue": 11888,\n      "sumAndelGjeld": 27709\n    },\n    "inntektsaar": 2023,\n    "kildesystem": "SBS-1",\n    "sletteoppgave": [],\n    "oppgave": [\n      {\n        "oppgaveeier": {\n          "organisasjonsnummer": "800877830",\n          "navn": "N\xd8YTRALE FORURENSEDE SPISESTEDER AS"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 11\n        },\n        "andelSkattepliktigeInntekter": 1766,\n        "andelFradragsberettigedeKostnader": 1766,\n        "andelFormue": 9336,\n        "andelGjeld": 21761\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "00000000000",\n          "navn": "ALLA STIE"\n        },\n        "eiertid": {\n          "start": "0101",\n          "slutt": "3112"\n        },\n        "matrikkelnummer": {\n          "kommunenummer": "1554",\n          "bruksnummer": 227,\n          "gaardsnummer": 91,\n          "seksjonsnummer": 30\n        },\n        "andelSkattepliktigeInntekter": 483,\n        "andelFradragsberettigedeKostnader": 483,\n        "andelFormue": 2552,\n        "andelGjeld": 5948\n      }\n    ]\n  }\n}\n'})}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-respons",children:"Eksempel p\xe5 respons"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",\n  "dialogelementId": "018f521e-5488-79e3-8817-48e94cb75455",\n  "oppgavegiversLeveranseReferanse": "leveranse-1",\n  "antallOppgaver": 23\n}\n'})})]}),(0,s.jsxs)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i request"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_008"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Strukturell feil i tilknyttet dataformat"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_010"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av payload"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_011"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i metadata"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_017"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uspesifisert systemfeil"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_019"}),(0,s.jsx)(n.td,{children:"409"}),(0,s.jsx)(n.td,{children:"Idempotensn\xf8kkel er benyttet tidligere"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_021"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Finner ikke forespurt ressurs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_022"}),(0,s.jsx)(n.td,{children:"405"}),(0,s.jsx)(n.td,{children:"HTTP-metode ikke st\xf8ttet"})]})]})]}),(0,s.jsx)(n.p,{children:"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi\nfeltene."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilspesifiseringskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"}),(0,s.jsx)(n.th,{children:"\xc5rsak"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1022"}),(0,s.jsx)(n.td,{children:"Feil i parametre"}),(0,s.jsx)(n.td,{children:"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1023"}),(0,s.jsx)(n.td,{children:"Finner ingen ressurs for denne urlen"}),(0,s.jsx)(n.td,{children:"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1027"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r er ikke st\xf8ttet"}),(0,s.jsx)(n.td,{children:"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1028"}),(0,s.jsx)(n.td,{children:"Header mangler"}),(0,s.jsx)(n.td,{children:"P\xe5krevd header er ikke med i requesten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1030"}),(0,s.jsx)(n.td,{children:"Accept-header m\xe5 v\xe6re av type application/json"}),(0,s.jsx)(n.td,{children:"Accept header er feil. APIet har kun st\xf8tte for json i response"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1047"}),(0,s.jsx)(n.td,{children:"Content type m\xe5 v\xe6re application/json"}),(0,s.jsx)(n.td,{children:"Content-type header er feil. APIet har kun st\xf8tte for json i request body"})]})]})]})]}),(0,s.jsxs)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"boligsameie",src:r(26446).A+"",width:"905",height:"800"})}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Eier"}),(0,s.jsx)(n.th,{children:"Element"}),(0,s.jsx)(n.th,{children:"Dokumentasjon"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"inntekts\xe5r"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5ret leveransen gjelder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"kildesystem"}),(0,s.jsx)(n.td,{children:"System brukt for \xe5 levere oppgaven"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"leveransetype"}),(0,s.jsx)(n.td,{children:"Type av leveranse som angir om leveransen inneholder ordin\xe6re oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver \xe5 innrapportere"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgave"}),(0,s.jsx)(n.td,{children:"Oppgave som leveres"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgavegiver"}),(0,s.jsx)(n.td,{children:"Tredjepart som rapporterer opplysning til Skatteetaten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgavegiversLeveranseReferanse"}),(0,s.jsx)(n.td,{children:"Frivillig referanse p\xe5 innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgaveoppsummering"}),(0,s.jsx)(n.td,{children:"Oppsummering med totalsummer for innleverte oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"sletteoppgave"}),(0,s.jsx)(n.td,{children:"Oppgave for sletting av tidligere innrapporterte oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Melding"}),(0,s.jsx)(n.td,{children:"leveranse"}),(0,s.jsx)(n.td,{children:"Selve leveransen. Merk at det kun er tillatt med en leveranse pr Melding"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveBoligsameie"}),(0,s.jsx)(n.td,{children:"andelFormue"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers andel av felles formue i boligsameiet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveBoligsameie"}),(0,s.jsx)(n.td,{children:"andelFradragsberettigedeKostnader"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers andel av fradragsberettigede kostnader i boligsameiet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveBoligsameie"}),(0,s.jsx)(n.td,{children:"andelGjeld"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers andel av gjeld i boligselsameiet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveBoligsameie"}),(0,s.jsx)(n.td,{children:"andelSkattepliktigeInntekter"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers andel av skattepliktige inntekter i boligsameiet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveBoligsameie"}),(0,s.jsx)(n.td,{children:"eiertid"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers tid som eier av boenheten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveBoligsameie"}),(0,s.jsx)(n.td,{children:"matrikkelnummer"}),(0,s.jsx)(n.td,{children:"Boenhetens matrikkelnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveBoligsameie"}),(0,s.jsx)(n.td,{children:"oppgaveeier"}),(0,s.jsx)(n.td,{children:"Eier av oppgaven"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"f\xf8dselsnummer"}),(0,s.jsx)(n.td,{children:"F\xf8dselsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"navn"}),(0,s.jsx)(n.td,{children:"Navn p\xe5 oppgaveeier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"organisasjonsnummer"}),(0,s.jsx)(n.td,{children:"Organisasjonsnummer p\xe5 oppgaveeier. Eksklusiv enten f\xf8dselsnummer eller organisasjonsnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgavegiver"}),(0,s.jsx)(n.td,{children:"kontaktinformasjon"}),(0,s.jsx)(n.td,{children:"Kontaktinformasjon for oppgavegiver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgavegiver"}),(0,s.jsx)(n.td,{children:"organisasjonsnummer"}),(0,s.jsx)(n.td,{children:"Organisasjonsnummer p\xe5 oppgavegiver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringBoligsameie"}),(0,s.jsx)(n.td,{children:"antallOppgaver"}),(0,s.jsx)(n.td,{children:"Totalt antall oppgaver i leveransens oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringBoligsameie"}),(0,s.jsx)(n.td,{children:"sumAndelFormue"}),(0,s.jsx)(n.td,{children:"Sum av andelFormue i leveransens oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringBoligsameie"}),(0,s.jsx)(n.td,{children:"sumAndelFradragsberettigedeKostnader"}),(0,s.jsx)(n.td,{children:"Sum av andelFradragsberettigedeKostnader i leveransens oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringBoligsameie"}),(0,s.jsx)(n.td,{children:"sumAndelGjeld"}),(0,s.jsx)(n.td,{children:"Sum av andelGjeld i leveransens oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveoppsummeringBoligsameie"}),(0,s.jsx)(n.td,{children:"sumAndelSkattepliktigeInntekter"}),(0,s.jsx)(n.td,{children:"Sum av andelSkattepliktigeInntekter i leveransens oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SletteoppgaveBoligsameie"}),(0,s.jsx)(n.td,{children:"matrikkelnummer"}),(0,s.jsx)(n.td,{children:"Boenhetens matrikkelnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SletteoppgaveBoligsameie"}),(0,s.jsx)(n.td,{children:"oppgaveeier"}),(0,s.jsx)(n.td,{children:"Eier av sletteoppgaven"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Matrikkelnummer"}),(0,s.jsx)(n.td,{children:"bruksnummer"}),(0,s.jsx)(n.td,{children:"Del av matrikkelnummeret som sammen med kommunenummer, g\xe5rdsnummer og seksjonsnummer unikt identifiserer en eierseksjon"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Matrikkelnummer"}),(0,s.jsx)(n.td,{children:"festenummer"}),(0,s.jsx)(n.td,{children:"Festenummer tilh\xf8rende eierseksjonen dersom eiendommen er festet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Matrikkelnummer"}),(0,s.jsx)(n.td,{children:"g\xe5rdsnummer"}),(0,s.jsx)(n.td,{children:"Del av matrikkelnummeret som sammen med kommunenummer, bruksnummer og seksjonsnummer unikt identifiserer en eierseksjon"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Matrikkelnummer"}),(0,s.jsx)(n.td,{children:"kommunenummer"}),(0,s.jsx)(n.td,{children:"Boenhetens kommunenummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Matrikkelnummer"}),(0,s.jsx)(n.td,{children:"seksjonsnummer"}),(0,s.jsx)(n.td,{children:"Del av matrikkelnummeret som sammen med kommunenummer, g\xe5rdsnummer og bruksnummer unikt identifiserer en eierseksjon"})]})]})]})]}),(0,s.jsxs)(d,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.p,{children:"I f\xf8rste omgang er test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."}),(0,s.jsx)(n.h3,{id:"testmilj\xf8er",children:"Testmilj\xf8er"}),(0,s.jsxs)(n.p,{children:["Skatteetaten benytter ETM2 som testmilj\xf8. For spesifikke URL'er, se ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/boligsameie-api/0.0.1",children:"SwaggerHub"}),"."]}),(0,s.jsx)(n.p,{children:"Digdir benytter TT02 som testmilj\xf8, hvor f\xf8lgende tilbys:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DialogPorten"}),"\n",(0,s.jsx)(n.li,{children:"Autentisering - Maskinporten"}),"\n",(0,s.jsx)(n.li,{children:"Autorisering - systembruker"}),"\n",(0,s.jsx)(n.li,{children:"Altinn innboks"}),"\n"]}),(0,s.jsx)(n.p,{children:"Konsumenter m\xe5 ha egne testmilj\xf8er som kan kobles mot testmilj\xf8er hos Skatteetaten og Digdir."}),(0,s.jsx)(n.h3,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md",children:"Tenor"})," for\ndenne tjenesten. Men egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."]}),(0,s.jsx)(n.h3,{id:"testdata",children:"Testdata"}),(0,s.jsx)(n.p,{children:"Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatas\xf8k tilbyr dette.\nDet er ikke tillatt \xe5 bruke/sende skarpe data i test pga krav fra GDPR-regelverket."}),(0,s.jsx)(n.p,{children:"Det finnes forel\xf8pig ingen testdata for denne tjenesten. Denne siden oppdateres fortl\xf8pende ettersom testdata blir\ntilgjengelig."})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},26446:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/Informasjonsmodell_Boligsameie-2bfce9e122e9e96a88ebaab0b5cc5820.png"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(96540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);