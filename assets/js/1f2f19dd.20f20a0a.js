"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=a.createContext({}),p=function(e){var t=a.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(k.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,k=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,u=m["".concat(k,".").concat(d)]||m[d]||g[d]||s;return n?a.createElement(u,l(l({ref:t},o),{},{components:n})):a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={title:"Spesifisert summert skattegrunnlag API",slug:"/spesifisertsummertskattegrunnlag",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},l=void 0,i={unversionedId:"tjenester/spesifisertsummertskattegrunnlag",id:"tjenester/spesifisertsummertskattegrunnlag",title:"Spesifisert summert skattegrunnlag API",description:"Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en person, inkludert spesifisering av hvilke opplysninger fra skattemeldingen som ligger til grunn.",source:"@site/docs/tjenester/spesifisertsummertskattegrunnlag.md",sourceDirName:"tjenester",slug:"/spesifisertsummertskattegrunnlag",permalink:"/api-dokumentasjon/spesifisertsummertskattegrunnlag",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"}],version:"current",frontMatter:{title:"Spesifisert summert skattegrunnlag API",slug:"/spesifisertsummertskattegrunnlag",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Skattepliktig API",permalink:"/api-dokumentasjon/skattepliktig"},next:{title:"Summert skattegrunnlag API",permalink:"/api-dokumentasjon/summertskattegrunnlag"}},k={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Samtykke",id:"samtykke",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Siste tilgjengelige skatteoppgj\xf8r",id:"siste-tilgjengelige-skatteoppgj\xf8r",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Spesifikasjonstyper for spesifisert summert skattegrunnlag 2018",id:"spesifikasjonstyper-for-spesifisert-summert-skattegrunnlag-2018",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Samtykke",id:"samtykke-1",level:2},{value:"\xc5rsversjoner",id:"\xe5rsversjoner",level:2},{value:"Informasjonsmodell - skjema",id:"informasjonsmodell---skjema",level:2},{value:"Oversikt",id:"oversikt",level:3},{value:"Eiendeler og faste eiendommer",id:"eiendeler-og-faste-eiendommer",level:3},{value:"Bank, l\xe5n og forsikring",id:"bank-l\xe5n-og-forsikring",level:3},{value:"Arbeid, trygd og pensjon",id:"arbeid-trygd-og-pensjon",level:3},{value:"Finans",id:"finans",level:3},{value:"N\xe6ring",id:"n\xe6ring",level:3},{value:"Formue og inntekt i selskap med deltakerfastsetting",id:"formue-og-inntekt-i-selskap-med-deltakerfastsetting",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=o("Tabs"),g=o("TabItem"),d={toc:p},u="wrapper";function f(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en person, inkludert spesifisering av hvilke opplysninger fra skattemeldingen som ligger til grunn."),(0,r.kt)(m,{underline:!0,mdxType:"Tabs"},(0,r.kt)(g,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/versjoner"},"Versjonering"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:spesifisertsummertskattegrunnlag")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Spesifisert summert skattegrunnlag API API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/spesifisert-summert-skattegrunnlag-api"},"Open API spesifikasjon")," ligger p\xe5 SwaggerHub."),(0,r.kt)("p",null,"I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv."),(0,r.kt)("p",null,"Det tilbys to endepunkter for uthenting av spesifisert summert skattegrunnlag, hvor URL har litt ulik oppbygging."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://{env}/api/formueinntekt/spesifisertsummertskattegrunnlag/{stadie}/{rettighetspakke}/{inntektsaar}/{personidentifikator}\n")),(0,r.kt)("p",null,"I tillegg tilbys et endepunkt uten at stadie spesifiseres. Dette endepunktet vil alltid benytte stadie \u2018oppgjoer\u2019. Endepunktet skal utfases og vi \xf8nsker at alle g\xe5r over til endepunkt hvor stadie spesifiseres."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://{env}/api/formueinntekt/spesifisertsummertskattegrunnlag/{rettighetspakke}/{inntektsaar}/{personidentifikator}\n")),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"),(0,r.kt)("th",{parentName:"tr",align:null},"Stadie"),(0,r.kt)("th",{parentName:"tr",align:null},"Egenskaper ved rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"husbanken"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer"),(0,r.kt)("td",{parentName:"tr",align:null},"Hjemmel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"navSupplerendeStoenad"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer og utkast"),(0,r.kt)("td",{parentName:"tr",align:null},"Hjemmel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"norgesbank"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer og utkast"),(0,r.kt)("td",{parentName:"tr",align:null},"Hjemmel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"saernamsmann"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer"),(0,r.kt)("td",{parentName:"tr",align:null},"Hjemmel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sbl"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer"),(0,r.kt)("td",{parentName:"tr",align:null},"Krever samtykke")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sivilrett"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer, utkast og fastsatt"),(0,r.kt)("td",{parentName:"tr",align:null},"Hjemmel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spkBoliglaan"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer"),(0,r.kt)("td",{parentName:"tr",align:null},"Hjemmel")))),(0,r.kt)("h2",{id:"samtykke"},"Samtykke"),(0,r.kt)("p",null,"Tjenesten kan kreve ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/samtykke"},"samtykke"),". Datakonsumenter med samtykke har kun lov til \xe5 sp\xf8rre om spesifisert summert skattegrunnlag for siste tilgjengelige inntekts\xe5r, og dette kan sjekkes med st\xf8ttetjenesten ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/sistetilgjengeligeskatteoppgjoer"},"Siste tilgjengelige skatteoppgj\xf8r API"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tjenestekode"),(0,r.kt)("th",{parentName:"tr",align:null},"Form\xe5l"),(0,r.kt)("th",{parentName:"tr",align:null},"Kommentar"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4628_210607"),(0,r.kt)("td",{parentName:"tr",align:null},"Kreves for rettighetspakke ",(0,r.kt)("inlineCode",{parentName:"td"},"sbl")),(0,r.kt)("td",{parentName:"tr",align:null},"Sanert tjenestekode: 4628_1")))),(0,r.kt)("p",null,"For denne tjenesten er det en  parameter som m\xe5 f\xf8lge med:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Forklaring"),(0,r.kt)("th",{parentName:"tr",align:null},"Eksempelverdi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4628_210607_inntektsaar"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter for Skattegrunnlag"),(0,r.kt)("td",{parentName:"tr",align:null},"2017")))),(0,r.kt)("h2",{id:"st\xf8ttetjenester"},"St\xf8ttetjenester"),(0,r.kt)("h3",{id:"hendelser"},"Hendelser"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Skatteoppgj\xf8r hendelser API")),(0,r.kt)("h3",{id:"siste-tilgjengelige-skatteoppgj\xf8r"},"Siste tilgjengelige skatteoppgj\xf8r"),(0,r.kt)("p",null,"Virksomheter med samtykke har kun lov til \xe5 sp\xf8rre om summert skattegrunnlag for seneste tilgjengelige ",(0,r.kt)("em",{parentName:"p"},"inntektsaar"),". ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/sistetilgjengeligeskatteoppgjoer"},"Siste tilgjengelige skatteoppgj\xf8r API")," kan brukes uten samtykke til \xe5 sjekke hva som er seneste tilgjengelige inntektsaar for en skattepliktig."),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/8cc670c2-fa13-3f39-ade8-ca21b6ed06e0"},"Datatjenestebeskrivelse")," i Felles datakatalog."),(0,r.kt)("h2",{id:"spesifikasjonstyper-for-spesifisert-summert-skattegrunnlag-2018"},"Spesifikasjonstyper for spesifisert summert skattegrunnlag 2018"),(0,r.kt)("p",null,"I 2018 komm spesifikasjonene til spesifisert summert skattegrunnlag fra to forskjellige l\xf8yper: ordin\xe6r og pilot. For\nen detaljert beskrivelse av hva dette inneb\xe6rer, se ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/spesifisertsummertskattegrunnlag2018_spesifikasjoner"},"Spesifikasjonstyper for spesifisert summert skattegrunnlag 2018"))),(0,r.kt)(g,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For 2015 og 2016 er Svalbard- og fastlandsinformasjon summert sammen. Fra og med 2017 er Svalbard-data skilt ut i\nsvalbardSkjoennsfastsatt og svalbardGrunnlag."),(0,r.kt)("li",{parentName:"ul"},"Fra og med 2018 er feltene skjoennsfastsatt og svalbardSkjoennsfastsatt fjernet.")),(0,r.kt)("h2",{id:"curl"},"Curl"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 legge sertifikat og n\xf8kkel som parametre til\ncurl-kommandoen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -H "Authorization: Bearer <maskinporten_token>" -H "AltinnSamtykke: <samtykke>" "https://api-test.sits.no/api/formueinntekt/spesifisertsummertskattegrunnlag/sbl/2015/12345678901"\n')),(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 en respons for inntekts\xe5r 2021 uten oppgitt stadie i JSON. Det er lenket til flere eksempler p\xe5 responser nedenfor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator":"30921548296",\n  "inntektsaar":"2021",\n  "grunnlag":[\n    {\n      "tekniskNavn":"samledeOpptjenteRenterIInnenlandskeBanker",\n      "beloep":9251,\n      "kategori":"inntekt"\n    },\n    {\n      "tekniskNavn":"samletPensjonFraFolketrygden",\n      "beloep":1056108,\n      "kategori":"inntekt"\n    },\n    {\n      "tekniskNavn":"gjeldIInnenlandskeBanker",\n      "beloep":479949,\n      "kategori":"formuesfradrag"\n    },\n    {\n      "tekniskNavn":"samletInnskuddIInnenlandskeBanker",\n      "beloep":462570,\n      "kategori":"formue"\n    },\n    {\n      "tekniskNavn":"sumGjeldsreduksjon",\n      "beloep":72434,\n      "kategori":"formuesfradrag"\n    },\n    {\n      "tekniskNavn":"utbytteFraVerdipapirfond",\n      "beloep":5,\n      "spesifisering":[\n        {\n          "type":"Verdipapirfond",\n          "fondetsNavn":"Aksjefondet RST",\n          "isinnummer":"NO5107125899",\n          "antallAndeler":110.759,\n          "skattepliktigUtbytte":5,\n          "skattepliktigGevinstVedRealisasjonAvAndelIAksjedel":20708,\n          "oppgavegiversOrganisasjonsnummer":"212717622",\n          "oppgavegiversNavn":"DEDIKERT SAMARBEIDSVILLIG TIGER AS",\n          "verdiFoerVerdsettingsrabattForAndelIAksjedel":233418\n        }\n      ],\n      "kategori":"inntekt"\n    },\n    {\n      "tekniskNavn":"bruttoformue",\n      "beloep":590950,\n      "kategori":"-"\n    },\n    {\n      "tekniskNavn":"samledePaaloepteRenterPaaGjeldIInnenlandskeBanker",\n      "beloep":14398,\n      "kategori":"inntektsfradrag"\n    },\n    {\n      "tekniskNavn":"samletGjeld",\n      "beloep":479949,\n      "kategori":"-"\n    },\n    {\n      "tekniskNavn":"verdiFoerVerdsettingsrabattForAndelIAksjedelIVerdipapirfond",\n      "beloep":233418,\n      "spesifisering":[\n        {\n          "type":"Verdipapirfond",\n          "fondetsNavn":"Aksjefondet RST",\n          "isinnummer":"NO5107125899",\n          "antallAndeler":110.759,\n          "skattepliktigUtbytte":5,\n          "skattepliktigGevinstVedRealisasjonAvAndelIAksjedel":20708,\n          "oppgavegiversOrganisasjonsnummer":"212717622",\n          "oppgavegiversNavn":"DEDIKERT SAMARBEIDSVILLIG TIGER AS",\n          "verdiFoerVerdsettingsrabattForAndelIAksjedel":233418\n        }\n      ],\n      "kategori":"formue"\n    },\n    {\n      "tekniskNavn":"gevinstVedRealisasjonAvAndelIAksjedelIVerdipapirfond",\n      "beloep":20708,\n      "spesifisering":[\n        {\n          "type":"Verdipapirfond",\n          "fondetsNavn":"Aksjefondet RST",\n          "isinnummer":"NO5107125899",\n          "antallAndeler":110.759,\n          "skattepliktigUtbytte":5,\n          "skattepliktigGevinstVedRealisasjonAvAndelIAksjedel":20708,\n          "oppgavegiversOrganisasjonsnummer":"212717622",\n          "oppgavegiversNavn":"DEDIKERT SAMARBEIDSVILLIG TIGER AS",\n          "verdiFoerVerdsettingsrabattForAndelIAksjedel":233418\n        }\n      ],\n      "kategori":"inntekt"\n    }\n  ],\n  "skjermet":false,\n  "skatteoppgjoersdato":"2022-02-10"\n}\n')),(0,r.kt)("p",null,"Eksempel p\xe5 respons for inntekts\xe5r 2018 med oppgitt stadie 'oppgjoer' i JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator": "12345678901",\n  "inntektsaar": "2018",\n  "grunnlag": [\n    {\n      "tekniskNavn": "samletFormuesverdiForFastEiendomIUtlandet",\n      "beloep": 260000,\n      "kategori": "formue"\n    },\n    {\n      "tekniskNavn": "samledePaaloepteRenter",\n      "beloep": 25000,\n      "spesifisering": [\n        {\n          "type": "Konto",\n          "kontonummer": "12345678903",\n          "bankensNavn": "MinEnesteBank",\n          "organisasjonsnummer": "123456789",\n          "gjeld": 165000,\n          "paaloepteRenter": 2500\n        },\n        {\n          "type": "SkyldigRestskatt",\n          "betalteForsinkelsesrenterForSamletSkyldigRestskatt": 5000,\n          "samletSkyldigRestskatt": 200000\n        }\n      ],\n      "kategori": "inntektsfradrag"\n    },\n    {\n      "tekniskNavn": "kapitalinntektFraSkogbruk",\n      "beloep": 15000,\n      "kategori": "inntekt"\n    },\n    {\n      "tekniskNavn": "samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt",\n      "beloep": 350000,\n      "spesifisering": [\n        {\n          "type": "LoennOgTilsvarendeYtelser",\n          "arbeidsgiversNavn": "Matre Og Inne",\n          "organisasjonsnummer": "123456789",\n          "beloep": 350000\n        }\n      ],\n      "kategori": "inntekt"\n    },\n    {\n      "tekniskNavn": "utgifterTilPassOgStellAvHjemmevaerendeBarn",\n      "beloep": 50000,\n      "kategori": "inntektsfradrag"\n    },\n    {\n      "tekniskNavn": "formuesverdiForPrimaerbolig",\n      "beloep": 780000,\n      "spesifisering": [\n        {\n          "type": "Eiendom",\n          "bruksnummer": "55",\n          "gaardsnummer": "39",\n          "kommunenummer": "0020",\n          "formuesverdi": 780000,\n          "beregnetMarkedsverdiForBolig": 5200000,\n          "eierandel": 50\n        }\n      ],\n      "kategori": "formue"\n    }\n  ],\n  "skjermet": false,\n  "skatteoppgjoersdato": "2019-03-01",\n  "stadie": "oppgjoer",\n  "registreringstidpunkt": "2019-03-01T16:11:12.985"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(4602).Z},"SpesifisertSummertSkattegrunnlag2020.json")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(4878).Z},"SpesifisertSummertSkattegrunnlag2018_ordin\xe6r.json")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(6473).Z},"SpesifisertSummertSkattegrunnlag2018_pilot.json")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(7615).Z},"SpesifisertSummertSkattegrunnlag2017.json")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(1177).Z},"SpesifisertSummertSkattegrunnlag2016.json")),(0,r.kt)("h2",{id:"samtykke-1"},"Samtykke"),(0,r.kt)("p",null,"Gjelder bare brukere som m\xe5 ha samtykke."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tjenestekode"),(0,r.kt)("th",{parentName:"tr",align:null},"Parametere v/ redirect til Altinn"),(0,r.kt)("th",{parentName:"tr",align:null},"Eksempel parameter verdi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4628_210607"),(0,r.kt)("td",{parentName:"tr",align:null},"4628_210607_inntektsaar"),(0,r.kt)("td",{parentName:"tr",align:null},"&4628_210607_inntektsaar=2021"))))),(0,r.kt)(g,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BSA-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke treff p\xe5 oppgitt personidentifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-008"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen spesifisert summert skattegrunnlag funnet for oppgitt identifikator og inntekts\xe5r.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-009"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-010"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med samtykketoken.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-011"),(0,r.kt)("td",{parentName:"tr",align:null},"410"),(0,r.kt)("td",{parentName:"tr",align:null},"Skattegrunnlag finnes ikke lenger."))))),(0,r.kt)(g,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/47fa0ecf-eb6f-3e75-a229-643c4d3f52c8"},"Informasjonsmodell")," i Felles datakatalog. "),(0,r.kt)("p",null,"Obs. Hvis modellene p\xe5 denne siden avviker fra open api spesifikasjonen p\xe5 Swaggerhub, er det open api spesifikasjonen som er mest oppdatert."),(0,r.kt)("h2",{id:"\xe5rsversjoner"},"\xc5rsversjoner"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xc5r"),(0,r.kt)("th",{parentName:"tr",align:null},"Kodeliste og spesifikasjoner"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2016"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/spesifisertsummertskattegrunnlag2016"},"Summerte skattegrunnlag og spesifikasjoner for 2016"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/spesifisertsummertskattegrunnlag2017"},"Summerte skattegrunnlag og spesifikasjoner for 2017"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2018"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/spesifisertsummertskattegrunnlag2018"},"Summerte skattegrunnlag og spesifikasjoner for 2018"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2019"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/spesifisertsummertskattegrunnlag2019"},"Summerte skattegrunnlag og spesifikasjoner for 2019"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2020"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/spesifisertsummertskattegrunnlag2020"},"Summerte skattegrunnlag og spesifikasjoner for 2020"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/spesifisertsummertskattegrunnlag2021"},"Summerte skattegrunnlag og spesifikasjoner for 2021"))))),(0,r.kt)("h2",{id:"informasjonsmodell---skjema"},"Informasjonsmodell - skjema"),(0,r.kt)("h3",{id:"oversikt"},"Oversikt"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Oversikt",src:n(6584).Z,width:"1115",height:"536"})),(0,r.kt)("h3",{id:"eiendeler-og-faste-eiendommer"},"Eiendeler og faste eiendommer"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EiendelerOgFasteEiendommer",src:n(8049).Z,width:"1462",height:"870"})),(0,r.kt)("h3",{id:"bank-l\xe5n-og-forsikring"},"Bank, l\xe5n og forsikring"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BankL\xe5nOgForsikring",src:n(6850).Z,width:"1441",height:"935"})),(0,r.kt)("h3",{id:"arbeid-trygd-og-pensjon"},"Arbeid, trygd og pensjon"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ArbeidTrygdOgPensjon",src:n(5605).Z,width:"1192",height:"700"})),(0,r.kt)("h3",{id:"finans"},"Finans"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Finans",src:n(415).Z,width:"1202",height:"861"})),(0,r.kt)("h3",{id:"n\xe6ring"},"N\xe6ring"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"N\xe6ring",src:n(3881).Z,width:"1439",height:"591"})),(0,r.kt)("h3",{id:"formue-og-inntekt-i-selskap-med-deltakerfastsetting"},"Formue og inntekt i selskap med deltakerfastsetting"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"FormueOgInntektISelskapMedDeltakerfastsetting",src:n(1119).Z,width:"1287",height:"537"}))),(0,r.kt)(g,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Testdata for tjenesten kan finnes i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/tenor"},"Tenor"),' med s\xf8ket for "Spesifisert summert skattegrunnlag".'))))}f.isMDXComponent=!0},1177:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/spesifisertSummertSkattegrunnlag2016-70a30925d3ed7f9e722a7beeefe6960f.json"},7615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/spesifisertSummertSkattegrunnlag2017-23dabf3524804a9e265ca642039548f3.json"},4878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/spesifisertSummertSkattegrunnlag2018_ordinaer-f90b2619ac0b5916d727ed3b5bf84b29.json"},6473:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/spesifisertSummertSkattegrunnlag2018_pilot-ed84396d2b0ec57c983fba9dd0043f22.json"},4602:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/spesifisertSummertSkattegrunnlag2020-6a055e0829a8c026ceea02f3543c978d.json"},5605:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ArbeidTrygdOgPensjon-cd9de3879704d7cc391cc0eb77a80ac8.png"},6850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/BankL\xe5nOgForsikring-3fe386a4108ea5a90b1df4901f2d54ab.png"},8049:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/EiendelerOgFasteEiendommer-d0362a13704d87b5c4b3628ab51987af.png"},415:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Finans-6c23e0f55fc45254add033e85eeb6639.png"},1119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/FormueOgInntektISelskapMedDeltakerfastsetting-c9eb76a5fcfb50edad1a870533b10739.png"},3881:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/N\xe6ring-46907848b88a324ea52b4445981f98fa.png"},6584:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Oversikt-7b225c2718cc4451eb24824259ff8813.png"}}]);