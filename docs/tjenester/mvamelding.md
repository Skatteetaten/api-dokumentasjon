---
title: Mva-melding API
slug: /mvamelding
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API]
keywords: [selvangivelse, skattemelding, SummertSkattegrunnlag, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer fastsatte mva-meldinger. Fastsatt betyr at skattemeldingen er myndighetsfastsatt, manuelt innlevert, eller automatisk innlevert ved utløp av innleveringsfrist.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:mvamelding`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Mva-melding API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-melding-api/) ligger på SwaggerHub.

Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.
  
## Rettighetspakker
  
| Navn på rettighetspakke |	
|---|
| ssb |
  
## Støttetjenester
  
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Mva-melding hendelser API`

Se egen dokumentasjon om [støttetjenester for hendelser](./hendelser.md).

## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/e4e328cf-6af2-3086-b9ab-9a5dbf3c484d) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "skattegrunnlagOgBeregnetSkatt": {
    "skattleggingsperiode": {
      "periode": "mai-juni",
      "aar": "2022"
    },
    "fastsattMerverdiavgift": 250000.0,
    "mvaSpesifikasjonslinje": [
      {
        "mvaKode": "3",
        "grunnlag": 1000000.0,
        "sats": "25",
        "merverdiavgift": 250000.0
      }
    ]
  },
  "skattepliktig": {
    "organisasjonsnummer": "910150804"
  },
  "meldingskategori": "alminnelig",
  "fastsettingsstatus": {
    "status": "egenfastsattMerverdiavgift"
  },
  "referanse": "180300"
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<mvaMelding>
  <skattegrunnlagOgBeregnetSkatt>
    <skattleggingsperiode>
      <periode>mai-juni</periode>
      <aar>2022</aar>
    </skattleggingsperiode>
    <fastsattMerverdiavgift>250000.0</fastsattMerverdiavgift>
    <mvaSpesifikasjonslinje>
      <mvaKode>3</mvaKode>
      <grunnlag>1000000.0</grunnlag>
      <sats>25</sats>
      <merverdiavgift>250000.0</merverdiavgift>
    </mvaSpesifikasjonslinje>
  </skattegrunnlagOgBeregnetSkatt>
  <skattepliktig>
    <organisasjonsnummer>910150804</organisasjonsnummer>
  </skattepliktig>
  <meldingskategori>alminnelig</meldingskategori>
  <fastsettingsstatus>
    <status>egenfastsattMerverdiavgift</status>
  </fastsettingsstatus>
  <referanse>180300</referanse>
</mvaMelding>
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode | HTTP Statuskode | Feilområde                                                 |
|----------|-----------------|------------------------------------------------------------|
| MVA-001  | 500             | Uventet feil på tjenesten.                                 |
| MVA-002  | 500             | Uventet feil i et bakenforliggende system.                 |
| MVA-003  | 404             | Ukjent url benyttet.                                       |
| MVA-004  | 401             | Feil i forbindelse med autentisering.                      |
| MVA-005  | 403             | Feil i forbindelse med autorisering.                       |
| MVA-006  | 400             | Feil i forbindelse med validering av inputdata.            |
| MVA-007  | 404             | Ingen mva-melding funnet på oppgitt referanse.             |
| MVA-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/886bada4-e540-38a2-99ae-512d99d1ba28) i Felles datakatalog. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke Tenor-adapter for Mva-melding API, men man kan benytt hendelseslisten for å finne referanser man kan benytte for å teste oppslagstjenesten.
  
</TabItem>
</Tabs>

