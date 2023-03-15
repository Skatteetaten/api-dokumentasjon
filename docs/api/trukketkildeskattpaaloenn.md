---
title: Trukket kildeskatt på lønn API
slug: /api/trukketkildeskattpaaloenn
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør, Trukket kildeskatt på lønn]
keywords: [ SummertSkattegrunnlag, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer opplysninger om trukket kildeskatt på lønn for personer i kildeskatt på lønn ordningen.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
  
## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:trukketkildeskattpaaloenn`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Trukket kildeskatt på lønn - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/trukketkildeskattpaaloenn-api/) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Rettighetspakker
  
| Navn på rettighetspakke |	
|---|
| ssb |

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/06542c2f-0e62-34ba-87d9-b95e61f1de09) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

#### JSON

```json
{
  "personidentifikator": "07088730296",
  "inntektsaar": 2021,
  "skjermet": false,
  "trekkinformasjonPerMaaned": [
    {
      "maaned": "2021-01",
      "grunnlagForSkattetrekk": 63427,
      "skattetrekk": 15856,
      "samletRapportertLoennsinntekt": 63427
    },
    {
      "maaned": "2021-02",
      "grunnlagForSkattetrekk": 36538,
      "skattetrekk": 9134,
      "samletRapportertLoennsinntekt": 36538
    },
    {
      "maaned": "2021-03",
      "grunnlagForSkattetrekk": 33575,
      "skattetrekk": 8225,
      "samletRapportertLoennsinntekt": 33575
    },
    {
      "maaned": "2021-04",
      "grunnlagForSkattetrekk": 15109,
      "skattetrekk": 3701,
      "samletRapportertLoennsinntekt": 15109
    },
    {
      "maaned": "2021-05",
      "grunnlagForSkattetrekk": 47487,
      "skattetrekk": 11744,
      "samletRapportertLoennsinntekt": 47487
    },
    {
      "maaned": "2021-06",
      "grunnlagForSkattetrekk": 32380,
      "skattetrekk": 8037,
      "samletRapportertLoennsinntekt": 32380
    },
    {
      "maaned": "2021-07",
      "grunnlagForSkattetrekk": 26774,
      "skattetrekk": 6674,
      "samletRapportertLoennsinntekt": 26774
    },
    {
      "maaned": "2021-08",
      "grunnlagForSkattetrekk": 26031,
      "skattetrekk": 6377,
      "samletRapportertLoennsinntekt": 26031
    },
    {
      "maaned": "2021-09",
      "grunnlagForSkattetrekk": 40809,
      "skattetrekk": 10000,
      "samletRapportertLoennsinntekt": 40809
    },
    {
      "maaned": "2021-10",
      "grunnlagForSkattetrekk": 43997,
      "skattetrekk": 10884,
      "samletRapportertLoennsinntekt": 43997
    },
    {
      "maaned": "2021-11",
      "grunnlagForSkattetrekk": 33590,
      "skattetrekk": 8502,
      "samletRapportertLoennsinntekt": 33590
    },
    {
      "maaned": "2021-12",
      "grunnlagForSkattetrekk": 43633,
      "skattetrekk": 10907,
      "samletRapportertLoennsinntekt": 43633
    }
  ]
}
```

#### XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<trukketKildeskattPaaLoenn xmlns="urn:no:skatteetaten:datasamarbeid:TrukketKildeskattPaaLoenn:v1">
  <personidentifikator>25860299472</personidentifikator>
  <inntektsaar>2021</inntektsaar>
  <skjermet>false</skjermet>
  <trekkinformasjonPerMaaned>
    <maaned>2021-01</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-02</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-03</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-04</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-05</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-06</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-07</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-08</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-09</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-10</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-11</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
  <trekkinformasjonPerMaaned>
    <maaned>2021-12</maaned>
    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>
    <skattetrekk>2500</skattetrekk>
    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>
  </trekkinformasjonPerMaaned>
</trukketKildeskattPaaLoenn>
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode | HTTP Statuskode | Feilområde                                                           |
|----------|-----------------|----------------------------------------------------------------------|
| TKL-001  | 500             | Uventet feil på tjenesten.                                           |
| TKL-002  | 500             | Uventet feil i et bakenforliggende system.                           |
| TKL-003  | 404             | Ukjent url benyttet.                                                 |
| TKL-004  | 401             | Feil i forbindelse med autentisering.                                |
| TKL-005  | 403             | Feil i forbindelse med autorisering.                                 |
| TKL-006  | 400             | Feil i forbindelse med validering av inputdata.                      |
| TKL-007  | 404             | Ingen kildeskatt funnet på oppgitt gitt inntektsår og identifikator. |
| TKL-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.           |
| TKL-009  | 404             | Ikke treff på oppgitt personidentifikator.                           | 
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/2ac42f82-6c35-3011-be6d-3af931db02bd) i Felles datakatalog. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
  
Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for “Summert skattegrunnlag” med egenskap “Kildeskatt på lønn”.

</TabItem>
</Tabs>

