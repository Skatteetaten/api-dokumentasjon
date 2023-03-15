---
title: Tjenestepensjonsavtale API
slug: /api/tjenestepensjonsavtale
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API, Inntekt, Tjenestepensjonsavtale]
keywords: [tjenestepensjonsavtale] 
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjeneste hvor pensjonsinnretninger kan registrere, oppdatere og slette opplysninger om pensjonsavtaleforhold. Tjenesten kan også levere informasjon om det foreligger gyldig avtaleforhold mellom arbeidsgiver og pensjonsinnretning.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md) 
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:tjenestepensjonsavtale`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Tjenestepensjonsavtale API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/tjenestepensjonsavtale-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Rettighetspakker
 
| Navn på rettighetspakke |	
|---|
| otp |
 
## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/8018e29d-f608-31b6-965e-00c290386612) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## Hent avtaleforhold gyldighet

### Curl

```bash
$ curl -v -H "Authorization: Bearer {maskinporten_token}" "https://api-test.sits.no/api/tjenestepensjonsavtale/v1/{rettighetspakke}/avtaleforhold/gyldighet?opplysningspliktig=987654321&pensjonsinnretning=123456789&fraOgMed=2020-01&tilOgMed=2020-06"
```

### JSON
```json
{
  "gyldig": "false",
  "maanederUtenGyldigAvtaleforhold": {
    "maaned": [
      "2020-01",
      "2020-02",
      "2020-04"
    ]
  }
}
```
### XML
For svar på XML format, sett header `Accept` til `application/xml`:

```bash
$ curl -v -H "Accept: application/xml" -H "Authorization: Bearer {maskinporten_token}" "https://api-test.sits.no/api/tjenestepensjonsavtale/v1/{rettighetspakke}/avtaleforhold/gyldighet?opplysningspliktig=987654321&pensjonsinnretning=123456789&fraOgMed=2020-01&tilOgMed=2020-06"
```
 
[tjenestepensjonsavtaleAvtaleforholdGyldighet.xsd](../../static/download/tjenestepensjonsavtaleAvtaleforholdGyldighetV1.xsd)

[tjenestepensjonsavtaleAvtaleforholdGyldighet.xml (eksempel)](../../static/download/tjenestepensjonsavtaleAvtaleforholdGyldighet.xml)


## Hent virkningsperiode gyldighet

### Curl

```bash
$ curl -v -H "Authorization: Bearer {maskinporten_token}" "https://api-test.sits.no/api/tjenestepensjonsavtale/v1/{rettighetspakke}/avtaleforhold/virkningsperiode/gyldighet?opplysningspliktig=987654321&pensjonsinnretning=123456789&fraOgMed=2020-01&tilOgMed=2020-06"
```

#### Eksempel på respons
```json
{
    "gyldig": false,
    "maanederUtenforGyldigVirkningsperiode": {
        "maaned": [
            "2020-01",
            "2020-02",
            "2020-03"
        ]
    }
} 
```

## Registrere/endre avtale

### Curl

```bash
$ curl -v -H "Content-Type: application/json" -H "Authorization: Bearer {maskinporten_token}" -X POST -d '{"avtalereferanse" : "referanse til avtale","fraOgMed" : "2020-01","opplysningspliktig" : {"norskIdentifikator" : "999999999"}}' "https://api-test.sits.no/api/tjenestepensjonsavtale/v1/{rettighetspakke}/avtaleforhold"
```
### Dokumentformat

[TjenestepensjonsavtaleAvtaleforholdV1.xsd](../../static/download/TjenestepensjonsavtaleAvtaleforholdV1.xsd)

[TjenestepensjonsavtaleAvtaleforholdV1.json](../../static/download/TjenestepensjonsavtaleAvtaleforholdV1.json)

## Slette avtale

### Curl
  
```bash
$ curl -v -H "Content-Type: application/json" -H "Authorization: Bearer {maskinporten_token}" -X DELETE -d '{"avtalereferanse" : "referanse til avtale","opplysningspliktig" : {"norskIdentifikator" : "999999999"}}' "https://api-test.sits.no/api/tjenestepensjonsavtale/v1/{rettighetspakke}/avtaleforhold"
```
### Dokumentformat

[TjenestepensjonsavtaleAvtaleforholdSlettV1.xsd](../../static/download/TjenestepensjonsavtaleAvtaleforholdSlettV1.xsd)

[TjenestepensjonsavtaleAvtaleforholdSlettV1.json](../../static/download/TjenestepensjonsavtaleAvtaleforholdSlettV1.json)
 
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde |
|----------|-----------------|-------|
| OTP-001 | 500 | Uventet feil på tjenesten.  |
| OTP-002 | 500 | Uventet feil i et bakenforliggende system.  |
| OTP-003 | 404 | Ukjent url benyttet. |
| OTP-004 | 401 | Feil i forbindelse med autentisering.  |
| OTP-005 | 403 | Feil i forbindelse med autorisering.  |
| OTP-006 | 400 | Feil i forbindelse med validering av inputdata. |
| OTP-007 | 404 | Ingen data funnet på oppgitte inputparametere. |
| OTP-008 | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet. |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/c73e4045-9121-39df-adcc-e44161969434) i Felles datakatalog.
 
Obs. Hvis modellene på denne siden avviker fra open api spesifikasjonen på Swaggerhub, er det open api spesifikasjonen som er mest oppdatert. 

Tjenesten tilbyr følgende endepunkt med forskjellige modeller:

* [Opprette eller endre avtaleforhold](../informasjonsmodeller/tjenestepensjonsavtale/avtaleforhold.md) <br /> 
* [Slette avtaleforhold](../informasjonsmodeller/tjenestepensjonsavtale/avtaleforhold_slette.md) <br /> 
* [Sjekk om gyldig avtaleforhold finnes for periode](../informasjonsmodeller/tjenestepensjonsavtale/avtaleforhold_gyldighet.md) <br /> 
* [Sjekk om gyldig virkningsperioden for et avtaleforholdet finnes for periode](../informasjonsmodeller/tjenestepensjonsavtale/virkningsperiode_gyldighet.md) <br />   
  
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søkene for "Tjenestepensjonsavtale" både for personer og virksomheter.
  
## Testdata

Tjenestepensjonsavtaler for personer med adressebeskyttelse fortrolig og strengt fortrolig er ikke søkbare i Tenor, tabell med parter er distribuert via BITS.

</TabItem>
</Tabs>
