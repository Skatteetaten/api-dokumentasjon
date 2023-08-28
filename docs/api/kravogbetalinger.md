---
title: Krav og betalinger API
slug: /api/kravogbetalinger
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Innkreving ]
keywords: [ kravogbetalinger, krav og betalinger, innkreving ]
last_updated: Aug 28, 2023
hide_table_of_contents: true
---

<summary>

Tjeneste som tilbyr oversikt av krav, innbetalinger og utbetalinger tilhørende en part. Denne tjenesten er for tiden kun
i beta-versjon, se mer informasjon på
Skatteetatens [beta-Github](https://skatteetaten.github.io/beta-apier/kravogbetalinger).

</summary>

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

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:kravogbetalinger`

## Delegering

Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Krav og betalinger API - På vegne av`

## Teknisk spesifikasjon

Url’er til tjenesten, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/Skatteetaten_Deling/krav-og-betalinger-api) på SwaggerHub.

API'et har 4 endepunkter:

* __Åpne krav__: Hent oversikt over åpne krav og uplasserte innbetalinger. Gjør oppslag mot reskontrosystemene på åpne
  krav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt
* __Krav__: Hent alle krav innen et gitt tidsrom. Gjør oppslag mot reskontrosystemene på alle krav innen et gitt tidsrom
  på maks ett år.
* __Innbetalinger__: Hent alle innbetalinger innen et gitt tidsrom. Gjør oppslag mot reskontrosystemene på alle
  innbetalinger innen et gitt tidsrom på maks ett år.
* __Utbetalinger__: Hent alle utbetalinger innen et gitt tidsrom. Gjør oppslag mot reskontrosystemene på alle
  utbetalinger innen et gitt tidsrom på maks ett år.

Se også [eksempler](kravogbetalinger?tab=Eksempler) for de ulike endepunktene.

## Rettighetspakker

For denne tjenesten finns følgende rettighetspakker

| Navn på rettighetspakke | Formål med rettighetspakke                                                    | Egenskaper ved rettighetspakke                                                                                                                 |
|-------------------------|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| finans                  | Banker og finansforetak som skal vise krav og betalinger i nettbank           | Krever samtykke og gir tilgang til alle 4 endepunkter med oppslag for virksomheter (vil etter hvert bli utvidet også til oppslag for personer) |
| regnskapssystem         | Regnskapssystemer som skal vise krav og betalinger i sine sluttbrukersystemer | Krever samtykke og gir tilgang til alle 4 endepunkter med oppslag for virksomheter                                                             |

## Samtykke

For rettighetspakkene `finans` og `regnskapssystem` kreves [samtykke](../om/samtykke.md) for dette api'et.

| Endepunkt                          | Tjenestekode |
|------------------------------------|--------------|
| Krav og betalinger - Aapne krav    | 5928_202301  |
| Krav og betalinger - Krav          | 5929_202301  |
| Krav og betalinger - Innbetalinger | 5930_202301  |
| Krav og betalinger - Utbetalinger  | 5931_202301  |

## Datakatalog

Siden dette er en beta-tjeneste, er den pt. ikke publisert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Åpne krav

### Request URL - eksempel

```
https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/aapnekrav
```

### Eksempel på respons

```json
{
  "partIdentifikator": "871978433",
  "skjermet": false,
  "aapentKravMedGjenstaaendeBeloep": [
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "KRAV-33712709",
      "kravtype": "Mva-melding",
      "opprinneligBeloep": 61244.0,
      "gjenstaaendeBeloep": 61244.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "KRAV-33712709",
          "forfallsdato": "2022-04-11",
          "opprinneligBeloep": 61244.0,
          "gjenstaaendeBeloep": 61244.0,
          "betalingsinformasjon": {
            "kidnummer": "18719784330100322000006",
            "konto": {
              "kontoeiersNavn": "Skatteetaten",
              "kontonummer": "76940518888",
              "iban": "NO5876940518888",
              "swiftBIC": "DNBANOKK"
            }
          }
        }
      ],
      "stipulerteRenter": 8424.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Mva-melding",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "januar - februar",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022",
        "fraDato": "2022-01-01",
        "tilDato": "2022-02-28",
        "terminTekniskNavn": "01"
      },
      "opprettelsesdatoForKrav": "2022-04-13",
      "kravgruppe": "Merverdiavgift",
      "fastsettingsmaate": "egenfastsatt"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "KRAV-33949619",
      "kravtype": "Fasts § 12-1 (1) 1. pkt.",
      "opprinneligBeloep": 62500.0,
      "gjenstaaendeBeloep": 62500.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "KRAV-33949619",
          "forfallsdato": "2023-09-08",
          "opprinneligBeloep": 62500.0,
          "gjenstaaendeBeloep": 62500.0,
          "betalingsinformasjon": {
            "kidnummer": "4019008719784337",
            "konto": {
              "kontoeiersNavn": "Skatteetaten",
              "kontonummer": "76940518888",
              "iban": "NO5876940518888",
              "swiftBIC": "DNBANOKK"
            }
          }
        }
      ],
      "stipulerteRenter": 0.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Fastsetting § 12-1 (1) 1. pkt.",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "mars - april",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2021",
        "fraDato": "2021-03-01",
        "tilDato": "2021-04-30",
        "terminTekniskNavn": "02"
      },
      "opprettelsesdatoForKrav": "2023-08-18",
      "kravgruppe": "Merverdiavgift",
      "fastsettingsmaate": "myndighetsfastsatt"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "253517389",
      "kravtype": "ARBGAVG",
      "opprinneligBeloep": 6373.0,
      "gjenstaaendeBeloep": 6373.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "367382724",
          "forfallsdato": "2022-05-16",
          "opprinneligBeloep": 6373.0,
          "gjenstaaendeBeloep": 6373.0,
          "betalingsinformasjon": {
            "kidnummer": "0095755263306220219",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        }
      ],
      "stipulerteRenter": 800.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Arbeidsgiveravgift - 2022/2",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022",
        "terminTekniskNavn": "2"
      },
      "opprettelsesdatoForKrav": "2022-05-12",
      "kravgruppe": "Arbeidsgiveravgift"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "253517378",
      "kravtype": "FORSKTREKK",
      "opprinneligBeloep": 22600.0,
      "gjenstaaendeBeloep": 22600.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "367382707",
          "forfallsdato": "2022-05-16",
          "opprinneligBeloep": 22600.0,
          "gjenstaaendeBeloep": 22600.0,
          "betalingsinformasjon": {
            "kidnummer": "0095755263305220215",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        }
      ],
      "stipulerteRenter": 2839.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Forskuddstrekk - 2022/2",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022",
        "terminTekniskNavn": "2"
      },
      "opprettelsesdatoForKrav": "2022-05-12",
      "kravgruppe": "Forskuddstrekk"
    },
    {
      "partIdentifikator": "13114614453",
      "kravidentifikator": "250884358",
      "kravtype": "UTSKR_FORSKSKATT",
      "opprinneligBeloep": 95000.0,
      "gjenstaaendeBeloep": 71250.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "364362589",
          "forfallsdato": "2022-03-15",
          "opprinneligBeloep": 23750.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "kidnummer": "7900011880501220017",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "85214061",
              "plassertBeloep": 23750.0,
              "plassertDato": "2022-04-12",
              "innbetalingsdato": "2022-04-12",
              "innbetaltBeloep": -23750.0,
              "innbetaltFra": {
                "kidnummer": "7900011880501220017",
                "meldingSendtTilMottaker": "7900011880501220017",
                "konto": {
                  "kontoeiersNavn": "Gurcharan Singh",
                  "kontonummer": "******08808"
                },
                "valutakode": "NOK"
              },
              "innbetalingstype": "Innbetaling 2022-04-12"
            }
          ]
        },
        {
          "kravforfallsIdentifikator": "364362592",
          "forfallsdato": "2022-06-15",
          "opprinneligBeloep": 23750.0,
          "gjenstaaendeBeloep": 23750.0,
          "betalingsinformasjon": {
            "kidnummer": "7900011880501220017",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        },
        {
          "kravforfallsIdentifikator": "364362593",
          "forfallsdato": "2022-09-15",
          "opprinneligBeloep": 23750.0,
          "gjenstaaendeBeloep": 23750.0,
          "betalingsinformasjon": {
            "kidnummer": "7900011880501220017",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        },
        {
          "kravforfallsIdentifikator": "364362594",
          "forfallsdato": "2022-12-15",
          "opprinneligBeloep": 23750.0,
          "gjenstaaendeBeloep": 23750.0,
          "betalingsinformasjon": {
            "kidnummer": "7900011880501220017",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        }
      ],
      "stipulerteRenter": 7061.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Utskrevet forskuddsskatt, person - 2022",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Inntektstår",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022"
      },
      "opprettelsesdatoForKrav": "2022-03-29",
      "kravgruppe": "Skatt"
    }
  ],
  "totalOversikt": {
    "sumStipulerteRenter": 19124.0,
    "sumForfalteKrav": 161467.0,
    "sumIkkeForfalteKrav": 62500.0,
    "sumUplasserteInnbetalinger": 0.0,
    "saldo": 243091.0
  },
  "oversiktPerKravgruppe": [
    {
      "kravgruppe": "Merverdiavgift",
      "sumStipulerteRenter": 8424.0,
      "sumForfalteKrav": 61244.0,
      "sumIkkeForfalteKrav": 62500.0,
      "saldo": 132168.0
    },
    {
      "kravgruppe": "Arbeidsgiveravgift",
      "sumStipulerteRenter": 800.0,
      "sumForfalteKrav": 6373.0,
      "sumIkkeForfalteKrav": 0.0,
      "saldo": 7173.0
    },
    {
      "kravgruppe": "Forskuddstrekk",
      "sumStipulerteRenter": 2839.0,
      "sumForfalteKrav": 22600.0,
      "sumIkkeForfalteKrav": 0.0,
      "saldo": 25439.0
    },
    {
      "kravgruppe": "Skatt",
      "sumStipulerteRenter": 7061.0,
      "sumForfalteKrav": 71250.0,
      "sumIkkeForfalteKrav": 0.0,
      "saldo": 78311.0
    }
  ]
}
```

## Krav

### Request URL - eksempel

```
https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/krav?fraOgMed=2022-01-01&tilOgMed=2022-12-31
```

### Eksempel på respons

```json
{
  "partIdentifikator": "871978433",
  "periode": {
    "fraOgMed": "2022-01-01",
    "tilOgMed": "2022-12-31"
  },
  "skjermet": false,
  "krav": [
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "FORF-91396163",
      "kravtype": "Fors.rente kredit",
      "opprinneligBeloep": -10.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "FORF-91396163",
          "forfallsdato": "2022-02-01",
          "opprinneligBeloep": -10.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {},
          "plassertMotkrav": [
            {
              "kravforfallsIdentifikator": "KRAV-33243589",
              "plassertBeloep": 10.0,
              "kravtype": "Forsinkelsesrente",
              "plassertDato": "2022-02-01",
              "kravbeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Forsinkelsesrenter",
                    "spraak": "nb"
                  }
                ]
              },
              "forfallsdato": "2022-01-17",
              "kravperiode": {
                "periodeBeskrivelse": {
                  "spraakTekst": [
                    {
                      "tekst": "september - oktober",
                      "spraak": "nb"
                    }
                  ]
                },
                "aar": "2021",
                "fraDato": "2021-09-01",
                "tilDato": "2021-10-31",
                "terminTekniskNavn": "05"
              }
            }
          ]
        }
      ],
      "stipulerteRenter": 0.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Korrigert forsinkelsesrente - Mva-melding september - oktober",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "september - oktober",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2021",
        "fraDato": "2021-09-01",
        "tilDato": "2021-10-31",
        "terminTekniskNavn": "05"
      },
      "opprettelsesdatoForKrav": "2022-02-01",
      "kravgruppe": "Merverdiavgift",
      "hovedstolKravidentifikator": "KRAV-33158653",
      "fastsettingsmaate": "blank"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "KRAV-33243589",
      "kravtype": "Forsinkelsesrente",
      "opprinneligBeloep": 439.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "KRAV-33243589",
          "forfallsdato": "2022-01-17",
          "opprinneligBeloep": 439.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "kidnummer": "424585678799899",
            "konto": {
              "kontoeiersNavn": "Skatteetaten",
              "kontonummer": "76940518888",
              "iban": "NO5876940518888",
              "swiftBIC": "DNBANOKK"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "FORF-91264797",
              "plassertBeloep": -112.0,
              "plassertDato": "2022-01-17",
              "innbetalingsdato": "2022-01-17",
              "innbetaltBeloep": -51433.0,
              "innbetaltFra": {
                "kidnummer": "578235678799882",
                "meldingSendtTilMottaker": "5026009575526338",
                "konto": {
                  "kontoeiersNavn": "Betaler av 51433",
                  "kontonummer": "******11111"
                }
              },
              "innbetalingstype": "Innbetalt OCR"
            },
            {
              "innbetalingsIdentifikator": "FORF-92211452",
              "plassertBeloep": -317.0,
              "plassertDato": "2022-03-28",
              "innbetalingsdato": "2022-03-25",
              "innbetaltBeloep": -468.0,
              "innbetaltFra": {
                "kidnummer": "594395678799881",
                "meldingSendtTilMottaker": "5029009575526339",
                "konto": {
                  "kontoeiersNavn": "Betaler av 468",
                  "kontonummer": "******11111"
                }
              },
              "innbetalingstype": "Innbetalt OCR"
            }
          ],
          "plassertMotkrav": [
            {
              "kravforfallsIdentifikator": "FORF-91396163",
              "plassertBeloep": -10.0,
              "kravtype": "Fors.rente kredit",
              "plassertDato": "2022-02-01",
              "kravbeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Korrigert forsinkelsesrente",
                    "spraak": "nb"
                  }
                ]
              },
              "forfallsdato": "2022-02-01",
              "kravperiode": {
                "periodeBeskrivelse": {
                  "spraakTekst": [
                    {
                      "tekst": "september - oktober",
                      "spraak": "nb"
                    }
                  ]
                },
                "aar": "2021",
                "fraDato": "2021-09-01",
                "tilDato": "2021-10-31",
                "terminTekniskNavn": "05"
              }
            }
          ]
        }
      ],
      "stipulerteRenter": 0.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Forsinkelsesrenter - Mva-melding september - oktober",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "september - oktober",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2021",
        "fraDato": "2021-09-01",
        "tilDato": "2021-10-31",
        "terminTekniskNavn": "05"
      },
      "opprettelsesdatoForKrav": "2022-01-17",
      "kravgruppe": "Merverdiavgift",
      "hovedstolKravidentifikator": "KRAV-33158653",
      "fastsettingsmaate": "blank"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "KRAV-33712709",
      "kravtype": "Mva-melding",
      "opprinneligBeloep": 61244.0,
      "gjenstaaendeBeloep": 61244.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "KRAV-33712709",
          "forfallsdato": "2022-04-11",
          "opprinneligBeloep": 61244.0,
          "gjenstaaendeBeloep": 61244.0,
          "betalingsinformasjon": {
            "kidnummer": "18719784330100322000006",
            "konto": {
              "kontoeiersNavn": "Skatteetaten",
              "kontonummer": "76940518888",
              "iban": "NO5876940518888",
              "swiftBIC": "DNBANOKK"
            }
          }
        }
      ],
      "stipulerteRenter": 8424.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Mva-melding",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "januar - februar",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022",
        "fraDato": "2022-01-01",
        "tilDato": "2022-02-28",
        "terminTekniskNavn": "01"
      },
      "opprettelsesdatoForKrav": "2022-04-13",
      "kravgruppe": "Merverdiavgift",
      "fastsettingsmaate": "egenfastsatt"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "KRAV-33426829",
      "kravtype": "Mva-melding",
      "opprinneligBeloep": 40801.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "KRAV-33426829",
          "forfallsdato": "2022-02-10",
          "opprinneligBeloep": 40801.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "kidnummer": "1408653851388204",
            "konto": {
              "kontoeiersNavn": "Skatteetaten",
              "kontonummer": "76940518888",
              "iban": "NO5876940518888",
              "swiftBIC": "DNBANOKK"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "FORF-91783314",
              "plassertBeloep": -40801.0,
              "plassertDato": "2022-02-14",
              "innbetalingsdato": "2022-02-12",
              "innbetaltBeloep": -40801.0,
              "innbetaltFra": {
                "kidnummer": "1408653851388204",
                "meldingSendtTilMottaker": "1367929575526332",
                "konto": {
                  "kontoeiersNavn": "Betaler av 40801",
                  "kontonummer": "******11111"
                }
              },
              "innbetalingstype": "Innbetalt OCR"
            }
          ]
        }
      ],
      "stipulerteRenter": 0.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Mva-melding",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "november - desember",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2021",
        "fraDato": "2021-11-01",
        "tilDato": "2021-12-31",
        "terminTekniskNavn": "06"
      },
      "opprettelsesdatoForKrav": "2022-02-11",
      "kravgruppe": "Merverdiavgift",
      "fastsettingsmaate": "egenfastsatt"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "248930987",
      "kravtype": "AVVIK_ARBGAVG_KREDIT",
      "opprinneligBeloep": -1.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "361500114",
          "forfallsdato": "2022-01-17",
          "opprinneligBeloep": -1.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertMotkrav": [
            {
              "kravforfallsIdentifikator": "361500114",
              "plassertBeloep": 1.0,
              "kravtype": "BORTSKRV_DEBET",
              "plassertDato": "2022-01-24",
              "kravbeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Bortskriving småbeløp debet - 2021/6",
                    "spraak": "nb"
                  }
                ]
              },
              "forfallsdato": "2022-01-17",
              "kravperiode": {
                "periodeBeskrivelse": {
                  "spraakTekst": [
                    {
                      "tekst": "Termin",
                      "spraak": "nb"
                    }
                  ]
                },
                "aar": "2021",
                "terminTekniskNavn": "6"
              }
            }
          ]
        }
      ],
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Kredit avvikskrav arbeidsgiveravgift - 2021/6",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2021",
        "terminTekniskNavn": "6"
      },
      "opprettelsesdatoForKrav": "2022-01-24",
      "kravgruppe": "Andre krav"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "248930989",
      "kravtype": "BORTSKRV_DEBET",
      "opprinneligBeloep": 1.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "361500115",
          "forfallsdato": "2022-01-17",
          "opprinneligBeloep": 1.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertMotkrav": [
            {
              "kravforfallsIdentifikator": "361500114",
              "plassertBeloep": 1.0,
              "kravtype": "AVVIK_ARBGAVG_KREDIT",
              "plassertDato": "2022-01-24",
              "kravbeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Kredit avvikskrav arbeidsgiveravgift - 2021/6",
                    "spraak": "nb"
                  }
                ]
              },
              "forfallsdato": "2022-01-17",
              "kravperiode": {
                "periodeBeskrivelse": {
                  "spraakTekst": [
                    {
                      "tekst": "Termin",
                      "spraak": "nb"
                    }
                  ]
                },
                "aar": "2021",
                "terminTekniskNavn": "6"
              }
            }
          ]
        }
      ],
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Bortskriving småbeløp debet - 2021/6",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2021",
        "terminTekniskNavn": "6"
      },
      "opprettelsesdatoForKrav": "2022-01-24",
      "kravgruppe": "Andre krav"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "248469533",
      "kravtype": "ARBGAVG",
      "opprinneligBeloep": 8946.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "360674494",
          "forfallsdato": "2022-01-17",
          "opprinneligBeloep": 8946.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "kidnummer": "0095755263306210612",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "84111312",
              "plassertBeloep": 8946.0,
              "plassertDato": "2022-01-18",
              "innbetalingsdato": "2022-01-17",
              "innbetaltBeloep": -35000.0,
              "innbetaltFra": {
                "kidnummer": "7900011880540002515",
                "meldingSendtTilMottaker": "7900011880540002515",
                "konto": {
                  "kontoeiersNavn": "Kabir Gurcharan Kaur",
                  "kontonummer": "******16135"
                },
                "valutakode": "NOK"
              },
              "innbetalingstype": "Innbetaling 2022-01-17"
            }
          ]
        }
      ],
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Arbeidsgiveravgift - 2021/6",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2021",
        "terminTekniskNavn": "6"
      },
      "opprettelsesdatoForKrav": "2022-01-13",
      "kravgruppe": "Arbeidsgiveravgift"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "249796766",
      "kravtype": "ARBGAVG",
      "opprinneligBeloep": 15353.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "362745333",
          "forfallsdato": "2022-03-15",
          "opprinneligBeloep": 15353.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "kidnummer": "0095755263306220111",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "85101122",
              "plassertBeloep": 15353.0,
              "plassertDato": "2022-03-28",
              "innbetalingsdato": "2022-03-25",
              "innbetaltBeloep": -35298.0,
              "innbetaltFra": {
                "kidnummer": "0095755263340002115",
                "meldingSendtTilMottaker": "0095755263340002115",
                "konto": {
                  "kontoeiersNavn": "Gurcharan Singh",
                  "kontonummer": "******61434"
                },
                "valutakode": "NOK"
              },
              "innbetalingstype": "Innbetaling 2022-03-25"
            }
          ]
        }
      ],
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Arbeidsgiveravgift - 2022/1",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022",
        "terminTekniskNavn": "1"
      },
      "opprettelsesdatoForKrav": "2022-03-13",
      "kravgruppe": "Arbeidsgiveravgift"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "253517389",
      "kravtype": "ARBGAVG",
      "opprinneligBeloep": 6373.0,
      "gjenstaaendeBeloep": 6373.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "367382724",
          "forfallsdato": "2022-05-16",
          "opprinneligBeloep": 6373.0,
          "gjenstaaendeBeloep": 6373.0,
          "betalingsinformasjon": {
            "kidnummer": "0095755263306220219",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        }
      ],
      "stipulerteRenter": 800.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Arbeidsgiveravgift - 2022/2",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022",
        "terminTekniskNavn": "2"
      },
      "opprettelsesdatoForKrav": "2022-05-12",
      "kravgruppe": "Arbeidsgiveravgift"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "248469516",
      "kravtype": "FORSKTREKK",
      "opprinneligBeloep": 7617.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "360674478",
          "forfallsdato": "2022-01-17",
          "opprinneligBeloep": 7617.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "kidnummer": "0095755263305210619",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "84111312",
              "plassertBeloep": 7617.0,
              "plassertDato": "2022-01-18",
              "innbetalingsdato": "2022-01-17",
              "innbetaltBeloep": -35000.0,
              "innbetaltFra": {
                "kidnummer": "7900011880540002515",
                "meldingSendtTilMottaker": "7900011880540002515",
                "konto": {
                  "kontoeiersNavn": "Kabir Gurcharan Kaur",
                  "kontonummer": "******16135"
                },
                "valutakode": "NOK"
              },
              "innbetalingstype": "Innbetaling 2022-01-17"
            }
          ]
        }
      ],
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Forskuddstrekk - 2021/6",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2021",
        "terminTekniskNavn": "6"
      },
      "opprettelsesdatoForKrav": "2022-01-13",
      "kravgruppe": "Forskuddstrekk"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "249796746",
      "kravtype": "FORSKTREKK",
      "opprinneligBeloep": 19945.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "362745318",
          "forfallsdato": "2022-03-15",
          "opprinneligBeloep": 19945.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "kidnummer": "0095755263305220118",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "85101122",
              "plassertBeloep": 19945.0,
              "plassertDato": "2022-03-28",
              "innbetalingsdato": "2022-03-25",
              "innbetaltBeloep": -35298.0,
              "innbetaltFra": {
                "kidnummer": "0095755263340002115",
                "meldingSendtTilMottaker": "0095755263340002115",
                "konto": {
                  "kontoeiersNavn": "Gurcharan Singh",
                  "kontonummer": "******61434"
                },
                "valutakode": "NOK"
              },
              "innbetalingstype": "Innbetaling 2022-03-25"
            }
          ]
        }
      ],
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Forskuddstrekk - 2022/1",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022",
        "terminTekniskNavn": "1"
      },
      "opprettelsesdatoForKrav": "2022-03-13",
      "kravgruppe": "Forskuddstrekk"
    },
    {
      "partIdentifikator": "871978433",
      "kravidentifikator": "253517378",
      "kravtype": "FORSKTREKK",
      "opprinneligBeloep": 22600.0,
      "gjenstaaendeBeloep": 22600.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "367382707",
          "forfallsdato": "2022-05-16",
          "opprinneligBeloep": 22600.0,
          "gjenstaaendeBeloep": 22600.0,
          "betalingsinformasjon": {
            "kidnummer": "0095755263305220215",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        }
      ],
      "stipulerteRenter": 2839.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Forskuddstrekk - 2022/2",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Termin",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022",
        "terminTekniskNavn": "2"
      },
      "opprettelsesdatoForKrav": "2022-05-12",
      "kravgruppe": "Forskuddstrekk"
    },
    {
      "partIdentifikator": "13114614453",
      "kravidentifikator": "248811577",
      "kravtype": "MOTP_TILB_BET",
      "opprinneligBeloep": 18335.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "361313761",
          "forfallsdato": "2022-01-18",
          "opprinneligBeloep": 18335.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "84111312",
              "plassertBeloep": 18335.0,
              "plassertDato": "2022-01-18",
              "innbetalingsdato": "2022-01-17",
              "innbetaltBeloep": -35000.0,
              "innbetaltFra": {
                "kidnummer": "7900011880540002515",
                "meldingSendtTilMottaker": "7900011880540002515",
                "konto": {
                  "kontoeiersNavn": "Kabir Gurcharan Kaur",
                  "kontonummer": "******16135"
                },
                "valutakode": "NOK"
              },
              "innbetalingstype": "Innbetaling 2022-01-17"
            }
          ]
        }
      ],
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Motpost tilbakebetaling - 0",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Inntektstår",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022"
      },
      "opprettelsesdatoForKrav": "2022-01-18",
      "kravgruppe": "Andre krav"
    },
    {
      "partIdentifikator": "13114614453",
      "kravidentifikator": "250884358",
      "kravtype": "UTSKR_FORSKSKATT",
      "opprinneligBeloep": 95000.0,
      "gjenstaaendeBeloep": 71250.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "364362589",
          "forfallsdato": "2022-03-15",
          "opprinneligBeloep": 23750.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "kidnummer": "7900011880501220017",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "85214061",
              "plassertBeloep": 23750.0,
              "plassertDato": "2022-04-12",
              "innbetalingsdato": "2022-04-12",
              "innbetaltBeloep": -23750.0,
              "innbetaltFra": {
                "kidnummer": "7900011880501220017",
                "meldingSendtTilMottaker": "7900011880501220017",
                "konto": {
                  "kontoeiersNavn": "Gurcharan Singh",
                  "kontonummer": "******08808"
                },
                "valutakode": "NOK"
              },
              "innbetalingstype": "Innbetaling 2022-04-12"
            }
          ]
        },
        {
          "kravforfallsIdentifikator": "364362592",
          "forfallsdato": "2022-06-15",
          "opprinneligBeloep": 23750.0,
          "gjenstaaendeBeloep": 23750.0,
          "betalingsinformasjon": {
            "kidnummer": "7900011880501220017",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        },
        {
          "kravforfallsIdentifikator": "364362593",
          "forfallsdato": "2022-09-15",
          "opprinneligBeloep": 23750.0,
          "gjenstaaendeBeloep": 23750.0,
          "betalingsinformasjon": {
            "kidnummer": "7900011880501220017",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        },
        {
          "kravforfallsIdentifikator": "364362594",
          "forfallsdato": "2022-12-15",
          "opprinneligBeloep": 23750.0,
          "gjenstaaendeBeloep": 23750.0,
          "betalingsinformasjon": {
            "kidnummer": "7900011880501220017",
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          }
        }
      ],
      "stipulerteRenter": 7061.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Utskrevet forskuddsskatt, person - 2022",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Inntektstår",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022"
      },
      "opprettelsesdatoForKrav": "2022-03-29",
      "kravgruppe": "Skatt"
    },
    {
      "partIdentifikator": "13114614453",
      "kravidentifikator": "248811576",
      "kravtype": "KRAV_UTBET_KRED",
      "opprinneligBeloep": -18335.0,
      "gjenstaaendeBeloep": 0.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "361313760",
          "forfallsdato": "2022-01-18",
          "opprinneligBeloep": -18335.0,
          "gjenstaaendeBeloep": 0.0,
          "betalingsinformasjon": {
            "konto": {
              "kontoeiersNavn": "SKATTEETATEN - SKATTEINNKREVING",
              "kontonummer": "76940524802",
              "iban": "NO42 7694 0524 802",
              "swiftBIC": "DNBANOKKXXX"
            }
          },
          "plassertUtbetaling": [
            {
              "utbetalingsidentifikator": "74423415",
              "utbetaltBeloep": 18335.0,
              "utbetaltDato": "2022-01-19",
              "betaltTil": {
                "meldingSendtTilMottaker": "For mye betalt 17.01.22",
                "konto": {
                  "kontoeiersNavn": "FLISNES, TORSTEIN",
                  "kontonummer": "54221361434"
                },
                "valutakode": "NOK"
              },
              "plassertBeloep": 18335.0,
              "plassertDato": "2022-01-19"
            }
          ]
        }
      ],
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Krav til utbetaling - 0",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "Inntektstår",
              "spraak": "nb"
            }
          ]
        },
        "aar": "2022"
      },
      "opprettelsesdatoForKrav": "2022-01-18",
      "kravgruppe": "Andre krav"
    }
  ]
}
```

## Innbetalinger

### Request URL - eksempel

```
GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/innbetalinger?fraOgMed=2022-01-01&tilOgMed=2022-12-31
```

### Eksempel på respons

```json
{
  "partIdentifikator": "871978433",
  "periode": {
    "fraOgMed": "2022-01-01",
    "tilOgMed": "2022-12-31"
  },
  "skjermet": false,
  "innbetaling": [
    {
      "partIdentifikator": "871978433",
      "innbetalingsidentifikator": "FORF-91264797",
      "innbetalingsdato": "2022-01-17",
      "innbetaltBeloep": -51433.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "KRAV-33158653",
          "plassertBeloep": 51321.0,
          "plassertDato": "2022-01-17",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Mva-melding",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2021-12-10",
          "opprinneligKravforfallsbeloep": 51321.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "KRAV-33243589",
          "plassertBeloep": 112.0,
          "plassertDato": "2022-01-17",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrenter",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-17",
          "opprinneligKravforfallsbeloep": 439.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "innbetaltFra": {
        "kidnummer": "578235678799882",
        "meldingSendtTilMottaker": "5026009575526338",
        "konto": {
          "kontoeiersNavn": "Betaler av 51433",
          "kontonummer": "******11111"
        }
      },
      "innbetalingstype": "Innbetalt OCR"
    },
    {
      "partIdentifikator": "871978433",
      "innbetalingsidentifikator": "FORF-91783314",
      "innbetalingsdato": "2022-02-12",
      "innbetaltBeloep": -40801.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "KRAV-33426829",
          "plassertBeloep": 40801.0,
          "plassertDato": "2022-02-14",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Mva-melding",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-02-10",
          "opprinneligKravforfallsbeloep": 40801.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "innbetaltFra": {
        "kidnummer": "1408653851388204",
        "meldingSendtTilMottaker": "1367929575526332",
        "konto": {
          "kontoeiersNavn": "Betaler av 40801",
          "kontonummer": "******11111"
        }
      },
      "innbetalingstype": "Innbetalt OCR"
    },
    {
      "partIdentifikator": "871978433",
      "innbetalingsidentifikator": "FORF-92211452",
      "innbetalingsdato": "2022-03-25",
      "innbetaltBeloep": -468.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "KRAV-33193652",
          "plassertBeloep": 151.0,
          "plassertDato": "2022-03-28",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrenter",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2021-12-22",
          "opprinneligKravforfallsbeloep": 961.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "KRAV-33243589",
          "plassertBeloep": 317.0,
          "plassertDato": "2022-03-28",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrenter",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-17",
          "opprinneligKravforfallsbeloep": 439.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "innbetaltFra": {
        "kidnummer": "594395678799881",
        "meldingSendtTilMottaker": "5029009575526339",
        "konto": {
          "kontoeiersNavn": "Betaler av 468",
          "kontonummer": "******11111"
        }
      },
      "innbetalingstype": "Innbetalt OCR"
    },
    {
      "partIdentifikator": "871978433",
      "innbetalingsidentifikator": "85101122",
      "innbetalingsdato": "2022-03-25",
      "innbetaltBeloep": -35298.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "362745318",
          "plassertBeloep": 19945.0,
          "plassertDato": "2022-03-28",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forskuddstrekk - 2022/1",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-03-15",
          "opprinneligKravforfallsbeloep": 19945.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "362745333",
          "plassertBeloep": 15353.0,
          "plassertDato": "2022-03-28",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Arbeidsgiveravgift - 2022/1",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-03-15",
          "opprinneligKravforfallsbeloep": 15353.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "76940524802"
      },
      "innbetaltFra": {
        "kidnummer": "0095755263340002115",
        "meldingSendtTilMottaker": "0095755263340002115",
        "konto": {
          "kontoeiersNavn": "Gurcharan Singh",
          "kontonummer": "******61434"
        },
        "valutakode": "NOK"
      },
      "innbetalingstype": "Innbetaling 2022-03-25"
    },
    {
      "partIdentifikator": "13114614453",
      "innbetalingsidentifikator": "84111312",
      "innbetalingsdato": "2022-01-17",
      "innbetaltBeloep": -35000.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "360674478",
          "plassertBeloep": 7617.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forskuddstrekk - 2021/6",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-17",
          "opprinneligKravforfallsbeloep": 7617.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "360674494",
          "plassertBeloep": 8946.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Arbeidsgiveravgift - 2021/6",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-17",
          "opprinneligKravforfallsbeloep": 8946.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "356254273",
          "plassertBeloep": 50.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrente Arbeidsgiveravgift - 2021/4",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2021-10-19",
          "opprinneligKravforfallsbeloep": 50.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "356253313",
          "plassertBeloep": 52.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrente Forskuddstrekk - 2021/4",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2021-10-19",
          "opprinneligKravforfallsbeloep": 52.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "361313761",
          "plassertBeloep": 18335.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Motpost tilbakebetaling - 0",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-18",
          "opprinneligKravforfallsbeloep": 18335.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "76940524802"
      },
      "innbetaltFra": {
        "kidnummer": "7900011880540002515",
        "meldingSendtTilMottaker": "7900011880540002515",
        "konto": {
          "kontoeiersNavn": "Kabir Gurcharan Kaur",
          "kontonummer": "******16135"
        },
        "valutakode": "NOK"
      },
      "innbetalingstype": "Innbetaling 2022-01-17"
    },
    {
      "partIdentifikator": "13114614453",
      "innbetalingsidentifikator": "85214061",
      "innbetalingsdato": "2022-04-12",
      "innbetaltBeloep": -23750.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "364362589",
          "plassertBeloep": 23750.0,
          "plassertDato": "2022-04-12",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Utskrevet forskuddsskatt, person - 2022",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-03-15",
          "opprinneligKravforfallsbeloep": 23750.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "76940524802"
      },
      "innbetaltFra": {
        "kidnummer": "7900011880501220017",
        "meldingSendtTilMottaker": "7900011880501220017",
        "konto": {
          "kontoeiersNavn": "Gurcharan Singh",
          "kontonummer": "******08808"
        },
        "valutakode": "NOK"
      },
      "innbetalingstype": "Innbetaling 2022-04-12"
    }
  ]
}
```
## Utbetalinger

### Request URL - eksempel

```
GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/utbetalinger?fraOgMed=2022-01-01&tilOgMed=2021-12-31
```

### Eksempel på respons

```json
{
  "partIdentifikator": "871978433",
  "periode": {
    "fraOgMed": "2022-01-01",
    "tilOgMed": "2022-12-31"
  },
  "skjermet": false,
  "innbetaling": [
    {
      "partIdentifikator": "871978433",
      "innbetalingsidentifikator": "FORF-91264797",
      "innbetalingsdato": "2022-01-17",
      "innbetaltBeloep": -51433.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "KRAV-33158653",
          "plassertBeloep": 51321.0,
          "plassertDato": "2022-01-17",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Mva-melding",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2021-12-10",
          "opprinneligKravforfallsbeloep": 51321.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "KRAV-33243589",
          "plassertBeloep": 112.0,
          "plassertDato": "2022-01-17",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrenter",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-17",
          "opprinneligKravforfallsbeloep": 439.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "innbetaltFra": {
        "kidnummer": "578235678799882",
        "meldingSendtTilMottaker": "5026009575526338",
        "konto": {
          "kontoeiersNavn": "Betaler av 51433",
          "kontonummer": "******11111"
        }
      },
      "innbetalingstype": "Innbetalt OCR"
    },
    {
      "partIdentifikator": "871978433",
      "innbetalingsidentifikator": "FORF-91783314",
      "innbetalingsdato": "2022-02-12",
      "innbetaltBeloep": -40801.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "KRAV-33426829",
          "plassertBeloep": 40801.0,
          "plassertDato": "2022-02-14",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Mva-melding",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-02-10",
          "opprinneligKravforfallsbeloep": 40801.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "innbetaltFra": {
        "kidnummer": "1408653851388204",
        "meldingSendtTilMottaker": "1367929575526332",
        "konto": {
          "kontoeiersNavn": "Betaler av 40801",
          "kontonummer": "******11111"
        }
      },
      "innbetalingstype": "Innbetalt OCR"
    },
    {
      "partIdentifikator": "871978433",
      "innbetalingsidentifikator": "FORF-92211452",
      "innbetalingsdato": "2022-03-25",
      "innbetaltBeloep": -468.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "KRAV-33193652",
          "plassertBeloep": 151.0,
          "plassertDato": "2022-03-28",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrenter",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2021-12-22",
          "opprinneligKravforfallsbeloep": 961.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "KRAV-33243589",
          "plassertBeloep": 317.0,
          "plassertDato": "2022-03-28",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrenter",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-17",
          "opprinneligKravforfallsbeloep": 439.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "innbetaltFra": {
        "kidnummer": "594395678799881",
        "meldingSendtTilMottaker": "5029009575526339",
        "konto": {
          "kontoeiersNavn": "Betaler av 468",
          "kontonummer": "******11111"
        }
      },
      "innbetalingstype": "Innbetalt OCR"
    },
    {
      "partIdentifikator": "871978433",
      "innbetalingsidentifikator": "85101122",
      "innbetalingsdato": "2022-03-25",
      "innbetaltBeloep": -35298.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "362745318",
          "plassertBeloep": 19945.0,
          "plassertDato": "2022-03-28",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forskuddstrekk - 2022/1",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-03-15",
          "opprinneligKravforfallsbeloep": 19945.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "362745333",
          "plassertBeloep": 15353.0,
          "plassertDato": "2022-03-28",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Arbeidsgiveravgift - 2022/1",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-03-15",
          "opprinneligKravforfallsbeloep": 15353.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "76940524802"
      },
      "innbetaltFra": {
        "kidnummer": "0095755263340002115",
        "meldingSendtTilMottaker": "0095755263340002115",
        "konto": {
          "kontoeiersNavn": "Gurcharan Singh",
          "kontonummer": "******61434"
        },
        "valutakode": "NOK"
      },
      "innbetalingstype": "Innbetaling 2022-03-25"
    },
    {
      "partIdentifikator": "13114614453",
      "innbetalingsidentifikator": "84111312",
      "innbetalingsdato": "2022-01-17",
      "innbetaltBeloep": -35000.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "360674478",
          "plassertBeloep": 7617.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forskuddstrekk - 2021/6",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-17",
          "opprinneligKravforfallsbeloep": 7617.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "360674494",
          "plassertBeloep": 8946.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Arbeidsgiveravgift - 2021/6",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-17",
          "opprinneligKravforfallsbeloep": 8946.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "356254273",
          "plassertBeloep": 50.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrente Arbeidsgiveravgift - 2021/4",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2021-10-19",
          "opprinneligKravforfallsbeloep": 50.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "356253313",
          "plassertBeloep": 52.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Forsinkelsesrente Forskuddstrekk - 2021/4",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2021-10-19",
          "opprinneligKravforfallsbeloep": 52.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        },
        {
          "kravforfallIdentifikator": "361313761",
          "plassertBeloep": 18335.0,
          "plassertDato": "2022-01-18",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Motpost tilbakebetaling - 0",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-01-18",
          "opprinneligKravforfallsbeloep": 18335.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "76940524802"
      },
      "innbetaltFra": {
        "kidnummer": "7900011880540002515",
        "meldingSendtTilMottaker": "7900011880540002515",
        "konto": {
          "kontoeiersNavn": "Kabir Gurcharan Kaur",
          "kontonummer": "******16135"
        },
        "valutakode": "NOK"
      },
      "innbetalingstype": "Innbetaling 2022-01-17"
    },
    {
      "partIdentifikator": "13114614453",
      "innbetalingsidentifikator": "85214061",
      "innbetalingsdato": "2022-04-12",
      "innbetaltBeloep": -23750.0,
      "plassertKrav": [
        {
          "kravforfallIdentifikator": "364362589",
          "plassertBeloep": 23750.0,
          "plassertDato": "2022-04-12",
          "kravbeskrivelse": {
            "spraakTekst": [
              {
                "tekst": "Utskrevet forskuddsskatt, person - 2022",
                "spraak": "nb"
              }
            ]
          },
          "kravforfallsdato": "2022-03-15",
          "opprinneligKravforfallsbeloep": 23750.0,
          "gjenstaaendeKravforfallsbeloep": 0.0
        }
      ],
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "76940524802"
      },
      "innbetaltFra": {
        "kidnummer": "7900011880501220017",
        "meldingSendtTilMottaker": "7900011880501220017",
        "konto": {
          "kontoeiersNavn": "Gurcharan Singh",
          "kontonummer": "******08808"
        },
        "valutakode": "NOK"
      },
      "innbetalingstype": "Innbetaling 2022-04-12"
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
| KB-005   | 403             | Feil i forbindelse med samtykketoken.                          |
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

I første omgang er det test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være
med å pilotere løsningene.

## Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.
Men egenskaper ved enhetene som har testdata kan søkes frem i Tenor.

## Testdata

Følgende enkeltmannsforetak (ENK) er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne.
Vær oppmerksom på at det er et levende testdatasett som kan endre seg i løpet av testperioden. Ta kontakt dersom du har
behov for ytterligere testdata.

| Organisasjonsnummer | 
|---------------------|
| 310478717           |
| 313367002           |
| 311851381           |
| 314961900           |
| 314055403           |
| 212201782           |

</TabItem>
</Tabs>


