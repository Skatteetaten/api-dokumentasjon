---
title: Innrapportering A-melding API
slug: /api/innrapportering-amelding
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, A-ordning]
keywords: [grunnlagsdata, a-melding, aordning]
last_updated: Mar 27, 2025
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av A-meldingen (tidligere A02).</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringamelding`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. 

## Systemtilgang med systembruker

Bruk av API-et krever systemtilgang med systembruker, som er ny funksjonalitet i Maskinporten levert av Digdir.
Informasjon vedr. dette finnes [her](../om/systembruker.md).

For å kunne benytte dette api'et med systemtilgang må man gi følgende rettighet til systemet ved opprettelse i systemregisteret:
```JSON
"Rights": [
    {
      "Resource": [
        {
          "value": "ske-innrapportering-amelding",
          "id": "urn:altinn:resource"
        }
      ]
    }
  ]
```

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-amelding-api)

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

### Parameter: idempotencyKey

idempotencyKey parameteren er påkrevet. Innholdet skal være en unik UUID. Hvert nye kall til API-et skal ha en
tilsvarende ny idempotencyKey. Flere etterfølgende POST kall med samme request-body og samme idempotencyKey vil gi den
samme responsen. Kun det første av denne rekken med like API kall vil behandles. IdempotencyKey muliggjør at man trygt
kan prøve innsendinger på nytt der man av ulike årsaker ikke har fått en tilbakemelding fra API-et.

## Datakatalog

Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Innsending

### Eksempel på request URL

```
https://innrapporteringamelding.api.{env}.no/v1/{inntektsaar}
```

### JSON

#### Eksempel på innsending

```
{
  "leveranse": [
    {
      "oppgavegiversLeveranseReferanse": "Leveranse-1",
      "inntektsaar": 2023,
      "oppgavegiver": {
        "organisasjonsnummer": "932061899",     
        "kontaktinformasjon": {
          "navn": "Realt Testutvikling",
          "telefonnummer": "00000000",
          "varselEpostadresse": "anonym.varsel@skatteetaten.no",
          "varselSmsMobilnummer": "00000000"
        }
      },
      "boligselskapFormaal": "bolig",
      "oppgaveoppsummering": {
        "antallOppgaver": 2,
        "sumAndelLikningsverdiBoenhet": 70000,
        "sumAndelSkattepliktigeInntekter": 2500,
        "sumAndelFradragsberettigedeKostnader": 0,
        "sumAndelFormue": 1500,
        "sumAndelGjeld": 39500
      },
      "leveransetype": "ordinaer",
      "kildesystem": "SBS-1",
      "oppgave": [
        {
          "oppgaveeier": {
            "foedselsnummer": "00000000000",
            "navn": "LJILJANA BORLAUG"
          },
          "eiertid": {
            "start": "0101",
            "slutt": "3112"
          },
          "eierandel": {
            "eierandelTeller": 2,
            "eierandelNevner": 10
          },
          "boenhet": {
            "aksjeboenhetsnummer": 11,
            "kommunenummer": "0301",
            "bolignummer": "U1111",
            "gatenavnOgHusnummer": "Øvre Sveig 799 Å"
          },
          "bruksoverlatt": false,
          "andelLikningsverdiBoenhet": 20000,
          "andelSkattepliktigeInntekter": 1000,
          "andelFradragsberettigedeKostnader": 1500,
          "andelFormue": 135183,
          "andelGjeld": 6500
        },
        {
          "oppgaveeier": {
            "foedselsnummer": "00000000000",
            "navn": "ODD TORE JOSEPH"
          },
          "eiertid": {
            "start": "0101",
            "slutt": "3112"
          },
          "eierandel": {
            "eierandelTeller": 8,
            "eierandelNevner": 10
          },
          "boenhet": {
            "aksjeboenhetsnummer": 11,
            "kommunenummer": "0301",
            "bolignummer": "U1111",
            "gatenavnOgHusnummer": "Øvre Sveig 799 Å"
          },
          "bruksoverlatt": false,
          "andelLikningsverdiBoenhet": 50000,
          "andelSkattepliktigeInntekter": 1500,
          "andelFradragsberettigedeKostnader": 0,
          "andelFormue": 540731,
          "andelGjeld": 33000
        }
      ],
      "sletteoppgave": []
    }
  ]
}
```

#### Eksempel på respons

```
{
  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",
  "dialogelementId": "018f5297-fde1-7301-af34-df1bc3fff6b5",
  "oppgavegiversLeveranseReferanse": "leveranse-1",
  "antallOppgaver": 11
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                   |
|----------|-----------------|----------------------------------------------|
| GLD_001  | 500             | Uventet feil på tjenesten                    |
| GLD_005  | 403             | Feil i forbindelse med autorisering          |
| GLD_006  | 400             | Feil i request                               |
| GLD_008  | 400             | Strukturell feil i tilknyttet dataformat     |
| GLD_010  | 400             | Feil i forbindelse med validering av payload |
| GLD_011  | 400             | Feil i metadata                              |
| GLD_017  | 500             | Uspesifisert systemfeil                      |
| GLD_019  | 409             | Idempotensnøkkel er benyttet tidligere       |
| GLD_021  | 404             | Finner ikke forespurt ressurs                |
| GLD_022  | 405             | HTTP-metode ikke støttet                     |

Feilresponsene kan også inneholde en feilspesifiseringskode som presiserer feilen ytterligere.
Tabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.
Dersom det finnes mer detaljert feilinformasjon enn generelt feilområde vil det beskrives i melding, sti og angitt verdi
feltene.

| Feilspesifiseringskode | Feilområde                                     | Årsak                                                                                                                       |
|------------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1022               | Feil i parametre                               | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1023               | Finner ingen ressurs for denne urlen           | Det er ikke noe innhold tilgjengelig på denne URLen                                                                         |
| GLD_1027               | Inntektsår er ikke støttet                     | Det er ikke tillatt å levere på oppgitt inntektsår                                                                          |
| GLD_1028               | Header mangler                                 | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json | Accept header er feil. APIet har kun støtte for json i response                                                             |
| GLD_1047               | Content type må være application/json          | Content-type header er feil. APIet har kun støtte for json i request body                                                   |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

![informasjonsmodell](../../static/download/Informasjonsmodell_Boligselskap.png)
                                                                                                                                                                                                                                                          |
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

I første omgang er test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være med å pilotere løsningene.

### Testmiljøer

For spesifikke URL'er til testmiljø hos Skatteetaten, se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/Amelding-mottak-API).

Digdir benytter TT02 som testmiljø, hvor følgende tilbys:
* Dialogporten
* Autentisering med Maskinporten
* Autorisering med Systembruker
* Altinn innboks

Konsumenter må ha egne testmiljøer som kan kobles mot testmiljøer hos Skatteetaten og Digdir.

### Tenor testdatasøk

TODO

### Testdata

Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatasøk tilbyr dette. Det er ikke tillatt å bruke/sende skarpe data i test pga krav fra GDPR-regelverket.

</TabItem>
<TabItem headerText="Kontakt oss" itemKey="itemKey-6">
  
Har du spørsmål til Skatteetaten om Boligselskap API, kan du sende oss e-post: [altinnreetablering\@skatteetaten.no](mailto:altinnreetablering@skatteetaten.no)  
Vær oppmerksom på at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3.
  
</TabItem>

</Tabs>
