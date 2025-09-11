---
title: Skattekort til arbeidsgiver API
slug: /api/skattekorttilarbeidsgiver
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API,Skattekort,Arbeidgiver,Forskudd]
keywords: [skattekort]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---

<Summary>Tjeneste for å hente skattekort for arbeidsgivere</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/bestilling-av_skattekort)

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:forskudd`

Du må søke Skatteetaten om tilgang til dette scopet

### Sikkerhetstoken
Ved bruk av Maskinportentoken må dette inneholde en systembruker i `systemuser_org` under `authorisation_details`. 

Du finner mer informasjon om dette i [Altinn](https://docs.altinn.studio/altinn-studio/guides/integration/sbs/setup/#6-fiken-can-authenticate-against-maskinporten-with-the-system-user)

## Datakatalog

Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Eksempel på request
#### bestillSkattekort
Eksempel med 2 arbeidsgivere 
```
{
  "inntektsaar": "2025",
  "bestillingstype": "HENT_ALLE_OPPGITTE",
  "kontaktinformasjon": {
    "epostadresse": "john.smith@example.com",
    "mobiltelefonummer": "+4794123456"
  },
  "varslingstype": "VARSEL_VED_FOERSTE_ENDRING",
  "forespoerselOmSkattekortTilArbeidsgiver": {
    "arbeidsgiver": [
      {
        "arbeidsgiveridentifikator": {
          "organisasjonsnummer": "222121914"
        },
        "arbeidstakeridentifikator": [
          "42059199203",
          "55049199111",
          "13820499748"
        ]
      },
      {
        "arbeidsgiveridentifikator": {
          "organisasjonsnummer": "123456789"
        },
        "arbeidstakeridentifikator": [
          "21908899455",
          "13830197340",
          "24880199664"
        ]
      }
    ]
  }
}
```
Forespørsel om endringer
```
{
  "inntektsaar": "2025",
  "bestillingstype": "HENT_KUN_ENDRING",
  "kontaktinformasjon": {
    "epostadresse": "john.smith@example.com",
    "mobiltelefonummer": "+4794123456"
  },
  "varslingstype": "VARSEL_VED_FOERSTE_ENDRING",
}
```


## Eksempel på respons
#### skattekortTilArbeidsgiver/svar/

```
{
  "arbeidsgiver": [
    {
      "arbeidsgiveridentifikator": {
        "organisasjonsnummer": "222121914"
      },
      "arbeidstaker": [
        {
          "arbeidstakeridentifikator": "13830197340",
          "resultatForSkattekort": "skattekortopplysningerOK",
          "skattekort": {
            "utstedtDato": "2025-04-03",
            "skattekortidentifikator": "543210",
            "forskuddstrekk": [
              {
                "trekkode": "LOENN_FRA_HOVEDARBEIDSGIVER",
                "frikort": {
                  "frikortbeloep": "100000"
                }
              },
              {
                "trekkode": "LOENN_FRA_BIARBEIDSGIVER",
                "frikort": {
                  "frikortbeloep": "100000"
                }
              },
              {
                "trekkode": "LOENN_FRA_NAV",
                "frikort": {
                  "frikortbeloep": "100000"
                }
              }
            ]
          },
          "inntektsaar": "2025"
        },
        {
          "arbeidstakeridentifikator": "42059199203",
          "resultatForSkattekort": "skattekortopplysningerOK",
          "skattekort": {
            "utstedtDato": "2024-12-07",
            "skattekortidentifikator": "10771",
            "forskuddstrekk": [
              {
                "trekkode": "LOENN_FRA_HOVEDARBEIDSGIVER",
                "trekktabell": {
                  "tabellnummer": "8010",
                  "prosentsats": "41",
                  "antallMaanederForTrekk": "10.5"
                }
              },
              {
                "trekkode": "LOENN_FRA_BIARBEIDSGIVER",
                "trekkprosent": {
                  "prosentsats": "34"
                }
              },
              {
                "trekkode": "LOENN_FRA_NAV",
                "trekkprosent": {
                  "prosentsats": "34"
                }
              }
            ]
          },
          "inntektsaar": "2025"
        },
        {
          "arbeidstakeridentifikator": "24880199664",
          "resultatForSkattekort": "skattekortopplysningerOK",
          "skattekort": {
            "utstedtDato": "2025-01-24",
            "skattekortidentifikator": "10799",
            "forskuddstrekk": [
              {
                "trekkode": "PENSJON",
                "trekkprosent": {
                  "prosentsats": "25",
                  "antallMaanederForTrekk": "12"
                }
              },
              {
                "trekkode": "PENSJON_FRA_NAV",
                "trekkprosent": {
                  "prosentsats": "25",
                  "antallMaanederForTrekk": "12"
                }
              }
            ]
          },
          "tilleggsopplysning": [
            "kildeskattPaaPensjon",
            "kildeskattPaaLoenn"
          ],
          "inntektsaar": "2025"
        },
        {
          "arbeidstakeridentifikator": "10829996974",
          "resultatForSkattekort": "ikkeSkattekort",
          "inntektsaar": "2025"
        }
      ]
    }
  ]
}
```

Vi støtter også xml i request/respone.

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| HTTP Status | Feilkode | Beskrivelse                             |
|-------------|----------|-----------------------------------------|
| 200         |          | ok                                      |
| 204         |          | Angitt referanse ikke funnet            |
| 400         | FOR-001  | Request payload validerer ikke          |
| 400         | FOR-002  | Request payload parser ikke             |
| 400         | FOR-003  | Request parameter validerer ikke        |
| 403         |          | Feil i forbindelse med autentisering.   |

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Regneark med testpersoner med skattekort i testmiljøet : [testpersoner](../../static/download/skattekort_ekstern_innsending_2025.xlsx).

</TabItem>
<TabItem headerText="Kontakt oss" itemKey="itemKey-6">
  
Har du spørsmål til Skatteetaten om Skattekort til arbeidsgiver API, kan du sende oss e-post: forskudd@skatteetaten.no  
  
</TabItem>
</Tabs>
