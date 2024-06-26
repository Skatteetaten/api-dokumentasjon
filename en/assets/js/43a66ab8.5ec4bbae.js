"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[2044],{59734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(74848),r=n(28453);const i={title:"Skattemelding upersonlig API",slug:"/api/skattemeldingupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skattemelding"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},l=void 0,d={id:"api/skattemeldingupersonlig",title:"Skattemelding upersonlig API",description:"Tjenesten leverer opplysninger som fremkommer i skattemeldingen for en virksomhet.",source:"@site/docs/api/skattemeldingupersonlig.md",sourceDirName:"api",slug:"/api/skattemeldingupersonlig",permalink:"/api-dokumentasjon/en/api/skattemeldingupersonlig",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{inline:!0,label:"Skattemelding",permalink:"/api-dokumentasjon/en/tags/skattemelding"}],version:"current",frontMatter:{title:"Skattemelding upersonlig API",slug:"/api/skattemeldingupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skattemelding"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Skattemelding API",permalink:"/api-dokumentasjon/en/api/skattemelding"},next:{title:"Skatteplikt API",permalink:"/api-dokumentasjon/en/api/skatteplikt"}},a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function k(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Summary:n,TabItem:i,Tabs:l}=t;return n||j("Summary",!0),i||j("TabItem",!0),l||j("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:"Tjenesten leverer opplysninger som fremkommer i skattemeldingen for en virksomhet."}),"\n",(0,s.jsxs)(l,{underline:!0,children:[(0,s.jsxs)(i,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(t.code,{children:"skatteetaten:skattemeldingupersonlig"})]}),(0,s.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,s.jsxs)(t.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,s.jsx)(t.code,{children:"Skattemelding upersonlig API - P\xe5 vegne av"})]}),(0,s.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(t.p,{children:["Skattemelding upersonlig API f\xf8lger ikke de generelle reglene for ",(0,s.jsx)(t.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"versjonering"}),", men har en egen versjon pr. inntekts\xe5r. For \xf8yeblikket leverer API-et skattemeldinger for 2022."]}),(0,s.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,s.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skattemelding-upersonlig-api",children:"Open API spesifikasjonen"})," i SwaggerHub."]}),(0,s.jsx)(t.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"ssb"})})})]}),(0,s.jsx)(t.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,s.jsxs)(t.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,s.jsx)(t.a,{href:"/api-dokumentasjon/en/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,s.jsx)(t.code,{children:"Skattemelding upersonlig hendelser API"})]}),(0,s.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://data.norge.no/dataservices/04d29ccb-2bd2-3512-9f0d-138ff342f360",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,s.jsxs)(i,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(t.h2,{id:"curl",children:"Curl"}),(0,s.jsx)(t.p,{children:"Her er et eksempel p\xe5 et kall med curl mot tjenesten for \xe5 hente fastsatt skattemelding. Du m\xe5 legge sertifikat og n\xf8kkel som parametre til curl-kommandoen."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/skattemeldingupersonlig/v2/fastsatt/ssb/2022/210962492"\n'})}),(0,s.jsx)(t.h2,{id:"json",children:"JSON"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "norskIdentifikator": "824889880",\n  "inntektsaar": "2022",\n  "spesifikasjonAvSkattefradragForKostnaderTilForskningOgUtvikling": {\n    "forskningOgUtviklingsprosjekt": [\n      {\n        "id": "1c9c453c-a54a-4193-8a0e-e491bda1d5a5",\n        "prosjektnummer": 1,\n        "prosjekttittel": "2",\n        "prosjektperiode": {\n          "start": "2022-04-27",\n          "slutt": "2022-11-03"\n        },\n        "prosjektstatus": {\n          "status": "8"\n        },\n        "prosjektkategori": "forskning",\n        "samledeKostnaderTidligereAar": 32432,\n        "skattefradragForKostnaderTilForskningOgUtvikling": {\n          "nettoSkattefradragFoerAvkortingMotAnnenOffentligStoette": 0,\n          "tilleggIBeregnetSkattPerProsjekt": 0\n        },\n        "annenOffentligStoette": {\n          "virksomhetskategori": "liten",\n          "harOmfattendeSpredningGjennomKonferanserPublikasjonerMv": false,\n          "samletBruttoOffentligStoetteIProsjektperioden": 0\n        },\n        "samledeKostnaderIHeleProsjektperioden": 32432,\n        "maksimalGodkjentOffentligStoetteSomAndelAvTotalkostnad": 70.0,\n        "vurderingAvOekonomiskeVanskeligheter": {\n          "varIOekonomiskeVanskeligheterPaaSoeknadstidspunktet": false\n        },\n        "maksimaltGodkjentBruttobeloepForOffentligStoette": 22702\n      },\n      {\n        "id": "22ceb123-0f28-4de8-8e5c-dc22c4511a99",\n        "prosjektnummer": 1,\n        "prosjekttittel": "Me",\n        "prosjektperiode": {\n          "start": "2022-09-28",\n          "slutt": "2022-12-08"\n        },\n        "prosjektstatus": {\n          "dato": "2023-02-09",\n          "status": "4"\n        },\n        "prosjektkategori": "forskning",\n        "samledeKostnaderTidligereAar": 0,\n        "samletBruttoSkattefradragFraTidligereAar": 0,\n        "kostnadIInntektsaaret": {\n          "kostnad": 50000,\n          "heravPersonalkostnad": 677,\n          "antallEgneTimer": 776\n        },\n        "skattefradragForKostnaderTilForskningOgUtvikling": {\n          "nettoSkattefradragFoerAvkortingMotAnnenOffentligStoette": 9500,\n          "skattefradragPerProsjekt": 9500\n        },\n        "erSamarbeidsprosjektMellomFlereVirksomheter": false,\n        "annenOffentligStoette": {\n          "virksomhetskategori": "liten",\n          "harOmfattendeSpredningGjennomKonferanserPublikasjonerMv": false,\n          "offentligStoetteSomRedusertArbeidsgiveravgift": 677,\n          "samletBruttoOffentligStoetteIProsjektperioden": 677\n        },\n        "samledeKostnaderIHeleProsjektperioden": 50000,\n        "maksimalGodkjentOffentligStoetteSomAndelAvTotalkostnad": 70.0,\n        "vurderingAvOekonomiskeVanskeligheter": {\n          "varIOekonomiskeVanskeligheterPaaSoeknadstidspunktet": false,\n          "grunnlagsdokumentasjon": "aarsregnskap"\n        },\n        "maksimaltGodkjentBruttobeloepForOffentligStoette": 35000\n      }\n    ],\n    "samletTotalkostnad": 50000,\n    "samletSkattefradrag": 9500\n  },\n  "skjermet": false,\n  "registreringstidspunkt": "2023-02-28T17:05:58.823951Z",\n  "opprettetDato": "2023-02-28T17:05:58.259609725+01:00"\n}\n'})})]}),(0,s.jsxs)(i,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,s.jsx)(t.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Feilkode"}),(0,s.jsx)(t.th,{children:"HTTP Statuskode"}),(0,s.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-001"}),(0,s.jsx)(t.td,{children:"500"}),(0,s.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-002"}),(0,s.jsx)(t.td,{children:"500"}),(0,s.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-003"}),(0,s.jsx)(t.td,{children:"404"}),(0,s.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-004"}),(0,s.jsx)(t.td,{children:"401"}),(0,s.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-005"}),(0,s.jsx)(t.td,{children:"403"}),(0,s.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-006"}),(0,s.jsx)(t.td,{children:"400"}),(0,s.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-007"}),(0,s.jsx)(t.td,{children:"404"}),(0,s.jsx)(t.td,{children:"Ingen skattemelding funnet p\xe5 oppgitt gitt inntekts\xe5r og identifikator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-008"}),(0,s.jsx)(t.td,{children:"406"}),(0,s.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-009"}),(0,s.jsx)(t.td,{children:"404"}),(0,s.jsx)(t.td,{children:"Ingen organisasjon funnet med oppgitt identifikator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SMU-010"}),(0,s.jsx)(t.td,{children:"410"}),(0,s.jsx)(t.td,{children:"Skattemeldingen finnes ikke lenger."})]})]})]})]}),(0,s.jsx)(i,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://data.norge.no/informationmodels/e48e70c9-70b2-3349-9c32-983febe9a2e6",children:"Informasjonsmodell"})," i Felles datakatalog."]})}),(0,s.jsxs)(i,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(t.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(t.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(t.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"})," for denne tjenesten, og testdata er derfor listet her."]}),(0,s.jsx)(t.h2,{id:"testdata",children:"Testdata"}),(0,s.jsx)(t.p,{children:"Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne:"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Organisasjonsnummer"}),(0,s.jsx)(t.th,{children:"Inntekts\xe5r"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"210962492"}),(0,s.jsx)(t.td,{children:"2021"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"310962074"}),(0,s.jsx)(t.td,{children:"2021"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"312547678"}),(0,s.jsx)(t.td,{children:"2021"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"313269906"}),(0,s.jsx)(t.td,{children:"2021"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"314247914"}),(0,s.jsx)(t.td,{children:"2021"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"310322881"}),(0,s.jsx)(t.td,{children:"2022"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"314238478"}),(0,s.jsx)(t.td,{children:"2022"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"314024621"}),(0,s.jsx)(t.td,{children:"2022"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"313739007"}),(0,s.jsx)(t.td,{children:"2022"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"311772236"}),(0,s.jsx)(t.td,{children:"2022"})]})]})]}),(0,s.jsx)(t.p,{children:"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var s=n(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);