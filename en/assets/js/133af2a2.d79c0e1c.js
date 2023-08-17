"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3425],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,m=k(t,["components","mdxType","originalType","parentName"]),d=p(a),g=l,u=d["".concat(s,".").concat(g)]||d[g]||o[g]||r;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=g;var k={};for(var s in e)hasOwnProperty.call(e,s)&&(k[s]=e[s]);k.originalType=t,k[d]="string"==typeof t?t:l,i[1]=k;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9272:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>k,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={title:"Tilleggsskatt API",slug:"/api/tilleggsskatt",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skattemelding","Tilleggsskatt"],keywords:["tilleggsskatt","skatteberegning","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,k={unversionedId:"api/tilleggsskatt",id:"api/tilleggsskatt",title:"Tilleggsskatt API",description:"Tjenesten leverer informasjon om ilagt tilleggsskatt ved uriktig, eller manglende innlevering av skattemelding.",source:"@site/docs/api/tilleggsskatt.md",sourceDirName:"api",slug:"/api/tilleggsskatt",permalink:"/api-dokumentasjon/en/api/tilleggsskatt",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{label:"Skattemelding",permalink:"/api-dokumentasjon/en/tags/skattemelding"},{label:"Tilleggsskatt",permalink:"/api-dokumentasjon/en/tags/tilleggsskatt"}],version:"current",frontMatter:{title:"Tilleggsskatt API",slug:"/api/tilleggsskatt",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skattemelding","Tilleggsskatt"],keywords:["tilleggsskatt","skatteberegning","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Summert skattegrunnlag upersonlig API",permalink:"/api-dokumentasjon/en/api/summertskattegrunnlagupersonlig"},next:{title:"Tjenestepensjonsavtale API",permalink:"/api-dokumentasjon/en/api/tjenestepensjonsavtale"}},s={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjeneste",id:"st\xf8ttetjeneste",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},d=m("Tabs"),o=m("TabItem"),g={toc:p},u="wrapper";function N(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("summary",null,"Tjenesten leverer informasjon om ilagt tilleggsskatt ved uriktig, eller manglende innlevering av skattemelding."),(0,l.kt)(d,{underline:!0,mdxType:"Tabs"},(0,l.kt)(o,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/bruk"},"Bruk av tjenestene")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/rettighetspakker"},"Rettighetspakker")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/feil"},"Feilh\xe5ndtering")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/versjoner"},"Versjonering")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,l.kt)("h2",{id:"scope"},"Scope"),(0,l.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,l.kt)("inlineCode",{parentName:"p"},"skatteetaten:tilleggsskatt")),(0,l.kt)("h2",{id:"delegering"},"Delegering"),(0,l.kt)("p",null,"Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Tilleggsskatt API - P\xe5 vegne av")),(0,l.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,l.kt)("p",null,"Url\u2019er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,l.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/tilleggsskatt-api/"},"Open API spesifikasjonen")," p\xe5 SwaggerHub."),(0,l.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssb")))),(0,l.kt)("h2",{id:"st\xf8ttetjeneste"},"St\xf8ttetjeneste"),(0,l.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,l.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/api/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Tilleggsskatt hendelser API")),(0,l.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/3852cc8b-6dbf-3958-8543-33e81ed1fbfd"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,l.kt)(o,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,l.kt)("h2",{id:"json"},"JSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator":"07891448702",\n  "inntektsaar":"2021",\n  "skjermet":false,\n  "vedtakOmTilleggsskatt": [\n      {\n        "skattekommune":"4621",\n        "tilleggsskattFraUriktigeOpplysninger":50004.0,\n        "vedtaksdatoForTilleggsskatt":"2022-06-01"\n      }\n  ]\n}\n')),(0,l.kt)("h2",{id:"xml"},"XML"),(0,l.kt)("p",null,"Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,l.kt)("inlineCode",{parentName:"p"},"Accept")," satt til ",(0,l.kt)("inlineCode",{parentName:"p"},"application/xml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<?xml version='1.0' encoding='UTF-8'?>\n<tilleggsskatt xmlns=\"urn:no:skatteetaten:datasamarbeid:tilleggsskatt:v1\">\n  <personidentifikator>07891448702</personidentifikator>\n  <inntektsaar>2021</inntektsaar>\n  <skjermet>false</skjermet>\n  <vedtakOmTilleggsskatt>\n    <skattekommune>4621</skattekommune>\n    <tilleggsskattFraUriktigeOpplysninger>50004.0</tilleggsskattFraUriktigeOpplysninger>\n    <vedtaksdatoForTilleggsskatt>2022-06-01</vedtaksdatoForTilleggsskatt>\n  </vedtakOmTilleggsskatt></tilleggsskatt>\n"))),(0,l.kt)(o,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,l.kt)("p",null,"Se egen side for generell info om ",(0,l.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,l.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,l.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSA-001"),(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSA-002"),(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSA-003"),(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSA-004"),(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSA-005"),(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSA-006"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSA-007"),(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Fant ingen person eller organisasjon p\xe5 oppgitt identifikator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSA-008"),(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingen tilleggsskatt funnet p\xe5 oppgitt identifikator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSA-009"),(0,l.kt)("td",{parentName:"tr",align:null},"406"),(0,l.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."))))),(0,l.kt)(o,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/aee5a3bb-94e1-35d8-91d5-a528119d004a"},"Informasjonsmodell")," i Felles datakatalog.")),(0,l.kt)(o,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,l.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,l.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,l.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/test/tenor"},"Tenor")," for denne tjenesten, og testdata er derfor listet her."),(0,l.kt)("h2",{id:"testdata"},"Testdata"),(0,l.kt)("p",null,"F\xf8lgende personer har tilleggsskatt:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"F\xf8dselsnummer"),(0,l.kt)("th",{parentName:"tr",align:null},"Inntekts\xe5r"),(0,l.kt)("th",{parentName:"tr",align:null},"Kommentar"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11891047306"),(0,l.kt)("td",{parentName:"tr",align:null},"2020"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14881648394"),(0,l.kt)("td",{parentName:"tr",align:null},"2020"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"01820099997"),(0,l.kt)("td",{parentName:"tr",align:null},"2020"),(0,l.kt)("td",{parentName:"tr",align:null},"Hatt D-nummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"07891448702"),(0,l.kt)("td",{parentName:"tr",align:null},"2021"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16834899217"),(0,l.kt)("td",{parentName:"tr",align:null},"2021"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"18881248448"),(0,l.kt)("td",{parentName:"tr",align:null},"2021"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"64824401150"),(0,l.kt)("td",{parentName:"tr",align:null},"2021"),(0,l.kt)("td",{parentName:"tr",align:null},"D-nummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14865998989"),(0,l.kt)("td",{parentName:"tr",align:null},"2021"),(0,l.kt)("td",{parentName:"tr",align:null},"Fortrolig")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"28893949951"),(0,l.kt)("td",{parentName:"tr",align:null},"2021"),(0,l.kt)("td",{parentName:"tr",align:null},"Streng fortrolig")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13905499313"),(0,l.kt)("td",{parentName:"tr",align:null},"2022"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15852048104"),(0,l.kt)("td",{parentName:"tr",align:null},"2022"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"08845198927"),(0,l.kt)("td",{parentName:"tr",align:null},"2022"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xf8dselsnummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"57836101938"),(0,l.kt)("td",{parentName:"tr",align:null},"2022"),(0,l.kt)("td",{parentName:"tr",align:null},"D-nummer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"19925398694"),(0,l.kt)("td",{parentName:"tr",align:null},"2022"),(0,l.kt)("td",{parentName:"tr",align:null},"Fortrolig")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"19872347995"),(0,l.kt)("td",{parentName:"tr",align:null},"2022"),(0,l.kt)("td",{parentName:"tr",align:null},"Streng fortrolig")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10852149448"),(0,l.kt)("td",{parentName:"tr",align:null},"2022"),(0,l.kt)("td",{parentName:"tr",align:null},"Kommunenummer 2312, Sokkel utland")))),(0,l.kt)("p",null,"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."),(0,l.kt)("p",null,"Kun organisasjoner som er AS kan ha tilleggsskatt. F\xf8lgende enheter har skatteplikt:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Organisasjonsnummer"),(0,l.kt)("th",{parentName:"tr",align:null},"Inntekts\xe5r"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"210201602"),(0,l.kt)("td",{parentName:"tr",align:null},"2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"213997572"),(0,l.kt)("td",{parentName:"tr",align:null},"2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"312676281"),(0,l.kt)("td",{parentName:"tr",align:null},"2021")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"313527603"),(0,l.kt)("td",{parentName:"tr",align:null},"2021")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"314259203"),(0,l.kt)("td",{parentName:"tr",align:null},"2021")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"312677660"),(0,l.kt)("td",{parentName:"tr",align:null},"2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"313739007"),(0,l.kt)("td",{parentName:"tr",align:null},"2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"310799262"),(0,l.kt)("td",{parentName:"tr",align:null},"2022")))))))}N.isMDXComponent=!0}}]);