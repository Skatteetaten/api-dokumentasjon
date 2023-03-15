---
title: Restanser API
slug: /api/restanser
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Seriøsitet, MVA]
keywords: [restanser, skatteyter]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon om forfalte og ubetalte skatter og avgifter for en virksomhet.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md) 
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:restanser`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Restanser API - På vegne av`
 
## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/restanser-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Rettighetspakker

| Navn på rettighetspakke |	Egenskaper ved rettighetspakke |
|---|---|
| dibk | Hjemmel |
| ebevis | Krever samtykke |
 
## Samtykke
Tjenesten krever [samtykke](../om/samtykke.md).

| Tjenestekode | Formål |
|--------| ------ |
| 5616_5 | Kreves for rettighetspakke `ebevis`|
 
## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/0682ff1e-05b9-3031-8add-780f28853571) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Curl

Her er et eksempel på en spørring med curl mot tjenesten. Du må ha et gyldig maskinportentoken og altinn samtykketoken som legges ved som headerer i curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" -H "AltinnSamtykke: <samtykke_token>" "https://api-test.sits.no/api/innkreving/restanser/v2/ebevis/974761076"
```

## JSON

```json
{
    "levert": "2020-09-21T08:47:34.174294",
    "forespurteOrganisasjon": "974761076",
    "restanser": {
        "arbeidsgiveravgift": {
            "forfaltOgUbetalt": 30550
        },
        "forskuddstrekk": {
            "forfaltOgUbetalt": 884715
        },
        "forskuddsskatt": {
            "forfaltOgUbetalt": 5029271
        },
        "restskatt": {
            "forfaltOgUbetalt": 1235
        },
        "gebyr": {
            "forfaltOgUbetalt": 654321
        },
        "merverdiavgift": {
            "forfaltOgUbetalt": 0
        }
    }
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. 

| Feilkode | HTTP Statuskode | Feilområde |
|----------|-----------------|-------|
| RESTANSE-001 | 500 | Uventet feil på tjenesten.  |
| RESTANSE-002 | 500 | Uventet feil i et bakenforliggende system.  |
| RESTANSE-003 | 404 | Ukjent url benyttet. |
| RESTANSE-004 | 401 | Feil i forbindelse med autentisering.  |
| RESTANSE-005 | 403 | Feil i forbindelse med autorisering.  |
| RESTANSE-006 | 400 | Feil i forbindelse med validering av inputdata. |
| RESTANSE-007 | 403 | Feil i forbindelse med samtykke.  |
| RESTANSE-008 | 404 | Ingen restanser funnet på oppgitt organisasjonsnummer. |
| RESTANSE-009 | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet. |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

 [Informasjonsmodell](https://data.norge.no/informationmodels/a38edde5-9c88-3bda-afb9-174a1aa94077) i Felles datakatalog.
 
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.
 
## Testdata
Denne tjenesten har for nå kun enkle mockdata, med en statisk mocket respons. For å kunne teste tjenesten er det nok å benytte et syntetisk organisasjonsnummer som har et samtykke. Syntetiske organisasjonsnumre finner du i [Tenor](../test/tenor.md).
 
</TabItem>
</Tabs>
