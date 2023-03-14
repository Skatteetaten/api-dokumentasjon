---
title: Skattemelding upersonlig API
slug: /skattemeldingupersonlig
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding]
keywords: [selvangivelse, skattemelding, SummertSkattegrunnlag, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer opplysninger som fremkommer i skattemeldingen for en virksomhet.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattemeldingupersonlig`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skattemelding upersonlig API - På vegne av`

## Teknisk spesifikasjon
Skattemelding upersonlig API følger ikke de generelle reglene for [versjonering](../om/versjoner.md), men har en egen versjon pr. inntektsår. For øyeblikket leverer applikasjonen skattemelding for 2022.
  
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-upersonlig-api) ligger i SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

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

## Curl

Her er et eksempel på et kall med curl mot tjenesten for å hente fastsatt skattemelding. Du må legge sertifikat og nøkkel som parametre til curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/skattemeldingupersonlig/v2/fastsatt/ssb/2022/210962492"
```

## JSON

```json
{
  "norskIdentifikator": "824889880",
  "inntektsaar": "2022",
  "spesifikasjonAvSkattefradragForKostnaderTilForskningOgUtvikling": {
    "forskningOgUtviklingsprosjekt": [
      {
        "id": "1c9c453c-a54a-4193-8a0e-e491bda1d5a5",
        "prosjektnummer": 1,
        "prosjekttittel": "2",
        "prosjektperiode": {
          "start": "2022-04-27",
          "slutt": "2022-11-03"
        },
        "prosjektstatus": {
          "status": "8"
        },
        "prosjektkategori": "forskning",
        "samledeKostnaderTidligereAar": 32432,
        "skattefradragForKostnaderTilForskningOgUtvikling": {
          "nettoSkattefradragFoerAvkortingMotAnnenOffentligStoette": 0,
          "tilleggIBeregnetSkattPerProsjekt": 0
        },
        "annenOffentligStoette": {
          "virksomhetskategori": "liten",
          "harOmfattendeSpredningGjennomKonferanserPublikasjonerMv": false,
          "samletBruttoOffentligStoetteIProsjektperioden": 0
        },
        "samledeKostnaderIHeleProsjektperioden": 32432,
        "maksimalGodkjentOffentligStoetteSomAndelAvTotalkostnad": 70.0,
        "vurderingAvOekonomiskeVanskeligheter": {
          "varIOekonomiskeVanskeligheterPaaSoeknadstidspunktet": false
        },
        "maksimaltGodkjentBruttobeloepForOffentligStoette": 22702
      },
      {
        "id": "22ceb123-0f28-4de8-8e5c-dc22c4511a99",
        "prosjektnummer": 1,
        "prosjekttittel": "Me",
        "prosjektperiode": {
          "start": "2022-09-28",
          "slutt": "2022-12-08"
        },
        "prosjektstatus": {
          "dato": "2023-02-09",
          "status": "4"
        },
        "prosjektkategori": "forskning",
        "samledeKostnaderTidligereAar": 0,
        "samletBruttoSkattefradragFraTidligereAar": 0,
        "kostnadIInntektsaaret": {
          "kostnad": 50000,
          "heravPersonalkostnad": 677,
          "antallEgneTimer": 776
        },
        "skattefradragForKostnaderTilForskningOgUtvikling": {
          "nettoSkattefradragFoerAvkortingMotAnnenOffentligStoette": 9500,
          "skattefradragPerProsjekt": 9500
        },
        "erSamarbeidsprosjektMellomFlereVirksomheter": false,
        "annenOffentligStoette": {
          "virksomhetskategori": "liten",
          "harOmfattendeSpredningGjennomKonferanserPublikasjonerMv": false,
          "offentligStoetteSomRedusertArbeidsgiveravgift": 677,
          "samletBruttoOffentligStoetteIProsjektperioden": 677
        },
        "samledeKostnaderIHeleProsjektperioden": 50000,
        "maksimalGodkjentOffentligStoetteSomAndelAvTotalkostnad": 70.0,
        "vurderingAvOekonomiskeVanskeligheter": {
          "varIOekonomiskeVanskeligheterPaaSoeknadstidspunktet": false,
          "grunnlagsdokumentasjon": "aarsregnskap"
        },
        "maksimaltGodkjentBruttobeloepForOffentligStoette": 35000
      }
    ],
    "samletTotalkostnad": 50000,
    "samletSkattefradrag": 9500
  },
  "skjermet": false,
  "registreringstidspunkt": "2023-02-28T17:05:58.823951Z",
  "opprettetDato": "2023-02-28T17:05:58.259609725+01:00"
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode | HTTP Statuskode | Feilområde                                                              |
|----------|-----------------|-------------------------------------------------------------------------|
| SMU-001  | 500             | Uventet feil på tjenesten.                                              |
| SMU-002   | 500             | Uventet feil i et bakenforliggende system.                              |
| SMU-003   | 404             | Ukjent url benyttet.                                                    |
| SMU-004   | 401             | Feil i forbindelse med autentisering.                                   |
| SMU-005   | 403             | Feil i forbindelse med autorisering.                                    |
| SMU-006   | 400             | Feil i forbindelse med validering av inputdata.                         |
| SMU-007   | 404             | Ingen skattemelding funnet på oppgitt gitt inntektsår og identifikator. |
| SMU-008   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.              |
| SMU-009   | 404             | Ingen organisasjon funnet med oppgitt identifikator.                    |
| SMU-010   | 410             | Skattemeldingen finnes ikke lenger.                                     |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/e48e70c9-70b2-3349-9c32-983febe9a2e6) i Felles datakatalog. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">  

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata

| Fødselsnummer | Inntektsår |
|---|---|
| 210962492  | 2021 |
| 310423076  | 2021 |
| 310962074  | 2021 |
| 311768778  | 2021 |
| 312282933  | 2021 |
| 312547678  | 2021 |
| 312737639  | 2021 |
| 313269906  | 2021 |
| 313864138  | 2021 |
| 314093798  | 2021 |
| 314247914  | 2021 |

</TabItem>
</Tabs>

