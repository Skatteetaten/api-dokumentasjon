---
title: Innrapportering pass og stell API
slug: /api/innrapportering-passogstell
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, barnepass ]
keywords: [ grunnlagsdata ]
last_updated: Dec 12, 2024
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av tredjepartsopplysninger for pass og stell av barn (RF-1241)</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringpassogstell`

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
          "value": "ske-innrapportering-pass-stell-barn",
          "id": "urn:altinn:resource"
        }
      ]
    }
  ]
```

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-passogstell-api/0.0.1)

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

API-et for innrapportering av pass og stell av barn har to endepunkter

* __POST innsending__: Mottar tredjepartsopplysninger for pass og stell. Ett kall mot API-et er en rapportering for en
  organisasjon gitt av en oppgavegiver og som gjelder et inntektsår.
* __GET uthenting_dokument__: Henter ut ett spesifikt dokument knyttet til en transmission i dialogporten

API-et validerer mottatte data mot JSON schema beskrevet på SwaggerHub. Se [feilkoder](innrapportering-passogstell?tab=Feilkoder) for
relaterte feilmeldinger.

Se også [eksempler](innrapportering-passogstell?tab=Eksempler) for de ulike endepunktene.

### Parameter: idempotencyKey

idempotencyKey parameteren er påkrevet. Innholdet skal være en unik UUID. Hvert nye kall til API-et skal ha en
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
https://innrapporteringpassogstell.api.{env}.no/v1/{inntektsaar}
```

### JSON

#### Eksempel på innsending

```
{
  "leveranse": {
    "kildesystem": "Kildesystemet v2.0.5",
    "oppgavegiver": {
      "organisasjonsnummer": "212918172",
      "kontaktinformasjon": {
        "navn": "Kari Kontakt",
        "telefonnummer": "80080000",
        "varselEpostadresse": "kontakt@barnehagekonsernet.no",
        "varselSmsMobilnummer": "80080000"
      }
    },
    "inntektsaar": "2023",
    "oppgavegiversLeveransereferanse": "EksternReferanse_2013_1",
    "leveransetype": "ordinaer",
    "oppgave": [
      {
        "oppgaveeier": {
          "foedselsnummer": "12345678910",
          "navn": "Ola Nordmann"
        },
        "paaloeptBeloep": "7500"
      },
      {
        "oppgaveeier": {
          "foedselsnummer": "12345678910",
          "navn": "Kari Normann"
        },
        "paaloeptBeloep": "2500"
      }
    ],
    "oppgaveoppsummering": {
      "antallOppgaver": "2",
      "sumBeloep": "10000"
    }
  }
}

```

#### Eksempel på respons

```
{
    "dialogId": "0193b5cd-cb85-7320-bd8c-6c78c88dc8af",
    "forsendelseId": "0193b5cd-cbce-7dbd-b188-1437db673767",
    "oppgavegiversLeveranseReferanse": "EksternReferanse_2013_1",
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
| GLD_1047               | Content type må være application/json                                  | Content-type header er feil. APIet har kun støtte for json i request body                                                   |
| GLD_1050               | Finner ikke et dokument med denne IDen på denne forsendelsen           | Det finnes ikke noe dokument med gitt id på angitt forsendelse                                                              |
| GLD_1052               | Inntektsår i path og i innsending er ulike                             | Inntektsår i innsending i JSON body og inntektsår i path må være like                                                       |
| GLD_1053               | Uventet feil i et bakenforliggende system, vennligst prøv igjen senere |                                                                                                                             |
| GLD_1061               | Det finnes ingen forsendelse med denne IDen for denne ordningen        |                                                                                                                             |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

![passogstell](../../static/download/Informasjonsmodell_Passogstell.png)

| Eier                     | Element                         | Dokumentasjon                                                                                                                                   |
|--------------------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Leveranse                | inntektsaar                     | Inntektsåret leveransen gjelder                                                                                                                 |
| Leveranse                | kildesystem                     | System brukt for å levere oppgaven                                                                                                              |
| Leveranse                | leveransetype                   | Type av leveranse som angir om leveransen inneholder ordinære oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver å innrapportere |
| Leveranse                | oppgave                         | Oppgave som leveres                                                                                                                             |
| Leveranse                | oppgavegiver                    | Tredjepart som rapporterer opplysning til Skatteetaten                                                                                          |
| Leveranse                | oppgavegiversLeveranseReferanse | Frivillig referanse på innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten                                          |
| Leveranse                | oppgaveoppsummering             | Oppsummering med totalsummer for innleverte oppgaver                                                                                            |
| Melding                  | leveranse                       | Selve leveransen. Merk at det kun er tillatt med en leveranse pr Melding                                                                        |
| OppgaveBarnepass         | paaloeptBeloep                  | Sum beløp som er fakturert enforesatt/forsørger fra barnepassvirksomhet(er) iløpet av inntektsåret                                              |
| OppgaveBarnepass         | oppgaveeier                     | Forsørger som har betalt for pass og stell av barn                                                                                              |
| Oppgaveeier              | fødselsnummer                   | Oppgaveeiers (forsørgers) fødselsnummer eller d-nummer.                                                                                         |
| Oppgaveeier              | navn                            | Navn på oppgaveeier                                                                                                                             |
| Oppgavegiver             | kontaktinformasjon              | Kontaktinformasjon for oppgavegiver                                                                                                             |
| Oppgavegiver             | organisasjonsnummer             | Organisasjonsnummer på oppgavegiver                                                                                                             |
| Oppgaveoppsummering      | antallOppgaver                  | Totalt antall oppgaver i leveransens oppgaver                                                                                                   |
| Oppgaveoppsummering      | sumBeloep                       | Sum av alle påløpte beløp i oppgavene til en leveranse                                                                                          |
</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

I første omgang er test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være
med å pilotere løsningene.

### Testmiljøer

For spesifikke URL'er til testmiljø hos Skatteetaten, se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-passogstell-api/0.0.1). 

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
  
Har du spørsmål til Skatteetaten om Passogstell API, kan du sende oss e-post: [altinnreetablering\@skatteetaten.no](mailto:altinnreetablering@skatteetaten.no)  
Vær oppmerksom på at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3.
  
</TabItem>
</Tabs>
