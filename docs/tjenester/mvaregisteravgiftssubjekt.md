---
title: Mva-register – avgiftssubjekter med skattemeldingsplikt API
slug: /mvaregisteravgiftssubjekt
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API]
keywords: [selvangivelse, skattemelding, SummertSkattegrunnlag, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer infomasjon fra mva-register om avgiftssubjekter med skatteplikt.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:mvaregisteravgiftssubjekt`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Mva-register – avgiftssubjekter med skattemeldingsplikt API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-register-avgiftssubjekter-med-skattemeldingsplikt-api/) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.
  
## Rettighetspakker
  
| Navn på rettighetspakke |	
|---|
| ssb |

## Støttetjenester
  
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Mva-register – avgiftssubjekter med skattemeldingsplikt hendelser API`

## Datakatalog
 
[Datatjenestebeskrivelse] i Felles datakatalog.

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

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
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
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, men man kan benytt hendelseslisten for å finne referanser man kan benytte for å teste oppslagstjenesten.
  
</TabItem>
</Tabs>

