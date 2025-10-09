---
title: Innrapportering innskudd, utlån og renter API
slug: /api/innrapportering-innskuddutlaanrenter
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, innskuddutlaanrenter, innskudd, utlån, renter, finans ]
keywords: [ grunnlagsdata ]
last_updated: Apr 29, 2024
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av tredjepartsopplysninger om innskudd, utlån og renter (RF-1183)</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringinnskuddutlaanrenter`

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
        "urn": "urn:altinn:accesspackage:ansvarlig-revisor"
    },
    {
        "urn": "urn:altinn:accesspackage:skattegrunnlag"
    }
]
```

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-innskuddutlaanrenter-api/0.0.1)

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

API-et for innrapportering av innskudd, utlån og renter har to endepunkter:

* __POST innsending__: Mottar tredjepartsopplysninger om innskudd, utlån og renter. Et kall mot API-et sender inn
  rapportering av innskudd, utlån og renter for én oppgavegiver på et gitt inntektsår.
* __GET uthenting_dokument__: Henter ut ett spesifikt dokument knyttet til en forsendelse i dialogporten

API-et validerer mottatte data mot JSON schema beskrevet på SwaggerHub.
Se [feilkoder](innrapportering-innskuddutlaanrenter?tab=Feilkoder)
for relaterte feilmeldinger.

Se også [eksempler](innrapportering-innskuddutlaanrenter?tab=Eksempler) for de ulike endepunktene.

### Parameter: idempotencyKey

idempotencyKey-parameteren er påkrevet. Innholdet skal være en unik UUID. Hvert nye kall til API-et skal ha en ny
idempotencyKey. Flere etterfølgende POST kall med samme request-body og samme idempotencyKey vil gi den
samme responsen. Kun det første av denne rekken med like API kall vil behandles. IdempotencyKey muliggjør at man trygt
kan prøve innsendinger på nytt der man av ulike årsaker ikke har fått en tilbakemelding fra API-et.

## Datakatalog

Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Innsending

### Eksempel på request URL

```
https://innrapporteringinnskuddutlaanrenter.api.{env}.no/v1/{inntektsaar}
```

### JSON

#### Eksempel på innsending

```json
{
  "leveranse": {
    "kildesystem": "Kildesystemet v2.0.5",
    "oppgavegiver": {
      "organisasjonsnummer": "310218480",
      "kontaktinformasjon": {
        "navn": "Kari Kontakt",
        "telefonnummer": "80080000",
        "varselEpostadresse": "kontakt@eksempelbanken.no",
        "varselSmsMobilnummer": "43999123"
      }
    },
    "inntektsaar": 2023,
    "oppgavegiversLeveranseReferanse": "2013_1",
    "leveransetype": "ordinaer",
    "presentasjonsnavn": "presentasjonsnavn",
    "oppgave": [
      {
        "oppgaveeier": {
          "person": {
            "foedselsnummer": "25044552222",
            "fornavn": "Ola",
            "etternavn": "Nordmann"
          },
          "sektorkode": "8500"
        },
        "kontonummer": "20130000100",
        "skattekontoEgnethet": "1",
        "innskudd": 50569,
        "renter": {
          "opptjenteRenter": 221
        },
        "kontotype": "innskuddskontoINok"
      },
      {
        "oppgaveeier": {
          "organisasjon": {
            "organisasjonsnummer": "987012345",
            "organisasjonsnavn": "Kontoeier AS"
          }
        },
        "kontonummer": "201300002000",
        "skattekontoEgnethet": "0",
        "utlaan": 0,
        "innskudd": 5000,
        "renter": {
          "opptjenteRenter": 200,
          "paaloepteRenter": 0
        },
        "kontotype": "laanekontoINok"
      },
      {
        "oppgaveeier": {
          "organisasjon": {
            "organisasjonsnummer": "000000000",
            "organisasjonsnavn": "Forreningen"
          },
          "alternativIdentifikator": "InterntKundennummer123456",
          "sektorkode": "7000"
        },
        "kontonummer": "201300003000",
        "innskudd": 4500,
        "renter": {
          "opptjenteRenter": 3
        },
        "kontotype": "innskuddskontoINok",
        "disponent": [
          {
            "person": {
              "foedselsnummer": "17046594876",
              "fornavn": "Jens",
              "etternavn": "Hansen"
            }
          }
        ]
      },
      {
        "oppgaveeier": {
          "person": {
            "foedselsnummer": "12056700000",
            "fornavn": "Jonas",
            "mellomnavn": "August",
            "etternavn": "Svensson"
          },
          "adresse": {
            "landkode": "SE",
            "adresseStrukturert": {
              "adressenavn": "Hasselgatan 27",
              "postkode": "61433",
              "byEllerStedsnavn": "Söderköping",
              "adresseTekstForUtskrift": "Utskrift"
            }
          },
          "sektorkode": "9000"
        },
        "kontonummer": "20130000400",
        "utlaan": 1000,
        "innskudd": 45687,
        "renter": {
          "opptjenteRenter": 3,
          "paaloepteRenter": 50
        },
        "kontotype": "laanekontoINok"
      },
      {
        "oppgaveeier": {
          "organisasjon": {
            "organisasjonsnummer": "000000000",
            "organisasjonsnavn": "Garfield Street Auto Ltd"
          },
          "internasjonalIdentifikator": {
            "identifikator": "900-70-0000",
            "identifikatortype": "TIN",
            "utstedtAvLand": "US"
          },
          "adresse": {
            "landkode": "US",
            "adresseStrukturert": {
              "postboks": "POB 65502",
              "postkode": "85728",
              "byEllerStedsnavn": "TUCSON AZ",
              "adresseTekstForUtskrift": "Utskrift"
            }
          },
          "sektorkode": "9000"
        },
        "kontonummer": "00501300005000",
        "utlaan": 0,
        "innskudd": 50000000,
        "renter": {
          "opptjenteRenter": 150000,
          "paaloepteRenter": 0
        },
        "kontotype": "innskuddskontoIUtenlandskValuta",
        "valutakode": "USD",
        "innskuddIAnnenValuta": 6250000,
        "renteinntektIAnnenValuta": 18750
      }
    ],
    "oppgaveoppsummering": {
      "antallOppgaver": 5,
      "sumInnskudd": 50105756,
      "sumUtlaan": 1000,
      "sumOpptjenteRenter": 150427,
      "sumPaaloepteRenter": 50,
      "sumBetalteMisligholdteRenter": 0,
      "sumTilbakebetalteMisligholdteRenter": 0,
      "sumSkattepliktigGevinst": 0,
      "sumFradragsberettigetTap": 0
    }
  }
}
```

#### Eksempel på respons

```json
{
  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",
  "forsendelseId": "018f521e-5488-79e3-8817-48e94cb75455",
  "oppgavegiversLeveranseReferanse": "leveranse-1",
  "antallSletteoppgaver": 5,
  "antallOppgaver": 23
}
```

#### Eksempel på sletteoppgave

```json
{
  "leveranse": {
    "kildesystem": "Kildesystemet v2.0.5",
    "oppgavegiver": {
      "organisasjonsnummer": "310218480",
      "kontaktinformasjon": {
        "navn": "Kari Kontakt",
        "telefonnummer": "80080000",
        "varselEpostadresse": "kontakt@eksempelbanken.no",
        "varselSmsMobilnummer": "43999123"
      }
    },
    "inntektsaar": 2023,
    "oppgavegiversLeveranseReferanse": "2016_3",
    "leveransetype": "ordinaer",
    "sletteoppgave": [
      {
        "oppgaveeierOrganisasjonsnummer": "000000000",
        "oppgaveeierAlternativIdentifikator": "InterntKundennummer123456",
        "kontonummer": "201300003000"
      }
    ],
    "oppgaveoppsummering": {
      "antallOppgaver": 1,
      "sumInnskudd": 0,
      "sumUtlaan": 0,
      "sumOpptjenteRenter": 0,
      "sumPaaloepteRenter": 0,
      "sumBetalteMisligholdteRenter": 0,
      "sumTilbakebetalteMisligholdteRenter": 0,
      "sumSkattepliktigGevinst": 0,
      "sumFradragsberettigetTap": 0
    }
  }
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

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

| Feilspesifiseringskode | Feilområde                                                                                  | Årsak                                                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1007               | Mangler Token                                                                               | Det er ikke lagt ved noen authorization header med token på request                                                         |
| GLD_1008               | Ugyldig token                                                                               | Token oppgitt i authorization header er ugyldig                                                                             |
| GLD_1015               | Ikke autorisert for å levere på denne dialogen                                              | Organisasjonen som leverer har ikke rettighet til å levere for denne oppgavegiveren                                         |
| GLD_1022               | Feil i parametre                                                                            | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1023               | Finner ingen ressurs for denne urlen                                                        | Det er ikke noe innhold tilgjengelig på denne URLen                                                                         |
| GLD_1027               | Inntektsår er ikke støttet                                                                  | Det er ikke tillatt å levere på oppgitt inntektsår                                                                          |
| GLD_1028               | Header mangler                                                                              | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json                                              | Accept header er feil. APIet har kun støtte for json i response                                                             |
| GLD_1032               | Feil i JSON-innhold                                                                         | Innhold i JSON er ikke i henhold til spesifikasjonen                                                                        |
| GLD_1047               | Content type må være application/json                                                       | Content-type header er feil. APIet har kun støtte for json i request body                                                   |
| GLD_1050               | Finner ikke et dokument med denne IDen på denne forsendelsen                                | Det finnes ikke noe dokument med gitt id på angitt forsendelse                                                              |
| GLD_1052               | Inntektsår i path og i innsending er ulike                                                  | Inntektsår i innsending i JSON body og inntektsår i path må være like                                                       |
| GLD_1053               | Uventet feil i et bakenforliggende system, vennligst prøv igjen senere                      |                                                                                                                             |
| GLD_1054               | Det finnes ingen dialog for denne kombinasjonen av inntektsår, organisjonsnummer og ordning | Det har blitt forsøkt å hente ut dokument på en dialog som ikke finnes                                                      |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

![innskuddutlaanrenter](../../static/download/Informasjonsmodell_Innskuddutlaanrenter.png)

</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

### Testmiljøer

For spesifikke URL'er til testmiljø hos Skatteetaten, se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-innskuddutlaanrenter-api/0.0.1).

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

Har du spørsmål til Skatteetaten om Innskudd, utlån og renter-API, kan du sende oss
e-post: [altinnreetablering\@skatteetaten.no](mailto:altinnreetablering@skatteetaten.no)  
Vær oppmerksom på at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra
Altinn II til Altinn 3.

</TabItem>
</Tabs>
