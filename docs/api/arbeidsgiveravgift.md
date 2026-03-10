---
title: Arbeidsgiveravgift API
slug: /api/arbeidsgiveravgift
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Seriøsitet]
keywords: [arbeidsgiveravgift, virksomheter]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---
<Summary>Tjenesten leverer informasjon om en virksomhet sitt grunnlag for arbeidsgiveravgift pr. 2 måneds termin for de siste tre terminer.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1">

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/arbeidsgiveravgift-api) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:arbeidsgiveravgift`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Arbeidsgiveravgift API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får tilgang til i API-et bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Skatteetaten har laget en selvbetjeningsløsning som gir virksomheter [innsyn i egne rettighetspakker](https://rettighetspakke-innsyn.skatteetaten.no/), og lister derfor ikke lengre rettighetspakkene på Github. Se egen dokumentasjon om [hvordan logge inn](https://skatteetaten.github.io/api-dokumentasjon/anvendelsesomraader/deling-skatteetaten#innsyn-i-rettighetspakker).
 
### Samtykke

For rettighetspakke `ebevis` kreves [samtykke](../om/samtykke.md) for dette API-et.

#### Samtykke med Altinn 3

Digdir har laget en [ny samtykketjeneste](https://samarbeid.digdir.no/altinn/samtykketjenesten/2337). Ressursid for Arbeidsgiveravgift API er `digdir-arbeidsgiveravgift-skatteetaten`. API-et vil i en overgangsperiode støtte både gammel- og ny samtykketjeneste, og er oppdatert både i eksternt testmiljø og i Produksjon.

#### Samtykke med Altinn 2

| Tjenestekode | Formål |
|--------| ------ |
| 5616_3 | Kreves for rettighetspakke `ebevis`|

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/53514316-7696-33cf-8e03-c5f4133f0050) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

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

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/arbeidsgiveravgift-api).
 
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke et eget søk i [Tenor](../test/tenor.md) for denne tjenesten, men testdata kan finnes i Tenor med søket for "Inntekt A-ordning".
 
</TabItem>
</Tabs>


