"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[7755],{1522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"om/systembruker","title":"Systembruker","description":"Bruk av systembruker for Sluttbrukersystemer.","source":"@site/docs/om/systembruker.md","sourceDirName":"om","slug":"/om/systembruker","permalink":"/api-dokumentasjon/en/om/systembruker","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Systembruker","permalink":"/api-dokumentasjon/en/tags/systembruker"},{"inline":true,"label":"Systemtilgang","permalink":"/api-dokumentasjon/en/tags/systemtilgang"},{"inline":true,"label":"Sikkerhet","permalink":"/api-dokumentasjon/en/tags/sikkerhet"}],"version":"current","frontMatter":{"title":"Systembruker","slug":"/om/systembruker","folder":"om","sidebar":"mydoc_sidebar","datatable":true,"tags":["Systembruker","Systemtilgang","Sikkerhet"],"keywords":["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],"last_updated":"Feb 28, 2025","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Skjerming av data","permalink":"/api-dokumentasjon/en/om/skjerming"},"next":{"title":"Teknisk spesifikasjon","permalink":"/api-dokumentasjon/en/om/tekniskspesifikasjon"}}');var r=t(74848),i=t(28453);const o={title:"Systembruker",slug:"/om/systembruker",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["Systembruker","Systemtilgang","Sikkerhet"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Feb 28, 2025",hide_table_of_contents:!0},a=void 0,l={},d=[{value:"Steg for steg",id:"steg-for-steg",level:2},{value:"Nyttige ressurser i denne prosessen:",id:"nyttige-ressurser-i-denne-prosessen",level:2}];function m(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Summary:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Summary",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:" Bruk av systembruker for Sluttbrukersystemer."}),"\n",(0,r.jsx)(n.p,{children:"P\xe5 denne siden sammenfattes stegene som m\xe5 til for \xe5 komme i gang med systembruker."}),"\n",(0,r.jsx)(n.h2,{id:"steg-for-steg",children:"Steg for steg"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Maskinporten onboarding:"})," For \xe5 bruke b\xe5de Skatteetatens og Digdirs API trenger du tilgang til Maskinporten for autentiseringen. Digdir har laget en side som beskriver hva som m\xe5 til for \xe5 ",(0,r.jsx)(n.a,{href:"https://samarbeid.digdir.no/altinn/kom-i-gang-i-testmiljoet-tt02/2868",children:"komme i gang i test"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"API-tilganger"}),": S\xe5 trenger du tilgang til API (scopes) b\xe5de hos Skatteetaten og Digdir:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Skatteetaten m\xe5 gi tilgang til v\xe5rt API f.eks. Krav og betalinger eller Innrapportering Boligselskap, og du kan skaffe deg tilgang ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/en/",children:"her"}),". Du finner informasjon om scope det skal bes om tilgang til i dokumentasjonen for det enkelte API."]}),"\n",(0,r.jsxs)(n.li,{children:["Digdir(inkl Altinn) m\xe5 gi tilgang til sine API. Det m\xe5 bestilles av ",(0,r.jsx)(n.a,{href:"https://altinn.studio/contact",children:"dem"}),". S\xf8rg for \xe5 bestille f\xf8lgende tilganger:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"altinn:authentication/systemregister.write"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"altinn:authentication/systemuser.request.read"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"altinn:authentication/systemuser.request.write"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"digdir:dialogporten"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Maskinporten klient:"})," N\xe5r du har f\xe5tt tilgang til scopene, m\xe5 det lages en Maskinporten-klient (ogs\xe5 kjent som ",(0,r.jsx)(n.em,{children:"Integrasjon"})," i Digdirs beskrivelser) \u2013 du kan opprette denne enten i Digdirs ",(0,r.jsx)(n.a,{href:"https://sjolvbetjening.test.samarbeid.digdir.no/auth/login",children:"Samarbeidsportal"}),", ",(0,r.jsx)(n.a,{href:"https://onboarding.maskinporten.no/",children:"Forenklet onboarding"})," (se punkt 1) eller ved bruk av API. Maskinporten-klienten du har satt opp, m\xe5 f\xe5 tildelt scopene ovenfor og kan deretter benyttes for \xe5 f\xe5 utstedt token/autentiseringsbevis."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Registrere system i systemregisteret:"})," For \xe5 kunne benytte sluttbrukersystemet mot Skatteetatens API m\xe5 det f\xf8rst registreres i Digdirs systemregister. Dette kan gj\xf8res via ",(0,r.jsx)(n.a,{href:"https://docs.altinn.studio/nb/authentication/guides/systemauthentication-for-systemproviders/#registrere-system",children:"API"}),". Systemet m\xe5 knyttes til Maskinporten-klienten (client id) i punkt 3. Hvilke(n) systemtilgang(er), ogs\xe5 kjent som tilgangspakke (rights), som skal oppgis, er beskrevet i API-dokumentasjon hos Skatteetaten."]}),"\n",(0,r.jsx)(n.p,{children:"Eksempel p\xe5 registrering:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'   {\n    "id": "974761076_skatt_demo_system",\n    "vendor": {\n        "ID": "0192:974761076"\n    },\n    "name": {\n        "nb": "Skatteetatens Test SBS",\n    },\n    "description": {\n        "nb": "En beskrivelse av systemet",\n    },\n    "rights": [\n        {\n            "resource": [\n                {\n                    "id": "urn:altinn:resource",\n                    "value": "ske-innrapportering-boligselskap"\n                }\n            ]\n        }\n    ],\n    "clientId": [\n        "e6c868ef-d9d6-4847-ba25-409bbd040540" \n    ],\n    "isVisible": true,\n    "allowedRedirectUrls": []\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Kunden m\xe5 gi systemet tilgang:"})," Du kan n\xe5 be kunden om \xe5 opprette en systemtilgang gjennom \xe5 lage en ",(0,r.jsx)(n.a,{href:"https://docs.altinn.studio/nb/authentication/guides/systemauthentication-for-systemproviders/#sende-foresp%C3%B8rsel-om-opprettelse-av-systembruker-til-virksomhet",children:"tilgangsforesp\xf8rsel"}),". Du kan se skjermbilde av hvordan dette ser ut for kunden nederst p\xe5 siden."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Eksempel p\xe5 registrering:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "externalRef": "min_ref",\n  "systemId": "974761076_skatt_demo_system",\n  "partyOrgNo": "57623423",\n  "rights": [\n    {\n      "resource": [\n        {\n          "value": "ske-innrapportering-boligselskap",  \n          "id": "urn:altinn:resource"\n        }\n      ]\n    }\n  ],\n  "redirectUrl": "https://skatteetaten.no/sbs"\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Maskinporten autentisering:"})," N\xe5r kunden har opprettet en systemtilgang til deg som systemleverand\xf8r, kan du kan du f\xe5 utstedt et ",(0,r.jsx)(n.a,{href:"https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument",children:"Maskinporten-token"})," med systembruker gjennom klienten som ble opprettet i punkt 3. Token m\xe5 inneholde Skatteetatens scope og systembrukerinformasjon."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Eksempel p\xe5 et slikt token (dekodet vha. ",(0,r.jsx)(n.a,{href:"https://jwt.io/",children:"jwt.io"})," ) - ",(0,r.jsx)(n.em,{children:"Token skal sendes i sin enkodete form - utpakket her for lesbarhet."})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "authorization_details": [\n    {\n      "type": "urn:altinn:systemuser",\n      "systemuser_org": {\n        "authority": "iso6523-actorid-upis",\n        "ID": "0192:313367002"\n      },\n      "systemuser_id": [\n        "33a0911a-5459-456f-bc57-3d37ef9a016c"\n      ],\n      "system_id": "974761076_skatt_demo_system"\n    }\n  ],\n  "scope": "skatteetaten:innrapporteringboligselskap",\n  "iss": "https://test.maskinporten.no/",\n  "client_amr": "virksomhetssertifikat",\n  "token_type": "Bearer",\n  "exp": 1740737667,\n  "iat": 1740737547,\n  "client_id": "e6c868ef-d9d6-4847-ba25-409bbd040540",\n  "jti": "6vc-gdzU3lC7XkBlR9WLxsyB8QKBwBk_FhwmdsL_6BE",\n  "consumer": {\n    "authority": "iso6523-actorid-upis",\n    "ID": "0192:974761076"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bruke Skatteetatens API:"})," N\xe5r dette er gjort, kan du kalle Skatteeatens API med tokenet fra punkt 6. i ",(0,r.jsx)(n.code,{children:"Authorization"}),"-headeren. Merk at et Maskinporten kan gjenbrukes over utl\xf8pstiden (som oftest 2 min),"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"nyttige-ressurser-i-denne-prosessen",children:"Nyttige ressurser i denne prosessen:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://samarbeid.digdir.no/digital-postkasse/kontakt-oss/83",children:"Digdirs service desk"}),": - for sp\xf8rsm\xe5l og feilmeldinger knyttet til Maskinporten, IdPorten m.m."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://altinn.studio/contact",children:"Altinn service desk"}),": - for sp\xf8rsm\xe5l og feilmeldinger knyttet til Altinn autorisasjon, Dialogporten, Systemregister m.m."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.altinn.studio/authentication/systemauthentication/",children:"Systembruker for virksomheter"})," - overordnet beskrivelse av Systembruker"]}),"\n"]})]})}function k(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);