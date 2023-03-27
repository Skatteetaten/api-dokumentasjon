---
title: Tilleggsskatt API
slug: /api/tilleggsskatt
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding, Tilleggsskatt]
keywords: [tilleggsskatt, skatteberegning, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon om ilagt tilleggsskatt ved uriktig, eller manglende innlevering av skattemelding.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md) 
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:tilleggsskatt`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Tilleggsskatt API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjonen for tjenesten](https://app.swaggerhub.com/apis/Skatteetaten_Deling/tilleggsskatt-api/) ligger på SwaggerHub.

I [Open API spesifikasjonen](../om/tekniskspesifikasjon.md) ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Rettighetspakker
  
| Navn på rettighetspakke |	
|---|
| ssb |

## Støttetjeneste
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Tilleggsskatt hendelser API`
 
## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/3852cc8b-6dbf-3958-8543-33e81ed1fbfd) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "personidentifikator":"07891448702",
  "inntektsaar":"2021",
  "skjermet":false,
  "vedtakOmTilleggsskatt": [
      {
        "skattekommune":"4621",
        "tilleggsskattFraUriktigeOpplysninger":50004.0,
        "vedtaksdatoForTilleggsskatt":"2022-06-01"
      }
  ]
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<tilleggsskatt xmlns="urn:no:skatteetaten:datasamarbeid:tilleggsskatt:v1">
  <personidentifikator>07891448702</personidentifikator>
  <inntektsaar>2021</inntektsaar>
  <skjermet>false</skjermet>
  <vedtakOmTilleggsskatt>
    <skattekommune>4621</skattekommune>
    <tilleggsskattFraUriktigeOpplysninger>50004.0</tilleggsskattFraUriktigeOpplysninger>
    <vedtaksdatoForTilleggsskatt>2022-06-01</vedtaksdatoForTilleggsskatt>
  </vedtakOmTilleggsskatt></tilleggsskatt>
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. 

| Feilkode | HTTP Statuskode | Feilområde                                                     |
|----------|-----------------|----------------------------------------------------------------|
| TSA-001  | 500             | Uventet feil på tjenesten.                                     |
| TSA-002  | 500             | Uventet feil i et bakenforliggende system.                     |
| TSA-003  | 404             | Ukjent url benyttet.                                           |
| TSA-004  | 401             | Feil i forbindelse med autentisering.                          |
| TSA-005  | 403             | Feil i forbindelse med autorisering.                           |
| TSA-006  | 400             | Feil i forbindelse med validering av inputdata.                |
| TSA-007  | 404             | Fant ingen person eller organisasjon på oppgitt identifikator. |
| TSA-008  | 404             | Ingen tilleggsskatt funnet på oppgitt identifikator.           |
| TSA-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.     |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/aee5a3bb-94e1-35d8-91d5-a528119d004a) i Felles datakatalog.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata
Følgende personer har tilleggsskatt:

| Fødselsnummer | Inntektsår | Kommentar |
|---|---|---|
| 11891047306 | 2020 | Fødselsnummer |
| 14881648394 | 2020 | Fødselsnummer |
| 07891448702 | 2021 | Fødselsnummer |
| 16834899217 | 2021 | Fødselsnummer |
| 18881248448 | 2021 | Fødselsnummer |
| 64824401150 | 2021 | D-nummer |
| 47896100285 | 2021 | D-nummer |
| 01820099997 | 2020 | Hatt D-nummer |
| 14865998989 | 2021 | Fortrolig |
| 28893949951 | 2021 | Streng fortrolig |

Kun organisasjoner som er AS kan ha tilleggsskatt. Følgende enheter har skatteplikt:

| Organisasjonsnummer | Organisasjonsform | Inntektsår |
|---|---|---|
| 210201602 | AS | 2020 |
| 213997572 | AS | 2020 |
| 312676281 | AS | 2021 |
| 313527603 | AS | 2021 |
| 314259203 | AS | 2021 |
  
</TabItem>
</Tabs>
