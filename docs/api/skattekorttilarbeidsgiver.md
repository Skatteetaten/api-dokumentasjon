---
title: Skattekort til arbeidsgiver API
slug: /api/skattekorttilarbeidsgiver
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API,Skattekort,Arbeidgiver,Forskudd]
keywords: [skattekort]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---

<Summary>Tjeneste for å hente skattekort for arbeidsgivere</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/bestilling-av_skattekort)

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:forskudd`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang.

## Datakatalog

Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Eksempel på request URL

### bestillSkattekort
Eksempel med 2 arbeidsgivere 
```
{
  "inntektsaar": "2025",
  "bestillingstype": "HENT_ALLE_OPPGITTE",
  "kontaktinformasjon": {
    "epostadresse": "john.smith@example.com",
    "mobiltelefonummer": "+4794123456"
  },
  "varslingstype": "VARSEL_VED_FOERSTE_ENDRING",
  "forespoerselOmSkattekortTilArbeidsgiver": {
    "arbeidsgiver": [
      {
        "arbeidsgiveridentifikator": {
          "organisasjonsnummer": "222121914"
        },
        "arbeidstakeridentifikator": [
          "42059199203",
          "55049199111",
          "13820499748"
        ]
      },
      {
        "arbeidsgiveridentifikator": {
          "organisasjonsnummer": "123456789"
        },
        "arbeidstakeridentifikator": [
          "21908899455",
          "13830197340",
          "24880199664"
        ]
      }
    ]
  }
}
```

## Eksempel på JSON respons

```
Legg inn eksempel
```
Vi støtter også xml i request/respone.

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                                           |
|----------|-----------------|----------------------------------------------------------------------|
| SP-001   | 500             | Uventet feil på tjenesten.                                           |
| SP-002   | 500             | Uventet feil i et bakenforliggende system.                           |
| SP-003   | 404             | Ukjent url benyttet.                                                 |
| SP-004   | 401             | Feil i forbindelse med autentisering.                                |
| SP-005   | 403             | Feil i forbindelse med autorisering.                                 |
| SP-006   | 400             | Feil i forbindelse med validering av inputdata.                      |
| SP-007   | 404             | Ikke treff på oppgitt personidentifikator.                           |
| SP-008   | 404             | Fant ikke skattepliktsdokument for angitt personidentifikator og år. |
| SP-009   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.           |    
| SP-010   | 410             | Skattepliktsdokument finnes ikke lenger.                             |

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Regneark med testpersoner med skattekort i testmiljøet : [testpersoner](../../static/download/skattekort_ekstern_innsending_2025.xlsx).

</TabItem>
<TabItem headerText="Kontakt oss" itemKey="itemKey-6">
  
Har du spørsmål til Skatteetaten om Skattekort til arbeidsgiver API, kan du sende oss e-post: forskudd@skatteetaten.no  
  
</TabItem>
</Tabs>
