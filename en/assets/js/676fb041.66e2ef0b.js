"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(g,i(i({ref:t},k),{},{components:n})):a.createElement(g,i({ref:t},k))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Beregnet skatt upersonlig API",slug:"/api/beregnetskattupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["beregnetskatt","inntekt","formue"],last_updated:"Mar 31, 2023",hide_table_of_contents:!0},i=void 0,o={unversionedId:"api/beregnetskattupersonlig",id:"api/beregnetskattupersonlig",title:"Beregnet skatt upersonlig API",description:"Tjenesten leverer informasjon om inntekt, fradrag, formue, gjeld og beregnet skatt for en virksomhet.",source:"@site/docs/api/beregnetskattupersonlig.md",sourceDirName:"api",slug:"/api/beregnetskattupersonlig",permalink:"/api-dokumentasjon/en/api/beregnetskattupersonlig",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{label:"Skatteoppgj\xf8r",permalink:"/api-dokumentasjon/en/tags/skatteoppgjor"}],version:"current",frontMatter:{title:"Beregnet skatt upersonlig API",slug:"/api/beregnetskattupersonlig",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["beregnetskatt","inntekt","formue"],last_updated:"Mar 31, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Beregnet skatt API",permalink:"/api-dokumentasjon/en/api/beregnetskatt"},next:{title:"Boligsparing for ungdom API",permalink:"/api-dokumentasjon/en/api/bsu"}},s={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=k("Tabs"),m=k("TabItem"),u={toc:p},g="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer informasjon om inntekt, fradrag, formue, gjeld og beregnet skatt for en virksomhet."),(0,r.kt)(d,{underline:!0,mdxType:"Tabs"},(0,r.kt)(m,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:beregnetskattupersonlig")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Beregnet skatt upersonlig API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"Url\u2019er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/skatteetaten/beregnet-skatt-upersonlig-api"},"Open API spesifikasjonen"),"\np\xe5 SwaggerHub."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssb")))),(0,r.kt)("h2",{id:"st\xf8ttetjenester"},"St\xf8ttetjenester"),(0,r.kt)("h3",{id:"hendelser"},"Hendelser"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/api/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Skatteoppgj\xf8r upersonlig hendelser API")),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"Dette api'et er pt. ikke dokumentert i felles datakatalog.")),(0,r.kt)(m,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"json"},"JSON")),(0,r.kt)(m,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke treff p\xe5 oppgitt organisasjonsnummer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-008"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen beregnet skatt funnet p\xe5 oppgitt organisasjonsnummer og inntekts\xe5r.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-009"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUP-010"),(0,r.kt)("td",{parentName:"tr",align:null},"410"),(0,r.kt)("td",{parentName:"tr",align:null},"Beregnet skatt finnes ikke lenger."))))),(0,r.kt)(m,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"}),(0,r.kt)(m,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/test/tenor"},"Tenor")," for denne tjenesten, og testdata er derfor listet her."),(0,r.kt)("h2",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Organisasjonssnummer"),(0,r.kt)("th",{parentName:"tr",align:null},"Inntekts\xe5r"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"310322881"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"310962805"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")))),(0,r.kt)("p",null,"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."))))}f.isMDXComponent=!0}}]);