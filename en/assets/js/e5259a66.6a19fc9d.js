"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,o(o({ref:t},k),{},{components:n})):r.createElement(d,o({ref:t},k))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const a={title:"Teknisk spesifikasjon",slug:"/om/tekniskspesifikasjon",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["API","dokumentasjon"],last_updated:"Mar 27, 2023",hide_table_of_contents:!0},o=void 0,i={unversionedId:"om/tekniskspesifikasjon",id:"om/tekniskspesifikasjon",title:"Teknisk spesifikasjon",description:"Skatteetaten benytter Open API spesifikasjon og Swaggerhub for teknisk spesifikasjon av api'er.",source:"@site/docs/om/tekniskspesifikasjon.md",sourceDirName:"om",slug:"/om/tekniskspesifikasjon",permalink:"/api-dokumentasjon/en/om/tekniskspesifikasjon",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"}],version:"current",frontMatter:{title:"Teknisk spesifikasjon",slug:"/om/tekniskspesifikasjon",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["API","dokumentasjon"],last_updated:"Mar 27, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Skjerming av data",permalink:"/api-dokumentasjon/en/om/skjerming"},next:{title:"Versjoner",permalink:"/api-dokumentasjon/en/om/versjoner"}},l={},p=[{value:"Open API spesifikasjon",id:"open-api-spesifikasjon",level:2},{value:"SwaggerHub",id:"swaggerhub",level:2}],k={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("summary",null,"Skatteetaten benytter Open API spesifikasjon og Swaggerhub for teknisk spesifikasjon av api'er."),(0,s.kt)("h2",{id:"open-api-spesifikasjon"},"Open API spesifikasjon"),(0,s.kt)("p",null,'For \xe5 m\xf8te det stadig \xf8kende behovet for nye delingstjenester og ha mer effektiv forvaltning av delingstjenester, har Skatteetaten migrert alle delingstjenestene over p\xe5 Open API spesifikasjon (tidligere XSD). Da kan vi automatisere utviklingsprosessen mer slik at funksjonell spesifikasjon, teknisk l\xf8sning og dokumentasjon alltid skal v\xe6re i synk. Basert p\xe5 prinsippet om "kontrakt f\xf8rst" kan vi ogs\xe5 autogenerere kode for delingstjenestene.'),(0,s.kt)("p",null,"Dette vil ogs\xe5 v\xe6re en forbedring for brukeropplevelse for konsumentene, som kan benytte Open API spesifikasjonene for \xe5 f\xe5 automatisert opprettelse av tjenester mot Skatteetaten."),(0,s.kt)("p",null,"I Open API spesifikasjonen ligger url\u2019er til tjenesten, beskrivelsen av parameterne, endepunkter og respons."),(0,s.kt)("h2",{id:"swaggerhub"},"SwaggerHub"),(0,s.kt)("p",null,"N\xe5r tjenestene er utviklet basert p\xe5 Open API, kan vi eksponere dette ut til konsumentene, og vi benytter SwaggerHub for \xe5 publisere Open API spesifikasjonene."),(0,s.kt)("p",null,"Lenke til de ulike delingstjenestenes Open API spesifikasjoner ligger i dokumentasjonen for hver enkelt delingstjeneste, men p\xe5 Swaggerhub finnes ogs\xe5 en ",(0,s.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/organizations/Skatteetaten_Deling"},"oversikt over alle Skatteetatens api'er"),"."),(0,s.kt)("p",null,"Implementasjonene m\xe5 ta hensyn til at det ikke kommer verdier for ikke-obligatoriske felter for alle enkelttilfeller."))}f.isMDXComponent=!0}}]);