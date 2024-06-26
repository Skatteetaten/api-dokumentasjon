"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5974],{77988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>j,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=n(74848),s=n(28453);const r={title:"Siste tilgjengelige skatteoppgj\xf8r API",slug:"/api/sistetilgjengeligeskatteoppgjoer",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r","St\xf8ttetjeneste"],keywords:["tilgjengeligdata","skattegrunnlag"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},l=void 0,a={id:"api/sistetilgjengeligeskatteoppgjoer",title:"Siste tilgjengelige skatteoppgj\xf8r API",description:"Tjenesten leverer informasjon om siste inntekts\xe5r det foreligger skatteoppgj\xf8r p\xe5 for en person.",source:"@site/docs/api/sistetilgjengeligeskatteoppgjoer.md",sourceDirName:"api",slug:"/api/sistetilgjengeligeskatteoppgjoer",permalink:"/api-dokumentasjon/en/api/sistetilgjengeligeskatteoppgjoer",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{inline:!0,label:"Skatteoppgj\xf8r",permalink:"/api-dokumentasjon/en/tags/skatteoppgjor"},{inline:!0,label:"St\xf8ttetjeneste",permalink:"/api-dokumentasjon/en/tags/stottetjeneste"}],version:"current",frontMatter:{title:"Siste tilgjengelige skatteoppgj\xf8r API",slug:"/api/sistetilgjengeligeskatteoppgjoer",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r","St\xf8ttetjeneste"],keywords:["tilgjengeligdata","skattegrunnlag"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Selskapsmelding API",permalink:"/api-dokumentasjon/en/api/selskapsmelding"},next:{title:"Skatteberegningsgrunnlag upersonlig API",permalink:"/api-dokumentasjon/en/api/skatteberegningsgrunnlagupersonlig"}},d={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2}];function g(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Summary:n,TabItem:r,Tabs:l}=t;return n||p("Summary",!0),r||p("TabItem",!0),l||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:"Tjenesten leverer informasjon om siste inntekts\xe5r det foreligger skatteoppgj\xf8r p\xe5 for en person."}),"\n",(0,i.jsxs)(l,{underline:!0,children:[(0,i.jsxs)(r,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,i.jsx)(t.p,{children:"For data som er tilgjengelige p\xe5 uforutsigbare tidspunkt tilbyr vi en tjeneste for \xe5 sjekke hvilke data som er tilgjengelig for en skattepliktig. Tilgjengeligdata API returnerer periode for \u201csiste tilgjengelige data\u201d for den skattepliktige. Tjenesten er spesielt nyttig for virksomheter som trenger samtykke for \xe5 hente ut data. Tilgjengeligdata Api brukes f\xf8r samtykke innhentes, for \xe5 sikre at man ber om samtykke til seneste periode Skatteetaten har data for."}),(0,i.jsx)(t.p,{children:"Eksempler p\xe5 slike data er Spesifisert summert skattegrunnlag API og Summert skattegrunnlag  API, hvor det kan variere med flere m\xe5neder n\xe5r det kommer data for et nytt inntekts\xe5r (fordi forskjellige skattepliktige har forskjellige meldefrister, skattepliktig kan s\xf8ke om utsettelser, etc)."}),(0,i.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,i.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,i.jsx)(t.p,{children:"Man trenger ikke eget scope for dette aAPI-et, siden den benytter samme scope som relaterte oppslagstjenester:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"skatteetaten:summertskattegrunnlag"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"skatteetaten:spesifisertsummertskattegrunnlag"})}),"\n"]}),(0,i.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,i.jsx)(t.p,{children:"Tilgang til denne st\xf8ttetjenester delegeres i Altinn n\xe5r man delegerer oppslagstjenesten."}),(0,i.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,i.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,i.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/siste-tilgjengelige-skatteoppgjoer/",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,i.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,i.jsx)(t.p,{children:"Dette API-et er pt. ikke dokumentert i Felles datakatalog."})]}),(0,i.jsxs)(r,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,i.jsx)(t.h2,{id:"json",children:"JSON"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "personidentifikator": "07078600378",\n  "ressursId": "skattegrunnlag",\n  "sisteTilgjengeligePeriode": "2021"\n}\n'})}),(0,i.jsx)(t.p,{children:"Data kommer som ett tilgjengeligdata-objekt."}),(0,i.jsx)(t.p,{children:"Hvert Tilgjengeligdata-object inneholder"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"personidentifikator - typisk F\xf8dselsnummer eller D-nummer"}),"\n",(0,i.jsx)(t.li,{children:'ressursid - id p\xe5 typen data, f.eks "skattegrunnlag"'}),"\n",(0,i.jsx)(t.li,{children:"siste tilgjengelige periode - beskriver sist tilgjengelige periode for ressursen. Har forskjellig format basert p\xe5 ressursen. F.eks. kun \xe5rstall for skattegrunnlag."}),"\n"]}),(0,i.jsx)(t.h2,{id:"xml",children:"XML"}),(0,i.jsxs)(t.p,{children:["Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,i.jsx)(t.code,{children:"Accept"})," satt til ",(0,i.jsx)(t.code,{children:"application/xml"}),":"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<tilgjengeligdata xmlns="urn:no:skatteetaten:datasamarbeid:tilgjengeligdata:v1">\n   <personidentifikator>07078600378</personidentifikator>\n   <ressursId>skattegrunnlag</ressursId>\n   <sisteTilgjengeligePeriode>2021</sisteTilgjengeligePeriode>\n</tilgjengeligdata>\n'})})]}),(0,i.jsxs)(r,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,i.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,i.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Feilkode"}),(0,i.jsx)(t.th,{children:"HTTP Statuskode"}),(0,i.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TD-001"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TD-002"}),(0,i.jsx)(t.td,{children:"401"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TD-003"}),(0,i.jsx)(t.td,{children:"400"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TD-004"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Fant ikke tilgjengeligdata for angitt personidentifikator og ressursidentifikator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TD-005"}),(0,i.jsx)(t.td,{children:"406"}),(0,i.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TD-006"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ukjent url benyttet."})]})]})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);