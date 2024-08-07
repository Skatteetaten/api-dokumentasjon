---
title: Opptjeningsgrunnlag arbeidsforhold API
slug: /api/opptjeningsgrunnlagarbeidsforhold
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, opptjeningsgrunnlag, arbeidsforhold]
last_updated: Jun 7, 2024
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om ....</Summary>

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

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:opptjeningsgrunnlagarbeidsforhold`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Opptjeningsgrunnlag arbeidsforhold API - På vegne av`

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/opptjeningsgrunnlagarbeidsforhold-api/) på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| nav                     |

## Støttetjenester

### Hendelser

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `oOptjeningsgrunnlag arbeidsforhold hendelser API`

## Datakatalog
Datatjenestebeskrivelse kommer i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "norskIdentifikator": "313696146",
  "inntektsaar": "2023",
  "inntektOgUnderskudd": {
    "samletInntekt": 154857,
    "inntektOgInntektsfradrag": {
      "naeringsinntekt": 154857
    }
  },
  "spesifikasjonAvForholdRelevanteForBeskatningAvDeltakere": {
    "aksjeIAksjonaerregisteret": [
      {
        "id": "9b403511-d3d7-458d-96f2-4fb0fa6f7081",
        "selskapetsNavn": "Denne gaten 755 AS",
        "selskapetsOrganisasjonsnummer": "312445484",
        "landkode": "NO",
        "aksjeklasse": "ordinaer",
        "isinnummer": "NO5553437509",
        "antallAksjer": 212
      }
    ]
  },
  "eierforhold": {
    "deltaker": [
      {
        "deltakerensOrganisasjonsnummer": "310044237",
        "id": "48bacc24-bad0-4a97-9ecf-c3444ed2cf6e",
        "deltakerensNavn": "UVANLIG TROFAST TIGER AS",
        "selskapsandelIProsent": 23.83,
        "grunnlagForDeltakersAndelAvInntekt": {
          "andelAvSamletInntekt": 36902
        },
        "deltakersAndelAvInntekt": {
          "alminneligInntekt": 36902,
          "utdelingMv": {
            "uegentligInnskudd": 8118,
            "skattPaaDeltakersAndelAvSelskapetsOverskudd": 8118
          }
        }
      },
      {
        "deltakerensOrganisasjonsnummer": "310034479",
        "id": "a3924b5a-0fe8-4bc1-a316-d5ecf9448c98",
        "deltakerensNavn": "VOKSENDE AKTIV TIGER AS",
        "selskapsandelIProsent": 76.17,
        "grunnlagForDeltakersAndelAvInntekt": {
          "andelAvSamletInntekt": 117955
        },
        "deltakersAndelAvInntekt": {
          "alminneligInntekt": 117955,
          "utdelingMv": {
            "uegentligInnskudd": 25950,
            "skattPaaDeltakersAndelAvSelskapetsOverskudd": 25950
          }
        }
      }
    ]
  },
  "ajourholdstidspunkt": "2024-02-20T08:42:48.479Z",
  "opprettetDato": "2024-02-20T09:42:37.740023476+01:00"
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
