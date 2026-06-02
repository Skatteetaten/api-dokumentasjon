---
title: Mva-fastsetting API
slug: /api/mvafastsetting
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, MVA]
keywords: [mva]
last_updated: Jun 1, 2026
hide_table_of_contents: true
---
<Summary>Tjenesten leverer opplysninger om fastsatt merverdiavgift.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/mva-fastsetting-api/) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:mvafastsetting`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Mva-fastsetting API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).
  
### Rettighetspakker
Hvilke data en virksomhet får tilgang til i API-et bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Skatteetaten har laget en selvbetjeningsløsning som gir virksomheter [innsyn i egne rettighetspakker](https://rettighetspakke-innsyn.skatteetaten.no/), og lister derfor ikke lengre rettighetspakkene på Github. Se egen dokumentasjon om [hvordan logge inn](https://skatteetaten.github.io/api-dokumentasjon/anvendelsesomraader/deling-skatteetaten#innsyn-i-rettighetspakker).
  
## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/e4e328cf-6af2-3086-b9ab-9a5dbf3c484d) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "skattepliktig": "312409852",
  "forespurtSkattleggingsperiode": [
    {
      "egenfastsattMerverdiavgift": {
        "mvaMelding": {
          "meldingsreferanse": "51708747/b1f693e0-10d3-4f9e-9a8d-c7b8fd212164",
          "innsendingstidspunkt": "2022-09-29T16:21:33.609112Z"
        },
        "mvaSpesifikasjonslinje": [
          {
            "mvaKode": "1",
            "grunnlag": -220888.0,
            "sats": "25",
            "merverdiavgift": -55222.0,
            "erFradrag": true
          },
          {
            "mvaKode": "1",
            "spesifikasjon": "tapPåKrav",
            "grunnlag": -8000.0,
            "sats": "25",
            "merverdiavgift": -2000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "1",
            "spesifikasjon": "justering",
            "grunnlag": 8000.0,
            "sats": "25",
            "merverdiavgift": 2000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "1",
            "spesifikasjon": "tilbakeføringAvInngåendeMerverdiavgift",
            "grunnlag": 8000.0,
            "sats": "25",
            "merverdiavgift": 2000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "11",
            "grunnlag": -346666.0,
            "sats": "15",
            "merverdiavgift": -52000.0,
            "erFradrag": true
          },
          {
            "mvaKode": "11",
            "spesifikasjon": "tapPåKrav",
            "grunnlag": -34813.0,
            "sats": "15",
            "merverdiavgift": -5222.0,
            "erFradrag": false
          },
          {
            "mvaKode": "12",
            "grunnlag": -406840.0,
            "sats": "11",
            "merverdiavgift": -45200.0,
            "erFradrag": true
          },
          {
            "mvaKode": "12",
            "spesifikasjon": "tapPåKrav",
            "grunnlag": -108010.0,
            "sats": "11",
            "merverdiavgift": -12000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "13",
            "grunnlag": -166666.0,
            "sats": "12",
            "merverdiavgift": -20000.0,
            "erFradrag": true
          },
          {
            "mvaKode": "13",
            "spesifikasjon": "tapPåKrav",
            "grunnlag": -16666.0,
            "sats": "12",
            "merverdiavgift": -2000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "14",
            "grunnlag": -208000.0,
            "sats": "25",
            "merverdiavgift": -52000.0,
            "erFradrag": true
          },
          {
            "mvaKode": "15",
            "grunnlag": -1.0133333E7,
            "sats": "15",
            "merverdiavgift": -1520000.0,
            "erFradrag": true
          },
          {
            "mvaKode": "3",
            "spesifikasjon": "uttak",
            "grunnlag": 1000.0,
            "sats": "25",
            "merverdiavgift": 250.0,
            "erFradrag": false
          },
          {
            "mvaKode": "3",
            "grunnlag": 4520000.0,
            "sats": "25",
            "merverdiavgift": 1130000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "31",
            "spesifikasjon": "uttak",
            "grunnlag": 10000.0,
            "sats": "15",
            "merverdiavgift": 1500.0,
            "erFradrag": false
          },
          {
            "mvaKode": "31",
            "grunnlag": 45200.0,
            "sats": "15",
            "merverdiavgift": 6780.0,
            "erFradrag": false
          },
          {
            "mvaKode": "32",
            "grunnlag": 452000.0,
            "sats": "11",
            "merverdiavgift": 50217.0,
            "erFradrag": false
          },
          {
            "mvaKode": "33",
            "grunnlag": 452222.0,
            "sats": "12",
            "merverdiavgift": 54266.0,
            "erFradrag": false
          },
          {
            "mvaKode": "5",
            "spesifikasjon": "uttak",
            "grunnlag": 45022.0,
            "sats": "0",
            "merverdiavgift": 0.0,
            "erFradrag": false
          },
          {
            "mvaKode": "5",
            "grunnlag": 45200.0,
            "sats": "0",
            "merverdiavgift": 0.0,
            "erFradrag": false
          },
          {
            "mvaKode": "51",
            "grunnlag": 5200.0,
            "sats": "0",
            "merverdiavgift": 0.0,
            "erFradrag": false
          },
          {
            "mvaKode": "52",
            "grunnlag": 444455.0,
            "sats": "0",
            "merverdiavgift": 0.0,
            "erFradrag": false
          },
          {
            "mvaKode": "6",
            "grunnlag": 52000.0,
            "sats": "0",
            "merverdiavgift": 0.0,
            "erFradrag": false
          },
          {
            "mvaKode": "81",
            "grunnlag": -8000.0,
            "sats": "25",
            "merverdiavgift": -2000.0,
            "erFradrag": true
          },
          {
            "mvaKode": "81",
            "grunnlag": 2000.0,
            "sats": "25",
            "merverdiavgift": 500.0,
            "erFradrag": false
          },
          {
            "mvaKode": "81",
            "spesifikasjon": "tilbakeføringAvInngåendeMerverdiavgift",
            "grunnlag": 4000.0,
            "sats": "25",
            "merverdiavgift": 1000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "81",
            "spesifikasjon": "justering",
            "grunnlag": 8000.0,
            "sats": "25",
            "merverdiavgift": 2000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "82",
            "grunnlag": 85000.0,
            "sats": "25",
            "merverdiavgift": 21250.0,
            "erFradrag": false
          },
          {
            "mvaKode": "83",
            "grunnlag": -45000.0,
            "sats": "15",
            "merverdiavgift": -6750.0,
            "erFradrag": true
          },
          {
            "mvaKode": "83",
            "grunnlag": 45000.0,
            "sats": "15",
            "merverdiavgift": 6750.0,
            "erFradrag": false
          },
          {
            "mvaKode": "84",
            "grunnlag": 52000.0,
            "sats": "15",
            "merverdiavgift": 7800.0,
            "erFradrag": false
          },
          {
            "mvaKode": "85",
            "grunnlag": 52000.0,
            "sats": "0",
            "merverdiavgift": 0.0,
            "erFradrag": false
          },
          {
            "mvaKode": "86",
            "grunnlag": -52000.0,
            "sats": "25",
            "merverdiavgift": -13000.0,
            "erFradrag": true
          },
          {
            "mvaKode": "86",
            "grunnlag": 52000.0,
            "sats": "25",
            "merverdiavgift": 13000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "87",
            "grunnlag": 452000.0,
            "sats": "25",
            "merverdiavgift": 113000.0,
            "erFradrag": false
          },
          {
            "mvaKode": "88",
            "grunnlag": -452000.0,
            "sats": "12",
            "merverdiavgift": -54240.0,
            "erFradrag": true
          },
          {
            "mvaKode": "88",
            "grunnlag": 452000.0,
            "sats": "12",
            "merverdiavgift": 54240.0,
            "erFradrag": false
          },
          {
            "mvaKode": "89",
            "grunnlag": 45000.0,
            "sats": "12",
            "merverdiavgift": 5400.0,
            "erFradrag": false
          },
          {
            "mvaKode": "91",
            "grunnlag": -45000.0,
            "sats": "25",
            "merverdiavgift": -11250.0,
            "erFradrag": true
          },
          {
            "mvaKode": "91",
            "grunnlag": 45000.0,
            "sats": "25",
            "merverdiavgift": 11250.0,
            "erFradrag": false
          },
          {
            "mvaKode": "92",
            "grunnlag": 85000.0,
            "sats": "25",
            "merverdiavgift": 21250.0,
            "erFradrag": false
          }
        ]
      },
      "skattleggingsperiode": {
        "skattleggingsperiodetype": "aar",
        "periode": "årlig",
        "aar": "2021",
        "periodeStart": "2021-01-01",
        "periodeSlutt": "2021-12-31"
      },
      "meldingskategori": "primærnæring",
      "innleveringsfrist": "2022-04-11",
      "fastsattMerverdiavgift": {
        "tilGode": -348431
      }
    }
  ]
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.
  
| Feilkode | HTTP Statuskode | Feilområde                                                        |
|----------|-----------------|-------------------------------------------------------------------|
| MFA-001  | 500             | Uventet feil på tjenesten.                                        |
| MFA-002  | 500             | Uventet feil i et bakenforliggende system.                        |
| MFA-003  | 404             | Ukjent url benyttet.                                              |
| MFA-004  | 401             | Feil i forbindelse med autentisering.                             |
| MFA-005  | 403             | Feil i forbindelse med autorisering.                              |
| MFA-006  | 400             | Feil i forbindelse med validering av inputdata.                   |
| MFA-007  | 404             | Ingen mva-fastsetting funnet for oppgitt organisasjon og periode. |
| MFA-008  | 406             | Feil tilknyttet dataformat. Kun JSON støttes.                     |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/mva-fastsetting-api/) på SwaggerHub for beskrivelse av informasjonsmodellen.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.

Under har vi listet organisasjonsnumre med testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne:

| organisasjonsnummer | 
|---------------------|
| 312409852           |
| 313210227           |
| 313327337           |
| 213023012           |
| 313684067           |
| 314218337           |
| 314273834           |
| 313560627           |
| 312596598           |
| 312972018           |
| 312688875           |
| 314045874           |

  
</TabItem>
</Tabs>

