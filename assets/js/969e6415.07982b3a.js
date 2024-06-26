"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3844],{4936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(74848),r=n(28453);const i={title:"Test fra systemleverand\xf8r",slug:"/test/testfrasystemleverandor",folder:"test",sidebar:"mydoc_sidebar",datatable:!0,tags:["Test","Delegering"],keywords:["Test","Delegering"],last_updated:"Mar 14, 2023",hide_table_of_contents:!0},l=void 0,a={id:"test/testfrasystemleverandor",title:"Test fra systemleverand\xf8r",description:"Test fra systemleverand\xf8r krever delegering i Test.",source:"@site/docs/test/testfrasystemleverandor.md",sourceDirName:"test",slug:"/test/testfrasystemleverandor",permalink:"/api-dokumentasjon/test/testfrasystemleverandor",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Test",permalink:"/api-dokumentasjon/tags/test"},{inline:!0,label:"Delegering",permalink:"/api-dokumentasjon/tags/delegering"}],version:"current",frontMatter:{title:"Test fra systemleverand\xf8r",slug:"/test/testfrasystemleverandor",folder:"test",sidebar:"mydoc_sidebar",datatable:!0,tags:["Test","Delegering"],keywords:["Test","Delegering"],last_updated:"Mar 14, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Test av samtykkebasert datauthenting",permalink:"/api-dokumentasjon/test/testavsamtykke"},next:{title:"Testmilj\xf8 og testdata",permalink:"/api-dokumentasjon/test/testmiljo"}},o={},d=[{value:"Maskinporten",id:"maskinporten",level:2},{value:"Delegering i Test",id:"delegering-i-test",level:2},{value:"Innlesing i Altinns testmilj\xf8 TT02",id:"innlesing-i-altinns-testmilj\xf8-tt02",level:2}];function m(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Summary:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Summary",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:"Test fra systemleverand\xf8r krever delegering i Test."}),"\n",(0,s.jsx)(t.h2,{id:"maskinporten",children:"Maskinporten"}),"\n",(0,s.jsx)(t.p,{children:"Maskinporten skal ogs\xe5 benyttes under test fra systemleverand\xf8r, og krever test-sertifikat. For test av Skatteetatens og Folkeregisterets delingstjenester anbefales for tiden at testsertifikat utstedes p\xe5 virksomhetens ekte organisajonsnummer."}),"\n",(0,s.jsx)(t.p,{children:"Dersom det i stedet benyttes syntetisk organisasjonsnummer i test-sertifikatet, v\xe6r klar over at tilrettelegging for test kan ta noe lengre tid."}),"\n",(0,s.jsxs)(t.p,{children:["Se egen dokumentasjon om ",(0,s.jsx)(t.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"bruk av Maskinporten"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"delegering-i-test",children:"Delegering i Test"}),"\n",(0,s.jsx)(t.p,{children:"Systemleverand\xf8rer som har behov for \xe5 teste \xe5 hente data fra Skatteetaten via en eller flere delingstjenester, p\xe5 vegne av et sett med kunder, m\xe5 f\xe5 f\xe5 delegert rettigheter i Altinns testmilj\xf8 TT02, p\xe5 samme m\xe5te som de vil f\xe5 delegert rettigheter i Produksjon."}),"\n",(0,s.jsxs)(t.p,{children:["Digdir har en n\xe6rmere beskrivelse av hvordan delegere, se ",(0,s.jsx)(t.a,{href:"https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-via-altinn-autorisasjon",children:"Digdir sin side om delegering via Altinn autorisasjon"})]}),"\n",(0,s.jsx)(t.h2,{id:"innlesing-i-altinns-testmilj\xf8-tt02",children:"Innlesing i Altinns testmilj\xf8 TT02"}),"\n",(0,s.jsx)(t.p,{children:"Skattetaten vil i dialog med Altinn s\xf8rge for at virksomhetene blir lest inn i Altinn TT02 slik at det er mulig \xe5 gjennomf\xf8re delegeringen. N\xe5r det er gjort vil vi gi tilbakemelding om hvilket f\xf8dselsnummer som kan benyttes for innlogging i TT02."}),"\n",(0,s.jsx)(t.p,{children:"For \xe5 delegere i test trengs f\xf8lgende:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Virksomheten med rettigheter til tjenesten som skal testes m\xe5 v\xe6re tilgjengelig i TT02."}),"\n",(0,s.jsx)(t.li,{children:"Virksomheten m\xe5 ha knyttet til seg en syntetisk person som det er mulig \xe5 logge inn i TT02 med."}),"\n",(0,s.jsx)(t.li,{children:"Systemleverand\xf8ren som skal f\xe5 delegert rettigheter for test m\xe5 v\xe6re tilgjengelig i TT02."}),"\n",(0,s.jsx)(t.li,{children:"Virksomheten med rettigheter m\xe5 s\xe5 delegere rettigheter til systemleverand\xf8ren i TT02."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Altinns testmilj\xf8 TT02 er et testmilj\xf8 med hovedsaklig syntetiske testdata, og innlesing av ekte virksomheter gj\xf8res kun ved behov. V\xe6r oppmerksom p\xe5 at det da leses inn produksjonsdata om virksomheten i et testmilj\xf8."}),"\n",(0,s.jsxs)(t.p,{children:["Ved behov for test fra systemleverand\xf8r ",(0,s.jsx)(t.a,{href:"https://www.skatteetaten.no/deling/kontakt/",children:"kontakt Skatteetaten"})," med informasjon om f\xf8lgende:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Systemleverand\xf8rs organisasjonsnummer"}),"\n",(0,s.jsx)(t.li,{children:"Systemleverand\xf8rs organisasjonsnavn"}),"\n",(0,s.jsx)(t.li,{children:"Systemleverand\xf8rs kontaktpersons e-postadresse (som er tilknyttet testen)"}),"\n",(0,s.jsx)(t.li,{children:"Systemleverand\xf8rs kontaktpersons mobiltelefonnummer (som er tilknyttet testen)"}),"\n",(0,s.jsx)(t.li,{children:"Virksomheten som har tilgang sitt organisasjonsnummer"}),"\n",(0,s.jsx)(t.li,{children:"Virksomheten som har tilgang sitt organisasjonsnavn"}),"\n",(0,s.jsx)(t.li,{children:"Virksomheten som har tilgang sin kontaktpersons e-postadresse (som er tilknyttet testen)"}),"\n",(0,s.jsx)(t.li,{children:"Virksomheten som har tilgang sin kontaktpersons mobiltelefonnummer (som er tilknyttet testen)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Samme informasjon m\xe5 oppgis b\xe5de for virksomheten med tilgang og systemleverand\xf8ren, siden begge virksomhetene m\xe5 leses inn i TT02 for at det skal v\xe6re mulig \xe5 gjennomf\xf8re en delegering i testmilj\xf8et. En systemleverand\xf8r som leverer til flere virksomheter, trenger ikke melde inn alle virksomhetene for test, kun den som skal utf\xf8re delegeringen i test."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Systemleverand\xf8rer som ikke har tilgang til Skatteetatens brukerst\xf8tte, skal sende en henvendelse gjennom virksomheten som har tilgang."})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Virksomheter med segmentansvarlig, skal sende en henvendelse segmentansvarlig, og ikke Skatteetaten direkte."})})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);