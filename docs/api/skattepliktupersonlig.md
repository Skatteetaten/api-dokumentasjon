---
title: Skatteplikt upersonlig API
slug: /api/skattepliktupersonlig
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør]
keywords: [Skatteplikt, inntekt, formue]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---
<Summary>Tjenesten leverer informasjon om type skatteplikt og grunnlag for vurdering av skatteplikten for en virksomhet.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skatteplikt-upersonlig-api) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattepliktupersonlig`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skatteplikt upersonlig API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Teknisk navn på rettighetspakker |	
|-------------------------|
| ssb                     |

## Støttetjenester

For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør upersonlig hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/b2ef75a2-745e-328d-8677-bfeeacea6cab) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON
```json
{
  "organisasjonsnummer": "310977101",
  "inntektsaar": 2024,
  "harSkattepliktTilNorge": true,
  "harSkattepliktTilSvalbard": false,
  "erFritattForFormuesskatt": true,
  "erOmfattetAvSaerreglerForKraftforetak": false,
  "erOmfattetAvPetroleumsskatteloven": false,
  "erOmfattetAvRederiskatteordningen": false,
  "erOmfattetAvFinansskattPaaLoennOgOverskudd": false,
  "erUnntattSkattepliktEtterSkatteavtale": false,
  "harLeveringsfritak": false,
  "skalViseAksjeopplysningerPaaSkatteoppgjoer": true,
  "skatteregnskapskommune": [
    "1149"
  ],
  "ajourholdstidspunkt": "2025-03-20T13:13:23.121Z",
  "erOmfattetAvSaerreglerForHavbruksvirksomhet": false,
  "erOmfattetAvSaerreglerForLandbasertVindkraft": false
}
```


</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

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
|---|------------|
| 210962492  | 2021       |
| 310962074  | 2021       |
| 312282933  | 2021       |
| 310387525  | 2023       |
| 313129624  | 2024       |
| 310030252  | 2024       |
  
Ytterligere testdata kan man benytte hendelseslisten for å finne.

</TabItem>
</Tabs>
