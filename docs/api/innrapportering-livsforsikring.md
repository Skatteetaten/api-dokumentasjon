---
title: Innrapportering livsforsikring API
slug: /api/innrapportering-livsforsikring
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, livsforsikring]
keywords: [ grunnlagsdata ]
last_updated: Jun 25, 2025
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av tredjepartsopplysninger om livsforsikring (RF-1301)</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringlivsforsikring`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen.

## Systemtilgang

Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir.
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

URL-er til API-et, beskrivelse av parametre, endepunkter og respons ligger i Open API-spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-livsforsikring-api/0.0.1)

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

API-et for innrapportering av tredjepartsopplysninger om livsforsikring til offentlige myndigheter har to endepunkter:

* __POST innsending__: Innsending av tredjepartsopplysninger om livsforsikring til offentlige myndigheter. Et kall mot API-et er en rapportering for en organisasjon gitt av en oppgavegiver og som gjelder et inntektsår.
* __GET uthenting_dokument__: Henter ut et spesifikt dokument knyttet til en forsendelse i Dialogporten

API-et validerer mottatte data mot JSON-schema beskrevet på SwaggerHub. Se [feilkoder](innrapportering-livsforsikring?tab=Feilkoder) for
relaterte feilmeldinger.

Se også [eksempler](innrapportering-livsforsikring?tab=Eksempler) for de ulike endepunktene.

### Parameter: idempotencyKey

`idempotencyKey`-parameteren er påkrevet. Innholdet skal være en unik `UUID`. Hvert nye kall til API-et skal ha en
tilsvarende ny idempotencyKey. Flere etterfølgende `POST` kall med samme request-body og samme `idempotencyKey` vil gi den
samme responsen. Kun det første av denne rekken med like API kall vil behandles. `idempotencyKey` muliggjør at man trygt
kan prøve innsendinger på nytt der man av ulike årsaker ikke har fått en tilbakemelding fra API-et.

## Datakatalog

Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Innsending

### Eksempel på request-URL

```
https://innrapporteringlivsforsikring.api.{env}.no/v1/{inntektsaar}
```

### JSON

#### Eksempel på innsending

```json
{
    "leveranse": {
        "kildesystem": "Livsforsikringssystemet 2.1",
        "oppgavegiver": {
            "organisasjonsnummer": "123456789",
            "kontaktinformasjon": {
                "navn": "Kari Kontaktsen",
                "telefonnummer": "80080000",
                "varselEpostadresse": "kari.kontaktsen@livselskapet.no",
                "varselSmsMobilnummer": "80080000"
            }
        },
        "inntektsaar": 2024,
        "oppgavegiversLeveranseReferanse": "LS2015_1",
        "leveransetype": "ordinaer",
        "oppgave": [
            {
                "forsikringsnummer": "123456",
                "forsikringstaker": {
                    "organisasjon": {
                        "organisasjonsnummer": "123456789",
                        "organisasjonsnavn": "J Doe AS"
                    },
                    "internasjonalIdentifikator": {
                        "identifikator": "33-4567890",
                        "identifikatortype": "TIN",
                        "utstedtAvLand": "US"
                    },
                    "adresse": {
                        "adresseStrukturert": {
                            "adressenavn": "Selskapsgata",
                            "adressenummer": "12",
                            "postkode": "1212 Stedet",
                            "byEllerStedsnavn": "Stedet"
                        },
                        "landkode": "NO",
                        "adresseBrukstype": "virksomhet"
                    }
                },
                "livdel": {
                    "forsikringstype": "individuelleLivrenter",
                    "gjenkjoepsverdi": 1000000,
                    "skattepliktigAvkastning": 50000
                },
                "utbetaling": [
                    {
                        "forsikringstype": "individuellRisikoforsikring",
                        "utbetalingstype": "engangsutbetalingUfoerhet",
                        "skattepliktigBeloep": 1500000,
                        "skattefrittBeloep": 5000000
                    },
                    {
                        "forsikringstype": "gjeldsforsikring",
                        "utbetalingstype": "renterAvLivsforsikring",
                        "skattepliktigBeloep": 50000,
                        "skattefrittBeloep": 0
                    }
                ],
                "oppgaveeier": {
                    "person": {
                        "foedselsnummer": "30125678901",
                        "bostedsland": "NO",
                        "fornavn": "John",
                        "mellomnavn": "D",
                        "etternavn": "Doe",
                        "foedselsdato": "1956-12-30"
                    },
                    "internasjonalIdentifikator": {
                        "identifikator": "123-45-6789",
                        "identifikatortype": "TIN",
                        "utstedtAvLand": "US"
                    },
                    "adresse": {
                        "adresseTekst": "Diplomatgata 12/Oppgang A/0123 Oslo",
                        "landkode": "NO",
                        "adresseBrukstype": "bosted"
                    }
                }
            },
            {
                "forsikringsnummer": "131313",
                "fortsettelsesforsikring": {
                    "innestaaendePaaPremiefond": 300000
                },
                "utbetaling": [],
                "oppgaveeier": {
                    "person": {
                        "foedselsnummer": "23126712345",
                        "fornavn": "Ole",
                        "mellomnavn": "Dole",
                        "etternavn": "Nordmand",
                        "foedselsdato": "1967-12-23"
                    },
                    "adresse": {
                        "adresseStrukturert": {
                            "adressenavn": "Andebygata",
                            "adressenummer": "1313",
                            "postkode": "1414 Byen",
                            "byEllerStedsnavn": "Byen"
                        },
                        "landkode": "NO",
                        "adresseBrukstype": "bosted"
                    }
                }
            },
            {
                "forsikringsnummer": "123456",
                "utbetaling": [
                    {
                        "forsikringstype": "individuellRisikoforsikring",
                        "utbetalingstype": "engangsutbetalingUfoerhet",
                        "skattepliktigBeloep": 50000,
                        "skattefrittBeloep": 0
                    }
                ],
                "oppgaveeier": {
                    "organisasjon": {
                        "organisasjonsnummer": "123456789",
                        "organisasjonsnavn": "Selskapet AS"
                    },
                    "adresse": {
                        "adresseStrukturert": {
                            "adressenavn": "Selskapsgata",
                            "adressenummer": "10",
                            "postkode": "1234 Byen",
                            "byEllerStedsnavn": "Byen"
                        },
                        "landkode": "NO",
                        "adresseBrukstype": "virksomhet"
                    }
                }
            }
        ],
        "oppgaveoppsummering": {
            "antallOppgaver": 3,
            "livdelSumGjenkjoepsverdi": 1000000,
            "livdelSumSkattepliktigAvkastning": 50000,
            "utbetalingSumSkattepliktigeBeloep": 160000,
            "utbetalingSumSkattefrieBeloep": 5000000,
            "utbetalingSumFradragsberettigetTap": 0,
            "fortsettelsesforsikringSumInnestaaendePaaPremiefond": 300000
        }
    }
}
```

#### Eksempel på respons

```json
{
    "dialogId": "0193b5cd-cb85-7320-bd8c-6c78c88dc8af",
    "forsendelseId": "0193b5cd-cbce-7dbd-b188-1437db673767",
    "oppgavegiversLeveranseReferanse": "LS2015_1",
    "antallOppgaver": 3
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne tjenesten kan gi.

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
Tabellen under viser hvilke feilspesifiseringskoder tjenesten kan gi.
Dersom det finnes mer detaljert feilinformasjon enn generelt feilområde vil det beskrives i melding, sti og 
angitt verdi-feltene.

| Feilspesifiseringskode | Feilområde                                                                                  | Årsak                                                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1007               | Mangler Token                                                                               | Det er ikke lagt ved noen Authorization header med token på request                                                         |
| GLD_1008               | Ugyldig token                                                                               | Token oppgitt i Authorization header er ugyldig                                                                             |
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

![Infomasjonsmodel Livsforsikring](../../static/download/Infomasjonsmodell_Livsforsikring.png)

</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

I første omgang er test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være
med å pilotere løsningene.

### Testmiljøer

For spesifikke URL-er til testmiljø hos Skatteetaten, se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-livsforsikring-api/0.0.1).

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

Har du spørsmål til Skatteetaten om Innrapportering Livsforsikring API, kan du sende oss e-post: [altinnreetablering\@skatteetaten.no](mailto:altinnreetablering@skatteetaten.no)  
Vær oppmerksom på at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3.

</TabItem>
</Tabs>
