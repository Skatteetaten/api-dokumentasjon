"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6437],{48967:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/aksjonaerivirksomhet","title":"Aksjon\xe6r i virksomhet API","description":"Tjenesten leverer informasjon om en virksomhets aksjon\xe6rer pr. 31.12 sist kalender\xe5r.","source":"@site/docs/api/aksjonaerivirksomhet.md","sourceDirName":"api","slug":"/api/aksjonaerivirksomhet","permalink":"/api-dokumentasjon/api/aksjonaerivirksomhet","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"Aksjon\xe6rregister","permalink":"/api-dokumentasjon/tags/aksjonaerregister"}],"version":"current","frontMatter":{"title":"Aksjon\xe6r i virksomhet API","slug":"/api/aksjonaerivirksomhet","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Aksjon\xe6rregister"],"keywords":["aksjon\xe6rregister","aksjer","aksjon\xe6r i virksomhet"],"last_updated":"Sep 28, 2023","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Aksjebeholdning API","permalink":"/api-dokumentasjon/api/aksjebeholdning"},"next":{"title":"Aktiv konto API","permalink":"/api-dokumentasjon/api/aktivkonto"}}');var i=s(74848),t=s(28453);const a={title:"Aksjon\xe6r i virksomhet API",slug:"/api/aksjonaerivirksomhet",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Aksjon\xe6rregister"],keywords:["aksjon\xe6rregister","aksjer","aksjon\xe6r i virksomhet"],last_updated:"Sep 28, 2023",hide_table_of_contents:!0},d=void 0,l={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function k(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Summary:r,TabItem:a,Tabs:d}=n;return r||h("Summary",!0),a||h("TabItem",!0),d||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{children:"Tjenesten leverer informasjon om en virksomhets aksjon\xe6rer pr. 31.12 sist kalender\xe5r."}),"\n",(0,i.jsxs)(d,{underline:!0,children:[(0,i.jsxs)(a,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,i.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,i.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,i.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,i.jsx)(n.code,{children:"skatteetaten:aksjonaer"})]}),(0,i.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,i.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,i.jsx)(n.code,{children:"Aksjon\xe6r i virksomhet API - P\xe5 vegne av"})]}),(0,i.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,i.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,i.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/aksjonaer-i-virksomhet-api",children:"Open API spesifikasjonen"}),"\np\xe5 SwaggerHub."]}),(0,i.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"offentligmedhjemmel"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"fiskeridirektoratetkontrollmanntall"})})]})]}),(0,i.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://data.norge.no/dataservices/029700be-dc37-3b5d-8fcc-93f8e885cc84",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,i.jsxs)(a,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,i.jsx)(n.h2,{id:"json",children:"JSON"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "identifikator": "313136841",\n  "kalenderaar": "2022",\n  "totaltAntallAksjer": 100,\n  "aksjonaerer": [\n    {\n      "personidentifikator": "03866996805",\n      "navn": "SIGEN BUKT",\n      "foedselsaar": "1969",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 10,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "personidentifikator": "03839095553",\n      "navn": "UPOPUL\xc6R KLEMME",\n      "foedselsaar": "1990",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 10,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "personidentifikator": "24867095477",\n      "navn": "MISFORN\xd8YD CORNER",\n      "foedselsaar": "1970",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 10,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "personidentifikator": "19817899571",\n      "navn": "SK\xc5NSOM KOPP",\n      "foedselsaar": "1978",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 10,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "personidentifikator": "19899899639",\n      "navn": "RUSTEN VOLLEYBALL",\n      "foedselsaar": "1998",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 10,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "personidentifikator": "08851549162",\n      "navn": "ANONYM SITRON",\n      "foedselsaar": "1915",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 10,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "organisasjonsnummer": "310350842",\n      "navn": "MISFORN\xd8YD UGLESETT APE",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 10,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "organisasjonsnummer": "315012201",\n      "navn": "VARSOM SITRONGUL KATT BAGASJETRALLE",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 10,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "organisasjonsnummer": "311863940",\n      "navn": "BEGEISTRET MORSOM TIGER AS",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 10,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "organisasjonsnummer": "315452430",\n      "navn": "TEORETISK HES TIGER AS",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 5,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    },\n    {\n      "personidentifikator": "04815396931",\n      "navn": "EFFEKTIV SOLSIKKE",\n      "foedselsaar": "1953",\n      "aksjer": [\n        {\n          "isinnummer": "NO0000000000",\n          "antallAksjer": 5,\n          "aksjeklasse": "ordinaer"\n        }\n      ],\n      "landkode": "NOR"\n    }\n  ]\n}\n'})})]}),(0,i.jsxs)(a,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,i.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,i.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,i.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Feilkode"}),(0,i.jsx)(n.th,{children:"HTTP Statuskode"}),(0,i.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIV-001"}),(0,i.jsx)(n.td,{children:"500"}),(0,i.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIV-002"}),(0,i.jsx)(n.td,{children:"500"}),(0,i.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIV-003"}),(0,i.jsx)(n.td,{children:"404"}),(0,i.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIV-004"}),(0,i.jsx)(n.td,{children:"401"}),(0,i.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIV-005"}),(0,i.jsx)(n.td,{children:"403"}),(0,i.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIV-006"}),(0,i.jsx)(n.td,{children:"400"}),(0,i.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIV-007"}),(0,i.jsx)(n.td,{children:"404"}),(0,i.jsx)(n.td,{children:"Ingen treff p\xe5 gitt organisasjosnsnummer og kalender\xe5r."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIV-008"}),(0,i.jsx)(n.td,{children:"406"}),(0,i.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,i.jsx)(a,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8840).A+"",children:(0,i.jsx)(n.img,{alt:"Aksjon\xe6r i virksomhet API",src:s(32292).A+"",width:"851",height:"883"})})})}),(0,i.jsxs)(a,{headerText:"Test",itemKey:"itemKey-5",children:[(0,i.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,i.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,i.jsx)(n.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, og testdata er derfor listet her."]}),(0,i.jsx)(n.h2,{id:"testdata",children:"Testdata"}),(0,i.jsx)(n.p,{children:"Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne:"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Organisasjonsnummer"}),(0,i.jsx)(n.th,{children:"Kalender\xe5r"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"313136841"}),(0,i.jsx)(n.td,{children:"2022"})]})})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8840:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/files/Informasjonsmodell_Aksjon\xe6rivirksomhet-836b15d2991a45e664ba96164d59b82f.png"},32292:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/Informasjonsmodell_Aksjon\xe6rivirksomhet-836b15d2991a45e664ba96164d59b82f.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var r=s(96540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);