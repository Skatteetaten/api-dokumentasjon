"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6413],{69363:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>k,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"api/underenhetaordningen","title":"Underenhet fra A-ordningen API","description":"Tjenesten leverer informasjon om arbeidsgivers (opplysningspliktiges) innrapporterte inntektsopplysninger for en","source":"@site/docs/api/underenhetaordningen.md","sourceDirName":"api","slug":"/api/underenhetaordningen","permalink":"/api-dokumentasjon/api/underenhetaordningen","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"Underenhet fra A-ordningen","permalink":"/api-dokumentasjon/tags/underenhet-fra-a-ordningen"}],"version":"current","frontMatter":{"title":"Underenhet fra A-ordningen API","slug":"/api/underenhetaordningen","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Underenhet fra A-ordningen"],"keywords":["a-ordning"],"last_updated":"Jan 25, 2024","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Trukket kildeskatt p\xe5 l\xf8nn API","permalink":"/api-dokumentasjon/api/trukketkildeskattpaaloenn"},"next":{"title":"Boligsameie API","permalink":"/api-dokumentasjon/api/boligsameie"}}');var s=t(74848),r=t(28453);const d={title:"Underenhet fra A-ordningen API",slug:"/api/underenhetaordningen",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Underenhet fra A-ordningen"],keywords:["a-ordning"],last_updated:"Jan 25, 2024",hide_table_of_contents:!0},a=void 0,l={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Oppslagstjeneste",id:"oppslagstjeneste",level:2},{value:"Hendelsesliste",id:"hendelsesliste",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{TabItem:i,Tabs:d}=n;return i||c("TabItem",!0),d||c("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("summary",{children:"Tjenesten leverer informasjon om arbeidsgivers (opplysningspliktiges) innrapporterte inntektsopplysninger for en\ninntektsmottaker for en gitt periode."}),"\n",(0,s.jsxs)(d,{underline:!0,children:[(0,s.jsxs)(i,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:underenhetaordningen"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,s.jsx)(n.code,{children:"Underenhet fra A-ordningen API - P\xe5 vegne av"})]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/underenhet-fra-a-ordningen-api",children:"Open API spesifikasjonen"}),"\np\xe5 SwaggerHub."]}),(0,s.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"nav"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"ssb"})})]})]}),(0,s.jsx)(n.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,s.jsx)(n.h3,{id:"hendelser",children:"Hendelser"}),(0,s.jsxs)(n.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,s.jsx)(n.code,{children:"Underenhet fra a-ordningen hendelser API"})]}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://data.norge.no/data-services/da596432-a1ed-3763-b2c2-ffb1ffbbf20c",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,s.jsxs)(i,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"json",children:"JSON"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "norskIdentifikator": "314928660",\n  "periodeOgOpplysningspliktig": [\n    {\n      "kalendermaaned": "2023-11",\n      "opplysningspliktig": "310138363",\n      "arbeidsgiveravgift": {\n        "loennOgGodtgjoerelse": [\n          {\n            "beregningskodeForArbeidsgiveravgift": "generelleNaeringer",\n            "sone": "1",\n            "avgiftsgrunnlagBeloep": 335082.0,\n            "prosentsatsForAvgiftsberegning": 14.1\n          }\n        ]\n      },\n      "inntektsmottaker": [\n        {\n          "norskIdentifikator": "01852649662"\n        },\n        {\n          "norskIdentifikator": "04861949937"\n        },\n        {\n          "norskIdentifikator": "11891849879"\n        },\n        {\n          "norskIdentifikator": "07891249807"\n        },\n        {\n          "norskIdentifikator": "06878899138"\n        },\n        {\n          "norskIdentifikator": "06820849572"\n        },\n        {\n          "norskIdentifikator": "07820949018"\n        },\n        {\n          "norskIdentifikator": "27892548531"\n        },\n        {\n          "norskIdentifikator": "11882248684"\n        },\n        {\n          "norskIdentifikator": "17921449070"\n        },\n        {\n          "norskIdentifikator": "13900949949"\n        },\n        {\n          "norskIdentifikator": "03871448433"\n        }\n      ],\n      "oppsummeringstidspunkt": "2023-12-13T12:14:32.333"\n    },\n    {\n      "kalendermaaned": "2023-12",\n      "opplysningspliktig": "310138363",\n      "arbeidsgiveravgift": {\n        "loennOgGodtgjoerelse": [\n          {\n            "beregningskodeForArbeidsgiveravgift": "generelleNaeringer",\n            "sone": "1",\n            "avgiftsgrunnlagBeloep": 335082.0,\n            "prosentsatsForAvgiftsberegning": 14.1\n          }\n        ]\n      },\n      "inntektsmottaker": [\n        {\n          "norskIdentifikator": "03871448433"\n        },\n        {\n          "norskIdentifikator": "06878899138"\n        },\n        {\n          "norskIdentifikator": "04861949937"\n        },\n        {\n          "norskIdentifikator": "11891849879"\n        },\n        {\n          "norskIdentifikator": "27892548531"\n        },\n        {\n          "norskIdentifikator": "07820949018"\n        },\n        {\n          "norskIdentifikator": "11882248684"\n        },\n        {\n          "norskIdentifikator": "01852649662"\n        },\n        {\n          "norskIdentifikator": "07891249807"\n        },\n        {\n          "norskIdentifikator": "13900949949"\n        },\n        {\n          "norskIdentifikator": "17921449070"\n        },\n        {\n          "norskIdentifikator": "06820849572"\n        }\n      ],\n      "oppsummeringstidspunkt": "2023-12-13T12:14:32.659"\n    }\n  ]\n}\n'})})]}),(0,s.jsxs)(i,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UFA-001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UFA-002"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UFA-003"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UFA-004"}),(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UFA-005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UFA-006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UFA-007"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Fant ikke opplysninger om underenhet for angitt identifikator og periode."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UFA-008"}),(0,s.jsx)(n.td,{children:"406"}),(0,s.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UFA-009"}),(0,s.jsx)(n.td,{children:"410"}),(0,s.jsx)(n.td,{children:"Opplysninger om underenhet er slettet for periode."})]})]})]})]}),(0,s.jsxs)(i,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,s.jsx)(n.h2,{id:"oppslagstjeneste",children:"Oppslagstjeneste"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(72946).A+"",children:(0,s.jsx)(n.img,{alt:"Informasjonsmodell",src:t(9198).A+"",width:"1915",height:"610"})})}),(0,s.jsx)(n.h2,{id:"hendelsesliste",children:"Hendelsesliste"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(72309).A+"",children:(0,s.jsx)(n.img,{alt:"Informasjonsmodell",src:t(89337).A+"",width:"1513",height:"465"})})})]}),(0,s.jsxs)(i,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, men man kan benytte hendelseslisten for \xe5 finne\nreferanser man kan benytte for \xe5 teste oppslagstjenesten."]})]})]})]})}function k(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},72946:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/files/informasjonsmodell_underenhetaordningen-3304e8da119cd188c4e7cc3a773c9d91.png"},72309:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/files/informasjonsmodell_underenhetaordningen_hendelser-d9c252fff121ca53238230bf37b60164.png"},9198:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/informasjonsmodell_underenhetaordningen-3304e8da119cd188c4e7cc3a773c9d91.png"},89337:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/informasjonsmodell_underenhetaordningen_hendelser-d9c252fff121ca53238230bf37b60164.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);