---
title: Skatteplikt upersonlig API
slug: /api/skattepliktupersonlig
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør]
keywords: [Skatteplikt, inntekt, formue]
last_updated: Mar 31, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon om type skatteplikt og grunnlag for vurdering av skatteplikten for en virksomhet.</summary>

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
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattepliktupersonlig`

## Delegering
Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skatteplikt upersonlig API - På vegne av`

## Teknisk spesifikasjon
Url’er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skatteplikt-upersonlig-api) på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| ssb                     |

## Støttetjenester

### Hendelser
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør upersonlig hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/b2ef75a2-745e-328d-8677-bfeeacea6cab) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                                                        |
|----------|-----------------|-----------------------------------------------------------------------------------|
| SUP-001  | 500             | Uventet feil på tjenesten.                                                        |
| SUP-002  | 500             | Uventet feil i et bakenforliggende system.                                        |
| SUP-003  | 404             | Ukjent url benyttet.                                                              |
| SUP-004  | 401             | Feil i forbindelse med autentisering.                                             |
| SUP-005  | 403             | Feil i forbindelse med autorisering.                                              |
| SUP-006  | 400             | Feil i forbindelse med validering av inputdata.                                   |
| SUP-007  | 404             | Ikke treff på oppgitt organisasjonsnummer.                                        |
| SUP-008  | 404             | Ingen skatteplikt funnet på oppgitt organisasjonsnummer og inntektsår. |
| SUP-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                        |
| SUP-010  | 410             | Skatteplikt finnes ikke lenger.                                                |

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
