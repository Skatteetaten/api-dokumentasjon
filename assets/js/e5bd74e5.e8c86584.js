"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[2760],{67819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/skatteplikt","title":"Skatteplikt API","description":"Tjenesten leverer informasjon om type skatteplikt og grunnlag for vurdering av skatteplikten for en person.","source":"@site/docs/api/skatteplikt.md","sourceDirName":"api","slug":"/api/skatteplikt","permalink":"/api-dokumentasjon/api/skatteplikt","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"Skatteoppgj\xf8r","permalink":"/api-dokumentasjon/tags/skatteoppgjor"}],"version":"current","frontMatter":{"title":"Skatteplikt API","slug":"/api/skatteplikt","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Skatteoppgj\xf8r"],"keywords":["skatteplikt","inntekt","formue"],"last_updated":"Mar 6, 2023","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Skattemelding upersonlig API","permalink":"/api-dokumentasjon/api/skattemeldingupersonlig"},"next":{"title":"Skatteplikt upersonlig API","permalink":"/api-dokumentasjon/api/skattepliktupersonlig"}}');var i=n(74848),r=n(28453);const l={title:"Skatteplikt API",slug:"/api/skatteplikt",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["skatteplikt","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},a=void 0,d={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function k(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Summary:s,TabItem:l,Tabs:a}=t;return s||h("Summary",!0),l||h("TabItem",!0),a||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:"Tjenesten leverer informasjon om type skatteplikt og grunnlag for vurdering av skatteplikten for en person."}),"\n",(0,i.jsxs)(a,{underline:!0,children:[(0,i.jsxs)(l,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,i.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,i.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,i.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,i.jsx)(t.code,{children:"skatteetaten:skatteplikt"})]}),(0,i.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,i.jsxs)(t.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,i.jsx)(t.code,{children:"Skatteplikt API - P\xe5 vegne av"})]}),(0,i.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,i.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,i.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skatteplikt-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,i.jsx)(t.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,i.jsx)(t.tbody,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"ssb"})})})]}),(0,i.jsx)(t.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,i.jsxs)(t.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,i.jsx)(t.code,{children:"Skatteoppgj\xf8r hendelser API"})]}),(0,i.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://data.norge.no/dataservices/0411748d-0f94-3bce-b981-fd2b3930b6b2",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,i.jsxs)(l,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,i.jsx)(t.h2,{id:"json",children:"JSON"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "personidentifikator": "08457590416",\n  "inntektsaar": 2024,\n  "skjermet": false,\n  "skattested": "0301",\n  "skattestedITiltakssone": false,\n  "personligSkattesubjekt": {\n    "skattepliktTilNorge": "global",\n    "tolvdelVedArbeidsoppholdINorge": 12,\n    "tolvdelForTrinnskatt": 12,\n    "alderIInntektsaar": 49\n  },\n  "ajourholdstidspunkt": "2025-01-27T07:18:00.528Z"\n}\n'})})]}),(0,i.jsxs)(l,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,i.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,i.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Feilkode"}),(0,i.jsx)(t.th,{children:"HTTP Statuskode"}),(0,i.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-001"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-002"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-003"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-004"}),(0,i.jsx)(t.td,{children:"401"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-005"}),(0,i.jsx)(t.td,{children:"403"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-006"}),(0,i.jsx)(t.td,{children:"400"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-007"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ikke treff p\xe5 oppgitt personidentifikator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-008"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Fant ikke skattepliktsdokument for angitt personidentifikator og \xe5r."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-009"}),(0,i.jsx)(t.td,{children:"406"}),(0,i.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SP-010"}),(0,i.jsx)(t.td,{children:"410"}),(0,i.jsx)(t.td,{children:"Skattepliktsdokument finnes ikke lenger."})]})]})]})]}),(0,i.jsx)(l,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(38925).A+"",children:(0,i.jsx)(t.img,{alt:"Skatteplikt",src:n(76385).A+"",width:"1523",height:"720"})})})}),(0,i.jsxs)(l,{headerText:"Test",itemKey:"itemKey-5",children:[(0,i.jsx)(t.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,i.jsxs)(t.p,{children:["Testdata for tjenesten kan finnes i ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"}),' med s\xf8ket for "Beregnet skatt", som kan kombineres med\negenskaper i s\xf8k for \u201cSkatteplikt\u201d.']})]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},38925:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/Informasjonsmodell_Skatteplikt-0e743d4cbaaf8ed74d188a83a10fbce6.png"},76385:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Informasjonsmodell_Skatteplikt-0e743d4cbaaf8ed74d188a83a10fbce6.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);