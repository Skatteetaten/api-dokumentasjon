---
title: Krav og betalinger API
slug: /api/kravogbetalinger
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Innkreving]
keywords: [kravogbetalinger, krav og betalinger, innkreving]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjeneste som tilbyr oversikt av krav, innbetalinger og utbetalinger tilhørende en part.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
  
## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:kravogbetalinger`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Krav og betalinger API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/krav-og-betalinger-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

Tjenesten har 4 endepunkter:
  * __Åpne krav__: Hent oversikt over åpne krav og uplasserte innbetalinger. Gjør oppslag mot reskontrosystemene på åpne krav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt
  * __Krav__: Hent alle krav innen et gitt tidsrom. Gjør oppslag mot reskontrosystemene på alle krav innen et gitt tidsrom på maks ett år.
  * __Innbetalinger__: Hent alle innbetalinger innen et gitt tidsrom. Gjør oppslag mot reskontrosystemene på alle innbetalinger innen et gitt tidsrom på maks ett år.
  * __Utbetalinger__: Ikke tilgjengelig for bruk og vil komme senere. Detaljer rundt implementasjonen kan endres.
 
## Rettighetspakker
For denne tjenesten finns følgende rettighetspakker
  
|Navn på rettighetspakke | Formål med rettighetspakke | Egenskaper ved rettighetspakke |
|---|---|---|
| finans | Banker og finansforetak som skal vise krav og betalinger i nettbank | Krever samtykke og gir tilgang til alle 4 endepunkter med oppslag for virksomheter (vil etter hvert bli utvidet også til oppslag for personer) |
| regnskapssystem | Regnskapssystemer som skal vise krav og betalinger i sine sluttbrukersystemer | Krever samtykke og gir tilgang til alle 4 endepunkter med oppslag for virksomheter |

## Samtykke
For rettighetspakkene `finans` og `regnskapssystem` kreves [samtykke](../om/samtykke.md) for denne tjenesten.

| Endepunkt | Tjenestekode |
|--------| ------ |
| Krav og betalinger - Aapne krav | 5928_202301 |
| Krav og betalinger - Krav | 5929_202301 |
| Krav og betalinger - Innbetalinger | 5930_202301 |
| Krav og betalinger - Utbetalinger | 5931_202301 |
  
## Datakatalog
 
Siden dette er en beta-tjeneste, er den pt. ikke publisert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Åpne krav

### Request URL - eksempel

```
https://{env}/api/innkreving/kravogbetalinger/v1/finans/12345678901/aapnekrav
```

### Eksempel på respons

```json
{
  "partIdentifikator": "310478717",
  "aapentKravMedGjenstaaendeBeloep": [
    {
      "kravidentifikator": "krav-1234",
      "kravbeskrivelse": "Restskatt",
      "opprettelsesdatoForKrav": "2022-08-28",
      "kravperiode": "2022/09",
      "opprinneligBeloep": 1000,
      "kravforfall": [
        {
          "forfallsdato": "2022-09-28",
          "opprinneligBeloep": 1000.0,
          "gjenstaaendeBeloep": 1000.0,
          "plassertInnbetaling": [
            {
              "betaltFra": {
                "konto": {}
              },
              "plassertBeloep": -1000,
              "plasseringsdato": "2022-09-28",
              "innbetalingsIdentifikator": "inn-1234"
            }
          ],
          "plassertMotkrav": [],
          "kravforfallsIdentifikator": "6bf527ce-432d-48fe-aba1-cfc2c2d266e5",
          "betalingsinformasjon": {
            "konto": {
              "kontonummer": "27623808268"
            }
          },
          "utsattIverksettelse": false
        }
      ],
      "gjenstaaendeBeloep": 1000,
      "stipulerteRenter": 20.0,
      "kravtype": "RESTSKATT",
      "kravgruppe": "Skatt"
    }
  ],
  "innbetalingMedUplassertBeloep": [
    {
      "partIdentifikator": "310478717",
      "innbetalingsidentifikator": "inn-1234",
      "innbetalingsdato": "2022-09-28",
      "innbetaltBeloep": 1000,
      "plassertInnbetalingMotKrav": [],
      "betaltTilKonto": {
        "kontonummer": "98766543210"
      },
      "betaltFra": {
        "konto": {
          "kontoeiersNavn": "BERIKENDE EVIG KATT HANKATT",
          "kontonummer": "98766543210"
        }
      },
      "innbetalingstype": "bankoverføring"
    }
  ],
  "totalOversikt": {
    "sumStipulerteRenter": 20,
    "sumForfalteKrav": 1000,
    "sumIkkeForfalteKrav": 0,
    "sumUplasserteInnbetalinger": 0,
    "saldo": 1020
  },
  "oversiktPerKravgruppe": [
    {
      "kravgruppe": "Skatt",
      "sumStipulerteRenter": 20,
      "sumForfalteKrav": 1000,
      "sumIkkeForfalteKrav": 0,
      "saldo": 1020
    }
  ]
}
```
## Krav

### Request URL - eksempel

```
https://{env}/api/innkreving/kravogbetalinger/v1/finans/12345678901/krav?fraOgMed=2020-01-01&tilOgMed=2021-01-01
```

### Eksempel på respons

```json
{
  "partIdentifikator": "310478717",
  "periode": {
    "fraOgMed": "2022-01-01",
    "tilOgMed": "2023-01-01"
  },
  "krav": [
    {
      "kravidentifikator": "krav-1234",
      "kravbeskrivelse": "Restskatt",
      "opprettelsesdatoForKrav": "2022-08-28",
      "kravperiode": "2022/09",
      "opprinneligBeloep": 1000,
      "kravforfall": [
        {
          "forfallsdato": "2022-09-28",
          "opprinneligBeloep": 1000.0,
          "gjenstaaendeBeloep": 1000.0,
          "plassertInnbetaling": [
            {
              "betaltFra": {
                "konto": {}
              },
              "plassertBeloep": -1000,
              "plasseringsdato": "2022-09-28",
              "innbetalingsIdentifikator": "inn-123456"
            }
          ],
          "plassertMotkrav": [],
          "kravforfallsIdentifikator": "7d82a522-dd9c-423a-bf14-913fe4511248",
          "betalingsinformasjon": {
            "konto": {
              "kontonummer": "82561901224"
            }
          },
          "utsattIverksettelse": false
        }
      ],
      "gjenstaaendeBeloep": 1000,
      "stipulerteRenter": 20.0,
      "kravtype": "RESTSKATT",
      "kravgruppe": "Skatt"
    }
  ]
}
```
## Innbetalinger

### Request URL - eksempel

```
GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/12345678901/innbetalinger?fraOgMed=2020-01-01&tilOgMed=2021-12-01
```

### Eksempel på respons

```json
{
  "partIdentifikator": "313367002",
  "periode": {
    "fraOgMed": "2022-01-01",
    "tilOgMed": "2023-01-01"
  },
  "innbetaling": [
    {
      "partIdentifikator": "313367002",
      "innbetalingsidentifikator": "inn-12345",
      "innbetalingsdato": "2022-09-28",
      "innbetaltBeloep": 1000,
      "plassertInnbetalingMotKrav": [],
      "betaltTilKonto": {
        "kontonummer": "98766543211"
      },
      "betaltFra": {
        "konto": {
          "kontoeiersNavn": "HEVNGJERRIG EKTE KATT KRYDDER",
          "kontonummer": "98766543211"
        }
      },
      "innbetalingstype": "bankoverføring"
    }
  ]
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode | HTTP Statuskode | Feilområde                                                     |
|----------|-----------------|----------------------------------------------------------------|
| KB-001   | 500             | Uventet feil på tjenesten.                                     |
| KB-002   | 500             | Uventet feil i et bakenforliggende system.                     |
| KB-003   | 404             | Ukjent url benyttet.                                           |
| KB-004   | 401             | Feil i forbindelse med autentisering.                          |
| KB-005   | 403             | Feil i forbindelse med samtykketoken.                           |
| KB-006   | 400             | Feil i forbindelse med validering av inputdata.                |
| KB-007   | 404             | Fant ingen krav/betalinger på angitt identifikator og periode. |
| KB-008   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.     |
| KB-009   | 404             | Ingen treff på oppgitt identifikator.                          |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Her ser du hele informasjonsmodellen for Krav og betalinger API med alle 4 endepunktene.

[![Informasjonsmodell](../../static/download/Informasjonsmodell_Kravogbetalinger.png)](../../static/download/Informasjonsmodell_Kravogbetalinger.png)

## Modell pr endepunkt

### Åpne krav

[![åpnekrav](../../static/download/Informasjonsmodell_Kravogbetalinger_Aapnekrav.png)](../../static/download/Informasjonsmodell_Kravogbetalinger_Aapnekrav.png)

### Krav

[![krav](../../static/download/Informasjonsmodell_Kravogbetalinger_Krav.png)](../../static/download/Informasjonsmodell_Kravogbetalinger_Krav.png)

### Innbetalinger

[![innbetalinger](../../static/download/Informasjonsmodell_Kravogbetalinger_Innbetalinger.png)](../../static/download/Informasjonsmodell_Kravogbetalinger_Innbetalinger.png)

### Utbetalinger

[![utbetalinger](../../static/download/Informasjonsmodell_Kravogbetalinger_Utbetalinger.png)](../../static/download/Informasjonsmodell_Kravogbetalinger_Utbetalinger.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">
I første omgang er det test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være med å pilotere løsningene.
  
## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.
Men egenskaper ved enhetene som har testdata kan søkes frem i Tenor.

## Testdata
Følgende enkeltmannsforetak (ENK) er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne: 

| Organisasjonsnummer | Egenskaper ved testdataene|
|---|---|
| 310478717 | |
| 313367002 | |
| 311851381 | |
| 314961900 | |
| 314055403 | |

  
</TabItem>
</Tabs>


