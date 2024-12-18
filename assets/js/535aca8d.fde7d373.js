"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4697],{5263:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"api/mvaregisteravgiftssubjekt","title":"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API","description":"Tjenesten leverer infomasjon fra mva-register om avgiftssubjekter med skatteplikt.","source":"@site/docs/api/mvaregisteravgiftssubjekt.md","sourceDirName":"api","slug":"/api/mvaregisteravgiftssubjekt","permalink":"/api-dokumentasjon/api/mvaregisteravgiftssubjekt","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"MVA","permalink":"/api-dokumentasjon/tags/mva"}],"version":"current","frontMatter":{"title":"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API","slug":"/api/mvaregisteravgiftssubjekt","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","MVA"],"keywords":["mva"],"last_updated":"Mar 6, 2023","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Mva-melding API","permalink":"/api-dokumentasjon/api/mvamelding"},"next":{"title":"N\xe6ringsspesifikasjon API","permalink":"/api-dokumentasjon/api/naeringsspesifikasjon"}}');var i=s(74848),r=s(28453);const a={title:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API",slug:"/api/mvaregisteravgiftssubjekt",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","MVA"],keywords:["mva"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},d=void 0,l={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function j(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Summary:s,TabItem:n,Tabs:a}=t;return s||c("Summary",!0),n||c("TabItem",!0),a||c("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:"Tjenesten leverer infomasjon fra mva-register om avgiftssubjekter med skatteplikt."}),"\n",(0,i.jsxs)(a,{underline:!0,children:[(0,i.jsxs)(n,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,i.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,i.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,i.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,i.jsx)(t.code,{children:"skatteetaten:mvaregisteravgiftssubjekt"})]}),(0,i.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,i.jsxs)(t.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,i.jsx)(t.code,{children:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API - P\xe5 vegne av"})]}),(0,i.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,i.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,i.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/mva-register-avgiftssubjekter-med-skattemeldingsplikt-api/",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,i.jsx)(t.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,i.jsx)(t.tbody,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"ssb"})})})]}),(0,i.jsx)(t.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,i.jsxs)(t.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,i.jsx)(t.code,{children:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API"})]}),(0,i.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://data.norge.no/dataservices/45c47f49-9117-3dbe-84a3-06c64abf3bb3",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,i.jsxs)(n,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,i.jsx)(t.h2,{id:"json",children:"JSON"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "organisasjonsnummer": "313327337",\n  "registrertAvgiftssubjekt": {\n    "registreringsstatus": "aktiv",\n    "foersteregistreringsdato": "2022-01-01",\n    "skattemeldingsplikt": [\n      {\n        "meldingskategori": "alminnelig",\n        "skattleggingsperiodetype": "toMaaned",\n        "registreringsperiode": {\n          "start": "2022-01-01"\n        },\n        "foersteTermin": {\n          "periode": "januar-februar",\n          "aar": "2022"\n        }\n      }\n    ]\n  }\n}\n'})})]}),(0,i.jsxs)(n,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,i.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,i.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Feilkode"}),(0,i.jsx)(t.th,{children:"HTTP Statuskode"}),(0,i.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MRA-001"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MRA-002"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MRA-003"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MRA-004"}),(0,i.jsx)(t.td,{children:"401"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MRA-005"}),(0,i.jsx)(t.td,{children:"403"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MRA-006"}),(0,i.jsx)(t.td,{children:"400"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MRA-007"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ingen treff p\xe5 opgitt organisasjonsnummer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MRA-008"}),(0,i.jsx)(t.td,{children:"406"}),(0,i.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,i.jsx)(n,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,i.jsx)(t.p,{children:"[Informasjonsmodell] i Felles datakatalog."})}),(0,i.jsxs)(n,{headerText:"Test",itemKey:"itemKey-5",children:[(0,i.jsx)(t.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,i.jsxs)(t.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, men man kan benytte hendelseslisten for \xe5 finne referanser man kan benytte for \xe5 teste oppslagstjenesten."]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>d});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);