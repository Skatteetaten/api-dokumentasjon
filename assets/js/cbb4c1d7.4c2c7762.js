"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5269],{5660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(74848),s=n(28453);const r={title:"Aktiv konto API",slug:"/api/aktivkonto",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Aktiv konto"],keywords:["aktiv konto"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},d=void 0,l={id:"api/aktivkonto",title:"Aktiv konto API",description:"Tjenesten leverer informasjon om valgt konto for utbetalinger av bel\xf8p til gode fra Skatteetaten.",source:"@site/docs/api/aktivkonto.md",sourceDirName:"api",slug:"/api/aktivkonto",permalink:"/api-dokumentasjon/api/aktivkonto",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/tags/api"},{inline:!0,label:"Aktiv konto",permalink:"/api-dokumentasjon/tags/aktiv-konto"}],version:"current",frontMatter:{title:"Aktiv konto API",slug:"/api/aktivkonto",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Aktiv konto"],keywords:["aktiv konto"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Aksjon\xe6r i virksomhet API",permalink:"/api-dokumentasjon/api/aksjonaerivirksomhet"},next:{title:"Arbeidsforhold i oppdrag API",permalink:"/api-dokumentasjon/api/arbeidsforholdioppdrag"}},o={},a=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Rotobjekt",id:"rotobjekt",level:2},{value:"Konto",id:"konto",level:2},{value:"Informasjonsmodell - skjema",id:"informasjonsmodell---skjema",level:2},{value:"Oversikt",id:"oversikt",level:3},{value:"XML skjema",id:"xml-skjema",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Summary:r,TabItem:d,Tabs:l}=t;return r||j("Summary",!0),d||j("TabItem",!0),l||j("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{children:"Tjenesten leverer informasjon om valgt konto for utbetalinger av bel\xf8p til gode fra Skatteetaten."}),"\n",(0,i.jsxs)(l,{underline:!0,children:[(0,i.jsxs)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,i.jsx)(t.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,i.jsx)(t.h2,{id:"scope",children:"Scope"}),(0,i.jsxs)(t.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,i.jsx)(t.code,{children:"skatteetaten:aktivkonto"})]}),(0,i.jsx)(t.h2,{id:"delegering",children:"Delegering"}),(0,i.jsxs)(t.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,i.jsx)(t.code,{children:"Aktiv konto API - P\xe5 vegne av"})]}),(0,i.jsx)(t.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,i.jsxs)(t.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,i.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/aktivkonto-api",children:"Open API spesifikasjonen"})," p\xe5 SwaggerHub."]}),(0,i.jsx)(t.h2,{id:"datakatalog",children:"Datakatalog"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://data.norge.no/dataservices/e6f947c9-2ca0-31de-81d5-175067550a01",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,i.jsxs)(d,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,i.jsx)(t.h2,{id:"curl",children:"Curl"}),(0,i.jsxs)(t.p,{children:["Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 generere et gyldig ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Maskinporten"}),"-token og legge til i header."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -v -H "Authorization: Bearer <maskinporten token>" -H "Content-Type: application/json" "https://api-test.sits.no/api/aktivkonto/v3/28707299217"\n'})}),(0,i.jsx)(t.h2,{id:"json",children:"JSON"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "personidentifikator": "28707299217",\n  "konto": {\n    "kontotype": "innskuddskontoIValuta",\n    "skattekontoegnethet": "brukskonto",\n    "bicEllerSwift": "DOGBPLUZEXP",\n    "bankNavn": "Doggerbanken",\n    "bankLandkode": "PL",\n    "iban": "PL0828538647323163",\n    "erUtbetalingskort": false,\n    "valgtDato": "2022-11-01"\n  }\n}\n'})})]}),(0,i.jsxs)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,i.jsxs)(t.p,{children:["Se egen side for generell info om ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,i.jsx)(t.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Feilkode"}),(0,i.jsx)(t.th,{children:"HTTP Statuskode"}),(0,i.jsx)(t.th,{children:"Feilomr\xe5de"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AKE-001"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AKE-002"}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AKE-003"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ukjent url benyttet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AKE-004"}),(0,i.jsx)(t.td,{children:"401"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autentisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AKE-005"}),(0,i.jsx)(t.td,{children:"403"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med autorisering."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AKE-006"}),(0,i.jsx)(t.td,{children:"400"}),(0,i.jsx)(t.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AKE-007"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Ingen treff p\xe5 oppgitt f\xf8dselsnummer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AKE-008"}),(0,i.jsx)(t.td,{children:"404"}),(0,i.jsx)(t.td,{children:"Fant ingen aktiv konto for oppgitt f\xf8dselsnummer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AKE-009"}),(0,i.jsx)(t.td,{children:"406"}),(0,i.jsx)(t.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,i.jsxs)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,i.jsx)(t.p,{children:"Tjenesten returnerer data p\xe5 JSON-formatet. JSON-objektet er basert p\xe5 et XML-dokument med et tilknyttet skjema."}),(0,i.jsx)(t.h2,{id:"rotobjekt",children:"Rotobjekt"}),(0,i.jsx)(t.p,{children:"Rotobjektet vil alltid returneres ved en positiv repons."}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Navn p\xe5 felt"}),(0,i.jsx)(t.th,{children:"JSON-type"}),(0,i.jsx)(t.th,{children:"Beskrivelse"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"personidentifikator"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Gjeldende personidentifikator for personen det ble s\xf8kt p\xe5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"konto"}),(0,i.jsx)(t.td,{children:"Object"}),(0,i.jsxs)(t.td,{children:["Aktiv ",(0,i.jsx)(t.a,{href:"#Konto",children:"konto"})]})]})]})]}),(0,i.jsx)(t.h2,{id:"konto",children:"Konto"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Navn p\xe5 felt"}),(0,i.jsx)(t.th,{children:"JSON-type"}),(0,i.jsx)(t.th,{children:"Beskrivelse"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"kontonummer"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Kontonummer"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"kontotype"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Type konto [ ]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"skattekontoegnethet"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Egnethet for konto [ikkeEgnet, finnesLoennsutbetaling, finnesMinibankkort, brukskonto]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bicEllerSwift"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"BIC (Bank Identifier Code) eller SWIFT (Society for Worldwide Interbank Financial Telecommunications)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bankkode"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bankNavn"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Navn p\xe5 bank"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bankLandkode"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Kode for landet banken tilh\xf8rer (eks. NO, US, EN)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"iban"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"IBAN (International Bank Account Number)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"valuta"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Valutakode (eks. NOK, GBP, USD, EUR)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"erUtbetalingskort"}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"Om konto er for utbetalingskort"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"valgtDato"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Dato for kontovalg. Gyldig format [YYYY-MM-DD] (ISO 8601 datoformat)"})]})]})]}),(0,i.jsx)(t.h2,{id:"informasjonsmodell---skjema",children:"Informasjonsmodell - skjema"}),(0,i.jsx)(t.h3,{id:"oversikt",children:"Oversikt"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../download/aktivkontoekstern/aktivkonto-ekstern.png",children:(0,i.jsx)(t.img,{alt:"Oversikt",src:n(4586).A+"",width:"1182",height:"688"})})}),(0,i.jsx)(t.h3,{id:"xml-skjema",children:"XML skjema"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(44189).A+"",children:"aktivkonto_valgtutbetalingskonto_v1.xsd"})})]}),(0,i.jsxs)(d,{headerText:"Test",itemKey:"itemKey-5",children:[(0,i.jsx)(t.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,i.jsxs)(t.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,i.jsx)(t.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"})," for denne tjenesten, og testdata er derfor listet her."]}),(0,i.jsx)(t.h2,{id:"testdata",children:"Testdata"}),(0,i.jsx)(t.p,{children:"F\xf8lgende testdata er tilgjengelige i Skatteetatens testmilj\xf8 for eksterne:"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"F\xf8dselsnummer"}),(0,i.jsx)(t.th,{children:"Kontotype"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"17816994780"}),(0,i.jsx)(t.td,{children:"Norsk konto"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"46907200809"}),(0,i.jsx)(t.td,{children:"Utenlandsk konto"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"27858199021"}),(0,i.jsx)(t.td,{children:"Utbetalingskort"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"23818699190"}),(0,i.jsx)(t.td,{children:"Ingen konto"})]})]})]})]})]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44189:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/aktivkonto_valgtutbetalingskonto_v1-2d7fe55693362e6239c99a762a20ffbe.xsd"},4586:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/aktivkonto-ekstern-d3f7d79c110532b0317c1f3ebcab7331.png"},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);