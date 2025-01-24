"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1300],{97765:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>k,frontMatter:()=>d,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"api/avregning","title":"Avregning API","description":"Tjenesten leverer informasjon om forskuddstrekk og restskatt eller bel\xf8p til gode i skatteoppgj\xf8ret.","source":"@site/docs/api/avregning.md","sourceDirName":"api","slug":"/api/avregning","permalink":"/api-dokumentasjon/api/avregning","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"Skatteoppgj\xf8r","permalink":"/api-dokumentasjon/tags/skatteoppgjor"}],"version":"current","frontMatter":{"title":"Avregning API","slug":"/api/avregning","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Skatteoppgj\xf8r"],"keywords":["fastsetting","avregning"],"last_updated":"Mar 6, 2023","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Arbeidsgiveravgift API","permalink":"/api-dokumentasjon/api/arbeidsgiveravgift"},"next":{"title":"Beregnet skatt API","permalink":"/api-dokumentasjon/api/beregnetskatt"}}');var r=s(74848),i=s(28453);const d={title:"Avregning API",slug:"/api/avregning",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["fastsetting","avregning"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},a=void 0,l={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Siste tilgjengelige skatteoppgj\xf8r",id:"siste-tilgjengelige-skatteoppgj\xf8r",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Felt for fastland",id:"felt-for-fastland",level:2},{value:"Felt for svalbard",id:"felt-for-svalbard",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:s,TabItem:n,Tabs:d}=t;return s||j("Summary",!0),n||j("TabItem",!0),d||j("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{children:"Tjenesten leverer informasjon om forskuddstrekk og restskatt eller bel\xf8p til gode i skatteoppgj\xf8ret."}),"\n",(0,r.jsxs)(d,{underline:!0,children:[(0,r.jsxs)(n,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,r.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,r.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,r.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.jsx)(t.code,{children:"skatteetaten:avregning"})]}),(0,r.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,r.jsxs)(t.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.jsx)(t.code,{children:"Avregning API - P\xe5 vegne av"})]}),(0,r.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,r.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,r.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/avregning-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,r.jsx)(t.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"kommunelangtidsoppholdinstitusjon"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"kommunelangtidsoppholdsykehjem"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"norgesbank"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"ssb"})})]})]}),(0,r.jsx)(t.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,r.jsx)(t.h3,{id:"hendelser",children:"Hendelser"}),(0,r.jsxs)(t.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,r.jsx)(t.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,r.jsx)(t.code,{children:"Skatteoppgj\xf8r hendelser API"})]}),(0,r.jsx)(t.h3,{id:"siste-tilgjengelige-skatteoppgj\xf8r",children:"Siste tilgjengelige skatteoppgj\xf8r"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api-dokumentasjon/api/sistetilgjengeligeskatteoppgjoer",children:"Siste tilgjengelige skatteoppgj\xf8r API"})," gir informasjon om hva som er seneste\nperiode med data for en skattepliktig."]}),(0,r.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://data.norge.no/dataservices/69824ea6-9a1b-3b3f-8163-45b5fd1dd474",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,r.jsxs)(n,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,r.jsx)(t.h2,{id:"json",children:"JSON"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "personidentifikator": "20463518646",\n  "inntektsaar": "2024",\n  "skjermet": false,\n  "skatteoppgjoersdato": "2024-12-02",\n  "fastland": {\n    "restskatt": 0,\n    "forhaandsfastsatt": true,\n    "skatteregnskapskommune": "5526",\n    "beregnetSkatt": 0,\n    "aaBetale": 0\n  },\n  "svalbard": {\n    "beloepTilgode": 60894,\n    "forhaandsfastsatt": false,\n    "skatteregnskapskommune": "2100",\n    "beregnetSkatt": 0,\n    "avregnetForskuddsskatt": 60000,\n    "overskytende": 60000,\n    "rentegodtgjoerelse": 894\n  },\n  "ajourholdstidspunkt": "2024-11-28T08:35:16.337Z"\n}\n'})}),(0,r.jsx)(t.h2,{id:"xml",children:"XML"}),(0,r.jsxs)(t.p,{children:["Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,r.jsx)(t.code,{children:"Accept"})," satt til ",(0,r.jsx)(t.code,{children:"application/xml"})]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"<?xml version='1.0' encoding='UTF-8'?>\n<avregning xmlns=\"urn:no:skatteetaten:datasamarbeid:avregning:v2\">\n  <personidentifikator>20463518646</personidentifikator>\n  <inntektsaar>2024</inntektsaar>\n  <skjermet>false</skjermet>\n  <skatteoppgjoersdato>2024-12-02</skatteoppgjoersdato>\n  <fastland>\n    <restskatt>0</restskatt>\n    <forhaandsfastsatt>true</forhaandsfastsatt>\n    <skatteregnskapskommune>5526</skatteregnskapskommune>\n    <beregnetSkatt>0</beregnetSkatt>\n    <aaBetale>0</aaBetale>\n  </fastland>\n  <svalbard>\n    <beloepTilgode>60894</beloepTilgode>\n    <forhaandsfastsatt>false</forhaandsfastsatt>\n    <skatteregnskapskommune>2100</skatteregnskapskommune>\n    <beregnetSkatt>0</beregnetSkatt>\n    <avregnetForskuddsskatt>60000</avregnetForskuddsskatt>\n    <overskytende>60000</overskytende>\n    <rentegodtgjoerelse>894</rentegodtgjoerelse>\n  </svalbard>\n  <ajourholdstidspunkt>2024-11-28T08:35:16.337Z</ajourholdstidspunkt>\n</avregning>\n"})})]}),(0,r.jsxs)(n,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,r.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,r.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,r.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Feilkode"}),(0,r.jsx)(t.th,{children:"HTTP Statuskode"}),(0,r.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AR-001"}),(0,r.jsx)(t.td,{children:"500"}),(0,r.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AR-002"}),(0,r.jsx)(t.td,{children:"500"}),(0,r.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AR-003"}),(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AR-004"}),(0,r.jsx)(t.td,{children:"401"}),(0,r.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AR-005"}),(0,r.jsx)(t.td,{children:"403"}),(0,r.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AR-006"}),(0,r.jsx)(t.td,{children:"400"}),(0,r.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AR-007"}),(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Fant ikke avregning for gitt identifikator og inntekts\xe5r."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AR-008"}),(0,r.jsx)(t.td,{children:"406"}),(0,r.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AR-009"}),(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Ikke treff p\xe5 oppgitt identifikator."})]})]})]})]}),(0,r.jsxs)(n,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://data.norge.no/informationmodels/fb77ea64-f7c6-3993-8511-1bd2ce8ad259",children:"Informasjonsmodell"})," i Felles datakatalog."]}),(0,r.jsx)(t.p,{children:"Obs. Hvis modellene p\xe5 denne siden avviker fra Open API spesifikasjonen p\xe5 Swaggerhub, er det Open API spesifikasjonen\nsom er mest oppdatert."}),(0,r.jsx)(t.p,{children:"I listen under vises navn p\xe5 de ulike feltene tjenesten leverer. Ta kontakt med Skatteetaten for \xe5 finne ut hvilken\nrettighetspakke som er aktuell for din organisasjon og hvilke felter den aktuelle rettighetspakken returnerer."}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Navn p\xe5 felt"}),(0,r.jsx)(t.th,{children:"Beskrivelse"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"personidentifikator"}),(0,r.jsx)(t.td,{children:"Gjeldene personidentifikator for personen det ble s\xf8kt p\xe5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"inntektsaar"}),(0,r.jsx)(t.td,{children:"Inntekts\xe5ret det ble s\xf8kt p\xe5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"skjermet"}),(0,r.jsx)(t.td,{children:"Returnerer true dersom datasettet er skjermet"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"skatteoppgjoersdato"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fastland"}),(0,r.jsx)(t.td,{children:"Verdier for fastland"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"svalbard"}),(0,r.jsx)(t.td,{children:"Verdier for Svalbard"})]})]})]}),(0,r.jsx)(t.h2,{id:"felt-for-fastland",children:"Felt for fastland"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Navn p\xe5 felt"}),(0,r.jsx)(t.th,{children:"Beskrivelse"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restskatt"}),(0,r.jsx)(t.td,{children:"avregningsresultat som viser at skattyters forskudd ikke dekker beregnet skatt."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"avregnetForskuddstrekk"}),(0,r.jsx)(t.td,{children:"sum forskuddstrekk fra a-meldinger og manuelt registrerte forskuddstrekk hos skatteoppkrever"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"beloepTilgode"}),(0,r.jsx)(t.td,{children:"er det bel\xf8p som skal utbetales skattyter, eventuelt motregnes mot skyldige bel\xf8p internt eller eksternt"})]})]})]}),(0,r.jsx)(t.h2,{id:"felt-for-svalbard",children:"Felt for svalbard"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Navn p\xe5 felt"}),(0,r.jsx)(t.th,{children:"Beskrivelse"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restskatt"}),(0,r.jsx)(t.td,{children:"avregningsresultat som viser at skattyters forskudd ikke dekker beregnet skatt."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"avregnetForskuddstrekk"}),(0,r.jsx)(t.td,{children:"sum forskuddstrekk fra a-meldinger og manuelt registrerte forskuddstrekk hos skatteoppkrever"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"beloepTilgode"}),(0,r.jsx)(t.td,{children:"er det bel\xf8p som skal utbetales skattyter, eventuelt motregnes mot skyldige bel\xf8p internt eller eksternt"})]})]})]})]}),(0,r.jsxs)(n,{headerText:"Test",itemKey:"itemKey-5",children:[(0,r.jsx)(t.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,r.jsxs)(t.p,{children:["Testdata for tjenesten kan finnes i ",(0,r.jsx)(t.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"}),' med s\xf8ket for "Beregnet skatt".']})]})]})]})}function k(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);