---
title: Omregistreringsavgift API
slug: /api/omregistreringsavgift
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Omregistreringsavgift, Kjøretøy]
keywords: [omregistreringsavgift]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer omregistreringsavgiften for kjøretøy spesifisert av kjennemerke og eventuelt omregistreringsdato.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:omregistreringsavgift`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Omregistreringsavgift API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/omregistreringsavgift-api/1.0.0) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Rettighetspakker 

| Navn på rettighetspakke |	
|---|
| fnf |

## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/fce309db-daed-3a5e-bb24-040629d05628) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "omregistreringsavgift": 3982,
  "kjennemerke": "YQ96449",
  "datoOmregistreringsavgift": "2021-05-16"
}
```
## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<gjeldendeOmregistreringsavgift xmlns="urn:no:skatteetaten:fastsetting:motorvogn:omregistreringsavgift:gjeldende:v1">
  <omregistreringsavgift>3982</omregistreringsavgift>
  <kjennemerke>YQ96449</kjennemerke>
  <datoOmregistreringsavgift>2021-05-16</datoOmregistreringsavgift>
</gjeldendeOmregistreringsavgift>
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode         | HTTP Statuskode | Feilområde                                                                                                      |
|------------------|-----------------|-----------------------------------------------------------------------------------------------------------------|
| OMREGSAVGIFT-001 | 500             | Uventet feil på tjenesten.                                                                                      |
| OMREGSAVGIFT-002 | 500             | Uventet feil i et bakenforliggende system.                                                                      |
| OMREGSAVGIFT-003 | 404             | Ukjent url benyttet.                                                                                            |
| OMREGSAVGIFT-004 | 401             | Feil i forbindelse med autentisering.                                                                           |
| OMREGSAVGIFT-005 | 403             | Feil i forbindelse med autorisering.                                                                            |
| OMREGSAVGIFT-006 | 400             | Feil i forbindelse med validering av inputdata.                                                                 |
| OMREGSAVGIFT-007 | 404             | Omregistreringsavgift ikke funnet. Kjennemerke er ukjent eller oppgitt dato er utenfor definerte avgiftssatser. |
| OMREGSAVGIFT-008 | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                                                      |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[informasjonsmodell](https://data.norge.no/informationmodels/cd4cde32-912b-367e-8fe0-6da41b6467b1) i Felles datakatalog.
 
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata
Følgende testdata er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne: 

| Fødselsnummer | Kjennemerke | Dato for omregistreringavgift |
|---|---|---|
| 09917197935 | WT10001 | 2021-05-16 |
| 07929899274 | WT10002 | 2021-05-16 |
| 01864897068 | WT10003 | 2021-05-16 |
| 20860198259 | WT10004 | 2021-05-16 |
  
</TabItem>
</Tabs>
