---
title: URL-er
slug: /om/url
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [API,URL]
last_updated: Mar 5, 2024
hide_table_of_contents: true
---
<summary>URL-er til Skatteetatens API-er</summary>

Skatteetaten etablerer en løsning for API management og API gateway for de eksterne API-ene.

I den forbindelse har vi behov for å endre oppbyggingen av URL-ene våre, og alle eksterne konsumenter må derfor ta i bruk nye URL-er til API-ene våre. De fleste tjenestene våre er nå gjort tilgjenglig med nye URL-er i Test og Produksjon (detaljert oversikt under), og Open API spesifikasjonene (OAS) på [Swaggerhub](https://app.swaggerhub.com/organizations/skatteetaten) er oppdatert for de enkelte tjenestene. Nye URL-er vil i en periode være tilgjengelig i parallell med gamle URL-er før de gamle URL-ene saneres. Vi vil komme tilbake til frist for sanering av gamle URL-er, men oppfordrer til å skifte til nye URL-er så snart som mulig. 

Vi oppfordrer til å teste overgangen mot vårt testmiljø først.

[Kontakt Skatteetaten](https://www.skatteetaten.no/deling/kontakt/) på vanlig måte dersom du har spørsmål til endringen. Konsumenter som er omfattet av et segmentsamarbeid bes kontakte egen segmentansvarlig.

## Brannmur 

Det kan være at enkelte virksomheter må endre sine brannmurregler. IP-range vil være:
* Prod (*.api.skatteetaten.no): 20.100.51.138 / 2a13:6200:1065:13d:f5:52a2:e633:8625
* Test (*.api.skatteetaten-test.no): 51.13.21.170 / 2a13:6201:1066:c63:f5:fc5f:3c74:30c0


## Status og ny URL pr. API

:no_entry: : API-et er ikke klart med ny URL enda <br />
:white_check_mark: : API-et er klart med ny URL i Test og Prod 

| API |	Status | URL-er | Kommentar | 
| --- | ------ | ------ | --------- |
| [Aksjebeholdning API](https://app.swaggerhub.com/apis/skatteetaten/aksjebeholdning-api)	| :white_check_mark: | Test: https://aksjebeholdning.api.skatteetaten-test.no/v1 <br /> Prod: https://aksjebeholdning.api.skatteetaten.no/v1 | |
| [Aksjonær i virksomhet API](https://app.swaggerhub.com/apis/skatteetaten/aksjonaer-i-virksomhet-api)	| :white_check_mark: | Test: https://aksjonaerivirksomhet.api.skatteetaten-test.no/v1 <br /> Prod: https://aksjonaerivirksomhet.api.skatteetaten.no/v1 | |
| [Aktiv konto API](https://app.swaggerhub.com/apis/skatteetaten/aktiv-konto-api)	| :white_check_mark:| Test: https://aktivkonto.api.skatteetaten-test.no/v3 <br /> Prod: https://aktivkonto.api.skatteetaten.no/v3 | |
| [Arbeidsforhold i oppdrag API](https://app.swaggerhub.com/apis/skatteetaten/arbeidsforhold-i-oppdrag-api)	| :white_check_mark: | Test: https://arbeidsforholdioppdrag.api.skatteetaten-test.no/v1 <br /> Prod: https://arbeidsforholdioppdrag.api.skatteetaten.no/v1 | |
| [Arbeidsgiveravgift API](https://app.swaggerhub.com/apis/skatteetaten/arbeidsgiveravgift-api)	| :white_check_mark: | Test: https://arbeidsgiveravgift.api.skatteetaten-test.no/v1 <br /> Prod: https://arbeidsgiveravgift.api.skatteetaten.no/v1 | |
| [Avregning API](https://app.swaggerhub.com/apis/skatteetaten/avregning-api)	| :white_check_mark: | Test: https://avregning.api.skatteetaten-test.no/v2 <br /> Prod: https://avregning.api.skatteetaten.no/v2 |  |
| [Beregnet skatt API](https://app.swaggerhub.com/apis/skatteetaten/beregnet-skatt-api)	| :white_check_mark: | Test: https://beregnetskatt.api.skatteetaten-test.no/v2 <br /> Prod: https://beregnetskatt.api.skatteetaten.no/v2 | Kun V2 |
| [Beregnet skatt upersonlig API](https://app.swaggerhub.com/apis/skatteetaten/beregnet-skatt-upersonlig-api)	| :white_check_mark: | Test: https://beregnetskattupersonlig.api.skatteetaten-test.no/v1 <br /> Prod: https://beregnetskattupersonlig.api.skatteetaten.no/v1 | |
| [Boligsparing for ungdom API](https://app.swaggerhub.com/apis/skatteetaten/boligsparing-for-ungdom-api)	| :white_check_mark: | Test: https://bsu.api.skatteetaten-test.no/v1 <br /> Prod: https://bsu.api.skatteetaten.no/v1 | |
| [Formuesgrunnlag for eiendomsskatt API](https://app.swaggerhub.com/apis/skatteetaten/formuesgrunnlag-for-eiendomsskatt-api)	| :white_check_mark: | Test: https://formuesgrunnlageiendomsskatt.api.skatteetaten-test.no/v1 <br /> Prod: https://formuesgrunnlageiendomsskatt.api.skatteetaten.no/v1 | |
| [Formuesgrunnlag for eiendomsskatt hendelser](https://app.swaggerhub.com/apis/skatteetaten/formuesgrunnlag-for-endomsskatt-hendelser-api)	| :white_check_mark: | Test: https://formuesgrunnlageiendomsskatthendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://formuesgrunnlageiendomsskatthendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Inntekt API](https://app.swaggerhub.com/apis/skatteetaten/inntekt-api)	| :white_check_mark: | Test: https://inntekt.api.skatteetaten-test.no/v1 <br /> Prod: https://inntekt.api.skatteetaten.no/v1 | Endepunkt med oppgave saneres |
| [Inntekt hendelser](https://app.swaggerhub.com/apis/skatteetaten/inntekt-hendelser-api)	| :white_check_mark: | Test: https://inntekthendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://inntekthendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Inntektsmottakere API](https://app.swaggerhub.com/apis/skatteetaten/inntektsmottakere-api)	| :white_check_mark: | Test: https://inntektsmottakere.api.skatteetaten-test.no/v1 <br /> Prod: https://inntektsmottakere.api.skatteetaten.no/v1 | |
| [Krav og betalinger API](https://app.swaggerhub.com/apis/skatteetaten/krav-og-betalinger-api) | :white_check_mark: | Test: https://kravogbetalinger.api.skatteetaten-test.no/v1 <br /> Prod: https://kravogbetalinger.api.skatteetaten.no/v1 | |
| [Mva-melding API](https://app.swaggerhub.com/apis/skatteetaten/mva-melding-api)	| :white_check_mark: | Test: https://mvamelding.api.skatteetaten-test.no/v1 <br /> Prod: https://mvamelding.api.skatteetaten.no/v1 | |
| [Mva-melding hendelser](https://app.swaggerhub.com/apis/skatteetaten/mva-melding-hendelser-api)	| :white_check_mark: | Test: https://mvameldinghendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://mvameldinghendelser.api.skatteetaten.no/v1 | |
| [Mva-register avgiftssubjekt API](https://app.swaggerhub.com/apis/skatteetaten/mva-register-avgiftssubjekter-med-skattemeldingsplikt-api)	| :white_check_mark: | Test: https://mvaregister.api.skatteetaten-test.no/v1 <br /> Prod: https://mvaregister.api.skatteetaten.no/v1 | |
| [Mva-register avgiftssubjekt hendelser](https://app.swaggerhub.com/apis/skatteetaten/mva-register-avgiftssubjekter-hendelser-api)	| :white_check_mark: | Test: https://mvaregisterhendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://mvaregisterhendelser.api.skatteetaten.no/v1 | |
| [Mva meldingsopplysning API](https://app.swaggerhub.com/apis/skatteetaten/mva-meldingsopplysning-api) | :white_check_mark: | Test: https://mvameldingsopplysning.api.skatteetaten-test.no/v1 <br /> Prod: https://mvameldingsopplysning.api.skatteetaten.no/v1 | |
| [Næringsspesifikasjon API](https://app.swaggerhub.com/apis/skatteetaten/naeringsspesifikasjon-api)	| :white_check_mark: | Test: https://naeringsspesifikasjon.api.skatteetaten-test.no/v3 <br /> Prod: https://naeringsspesifikasjon.api.skatteetaten.no/v3 | |
| [Næringsspesifikasjon hendelser](https://app.swaggerhub.com/apis/skatteetaten/naeringsspesifikasjon-hendelser-api)	| :white_check_mark: | Test: https://naeringsspesifikasjonhendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://naeringsspesifikasjonhendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Omregistreringsavgift API](https://app.swaggerhub.com/apis/skatteetaten/omregistreringsavgift-api)	| :white_check_mark: | Test: https://omregistreringsavgift.api.skatteetaten-test.no/v1 <br /> Prod: https://omregistreringsavgift.api.skatteetaten.no/v1 |  |
| [Oppdrag utenlandske virksomheter API](https://app.swaggerhub.com/apis/skatteetaten/oppdrag-utenlandske-virksomheter-api)	| :white_check_mark: | Test: https://oppdragutenlandskevirksomheter.api.skatteetaten-test.no/v1 <br /> Prod: https://oppdragutenlandskevirksomheter.api.skatteetaten.no/v1 | |
| [Pensjonsgivende inntekt API](https://app.swaggerhub.com/apis/skatteetaten/pensjonsgivendeinntekt-api)	| :white_check_mark: | Test: https://pgi.api.skatteetaten-test.no/v1 <br /> Prod: https://pgi.api.skatteetaten.no/v1 | |
| [Pensjonsgivende inntekt for folketrygden API](https://app.swaggerhub.com/apis/skatteetaten/pensjonsgivendeinntekt-for-folketrygden-api)| :white_check_mark: | Test: https://pgiforfolketrygden.api.skatteetaten-test.no/v1 <br /> Prod: https://pgiforfolketrygden.api.skatteetaten.no/v1 | |
| [Pensjonsgivende inntekt for folketrygden hendelser](https://app.swaggerhub.com/apis/skatteetaten/pensjonsgivende-inntekt-for-folketrygden-hendelser-api)	| :white_check_mark: | Test: https://pgiforfolketrygdenhendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://pgiforfolketrygdenhendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Restanser API](https://app.swaggerhub.com/apis/skatteetaten/restanser-api)	| :white_check_mark: | Test: https://restanser.api.skatteetaten-test.no/v2	<br /> Prod: https://restanser.api.skatteetaten.no/v2 | |
| [Siste tilgjengelige skatteoppgjør API (tidl. Tilgjengeligdata API)](https://app.swaggerhub.com/apis/skatteetaten/siste-tilgjengelige-skatteoppgjoer)	| :white_check_mark: | Test: https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten-test.no/v1 <br /> Prod: https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten.no/v1 | Endepunkt med ressurs saneres |
| [Skatteberegningsgrunnlag upersonlig API](https://app.swaggerhub.com/apis/skatteetaten/skatteberegningsgrunnlag-upersonlig-api)	| :white_check_mark: | Test: https://skatteberegningsgrunnlagupersonlig.api.skatteetaten-test.no/v1 <br /> Prod: https://skatteberegningsgrunnlagupersonlig.api.skatteetaten.no/v1 | |
| [Skattemelding API](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-api) | :white_check_mark: |	Test: https://skattemelding.api.skatteetaten-test.no/v3 <br /> Prod: https://skattemelding.api.skatteetaten.no/v3 | |
| [Skattemelding fastsatt hendelser](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-fastsatt-hendelser-api)	| :white_check_mark: | Test: https://skattemeldingfastsatthendelser.api.skatteetaten-test.no/v1 <br /> Prod:	https://skattemeldingfastsatthendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Skattemelding upersonlig API](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-upersonlig-api) | :white_check_mark:	| Test: https://skattemeldingupersonlig.api.skatteetaten-test.no/v2 <br /> Prod: https://skattemeldingupersonlig.api.skatteetaten.no/v2 | |
| [Skattemelding upersonlig hendelser](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-upersonlig-hendelser-api)	| :white_check_mark: | Test: https://skattemeldingupersonlighendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://skattemeldingupersonlighendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Skattemelding utkast hendelser](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-utkast-hendelser-api)	| :white_check_mark: | Test: https://skattemeldingutkasthendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://skattemeldingutkasthendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Skatteoppgjør hendelser](https://app.swaggerhub.com/apis/skatteetaten/skatteoppgjor-hendelser-api)	| :white_check_mark: | Test: https://skatteoppgjoerhendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://skatteoppgjoerhendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Skatteoppgjør upersonlig hendelser](https://app.swaggerhub.com/apis/skatteetaten/skatteoppgjor-upersonlig-hendelser-api)	| :white_check_mark: | Test: https://skatteoppgjoerupersonlighendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://skatteoppgjoerupersonlighendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Skatteplikt API](https://app.swaggerhub.com/apis/skatteetaten/skatteplikt-api)	| :white_check_mark: | Test: https://skatteplikt.api.skatteetaten-test.no/v2 <br /> Prod: https://skatteplikt.api.skatteetaten.no/v2 | |
| [Skatteplikt upersonlig API](https://app.swaggerhub.com/apis/skatteetaten/skatteplikt-upersonlig-api)	| :white_check_mark: | Test: https://skattepliktupersonlig.api.skatteetaten-test.no/v1 <br /> Prod: https://skattepliktupersonlig.api.skatteetaten.no/v1 | |
| Spesifisert summert skattegrunnlag API	| :no_entry: |  | API-et vil ikke få ny URL, men etter hvert saneres. Erstattes av Summert skattegrunnlag API V2. |
| [Summert skattegrunnlag API](https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-api)	| :white_check_mark: (V2) | Test: https://summertskattegrunnlag.api.skatteetaten-test.no/v2 <br /> Prod: https://summertskattegrunnlag.api.skatteetaten.no/v2| Endepunkt uten stadie saneres. V1 får ikke ny URL, men vil etter hvert saneres. |
| [Summert skattegrunnlag upersonlig API](https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-upersonlig-api)	| :white_check_mark: | Test: https://summertskattegrunnlagupersonlig.api.skatteetaten-test.no/v1 <br /> Prod: https://summertskattegrunnlagupersonlig.api.skatteetaten.no/v1 | |
| [Tilleggsskatt API](https://app.swaggerhub.com/apis/skatteetaten/tilleggsskatt-api)	| :white_check_mark: | Test: https://tilleggsskatt.api.skatteetaten-test.no/v1 <br /> Prod: https://tilleggsskatt.api.skatteetaten.no/v1 | |
| [Tilleggsskatt hendelser](https://app.swaggerhub.com/apis/skatteetaten/tilleggsskatt-hendelser-api)	| :white_check_mark: | Test: https://tilleggsskatthendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://tilleggsskatthendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| [Tjenestepensjonsavtale API](https://app.swaggerhub.com/apis/skatteetaten/tjenestepensjonsavtale-api)	| :white_check_mark: | Test: https://tjenestepensjonsavtale.api.skatteetaten-test.no/v1 <br /> Prod: https://tjenestepensjonsavtale.api.skatteetaten.no/v1 | |
| [Trukket kildeskatt på lønn API](https://app.swaggerhub.com/apis/skatteetaten/trukketkildeskattpaaloenn-api)	| :white_check_mark: | Test: https://trukketkildeskattpaaloenn.api.skatteetaten-test.no/v1	<br /> Prod: https://trukketkildeskattpaaloenn.api.skatteetaten.no/v1 | |
