"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=m(n),p=s,u=k["".concat(o,".").concat(p)]||k[p]||g[p]||a;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[k]="string"==typeof e?e:s,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(7462),s=(n(7294),n(3905));const a={title:"Test fra systemleverand\xf8r",slug:"/testfrasystemleverandor",folder:"test",sidebar:"mydoc_sidebar",datatable:!0,tags:["API data"],keywords:["test"],last_updated:"Des 6, 2022",hide_table_of_contents:!0},i=void 0,l={unversionedId:"test/testfrasystemleverandor",id:"test/testfrasystemleverandor",title:"Test fra systemleverand\xf8r",description:"Test fra systemleverand\xf8r krever delegering i Test.",source:"@site/docs/test/testfrasystemleverandor.md",sourceDirName:"test",slug:"/testfrasystemleverandor",permalink:"/api-dokumentasjon/testfrasystemleverandor",draft:!1,tags:[{label:"API data",permalink:"/api-dokumentasjon/tags/api-data"}],version:"current",frontMatter:{title:"Test fra systemleverand\xf8r",slug:"/testfrasystemleverandor",folder:"test",sidebar:"mydoc_sidebar",datatable:!0,tags:["API data"],keywords:["test"],last_updated:"Des 6, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Test av samtykkebasert datauthenting",permalink:"/api-dokumentasjon/testavsamtykke"},next:{title:"Testmilj\xf8 og testdata",permalink:"/api-dokumentasjon/testmiljo"}},o={},m=[{value:"Maskinporten",id:"maskinporten",level:2},{value:"Delegering i Test",id:"delegering-i-test",level:2},{value:"Innlesing i Altinns testmilj\xf8 TT02",id:"innlesing-i-altinns-testmilj\xf8-tt02",level:2}],d={toc:m},k="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(k,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("summary",null,"Test fra systemleverand\xf8r krever delegering i Test."),(0,s.kt)("h2",{id:"maskinporten"},"Maskinporten"),(0,s.kt)("p",null,"Maskinporten skal ogs\xe5 benyttes under test fra systemleverand\xf8r, og krever test-sertifikat. For test av Skatteetatens og Folkeregisterets delingstjenester anbefales for tiden at testsertifikat utstedes p\xe5 virksomhetens ekte organisajonsnummer."),(0,s.kt)("p",null,"Dersom det i stedet benyttes syntetisk organisasjonsnummer i test-sertifikatet, v\xe6r klar over at tilrettelegging for test kan ta noe lengre tid."),(0,s.kt)("p",null,"Se egen dokumentasjon om ",(0,s.kt)("a",{parentName:"p",href:"/api-dokumentasjon/sikkerhet"},"bruk av Maskinporten"),"."),(0,s.kt)("h2",{id:"delegering-i-test"},"Delegering i Test"),(0,s.kt)("p",null,"Systemleverand\xf8rer som har behov for \xe5 teste \xe5 hente data fra Skatteetaten via en eller flere delingstjenester, p\xe5 vegne av et sett med kunder, m\xe5 f\xe5 f\xe5 delegert rettigheter i Altinns testmilj\xf8 TT02, p\xe5 samme m\xe5te som de vil f\xe5 delegert rettigheter i Produksjon."),(0,s.kt)("p",null,"Digdir har en n\xe6rmere beskrivelse av hvordan delegere, se ",(0,s.kt)("a",{parentName:"p",href:"https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-via-altinn-autorisasjon"},"Digdir sin side om delegering via Altinn autorisasjon")),(0,s.kt)("h2",{id:"innlesing-i-altinns-testmilj\xf8-tt02"},"Innlesing i Altinns testmilj\xf8 TT02"),(0,s.kt)("p",null,"Skattetaten vil i dialog med Altinn s\xf8rge for at virksomhetene blir lest inn i Altinn TT02 slik at det er mulig \xe5 gjennomf\xf8re delegeringen. N\xe5r det er gjort vil vi gi tilbakemelding om hvilket f\xf8dselsnummer som kan benyttes for innlogging i TT02."),(0,s.kt)("p",null,"For \xe5 delegere i test trengs f\xf8lgende:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Virksomheten med rettigheter til tjenesten som skal testes m\xe5 v\xe6re tilgjengelig i TT02."),(0,s.kt)("li",{parentName:"ol"},"Virksomheten m\xe5 ha knyttet til seg en syntetisk person som det er mulig \xe5 logge inn i TT02 med."),(0,s.kt)("li",{parentName:"ol"},"Systemleverand\xf8ren som skal f\xe5 delegert rettigheter for test m\xe5 v\xe6re tilgjengelig i TT02."),(0,s.kt)("li",{parentName:"ol"},"Virksomheten med rettigheter m\xe5 s\xe5 delegere rettigheter til systemleverand\xf8ren i TT02.")),(0,s.kt)("p",null,"Altinns testmilj\xf8 TT02 er et testmilj\xf8 med hovedsaklig syntetiske testdata, og innlesing av ekte virksomheter gj\xf8res kun ved behov. V\xe6r oppmerksom p\xe5 at det da leses inn produksjonsdata om virksomheten i et testmilj\xf8."),(0,s.kt)("p",null,"Ved behov for test fra systemleverand\xf8r ",(0,s.kt)("a",{parentName:"p",href:"https://www.skatteetaten.no/deling/kontakt/"},"kontakt Skatteetaten")," med informasjon om f\xf8lgende:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Systemleverand\xf8rs organisasjonsnummer"),(0,s.kt)("li",{parentName:"ul"},"Systemleverand\xf8rs organisasjonsnavn"),(0,s.kt)("li",{parentName:"ul"},"Systemleverand\xf8rs kontaktpersons e-postadresse (som er tilknyttet testen)"),(0,s.kt)("li",{parentName:"ul"},"Systemleverand\xf8rs kontaktpersons mobiltelefonnummer (som er tilknyttet testen)"),(0,s.kt)("li",{parentName:"ul"},"Virksomheten som har tilgang sitt organisasjonsnummer"),(0,s.kt)("li",{parentName:"ul"},"Virksomheten som har tilgang sitt organisasjonsnavn"),(0,s.kt)("li",{parentName:"ul"},"Virksomheten som har tilgang sin kontaktpersons e-postadresse (som er tilknyttet testen)"),(0,s.kt)("li",{parentName:"ul"},"Virksomheten som har tilgang sin kontaktpersons mobiltelefonnummer (som er tilknyttet testen)")),(0,s.kt)("p",null,"Samme informasjon m\xe5 oppgis b\xe5de for virksomheten med tilgang og systemleverand\xf8ren, siden begge virksomhetene m\xe5 leses inn i TT02 for at det skal v\xe6re mulig \xe5 gjennomf\xf8re en delegering i testmilj\xf8et. En systemleverand\xf8r som leverer til flere virksomheter, trenger ikke melde inn alle virksomhetene for test, kun den som skal utf\xf8re delegeringen i test."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Systemleverand\xf8rer som ikke har tilgang til Skatteetatens brukerst\xf8tte, skal sende en henvendelse gjennom virksomheten som har tilgang.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Virksomheter med segmentansvarlig, skal sende en henvendelse segmentansvarlig, og ikke Skatteetaten direkte.")))}g.isMDXComponent=!0}}]);