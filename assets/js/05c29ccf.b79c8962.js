"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[9559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,g=p["".concat(o,".").concat(u)]||p[u]||k[u]||l;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<l;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"Formuesgrunnlag for eiendomsskatt API",slug:"/api/formuesgrunnlageiendomsskatt",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","formuesgrunnlag","eiendomsskatt"],keywords:["formuesgrunnlag","eiendomsskatt"],last_updated:"Sep 22, 2023",hide_table_of_contents:!0},s=void 0,i={unversionedId:"api/formuesgrunnlageiendomsskatt",id:"api/formuesgrunnlageiendomsskatt",title:"Formuesgrunnlag for eiendomsskatt API",description:"Tjenesten leverer fastsatte formuesgrunnlag for fast eiendom som grunnlag for eiendomsskatt, og inneholder informasjon om eiendomsopplysninger, adresseopplysninger og eiendomsrelasjoner for fast eiendom, samt beregnede markedsverdier med tilh\xf8rende grunnlag for boliger.",source:"@site/docs/api/formuesgrunnlageiendomsskatt.md",sourceDirName:"api",slug:"/api/formuesgrunnlageiendomsskatt",permalink:"/api-dokumentasjon/api/formuesgrunnlageiendomsskatt",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"formuesgrunnlag",permalink:"/api-dokumentasjon/tags/formuesgrunnlag"},{label:"eiendomsskatt",permalink:"/api-dokumentasjon/tags/eiendomsskatt"}],version:"current",frontMatter:{title:"Formuesgrunnlag for eiendomsskatt API",slug:"/api/formuesgrunnlageiendomsskatt",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","formuesgrunnlag","eiendomsskatt"],keywords:["formuesgrunnlag","eiendomsskatt"],last_updated:"Sep 22, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Boligsparing for ungdom API",permalink:"/api-dokumentasjon/api/bsu"},next:{title:"Hendelser",permalink:"/api-dokumentasjon/api/hendelser"}},o={},m=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Testdata",id:"testdata",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=d("Tabs"),k=d("TabItem"),u={toc:m},g="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer fastsatte formuesgrunnlag for fast eiendom som grunnlag for eiendomsskatt, og inneholder informasjon om eiendomsopplysninger, adresseopplysninger og eiendomsrelasjoner for fast eiendom, samt beregnede markedsverdier med tilh\xf8rende grunnlag for boliger."),(0,r.kt)(p,{underline:!0,mdxType:"Tabs"},(0,r.kt)(k,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:formuesgrunnlageiendomsskatt")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k\nopp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Formuesgrunnlag for eiendomsskatt API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"Url\u2019er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger\ni ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/formuesgrunnlag-for-eiendomsskatt-api"},"Open API spesifikasjonen"),"\np\xe5 SwaggerHub."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kommune")))),(0,r.kt)("h2",{id:"st\xf8ttetjenester"},"St\xf8ttetjenester"),(0,r.kt)("h3",{id:"hendelser"},"Hendelser"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi\nen ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/api/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Formuesgrunnlag for eiendomsskatt hendelser API")),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,"Dette api'et er pt. ikke dokumentert i felles datakatalog.")),(0,r.kt)(k,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "skattleggingsperiode": 2020,\n  "eiendomsidentifikator": {\n    "skatteetatensEiendomsidentifikator": "1",\n    "eksternIdentifikator": "921782775543322"\n  },\n  "formuesopplysninger": {\n    "formuestype": "selveidBolig",\n    "spesifikasjonForBolig": {\n      "boligegenskaper": {\n        "primaerromareal": 97,\n        "boligtype": "enebolig",\n        "byggeaar": "2019"\n      },\n      "beliggenhetskode": "1",\n      "beregnetMarkedsverdi": 3494213,\n      "beregningstype": "maskinellBeregning",\n      "grunnlagForBeregnetMarkedsverdi": {\n        "boligverdi": 3494213\n      }\n    }\n  },\n  "adresseopplysninger": [\n    {\n      "poststed": {\n        "poststedsnavn": "ARENDAL",\n        "postnummer": "4825"\n      },\n      "grunnkrets": {\n        "grunnkretsnavn": "Pusnes-Roligheten",\n        "grunnkretsnummer": "2101"\n      },\n      "vegadresse": {\n        "adressekode": "1",\n        "adressenavn": "Grubeveien",\n        "adressenummer": {\n          "husnummer": 47\n        }\n      },\n      "opplysningenesOpphav": "SKATTLEGGINGSPERIODE_3112"\n    },\n    {\n      "poststed": {\n        "poststedsnavn": "ARENDAL",\n        "postnummer": "4825"\n      },\n      "grunnkrets": {\n        "grunnkretsnavn": "Pusnes-Roligheten",\n        "grunnkretsnummer": "2101"\n      },\n      "vegadresse": {\n        "adressekode": "1",\n        "adressenavn": "Grubeveien",\n        "adressenummer": {\n          "husnummer": 47\n        }\n      },\n      "opplysningenesOpphav": "OPPDATERT_MATRIKKEL"\n    }\n  ],\n  "eiendomsopplysninger": [\n    {\n      "matrikkelnummer": {\n        "kommunenummer": "4203",\n        "gaardsnummer": 433,\n        "bruksnummer": 89,\n        "festenummer": 0,\n        "seksjonsnummer": 0\n      },\n      "kommunenummer": "4203",\n      "bruksnavn": "Lorem Ipsum",\n      "etablertDato": "2023-09-12",\n      "opplysningenesOpphav": "SKATTLEGGINGSPERIODE_3112"\n    },\n    {\n      "matrikkelnummer": {\n        "kommunenummer": "4203",\n        "gaardsnummer": 433,\n        "bruksnummer": 89,\n        "festenummer": 0,\n        "seksjonsnummer": 0\n      },\n      "kommunenummer": "4203",\n      "bruksnavn": "Lorem Ipsum",\n      "etablertDato": "2023-09-12",\n      "opplysningenesOpphav": "OPPDATERT_MATRIKKEL"\n    }\n  ]\n}\n'))),(0,r.kt)(k,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FGS-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FGS-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FGS-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FGS-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FGS-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FGS-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FGS-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Fant ikke formuesgrunnlag for eiendomsskatt for gitt identifikator, periode og kommunenummer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FGS-008"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."))))),(0,r.kt)(k,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"}),(0,r.kt)(k,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Det finnes pt. ikke s\xf8k i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/test/tenor"},"Tenor")," for denne tjenesten, og testdata er derfor listet her."),(0,r.kt)("h2",{id:"testdata"},"Testdata"),(0,r.kt)("p",null,"Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmilj\xf8 for eksterne:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Eksternidentifikator"),(0,r.kt)("th",{parentName:"tr",align:null},"Periode"),(0,r.kt)("th",{parentName:"tr",align:null},"Kommunenummer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"921782775543322"),(0,r.kt)("td",{parentName:"tr",align:null},"2020"),(0,r.kt)("td",{parentName:"tr",align:null},"4203")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"921782775543321"),(0,r.kt)("td",{parentName:"tr",align:null},"2020"),(0,r.kt)("td",{parentName:"tr",align:null},"4203")))),(0,r.kt)("p",null,"Ytterligere testdata kan man benytte hendelseslisten for \xe5 finne."))))}f.isMDXComponent=!0}}]);