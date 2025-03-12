"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6071],{68975:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"anvendelsesomraader/innrapportering-tredjepartsopplysninger-kladd","title":"Innrapportering av tredjepartsopplysninger","description":"Re-etablering av Altinn-tjenester","source":"@site/docs/anvendelsesomraader/innrapportering-tredjepartsopplysninger-kladd.md","sourceDirName":"anvendelsesomraader","slug":"/anvendelsesomraader/innrapportering-tredjepartsopplysninger","permalink":"/api-dokumentasjon/anvendelsesomraader/innrapportering-tredjepartsopplysninger","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"altinn","permalink":"/api-dokumentasjon/tags/altinn"},{"inline":true,"label":"innrapportering","permalink":"/api-dokumentasjon/tags/innrapportering"},{"inline":true,"label":"tredjepartsopplysninger","permalink":"/api-dokumentasjon/tags/tredjepartsopplysninger"},{"inline":true,"label":"grunnlagsdata","permalink":"/api-dokumentasjon/tags/grunnlagsdata"}],"version":"current","frontMatter":{"title":"Innrapportering av tredjepartsopplysninger","slug":"/anvendelsesomraader/innrapportering-tredjepartsopplysninger","folder":"anvendelsesomraader","sidebar":"mydoc_sidebar","datatable":true,"tags":["altinn","innrapportering","tredjepartsopplysninger","grunnlagsdata"],"last_updated":"Sept 24, 2024","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"A-ordningen","permalink":"/api-dokumentasjon/anvendelsesomraader/aordningen"},"next":{"title":"Innrapportering av tredjepartsopplysninger","permalink":"/api-dokumentasjon/anvendelsesomraader/innrapportering-tredjepartsopplysninger"}}');var a=r(74848),i=r(28453);const s={title:"Innrapportering av tredjepartsopplysninger",slug:"/anvendelsesomraader/innrapportering-tredjepartsopplysninger",folder:"anvendelsesomraader",sidebar:"mydoc_sidebar",datatable:!0,tags:["altinn","innrapportering","tredjepartsopplysninger","grunnlagsdata"],last_updated:"Sept 24, 2024",hide_table_of_contents:!0},l=void 0,o={},d=[{value:"Re-etablering av Altinn-tjenester",id:"re-etablering-av-altinn-tjenester",level:2},{value:"Hva m\xe5 du gj\xf8re som leverand\xf8r av Sluttbrukersystem",id:"hva-m\xe5-du-gj\xf8re-som-leverand\xf8r-av-sluttbrukersystem",level:2},{value:"Nye API-er for re-etablering av Altinn-tjenester",id:"nye-api-er-for-re-etablering-av-altinn-tjenester",level:2}];function p(e){const n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"re-etablering-av-altinn-tjenester",children:"Re-etablering av Altinn-tjenester"}),"\n",(0,a.jsx)(n.p,{children:"Arbeidet med \xe5 forberede overgangen fra Altinn II til Altinn 3 p\xe5g\xe5r. I Skatteetaten har vi startet et st\xf8rre arbeid for\n\xe5 flytte v\xe5re skjema og rapporteringsl\xf8sninger fra Altinn til skatteetaten.no. Vi har tidligere gjort det samme med\nskattemeldingen og MVA-meldingen."}),"\n",(0,a.jsxs)(n.p,{children:["Se mer informasjon om re-etableringen og v\xe5r testplan\np\xe5 ",(0,a.jsx)(n.a,{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/reetableringaltinn/",children:"skatteetaten.no"})]}),"\n",(0,a.jsx)(n.h2,{id:"hva-m\xe5-du-gj\xf8re-som-leverand\xf8r-av-sluttbrukersystem",children:"Hva m\xe5 du gj\xf8re som leverand\xf8r av Sluttbrukersystem"}),"\n",(0,a.jsx)(n.p,{children:"Her er en oversikt over stegene som m\xe5 til for \xe5 kunne ta i bruk nye tjenester mot Skatteetaten"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Tilgjengelighet:"})," Verifiser at tjenesten du \xf8nsker \xe5 sette opp integrasjon mot er tilgjengelig i test. Se linker under for de enkelte tjenester som er klare i test.\nGj\xf8r deg gjerne kjent med dokumentasjonen for tjenesten f\xf8r du g\xe5r videre."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Kommunikasjon:"})," Skatteetaten har utviklere og funksjonelle ressurser p\xe5 v\xe5r ",(0,a.jsx)(n.strong,{children:"Slack"})," som kan svare p\xe5 alle sp\xf8rsm\xe5l og veilede i prosessen.\nTrykk ",(0,a.jsx)(n.a,{href:"https://join.slack.com/t/skatteetaten/shared_invite/zt-2yvnsfetg-yuDEBJkcuj5n8KSyZi9yBg",children:"her"}),' for \xe5 f\xe5 tilgang.\nVi anbefaler at du benytter en Slack-konto tilknyttet ditt arbeidssted, og at du inkluderer navnet p\xe5 ditt arbeidssted i "Display name" (endres i din profil) som for eksempel "Ola Nordmann (Skatteetaten)".']}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Systemtilgang:"})," For \xe5 kunne integrere mot v\xe5re tjenester m\xe5 du sette opp tilgang via Maskinporten med Systembruker. F\xf8lg oppskrift ",(0,a.jsx)(n.a,{href:"/api-dokumentasjon/om/systembruker",children:"her"}),".\nHer vil du beh\xf8ve informasjon om Maskinporten scope og Altinn ressurs fra dokumentasjonen for den enkelte tjenesten du skal sette opp tilgang til."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Integrasjon mot testmilj\xf8:"})," F\xf8lg dokumentasjonen for den enkelte tjenesten for \xe5 sette opp integrasjonen mot v\xe5rt testmilj\xf8. Her vil du finne teknisk spesifikasjon og link til ",(0,a.jsx)(n.strong,{children:"Swaggerhub"})," hvor du finner mer detaljert informasjon om api'et.\nV\xe5rt testmilj\xf8 krever utelukkende syntetiske data, se mer informasjon under test-fanen for den enkelte tjenesten."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Test:"})," Vi oppfordrer til \xe5 verifisere alle deler av integrasjonen i test i god til f\xf8r man benytter tjenestene i produksjon."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"nye-api-er-for-re-etablering-av-altinn-tjenester",children:"Nye API-er for re-etablering av Altinn-tjenester"}),"\n",(0,a.jsx)(n.p,{children:"F\xf8lgende API-er er tilgjengelige i test pr. n\xe5:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/api/innrapportering-aksjonaerregisteroppgave",children:"Innrapportering aksjonaerregisteroppgave API (RF-1086)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/api/innrapportering-boligsameie",children:"Innrapportering boligsameie API"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/api/innrapportering-boligselskap",children:"Innrapportering boligselskap API"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/api/innrapportering-bsu",children:"Innrapportering BSU API"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/api/innrapportering-passogstell",children:"Innrapportering pass og stell av barn API"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/api/innrapportering-gavertilfrivillige",children:"Innrapportering gaver til frivillige API"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/api/innrapportering-innskuddutlaanrenter",children:"Innrapportering innskudd_utlaan_renter API"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/api/innrapportering-tilskudd",children:"Innrapportering tilskudd API"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api-dokumentasjon/api/innrapportering-betalingernaeringsdrivende",children:"Innrapportering betalinger_naeringsdrivende API"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(96540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);