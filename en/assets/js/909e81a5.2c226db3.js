"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8471],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=k(t,["components","mdxType","originalType","parentName"]),o=p(n),g=r,u=o["".concat(s,".").concat(g)]||o[g]||m[g]||l;return n?a.createElement(u,i(i({ref:e},d),{},{components:n})):a.createElement(u,i({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var k={};for(var s in e)hasOwnProperty.call(e,s)&&(k[s]=e[s]);k.originalType=t,k[o]="string"==typeof t?t:r,i[1]=k;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},40368:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>k,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Summert skattegrunnlag API",slug:"/api/summertskattegrunnlag",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,k={unversionedId:"api/summertskattegrunnlag",id:"api/summertskattegrunnlag",title:"Summert skattegrunnlag API",description:"Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en person.",source:"@site/docs/api/summertskattegrunnlag.md",sourceDirName:"api",slug:"/api/summertskattegrunnlag",permalink:"/api-dokumentasjon/en/api/summertskattegrunnlag",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{label:"Skatteoppgj\xf8r",permalink:"/api-dokumentasjon/en/tags/skatteoppgjor"}],version:"current",frontMatter:{title:"Summert skattegrunnlag API",slug:"/api/summertskattegrunnlag",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Skatteoppgj\xf8r"],keywords:["SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Spesifisert summert skattegrunnlag API",permalink:"/api-dokumentasjon/en/api/spesifisertsummertskattegrunnlag"},next:{title:"Summert skattegrunnlag upersonlig API",permalink:"/api-dokumentasjon/en/api/summertskattegrunnlagupersonlig"}},s={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Siste tilgjengelige skatteoppgj\xf8r",id:"siste-tilgjengelige-skatteoppgj\xf8r",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Tilleggsinformasjon",id:"tilleggsinformasjon",level:2},{value:"\xc5rsversjoner",id:"\xe5rsversjoner",level:2},{value:"Informasjonsmodell - skjema",id:"informasjonsmodell---skjema",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2},{value:"Tidsplan",id:"tidsplan",level:2},{value:"Nye/endrede summerte skattegrunnlag fra 2023",id:"nyeendrede-summerte-skattegrunnlag-fra-2023",level:2},{value:"Summerte skattegrunnlag som utg\xe5r fra 2023",id:"summerte-skattegrunnlag-som-utg\xe5r-fra-2023",level:2}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},o=d("Tabs"),m=d("TabItem"),g={toc:p},u="wrapper";function N(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,a.Z)({},g,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en person."),(0,r.kt)(o,{underline:!0,mdxType:"Tabs"},(0,r.kt)(m,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/versjoner"},"Versjonering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/en/om/tekniskspesifikasjon"},"Teknisk spesifikasjon"))),(0,r.kt)("p",null,"Summert skattegrunnlag API vil endres n\xe5r skattereglene endres, alts\xe5 \xe5rlig. Hvilke felt som er tilgjengelig vil kunne variere etter skattereglene som gjelder for det gitte skatte\xe5ret det sp\xf8rres om data om. Dette vil ikke f\xf8re til ny versjon av API'et med mindre annen semantikk endres."),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:summertskattegrunnlag")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Summert skattegrunnlag API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,"URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i ",(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-api"},"Open API spesifikasjonen")," p\xe5 SwaggerHub."),(0,r.kt)("p",null,"Det tilbys for tiden 2 endepunkter for uthenting av spesifisert summert skattegrunnlag, hvor URL'en har litt ulik oppbygging."),(0,r.kt)("p",null,"Enkelte rettighetspakker er tilrettelagt for ny URL med stadie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://{env}/api/formueinntekt/summertskattegrunnlag/{stadie}/{rettighetspakke}/{inntektsaar}/{personidentifikator}\n")),(0,r.kt)("p",null,"Andre rettighetspakker m\xe5 fremdeles benytter gammel URL uten stadie, men disse vil etter hvert bli tilrettelagt for ny url:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://{env}/api/formueinntekt/summertskattegrunnlag/{rettighetspakke}/{inntektsaar}/{personidentifikator}\n")),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"),(0,r.kt)("th",{parentName:"tr",align:null},"Stadie"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frirettshjelp"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"husbanken"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kommuneBoligsosialeFormaal"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kommuneForeldrebetaling"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer og utkast")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kommunePersonligassistanse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kommuneLangtidsoppholdInstitusjon"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"laanekassen"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ldir"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nav"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssb"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"udi"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")))),(0,r.kt)("h2",{id:"st\xf8ttetjenester"},"St\xf8ttetjenester"),(0,r.kt)("h3",{id:"hendelser"},"Hendelser"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/api/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Skatteoppgj\xf8r hendelser API")),(0,r.kt)("h3",{id:"siste-tilgjengelige-skatteoppgj\xf8r"},"Siste tilgjengelige skatteoppgj\xf8r"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/api/sistetilgjengeligeskatteoppgjoer"},"Siste tilgjengelige skatteoppgj\xf8r API")," gir informasjon om hva som er seneste periode med data for en skattepliktig."),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/dc560f2e-e5dd-3d8e-9383-eeb0b3085fce"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(m,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 respons for inntekts\xe5r 2022 i JSON uten oppgitt stadie."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator": "20076716073",\n  "inntektsaar": "2023",\n  "skjermet": false,\n  "grunnlag": [\n    {\n      "tekniskNavn": "formuesverdiForKjoeretoey",\n      "beloep": 0,\n      "kategori": [\n        "formue"\n      ]\n    },\n    {\n      "tekniskNavn": "formuesverdiForPrimaerbolig",\n      "beloep": 544978,\n      "kategori": [\n        "formue"\n      ]\n    },\n    {\n      "tekniskNavn": "gjeldIInnenlandskeBanker",\n      "beloep": 183457,\n      "kategori": [\n        "formuesfradrag"\n      ]\n    },\n    {\n      "tekniskNavn": "pensjonsinnbetaling",\n      "beloep": 3935,\n      "kategori": [\n        "inntektsfradrag"\n      ]\n    },\n    {\n      "tekniskNavn": "samletUfoeretrygdFraFolketrygdenEksklusiveEktefelletillegg",\n      "beloep": 126362,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "samledePaaloepteRenterPaaGjeldIInnenlandskeBanker",\n      "beloep": 13101,\n      "kategori": [\n        "inntektsfradrag"\n      ]\n    },\n    {\n      "tekniskNavn": "samletGjeld",\n      "beloep": 183457,\n      "kategori": [\n        "-"\n      ]\n    },\n    {\n      "tekniskNavn": "samletUfoereytelseFraAndreEnnFolketrygden",\n      "beloep": 28218,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "innskudd",\n      "beloep": 7,\n      "kategori": [\n        "formue"\n      ]\n    },\n    {\n      "tekniskNavn": "samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt",\n      "beloep": 213151,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "bruttoformue",\n      "beloep": 544985,\n      "kategori": [\n        "-"\n      ]\n    }\n  ],\n  "skatteoppgjoersdato": "2023-09-28"\n}\n')),(0,r.kt)("p",null,"Eksempel p\xe5 respons for inntekts\xe5r 2020 med oppgitt stadie 'oppgjoer' i JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator": "12345678910",\n  "inntektsaar": "2020",\n  "skjermet": false,\n  "grunnlag": [\n    {\n      "tekniskNavn": "samledePaaloepteRenter",\n      "beloep": 779981,\n      "kategori": [\n        "inntektsfradrag"\n      ]\n    },\n    {\n      "tekniskNavn": "andreFradragsberettigedeKostnader",\n      "beloep": 59981,\n      "kategori": [\n        "inntektsfradrag"\n      ]\n    },\n    {\n      "tekniskNavn": "samletSkattepliktigOverskuddAvUtleieAvFritidseiendom",\n      "beloep": 1609981,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "skattepliktigAvkastningEllerKundeutbytte",\n      "beloep": 1749981,\n      "kategori": [\n        "inntekt"\n      ]\n    }\n  ],\n  "svalbardGrunnlag": [\n    {\n      "tekniskNavn": "samledePaaloepteRenter",\n      "beloep": 779981,\n      "kategori": [\n        "inntektsfradrag"\n      ]\n    },\n    {\n      "tekniskNavn": "samletAndelAvInntektIBoligselskapEllerBoligsameie",\n      "beloep": 849981,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "skattepliktigUtbytteFraAksjerRegistrertIVerdipapirsentralen",\n      "beloep": 1779981,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "skattepliktigAvkastningEllerKundeutbytte",\n      "beloep": 1749981,\n      "kategori": [\n        "inntekt"\n      ]\n    }\n  ],\n  "skatteoppgjoersdato": "2020-02-11",\n  "stadie": "oppgjoer",\n  "registreringstidpunkt": "2020-02-11T16:11:12.985"\n}\n')),(0,r.kt)("p",null,"Flere eksempler p\xe5 responser:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(43719).Z},"SummertSkattegrunnlag2022.json"),"  "),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(77758).Z},"SummertSkattegrunnlag2021.json"),"  "),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(50028).Z},"SummertSkattegrunnlag2020.json")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(15765).Z},"SummertSkattegrunnlag2017.json")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(6135).Z},"SummertSkattegrunnlag2016.json")),(0,r.kt)("h2",{id:"xml"},"XML"),(0,r.kt)("p",null,"Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept")," satt til ",(0,r.kt)("inlineCode",{parentName:"p"},"application/xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<summertSkattegrunnlag xmlns="urn:no:skatteetaten:datasamarbeid:summertskattegrunnlag:v1">\n  <personidentifikator>21839199217</personidentifikator>\n  <inntektsaar>2021</inntektsaar>\n  <skjermet>false</skjermet>\n  <grunnlag>\n    <tekniskNavn>samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt</tekniskNavn>\n    <beloep>762732</beloep>\n    <kategori>inntekt</kategori>\n  </grunnlag>\n  <grunnlag>\n    <tekniskNavn>minstefradragIInntekt</tekniskNavn>\n    <beloep>106750</beloep>\n    <kategori>inntektsfradrag</kategori>\n  </grunnlag>\n  <skatteoppgjoersdato>2022-02-10</skatteoppgjoersdato>\n</summertSkattegrunnlag>\n')),(0,r.kt)("h2",{id:"tilleggsinformasjon"},"Tilleggsinformasjon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For 2015 og 2016 er Svalbard- og fastlandsinformasjon summert sammen. Fra og med 2017 er Svalbard-data skilt ut i svalbardSkjoennsfastsatt og svalbardGrunnlag."))),(0,r.kt)(m,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke treff p\xe5 oppgitt personidentifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-008"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen summert skattegrunnlag funnet p\xe5 oppgitt personidentifikator og inntekts\xe5r.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-009"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-010"),(0,r.kt)("td",{parentName:"tr",align:null},"410"),(0,r.kt)("td",{parentName:"tr",align:null},"Skattegrunnlag finnes ikke lenger."))))),(0,r.kt)(m,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/f78a48e2-8b5c-32fa-90bc-4c0bb8206fef"},"Informasjonsmodell")," i Felles datakatalog. "),(0,r.kt)("p",null,"Obs. Hvis modellene p\xe5 denne siden avviker fra Open API spesifikasjonen p\xe5 Swaggerhub, er det Open API spesifikasjonen som er mest oppdatert. "),(0,r.kt)("h2",{id:"\xe5rsversjoner"},"\xc5rsversjoner"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xc5r"),(0,r.kt)("th",{parentName:"tr",align:null},"Informasjonsmodell"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2016"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/en/summertskattegrunnlag2016"},"Informasjonsmodell for summert skattegrunnlag 2016"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/en/summertskattegrunnlag2017"},"Informasjonsmodell for summert skattegrunnlag 2017"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2018"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/en/summertskattegrunnlag2018"},"Informasjonsmodell for summert skattegrunnlag 2018"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2019"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/en/summertskattegrunnlag2019"},"Informasjonsmodell for summert skattegrunnlag 2019"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2020"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/en/summertskattegrunnlag2020"},"Informasjonsmodell for summert skattegrunnlag 2020"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/en/summertskattegrunnlag2021"},"Informasjonsmodell for summert skattegrunnlag 2021"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2022"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/en/summertskattegrunnlag2022"},"Informasjonsmodell for summert skattegrunnlag 2022"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/en/summertskattegrunnlag2023"},"Informasjonsmodell for summert skattegrunnlag 2023"))))),(0,r.kt)("h2",{id:"informasjonsmodell---skjema"},"Informasjonsmodell - skjema"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(93385).Z},(0,r.kt)("img",{alt:"SummertSkattegrunnlag",src:n(61243).Z,width:"721",height:"700"})))),(0,r.kt)(m,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Testdata for tjenesten kan finnes i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/en/test/tenor"},"Tenor"),' med s\xf8ket for "Summert skattegrunnlag".')),(0,r.kt)(m,{headerText:"\xc5rsrevisjon",itemKey:"itemKey-6",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tidsplan"},"Tidsplan"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dato"),(0,r.kt)("th",{parentName:"tr",align:null},"Aktivitet"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21.11.2023"),(0,r.kt)("td",{parentName:"tr",align:null},"Tidsplan for \xe5rsrevisjon for 2023 distribuert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15.12.2023"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8rste versjon av endringer i kodeliste for inntekts\xe5r 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16.01.2024"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppdatert versjon av endringer i kodeliste for inntekts\xe5r 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26.01.2024"),(0,r.kt)("td",{parentName:"tr",align:null},"Open API spesifikasjon oppdatert p\xe5 Swaggerhub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Medio februar"),(0,r.kt)("td",{parentName:"tr",align:null},"Endelig versjon av kodeliste for inntekts\xe5r 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22.02.2024"),(0,r.kt)("td",{parentName:"tr",align:null},"St\xf8tte for inntekts\xe5r 2023 i test for alle stadier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13.03.2024"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8rste utkast for inntekts\xe5r 2023 tilgjengelig i delingstjenesten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24.03.2024"),(0,r.kt)("td",{parentName:"tr",align:null},"F\xf8rste skatteoppgj\xf8r for inntekts\xe5r 2023 tilgjengelig i delingstjenesten")))),(0,r.kt)("h2",{id:"nyeendrede-summerte-skattegrunnlag-fra-2023"},"Nye/endrede summerte skattegrunnlag fra 2023"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Teknisk navn"),(0,r.kt)("th",{parentName:"tr",align:null},"Endring"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alminneligInntektFraEnkeltpersonforetakPaaSvalbard"),(0,r.kt)("td",{parentName:"tr",align:null},"Nytt fra 2023, inngikk tidligere i samletOverskuddAvEnkeltpersonforetakInnenAnnenNaering")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alminneligInntektFraSelskapMedDeltakerfastsettingPaaSvalbard"),(0,r.kt)("td",{parentName:"tr",align:null},"Nytt fra 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fradragsberettighetTapVedSvindel"),(0,r.kt)("td",{parentName:"tr",align:null},"Nytt fra 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletOverskuddAvEnkeltpersonforetakInnenAnnenNaering"),(0,r.kt)("td",{parentName:"tr",align:null},"Endring i innhold: alminneligInntektFraEnkeltpersonforetakPaaSvalbard er skilt ut som eget teknisk navn")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"godtgjoerelseEtterSaeravtaleIUtenrikstjenesten"),(0,r.kt)("td",{parentName:"tr",align:null},"Nytt fra 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skattepliktigTilfeldigInntektFraSpillLotteriMv"),(0,r.kt)("td",{parentName:"tr",align:null},"Nytt fra 2023")))),(0,r.kt)("h2",{id:"summerte-skattegrunnlag-som-utg\xe5r-fra-2023"},"Summerte skattegrunnlag som utg\xe5r fra 2023"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Teknisk navn"),(0,r.kt)("th",{parentName:"tr",align:null},"Endring"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"andreFradragsberettigedeKostnader"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annenSkattepliktigKapitalinntektFraVirtuellValuta"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dagpengerForNaeringsdrivendeOgFisker"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fradragsberettigetTapVedRealisasjonAvFastEiendomIUtlandet"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gevinstVedRealisasjonAvAksjeOgVerdipapirfondAksjedel"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gevinstVedRealisasjonAvFastEiendomMvIUtlandet"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gevinstVedRealisasjonAvVerdipapirfondsandelIKombifondKnyttetTilAksjedel"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loennsinntektPaaSvalbardOver12G"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"naeringsinntektFraKompensasjonsytelseUtbetaltAvNavInnenFiskeOgFangst"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oppjustertTilleggTilAndelIFellesTilleggIAlminneligInntektFraSDFInnenAnnenNaering"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oppjustertTilleggTilAndelIFellesTilleggIAlminneligInntektFraSDFInnenBarnepassIBarnepasserensHjem"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oppjustertTilleggTilGevinstVedRealisasjonAvAksjeOgVerdipapirfondAksjedel"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oppjustertTilleggTilGevinstVedRealisasjonAvVerdipapirfondsandelIKombifondKnyttetTilAksjedel"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overskuddFraNaeringsinntekt"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt, grunnlagForSkattPaaNaeringsoverskuddSvalbard kan brukes i stedet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"personinntektFraKompensasjonsytelseUtbetaltAvNavInnenFiskeOgFangst"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renteinntektAvObligasjonVerdipapirfondRentedelMv"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samledeAndrePaaloepteRenter"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samledeOpptjenteRenterIUtenlandskeBanker"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samledeUfoererenterOgLivrenter"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletAnnenPensjonUtenTrekkplikt"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletBarnepensjonOgLivrenteTilBarn"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletFormuesverdiAvPrivatUtestaaendeFordring"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletFormuesverdiForSekundaerbolig"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletFradragsberettigetKostnadTilknyttetArbeidMv"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletFradragsberettigetUnderskuddVedUtleieAvFastEiendom"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletGjenkjoepsverdiForLivsforsikring"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletInnskuddIInnenlandskeBanker"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletInntektSomGirRettTilSaerskiltFradragForSjoefolk"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletLoennsinntektUtenTrygdeavgiftspliktOgMedTrekkplikt"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletMerkostnadVedArbeidsoppholdUtenforHjem"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletPensjonFraFolketrygden"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletPensjonsinnbetalingTilIndividuellPensjonsordning"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"samletSkattepliktigOverskuddFraUtleieAvFastEiendom"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skattepliktigEtterloennOgEtterpensjon"),(0,r.kt)("td",{parentName:"tr",align:null},"Utg\xe5tt")))))))}N.isMDXComponent=!0},93385:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/files/SummertSkattegrunnlag-a02876ed658b6de3a55924cc626bea4c.png"},6135:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/files/summertSkattegrunnlag2016-564fcccf2837d636fa96dd1773ae3974.json"},15765:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/files/summertSkattegrunnlag2017-d0b16fdc41ba2f35233d1c940827494a.json"},50028:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/files/summertSkattegrunnlag2020-161d5a043ae3dd64a5f5c6ec847f8a0b.json"},77758:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/files/summertSkattegrunnlag2021-5976b1d230ce04776bd5132bdc37c2cb.json"},43719:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/files/summertSkattegrunnlag2022-06d487005423f55d917d3d629dfbb462.json"},61243:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/SummertSkattegrunnlag-a02876ed658b6de3a55924cc626bea4c.png"}}]);