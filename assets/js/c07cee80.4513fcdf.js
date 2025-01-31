"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8722],{98520:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>k,frontMatter:()=>d,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"api/innrapportering-aksjonaerregisteroppgave","title":"Innrapportering aksjonaerregisteroppgave API","description":"Tjeneste for innrapportering av aksjon\xe6rregisteroppgaven (RF-1086)","source":"@site/docs/api/innrapportering-aksjonaerregisteroppgave.md","sourceDirName":"api","slug":"/api/innrapportering-aksjonaerregisteroppgave","permalink":"/api-dokumentasjon/api/innrapportering-aksjonaerregisteroppgave","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"API","permalink":"/api-dokumentasjon/tags/api"},{"inline":true,"label":"aksjonaerregisteroppgave","permalink":"/api-dokumentasjon/tags/aksjonaerregisteroppgave"},{"inline":true,"label":"aksjon\xe6rregisteroppgave","permalink":"/api-dokumentasjon/tags/aksjonaerregisteroppgave"}],"version":"current","frontMatter":{"title":"Innrapportering aksjonaerregisteroppgave API","slug":"/api/innrapportering-aksjonaerregisteroppgave","folder":"api","sidebar":"mydoc_sidebar","datatable":true,"tags":["API","aksjonaerregisteroppgave","aksjon\xe6rregisteroppgave"],"keywords":["grunnlagsdata"],"last_updated":"Dec 19, 2024","hide_table_of_contents":true},"sidebar":"docs","previous":{"title":"Underenhet fra A-ordningen API","permalink":"/api-dokumentasjon/api/underenhetaordningen"},"next":{"title":"Innrapportering betalinger til selvstendig n\xe6ringsdrivende API","permalink":"/api-dokumentasjon/api/innrapportering-betalingernaeringsdrivende"}}');var s=r(74848),i=r(28453);const d={title:"Innrapportering aksjonaerregisteroppgave API",slug:"/api/innrapportering-aksjonaerregisteroppgave",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","aksjonaerregisteroppgave","aksjon\xe6rregisteroppgave"],keywords:["grunnlagsdata"],last_updated:"Dec 19, 2024",hide_table_of_contents:!0},a=void 0,l={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Systemtilgang",id:"systemtilgang",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Parameter: idempotencyKey",id:"parameter-idempotencykey",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Innsending",id:"innsending",level:2},{value:"Eksempel p\xe5 hovedskjema",id:"eksempel-p\xe5-hovedskjema",level:3},{value:"Hovedskjema url:",id:"hovedskjema-url",level:4},{value:"Hovedskjema XML",id:"hovedskjema-xml",level:4},{value:"Eksempel p\xe5 respons fra hovedskjema endepunkt",id:"eksempel-p\xe5-respons-fra-hovedskjema-endepunkt",level:4},{value:"Underskjema innsending",id:"underskjema-innsending",level:3},{value:"Underskjema url",id:"underskjema-url",level:4},{value:"Underskjema XML",id:"underskjema-xml",level:4},{value:"Eksempel p\xe5 respons fra underskjema endepunkt",id:"eksempel-p\xe5-respons-fra-underskjema-endepunkt",level:4},{value:"Bekretft endepunkt",id:"bekretft-endepunkt",level:3},{value:"Bekreft url",id:"bekreft-url",level:4},{value:"Eksempel p\xe5 respons fra bekreft endepunkt",id:"eksempel-p\xe5-respons-fra-bekreft-endepunkt",level:4},{value:"Testmilj\xf8er",id:"testmilj\xf8er",level:3},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:3},{value:"Testdata",id:"testdata",level:3}];function o(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Summary:t,TabItem:d,Tabs:a}=n;return t||j("Summary",!0),d||j("TabItem",!0),a||j("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:"Tjeneste for innrapportering av aksjon\xe6rregisteroppgaven (RF-1086)"}),"\n",(0,s.jsxs)(a,{underline:!0,children:[(0,s.jsxs)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,children:[(0,s.jsx)(n.p,{children:"For generell informasjon om tjenestene se egne sider om:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/bruk",children:"Bruk av tjenestene"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/sikkerhet",children:"Sikkerhetsmekansimer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/systemtilgang",children:"Systemtilgang"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"Feilh\xe5ndtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/versjoner",children:"Versjonering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/tekniskspesifikasjon",children:"Teknisk spesifikasjon"})}),"\n"]}),(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),(0,s.jsxs)(n.p,{children:["F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,s.jsx)(n.code,{children:"skatteetaten:innrapporteringaksjonaerregisteroppgave"})]}),(0,s.jsx)(n.h2,{id:"delegering",children:"Delegering"}),(0,s.jsx)(n.p,{children:"Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen."}),(0,s.jsx)(n.h2,{id:"systemtilgang",children:"Systemtilgang"}),(0,s.jsxs)(n.p,{children:["Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir.\nInformasjon vedr. dette finnes ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/systemtilgang",children:"her"}),"."]}),(0,s.jsx)(n.h2,{id:"teknisk-spesifikasjon",children:"Teknisk spesifikasjon"}),(0,s.jsxs)(n.p,{children:["URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen p\xe5\n",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/innrapportering-aksjonaerregister-api/0.0.1",children:"SwaggerHub"})]}),(0,s.jsxs)(n.p,{children:["Oppbygning av URL-er og \xe5pninger i en evt. brannmur er beskrevet her ",(0,s.jsx)(n.a,{href:"../om/sikkerhet#brannmur",children:"Brannmur"})]}),(0,s.jsx)(n.p,{children:"API-et for innsending av aksjonaerregisteroppgaven har bare fem endepunkter:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"POST hovedskjema"}),": Mottar hovedskjema for aksjon\xe6rregisteroppgaven"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"POST underskjema"}),": Mottar underskjema for aksjon\xe6rregisteroppgaven"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"POST bekreft"}),": Bekrefter at alle underskjemaer er innsendt og oppgaven er klar til videre behandling"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GET dokumenter"}),": Henter ut flere dokumenter fra en forsendelse","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dette endepunktet anbefales brukt om man \xf8nsker \xe5 hente ut alle innsendte hoved/underskjemaer. Endepunktet kan levere opp til 50 skjemaer pr kall og hovedskjemaet vil alltid v\xe6re f\xf8rste skjema p\xe5 f\xf8rste page."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GET dokument"}),": Henter ut et enkelt dokument fra en forsendelse","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dette endepunktet anbefales brukt om man skal hente ut enkeltdokumenter som f.eks tilbakemeldinger."}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["Innsendt data p\xe5 hovedskjema endepunktet valideres etter f\xf8lgende xsd: ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(13664).A+"",children:"hovedskjema"})]}),(0,s.jsxs)(n.p,{children:["Innsendt data p\xe5 underskjema endepunktet valideres etter f\xf8lgende xsd: ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(63110).A+"",children:"underskjema"})]}),(0,s.jsxs)(n.p,{children:["Se ogs\xe5 ",(0,s.jsx)(n.a,{href:"innrapportering-aksjonaerregisteroppgave?tab=Eksempler",children:"eksempler"})," for de ulike endepunktene."]}),(0,s.jsx)(n.h3,{id:"parameter-idempotencykey",children:"Parameter: idempotencyKey"}),(0,s.jsx)(n.p,{children:"idempotencyKey parameteren er p\xe5krevet. Innholdet skal v\xe6re en unik UUID. Hvert nye kall til API-et skal ha en\ntilsvarende ny idempotencyKey. Flere etterf\xf8lgende POST kall med samme request-body og samme idempotencyKey vil gi den\nsamme responsen. Kun det f\xf8rste av denne rekken med like API kall vil behandles. IdempotencyKey muliggj\xf8r at man trygt\nkan pr\xf8ve innsendinger p\xe5 nytt der man av ulike \xe5rsaker ikke har f\xe5tt en tilbakemelding fra API-et."}),(0,s.jsx)(n.h2,{id:"datakatalog",children:"Datakatalog"}),(0,s.jsx)(n.p,{children:"Dette API-et er pt. ikke dokumentert i Felles datakatalog."})]}),(0,s.jsxs)(d,{headerText:"Eksempler",itemKey:"itemKey-2",children:[(0,s.jsx)(n.h2,{id:"innsending",children:"Innsending"}),(0,s.jsx)(n.h3,{id:"eksempel-p\xe5-hovedskjema",children:"Eksempel p\xe5 hovedskjema"}),(0,s.jsx)(n.h4,{id:"hovedskjema-url",children:"Hovedskjema url:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://innrapporteringaksjonaerregisteroppgave.api.skatteetaten-test.no/api/aksjonaerregister/1086/v1/2023/1086H\n"})}),(0,s.jsx)(n.h4,{id:"hovedskjema-xml",children:"Hovedskjema XML"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<Skjema\n        skjemanummer="890" spesifikasjonsnummer="12144"\n        blankettnummer="RF-1086" gruppeid="2586" etatid="974761076">\n    <GenerellInformasjon-grp-2587 gruppeid="2587">\n        <Selskap-grp-2588 gruppeid="2588">\n            <EnhetOrganisasjonsnummer-datadef-18 orid="18">314259521</EnhetOrganisasjonsnummer-datadef-18>\n            <EnhetNavn-datadef-1 orid="1">MOSEGRODD ORANSJE TIGER AS</EnhetNavn-datadef-1>\n            <EnhetAdresse-datadef-15 orid="15">Har\xe5sveien 13E</EnhetAdresse-datadef-15>\n            <EnhetPostnummer-datadef-6673 orid="6673">0283</EnhetPostnummer-datadef-6673>\n            <EnhetPoststed-datadef-6674 orid="6674">OSLO</EnhetPoststed-datadef-6674>\n            <AksjeType-datadef-17659 orid="17659">01</AksjeType-datadef-17659>\n            <Inntektsar-datadef-692 orid="692">2023</Inntektsar-datadef-692>\n        </Selskap-grp-2588>\n        <Kontaktperson-grp-3442 gruppeid="3442">\n            <KontaktpersonSkjemaEPost-datadef-30533 orid="30533">epost@epost.no\n            </KontaktpersonSkjemaEPost-datadef-30533>\n        </Kontaktperson-grp-3442>\n        <AnnenKontaktperson-grp-5384 gruppeid="5384"></AnnenKontaktperson-grp-5384>\n    </GenerellInformasjon-grp-2587>\n    <Selskapsopplysninger-grp-2589 gruppeid="2589">\n        <AksjekapitalForHeleSelskapet-grp-3443 gruppeid="3443">\n            <AksjekapitalFjoraret-datadef-7129 orid="7129">0</AksjekapitalFjoraret-datadef-7129>\n            <Aksjekapital-datadef-87 orid="87">100000</Aksjekapital-datadef-87>\n        </AksjekapitalForHeleSelskapet-grp-3443>\n        <AksjekapitalIDenneAksjeklassen-grp-3444 gruppeid="3444">\n            <AksjekapitalISINAksjetypeFjoraret-datadef-17663 orid="17663">0\n            </AksjekapitalISINAksjetypeFjoraret-datadef-17663>\n            <AksjekapitalISINAksjetype-datadef-17664 orid="17664">100000</AksjekapitalISINAksjetype-datadef-17664>\n        </AksjekapitalIDenneAksjeklassen-grp-3444>\n        <PalydendePerAksje-grp-3447 gruppeid="3447">\n            <AksjeMvPalydendeFjoraret-datadef-23944 orid="23944">0</AksjeMvPalydendeFjoraret-datadef-23944>\n            <AksjeMvPalydende-datadef-23945 orid="23945">1000</AksjeMvPalydende-datadef-23945>\n        </PalydendePerAksje-grp-3447>\n        <AntallAksjerIDenneAksjeklassen-grp-3445 gruppeid="3445">\n            <AksjerMvAntallFjoraret-datadef-29166 orid="29166">0</AksjerMvAntallFjoraret-datadef-29166>\n            <AksjerMvAntall-datadef-29167 orid="29167">100</AksjerMvAntall-datadef-29167>\n        </AntallAksjerIDenneAksjeklassen-grp-3445>\n        <InnbetaltAksjekapitalIDenneAksjeklassen-grp-3446 gruppeid="3446">\n            <AksjekapitalInnbetaltFjoraret-datadef-8020 orid="8020">0</AksjekapitalInnbetaltFjoraret-datadef-8020>\n            <AksjekapitalInnbetalt-datadef-5867 orid="5867">100000</AksjekapitalInnbetalt-datadef-5867>\n        </InnbetaltAksjekapitalIDenneAksjeklassen-grp-3446>\n        <InnbetaltOverkursIDenneAksjeklassen-grp-3448 gruppeid="3448">\n            <AksjeOverkursISINAksjetypeFjoraret-datadef-17662 orid="17662">0\n            </AksjeOverkursISINAksjetypeFjoraret-datadef-17662>\n            <AksjeOverkursISINAksjetype-datadef-17661 orid="17661">0</AksjeOverkursISINAksjetype-datadef-17661>\n        </InnbetaltOverkursIDenneAksjeklassen-grp-3448>\n    </Selskapsopplysninger-grp-2589>\n    <Utbytte-grp-3449 gruppeid="3449">\n        <UtdeltSkatterettsligUtbytteILopetAvInntektsaret-grp-3451\n                gruppeid="3451"></UtdeltSkatterettsligUtbytteILopetAvInntektsaret-grp-3451>\n    </Utbytte-grp-3449>\n    <UtstedelseAvAksjerIfmStiftelseNyemisjonMv-grp-3452 gruppeid="3452">\n        <AntallNyutstedteAksjer-grp-3453 gruppeid="3453">\n            <AksjerNyutstedteStiftelseMvAntall-datadef-17668 orid="17668">100\n            </AksjerNyutstedteStiftelseMvAntall-datadef-17668>\n            <AksjerStiftelseMvAntall-datadef-17669 orid="17669">100</AksjerStiftelseMvAntall-datadef-17669>\n            <AksjerNyutstedteStiftelseMvType-datadef-17670 orid="17670">N\n            </AksjerNyutstedteStiftelseMvType-datadef-17670>\n            <AksjerNyutstedteStiftelseMvTidspunkt-datadef-17671 orid="17671">2022-01-01T00:00:00\n            </AksjerNyutstedteStiftelseMvTidspunkt-datadef-17671>\n            <AksjerNyutstedteStiftelseMvPalydende-datadef-23947 orid="23947">1000\n            </AksjerNyutstedteStiftelseMvPalydende-datadef-23947>\n        </AntallNyutstedteAksjer-grp-3453>\n    </UtstedelseAvAksjerIfmStiftelseNyemisjonMv-grp-3452>\n    <UtstedelseAvAksjerIfmFondsemisjonSplittMv-grp-3454 gruppeid="3454">\n        <NyutstedteAksjerOmfordeling-grp-3455 gruppeid="3455"></NyutstedteAksjerOmfordeling-grp-3455>\n    </UtstedelseAvAksjerIfmFondsemisjonSplittMv-grp-3454>\n    <SlettingAvAksjerIfmLikvidasjonPartiellLikvidasjonMv-grp-3456 gruppeid="3456">\n        <SlettedeAksjerAvgang-grp-3457 gruppeid="3457"></SlettedeAksjerAvgang-grp-3457>\n    </SlettingAvAksjerIfmLikvidasjonPartiellLikvidasjonMv-grp-3456>\n    <SlettingAvAksjerIfmSpleisSkattefriFusjonFisjon-grp-3458 gruppeid="3458">\n        <SlettedeAksjerOmfordeling-grp-3459 gruppeid="3459"></SlettedeAksjerOmfordeling-grp-3459>\n    </SlettingAvAksjerIfmSpleisSkattefriFusjonFisjon-grp-3458>\n    <EndringerIAksjekapitalOgOverkurs-grp-3460 gruppeid="3460">\n        <NedsettelseAvInnbetaltOverkursMedTilbakebetalingTilAksjonarene-grp-3461\n                gruppeid="3461"></NedsettelseAvInnbetaltOverkursMedTilbakebetalingTilAksjonarene-grp-3461>\n        <ForhoyelseAvAKVedOkningAvPalydende-grp-3462 gruppeid="3462"></ForhoyelseAvAKVedOkningAvPalydende-grp-3462>\n        <ForhoyelseAvAKVedOkningAvPalydende-grp-3463 gruppeid="3463"></ForhoyelseAvAKVedOkningAvPalydende-grp-3463>\n        <NedsettelseAvInnbetaltOgFondsemittertAK-grp-3464\n                gruppeid="3464"></NedsettelseAvInnbetaltOgFondsemittertAK-grp-3464>\n        <NedsettelseAKVedReduksjonAvPalydende-grp-3465 gruppeid="3465"></NedsettelseAKVedReduksjonAvPalydende-grp-3465>\n        <NedsettelseAvAKVedReduksjonUtfisjonering-grp-3466\n                gruppeid="3466"></NedsettelseAvAKVedReduksjonUtfisjonering-grp-3466>\n    </EndringerIAksjekapitalOgOverkurs-grp-3460>\n</Skjema>\n\n'})}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-respons-fra-hovedskjema-endepunkt",children:"Eksempel p\xe5 respons fra hovedskjema endepunkt"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "hovedskjemaid": "0193de1a-d956-739e-980e-ab57ae7de73c"\n}\n'})}),(0,s.jsx)(n.h3,{id:"underskjema-innsending",children:"Underskjema innsending"}),(0,s.jsx)(n.h4,{id:"underskjema-url",children:"Underskjema url"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://innrapporteringaksjonaerregisteroppgave.api.skatteetaten-test.no/api/aksjonaerregister/1086/v1/2023/{{hovedskjemaid}}/1086U\n"})}),(0,s.jsx)(n.h4,{id:"underskjema-xml",children:"Underskjema XML"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<Skjema\n        skjemanummer="923" spesifikasjonsnummer="12146"\n        blankettnummer="RF-1086-U" tittel="Aksjon\xe6rregisteroppgaven - underskjema" gruppeid="3983" etatid="974761076">\n    <SelskapsOgAksjonaropplysninger-grp-3987 gruppeid="3987">\n        <Selskapsidentifikasjon-grp-3986 gruppeid="3986">\n            <EnhetOrganisasjonsnummer-datadef-18 orid="18">314259521</EnhetOrganisasjonsnummer-datadef-18>\n            <AksjeType-datadef-17659 orid="17659">01</AksjeType-datadef-17659>\n            <Inntektsar-datadef-692 orid="692">2023</Inntektsar-datadef-692>\n        </Selskapsidentifikasjon-grp-3986>\n        <NorskUtenlandskAksjonar-grp-3988 gruppeid="3988">\n            <AksjonarFodselsnummer-datadef-1156 orid="1156">26829398612</AksjonarFodselsnummer-datadef-1156>\n            <Adresse-grp-7722 gruppeid="7722"></Adresse-grp-7722>\n        </NorskUtenlandskAksjonar-grp-3988>\n    </SelskapsOgAksjonaropplysninger-grp-3987>\n    <AntallAksjerUtbytteOgTilbakebetalingAvTidligereInnbetaltKapit-grp-3990 gruppeid="3990">\n        <AntallAksjerPerAksjonar-grp-3989 gruppeid="3989">\n            <AksjerAntallFjoraret-datadef-29168 orid="29168">0</AksjerAntallFjoraret-datadef-29168>\n            <AksjonarAksjerAntall-datadef-17741 orid="17741">100</AksjonarAksjerAntall-datadef-17741>\n        </AntallAksjerPerAksjonar-grp-3989>\n        <UtdeltUtbyttePerAksjonar-grp-3991 gruppeid="3991">\n            <AutomatiskMotregningOnskerIkke-datadef-37159 orid="37159">0</AutomatiskMotregningOnskerIkke-datadef-37159>\n        </UtdeltUtbyttePerAksjonar-grp-3991>\n        <UtdeltUtbytteKildeskatt-grp-9347 gruppeid="9347"></UtdeltUtbytteKildeskatt-grp-9347>\n        <TilbakebetalingAvTidligereInnbetaltKapital-grp-7633 gruppeid="7633">\n            <TilbakebetalingAvTidligereInnbetaltKapital-grp-7865\n                    gruppeid="7865"></TilbakebetalingAvTidligereInnbetaltKapital-grp-7865>\n        </TilbakebetalingAvTidligereInnbetaltKapital-grp-7633>\n    </AntallAksjerUtbytteOgTilbakebetalingAvTidligereInnbetaltKapit-grp-3990>\n    <Transaksjoner-grp-3992 gruppeid="3992">\n        <KjopArvGaveStiftelseNyemisjonMv-grp-3993 gruppeid="3993">\n            <AntallAksjerITilgang-grp-3998 gruppeid="3998">\n                <AksjerKjopAntall-datadef-12153 orid="12153">100</AksjerKjopAntall-datadef-12153>\n                <AksjeErvervType-datadef-17745 orid="17745">N</AksjeErvervType-datadef-17745>\n                <AksjerErvervsdato-datadef-17746 orid="17746">2022-01-01T00:00:00</AksjerErvervsdato-datadef-17746>\n                <AksjeAnskaffelsesverdi-datadef-17636 orid="17636">100000</AksjeAnskaffelsesverdi-datadef-17636>\n            </AntallAksjerITilgang-grp-3998>\n        </KjopArvGaveStiftelseNyemisjonMv-grp-3993>\n    </Transaksjoner-grp-3992>\n    <FondsemisjonSplittSkattefriFusjonFisjonSammenslaingDelingAv-grp-3994 gruppeid="3994">\n        <AntallAksjerITilgangIfmOmfordeling-grp-3999 gruppeid="3999"></AntallAksjerITilgangIfmOmfordeling-grp-3999>\n    </FondsemisjonSplittSkattefriFusjonFisjonSammenslaingDelingAv-grp-3994>\n    <SalgArvGaveLikvidasjonPartiellLikvidasjonMv-grp-3995 gruppeid="3995">\n        <AksjerIAvgang-grp-4002 gruppeid="4002"></AksjerIAvgang-grp-4002>\n    </SalgArvGaveLikvidasjonPartiellLikvidasjonMv-grp-3995>\n    <SpleisSkattefriFusjonOgSkattefriFisjon-grp-3996 gruppeid="3996">\n        <AntallAksjerIAvgangVedOmfordeling-grp-4003 gruppeid="4003"></AntallAksjerIAvgangVedOmfordeling-grp-4003>\n    </SpleisSkattefriFusjonOgSkattefriFisjon-grp-3996>\n    <EndringerIAksjekapitalOgOverkurs-grp-3997 gruppeid="3997">\n        <TilbakebetaltInnbetaltOgFondsemittertAKVedReduksjonAvPalydende-grp-4000\n                gruppeid="4000"></TilbakebetaltInnbetaltOgFondsemittertAKVedReduksjonAvPalydende-grp-4000>\n        <TilbakebetaltTidligereInnbetaltOverkursForAksjen-grp-4001\n                gruppeid="4001"></TilbakebetaltTidligereInnbetaltOverkursForAksjen-grp-4001>\n        <ForhoyelseAvInnbetaltAksjekapitalVedOkning-grp-4987\n                gruppeid="4987"></ForhoyelseAvInnbetaltAksjekapitalVedOkning-grp-4987>\n        <ReduksjonInnbetaltAksjekapital-grp-9857 gruppeid="9857"></ReduksjonInnbetaltAksjekapital-grp-9857>\n    </EndringerIAksjekapitalOgOverkurs-grp-3997>\n</Skjema>\n\n'})}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-respons-fra-underskjema-endepunkt",children:"Eksempel p\xe5 respons fra underskjema endepunkt"}),(0,s.jsx)(n.p,{children:"Endepunktet gir ingen data tilbake ved vellykket kall. Kun 200 OK som statuskode"}),(0,s.jsx)(n.h3,{id:"bekretft-endepunkt",children:"Bekretft endepunkt"}),(0,s.jsx)(n.h4,{id:"bekreft-url",children:"Bekreft url"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://innrapporteringaksjonaerregisteroppgave.api.skatteetaten-test.no/api/aksjonaerregister/1086/v1/2023/{{hovedskjemaid}}/bekreft?antall_underskjema={{antall-innsendte-underskjema}}\n"})}),(0,s.jsx)(n.h4,{id:"eksempel-p\xe5-respons-fra-bekreft-endepunkt",children:"Eksempel p\xe5 respons fra bekreft endepunkt"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "oppgavegiversLeveranseReferanse": "0193de1a-d956-739e-980e-ab57ae7de73c",\n    "dialogId": "0193d51a-ec30-7d58-b727-6ce65964d3d4",\n    "forsendelseId": "0193de1b-0483-740a-9e0b-f60a2d519638"\n}\n'})})]}),(0,s.jsxs)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",children:[(0,s.jsxs)(n.p,{children:["Se egen side for generell info om ",(0,s.jsx)(n.a,{href:"/api-dokumentasjon/om/feil",children:"feilh\xe5ndtering i tjenestene"}),"."]}),(0,s.jsx)(n.p,{children:"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilkode"}),(0,s.jsx)(n.th,{children:"HTTP Statuskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_001"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil p\xe5 tjenesten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_004"}),(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autentisering"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_005"}),(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med autorisering"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_006"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i request"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_008"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Strukturell feil i tilknyttet dataformat"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_010"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i forbindelse med validering av payload"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_011"}),(0,s.jsx)(n.td,{children:"400"}),(0,s.jsx)(n.td,{children:"Feil i metadata"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_017"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uspesifisert systemfeil"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_019"}),(0,s.jsx)(n.td,{children:"409"}),(0,s.jsx)(n.td,{children:"Idempotensn\xf8kkel er benyttet tidligere"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_021"}),(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Finner ikke forespurt ressurs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_022"}),(0,s.jsx)(n.td,{children:"405"}),(0,s.jsx)(n.td,{children:"HTTP-metode ikke st\xf8ttet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_023"}),(0,s.jsx)(n.td,{children:"500"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system."})]})]})]}),(0,s.jsx)(n.p,{children:"Feilresponsene kan ogs\xe5 inneholde en feilspesifiseringskode som presiserer feilen ytterligere.\nTabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.\nDersom det finnes mer detaljert feilinformasjon enn generelt feilomr\xe5de vil det beskrives i melding, sti og angitt verdi\nfeltene."}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feilspesifiseringskode"}),(0,s.jsx)(n.th,{children:"Feilomr\xe5de"}),(0,s.jsx)(n.th,{children:"\xc5rsak"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1007"}),(0,s.jsx)(n.td,{children:"Mangler Token"}),(0,s.jsx)(n.td,{children:"Det er ikke lagt ved noen authorization header med token p\xe5 request"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1008"}),(0,s.jsx)(n.td,{children:"Ugyldig token"}),(0,s.jsx)(n.td,{children:"Token oppgitt i authorization header er ugyldig"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1015"}),(0,s.jsx)(n.td,{children:"Ikke autorisert for \xe5 levere p\xe5 denne dialogen"}),(0,s.jsx)(n.td,{children:"Organisasjonen som leverer har ikke rettighet til \xe5 levere for denne oppgavegiveren"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1016"}),(0,s.jsx)(n.td,{children:"Det finnes ikke et hovedskjema med denne IDen for denne innsendingen"}),(0,s.jsx)(n.td,{children:"Oppgitt hovedskjemaid finnes ikke, eller gjelder ikke for denne oppgavegiver og inntekts\xe5r"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1018"}),(0,s.jsx)(n.td,{children:"Oppgitt antall underskjemaer stemmer ikke med antall underskjemaer p\xe5 innsendingen"}),(0,s.jsx)(n.td,{children:"Antallet underskjemaer oppgitt i parameter er ikke likt som antall underskjemaer sendt inn p\xe5 hovedskjemaet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1022"}),(0,s.jsx)(n.td,{children:"Feil i parametre"}),(0,s.jsx)(n.td,{children:"Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1023"}),(0,s.jsx)(n.td,{children:"Finner ingen ressurs for denne urlen"}),(0,s.jsx)(n.td,{children:"Det er ikke noe innhold tilgjengelig p\xe5 denne URLen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1026"}),(0,s.jsx)(n.td,{children:"En innsending m\xe5 ha minimum ett underskjema"}),(0,s.jsx)(n.td,{children:"Man kan ikke bekrefte en innsending som ikke har noen innsendte underskjemaer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1027"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r er ikke st\xf8ttet"}),(0,s.jsx)(n.td,{children:"Det er ikke tillatt \xe5 levere p\xe5 oppgitt inntekts\xe5r"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1028"}),(0,s.jsx)(n.td,{children:"Header mangler"}),(0,s.jsx)(n.td,{children:"P\xe5krevd header er ikke med i requesten"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1029"}),(0,s.jsx)(n.td,{children:"Innsendingen er allerede bekreftet"}),(0,s.jsx)(n.td,{children:"Denne feilmeldingen gis om man fors\xf8ker \xe5 sende inn underskjema p\xe5 en innsending som er bekreftet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1030"}),(0,s.jsx)(n.td,{children:"Accept-header m\xe5 v\xe6re av type application/json"}),(0,s.jsx)(n.td,{children:"Accept header er feil. APIet har kun st\xf8tte for json i response"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1047"}),(0,s.jsx)(n.td,{children:"Content type m\xe5 v\xe6re application/json"}),(0,s.jsx)(n.td,{children:"Content-type header er feil. APIet har kun st\xf8tte for json i request body"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1050"}),(0,s.jsx)(n.td,{children:"Finner ikke et dokument med denne IDen p\xe5 denne forsendelsen"}),(0,s.jsx)(n.td,{children:"Det finnes ikke noe dokument med gitt id p\xe5 angitt forsendelse"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1052"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r i path og i innsending er ulike"}),(0,s.jsx)(n.td,{children:"Inntekts\xe5r i innsending i JSON body og inntekts\xe5r i path m\xe5 v\xe6re like"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GLD_1053"}),(0,s.jsx)(n.td,{children:"Uventet feil i et bakenforliggende system, vennligst pr\xf8v igjen senere"}),(0,s.jsx)(n.td,{})]})]})]})]}),(0,s.jsx)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",children:(0,s.jsxs)(n.p,{children:["For informasjon om hvilke data som skal fylles inn i oppgaven se rettledning og mer info p\xe5 skatteetatens sider for ",(0,s.jsx)(n.a,{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/aksjonarregisteroppgaven/",children:"aksjon\xe6rregisteroppgave"})]})}),(0,s.jsxs)(d,{headerText:"Test",itemKey:"itemKey-5",children:[(0,s.jsx)(n.p,{children:"I f\xf8rste omgang er test kun tilgjengelig for et utvalg leverand\xf8rer som det er inng\xe5tt avtale med og som skal v\xe6re\nmed \xe5 pilotere l\xf8sningene."}),(0,s.jsx)(n.h3,{id:"testmilj\xf8er",children:"Testmilj\xf8er"}),(0,s.jsxs)(n.p,{children:["For spesifikke URL'er til testmilj\xf8 hos Skatteetaten, se ",(0,s.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/skatteetaten/innrapportering-aksjonaerregister-api/0.0.1",children:"SwaggerHub"}),"."]}),(0,s.jsx)(n.p,{children:"Digdir benytter TT02 som testmilj\xf8, hvor f\xf8lgende tilbys:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DialogPorten"}),"\n",(0,s.jsx)(n.li,{children:"Autentisering - Maskinporten"}),"\n",(0,s.jsx)(n.li,{children:"Autorisering - systembruker"}),"\n",(0,s.jsx)(n.li,{children:"Altinn innboks"}),"\n"]}),(0,s.jsx)(n.p,{children:"Konsumenter m\xe5 ha egne testmilj\xf8er som kan kobles mot testmilj\xf8er hos Skatteetaten og Digdir."}),(0,s.jsx)(n.h3,{id:"tenor-testdatas\xf8k",children:"Tenor testdatas\xf8k"}),(0,s.jsxs)(n.p,{children:["Det finnes pt. ikke s\xf8k i ",(0,s.jsx)(n.a,{href:"https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md",children:"Tenor"})," for\ndenne tjenesten. Men egenskaper ved enhetene som har testdata kan s\xf8kes frem i Tenor."]}),(0,s.jsx)(n.h3,{id:"testdata",children:"Testdata"}),(0,s.jsx)(n.p,{children:"Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatas\xf8k tilbyr dette.\nDet er ikke tillatt \xe5 bruke/sende skarpe data i test pga krav fra GDPR-regelverket."}),(0,s.jsx)(n.p,{children:"Det finnes forel\xf8pig ingen testdata for denne tjenesten. Denne siden oppdateres fortl\xf8pende ettersom testdata blir\ntilgjengelig."})]}),(0,s.jsx)(d,{headerText:"Kontakt oss",itemKey:"itemKey-6",children:(0,s.jsxs)(n.p,{children:["Har du sp\xf8rsm\xe5l til Skatteetaten om Aksjonaerregisteroppgave API, kan du sende oss e-post: ",(0,s.jsx)(n.a,{href:"mailto:altinnreetablering@skatteetaten.no",children:"altinnreetablering@skatteetaten.no"}),(0,s.jsx)(n.br,{}),"\n","V\xe6r oppmerksom p\xe5 at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3."]})})]})]})}function k(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},13664:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/aksjonaerregisteroppgaveHovedskjema-4392aad6caf40ce841f961cfdded300e.xsd"},63110:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/aksjonaerregisteroppgaveUnderskjema-9eef4cc2c1ba8f8b8660fc2cfe23c726.xsd"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);