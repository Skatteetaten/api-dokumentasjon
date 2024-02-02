---
title: Summert skattegrunnlag upersonlig API
slug: /api/summertskattegrunnlagupersonlig
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør]
keywords: [SummertSkattegrunnlag, inntekt, formue]
last_updated: Mar 29, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en virksomhet.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:summertskattegrunnlagupersonlig`

## Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Summert skattegrunnlag upersonlig API - På vegne av`

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-upersonlig-api) på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| ssb                     |

## Støttetjenester

### Hendelser
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør upersonlig hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/7954ac24-fac2-3333-b47f-bc941ca1648e) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                                                        |
|----------|-----------------|-----------------------------------------------------------------------------------|
| SSU-001  | 500             | Uventet feil på tjenesten.                                                        |
| SSU-002  | 500             | Uventet feil i et bakenforliggende system.                                        |
| SSU-003  | 404             | Ukjent url benyttet.                                                              |
| SSU-004  | 401             | Feil i forbindelse med autentisering.                                             |
| SSU-005  | 403             | Feil i forbindelse med autorisering.                                              |
| SSU-006  | 400             | Feil i forbindelse med validering av inputdata.                                   |
| SSU-007  | 404             | Ikke treff på oppgitt organisasjonsnummer.                                        |
| SSU-008  | 404             | Ingen summert skattegrunnlag funnet på oppgitt organisasjonsnummer og inntektsår. |
| SSU-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                        |
| SSU-010  | 410             | Skattegrunnlag finnes ikke lenger.                                                |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata

Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne: 

| Organisasjonsnummer | Inntektsår |
|---|---|
| 210962492  | 2021 |
| 310962074  | 2021 |
| 312282933  | 2021 |
  
Ytterligere testdata kan man benytte hendelseslisten for å finne.

</TabItem>
</Tabs>

