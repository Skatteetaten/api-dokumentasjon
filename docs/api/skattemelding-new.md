---
title: Skattemeldingen
slug: /anvendelsesomraader/skattemelding-new
folder: anvendelsesomraader
datatable: true
tags: [Skattemelding]
last_updated: July 10, 2023
hide_table_of_contents: false
unlisted: true
---

import Onboarding from '../api/innrapportering-skattemelding-onboarding.md';
import Viderekomne from '../api/innrapportering-skattemelding-viderekomne.md';
import Test from '../api/innrapportering-skattemelding-test.md';

<Summary>API-er for innrapportering og deling for skattemeldingen</Summary>

<Tabs underline="true">
<TabItem headerText = "Om tjenesten" itemKey="itemKey-0">

## Introduksjon
På dette området finner du tjenester for innrapportering av
skattemeldingen og næringsspesifikasjon for personlige og upersonlige skattepliktige.

Den primære målgruppen er systemleverandører av årsoppgjørsprogram eller regnskapssystem for
innrapportering av skattemeldingen og næringsopplysninger. Slike systemer kalles heretter
sluttbrukersystemer (SBS).

Området er delt inn på følgende måte:
* Fanen [Onboardingsguide](skattemelding-new.md?tab=Onboardingsguide) er laget for nye leverandører som skal etablere tilgang til skattemeldingstjenester. Den tar deg gjennom de nødvendige stegene for å etablere tilganger og den funksjonelle og tekniske flyten for å integrere innrapportering av skattemeldingen i sluttbrukersystemet.
* Har du en etablert integrasjon mot Skatteetatens API-er for innrapportering av skattemeldingen og ser etter spesifikke detaljer,
  kan du gå til fanen [Avansert bruk](skattemelding-new.md?tab=Avansert+bruk).
* Under fanen [Test](skattemelding-new.md?tab=Test) finner du veiledning og lenke til demoapplikasjoner for å teste
  integrasjonene mot Maskinporten, ID-Porten og Skatteetatens API-er for utfylling og innrapportering av skattemeldingen.

For API-er knyttet til Deling fra Skatteetaten, se [Deling fra Skatteetaten](#api-er-for-deling-for-skattemeldingen).
Leverandører som skal integrere skattemeldingstjenester i sine sluttbrukersystemer,
skal benytte seg av API-ene for innrapportering og ikke deling. API-er for deling for skattemeldingen er ikke omtalt
andre steder i denne guiden. 

For andre API-er som kan være relevante for skattemeldingen, men ikke er knyttet til selve skattemeldingen,
se [Andre relevante API-er for skattemeldingen](#andre-relevante-api-er-for-skattemeldingen).

## API-er for deling for skattemeldingen
I tillegg til API-ene knyttet til innsending av skattemeldingen, har vi laget noen klassiske delingstjenester for SSB og enkelte andre partnere med hjemmel for innsyn i skattemeldingsdata:
* [Næringsspesifikasjon API](../api/naeringsspesifikasjon)
* [Skattemelding API](../api/skattemelding)
* [Skattemelding upersonlig API](../api/skattemeldingupersonlig)
* [Tilleggsskatt API](../api/tilleggsskatt)

## Andre relevante API-er for skattemeldingen
Skatteetaten tilbyr tjenesten [Skatt dialogdokumenter](../api/skattdialogdokumenter)
for å hente ut dokumenter som tilgjengeliggjøres i dialoger for formues- og inntektsskatt, blant annet skatteoppgjør og brev om skattemeldingen. Denne tjenesten krever separate tilganger og er ikke en del av innsendingsløpet for skattemeldingen.

</TabItem>
<TabItem headerText = "Onboardingsguide" itemKey="itemKey-1" default>
<Onboarding />
</TabItem>

<TabItem headerText = "Avansert bruk" itemKey="itemKey-2">
<Viderekomne />
</TabItem>

<TabItem headerText ="Test" itemKey="itemKey-3">
<Test />
</TabItem>

<TabItem headerText="Kontakt oss" itemKey="itemKey-4">

Trenger du faglig eller teknisk brukerstøtte knyttet til integrasjon mot skattemeldingstjenestene kan du kontakte oss via [brukerstøttetjenesten](https://eksternjira.sits.no/plugins/servlet/desk/site/global).

Lenke til å sette opp tilgang til brukerstøttetjenesten og bestille tilgang til ny tjeneste/scope finner dere på denne siden (under «Trenger du hjelp?»):  [Skattemelding – for sluttbrukersystemer - Skatteetaten](https://www.skatteetaten.no/samarbeidspartnere/sluttbrukersystemer/skattemelding-sbs/)

</TabItem>
</Tabs>
