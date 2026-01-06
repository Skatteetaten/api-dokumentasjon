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

Næringsspesifikasjon API v4 leverer næringsspesifikasjon for inntektsårene 2022 og 2023.

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

Eksempel på en gyldig respons for inntektsår 2024 (V5):

```json
{
  "skjermet" : false,
  "norskIdentifikator" : "19886699975",
  "inntektsaar" : "2024",
  "resultatregnskap" : {
    "driftsinntekt" : {
      "sumDriftsinntekt" : 162099.0,
      "salgsinntekt" : {
        "inntekt" : [ {
          "beloep" : 101352.0,
          "id" : "3100",
          "type" : "3100"
        } ]
      },
      "annenDriftsinntekt" : {
        "inntekt" : [ {
          "beloep" : 60747.0,
          "id" : "3900",
          "type" : "3900"
        } ]
      }
    },
    "driftskostnad" : {
      "sumDriftskostnad" : 45602.0,
      "varekostnad" : {
        "kostnad" : [ {
          "beloep" : 27253.0,
          "id" : "4005",
          "type" : "4005"
        } ]
      },
      "annenDriftskostnad" : {
        "kostnad" : [ {
          "beloep" : 19769.0,
          "id" : "6400",
          "type" : "6400"
        }, {
          "beloep" : 1420.0,
          "id" : "6998",
          "type" : "6998"
        } ]
      }
    },
    "sumFinansinntekt" : 17132.0,
    "finansinntekt" : {
      "inntekt" : [ {
        "beloep" : 17132.0,
        "id" : "8079",
        "type" : "8079"
      } ]
    },
    "aarsresultat" : 133629.0
  },
  "balanseregnskap" : {
    "omloepsmiddel" : {
      "sumBalanseverdiForOmloepsmiddel" : 19500.0,
      "balanseverdiForOmloepsmiddel" : {
        "balanseverdi" : [ {
          "id" : "1920",
          "beloep" : 19500.0,
          "type" : "1920",
          "ekskluderesFraSkattemeldingen" : false
        } ]
      }
    },
    "gjeldOgEgenkapital" : {
      "sumKortsiktigGjeld" : 31932.0,
      "kortsiktigGjeld" : {
        "gjeld" : [ {
          "id" : "2380",
          "beloep" : 31932.0,
          "type" : "2380",
          "ekskluderesFraSkattemeldingen" : false
        } ]
      }
    },
    "sumBalanseverdiForEiendel" : 19500.0,
    "sumGjeldOgEgenkapital" : 31932.0
  },
  "beregnetNaeringsinntekt" : {
    "fordeltBeregnetNaeringsinntektForPersonligSkattepliktigEllerSdf" : [ {
      "id" : "1",
      "kommunenummer" : "1566",
      "identifikatorForFordeltBeregnetPersoninntekt" : "1",
      "identifikatorForFordeltBeregnetNaeringsinntekt" : "1",
      "naeringstype" : "annenNaering",
      "fordeltSkattemessigResultat" : 133629.0,
      "fordeltSkattemessigResultatEtterKorreksjon" : 133629.0,
      "andelAvFordeltSkattemessigResultatTilordnetInnehaver" : 100.0,
      "fordeltSkattemessigResultatEtterKorreksjonTilordnetInnehaver" : 133629.0
    } ],
    "skattemessigResultat" : 133629.0
  },
  "beregnetPersoninntekt" : {
    "fordeltBeregnetPersoninntekt" : [ {
      "id" : "1",
      "identifikatorForFordeltBeregnetPersoninntekt" : "1",
      "identifikatorForFordeltBeregnetNaeringsinntekt" : "1",
      "aaretsBeregnedePersoninntektFoerFordelingOgSamordning" : 133629.0,
      "andelAvPersoninntektTilordnetInnehaver" : 100.0,
      "aaretsBeregnedePersoninntektFoerFordelingOgSamordningTilordnetInnehaver" : 133629.0
    } ]
  },
  "virksomhet" : {
    "regnskapspliktstype" : "ingenRegnskapsplikt",
    "regnskapsperiode" : {
      "start" : "2024-01-01",
      "slutt" : "2024-12-31"
    },
    "virksomhetstype" : "enkeltpersonforetak",
    "regeltypeForAarsregnskap" : "regnskapslovensAlminneligeRegler"
  },
  "samletGjeldOgFormuesobjekter" : {
    "formuesverdiForFormuesobjekterIkkeOmfattetAvVerdsettingsrabatt" : 19500.0,
    "samletGjeld" : 31932.0
  },
  "opprettetDato" : "2025-02-13T08:28:25.865+01:00",
  "skalBekreftesAvRevisor" : false,
  "ajourholdstidspunkt" : "2025-02-13T08:28:25.865Z"
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

[Informasjonsmodell](https://data.norge.no/informationmodels/c45bfb1b-766e-386a-b560-c57eca638c1a) i Felles datakatalog.

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
