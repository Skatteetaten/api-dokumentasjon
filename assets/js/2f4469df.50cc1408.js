"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3902],{62518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/summertskattegrunnlagupersonlig","title":"Summert skattegrunnlag upersonlig API","description":"Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en virksomhet.","source":"@site/docs/api/summertskattegrunnlagupersonlig.md","sourceDirName":"api","slug":"/api/summertskattegrunnlagupersonlig","permalink":"/api-dokumentasjon/api/summertskattegrunnlagupersonlig","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"Skatteoppgj\xf8r","permalink":"/api-dokumentasjon/tags/skatteoppgjor"}],"version":"current","frontMatter":{"title":"Summert skattegrunnlag upersonlig API","slug":"/api/summertskattegrunnlagupersonlig","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Skatteoppgj\xf8r"],"keywords":["SummertSkattegrunnlag","inntekt","formue"],"last_updated":"Mar 29, 2023","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Summert skattegrunnlag API","permalink":"/api-dokumentasjon/api/summertskattegrunnlag"},"next":{"title":"Tilleggsskatt API","permalink":"/api-dokumentasjon/api/tilleggsskatt"}}');var r=n(74848),i=n(28453);const l={title:"Summert skattegrunnlag upersonlig API",slug:"/api/summertskattegrunnlagupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 29, 2023",hide_table_of_contents:!0},d=void 0,a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:n,TabItem:s,Tabs:l}=t;return n||c("Summary",!0),s||c("TabItem",!0),l||c("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{children:"Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en virksomhet."}),"\n",(0,r.jsxs)(l,{underline:!0,children:[(0,r.jsxs)(s,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,r.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,r.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,r.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.jsx)(t.code,{children:"skatteetaten:summertskattegrunnlagupersonlig"})]}),(0,r.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,r.jsxs)(t.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.jsx)(t.code,{children:"Summert skattegrunnlag upersonlig API - P\xe5 vegne av"})]}),(0,r.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,r.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,r.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-upersonlig-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,r.jsx)(t.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"ssb"})})})]}),(0,r.jsx)(t.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,r.jsx)(t.h3,{id:"hendelser",children:"Hendelser"}),(0,r.jsxs)(t.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.jsx)(t.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,r.jsx)(t.code,{children:"Skatteoppgj\xf8r upersonlig hendelser API"})]}),(0,r.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://data.norge.no/dataservices/7954ac24-fac2-3333-b47f-bc941ca1648e",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,r.jsx)(s,{headerText:"Eksempler",itemKey:"itemKey-2",children:(0,r.jsx)(t.h2,{id:"json",children:"JSON"})}),(0,r.jsxs)(s,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,r.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,r.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Feilkode"}),(0,r.jsx)(t.th,{children:"HTTP Statuskode"}),(0,r.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-001"}),(0,r.jsx)(t.td,{children:"500"}),(0,r.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-002"}),(0,r.jsx)(t.td,{children:"500"}),(0,r.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-003"}),(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-004"}),(0,r.jsx)(t.td,{children:"401"}),(0,r.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-005"}),(0,r.jsx)(t.td,{children:"403"}),(0,r.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-006"}),(0,r.jsx)(t.td,{children:"400"}),(0,r.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-007"}),(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Ikke treff p\xe5 oppgitt organisasjonsnummer."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-008"}),(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Ingen summert skattegrunnlag funnet p\xe5 oppgitt organisasjonsnummer og inntekts\xe5r."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-009"}),(0,r.jsx)(t.td,{children:"406"}),(0,r.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SSU-010"}),(0,r.jsx)(t.td,{children:"410"}),(0,r.jsx)(t.td,{children:"Skattegrunnlag finnes ikke lenger."})]})]})]})]}),(0,r.jsx)(s,{headerText:"Informasjonsmodell",itemKey:"itemKey-4"}),(0,r.jsxs)(s,{headerText:"Test",itemKey:"itemKey-5",children:[(0,r.jsx)(t.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,r.jsxs)(t.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,r.jsx)(t.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, og testdata er derfor listet her."]}),(0,r.jsx)(t.h2,{id:"testdata",children:"Testdata"}),(0,r.jsx)(t.p,{children:"Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne:"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Organisasjonsnummer"}),(0,r.jsx)(t.th,{children:"Inntekts\xe5r"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"210962492"}),(0,r.jsx)(t.td,{children:"2021"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"310962074"}),(0,r.jsx)(t.td,{children:"2021"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"312282933"}),(0,r.jsx)(t.td,{children:"2021"})]})]})]}),(0,r.jsx)(t.p,{children:"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."})]})]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var s=n(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);