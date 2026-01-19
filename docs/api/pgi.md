---
title: Pensjonsgivende inntekt API
slug: /api/pgi
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør]
keywords: [pgi, skatteberegning, inntekt, formue]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---
<Summary>Tjenesten leverer informasjon om grunnlag for pensjonsopptjening for pensjonsinnretningene.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/pensjonsgivendeinntekt-api) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:pensjonsgivendeinntekt`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Pensjonsgivende inntekt API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Teknisk navn på rettighetspakker |	
|--------------------------------------|
| maritimPensjonskassePensjonstillegg  |
| pensjonskasseEtteroppgjoerUfoerAfp   |
| pensjonskasseLivsvarigAfpAnnenInntekt |
  
## Støttetjenester
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør hendelser API`
  
## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/4bb0588b-709b-3a1f-8e1f-bbb231138daf) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "personidentifikator": "12345678901",
  "inntektsaar": "2024",
  "pensjonsgivendeInntekt": 100000,
  "pensjonsgivendeInntektFastland": 50000,
  "pensjonsgivendeInntektSvalbard": 50000
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<pensjonsgivendeInntekter xmlns="urn:no:skatteetaten:datasamarbeid:pensjonsgivendeinntekt:v1">
   <personidentifikator>12345678901</personidentifikator>
   <inntektsaar>2024</inntektsaar>
   <pensjonsgivendeInntekt>100000</pensjonsgivendeInntekt>
   <pensjonsgivendeInntektFastland>50000</pensjonsgivendeInntektFastland>
   <pensjonsgivendeInntektSvalbard>50000</pensjonsgivendeInntektSvalbard>
</pensjonsgivendeInntekter>
```
  
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.
  
| Feilkode | HTTP Statuskode | Feilområde |
|----------|-----------------|-------|
| PIA-001 | 500 | Uventet feil på tjenesten.  |
| PIA-002 | 500 | Uventet feil i et bakenforliggende system.  |
| PIA-003 | 404 | Ukjent url benyttet. |
| PIA-004 | 401 | Feil i forbindelse med autentisering.  |
| PIA-005 | 403 | Feil i forbindelse med autorisering.  |
| PIA-006 | 400 | Feil i forbindelse med validering av inputdata. |
| PIA-007 | 404 | Ikke treff på oppgitt personidentifikator. |
| PIA-008 | 404 | Ingen pensjonsgivende inntekt funnet på oppgitt personidentifikator og inntektsår.  |
| PIA-009 | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet. |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/pensjonsgivendeinntekt-api).

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Beregnet skatt".
  
</TabItem>
</Tabs>
