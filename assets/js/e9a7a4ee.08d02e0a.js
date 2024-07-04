"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8260],{86444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=t(74848),i=t(28453);const a={title:"Mva-melding API",slug:"/api/mvamelding",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","MVA"],keywords:["mva"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},r=void 0,l={id:"api/mvamelding",title:"Mva-melding API",description:"Tjenesten leverer fastsatte mva-meldinger. Fastsatt betyr at skattemeldingen er myndighetsfastsatt, manuelt innlevert, eller automatisk innlevert ved utl\xf8p av innleveringsfrist.",source:"@site/docs/api/mvamelding.md",sourceDirName:"api",slug:"/api/mvamelding",permalink:"/api-dokumentasjon/api/mvamelding",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/tags/api"},{inline:!0,label:"MVA",permalink:"/api-dokumentasjon/tags/mva"}],version:"current",frontMatter:{title:"Mva-melding API",slug:"/api/mvamelding",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","MVA"],keywords:["mva"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Mva meldingsopplysning API",permalink:"/api-dokumentasjon/api/mva_meldingsopplysning"},next:{title:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt API",permalink:"/api-dokumentasjon/api/mvaregisteravgiftssubjekt"}},d={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:t,TabItem:a,Tabs:r}=n;return t||j("Summary",!0),a||j("TabItem",!0),r||j("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:"Tjenesten leverer fastsatte mva-meldinger. Fastsatt betyr at skattemeldingen er myndighetsfastsatt, manuelt innlevert, eller automatisk innlevert ved utl\xf8p av innleveringsfrist."}),"\n",(0,s.jsxs)(r,{underline:!0,children:[(0,s.jsxs)(a,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:mvamelding"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,s.jsx)(n.code,{children:"Mva-melding API - P\xe5 vegne av"})]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/mva-melding-api/",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,s.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"ssb"})})})]}),(0,s.jsx)(n.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,s.jsxs)(n.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,s.jsx)(n.code,{children:"Mva-melding hendelser API"})]}),(0,s.jsxs)(n.p,{children:["Se egen dokumentasjon om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjenester for hendelser"}),"."]}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://data.norge.no/dataservices/e4e328cf-6af2-3086-b9ab-9a5dbf3c484d",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,s.jsxs)(a,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"json",children:"JSON"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "skattegrunnlagOgBeregnetSkatt": {\n    "skattleggingsperiode": {\n      "periode": "mai-juni",\n      "aar": "2022"\n    },\n    "fastsattMerverdiavgift": 250000.0,\n    "mvaSpesifikasjonslinje": [\n      {\n        "mvaKode": "3",\n        "grunnlag": 1000000.0,\n        "sats": "25",\n        "merverdiavgift": 250000.0\n      }\n    ]\n  },\n  "skattepliktig": {\n    "organisasjonsnummer": "910150804"\n  },\n  "meldingskategori": "alminnelig",\n  "fastsettingsstatus": {\n    "status": "egenfastsattMerverdiavgift"\n  },\n  "referanse": "180300"\n}\n'})}),(0,s.jsx)(n.h2,{id:"xml",children:"XML"}),(0,s.jsxs)(n.p,{children:["Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,s.jsx)(n.code,{children:"Accept"})," satt til ",(0,s.jsx)(n.code,{children:"application/xml"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<?xml version='1.0' encoding='UTF-8'?>\n<mvaMelding>\n  <skattegrunnlagOgBeregnetSkatt>\n    <skattleggingsperiode>\n      <periode>mai-juni</periode>\n      <aar>2022</aar>\n    </skattleggingsperiode>\n    <fastsattMerverdiavgift>250000.0</fastsattMerverdiavgift>\n    <mvaSpesifikasjonslinje>\n      <mvaKode>3</mvaKode>\n      <grunnlag>1000000.0</grunnlag>\n      <sats>25</sats>\n      <merverdiavgift>250000.0</merverdiavgift>\n    </mvaSpesifikasjonslinje>\n  </skattegrunnlagOgBeregnetSkatt>\n  <skattepliktig>\n    <organisasjonsnummer>910150804</organisasjonsnummer>\n  </skattepliktig>\n  <meldingskategori>alminnelig</meldingskategori>\n  <fastsettingsstatus>\n    <status>egenfastsattMerverdiavgift</status>\n  </fastsettingsstatus>\n  <referanse>180300</referanse>\n</mvaMelding>\n"})})]}),(0,s.jsxs)(a,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-002"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-003"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-004"}),(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-007"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ingen mva-melding funnet p\xe5 oppgitt referanse."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MVA-008"}),(0,s.jsx)(n.td,{children:"406"}),(0,s.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,s.jsx)(a,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://data.norge.no/informationmodels/886bada4-e540-38a2-99ae-512d99d1ba28",children:"Informasjonsmodell"})," i Felles datakatalog."]})}),(0,s.jsxs)(a,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, men man kan benytte hendelseslisten for \xe5 finne referanser man kan benytte for \xe5 teste oppslagstjenesten."]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);