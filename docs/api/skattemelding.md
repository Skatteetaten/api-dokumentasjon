---
title: Skattemelding API
slug: /api/skattemelding
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Skattemelding ]
keywords: [ skattemelding ]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon som fremkommer i skattemelding for en person.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

Skattemelding API v5 leverer skattemelding for inntektsåret 2024 og 2025.

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-api) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattemelding`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skattemelding API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Teknisk navn på rettighetspakker |	
|-------------------------|
| ldirTotalregnskap       |
| ssb                     |
  
## Støttetjenester

For å følge med på endringer tilbyr vi to [støttetjeneste for hendelsesliste](./hendelser.md):

* `Skattemelding utkast hendelser API`
* `Skattemelding fastsatt hendelser API`

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/dataservices/899c9a8d-0778-3472-9654-f6acd4e7f9ff) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "skjermet": false,
  "norskPersonidentifikator": "12857097600",
  "registreringstidspunkt": "2026-02-09T10:32:44.4+01:00",
  "inntektsaar": "2025",
  "bankLaanOgForsikring": {
    "konto": [
      {
        "id": "aa18441793d029328924b101a9bd2d4baf39d8e9",
        "bankensNavn": "UBESTIKKELIG RAKRYGGET APE",
        "organisasjonsnummer": "314017773",
        "kontonummer": "55209310928",
        "prosentandelAvGjeldInnskuddOgRente": 100.0,
        "innskudd": {
          "beloep": 128168.0
        },
        "andelAvInnskudd": {
          "beloep": 128168
        },
        "opptjenteRenter": {
          "beloep": 2563.0
        },
        "andelAvOpptjenteRenter": {
          "beloep": 2563
        },
        "gjeld": {
          "beloep": 365562.0
        },
        "andelAvGjeld": {
          "beloep": 365562
        },
        "paaloepteRenter": {
          "fradragsberettigetBeloep": 10967.0,
          "beloepUtenHensynTilValgtPrioritertFradragstype": 10967.0
        },
        "andelAvPaaloepteRenter": {
          "beloep": 10967
        }
      }
    ]
  },
  "arbeidTrygdOgPensjon": {
    "loennOgTilsvarendeYtelser": {
      "arbeidsgiver": [
        {
          "id": "2bd6df0bee913a278cfb623feb3b407cb17ab392",
          "navn": "REFLEKTERENDE OVERNATURLIG PIGGSVIN",
          "samledeYtelserFraArbeidsgiverPerBehandlingsart": [
            {
              "id": "68d3b8e75a0d9f3513edd5374e16eb9452c6b3ee",
              "beloep": {
                "beloep": 37875.0
              },
              "behandlingsart": "SYKEPENGER"
            }
          ],
          "organisasjonsnummer": "311169254"
        },
        {
          "id": "71be51a81e35ec85677e04187d8435ddb098b53c",
          "navn": "AVANSERT DEMOKRATISK TIGER AS",
          "samledeYtelserFraArbeidsgiverPerBehandlingsart": [
            {
              "id": "59cbd617aac01e72b041907eb277f998852f03a9",
              "beloep": {
                "beloep": 237970.0
              },
              "behandlingsart": "LONN"
            }
          ],
          "organisasjonsnummer": "312955342"
        },
        {
          "id": "afe1c4a6fc523d3641a3a240db9854de808ebcba",
          "navn": "AVANSERT DEMOKRATISK TIGER AS",
          "samledeYtelserFraArbeidsgiverPerBehandlingsart": [
            {
              "id": "3f5a7e1ede6e30394268dbcde02a5eba50b01b0c",
              "beloep": {
                "beloep": 628593.0
              },
              "behandlingsart": "HYRE"
            }
          ],
          "organisasjonsnummer": "312955342",
          "girRettTilSaerskiltFradragForSjoefolk": true
        }
      ],
      "avkortetFordelVedElektroniskKommunikasjon": [
        {
          "id": "fe769cdd2ebe473abc590494b2dff7471ba81de7",
          "beloep": {
            "beloep": 1500
          },
          "elektroniskKommunikasjonPerArbeidsgiver": [
            {
              "id": "c27d337160a5f53532d87669a75d488717ce1c78",
              "organisasjonsnavn": "AVANSERT DEMOKRATISK TIGER AS",
              "organisasjonsnummer": "312955342",
              "innberettetBeloep": {
                "beloep": 1500.0
              }
            }
          ]
        }
      ]
    },
    "fagforeningskontingent": {
      "samletBetaltFagforeningskontingentPerSkattleggingsperiode": {
        "beloep": 5292.0
      },
      "inntektsfradragForFagforeningskontingent": {
        "fradragsberettigetBeloep": 5292.0,
        "beloepUtenHensynTilValgtPrioritertFradragstype": 5292.0
      }
    },
    "minstefradragOgKostnader": [
      {
        "id": "MINSTEFRADRAG_OG_KOSTNADER_KNYTTET_TIL_ARBEID_OG_ANNEN_INNTEKT",
        "minstefradragIInntekt": {
          "fradragsberettigetBeloep": 92000.0,
          "beloepUtenHensynTilValgtPrioritertFradragstype": 92000.0
        }
      }
    ],
    "saerskiltFradragForSjoefolk": {
      "grunnlagForSaerskiltFradragForSjoefolk": {
        "beloep": 628593
      },
      "saerskiltFradrag": {
        "fradragsberettigetBeloep": 83000.0,
        "beloepUtenHensynTilValgtPrioritertFradragstype": 83000.0
      }
    }
  },
  "opprettetDato": "2026-02-09T09:32:44.4+01:00",
  "ajourholdstidspunkt": "2026-02-09T09:32:44.4Z"
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                              |
|----------|-----------------|-------------------------------------------------------------------------|
| SM-001   | 500             | Uventet feil på tjenesten                                               |
| SM-002   | 500             | Uventet feil i et bakenforliggende system                               |
| SM-003   | 404             | Ukjent url benyttet                                                     |
| SM-004   | 401             | Feil i forbindelse med autentisering                                    |
| SM-005   | 403             | Feil i forbindelse med autorisering                                     |
| SM-006   | 400             | Feil i forbindelse med validering av inputdata                          |
| SM-007   | 404             | Ingen skattemelding funnet på oppgitt gitt inntektsår og identifikator  |
| SM-008   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet               |
| SM-009   | 404             | Ingen person funnet med oppgitt identifikator                           |
| SM-010   | 410             | Skattemeldingen finnes ikke lenger                                      |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-api).

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Skattemelding".

</TabItem>
</Tabs>
