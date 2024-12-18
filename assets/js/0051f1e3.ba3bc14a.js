"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5158],{50971:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"api/gavertilfrivillige","title":"Gaver til frivillige API","description":"Tjeneste for innrapportering av tredjepartsopplysninger for gaver til visse frivillige organisasjoner og enkelte tros og livssynssamfunn.","source":"@site/docs/api/gavertilfrivillige.md","sourceDirName":"api","slug":"/api/gavertilfrivillige","permalink":"/api-dokumentasjon/api/gavertilfrivillige","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"gaver","permalink":"/api-dokumentasjon/tags/gaver"},{"inline":true,"label":"frivillige","permalink":"/api-dokumentasjon/tags/frivillige"},{"inline":true,"label":"frivillighet","permalink":"/api-dokumentasjon/tags/frivillighet"},{"inline":true,"label":"tro","permalink":"/api-dokumentasjon/tags/tro"},{"inline":true,"label":"livssyn","permalink":"/api-dokumentasjon/tags/livssyn"}],"version":"current","frontMatter":{"title":"Gaver til frivillige API","slug":"/api/gavertilfrivillige","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","gaver","frivillige","frivillighet","tro","livssyn"],"keywords":["grunnlagsdata"],"last_updated":"Dec 12, 2024","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Pass og stell API","permalink":"/api-dokumentasjon/api/passogstell"},"next":{"title":"Krav og betalinger","permalink":"/api-dokumentasjon/anvendelsesomraader/kravogbetalinger"}}');var s=r(74848),t=r(28453);const l={title:"Gaver til frivillige API",slug:"/api/gavertilfrivillige",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","gaver","frivillige","frivillighet","tro","livssyn"],keywords:["grunnlagsdata"],last_updated:"Dec 12, 2024",hide_table_of_contents:!0},d=void 0,a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Systemtilgang",id:"systemtilgang",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Parameter: idempotencyKey",id:"parameter-idempotencykey",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Innsending",id:"innsending",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"JSON",id:"json",level:3},{value:"Eksempel p\xe5 innsending",id:"eksempel-p\xe5-innsending",level:4},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:4},{value:"Testmilj\xf8er",id:"testmilj\xf8er",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:3},{value:"Testdata",id:"testdata",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Summary:i,TabItem:l,Tabs:d}=n;return i||j("Summary",!0),l||j("TabItem",!0),d||j("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:"Tjeneste for innrapportering av tredjepartsopplysninger for gaver til visse frivillige organisasjoner og enkelte tros og livssynssamfunn."}),"\n",(0,s.jsxs)(d,{underline:!0,children:[(0,s.jsxs)(l,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/systemtilgang",children:"Systemtilgang"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:innrapporteringgaverfrivilligeorganisasjoner"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsx)(n.p,{children:"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen."}),(0,s.jsx)(n.h2,{id:"systemtilgang",children:"Systemtilgang"}),(0,s.jsxs)(n.p,{children:["Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir.\nInformasjon vedr. dette finnes ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/systemtilgang",children:"her"}),"."]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen p\xe5\n",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/gavertilfrivillige-api/0.0.1",children:"SwaggerHub"})," TODO: oppdater"]}),(0,s.jsxs)(n.p,{children:["Oppbygning av URL-er og \xe5pninger i en evt. brannmur er beskrevet her ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/url",children:"URL-er"})]}),(0,s.jsx)(n.p,{children:"API-et for innrapportering av gaver til frivillige har to endepunkter"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"POST innsending"}),": Mottar tredjepartsopplysninger for gaver til frivillige. Ett kall mot API-et er en rapportering for en\norganisasjon gitt av en oppgavegiver og som gjelder et inntekts\xe5r."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GET uthenting_dokument"}),": Henter ut ett spesifikt dokument knyttet til en transmission i dialogporten"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["API-et validerer mottatte data mot JSON schema beskrevet p\xe5 SwaggerHub. Se ",(0,s.jsx)(n.a,{href:"gavertilfrivillige?tab=Feilkoder",children:"feilkoder"})," for\nrelaterte feilmeldinger."]}),(0,s.jsxs)(n.p,{children:["Se ogs\xe5 ",(0,s.jsx)(n.a,{href:"gavertilfrivillige?tab=Eksempler",children:"eksempler"})," for de ulike endepunktene."]}),(0,s.jsx)(n.h3,{id:"parameter-idempotencykey",children:"Parameter: idempotencyKey"}),(0,s.jsx)(n.p,{children:"idempotencyKey parameteren er p\xe5krevet. Innholdet skal v\xe6re en unik UUID. Hvert nye kall til API-et skal ha en\ntilsvarende ny idempotencyKey. Flere etterf\xf8lgende POST kall med samme request-body og samme idempotencyKey vil gi den\nsamme responsen. Kun det f\xf8rste av denne rekken med like API kall vil behandles. IdempotencyKey muliggj\xf8r at man trygt\nkan pr\xf8ve innsendinger p\xe5 nytt der man av ulike \xe5rsaker ikke har f\xe5tt en tilbakemelding fra API-et."}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsx)(n.p,{children:"Dette API-et er pt. ikke dokumentert i Felles datakatalog."})]}),(0,s.jsxs)(l,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"innsending",children:"Innsending"}),(0,s.jsx)(n.h3,{id:"eksempel-p\xe5-request-url",children:"Eksempel p\xe5 request URL"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://innrapporteringgavertilfrivillige.api.{env}.no/v1/{inntektsaar}\n"})}),(0,s.jsx)(n.h3,{id:"json",children:"JSON"}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-innsending",children:"Eksempel p\xe5 innsending"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "leveranse": {\n    "kildesystem": "Kildesystemet v2.0.5",\n    "oppgavegiver": {\n      "organisasjonsnummer": "313874664",\n      "kontaktinformasjon": {\n        "navn": "Kari Kontakt",\n        "telefonnummer": "80080000",\n        "varselEpostadresse": "kontakt@frivilligorganisasjon.no",\n        "varselSmsMobilnummer": "80080000"\n      }\n    },\n    "inntektsaar": "2024",\n    "oppgavegiversLeveranseReferanse": "EksternReferanse_2013_1",\n    "leveransetype": "ordinaer",\n    "oppgave": [\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "02020222222",\n          "navn": "Truls Gavmild"\n        },\n        "beloep": "2000"\n      },\n      {\n        "oppgaveeier": {\n          "foedselsnummer": "03027833333",\n          "navn": "Lise Generous"\n        },\n        "beloep": "4000"\n      },\n      {\n        "oppgaveeier": {\n          "organisasjonsnummer": "987654321",\n          "navn": "Norsk altruistisk selskap AS"\n        },\n        "beloep": "4000"\n      }\n    ],\n    "oppgaveoppsummering": {\n      "antallOppgaver": "3",\n      "sumBeloep": "10000"\n    }\n  }\n}\n\n'})}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-respons",children:"Eksempel p\xe5 respons"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "dialogId": "0193b5cd-cb85-7320-bd8c-6c78c88dc8af",\n    "forsendelseId": "0193b5cd-cbce-7dbd-b188-1437db673767",\n    "oppgavegiversLeveranseReferanse": "EksternReferanse_2013_1",\n    "antallOppgaver": 2\n}\n'})})]}),(0,s.jsxs)(l,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_004"}),(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"feil i forbindelse med autentisesring"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i request"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_008"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Strukturell feil i tilknyttet dataformat"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_010"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av payload"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_011"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i metadata"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_017"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uspesifisert systemfeil"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_019"}),(0,s.jsx)(n.td,{children:"409"}),(0,s.jsx)(n.td,{children:"Idempotensn\xf8kkel er benyttet tidligere"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_021"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Finner ikke forespurt ressurs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_022"}),(0,s.jsx)(n.td,{children:"405"}),(0,s.jsx)(n.td,{children:"HTTP-metode ikke st\xf8ttet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_023"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system"})]})]})]}),(0,s.jsx)(n.p,{children:"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi\nfeltene."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilspesifiseringskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"}),(0,s.jsx)(n.th,{children:"\xc5rsak"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1007"}),(0,s.jsx)(n.td,{children:"Mangler Token"}),(0,s.jsx)(n.td,{children:"Det er ikke lagt ved noen authorization header med token p\xe5 request"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1008"}),(0,s.jsx)(n.td,{children:"Ugyldig token"}),(0,s.jsx)(n.td,{children:"Token oppgitt i authorization header er ugyldig"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1015"}),(0,s.jsx)(n.td,{children:"Ikke autorisert for \xe5 levere p\xe5 denne dialogen"}),(0,s.jsx)(n.td,{children:"Organisasjonen som leverer har ikke rettighet til \xe5 levere for denne oppgavegiveren"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1022"}),(0,s.jsx)(n.td,{children:"Feil i parametre"}),(0,s.jsx)(n.td,{children:"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1023"}),(0,s.jsx)(n.td,{children:"Finner ingen ressurs for denne urlen"}),(0,s.jsx)(n.td,{children:"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1027"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r er ikke st\xf8ttet"}),(0,s.jsx)(n.td,{children:"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1028"}),(0,s.jsx)(n.td,{children:"Header mangler"}),(0,s.jsx)(n.td,{children:"P\xe5krevd header er ikke med i requesten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1030"}),(0,s.jsx)(n.td,{children:"Accept-header m\xe5 v\xe6re av type application/json"}),(0,s.jsx)(n.td,{children:"Accept header er feil. APIet har kun st\xf8tte for json i response"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1050"}),(0,s.jsx)(n.td,{children:"Finner ikke et dokument med denne IDen p\xe5 denne forsendelsen"}),(0,s.jsx)(n.td,{children:"Det finnes ikke noe dokument med gitt id p\xe5 angitt forsendelse"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1052"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r i path og i innsending er ulike"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r i innsending i JSON body og inntekts\xe5r i path m\xe5 v\xe6re like"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1053"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system, vennligst pr\xf8v igjen senere"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1054"}),(0,s.jsx)(n.td,{children:"Det finnes ingen dialog for denne kombinasjonen av inntekts\xe5r, organisjonsnummer og ordning"}),(0,s.jsx)(n.td,{})]})]})]})]}),(0,s.jsxs)(l,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"gavertilfrivillige",src:r(78088).A+"",width:"1375",height:"822"})}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Eier"}),(0,s.jsx)(n.th,{children:"Element"}),(0,s.jsx)(n.th,{children:"Dokumentasjon"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"inntektsaar"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5ret leveransen gjelder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"kildesystem"}),(0,s.jsx)(n.td,{children:"System brukt for \xe5 levere oppgaven"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"leveransetype"}),(0,s.jsx)(n.td,{children:"Type av leveranse som angir om leveransen inneholder ordin\xe6re oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver \xe5 innrapportere"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgave"}),(0,s.jsx)(n.td,{children:"Oppgave som leveres"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgavegiver"}),(0,s.jsx)(n.td,{children:"Tredjepart som rapporterer opplysning til Skatteetaten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgavegiversLeveranseReferanse"}),(0,s.jsx)(n.td,{children:"Frivillig referanse p\xe5 innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leveranse"}),(0,s.jsx)(n.td,{children:"oppgaveoppsummering"}),(0,s.jsx)(n.td,{children:"Oppsummering med totalsummer for innleverte oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Melding"}),(0,s.jsx)(n.td,{children:"leveranse"}),(0,s.jsx)(n.td,{children:"Selve leveransen. Merk at det kun er tillatt med en leveranse pr Melding"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveGave"}),(0,s.jsx)(n.td,{children:"beloep"}),(0,s.jsx)(n.td,{children:"Sum bel\xf8p som er gitt som gave"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OppgaveGave"}),(0,s.jsx)(n.td,{children:"oppgaveeier"}),(0,s.jsx)(n.td,{children:"Person eller organisasjon som har gitt gave til frivillig organisasjon eller trossamfunn"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"f\xf8dselsnummer"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers f\xf8dselsnummer eller d-nummer. Oppgi enten f\xf8dselsnummer, eller organisasjonsnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"organisasjonsnummer"}),(0,s.jsx)(n.td,{children:"Oppgaveeiers organisasjonsnummer. Oppgi enten f\xf8dselsnummer, eller organisasjonsnummer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveeier"}),(0,s.jsx)(n.td,{children:"navn"}),(0,s.jsx)(n.td,{children:"Navn p\xe5 oppgaveeier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgavegiver"}),(0,s.jsx)(n.td,{children:"kontaktinformasjon"}),(0,s.jsx)(n.td,{children:"Kontaktinformasjon for oppgavegiver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgavegiver"}),(0,s.jsx)(n.td,{children:"organisasjonsnummer"}),(0,s.jsx)(n.td,{children:"Organisasjonsnummer p\xe5 oppgavegiver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveoppsummering"}),(0,s.jsx)(n.td,{children:"antallOppgaver"}),(0,s.jsx)(n.td,{children:"Totalt antall oppgaver i leveransens oppgaver"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Oppgaveoppsummering"}),(0,s.jsx)(n.td,{children:"sumBeloep"}),(0,s.jsx)(n.td,{children:"Sum av alle bel\xf8p i oppgavene til en leveranse"})]})]})]})]}),(0,s.jsxs)(l,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.p,{children:"I f\xf8rste omgang er test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."}),(0,s.jsx)(n.h3,{id:"testmilj\xf8er",children:"Testmilj\xf8er"}),(0,s.jsxs)(n.p,{children:["Skatteetaten benytter ETM2 som testmilj\xf8. For spesifikke URL'er, se ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/gavertilfrivillige-api/0.0.1",children:"SwaggerHub"}),"."]}),(0,s.jsx)(n.p,{children:"Digdir benytter TT02 som testmilj\xf8, hvor f\xf8lgende tilbys:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DialogPorten"}),"\n",(0,s.jsx)(n.li,{children:"Autentisering - Maskinporten"}),"\n",(0,s.jsx)(n.li,{children:"Autorisering - systembruker"}),"\n",(0,s.jsx)(n.li,{children:"Altinn innboks"}),"\n"]}),(0,s.jsx)(n.p,{children:"Konsumenter m\xe5 ha egne testmilj\xf8er som kan kobles mot testmilj\xf8er hos Skatteetaten og Digdir."}),(0,s.jsx)(n.h3,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md",children:"Tenor"})," for\ndenne tjenesten. Men egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."]}),(0,s.jsx)(n.h3,{id:"testdata",children:"Testdata"}),(0,s.jsx)(n.p,{children:"Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatas\xf8k tilbyr dette.\nDet er ikke tillatt \xe5 bruke/sende skarpe data i test pga krav fra GDPR-regelverket."}),(0,s.jsx)(n.p,{children:"Det finnes forel\xf8pig ingen testdata for denne tjenesten. Denne siden oppdateres fortl\xf8pende ettersom testdata blir\ntilgjengelig."})]}),(0,s.jsx)(l,{headerText:"Kontakt oss",itemKey:"itemKey-6",children:(0,s.jsxs)(n.p,{children:["Har du sp\xf8rsm\xe5l til Skatteetaten om Gaver til frivillige API, kan du sende oss e-post: ",(0,s.jsx)(n.a,{href:"mailto:altinnreetablering@skatteetaten.no",children:"altinnreetablering@skatteetaten.no"}),(0,s.jsx)(n.br,{}),"\n","V\xe6r oppmerksom p\xe5 at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3."]})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},78088:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/Informasjonsmodell_Gavertilfrivillige-f19a8b246b736195e002a3aff8e56984.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);