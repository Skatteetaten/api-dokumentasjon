"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4963],{73386:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=i(74848),t=i(28453);const s={title:"Arbeidsforhold API",slug:"/api/arbeidsforhold",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","arbeidsforhold"],keywords:["arbeidsforhold"],last_updated:"Jul 04, 2024",hide_table_of_contents:!0},d=void 0,l={id:"api/arbeidsforhold",title:"Arbeidsforhold API",description:"Tjenesten leverer informasjon om arbeidsgivers (opplysningspliktiges) innrapporterte",source:"@site/docs/api/arbeidsforhold.md",sourceDirName:"api",slug:"/api/arbeidsforhold",permalink:"/api-dokumentasjon/en/api/arbeidsforhold",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{inline:!0,label:"arbeidsforhold",permalink:"/api-dokumentasjon/en/tags/arbeidsforhold"}],version:"current",frontMatter:{title:"Arbeidsforhold API",slug:"/api/arbeidsforhold",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","arbeidsforhold"],keywords:["arbeidsforhold"],last_updated:"Jul 04, 2024",hide_table_of_contents:!0}},a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Summary:i,TabItem:s,Tabs:d}=n;return i||c("Summary",!0),s||c("TabItem",!0),d||c("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{children:"Tjenesten leverer informasjon om arbeidsgivers (opplysningspliktiges) innrapporterte\narbeidsforholdsopplysninger for en inntektsmottaker for en gitt periode."}),"\n",(0,r.jsxs)(d,{underline:!0,children:[(0,r.jsxs)(s,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,r.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,r.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,r.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.jsx)(n.code,{children:"skatteetaten:arbeidsforhold"})]}),(0,r.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,r.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.jsx)(n.code,{children:"Arbeidsforhold API - P\xe5 vegne av"})]}),(0,r.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,r.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,r.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/arbeidsforhold-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,r.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"nav"})})})]}),(0,r.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,r.jsx)(n.p,{children:"Datatjenestebeskrivelse er ikke i Felles datakatalog enda."})]}),(0,r.jsxs)(s,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,r.jsx)(n.h2,{id:"json",children:"JSON"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "inntektsmottakerOgArbeidsgiver": [\n    {\n      "kalendermaaned": "2023-01",\n      "aggregatId": 85,\n      "norskIdentifikator": "12916399977",\n      "opplysningspliktig": "310525723",\n      "underenhet": "215165132",\n      "kildesystem": "testdatagenerator-rst-ekstern-deling",\n      "arbeidsforhold": [\n        {\n          "typeArbeidsforhold": "ordinaertArbeidsforhold",\n          "arbeidsforholdId": "e2ea2885-7ea6-49bd-8196-1032ef934a71",\n          "startdato": "2023-01-01",\n          "antallTimerPerUkeSomEnFullStillingTilsvarer": 37.5,\n          "yrke": "1142114",\n          "arbeidstidsordning": "ikkeSkift",\n          "stillingsprosent": 100.0,\n          "sisteLoennsendringsdato": "2023-01-01",\n          "sisteDatoForStillingsprosentendring": "2023-01-01",\n          "formForAnsettelse": "fast"\n        }\n      ]\n    },\n    {\n      "kalendermaaned": "2023-02",\n      "aggregatId": 86,\n      "norskIdentifikator": "12916399977",\n      "opplysningspliktig": "310525723",\n      "underenhet": "215165132",\n      "kildesystem": "testdatagenerator-rst-ekstern-deling",\n      "arbeidsforhold": [\n        {\n          "typeArbeidsforhold": "ordinaertArbeidsforhold",\n          "arbeidsforholdId": "e2ea2885-7ea6-49bd-8196-1032ef934a71",\n          "startdato": "2023-01-01",\n          "antallTimerPerUkeSomEnFullStillingTilsvarer": 37.5,\n          "yrke": "1142114",\n          "arbeidstidsordning": "ikkeSkift",\n          "stillingsprosent": 100.0,\n          "sisteLoennsendringsdato": "2023-01-01",\n          "sisteDatoForStillingsprosentendring": "2023-01-01",\n          "formForAnsettelse": "fast"\n        }\n      ]\n    },\n    {\n      "kalendermaaned": "2023-03",\n      "aggregatId": 115,\n      "norskIdentifikator": "12916399977",\n      "opplysningspliktig": "310525723",\n      "underenhet": "215165132",\n      "kildesystem": "testdatagenerator-rst-ekstern-deling",\n      "arbeidsforhold": [\n        {\n          "typeArbeidsforhold": "ordinaertArbeidsforhold",\n          "arbeidsforholdId": "e2ea2885-7ea6-49bd-8196-1032ef934a71",\n          "startdato": "2023-01-01",\n          "antallTimerPerUkeSomEnFullStillingTilsvarer": 37.5,\n          "yrke": "1142114",\n          "arbeidstidsordning": "ikkeSkift",\n          "stillingsprosent": 100.0,\n          "sisteLoennsendringsdato": "2023-01-01",\n          "sisteDatoForStillingsprosentendring": "2023-01-01",\n          "formForAnsettelse": "fast"\n        }\n      ]\n    }\n  ]\n}\n'})})]}),(0,r.jsxs)(s,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,r.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,r.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne\nvariere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feilkode"}),(0,r.jsx)(n.th,{children:"HTTP Statuskode"}),(0,r.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AFO-001"}),(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AFO-002"}),(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AFO-003"}),(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AFO-004"}),(0,r.jsx)(n.td,{children:"401"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AFO-005"}),(0,r.jsx)(n.td,{children:"403"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AFO-006"}),(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AFO-007"}),(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Fant ikke arbeidsforhold."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AFO-008"}),(0,r.jsx)(n.td,{children:"406"}),(0,r.jsx)(n.td,{children:"Feil tilknyttet dataformat."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AFO-009"}),(0,r.jsx)(n.td,{children:"410"}),(0,r.jsx)(n.td,{children:"Opplysninger om arbeidsforhold er slettet for periode."})]})]})]})]}),(0,r.jsx)(s,{headerText:"Informasjonsmodell",itemKey:"itemKey-4"}),(0,r.jsx)(s,{headerText:"Test",itemKey:"itemKey-5",children:(0,r.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"})," for denne tjenesten, men man kan benytte hendelseslisten for \xe5 finne\ntestdata man kan benytte for \xe5 teste oppslagstjenesten."]})})]})]})}function k(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);