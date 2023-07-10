---
title: Hendelser
slug: /api/hendelser
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Støttetjeneste, Hendelser]
keywords: [datatables, tables, grids, markdown, multimarkdown, jquery plugins]
last_updated: Des 1, 2022
hide_table_of_contents: true
---
<summary>Tjenestene leverer løpende varslinger om personer/virksomheter med nye eller endrede opplysninger tilgjengelig.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

Hendeleslistene er støttetjenester som gir informasjon om endringer i datasett som leveres av Skatteetatens datatjenester, og henger tett sammen med relatert oppslagstjeneste. Se mer informasjon på [egen side](../om/bruk.md).
  
Hendelseslistene navigeres vha. sekvensnummer og er paginert.
  
For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md) 
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)
  
## Scope

Man trenger ikke egne scope for hendelseslistene, de benytter samme scope som relaterte oppslagstjenester:
  
| Hendelsesliste |  Scope |
|---|---|
| Inntekt hendelser API| skatteetaten:inntekt |
| Mva-melding hendelser API| skatteetaten:mvamelding |
| Mva-register – avgiftssubjekter med skattemeldingsplikt hendelser API | skatteetaten:mvaregisteravgiftssubjekt |
| Næringsspesifikasjon hendelser API| skatteetaten:naeringsspesifikasjon |
| Skattepliktig hendelser API | skatteetaten:skattepliktig |
| Skatteoppgjør hendelser API | skatteetaten:spesifisertsummertskattegrunnlag, skatteetaten:summertskattegrunnlag, skatteetaten:beregnetskatt, skatteetaten:avregning, skatteetaten:skatteplikt, skatteetaten:pensjonsgivendeinntekt |
| Skatteoppgjør upersonlig hendelser API | skatteetaten:beregnetskattupersonlig, skatteetaten:skatteberegningsgrunnlagupersonlig, skatteetaten:summertskattegrunnlagupersonlig, skatteetaten:skattepliktupersonlig |
| Skattemelding fastsatt hendelser API | skatteetaten:skattemelding, skatteetaten:summertskattegrunnlag, skatteetaten:spesifisertsummertskattegrunnlag |
| Skattemelding upersonlig hendelser API | skatteetaten:skattemelding, skatteetaten:summertskattegrunnlag, skatteetaten:spesifisertsummertskattegrunnlag |
| Skattemelding utkast hendelser API | skatteetaten:skattemelding |
| Tilleggsskatt hendelser API | skatteetaten:tilleggsskatt |
    
## Delegering
Delegering i Altinn gjøres pr. scope, så tilgang til hendelseslisterer er håndtert hvis oppslagstjenesten er delegert.
  
## Teknisk spesifikasjon
  
Url’er til tjenesten, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonene til hendelseslistene på SwaggerHub:

* [Inntekt hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/inntektsmottaker-hendelser_api)
* [Mva-melding hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-melding-hendelser-api)
* [Mva-register – avgiftssubjekter med skattemeldingsplikt hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/mva-register-avgiftssubjekter-hendelser-api/)
* [Næringsspesifikasjon hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/naeringsspesifikasjon-hendelser-api)
* [Skattepliktig hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattepliktig-hendelser-api)
* [Skatteoppgjør hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skatteoppgjor-hendelser-api)
* [Skatteoppgjør upersonlig hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skatteoppgjor-upersonlig-hendelser-api)  
* [Skattemelding fastsatt hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-fastsatt-hendelser-api)
* [Skattemelding upersonlig hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-upersonlig-hendelser-api)
* [Skattemelding utkast hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-utkast-hendelser-api)
* [Tilleggsskatt hendelser API](https://app.swaggerhub.com/apis/Skatteetaten_Deling/tilleggsskatt-hendelser-api)

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## Hendelsesliste suksess (HTTP status 200) for Inntekstmottaker hendelser
Her er et par eksempler på spørring med curl mot tjenesten. Du må legge sertifikat og nøkkel som parametre til curl-kommandoen.

```bash
$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/innrapportert/inntektsmottaker/hendelser/?fraSekvensnummer=1&antall=5"
```

### JSON 
  
```json
{
    "hendelser": [
        {
            "sekvensnummer": 1,
            "identifikator": "09048000875",
            "gjelderPeriode": "2018"
        },
        {
            "sekvensnummer": 12,
            "identifikator": "20125001158",
            "gjelderPeriode": "2018"
        },
        {
            "sekvensnummer": 23,
            "identifikator": "02043700564",
            "gjelderPeriode": "2018"
        },
        {
            "sekvensnummer": 34,
            "identifikator": "17014200150",
            "gjelderPeriode": "2018"
        },
        {
            "sekvensnummer": 45,
            "identifikator": "17055401993",
            "gjelderPeriode": "2018"
        }
    ]
}
```

### XML

[hendelser.xsd](../../static/download/hendelser.xsd)

[hendelser.xml (eksempel)](../../static/download/hendelser.xml)

## Hendelsesliste suksess (HTTP status 200) for Skattemelding fastsatt hendelser

Skattemelding fastsatt hendelser, Skattemelding utkast hendelser og Skatteoppgjør hendelser inneholder informasjon om registreringstidspunkt og hendelsetype i tillegg.

### Curl
  
```bash
$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/skattemelding/fastsatt/hendelser/?fraSekvensnummer=1&antall=5"
```

### JSON
  
```json
{
  "hendelser": [
    {
      "sekvensnummer": 1,
      "identifikator": "28064701918",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-03-10T09:29:16.000000Z",
      "hendelsetype": "NY"
    },
    {
      "sekvensnummer": 2,
      "identifikator": "29114501318",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-03-10T08:02:43.000000Z",
      "hendelsetype": "NY"
    },
    {
      "sekvensnummer": 3,
      "identifikator": "10038500495",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-04-16T12:29:39.000000Z",
      "hendelsetype": "NY"
    },
    {
      "sekvensnummer": 4,
      "identifikator": "25035401310",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-04-16T11:31:32.000000Z",
      "hendelsetype": "NY"
    },
    {
      "sekvensnummer": 5,
      "identifikator": "01065402439",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-04-16T10:01:03.000000Z",
      "hendelsetype": "NY"
    }
  ]
}
```

## Hendelsesliste suksess (HTTP status 200) for Næringsspesifikasjon hendelser

Næringsspesifikasjon hendelser inneholder også informasjon om registreringstidspunkt, hendelsetype og typeSkattepliktig i tillegg.

### Curl
  
```bash
$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/naeringsspesifikasjon/v1/hendelser/?fraSekvensnummer=1&antall=9"
```

### JSON
  
```json
{
    "hendelser": [
        {
            "sekvensnummer": 1,
            "identifikator": "25038804416",
            "gjelderPeriode": "2020",
            "registreringstidspunkt": "2022-01-19T09:40:03Z",
            "hendelsetype": "NY",
            "typeSkattepliktig": "personligSkattepliktig"
        },
        {
            "sekvensnummer": 2,
            "identifikator": "25015201137",
            "gjelderPeriode": "2020",
            "registreringstidspunkt": "2022-01-25T10:49:19Z",
            "hendelsetype": "NY",
            "typeSkattepliktig": "personligSkattepliktig"
        },
        {
            "sekvensnummer": 3,
            "identifikator": "25015201137",
            "gjelderPeriode": "2020",
            "registreringstidspunkt": "2022-01-25T09:53:30.774522Z",
            "hendelsetype": "NY",
            "typeSkattepliktig": "upersonligSkattepliktig"
        },
        {
            "sekvensnummer": 4,
            "identifikator": "10037819471",
            "gjelderPeriode": "2020",
            "registreringstidspunkt": "2022-02-10T14:04:08Z",
            "hendelsetype": "NY",
            "typeSkattepliktig": "upersonligSkattepliktig"
        },
        {
            "sekvensnummer": 5,
            "identifikator": "29026009527",
            "gjelderPeriode": "2020",
            "registreringstidspunkt": "2022-02-11T12:04:50Z",
            "hendelsetype": "NY",
            "typeSkattepliktig": "personligSkattepliktig"
        },
        {
            "sekvensnummer": 6,
            "identifikator": "02118001764",
            "gjelderPeriode": "2020",
            "registreringstidspunkt": "2022-02-21T11:50:57.626248Z",
            "hendelsetype": "NY",
            "typeSkattepliktig": "personligSkattepliktig"
        },
        {
            "sekvensnummer": 7,
            "identifikator": "24065600842",
            "gjelderPeriode": "2020",
            "registreringstidspunkt": "2022-01-18T14:24:01Z",
            "hendelsetype": "NY",
            "typeSkattepliktig": "personligSkattepliktig"
        },
        {
            "sekvensnummer": 8,
            "identifikator": "24085701718",
            "gjelderPeriode": "2020",
            "registreringstidspunkt": "2022-01-14T16:34:22Z",
            "hendelsetype": "NY",
            "typeSkattepliktig": "personligSkattepliktig"
        },
        {
            "sekvensnummer": 9,
            "identifikator": "15124802560",
            "gjelderPeriode": "2020",
            "registreringstidspunkt": "2022-01-18T13:46:27Z",
            "hendelsetype": "NY",
            "typeSkattepliktig": "personligSkattepliktig"
        }
    ]
}
```

### XML

[hendelser.xsd](../../static/download/hendelser_utvidet.xsd)

[hendelser.xml (eksempel)](../../static/download/hendelser_skattemelding_fastsatt.xml)

### Første sekvensnummer fra dato suksess (HTTP status 200)

```bash
$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/innrapportert/inntektsmottaker/hendelser/start?dato=2017-08-01"
```

```json
{
    "sekvensnummer": 21
}
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. 

| Feilkode | HTTP Statuskode | Feilområde                                                 |
|----------|-----------------|------------------------------------------------------------|
| FA-001   | 500 | Uventet feil på tjenesten.                                 |
| FA-002   | 404 | Ukjent url benyttet.                                       |
| FA-003   | 401 | Feil i forbindelse med autentisering.                      |
| FA-004   | 400 | Feil i forbindelse med validering av inputdata.            |
| FA-005   | 404 | Ingen hendelser funnet for oppgitt input.                  |
| FA-006   | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet. |

Obs. oversikten over gjelder ikke for [Mva-melding hendelser API](./mvamelding.md?tab=Feilkoder) og [Mva-register – avgiftssubjekter med skattemeldingsplikt hendelser API](./mvaregisteravgiftssubjekt.md?tab=Feilkoder) hvor hendelseslisten er knyttet tettere sammen med oppslagstjenesten, se derfor feilkoder for tjenesten.

  
</TabItem>
</Tabs>

