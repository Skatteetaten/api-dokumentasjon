---
title: Skatteplikt API
slug: /skatteplikt
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API]
keywords: [skatteplikt, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon om type skatteplikt og grunnlag for vurdering av skatteplikten for en person.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skatteplikt`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skatteplikt API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skatteplikt-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Rettighetspakker

| Navn på rettighetspakke |	
|---|
| distribusjon |
| ssb |
  
## Støttetjenester
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør hendelser API`
  
## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/0411748d-0f94-3bce-b981-fd2b3930b6b2) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Curl

Her er et eksempel på et kall med curl mot tjenesten. Du må legge sertifikat og nøkkel som parametre til curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/skatteplikt/v2/ssb/2021/05086900124"
```

## JSON

```json
{
    "alderIInntektsaar": 56,
    "inntektsaar": "2021",
    "personidentifikator": "23117323456",
    "saerskiltSkatteplikt": [
        "skattepliktEtterPetroleumsskatteloven"
    ],
    "skattepliktTilNorge": "global",
    "skattepliktTilSvalbard": "begrenset",
    "skattested": "1234",
    "skjermet": false
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<skatteplikt xmlns="urn:no:skatteetaten:datasamarbeid:skatteplikt:v1">
  <personidentifikator>13819699571</personidentifikator>
  <inntektsaar>2021</inntektsaar>
  <skjermet>false</skjermet>
  <skattested>5401</skattested>
  <skattepliktTilNorge>global</skattepliktTilNorge>
  <alderIInntektsaar>24</alderIInntektsaar>
</skatteplikt>
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
    
| Feilkode | HTTP Statuskode | Feilområde |
|----------|-----------------|-------|
| SP-001   | 500 | Uventet feil på tjenesten.  |
| SP-002   | 500 | Uventet feil i et bakenforliggende system.  |
| SP-003   | 404 | Ukjent url benyttet. |
| SP-004   | 401 | Feil i forbindelse med autentisering.  |
| SP-005   | 403 | Feil i forbindelse med autorisering.  |
| SP-006   | 400 | Feil i forbindelse med validering av inputdata. |
| SP-007   | 404 | Ikke treff på oppgitt personidentifikator. |
| SP-008   | 404 | Fant ikke skattepliktsdokument for angitt personidentifikator og år.  |
| SP-009   | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet. |    

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/38123fc0-a4f1-36ee-8908-b6007f053860) i Felles datakatalog.
    
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
  
Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Beregnet skatt", som kan kombineres med egenskaper i søk for “Skatteplikt”.
  
</TabItem>
</Tabs>
