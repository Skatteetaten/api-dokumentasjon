---
title: Pensjonsgivende inntekt for folketrygden API
slug: /api/pgi_folketrygden
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Skatteoppgjør ]
keywords: [ pgi, folketrygden, skatteberegning, inntekt, formue ]
last_updated: Feb 29, 2024
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om grunnlag for pensjonsopptjening i folketrygden.</Summary>

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

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:pensjonsgivendeinntektforfolketrygden`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Pensjonsgivende inntekt for folketrygden API - På vegne av`

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/pensjonsgivendeinntekt-for-folketrygden-api)
på SwaggerHub. 

Tjenesten støtter inntektsår 2017 og utover, men det kan også komme endringer for inntektsår fra og med 1967 til og med 1992.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| navUfoeretrygd          |
| navForeldrepenger       |
| navPleieOgOmsorgspenger |
| navSykepenger           |
| navPensjonopptjening    |
| navEnsligForsoerger     |

## Støttetjenester

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Pensjonsgivende inntekt for folketrygden hendelser API`

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/dataservices/70d7fb70-20e0-3c8e-a05c-0432b182ef3f) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "norskPersonidentifikator": "06489127944",
  "inntektsaar": 2024,
  "pensjonsgivendeInntekt": [
    {
      "datoForFastsetting": "2025-02-05",
      "skatteordning": "FASTLAND"
    }
  ]
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| HTTP status | Feilkode | Feilmelding                                                                        |
|-------------|----------|------------------------------------------------------------------------------------|
| PGIF-001    | 500      | Uventet feil på tjenesten.                                                         |
| PGIF-002    | 500      | Uventet feil i et bakenforliggende system.                                         |
| PGIF-003    | 404      | Ukjent url benyttet.                                                               |
| PGIF-004    | 401      | Feil i forbindelse med autentisering.                                              |
| PGIF-005    | 403      | Feil i forbindelse med autorisering.                                               |
| PGIF-006    | 400      | Feil i forbindelse med validering av inputdata.                                    |
| PGIF-007    | 404      | Ikke treff på oppgitt personidentifikator.                                         |
| PGIF-008    | 404      | Ingen pensjonsgivende inntekt funnet på oppgitt personidentifikator og inntektsår. |
| PGIF-009    | 406      | Feil tilknyttet dataformat. Kun json eller xml er støttet.                         |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">


JSON-objektet er basert på et XML-dokument med et tilknyttet skjema.

## Rotobjekt

Rotobjektet vil alltid returneres ved en positiv repons.

| Navn på felt           | JSON-type | Beskrivelse                                                                                 |
|------------------------|-----------|---------------------------------------------------------------------------------------------|
| personidentifikator    | String    | Gjeldende personidentifikator for personen det ble søkt på                                  |
| inntektsaar            | Number    | Inntektsåret det ble søkt på                                                                |
| pensjonsgivendeInntekt | Array     | En liste med [objekter av pensjonsgivende inntekt](#objekt-i-pensjonsgivendeinntekt-listen) |

## Objekt i pensjonsgivendeInntekt-listen

Definerer objektet som kan ligge i listen pensjonsgivendeInntekt i [rotobjektet](#rotobjekt)

| Navn på felt                                                               | JSON-type | Beskrivelse                                                                                          |
|----------------------------------------------------------------------------|-----------|------------------------------------------------------------------------------------------------------|
| skatteordning                                                              | String    | Skatteordningen det leveres data for. Gyldige verdier er: [FASTLAND, SVALBARD, KILDESKATT_PAA_LOENN] |
| datoForFastsetting                                                         | String    | Dato for fastsetting. Gyldig format [YYYY-MM-DD] (ISO 8601 datoformat)                               |
| pensjonsgivendeInntektAvLoennsinntekt                                      | Number    | Pensjonsgivende lønnsinntekt                                                                         |
| pensjonsgivendeInntektAvLoennsinntektBarePensjonsdel                       | Number    | Pensjonsgivende lønnsinntekt, bare pensjonsdel                                                       |
| pensjonsgivendeInntektAvNaeringsinntekt                                    | Number    | Pensjonsgivende inntekt av næringsinntekt                                                            |
| pensjonsgivendeInntektAvNaeringsinntektFraFiskeFangstEllerFamiliebarnehage | Number    | Pensjonsgivende inntekt av næringsinntekt fra fiske, fangst eller familiebarnehage                   |

## Informasjonsmodell - skjema

### Oversikt

[![Oversikt](../../static/download/pgi-folketrygden/pgi-folketrygden.png)](../../static/download/pgi-folketrygden/pgi-folketrygden.png)

### XML skjema

[pensjonsgivendeinntektforfolketrygden_nav_overfoering_v1.xsd](../../static/download/pgi-folketrygden/pensjonsgivendeinntektforfolketrygden_nav_overfoering_v1.xsd)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Beregnet skatt".

</TabItem>
</Tabs>

