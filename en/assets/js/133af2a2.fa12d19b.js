"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5870],{19755:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"api/tilleggsskatt","title":"Tilleggsskatt API","description":"Tjenesten leverer informasjon om ilagt tilleggsskatt ved uriktig, eller manglende innlevering av skattemelding.","source":"@site/docs/api/tilleggsskatt.md","sourceDirName":"api","slug":"/api/tilleggsskatt","permalink":"/api-dokumentasjon/en/api/tilleggsskatt","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/en/tags/api"},{"inline":true,"label":"Skattemelding","permalink":"/api-dokumentasjon/en/tags/skattemelding"},{"inline":true,"label":"Tilleggsskatt","permalink":"/api-dokumentasjon/en/tags/tilleggsskatt"}],"version":"current","frontMatter":{"title":"Tilleggsskatt API","slug":"/api/tilleggsskatt","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Skattemelding","Tilleggsskatt"],"keywords":["tilleggsskatt","skatteberegning","inntekt","formue"],"last_updated":"Mar 6, 2023","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Summert skattegrunnlag upersonlig API","permalink":"/api-dokumentasjon/en/api/summertskattegrunnlagupersonlig"},"next":{"title":"Tjenestepensjonsavtale API","permalink":"/api-dokumentasjon/en/api/tjenestepensjonsavtale"}}');var i=s(74848),r=s(28453);const l={title:"Tilleggsskatt API",slug:"/api/tilleggsskatt",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skattemelding","Tilleggsskatt"],keywords:["tilleggsskatt","skatteberegning","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},d=void 0,a={},h=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjeneste",id:"st\xf8ttetjeneste",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Summary:s,TabItem:n,Tabs:l}=t;return s||o("Summary",!0),n||o("TabItem",!0),l||o("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:"Tjenesten leverer informasjon om ilagt tilleggsskatt ved uriktig, eller manglende innlevering av skattemelding."}),"\n",(0,i.jsxs)(l,{underline:!0,children:[(0,i.jsxs)(n,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,i.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,i.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,i.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,i.jsx)(t.code,{children:"skatteetaten:tilleggsskatt"})]}),(0,i.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,i.jsxs)(t.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,i.jsx)(t.code,{children:"Tilleggsskatt API - P\xe5 vegne av"})]}),(0,i.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,i.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,i.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/tilleggsskatt-api/",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,i.jsx)(t.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,i.jsx)(t.tbody,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"ssb"})})})]}),(0,i.jsx)(t.h2,{id:"st\xf8ttetjeneste",children:"St\xf8ttetjeneste"}),(0,i.jsxs)(t.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,i.jsx)(t.code,{children:"Tilleggsskatt hendelser API"})]}),(0,i.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://data.norge.no/dataservices/3852cc8b-6dbf-3958-8543-33e81ed1fbfd",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,i.jsxs)(n,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,i.jsx)(t.h2,{id:"json",children:"JSON"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "personidentifikator":"07891448702",\n  "inntektsaar":"2021",\n  "skjermet":false,\n  "vedtakOmTilleggsskatt": [\n      {\n        "skattekommune":"4621",\n        "tilleggsskattFraUriktigeOpplysninger":50004.0,\n        "vedtaksdatoForTilleggsskatt":"2022-06-01"\n      }\n  ]\n}\n'})}),(0,i.jsx)(t.h2,{id:"xml",children:"XML"}),(0,i.jsxs)(t.p,{children:["Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,i.jsx)(t.code,{children:"Accept"})," satt til ",(0,i.jsx)(t.code,{children:"application/xml"}),":"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<?xml version='1.0' encoding='UTF-8'?>\n<tilleggsskatt xmlns=\"urn:no:skatteetaten:datasamarbeid:tilleggsskatt:v1\">\n  <personidentifikator>07891448702</personidentifikator>\n  <inntektsaar>2021</inntektsaar>\n  <skjermet>false</skjermet>\n  <vedtakOmTilleggsskatt>\n    <skattekommune>4621</skattekommune>\n    <tilleggsskattFraUriktigeOpplysninger>50004.0</tilleggsskattFraUriktigeOpplysninger>\n    <vedtaksdatoForTilleggsskatt>2022-06-01</vedtaksdatoForTilleggsskatt>\n  </vedtakOmTilleggsskatt></tilleggsskatt>\n"})})]}),(0,i.jsxs)(n,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,i.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,i.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Feilkode"}),(0,i.jsx)(t.th,{children:"HTTP Statuskode"}),(0,i.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TSA-001"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TSA-002"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TSA-003"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TSA-004"}),(0,i.jsx)(t.td,{children:"401"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TSA-005"}),(0,i.jsx)(t.td,{children:"403"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TSA-006"}),(0,i.jsx)(t.td,{children:"400"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TSA-007"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Fant ingen person eller organisasjon p\xe5 oppgitt identifikator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TSA-008"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ingen tilleggsskatt funnet p\xe5 oppgitt identifikator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TSA-009"}),(0,i.jsx)(t.td,{children:"406"}),(0,i.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,i.jsx)(n,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://data.norge.no/informationmodels/aee5a3bb-94e1-35d8-91d5-a528119d004a",children:"Informasjonsmodell"})," i Felles datakatalog."]})}),(0,i.jsxs)(n,{headerText:"Test",itemKey:"itemKey-5",children:[(0,i.jsx)(t.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,i.jsxs)(t.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"})," for denne tjenesten, og testdata er derfor listet her."]}),(0,i.jsx)(t.h2,{id:"testdata",children:"Testdata"}),(0,i.jsx)(t.p,{children:"F\xf8lgende personer har tilleggsskatt:"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"F\xf8dselsnummer"}),(0,i.jsx)(t.th,{children:"Inntekts\xe5r"}),(0,i.jsx)(t.th,{children:"Kommentar"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"11891047306"}),(0,i.jsx)(t.td,{children:"2020"}),(0,i.jsx)(t.td,{children:"F\xf8dselsnummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"14881648394"}),(0,i.jsx)(t.td,{children:"2020"}),(0,i.jsx)(t.td,{children:"F\xf8dselsnummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"01820099997"}),(0,i.jsx)(t.td,{children:"2020"}),(0,i.jsx)(t.td,{children:"Hatt D-nummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"07891448702"}),(0,i.jsx)(t.td,{children:"2021"}),(0,i.jsx)(t.td,{children:"F\xf8dselsnummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"16834899217"}),(0,i.jsx)(t.td,{children:"2021"}),(0,i.jsx)(t.td,{children:"F\xf8dselsnummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"18881248448"}),(0,i.jsx)(t.td,{children:"2021"}),(0,i.jsx)(t.td,{children:"F\xf8dselsnummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"64824401150"}),(0,i.jsx)(t.td,{children:"2021"}),(0,i.jsx)(t.td,{children:"D-nummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"14865998989"}),(0,i.jsx)(t.td,{children:"2021"}),(0,i.jsx)(t.td,{children:"Fortrolig"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"28893949951"}),(0,i.jsx)(t.td,{children:"2021"}),(0,i.jsx)(t.td,{children:"Streng fortrolig"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"13905499313"}),(0,i.jsx)(t.td,{children:"2022"}),(0,i.jsx)(t.td,{children:"F\xf8dselsnummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"15852048104"}),(0,i.jsx)(t.td,{children:"2022"}),(0,i.jsx)(t.td,{children:"F\xf8dselsnummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"08845198927"}),(0,i.jsx)(t.td,{children:"2022"}),(0,i.jsx)(t.td,{children:"F\xf8dselsnummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"57836101938"}),(0,i.jsx)(t.td,{children:"2022"}),(0,i.jsx)(t.td,{children:"D-nummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"19925398694"}),(0,i.jsx)(t.td,{children:"2022"}),(0,i.jsx)(t.td,{children:"Fortrolig"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"19872347995"}),(0,i.jsx)(t.td,{children:"2022"}),(0,i.jsx)(t.td,{children:"Streng fortrolig"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"10852149448"}),(0,i.jsx)(t.td,{children:"2022"}),(0,i.jsx)(t.td,{children:"Kommunenummer 2312, Sokkel utland"})]})]})]}),(0,i.jsx)(t.p,{children:"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."}),(0,i.jsx)(t.p,{children:"Kun organisasjoner som er AS kan ha tilleggsskatt. F\xf8lgende enheter har skatteplikt:"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Organisasjonsnummer"}),(0,i.jsx)(t.th,{children:"Inntekts\xe5r"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"210201602"}),(0,i.jsx)(t.td,{children:"2020"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"213997572"}),(0,i.jsx)(t.td,{children:"2020"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"312676281"}),(0,i.jsx)(t.td,{children:"2021"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"313527603"}),(0,i.jsx)(t.td,{children:"2021"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"314259203"}),(0,i.jsx)(t.td,{children:"2021"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"312677660"}),(0,i.jsx)(t.td,{children:"2022"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"313739007"}),(0,i.jsx)(t.td,{children:"2022"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"310799262"}),(0,i.jsx)(t.td,{children:"2022"})]})]})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function o(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>d});var n=s(96540);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);