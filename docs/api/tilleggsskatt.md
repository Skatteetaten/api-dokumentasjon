---
title: Tilleggsskatt API
slug: /api/tilleggsskatt
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding, Tilleggsskatt]
keywords: [tilleggsskatt, skatteberegning, inntekt, formue]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---
<Summary>Tjenesten leverer informasjon om ilagt tilleggsskatt ved uriktig, eller manglende innlevering av skattemelding.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/tilleggsskatt-api/) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:tilleggsskatt`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Tilleggsskatt API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:
  
| Teknisk navn på rettighetspakker |	
|---|
| ssb |

## Støttetjeneste
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Tilleggsskatt hendelser API`
 
## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/3852cc8b-6dbf-3958-8543-33e81ed1fbfd) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "personidentifikator": "29458540754",
  "inntektsaar": "2024",
  "skjermet": false,
  "vedtakOmTilleggsskatt": [
    {
      "skattekommune": "0301",
      "tilleggsskattFraUriktigeOpplysninger": 0.0,
      "skjerpetTilleggsskattFraUriktigeOpplysninger": 0.0,
      "fradragForTvangsmulkt": 0.0,
      "vedtaksdatoForTilleggsskatt": "2025-03-07"
    }
  ]
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<tilleggsskatt xmlns="urn:no:skatteetaten:datasamarbeid:tilleggsskatt:v1">
  <personidentifikator>29458540754</personidentifikator>
  <inntektsaar>2024</inntektsaar>
  <skjermet>false</skjermet>
  <vedtakOmTilleggsskatt>
    <skattekommune>0301</skattekommune>
    <tilleggsskattFraUriktigeOpplysninger>0.0</tilleggsskattFraUriktigeOpplysninger>
    <skjerpetTilleggsskattFraUriktigeOpplysninger>0.0</skjerpetTilleggsskattFraUriktigeOpplysninger>
    <fradragForTvangsmulkt>0.0</fradragForTvangsmulkt>
    <vedtaksdatoForTilleggsskatt>2025-03-07</vedtaksdatoForTilleggsskatt>
  </vedtakOmTilleggsskatt>
</tilleggsskatt>
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                     |
|----------|-----------------|----------------------------------------------------------------|
| TSA-001  | 500             | Uventet feil på tjenesten.                                     |
| TSA-002  | 500             | Uventet feil i et bakenforliggende system.                     |
| TSA-003  | 404             | Ukjent url benyttet.                                           |
| TSA-004  | 401             | Feil i forbindelse med autentisering.                          |
| TSA-005  | 403             | Feil i forbindelse med autorisering.                           |
| TSA-006  | 400             | Feil i forbindelse med validering av inputdata.                |
| TSA-007  | 404             | Fant ingen person eller organisasjon på oppgitt identifikator. |
| TSA-008  | 404             | Ingen tilleggsskatt funnet på oppgitt identifikator.           |
| TSA-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.     |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/aee5a3bb-94e1-35d8-91d5-a528119d004a) i Felles datakatalog.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Testdata for denne tjenesten for personlige skatteytere kan finnes i [Tenor](../test/tenor.md) med søket for "Tilleggsskatt".
Ytterligere testdata kan man benytte hendelseslisten for å finne.
  
Obs. Kun organisasjoner som er AS kan ha tilleggsskatt.
  
</TabItem>
</Tabs>
