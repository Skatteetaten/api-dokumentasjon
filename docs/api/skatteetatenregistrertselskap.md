---
title: Skatteetaten-registrert selskap API
slug: /api/skatteetatenregistrertselskap
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, skatteetatenregistrertselskap]
last_updated: Jun 7, 2024
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om Skatteetaten-registrerte selskap, som er selskap med plikter ovenfor Skatteetaten uten å være registreringspliktige til Enhetsregisteret.</Summary>

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

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skatteetatenregistrertselskap`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Skatteetaten-registrert selskap API - På vegne av`

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skatteetaten-registrert-selskap-api/) på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| digdir                  |

## Støttetjenester

### Hendelser

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteetaten-registrert selskap hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/data-services/77af33eb-45fb-3c25-88b2-5fbf3e0ca752) i Felles datakatalog.


</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "identifikator": "090090003",
  "selskapetsNavn": "Soli Drapert Feltseng",
  "virksomhetsrelasjon": [
    {
      "ajourholdstidspunkt": "2024-09-11T16:08:18.45733161+02:00",
      "gyldighetstidspunkt": "2024-09-11T16:08:18.45733161+02:00",
      "relasjonstype": "styretsLeder",
      "relatertIdentifikator": {
        "identifikatortype": "taxIdentificationNumber",
        "verdi": "29880297226",
        "landkode": "NO"
      }
    }
  ],
  "stiftelsesdato": "2024-08-05",
  "postadresse": {
    "ajourholdstidspunkt": "2024-09-11T16:08:18.45733161+02:00",
    "norskAdresse": {
      "adressetekst": [
        "Øvre Kleivegate 14"
      ],
      "postnummer": "4005",
      "poststedsnavn": "STAVANGER"
    }
  }
}

```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                                         |
|----------|-----------------|------------------------------------------------------------------------------------|
| SRS-001  | 500             | Uventet feil på tjenesten.                                                         |
| SRS-002  | 500             | Uventet feil i et bakenforliggende system.                                         |
| SRS-003  | 404             | Ukjent url benyttet.                                                               |
| SRS-004  | 401             | Feil i forbindelse med autentisering.                                              |
| SRS-005  | 403             | Feil i forbindelse med autorisering.                                               |
| SRS-006  | 400             | Feil i forbindelse med validering av inputdata.                                    |
| SRS-007  | 404             | Fant ikke opplysninger om skatteetaten-registrert selskap på angitt identifikator. |
| SRS-008  | 404             | Ingen treff på oppgitt identifikator.                                              |
| SRS-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                         |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Informasjonsmodell kommer i Felles datakatalog.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, så testdata er derfor listet her.

Det kan gjøres oppslag på følgende identifikatorer:

| Identifikator |
|---------------|
| 090090003 |
| 090090011 |
| 090090038 |


</TabItem>
</Tabs>
