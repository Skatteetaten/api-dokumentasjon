---
title: Summert skattegrunnlag API
slug: /summertskattegrunnlag
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API]
keywords: [selvangivelse, skattemelding, SummertSkattegrunnlag, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en person.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
  
Summert skattegrunnlag API vil endres når skattereglene endres, altså årlig. Hvilke felt som er tilgjengelig vil kunne variere etter skattereglene som gjelder for det gitte skatteåret det spørres om data om. Dette vil ikke føre til ny versjon av API'et med mindre annen semantikk endres.

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:summertskattegrunnlag`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Summert skattegrunnlag API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/summert-skattegrunnlag-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

Det tilbys for tiden 2 endepunkter for uthenting av spesifisert summert skattegrunnlag, hvor URL'en har litt ulik oppbygging.

Enkelte rettighetspakker er tilrettelagt for ny URL med stadie:

```bash
GET https://{env}/api/formueinntekt/summertskattegrunnlag/{stadie}/{rettighetspakke}/{inntektsaar}/{personidentifikator}
```

Andre rettighetspakker må fremdeles benytter gammel URL uten stadie, men disse vil etter hvert bli tilrettelagt for ny url:

```bash
GET https://{env}/api/formueinntekt/summertskattegrunnlag/{rettighetspakke}/{inntektsaar}/{personidentifikator}
```

## Rettighetspakker  
 
| Navn på rettighetspakke |	Stadie | Kommentarer |
|---|---|
| distribusjon | oppgjoer | 
| frirettshjelp | oppgjoer | 
| husbanken | oppgjoer | 
| kommuneBoligsosialeFormaal | oppgjoer | Benytt ny url med stadie |
| kommuneForeldrebetaling | oppgjoer og utkast | Benytt ny url med stadie |
| kommunePersonligassistanse | oppgjoer og utkast | Benytt ny url med stadie |
| kommuneLangtidsoppholdInstitusjon | oppgjoer og utkast | Benytt ny url med stadie |
| laanekassen | oppgjoer | 
| ldir | oppgjoer | 
| nav | oppgjoer | 
| ssb | oppgjoer | Benytt ny url med stadie |
| udi | oppgjoer | 
  
## Støttetjenester

### Hendelser
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør hendelser API`

### Siste tilgjengelige skatteoppgjør
[Siste tilgjengelige skatteoppgjør API](./sistetilgjengeligeskatteoppgjoer.md) gir informasjon om hva som er seneste periode med data for en skattepliktig.
  
## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/dc560f2e-e5dd-3d8e-9383-eeb0b3085fce) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON
  
Her er et eksempel på respons for inntektsår 2022 i JSON uten oppgitt stadie.

```json
{
  "personidentifikator": "06888996506",
  "inntektsaar": "2022",
  "skjermet": false,
  "grunnlag": [
    {
      "tekniskNavn": "tapOgAnnenKostnadFraVirtuellEiendel",
      "beloep": 5000,
      "kategori": [
        "inntektsfradrag"
      ]
    },
    {
      "tekniskNavn": "formuesverdiForVirtuellValuta",
      "beloep": 4000000,
      "kategori": [
        "formue"
      ]
    },
    {
      "tekniskNavn": "gevinstVedRealisasjonAvAnnetFinansprodukt",
      "beloep": 20000,
      "kategori": [
        "inntekt"
      ]
    },
    {
      "tekniskNavn": "samletUfoeretrygdFraFolketrygdenEksklusiveEktefelletillegg",
      "beloep": 250000,
      "kategori": [
        "inntekt"
      ]
    }
  ],
  "skatteoppgjoersdato": "2023-01-31"
}
```

Eksempel på respons for inntektsår 2020 med oppgitt stadie 'oppgjoer' i JSON.

```json
{
  "personidentifikator": "12345678910",
  "inntektsaar": "2020",
  "skjermet": false,
  "grunnlag": [
    {
      "tekniskNavn": "samledePaaloepteRenter",
      "beloep": 779981,
      "kategori": [
        "inntektsfradrag"
      ]
    },
    {
      "tekniskNavn": "andreFradragsberettigedeKostnader",
      "beloep": 59981,
      "kategori": [
        "inntektsfradrag"
      ]
    },
    {
      "tekniskNavn": "samletSkattepliktigOverskuddAvUtleieAvFritidseiendom",
      "beloep": 1609981,
      "kategori": [
        "inntekt"
      ]
    },
    {
      "tekniskNavn": "skattepliktigAvkastningEllerKundeutbytte",
      "beloep": 1749981,
      "kategori": [
        "inntekt"
      ]
    }
  ],
  "svalbardGrunnlag": [
    {
      "tekniskNavn": "samledePaaloepteRenter",
      "beloep": 779981,
      "kategori": [
        "inntektsfradrag"
      ]
    },
    {
      "tekniskNavn": "samletAndelAvInntektIBoligselskapEllerBoligsameie",
      "beloep": 849981,
      "kategori": [
        "inntekt"
      ]
    },
    {
      "tekniskNavn": "skattepliktigUtbytteFraAksjerRegistrertIVerdipapirsentralen",
      "beloep": 1779981,
      "kategori": [
        "inntekt"
      ]
    },
    {
      "tekniskNavn": "skattepliktigAvkastningEllerKundeutbytte",
      "beloep": 1749981,
      "kategori": [
        "inntekt"
      ]
    }
  ],
  "skatteoppgjoersdato": "2020-02-11",
  "stadie": "oppgjoer",
  "registreringstidpunkt": "2020-02-11T16:11:12.985"
}
```

Flere eksempler på responser:

[SummertSkattegrunnlag2021.json](../../static/download/summertSkattegrunnlag2021.json)  

[SummertSkattegrunnlag2020.json](../../static/download/summertSkattegrunnlag2020.json)

[SummertSkattegrunnlag2017.json](../../static/download/summertSkattegrunnlag2017.json)

[SummertSkattegrunnlag2016.json](../../static/download/summertSkattegrunnlag2016.json)

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`

```xml
<summertSkattegrunnlag xmlns="urn:no:skatteetaten:datasamarbeid:summertskattegrunnlag:v1">
  <personidentifikator>21839199217</personidentifikator>
  <inntektsaar>2021</inntektsaar>
  <skjermet>false</skjermet>
  <grunnlag>
    <tekniskNavn>samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt</tekniskNavn>
    <beloep>762732</beloep>
    <kategori>inntekt</kategori>
  </grunnlag>
  <grunnlag>
    <tekniskNavn>minstefradragIInntekt</tekniskNavn>
    <beloep>106750</beloep>
    <kategori>inntektsfradrag</kategori>
  </grunnlag>
  <skatteoppgjoersdato>2022-02-10</skatteoppgjoersdato>
</summertSkattegrunnlag>
```

## Tilleggsinformasjon

* For 2015 og 2016 er Svalbard- og fastlandsinformasjon summert sammen. Fra og med 2017 er Svalbard-data skilt ut i svalbardSkjoennsfastsatt og svalbardGrunnlag.
  
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode | HTTP Statuskode | Feilområde                                                                        |
|----------|-----------------|-----------------------------------------------------------------------------------|
| SSG-001  | 500             | Uventet feil på tjenesten.                                                        |
| SSG-002  | 500             | Uventet feil i et bakenforliggende system.                                        |
| SSG-003  | 404             | Ukjent url benyttet.                                                              |
| SSG-004  | 401             | Feil i forbindelse med autentisering.                                             |
| SSG-005  | 403             | Feil i forbindelse med autorisering.                                              |
| SSG-006  | 400             | Feil i forbindelse med validering av inputdata.                                   |
| SSG-007  | 404             | Ikke treff på oppgitt personidentifikator.                                        |
| SSG-008  | 404             | Ingen summert skattegrunnlag funnet på oppgitt personidentifikator og inntektsår. |
| SSG-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                        |
| SSG-010  | 410             | Skattegrunnlag finnes ikke lenger.                                                |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/f78a48e2-8b5c-32fa-90bc-4c0bb8206fef) i Felles datakatalog. 

Obs. Hvis modellene på denne siden avviker fra open api spesifikasjonen på Swaggerhub, er det open api spesifikasjonen som er mest oppdatert. 

## Årsversjoner

| År | Informasjonsmodell |
|-----------|--------|
| 2016 | [Informasjonsmodell for summert skattegrunnlag 2016](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2016.md) |
| 2017 | [Informasjonsmodell for summert skattegrunnlag 2017](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2017.md) |
| 2018 | [Informasjonsmodell for summert skattegrunnlag 2018](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2018.md) |
| 2019 | [Informasjonsmodell for summert skattegrunnlag 2019](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2019.md) |
| 2020 | [Informasjonsmodell for summert skattegrunnlag 2020](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2020.md) |
| 2021 | [Informasjonsmodell for summert skattegrunnlag 2021](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2021.md) |
| 2022 | [Informasjonsmodell for summert skattegrunnlag 2022](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2022.md) |

## Informasjonsmodell - skjema

[![SummertSkattegrunnlag](../../static/download/SummertSkattegrunnlag.png)](../../static/download/SummertSkattegrunnlag.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
  
Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Summert skattegrunnlag".
  
</TabItem>
</Tabs>

