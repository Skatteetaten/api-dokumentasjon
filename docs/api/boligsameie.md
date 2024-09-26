---
title: Boligsameie API
slug: /api/boligsameie
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Boligsameie ]
keywords: [ grunnlagsdata ]
last_updated: Apr 29, 2024
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av tredjepartsopplysninger for boligsameie.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Systemtilgang](../om/systemtilgang.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringboligsameie`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen.

## Systemtilgang

Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir. 
Informasjon vedr. dette finnes [her](../om/systemtilgang.md). 

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/boligsameie-api/0.0.1)

Oppbygning av URL-er og åpninger i en evt. brannmur er beskrevet her [URL-er](../om/url.md)

API-et for boligsameie har bare ett endepunkt:

* __POST innsending__: Mottar tredjepartsopplysninger for boligsameier. Ett kall mot API-et er en rapportering for et
  boligsameie gitt av en oppgavegiver og som gjelder et inntektsår.

API-et validerer mottatte data mot JSON schema beskrevet på SwaggerHub. Se [feilkoder](boligsameie?tab=Feilkoder) for
relaterte feilmeldinger.

Se også [eksempler](boligsameie?tab=Eksempler) for de ulike endepunktene.

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
https://innrapporteringboligsameie.api.{env}.no/v1/{inntektsaar}
```

### JSON

#### Eksempel på innsending

```
{
  "leveranse": {
    "oppgavegiversLeveranseReferanse": "Leveranse-1",
    "leveransetype": "ordinaer",
    "oppgavegiver": {
      "organisasjonsnummer": "819897522",      
      "kontaktinformasjon": {
        "navn": "Realt Testutvikling",
        "telefonnummer": "00000000",
        "varselEpostadresse": "anonym.varsel@skatteetaten.no",
        "varselSmsMobilnummer": "12345678"
      }
    },
    "oppgaveoppsummering": {
      "antallOppgaver": 2,
      "sumAndelSkattepliktigeInntekter": 2249,
      "sumAndelFradragsberettigedeKostnader": 2249,
      "sumAndelFormue": 11888,
      "sumAndelGjeld": 27709
    },
    "inntektsaar": 2023,
    "kildesystem": "SBS-1",
    "sletteoppgave": [],
    "oppgave": [
      {
        "oppgaveeier": {
          "organisasjonsnummer": "800877830",
          "navn": "NØYTRALE FORURENSEDE SPISESTEDER AS"
        },
        "eiertid": {
          "start": "0101",
          "slutt": "3112"
        },
        "matrikkelnummer": {
          "kommunenummer": "1554",
          "bruksnummer": 227,
          "gaardsnummer": 91,
          "seksjonsnummer": 11
        },
        "andelSkattepliktigeInntekter": 1766,
        "andelFradragsberettigedeKostnader": 1766,
        "andelFormue": 9336,
        "andelGjeld": 21761
      },
      {
        "oppgaveeier": {
          "foedselsnummer": "00000000000",
          "navn": "ALLA STIE"
        },
        "eiertid": {
          "start": "0101",
          "slutt": "3112"
        },
        "matrikkelnummer": {
          "kommunenummer": "1554",
          "bruksnummer": 227,
          "gaardsnummer": 91,
          "seksjonsnummer": 30
        },
        "andelSkattepliktigeInntekter": 483,
        "andelFradragsberettigedeKostnader": 483,
        "andelFormue": 2552,
        "andelGjeld": 5948
      }
    ]
  }
}
```

#### Eksempel på respons

```
{
  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",
  "dialogelementId": "018f521e-5488-79e3-8817-48e94cb75455",
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

| Feilspesifiseringskode | Feilområde                                     | Årsak                                                                                                                       |
|------------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1022               | Feil i parametre                               | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1023               | Finner ingen ressurs for denne urlen           | Det er ikke noe innhold tilgjengelig på denne URLen                                                                         |
| GLD_1027               | Inntektsår er ikke støttet                     | Det er ikke tillatt å levere på oppgitt inntektsår                                                                          |
| GLD_1028               | Header mangler                                 | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json | Accept header er feil. APIet har kun støtte for json i response                                                             |
| GLD_1047               | Content type må være application/json          | Content-type header er feil. APIet har kun støtte for json i request body                                                   |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

![boligsameie](../../static/download/Informasjonsmodell_Boligsameie.png)

| Eier                           | Element                              | Dokumentasjon                                                                                                                                   |
|--------------------------------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Leveranse                      | inntektsår                           | Inntektsåret leveransen gjelder                                                                                                                 |
| Leveranse                      | kildesystem                          | System brukt for å levere oppgaven                                                                                                              |
| Leveranse                      | leveransetype                        | Type av leveranse som angir om leveransen inneholder ordinære oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver å innrapportere |
| Leveranse                      | oppgave                              | Oppgave som leveres                                                                                                                             |
| Leveranse                      | oppgavegiver                         | Tredjepart som rapporterer opplysning til Skatteetaten                                                                                          |
| Leveranse                      | oppgavegiversLeveranseReferanse      | Frivillig referanse på innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten                                          |
| Leveranse                      | oppgaveoppsummering                  | Oppsummering med totalsummer for innleverte oppgaver                                                                                            |
| Leveranse                      | sletteoppgave                        | Oppgave for sletting av tidligere innrapporterte oppgaver                                                                                       |
| Melding                        | leveranse                            | Selve leveransen. Merk at det kun er tillatt med en leveranse pr Melding                                                                        |
| OppgaveBoligsameie             | andelFormue                          | Oppgaveeiers andel av felles formue i boligsameiet                                                                                              |
| OppgaveBoligsameie             | andelFradragsberettigedeKostnader    | Oppgaveeiers andel av fradragsberettigede kostnader i boligsameiet                                                                              |
| OppgaveBoligsameie             | andelGjeld                           | Oppgaveeiers andel av gjeld i boligselsameiet                                                                                                   |
| OppgaveBoligsameie             | andelSkattepliktigeInntekter         | Oppgaveeiers andel av skattepliktige inntekter i boligsameiet                                                                                   |
| OppgaveBoligsameie             | eiertid                              | Oppgaveeiers tid som eier av boenheten                                                                                                          |
| OppgaveBoligsameie             | matrikkelnummer                      | Boenhetens matrikkelnummer                                                                                                                      |
| OppgaveBoligsameie             | oppgaveeier                          | Eier av oppgaven                                                                                                                                |
| Oppgaveeier                    | fødselsnummer                        | Fødselsnummer på oppgaveeier. Eksklusiv enten fødselsnummer eller organisasjonsnummer                                                           |
| Oppgaveeier                    | navn                                 | Navn på oppgaveeier                                                                                                                             |
| Oppgaveeier                    | organisasjonsnummer                  | Organisasjonsnummer på oppgaveeier. Eksklusiv enten fødselsnummer eller organisasjonsnummer                                                     |
| Oppgavegiver                   | kontaktinformasjon                   | Kontaktinformasjon for oppgavegiver                                                                                                             |
| Oppgavegiver                   | organisasjonsnummer                  | Organisasjonsnummer på oppgavegiver                                                                                                             |
| OppgaveoppsummeringBoligsameie | antallOppgaver                       | Totalt antall oppgaver i leveransens oppgaver                                                                                                   |
| OppgaveoppsummeringBoligsameie | sumAndelFormue                       | Sum av andelFormue i leveransens oppgaver                                                                                                       |
| OppgaveoppsummeringBoligsameie | sumAndelFradragsberettigedeKostnader | Sum av andelFradragsberettigedeKostnader i leveransens oppgaver                                                                                 |
| OppgaveoppsummeringBoligsameie | sumAndelGjeld                        | Sum av andelGjeld i leveransens oppgaver                                                                                                        |
| OppgaveoppsummeringBoligsameie | sumAndelSkattepliktigeInntekter      | Sum av andelSkattepliktigeInntekter i leveransens oppgaver                                                                                      |
| SletteoppgaveBoligsameie       | matrikkelnummer                      | Boenhetens matrikkelnummer                                                                                                                      |
| SletteoppgaveBoligsameie       | oppgaveeier                          | Eier av sletteoppgaven                                                                                                                          |
| Matrikkelnummer                | bruksnummer                          | Del av matrikkelnummeret som sammen med kommunenummer, gårdsnummer og seksjonsnummer unikt identifiserer en eierseksjon                         |
| Matrikkelnummer                | festenummer                          | Festenummer tilhørende eierseksjonen dersom eiendommen er festet                                                                                |
| Matrikkelnummer                | gårdsnummer                          | Del av matrikkelnummeret som sammen med kommunenummer, bruksnummer og seksjonsnummer unikt identifiserer en eierseksjon                         |
| Matrikkelnummer                | kommunenummer                        | Boenhetens kommunenummer                                                                                                                        |
| Matrikkelnummer                | seksjonsnummer                       | Del av matrikkelnummeret som sammen med kommunenummer, gårdsnummer og bruksnummer unikt identifiserer en eierseksjon                            | 
</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

I første omgang er test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være
med å pilotere løsningene.

### Testmiljøer

Skatteetaten benytter ETM2 som testmiljø. For spesifikke URL'er, se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/boligsameie-api/0.0.1). 

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
  
Har du spørsmål til Skatteetaten om Boligsameie API, kan du sende oss e-post: [altinnreetablering\@skatteetaten.no](mailto:altinnreetablering@skatteetaten.no)  
Vær oppmerksom på at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3.
  
</TabItem>
</Tabs>
