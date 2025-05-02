---
title: Selskapsmelding API
slug: /api/selskapsmelding
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, selskapsmelding ]
last_updated: Apr 3, 2025
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om selskapsmelding for selskaper med deltakerfastsetting.</Summary>

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

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:selskapsmelding`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Selskapsmelding API - På vegne av`

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/selskapsmelding-api/) på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| ssb                     |

## Støttetjenester

### Hendelser

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Selskapsmelding hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/data-services/8b267168-b593-3a8f-98af-1aab1d11192d) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "norskIdentifikator": "314283953",
  "inntektsaar": "2024",
  "inntektOgUnderskudd": {
    "samletInntekt": 28120,
    "inntektOgInntektsfradrag": {
      "naeringsinntekt": 28120
    }
  },
  "eierforhold": {
    "deltaker": [
      {
        "deltakerensOrganisasjonsnummer": "313218503",
        "id": "c69e624b-daa8-4767-aef9-83a12ea5498d",
        "deltakerensNavn": "MUSIKALSK STANDHAFTIG TIGER AS",
        "selskapsandelIProsent": 37.65,
        "grunnlagForDeltakersAndelAvInntekt": {
          "andelAvSamletInntekt": 10587
        },
        "deltakersAndelAvInntekt": {
          "alminneligInntekt": 10587,
          "utdelingMv": {
            "uegentligInnskudd": 2329,
            "skattPaaDeltakersAndelAvSelskapetsOverskudd": 2329
          }
        },
        "spesifikasjonAvSkattemessigInngangsverdiOgEgenkapitalkonto": {
          "uegentligInnskudd": {
            "inngangsverdi": 2329,
            "innbetaltEgenkapital": 2329,
            "opptjentEgenkapital": 2329
          },
          "utgaaendeVerdi": {
            "inngangsverdi": 2329,
            "innbetaltEgenkapital": 2329,
            "opptjentEgenkapital": -2329
          },
          "samletEgenkapitalUtgaaendeVerdi": 0
        },
        "erOmfattetAvFinansskatt": false
      },
      {
        "deltakerensOrganisasjonsnummer": "313951464",
        "id": "d0e2b95c-6b2a-482d-a3f9-24d9e00faedd",
        "deltakerensNavn": "UMAKE KONKRET TIGER AS",
        "selskapsandelIProsent": 62.35,
        "grunnlagForDeltakersAndelAvInntekt": {
          "andelAvSamletInntekt": 17533
        },
        "deltakersAndelAvInntekt": {
          "alminneligInntekt": 17533,
          "utdelingMv": {
            "uegentligInnskudd": 3857,
            "skattPaaDeltakersAndelAvSelskapetsOverskudd": 3857
          }
        },
        "spesifikasjonAvSkattemessigInngangsverdiOgEgenkapitalkonto": {
          "uegentligInnskudd": {
            "inngangsverdi": 3857,
            "innbetaltEgenkapital": 3857,
            "opptjentEgenkapital": 3857
          },
          "utgaaendeVerdi": {
            "inngangsverdi": 3857,
            "innbetaltEgenkapital": 3857,
            "opptjentEgenkapital": -3857
          },
          "samletEgenkapitalUtgaaendeVerdi": 0
        },
        "erOmfattetAvFinansskatt": false
      }
    ]
  },
  "opprettetDato": "2025-03-18T09:08:08.156231254+01:00",
  "ajourholdstidspunkt": "2025-03-18T08:08:38.113Z"
}

```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                           |
|----------|-----------------|----------------------------------------------------------------------|
| SME-001  | 500             | Uventet feil på tjenesten.                                           |
| SME-002  | 500             | Uventet feil i et bakenforliggende system.                           |
| SME-003  | 404             | Ukjent url benyttet.                                                 |
| SME-004  | 401             | Feil i forbindelse med autentisering.                                |
| SME-005  | 403             | Feil i forbindelse med autorisering.                                 |
| SME-006  | 400             | Feil i forbindelse med validering av inputdata.                      |
| SME-007  | 404             | Ikke treff på oppgitt identifikator.                                 |
| SME-008  | 404             | Ingen selskapsmelding funnet på oppgitt identifikator og inntektsår. |
| SME-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.           |
| SME-010  | 406             | Selskapsmelding finnes ikke lenger.                                  |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Informasjonsmodell kommer i Felles datakatalog.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, men man kan benytte hendelseslisten for å finne
testdata man kan benytte for å teste oppslagstjenesten.

</TabItem>
</Tabs>
