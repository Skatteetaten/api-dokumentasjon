---
title: Skattemelding upersonlig API
slug: /api/skattemeldingupersonlig
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding]
keywords: [selvangivelse, skattemelding, SummertSkattegrunnlag, inntekt, formue]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---
<Summary>Tjenesten leverer opplysninger som fremkommer i skattemeldingen for en virksomhet.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon
Skattemelding upersonlig API v4 leverer skattemeldinger for 2024 og 2025.
  
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-upersonlig-api) i SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattemeldingupersonlig`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skattemelding upersonlig API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:
  
| Teknisk navn på rettighetspakker |	
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
  "norskIdentifikator": "314028198",
  "inntektsaar": "2025",
  "inntektOgUnderskudd": {
    "inntekt": {
      "naeringsinntekt": 500000
    },
    "inntektFoerFradragForEventueltAvgittKonsernbidrag": 500000,
    "samletInntekt": {
      "beloep": 500000
    }
  },
  "spesifikasjonAvForholdRelevanteForBeskatning": {
    "aksjeIAksjonaerregisteret": [
      {
        "id": "30d392602e74103e70ccc21af50d5d2a1e102f15",
        "selskapetsNavn": "FOO 19691 AS",
        "selskapetsOrganisasjonsnummer": "501963442",
        "isinnummer": "NO6519286027",
        "antallAksjer": 229
      }
    ],
    "verdipapirfond": [
      {
        "id": "3420517e65b36b836baba11546fb3e837873a7d8",
        "fondetsNavn": "Aksjefondet RST",
        "isinnummer": "NO8519673295",
        "antallAndeler": 110.759,
        "utbytte": 23900
      },
      {
        "id": "c46208774441cc4c762f651f8e2e080dad736891",
        "fondetsNavn": "Rentefondet RST",
        "isinnummer": "NO2190859406",
        "antallAndeler": 200.105,
        "renteinntekt": 239000
      }
    ],
    "obligasjonOgSertifikat": [
      {
        "id": "d0b06eaf3683e26308f3d2758df799f2d69fd93b",
        "rentepapiretsNavn": "RST-FIN",
        "kontofoerersNavn": "HUSLØS RIKTIG LEOPARD ASA",
        "kontonummer": "NO8437272774",
        "finansproduktidentifikator": "NO3048216047",
        "finansproduktidentifikatortype": "ISIN",
        "antallObligasjonOgSertifikat": 90,
        "renteinntektAvObligasjonOgSertifikat": 6999999,
        "gevinstVedRealisasjonAvObligasjonOgSertifikat": 390000
      }
    ],
    "fondskonto": [
      {
        "id": "fde7541e964b6c41f16cc4af994e8e4a2dca96a1",
        "forsikringsselskapetsOrganisasjonsnummer": "312470764",
        "forsikringsselskapetsNavn": "HELLIG USANNFERDIG TIGER AS",
        "kontonummer": "74981716829",
        "skattepliktigGevinstVedRealisasjonAvOgUttakFraAksjedel": 14453,
        "skattepliktigGevinstVedRealisasjonAvOgUttakFraRentedel": 14453
      }
    ]
  },
  "formueOgGjeld": {
    "formuesobjekt": [
      {
        "id": "693bdd68-3549-4804-b9d1-41c8e5c010db",
        "formuesobjekttype": "formuesobjektIkkeOmfattetAvVerdsettingsrabatt",
        "verdiFoerEventuellVerdsettingsrabatt": 50339
      }
    ],
    "samletVerdiFoerEventuellVerdsettingsrabatt": {
      "beloep": 50339
    }
  },
  "opplysningOmSkattesubjekt": {
    "erBoersnotert": false
  },
  "verdsettingAvAksje": {
    "samletVerdiBakAksjeneISelskapet": {
      "beloep": 50339
    }
  },
  "ajourholdstidspunkt": "2026-02-11T05:40:15.975307Z"
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

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-upersonlig-api).

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
| 314028198  | 2025       |
| 310577200  | 2025       |
  
Ytterligere testdata kan man benytte hendelseslisten for å finne.
  
</TabItem>
</Tabs>

