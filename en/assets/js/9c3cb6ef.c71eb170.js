"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3736],{48161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/w_sanert_skattepliktig","title":"Skattepliktig API","description":"Tjenesten leverer informasjon om navn og adresse for skattepliktige personer.","source":"@site/docs/api/w_sanert_skattepliktig.md","sourceDirName":"api","slug":"/api/skattepliktig","permalink":"/api-dokumentasjon/en/api/skattepliktig","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/en/tags/api"},{"inline":true,"label":"Skattepliktig","permalink":"/api-dokumentasjon/en/tags/skattepliktig"}],"version":"current","frontMatter":{"title":"Skattepliktig API","slug":"/api/skattepliktig","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Skattepliktig"],"keywords":["fastsetting","skattepliktig"],"last_updated":"Mar 6, 2023","hide_table_of_contents":true}}');var i=n(74848),r=n(28453);const a={title:"Skattepliktig API",slug:"/api/skattepliktig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skattepliktig"],keywords:["fastsetting","skattepliktig"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},l=void 0,d={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjeneste",id:"st\xf8ttetjeneste",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function k(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Summary:s,TabItem:a,Tabs:l}=t;return s||h("Summary",!0),a||h("TabItem",!0),l||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:"Tjenesten leverer informasjon om navn og adresse for skattepliktige personer."}),"\n",(0,i.jsxs)(l,{underline:!0,children:[(0,i.jsxs)(a,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,i.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,i.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,i.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,i.jsx)(t.code,{children:"skatteetaten:skattepliktig"})]}),(0,i.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,i.jsxs)(t.p,{children:["Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,i.jsx)(t.code,{children:"Skattepliktig API - P\xe5 vegne av"})]}),(0,i.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,i.jsxs)(t.p,{children:["Url\u2019er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,i.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skattepliktig-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,i.jsx)(t.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,i.jsx)(t.tbody,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.td,{children:"distribusjon"})})})]}),(0,i.jsx)(t.h2,{id:"st\xf8ttetjeneste",children:"St\xf8ttetjeneste"}),(0,i.jsxs)(t.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,i.jsx)(t.code,{children:"Skattepliktig hendelser API"})]}),(0,i.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://data.norge.no/dataservices/6ff73921-6666-3e8f-9091-423082b0bfcc",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,i.jsxs)(a,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,i.jsx)(t.h2,{id:"curl",children:"Curl"}),(0,i.jsx)(t.p,{children:"Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 legge sertifikat og n\xf8kkel som parametre til curl-kommandoen."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/part/skattepliktig/distribusjon/18018188888"\n'})}),(0,i.jsx)(t.h2,{id:"json",children:"JSON"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{  \n   "person":{  \n      "personidentifikator":"18018188888",\n      "navn":{  \n         "fornavn":"OLA",\n         "mellomnavn": "KALED",\n         "etternavn":"NORDMANN"\n      },\n      "bostedsadresse":{  \n         "adresse1":"NORD-STATLAND 411 \xc5",\n         "tilleggsadresse":"c/o Per Post",\n         "postnummer":"1234",\n         "kommunenummer":"1749",\n         "registreringsdato":"2017-01-24"\n      },\n      "postadresse":{  \n         "adresse1":"Ole Danviks gate 10",\n         "adresse2":"H0101",\n         "adresse3":"1234 Oslo",\n          "land":{\n             "landnummerDsf":"0",\n             "landkodeIsoAlfa2":"NO"\n          },\n         "registreringsdato":"2018-01-20"\n      },\n      "hjemlandsadresse":{  \n         "adresse1":"Kaled Dome 1337 Kaalann, Skaro",\n         "adresse2":"Madrid",\n         "adresse3":"SPANIA",\n         "land":{\n            "landnummerDsf":"34",\n            "landkodeIsoAlfa2":"ES"\n         },\n         "registreringsdato":"2016-08-01"\n      },\n      "doedsdato" :"2018-04-30",\n      "klientadresse" :false,\n      "utenFastBopel" :false\n   },\n   "skjermet":false\n}\n'})}),(0,i.jsx)(t.h2,{id:"xml",children:"XML"}),(0,i.jsxs)(t.p,{children:["Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,i.jsx)(t.code,{children:"Accept"})," satt til ",(0,i.jsx)(t.code,{children:"application/xml"})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(9486).A+"",children:"skattepliktig.xml (eksempel)"})," (vanlig)"]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(45642).A+"",children:"skattepliktig_skjermet.xml (eksempel)"})," (skjermet person)"]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(99564).A+"",children:"skattepliktig_skjermet_adresse.xml (eksempel)"})," (person som bor p\xe5 institusjon med adresse-skjerming)"]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(5851).A+"",children:"skattepliktig_skjermet_bostedloes.xml (eksempel)"})," (person som er bostedsl\xf8s)"]})]}),(0,i.jsxs)(a,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,i.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,i.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Feilkode"}),(0,i.jsx)(t.th,{children:"HTTP Statuskode"}),(0,i.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SKATTEPLIKTIG-001"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SKATTEPLIKTIG-002"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SKATTEPLIKTIG-003"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SKATTEPLIKTIG-004"}),(0,i.jsx)(t.td,{children:"401"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SKATTEPLIKTIG-005"}),(0,i.jsx)(t.td,{children:"403"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SKATTEPLIKTIG-006"}),(0,i.jsx)(t.td,{children:"400"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SKATTEPLIKTIG-007"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ingen treff p\xe5 oppgitt personidentifikator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SKATTEPLIKTIG-008"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ingen skattepliktig funnet med oppgitt personidentifikator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SKATTEPLIKTIG-009"}),(0,i.jsx)(t.td,{children:"406"}),(0,i.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,i.jsx)(a,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://data.norge.no/informationmodels/62484725-bcff-34e9-b0cd-cf51b7a99908",children:"Informasjonsmodell"})," i Felles datakatalog."]})}),(0,i.jsxs)(a,{headerText:"Test",itemKey:"itemKey-5",children:[(0,i.jsx)(t.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,i.jsxs)(t.p,{children:["Testdata for tjenesten kan finnes i ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/en/test/tenor",children:"Tenor"}),' med s\xf8ket for "Folkeregister".']})]})]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9486:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/skattepliktig-7dac5af426717eee804fa7b2621889dc.xml"},45642:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/skattepliktig_skjermet-e2ba0f9a2901b608b97cf16061a3d5d9.xml"},99564:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/skattepliktig_skjermet_adresse-cfdd800040e78111f7594aedc21ea248.xml"},5851:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/skattepliktig_skjermet_bostedloes-d745dc604f3d6909079bf11d3316a802.xml"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);