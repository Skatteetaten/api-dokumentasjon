"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1036],{2021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>k,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/trukketkildeskattpaaloenn","title":"Trukket kildeskatt p\xe5 l\xf8nn API","description":"Tjenesten leverer opplysninger om trukket kildeskatt p\xe5 l\xf8nn for personer i kildeskatt p\xe5 l\xf8nn ordningen.","source":"@site/docs/api/trukketkildeskattpaaloenn.md","sourceDirName":"api","slug":"/api/trukketkildeskattpaaloenn","permalink":"/api-dokumentasjon/en/api/trukketkildeskattpaaloenn","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/en/tags/api"},{"inline":true,"label":"Skatteoppgj\xf8r","permalink":"/api-dokumentasjon/en/tags/skatteoppgjor"},{"inline":true,"label":"Trukket kildeskatt p\xe5 l\xf8nn","permalink":"/api-dokumentasjon/en/tags/trukket-kildeskatt-pa-lonn"}],"version":"current","frontMatter":{"title":"Trukket kildeskatt p\xe5 l\xf8nn API","slug":"/api/trukketkildeskattpaaloenn","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Skatteoppgj\xf8r","Trukket kildeskatt p\xe5 l\xf8nn"],"keywords":["SummertSkattegrunnlag","inntekt","formue"],"last_updated":"Mar 6, 2023","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Tjenestepensjonsavtale API","permalink":"/api-dokumentasjon/en/api/tjenestepensjonsavtale"},"next":{"title":"Underenhet fra A-ordningen API","permalink":"/api-dokumentasjon/en/api/underenhetaordningen"}}');var a=t(74848),s=t(28453);const k={title:"Trukket kildeskatt p\xe5 l\xf8nn API",slug:"/api/trukketkildeskattpaaloenn",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r","Trukket kildeskatt p\xe5 l\xf8nn"],keywords:["SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,l={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:4},{value:"XML",id:"xml",level:4},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Summary:t,TabItem:r,Tabs:k}=n;return t||m("Summary",!0),r||m("TabItem",!0),k||m("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{children:"Tjenesten leverer opplysninger om trukket kildeskatt p\xe5 l\xf8nn for personer i kildeskatt p\xe5 l\xf8nn ordningen."}),"\n",(0,a.jsxs)(k,{underline:!0,children:[(0,a.jsxs)(r,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,a.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,a.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,a.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,a.jsx)(n.code,{children:"skatteetaten:trukketkildeskattpaaloenn"})]}),(0,a.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,a.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,a.jsx)(n.code,{children:"Trukket kildeskatt p\xe5 l\xf8nn - P\xe5 vegne av"})]}),(0,a.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,a.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,a.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/trukketkildeskattpaaloenn-api/",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,a.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,a.jsx)(n.tbody,{children:(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"ssb"})})})]}),(0,a.jsx)(n.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,a.jsxs)(n.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,a.jsx)(n.a,{href:"/api-dokumentasjon/en/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,a.jsx)(n.code,{children:"Skatteoppgj\xf8r hendelser API"})]}),(0,a.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://data.norge.no/dataservices/06542c2f-0e62-34ba-87d9-b95e61f1de09",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,a.jsxs)(r,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,a.jsx)(n.h4,{id:"json",children:"JSON"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "personidentifikator": "07088730296",\n  "inntektsaar": 2021,\n  "skjermet": false,\n  "trekkinformasjonPerMaaned": [\n    {\n      "maaned": "2021-01",\n      "grunnlagForSkattetrekk": 63427,\n      "skattetrekk": 15856,\n      "samletRapportertLoennsinntekt": 63427\n    },\n    {\n      "maaned": "2021-02",\n      "grunnlagForSkattetrekk": 36538,\n      "skattetrekk": 9134,\n      "samletRapportertLoennsinntekt": 36538\n    },\n    {\n      "maaned": "2021-03",\n      "grunnlagForSkattetrekk": 33575,\n      "skattetrekk": 8225,\n      "samletRapportertLoennsinntekt": 33575\n    },\n    {\n      "maaned": "2021-04",\n      "grunnlagForSkattetrekk": 15109,\n      "skattetrekk": 3701,\n      "samletRapportertLoennsinntekt": 15109\n    },\n    {\n      "maaned": "2021-05",\n      "grunnlagForSkattetrekk": 47487,\n      "skattetrekk": 11744,\n      "samletRapportertLoennsinntekt": 47487\n    },\n    {\n      "maaned": "2021-06",\n      "grunnlagForSkattetrekk": 32380,\n      "skattetrekk": 8037,\n      "samletRapportertLoennsinntekt": 32380\n    },\n    {\n      "maaned": "2021-07",\n      "grunnlagForSkattetrekk": 26774,\n      "skattetrekk": 6674,\n      "samletRapportertLoennsinntekt": 26774\n    },\n    {\n      "maaned": "2021-08",\n      "grunnlagForSkattetrekk": 26031,\n      "skattetrekk": 6377,\n      "samletRapportertLoennsinntekt": 26031\n    },\n    {\n      "maaned": "2021-09",\n      "grunnlagForSkattetrekk": 40809,\n      "skattetrekk": 10000,\n      "samletRapportertLoennsinntekt": 40809\n    },\n    {\n      "maaned": "2021-10",\n      "grunnlagForSkattetrekk": 43997,\n      "skattetrekk": 10884,\n      "samletRapportertLoennsinntekt": 43997\n    },\n    {\n      "maaned": "2021-11",\n      "grunnlagForSkattetrekk": 33590,\n      "skattetrekk": 8502,\n      "samletRapportertLoennsinntekt": 33590\n    },\n    {\n      "maaned": "2021-12",\n      "grunnlagForSkattetrekk": 43633,\n      "skattetrekk": 10907,\n      "samletRapportertLoennsinntekt": 43633\n    }\n  ]\n}\n'})}),(0,a.jsx)(n.h4,{id:"xml",children:"XML"}),(0,a.jsxs)(n.p,{children:["Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,a.jsx)(n.code,{children:"Accept"})," satt til ",(0,a.jsx)(n.code,{children:"application/xml"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<?xml version='1.0' encoding='UTF-8'?>\n<trukketKildeskattPaaLoenn xmlns=\"urn:no:skatteetaten:datasamarbeid:TrukketKildeskattPaaLoenn:v1\">\n  <personidentifikator>25860299472</personidentifikator>\n  <inntektsaar>2021</inntektsaar>\n  <skjermet>false</skjermet>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-01</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-02</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-03</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-04</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-05</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-06</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-07</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-08</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-09</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-10</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-11</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-12</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n</trukketKildeskattPaaLoenn>\n"})})]}),(0,a.jsxs)(r,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,a.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,a.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,a.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Feilkode"}),(0,a.jsx)(n.th,{children:"HTTP Statuskode"}),(0,a.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TKL-001"}),(0,a.jsx)(n.td,{children:"500"}),(0,a.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TKL-002"}),(0,a.jsx)(n.td,{children:"500"}),(0,a.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TKL-003"}),(0,a.jsx)(n.td,{children:"404"}),(0,a.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TKL-004"}),(0,a.jsx)(n.td,{children:"401"}),(0,a.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TKL-005"}),(0,a.jsx)(n.td,{children:"403"}),(0,a.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TKL-006"}),(0,a.jsx)(n.td,{children:"400"}),(0,a.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TKL-007"}),(0,a.jsx)(n.td,{children:"404"}),(0,a.jsx)(n.td,{children:"Ingen kildeskatt funnet p\xe5 oppgitt gitt inntekts\xe5r og identifikator."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TKL-008"}),(0,a.jsx)(n.td,{children:"406"}),(0,a.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"TKL-009"}),(0,a.jsx)(n.td,{children:"404"}),(0,a.jsx)(n.td,{children:"Ikke treff p\xe5 oppgitt personidentifikator."})]})]})]})]}),(0,a.jsx)(r,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://data.norge.no/informationmodels/2ac42f82-6c35-3011-be6d-3af931db02bd",children:"Informasjonsmodell"})," i Felles datakatalog."]})}),(0,a.jsxs)(r,{headerText:"Test",itemKey:"itemKey-5",children:[(0,a.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,a.jsxs)(n.p,{children:["Testdata for tjenesten kan finnes i ",(0,a.jsx)(n.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"})," med s\xf8ket for \u201cSummert skattegrunnlag\u201d med egenskap \u201cKildeskatt p\xe5 l\xf8nn\u201d."]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>k,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function k(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:k(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);