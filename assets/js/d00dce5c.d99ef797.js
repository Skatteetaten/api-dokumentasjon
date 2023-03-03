"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=d(n),k=a,u=g["".concat(o,".").concat(k)]||g[k]||m[k]||i;return n?r.createElement(u,l(l({ref:t},p),{},{components:n})):r.createElement(u,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"Omregistreringsavgift API",slug:"/omregistreringsavgift",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API reference"],keywords:["omregistreringsavgift"],last_updated:"Des 1, 2022",hide_table_of_contents:!0},l=void 0,s={unversionedId:"tjenester/omregistreringsavgift",id:"tjenester/omregistreringsavgift",title:"Omregistreringsavgift API",description:"Tjenesten leverer omregistreringsavgiften for kj\xf8ret\xf8y spesifisert av kjennemerke og eventuelt omregistreringsdato.",source:"@site/docs/tjenester/omregistreringsavgift.md",sourceDirName:"tjenester",slug:"/omregistreringsavgift",permalink:"/api-dokumentasjon/omregistreringsavgift",draft:!1,editUrl:"https://github.com/Skatteetaten/api-dokumentasjon/tree/gh-pages/docs/tjenester/omregistreringsavgift.md",tags:[{label:"API reference",permalink:"/api-dokumentasjon/tags/api-reference"}],version:"current",frontMatter:{title:"Omregistreringsavgift API",slug:"/omregistreringsavgift",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API reference"],keywords:["omregistreringsavgift"],last_updated:"Des 1, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"N\xe6ringsspesifikasjon API",permalink:"/api-dokumentasjon/naeringsspesifikasjon"},next:{title:"Oppdrag utenlandske virksomheter API",permalink:"/api-dokumentasjon/oppdragutenlandskevirksomheter"}},o={},d=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=p("Tabs"),g=p("TabItem"),k={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Tjenesten leverer omregistreringsavgiften for kj\xf8ret\xf8y spesifisert av kjennemerke og eventuelt omregistreringsdato."),(0,a.kt)(m,{underline:!0,mdxType:"Tabs"},(0,a.kt)(g,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/bruk"},"Bruk av tjenestene")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Sikkerhetsmekansimer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/feil"},"Feilh\xe5ndtering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/versjoner"},"Versjonering"))),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,a.kt)("inlineCode",{parentName:"p"},"skatteetaten:omregistreringsavgift")),(0,a.kt)("h2",{id:"delegering"},"Delegering"),(0,a.kt)("p",null,"Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,a.kt)("inlineCode",{parentName:"p"},"Omregistreringsavgift API - P\xe5 vegne av")),(0,a.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/omregistreringsavgift-api/1.0.0"},"Open API spesifikasjon")," ligger p\xe5 SwaggerHub."),(0,a.kt)("p",null,"I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv."),(0,a.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/fce309db-daed-3a5e-bb24-040629d05628"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,a.kt)(g,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,a.kt)("h2",{id:"json"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "omregistreringsavgift": 3982,\n  "kjennemerke": "YQ96449",\n  "datoOmregistreringsavgift": "2021-05-16"\n}\n')),(0,a.kt)("h2",{id:"xml"},"XML"),(0,a.kt)("p",null,"Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept")," satt til ",(0,a.kt)("inlineCode",{parentName:"p"},"application/xml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<gjeldendeOmregistreringsavgift xmlns="urn:no:skatteetaten:fastsetting:motorvogn:omregistreringsavgift:gjeldende:v1">\n  <omregistreringsavgift>3982</omregistreringsavgift>\n  <kjennemerke>YQ96449</kjennemerke>\n  <datoOmregistreringsavgift>2021-05-16</datoOmregistreringsavgift>\n</gjeldendeOmregistreringsavgift>\n'))),(0,a.kt)(g,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,a.kt)("p",null,"Se egen side for generell info om ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,a.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,a.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OMREGSAVGIFT-001"),(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OMREGSAVGIFT-002"),(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OMREGSAVGIFT-003"),(0,a.kt)("td",{parentName:"tr",align:null},"404"),(0,a.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OMREGSAVGIFT-004"),(0,a.kt)("td",{parentName:"tr",align:null},"401"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OMREGSAVGIFT-005"),(0,a.kt)("td",{parentName:"tr",align:null},"403"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OMREGSAVGIFT-006"),(0,a.kt)("td",{parentName:"tr",align:null},"400"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OMREGSAVGIFT-007"),(0,a.kt)("td",{parentName:"tr",align:null},"404"),(0,a.kt)("td",{parentName:"tr",align:null},"Omregistreringsavgift ikke funnet. Kjennemerke er ukjent eller oppgitt dato er utenfor definerte avgiftssatser.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OMREGSAVGIFT-008"),(0,a.kt)("td",{parentName:"tr",align:null},"406"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."))))),(0,a.kt)(g,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/cd4cde32-912b-367e-8fe0-6da41b6467b1"},"informasjonsmodell")," i Felles datakatalog for.")),(0,a.kt)(g,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,a.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,a.kt)("p",null,"Det finnes pt. ikke Tenor-adapter for denne tjenesten, og testdata er derfor listet her."),(0,a.kt)("h2",{id:"testdata"},"Testdata"),(0,a.kt)("p",null,"F\xf8lgende testdata er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,a.kt)("th",{parentName:"tr",align:null},"Kjennemerke"),(0,a.kt)("th",{parentName:"tr",align:null},"Dato for omregistreringavgift"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"09917197935"),(0,a.kt)("td",{parentName:"tr",align:null},"WT10001"),(0,a.kt)("td",{parentName:"tr",align:null},"2021-05-16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"07929899274"),(0,a.kt)("td",{parentName:"tr",align:null},"WT10002"),(0,a.kt)("td",{parentName:"tr",align:null},"2021-05-16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"01864897068"),(0,a.kt)("td",{parentName:"tr",align:null},"WT10003"),(0,a.kt)("td",{parentName:"tr",align:null},"2021-05-16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"20860198259"),(0,a.kt)("td",{parentName:"tr",align:null},"WT10004"),(0,a.kt)("td",{parentName:"tr",align:null},"2021-05-16")))))))}u.isMDXComponent=!0}}]);