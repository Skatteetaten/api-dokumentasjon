---
title: Aksjonær i virksomhet API
slug: /api/aksjonaerivirksomhet
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Aksjonærregister ]
keywords: [ aksjonærregister, aksjer, aksjonær i virksomhet ]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om en virksomhets aksjonærer pr. 31.12 sist kalenderår.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/aksjonaer-i-virksomhet-api)
på SwaggerHub.

## Tilgang til API-et

### Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:aksjonaer`

### Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Aksjonær i virksomhet API - På vegne av`

### Skatteetaten må gi tilgang

For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Navn på rettighetspakke             |	
|-------------------------------------|
| finanstilsynetkontroll |
| fiskeridirektoratetkontroll |
| fiskeridirektoratetkontrollmanntall |
| kredittopplysning |
| offentligmedhjemmel |

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/dataservices/029700be-dc37-3b5d-8fcc-93f8e885cc84) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "identifikator": "313136841",
  "kalenderaar": "2022",
  "totaltAntallAksjer": 100,
  "aksjonaerer": [
    {
      "personidentifikator": "03866996805",
      "navn": "SIGEN BUKT",
      "foedselsaar": "1969",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 10,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "personidentifikator": "03839095553",
      "navn": "UPOPULÆR KLEMME",
      "foedselsaar": "1990",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 10,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "personidentifikator": "24867095477",
      "navn": "MISFORNØYD CORNER",
      "foedselsaar": "1970",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 10,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "personidentifikator": "19817899571",
      "navn": "SKÅNSOM KOPP",
      "foedselsaar": "1978",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 10,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "personidentifikator": "19899899639",
      "navn": "RUSTEN VOLLEYBALL",
      "foedselsaar": "1998",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 10,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "personidentifikator": "08851549162",
      "navn": "ANONYM SITRON",
      "foedselsaar": "1915",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 10,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "organisasjonsnummer": "310350842",
      "navn": "MISFORNØYD UGLESETT APE",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 10,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "organisasjonsnummer": "315012201",
      "navn": "VARSOM SITRONGUL KATT BAGASJETRALLE",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 10,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "organisasjonsnummer": "311863940",
      "navn": "BEGEISTRET MORSOM TIGER AS",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 10,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "organisasjonsnummer": "315452430",
      "navn": "TEORETISK HES TIGER AS",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 5,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    },
    {
      "personidentifikator": "04815396931",
      "navn": "EFFEKTIV SOLSIKKE",
      "foedselsaar": "1953",
      "aksjer": [
        {
          "isinnummer": "NO0000000000",
          "antallAksjer": 5,
          "aksjeklasse": "ordinaer"
        }
      ],
      "landkode": "NOR"
    }
  ]
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                 |
|----------|-----------------|------------------------------------------------------------|
| AIV-001  | 500             | Uventet feil på tjenesten.                                 |
| AIV-002  | 500             | Uventet feil i et bakenforliggende system.                 |
| AIV-003  | 404             | Ukjent url benyttet.                                       |
| AIV-004  | 401             | Feil i forbindelse med autentisering.                      |
| AIV-005  | 403             | Feil i forbindelse med autorisering.                       |
| AIV-006  | 400             | Feil i forbindelse med validering av inputdata.            |
| AIV-007  | 404             | Ingen treff på gitt organisasjosnsnummer og kalenderår.    |
| AIV-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">
  
[![Aksjonær i virksomhet API](../../static/download/Informasjonsmodell_Aksjonærivirksomhet.png)](../../static/download/Informasjonsmodell_Aksjonærivirksomhet.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata

Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne:

| Organisasjonsnummer | Kalenderår |
|---------------------|------------|
| 313136841           | 2022       |

</TabItem>
</Tabs>
