---
title: Mva-register – avgiftssubjekter med skattemeldingsplikt API
slug: /api/mvaregisteravgiftssubjekt
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, MVA]
keywords: [mva]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---
<Summary>Tjenesten leverer infomasjon fra mva-register om avgiftssubjekter med skatteplikt.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/mva-register-avgiftssubjekter-med-skattemeldingsplikt-api/) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:mvaregisteravgiftssubjekt`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Mva-register – avgiftssubjekter med skattemeldingsplikt API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:
  
| Teknisk navn på rettighetspakker |	
|---|
| ssb |

## Støttetjenester
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Mva-register – avgiftssubjekter med skattemeldingsplikt hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/45c47f49-9117-3dbe-84a3-06c64abf3bb3) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "organisasjonsnummer": "313327337",
  "registrertAvgiftssubjekt": {
    "registreringsstatus": "aktiv",
    "foersteregistreringsdato": "2022-01-01",
    "skattemeldingsplikt": [
      {
        "meldingskategori": "alminnelig",
        "skattleggingsperiodetype": "toMaaned",
        "registreringsperiode": {
          "start": "2022-01-01"
        },
        "foersteTermin": {
          "periode": "januar-februar",
          "aar": "2022"
        }
      }
    ]
  }
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.
  
| Feilkode | HTTP Statuskode | Feilområde                                                 |
|----------|-----------------|------------------------------------------------------------|
| MRA-001  | 500             | Uventet feil på tjenesten.                                 |
| MRA-002  | 500             | Uventet feil i et bakenforliggende system.                 |
| MRA-003  | 404             | Ukjent url benyttet.                                       |
| MRA-004  | 401             | Feil i forbindelse med autentisering.                      |
| MRA-005  | 403             | Feil i forbindelse med autorisering.                       |
| MRA-006  | 400             | Feil i forbindelse med validering av inputdata.            |
| MRA-007  | 404             | Ingen treff på opgitt organisasjonsnummer.                 |
| MRA-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell] i Felles datakatalog. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, men man kan benytte hendelseslisten for å finne referanser man kan benytte for å teste oppslagstjenesten.
  
</TabItem>
</Tabs>

