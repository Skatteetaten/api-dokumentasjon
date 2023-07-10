---
title: Skattepliktig API
slug: /api/skattepliktig
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattepliktig]
keywords: [fastsetting, skattepliktig]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon om navn og adresse for skattepliktige personer.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md) 
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattepliktig`

## Delegering
Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skattepliktig API - På vegne av`

## Teknisk spesifikasjon
Url’er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattepliktig-api) på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
|---|
| distribusjon |
 
## Støttetjeneste
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skattepliktig hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/6ff73921-6666-3e8f-9091-423082b0bfcc) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Curl

Her er et eksempel på en spørring med curl mot tjenesten. Du må legge sertifikat og nøkkel som parametre til curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/part/skattepliktig/distribusjon/18018188888"
```

## JSON

```json
{  
   "person":{  
      "personidentifikator":"18018188888",
      "navn":{  
         "fornavn":"OLA",
         "mellomnavn": "KALED",
         "etternavn":"NORDMANN"
      },
      "bostedsadresse":{  
         "adresse1":"NORD-STATLAND 411 Å",
         "tilleggsadresse":"c/o Per Post",
         "postnummer":"1234",
         "kommunenummer":"1749",
         "registreringsdato":"2017-01-24"
      },
      "postadresse":{  
         "adresse1":"Ole Danviks gate 10",
         "adresse2":"H0101",
         "adresse3":"1234 Oslo",
          "land":{
             "landnummerDsf":"0",
             "landkodeIsoAlfa2":"NO"
          },
         "registreringsdato":"2018-01-20"
      },
      "hjemlandsadresse":{  
         "adresse1":"Kaled Dome 1337 Kaalann, Skaro",
         "adresse2":"Madrid",
         "adresse3":"SPANIA",
         "land":{
            "landnummerDsf":"34",
            "landkodeIsoAlfa2":"ES"
         },
         "registreringsdato":"2016-08-01"
      },
      "doedsdato" :"2018-04-30",
      "klientadresse" :false,
      "utenFastBopel" :false
   },
   "skjermet":false
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`

[skattepliktig.xml (eksempel)](../../static/download/skattepliktig.xml) (vanlig)

[skattepliktig_skjermet.xml (eksempel)](../../static/download/skattepliktig_skjermet.xml) (skjermet person)

[skattepliktig_skjermet_adresse.xml (eksempel)](../../static/download/skattepliktig_skjermet_adresse.xml) (person som bor på institusjon med adresse-skjerming)

[skattepliktig_skjermet_bostedloes.xml (eksempel)](../../static/download/skattepliktig_skjermet_bostedloes.xml) (person som er bostedsløs)

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. 

| Feilkode          | HTTP Statuskode | Feilområde                                                  |
|-------------------|-----------------|-------------------------------------------------------------|
| SKATTEPLIKTIG-001 | 500             | Uventet feil på tjenesten.                                  |
| SKATTEPLIKTIG-002 | 500             | Uventet feil i et bakenforliggende system.                  |
| SKATTEPLIKTIG-003 | 404             | Ukjent url benyttet.                                        |
| SKATTEPLIKTIG-004 | 401             | Feil i forbindelse med autentisering.                       |
| SKATTEPLIKTIG-005 | 403             | Feil i forbindelse med autorisering.                        |
| SKATTEPLIKTIG-006 | 400             | Feil i forbindelse med validering av inputdata.             |
| SKATTEPLIKTIG-007 | 404             | Ingen treff på oppgitt personidentifikator.                 |
| SKATTEPLIKTIG-008 | 404             | Ingen skattepliktig funnet med oppgitt personidentifikator. |
| SKATTEPLIKTIG-009 | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.  |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

 [Informasjonsmodell](https://data.norge.no/informationmodels/62484725-bcff-34e9-b0cd-cf51b7a99908) i Felles datakatalog.
 
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
 
Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Folkeregister". 
 
</TabItem>
</Tabs>


