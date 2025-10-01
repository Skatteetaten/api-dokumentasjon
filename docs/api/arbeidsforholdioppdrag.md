---
title: Arbeidsforhold i oppdrag API
slug: /api/arbeidsforholdioppdrag
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Seriøsitet ]
keywords: [ arbeidsforholdioppdrag ]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om hvorvidt det foreligger, og ev. perioden for, et arbeidsforhold og mellom
angitt oppdragsgiver og en angitt arbeidstaker.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/arbeidsforhold-i-oppdrag-api) på
SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:arbeidsforhold`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Arbeidsforhold API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Teknisk navn på rettighetspakker |
|-------------------------|
| arbeidstilsynetHmsKort  |

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/dataservices/aaa9d596-52d5-3d73-9f36-51b9a2e662be) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "aktiv": "JA",
  "perioder": [
    {
      "startdato": "2023-10-04",
      "sluttdato": "2023-10-11"
    },
    {
      "startdato": "2023-10-17",
      "sluttdato": "2023-10-20"
    },
    {
      "startdato": "2023-10-31",
      "sluttdato": "2023-11-03"
    }
  ]
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode           | HTTP Statuskode | Feilområde                                                            |
|--------------------|-----------------|-----------------------------------------------------------------------|
| ARBEIDSFORHOLD-001 | 500             | Uventet feil på tjenesten.                                            |
| ARBEIDSFORHOLD-002 | 500             | Uventet feil i et bakenforliggende system.                            |
| ARBEIDSFORHOLD-003 | 404             | Ukjent url benyttet.                                                  |
| ARBEIDSFORHOLD-004 | 401             | Feil i forbindelse med autentisering.                                 |
| ARBEIDSFORHOLD-005 | 403             | Feil i forbindelse med autorisering.                                  |
| ARBEIDSFORHOLD-006 | 400             | Feil i forbindelse med validering av inputdata.                       |
| ARBEIDSFORHOLD-007 | 404             | Fant ikke  arbeidsforhold mellom angitt arbeidstaker og arbeidsgiver. |
| ARBEIDSFORHOLD-008 | 406             | Feil tilknyttet dataformat.                                           |  

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/7a2c6a3b-d323-3885-8261-a090eaf0e2c7) i Felles datakatalog.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.

## Testdata

Tjenesten har for nå kun enkle mockdata, med en statisk mocket respons. For å kunne teste tjenesten kan du benytte et
tilfeldig organisasjonsnummer og fødselsnummer.

</TabItem>
</Tabs>
