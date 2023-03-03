"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?r.createElement(f,o(o({ref:t},k),{},{components:n})):r.createElement(f,o({ref:t},k))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"Feil p\xe5 Inntektsmottaker API",categories:"nyhet",permalink:"/feil-inntektsmottaker-api-16032022",tags:["news"],date:"2022-03-16 14:20:00 +0100"},o=void 0,i={unversionedId:"maintenance/feed/2022-03-16-14-20-feil-inntektsmottaker",id:"maintenance/feed/2022-03-16-14-20-feil-inntektsmottaker",title:"Feil p\xe5 Inntektsmottaker API",description:"Det er avdekket en feil hos Skatteetaten som har for\xe5rsaket at enkelte felter har manglet i Inntektsmottaker API. Dette har f\xf8rt til at konsumentene ikke har f\xe5tt alle inntektene de skal ha ved oppslag mot tjenesten. Feilen oppstod 02.mars kl 0950.",source:"@site/docs/maintenance/feed/2022-03-16-14-20-feil-inntektsmottaker.md",sourceDirName:"maintenance/feed",slug:"/maintenance/feed/2022-03-16-14-20-feil-inntektsmottaker",permalink:"/api-dokumentasjon/maintenance/feed/2022-03-16-14-20-feil-inntektsmottaker",draft:!1,editUrl:"https://github.com/Skatteetaten/api-dokumentasjon/tree/gh-pages/docs/maintenance/feed/2022-03-16-14-20-feil-inntektsmottaker.md",tags:[{label:"news",permalink:"/api-dokumentasjon/tags/news"}],version:"current",frontMatter:{title:"Feil p\xe5 Inntektsmottaker API",categories:"nyhet",permalink:"/feil-inntektsmottaker-api-16032022",tags:["news"],date:"2022-03-16 14:20:00 +0100"}},s={},p=[],k={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Det er avdekket en feil hos Skatteetaten som har for\xe5rsaket at enkelte felter har manglet i Inntektsmottaker API. Dette har f\xf8rt til at konsumentene ikke har f\xe5tt alle inntektene de skal ha ved oppslag mot tjenesten. Feilen oppstod 02.mars kl 09:00 og ble rettet tirsdag 15.mars kl 19:50."),(0,a.kt)("p",null,"F\xf8lgende felter har manglet i denne perioden:"),(0,a.kt)("p",null,"L\xf8nnsbeskrivelse:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"honorarAkkordProsentProvisjon"),(0,a.kt)("li",{parentName:"ul"},"yrkebilTjenestligbehovKilometer"),(0,a.kt)("li",{parentName:"ul"},"yrkebilTjenestligbehovListepris")),(0,a.kt)("p",null,"PensjonEllerTrygdeBeskrivelse:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"engangsutbetalingInnskuddspensjon"),(0,a.kt)("li",{parentName:"ul"},"ufoereytelseEtteroppgjoerFraAndreEnnFolketrygden")),(0,a.kt)("p",null,"YtelseFraOffentligeBeskrivelse:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ektefelletilleggUfoeretrygd"),(0,a.kt)("li",{parentName:"ul"},"ufoereytelseEtteroppgjoer")),(0,a.kt)("p",null,"Vi beklager problemene dette medf\xf8rer."))}m.isMDXComponent=!0}}]);