"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8279],{37706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(74848),a=n(28453);const r={title:"Test av samtykkebasert datauthenting",slug:"/test/testavsamtykke",folder:"test",sidebar:"mydoc_sidebar",datatable:!0,tags:["Test","Samtykke"],keywords:["test","samtykke"],last_updated:"Mar 14, 2023",hide_table_of_contents:!0},o=void 0,i={id:"test/testavsamtykke",title:"Test av samtykkebasert datauthenting",description:"Samtykketoken-generator for automatisert generering av samtykketoken.",source:"@site/docs/test/testavsamtykke.md",sourceDirName:"test",slug:"/test/testavsamtykke",permalink:"/api-dokumentasjon/test/testavsamtykke",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Test",permalink:"/api-dokumentasjon/tags/test"},{inline:!0,label:"Samtykke",permalink:"/api-dokumentasjon/tags/samtykke"}],version:"current",frontMatter:{title:"Test av samtykkebasert datauthenting",slug:"/test/testavsamtykke",folder:"test",sidebar:"mydoc_sidebar",datatable:!0,tags:["Test","Samtykke"],keywords:["test","samtykke"],last_updated:"Mar 14, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Tenor testdatas\xf8k",permalink:"/api-dokumentasjon/test/tenor"},next:{title:"Test fra systemleverand\xf8r",permalink:"/api-dokumentasjon/test/testfrasystemleverandor"}},k={},l=[{value:"Test av tjenester med samtykke",id:"test-av-tjenester-med-samtykke",level:2},{value:"Samtykketoken-generator",id:"samtykketoken-generator",level:2},{value:"Manuell test av samtykke",id:"manuell-test-av-samtykke",level:2}];function m(e){const t={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components},{Summary:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Summary",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:"Samtykketoken-generator for automatisert generering av samtykketoken."}),"\n",(0,s.jsx)(t.h2,{id:"test-av-tjenester-med-samtykke",children:"Test av tjenester med samtykke"}),"\n",(0,s.jsx)(t.p,{children:"Flere av Skatteetatens tjenester krever samtykke for \xe5 kunne utlevere data til eksterne virksomheter:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"SBL-tjenestene og Krav og betalinger API krever samtykke fra skatteyter."}),"\n",(0,s.jsx)(t.li,{children:"Ebevis-tjenester krever samtykke fra virksomhet."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For \xe5 teste disse tjenestene har virksomheter tidligere m\xe5ttet logge inn i Altinn og sette samtykke for personer og enheter f\xf8r test av API-ene. Dette manuelle steget kan n\xe5 unng\xe5s ved \xe5 ta i bruk Altinn sin Samtykketoken-generator."}),"\n",(0,s.jsx)(t.h2,{id:"samtykketoken-generator",children:"Samtykketoken-generator"}),"\n",(0,s.jsx)(t.p,{children:"Altinn har tilgjengeliggjort en l\xf8sning som kan generere samtykketoken, slik at man kan teste Skatteetatens API-er uten \xe5 m\xe5tte logge inn i Altinn f\xf8rst."}),"\n",(0,s.jsx)(t.p,{children:"L\xf8sningen er en enkel webapp som krever Maskinporten-autentisering. Denne kan en kalles med de parameterne som en \xf8nsker for samtykketokenet, f.eks. tjenestekoder, inntekts\xe5r, samt offeredby/coveredby/handledby."}),"\n",(0,s.jsx)(t.p,{children:"Mer info hos Altinn:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Generelt om tokengeneratoren: ",(0,s.jsx)(t.a,{href:"https://altinn.github.io/docs/api/rest/kom-i-gang/tokengenerator/",children:"Test av samtykke"})]}),"\n",(0,s.jsxs)(t.li,{children:["Teknisk informasjon om bruk: ",(0,s.jsx)(t.a,{href:"https://github.com/Altinn/AltinnTestTools#consent-tokens",children:"Altinn test tools"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For \xe5 ta i bruk l\xf8sningen m\xe5 virksomheten som skal teste f\xe5 tilgang til et spesifikt scope. Se Altinn sin dokumentasjon om scopenavn og hvordan f\xe5 tilgang til det."}),"\n",(0,s.jsx)(t.h2,{id:"manuell-test-av-samtykke",children:"Manuell test av samtykke"}),"\n",(0,s.jsx)(t.p,{children:"Digdir har bekreftet at Altinns TT02 milj\xf8 har lest inn syntetisk Folkeregister, og i kombinasjon med TestID i ID-porten vil du kunne logge inn og gi samtykke med hvilken som helst test-person p\xe5 niv\xe5 4."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);