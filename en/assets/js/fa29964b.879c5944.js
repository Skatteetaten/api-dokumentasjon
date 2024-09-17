"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4420],{68315:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var t=i(74848),s=i(28453);const d={title:"Mva-melding innsending API",slug:"/api/mvameldinginnsending",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Mva-melding innsending","Mva-melding"],keywords:["mva"],last_updated:"Feb 21, 2024",hide_table_of_contents:!0},r=void 0,l={id:"api/mvameldinginnsending",title:"Mva-melding innsending API",description:"Tjenesten brukes til innsending av Mva-melding.",source:"@site/docs/api/mvameldinginnsending.md",sourceDirName:"api",slug:"/api/mvameldinginnsending",permalink:"/api-dokumentasjon/en/api/mvameldinginnsending",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/en/tags/api"},{inline:!0,label:"Mva-melding innsending",permalink:"/api-dokumentasjon/en/tags/mva-melding-innsending"},{inline:!0,label:"Mva-melding",permalink:"/api-dokumentasjon/en/tags/mva-melding"}],version:"current",frontMatter:{title:"Mva-melding innsending API",slug:"/api/mvameldinginnsending",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Mva-melding innsending","Mva-melding"],keywords:["mva"],last_updated:"Feb 21, 2024",hide_table_of_contents:!0}},a={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Sikkerhet",id:"sikkerhet",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"XSD for mva-meldingen versjon 1.0",id:"xsd-for-mva-meldingen-versjon-10",level:2},{value:"Kompensasjon i alminnelig mva-melding",id:"kompensasjon-i-alminnelig-mva-melding",level:2},{value:"Url&#39;er til testmilj\xf8et",id:"urler-til-testmilj\xf8et",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Summary:d,TabItem:r,Tabs:l}=n;return d||g("Summary",!0),r||g("TabItem",!0),l||g("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{children:"Tjenesten brukes til innsending av Mva-melding."}),"\n",(0,t.jsxs)(l,{underline:!0,children:[(0,t.jsxs)(r,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,t.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/versjoner",children:"Versjonering"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,t.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,t.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,t.jsx)(n.code,{children:"skatteetaten:mvameldinginnsending"})]}),(0,t.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,t.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,t.jsx)(n.code,{children:"Mva-melding innsending API - P\xe5 vegne av"})]}),(0,t.jsx)(n.h2,{id:"sikkerhet",children:"Sikkerhet"}),(0,t.jsx)(n.p,{children:"For mva-meldinginnsending er det Altinn token som brukes:"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.altinn.studio//nb/api/authentication/id-porten/#veksling-av-access-token-til-altinn-token",children:"https://docs.altinn.studio//nb/api/authentication/id-porten/#veksling-av-access-token-til-altinn-token"})}),(0,t.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,t.jsx)(n.p,{children:"URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons..."}),(0,t.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,t.jsx)(n.p,{children:"Dette API-et er pt. ikke dokumentert i Felles datakatalog."})]}),(0,t.jsx)(r,{headerText:"Eksempler",itemKey:"itemKey-2",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Legg inn eksempel\n"})})}),(0,t.jsxs)(r,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,t.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,t.jsx)(n.a,{href:"/api-dokumentasjon/en/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,t.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"HTTP Statuskode"}),(0,t.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Ingen mva-melding funnet p\xe5 oppgitt referanse."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"406"}),(0,t.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,t.jsxs)(r,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:[(0,t.jsx)(n.h2,{id:"xsd-for-mva-meldingen-versjon-10",children:"XSD for mva-meldingen versjon 1.0"}),(0,t.jsxs)(n.p,{children:["Mva-meldingen sendes inn i XML-format. Den m\xe5 v\xe6re i henhold til strukturen dokumentert i XSD for mva-melding.\nVersjon 1.0 av denne XSD'en ligger her: no.skatteetaten.fastsetting.avgift.mva.skattemeldingformerverdiavgift.v1.0.xsd\nGrafisk fremstilling av xsd og kodelister for ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(6967).A+"",children:(0,t.jsx)(n.img,{alt:"mva-meldingen:",src:i(63979).A+"",width:"1610",height:"2531"})})]}),(0,t.jsx)(n.p,{children:"SAF-T standarden inneholder ogs\xe5 kodene 0 (Ingen merverdiavgiftsbehandling (anskaffelser)), 7 (Ingen merverdiavgiftsbehandling (inntekter)), 20 (Kostnad ved innf\xf8rsel av varer, ingen merverdiavgiftsbehandling)\n, 21 (Kostnader ved innf\xf8rsel av varer, alminnelig sats) og 22 (Kostnader ved innf\xf8rsel av varer, redusert sats, middels). Disse skal ikke rapporteres i mva-meldingen."}),(0,t.jsx)(n.h2,{id:"kompensasjon-i-alminnelig-mva-melding",children:"Kompensasjon i alminnelig mva-melding"}),(0,t.jsx)(n.p,{children:"Fra 01.01.2023 er spesifikasjonen \xabKj\xf8p med kompensasjonsrett\xbb lagt til p\xe5 5 koder i mva-melding, i tillegg til de eksisterende spesifikasjonene. De ber\xf8rte kodene med ny spesifikasjon er 81, 83, 86, 88 og 91. Felles for disse kodene er at innf\xf8rsel av varer og tjenester (pluss innenlands kj\xf8p av klimakvoter og gull) utl\xf8ser utg\xe5ende innf\xf8rselsmerverdiavgift og at en har enten kompensasjonsrett for inng\xe5ende mva eller direkte fradragsrett for inng\xe5ende mva. Virksomheter som bruker disse kodene i ordin\xe6r mva-melding kan kreve kompensasjon ved \xe5 levere kompensasjonsmelding i tillegg."})]}),(0,t.jsxs)(r,{headerText:"Test",itemKey:"itemKey-5",children:[(0,t.jsx)(n.h2,{id:"urler-til-testmilj\xf8et",children:"Url'er til testmilj\xf8et"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Tjeneste"}),(0,t.jsx)(n.th,{children:"Url"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Validering"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://idporten-api-sbstest.sits.no/api/mva/grensesnittstoette/mva-melding/valider",children:"https://idporten-api-sbstest.sits.no/api/mva/grensesnittstoette/mva-melding/valider"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Innsending"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/",children:"https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Instans API"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/instances",children:"https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/instances"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID-porten integrasjon"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://test.idporten.no/.well-known/openid-configuration",children:"https://test.idporten.no/.well-known/openid-configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Altinn tokenveksling"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://platform.tt02.altinn.no/authentication/api/v1/exchange/id-porten",children:"https://platform.tt02.altinn.no/authentication/api/v1/exchange/id-porten"})})]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6967:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/files/SkattemeldingForMerverdiavgift2020-0b978039e6768ccb50d46896ead7ad9b.png"},63979:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SkattemeldingForMerverdiavgift2020-0b978039e6768ccb50d46896ead7ad9b.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);