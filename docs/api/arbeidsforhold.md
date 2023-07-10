---
title: Arbeidsforhold API
slug: /api/arbeidsforhold
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Seriøsitet]
keywords: [arbeidsforhold]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary> Tjenesten leverer informasjon om hvorvidt det foreligger et aktivt arbeidsforhold mellom angitt arbeidstaker og angitt arbeidsgiver.</summary>

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
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:arbeidsforhold`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Arbeidsforhold API - På vegne av`

## Teknisk spesifikasjon
Url’er til tjenesten, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/Skatteetaten_Deling/arbeidsforhold-api) på SwaggerHub. 

## Datakatalog
 [Datatjenestebeskrivelse](https://data.norge.no/dataservices/1012bfb1-c17b-3f1b-a03a-74ccc7543a05) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## Curl
Her er et eksempel på en spørring med curl mot tjenesten. Du må legge sertifikat og nøkkel som parametre til curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/arbeidsforhold/v1/arbeidsgiver/877353192/arbeidstaker/09099617966/aktiv"'
```

## JSON

```json
{
  "svar": {"aktiv":"JA"}
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```bash
$ curl -v -H "Accept: application/xml" -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/arbeidsforhold/v1/arbeidsgiver/877353192/arbeidstaker/09099617966/aktiv"
```

```xml
<?xml version='1.0' encoding='UTF-8'?>
<svar>
    <aktiv>JA</aktiv>
</svar>
```
  
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode           | HTTP Statuskode | Feilområde                                                                  |
|--------------------|-----------------|-----------------------------------------------------------------------------|
| ARBEIDSFORHOLD-001 | 500             | Uventet feil på tjenesten.                                                  |
| ARBEIDSFORHOLD-002 | 500             | Uventet feil i et bakenforliggende system.                                  |
| ARBEIDSFORHOLD-003 | 404             | Ukjent url benyttet.                                                        |
| ARBEIDSFORHOLD-004 | 401             | Feil i forbindelse med autentisering.                                       |
| ARBEIDSFORHOLD-005 | 403             | Feil i forbindelse med autorisering.                                        |
| ARBEIDSFORHOLD-006 | 400             | Feil i forbindelse med validering av inputdata.                             |
| ARBEIDSFORHOLD-007 | 404             | Fant ikke aktivt arbeidsforhold mellom angitt arbeidstaker og arbeidsgiver. |
| ARBEIDSFORHOLD-008 | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                  |  
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/7a2c6a3b-d323-3885-8261-a090eaf0e2c7) i Felles datakatalog.
 
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.

## Testdata
Tjenesten har for nå kun enkle mockdata, med en statisk mocket respons. For å kunne teste tjenesten er det nok å benytte et syntetisk organisasjonsnummer som har et samtykke. Syntetiske organisasjonsnumre finner du i [Tenor](../test/tenor.md).
 
</TabItem>
</Tabs>
