"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1306],{30107:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(74848),i=t(28453);const r={title:"Pensjonsgivende inntekt for folketrygden API",slug:"/api/pgi_folketrygden",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["pgi","folketrygden","skatteberegning","inntekt","formue"],last_updated:"Feb 29, 2024",hide_table_of_contents:!0},d=void 0,l={id:"api/pgi_folketrygden",title:"Pensjonsgivende inntekt for folketrygden API",description:"Tjenesten leverer informasjon om grunnlag for pensjonsopptjening i folketrygden.",source:"@site/docs/api/pgi_folketrygden.md",sourceDirName:"api",slug:"/api/pgi_folketrygden",permalink:"/api-dokumentasjon/api/pgi_folketrygden",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/tags/api"},{inline:!0,label:"Skatteoppgj\xf8r",permalink:"/api-dokumentasjon/tags/skatteoppgjor"}],version:"current",frontMatter:{title:"Pensjonsgivende inntekt for folketrygden API",slug:"/api/pgi_folketrygden",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["pgi","folketrygden","skatteberegning","inntekt","formue"],last_updated:"Feb 29, 2024",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Pensjonsgivende inntekt API",permalink:"/api-dokumentasjon/api/pgi"},next:{title:"Restanser API",permalink:"/api-dokumentasjon/api/restanser"}},o={},a=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Rotobjekt",id:"rotobjekt",level:2},{value:"Objekt i pensjonsgivendeInntekt-listen",id:"objekt-i-pensjonsgivendeinntekt-listen",level:2},{value:"Informasjonsmodell - skjema",id:"informasjonsmodell---skjema",level:2},{value:"Oversikt",id:"oversikt",level:3},{value:"XML skjema",id:"xml-skjema",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}];function j(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:r,TabItem:d,Tabs:l}=n;return r||k("Summary",!0),d||k("TabItem",!0),l||k("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{children:"Tjenesten leverer informasjon om grunnlag for pensjonsopptjening i folketrygden."}),"\n",(0,s.jsxs)(l,{underline:!0,children:[(0,s.jsxs)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:pensjonsgivendeinntektforfolketrygden"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,s.jsx)(n.code,{children:"Pensjonsgivende inntekt for folketrygden API - P\xe5 vegne av"})]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/pensjonsgivendeinntekt-for-folketrygden-api",children:"Open API spesifikasjonen"}),"\np\xe5 SwaggerHub."]}),(0,s.jsx)(n.p,{children:"Tjenesten st\xf8tter inntekts\xe5r 2017 og utover, men det kan ogs\xe5 komme endringer for inntekts\xe5r fra og med 1967 til og med 1992."}),(0,s.jsx)(n.h2,{id:"rettighetspakker",children:"Rettighetspakker"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Navn p\xe5 rettighetspakke"})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"navUfoeretrygd"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"navForeldrepenger"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"navPleieOgOmsorgspenger"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"navSykepenger"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"navPensjonopptjening"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"navEnsligForsoerger"})})]})]}),(0,s.jsx)(n.h2,{id:"st\xf8ttetjenester",children:"St\xf8ttetjenester"}),(0,s.jsxs)(n.p,{children:["For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/api/hendelser",children:"st\xf8ttetjeneste for hendelsesliste"}),": ",(0,s.jsx)(n.code,{children:"Pensjonsgivende inntekt for folketrygden hendelser API"})]}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://data.norge.no/dataservices/70d7fb70-20e0-3c8e-a05c-0432b182ef3f",children:"Datatjenestebeskrivelse"})," i Felles datakatalog."]})]}),(0,s.jsxs)(d,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"curl",children:"Curl"}),(0,s.jsxs)(n.p,{children:["Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 generere et gyldig ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Maskinporten"}),"\n-token og legge til i header."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/pensjonsgivendeinntektforfolketrygden/2022/08819797596"\n'})}),(0,s.jsx)(n.h2,{id:"json",children:"JSON"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "norskPersonidentifikator": "02116049964",\n  "inntektsaar": 2019,\n  "pensjonsgivendeInntekt": [\n    {\n      "skatteordning": "FASTLAND",\n      "datoForFastsetting": "2020-09-27",\n      "pensjonsgivendeInntektAvLoennsinntekt": 698219,\n      "pensjonsgivendeInntektAvLoennsinntektBarePensjonsdel": null,\n      "pensjonsgivendeInntektAvNaeringsinntekt": 150000,\n      "pensjonsgivendeInntektAvNaeringsinntektFraFiskeFangstEllerFamiliebarnehage": 85000\n    },\n    {\n      "skatteordning": "SVALBARD",\n      "datoForFastsetting": "2020-09-27",\n      "pensjonsgivendeInntektAvLoennsinntekt": 492160,\n      "pensjonsgivendeInntektAvLoennsinntektBarePensjonsdel": null,\n      "pensjonsgivendeInntektAvNaeringsinntekt": 2530000,\n      "pensjonsgivendeInntektAvNaeringsinntektFraFiskeFangstEllerFamiliebarnehage": null\n    }\n  ]\n}\n'})})]}),(0,s.jsxs)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne\nvariere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"HTTP status"}),(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"Feilmelding"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PGIF-001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PGIF-002"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PGIF-003"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PGIF-004"}),(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PGIF-005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PGIF-006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PGIF-007"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ikke treff p\xe5 oppgitt personidentifikator."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PGIF-008"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Ingen pensjonsgivende inntekt funnet p\xe5 oppgitt personidentifikator og inntekts\xe5r."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PGIF-009"}),(0,s.jsx)(n.td,{children:"406"}),(0,s.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,s.jsxs)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,s.jsx)(n.p,{children:"JSON-objektet er basert p\xe5 et XML-dokument med et tilknyttet skjema."}),(0,s.jsx)(n.h2,{id:"rotobjekt",children:"Rotobjekt"}),(0,s.jsx)(n.p,{children:"Rotobjektet vil alltid returneres ved en positiv repons."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Navn p\xe5 felt"}),(0,s.jsx)(n.th,{children:"JSON-type"}),(0,s.jsx)(n.th,{children:"Beskrivelse"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"personidentifikator"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Gjeldende personidentifikator for personen det ble s\xf8kt p\xe5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inntektsaar"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5ret det ble s\xf8kt p\xe5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pensjonsgivendeInntekt"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsxs)(n.td,{children:["En liste med ",(0,s.jsx)(n.a,{href:"#objekt-i-pensjonsgivendeinntekt-listen",children:"objekter av pensjonsgivende inntekt"})]})]})]})]}),(0,s.jsx)(n.h2,{id:"objekt-i-pensjonsgivendeinntekt-listen",children:"Objekt i pensjonsgivendeInntekt-listen"}),(0,s.jsxs)(n.p,{children:["Definerer objektet som kan ligge i listen pensjonsgivendeInntekt i ",(0,s.jsx)(n.a,{href:"#rotobjekt",children:"rotobjektet"})]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Navn p\xe5 felt"}),(0,s.jsx)(n.th,{children:"JSON-type"}),(0,s.jsx)(n.th,{children:"Beskrivelse"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"skatteordning"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Skatteordningen det leveres data for. Gyldige verdier er: [FASTLAND, SVALBARD, KILDESKATT_PAA_LOENN]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"datoForFastsetting"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Dato for fastsetting. Gyldig format [YYYY-MM-DD] (ISO 8601 datoformat)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pensjonsgivendeInntektAvLoennsinntekt"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Pensjonsgivende l\xf8nnsinntekt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pensjonsgivendeInntektAvLoennsinntektBarePensjonsdel"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Pensjonsgivende l\xf8nnsinntekt, bare pensjonsdel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pensjonsgivendeInntektAvNaeringsinntekt"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Pensjonsgivende inntekt av n\xe6ringsinntekt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pensjonsgivendeInntektAvNaeringsinntektFraFiskeFangstEllerFamiliebarnehage"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Pensjonsgivende inntekt av n\xe6ringsinntekt fra fiske, fangst eller familiebarnehage"})]})]})]}),(0,s.jsx)(n.h2,{id:"informasjonsmodell---skjema",children:"Informasjonsmodell - skjema"}),(0,s.jsx)(n.h3,{id:"oversikt",children:"Oversikt"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(11877).A+"",children:(0,s.jsx)(n.img,{alt:"Oversikt",src:t(30665).A+"",width:"1177",height:"697"})})}),(0,s.jsx)(n.h3,{id:"xml-skjema",children:"XML skjema"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(76907).A+"",children:"pensjonsgivendeinntektforfolketrygden_nav_overfoering_v1.xsd"})})]}),(0,s.jsxs)(d,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.h2,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Testdata for tjenesten kan finnes i ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/test/tenor",children:"Tenor"}),' med s\xf8ket for "Beregnet skatt".']})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}function k(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76907:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/pensjonsgivendeinntektforfolketrygden_nav_overfoering_v1-3e4c883a7a24da170e9fac0e87d1d9bb.xsd"},11877:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/pgi-folketrygden-a45e6316f01eb4ae678d5df6b143ea23.png"},30665:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pgi-folketrygden-a45e6316f01eb4ae678d5df6b143ea23.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);