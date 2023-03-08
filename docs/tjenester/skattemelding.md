---
title: Skattemelding API
slug: /skattemelding
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API]
keywords: [skattemelding]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon som fremkommer i skattemelding for en person.</summary>
<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md) 
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

Obs. Skattemelding-api følger ikke de generelle reglene for versjonering. Skattemelding-api har en egen versjon pr inntektsår. 

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattemelding`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skattemelding API - På vegne av`

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Rettighetspakker
  
| Navn på rettighetspakke |	
|---|
| ssb |
  
## Støttetjenester
For å følge med på endringer tilbyr vi to [støttetjeneste for hendelsesliste](./hendelser.md): 
  * `Skattemelding utkast hendelser API`
  * `Skattemelding fastsatt hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/899c9a8d-0778-3472-9654-f6acd4e7f9ff) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Curl

Her er et eksempel på et kall med curl mot tjenesten for å hente fastsatt skattemelding. Du må legge sertifikat og nøkkel som parametre til curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/skattemelding/fastsatt/ssb/2018/05086900124"
```

## JSON

```json
{
  "skjermet": false,
  "registreringstidspunkt": "2022-02-10T14:47:12.249+01:00",
  "personidentifikator": "16922048030",
  "inntektsaar": "2021",
  "bankLaanOgForsikring": {
    "forsikring": {
      "livsforsikring": [
        {
          "id": "72540f62c52341999c5340327baa4568f521aee1",
          "livsforsikringsselskapetsNavn": "DY PSINDIG UFRUKTBAR LEOPARD ASA",
          "livsforsikringsselskapetsOrganisasjonsnummer": "310091995",
          "forsikringsnummer": "762724741",
          "avkastningAvKapitalforsikringsavtale": {
            "beloep": 139013.0
          },
          "gjenkjoepsverdiAvKapitalforsikringsavtale": {
            "beloep": 8109780.0
          }
        }
      ]
    },
    "konto": [
      {
        "id": "8e0e4f87a91c40e660720bdc313bd83efdaf354e",
        "bankensNavn": "UNGT SOSIAL ISBJØRN SA",
        "organisasjonsnummer": "313032604",
        "kontonummer": "96702145306",
        "innskudd": {
          "beloep": 121471.0
        },
        "opptjenteRenter": {
          "beloep": 2429.0
        }
      }
    ]
  },
  "arbeidTrygdOgPensjon": {
    "loennOgTilsvarendeYtelser": {
      "arbeidsgiver": [
        {
          "id": "e83af408065bad1e2cd32afc114c837deee9486a",
          "navn": "PRESIS TYPISK TIGER AS",
          "samledeYtelserFraArbeidsgiverPerBehandlingsart": [
            {
              "id": "4109138e9208ce98add8b1eb78f8ed9419a47899",
              "beloep": {
                "beloep": 52260.0
              },
              "behandlingsart": "LONN"
            },
            {
              "id": "278a1b82176fb19892c271994dc148bd27419f2d",
              "beloep": {
                "beloep": 6000.0
              },
              "behandlingsart": "EL_KOMMUNIKASJON"
            }
          ],
          "organisasjonsnummer": "313994678"
        }
      ],
      "avkortetFordelVedElektroniskKommunikasjon": [
        {
          "id": "61b00ee66af66f5b824a64828b771c12da1a7c88",
          "beloep": {
            "beloep": 4392
          }
        }
      ]
    },
    "minstefradragOgKostnader": [
      {
        "id": "MINSTEFRADRAG_OG_KOSTNADER_KNYTTET_TIL_ARBEID_OG_ANNEN_INNTEKT",
        "minstefradragIInntekt": {
          "fradragsberettigetBeloep": {
            "beloep": 31800
          },
          "beloepUtenHensynTilValgtPrioritertFradragstype": {
            "beloep": 31800
          }
        }
      }
    ]
  },
  "opprettetDato": "2022-02-10T13:47:11.993+01:00"
}
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                                              |
|----------|-----------------|-------------------------------------------------------------------------|
| SM-001   | 500             | Uventet feil på tjenesten.                                              |
| SM-002   | 500             | Uventet feil i et bakenforliggende system.                              |
| SM-003   | 404             | Ukjent url benyttet.                                                    |
| SM-004   | 401             | Feil i forbindelse med autentisering.                                   |
| SM-005   | 403             | Feil i forbindelse med autorisering.                                    |
| SM-006   | 400             | Feil i forbindelse med validering av inputdata.                         |
| SM-007   | 404             | Ingen skattemelding funnet på oppgitt gitt inntektsår og identifikator. |
| SM-008   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.              |
| SM-009   | 404             | Ingen person funnet med oppgitt identifikator.                    |
| SM-010   | 410             | Skattemeldingen finnes ikke lenger.                    |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/eb60da4f-d6b2-3564-b3a5-e31e25da7538) i Felles datakatalog.
 
Obs. Hvis modellene på denne siden avviker fra open api spesifikasjonen på Swaggerhub, er det open api spesifikasjonen som er mest oppdatert.
  
Skattemeldingtjenesten tilbyr et utvalg fra skattemeldingen tilpasset for deling.  

## Årsversjoner

| År | Informasjonsmodell |
|-----------|--------|
| 2018 | [Informasjonsmodell for skattemelding 2018](../informasjonsmodeller/skattemelding/skattemelding2018.md) |
| 2019 | [Informasjonsmodell for skattemelding 2019](../informasjonsmodeller/skattemelding/skattemelding2019.md) |
  
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Skattemelding".
  
</TabItem>
</Tabs>
