"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4911],{95316:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var t=s(74848),i=s(28453);const l={title:"Selskapsmelding API",slug:"/api/selskapsmelding",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","selskapsmelding"],last_updated:"May 29, 2024",hide_table_of_contents:!0},r=void 0,d={id:"api/selskapsmelding",title:"Selskapsmelding API",description:"Tjenesten leverer informasjon om selskapsmelding for selskaper med deltakerfastsetting.",source:"@site/docs/api/selskapsmelding.md",sourceDirName:"api",slug:"/api/selskapsmelding",permalink:"/api-dokumentasjon/en/api/selskapsmelding",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{inline:!0,label:"selskapsmelding",permalink:"/api-dokumentasjon/en/tags/selskapsmelding"}],version:"current",frontMatter:{title:"Selskapsmelding API",slug:"/api/selskapsmelding",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","selskapsmelding"],last_updated:"May 29, 2024",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Restanser API",permalink:"/api-dokumentasjon/en/api/restanser"},next:{title:"Siste tilgjengelige skatteoppgj\xf8r API",permalink:"/api-dokumentasjon/en/api/sistetilgjengeligeskatteoppgjoer"}},a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2}];function k(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:s,TabItem:l,Tabs:r}=n;return s||j("Summary",!0),l||j("TabItem",!0),r||j("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:"Tjenesten leverer informasjon om selskapsmelding for selskaper med deltakerfastsetting."}),"\n",(0,t.jsxs)(r,{underline:!0,children:[(0,t.jsxs)(l,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,t.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,t.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,t.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,t.jsx)(n.code,{children:"skatteetaten:selskapsmelding"})]}),(0,t.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,t.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,t.jsx)(n.code,{children:"Selskapsmelding API - P\xe5 vegne av"})]}),(0,t.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,t.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/selskapsmelding-api/",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,t.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,t.jsx)(n.tbody,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"ssb"})})})]}),(0,t.jsx)(n.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,t.jsx)(n.h3,{id:"hendelser",children:"Hendelser"}),(0,t.jsxs)(n.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,t.jsx)(n.code,{children:"Selskapsmelding hendelser API"})]}),(0,t.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://dataservice-catalog.fellesdatakatalog.digdir.no/974761076/data-services/66602478f92ddf67bf17460d",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,t.jsxs)(l,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,t.jsx)(n.h2,{id:"json",children:"JSON"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "norskIdentifikator": "313696146",\n  "inntektsaar": "2023",\n  "inntektOgUnderskudd": {\n    "samletInntekt": 154857,\n    "inntektOgInntektsfradrag": {\n      "naeringsinntekt": 154857\n    }\n  },\n  "spesifikasjonAvForholdRelevanteForBeskatningAvDeltakere": {\n    "aksjeIAksjonaerregisteret": [\n      {\n        "id": "9b403511-d3d7-458d-96f2-4fb0fa6f7081",\n        "selskapetsNavn": "Denne gaten 755 AS",\n        "selskapetsOrganisasjonsnummer": "312445484",\n        "landkode": "NO",\n        "aksjeklasse": "ordinaer",\n        "isinnummer": "NO5553437509",\n        "antallAksjer": 212\n      }\n    ]\n  },\n  "eierforhold": {\n    "deltaker": [\n      {\n        "deltakerensOrganisasjonsnummer": "310044237",\n        "id": "48bacc24-bad0-4a97-9ecf-c3444ed2cf6e",\n        "deltakerensNavn": "UVANLIG TROFAST TIGER AS",\n        "selskapsandelIProsent": 23.83,\n        "grunnlagForDeltakersAndelAvInntekt": {\n          "andelAvSamletInntekt": 36902\n        },\n        "deltakersAndelAvInntekt": {\n          "alminneligInntekt": 36902,\n          "utdelingMv": {\n            "uegentligInnskudd": 8118,\n            "skattPaaDeltakersAndelAvSelskapetsOverskudd": 8118\n          }\n        }\n      },\n      {\n        "deltakerensOrganisasjonsnummer": "310034479",\n        "id": "a3924b5a-0fe8-4bc1-a316-d5ecf9448c98",\n        "deltakerensNavn": "VOKSENDE AKTIV TIGER AS",\n        "selskapsandelIProsent": 76.17,\n        "grunnlagForDeltakersAndelAvInntekt": {\n          "andelAvSamletInntekt": 117955\n        },\n        "deltakersAndelAvInntekt": {\n          "alminneligInntekt": 117955,\n          "utdelingMv": {\n            "uegentligInnskudd": 25950,\n            "skattPaaDeltakersAndelAvSelskapetsOverskudd": 25950\n          }\n        }\n      }\n    ]\n  },\n  "ajourholdstidspunkt": "2024-02-20T08:42:48.479Z",\n  "opprettetDato": "2024-02-20T09:42:37.740023476+01:00"\n}\n\n'})})]}),(0,t.jsxs)(l,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,t.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,t.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne\nvariere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feilkode"}),(0,t.jsx)(n.th,{children:"HTTP Statuskode"}),(0,t.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-001"}),(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-002"}),(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-003"}),(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-004"}),(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-005"}),(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-006"}),(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-007"}),(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Ikke treff p\xe5 oppgitt identifikator."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-008"}),(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Ingen selskapsmelding funnet p\xe5 oppgitt identifikator og inntekts\xe5r."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-009"}),(0,t.jsx)(n.td,{children:"406"}),(0,t.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SME-010"}),(0,t.jsx)(n.td,{children:"406"}),(0,t.jsx)(n.td,{children:"Selskapsmelding finnes ikke lenger."})]})]})]})]}),(0,t.jsx)(l,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,t.jsx)(n.p,{children:"Informasjonsmodell kommer i Felles datakatalog."})}),(0,t.jsx)(l,{headerText:"Test",itemKey:"itemKey-5",children:(0,t.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"})," for denne tjenesten, men man kan benytt hendelseslisten for \xe5 finne\ntestdata man kan benytte for \xe5 teste oppslagstjenesten."]})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(k,{...e})}):k(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(96540);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);