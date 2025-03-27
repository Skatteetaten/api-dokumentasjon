---
title: Innrapportering betalinger til selvstendig næringsdrivende API
slug: /api/innrapportering-betalingernaeringsdrivende
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, betalingernaeringsdrivende, betalinger, selvstendige, naeringsdrivende ]
keywords: [ grunnlagsdata ]
last_updated: Apr 29, 2024
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av tredjepartsopplysninger om betalinger til selvstendig næringsdrivende (
RF-1321)</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten:
`skatteetaten:innrapporteringbetalingerselvstendignaeringsdrivende`

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
          "value": "ske-innrapportering-betalinger-selvstendig-naeringsdrivende",
          "id": "urn:altinn:resource"
        }
      ]
    }
  ]
```

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-betalinger-naeringsdrivende-api/0.0.1)

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

API-et for innrapportering av innskudd, utlån og renter har to endepunkter:

* __POST innsending__: Mottar tredjepartsopplysninger om betalinger til selvstendig næringsdrivende. Et kall mot API-et
  sender inn rapportering om betalinger til selvstendig næringsdrivende for én oppgavegiver på et gitt inntektsår.
* __GET uthenting_dokument__: Henter ut ett spesifikt dokument knyttet til en transmission i dialogporten

API-et validerer mottatte data mot JSON schema beskrevet på SwaggerHub.
Se [feilkoder](innrapportering-betalingernaeringsdrivende?tab=Feilkoder)
for relaterte feilmeldinger.

Se også [eksempler](innrapportering-betalingernaeringsdrivende?tab=Eksempler) for de ulike endepunktene.

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
https://innrapporteringbetalingernaeringsdrivende.api.{env}.no/v1/{inntektsaar}
```

### JSON

#### Eksempel på innsending

```
{
  "leveranse": {
    "inntektsaar": "2023",
    "oppgavegiver": {
      "organisasjonsnummer": "212918172",
      "kontaktinformasjon": {
        "navn": "Kari Kontakt",
        "telefonnummer": "80080000",
        "varselEpostadresse": "kontakt@regnskap.no",
        "varselSmsMobilnummer": "80080000"
      }
    },
    "leveransetype": "ordinaer",
    "kildesystem": "Kildesystemet v2.0.5",
    "oppgavegiversLeveransereferanse": "EksternReferanse_2013_1",
    "oppgave": [
      {
        "oppgaveeier": {
          "foedselsnummer": "12345678910",
          "navn": "Ola Nordmann"
        },
        "betaltBeloep": "7500"
      },
      {
        "oppgaveeier": {
          "organisasjonsnummer": "123456789",
          "navn": "Bedriften A/S"
        },
        "betaltBeloep": "2500"
      }
    ],
    "oppgaveoppsummering": {
      "antallOppgaver": "2",
      "sumBetaltBeloep": "10000"
    }
  }
}
```

#### Eksempel på respons

```
{
  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",
  "forsendelseId": "018f521e-5488-79e3-8817-48e94cb75455",
  "oppgavegiversLeveranseReferanse": "leveranse-1",
  "antallOppgaver": 23
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

| Feilspesifiseringskode | Feilområde                                                             | Årsak                                                                                                                       |
|------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1007               | Mangler Token                                                          | Det er ikke lagt ved noen authorization header med token på request                                                         |
| GLD_1008               | Ugyldig token                                                          | Token oppgitt i authorization header er ugyldig                                                                             |
| GLD_1015               | Ikke autorisert for å levere på denne dialogen                         | Organisasjonen som leverer har ikke rettighet til å levere for denne oppgavegiveren                                         |
| GLD_1022               | Feil i parametre                                                       | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1023               | Finner ingen ressurs for denne urlen                                   | Det er ikke noe innhold tilgjengelig på denne URLen                                                                         |
| GLD_1027               | Inntektsår er ikke støttet                                             | Det er ikke tillatt å levere på oppgitt inntektsår                                                                          |
| GLD_1028               | Header mangler                                                         | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json                         | Accept header er feil. APIet har kun støtte for json i response                                                             |
| GLD_1032               | Feil i JSON-innhold                                                    | Innhold i JSON er ikke i henhold til spesifikasjonen                                                                        |
| GLD_1047               | Content type må være application/json                                  | Content-type header er feil. APIet har kun støtte for json i request body                                                   |
| GLD_1050               | Finner ikke et dokument med denne IDen på denne forsendelsen           | Det finnes ikke noe dokument med gitt id på angitt forsendelse                                                              |
| GLD_1052               | Inntektsår i path og i innsending er ulike                             | Inntektsår i innsending i JSON body og inntektsår i path må være like                                                       |
| GLD_1053               | Uventet feil i et bakenforliggende system, vennligst prøv igjen senere |                                                                                                                             |
| GLD_1061               | Det finnes ingen forsendelse med denne IDen for denne ordningen        |                                                                                                                             |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

![betalingernaeringsdrivende](../../static/download/Informasjonsmodell_Betalingernaeringsdrivende.png)

| Eier                          | Element                         | Dokumentasjon                                                                                                                                   |
|-------------------------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Melding                       | leveranse                       | Selve leveransen. Merk at det kun er tillatt med én leveranse pr Melding                                                                        |
| Leveranse                     | inntektsår                      | Inntektsåret leveransen gjelder                                                                                                                 |
| Leveranse                     | kildesystem                     | System brukt for å levere oppgaven                                                                                                              |
| Leveranse                     | leveransetype                   | Type av leveranse som angir om leveransen inneholder ordinære oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver å innrapportere |
| Leveranse                     | oppgave                         | Oppgave(r) som leveres                                                                                                                          |
| Leveranse                     | oppgavegiver                    | Tredjepart som rapporterer opplysninger til Skatteetaten                                                                                        |
| Leveranse                     | oppgavegiversLeveranseReferanse | Frivillig referanse på innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten                                          |
| Leveranse                     | oppgaveoppsummering             | Oppsummering med totalsummer for innleverte oppgaver                                                                                            |
| Oppgavegiver                  | kontaktinformasjon              | Kontaktinformasjon for oppgavegiver                                                                                                             |
| Oppgavegiver                  | organisasjonsnummer             | Organisasjonsnummer på oppgavegiver                                                                                                             |
| OppgaveBetalinger             | oppgaveeier                     | Person eller organisasjon oppgaven gjelder for                                                                                                  |
| OppgaveBetalinger             | betaltBeloep                    | Betalt beløp til selvstendig næringsdrivende for inntektsåret                                                                                   |
| Oppgaveeier                   | foedselsnummer                  | Ellevesifret identifikasjonsnummer for personer bosatt i Norge, der de seks første sifrene angir fødselsdato og de fem siste personnummer       |
| Oppgaveeier                   | organisasjonsnummer             | Organisasjonsnummer til oppgaveeier                                                                                                             |
| Oppgaveeier                   | navn                            | Oppgaveeiers navn                                                                                                                               |
| OppgaveoppsummeringBetalinger | antallOppgaver                  | Antall oppgaver i leveransen                                                                                                                    |
| OppgaveoppsummeringBetalinger | sumBetaltBeloep                 | Sum av feltet betaltBeloep for alle oppgavene i leveransen                                                                                      |

</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

I første omgang er test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være
med å pilotere løsningene.

### Testmiljøer

Skatteetaten benytter ETM2 som testmiljø. For spesifikke URL'er,
se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-betalinger-naeringsdrivende-api/0.0.1).

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

Har du spørsmål til Skatteetaten om Betalinger til selvstendig næringsdrivende, kan du sende oss
e-post: [altinnreetablering\@skatteetaten.no](mailto:altinnreetablering@skatteetaten.no)  
Vær oppmerksom på at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra
Altinn II til Altinn 3.

</TabItem>
</Tabs>
