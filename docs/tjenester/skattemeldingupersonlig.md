---
title: Skattemelding upersonlig API
slug: /skattemeldingupersonlig
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API]
keywords: [selvangivelse, skattemelding, SummertSkattegrunnlag, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer opplysninger som fremkommer i skattemeldingen for en virksomhet.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattemeldingupersonlig`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skattemelding upersonlig API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-upersonlig-api) ligger i SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Rettighetspakker
  
| Navn på rettighetspakke |	
|---|
| ssb |
  
## Støttetjenester
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skattemelding upersonlig hendelser API`

## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/04d29ccb-2bd2-3512-9f0d-138ff342f360) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Curl

Her er et eksempel på et kall med curl mot tjenesten for å hente fastsatt skattemelding. Du må legge sertifikat og nøkkel som parametre til curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/skattemeldingupersonlig/v1/fastsatt/ssb/2021/210962492"
```

## JSON

```json
{
  "norskIdentifikator": "899613392",
  "inntektsaar": "2021",
  "inntektOgUnderskudd": {
    "inntekt": {
      "naeringsinntekt": 0
    },
    "id": "INNTEKT_OG_UNDERSKUDD",
    "samletInntekt": {
      "beloep": 0
    }
  },
  "formueOgGjeld": {
    "samletVerdiFoerEventuellVerdsettingsrabatt": {
      "beloep": 1361742
    },
    "samletVerdiBakAksjeneISelskapet": {
      "beloep": 1361742
    },
    "fasteEiendommer": {
      "fastEiendomSomFormuesobjekt": [
        {
          "id": "29e8d7ba-3728-44c7-9ca4-a51f2e39efdf",
          "eiendomstype": "naeringseiendom",
          "andelAvFormuesverdi": 100.0,
          "internEiendomsidentifikator": "29e8d7ba-3728-44c7-9ca4-a51f2e39efdffastEiendom",
          "formuesverdiForFormuesandel": {
            "beloep": 748958
          },
          "verdiFoerVerdsettingsrabattForFormuesandel": 1361742,
          "formuesspesifikasjonForUtleidNaeringseiendom": {
            "formuesverdiForNaeringseiendom": {
              "beloep": 748958
            },
            "beregnetUtleieverdiForNaeringseiendom": {
              "beloep": 1361742
            },
            "grunnlagForBeregnetUtleieverdiForNaeringseiendom": {
              "bruttoUtleieinntekt": {
                "beloep": 200001.0
              },
              "aarligUtleieinntektIAaretFoerInntektsaar": {
                "beloep": 20503.0
              },
              "aarligUtleieinntektToAarFoerInntektsaar": {
                "beloep": 30000.0
              }
            },
            "areal": 2000,
            "naeringseiendomstype": "butikkEllerKjoepesenter",
            "antallMaanederUtleid": 10,
            "oevrigTilVisningAvUtleidNaeringseiendom": {
              "aarligUtleieinntekt": 240001,
              "stipulertUtleieinntekt": 240001,
              "gjennomsnittligUtleieinntekt": 96835
            }
          }
        }
      ],
      "fastEiendom": [
        {
          "id": "29e8d7ba-3728-44c7-9ca4-a51f2e39efdffastEiendom",
          "eierandel": 100.0,
          "internEiendomsidentifikator": "29e8d7ba-3728-44c7-9ca4-a51f2e39efdffastEiendom",
          "adresseopplysninger": {
            "poststed": {
              "poststedsnavn": "LINESØYA",
              "postnummer": "7836"
            },
            "vegadresse": [
              {
                "adressenavn": "Gamle Nadderudvei",
                "adressenummer": {
                  "husnummer": "55"
                }
              }
            ]
          },
          "eksternEiendomsidentifikator": {
            "kommunenummer": "3026",
            "sergMatrikkelnummer": {
              "gaardsnummer": 43,
              "bruksnummer": 5417
            }
          }
        }
      ]
    }
  },
  "opprettetDato": "2022-04-29T08:27:39.88+02:00",
  "skjermet": false
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode | HTTP Statuskode | Feilområde                                                              |
|----------|-----------------|-------------------------------------------------------------------------|
| SMU-001  | 500             | Uventet feil på tjenesten.                                              |
| SMU-002   | 500             | Uventet feil i et bakenforliggende system.                              |
| SMU-003   | 404             | Ukjent url benyttet.                                                    |
| SMU-004   | 401             | Feil i forbindelse med autentisering.                                   |
| SMU-005   | 403             | Feil i forbindelse med autorisering.                                    |
| SMU-006   | 400             | Feil i forbindelse med validering av inputdata.                         |
| SMU-007   | 404             | Ingen skattemelding funnet på oppgitt gitt inntektsår og identifikator. |
| SMU-008   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.              |
| SMU-009   | 404             | Ingen organisasjon funnet med oppgitt identifikator.                    |
| SMU-010   | 410             | Skattemeldingen finnes ikke lenger.                                     |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/e48e70c9-70b2-3349-9c32-983febe9a2e6) i Felles datakatalog. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">  

## Tenor testdatasøk
Det finnes pt. ikke Tenor-adapter for denne tjenesten, og testdata er derfor listet her.

## Testdata

| Fødselsnummer | Inntektsår |
|---|---|
| 210962492  | 2021 |
| 310423076  | 2021 |
| 310962074  | 2021 |
| 311768778  | 2021 |
| 312282933  | 2021 |
| 312547678  | 2021 |
| 312737639  | 2021 |
| 313269906  | 2021 |
| 313864138  | 2021 |
| 314093798  | 2021 |
| 314247914  | 2021 |

</TabItem>
</Tabs>

