---
title: URL-er
slug: /om/urler
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [API,URL]
last_updated: Mar 5, 2024
hide_table_of_contents: true
---
<summary>URL-er til Skatteetatens API-er</summary>

Skatteetaten etablerer en løsning for API management og API gateway for de eksterne API-ene.

I den forbindelse går vi over til host basert routing, og alle eksterne konsumenter må derfor ta i bruk nye URL-er til API-ene våre. Nye URL-er vil i en periode være tilgjengelig i parallell med gamle URL-er før de gamle URL-ene saneres. De fleste tjenestene våre er nå gjort tilgjenglig med nye URL-er i Test og Produksjon (detaljert oversikt under), og Open API spesifikasjonene (OAS) på [Swaggerhub](https://app.swaggerhub.com/organizations/skatteetaten) er oppdatert for de enkelte tjenestene.

Vi oppfordrer til å teste overgangen mot vårt testmiljø først.

## Brannmur 

Det kan være at enkelte virksomheter må endre sine brannmurregler. IP-range vil være:
* Prod (*.api.skatteetaten.no): 20.100.51.138 / 2a13:6200:1065:13d:f5:52a2:e633:8625
* Test (*.api.skatteetaten-test.no): 51.13.21.170 / 2a13:6201:1066:c63:f5:fc5f:3c74:30c0


## Status og ny URL pr. API

| API |	Status | Test | Produksjon | Kommentar | 
| --- | ------ | ---- | -----------| --------- |
| Aksjebeholdning API	| Ikke klar | https://aksjebeholdning.api.skatteetaten-test.no/v1 | https://aksjebeholdning.api.skatteetaten.no/v1 | |
| Aksjonær i virksomhet API	| Ikke klar | https://aksjonaerivirksomhet.api.skatteetaten-test.no/v1 | https://aksjonaerivirksomhet.api.skatteetaten.no/v1 | |
| Aktiv konto API	| Klar i Test og Prod | https://aktivkonto.api.skatteetaten-test.no/v3 | https://aktivkonto.api.skatteetaten.no/v3 | |
| Arbeidsforhold i oppdrag API	| Klar i Test og Prod | https://arbeidsforholdioppdrag.api.skatteetaten-test.no/v1 | https://arbeidsforholdioppdrag.api.skatteetaten.no/v1 | |
| Arbeidsgiveravgift API	| Klar i Test og Prod | https://arbeidsgiveravgift.api.skatteetaten-test.no/v1 | https://arbeidsgiveravgift.api.skatteetaten.no/v1 | |
| Avregning API	| Klar i Test og Prod | https://avregning.api.skatteetaten-test.no/v2 | https://avregning.api.skatteetaten.no/v2 |  |
| Beregnet skatt API	| Klar i Test og Prod | https://beregnetskatt.api.skatteetaten-test.no/v2 | https://beregnetskatt.api.skatteetaten.no/v2 | Kun V2 |
| Beregnet skatt upersonlig API	| Klar i Test og Prod | https://beregnetskattupersonlig.api.skatteetaten-test.no/v1 | https://beregnetskattupersonlig.api.skatteetaten.no/v1 | |
| Boligsparing for ungdom API	| Klar i Test og Prod | https://bsu.api.skatteetaten-test.no/v1 | https://bsu.api.skatteetaten.no/v1 | |
| Formuesgrunnlag for eiendomsskatt API	| Ikke klar | https://formuesgrunnlagforeiendomsskatt.api.skatteetaten-test.no/v1 | https://formuesgrunnlagforeiendomsskatt.api.skatteetaten.no/v1 | |
| Inntekt API	| Klar i Test og Prod | https://inntekt.api.skatteetaten-test.no/v1 | https://inntekt.api.skatteetaten.no/v1 | Endepunkt med oppgave saneres |
| Inntekt hendelser	| Klar i Test og Prod | https://inntekthendelser.api.skatteetaten-test.no/v1 | https://inntekthendelser.api.skatteetaten.no/v1 | Trailing slash er fjernet |
| Inntektsmottakere API	| Klar i Test og Prod | https://inntektsmottakere.api.skatteetaten-test.no/v1 | https://inntektsmottakere.api.skatteetaten.no/v1 | |
| Krav og betalinger API | Klar i Test og Prod | https://kravogbetalinger.api.skatteetaten-test.no/v1 | https://kravogbetalinger.api.skatteetaten.no/v1 | |
| Mva meldingsopplysning API | Klar i Test og Prod | https://mvameldingsopplysning.api.skatteetaten-test.no/v1 | https://mvameldingsopplysning.api.skatteetaten.no/v1 | |
| Mva-melding API	| Ikke klar | https://mvamelding.api.skatteetaten-test.no/v1 | https://mvamelding.api.skatteetaten.no/v1 | |
| Mva-melding hendelser	| Ikke klar | https://mvameldinghendelser.api.skatteetaten-test.no/v1 | https://mvameldinghendelser.api.skatteetaten.no/v1 | |
| Mva-register avgiftssubjekt API	| Ikke klar | https://mvaregister.api.skatteetaten-test.no/v1 | https://mvaregister.api.skatteetaten.no/v1 | |
| Mva-register avgiftssubjekt hendelser	| Ikke klar | https://mvaregisterhendelser.api.skatteetaten-test.no/v1 | https://mvaregisterhendelser.api.skatteetaten.no/v1 | |
| Næringsspesifikasjon API	| Klar i Test og Prod | https://naeringsspesifikasjon.api.skatteetaten-test.no/v3 | https://naeringsspesifikasjon.api.skatteetaten.no/v3 | |
| Næringsspesifikasjon hendelser	| Klar i Test og Prod | https://naeringsspesifikasjonhendelser.api.skatteetaten-test.no/v1 | https://naeringsspesifikasjonhendelser.api.skatteetaten.no/v1 | Trailing slash er fjernet |
| Omregistreringsavgift API	| Klar i Test og Prod | https://omregistreringsavgift.api.skatteetaten-test.no/v1 | https://omregistreringsavgift.api.skatteetaten.no/v1 |  |
| Oppdrag utenlandske virksomheter API	| Klar i Test og Prod | https://oppdragutenlandskevirksomheter.api.skatteetaten-test.no/v1 | https://oppdragutenlandskevirksomheter.api.skatteetaten.no/v1 | |
| Pensjonsgivende inntekt API	| Klar i Test og Prod | https://pgi.api.skatteetaten-test.no/v1 | https://pgi.api.skatteetaten.no/v1 | |
| Pensjonsgivende inntekt for folketrygden API	| Klar i Test og Prod | https://pgiforfolketrygden.api.skatteetaten-test.no/v1 | https://pgiforfolketrygden.api.skatteetaten.no/v1 | |
| Pensjonsgivende inntekt for folketrygden hendelser	| Klar i Test og Prod | https://pgiforfolketrygdenhendelser.api.skatteetaten-test.no/v1 | https://pgiforfolketrygdenhendelser.api.skatteetaten.no/v1 | Trailing slash er fjernet |
| Restanser API	| Klar i Test og Prod | https://restanser.api.skatteetaten-test.no/v2	| https://restanser.api.skatteetaten.no/v2 | |
| Siste tilgjengelige skatteoppgjør API (tidl. Tilgjengeligdata API)	| Klar i Test og Prod | https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten-test.no/v1 | https://sistetilgjengeligeskatteoppgjoer.api.skatteetaten.no/v1 | Endepunkt med ressurs saneres |
| Skatteberegningsgrunnlag upersonlig API	| Klar i Test og Prod | https://skatteberegningsgrunnlagupersonlig.api.skatteetaten-test.no/v1 | https://skatteberegningsgrunnlagupersonlig.api.skatteetaten.no/v1 | |
| Skattemelding API | Klar i Test og Prod |	https://skattemelding.api.skatteetaten-test.no/v3 | https://skattemelding.api.skatteetaten.no/v3 | |
| Skattemelding fastsatt hendelser	| Klar i Test og Prod | https://skattemeldingfastsatthendelser.api.skatteetaten-test.no/v1 | 	https://skattemeldingfastsatthendelser.api.skatteetaten.no/v1 | Trailing slash er fjernet |
| Skattemelding upersonlig API | Klar i Test og Prod	| https://skattemeldingupersonlig.api.skatteetaten-test.no/v2 | https://skattemeldingupersonlig.api.skatteetaten.no/v2 | |
| Skattemelding upersonlig hendelser	| Klar i Test og Prod | https://skattemeldingupersonlighendelser.api.skatteetaten-test.no/v1 | https://skattemeldingupersonlighendelser.api.skatteetaten.no/v1 | Trailing slash er fjernet |
| Skattemelding utkast hendelser	| Klar i Test og Prod | https://skattemeldingutkasthendelser.api.skatteetaten-test.no/v1 | https://skattemeldingutkasthendelser.api.skatteetaten.no/v1 | Trailing slash er fjernet |
| Skatteoppgjør hendelser	| Klar i Test og Prod | https://skatteoppgjoerhendelser.api.skatteetaten-test.no/v1 | https://skatteoppgjoerhendelser.api.skatteetaten.no/v1 | Trailing slash er fjernet |
| Skatteoppgjør upersonlig hendelser	| Klar i Test og Prod | https://skatteoppgjoerupersonlighendelser.api.skatteetaten-test.no/v1 | https://skatteoppgjoerupersonlighendelser.api.skatteetaten.no/v1 | Trailing slash er fjernet |
| Skatteplikt API	| Klar i Test og Prod | https://skatteplikt.api.skatteetaten-test.no/v2 | https://skatteplikt.api.skatteetaten.no/v2 | |
| Skatteplikt upersonlig API	| Klar i Test og Prod | https://skattepliktupersonlig.api.skatteetaten-test.no/v1 | https://skattepliktupersonlig.api.skatteetaten.no/v1 | |
| Summert skattegrunnlag API	| Ikke klar | https://summertskattegrunnlag.api.skatteetaten-test.no/v1 | https://summertskattegrunnlag.api.skatteetaten.no/v1 | Endepunkt uten stadie saneres |
| Summert skattegrunnlag upersonlig API	| Klar i Test og Prod | https://summertskattegrunnlagupersonlig.api.skatteetaten-test.no/v1 | https://summertskattegrunnlagupersonlig.api.skatteetaten.no/v1 | |
| Tilleggsskatt API	| Klar i Test og Prod | https://tilleggsskatt.api.skatteetaten-test.no/v1 | https://tilleggsskatt.api.skatteetaten.no/v1 | |
| Tilleggsskatt hendelser	| Klar i Test og Prod | https://tilleggsskatthendelser.api.skatteetaten-test.no/v1 | https://tilleggsskatthendelser.api.skatteetaten.no/v1 | Trailing slash er fjernet |
| Tjenestepensjonsavtale API	| Ikke klar | https://tjenestepensjonsavtale.api.skatteetaten-test.no/v1 | https://tjenestepensjonsavtale.api.skatteetaten.no/v1 | |
| Trukket kildeskatt på lønn API	| Klar i Test og Prod | https://trukketkildeskattpaaloenn.api.skatteetaten-test.no/v1	| https://trukketkildeskattpaaloenn.api.skatteetaten.no/v1 | |
