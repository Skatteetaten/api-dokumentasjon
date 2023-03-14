"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,m=k(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,y=u["".concat(i,".").concat(d)]||u[d]||p[d]||s;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var k={};for(var i in t)hasOwnProperty.call(t,i)&&(k[i]=t[i]);k.originalType=e,k[u]="string"==typeof e?e:a,o[1]=k;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>k,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={title:"Test av samtykkebasert datauthenting",slug:"/testavsamtykke",folder:"test",sidebar:"mydoc_sidebar",datatable:!0,tags:["Samtykke"],keywords:["testdata"],last_updated:"Des 6, 2022",hide_table_of_contents:!0},o=void 0,k={unversionedId:"test/testavsamtykke",id:"test/testavsamtykke",title:"Test av samtykkebasert datauthenting",description:"Samtykketoken-generator for automatisert generering av samtykketoken.",source:"@site/docs/test/testavsamtykke.md",sourceDirName:"test",slug:"/testavsamtykke",permalink:"/api-dokumentasjon/testavsamtykke",draft:!1,tags:[{label:"Samtykke",permalink:"/api-dokumentasjon/tags/samtykke"}],version:"current",frontMatter:{title:"Test av samtykkebasert datauthenting",slug:"/testavsamtykke",folder:"test",sidebar:"mydoc_sidebar",datatable:!0,tags:["Samtykke"],keywords:["testdata"],last_updated:"Des 6, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Tenor testdatas\xf8k",permalink:"/api-dokumentasjon/tenor"},next:{title:"Test fra systemleverand\xf8r",permalink:"/api-dokumentasjon/testfrasystemleverandor"}},i={},l=[{value:"Test av tjenester med samtykke",id:"test-av-tjenester-med-samtykke",level:2},{value:"Samtykketoken-generator",id:"samtykketoken-generator",level:2},{value:"Manuell test av samtykke",id:"manuell-test-av-samtykke",level:2}],m={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Samtykketoken-generator for automatisert generering av samtykketoken."),(0,a.kt)("h2",{id:"test-av-tjenester-med-samtykke"},"Test av tjenester med samtykke"),(0,a.kt)("p",null,"Flere av Skatteetatens tjenester krever samtykke for \xe5 kunne utlevere data til eksterne virksomheter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SBL-tjenestene og Krav og betalinger API krever samtykke fra skatteyter."),(0,a.kt)("li",{parentName:"ul"},"Ebevis-tjenester krever samtykke fra virksomhet.")),(0,a.kt)("p",null,"For \xe5 teste disse tjenestene har virksomheter tidligere m\xe5ttet logge inn i Altinn og sette samtykke for personer og enheter f\xf8r test av API'ene. Dette manuelle steget kan n\xe5 unng\xe5s ved \xe5 ta i bruk Altinn sin Samtykketoken-generator."),(0,a.kt)("h2",{id:"samtykketoken-generator"},"Samtykketoken-generator"),(0,a.kt)("p",null,"Altinn har tilgjengeliggjort en l\xf8sning som kan generere samtykketoken, slik at man kan teste Skatteetatens API'er uten \xe5 m\xe5tte logge inn i Altinn f\xf8rst."),(0,a.kt)("p",null,"L\xf8sningen er en enkel webapp som krever Maskinporten-autentisering. Denne kan en kalles med de parameterne som en \xf8nsker for samtykketokenet, f.eks. tjenestekoder, inntekts\xe5r, samt offeredby/coveredby/handledby."),(0,a.kt)("p",null,"Mer info hos Altinn:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generelt om tokengeneratoren: ",(0,a.kt)("a",{parentName:"li",href:"https://altinn.github.io/docs/api/rest/kom-i-gang/tokengenerator/"},"Test av samtykke")),(0,a.kt)("li",{parentName:"ul"},"Teknisk informasjon om bruk: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Altinn/AltinnTestTools#consent-tokens"},"Altinn test tools"))),(0,a.kt)("p",null,"For \xe5 ta i bruk l\xf8sningen m\xe5 virksomheten som skal teste f\xe5 tilgang til et spesifikt scope. Se Altinn sin dokumentasjon om scopenavn og hvordan f\xe5 tilgang til det."),(0,a.kt)("h2",{id:"manuell-test-av-samtykke"},"Manuell test av samtykke"),(0,a.kt)("p",null,"Digdir har bekreftet at Altinns TT02 milj\xf8 har lest inn syntetisk Folkeregister, og i kombinasjon med TestID i ID-porten vil du kunne logge inn og gi samtykke med hvilken som helst test-person p\xe5 niv\xe5 4."))}p.isMDXComponent=!0}}]);