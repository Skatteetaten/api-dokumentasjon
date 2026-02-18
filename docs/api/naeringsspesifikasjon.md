---
title: Næringsspesifikasjon API
slug: /api/naeringsspesifikasjon
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Næringsspesifikasjon, Skattemelding ]
keywords: [ Næringsspesifikasjon, naeringsspesifikasjon, api ]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---

<Summary>Tjenesten leverer næringsopplysninger som enkeltpersonforetak og selskaper har innrapportert til Skatteetaten i forbindelse med skattemeldingen.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

Næringsspesifikasjon API v5 leverer næringsspesifikasjon for inntektsårene 2024 og 2025.

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/naeringsspesifikasjon-api) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:naeringsspesifikasjon`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Næringsspesifikasjon API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Teknisk navn på rettighetspakker |	
|-------------------------|
| ldirTotalregnskap       |
| ssb                     |

## Støttetjeneste

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Næringsspesifikasjon hendelser API`

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/dataservices/6ed9209d-c7c0-376f-a4b5-b4ce7cc1933b) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

Eksempel på en gyldig respons for inntektsår 2025 (V5):

```json
{
  "skjermet": false,
  "norskIdentifikator": "14895398862",
  "inntektsaar": "2025",
  "resultatregnskap": {
    "driftsinntekt": {
      "sumDriftsinntekt": 966388.0,
      "salgsinntekt": {
        "inntekt": [
          {
            "beloep": 889685.0,
            "id": "3100",
            "type": "3100"
          }
        ]
      },
      "annenDriftsinntekt": {
        "inntekt": [
          {
            "beloep": 26910.0,
            "id": "3700",
            "type": "3700"
          },
          {
            "beloep": 21501.0,
            "id": "3650",
            "type": "3650"
          },
          {
            "beloep": 28292.0,
            "id": "3710",
            "type": "3710"
          }
        ]
      }
    },
    "driftskostnad": {
      "sumDriftskostnad": 391537.0,
      "varekostnad": {
        "kostnad": [
          {
            "beloep": 69934.0,
            "id": "4500",
            "type": "4500"
          }
        ]
      },
      "loennskostnad": {
        "kostnad": [
          {
            "beloep": 222313.0,
            "id": "5000",
            "type": "5000"
          },
          {
            "beloep": 36904.0,
            "id": "5400",
            "type": "5400"
          },
          {
            "beloep": 11591.0,
            "id": "5950",
            "type": "5950"
          }
        ]
      },
      "annenDriftskostnad": {
        "kostnad": [
          {
            "beloep": 9332.0,
            "id": "6700",
            "type": "6700"
          },
          {
            "beloep": 2823.0,
            "id": "7295",
            "type": "7295"
          },
          {
            "beloep": 2958.0,
            "id": "6998",
            "type": "6998"
          },
          {
            "beloep": 4785.0,
            "id": "6340",
            "type": "6340"
          },
          {
            "beloep": 36813.0,
            "id": "6300",
            "type": "6300"
          }
        ]
      }
    },
    "sumFinansinntekt": 5780.0,
    "sumFinanskostnad": 7852.0,
    "finansinntekt": {
      "inntekt": [
        {
          "beloep": 5780.0,
          "id": "8079",
          "type": "8079"
        }
      ]
    },
    "finanskostnad": {
      "kostnad": [
        {
          "beloep": 7852.0,
          "id": "8179",
          "type": "8179"
        }
      ]
    },
    "aarsresultat": 572779.0
  },
  "balanseregnskap": {
    "omloepsmiddel": {
      "sumBalanseverdiForOmloepsmiddel": 51220.0,
      "balanseverdiForOmloepsmiddel": {
        "balanseverdi": [
          {
            "id": "1920",
            "beloep": 15964.0,
            "type": "1920",
            "ekskluderesFraSkattemeldingen": false
          },
          {
            "id": "1570",
            "beloep": 35256.0,
            "type": "1570",
            "ekskluderesFraSkattemeldingen": false
          }
        ]
      }
    },
    "gjeldOgEgenkapital": {
      "sumLangsiktigGjeld": 19988.0,
      "sumKortsiktigGjeld": 21299.0,
      "sumEgenkapital": 46872.0,
      "langsiktigGjeld": {
        "gjeld": [
          {
            "id": "2220",
            "beloep": 19988.0,
            "type": "2220",
            "ekskluderesFraSkattemeldingen": false
          }
        ]
      },
      "kortsiktigGjeld": {
        "gjeld": [
          {
            "id": "2380",
            "beloep": 21299.0,
            "type": "2380",
            "ekskluderesFraSkattemeldingen": false
          }
        ]
      },
      "egenkapital": {
        "kapital": [
          {
            "id": "2050",
            "beloep": 57745.0,
            "type": "2050",
            "ekskluderesFraSkattemeldingen": false
          },
          {
            "id": "2080",
            "beloep": 10873.0,
            "type": "2080",
            "ekskluderesFraSkattemeldingen": false
          }
        ]
      }
    },
    "sumBalanseverdiForEiendel": 51220.0,
    "sumGjeldOgEgenkapital": 88159.0
  },
  "beregnetNaeringsinntekt": {
    "fordeltBeregnetNaeringsinntektForPersonligSkattepliktigEllerSdf": [
      {
        "id": "1",
        "kommunenummer": "5038",
        "identifikatorForFordeltBeregnetPersoninntekt": "1",
        "identifikatorForFordeltBeregnetNaeringsinntekt": "1",
        "naeringstype": "fiskeOgFangst",
        "fordeltSkattemessigResultat": 572779.0,
        "fordeltSkattemessigResultatEtterKorreksjon": 572779.0,
        "andelAvFordeltSkattemessigResultatTilordnetInnehaver": 100.0,
        "fordeltSkattemessigResultatEtterKorreksjonTilordnetInnehaver": 572779.0
      }
    ],
    "skattemessigResultat": 572779.0
  },
  "beregnetPersoninntekt": {
    "fordeltBeregnetPersoninntekt": [
      {
        "id": "1",
        "identifikatorForFordeltBeregnetPersoninntekt": "1",
        "identifikatorForFordeltBeregnetNaeringsinntekt": "1",
        "aaretsBeregnedePersoninntektFoerFordelingOgSamordning": 572779.0,
        "andelAvPersoninntektTilordnetInnehaver": 100.0,
        "aaretsBeregnedePersoninntektFoerFordelingOgSamordningTilordnetInnehaver": 572779.0
      }
    ]
  },
  "virksomhet": {
    "regnskapspliktstype": "ingenRegnskapsplikt",
    "regnskapsperiode": {
      "start": "2025-01-01",
      "slutt": "2025-12-31"
    },
    "virksomhetstype": "enkeltpersonforetak",
    "regeltypeForAarsregnskap": "regnskapslovensAlminneligeRegler"
  },
  "samletGjeldOgFormuesobjekter": {
    "formuesverdiForFormuesobjekterIkkeOmfattetAvVerdsettingsrabatt": 51220.0,
    "samletGjeld": 41287.0
  },
  "opprettetDato": "2026-02-10T13:40:20.048+01:00",
  "skalBekreftesAvRevisor": false,
  "ajourholdstidspunkt": "2026-02-10T13:40:20.048Z"
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                                             |
|----------|-----------------|------------------------------------------------------------------------|
| NS-001   | 500             | Uventet feil på tjenesten.                                             |
| NS-002   | 500             | Uventet feil i et bakenforliggende system.                             |
| NS-003   | 404             | Ukjent url benyttet.                                                   |
| NS-004   | 401             | Feil i forbindelse med autentisering.                                  |
| NS-005   | 403             | Feil i forbindelse med autorisering.                                   |
| NS-006   | 400             | Feil i forbindelse med validering av inputdata.                        |
| NS-007   | 404             | Fikk ikke treff på gitt identifikator.                                 |
| NS-008   | 404             | Fant ikke naeringsspesifikasjon for gitt identifikator og inntektsaar. |
| NS-009   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.             |
| NS-010   | 410             | Naeringsspesifikasjon er ikke lenger tilgjenglig.                      |
| NS-011   | 422             | Naeringsspesifikasjon er på format som ikke støttes.                   |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/naeringsspesifikasjon-api).

Obs. Hvis modellene på denne siden avviker fra Open API spesifikasjonen på Swaggerhub, er det Open API spesifikasjonen
som er mest oppdatert.

Modellene nedenfor avviker litt fra modellen slik den benyttes i tjenesten. Modellen har følgende avvik:

* Part er erstattet med personidentifikator
* Intern systemreferanse er ikke med
* Type Endringsmetadata er ikke med
* Type BeløpIValuta er konvertert til Beløp

## Toppnivå

![Toppnivå](../../static/download/naeringsopplysninger/2020/naeringsopplysninger_v1.png)

## Næringsinntekt

![Naeringsinntekt](../../static/download/naeringsopplysninger/2020/naeringsinntekt.png)

## Personinntekt

![Personinntekt](../../static/download/naeringsopplysninger/2020/Personinntekt.png)

## Balanse

![Balanse](../../static/download/naeringsopplysninger/2020/balanse.png)

## Resultatregnskap

![Resultatregnskap](../../static/download/naeringsopplysninger/2020/resultatregnskap.png)

## Avskrivning

![Avskrivning](../../static/download/naeringsopplysninger/2020/avskrivning.png)

## Spesifikasjon av resultatregnskap og balanse

![Spesifikasjon av resultatregnskap og balanse](../../static/download/naeringsopplysninger/2020/spesifikasjonAvResultatregnskapOgBalanse.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, men man kan benytte hendelseslisten for å finne testdata man kan benytte for å teste oppslagstjenesten.


</TabItem>
</Tabs>
