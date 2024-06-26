---
title: Arbeidsgiveravgift API
slug: /api/arbeidsgiveravgift
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Seriøsitet]
keywords: [arbeidsgiveravgift, virksomheter]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<Summary>Tjenesten leverer informasjon om en virksomhet sitt grunnlag for arbeidsgiveravgift pr. 2 måneds termin for de siste tre terminer.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1">

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)
 
## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:arbeidsgiveravgift`

## Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Arbeidsgiveravgift API - På vegne av`

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/arbeidsgiveravgift-api) på SwaggerHub.

 ## Rettighetspakker

| Navn på rettighetspakke |	Egenskaper ved rettighetspakke |
|---|---|
| ebevis | Krever samtykke |
 
## Samtykke
Tjenesten krever [samtykke](../om/samtykke.md).

| Tjenestekode | Formål |
|--------| ------ |
| 5616_3 | Kreves for rettighetspakke `ebevis`|

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/53514316-7696-33cf-8e03-c5f4133f0050) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Curl

Her er et eksempel på en spørring med curl mot tjenesten. Du må ha et gyldig maskinportentoken og altinn samtykketoken som legges ved som headerer i curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" -H "AltinnSamtykke: <samtykke_token>" "https://api-test.sits.no/api/arbeidsgiveravgift/v1/ebevis/974761076"
```
## JSON

```json
{
    "levert": "2020-09-21T09:22:08",
    "forespurteOrganisasjon": "974761076",
    "arbeidsgiveravgifter": [
        {
            "arbeidsgiveravgift": {
                "termin": "mar-apr",
                "aar": "2020",
                "sumavgiftsgrunnlagBeloep": 5269318
            }
        },
        {
            "arbeidsgiveravgift": {
                "termin": "mai-jun",
                "aar": "2020",
                "sumavgiftsgrunnlagBeloep": 4544779
            }
        },
        {
            "arbeidsgiveravgift": {
                "termin": "jul-aug",
                "aar": "2020",
                "sumavgiftsgrunnlagBeloep": 3085645
            }
        }
    ]
}
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.
 
| Feilkode | HTTP Statuskode | Feilområde                                                      |
|----------|-----------------|-----------------------------------------------------------------|
| ARBEIDSGIVERAVGIFT-001 | 500 | Uventet feil på tjenesten.                                      |
| ARBEIDSGIVERAVGIFT-002 | 500 | Uventet feil i et bakenforliggende system.                      |
| ARBEIDSGIVERAVGIFT-003 | 404 | Ukjent url benyttet.                                            |
| ARBEIDSGIVERAVGIFT-004 | 401 | Feil i forbindelse med autentisering.                           |
| ARBEIDSGIVERAVGIFT-005 | 403 | Feil i forbindelse med autorisering.                            |
| ARBEIDSGIVERAVGIFT-006 | 400 | Feil i forbindelse med validering av inputdata.                 |
| ARBEIDSGIVERAVGIFT-007 | 403 | Feil i forbindelse med samtykke.                                |
| ARBEIDSGIVERAVGIFT-008 | 404 | Ingen arbeidsgiveravgift funnet på oppgitt organisasjonsnummer. |
| ARBEIDSGIVERAVGIFT-009 | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet.      |
 
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/704618c8-ed35-3b12-a486-5df49713e707) i Felles datakatalog.
 
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke et eget søk i [Tenor](../test/tenor.md) for denne tjenesten, men testdata kan finnes i Tenor med søket for "Inntekt A-ordning".
 
</TabItem>
</Tabs>


