"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[2650],{89384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=t(74848),i=t(28453);const l={title:"Feil",slug:"/om/feil",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["Feilh\xe5ndtering"],keywords:["feilh\xe5ndtering","feilmeldinger feilkoder","http"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},s=void 0,d={id:"om/feil",title:"Feil",description:"Feilh\xe5ndtering i Skatteetatens tjenester.",source:"@site/docs/om/feil.md",sourceDirName:"om",slug:"/om/feil",permalink:"/api-dokumentasjon/om/feil",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Feilh\xe5ndtering",permalink:"/api-dokumentasjon/tags/feilhandtering"}],version:"current",frontMatter:{title:"Feil",slug:"/om/feil",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["Feilh\xe5ndtering"],keywords:["feilh\xe5ndtering","feilmeldinger feilkoder","http"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Delegere rettigheter i Altinn",permalink:"/api-dokumentasjon/om/delegering"},next:{title:"Rettighetspakker",permalink:"/api-dokumentasjon/om/rettighetspakker"}},a={},o=[{value:"HTTP statuskoder",id:"http-statuskoder",level:2},{value:"Feilmeldinger",id:"feilmeldinger",level:2},{value:"Felles feilkoder",id:"felles-feilkoder",level:3},{value:"Andre generelle feil",id:"andre-generelle-feil",level:2},{value:"Melde feil",id:"melde-feil",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Summary:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Summary",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:"Feilh\xe5ndtering i Skatteetatens tjenester."}),"\n",(0,r.jsx)(n.h2,{id:"http-statuskoder",children:"HTTP statuskoder"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"HTTP kode"}),(0,r.jsx)(n.th,{children:"Beskrivelse"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200 OK"}),(0,r.jsx)(n.td,{children:"Henting av data gikk bra, og man f\xe5r data i JSON (eller XML) format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"400 Bad request"}),(0,r.jsx)(n.td,{children:"Feil i sp\xf8rring. Applikasjonen vil gi en detaljert feilmelding p\xe5 norsk for hva som er feil med sp\xf8rring"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"401 Unauthorized"}),(0,r.jsx)(n.td,{children:"Autorisasjoner som trengs for \xe5 bruke tjenesten mangler"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"403 Forbidden"}),(0,r.jsx)(n.td,{children:"Ikke Autentisert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404 Not Found"}),(0,r.jsx)(n.td,{children:"Applikasjonen vil gi en detaljert feilmelding p\xe5 norsk for hva som ikke ble funnet. Kan ogs\xe5 bety at man bruker feil adresse for tjenesten (i s\xe5 fall vil man f\xe5 en standard '404 NOT FOUND' og ikke et svar fra applikasjonen)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500 Internal Server Error"}),(0,r.jsx)(n.td,{children:"Feil p\xe5 server side, for eksempel at en underliggende datakilde ikke svarer. Kontakt Skatteetatens kundeservice hvis feilen vedvarer"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"feilmeldinger",children:"Feilmeldinger"}),"\n",(0,r.jsx)(n.p,{children:"Som hovedregel vil feilmeldinger fra tjenestene v\xe6re p\xe5 f\xf8lgende format i JSON:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'  {\n  "kode": "BSA-006",\n  "melding": "Fant ikke beregnet skatt for gitt inntekts\xe5r og identifikator",\n  "korrelasjonsid": "13a865f5-28f9-47db-9abd-ab78977c79fe"\n  }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Dersom ",(0,r.jsx)(n.code,{children:"Accept"}),"-header er satt til ",(0,r.jsx)(n.code,{children:"application/xml"})," vil en eventuell feilmelding v\xe6re i XML:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<feil xmlns="urn:no:skatteetaten:datasamarbeid:feil:v1">\n   <kode>ARBEIDSFORHOLD-003</kode>\n   <melding>Fant ingen aktivt arbeidsforhold mellom angitt arbeidstaker og angitt arbeidsgiver</melding>\n   <korrelasjonsid>a621a996-315d-4b8a-ac6c-6239e67f03e7</korrelasjonsid>\n</feil>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Ved feilrapportering er spesielt ",(0,r.jsx)(n.code,{children:"korrelasjonsid"})," nyttig, men rapporter gjerne hele feilmeldingen for \xe5 forenkle feils\xf8king.\nKorrelasjonsid skal v\xe6re unik pr. kall, og ikke gjenbrukes p\xe5 tvers av kall mot Skatteetaten, selv om de er del av samme l\xf8sning hos konsumenten."]}),"\n",(0,r.jsx)(n.h3,{id:"felles-feilkoder",children:"Felles feilkoder"}),"\n",(0,r.jsx)(n.p,{children:"Applikasjonene har noen feilkoder som er felles. De fleste av disse (alle som har HTTP status 500) skal i en normalsituasjon ikke forekomme for brukere av tjenestene. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"HTTP status"}),(0,r.jsx)(n.th,{children:"Feilkode"}),(0,r.jsx)(n.th,{children:"Feilmelding"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"DAS-001"}),(0,r.jsx)(n.td,{children:"Det var en uventet feil p\xe5 tjenesten. Vennligst ta kontakt med brukerst\xf8tte, med applikasjon og korrelasjonsid fra denne meldingen!"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"DAS-002"}),(0,r.jsx)(n.td,{children:"Den forespurte URLen svarer ikke til et gyldig endepunkt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"DAS-003"}),(0,r.jsx)(n.td,{children:"Den forespurte informasjonen er for \xf8yeblikket utilgjengelig, vennligst pr\xf8v igjen senere! Dersom problemet vedvarer, ta kontakt med brukerst\xf8tte!"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"DAS-004"}),(0,r.jsx)(n.td,{children:"Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"DAS-005"}),(0,r.jsx)(n.td,{children:"Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"DAS-006"}),(0,r.jsx)(n.td,{children:"Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"DAS-007"}),(0,r.jsx)(n.td,{children:"Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"403"}),(0,r.jsx)(n.td,{children:"DAS-008"}),(0,r.jsx)(n.td,{children:"Du er ikke autorisert for tilgang til den forespurte ressursen."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"andre-generelle-feil",children:"Andre generelle feil"}),"\n",(0,r.jsx)(n.p,{children:"I noen tilfeller, for eksempel dersom foresp\xf8rselen ikke n\xe5r frem til tjenesten, vil ikke feilmeldingen ha formatet over. I tabellen under har vi listet opp noen vanlige feilsituasjoner der dette kan oppst\xe5."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feil"}),(0,r.jsx)(n.th,{children:"Tolkning"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fatal alert: handshake_failure  (eller annen TLS feilmelding)"}),(0,r.jsxs)(n.td,{children:["Feil i klientsertifikat autentisering. Se ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"dokumentasjon om sikkerhet"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Unknown instance. ID=8ac2..."}),(0,r.jsx)(n.td,{children:"Foresp\xf8rselen er gjort mot en ugyldig URL som ikke svarer til noen tjeneste."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"melde-feil",children:"Melde feil"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api-dokumentasjon/kontaktoss",children:"Kontakt oss"})," hvis du opplever vedvarende feil med tjenestene v\xe5re."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(96540);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);