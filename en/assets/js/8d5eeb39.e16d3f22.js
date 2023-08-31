"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[2853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),k=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=k(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=k(n),g=r,u=d["".concat(s,".").concat(g)]||d[g]||m[g]||l;return n?a.createElement(u,i(i({ref:t},o),{},{components:n})):a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(7462),r=(n(7294),n(3905));const l={title:"Krav og betalinger API",slug:"/api/kravogbetalinger",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Innkreving"],keywords:["kravogbetalinger","krav og betalinger","innkreving"],last_updated:"Aug 28, 2023",hide_table_of_contents:!0},i=void 0,p={unversionedId:"api/kravogbetalinger",id:"api/kravogbetalinger",title:"Krav og betalinger API",description:"Tjeneste som tilbyr oversikt av krav, innbetalinger og utbetalinger tilh\xf8rende en part. Denne tjenesten er for tiden kun",source:"@site/docs/api/kravogbetalinger.md",sourceDirName:"api",slug:"/api/kravogbetalinger",permalink:"/api-dokumentasjon/en/api/kravogbetalinger",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{label:"Innkreving",permalink:"/api-dokumentasjon/en/tags/innkreving"}],version:"current",frontMatter:{title:"Krav og betalinger API",slug:"/api/kravogbetalinger",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Innkreving"],keywords:["kravogbetalinger","krav og betalinger","innkreving"],last_updated:"Aug 28, 2023",hide_table_of_contents:!0}},s={},k=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Samtykke",id:"samtykke",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"\xc5pne krav",id:"\xe5pne-krav",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons",level:3},{value:"Krav",id:"krav",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url-1",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons-1",level:3},{value:"Innbetalinger",id:"innbetalinger",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url-2",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons-2",level:3},{value:"Utbetalinger",id:"utbetalinger",level:2},{value:"Eksempel p\xe5 request URL",id:"eksempel-p\xe5-request-url-3",level:3},{value:"Eksempel p\xe5 respons",id:"eksempel-p\xe5-respons-3",level:3},{value:"Modell pr endepunkt",id:"modell-pr-endepunkt",level:2},{value:"\xc5pne krav",id:"\xe5pne-krav-1",level:3},{value:"Krav",id:"krav-1",level:3},{value:"Innbetalinger",id:"innbetalinger-1",level:3},{value:"Utbetalinger",id:"utbetalinger-1",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=o("Tabs"),m=o("TabItem"),g={toc:k},u="wrapper";function v(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,(0,r.kt)("p",null,"Tjeneste som tilbyr oversikt av krav, innbetalinger og utbetalinger tilh\xf8rende en part. Denne tjenesten er for tiden kun\ni beta-versjon, se mer informasjon p\xe5\nSkatteetatens ",(0,r.kt)("a",{parentName:"p",href:"https://skatteetaten.github.io/beta-apier/kravogbetalinger"},"beta-Github"),".")),(0,r.kt)(d,{underline:!0,mdxType:"Tabs"},(0,r.kt)(m,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:kravogbetalinger")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Krav og betalinger API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"Url\u2019er til tjenesten, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/krav-og-betalinger-api"},"Open API spesifikasjonen")," p\xe5 SwaggerHub."),(0,r.kt)("p",null,"API'et har 4 endepunkter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\xc5pne krav"),": Hent oversikt over \xe5pne krav og uplasserte innbetalinger. Gj\xf8r oppslag mot reskontrosystemene p\xe5 \xe5pne\nkrav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Krav"),": Hent alle krav innen et gitt tidsrom. Gj\xf8r oppslag mot reskontrosystemene p\xe5 alle krav innen et gitt tidsrom\np\xe5 maks ett \xe5r."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Innbetalinger"),": Hent alle innbetalinger innen et gitt tidsrom. Gj\xf8r oppslag mot reskontrosystemene p\xe5 alle\ninnbetalinger innen et gitt tidsrom p\xe5 maks ett \xe5r."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Utbetalinger"),": Hent alle utbetalinger innen et gitt tidsrom. Gj\xf8r oppslag mot reskontrosystemene p\xe5 alle\nutbetalinger innen et gitt tidsrom p\xe5 maks ett \xe5r.")),(0,r.kt)("p",null,"Se ogs\xe5 ",(0,r.kt)("a",{parentName:"p",href:"kravogbetalinger?tab=Eksempler"},"eksempler")," for de ulike endepunktene."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("p",null,"For denne tjenesten finns f\xf8lgende rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"),(0,r.kt)("th",{parentName:"tr",align:null},"Form\xe5l med rettighetspakke"),(0,r.kt)("th",{parentName:"tr",align:null},"Egenskaper ved rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"finans"),(0,r.kt)("td",{parentName:"tr",align:null},"Banker og finansforetak som skal vise krav og betalinger i nettbank"),(0,r.kt)("td",{parentName:"tr",align:null},"Krever samtykke og gir tilgang til alle 4 endepunkter med oppslag for virksomheter (vil etter hvert bli utvidet ogs\xe5 til oppslag for personer)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regnskapssystem"),(0,r.kt)("td",{parentName:"tr",align:null},"Regnskapssystemer som skal vise krav og betalinger i sine sluttbrukersystemer"),(0,r.kt)("td",{parentName:"tr",align:null},"Krever samtykke og gir tilgang til alle 4 endepunkter med oppslag for virksomheter")))),(0,r.kt)("h2",{id:"samtykke"},"Samtykke"),(0,r.kt)("p",null,"For rettighetspakkene ",(0,r.kt)("inlineCode",{parentName:"p"},"finans")," og ",(0,r.kt)("inlineCode",{parentName:"p"},"regnskapssystem")," kreves ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/samtykke"},"samtykke")," for dette api'et."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endepunkt"),(0,r.kt)("th",{parentName:"tr",align:null},"Tjenestekode"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Krav og betalinger - Aapne krav"),(0,r.kt)("td",{parentName:"tr",align:null},"5928_202301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Krav og betalinger - Krav"),(0,r.kt)("td",{parentName:"tr",align:null},"5929_202301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Krav og betalinger - Innbetalinger"),(0,r.kt)("td",{parentName:"tr",align:null},"5930_202301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Krav og betalinger - Utbetalinger"),(0,r.kt)("td",{parentName:"tr",align:null},"5931_202301")))),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"Siden dette er en beta-tjeneste, er den pt. ikke publisert i Felles datakatalog.")),(0,r.kt)(m,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"\xe5pne-krav"},"\xc5pne krav"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/aapnekrav\n")),(0,r.kt)("h3",{id:"eksempel-p\xe5-respons"},"Eksempel p\xe5 respons"),(0,r.kt)("p",null,"Oppdaterte eksempler kommer."),(0,r.kt)("h2",{id:"krav"},"Krav"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url-1"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/krav?fraOgMed=2022-01-01&tilOgMed=2022-12-31\n")),(0,r.kt)("h3",{id:"eksempel-p\xe5-respons-1"},"Eksempel p\xe5 respons"),(0,r.kt)("p",null,"Oppdatert eksempelrespons kommer."),(0,r.kt)("h2",{id:"innbetalinger"},"Innbetalinger"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url-2"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/innbetalinger?fraOgMed=2022-01-01&tilOgMed=2022-12-31\n")),(0,r.kt)("h3",{id:"eksempel-p\xe5-respons-2"},"Eksempel p\xe5 respons"),(0,r.kt)("p",null,"Oppdatert eksempelrespons kommer."),(0,r.kt)("h2",{id:"utbetalinger"},"Utbetalinger"),(0,r.kt)("h3",{id:"eksempel-p\xe5-request-url-3"},"Eksempel p\xe5 request URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/utbetalinger?fraOgMed=2022-01-01&tilOgMed=2021-12-31\n")),(0,r.kt)("h3",{id:"eksempel-p\xe5-respons-3"},"Eksempel p\xe5 respons"),(0,r.kt)("p",null,"Oppdatert eksempelrespons kommer.")),(0,r.kt)(m,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med samtykketoken.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Fant ingen krav/betalinger p\xe5 angitt identifikator og periode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-008"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KB-009"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen treff p\xe5 oppgitt identifikator."))))),(0,r.kt)(m,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,"Her ser du hele informasjonsmodellen for Krav og betalinger API med alle 4 endepunktene."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(2744).Z},(0,r.kt)("img",{alt:"Informasjonsmodell",src:n(6723).Z,width:"1651",height:"1940"}))),(0,r.kt)("h2",{id:"modell-pr-endepunkt"},"Modell pr endepunkt"),(0,r.kt)("h3",{id:"\xe5pne-krav-1"},"\xc5pne krav"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(3341).Z},(0,r.kt)("img",{alt:"\xe5pnekrav",src:n(7071).Z,width:"1651",height:"1940"}))),(0,r.kt)("h3",{id:"krav-1"},"Krav"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(1570).Z},(0,r.kt)("img",{alt:"krav",src:n(5380).Z,width:"1653",height:"1940"}))),(0,r.kt)("h3",{id:"innbetalinger-1"},"Innbetalinger"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(3616).Z},(0,r.kt)("img",{alt:"innbetalinger",src:n(7513).Z,width:"1763",height:"1940"}))),(0,r.kt)("h3",{id:"utbetalinger-1"},"Utbetalinger"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(7879).Z},(0,r.kt)("img",{alt:"utbetalinger",src:n(8467).Z,width:"1686",height:"1936"})))),(0,r.kt)(m,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("p",null,"I f\xf8rste omgang er det test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."),(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/test/tenor"},"Tenor")," for denne tjenesten, og testdata er derfor listet her.\nMen egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."),(0,r.kt)("h2",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"F\xf8lgende enkeltmannsforetak (ENK) er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne.\nV\xe6r oppmerksom p\xe5 at det er et levende testdatasett som kan endre seg i l\xf8pet av testperioden. Ta kontakt dersom du har\nbehov for ytterligere testdata."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Organisasjonsnummer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"310478717")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"313367002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"311851381")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"314961900")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"314055403")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"212201782")))))))}v.isMDXComponent=!0},2744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Informasjonsmodell_Kravogbetalinger-83b7cef76d3e289656f523575a0becfd.png"},3341:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Informasjonsmodell_Kravogbetalinger_Aapnekrav-ef702006a112a2b121c9baddee7d1ece.png"},3616:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Informasjonsmodell_Kravogbetalinger_Innbetalinger-6386ccef411ab1ba5f678464c24e5df1.png"},1570:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Informasjonsmodell_Kravogbetalinger_Krav-7f19ddaa89fe1b554b9fda2050117669.png"},7879:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Informasjonsmodell_Kravogbetalinger_Utbetalinger-c1ce536ec083d26b7c78f09e4d822406.png"},6723:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Informasjonsmodell_Kravogbetalinger-83b7cef76d3e289656f523575a0becfd.png"},7071:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Informasjonsmodell_Kravogbetalinger_Aapnekrav-ef702006a112a2b121c9baddee7d1ece.png"},7513:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Informasjonsmodell_Kravogbetalinger_Innbetalinger-6386ccef411ab1ba5f678464c24e5df1.png"},5380:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Informasjonsmodell_Kravogbetalinger_Krav-7f19ddaa89fe1b554b9fda2050117669.png"},8467:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Informasjonsmodell_Kravogbetalinger_Utbetalinger-c1ce536ec083d26b7c78f09e4d822406.png"}}]);