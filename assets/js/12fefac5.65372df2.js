"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5246],{66361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/skattepliktupersonlig","title":"Skatteplikt upersonlig API","description":"Tjenesten leverer informasjon om type skatteplikt og grunnlag for vurdering av skatteplikten for en virksomhet.","source":"@site/docs/api/skattepliktupersonlig.md","sourceDirName":"api","slug":"/api/skattepliktupersonlig","permalink":"/api-dokumentasjon/api/skattepliktupersonlig","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"Skatteoppgj\xf8r","permalink":"/api-dokumentasjon/tags/skatteoppgjor"}],"version":"current","frontMatter":{"title":"Skatteplikt upersonlig API","slug":"/api/skattepliktupersonlig","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Skatteoppgj\xf8r"],"keywords":["Skatteplikt","inntekt","formue"],"last_updated":"Mar 31, 2023","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Skatteplikt API","permalink":"/api-dokumentasjon/api/skatteplikt"},"next":{"title":"Summert skattegrunnlag API","permalink":"/api-dokumentasjon/api/summertskattegrunnlag"}}');var i=n(74848),r=n(28453);const l={title:"Skatteplikt upersonlig API",slug:"/api/skattepliktupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["Skatteplikt","inntekt","formue"],last_updated:"Mar 31, 2023",hide_table_of_contents:!0},a=void 0,d={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Summary:n,TabItem:s,Tabs:l}=t;return n||j("Summary",!0),s||j("TabItem",!0),l||j("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:"Tjenesten leverer informasjon om type skatteplikt og grunnlag for vurdering av skatteplikten for en virksomhet."}),"\n",(0,i.jsxs)(l,{underline:!0,children:[(0,i.jsxs)(s,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,i.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,i.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,i.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,i.jsx)(t.code,{children:"skatteetaten:skattepliktupersonlig"})]}),(0,i.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,i.jsxs)(t.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,i.jsx)(t.code,{children:"Skatteplikt upersonlig API - P\xe5 vegne av"})]}),(0,i.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,i.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,i.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skatteplikt-upersonlig-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,i.jsx)(t.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,i.jsx)(t.tbody,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"ssb"})})})]}),(0,i.jsx)(t.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,i.jsx)(t.h3,{id:"hendelser",children:"Hendelser"}),(0,i.jsxs)(t.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,i.jsx)(t.code,{children:"Skatteoppgj\xf8r upersonlig hendelser API"})]}),(0,i.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://data.norge.no/dataservices/b2ef75a2-745e-328d-8677-bfeeacea6cab",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,i.jsxs)(s,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,i.jsx)(t.h2,{id:"json",children:"JSON"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "organisasjonsnummer": "311165933",\n  "inntektsaar": 2023,\n  "harSkattepliktTilNorge": true,\n  "harSkattepliktTilSvalbard": false,\n  "erFritattForFormuesskatt": false,\n  "erOmfattetAvSaerreglerForKraftforetak": false,\n  "erOmfattetAvPetroleumsskatteloven": false,\n  "erOmfattetAvRederiskatteordningen": false,\n  "erOmfattetAvFinansskattPaaLoennOgOverskudd": false,\n  "skatteregnskapskommune": [\n    "4215"\n  ],\n  "ajourholdstidspunkt": "2024-04-10T10:05:23Z"\n}\n'})})]}),(0,i.jsxs)(s,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,i.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,i.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Feilkode"}),(0,i.jsx)(t.th,{children:"HTTP Statuskode"}),(0,i.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-001"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-002"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-003"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-004"}),(0,i.jsx)(t.td,{children:"401"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-005"}),(0,i.jsx)(t.td,{children:"403"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-006"}),(0,i.jsx)(t.td,{children:"400"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-007"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ikke treff p\xe5 oppgitt organisasjonsnummer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-008"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ingen skatteplikt funnet p\xe5 oppgitt organisasjonsnummer og inntekts\xe5r."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-009"}),(0,i.jsx)(t.td,{children:"406"}),(0,i.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUP-010"}),(0,i.jsx)(t.td,{children:"410"}),(0,i.jsx)(t.td,{children:"Skatteplikt finnes ikke lenger."})]})]})]})]}),(0,i.jsx)(s,{headerText:"Informasjonsmodell",itemKey:"itemKey-4"}),(0,i.jsxs)(s,{headerText:"Test",itemKey:"itemKey-5",children:[(0,i.jsx)(t.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,i.jsxs)(t.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, og testdata er derfor listet her."]}),(0,i.jsx)(t.h2,{id:"testdata",children:"Testdata"}),(0,i.jsx)(t.p,{children:"Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne:"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Organisasjonsnummer"}),(0,i.jsx)(t.th,{children:"Inntekts\xe5r"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"210962492"}),(0,i.jsx)(t.td,{children:"2021"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"310962074"}),(0,i.jsx)(t.td,{children:"2021"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"312282933"}),(0,i.jsx)(t.td,{children:"2021"})]})]})]}),(0,i.jsx)(t.p,{children:"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."})]})]})]})}function k(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);