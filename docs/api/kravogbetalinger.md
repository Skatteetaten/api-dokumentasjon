---
title: Krav og betalinger API
slug: /api/kravogbetalinger
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Innkreving ]
keywords: [ kravogbetalinger, krav og betalinger, innkreving ]
last_updated: Oct 04, 2023
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

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Krav og betalinger API - På vegne av`

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/krav-og-betalinger-api) på SwaggerHub.

API-et har 4 endepunkter:

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

| Navn på rettighetspakke | Formål med rettighetspakke | Egenskaper ved rettighetspakke |
|-------------------------|----------------------------|--------------------------------|
| finans                  | Banker og finansforetak som skal vise krav og betalinger i nettbank | Krever samtykke og gir tilgang til alle 4 endepunkter med oppslag for virksomheter (vil etter hvert bli utvidet også til oppslag for personer) |
| regnskapssystem         | Regnskapssystemer som skal vise krav og betalinger i sine sluttbrukersystemer | Gir tilgang til alle 4 endepunkter med oppslag for virksomheter |

## Samtykke

For rettighetspakkene `finans` og `regnskapssystem` kreves [samtykke](../om/samtykke.md) for dette API-et.

| Tjenestekode | Formål |
|------------------------------------|--------------|
| 5928_202301 | Kreves for rettighetspakken `finans` |

## Datakatalog

Siden dette er en beta-tjeneste, er den pt. ikke publisert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Åpne krav

### Eksempel på request URL

```
https://{env}/api/innkreving/kravogbetalinger/v1/finans/212201782/aapnekrav
```

### Eksempel på respons

```json
{
  "partIdentifikator": "212201782",
  "skjermet": false,
  "aapentKravMedGjenstaaendeBeloep": [
    {
      "partIdentifikator": "212201782",
      "kravidentifikator": "krav-1234",
      "kravtype": "RESTSKATT",
      "opprinneligBeloep": 10000.0,
      "gjenstaaendeBeloep": 10000.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",
          "forfallsdato": "2023-02-21",
          "opprinneligBeloep": 10000.0,
          "gjenstaaendeBeloep": 10000.0,
          "betalingsinformasjon": {
            "konto": {
              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",
              "kontonummer": "63450624804",
              "iban": "NO42 6345 06 24804",
              "swiftBIC": "NDEANOKK"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "inn-12345",
              "plassertBeloep": -1000.0,
              "plassertDato": "2023-02-05",
              "innbetalingsdato": "2023-01-30",
              "innbetaltBeloep": 0.0,
              "innbetaltFra": {
                "konto": {}
              },
              "innbetalingstype": "Bankoverføring"
            }
          ],
          "plassertMotkrav": [
            {
              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",
              "plassertBeloep": -1000.0,
              "kravtype": "RESTSKATT",
              "plassertDato": "2023-02-05",
              "kravbeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Restskatt",
                    "spraak": "nb"
                  }
                ]
              },
              "forfallsdato": "2023-01-30",
              "kravperiode": {
                "periodeBeskrivelse": {
                  "spraakTekst": [
                    {
                      "tekst": "2023/02",
                      "spraak": "nb"
                    }
                  ]
                }
              }
            }
          ]
        }
      ],
      "stipulerteRenter": 200.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Restskatt",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "2023/02",
              "spraak": "nb"
            }
          ]
        }
      },
      "opprettelsesdatoForKrav": "2023-01-30",
      "kravgruppe": "Skatt",
      "fastsettingsmaate": "blank"
    },
    {
      "partIdentifikator": "04827896468",
      "kravidentifikator": "krav-1234",
      "kravtype": "RESTSKATT",
      "opprinneligBeloep": 10000.0,
      "gjenstaaendeBeloep": 10000.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",
          "forfallsdato": "2023-02-21",
          "opprinneligBeloep": 10000.0,
          "gjenstaaendeBeloep": 10000.0,
          "betalingsinformasjon": {
            "konto": {
              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",
              "kontonummer": "63450624804",
              "iban": "NO42 6345 06 24804",
              "swiftBIC": "NDEANOKK"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "inn-12345",
              "plassertBeloep": -1000.0,
              "plassertDato": "2023-02-05",
              "innbetalingsdato": "2023-01-30",
              "innbetaltBeloep": 0.0,
              "innbetaltFra": {
                "konto": {}
              },
              "innbetalingstype": "Bankoverføring"
            }
          ],
          "plassertMotkrav": [
            {
              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",
              "plassertBeloep": -1000.0,
              "kravtype": "RESTSKATT",
              "plassertDato": "2023-02-05",
              "kravbeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Restskatt",
                    "spraak": "nb"
                  }
                ]
              },
              "forfallsdato": "2023-01-30",
              "kravperiode": {
                "periodeBeskrivelse": {
                  "spraakTekst": [
                    {
                      "tekst": "2023/02",
                      "spraak": "nb"
                    }
                  ]
                }
              }
            }
          ]
        }
      ],
      "stipulerteRenter": 200.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Restskatt",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "2023/02",
              "spraak": "nb"
            }
          ]
        }
      },
      "opprettelsesdatoForKrav": "2023-01-30",
      "kravgruppe": "Skatt",
      "fastsettingsmaate": "blank"
    }
  ],
  "innbetalingMedUplassertBeloep": [
    {
      "partIdentifikator": "212201782",
      "innbetalingsidentifikator": "inn-1234",
      "innbetalingsdato": "2023-03-01",
      "innbetaltBeloep": 1000.0,
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "98766543210"
      },
      "innbetaltFra": {
        "konto": {
          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",
          "kontonummer": "******43210"
        }
      },
      "innbetalingstype": "bankoverføring"
    },
    {
      "partIdentifikator": "04827896468",
      "innbetalingsidentifikator": "inn-1234",
      "innbetalingsdato": "2023-03-01",
      "innbetaltBeloep": 1000.0,
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "98766543210"
      },
      "innbetaltFra": {
        "konto": {
          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",
          "kontonummer": "******43210"
        }
      },
      "innbetalingstype": "bankoverføring"
    }
  ],
  "totalOversikt": {
    "sumStipulerteRenter": 400.0,
    "sumForfalteKrav": 20000.0,
    "sumIkkeForfalteKrav": 0.0,
    "sumUplasserteInnbetalinger": 0.0,
    "saldo": 20400.0
  },
  "oversiktPerKravgruppe": [
    {
      "kravgruppe": "Skatt",
      "sumStipulerteRenter": 400.0,
      "sumForfalteKrav": 20000.0,
      "sumIkkeForfalteKrav": 0.0,
      "saldo": 20400.0
    }
  ]
}
```

## Krav

### Eksempel på request URL

```
https://{env}/api/innkreving/kravogbetalinger/v1/finans/212201782/krav?fraOgMed=2023-01-01&tilOgMed=2023-09-01
```

### Eksempel på respons

```json
{
  "partIdentifikator": "212201782",
  "periode": {
    "fraOgMed": "2023-01-01",
    "tilOgMed": "2023-09-01"
  },
  "skjermet": false,
  "krav": [
    {
      "partIdentifikator": "212201782",
      "kravidentifikator": "krav-1234",
      "kravtype": "RESTSKATT",
      "opprinneligBeloep": 10000.0,
      "gjenstaaendeBeloep": 10000.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",
          "forfallsdato": "2023-02-21",
          "opprinneligBeloep": 10000.0,
          "gjenstaaendeBeloep": 10000.0,
          "betalingsinformasjon": {
            "konto": {
              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",
              "kontonummer": "63450624804",
              "iban": "NO42 6345 06 24804",
              "swiftBIC": "NDEANOKK"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "inn-12345",
              "plassertBeloep": -1000.0,
              "plassertDato": "2023-02-05",
              "innbetalingsdato": "2023-01-30",
              "innbetaltBeloep": 0.0,
              "innbetaltFra": {
                "konto": {}
              },
              "innbetalingstype": "Bankoverføring"
            }
          ],
          "plassertMotkrav": [
            {
              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",
              "plassertBeloep": -1000.0,
              "kravtype": "RESTSKATT",
              "plassertDato": "2023-02-05",
              "kravbeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Restskatt",
                    "spraak": "nb"
                  }
                ]
              },
              "forfallsdato": "2023-01-30",
              "kravperiode": {
                "periodeBeskrivelse": {
                  "spraakTekst": [
                    {
                      "tekst": "2023/02",
                      "spraak": "nb"
                    }
                  ]
                }
              }
            }
          ]
        }
      ],
      "stipulerteRenter": 200.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Restskatt",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "2023/02",
              "spraak": "nb"
            }
          ]
        }
      },
      "opprettelsesdatoForKrav": "2023-01-30",
      "kravgruppe": "Skatt",
      "fastsettingsmaate": "blank"
    },
    {
      "partIdentifikator": "04827896468",
      "kravidentifikator": "krav-1234",
      "kravtype": "RESTSKATT",
      "opprinneligBeloep": 10000.0,
      "gjenstaaendeBeloep": 10000.0,
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",
          "forfallsdato": "2023-02-21",
          "opprinneligBeloep": 10000.0,
          "gjenstaaendeBeloep": 10000.0,
          "betalingsinformasjon": {
            "konto": {
              "bankinformasjon": "Nordea Bank Norge ASA, Postboks 1166 Sentrum, 0107 Oslo, Norge",
              "kontonummer": "63450624804",
              "iban": "NO42 6345 06 24804",
              "swiftBIC": "NDEANOKK"
            }
          },
          "plassertInnbetaling": [
            {
              "innbetalingsIdentifikator": "inn-12345",
              "plassertBeloep": -1000.0,
              "plassertDato": "2023-02-05",
              "innbetalingsdato": "2023-01-30",
              "innbetaltBeloep": 0.0,
              "innbetaltFra": {
                "konto": {}
              },
              "innbetalingstype": "Bankoverføring"
            }
          ],
          "plassertMotkrav": [
            {
              "kravforfallsIdentifikator": "93d29b06-6cbd-4999-bd23-b0a13c47da51",
              "plassertBeloep": -1000.0,
              "kravtype": "RESTSKATT",
              "plassertDato": "2023-02-05",
              "kravbeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Restskatt",
                    "spraak": "nb"
                  }
                ]
              },
              "forfallsdato": "2023-01-30",
              "kravperiode": {
                "periodeBeskrivelse": {
                  "spraakTekst": [
                    {
                      "tekst": "2023/02",
                      "spraak": "nb"
                    }
                  ]
                }
              }
            }
          ]
        }
      ],
      "stipulerteRenter": 200.0,
      "kravbeskrivelse": {
        "spraakTekst": [
          {
            "tekst": "Restskatt",
            "spraak": "nb"
          }
        ]
      },
      "kravperiode": {
        "periodeBeskrivelse": {
          "spraakTekst": [
            {
              "tekst": "2023/02",
              "spraak": "nb"
            }
          ]
        }
      },
      "opprettelsesdatoForKrav": "2023-01-30",
      "kravgruppe": "Skatt",
      "fastsettingsmaate": "blank"
    }
  ]
}
```

## Innbetalinger

### Eksempel på request URL

```
GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/212201782/innbetalinger?fraOgMed=2023-01-01&tilOgMed=2023-09-01
```

### Eksempel på respons

```json
{
  "partIdentifikator": "212201782",
  "periode": {
    "fraOgMed": "2023-01-01",
    "tilOgMed": "2023-09-01"
  },
  "skjermet": false,
  "innbetaling": [
    {
      "partIdentifikator": "212201782",
      "innbetalingsidentifikator": "inn-1234",
      "innbetalingsdato": "2023-03-01",
      "innbetaltBeloep": 1000.0,
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "98766543210"
      },
      "innbetaltFra": {
        "konto": {
          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",
          "kontonummer": "******43210"
        }
      },
      "innbetalingstype": "bankoverføring"
    },
    {
      "partIdentifikator": "04827896468",
      "innbetalingsidentifikator": "inn-1234",
      "innbetalingsdato": "2023-03-01",
      "innbetaltBeloep": 1000.0,
      "uplassertBeloep": 0.0,
      "mottakersKontonummer": {
        "kontonummer": "98766543210"
      },
      "innbetaltFra": {
        "konto": {
          "kontoeiersNavn": "LYSTIG KLAM KATT TUSJ",
          "kontonummer": "******43210"
        }
      },
      "innbetalingstype": "bankoverføring"
    }
  ]
}
```

## Utbetalinger

### Eksempel på request URL

```
GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/871978433/utbetalinger?fraOgMed=2022-01-01&tilOgMed=2021-12-31
```

### Eksempel på respons

```json
{
  "partIdentifikator": "312438623",
  "periode": {
    "fraOgMed": "2023-01-01",
    "tilOgMed": "2023-09-01"
  },
  "skjermet": false,
  "utbetaling": [
    {
      "partIdentifikator": "312438623",
      "utbetalingsidentifikator": "147654",
      "utbetaltdato": "2023-08-21",
      "utbetaltBeloep": 62374.0,
      "betaltTil": {
        "meldingSendtTilMottaker": "Tilgode skatt 2023",
        "konto": {
          "kontoeiersNavn": "OVERFØLSOM GLAD TIGER AS",
          "kontonummer": "627xxxxxx"
        },
        "valutakode": "NOK"
      },
      "grunnlagForUtbetaling": {
        "kreditKrav": [
          {
            "kravforfallidentifikator": "6412123",
            "opprinneligBeloep": -62374.0,
            "gjenstaaendeBeloep": 0.0,
            "utbetaltBeloep": 62374.0,
            "kravbeskrivelse": {
              "spraakTekst": [
                {
                  "tekst": "Tibakebetaling restskatt - 2023",
                  "spraak": "nb"
                }
              ]
            },
            "kravtype": "RESTERENDE_SKT_TILB",
            "kravperiode": {
              "periodeBeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Inntektstår",
                    "spraak": "nb"
                  }
                ]
              },
              "aar": "2023"
            }
          }
        ]
      },
      "utbetalingstatus": "bekreftet"
    },
    {
      "partIdentifikator": "312438623",
      "utbetalingsidentifikator": "147654",
      "utbetaltdato": "2023-08-21",
      "utbetaltBeloep": 62374.0,
      "betaltTil": {
        "meldingSendtTilMottaker": "Tilgode skatt 2023",
        "konto": {
          "kontoeiersNavn": "OVERFØLSOM GLAD TIGER AS",
          "kontonummer": "627xxxxxx"
        },
        "valutakode": "NOK"
      },
      "grunnlagForUtbetaling": {
        "kreditKrav": [
          {
            "kravforfallidentifikator": "6412123",
            "opprinneligBeloep": -62374.0,
            "gjenstaaendeBeloep": 0.0,
            "utbetaltBeloep": 62374.0,
            "kravbeskrivelse": {
              "spraakTekst": [
                {
                  "tekst": "Tibakebetaling restskatt - 2023",
                  "spraak": "nb"
                }
              ]
            },
            "kravtype": "RESTERENDE_SKT_TILB",
            "kravperiode": {
              "periodeBeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Inntektstår",
                    "spraak": "nb"
                  }
                ]
              },
              "aar": "2023"
            }
          }
        ]
      },
      "utbetalingstatus": "bekreftet"
    },
    {
      "partIdentifikator": "312438623",
      "utbetalingsidentifikator": "147654",
      "utbetaltdato": "2023-08-21",
      "utbetaltBeloep": 62374.0,
      "betaltTil": {
        "meldingSendtTilMottaker": "Tilgode skatt 2023",
        "konto": {
          "kontoeiersNavn": "OVERFØLSOM GLAD TIGER AS",
          "kontonummer": "627xxxxxx"
        },
        "valutakode": "NOK"
      },
      "grunnlagForUtbetaling": {
        "kreditKrav": [
          {
            "kravforfallidentifikator": "6412123",
            "opprinneligBeloep": -62374.0,
            "gjenstaaendeBeloep": 0.0,
            "utbetaltBeloep": 62374.0,
            "kravbeskrivelse": {
              "spraakTekst": [
                {
                  "tekst": "Tibakebetaling restskatt - 2023",
                  "spraak": "nb"
                }
              ]
            },
            "kravtype": "RESTERENDE_SKT_TILB",
            "kravperiode": {
              "periodeBeskrivelse": {
                "spraakTekst": [
                  {
                    "tekst": "Inntektstår",
                    "spraak": "nb"
                  }
                ]
              },
              "aar": "2023"
            }
          }
        ]
      },
      "utbetalingstatus": "bekreftet"
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
| 313367002           |
| 311851381           |
| 314961900           |
| 314055403           |
| 212201782           |

</TabItem>
</Tabs>


