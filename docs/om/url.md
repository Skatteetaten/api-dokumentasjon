---
title: URL
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

I den forbindelse har vi behov for å endre oppbyggingen av URL-ene våre, og alle eksterne konsumenter må derfor ta i bruk nye URL-er til API-ene våre. Nye URL-er vil i en periode være tilgjengelig i parallell med gamle URL-er før de gamle URL-ene saneres. Vi vil komme tilbake til frist for sanering av gamle URL-er. De fleste tjenestene våre er nå gjort tilgjenglig med nye URL-er i Test og Produksjon (detaljert oversikt under), og Open API spesifikasjonene (OAS) på [Swaggerhub](https://app.swaggerhub.com/organizations/skatteetaten) er oppdatert for de enkelte tjenestene.

Vi oppfordrer til å teste overgangen mot vårt testmiljø først.

## Brannmur 

Det kan være at enkelte virksomheter må endre sine brannmurregler. IP-range vil være:
* Prod (*.api.skatteetaten.no): 20.100.51.138 / 2a13:6200:1065:13d:f5:52a2:e633:8625
* Test (*.api.skatteetaten-test.no): 51.13.21.170 / 2a13:6201:1066:c63:f5:fc5f:3c74:30c0


## Status og ny URL pr. API

:no_entry: : API-et er ikke klart med ny URL enda <br />
:white_check_mark: : API-et er klart med ny URL i Test og Prod 

| API |	Status | URL-er | Kommentar | 
| --- | ------ | ------ | --------- |
| Aksjebeholdning API	| :no_entry: | Test: https://aksjebeholdning.api.skatteetaten-test.no/v1 <br /> Prod: https://aksjebeholdning.api.skatteetaten.no/v1 | |
| Aksjonær i virksomhet API	| :no_entry: | Test: https://aksjonaerivirksomhet.api.skatteetaten-test.no/v1 <br /> Prod: https://aksjonaerivirksomhet.api.skatteetaten.no/v1 | |
| Aktiv konto API	| :white_check_mark:| Test: https://aktivkonto.api.skatteetaten-test.no/v3 <br /> Prod: https://aktivkonto.api.skatteetaten.no/v3 | |
| Arbeidsforhold i oppdrag API	| :white_check_mark: | Test: https://arbeidsforholdioppdrag.api.skatteetaten-test.no/v1 <br /> Prod: https://arbeidsforholdioppdrag.api.skatteetaten.no/v1 | |
| Arbeidsgiveravgift API	| :white_check_mark: | Test: https://arbeidsgiveravgift.api.skatteetaten-test.no/v1 <br /> Prod: https://arbeidsgiveravgift.api.skatteetaten.no/v1 | |
| Avregning API	| :white_check_mark: | Test: https://avregning.api.skatteetaten-test.no/v2 <br /> Prod: https://avregning.api.skatteetaten.no/v2 |  |
| Beregnet skatt API	| :white_check_mark: | Test: https://beregnetskatt.api.skatteetaten-test.no/v2 <br /> Prod: https://beregnetskatt.api.skatteetaten.no/v2 | Kun V2 |
| Beregnet skatt upersonlig API	| :white_check_mark: | Test: https://beregnetskattupersonlig.api.skatteetaten-test.no/v1 <br /> Prod: https://beregnetskattupersonlig.api.skatteetaten.no/v1 | |
| Boligsparing for ungdom API	| :white_check_mark: | Test: https://bsu.api.skatteetaten-test.no/v1 <br /> Prod: https://bsu.api.skatteetaten.no/v1 | |
| Formuesgrunnlag for eiendomsskatt API	| :no_entry: | Test: https://formuesgrunnlagforeiendomsskatt.api.skatteetaten-test.no/v1 <br /> Prod: https://formuesgrunnlagforeiendomsskatt.api.skatteetaten.no/v1 | |
| Inntekt API	| :white_check_mark: | Test: https://inntekt.api.skatteetaten-test.no/v1 <br /> Prod: https://inntekt.api.skatteetaten.no/v1 | Endepunkt med oppgave saneres |
| Inntekt hendelser	| :white_check_mark: | Test: https://inntekthendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://inntekthendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| Inntektsmottakere API	| :white_check_mark: | Test: https://inntektsmottakere.api.skatteetaten-test.no/v1 <br /> Prod: https://inntektsmottakere.api.skatteetaten.no/v1 | |
| Krav og betalinger API | :white_check_mark: | Test: https://kravogbetalinger.api.skatteetaten-test.no/v1 <br /> Prod: https://kravogbetalinger.api.skatteetaten.no/v1 | |
| Mva meldingsopplysning API | :white_check_mark: | Test: https://mvameldingsopplysning.api.skatteetaten-test.no/v1 <br /> Prod: https://mvameldingsopplysning.api.skatteetaten.no/v1 | |
| Mva-melding API	| :no_entry: | Test: https://mvamelding.api.skatteetaten-test.no/v1 <br /> Prod: https://mvamelding.api.skatteetaten.no/v1 | |
| Mva-melding hendelser	| :no_entry: | Test: https://mvameldinghendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://mvameldinghendelser.api.skatteetaten.no/v1 | |
| Mva-register avgiftssubjekt API	| :no_entry: | Test: https://mvaregister.api.skatteetaten-test.no/v1 <br /> Prod: https://mvaregister.api.skatteetaten.no/v1 | |
| Mva-register avgiftssubjekt hendelser	| :no_entry: | Test: https://mvaregisterhendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://mvaregisterhendelser.api.skatteetaten.no/v1 | |
| Næringsspesifikasjon API	| :white_check_mark: | Test: https://naeringsspesifikasjon.api.skatteetaten-test.no/v3 <br /> Prod: https://naeringsspesifikasjon.api.skatteetaten.no/v3 | |
| Næringsspesifikasjon hendelser	| :white_check_mark: | Test: https://naeringsspesifikasjonhendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://naeringsspesifikasjonhendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| Omregistreringsavgift API	| :white_check_mark: | Test: https://omregistreringsavgift.api.skatteetaten-test.no/v1 <br /> Prod: https://omregistreringsavgift.api.skatteetaten.no/v1 |  |
| Oppdrag utenlandske virksomheter API	| :white_check_mark: | Test: https://oppdragutenlandskevirksomheter.api.skatteetaten-test.no/v1 <br /> Prod: https://oppdragutenlandskevirksomheter.api.skatteetaten.no/v1 | |
| Pensjonsgivende inntekt API	| :white_check_mark: | Test: https://pgi.api.skatteetaten-test.no/v1 <br /> Prod: https://pgi.api.skatteetaten.no/v1 | |
| Pensjonsgivende inntekt for folketrygden API	| :white_check_mark: | Test: https://pgiforfolketrygden.api.skatteetaten-test.no/v1 <br /> Prod: https://pgiforfolketrygden.api.skatteetaten.no/v1 | |
| Pensjonsgivende inntekt for folketrygden hendelser	| :white_check_mark: | Test: https://pgiforfolketrygdenhendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://pgiforfolketrygdenhendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| Restanser API	| :white_check_mark: | Test: https://restanser.api.skatteetaten-test.no/v2	<br /> Prod: https://restanser.api.skatteetaten.no/v2 | |
| Siste tilgjengelige skatteoppgjør API (tidl. Tilgjengeligdata API)	| :white_check_mark: | Test: https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten-test.no/v1 <br /> Prod: https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten.no/v1 | Endepunkt med ressurs saneres |
| Skatteberegningsgrunnlag upersonlig API	| :white_check_mark: | Test: https://skatteberegningsgrunnlagupersonlig.api.skatteetaten-test.no/v1 <br /> Prod: https://skatteberegningsgrunnlagupersonlig.api.skatteetaten.no/v1 | |
| Skattemelding API | :white_check_mark: |	Test: https://skattemelding.api.skatteetaten-test.no/v3 <br /> Prod: https://skattemelding.api.skatteetaten.no/v3 | |
| Skattemelding fastsatt hendelser	| :white_check_mark: | Test: https://skattemeldingfastsatthendelser.api.skatteetaten-test.no/v1 <br /> Prod:	https://skattemeldingfastsatthendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| Skattemelding upersonlig API | :white_check_mark:	| Test: https://skattemeldingupersonlig.api.skatteetaten-test.no/v2 <br /> Prod: https://skattemeldingupersonlig.api.skatteetaten.no/v2 | |
| Skattemelding upersonlig hendelser	| :white_check_mark: | Test: https://skattemeldingupersonlighendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://skattemeldingupersonlighendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| Skattemelding utkast hendelser	| :white_check_mark: | Test: https://skattemeldingutkasthendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://skattemeldingutkasthendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| Skatteoppgjør hendelser	| :white_check_mark: | Test: https://skatteoppgjoerhendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://skatteoppgjoerhendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| Skatteoppgjør upersonlig hendelser	| :white_check_mark: | Test: https://skatteoppgjoerupersonlighendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://skatteoppgjoerupersonlighendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| Skatteplikt API	| :white_check_mark: | Test: https://skatteplikt.api.skatteetaten-test.no/v2 <br /> Prod: https://skatteplikt.api.skatteetaten.no/v2 | |
| Skatteplikt upersonlig API	| :white_check_mark: | Test: https://skattepliktupersonlig.api.skatteetaten-test.no/v1 <br /> Prod: https://skattepliktupersonlig.api.skatteetaten.no/v1 | |
| Spesifisert summert skattegrunnlag API	| :no_entry: |  | Tjenesten slås sammen med Summert skattegrunnlag API |
| Summert skattegrunnlag API	| :no_entry: |  | Endepunkt uten stadie saneres. Tjenesten slås sammen med Spesifisert summert skattegrunnlag API |
| Summert skattegrunnlag upersonlig API	| :white_check_mark: | Test: https://summertskattegrunnlagupersonlig.api.skatteetaten-test.no/v1 <br /> Prod: https://summertskattegrunnlagupersonlig.api.skatteetaten.no/v1 | |
| Tilleggsskatt API	| :white_check_mark: | Test: https://tilleggsskatt.api.skatteetaten-test.no/v1 <br /> Prod: https://tilleggsskatt.api.skatteetaten.no/v1 | |
| Tilleggsskatt hendelser	| :white_check_mark: | Test: https://tilleggsskatthendelser.api.skatteetaten-test.no/v1 <br /> Prod: https://tilleggsskatthendelser.api.skatteetaten.no/v1 | Etterfølgende skråstrek i URL er fjernet |
| Tjenestepensjonsavtale API	| :no_entry: | Test: https://tjenestepensjonsavtale.api.skatteetaten-test.no/v1 <br /> Prod: https://tjenestepensjonsavtale.api.skatteetaten.no/v1 | |
| Trukket kildeskatt på lønn API	| :white_check_mark: | Test: https://trukketkildeskattpaaloenn.api.skatteetaten-test.no/v1	<br /> Prod: https://trukketkildeskattpaaloenn.api.skatteetaten.no/v1 | |

[Kontakt Skatteetaten](https://www.skatteetaten.no/deling/kontakt/) på vanlig måte dersom du har spørsmål til endringen. Konsumenter som er omfattet av et segmentsamarbeid bes kontakte egen segmentansvarlig.
