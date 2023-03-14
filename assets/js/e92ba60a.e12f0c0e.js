"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8489],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=a.createContext({}),p=function(t){var e=a.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(k.Provider,{value:e},t.children)},m="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(n),g=r,u=m["".concat(k,".").concat(g)]||m[g]||o[g]||l;return n?a.createElement(u,i(i({ref:e},d),{},{components:n})):a.createElement(u,i({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var k in e)hasOwnProperty.call(e,k)&&(s[k]=e[k]);s.originalType=t,s[m]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51703:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Tilleggsskatt API",slug:"/tilleggsskatt",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["tilleggsskatt","skatteberegning","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,s={unversionedId:"tjenester/tilleggsskatt",id:"tjenester/tilleggsskatt",title:"Tilleggsskatt API",description:"Tjenesten leverer informasjon om ilagt tilleggsskatt ved uriktig, eller manglende innlevering av skattemelding.",source:"@site/docs/tjenester/tilleggsskatt.md",sourceDirName:"tjenester",slug:"/tilleggsskatt",permalink:"/api-dokumentasjon/tilleggsskatt",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"}],version:"current",frontMatter:{title:"Tilleggsskatt API",slug:"/tilleggsskatt",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["tilleggsskatt","skatteberegning","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Summert skattegrunnlag API",permalink:"/api-dokumentasjon/summertskattegrunnlag"},next:{title:"Tjenestepensjonsavtale API",permalink:"/api-dokumentasjon/tjenestepensjonsavtale"}},k={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjeneste",id:"st\xf8ttetjeneste",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},m=d("Tabs"),o=d("TabItem"),g={toc:p},u="wrapper";function N(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer informasjon om ilagt tilleggsskatt ved uriktig, eller manglende innlevering av skattemelding."),(0,r.kt)(m,{underline:!0,mdxType:"Tabs"},(0,r.kt)(o,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/versjoner"},"Versjonering"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:tilleggsskatt")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Tilleggsskatt API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/tilleggsskatt-api/"},"Open API spesifikasjon")," ligger p\xe5 SwaggerHub."),(0,r.kt)("p",null,"I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssb")))),(0,r.kt)("h2",{id:"st\xf8ttetjeneste"},"St\xf8ttetjeneste"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Tilleggsskatt hendelser API")),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/3852cc8b-6dbf-3958-8543-33e81ed1fbfd"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(o,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator":"07891448702",\n  "inntektsaar":"2021",\n  "skjermet":false,\n  "vedtakOmTilleggsskatt": [\n      {\n        "skattekommune":"4621",\n        "tilleggsskattFraUriktigeOpplysninger":50004.0,\n        "vedtaksdatoForTilleggsskatt":"2022-06-01"\n      }\n  ]\n}\n')),(0,r.kt)("h2",{id:"xml"},"XML"),(0,r.kt)("p",null,"Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept")," satt til ",(0,r.kt)("inlineCode",{parentName:"p"},"application/xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<?xml version='1.0' encoding='UTF-8'?>\n<tilleggsskatt xmlns=\"urn:no:skatteetaten:datasamarbeid:tilleggsskatt:v1\">\n  <personidentifikator>07891448702</personidentifikator>\n  <inntektsaar>2021</inntektsaar>\n  <skjermet>false</skjermet>\n  <vedtakOmTilleggsskatt>\n    <skattekommune>4621</skattekommune>\n    <tilleggsskattFraUriktigeOpplysninger>50004.0</tilleggsskattFraUriktigeOpplysninger>\n    <vedtaksdatoForTilleggsskatt>2022-06-01</vedtaksdatoForTilleggsskatt>\n  </vedtakOmTilleggsskatt></tilleggsskatt>\n"))),(0,r.kt)(o,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSA-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSA-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSA-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSA-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSA-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSA-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSA-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Fant ingen person eller organisasjon p\xe5 oppgitt identifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSA-008"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen tilleggsskatt funnet p\xe5 oppgitt identifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSA-009"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."))))),(0,r.kt)(o,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/aee5a3bb-94e1-35d8-91d5-a528119d004a"},"Informasjonsmodell")," i Felles datakatalog.")),(0,r.kt)(o,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/tenor"},"Tenor")," for denne tjenesten, og testdata er derfor listet her."),(0,r.kt)("h2",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"F\xf8lgende personer har tilleggsskatt:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,r.kt)("th",{parentName:"tr",align:null},"Inntekts\xe5r"),(0,r.kt)("th",{parentName:"tr",align:null},"Kommentar"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11891047306"),(0,r.kt)("td",{parentName:"tr",align:null},"2020"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14881648394"),(0,r.kt)("td",{parentName:"tr",align:null},"2020"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"07891448702"),(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16834899217"),(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18881248448"),(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64824401150"),(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},"D-nummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"47896100285"),(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},"D-nummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"01820099997"),(0,r.kt)("td",{parentName:"tr",align:null},"2020"),(0,r.kt)("td",{parentName:"tr",align:null},"Hatt D-nummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14865998989"),(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},"Fortrolig")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"28893949951"),(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},"Streng fortrolig")))),(0,r.kt)("p",null,"Kun organisasjoner som er AS kan ha tilleggsskatt. F\xf8lgende enheter har skatteplikt:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Organisasjonsnummer"),(0,r.kt)("th",{parentName:"tr",align:null},"Organisasjonsform"),(0,r.kt)("th",{parentName:"tr",align:null},"Inntekts\xe5r"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"210201602"),(0,r.kt)("td",{parentName:"tr",align:null},"AS"),(0,r.kt)("td",{parentName:"tr",align:null},"2020")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"213997572"),(0,r.kt)("td",{parentName:"tr",align:null},"AS"),(0,r.kt)("td",{parentName:"tr",align:null},"2020")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"312676281"),(0,r.kt)("td",{parentName:"tr",align:null},"AS"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"313527603"),(0,r.kt)("td",{parentName:"tr",align:null},"AS"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"314259203"),(0,r.kt)("td",{parentName:"tr",align:null},"AS"),(0,r.kt)("td",{parentName:"tr",align:null},"2021")))))))}N.isMDXComponent=!0}}]);