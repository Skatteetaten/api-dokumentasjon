---
title: Skattemeldingen
slug: /anvendelsesomraader/skattemelding
folder: anvendelsesomraader
sidebar: mydoc_sidebar
datatable: true
tags: [Skattemelding]
last_updated: July 10, 2023
hide_table_of_contents: false
---

import Onboarding from '../api/innrapportering-skattemelding-onboarding.md';
import Viderekomne from '../api/innrapportering-skattemelding-viderekomne.md';

<Summary>API-er knyttet til Skattemeldingen</Summary>

<Tabs underline="true">
<TabItem headerText = "Onboardingsguide" itemKey="itemKey-1" default>
<Onboarding />
</TabItem>

<TabItem headerText = "Avansert bruk" itemKey="itemKey-2">
<Viderekomne />
</TabItem>


<TabItem headerText ="Test" itemKey="itemKey-3">

## Testscenarier for innsending av skattemelding med næringsspesifikasjon
Skatteetaten har utviklet flere demoklienter i Python med Jupyter Notebook som blant annet demonstrerer hvordan koble seg på ID-porten og kalle
Skatteetatens API, og sende inn skattemeldingen med vedlegg via Altinn3. Fremgangsmåten og testklienter finnes på
[Skatteetatens GitHub](https://github.com/Skatteetaten/skattemeldingen/blob/master/docs/test).
Det er også laget en [brukerveiledning for testdata](https://github.com/Skatteetaten/skattemeldingen/blob/master/docs/test/testdata/Brukerveiledning%20testdata.pptx)
i PowerPoint.

:::info
Å ta i bruk ID-Porten for autentisering mot testmiljøene krever et etablert kundeforhold hos Digdir.
Denne prosessen er delvis manuell så det anbefales å starte prosessen så tidlig som mulig.
Ved bestilling må det oppgis at det ønskes tilgang til Skattemeldings-API fra Skatteetaten.
:::

Se for øvrig [Tilgang til API-ene](../api/innrapportering-skattemelding-onboarding#tilgang-til-api-ene) for mer informasjon om hvordan man etablerer tilgang til API-ene.

## Testdata
Testdata kan søkes opp i [Tenor testdatasøk](../test/tenor.md).

For å teste eiendomstjenestene er det laget en oversikt over hvilke eiendommer som kan søkes opp i en [egen CSV-fil på Skatteetatens GitHub](https://github.com/Skatteetaten/skattemeldingen/blob/master/docs/api-v2/Syntetiske_eiendommer_v5.csv).

</TabItem>

<TabItem headerText="Kontakt oss" itemKey="itemKey-4">

Trenger du faglig eller teknisk brukerstøtte knyttet til integrasjon mot A-meldingen kan du kontakte oss via [brukerstøttetjenesten](https://eksternjira.sits.no/plugins/servlet/desk/site/global).

Lenke til å sette opp tilgang til brukerstøttetjenesten og bestille tilgang til ny tjeneste/scope finner dere på denne siden (under «Trenger du hjelp?»):  [Skattemelding – for sluttbrukersystemer - Skatteetaten](https://www.skatteetaten.no/samarbeidspartnere/sluttbrukersystemer/skattemelding-sbs/)

</TabItem>
</Tabs>
