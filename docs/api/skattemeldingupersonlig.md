---
title: Skattemelding upersonlig API
slug: /api/skattemeldingupersonlig
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding]
keywords: [selvangivelse, skattemelding, SummertSkattegrunnlag, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<Summary>Tjenesten leverer opplysninger som fremkommer i skattemeldingen for en virksomhet.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattemeldingupersonlig`

## Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skattemelding upersonlig API - På vegne av`

## Teknisk spesifikasjon
Skattemelding upersonlig API følger ikke de generelle reglene for [versjonering](../om/versjoner.md), men har en egen versjon pr. inntektsår. For øyeblikket leverer API-et skattemeldinger for 2024.
  
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-upersonlig-api) i SwaggerHub.

## Rettighetspakker
  
| Navn på rettighetspakke |	
|---|
| ssb |
  
## Støttetjenester
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skattemelding upersonlig hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/04d29ccb-2bd2-3512-9f0d-138ff342f360) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "norskIdentifikator": "756118412",
  "inntektsaar": "2024",
  "inntektOgUnderskudd": {
    "inntekt": {
      "naeringsinntekt": 1247891
    },
    "inntektFoerFradragForEventueltAvgittKonsernbidrag": 1247891,
    "samletInntekt": {
      "beloep": 1247891
    }
  },
  "formueOgGjeld": {
    "samletVerdiFoerEventuellVerdsettingsrabatt": {
      "beloep": 6537479
    }
  },
  "opprettetDato": "2025-03-18T09:08:07.336+01:00",
  "fasteEiendommer": {
    "fastEiendom": [
      {
        "sergEiendomsidentifikator": "23",
        "id": "23",
        "eksternEiendomsidentifikator": {
          "kommunenummer": "4601",
          "sergMatrikkelnummer": {
            "gaardsnummer": 1,
            "bruksnummer": 11
          }
        },
        "fastEiendomSomFormuesobjekt": [
          {
            "formuesspesifikasjonForBolig": {
              "boligegenskaper": {
                "boligensAreal": 200,
                "boligtype": "enebolig",
                "byggeaar": "2010"
              },
              "boligbruk": "sekundaerbolig",
              "grunnlagForBeregnetMarkedsverdi": {
                "boligverdi": 6537479
              },
              "beregnetMarkedsverdi": 6537479,
              "markedsverdiErGrunnlagForBeregningAvFormuesverdiForBolig": false
            },
            "id": "9d52e232-10ea-4356-bb5b-e5f52f8980c7",
            "eiendomstype": "selveidBolig",
            "eierandel": 100,
            "andelAvFormuesverdi": 100,
            "verdiFoerVerdsettingsrabattForFormuesandel": 6537479
          }
        ]
      }
    ]
  },
  "verdsettingAvAksje": {
    "samletVerdiBakAksjeneISelskapet": {
      "beloep": 6537479
    }
  },
  "kraftverk": {
    "spesifikasjonPerKraftverk": [
      {
        "id": "e0a3bacc-57c3-41b6-abd5-d49f6d5c20ae",
        "loepenummer": 123,
        "kraftverketsNavn": "Krafgt",
        "samletPaastempletMerkeytelseIKva": 15000,
        "negativGrunnrenteinntektFoerSamordning": 280395
      }
    ],
    "samordnetGrunnrenteinntekt": {
      "endeligSamordnetNegativGrunnrenteinntekt": 280395,
      "samletNegativGrunnrenteinntektFoerSamordning": 280395
    }
  },
  "vindkraftverk": {
    "spesifikasjonPerVindkraftverk": [
      {
        "id": "0bb183d0-9b20-434c-b1ce-a35551e422e1",
        "loepenummer": 55,
        "kraftverketsNavn": "jlkjkl",
        "installertEffektIKwhIHenholdTilKonsesjon": 1000,
        "negativGrunnrenteinntektFoerSamordning": 116225,
        "spesifikasjonAvNegativGrunnrenteinntektIVindkraftverk": {
          "fremfoerbarNegativGrunnrenteinntekt": 116225
        }
      }
    ]
  },
  "ajourholdstidspunkt": "2025-03-18T09:08:07.995738Z"
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.
  
| Feilkode | HTTP Statuskode | Feilområde                                                              |
|----------|-----------------|-------------------------------------------------------------------------|
| SMU-001  | 500             | Uventet feil på tjenesten.                                              |
| SMU-002  | 500             | Uventet feil i et bakenforliggende system.                              |
| SMU-003  | 404             | Ukjent url benyttet.                                                    |
| SMU-004  | 401             | Feil i forbindelse med autentisering.                                   |
| SMU-005  | 403             | Feil i forbindelse med autorisering.                                    |
| SMU-006  | 400             | Feil i forbindelse med validering av inputdata.                         |
| SMU-007  | 404             | Ingen skattemelding funnet på oppgitt gitt inntektsår og identifikator. |
| SMU-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.              |
| SMU-009  | 404             | Ingen organisasjon funnet med oppgitt identifikator.                    |
| SMU-010  | 410             | Skattemeldingen finnes ikke lenger.                                     |
| SMU-011  | 422             | Skattemeldingen er på format som ikke støttes.                          |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/e48e70c9-70b2-3349-9c32-983febe9a2e6) i Felles datakatalog. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">  

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata

Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne: 

| Organisasjonsnummer | Inntektsår |
|---|------------|
| 314241266  | 2024       |
| 310977101  | 2024       |
| 313129624  | 2024       |
| 310486574  | 2024       |
| 310030252  | 2024       |
  
Ytterligere testdata kan man benytte hendelseslisten for å finne.
  
</TabItem>
</Tabs>

