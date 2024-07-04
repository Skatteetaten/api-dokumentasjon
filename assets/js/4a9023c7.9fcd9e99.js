"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1250],{81636:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=s(74848),r=s(28453);const i={title:"Hendelser",slug:"/api/hendelser",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","St\xf8ttetjeneste","Hendelser"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Jul 04, 2024",hide_table_of_contents:!0},l=void 0,d={id:"api/hendelser",title:"Hendelser",description:"Tjenestene leverer l\xf8pende varslinger om personer/virksomheter med nye eller endrede opplysninger",source:"@site/docs/api/hendelser.md",sourceDirName:"api",slug:"/api/hendelser",permalink:"/api-dokumentasjon/api/hendelser",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/tags/api"},{inline:!0,label:"St\xf8ttetjeneste",permalink:"/api-dokumentasjon/tags/stottetjeneste"},{inline:!0,label:"Hendelser",permalink:"/api-dokumentasjon/tags/hendelser"}],version:"current",frontMatter:{title:"Hendelser",slug:"/api/hendelser",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","St\xf8ttetjeneste","Hendelser"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Jul 04, 2024",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Formuesgrunnlag for eiendomsskatt API",permalink:"/api-dokumentasjon/api/formuesgrunnlageiendomsskatt"},next:{title:"Inntekt API",permalink:"/api-dokumentasjon/api/inntekt"}},a={},h=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Hendelsestyper",id:"hendelsestyper",level:2},{value:"Hendelsesliste suksess (HTTP status 200) for Inntekt hendelser",id:"hendelsesliste-suksess-http-status-200-for-inntekt-hendelser",level:2},{value:"JSON",id:"json",level:3},{value:"Hendelsesliste suksess (HTTP status 200) for Skattemelding fastsatt hendelser",id:"hendelsesliste-suksess-http-status-200-for-skattemelding-fastsatt-hendelser",level:2},{value:"Curl",id:"curl",level:3},{value:"JSON",id:"json-1",level:3},{value:"Hendelsesliste suksess (HTTP status 200) for N\xe6ringsspesifikasjon hendelser",id:"hendelsesliste-suksess-http-status-200-for-n\xe6ringsspesifikasjon-hendelser",level:2},{value:"Curl",id:"curl-1",level:3},{value:"JSON",id:"json-2",level:3},{value:"XML",id:"xml",level:3},{value:"F\xf8rste sekvensnummer fra dato suksess (HTTP status 200)",id:"f\xf8rste-sekvensnummer-fra-dato-suksess-http-status-200",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Summary:i,TabItem:l,Tabs:d}=n;return i||p("Summary",!0),l||p("TabItem",!0),d||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:"Tjenestene leverer l\xf8pende varslinger om personer/virksomheter med nye eller endrede opplysninger\ntilgjengelig."}),"\n",(0,t.jsxs)(d,{underline:!0,children:[(0,t.jsxs)(l,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,t.jsxs)(n.p,{children:["Hendeleslistene er st\xf8ttetjenester som gir informasjon om endringer i datasett som leveres av Skatteetatens\ndatatjenester, og henger tett sammen med relatert oppslagstjeneste. Se mer informasjon p\xe5 ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"egen side"}),"."]}),(0,t.jsx)(n.p,{children:"Hendelseslistene navigeres vha. sekvensnummer og er paginert."}),(0,t.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,t.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,t.jsx)(n.p,{children:"Man trenger ikke egne scope for hendelseslistene, de benytter samme scope som relaterte oppslagstjenester:"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Hendelsesliste"}),(0,t.jsx)(n.th,{children:"Scope"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Arbeidsforhold hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":arbeidsforhold"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Formuesgrunnlag for eiendomsskatt hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":formuesgrunnlageiendomsskatt"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Formuesobjekt fast eiendom hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":formuesobjektfasteiendom"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Inntekt hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":inntekt"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mva-melding hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":mvamelding"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":mvaregisteravgiftssubjekt"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xe6ringsspesifikasjon hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":naeringsspesifikasjon"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pensjonsgivende inntekt for folketrygden hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":pensjonsgivendeinntektforfolketrygden"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Selskapsmelding hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":selskapsmelding"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Skatteoppgj\xf8r hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":spesifisertsummertskattegrunnlag",", skatteetaten",":summertskattegrunnlag",", skatteetaten",":beregnetskatt",", skatteetaten",":avregning",", skatteetaten",":skatteplikt",", skatteetaten",":pensjonsgivendeinntekt",", skatteetaten",":trukketkildeskattpaaloenn"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Skatteoppgj\xf8r upersonlig hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":beregnetskattupersonlig",", skatteetaten",":skatteberegningsgrunnlagupersonlig",", skatteetaten",":summertskattegrunnlagupersonlig",", skatteetaten",":skattepliktupersonlig"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Skattemelding fastsatt hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":skattemelding",", skatteetaten",":summertskattegrunnlag",", skatteetaten",":spesifisertsummertskattegrunnlag"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Skattemelding upersonlig hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":skattemelding",", skatteetaten",":summertskattegrunnlag",", skatteetaten",":spesifisertsummertskattegrunnlag"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Skattemelding utkast hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":skattemelding"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Tilleggsskatt hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":tilleggsskatt"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Underenhet fra A-ordningen hendelser API"}),(0,t.jsxs)(n.td,{children:["skatteetaten",":underenhetaordningen"]})]})]})]}),(0,t.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,t.jsx)(n.p,{children:"Delegering i Altinn gj\xf8res pr. scope, s\xe5 tilgang til hendelseslisterer er h\xe5ndtert hvis oppslagstjenesten er delegert."}),(0,t.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,t.jsx)(n.p,{children:"URL-er til API-ene, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonene til\nhendelseslistene p\xe5 SwaggerHub:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/arbeidsforhold-hendelser-api",children:"Arbeidsforhold hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/formuesgrunnlag-for-endomsskatt-hendelser-api",children:"Formuesgrunnlag for eiendomsskatt hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/formuesobjekt-fast-eiendom-hendelser-api",children:"Formuesobjekt fast eiendom hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/inntekt-hendelser-api",children:"Inntekt hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/mva-melding-hendelser-api",children:"Mva-melding hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/mva-register-avgiftssubjekter-hendelser-api/",children:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/naeringsspesifikasjon-hendelser-api",children:"N\xe6ringsspesifikasjon hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/pensjonsgivende-inntekt-for-folketrygden-hendelser-api/",children:"Pensjonsgivende inntekt for folketrygden hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/selskapsmelding-hendelser-api",children:"Selskapsmelding hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skatteoppgjor-hendelser-api",children:"Skatteoppgj\xf8r hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skatteoppgjor-upersonlig-hendelser-api",children:"Skatteoppgj\xf8r upersonlig hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skattemelding-fastsatt-hendelser-api",children:"Skattemelding fastsatt hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skattemelding-upersonlig-hendelser-api",children:"Skattemelding upersonlig hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/skattemelding-utkast-hendelser-api",children:"Skattemelding utkast hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/tilleggsskatt-hendelser-api",children:"Tilleggsskatt hendelser API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/underenhet-fra-a-ordningen-hendelser-api",children:"Underenhet fra A-ordningen hendelser API"})}),"\n"]}),(0,t.jsx)(n.h2,{id:"hendelsestyper",children:"Hendelsestyper"}),(0,t.jsx)(n.p,{children:"De vanligste hendelsestypene er ny, endret og slettet, men det st\xf8ttes ikke n\xf8dvendigvis i alle hendelseslistene. Her er\nnoen eksempler:"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nye data:"})," Summert skattegrunnlag er klart for en skattepliktig for et inntekts\xe5r:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hendelseslisten for skatteoppgj\xf8r"})," vil inneholde en hendelse for den skattepliktige og inntekts\xe5ret."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Summert skattegrunnlag API"})," returnerer data hvis man sp\xf8r p\xe5 inntekts\xe5r og skattepliktig fra hendelsen"]}),"\n"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endrede data:"})," En arbeidsgiver rapporterer at en skattepliktig har f\xe5tt etterbetalt inntekt for en m\xe5ned. Fra f\xf8r\nfinnes det data for den skattepliktige for denne m\xe5neden."]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hendelseslisten for inntekt"})," vil inneholde en hendelse for den skattepliktige og den gitte m\xe5neden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Inntekt API"})," returnerer oppdaterte inntektsdata for den skattepliktige og den gitte m\xe5neden."]}),"\n"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Slettede data:"})," Et fagsystem i skatteetaten sletter data for en skattepliktig (skjer sjelden, men kan skje ifm\nfeilrettinger eller andre spesielle omstendigheter)"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hendelseslisten for datasettet"})," vil inneholde en hendelse for datasettet og perioden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Datasett API"})," returnerer HTTP statuskode 410 og en feilmelding som indikerer at data ikke finnes lenger n\xe5r man\nsp\xf8r p\xe5 skattepliktig og angitt periode."]}),"\n"]})]}),(0,t.jsxs)(l,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,t.jsx)(n.h2,{id:"hendelsesliste-suksess-http-status-200-for-inntekt-hendelser",children:"Hendelsesliste suksess (HTTP status 200) for Inntekt hendelser"}),(0,t.jsx)(n.h3,{id:"json",children:"JSON"}),(0,t.jsx)(n.p,{children:"NB! For inntekt s\xe5 leveres det forel\xf8pig ikke informasjon i type-feltet."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "hendelser": [\n    {\n      "sekvensnummer": 1,\n      "identifikator": "09048000875",\n      "gjelderPeriode": "2023-01"\n    },\n    {\n      "sekvensnummer": 12,\n      "identifikator": "20125001158",\n      "gjelderPeriode": "2023-02"\n    },\n    {\n      "sekvensnummer": 23,\n      "identifikator": "02043700564",\n      "gjelderPeriode": "2023-10"\n    },\n    {\n      "sekvensnummer": 34,\n      "identifikator": "17014200150",\n      "gjelderPeriode": "2023-12"\n    },\n    {\n      "sekvensnummer": 45,\n      "identifikator": "17055401993",\n      "gjelderPeriode": "2023-12"\n    }\n  ]\n}\n'})}),(0,t.jsx)(n.h2,{id:"hendelsesliste-suksess-http-status-200-for-skattemelding-fastsatt-hendelser",children:"Hendelsesliste suksess (HTTP status 200) for Skattemelding fastsatt hendelser"}),(0,t.jsx)(n.p,{children:"Skattemelding fastsatt hendelser, Skattemelding utkast hendelser og Skatteoppgj\xf8r hendelser inneholder informasjon om\nregistreringstidspunkt og hendelsetype i tillegg."}),(0,t.jsx)(n.h3,{id:"curl",children:"Curl"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/skattemelding/fastsatt/hendelser/?fraSekvensnummer=1&antall=5"\n'})}),(0,t.jsx)(n.h3,{id:"json-1",children:"JSON"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "hendelser": [\n    {\n      "sekvensnummer": 1,\n      "identifikator": "28064701918",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-03-10T09:29:16.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 2,\n      "identifikator": "29114501318",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-03-10T08:02:43.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 3,\n      "identifikator": "10038500495",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-04-16T12:29:39.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 4,\n      "identifikator": "25035401310",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-04-16T11:31:32.000000Z",\n      "hendelsetype": "NY"\n    },\n    {\n      "sekvensnummer": 5,\n      "identifikator": "01065402439",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2021-04-16T10:01:03.000000Z",\n      "hendelsetype": "NY"\n    }\n  ]\n}\n'})}),(0,t.jsx)(n.h2,{id:"hendelsesliste-suksess-http-status-200-for-n\xe6ringsspesifikasjon-hendelser",children:"Hendelsesliste suksess (HTTP status 200) for N\xe6ringsspesifikasjon hendelser"}),(0,t.jsx)(n.p,{children:"N\xe6ringsspesifikasjon hendelser inneholder ogs\xe5 informasjon om registreringstidspunkt, hendelsetype og typeSkattepliktig\ni tillegg."}),(0,t.jsx)(n.h3,{id:"curl-1",children:"Curl"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/naeringsspesifikasjon/v1/hendelser/?fraSekvensnummer=1&antall=9"\n'})}),(0,t.jsx)(n.h3,{id:"json-2",children:"JSON"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "hendelser": [\n    {\n      "sekvensnummer": 1,\n      "identifikator": "25038804416",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-19T09:40:03Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 2,\n      "identifikator": "25015201137",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-25T10:49:19Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 3,\n      "identifikator": "25015201137",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-25T09:53:30.774522Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "upersonligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 4,\n      "identifikator": "10037819471",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-02-10T14:04:08Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "upersonligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 5,\n      "identifikator": "29026009527",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-02-11T12:04:50Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 6,\n      "identifikator": "02118001764",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-02-21T11:50:57.626248Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 7,\n      "identifikator": "24065600842",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-18T14:24:01Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 8,\n      "identifikator": "24085701718",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-14T16:34:22Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    },\n    {\n      "sekvensnummer": 9,\n      "identifikator": "15124802560",\n      "gjelderPeriode": "2020",\n      "registreringstidspunkt": "2022-01-18T13:46:27Z",\n      "hendelsetype": "NY",\n      "typeSkattepliktig": "personligSkattepliktig"\n    }\n  ]\n}\n'})}),(0,t.jsx)(n.h3,{id:"xml",children:"XML"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(46068).A+"",children:"hendelser.xsd"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(84866).A+"",children:"hendelser.xml (eksempel)"})}),(0,t.jsx)(n.h3,{id:"f\xf8rste-sekvensnummer-fra-dato-suksess-http-status-200",children:"F\xf8rste sekvensnummer fra dato suksess (HTTP status 200)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "sekvensnummer": 21\n}\n'})})]}),(0,t.jsxs)(l,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,t.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,t.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne\nvariere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feilkode"}),(0,t.jsx)(n.th,{children:"HTTP Statuskode"}),(0,t.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FA-001"}),(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FA-002"}),(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FA-003"}),(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FA-004"}),(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FA-005"}),(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Ingen hendelser funnet for oppgitt input."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FA-006"}),(0,t.jsx)(n.td,{children:"406"}),(0,t.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]}),(0,t.jsxs)(n.p,{children:["Obs. oversikten over gjelder ikke for\n",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/api/arbeidsforhold?tab=Feilkoder",children:"Arbeidsforhold hendelser API"}),"\n",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/api/formuesgrunnlageiendomsskatt?tab=Feilkoder",children:"Formuesgrunnlag for eiendomsskatt hendelser API"}),",\n",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/api/formuesobjektfasteiendom?tab=Feilkoder",children:"Formuesobjekt fast eiendom hendelser API"}),",\n",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/api/mvamelding?tab=Feilkoder",children:"Mva-melding hendelser API"})," og\n",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/api/mvaregisteravgiftssubjekt?tab=Feilkoder",children:"Mva-register \u2013 avgiftssubjekter med skattemeldingsplikt hendelser API"}),"\n",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/api/underenhetaordningen?tab=Feilkoder",children:"Underenhet fra A-ordningen hendelser API"}),"\nhvor hendelseslisten er knyttet tettere sammen med oppslagstjenesten, se derfor feilkoder for tjenesten."]})]})]})]})}function k(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84866:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/hendelser_skattemelding_fastsatt-aa89ef90759e5a39263f396348e35d30.xml"},46068:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/hendelser_utvidet-c53e022ed2dcf761555d08d0beb5d74d.xsd"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var t=s(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);