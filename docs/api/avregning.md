---
title: Avregning API
slug: /api/avregning
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør]
keywords: [fastsetting, avregning]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon om forskuddstrekk og restskatt eller beløp til gode i skatteoppgjøret.</summary>

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
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:avregning`

## Delegering
Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Avregning API - På vegne av`

## Teknisk spesifikasjon
Url’er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/Skatteetaten_Deling/avregning-api) på SwaggerHub.
 
## Rettighetspakker

| Navn på rettighetspakke |
|---|
| distribusjon |
| norgesbank |
| ssb |
  
## Støttetjenester

### Hendelser
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør hendelser API`

### Siste tilgjengelige skatteoppgjør

[Siste tilgjengelige skatteoppgjør API](./sistetilgjengeligeskatteoppgjoer.md) gir informasjon om hva som er seneste periode med data for en skattepliktig.
  
## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/69824ea6-9a1b-3b3f-8163-45b5fd1dd474) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "personidentifikator": "12345678910",
  "inntektsaar": "2020",
  "skjermet": false,
  "skatteoppgjoersdato": "2021-02-04",
  "fastland": {
    "restskatt": 2300,
    "avregnetForskuddstrekk": 90000,
    "beloepTilgode": 9271429
  },
  "svalbard": {
    "restskatt": 500,
    "avregnetForskuddstrekk": 7000,
    "beloepTilgode": 1529
  }
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`

```xml
<avregning xmlns="urn:no:skatteetaten:datasamarbeid:avregning:v2">
  <personidentifikator>12345678910</personidentifikator>
  <inntektsaar>2020</inntektsaar>
  <skjermet>false</skjermet>
  <skatteoppgjoersdato>2021-02-04</skatteoppgjoersdato>
  <fastland>
    <restskatt>2300</restskatt>
    <avregnetForskuddstrekk>90000</avregnetForskuddstrekk>
    <beloepTilgode>9271429</beloepTilgode>
  </fastland>
  <svalbard>
    <restskatt>500</restskatt>
    <avregnetForskuddstrekk>7000</avregnetForskuddstrekk>
    <beloepTilgode>1529</beloepTilgode>
  </svalbard>
</avregning>
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde |
|----------|-----------------|-------|
| AR-001 | 500 | Uventet feil på tjenesten.  |
| AR-002 | 500 | Uventet feil i et bakenforliggende system.  |
| AR-003 | 404 | Ukjent url benyttet. |
| AR-004 | 401 | Feil i forbindelse med autentisering.  |
| AR-005 | 403 | Feil i forbindelse med autorisering.  |
| AR-006 | 400 | Feil i forbindelse med validering av inputdata. |
| AR-007 | 404 | Fant ikke avregning for gitt identifikator og inntektsår. |
| AR-008 | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
| AR-009 | 404 | Ikke treff på oppgitt identifikator. |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/fb77ea64-f7c6-3993-8511-1bd2ce8ad259) i Felles datakatalog.
 
Obs. Hvis modellene på denne siden avviker fra open api spesifikasjonen på Swaggerhub, er det open api spesifikasjonen som er mest oppdatert.

I listen under vises navn på de ulike feltene tjenesten leverer. Ta kontakt med Skatteetaten for å finne ut hvilken rettighetspakke som er aktuell for din organisasjon og hvilke felter den aktuelle rettighetspakken returnerer.

<br />

| Navn på felt | Beskrivelse |
| -------------|---------------------------------------------------------------------|
| personidentifikator | Gjeldene personidentifikator for personen det ble søkt på|
| inntektsaar | Inntektsåret det ble søkt på|
| skjermet | Returnerer true dersom datasettet er skjermet |
| skatteoppgjoersdato | |
| fastland | Verdier for fastland |
| svalbard | Verdier for Svalbard |

## Felt for fastland

| Navn på felt | Beskrivelse |
| -------------|---------------------------------------------------------------------|
| restskatt | avregningsresultat som viser at skattyters forskudd ikke dekker beregnet skatt. |
| avregnetForskuddstrekk | sum forskuddstrekk fra a-meldinger og manuelt registrerte forskuddstrekk hos skatteoppkrever |
| beloepTilgode | er det beløp som skal utbetales skattyter, eventuelt motregnes mot skyldige beløp internt eller eksternt |

## Felt for svalbard

| Navn på felt | Beskrivelse |
| -------------|---------------------------------------------------------------------|
| restskatt | avregningsresultat som viser at skattyters forskudd ikke dekker beregnet skatt. |
| avregnetForskuddstrekk | sum forskuddstrekk fra a-meldinger og manuelt registrerte forskuddstrekk hos skatteoppkrever |
| beloepTilgode | er det beløp som skal utbetales skattyter, eventuelt motregnes mot skyldige beløp internt eller eksternt |
 
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Beregnet skatt".
  
</TabItem>
</Tabs>
