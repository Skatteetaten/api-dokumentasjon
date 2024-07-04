"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3916],{91527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(74848),i=n(28453);const r={title:"Formuesobjekt fast eiendom API",slug:"/api/formuesobjektfasteiendom",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","formuesobjekt fast eiendom"],last_updated:"Jul 01, 2024",hide_table_of_contents:!0},d=void 0,l={id:"api/formuesobjektfasteiendom",title:"Formuesobjekt fast eiendom API",description:"Tjenesten leverer forretningshendelser knyttet til formuesobjekter for fast eiendom og rettighetshavere til",source:"@site/docs/api/formuesobjektfasteiendom.md",sourceDirName:"api",slug:"/api/formuesobjektfasteiendom",permalink:"/api-dokumentasjon/api/formuesobjektfasteiendom",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/tags/api"},{inline:!0,label:"formuesobjekt fast eiendom",permalink:"/api-dokumentasjon/tags/formuesobjekt-fast-eiendom"}],version:"current",frontMatter:{title:"Formuesobjekt fast eiendom API",slug:"/api/formuesobjektfasteiendom",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","formuesobjekt fast eiendom"],last_updated:"Jul 01, 2024",hide_table_of_contents:!0}},o={},a=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2}];function j(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:r,TabItem:d,Tabs:l}=t;return r||c("Summary",!0),d||c("TabItem",!0),l||c("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{children:"Tjenesten leverer forretningshendelser knyttet til formuesobjekter for fast eiendom og rettighetshavere til\nformuesobjektene. Tjenesten leverer klassifisering av formuesobjektene og eiendommens relasjoner."}),"\n",(0,s.jsxs)(l,{underline:!0,children:[(0,s.jsxs)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(t.code,{children:"skatteetaten:formuesobjektfasteiendom"})]}),(0,s.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,s.jsxs)(t.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,s.jsx)(t.code,{children:"Formuesobjekt fast eiendom API - P\xe5 vegne av"})]}),(0,s.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,s.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/formuesobjekt-fast-eiendom-api/",children:"Open API spesifikasjonen"})," p\xe5\nSwaggerHub."]}),(0,s.jsx)(t.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"kartverketEgenregistrering"})})})]}),(0,s.jsx)(t.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,s.jsx)(t.h3,{id:"hendelser",children:"Hendelser"}),(0,s.jsxs)(t.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,s.jsx)(t.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,s.jsx)(t.code,{children:"Formuesobjekt fast eiendom hendelser API"})]}),(0,s.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsx)(t.p,{children:"Datatjenestebeskrivelse er ikke i Felles datakatalog enda."})]}),(0,s.jsxs)(d,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(t.h2,{id:"json",children:"JSON"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:"\n\n"})})]}),(0,s.jsxs)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,s.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne\nvariere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Feilkode"}),(0,s.jsx)(t.th,{children:"HTTP Statuskode"}),(0,s.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FFE-001"}),(0,s.jsx)(t.td,{children:"500"}),(0,s.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FFE-002"}),(0,s.jsx)(t.td,{children:"500"}),(0,s.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FFE-003"}),(0,s.jsx)(t.td,{children:"404"}),(0,s.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FFE-004"}),(0,s.jsx)(t.td,{children:"401"}),(0,s.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FFE-005"}),(0,s.jsx)(t.td,{children:"403"}),(0,s.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FFE-006"}),(0,s.jsx)(t.td,{children:"400"}),(0,s.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FFE-007"}),(0,s.jsx)(t.td,{children:"404"}),(0,s.jsx)(t.td,{children:"Ingen formuesobjekt funnet p\xe5 oppgitt identifikator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FFE-008"}),(0,s.jsx)(t.td,{children:"406"}),(0,s.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json er st\xf8ttet."})]})]})]})]}),(0,s.jsx)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(76960).A+"",children:(0,s.jsx)(t.img,{alt:"Formuesobjekt fast eiendom API",src:n(86580).A+"",width:"2797",height:"1288"})})})}),(0,s.jsx)(d,{headerText:"Test",itemKey:"itemKey-5",children:(0,s.jsxs)(t.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(t.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, men man kan benytte hendelseslisten for \xe5 finne\ntestdata man kan benytte for \xe5 teste oppslagstjenesten."]})})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76960:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/Informasjonsmodell_FormuesobjektFastEiendomOppslag-ca7ae77a12ff6c345a74c6ea75588546.png"},86580:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Informasjonsmodell_FormuesobjektFastEiendomOppslag-ca7ae77a12ff6c345a74c6ea75588546.png"},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);