"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5009],{36061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(74848),i=t(28453);const r={title:"Mva meldingsopplysning API",slug:"/api/mva_meldingsopplysning",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Seri\xf8sitet","MVA"],keywords:["mva","meldingsopplysning"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},a=void 0,l={id:"api/mva_meldingsopplysning",title:"Mva meldingsopplysning API",description:"Tjenesten leverer status p\xe5 mva-melding og informasjon fra reskontro for en virksomhet for de siste tre terminene.",source:"@site/docs/api/mva_meldingsopplysning.md",sourceDirName:"api",slug:"/api/mva_meldingsopplysning",permalink:"/api-dokumentasjon/api/mva_meldingsopplysning",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/tags/api"},{inline:!0,label:"Seri\xf8sitet",permalink:"/api-dokumentasjon/tags/seriositet"},{inline:!0,label:"MVA",permalink:"/api-dokumentasjon/tags/mva"}],version:"current",frontMatter:{title:"Mva meldingsopplysning API",slug:"/api/mva_meldingsopplysning",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Seri\xf8sitet","MVA"],keywords:["mva","meldingsopplysning"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Krav og betalinger API",permalink:"/api-dokumentasjon/api/kravogbetalinger"},next:{title:"Mva-melding API",permalink:"/api-dokumentasjon/api/mvamelding"}},d={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Samtykke",id:"samtykke",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:t,TabItem:r,Tabs:a}=n;return t||m("Summary",!0),r||m("TabItem",!0),a||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:"Tjenesten leverer status p\xe5 mva-melding og informasjon fra reskontro for en virksomhet for de siste tre terminene."}),"\n",(0,s.jsxs)(a,{underline:!0,children:[(0,s.jsxs)(r,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:mvameldingsopplysning"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,s.jsx)(n.code,{children:"Mva meldingsopplysning API - P\xe5 vegne av"})]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/mva-meldingsopplysning-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,s.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"}),(0,s.jsx)(n.th,{children:"Egenskaper ved rettighetspakke"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dibk"}),(0,s.jsx)(n.td,{children:"Hjemmel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ebevis"}),(0,s.jsx)(n.td,{children:"Krever samtykke"})]})]})]}),(0,s.jsx)(n.h2,{id:"samtykke",children:"Samtykke"}),(0,s.jsxs)(n.p,{children:["Tjenesten kan kreve ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/samtykke",children:"samtykke"}),"."]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Tjenestekode"}),(0,s.jsx)(n.th,{children:"Form\xe5l"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5616_4"}),(0,s.jsxs)(n.td,{children:["Kreves for rettighetspakke ",(0,s.jsx)(n.code,{children:"ebevis"})]})]})})]}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://data.norge.no/dataservices/38eb829e-33cb-3976-b789-5209c926473e",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,s.jsxs)(r,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"json",children:"JSON"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "levert": "2020-09-21T10:11:25.117551",\n    "forespurteOrganisasjon": "974761076",\n    "mvaAlminneligNaering": {\n        "skattemeldingsplikt": {\n            "termintype": "toMaanedlig",\n            "foersteTermin": {\n                "termin": "mar-apr",\n                "aar": "2004"\n            },\n            "sisteTermin": {\n                "termin": null,\n                "aar": null\n            }\n        },\n        "ansvarligForMvaMelding": {\n            "organisasjonsnummer": "974761076",\n            "organisasjonsnavn": "SKATTEETATEN AS"\n        },\n        "samletFastsattOgReskontrofoertForTermin": [\n            {\n                "gjelderTermin": {\n                    "termin": "jan-feb",\n                    "aar": "2020"\n                },\n                "fastsettingsperiodeStatus": "meldingLevertUnderBehandling",\n                "erMyndighetsfastsatt": null,\n                "grunnMyndighetsfastsatt": null,\n                "mvaAvgift": null,\n                "mvaGrunnlag": null\n            },\n            {\n                "gjelderTermin": {\n                    "termin": "mar-apr",\n                    "aar": "2020"\n                },\n                "fastsettingsperiodeStatus": "meldingLevertUnderBehandling",\n                "erMyndighetsfastsatt": null,\n                "grunnMyndighetsfastsatt": null,\n                "mvaAvgift": null,\n                "mvaGrunnlag": null\n            },\n            {\n                "gjelderTermin": {\n                    "termin": "mai-jun",\n                    "aar": "2020"\n                },\n                "fastsettingsperiodeStatus": "meldingIkkeLevert",\n                "erMyndighetsfastsatt": null,\n                "grunnMyndighetsfastsatt": null,\n                "mvaAvgift": null,\n                "mvaGrunnlag": null\n            }\n        ]\n    }\n}\n'})})]}),(0,s.jsxs)(r,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-002"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-003"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-004"}),(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-007"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med samtykke."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-008"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ingen meldingsopplysninger funnet p\xe5 oppgitt organisasjonsnummer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-009"}),(0,s.jsx)(n.td,{children:"406"}),(0,s.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-MELDINGSOPPLYSNING-010"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ikke treff p\xe5 oppgitt organisasjonsnummer."})]})]})]})]}),(0,s.jsx)(r,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://data.norge.no/informationmodels/61726311-9a02-3ccc-adcd-0a18f3a059d4",children:"Informasjonsmodell"})," i Felles datakatalog."]})}),(0,s.jsxs)(r,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten."]}),(0,s.jsx)(n.h2,{id:"testdata",children:"Testdata"}),(0,s.jsxs)(n.p,{children:["Tjenesten har for n\xe5 kun enkle mockdata, med en statisk mocket respons. For \xe5 kunne teste API-et er det nok \xe5 benytte et syntetisk organisasjonsnummer som har et samtykke. Syntetiske organisasjonsnumre finner du i ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"}),"."]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);