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
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

Skattemelding API v5 leverer skattemelding for inntektsåret 2024.

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
  "norskPersonidentifikator": "21830199869",
  "registreringstidspunkt": "2025-02-25T15:17:56.014+01:00",
  "inntektsaar": "2024",
  "bankLaanOgForsikring": {
    "konto": [
      {
        "id": "91595767b658108fdacd92169daae7f874e3c757",
        "bankensNavn": "JUSTERBAR HÅNDFAST ISBJØRN SA",
        "organisasjonsnummer": "312871262",
        "kontonummer": "44133176397",
        "prosentandelAvGjeldInnskuddOgRente": 100.0,
        "innskudd": {
          "beloep": 156650.0
        },
        "andelAvInnskudd": {
          "beloep": 156650
        },
        "opptjenteRenter": {
          "beloep": 3133.0
        },
        "andelAvOpptjenteRenter": {
          "beloep": 3133
        },
        "gjeld": {
          "beloep": 684091.0
        },
        "andelAvGjeld": {
          "beloep": 684091
        },
        "paaloepteRenter": {
          "fradragsberettigetBeloep": 20523.0,
          "beloepUtenHensynTilValgtPrioritertFradragstype": 20523.0
        },
        "andelAvPaaloepteRenter": {
          "beloep": 20523
        }
      }
    ]
  },
  "arbeidTrygdOgPensjon": {
    "loennOgTilsvarendeYtelser": {
      "arbeidsgiver": [
        {
          "id": "159237314ca88c061d99c1c4dea175c667911c81",
          "navn": "EKSEMPLARISK REAL TIGER AS",
          "samledeYtelserFraArbeidsgiverPerBehandlingsart": [
            {
              "id": "558c49882d9320242d5b35a46606ff7bd837cd28",
              "beloep": {
                "beloep": 1004947.0
              },
              "behandlingsart": "LONN"
            }
          ],
          "organisasjonsnummer": "310495670"
        }
      ]
    },
    "fagforeningskontingent": {
      "samletBetaltFagforeningskontingentPerSkattleggingsperiode": {
        "beloep": 4392.0
      },
      "inntektsfradragForFagforeningskontingent": {
        "fradragsberettigetBeloep": 4392.0,
        "beloepUtenHensynTilValgtPrioritertFradragstype": 4392.0
      }
    },
    "minstefradragOgKostnader": [
      {
        "id": "MINSTEFRADRAG_OG_KOSTNADER_KNYTTET_TIL_ARBEID_OG_ANNEN_INNTEKT",
        "minstefradragIInntekt": {
          "fradragsberettigetBeloep": 104450.0,
          "beloepUtenHensynTilValgtPrioritertFradragstype": 104450.0
        }
      }
    ]
  },
  "finans": {
    "verdipapirfond": [
      {
        "id": "f0791bea8cfd62bb1abbe9425bb535a9eb621beb",
        "fondetsNavn": "Aksjefondet RST",
        "isinnummer": "NO9190983755",
        "antallAndeler": 110.759,
        "verdiFoerVerdsettingsrabattForAndelIAksjedel": {
          "beloep": 223449.0
        },
        "oppgavegiversOrganisasjonsnummer": "310863394",
        "oppgavegiversNavn": "PRATSOM FANTASILØS STRUTS T.U.W"
      }
    ]
  },
  "opprettetDato": "2025-02-25T14:17:55.948036683+01:00",
  "ajourholdstidspunkt": "2025-02-25T14:17:56.014116Z"
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

[Informasjonsmodell](https://data.norge.no/informationmodels/eb60da4f-d6b2-3564-b3a5-e31e25da7538) i Felles datakatalog.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Skattemelding".

</TabItem>
</Tabs>
