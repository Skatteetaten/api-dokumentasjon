"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[7166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),k=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=k(e.components);return r.createElement(g.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=k(n),o=a,u=m["".concat(g,".").concat(o)]||m[o]||s[o]||l;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=o;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},32191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var r=n(87462),a=(n(67294),n(3905));const l={title:"\xc5rsrevisjon \u2013 Endring i Inntekt API fra 2024",tags:["nyhet","inntekt"],date:new Date("2023-12-15T09:30:00.000Z")},i=void 0,p={permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2023/12/15/aarsrevisjon-inntekt-2024",source:"@site/nyheter-og-driftsvarsler/2023-12-15-aarsrevisjon-inntekt-2024.md",title:"\xc5rsrevisjon \u2013 Endring i Inntekt API fra 2024",description:"Som f\xf8lge av endring i innrapportering fra NAV til A-ordningen fra 2024 vil det tilkomme flere nye inntektsbeskrivelser i Inntekt API fra 2024.",date:"2023-12-15T09:30:00.000Z",formattedDate:"15. desember 2023",tags:[{label:"nyhet",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/tags/nyhet"},{label:"inntekt",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/tags/inntekt"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"\xc5rsrevisjon \u2013 Endring i Inntekt API fra 2024",tags:["nyhet","inntekt"],date:"2023-12-15T09:30:00.000Z"},prevItem:{title:"Nedetid i Restanser API er i gang",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2024/01/02/driftsvarsel"},nextItem:{title:"Nedetid i Restanser API og Krav og betalinger API",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2023/12/13/driftsvarsel"}},g={authorsImageUrls:[]},k=[{value:"Ytelser fra offentlige",id:"ytelser-fra-offentlige",level:2},{value:"Pensjon eller trygd",id:"pensjon-eller-trygd",level:2},{value:"N\xe6ring",id:"n\xe6ring",level:2}],d={toc:k},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Som f\xf8lge av endring i innrapportering fra NAV til A-ordningen fra 2024 vil det tilkomme flere nye inntektsbeskrivelser i Inntekt API fra 2024."),(0,a.kt)("p",null,"NAV innrapporterer fra nytt\xe5r mer detaljert for flere ytelser. Blant annet skilles feriepenger ut i egne inntektsbeskrivelser for disse ytelsene, og det blir egen innrapportering for flere ytelser som tidligere har blitt innrapportert samlet som sykepenger. "),(0,a.kt)("p",null,"Eksisterende felter videref\xf8res fratrukken den delen av innholdet som er utskilt i egne felt. Vi legger derfor til grunn at rettighetspakker som allerede inneholder eksisterende felt utvides med nye felter i henhold til tabellene nedenfor."),(0,a.kt)("p",null,"Frist for innrapportering for januar er 5. februar, og nye inntektsbeskrivelser vil da v\xe6re tilgjengelig."),(0,a.kt)("h2",{id:"ytelser-fra-offentlige"},"Ytelser fra offentlige"),(0,a.kt)("p",null,"Feriepenger p\xe5 ytelser skal innrapporteres p\xe5 egne inntektsbeskrivelser. Sykepenger splittes og innrapporteres hver for seg i egne inntektsbeskrivelser."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ny YtelseFraOffentligeBeskrivelse"),(0,a.kt)("th",{parentName:"tr",align:null},"Har inng\xe5tt i"),(0,a.kt)("th",{parentName:"tr",align:null},"SBL"),(0,a.kt)("th",{parentName:"tr",align:null},"OTP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ferietilleggDagpengerTilFiskerSomBareHarHyre"),(0,a.kt)("td",{parentName:"tr",align:null},"dagpengerTilFiskerSomBareHarHyre"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ferietilleggDagpengerVedArbeidsloeshet"),(0,a.kt)("td",{parentName:"tr",align:null},"dagpengerVedArbeidsloeshet"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"feriepengerForeldrepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"foreldrepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"omstillingsstoenad"),(0,a.kt)("td",{parentName:"tr",align:null},"overgangsstoenadTilGjenlevendeEktefelle (pensjonEllerTrygd)"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"feriepengerSvangerskapspenger"),(0,a.kt)("td",{parentName:"tr",align:null},"svangerskapspenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pleiepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"feriepengerOpplaeringspenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opplaeringspenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"omsorgspenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"feriepengerSykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"feriepengerPleiepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"feriepengerOmsorgspenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"feriepengerSykepengerTilFiskerSomBareHarHyre"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilFiskerSomBareHarHyre"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")))),(0,a.kt)("h2",{id:"pensjon-eller-trygd"},"Pensjon eller trygd"),(0,a.kt)("p",null,"Barnepensjons skattlegges fra 2024 som kapitalinntekt, og innrapporteres heretter p\xe5 nye inntektsbeskrivelser. Etterbetaling av barnepensjon innrapporteres p\xe5 eksisterende inntektsbeskrivelser."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ny PensjonEllerTrygdBeskrivelse"),(0,a.kt)("th",{parentName:"tr",align:null},"Har inng\xe5tt i"),(0,a.kt)("th",{parentName:"tr",align:null},"SBL"),(0,a.kt)("th",{parentName:"tr",align:null},"OTP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"barnepensjonFra2024"),(0,a.kt)("td",{parentName:"tr",align:null},"barnepensjon"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"barnepensjonFraAndreEnnFolketrygdenFra2024"),(0,a.kt)("td",{parentName:"tr",align:null},"barnepensjonFraAndreEnnFolketrygden"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ipaEllerIpsBarnepensjonFra2024"),(0,a.kt)("td",{parentName:"tr",align:null},"ipaEllerIpsBarnepensjon"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"n\xe6ring"},"N\xe6ring"),(0,a.kt)("p",null,"Sykepenger splittes og innrapporteres hver for seg i egne inntektsbeskrivelser."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nye Naeringsinntektbeskrivelse"),(0,a.kt)("th",{parentName:"tr",align:null},"Har inng\xe5tt i"),(0,a.kt)("th",{parentName:"tr",align:null},"SBL"),(0,a.kt)("th",{parentName:"tr",align:null},"OTP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"foreldrepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"svangerskapspenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pleiepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opplaeringspenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"omsorgspenger"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepenger"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"foreldrepengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"svangerskapspengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pleiepengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opplaeringspengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"omsorgspengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilDagmamma"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"foreldrepengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"svangerskapspengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pleiepengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opplaeringspengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"omsorgspengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilFisker"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"foreldrepengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"svangerskapspengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pleiepengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opplaeringspengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"omsorgspengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"sykepengerTilJordOgSkogbrukere"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"Skatteetaten tar direkte kontakt med \xf8vrige virksomheter som er ber\xf8rt for detaljert oversikt over endring i rettighetspakker."))}s.isMDXComponent=!0}}]);