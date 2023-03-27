---
title: Boligsparing for ungdom API
slug: /api/bsu
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, BSU]
keywords: [bsu, boligsparing for ungdom, skatteberegning, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon om BSU renteinntekter pr kalenderår for en person.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md) 
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:boligsparingforungdom`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Boligsparing for ungdom API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjonen for tjenesten](https://app.swaggerhub.com/apis/Skatteetaten_Deling/boligsparing-for-ungdom-api) ligger på SwaggerHub.

I [Open API spesifikasjonen](../om/tekniskspesifikasjon.md) ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.
 
## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/37b70e5e-b862-3c66-a5f1-4dca6ee30afb) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "personidentifikator": "12345678901",
  "inntektsaar": "2019",
  "aaretsRenter": 100.00
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<boligsparingForUngdom xmlns="no:skatteetaten:datasamarbeid:boligsparingforungdom:v1">
   <personidentifikator>25120800194</personidentifikator>
   <inntektsaar>2015</inntektsaar>
   <aaretsRenter>534.00</aaretsRenter>
</boligsparingForUngdom>
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. 

| Feilkode | HTTP Statuskode | Feilområde                                                          |
|----------|-----------------|---------------------------------------------------------------------|
| BSU-001   | 500 | Uventet feil på tjenesten.                                          |
| BSU-002   | 500 | Uventet feil i et bakenforliggende system.                          |
| BSU-003   | 404 | Ukjent url benyttet.                                                |
| BSU-004   | 401 | Feil i forbindelse med autentisering.                               |
| BSU-005   | 403 | Feil i forbindelse med autorisering.                                |
| BSU-006   | 400 | Feil i forbindelse med validering av inputdata.                     |
| BSU-007   | 404 | Ikke treff på oppgitt personidentifikator.                          |
| BSU-008   | 404 | Fant ingen informasjon om bsu for angitt personidentifikator og år. |
| BSU-009   | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet.          |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/5d368189-6de9-31a2-b2d6-bc78f4de5f23) i Felles datakatalog.

</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
et finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata
Følgende testdata er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne: 

| Fødselsnummer | Inntektsår |
|---|---|
| 01899699552	| 2020, 2021 og 2022 | 
| 21839199217	| 2020, 2021 og 2022 |
| 01840098245	| 2020, 2021 og 2022 |
| 06889197542	| 2020, 2021 og 2022 |
| 01898999749	| 2020, 2021 og 2022 |

Disse har også skattemeldinger og skatteoppgjør for 2020 og 2021.
Skattemeldinger og skatteoppgjør for 2022 opprettes senere.
  
</TabItem>
</Tabs>
