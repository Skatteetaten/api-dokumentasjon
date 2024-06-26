"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4724],{22320:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var t=i(74848),r=i(28453);const s={title:"Arbeidsgiveravgift API",slug:"/api/arbeidsgiveravgift",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Seri\xf8sitet"],keywords:["arbeidsgiveravgift","virksomheter"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},a=void 0,d={id:"api/arbeidsgiveravgift",title:"Arbeidsgiveravgift API",description:"Tjenesten leverer informasjon om en virksomhet sitt grunnlag for arbeidsgiveravgift pr. 2 m\xe5neds termin for de siste tre terminer.",source:"@site/docs/api/arbeidsgiveravgift.md",sourceDirName:"api",slug:"/api/arbeidsgiveravgift",permalink:"/api-dokumentasjon/en/api/arbeidsgiveravgift",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{inline:!0,label:"Seri\xf8sitet",permalink:"/api-dokumentasjon/en/tags/seriositet"}],version:"current",frontMatter:{title:"Arbeidsgiveravgift API",slug:"/api/arbeidsgiveravgift",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Seri\xf8sitet"],keywords:["arbeidsgiveravgift","virksomheter"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Arbeidsforhold i oppdrag API",permalink:"/api-dokumentasjon/en/api/arbeidsforholdioppdrag"},next:{title:"Avregning API",permalink:"/api-dokumentasjon/en/api/avregning"}},l={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Samtykke",id:"samtykke",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Summary:i,TabItem:s,Tabs:a}=n;return i||j("Summary",!0),s||j("TabItem",!0),a||j("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:"Tjenesten leverer informasjon om en virksomhet sitt grunnlag for arbeidsgiveravgift pr. 2 m\xe5neds termin for de siste tre terminer."}),"\n",(0,t.jsxs)(a,{underline:!0,children:[(0,t.jsxs)(s,{headerText:"Om tjenesten",itemKey:"itemKey-1",children:[(0,t.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,t.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,t.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,t.jsx)(n.code,{children:"skatteetaten:arbeidsgiveravgift"})]}),(0,t.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,t.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,t.jsx)(n.code,{children:"Arbeidsgiveravgift API - P\xe5 vegne av"})]}),(0,t.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,t.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/arbeidsgiveravgift-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,t.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"}),(0,t.jsx)(n.th,{children:"Egenskaper ved rettighetspakke"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ebevis"}),(0,t.jsx)(n.td,{children:"Krever samtykke"})]})})]}),(0,t.jsx)(n.h2,{id:"samtykke",children:"Samtykke"}),(0,t.jsxs)(n.p,{children:["Tjenesten krever ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/samtykke",children:"samtykke"}),"."]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Tjenestekode"}),(0,t.jsx)(n.th,{children:"Form\xe5l"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5616_3"}),(0,t.jsxs)(n.td,{children:["Kreves for rettighetspakke ",(0,t.jsx)(n.code,{children:"ebevis"})]})]})})]}),(0,t.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://data.norge.no/dataservices/53514316-7696-33cf-8e03-c5f4133f0050",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,t.jsxs)(s,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,t.jsx)(n.h2,{id:"curl",children:"Curl"}),(0,t.jsx)(n.p,{children:"Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 ha et gyldig maskinportentoken og altinn samtykketoken som legges ved som headerer i curl-kommandoen."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ curl -v -H "Authorization: Bearer <maskinporten_token>" -H "AltinnSamtykke: <samtykke_token>" "https://api-test.sits.no/api/arbeidsgiveravgift/v1/ebevis/974761076"\n'})}),(0,t.jsx)(n.h2,{id:"json",children:"JSON"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "levert": "2020-09-21T09:22:08",\n    "forespurteOrganisasjon": "974761076",\n    "arbeidsgiveravgifter": [\n        {\n            "arbeidsgiveravgift": {\n                "termin": "mar-apr",\n                "aar": "2020",\n                "sumavgiftsgrunnlagBeloep": 5269318\n            }\n        },\n        {\n            "arbeidsgiveravgift": {\n                "termin": "mai-jun",\n                "aar": "2020",\n                "sumavgiftsgrunnlagBeloep": 4544779\n            }\n        },\n        {\n            "arbeidsgiveravgift": {\n                "termin": "jul-aug",\n                "aar": "2020",\n                "sumavgiftsgrunnlagBeloep": 3085645\n            }\n        }\n    ]\n}\n'})})]}),(0,t.jsxs)(s,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,t.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,t.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feilkode"}),(0,t.jsx)(n.th,{children:"HTTP Statuskode"}),(0,t.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ARBEIDSGIVERAVGIFT-001"}),(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ARBEIDSGIVERAVGIFT-002"}),(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ARBEIDSGIVERAVGIFT-003"}),(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ARBEIDSGIVERAVGIFT-004"}),(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ARBEIDSGIVERAVGIFT-005"}),(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ARBEIDSGIVERAVGIFT-006"}),(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ARBEIDSGIVERAVGIFT-007"}),(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med samtykke."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ARBEIDSGIVERAVGIFT-008"}),(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Ingen arbeidsgiveravgift funnet p\xe5 oppgitt organisasjonsnummer."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ARBEIDSGIVERAVGIFT-009"}),(0,t.jsx)(n.td,{children:"406"}),(0,t.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,t.jsx)(s,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://data.norge.no/informationmodels/704618c8-ed35-3b12-a486-5df49713e707",children:"Informasjonsmodell"})," i Felles datakatalog."]})}),(0,t.jsxs)(s,{headerText:"Test",itemKey:"itemKey-5",children:[(0,t.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,t.jsxs)(n.p,{children:["Det finnes pt. ikke et eget s\xf8k i ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"}),' for denne tjenesten, men testdata kan finnes i Tenor med s\xf8ket for "Inntekt A-ordning".']})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);