"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[2144],{56879:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var r=i(74848),t=i(28453);const s={title:"Mva-melding validering API",slug:"/api/mvameldingvalidering",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Mva-melding validering","Mva-melding"],keywords:["mva"],last_updated:"Feb 21, 2024",hide_table_of_contents:!0},l=void 0,d={id:"api/mvameldingvalidering",title:"Mva-melding validering API",description:"Tjenesten brukes til validering av innsendt  Mva-melding.",source:"@site/docs/api/mvameldingvalidering.md",sourceDirName:"api",slug:"/api/mvameldingvalidering",permalink:"/api-dokumentasjon/api/mvameldingvalidering",draft:!1,unlisted:!1,tags:[{inline:!0,label:"API",permalink:"/api-dokumentasjon/tags/api"},{inline:!0,label:"Mva-melding validering",permalink:"/api-dokumentasjon/tags/mva-melding-validering"},{inline:!0,label:"Mva-melding",permalink:"/api-dokumentasjon/tags/mva-melding"}],version:"current",frontMatter:{title:"Mva-melding validering API",slug:"/api/mvameldingvalidering",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Mva-melding validering","Mva-melding"],keywords:["mva"],last_updated:"Feb 21, 2024",hide_table_of_contents:!0}},a={},g=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Sikkerhet",id:"sikkerhet",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Url&#39;er til testmilj\xf8et",id:"urler-til-testmilj\xf8et",level:2},{value:"Valideringsregler",id:"valideringsregler",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Summary:i,TabItem:s,Tabs:l}=n;return i||m("Summary",!0),s||m("TabItem",!0),l||m("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{children:"Tjenesten brukes til validering av innsendt  Mva-melding."}),"\n",(0,r.jsxs)(l,{underline:!0,children:[(0,r.jsxs)(s,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,r.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/rettighetspakker",children:"Rettighetspakker"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,r.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,r.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.jsx)(n.code,{children:"skatteetaten:mvameldingvalidering"})]}),(0,r.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,r.jsxs)(n.p,{children:["Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.jsx)(n.code,{children:"Mva-melding innsending API - P\xe5 vegne av"})]}),(0,r.jsx)(n.h2,{id:"sikkerhet",children:"Sikkerhet"}),(0,r.jsx)(n.p,{children:"For mva-meldingvalidering er det ID-porten token som gjelder:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://samarbeid.digdir.no/id-porten/ta-i-bruk-id-porten/94",children:"https://samarbeid.digdir.no/id-porten/ta-i-bruk-id-porten/94"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.digdir.no/docs/idporten/oidc/oidc_protocol_id_token.html",children:"https://docs.digdir.no/docs/idporten/oidc/oidc_protocol_id_token.html"})}),(0,r.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,r.jsx)(n.p,{children:"URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons..."}),(0,r.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,r.jsx)(n.p,{children:"Dette API-et er pt. ikke dokumentert i Felles datakatalog."})]}),(0,r.jsx)(s,{headerText:"Eksempler",itemKey:"itemKey-2",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Legg inn eksempel\n"})})}),(0,r.jsxs)(s,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,r.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,r.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,r.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"HTTP Statuskode"}),(0,r.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Ukjent url benyttet."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"401"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med autentisering."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"403"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med autorisering."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Feil i forbindelse med validering av inputdata."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Ingen mva-melding funnet p\xe5 oppgitt referanse."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"406"}),(0,r.jsx)(n.td,{children:"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."})]})]})]})]}),(0,r.jsx)(s,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,r.jsx)(n.p,{children:"Her kan du legge inn skjermbilde av informasjonsmodell."})}),(0,r.jsxs)(s,{headerText:"Test",itemKey:"itemKey-5",children:[(0,r.jsx)(n.h2,{id:"urler-til-testmilj\xf8et",children:"Url'er til testmilj\xf8et"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tjeneste"}),(0,r.jsx)(n.th,{children:"Url"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Validering"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://idporten-api-sbstest.sits.no/api/mva/grensesnittstoette/mva-melding/valider",children:"https://idporten-api-sbstest.sits.no/api/mva/grensesnittstoette/mva-melding/valider"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Innsending"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/",children:"https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Instans API"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/instances",children:"https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/instances"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID-porten integrasjon"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://test.idporten.no/.well-known/openid-configuration",children:"https://test.idporten.no/.well-known/openid-configuration"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Altinn tokenveksling"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://platform.tt02.altinn.no/authentication/api/v1/exchange/id-porten",children:"https://platform.tt02.altinn.no/authentication/api/v1/exchange/id-porten"})})]})]})]})]}),(0,r.jsxs)(s,{headerText:"Valideringsregler",itemKey:"itemKey-6",children:[(0,r.jsx)(n.h2,{id:"valideringsregler",children:"Valideringsregler"}),(0,r.jsx)(n.p,{children:"Valideringsreglene er under utvikling og nye valideringsregler vil bli lagt til fortl\xf8pende."}),(0,r.jsx)(n.p,{children:"F\xf8lgende valideringsregler er forel\xf8pig definert for alle mva-meldinger:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Summen av merverdiavgift for hver avgiftslinje er ikke lik feltet fastsattMerverdiavgift (R018)"}),"\n",(0,r.jsx)(n.li,{children:"Beregnet avgift i avgiftslinje er ulik produktet av grunnlag og sats (R019)"}),"\n",(0,r.jsx)(n.li,{children:"Meldingen m\xe5 v\xe6re en ordin\xe6r (aliminnelig eller prim\xe6rn\xe6ring) melding, krav om kompensasjon eller omvendt avgiftsplikt mva-melding (R104)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinje som gjelder tilbakef\xf8ring av inng\xe5ende mva. gitt i mva \xa79-6 og \xa79-7 m\xe5 sendes med en merknad (R078)"}),"\n",(0,r.jsx)(n.li,{children:"KID-nummeret m\xe5 v\xe6re gyldig (R079)"}),"\n",(0,r.jsx)(n.li,{children:"Innsendte bel\xf8p skal ikke inneholde desimaler (R082)"}),"\n",(0,r.jsx)(n.li,{children:"Bel\xf8p p\xe5 grunnlag feltet m\xe5 v\xe6re under en maks verdi (R085)"}),"\n",(0,r.jsx)(n.li,{children:"Merknader m\xe5 v\xe6re gyldig for brukt mva-kode (vanlig fortegn) (R074)"}),"\n",(0,r.jsx)(n.li,{children:"Merknader m\xe5 v\xe6re gyldig for brukt mva-kode (motsatt fortegn) (R075)"}),"\n",(0,r.jsx)(n.li,{children:"Merknader m\xe5 v\xe6re gyldig for brukt mva-kode (linje med spesifikasjon) (R076)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinje som gjelder kj\xf8p med kompensasjonsrett m\xe5 ha med grunnlag og sats (R116)"}),"\n",(0,r.jsx)(n.li,{children:"Merverdiavgift i kodelinjer skal ha lavere bel\xf8p enn grunnlaget (R122)"}),"\n"]})]})]}),"\n",(0,r.jsxs)(l,{underline:!0,children:[(0,r.jsxs)(s,{headerText:"Alminnelig- og prim\xe6rn\xe6ring",itemKey:"itemKey-1",default:!0,children:[(0,r.jsx)(n.p,{children:"F\xf8lgende valideringsregler er forel\xf8pig definert for ordin\xe6r (alminnelig og prim\xe6rn\xe6ring) mva-meldinger:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Merknad til bel\xf8p med motsatt fortegn som gjelder grunnlag og utg\xe5ende avgift mangler (R020)"}),"\n",(0,r.jsx)(n.li,{children:"Merknad til bel\xf8p med motsatt fortegn som gjelder fradragsf\xf8rt inng\xe5ende avgift mangler (R021)"}),"\n",(0,r.jsx)(n.li,{children:"Fradragsf\xf8rt inng\xe5ende avgift som gjelder varer kj\xf8pt fra utlandet med fradragsrett, skal v\xe6re mindre enn eller lik utg\xe5ende avgift (kode 81) (R023)"}),"\n",(0,r.jsx)(n.li,{children:"Fradragsf\xf8rt inng\xe5ende avgift som gjelder varer kj\xf8pt fra utlandet med fradragsrett, skal v\xe6re mindre enn eller lik utg\xe5ende avgift (kode 83) (R024)"}),"\n",(0,r.jsx)(n.li,{children:"Fradragsf\xf8rt inng\xe5ende avgift som gjelder tjenester kj\xf8pt fra utlandet med fradragsrett skal v\xe6re mindre enn eller lik utg\xe5ende avgift (kode 86) (R025)"}),"\n",(0,r.jsx)(n.li,{children:"Fradragsf\xf8rt inng\xe5ende avgift som gjelder tjenester kj\xf8pt fra utlandet med fradragsrett skal v\xe6re mindre enn eller lik utg\xe5ende avgift (kode 88) (R026)"}),"\n",(0,r.jsx)(n.li,{children:"Fradragsf\xf8rt inng\xe5ende avgift som gjelder kj\xf8p av klimakvoter og gull med fradragsrett, skal v\xe6re mindre enn eller lik utg\xe5ende avgift (R027)"}),"\n",(0,r.jsx)(n.li,{children:"Utg\xe5ende avgift skal v\xe6re beregnet dersom det er f\xf8rt fradrag for inng\xe5ende avgift som gjelder kj\xf8p av varer fra utlandet med fradragsrett (kode 81) (R028)"}),"\n",(0,r.jsx)(n.li,{children:"Utg\xe5ende avgift skal v\xe6re beregnet dersom det er f\xf8rt fradrag for inng\xe5ende avgift som gjelder kj\xf8p av varer fra utlandet med fradragsrett (kode 83) (R029)"}),"\n",(0,r.jsx)(n.li,{children:"Utg\xe5ende avgift skal v\xe6re beregnet dersom det er f\xf8rt fradrag for inng\xe5ende avgift som gjelder tjenester kj\xf8pt fra utlandet med fradragsrett (kode 86) (R030)"}),"\n",(0,r.jsx)(n.li,{children:"Utg\xe5ende avgift skal v\xe6re beregnet dersom det er f\xf8rt fradrag for inng\xe5ende avgift som gjelder tjenester kj\xf8pt fra utlandet med fradragsrett (kode 88) (R031)"}),"\n",(0,r.jsx)(n.li,{children:"Utg\xe5ende avgift skal v\xe6re beregnet dersom det er f\xf8rt fradrag for inng\xe5ende avgift som gjelder kj\xf8p av klimakvoter og gull med fradragsrett (R032)"}),"\n",(0,r.jsx)(n.li,{children:"Det skal v\xe6re fradragsf\xf8rt inng\xe5ende avgift dersom det er beregnet utg\xe5ende avgift ved kj\xf8p av varer fra utlandet med fradragsrett (kode 81) (R033)"}),"\n",(0,r.jsx)(n.li,{children:"Det skal v\xe6re fradragsf\xf8rt inng\xe5ende avgift dersom det er beregnet utg\xe5ende avgift ved kj\xf8p av varer fra utlandet med fradragsrett (kode 83) (R034)"}),"\n",(0,r.jsx)(n.li,{children:"Det skal v\xe6re fradragsf\xf8rt inng\xe5ende avgift dersom det er beregnet utg\xe5ende avgift for tjenester kj\xf8pt fra utlandet med fradragsrett (kode 86) (R035)"}),"\n",(0,r.jsx)(n.li,{children:"Det skal v\xe6re fradragsf\xf8rt inng\xe5ende avgift dersom det er beregnet utg\xe5ende avgift for tjenester kj\xf8pt fra utlandet med fradragsrett (kode 88) (R036)"}),"\n",(0,r.jsx)(n.li,{children:"Det skal v\xe6re fradragsf\xf8rt inng\xe5ende avgift dersom det er beregnet utg\xe5ende avgift ved kj\xf8p av klimakvoter og gull med fradragsrett (R037)"}),"\n",(0,r.jsx)(n.li,{children:"Avgiftspliktig omsetning skal v\xe6re under en million for alminnelig n\xe6ring plikter med \xe5rlig skattleggingsperiode (R052)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinjer skal ha en gyldig mva-kode i mva-meldinger som gjelder en alminnelig n\xe6ring plikt (R053)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinjer skal ha en gyldig mva-kode i mva-meldinger som gjelder en prim\xe6rn\xe6ring plikt (R054)"}),"\n",(0,r.jsx)(n.li,{children:"Inng\xe5ende mva. skal f\xf8res uten grunnlag og sats (R065, R081)"}),"\n",(0,r.jsx)(n.li,{children:"Utg\xe5ende mva. skal f\xf8res med grunnlag og sats (R066, R081)"}),"\n",(0,r.jsx)(n.li,{children:"Fradrag for inng\xe5ende avgift skal normalt ikke f\xf8res p\xe5 en plikt som gjelder engangsregistrering (R083)"}),"\n",(0,r.jsx)(n.li,{children:"Det m\xe5 sendes inn spesifikasjonslinjer n\xe5r det er oppgitt bel\xf8p i 'fastsatt merverdiavgift' feltet (R084)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinje som gjelder tap p\xe5 krav kan kun sendes inn p\xe5 mva-kode 1, 11, 12 eller 13 (R038)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinje som gjelder uttak kan kun sendes inn p\xe5 mva-kode 3, 5, 31 eller 33 (R039)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinje som gjelder justering kan kun sendes inn p\xe5 mva-kode 1 eller 81 (R040)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinje som gjelder tilbakef\xf8ring av inng\xe5ende mva. gitt i mva \xa79-6 og \xa79-7 kan kun sendes inn p\xe5 mva-kode 1 eller 81 (R041)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinje som gjelder kj\xf8p med kompensasjonsrett kan kun sendes inn p\xe5 mva-kode 81, 83, 86, 88 eller 91 (R114)"}),"\n",(0,r.jsx)(n.li,{children:"Oppgitt meldingskategori skal stemme med opplysningene i mva-registeret (alminnelig) (R047)"}),"\n",(0,r.jsx)(n.li,{children:"Oppgitt meldingskategori skal stemme med opplysningene i mva-registeret (prim\xe6r) (R048)"}),"\n",(0,r.jsx)(n.li,{children:"Oppgitt skattleggingsperiodetype skal stemme med opplysningene i mva-registeret (alminnelig) (R049)"}),"\n",(0,r.jsx)(n.li,{children:"Oppgitt skattleggingsperiodetype skal stemme med opplysningene i mva-registeret (prim\xe6r) (R050)"}),"\n",(0,r.jsx)(n.li,{children:"Oppgitt skattleggingsperioden skal stemme med opplysningene i mva-registeret (alminnelig) (R072)"}),"\n",(0,r.jsx)(n.li,{children:"Oppgitt skattleggingsperioden skal stemme med opplysningene i mva-registeret (prim\xe6r) (R073)"}),"\n",(0,r.jsx)(n.li,{children:"Mva-meldingen skal ikke sendes inn f\xf8r gjeldende skattleggingsperiode er ferdig (alminnelig) (R059)"}),"\n",(0,r.jsx)(n.li,{children:"Mva-meldingen skal ikke sendes inn f\xf8r gjeldende skattleggingsperiode er ferdig (prim\xe6r) (R060)"}),"\n",(0,r.jsx)(n.li,{children:"Rapporterende enhet i en fellesregistrering skal ha mva-plikt (R051)"}),"\n",(0,r.jsx)(n.li,{children:"Mva-meldinger for tidligere terminer skulle v\xe6rt levert (R061)"}),"\n",(0,r.jsx)(n.li,{children:"Mva-meldinger for tidligere terminer skulle v\xe6rt levert og derfor vil avgift til gode for denne terminen ikke bli utbetalt (R062)"}),"\n",(0,r.jsx)(n.li,{children:"Kontonummer m\xe5 v\xe6re registrert for meldinger som kunne f\xf8re til en utbetaling (R080)"}),"\n",(0,r.jsx)(n.li,{children:"Bel\xf8pet p\xe5 koden og spesifikasjonslinje som gjelder kj\xf8p med kompensasjonsrett skal ikke v\xe6re like (R115)"}),"\n",(0,r.jsx)(n.li,{children:"Merverdiavgiften kan ikke v\xe6re beregnet til 0 n\xe5r det er oppgitt grunnlag for avgift. (R127)"}),"\n",(0,r.jsx)(n.li,{children:"Virksomheten er ikke registrert i Enhetsregisteret og kan ikke sende inn mva-melding. (R131)"}),"\n"]}),(0,r.jsx)(n.p,{children:"F\xf8lgende regler gjelder for alle meldingskategorier som ikke er eHandel:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Virksomheten har organisasjonsform UDEF (R126)"}),"\n"]}),(0,r.jsx)(n.p,{children:"F\xf8lgende tekniske regler er ogs\xe5 spesifisert som validerer xsd format og kodelister verdier:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mva-meldingen skal v\xe6re p\xe5 gyldig format (R001)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinjer skal bare bruke kjente mva-koder (R002)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinjer skal bare bruke gyldige satser (R003)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinjer skal bare bruke kjente spesifikasjoner (R069)"}),"\n",(0,r.jsx)(n.li,{children:"Spesifikasjonslinjer skal bare bruke kjente merknader p\xe5 utvalgt merknad felt (R070)"}),"\n",(0,r.jsx)(n.li,{children:"Mva-meldingen skal bare bruke en kjent merknad p\xe5 utvalgt merknad felt (R071)"}),"\n"]}),(0,r.jsx)(n.p,{children:"F\xf8lgende praktiske regler er ogs\xe5 definert for \xe5 hindre feilaktige innsendinger til det nye systemet:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Innsending og validering tjeneste er ikke tilgjengelig f\xf8r 01.01.2022 for ordin\xe6r (aliminnelig eller prim\xe6rn\xe6ring) mva-meldinger (R000)"}),"\n",(0,r.jsx)(n.li,{children:"Innsending og validering av ordin\xe6r (alminnelig eller prim\xe6rn\xe6ring) mva-meldinger fra f\xf8r 2022 er ikke tilgjengelig (R077)"}),"\n"]})]}),(0,r.jsxs)(s,{headerText:"Omvendt avgiftsplikt",itemKey:"itemKey-2",default:!0,children:[(0,r.jsx)(n.p,{children:"F\xf8lgende valideringsregler er forel\xf8pig definert for mva-meldinger for omvendt avgiftsplikt:"}),(0,r.jsx)(n.p,{children:"Terminlengde m\xe5 v\xe6re 3-m\xe5nedlig (R106)\nMerknad til bel\xf8p med motsatt fortegn som gjelder grunnlag og utg\xe5ende avgift mangler (R108)\nSpesifikasjonslinjer skal ha en gyldig mva-kode i mva-meldinger for omvendt avgiftsplikt (R113)\nDet m\xe5 sendes inn spesifikasjonslinjer n\xe5r det er oppgitt bel\xf8p i 'fastsatt merverdiavgift' feltet (R107)\nUtg\xe5ende mva. skal f\xf8res med grunnlag og sats (R109)\nDet skal ikke f\xf8res bel\xf8p b\xe5de for koden og tilh\xf8rende spesifikasjon (R112)\nSpesifikasjonslinje som gjelder tilbakef\xf8ring av inng\xe5ende mva., tap p\xe5 krav og uttak kan ikke sendes inn p\xe5 mva-meldinger for omvendt avgiftsplikt (R110)\nSpesifikasjonslinje som gjelder kj\xf8p med kompensasjonsrett kan kun sendes inn p\xe5 mva-kode 86, 88 og 91 (R111)\nInnsendte koder stemmer ikke med bel\xf8pet oppgitt i 'fastsatt merverdiavgift' felt (R119)\n'fastsatt merverdiavgift' bel\xf8pet skal ikke v\xe6re kr 0 (R118)\nSummert grunnlag m\xe5 v\xe6re over kr 2 000 (R117)\nDet finnes en aktiv plikt i mva-registeret for deler av perioden mva-meldingen for omvendt avgiftsplikt gjelder for (R123)\nKoden m\xe5 inneholde spesifikasjon 'Kj\xf8p med kompensasjonsrett (R124)\nMeldingen kan ikke sendes inn f\xf8r terminen har utl\xf8pt. (R120)\nF\xf8lgende tekniske regler er ogs\xe5 spesifisert som validerer xsd format og kodelister verdier:"}),(0,r.jsx)(n.p,{children:"Mva-meldingen skal v\xe6re p\xe5 gyldig format (R001)\nSpesifikasjonslinjer skal bare bruke kjente mva-koder (R002)\nSpesifikasjonslinjer skal bare bruke gyldige satser (R003)\nSpesifikasjonslinjer skal bare bruke kjente spesifikasjoner (R069)\nSpesifikasjonslinjer skal bare bruke kjente merknader p\xe5 utvalgt merknad felt (R070)\nMva-meldingen skal bare bruke en kjent merknad p\xe5 utvalgt merknad felt (R071)\nF\xf8lgende praktiske regler er ogs\xe5 definert for \xe5 hindre feilaktige innsendinger til det nye systemet:"}),(0,r.jsx)(n.p,{children:"Innsending og validering tjeneste er ikke tilgjengelig f\xf8r 01.02.2023 for mva-meldinger for omvendt avgiftsplikt (R105)\nInnsending og validering av mva-melding for omvendt avgiftsplikt fra f\xf8r 2023 er ikke tilgjengelig (R103)"})]}),(0,r.jsxs)(s,{headerText:"Kompensasjonsmelding",itemKey:"itemKey-3",default:!0,children:[(0,r.jsx)(n.p,{children:"F\xf8lgende valideringsregler er forel\xf8pig definert for krav om kompensasjon mva-meldinger:"}),(0,r.jsx)(n.p,{children:"Mva-meldingen kan ikke sendes inn f\xf8r terminen har utl\xf8pt (R089)\nTerminlengde m\xe5 v\xe6re 2-m\xe5nedlig (R095)\nMerknad til bel\xf8p med motsatt fortegn som gjelder fradragsf\xf8rt inng\xe5ende avgift mangler (R086)\nSpesifikasjonslinjer skal ha en gyldig mva-kode i krav om kompensasjon mva-meldinger (R088)\nKodelinjer skal f\xf8res med grunnlag og sats (R093)\nDet m\xe5 sendes inn spesifikasjonslinjer n\xe5r det er oppgitt bel\xf8p i 'fastsatt merverdiavgift' feltet (R100)\nVirksomheter som er registrert som et kommunalt foretak kan ikke sende inn mva-meldingen (R094)\nMva-meldingen m\xe5 sendes inn f\xf8r innleveringsfristen for terminen (R096)\nEndring av krav om kompensasjon innsendt etter innleveringsfristen kan ikke v\xe6re mer til gode enn det som allerede er sendt inn (R097)\nF\xf8rste krav om kompensasjon for terminen kan ikke v\xe6re 0 kroner (R098)\nF\xf8rste krav om kompensasjon til utbetalig for \xe5ret m\xe5 v\xe6re p\xe5 minst 20 000 kroner (R099)\nKoder 81 og 83 kan kun brukes av registrerte virksomheter (R101)\nSpesifikasjonslinje som gjelder justering kan kun sendes inn p\xe5 mva-kode 1, 14 eller 81 (R087)\nSpesifikasjonslinje som gjelder tap p\xe5 krav, uttak eller tilbakef\xf8ring av inng\xe5ende mva. er ugyldig (R091)\nVirksomheter som er registrert som et fylkeskommunalt foretak kan ikke sende inn mva-meldingen (R128)\nVirksomheter som er registrert som et organisasjonsledd kan ikke sende inn mva-meldingen (R129)\nVirksomheter som er registrert som en underenhet f\xe5r avvikende skattemelding (R130)\nF\xf8lgende tekniske regler er ogs\xe5 spesifisert som validerer xsd format og kodelister verdier:"}),(0,r.jsx)(n.p,{children:"Mva-meldingen skal v\xe6re p\xe5 gyldig format (R001)\nSpesifikasjonslinjer skal bare bruke kjente mva-koder (R002)\nSpesifikasjonslinjer skal bare bruke gyldige satser (R003)\nSpesifikasjonslinjer skal bare bruke kjente spesifikasjoner (R069)\nSpesifikasjonslinjer skal bare bruke kjente merknader p\xe5 utvalgt merknad felt (R070)\nMva-meldingen skal bare bruke en kjent merknad p\xe5 utvalgt merknad felt (R071)\nF\xf8lgende praktiske regler er ogs\xe5 definert for \xe5 hindre feilaktige innsendinger til det nye systemet:"}),(0,r.jsx)(n.p,{children:"Innsending og validering tjeneste er ikke tilgjengelig f\xf8r 01.01.2023 for krav om kompensasjon mva-meldinger (R090)\nInnsending og validering av krav om kompensasjon mva-meldinger fra f\xf8r 2023 er ikke tilgjengelig (R092)"})]})]})]})}function k(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var r=i(96540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);