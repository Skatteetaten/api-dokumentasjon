---
title: Aktiv konto API
slug: /api/aktivkonto
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Aktiv konto]
keywords: [aktiv konto]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<Summary>Tjenesten leverer informasjon om valgt konto for utbetalinger av beløp til gode fra Skatteetaten.</Summary>

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
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:aktivkonto`

## Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Aktiv konto API - På vegne av`

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/aktiv-konto-api) på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |
|-------------------------|
| navUtbetalingskonto     |

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/dataservices/e6f947c9-2ca0-31de-81d5-175067550a01) i Felles datakatalog.

</TabItem>

<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "personidentifikator": "28707299217",
  "konto": {
    "kontotype": "innskuddskontoIValuta",
    "skattekontoegnethet": "brukskonto",
    "bicEllerSwift": "DOGBPLUZEXP",
    "bankNavn": "Doggerbanken",
    "bankLandkode": "PL",
    "iban": "PL0828538647323163",
    "erUtbetalingskort": false,
    "valgtDato": "2022-11-01"
  }
}
```
</TabItem> 
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                 |
|----------|-----------------|------------------------------------------------------------|
| AKE-001  | 500             | Uventet feil på tjenesten.                                 |
| AKE-002  | 500             | Uventet feil i et bakenforliggende system.                 |
| AKE-003  | 404             | Ukjent url benyttet.                                       |
| AKE-004  | 401             | Feil i forbindelse med autentisering.                      |
| AKE-005  | 403             | Feil i forbindelse med autorisering.                       |
| AKE-006  | 400             | Feil i forbindelse med validering av inputdata.            |
| AKE-007  | 404             | Ingen treff på oppgitt fødselsnummer.                      |
| AKE-008  | 404             | Fant ingen aktiv konto for oppgitt fødselsnummer.          |
| AKE-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |  
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Tjenesten returnerer data på JSON-formatet. JSON-objektet er basert på et XML-dokument med et tilknyttet skjema.

## Rotobjekt

Rotobjektet vil alltid returneres ved en positiv repons.

| Navn på felt     | JSON-type | Beskrivelse                                               |
|------------------|-----------|-----------------------------------------------------------|
| personidentifikator | String    | Gjeldende personidentifikator for personen det ble søkt på |
| konto            | Object    | Aktiv [konto](#Konto)                                     |

## Konto

| Navn på felt | JSON-type | Beskrivelse                                                                                           |
| -------------|-----------|-------------------------------------------------------------------------------------------------------|
| kontonummer | String    | Kontonummer                                                                                            |
| kontotype | String    | Type konto [ ]                                                                                           |
| skattekontoegnethet | String    | Egnethet for konto [ikkeEgnet, finnesLoennsutbetaling, finnesMinibankkort, brukskonto]         |
| bicEllerSwift | String    | BIC (Bank Identifier Code) eller SWIFT (Society for Worldwide Interbank Financial Telecommunications)|
| bankkode | String    |                                                                                                           |
| bankNavn | String    | Navn på bank                                                                                              |
| bankLandkode | String    | Kode for landet banken tilhører (eks. NO, US, EN)                                                     |
| iban | String    | IBAN (International Bank Account Number)                                                                      |
| valuta | String    | Valutakode (eks. NOK, GBP, USD, EUR)                                                                        |
| erUtbetalingskort | Boolean   | Om konto er for utbetalingskort                                                                  |
| valgtDato | String    | Dato for kontovalg. Gyldig format [YYYY-MM-DD] (ISO 8601 datoformat)                                     |

## Informasjonsmodell - skjema

### Oversikt
[![Oversikt](../../static/download/aktivkontoekstern/aktivkonto-ekstern.png)](../../download/aktivkontoekstern/aktivkonto-ekstern.png)

### XML skjema
[aktivkonto_valgtutbetalingskonto_v1.xsd](../../static/download/aktivkontoekstern/aktivkonto_valgtutbetalingskonto_v1.xsd)
  
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata
Følgende testdata er tilgjengelige i Skatteetatens testmiljø for eksterne: 

| Fødselsnummer | Kontotype | 
|---|---|
| 17816994780 | Norsk konto |
| 46907200809 | Utenlandsk konto |
| 27858199021 | Utbetalingskort |
| 23818699190 | Ingen konto |
  
</TabItem>
</Tabs>
  
