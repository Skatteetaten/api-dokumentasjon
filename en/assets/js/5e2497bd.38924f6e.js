"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[7977],{71842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>k,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/oppdragutenlandskevirksomheter","title":"Oppdrag utenlandske virksomheter API","description":"Tjenesten leverer informasjon fra Oppdrags- og arbeidsforholdsregisteret om utenlandske virksomheters oppdrag i Norge.","source":"@site/docs/api/oppdragutenlandskevirksomheter.md","sourceDirName":"api","slug":"/api/oppdragutenlandskevirksomheter","permalink":"/api-dokumentasjon/en/api/oppdragutenlandskevirksomheter","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/en/tags/api"},{"inline":true,"label":"Seri\xf8sitet","permalink":"/api-dokumentasjon/en/tags/seriositet"}],"version":"current","frontMatter":{"title":"Oppdrag utenlandske virksomheter API","slug":"/api/oppdragutenlandskevirksomheter","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Seri\xf8sitet"],"keywords":["oppdrag","virksomheter","utenlandske"],"last_updated":"Mar 6, 2023","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Omregistreringsavgift API","permalink":"/api-dokumentasjon/en/api/omregistreringsavgift"},"next":{"title":"Opplysningspliktig API","permalink":"/api-dokumentasjon/en/api/opplysningspliktig"}}');var r=t(74848),i=t(28453);const d={title:"Oppdrag utenlandske virksomheter API",slug:"/api/oppdragutenlandskevirksomheter",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Seri\xf8sitet"],keywords:["oppdrag","virksomheter","utenlandske"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},a=void 0,l={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Samtykke",id:"samtykke",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:t,TabItem:s,Tabs:d}=n;return t||c("Summary",!0),s||c("TabItem",!0),d||c("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:"Tjenesten leverer informasjon fra Oppdrags- og arbeidsforholdsregisteret om utenlandske virksomheters oppdrag i Norge."}),"\n",(0,r.jsxs)(d,{underline:!0,children:[(0,r.jsxs)(s,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,r.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,r.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,r.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.jsx)(n.code,{children:"skatteetaten:oppdragutenlandskevirksomheter"})]}),(0,r.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,r.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.jsx)(n.code,{children:"Oppdrag utenlandske virksomheter API - P\xe5 vegne av"})]}),(0,r.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,r.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,r.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/oppdrag-utenlandske-virksomheter-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,r.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"}),(0,r.jsx)(n.th,{children:"Egenskaper ved rettighetspakke"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ebevis"}),(0,r.jsx)(n.td,{children:"Krever samtykke"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arbeidstilsynet"}),(0,r.jsx)(n.td,{children:"Hjemmel"})]})]})]}),(0,r.jsx)(n.h2,{id:"samtykke",children:"Samtykke"}),(0,r.jsxs)(n.p,{children:["For enkelte rettighetspakker krever tjenesten ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/samtykke",children:"samtykke"}),"."]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tjenestekode"}),(0,r.jsx)(n.th,{children:"Form\xe5l"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5616_2"}),(0,r.jsxs)(n.td,{children:["Kreves for rettighetspakke ",(0,r.jsx)(n.code,{children:"ebevis"})]})]})})]}),(0,r.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://data.norge.no/dataservices/3f6f9089-163d-3fe0-86d2-691900806514",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,r.jsxs)(s,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,r.jsx)(n.h2,{id:"json",children:"JSON"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n      "forespurteOrganisasjon": "974761076",\n      "oppdrag": {\n            "antallAktiveOppdragSomArbeidsgiver": 44,\n            "antallAktiveArbeidstakere": 64,\n            "antallRegistrerteOppdragSomOppdragsgiver": 14\n      },\n      "levert": "2020-09-17T09:44:42.877055"\n}\n'})})]}),(0,r.jsxs)(s,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,r.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,r.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feilkode"}),(0,r.jsx)(n.th,{children:"HTTP Statuskode"}),(0,r.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OPPDRAGUTENLANDSKEVIRKSOMHETER-001"}),(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OPPDRAGUTENLANDSKEVIRKSOMHETER-002"}),(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OPPDRAGUTENLANDSKEVIRKSOMHETER-003"}),(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OPPDRAGUTENLANDSKEVIRKSOMHETER-004"}),(0,r.jsx)(n.td,{children:"401"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OPPDRAGUTENLANDSKEVIRKSOMHETER-005"}),(0,r.jsx)(n.td,{children:"403"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OPPDRAGUTENLANDSKEVIRKSOMHETER-006"}),(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OPPDRAGUTENLANDSKEVIRKSOMHETER-007"}),(0,r.jsx)(n.td,{children:"403"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med samtykke."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OPPDRAGUTENLANDSKEVIRKSOMHETER-008"}),(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Fant ikke angitt organisasjonsnummer."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OPPDRAGUTENLANDSKEVIRKSOMHETER-009"}),(0,r.jsx)(n.td,{children:"406"}),(0,r.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,r.jsx)(s,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,r.jsxs)(n.p,{children:["Se informasjonsmodell i Felles datakatalog for ",(0,r.jsx)(n.a,{href:"https://data.norge.no/informationmodels/bc228914-ba95-3b10-aa49-3a80beeb12c2",children:"Oppdrag utenlandske virksomheter API"}),"."]})}),(0,r.jsxs)(s,{headerText:"Test",itemKey:"itemKey-5",children:[(0,r.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,r.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"})," for denne tjenesten."]}),(0,r.jsx)(n.h2,{id:"testdata",children:"Testdata"}),(0,r.jsxs)(n.p,{children:["Denne tjenesten har for n\xe5 kun enkle mockdata, med en statisk mocket respons. For \xe5 kunne teste tjenesten er det nok \xe5 benytte et syntetisk organisasjonsnummer som har et samtykke. Syntetiske organisasjonsnumre finner du i ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"}),"."]})]})]})]})}function k(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);