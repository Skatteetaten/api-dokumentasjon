"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=r.createContext({}),d=function(e){var t=r.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(k.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,k=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),g=a,u=m["".concat(k,".").concat(g)]||m[g]||o[g]||s;return n?r.createElement(u,l(l({ref:t},p),{},{components:n})):r.createElement(u,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<s;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const s={title:"Hendelser",slug:"/hendelser",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API reference"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Des 1, 2022",hide_table_of_contents:!0},l=void 0,i={unversionedId:"tjenester/hendelser",id:"tjenester/hendelser",title:"Hendelser",description:"Tjenestene leverer l\xf8pende varslinger om personer/virksomheter med nye eller endrede opplysninger tilgjengelig.",source:"@site/docs/tjenester/hendelser.md",sourceDirName:"tjenester",slug:"/hendelser",permalink:"/api-dokumentasjon/hendelser",draft:!1,editUrl:"https://github.com/Skatteetaten/api-dokumentasjon/tree/gh-pages/docs/tjenester/hendelser.md",tags:[{label:"API reference",permalink:"/api-dokumentasjon/tags/api-reference"}],version:"current",frontMatter:{title:"Hendelser",slug:"/hendelser",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API reference"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Des 1, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Boligsparing for ungdom API",permalink:"/api-dokumentasjon/bsu"},next:{title:"Inntekt API",permalink:"/api-dokumentasjon/inntekt"}},k={},d=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Hendelsesliste suksess (HTTP status 200) for Inntekstmottaker hendelser",id:"hendelsesliste-suksess-http-status-200-for-inntekstmottaker-hendelser",level:2},{value:"JSON",id:"json",level:3},{value:"XML",id:"xml",level:3},{value:"Hendelsesliste suksess (HTTP status 200) for Skattemelding fastsatt hendelser",id:"hendelsesliste-suksess-http-status-200-for-skattemelding-fastsatt-hendelser",level:2},{value:"Curl",id:"curl",level:3},{value:"JSON",id:"json-1",level:3},{value:"Hendelsesliste suksess (HTTP status 200) for N\xe6ringsspesifikasjon hendelser",id:"hendelsesliste-suksess-http-status-200-for-n\xe6ringsspesifikasjon-hendelser",level:2},{value:"Curl",id:"curl-1",level:3},{value:"JSON",id:"json-2",level:3},{value:"XML",id:"xml-1",level:3},{value:"F\xf8rste sekvensnummer fra dato suksess (HTTP status 200)",id:"f\xf8rste-sekvensnummer-fra-dato-suksess-http-status-200",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},o=p("Tabs"),m=p("TabItem"),g={toc:d};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Tjenestene leverer l\xf8pende varslinger om personer/virksomheter med nye eller endrede opplysninger tilgjengelig."),(0,a.kt)(o,{underline:!0,mdxType:"Tabs"},(0,a.kt)(m,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Hendeleslistene er st\xf8ttetjenester som gir informasjon om endringer i datasett som leveres av Skatteetatens datatjenester, og henger tett sammen med relatert oppslagstjeneste. Se mer informasjon p\xe5 ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/bruk"},"egen side"),"."),(0,a.kt)("p",null,"Hendelseslistene navigeres vha. sekvensnummer og er paginert."),(0,a.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/bruk"},"Bruk av tjenestene")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Sikkerhetsmekansimer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/feil"},"Feilh\xe5ndtering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/versjoner"},"Versjonering"))),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("p",null,"Man trenger ikke egne scope for hendelseslistene, de benytter samme scope som relaterte oppslagstjenester:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Hendelsesliste"),(0,a.kt)("th",{parentName:"tr",align:null},"Scope"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Inntekt hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:inntekt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mva-melding hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:mvamelding")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:mvaregisteravgiftssubjekt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"N\xe6ringsspesifikasjon hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:naeringsspesifikasjon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Skattepliktig hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:skattepliktig")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Skatteoppgj\xf8r hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:spesifisertsummertskattegrunnlag, skatteetaten:summertskattegrunnlag, skatteetaten:beregnetskatt, skatteetaten:avregning, skatteetaten:skatteplikt, skatteetaten:pensjonsgivendeinntekt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Skattemelding fastsatt hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:skattemelding, skatteetaten:summertskattegrunnlag, skatteetaten:spesifisertsummertskattegrunnlag")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Skattemelding upersonlig hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:skattemelding, skatteetaten:summertskattegrunnlag, skatteetaten:spesifisertsummertskattegrunnlag")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Skattemelding utkast hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:skattemelding")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tilleggsskatt hendelser API"),(0,a.kt)("td",{parentName:"tr",align:null},"skatteetaten:tilleggsskatt")))),(0,a.kt)("h2",{id:"delegering"},"Delegering"),(0,a.kt)("p",null,"Delegering i Altinn gj\xf8res pr. scope, s\xe5 tilgang til hendelseslisterer er h\xe5ndtert hvis oppslagstjenesten er delegert."),(0,a.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,a.kt)("p",null,"Open API spesifikasjon av hendelseslistene er p\xe5 SwaggerHub:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/inntektsmottaker-hendelser_api"},"Inntekt hendelser API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-melding-hendelser-api"},"Mva-melding hendelser API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-register-avgiftssubjekter-hendelser-api/"},"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/naeringsspesifikasjon-hendelser-api"},"N\xe6ringsspesifikasjon hendelser API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattepliktig-hendelser-api"},"Skattepliktig hendelser API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skatteoppgjor-hendelser_api"},"Skatteoppgj\xf8r hendelser API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-fastsatt-hendelser-api"},"Skattemelding fastsatt hendelser API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-upersonlig-hendelser-api"},"Skattemelding upersonlig hendelser API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-utkast-hendelser-api"},"Skattemelding utkast hendelser API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/tilleggsskatt-hendelser-api"},"Tilleggsskatt hendelser API")))),(0,a.kt)(m,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,a.kt)("h2",{id:"hendelsesliste-suksess-http-status-200-for-inntekstmottaker-hendelser"},"Hendelsesliste suksess (HTTP status 200) for Inntekstmottaker hendelser"),(0,a.kt)("p",null,"Her er et par eksempler p\xe5 sp\xf8rring med curl mot tjenesten. Du m\xe5 legge sertifikat og n\xf8kkel som parametre til curl-kommandoen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/innrapportert/inntektsmottaker/hendelser/?fraSekvensnummer=1&antall=5"\n')),(0,a.kt)("h3",{id:"json"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hendelser": [\n        {\n            "sekvensnummer": 1,\n            "identifikator": "09048000875",\n            "gjelderPeriode": "2018"\n        },\n        {\n            "sekvensnummer": 12,\n            "identifikator": "20125001158",\n            "gjelderPeriode": "2018"\n        },\n        {\n            "sekvensnummer": 23,\n            "identifikator": "02043700564",\n            "gjelderPeriode": "2018"\n        },\n        {\n            "sekvensnummer": 34,\n            "identifikator": "17014200150",\n            "gjelderPeriode": "2018"\n        },\n        {\n            "sekvensnummer": 45,\n            "identifikator": "17055401993",\n            "gjelderPeriode": "2018"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"xml"},"XML"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(9491).Z},"hendelser.xsd")),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(3712).Z},"hendelser.xml (eksempel)")),(0,a.kt)("h2",{id:"hendelsesliste-suksess-http-status-200-for-skattemelding-fastsatt-hendelser"},"Hendelsesliste suksess (HTTP status 200) for Skattemelding fastsatt hendelser"),(0,a.kt)("p",null,"Skattemelding fastsatt hendelser, Skattemelding utkast hendelser og Skatteoppgj\xf8r hendelser inneholder informasjon om registreringstidspunkt og hendelsetype i tillegg."),(0,a.kt)("h3",{id:"curl"},"Curl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/skattemelding/fastsatt/hendelser/?fraSekvensnummer=1&antall=5"\n')),(0,a.kt)("h3",{id:"json-1"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hendelser": [\n    {\n      "sekvensnummer": 1,\n      "identifikator": "28064701918",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-03-10T09:29:16.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 2,\n      "identifikator": "29114501318",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-03-10T08:02:43.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 3,\n      "identifikator": "10038500495",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-04-16T12:29:39.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 4,\n      "identifikator": "25035401310",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-04-16T11:31:32.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 5,\n      "identifikator": "01065402439",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-04-16T10:01:03.000000Z",\n      "hendelsetype": "NY"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"hendelsesliste-suksess-http-status-200-for-n\xe6ringsspesifikasjon-hendelser"},"Hendelsesliste suksess (HTTP status 200) for N\xe6ringsspesifikasjon hendelser"),(0,a.kt)("p",null,"N\xe6ringsspesifikasjon hendelser inneholder ogs\xe5 informasjon om registreringstidspunkt, hendelsetype og typeSkattepliktig i tillegg."),(0,a.kt)("h3",{id:"curl-1"},"Curl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/naeringsspesifikasjon/v1/hendelser/?fraSekvensnummer=1&antall=9"\n')),(0,a.kt)("h3",{id:"json-2"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hendelser": [\n        {\n            "sekvensnummer": 1,\n            "identifikator": "25038804416",\n            "gjelderPeriode": "2020",\n            "registreringstidspunkt": "2022-01-19T09:40:03Z",\n            "hendelsetype": "NY",\n            "typeSkattepliktig": "personligSkattepliktig"\n        },\n        {\n            "sekvensnummer": 2,\n            "identifikator": "25015201137",\n            "gjelderPeriode": "2020",\n            "registreringstidspunkt": "2022-01-25T10:49:19Z",\n            "hendelsetype": "NY",\n            "typeSkattepliktig": "personligSkattepliktig"\n        },\n        {\n            "sekvensnummer": 3,\n            "identifikator": "25015201137",\n            "gjelderPeriode": "2020",\n            "registreringstidspunkt": "2022-01-25T09:53:30.774522Z",\n            "hendelsetype": "NY",\n            "typeSkattepliktig": "upersonligSkattepliktig"\n        },\n        {\n            "sekvensnummer": 4,\n            "identifikator": "10037819471",\n            "gjelderPeriode": "2020",\n            "registreringstidspunkt": "2022-02-10T14:04:08Z",\n            "hendelsetype": "NY",\n            "typeSkattepliktig": "upersonligSkattepliktig"\n        },\n        {\n            "sekvensnummer": 5,\n            "identifikator": "29026009527",\n            "gjelderPeriode": "2020",\n            "registreringstidspunkt": "2022-02-11T12:04:50Z",\n            "hendelsetype": "NY",\n            "typeSkattepliktig": "personligSkattepliktig"\n        },\n        {\n            "sekvensnummer": 6,\n            "identifikator": "02118001764",\n            "gjelderPeriode": "2020",\n            "registreringstidspunkt": "2022-02-21T11:50:57.626248Z",\n            "hendelsetype": "NY",\n            "typeSkattepliktig": "personligSkattepliktig"\n        },\n        {\n            "sekvensnummer": 7,\n            "identifikator": "24065600842",\n            "gjelderPeriode": "2020",\n            "registreringstidspunkt": "2022-01-18T14:24:01Z",\n            "hendelsetype": "NY",\n            "typeSkattepliktig": "personligSkattepliktig"\n        },\n        {\n            "sekvensnummer": 8,\n            "identifikator": "24085701718",\n            "gjelderPeriode": "2020",\n            "registreringstidspunkt": "2022-01-14T16:34:22Z",\n            "hendelsetype": "NY",\n            "typeSkattepliktig": "personligSkattepliktig"\n        },\n        {\n            "sekvensnummer": 9,\n            "identifikator": "15124802560",\n            "gjelderPeriode": "2020",\n            "registreringstidspunkt": "2022-01-18T13:46:27Z",\n            "hendelsetype": "NY",\n            "typeSkattepliktig": "personligSkattepliktig"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"xml-1"},"XML"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(3321).Z},"hendelser.xsd")),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(4928).Z},"hendelser.xml (eksempel)")),(0,a.kt)("h3",{id:"f\xf8rste-sekvensnummer-fra-dato-suksess-http-status-200"},"F\xf8rste sekvensnummer fra dato suksess (HTTP status 200)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/innrapportert/inntektsmottaker/hendelser/start?dato=2017-08-01"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sekvensnummer": 21\n}\n'))),(0,a.kt)(m,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,a.kt)("p",null,"Se egen side for generell info om ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,a.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,a.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FA-001"),(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FA-002"),(0,a.kt)("td",{parentName:"tr",align:null},"404"),(0,a.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FA-003"),(0,a.kt)("td",{parentName:"tr",align:null},"401"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FA-004"),(0,a.kt)("td",{parentName:"tr",align:null},"400"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FA-005"),(0,a.kt)("td",{parentName:"tr",align:null},"404"),(0,a.kt)("td",{parentName:"tr",align:null},"Ingen hendelser funnet for oppgitt input.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FA-006"),(0,a.kt)("td",{parentName:"tr",align:null},"406"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")))),(0,a.kt)("p",null,"Obs. oversikten over gjelder ikke for ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/mvamelding?tab=Feilkoder"},"Mva-melding hendelser API")," og ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/mvaregisteravgiftssubjekt?tab=Feilkoder"},"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API")," hvor hendelseslisten er knyttet tettere sammen med oppslagstjenesten, se derfor feilkoder for tjenesten."))))}u.isMDXComponent=!0},3712:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/hendelser-842f6a9e4bf0f61d0923df512890247e.xml"},9491:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/hendelser-a5ccf4e20261d2a12072d2d79b953b55.xsd"},4928:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/hendelser_skattemelding_fastsatt-aa89ef90759e5a39263f396348e35d30.xml"},3321:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/hendelser_utvidet-c53e022ed2dcf761555d08d0beb5d74d.xsd"}}]);