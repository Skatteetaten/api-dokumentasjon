---
title: Innrapportering Verdipapirfond API
slug: /api/innrapportering-verdipapirfond
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, verdipapirfond,  tredjepartsopplysninger ]
keywords: [ grunnlagsdata ]
last_updated: Mai 16, 2025
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av Verdipapirfond (RF-1301)</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringverdipapirfond`

Skatteetaten må gi tilgang til scope. Søk om dette [her](https://www.skatteetaten.no/samarbeidspartnere/sluttbrukersystemer/tredjepartsopplysninger-sbs/#bestill-tilgang-til-tjenesten-krever-innlogging).

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen.

## Systemtilgang med systembruker

Bruk av API-et krever systemtilgang med systembruker, som er ny funksjonalitet i Maskinporten levert av Digdir.
Informasjon vedr. dette finnes [her](../om/systembruker.md).

Dette API-et krever at systemet og dets systembrukere har tilgang til én eller flere av følgende tilgangspakker:

```json
"accessPackages": [
    {
        "urn": "urn:altinn:accesspackage:regnskapsforer-med-signeringsrettighet"
    },
    {
        "urn": "urn:altinn:accesspackage:regnskapsforer-uten-signeringsrettighet"
    },
    {
        "urn": "urn:altinn:accesspackage:ansvarlig-revisor"
    },
    {
        "urn": "urn:altinn:accesspackage:revisormedarbeider"
    },
    {
        "urn": "urn:altinn:accesspackage:skattegrunnlag"
    }
]
```

Ved bruk av standard systembruker kan man også benytte enkeltrettighet for tilgang til tjenesten: 

```json
"rights": [
    {
        "resource": [
            {
                "id": "urn:altinn:resource",
                "value": "ske-innrapportering-verdipapirfond"
            }
        ]
    }
]
```

## Teknisk spesifikasjon

URL-er til API-et, beskrivelse av parametere, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-verdipapirfond-api/0.0.1)

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

API-et for innrapportering av verdipapirfond har to endepunkter

* __POST innsending__: Mottar tredjepartsopplysninger om verdipapirfond. Et kall mot API-et er en rapportering for en
  organisasjon gitt av en oppgavegiver og som gjelder et inntektsår.
* __GET uthenting_dokument__: Henter ut et spesifikt dokument knyttet til en forsendelse i dialogporten

API-et validerer mottatte data mot JSON schema beskrevet på SwaggerHub.
Se [feilkoder](innrapportering-verdipapirfond?tab=Feilkoder) for
relaterte feilmeldinger.

Se også [eksempler](innrapportering-verdipapirfond?tab=Eksempler) for de ulike endepunktene.

### Parameter: idempotencyKey

`idempotencyKey`-parameteren er påkrevet. Innholdet skal være en unik UUID. Hvert nye kall til API-et skal ha en
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
https://innrapporteringverdipapirfond.api.{env}.no/v1/{inntektsaar}
```

### JSON

#### Eksempel på innsending

```json
{
  "leveranse": {
    "kildesystem": "SkatteSystemetX",
    "oppgavegiver": {
      "organisasjonsnummer": "123456789",
      "kontaktinformasjon": {
        "navn": "Ola Nordmann",
        "telefonnummer": "12345678",
        "varselEpostadresse": "ola@nordmann.no",
        "varselSmsMobilnummer": "98765432"
      }
    },
    "inntektsaar": 2024,
    "oppgavegiversLeveranseReferanse": "REF-XYZ-2024",
    "leveransetype": "ordinaer",
    "oppgave": [
      {
        "oppgaveeier": {
          "person": {
            "foedselsnummer": "01010112345",
            "fornavn": "Kari",
            "mellomnavn": "Ann",
            "etternavn": "Nordmann",
            "foedselsdato": "1990-05-14",
            "bostedsland": [
              "NO"
            ]
          },
          "alternativIdentifikator": "ALTID001",
          "internasjonalIdentifikator": {
            "identifikator": "INTID001",
            "identifikatortype": "GIIN",
            "utstedtAvLand": "NO"
          },
          "adresse": {
            "adresseStrukturert": {
              "byEllerStedsnavn": "Oslo"
            },
            "landkode": "NO",
            "adresseBrukstype": "bosted"
          }
        },
        "erForeningskonto": false,
        "fondetsOrganisasjonsnummer": "111222333",
        "fondetsNavn": "Global Invest Fond",
        "fondetsIsin": "NO0012345678",
        "fondetsGiin": "GIIN1234567890",
        "oppgavegiverErFondetsForvalter": true,
        "fondstype": "verdipapirfond",
        "aksjeandelForAaret": "75.5",
        "beholdning": {
          "antallAndeler": "100.00",
          "formuesverdiAksjedel": "25000.00",
          "formuesverdiRentedel": "15000.00",
          "formuesverdiUoppgjorteHandlerAksjedel": "500.00",
          "formuesverdiUoppgjorteHandlerRentedel": "300.00",
          "opphoerssaldoForFatca": "200.00"
        },
        "erverv": [
          {
            "ervervsid": "ERV001",
            "antallAndelerErvervet": "50.00",
            "ervervstidspunkt": "2024-01-05T12:00:00Z",
            "transaksjonstidspunkt": "2024-01-06T12:00:00Z",
            "inngangsverdi": "10000.00",
            "akkumulertRisk": "500.00",
            "skjermingsgrunnlag": "9800.00",
            "skjermingsfradrag": "200.00",
            "ubenyttetSkjermingsfradragTilFremfoering": "100.00",
            "ervervstype": "arvEllerGave",
            "overtakelse": {
              "overtattFraVedSkilsmisse": {
                "andelseier": {
                  "navn": "Tidligere Partner",
                  "foedselsnummer": "12039412345"
                }
              },
              "overtakelsestidspunkt": "2023-12-31T00:00:00Z",
              "aksjeandelForOvertattErverv": "60.0",
              "ubenyttetSkjermingsfradragFraTidligere": "150.00"
            }
          }
        ],
        "realisasjon": [
          {
            "realisasjonsid": "REAL123",
            "antallAndelerRealisert": "10.00",
            "realisasjonstype": "vanligRealisasjon",
            "realisasjonstidspunkt": "2024-02-01T12:00:00Z",
            "realisasjonsvederlag": "3000.00",
            "realisasjonskostnader": "100.00",
            "detaljrealisasjon": [
              {
                "detaljrealisasjonsid": "DET123",
                "ervervsid": "ERV123",
                "ervervstidspunkt": "2023-01-15T10:00:00Z",
                "antallAndelerRealisert": "10.00",
                "inngangsverdi": "2000.00",
                "aksjeandelPaaErvervstidspunkt": "75.0",
                "akkumulertRisk": "100.00",
                "ubenyttetSkjermingsfradragFraTidligere": "50.00",
                "anvendtSkjermingForGevinst": "10.00",
                "realisasjonsvederlag": "3000.00",
                "realisasjonskostnader": "100.00",
                "gevinstEllerTapPaaAksjer": {
                  "skattepliktigGevinst": "900.00"
                },
                "gevinstEllerTapPaaRenter": {
                  "fradragsberettigetTap": "50.00"
                },
                "overdragelse": {
                  "verdiVedOverdragelsestidspunkt": "3000.00",
                  "overdragelsestype": "overfoering",
                  "overdrattTilVedFisjonEllerFusjon": {
                    "fondetsIsin": "NO0012345678"
                  }
                }
              }
            ]
          }
        ],
        "utbytteUtbetaling": [
          {
            "utdelingstidspunkt": "2024-03-01T00:00:00Z",
            "utbetaltBeloepPerAndel": "2.00",
            "utdeltUtbytte": "200.00",
            "trukketKildeskatt": "30.00",
            "detaljUtbytte": [
              {
                "ervervsid": "ERV123",
                "antallAndelerForUtbytte": "100.00",
                "utdeltUtbytte": "200.00",
                "inngangsverdi": "10000.00",
                "akkumulertRisk": "500.00",
                "ubenyttetSkjermingsfradragFraTidligere": "50.00",
                "aaretsSkjermingsfradrag": "20.00",
                "anvendtSkjermingPaaUtbytte": "10.00",
                "skattepliktigUtbytte": "190.00"
              }
            ]
          }
        ],
        "erKunRentepapirer": false,
        "disponent": [
          {
            "organisasjon": {
              "organisasjonsnummer": "888888881",
              "organisasjonsnavn": "Disponent Org 1"
            },
            "internasjonalIdentifikator": {
              "identifikator": "DISPINTID1",
              "identifikatortype": "TIN",
              "utstedtAvLand": "NO"
            },
            "adresse": {
              "adresseStrukturert": {
                "byEllerStedsnavn": "By1"
              },
              "landkode": "NO",
              "adresseBrukstype": "forretningsadresse"
            }
          }
        ],
        "reellRettighetshaver": [
          {
            "person": {
              "foedselsnummer": "29018812001",
              "fornavn": "Rett1",
              "mellomnavn": "Mellom",
              "etternavn": "Haver"
            },
            "internasjonalIdentifikator": {
              "identifikator": "RTHID1",
              "identifikatortype": "TIN",
              "utstedtAvLand": "NO"
            },
            "adresse": {
              "adresseStrukturert": {
                "byEllerStedsnavn": "Sted1"
              },
              "landkode": "NO",
              "adresseBrukstype": "bosted"
            }
          }
        ],
        "forvaltersOrganisasjonsnummer": "999888777",
        "avkastningPaaRentedel": "1200.00",
        "returprovisjon": "500.00",
        "forvaltningskostnad": "750.00",
        "erRegistrertReselgerandel": true
      }
    ],
    "oppgaveoppsummering": {
      "antallOppgaver": 1,
      "sumBeholdningAntallAndeler": "100.00",
      "sumBeholdningFormuesverdiAksjedel": "25000.00",
      "sumBeholdningFormuesverdiRentedel": "15000.00",
      "sumBeholdningFormuesverdiUoppgjorteHandlerAksjedel": "500.00",
      "sumBeholdningFormuesverdiUoppgjorteHandlerRentedel": "300.00",
      "sumUtbytteKildeskattTrukketAvForvalter": "30.00",
      "sumErvervAntallAndeler": "50.00",
      "sumSkattepliktigUtbytte": "190.00",
      "sumAvkastningPaaRentedel": "1200.00",
      "sumRealisasjonAntallAndeler": "10.00",
      "sumRealisasjonGevinstPaaAksjer": "900.00",
      "sumRealisasjonTapPaaAksjer": "0.00",
      "sumRealisasjonGevinstPaaRenter": "0.00",
      "sumRealisasjonTapPaaRenter": "50.00"
    }
  }
}
```

#### Eksempel på respons

```json
{
    "dialogId": "0193b5cd-cb85-7320-bd8c-6c78c88dc8af",
    "forsendelseId": "0193b5cd-cbce-7dbd-b188-1437db673767",
    "oppgavegiversLeveranseReferanse": "EksternReferanse_2013_1",
    "antallSletteoppgaver": 0,
    "antallOppgaver": 2
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                   |
|----------|-----------------|----------------------------------------------|
| GLD_001  | 500             | Uventet feil på tjenesten                    |
| GLD_004  | 401             | Feil i forbindelse med autentisering         |
| GLD_005  | 403             | Feil i forbindelse med autorisering          |
| GLD_006  | 400             | Feil i request                               |
| GLD_008  | 400             | Strukturell feil i tilknyttet dataformat     |
| GLD_010  | 400             | Feil i forbindelse med validering av payload |
| GLD_011  | 400             | Feil i metadata                              |
| GLD_017  | 500             | Uspesifisert systemfeil                      |
| GLD_019  | 409             | Idempotensnøkkel er benyttet tidligere       |
| GLD_021  | 404             | Finner ikke forespurt ressurs                |
| GLD_022  | 405             | HTTP-metode ikke støttet                     |
| GLD_023  | 500             | Uventet feil i et bakenforliggende system    |

Feilresponsene kan også inneholde en feilspesifiseringskode som presiserer feilen ytterligere.
Tabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.
Dersom det finnes mer detaljert feilinformasjon enn generelt feilområde vil det beskrives i melding, sti og angitt verdi
feltene.

| Feilspesifiseringskode | Feilområde                                                                                  | Årsak                                                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1007               | Mangler Token                                                                               | Det er ikke lagt ved noen authorization header med token på request                                                         |
| GLD_1008               | Ugyldig token                                                                               | Token oppgitt i authorization header er ugyldig                                                                             |
| GLD_1015               | Ikke autorisert for å levere på denne dialogen                                              | Organisasjonen som leverer har ikke rettighet til å levere for denne oppgavegiveren                                         |
| GLD_1022               | Feil i parametre                                                                            | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1023               | Finner ingen ressurs for denne URL-en                                                       | Det er ikke noe innhold tilgjengelig på denne URL-en                                                                        |
| GLD_1027               | Inntektsår er ikke støttet                                                                  | Det er ikke tillatt å levere på oppgitt inntektsår                                                                          |
| GLD_1028               | Header mangler                                                                              | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json                                              | Accept header er feil. API-et har kun støtte for JSON i respons                                                             |
| GLD_1050               | Finner ikke et dokument med denne IDen på denne forsendelsen                                | Det finnes ikke noe dokument med gitt id på angitt forsendelse                                                              |
| GLD_1052               | Inntektsår i path og i innsending er ulike                                                  | Inntektsår i innsending i JSON body og inntektsår i path må være like                                                       |
| GLD_1053               | Uventet feil i et bakenforliggende system, vennligst prøv igjen senere                      |                                                                                                                             |
| GLD_1054               | Det finnes ingen dialog for denne kombinasjonen av inntektsår, organisjonsnummer og ordning |                                                                                                                             |

</TabItem>

<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

![verdipapirfond](../../static/download/Informasjonsmodell_Verdipapirfond.png)
</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

### Testmiljøer

For spesifikke URL-er til testmiljø hos Skatteetaten,
se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-verdipapirfond-api/0.0.1).

Digdir benytter TT02 som testmiljø, hvor følgende tilbys:

* DialogPorten
* Autentisering - Maskinporten
* Autorisering - systembruker
* Altinn innboks

Konsumenter må ha egne testmiljøer som kan kobles mot testmiljøer hos Skatteetaten og Digdir.

### Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md) for
denne tjenesten. Men egenskaper ved enhetene som har testdata kan søkes frem i Tenor.

### Testdata

Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatasøk tilbyr dette.
Det er ikke tillatt å bruke/sende skarpe data i test pga krav fra GDPR-regelverket.

Det finnes foreløpig ingen testdata for denne tjenesten. Denne siden oppdateres fortløpende ettersom testdata blir
tilgjengelig.

</TabItem>
<TabItem headerText="Kontakt oss" itemKey="itemKey-6">

Har du spørsmål til Skatteetaten om Verdipapirfond API, kan du sende oss
e-post: [altinnreetablering\@skatteetaten.no](mailto:altinnreetablering@skatteetaten.no)  
Vær oppmerksom på at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra
Altinn II til Altinn 3.

</TabItem>
</Tabs>
