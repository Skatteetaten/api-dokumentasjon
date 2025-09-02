---
title: Beregnet skatt API
slug: /api/beregnetskatt
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Skatteoppgjør ]
keywords: [ beregnetskatt, skatteberegning, inntekt, formue ]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om inntekt, fradrag, formue, gjeld og beregnet skatt.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/beregnet-skatt-api) på SwaggerHub.

## Tilgang

### Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:beregnetskatt`

### Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Beregnet skatt API - På vegne av`

### Skatteetaten må gi tilgang

For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Teknisk navn på rettighetspakker  |
|-----------------------------------|
| finans                            |
| forsikring                        |
| husbanken                         |
| kommuneLangtidsoppholdInstitusjon |
| kredittopplysning                 |
| laanekassen                       |
| ldirreindriftstilskudd            |
| norgesbank                        |
| pensjonskasseEtteroppgjoerUfoerAfp |
| ssb                               |

## Støttetjenester

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør hendelser API`

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/dataservices/2b161294-9c82-30ff-854b-de007482f2b6) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
  {
  "personidentifikator": "08457590416",
  "inntektsaar": 2024,
  "skjermet": false,
  "beregnetSkattFastland": {
    "skatteklasse": "1",
    "beregnetSkatt": 199651,
    "beregnetSkattFoerSkattefradrag": 199651,
    "skatteregnskapskommune": "0301",
    "anvendtStandardfradrag": false,
    "skattOgAvgift": {
      "formuesskattTilStat": {
        "grunnlag": 3542369,
        "beloep": 5527
      },
      "inntektsskattTilKommune": {
        "kommunefordeltSkatt": [
          {
            "kommune": "0301",
            "grunnlag": 582675,
            "beloep": 54140
          }
        ],
        "grunnlag": 582675,
        "beloep": 54140
      },
      "inntektsskattTilFylkeskommune": {
        "kommunefordeltSkatt": [
          {
            "kommune": "0301",
            "grunnlag": 582675,
            "beloep": 11619
          }
        ],
        "grunnlag": 582675,
        "beloep": 11619
      },
      "inntektsskattTilKommuneOgFylkeskommune": {
        "grunnlag": 582675,
        "beloep": 65759
      },
      "formuesskattTilKommune": {
        "kommunefordeltSkatt": [
          {
            "kommune": "0301",
            "grunnlag": 3542369,
            "beloep": 12897
          }
        ],
        "grunnlag": 3542369,
        "beloep": 12897
      },
      "fellesskatt": {
        "grunnlag": 582675,
        "beloep": 43015
      },
      "trinnskatt": {
        "grunnlag": 687125,
        "beloep": 18857
      },
      "trygdeavgiftAvLoennsinntekt": {
        "grunnlag": 687125,
        "beloep": 53596
      },
      "sumTrygdeavgift": {
        "grunnlag": 687125,
        "beloep": 53596
      }
    },
    "oevrigeResultaterAvBeregning": {
      "alminneligInntektFoerSaerfradrag": 582675,
      "pensjonsgivendeInntekt": 687125,
      "samletGrunnlagForInntektsskattTilKommuneOgFylkeskommuneStatsskattOgFellesskatt": 582675,
      "alminneligInntektFoerFordelingsfradrag": [
        {
          "beloep": 582675,
          "kommunenummer": "0301"
        }
      ],
      "oevrigFormue": [
        {
          "beloep": 3542369,
          "kommunenummer": "0301"
        }
      ]
    },
    "informasjonTilSkattelister": {
      "nettoinntekt": 582675,
      "nettoformue": 3542369,
      "beregnetSkatt": 199651,
      "kommune": [
        "0301"
      ]
    }
  },
  "skatteoppgjoersdato": "2025-01-21",
  "anvendtTolvdelForTrinnskatt": 12,
  "anvendtTolvdelVedArbeidsoppholdINorge": 12,
  "ajourholdstidspunkt": "2025-01-27T07:18:00.528Z"
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                               |
|----------|-----------------|--------------------------------------------------------------------------|
| BSA-001  | 500             | Uventet feil på tjenesten.                                               |
| BSA-002  | 500             | Uventet feil i et bakenforliggende system.                               |
| BSA-003  | 404             | Ukjent url benyttet.                                                     |
| BSA-004  | 401             | Feil i forbindelse med autentisering.                                    |
| BSA-005  | 403             | Feil i forbindelse med autorisering.                                     |
| BSA-006  | 400             | Feil i forbindelse med validering av inputdata.                          |
| BSA-007  | 404             | Ingen beregnet skatt funnet på oppgitt gitt inntektsår og identifikator. |
| BSA-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.               |
| BSA-009  | 404             | Ikke treff på oppgitt identifikator.                                     |

</TabItem>
<TabItem headerText="Informasjonsmodell V2" itemKey="itemKey-5">

[Informasjonsmodell](https://data.norge.no/informationmodels/1ee98d61-eb44-33c9-96aa-822b898abed5) i Felles datakatalog.

Obs. Hvis denne siden avviker fra Open API spesifikasjonen på Swaggerhub, er det Open API spesifikasjonen som er mest
oppdatert.

I listen under vises navn på de ulike feltene tjenesten leverer. Ta kontakt med Skatteetaten for å finne ut hvilken
rettighetspakke som er aktuell for din organisasjon og hvilke felter den aktuelle rettighetspakken returnerer.

| Felt                                     | Beskrivelse                                                                                                                                                                                                                            | Gjelder fra inntektsår | Type                                                            |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|-----------------------------------------------------------------|
| personidentifikator                      | Gjeldene personidentifikator for personen det ble søkt på                                                                                                                                                                              | 2017                   | Fødselsnummer                                                   |
| inntektsaar                              | Inntektsåret det ble søkt på                                                                                                                                                                                                           | 2017                   | Inntektsår                                                      |
| skjermet                                 | se [skjerming](../om/skjerming.md)                                                                                                                                                                                                     | 2017                   | Boolsk                                                          |
| anvendtTolvdelVedArbeidsoppholdINorge    | [Antall anvendte tolvdeler ved arbeidsopphold i Norge](https://data.skatteetaten.no/web/datakatalog/begrep/98da4353-dff2-11e7-a0fd-005056821322)                                                                                       | 2017                   | Heltall                                                         |
| anvendtTolvdelVedArbeidsoppholdIUtlandet |                                                                                                                                                                                                                                        | 2021                   | Heltall                                                         | 
| anvendtTolvdelForTrinnskatt              | [Antall hele eller påbegynte måneder som regulerer beregning av fribeløp til fratrekk i grunnlag for trinnskatt for personlig skattepliktig](https://data.skatteetaten.no/web/datakatalog/begrep/98da4351-dff2-11e7-a0fd-005056821322) | 2021                   | Heltall                                                         |
| skatteoppgjoersdato                      |                                                                                                                                                                                                                                        | 2017                   | Dato                                                            |
| beregnetSkattFastland                    | vil inneholde verdier fra skatteoppgjør fastland                                                                                                                                                                                       | 2017                   | [BeregnetSkattPerOppgjoerstype](#beregnetskattperoppgjoerstype) |
| beregnetSkattSvalbard                    | vil inneholde verdier fra skatteoppgjør Svalbard                                                                                                                                                                                       | 2017                   | [BeregnetSkattPerOppgjoerstype](#beregnetskattperoppgjoerstype) |
| beregnetSkattKildeskattPaaLoenn          | vil inneholde verdier fra kildeskattkvittering                                                                                                                                                                                         | 2019                   | [BeregnetSkattPerOppgjoerstype](#beregnetskattperoppgjoerstype) |

## BeregnetSkattPerOppgjoerstype

Beregnet skatt per skatteoppgjørstype (fastland eller Svalbard) eller kildeskattkvittering (kildeskatt på lønn)

| Felt                           | Beskrivelse                                                                                                                            | Gjelder fra inntektsår | Type                                                          |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|------------------------|---------------------------------------------------------------|
| valideringsresultat            | beskrivelse mangler                                                                                                                    | 2021                   | Valideringsresultat                                           |
| skatteklasse                   | [Skatteklasse](https://data.skatteetaten.no/web/datakatalog/begrep/20b2e211-9fe1-11e5-a9f8-e4115b280940)                               | 2017                   | Heltall                                                       |
| beregnetSkatt                  |                                                                                                                                        | 2021                   | BeløpSomHeltall                                               |
| beregnetSkattFoerSkattefradrag |                                                                                                                                        | 2021                   | BeløpSomHeltall                                               |
| skatteregnskapskommune         | [skatteregnskapskommune](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcf1-ad07-11e8-8ffd-005056821322)                     | 2017                   | Kommunenummer                                                 |
| sumSkattefradrag               |                                                                                                                                        | 2021                   | BeløpSomHeltall                                               |
| anvendtStandardfradrag         | [Standardfradrag for utenlansk arbeidstaker](https://data.skatteetaten.no/web/datakatalog/begrep/cf248015-dfe5-11e7-9101-005056821322) | 2021                   | Boolsk                                                        |
| informasjonTilSkattelister     |                                                                                                                                        | 2017                   | [InformasjonTilSkattelister](#informasjonTilSkattelister)     |
| skattOgAvgift                  |                                                                                                                                        | 2017                   | [SkattOgAvgift](#skattogavgift)                               |
| skattefradrag                  |                                                                                                                                        | 2017                   | [Skattefradrag](#skattefradrag)                               |
| skattetillegg                  |                                                                                                                                        | 2021                   | [Skattetillegg](#skattetillegg)                               |
| oevrigeResultaterAvBeregning   |                                                                                                                                        | 2017                   | [OevrigeResultaterAvBeregning](#oevrigeresultateravberegning) |

## InformasjonTilSkattelister

| Felt          | Beskrivelse                                                                                                                   | Gjelder fra inntektsår | Type            |
|---------------|-------------------------------------------------------------------------------------------------------------------------------|------------------------|-----------------|
| nettoinntekt  | [alminnelig inntekt før særfradrag](https://data.skatteetaten.no/web/datakatalog/begrep/e88c7380-5684-11e7-a43d-0050568351d2) | 2017                   | BeløpSomHeltall |
| nettoformue   | [Nettoformue](https://data.skatteetaten.no/web/datakatalog/begrep/649cbce3-ad07-11e8-8ffd-005056821322)                       | 2017                   | BeløpSomHeltall |
| beregnetSkatt | [Beregnet skatt](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcd4-ad07-11e8-8ffd-005056821322)                    | 2017                   | BeløpSOmHeltall |
| kommune       | [Kommune](https://data.skatteetaten.no/web/datakatalog/begrep/20b2e0f1-9fe1-11e5-a9f8-e4115b280940)                           | 2021                   | Kommunenummer   |

## SkattOgAvgift

| Felt                                                                | Beskrivelse                                                                                                                                                                                                     | Gjelder fra inntektsår              | Type            |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|-----------------|
| formuesskattTilStat                                                 | [Formueskatt til stat](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcd8-ad07-11e8-8ffd-005056821322)                                                                                                | 2017 (kun beløp)                    | [Skatt](#skatt) |
| inntektsskattTilKommune                                             |                                                                                                                                                                                                                 | 2021                                | [Skatt](#skatt) |
| formuesskattTilSvalbard                                             | [Formueskatt til stat](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcd8-ad07-11e8-8ffd-005056821322)                                                                                                | 2017 (kun beløp)                    | [Skatt](#skatt) |
| inntektsskattTilFylkeskommune                                       |                                                                                                                                                                                                                 | 2021                                | [Skatt](#skatt) |
| inntektsskattTilKommuneOgFylkeskommune                              |                                                                                                                                                                                                                 | 2021                                | [Skatt](#skatt) |
| formuesskattTilKommune                                              | [formuesskatt til kommune](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcd7-ad07-11e8-8ffd-005056821322)                                                                                            | 2021                                | [Skatt](#skatt) |
| fellesskatt                                                         | [skatt til staten for fysiske personer og dødsbo og som beregnes på samme grunnlag som inntektsskatten til kommunene](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcd5-ad07-11e8-8ffd-005056821322) | 2021                                | [Skatt](#skatt) |
| statsskatt                                                          | [direkte eller indirekte skatt som tilkommer staten](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcf3-ad07-11e8-8ffd-005056821322)                                                                  | 2021                                | [Skatt](#skatt) |
| trinnskatt                                                          | [en progressiv bruttoskatt på personlig skattyters personinntekt, består av fire trinn](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcf9-ad07-11e8-8ffd-005056821322)                               | 2021                                | [Skatt](#skatt) |
| kildeskattPaaPensjon                                                | [kildeskatt på pensjon og uføreytelser](https://data.skatteetaten.no/web/datakatalog/begrep/649cbce0-ad07-11e8-8ffd-005056821322)                                                                               | 2021                                | [Skatt](#skatt) |
| trygdeavgiftAvLoennsinntekt                                         | [Personinntekt fra lønnsinntekt](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cbc-a9e1-11e8-8514-005056821322)                                                                                      | 2017 (kun grunnlag) [Skatt](#skatt) |                 |
| trygdeavgiftAvPensjonsinntekt                                       | [personinntekt av pensjonsinntekt](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cbc-a9e1-11e8-8514-005056821322)                                                                                    | 2021                                | [Skatt](#skatt) |
| trygdeavgiftAvNaeringsinntektFraFiskeFangstFamiliebarnehage         | [personinntekt fra fiske, fangst og barnepass i barnepasserens hjem](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cb9-a9e1-11e8-8514-005056821322)                                                  | 2017 (kun grunnlag)                 | [Skatt](#skatt) |
| trygdeavgiftAvNaeringsinntekt                                       | [personinntekt fra næringsinntekt](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cbb-a9e1-11e8-8514-005056821322)                                                                                    | 2017 (kun grunnlag)                 | [Skatt](#skatt) |
| trygdeavgiftAvUfoeretrygd                                           | [Personinntekt fra lønnsinntekt](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cbc-a9e1-11e8-8514-005056821322)                                                                                      | 2021                                | [Skatt](#skatt) |
| trygdeavgiftSomFrivilligMedlemIPensjonsdel                          | [personinntekt som medlem i pensjonsdel](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cc1-a9e1-11e8-8514-005056821322)                                                                              | 2017 (kun grunnlag)                 | [Skatt](#skatt) |
| trygdeavgiftSomFrivilligMedlemIHelsedel                             | [trygdeavgift](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cbc-a9e1-11e8-8514-005056821322)                                                                                                        | 2021                                | [Skatt](#skatt) |
| pensjonsinntektFritattForSkattEtterSkatteavtale                     | [pensjonsinntekt fritatt for skatt etter skatteavtale](https://data.skatteetaten.no/web/datakatalog/begrep/649cbce5-ad07-11e8-8ffd-005056821322)                                                                | 2021                                | BeløpSomHeltall |
| sumTrygdeavgift                                                     | [trygdeavgift](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcfa-ad07-11e8-8ffd-005056821322)                                                                                                        | 2021                                | [Skatt](#skatt) |
| skattPaaAlminneligInntekt                                           |                                                                                                                                                                                                                 | 2017                                | [Skatt](#skatt) |
| skattPaaNaeringsoverskudd                                           |                                                                                                                                                                                                                 | 2021                                | [Skatt](#skatt) |
| skattPaaInntektOver12G                                              | [restskatt over 12G omfattet av lønnstrellordningen](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cc4-a9e1-11e8-8514-005056821322)                                                                  | 2021                                | [Skatt](#skatt) |
| fastsattSkattEtterLoennstrekkordningen                              |                                                                                                                                                                                                                 | 2017                                | BeløpSomHeltall |
| betaltSkattOgAvgiftEtterLoennstrekkordningen                        |                                                                                                                                                                                                                 | 2021                                | BeløpSomHeltall |
| betaltSkattOgAvgiftEtterOrdningForKildeskattPaaLoenn                |                                                                                                                                                                                                                 | 2021                                | [Skatt](#skatt) |
| trygdeavgiftForSykestoenadsdelForArbeidstakereUtsendtFraUSAOgCanada |                                                                                                                                                                                                                 | 2021                                | [Skatt](#skatt) |
| trygdeavgiftAvLoennsinntektOmfattetAvLoennstrekkordningPaaSvalbard  |                                                                                                                                                                                                                 | 2021                                | [Skatt](#skatt) |

## Skattefradrag

| Felt                                                 | Beskrivelse                                                                                                                                                                                                                                                                    | Gjelder fra inntektsår | Type            |
|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|-----------------|
| skattefradragVedBSU                                  |                                                                                                                                                                                                                                                                                | 2021                   | [Skatt](#skatt) |
| finnmarksfradragITrinnskatt                          | [redusert skattesats for trinnskatt til staten i Finnmark og Nord-Troms](https://data.skatteetaten.no/web/datakatalog/begrep/649cbce6-ad07-11e8-8ffd-005056821322)                                                                                                             | 2021                   | BeløpSomHeltall |
| finnmarksfradragIInntektsskattTilKommune             | [særskilt fradrag i alminnelig inntekt i Finnmark og Nord-Troms beregnet forholdsmessig i inntektsskatt til kommune](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcf7-ad07-11e8-8ffd-005056821322)                                                                 | 2021                   | BeløpSomHeltall |
| finnmarksfradragIInntektsskattTilFylkeskommune       | [særskilt fradrag i alminnelig inntekt i Finnmark og Nord-Troms beregnet forholdsmessig i inntektsskatt til fylkeskommune](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcf6-ad07-11e8-8ffd-005056821322)                                                           | 2021                   | BeløpSomHeltall |
| finnmarksfradragIFellesskatt                         | [særskilt fradrag i alminnelig inntekt og redusert skattesats for fellesskatt til staten i Finnmark og Nord-Troms](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcf8-ad07-11e8-8ffd-005056821322)                                                                   | 2021                   | BeløpSomHeltall |
| sumFinnmarksfradrag                                  | [sum skattefordeler i Finnmark og Nord-Troms](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcf4-ad07-11e8-8ffd-005056821322)                                                                                                                                        | 2021                   | BeløpSomHeltall |
| skattefradragForPensjonsinntekt                      | [fradrag i inntektsskatt og trygdeavgift til skattepliktig som mottar bestemte pensjoner med nedtrapping av fradraget når samlet pensjonsinntekt overstiger fastsatte beløpsgrenser](https://data.skatteetaten.no/web/datakatalog/begrep/cf24800b-dfe5-11e7-9101-005056821322) | 2021                   | BeløpSomHeltall |
| skattebegrensningVedLavAlminneligInntekt             | [skattebegrensning ved lav alminnelig inntekt](https://data.skatteetaten.no/web/datakatalog/begrep/649cbce8-ad07-11e8-8ffd-005056821322)                                                                                                                                       | 2021                   | BeløpSomHeltall |
| skattebegrensningVedLitenSkatteevne                  | [skattebegrensninger ved liten skatteevne](https://data.skatteetaten.no/web/datakatalog/begrep/649cbce9-ad07-11e8-8ffd-005056821322)                                                                                                                                           | 2021                   | BeløpSomHeltall |
| skattefradragForUfoereVedOvergangsregel              | [skattefradrag for uføre ved overgangsregel](https://data.skatteetaten.no/web/datakatalog/begrep/649cbced-ad07-11e8-8ffd-005056821322)                                                                                                                                         | 2021                   | BeløpSomHeltall |
| skattenedsettelseVedAlternativFordeling              | [skattenedsettelse ved den alternative fordelingsmetoden](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcf0-ad07-11e8-8ffd-005056821322)                                                                                                                            | 2021                   | BeløpSomHeltall |
| skattefradragForFormuesskattBetaltIUtlandet          | [skattefradrag for formuesskatt betalt i utlandet](https://data.skatteetaten.no/web/datakatalog/begrep/6c325d62-ff95-11e8-a756-005056823b15)                                                                                                                                   | 2017                   | BeløpSomHeltall |
| skattefradragForInntektsskattBetaltIUtlandet         | [skattefradrag for inntektsskatt betalt i utlandet](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcea-ad07-11e8-8ffd-005056821322)                                                                                                                                  | 2017                   | BeløpSomHeltall |
| skattefradragForKostnaderTilFoU                      | [skattefradrag for kostnader til forskning og utvikling](https://data.skatteetaten.no/web/datakatalog/begrep/649cbceb-ad07-11e8-8ffd-005056821322)                                                                                                                             | 2021                   | [Skatt](#skatt) |
| skattefradragForOmberegnetGevinstPaaOpsjoner         |                                                                                                                                                                                                                                                                                | 2021                   | BeløpSomHeltall |
| korrigertSkattForEtterbetaltPensjonOgTrygdeytelse    | [beregnet skatt korrigert ved etterbetalte pensjoner og trygdeytelser](https://data.skatteetaten.no/web/datakatalog/begrep/367f2c86-a9e1-11e8-8514-005056821322)                                                                                                               | 2021                   | BeløpSomHeltall |
| skattefradragForBetaltKildeskattPaaRenterOgRoyaltyMv |                                                                                                                                                                                                                                                                                | 2021                   | BeløpSomHeltall |

## Skattetillegg

| Felt                               | Beskrivelse                                                                                                                                                               | Gjelder fra inntektsår | Type            |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|-----------------|
| skattAvEngangutbetalingFraIPATilBo | [Skatt av engangsutbetaling fra individuell pensjonsavtale til bo](https://data.skatteetaten.no/web/datakatalog/begrep/649cbce7-ad07-11e8-8ffd-005056821322)              | 2021                   | [Skatt](#skatt) |
| skattAvEngangserstatningTilBarn    | [Særskilt fastsatt skatt for barn på engangserstatning eller engangsutbetaling](https://data.skatteetaten.no/web/datakatalog/begrep/367f2ccf-a9e1-11e8-8514-005056821322) | 2021                   | BeløpSomHeltall |
| skattetilleggVedBSU                | [Skattetillegg ved vilkårsbrudd for boligsparing for ungdom](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cd3-a9e1-11e8-8514-005056821322)                    | 2021                   | BeløpSomHeltall |

## OevrigeResultaterAvBeregning

| Felt                                                                           | Beskrivelse                                                                                                                                          | Gjelder fra inntektsår | Type                                                                                                                                  | 
|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| underskuddTilFramfoeringSenereAar                                              | [Underskudd i inntekt til fremføring senere år](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cd6-a9e1-11e8-8514-005056821322)            | 2021                   | BeløpSomHeltall                                                                                                                       |
| alminneligInntektFoerSaerfradrag                                               | [alminnelig inntekt før særfradrag](https://data.skatteetaten.no/web/datakatalog/begrep/e88c7380-5684-11e7-a43d-0050568351d2)                        | 2017                   | BeløpSomHeltall                                                                                                                       |
| anvendtSaerfradrag                                                             | [Anvendt Særfradrag](https://data.skatteetaten.no/web/datakatalog/begrep/649cbcd3-ad07-11e8-8ffd-005056821322)                                       | 2017                   | BeløpSomHeltall                                                                                                                       |
| pensjonsgivendeInntekt                                                         | [Pensjonsgivende inntekt](https://data.skatteetaten.no/web/datakatalog/begrep/649cbce4-ad07-11e8-8ffd-005056821322)                                  | 2021                   | BeløpSomHeltall                                                                                                                       |
| nettoTapVedUtflytting                                                          | [Netto latent tap og andeler mv.ved utflytting](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cad-a9e1-11e8-8514-005056821322)            | 2021                   | BeløpSomHeltall                                                                                                                       |
| nettoGevinstVedUtflytting                                                      | [Netto latent tap på aksjer og andeler mv. ved utflytting](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cad-a9e1-11e8-8514-005056821322) | 2021                   | BeløpSomHeltall                                                                                                                       |
| anvendtSkattefradragVedBSUEget                                                 |                                                                                                                                                      | 2021                   | [Skatt](#skatt)                                                                                                                       |
| anvendtSkattefradragVedBSUOverfoertTilEktefelle                                |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| anvendtSkattefradragVedBSUOverfoertFraEktefelle                                |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| samletGrunnlagForInntektsskattTilKommuneOgFylkeskommuneStatsskattOgFellesskatt |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| negativAlminneligInntektOverfoertTilEktefelle                                  |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| negativAlminneligInntektOverfoertFraEktefelle                                  |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| negativFormueOverfoertFraEktefelle                                             | [negativ formue overført fra ektefelle](https://data.skatteetaten.no/web/datakatalog/begrep/5f90f748-f16f-11e8-bd7b-005056823b15)                    | 2021                   | BeløpSomHeltall                                                                                                                       |
| saerfradragOverfoertTilEktefelle                                               | [særfradrag overført til ektefelle](https://data.skatteetaten.no/web/datakatalog/begrep/5f90f74a-f16f-11e8-bd7b-005056823b15)                        | 2021                   | BeløpSomHeltall                                                                                                                       | 
| saerfradragOverfoertFraEktefelle                                               | [særfradrag overført fra ektefelle](https://data.skatteetaten.no/web/datakatalog/begrep/5f90f749-f16f-11e8-bd7b-005056823b15)                        | 2021                   | BeløpSomHeltall                                                                                                                       |
| underskuddIOrdinaerAlminneligInntektPaaSvalbardTilFremfoeringSenereAar         |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| underskuddIEnkeltpersonforetakPaaSvalbardTilFremfoeringSenereAar               |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| alminneligInntektFoerFordelingsfradrag                                         |                                                                                                                                                      | 2021                   | BeløpSomHeltallMedSkattemessigeEgenskaper                                                                                             |
| fordelingsfradrag                                                              | [fordelingsfradrag](https://data.skatteetaten.no/web/datakatalog/begrep/367f2c93-a9e1-11e8-8514-005056821322)                                        | 2021                   | BeløpSomHeltall                                                                                                                       |
| oevrigFormue                                                                   | [Øvrig formue](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cda-a9e1-11e8-8514-005056821322)                                             | 2021                   | BeløpSomHeltallMedSKattemessigeEgenskaper                                                                                             |
| korrigertGrunnlagForTrinnskatt                                                 |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| fradragSomKanFordelesFritt                                                     | [fradrag som kan fordeles fritt](https://data.skatteetaten.no/web/datakatalog/begrep/367f2c97-a9e1-11e8-8514-005056821322)                           | 2021                   | BeløpSomHeltall                                                                                                                       |
| inntekterSomKanFordelesFritt                                                   | [inntekter som kan fordeles fritt](https://data.skatteetaten.no/web/datakatalog/begrep/367f2ca0-a9e1-11e8-8514-005056821322)                         | 2021                   | BeløpSomHeltall                                                                                                                       |
| samletGjeld                                                                    | [samlet gjeld](https://data.skatteetaten.no/web/datakatalog/begrep/367f2cc6-a9e1-11e8-8514-005056821322)                                             | 2021                   | BeløpSomHeltall                                                                                                                       |
| fremfoerbartSkattefradragForSkattBetaltIUtlandet                               |                                                                                                                                                      | 2021                   | [FremfoerbartSkattefradragForSkattBetaltIUtlandet](#fremfoerbartskattefradragforskattbetaltiutlandet)                                 |
| kildeskattPaaAksjeutbytteTilUtenlandskAksjonaer                                |                                                                                                                                                      | 2021                   | [Skatt](#skatt)                                                                                                                       
| resultaterAvBeregningEtterMetodeVedDobbeltbeskatning                           |                                                                                                                                                      | 2021                   | [ResultaterAvBeregningEtterMetodeVedDobbeltbeskatning](#resultateravberegningettermetodeveddobbeltbeskatning)                         |
| endretSkattToAarEtterInntektsaaretOverfoertTilEktefelle                        |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| endretSkattToAarEtterInntektsaaretOverfoertFraEktefelle                        |                                                                                                                                                      | 2021                   | BeløpSomHeltall                                                                                                                       |
| fremfoerbartSkattefradragForBetaltKildeskattPaaRenterOgRoyaltyMv               |                                                                                                                                                      | 2021                   | [FremfoerbartSkattefradragForBetaltKildeskattPaaRenterOgRoyaltyMv](#fremfoerbartskattefradragforbetaltkildeskattpaarenterogroyaltymv) |

## FremfoerbartSkattefradragForSkattBetaltIUtlandet

| Felt                                                     | Beskrivelse | Gjelder fra inntektsår | Type            |
|----------------------------------------------------------|-------------|------------------------|-----------------|
| inntektsaar                                              |             | 2021                   | Inntektsår      |
| fremfoerbartSkattefradragForFormuesskattBetaltIUtlandet  |             | 2021                   | BeløpSomHeltall |
| fremfoerbartSkattefradragForInntektsskattBetaltIUtlandet |             | 2021                   | BeløpSomHeltall |

## ResultaterAvBeregningEtterMetodeVedDobbeltbeskatning

| Felt                                                                  | Beskrivelse | Gjelder fra inntektsår | Type            |
|-----------------------------------------------------------------------|-------------|------------------------|-----------------|
| globalAlminneligInntektEtterDenAlternativeFordelingsmetoden           |             | 2021                   | BeløpSomHeltall |
| beregnetSkattenedsettelseITrinnskatt                                  |             | 2021                   | BeløpSomHeltall |
| beregnetSkattenedsettelseISkattTilKommuneOgFylkeskommune              |             | 2021                   | BeløpSomHeltall |
| beregnetSkattenedsettelseIFellesskatt                                 |             | 2021                   | BeløpSomHeltall |
| globalAlminneligInntektEtterKreditmetoden                             |             | 2021                   | BeløpSomHeltall |
| beregnetMaksimaltKreditfradragITrinnskatt                             |             | 2021                   | BeløpSomHeltall |
| beregnetMaksimaltKreditfradragIInntektsskattTilKommuneOgFylkeskommune |             | 2021                   | BeløpSomHeltall |
| beregnetMaksimaltKreditfradragIFellesskatt                            |             | 2021                   | BeløpSomHeltall |
| beregnetMaksimaltKreditfradragIFormuesskatt                           |             | 2021                   | BeløpSomHeltall |

## FremfoerbartSkattefradragForBetaltKildeskattPaaRenterOgRoyaltyMv

| Felt                      | Beskrivelse | Gjelder fra inntektsår | Type            |
|---------------------------|-------------|------------------------|-----------------|
| inntektsaar               |             | 2021                   | Inntektsår      |
| fremfoerbartSkattefradrag |             | 2021                   | BeløpSomHeltall |

## Skatt

| Felt                         | Beskrivelse                            | Type            |
|------------------------------|----------------------------------------|-----------------|
| grunnlag                     | grunnlag for den beregnede skatten     | Heltall         |
| beloep                       | den beregnede skatten                  | BeløpSomHeltall |
| kommunefordeltSkatt.kommune  | kommunenummer til kommunefordelt skatt | Tekst           |
| kommunefordeltSkatt.grunnlag | grunnlag for kommunefordelt skatt      | Heltall         |
| kommunefordeltSkatt.beloep   | kommunefordelt skatt                   | BeløpSomHeltall |

## Informasjonsmodell - skjema

[![BeregnetSkattv2](../../static/download/BeregnetSkatt_v2.png)](../../static/download/BeregnetSkatt_v2.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-6">

## Tenor testdatasøk

Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Beregnet skatt".

</TabItem>
</Tabs>


