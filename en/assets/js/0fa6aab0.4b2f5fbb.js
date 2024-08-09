"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[2372],{33488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(74848),i=t(28453);const r={title:"N\xe6ringsspesifikasjon API",slug:"/api/naeringsspesifikasjon",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","N\xe6ringsspesifikasjon","Skattemelding"],keywords:["N\xe6ringsspesifikasjon","naeringsspesifikasjon","api"],last_updated:"Feb 13, 2024",hide_table_of_contents:!0},a=void 0,d={id:"api/naeringsspesifikasjon",title:"N\xe6ringsspesifikasjon API",description:"Tjenesten leverer n\xe6ringsopplysninger som enkeltpersonforetak og selskaper har innrapportert til Skatteetaten i forbindelse med skattemeldingen.",source:"@site/docs/api/naeringsspesifikasjon.md",sourceDirName:"api",slug:"/api/naeringsspesifikasjon",permalink:"/api-dokumentasjon/en/api/naeringsspesifikasjon",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{inline:!0,label:"N\xe6ringsspesifikasjon",permalink:"/api-dokumentasjon/en/tags/naeringsspesifikasjon"},{inline:!0,label:"Skattemelding",permalink:"/api-dokumentasjon/en/tags/skattemelding"}],version:"current",frontMatter:{title:"N\xe6ringsspesifikasjon API",slug:"/api/naeringsspesifikasjon",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","N\xe6ringsspesifikasjon","Skattemelding"],keywords:["N\xe6ringsspesifikasjon","naeringsspesifikasjon","api"],last_updated:"Feb 13, 2024",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API",permalink:"/api-dokumentasjon/en/api/mvaregisteravgiftssubjekt"},next:{title:"Omregistreringsavgift API",permalink:"/api-dokumentasjon/en/api/omregistreringsavgift"}},l={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjeneste",id:"st\xf8ttetjeneste",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Toppniv\xe5",id:"toppniv\xe5",level:2},{value:"N\xe6ringsinntekt",id:"n\xe6ringsinntekt",level:2},{value:"Personinntekt",id:"personinntekt",level:2},{value:"Balanse",id:"balanse",level:2},{value:"Resultatregnskap",id:"resultatregnskap",level:2},{value:"Avskrivning",id:"avskrivning",level:2},{value:"Spesifikasjon av resultatregnskap og balanse",id:"spesifikasjon-av-resultatregnskap-og-balanse",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function k(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:r,TabItem:a,Tabs:d}=n;return r||g("Summary",!0),a||g("TabItem",!0),d||g("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{children:"Tjenesten leverer n\xe6ringsopplysninger som enkeltpersonforetak og selskaper har innrapportert til Skatteetaten i forbindelse med skattemeldingen."}),"\n",(0,s.jsxs)(d,{underline:!0,children:[(0,s.jsxs)(a,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:naeringsspesifikasjon"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,s.jsx)(n.code,{children:"N\xe6ringsspesifikasjon API - P\xe5 vegne av"})]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsx)(n.p,{children:"N\xe6ringsspesifikasjon API v4 leverer n\xe6ringsspesifikasjon for inntekts\xe5rene 2022 og 2023."}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/naeringsspesifikasjon-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,s.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"ldirTotalregnskap"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"ssb"})})]})]}),(0,s.jsx)(n.h2,{id:"st\xf8ttetjeneste",children:"St\xf8ttetjeneste"}),(0,s.jsxs)(n.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,s.jsx)(n.code,{children:"N\xe6ringsspesifikasjon hendelser API"})]}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://data.norge.no/dataservices/6ed9209d-c7c0-376f-a4b5-b4ce7cc1933b",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,s.jsxs)(a,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"json",children:"JSON"}),(0,s.jsx)(n.p,{children:"Eksempel p\xe5 en gyldig respons for inntekts\xe5r 2023 (V4):"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "norskIdentifikator": "19875297549",\n  "inntektsaar": "2023",\n  "resultatregnskap": {\n    "driftsinntekt": {\n      "sumDriftsinntekt": 500100.0,\n      "salgsinntekt": {\n        "inntekt": [\n          {\n            "beloep": 500000.0,\n            "id": "3000",\n            "type": "3000"\n          }\n        ]\n      },\n      "annenDriftsinntekt": {\n        "inntekt": [\n          {\n            "beloep": 100.0,\n            "id": "3700",\n            "type": "3700"\n          }\n        ]\n      }\n    },\n    "driftskostnad": {\n      "sumDriftskostnad": 70333.0,\n      "annenDriftskostnad": {\n        "kostnad": [\n          {\n            "beloep": 45000.0,\n            "id": "6100",\n            "type": "6100"\n          },\n          {\n            "beloep": 22222.0,\n            "id": "7330",\n            "type": "7330"\n          },\n          {\n            "beloep": 3111.0,\n            "id": "7295",\n            "type": "7295"\n          }\n        ]\n      }\n    },\n    "aarsresultat": 429767.0\n  },\n  "beregnetNaeringsinntekt": {\n    "fordeltBeregnetNaeringsinntektForPersonligSkattepliktigEllerSdf": [\n      {\n        "id": "1",\n        "identifikatorForFordeltBeregnetPersoninntekt": "1",\n        "identifikatorForFordeltBeregnetNaeringsinntekt": "1",\n        "naeringstype": "skiferproduksjon",\n        "fordeltSkattemessigResultat": 329767.0,\n        "fordeltSkattemessigResultatEtterKorreksjon": 329767.0,\n        "andelAvFordeltSkattemessigResultatTilordnetInnehaver": 100.0,\n        "fordeltSkattemessigResultatEtterKorreksjonTilordnetInnehaver": 329767.0\n      },\n      {\n        "id": "ba0b7d70-55ac-45b8-ba3f-545c574f5251",\n        "kommunenummer": "5403",\n        "identifikatorForFordeltBeregnetPersoninntekt": "2",\n        "identifikatorForFordeltBeregnetNaeringsinntekt": "2",\n        "naeringstype": "reindrift",\n        "naeringsbeskrivelse": "reindrift",\n        "fordeltSkattemessigResultat": 100000.0,\n        "reindrift": {\n          "korrigertResultat": 100000.0\n        },\n        "fordeltSkattemessigResultatEtterKorreksjon": 100000.0,\n        "andelAvFordeltSkattemessigResultatTilordnetInnehaver": 100.0,\n        "fordeltSkattemessigResultatEtterKorreksjonTilordnetInnehaver": 100000.0\n      }\n    ],\n    "skattemessigResultat": 429767.0\n  },\n  "beregnetPersoninntekt": {\n    "fordeltBeregnetPersoninntekt": [\n      {\n        "id": "2",\n        "identifikatorForFordeltBeregnetPersoninntekt": "2",\n        "identifikatorForFordeltBeregnetNaeringsinntekt": "2",\n        "aaretsBeregnedePersoninntektFoerFordelingOgSamordning": 100000.0,\n        "andelAvPersoninntektTilordnetInnehaver": 100.0,\n        "aaretsBeregnedePersoninntektFoerFordelingOgSamordningTilordnetInnehaver": 100000.0\n      },\n      {\n        "id": "1",\n        "identifikatorForFordeltBeregnetPersoninntekt": "1",\n        "identifikatorForFordeltBeregnetNaeringsinntekt": "1",\n        "aaretsBeregnedePersoninntektFoerFordelingOgSamordning": 329767.0,\n        "andelAvPersoninntektTilordnetInnehaver": 100.0,\n        "aaretsBeregnedePersoninntektFoerFordelingOgSamordningTilordnetInnehaver": 329767.0\n      }\n    ]\n  },\n  "virksomhet": {\n    "regnskapspliktstype": "ingenRegnskapsplikt",\n    "regnskapsperiode": {\n      "start": "2023-01-01T00:00:00+01:00",\n      "slutt": "2023-12-31T23:59:59+01:00"\n    },\n    "virksomhetstype": "enkeltpersonforetak",\n    "regeltypeForAarsregnskap": "regnskapslovensAlminneligeRegler"\n  },\n  "skalBekreftesAvRevisor": false,\n  "skjermet": false,\n  "opprettetDato": "2024-01-29T12:09:07.614+01:00"\n}\n'})})]}),(0,s.jsxs)(a,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-002"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-003"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-004"}),(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-007"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Fikk ikke treff p\xe5 gitt identifikator."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-008"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Fant ikke naeringsspesifikasjon for gitt identifikator og inntektsaar."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-009"}),(0,s.jsx)(n.td,{children:"406"}),(0,s.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NS-010"}),(0,s.jsx)(n.td,{children:"410"}),(0,s.jsx)(n.td,{children:"Naeringsspesifikasjon er ikke lenger tilgjenglig."})]})]})]})]}),(0,s.jsxs)(a,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://data.norge.no/informationmodels/c45bfb1b-766e-386a-b560-c57eca638c1a",children:"Informasjonsmodell"})," i Felles datakatalog."]}),(0,s.jsx)(n.p,{children:"Obs. Hvis modellene p\xe5 denne siden avviker fra Open API spesifikasjonen p\xe5 Swaggerhub, er det Open API spesifikasjonen\nsom er mest oppdatert."}),(0,s.jsx)(n.p,{children:"Modellene nedenfor avviker litt fra modellen slik den benyttes i tjenesten. Modellen har f\xf8lgende avvik:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Part er erstattet med personidentifikator"}),"\n",(0,s.jsx)(n.li,{children:"Intern systemreferanse er ikke med"}),"\n",(0,s.jsx)(n.li,{children:"Type Endringsmetadata er ikke med"}),"\n",(0,s.jsx)(n.li,{children:"Type Bel\xf8pIValuta er konvertert til Bel\xf8p"}),"\n"]}),(0,s.jsx)(n.h2,{id:"toppniv\xe5",children:"Toppniv\xe5"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Toppniv\xe5",src:t(43886).A+"",width:"1365",height:"844"})}),(0,s.jsx)(n.h2,{id:"n\xe6ringsinntekt",children:"N\xe6ringsinntekt"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Naeringsinntekt",src:t(70973).A+"",width:"1817",height:"796"})}),(0,s.jsx)(n.h2,{id:"personinntekt",children:"Personinntekt"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Personinntekt",src:t(96483).A+"",width:"1495",height:"779"})}),(0,s.jsx)(n.h2,{id:"balanse",children:"Balanse"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Balanse",src:t(23563).A+"",width:"2542",height:"1341"})}),(0,s.jsx)(n.h2,{id:"resultatregnskap",children:"Resultatregnskap"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Resultatregnskap",src:t(75746).A+"",width:"2325",height:"1964"})}),(0,s.jsx)(n.h2,{id:"avskrivning",children:"Avskrivning"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Avskrivning",src:t(51791).A+"",width:"1755",height:"1724"})}),(0,s.jsx)(n.h2,{id:"spesifikasjon-av-resultatregnskap-og-balanse",children:"Spesifikasjon av resultatregnskap og balanse"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Spesifikasjon av resultatregnskap og balanse",src:t(93578).A+"",width:"3388",height:"2020"})})]}),(0,s.jsxs)(a,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"})," for denne tjenesten, men man kan benytte hendelseslisten for \xe5 finne testdata man kan benytte for \xe5 teste oppslagstjenesten."]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},96483:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Personinntekt-a4f95379e8452f265d171a7b2862c81a.png"},51791:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/avskrivning-6d9414e0d2de92ffb63f9405f0fcdcf4.png"},23563:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/balanse-a207f0dd24bd2afb55f83784f62cc2a3.png"},70973:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/naeringsinntekt-3f6bb9b538e75ff8e187f95bf4125e6d.png"},43886:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/naeringsopplysninger_v1-6a7e83a253788d4c6a63941cfda6ede4.png"},75746:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/resultatregnskap-0efa31565d2e1c65b6ea16709d152245.png"},93578:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/spesifikasjonAvResultatregnskapOgBalanse-31de2271611af2a1d6706ed2d652b8a7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);