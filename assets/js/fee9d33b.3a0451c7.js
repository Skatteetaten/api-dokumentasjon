"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[9470],{87640:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"om/versjoner","title":"Versjoner","description":"Skatteetatens strategi for versjonering.","source":"@site/docs/om/versjoner.md","sourceDirName":"om","slug":"/om/versjoner","permalink":"/api-dokumentasjon/om/versjoner","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"Versjonering","permalink":"/api-dokumentasjon/tags/versjonering"}],"version":"current","frontMatter":{"title":"Versjoner","slug":"/om/versjoner","folder":"om","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","Versjonering"],"keywords":["API","versjoner"],"last_updated":"Nov 12, 2024","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Varsler","permalink":"/api-dokumentasjon/om/varsler"},"next":{"title":"Aksjebeholdning API","permalink":"/api-dokumentasjon/api/aksjebeholdning"}}');var s=n(74848),i=n(28453);const o={title:"Versjoner",slug:"/om/versjoner",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Versjonering"],keywords:["API","versjoner"],last_updated:"Nov 12, 2024",hide_table_of_contents:!0},a=void 0,l={},d=[{value:"Versjonering av API-er",id:"versjonering-av-api-er",level:2},{value:"Bakoverkompatible endringer",id:"bakoverkompatible-endringer",level:2},{value:"Endring i felt/koder",id:"endring-i-feltkoder",level:2}];function k(e){const r={h2:"h2",p:"p",...(0,i.R)(),...e.components},{Summary:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Summary",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:"Skatteetatens strategi for versjonering."}),"\n",(0,s.jsx)(r.p,{children:"Skatteetatens API-er er designet for \xe5 kunne st\xf8tte flere versjoner samtidig, men i praksis er det maksimalt to samtidige versjoner.\nTekniske dataformat endrer seg sjelden, og n\xe5r det skjer f\xf8lges denne strategien for versjonering."}),"\n",(0,s.jsx)(r.h2,{id:"versjonering-av-api-er",children:"Versjonering av API-er"}),"\n",(0,s.jsx)(r.p,{children:"Skatteetaten etterstreber at API-ene skal v\xe6re stabile, og responsen skal til v\xe6re i overenstemmelse med kontrakten for en bestemt versjon av API-et. Skatteetatens API-er er designet for \xe5 kunne st\xf8tte flere versjoner samtidig. I praksis vil det v\xe6re maksimalt to versjoner tilgjengelig samtidig, slik at virksomhetene har rimelig tid til \xe5 g\xe5 over til ny versjon. Merk at st\xf8tte for gamle versjoner etter hvert vil tas vekk."}),"\n",(0,s.jsx)(r.h2,{id:"bakoverkompatible-endringer",children:"Bakoverkompatible endringer"}),"\n",(0,s.jsx)(r.p,{children:"Nye felt, endring av rekkef\xf8lge i respons eller nye valgfrie felt i input vil normalt ikke f\xf8re til at det etableres en ny versjon og vil ikke n\xf8dvendigvis varsles p\xe5 forh\xe5nd. Det forventes at virksomheter bygger tolerant kode som t\xe5ler slike endringer. Av denne grunn anbefaler vi ikke \xe5 validere responsen mot XSDen, siden dette kan gi valideringsfeil ved ikke-varslede endringer."}),"\n",(0,s.jsx)(r.p,{children:"Mer informasjon om type endringer og varslingsfrister finnes i vilk\xe5rene v\xe5re."}),"\n",(0,s.jsx)(r.h2,{id:"endring-i-feltkoder",children:"Endring i felt/koder"}),"\n",(0,s.jsx)(r.p,{children:"Felt/koder som brukes i data endrer seg, gjerne fra \xe5r til \xe5r, og dette skyldes endringer i skattelovgivning og skatteprosess."}),"\n",(0,s.jsx)(r.p,{children:"Flere datasett har informasjonsmodeller som forklarer hvilke koder som brukes i forskjellige felt, dette er dokumentert pr. API. Endringer i informasjonsmodeller kan f\xf8re til at det oppst\xe5r feil hos virksomheten selv om den tekniske integrasjonen fungerer helt fint."}),"\n",(0,s.jsx)(r.p,{children:"Det er viktig \xe5 sette seg inn i informasjonsmodell-endringer hvert gang et nytt inntekts\xe5r tilgjengeliggj\xf8res, eller hvis andre endringer i informasjonsmodell annonseres."})]})}function g(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(96540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);