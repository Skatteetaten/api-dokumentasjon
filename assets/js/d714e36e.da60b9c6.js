"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3916],{64521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/formuesobjektfasteiendom","title":"Formuesobjekt fast eiendom API","description":"Tjenesten leverer forretningshendelser knyttet til formuesobjekter for fast eiendom og rettighetshavere til","source":"@site/docs/api/formuesobjektfasteiendom.md","sourceDirName":"api","slug":"/api/formuesobjektfasteiendom","permalink":"/api-dokumentasjon/api/formuesobjektfasteiendom","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"formuesobjekt fast eiendom","permalink":"/api-dokumentasjon/tags/formuesobjekt-fast-eiendom"}],"version":"current","frontMatter":{"title":"Formuesobjekt fast eiendom API","slug":"/api/formuesobjektfasteiendom","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","formuesobjekt fast eiendom"],"last_updated":"Jul 01, 2024","hide_table_of_contents":true}}');var i=t(74848),r=t(28453);const d={title:"Formuesobjekt fast eiendom API",slug:"/api/formuesobjektfasteiendom",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","formuesobjekt fast eiendom"],last_updated:"Jul 01, 2024",hide_table_of_contents:!0},l=void 0,a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Summary:s,TabItem:d,Tabs:l}=n;return s||m("Summary",!0),d||m("TabItem",!0),l||m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:"Tjenesten leverer forretningshendelser knyttet til formuesobjekter for fast eiendom og rettighetshavere til\nformuesobjektene. Tjenesten leverer klassifisering av formuesobjektene og eiendommens relasjoner."}),"\n",(0,i.jsxs)(l,{underline:!0,children:[(0,i.jsxs)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,i.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,i.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,i.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,i.jsx)(n.code,{children:"skatteetaten:formuesobjektfasteiendom"})]}),(0,i.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,i.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,i.jsx)(n.code,{children:"Formuesobjekt fast eiendom API - P\xe5 vegne av"})]}),(0,i.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,i.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,i.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/formuesobjekt-fast-eiendom-api/",children:"Open API spesifikasjonen"})," p\xe5\nSwaggerHub."]}),(0,i.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"kartverketEgenregistrering"})})})]}),(0,i.jsx)(n.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,i.jsx)(n.h3,{id:"hendelser",children:"Hendelser"}),(0,i.jsxs)(n.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,i.jsx)(n.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,i.jsx)(n.code,{children:"Formuesobjekt fast eiendom hendelser API"})]}),(0,i.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,i.jsx)(n.p,{children:"Datatjenestebeskrivelse er ikke i Felles datakatalog enda."})]}),(0,i.jsxs)(d,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,i.jsx)(n.h2,{id:"json",children:"JSON"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "identifikator": {\n    "skatteetatensEiendomsidentifikator": 3\n  },\n  "hendelsesidentifikator": "90f0f007-dd5d-4415-abe2-09bc82db294f",\n  "rettighetshaverMangler": false,\n  "eiendomsopplysninger": {\n    "matrikkelnummer": {\n      "kommunenummer": "4214",\n      "gaardsnummer": 64,\n      "bruksnummer": 23,\n      "festenummer": 0,\n      "seksjonsnummer": 0\n    },\n    "bygning": [\n      {\n        "bygningsnummer": "4",\n        "bruksenheter": [\n          {\n            "bruksenhetsnummer": "4",\n            "matrikkelUnikIdentifikator": 235596792\n          }\n        ]\n      }\n    ]\n  },\n  "formuesopplysninger": {\n    "formuestype": "selveidBolig"\n  },\n  "eieropplysninger": [\n    {\n      "personidentifikator": {\n        "ukjentRettighetshaver": false\n      },\n      "erTinglyst": false,\n      "eierforhold": {\n        "eierandel": {\n          "teller": 1,\n          "nevner": 2\n        },\n        "eiernivaa": "eiendomsrett"\n      }\n    },\n    {\n      "personidentifikator": {\n        "foedselsnummer": "21865898093",\n        "ukjentRettighetshaver": false\n      },\n      "erTinglyst": false,\n      "eierforhold": {\n        "eierandel": {\n          "teller": 1,\n          "nevner": 2\n        },\n        "eiernivaa": "eiendomsrett"\n      }\n    }\n  ]\n}\n\n'})})]}),(0,i.jsxs)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,i.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,i.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne\nvariere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Feilkode"}),(0,i.jsx)(n.th,{children:"HTTP Statuskode"}),(0,i.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FFE-001"}),(0,i.jsx)(n.td,{children:"500"}),(0,i.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FFE-002"}),(0,i.jsx)(n.td,{children:"500"}),(0,i.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FFE-003"}),(0,i.jsx)(n.td,{children:"404"}),(0,i.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FFE-004"}),(0,i.jsx)(n.td,{children:"401"}),(0,i.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FFE-005"}),(0,i.jsx)(n.td,{children:"403"}),(0,i.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FFE-006"}),(0,i.jsx)(n.td,{children:"400"}),(0,i.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FFE-007"}),(0,i.jsx)(n.td,{children:"404"}),(0,i.jsx)(n.td,{children:"Ingen formuesobjekt funnet p\xe5 oppgitt identifikator."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FFE-008"}),(0,i.jsx)(n.td,{children:"406"}),(0,i.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json er st\xf8ttet."})]})]})]})]}),(0,i.jsx)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(76960).A+"",children:(0,i.jsx)(n.img,{alt:"Formuesobjekt fast eiendom API",src:t(86580).A+"",width:"2797",height:"1288"})})})}),(0,i.jsx)(d,{headerText:"Test",itemKey:"itemKey-5",children:(0,i.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,i.jsx)(n.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, men man kan benytte hendelseslisten for \xe5 finne\ntestdata man kan benytte for \xe5 teste oppslagstjenesten."]})})]})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76960:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/Informasjonsmodell_FormuesobjektFastEiendomOppslag-ca7ae77a12ff6c345a74c6ea75588546.png"},86580:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Informasjonsmodell_FormuesobjektFastEiendomOppslag-ca7ae77a12ff6c345a74c6ea75588546.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);