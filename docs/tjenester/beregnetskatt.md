---
title: Beregnet skatt API
slug: /beregnetskatt
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API]
keywords: [beregnetskatt, skatteberegning, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon om inntekt, fradrag, formue, gjeld og beregnet skatt.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
  
## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:beregnetskatt`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Beregnet skatt API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/beregnet-skatt-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

Det finnes for tiden 2 versjoner av denne tjenesten, og ulike rettighetspakker er støttet i ulike versjoner. 
  
## Rettighetspakker

| Navn på rettighetspakke | Egenskaper ved rettighetspakke |
|---|---|
| distribusjon | Støttes kun i versjon 1 |
| husbanken | Støttes kun i versjon 1 |
| kommuneLangtidsoppholdInstitusjon | Støttes kun i versjon 2 |
| kredittopplysning | Støttes kun i versjon 2 |
| laanekassen | Støttes kun i versjon 1 |
| nav | Støttes kun i versjon 1 |
| norgesbank | Støttes kun i versjon 1 |
| pensjonskasse | Støttes kun i versjon 1 |
| ssb | Støttes kun i versjon 2 |

## Støttetjenester

For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør hendelser API`
  
## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/2b161294-9c82-30ff-854b-de007482f2b6) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON
Fastland og Svalbard

```json
{
  "personidentifikator": "12345678910",
  "inntektsaar": "2019",
  "skjermet": false,
  "sumSaerfradrag": 123,
  "tolvdeler": 12,
  "skatteklasse": "6",
  "nettoformue": 1234500,
  "nettoinntekt": 504321,
  "utlignetSkatt": 654321,
  "formueskattStat": 5489,
  "formueskattKommune": 1111,
  "kreditfradragFormue": 852,
  "kreditfradragInntekt": 5698,
  "alminneligInntektFoerSaerfradrag": 4587,
  "skatteoppgjoersdato": "2020-04-07",
  "skatteregnskapskommune": "7015",
  "svalbardLoennLoennstrekkordningen": 54331,
  "svalbardPensjonLoennstrekkordningen": 7894,
  "svalbardLoennUtenTrygdeavgiftLoennstrekkordningen": 457,
  "svalbardNettoformue": 7896,
  "svalbardNettoinntekt": 45870,
  "svalbardUtlignetSkatt": 4258,
  "svalbardUfoeretrygdLoennstrekkordningen": 7412,
  "svalbardSkattOrdinaerAlminneligInntekt": 89547,
  "svalbardFormueskatt": 7863,
  "svalbardFastsattSkattEtterLoennstrekkordningen": 478,
  "svalbardSkatteregnskapskommune": "2222"
}
```
Kildeskatt på lønn (kpl)

```json
{
  "personidentifikator": "12345678910",
  "inntektsaar": "2019",
  "skjermet": false,
  "kildeskattPaaLoennNettoinntekt": 12345,
  "kildeskattPaaLoennNettoformue": 0,
  "kildeskattPaaLoennBetaltSkattOgAvgift": 11973,
  "kildeskattPaaLoennPersoninntektLoenn": 24587,
  "kildeskattPaaLoennPersoninntektBarePensjonsdel": 123,
  "kildeskattPaaLoennSkatteregnskapskommune": "2312",
  "kildeskattPaaLoennSkatteklasse": "1"
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<beregnetSkatt xmlns="no:skatteetaten:datasamarbeid:beregnetskatt:v1">
   <personidentifikator>12899699481</personidentifikator>
   <inntektsaar>2020</inntektsaar>
   <tolvdeler>12</tolvdeler>
   <skatteklasse>1</skatteklasse>
   <nettoformue>2455120</nettoformue>
   <nettoinntekt>1367403</nettoinntekt>
   <utlignetSkatt>518063</utlignetSkatt>
   <skjermet>false</skjermet>
   <formueskattStat>1433</formueskattStat>
   <formueskattKommune>6686</formueskattKommune>
   <alminneligInntektFoerSaerfradrag>1367403</alminneligInntektFoerSaerfradrag>
   <skatteoppgjoersdato>2021-09-14</skatteoppgjoersdato>
   <skatteregnskapskommune>5421</skatteregnskapskommune>
</beregnetSkatt>
```
  
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode | HTTP Statuskode | Feilområde |
|----------|-----------------|-------|
| BSA-001 | 500 | Uventet feil på tjenesten.  |
| BSA-002 | 500 | Uventet feil i et bakenforliggende system.  |
| BSA-003 | 404 | Ukjent url benyttet. |
| BSA-004 | 401 | Feil i forbindelse med autentisering.  |
| BSA-005 | 403 | Feil i forbindelse med autorisering.  |
| BSA-006 | 400 | Feil i forbindelse med validering av inputdata. |
| BSA-007 | 404 | Ingen beregnet skatt funnet på oppgitt gitt inntektsår og identifikator. |
| BSA-008 | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
| BSA-009 | 404 | Ikke treff på oppgitt identifikator. |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/1ee98d61-eb44-33c9-96aa-822b898abed5) i Felles datakatalog. 

Obs. Hvis denne siden avviker fra open api spesifikasjonen på Swaggerhub, er det open api spesifikasjonen som er mest oppdatert.

I listen under vises navn på de ulike feltene tjenesten leverer. Ta kontakt med Skatteetaten for å finne ut hvilken rettighetspakke som er aktuell for din organisasjon og hvilke felter den aktuelle rettighetspakken returnerer.

<br />

| Navn på felt | Beskrivelse | Gjelder 2016 | Gjelder 2017 | Gjelder 2018 | Gjelder 2019 | Gjelder 2020 |
|--------------|-------------|--------------|--------------|--------------| -------------|---------------|
| personidentifikator | Gjeldene personidentifikator for personen det ble søkt på | X | X | X | X | X |
| inntektsaar | Inntektsåret det ble søkt på | X | X | X | X | X |
| sumSaerfradrag |[Anvendt Særfradrag](https://data.skatteetaten.no/begrep/anvendt%20s%C3%A6rfradrag)| X | X | X | X | X |
| personinntektLoenn |[Personinntekt fra lønnsinntekt](https://data.skatteetaten.no/begrep/personinntekt%20fra%20l%C3%B8nnsinntekt)| X | X | X | X | X |
| personinntektFiskeFangstFamiliebarnehage | [personinntekt fra fiske, fangst og barnepass i barnepasserens hjem](https://data.skatteetaten.no/begrep/367f2cb9-a9e1-11e8-8514-005056821322)| X | X | X | X | X |
| personinntektNaering | [personinntekt fra næringsinntekt](https://data.skatteetaten.no/begrep/367f2cbb-a9e1-11e8-8514-005056821322)| X | X | X | X | X |
| personinntektBarePensjonsdel |[personinntekt som medlem i pensjonsdel](https://data.skatteetaten.no/begrep/367f2cc1-a9e1-11e8-8514-005056821322)| X | X | X | X | X |
| tolvdeler | [Antall anvendte tolvdeler ved arbeidsopphold i Norge](https://data.skatteetaten.no/begrep/98da4353-dff2-11e7-a0fd-005056821322)| X | X | X | X | X |
| skatteklasse | [Skatteklasse](https://data.skatteetaten.no/begrep/skatteklasse)| X | X | X | X | X |
| nettoformue | [Nettoformue](https://data.skatteetaten.no/begrep/649cbce3-ad07-11e8-8ffd-005056821322)| X | X | X | X | X |
| nettoinntekt | [alminnelig inntekt før særfradrag](https://data.skatteetaten.no/begrep/e88c7380-5684-11e7-a43d-0050568351d2)| | X | X | X | X |
| utlignetSkatt | [Beregnet skatt](https://data.skatteetaten.no/begrep/beregnet%20skatt)| X | X | X | X | X |
| svalbardLoennLoennstrekkordningen |[lønnsinntekt med trygdeavgiftsplikt omfattet av lønnstrekkordningen](https://data.skatteetaten.no/begrep/367f2ca4-a9e1-11e8-8514-005056821322)| X | X | | | |
| svalbardPensjonLoennstrekkordningen |[pensjonsinntekt omfattet av lønnstrekkordningen](https://data.skatteetaten.no/begrep/367f2cb8-a9e1-11e8-8514-005056821322)| X | X | | | |
| svalbardPersoninntektNaering |[personinntekt fra næringsinntekt](https://data.skatteetaten.no/begrep/367f2cbb-a9e1-11e8-8514-005056821322)| X | X | X | X | X |
| svalbardLoennUtenTrygdeavgiftLoennstrekkordningen |[lønnsinntekt uten trygdeavgiftsplikt omfattet av lønnstrekkordningen](https://data.skatteetaten.no/begrep/367f2ca5-a9e1-11e8-8514-005056821322)| X | X | | | |
| svalbardNettoformue |[Nettoformue](https://data.skatteetaten.no/begrep/649cbce3-ad07-11e8-8ffd-005056821322)| X | X | X | X | X |
| svalbardNettoinntekt |[alminnelig inntekt før særfradrag](https://data.skatteetaten.no/begrep/e88c7380-5684-11e7-a43d-0050568351d2)| | X | X | X | X |
| svalbardUtlignetSkatt | [Beregnet skatt](https://data.skatteetaten.no/begrep/beregnet%20skatt)| X | X | X | X | X |
| svalbardUfoeretrygdLoennstrekkordningen |[uføreytelse omfattet av lønnstrekkordningen](https://data.skatteetaten.no/begrep/367f2cd5-a9e1-11e8-8514-005056821322)| X | X | | | |
| skjermet | se [skjerming](../om/skjerming.md)| X | X | X | X | X |
| formueskattStat | [Formueskatt til stat](https://data.skatteetaten.no/begrep/649cbcd8-ad07-11e8-8ffd-005056821322)| | X | X | X | X |
| formueskattKommune |[Fomrueskatt til kommune](https://data.skatteetaten.no/begrep/649cbcd7-ad07-11e8-8ffd-005056821322)| | X | X | X | X |
| kreditfradragInntekt |[skattefradrag for inntektsskatt betalt i utlandet](https://data.skatteetaten.no/begrep/649cbcea-ad07-11e8-8ffd-005056821322)| | X | X | X | X |
| kreditfradragFormue |[skattefradrag for formuesskatt betalt i utlandet](https://data.skatteetaten.no/begrep/6c325d62-ff95-11e8-a756-005056823b15)| | X | X | X | X |
| alminneligInntektFoerSaerfradrag |[alminnelig inntekt før særfradrag](https://data.skatteetaten.no/begrep/e88c7380-5684-11e7-a43d-0050568351d2)| | X | X | X | X |
| skatteoppgjoersdato || | X | X | X | X |
| skatteregnskapskommune | [skatteregnskapskommune](https://data.skatteetaten.no/begrep/skatteregnskapskommune)| | X | X | X | X |
| svalbardSkattOrdinaerAlminneligInntekt | | | X | X | X | X |
| svalbardFormueskatt |[Formueskatt til stat](https://data.skatteetaten.no/begrep/649cbcd8-ad07-11e8-8ffd-005056821322)| | X | X | X | X |
| svalbardFastsattSkattEtterLoennstrekkordningen | | | X | X | X | X |
| svalbardSkatteregnskapskommune |[skatteregnskapskommune](https://data.skatteetaten.no/begrep/skatteregnskapskommune)| | | X | X | X |
| kildeskattPaaLoennNettoinntekt |[alminnelig inntekt før særfradrag](https://data.skatteetaten.no/begrep/e88c7380-5684-11e7-a43d-0050568351d2)| | | | X | X |
| kildeskattPaaLoennNettoformue |[Nettoformue](https://data.skatteetaten.no/begrep/649cbce3-ad07-11e8-8ffd-005056821322)| | | | X | X |
| kildeskattPaaLoennBetaltSkattOgAvgift |[Beregnet skatt](https://data.skatteetaten.no/begrep/beregnet%20skatt)| | | | X | X |
| kildeskattPaaLoennPersoninntektLoenn |[Personinntekt fra lønnsinntekt](https://data.skatteetaten.no/begrep/personinntekt%20fra%20l%C3%B8nnsinntekt)| | | | X | X |
| kildeskattPaaLoennPersoninntektBarePensjonsdel |[personinntekt som medlem i pensjonsdel](https://data.skatteetaten.no/begrep/367f2cc1-a9e1-11e8-8514-005056821322)| | | | X | X |
| kildeskattPaaLoennSkatteregnskapskommune |[skatteregnskapskommune](https://data.skatteetaten.no/begrep/skatteregnskapskommune)| | | | X | X |


</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Beregnet skatt".
  
</TabItem>
</Tabs>


