"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=a.createContext({}),p=function(e){var t=a.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(k.Provider,{value:t},e.children)},o="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,k=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),o=p(n),m=r,u=o["".concat(k,".").concat(m)]||o[m]||g[m]||s;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i[o]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={title:"Hendelser",slug:"/api/hendelser",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","St\xf8ttetjeneste","Hendelser"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Sep 26, 2023",hide_table_of_contents:!0},l=void 0,i={unversionedId:"api/hendelser",id:"api/hendelser",title:"Hendelser",description:"Tjenestene leverer l\xf8pende varslinger om personer/virksomheter med nye eller endrede opplysninger tilgjengelig.",source:"@site/docs/api/hendelser.md",sourceDirName:"api",slug:"/api/hendelser",permalink:"/api-dokumentasjon/en/api/hendelser",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{label:"St\xf8ttetjeneste",permalink:"/api-dokumentasjon/en/tags/stottetjeneste"},{label:"Hendelser",permalink:"/api-dokumentasjon/en/tags/hendelser"}],version:"current",frontMatter:{title:"Hendelser",slug:"/api/hendelser",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","St\xf8ttetjeneste","Hendelser"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Sep 26, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Formuesgrunnlag for eiendomsskatt API",permalink:"/api-dokumentasjon/en/api/formuesgrunnlageiendomsskatt"},next:{title:"Inntekt API",permalink:"/api-dokumentasjon/en/api/inntekt"}},k={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Hendelsesliste suksess (HTTP status 200) for Inntekt hendelser",id:"hendelsesliste-suksess-http-status-200-for-inntekt-hendelser",level:2},{value:"JSON",id:"json",level:3},{value:"Hendelsesliste suksess (HTTP status 200) for Skattemelding fastsatt hendelser",id:"hendelsesliste-suksess-http-status-200-for-skattemelding-fastsatt-hendelser",level:2},{value:"Curl",id:"curl",level:3},{value:"JSON",id:"json-1",level:3},{value:"Hendelsesliste suksess (HTTP status 200) for N\xe6ringsspesifikasjon hendelser",id:"hendelsesliste-suksess-http-status-200-for-n\xe6ringsspesifikasjon-hendelser",level:2},{value:"Curl",id:"curl-1",level:3},{value:"JSON",id:"json-2",level:3},{value:"XML",id:"xml",level:3},{value:"F\xf8rste sekvensnummer fra dato suksess (HTTP status 200)",id:"f\xf8rste-sekvensnummer-fra-dato-suksess-http-status-200",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},o=d("Tabs"),g=d("TabItem"),m={toc:p},u="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenestene leverer l\xf8pende varslinger om personer/virksomheter med nye eller endrede opplysninger tilgjengelig."),(0,r.kt)(o,{underline:!0,mdxType:"Tabs"},(0,r.kt)(g,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Hendeleslistene er st\xf8ttetjenester som gir informasjon om endringer i datasett som leveres av Skatteetatens\ndatatjenester, og henger tett sammen med relatert oppslagstjeneste. Se mer informasjon p\xe5 ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/bruk"},"egen side"),"."),(0,r.kt)("p",null,"Hendelseslistene navigeres vha. sekvensnummer og er paginert."),(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"Man trenger ikke egne scope for hendelseslistene, de benytter samme scope som relaterte oppslagstjenester:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hendelsesliste"),(0,r.kt)("th",{parentName:"tr",align:null},"Scope"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Formuesgrunnlag for eiendomsskatt hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:formuesgrunnlageiendomsskatt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Inntekt hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:inntekt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mva-melding hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:mvamelding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:mvaregisteravgiftssubjekt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"N\xe6ringsspesifikasjon hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:naeringsspesifikasjon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pensjonsgivende inntekt for folketrygden hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:pensjonsgivendeinntektforfolketrygden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skattepliktig hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:skattepliktig")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skatteoppgj\xf8r hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:spesifisertsummertskattegrunnlag, skatteetaten:summertskattegrunnlag, skatteetaten:beregnetskatt, skatteetaten:avregning, skatteetaten:skatteplikt, skatteetaten:pensjonsgivendeinntekt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skatteoppgj\xf8r upersonlig hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:beregnetskattupersonlig, skatteetaten:skatteberegningsgrunnlagupersonlig, skatteetaten:summertskattegrunnlagupersonlig, skatteetaten:skattepliktupersonlig")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skattemelding fastsatt hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:skattemelding, skatteetaten:summertskattegrunnlag, skatteetaten:spesifisertsummertskattegrunnlag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skattemelding upersonlig hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:skattemelding, skatteetaten:summertskattegrunnlag, skatteetaten:spesifisertsummertskattegrunnlag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skattemelding utkast hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:skattemelding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tilleggsskatt hendelser API"),(0,r.kt)("td",{parentName:"tr",align:null},"skatteetaten:tilleggsskatt")))),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Delegering i Altinn gj\xf8res pr. scope, s\xe5 tilgang til hendelseslisterer er h\xe5ndtert hvis oppslagstjenesten er delegert."),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"Url\u2019er til api'ene, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonene til\nhendelseslistene p\xe5 SwaggerHub:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/formuesgrunnlag-for-endomsskatt-hendelser-api"},"Formuesgrunnlag for eiendomsskatt hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/inntekt-hendelser-api"},"Inntekt hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-melding-hendelser-api"},"Mva-melding hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-register-avgiftssubjekter-hendelser-api/"},"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/naeringsspesifikasjon-hendelser-api"},"N\xe6ringsspesifikasjon hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/pensjonsgivende-inntekt-for-folketrygden-hendelser-api/"},"Pensjonsgivende inntekt for folketrygden hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattepliktig-hendelser-api"},"Skattepliktig hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skatteoppgjor-hendelser-api"},"Skatteoppgj\xf8r hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skatteoppgjor-upersonlig-hendelser-api"},"Skatteoppgj\xf8r upersonlig hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-fastsatt-hendelser-api"},"Skattemelding fastsatt hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-upersonlig-hendelser-api"},"Skattemelding upersonlig hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-utkast-hendelser-api"},"Skattemelding utkast hendelser API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/tilleggsskatt-hendelser-api"},"Tilleggsskatt hendelser API")))),(0,r.kt)(g,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"hendelsesliste-suksess-http-status-200-for-inntekt-hendelser"},"Hendelsesliste suksess (HTTP status 200) for Inntekt hendelser"),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hendelser": [\n    {\n      "sekvensnummer": 1,\n      "identifikator": "09048000875",\n      "gjelderPeriode": "2023-01"\n    },\n    {\n      "sekvensnummer": 12,\n      "identifikator": "20125001158",\n      "gjelderPeriode": "2023-02"\n    },\n    {\n      "sekvensnummer": 23,\n      "identifikator": "02043700564",\n      "gjelderPeriode": "2023-10"\n    },\n    {\n      "sekvensnummer": 34,\n      "identifikator": "17014200150",\n      "gjelderPeriode": "2023-12"\n    },\n    {\n      "sekvensnummer": 45,\n      "identifikator": "17055401993",\n      "gjelderPeriode": "2023-12"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"hendelsesliste-suksess-http-status-200-for-skattemelding-fastsatt-hendelser"},"Hendelsesliste suksess (HTTP status 200) for Skattemelding fastsatt hendelser"),(0,r.kt)("p",null,"Skattemelding fastsatt hendelser, Skattemelding utkast hendelser og Skatteoppgj\xf8r hendelser inneholder informasjon om\nregistreringstidspunkt og hendelsetype i tillegg."),(0,r.kt)("h3",{id:"curl"},"Curl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/skattemelding/fastsatt/hendelser/?fraSekvensnummer=1&antall=5"\n')),(0,r.kt)("h3",{id:"json-1"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hendelser": [\n    {\n      "sekvensnummer": 1,\n      "identifikator": "28064701918",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-03-10T09:29:16.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 2,\n      "identifikator": "29114501318",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-03-10T08:02:43.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 3,\n      "identifikator": "10038500495",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-04-16T12:29:39.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 4,\n      "identifikator": "25035401310",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-04-16T11:31:32.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 5,\n      "identifikator": "01065402439",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-04-16T10:01:03.000000Z",\n      "hendelsetype": "NY"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"hendelsesliste-suksess-http-status-200-for-n\xe6ringsspesifikasjon-hendelser"},"Hendelsesliste suksess (HTTP status 200) for N\xe6ringsspesifikasjon hendelser"),(0,r.kt)("p",null,"N\xe6ringsspesifikasjon hendelser inneholder ogs\xe5 informasjon om registreringstidspunkt, hendelsetype og typeSkattepliktig\ni tillegg."),(0,r.kt)("h3",{id:"curl-1"},"Curl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/naeringsspesifikasjon/v1/hendelser/?fraSekvensnummer=1&antall=9"\n')),(0,r.kt)("h3",{id:"json-2"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hendelser": [\n    {\n      "sekvensnummer": 1,\n      "identifikator": "25038804416",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-19T09:40:03Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 2,\n      "identifikator": "25015201137",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-25T10:49:19Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 3,\n      "identifikator": "25015201137",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-25T09:53:30.774522Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "upersonligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 4,\n      "identifikator": "10037819471",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-02-10T14:04:08Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "upersonligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 5,\n      "identifikator": "29026009527",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-02-11T12:04:50Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 6,\n      "identifikator": "02118001764",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-02-21T11:50:57.626248Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 7,\n      "identifikator": "24065600842",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-18T14:24:01Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 8,\n      "identifikator": "24085701718",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-14T16:34:22Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 9,\n      "identifikator": "15124802560",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-18T13:46:27Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"xml"},"XML"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(3321).Z},"hendelser.xsd")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(4928).Z},"hendelser.xml (eksempel)")),(0,r.kt)("h3",{id:"f\xf8rste-sekvensnummer-fra-dato-suksess-http-status-200"},"F\xf8rste sekvensnummer fra dato suksess (HTTP status 200)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sekvensnummer": 21\n}\n'))),(0,r.kt)(g,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FA-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FA-002"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FA-003"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FA-004"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FA-005"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen hendelser funnet for oppgitt input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FA-006"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")))),(0,r.kt)("p",null,"Obs. oversikten over gjelder ikke for\n",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/api/formuesgrunnlageiendomsskatt?tab=Feilkoder"},"Formuesgrunnlag for eiendomsskatt hendelser API"),",\n",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/api/mvamelding?tab=Feilkoder"},"Mva-melding hendelser API")," og\n",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/api/mvaregisteravgiftssubjekt?tab=Feilkoder"},"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API"),"\nhvor hendelseslisten er knyttet tettere sammen med oppslagstjenesten, se derfor feilkoder for tjenesten."))))}h.isMDXComponent=!0},4928:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/hendelser_skattemelding_fastsatt-aa89ef90759e5a39263f396348e35d30.xml"},3321:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/hendelser_utvidet-c53e022ed2dcf761555d08d0beb5d74d.xsd"}}]);