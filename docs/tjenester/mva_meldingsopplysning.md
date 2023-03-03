---
title: Mva meldingsoppslysning API
slug: /mva_meldingsopplysning
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API reference]
keywords: [mva, meldingsopplysning]
last_updated: Des 2, 2022
hide_table_of_contents: true
---
<summary>Tjenesten leverer status på mva-melding og informasjon fra reskontro for en virksomhet for de siste tre terminene.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md) 
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:mvameldingsopplysning`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Mva meldingsopplysning API - På vegne av`

## Samtykke
For rettighetspakke `Ebevis` kreves [samtykke](../om/samtykke.md) for denne tjenesten.

| Tjeneste | Tjenestekode |
|--------| ------ |
| MVA Meldingsopplysning API | 5616_4 |

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-meldingsopplysning-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/38eb829e-33cb-3976-b789-5209c926473e) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Curl

Her er et eksempel på en spørring med curl mot tjenesten. Du må ha et gyldig maskinportentoken og altinn samtykketoken som legges ved som headerer i curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" -H "AltinnSamtykke: <samtykke_token>" "https://api-test.sits.no/api/mvamelding/v1/ebevis/974761076"
```
## JSON

```json
{
    "levert": "2020-09-21T10:11:25.117551",
    "forespurteOrganisasjon": "974761076",
    "mvaAlminneligNaering": {
        "skattemeldingsplikt": {
            "termintype": "toMaanedlig",
            "foersteTermin": {
                "termin": "mar-apr",
                "aar": "2004"
            },
            "sisteTermin": {
                "termin": null,
                "aar": null
            }
        },
        "ansvarligForMvaMelding": {
            "organisasjonsnummer": "974761076",
            "organisasjonsnavn": "SKATTEETATEN AS"
        },
        "samletFastsattOgReskontrofoertForTermin": [
            {
                "gjelderTermin": {
                    "termin": "jan-feb",
                    "aar": "2020"
                },
                "fastsettingsperiodeStatus": "meldingLevertUnderBehandling",
                "erMyndighetsfastsatt": null,
                "grunnMyndighetsfastsatt": null,
                "mvaAvgift": null,
                "mvaGrunnlag": null
            },
            {
                "gjelderTermin": {
                    "termin": "mar-apr",
                    "aar": "2020"
                },
                "fastsettingsperiodeStatus": "meldingLevertUnderBehandling",
                "erMyndighetsfastsatt": null,
                "grunnMyndighetsfastsatt": null,
                "mvaAvgift": null,
                "mvaGrunnlag": null
            },
            {
                "gjelderTermin": {
                    "termin": "mai-jun",
                    "aar": "2020"
                },
                "fastsettingsperiodeStatus": "meldingIkkeLevert",
                "erMyndighetsfastsatt": null,
                "grunnMyndighetsfastsatt": null,
                "mvaAvgift": null,
                "mvaGrunnlag": null
            }
        ]
    }
}
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. 

| Feilkode | HTTP Statuskode | Feilområde |
|----------|-----------------|-------|
| MVA-MELDINGSOPPLYSNING-001 | 500 | Uventet feil på tjenesten.  |
| MVA-MELDINGSOPPLYSNING-002 | 500 | Uventet feil i et bakenforliggende system.  |
| MVA-MELDINGSOPPLYSNING-003 | 404 | Ukjent url benyttet. |
| MVA-MELDINGSOPPLYSNING-004 | 401 | Feil i forbindelse med autentisering.  |
| MVA-MELDINGSOPPLYSNING-005 | 403 | Feil i forbindelse med autorisering.  |
| MVA-MELDINGSOPPLYSNING-006 | 400 | Feil i forbindelse med validering av inputdata. |
| MVA-MELDINGSOPPLYSNING-007 | 403 | Feil i forbindelse med samtykke.  |
| MVA-MELDINGSOPPLYSNING-008 | 404 | Ingen meldingsopplysninger funnet på oppgitt organisasjonsnummer. |
| MVA-MELDINGSOPPLYSNING-009 | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
| MVA-MELDINGSOPPLYSNING-010 | 404 | Ikke treff på oppgitt organisasjonsnummer. |
 
</TabItem> 
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

 [Informasjonsmodell](https://data.norge.no/informationmodels/61726311-9a02-3ccc-adcd-0a18f3a059d4) i Felles datakatalog.
 
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke Tenor-adapter for Mva meldingsopplysning API.

## Testdata
Mva meldingsopplysning API har for nå kun enkle mockdata, med en statisk mocket respons. For å kunne teste API'et er det nok å benytte et syntetisk organisasjonsnummer som har et samtykke. Syntetiske organisasjonsnumre finner du i [Tenor testdatasøk](../test/tenor.md).
 
</TabItem>
</Tabs>
