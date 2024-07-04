"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1409],{12686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(74848),i=t(28453);const r={title:"Skatteberegningsgrunnlag upersonlig API",slug:"/api/skatteberegningsgrunnlagupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["Skatteberegningsgrunnlag","inntekt","formue"],last_updated:"Mar 31, 2023",hide_table_of_contents:!0},l=void 0,d={id:"api/skatteberegningsgrunnlagupersonlig",title:"Skatteberegningsgrunnlag upersonlig API",description:"Tjenesten leverer opplysninger som fremkommer i skatteberegningsgrunnlaget for en virksomhet.",source:"@site/docs/api/skatteberegningsgrunnlagupersonlig.md",sourceDirName:"api",slug:"/api/skatteberegningsgrunnlagupersonlig",permalink:"/api-dokumentasjon/api/skatteberegningsgrunnlagupersonlig",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/tags/api"},{inline:!0,label:"Skatteoppgj\xf8r",permalink:"/api-dokumentasjon/tags/skatteoppgjor"}],version:"current",frontMatter:{title:"Skatteberegningsgrunnlag upersonlig API",slug:"/api/skatteberegningsgrunnlagupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["Skatteberegningsgrunnlag","inntekt","formue"],last_updated:"Mar 31, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Siste tilgjengelige skatteoppgj\xf8r API",permalink:"/api-dokumentasjon/api/sistetilgjengeligeskatteoppgjoer"},next:{title:"Skattemelding API",permalink:"/api-dokumentasjon/api/skattemelding"}},a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:t,TabItem:r,Tabs:l}=n;return t||j("Summary",!0),r||j("TabItem",!0),l||j("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:"Tjenesten leverer opplysninger som fremkommer i skatteberegningsgrunnlaget for en virksomhet."}),"\n",(0,s.jsxs)(l,{underline:!0,children:[(0,s.jsxs)(r,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:skatteberegningsgrunnlagupersonlig"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,s.jsx)(n.code,{children:"Skatteberegningsgrunnlag upersonlig API - P\xe5 vegne av"})]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skatteberegningsgrunnlag-upersonlig-api/",children:"Open API spesifikasjonen"}),"\np\xe5 SwaggerHub."]}),(0,s.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"ssb"})})})]}),(0,s.jsx)(n.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,s.jsx)(n.h3,{id:"hendelser",children:"Hendelser"}),(0,s.jsxs)(n.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,s.jsx)(n.code,{children:"Skatteoppgj\xf8r upersonlig hendelser API"})]}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://data.norge.no/dataservices/5637f1d4-1d2d-349c-8138-a15ead315a97",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,s.jsx)(r,{headerText:"Eksempler",itemKey:"itemKey-2",children:(0,s.jsx)(n.h2,{id:"json",children:"JSON"})}),(0,s.jsxs)(r,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-002"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-003"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-004"}),(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-007"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ikke treff p\xe5 oppgitt organisasjonsnummer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-008"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ingen skatteberegningsgrunnlag funnet p\xe5 oppgitt organisasjonsnummer og inntekts\xe5r."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-009"}),(0,s.jsx)(n.td,{children:"406"}),(0,s.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SBU-010"}),(0,s.jsx)(n.td,{children:"410"}),(0,s.jsx)(n.td,{children:"Skatteberegningsgrunnlag finnes ikke lenger."})]})]})]})]}),(0,s.jsx)(r,{headerText:"Informasjonsmodell",itemKey:"itemKey-4"}),(0,s.jsxs)(r,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, og testdata er derfor listet her."]}),(0,s.jsx)(n.h2,{id:"testdata",children:"Testdata"}),(0,s.jsx)(n.p,{children:"Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne:"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Organisasjonsnummer"}),(0,s.jsx)(n.th,{children:"Inntekts\xe5r"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"310322881"}),(0,s.jsx)(n.td,{children:"2021"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"310962805"}),(0,s.jsx)(n.td,{children:"2021"})]})]})]}),(0,s.jsx)(n.p,{children:"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."})]})]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);