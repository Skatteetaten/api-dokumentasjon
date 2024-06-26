---
title: Skattemelding API
slug: /api/skattemelding
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Skattemelding ]
keywords: [ skattemelding ]
last_updated: Feb 13, 2024
hide_table_of_contents: true
---

<summary>Tjenesten leverer informasjon som fremkommer i skattemelding for en person.</summary>
<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattemelding`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Skattemelding API - På vegne av`

## Teknisk spesifikasjon

Skattemelding API v4 leverer skattemelding for inntektsårene 2022 og 2023.

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-api) på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
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

## Curl

Her er et eksempel på et kall med curl mot tjenesten for å hente fastsatt skattemelding. Du må legge sertifikat og
nøkkel som parametre til curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/skattemelding/v4/fastsatt/ssb/2023/13859798769"
```

## JSON

```json
{
  "personidentifikator": "13859798769",
  "inntektsaar": "2023",
  "bankLaanOgForsikring": {
    "konto": [
      {
        "id": "a706f6c010e10915d59e7d16e28f133d47e3dbba",
        "bankensNavn": "FLEKSIBEL SIVILISERT GIRAFF SPAREBANK",
        "organisasjonsnummer": "310338648",
        "kontonummer": "94112618672",
        "innskudd": {
          "beloep": 567429
        },
        "opptjenteRenter": {
          "beloep": 11349
        }
      }
    ]
  },
  "arbeidTrygdOgPensjon": {
    "loennOgTilsvarendeYtelser": {
      "arbeidsgiver": [
        {
          "id": "d862e16492226c2f0289a82c4d54da12a46cb59a",
          "navn": "REALISTISK AKTIV KATT REGNSKOG",
          "samledeYtelserFraArbeidsgiverPerBehandlingsart": [
            {
              "id": "a3d4027985f6e3f0ec25f7adb303cec38bacf6d5",
              "beloep": {
                "beloep": 820368
              },
              "behandlingsart": "LONN"
            },
            {
              "id": "317646c6689e924628a5d5c093a64cf3b5170842",
              "beloep": {
                "beloep": 118464
              },
              "behandlingsart": "FRIBIL"
            }
          ],
          "organisasjonsnummer": "313077160"
        }
      ]
    },
    "minstefradragOgKostnader": [
      {
        "id": "MINSTEFRADRAG_OG_KOSTNADER_KNYTTET_TIL_ARBEID_OG_ANNEN_INNTEKT",
        "minstefradragIInntekt": {
          "fradragsberettigetBeloep": {
            "beloep": 104450
          },
          "beloepUtenHensynTilValgtPrioritertFradragstype": {
            "beloep": 104450
          }
        }
      }
    ]
  },
  "skjermet": false,
  "opprettetDato": "2024-02-13T08:36:54.619+01:00",
  "registreringstidspunkt": "2024-02-13T09:36:54.619+01:00"
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                              |
|----------|-----------------|-------------------------------------------------------------------------|
| SM-001   | 500             | Uventet feil på tjenesten.                                              |
| SM-002   | 500             | Uventet feil i et bakenforliggende system.                              |
| SM-003   | 404             | Ukjent url benyttet.                                                    |
| SM-004   | 401             | Feil i forbindelse med autentisering.                                   |
| SM-005   | 403             | Feil i forbindelse med autorisering.                                    |
| SM-006   | 400             | Feil i forbindelse med validering av inputdata.                         |
| SM-007   | 404             | Ingen skattemelding funnet på oppgitt gitt inntektsår og identifikator. |
| SM-008   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.              |
| SM-009   | 404             | Ingen person funnet med oppgitt identifikator.                          |
| SM-010   | 410             | Skattemeldingen finnes ikke lenger.                                     |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/eb60da4f-d6b2-3564-b3a5-e31e25da7538) i Felles datakatalog.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Skattemelding".

</TabItem>
</Tabs>
