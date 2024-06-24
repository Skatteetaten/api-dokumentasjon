---
title: Boligselskap API
slug: /api/boligselskap
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Boligselskap ]
keywords: [ grunnlagsdata ]
last_updated: Apr 29, 2024
hide_table_of_contents: true
---

<summary>Tjeneste for innrapportering av tredjepartsopplysninger for boligselskap.</summary>

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

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringboligselskap`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. 

## Systemtilgang

Bruk av API-et krever systemtilgang, som er ny funksjonalitet i Maskinporten levert av Digdir.
Informasjon vedr. dette finnes [her](../om/systemtilgang.md).

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/boligselskap-api/0.0.1)

Oppbygning av URL-er og åpninger i en evt. brannmur er beskrevet her [URL-er](../om/url.md)

API-et for boligselskap har bare ett endepunkt:

* __POST innsending__: Mottar tredjepartsopplysninger for boligselskaper. Ett kall mot API-et er en rapportering for et
  boligselskap gitt av en oppgavegiver og som gjelder et inntektsår.

API-et validerer mottatte data mot JSON schema beskrevet på SwaggerHub. Se [feilkoder](boligselskap?tab=Feilkoder) for
relaterte feilmeldinger.

Se også [eksempler](boligselskap?tab=Eksempler) for de ulike endepunktene.

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
https://innrapporteringboligselskap.api.{env}.no/v1/{inntektsaar}
```

### JSON

#### Eksempel på innsending

```
{
  "leveranse": [
    {
      "oppgavegiversLeveranseReferanse": "Leveranse-1",
      "inntektsaar": 2023,
      "oppgavegiver": {
        "organisasjonsnummer": "932061899",     
        "kontaktinformasjon": {
          "navn": "Realt Testutvikling",
          "telefonnummer": "00000000",
          "varselEpostadresse": "anonym.varsel@skatteetaten.no",
          "varselSmsMobilnummer": "00000000"
        }
      },
      "oppgaveoppsummering": {
        "antallOppgaver": 2,
        "sumAndelLikningsverdiBoenhet": 70000,
        "sumAndelSkattepliktigeInntekter": 2500,
        "sumAndelFradragsberettigedeKostnader": 0,
        "sumAndelFormue": 1500,
        "sumAndelGjeld": 39500
      },
      "leveransetype": "ordinaer",
      "kildesystem": "SBS-1",
      "oppgave": [
        {
          "oppgaveeier": {
            "foedselsnummer": "00000000000",
            "navn": "LJILJANA BORLAUG"
          },
          "eiertid": {
            "start": "0101",
            "slutt": "3112"
          },
          "eierandel": {
            "eierandelTeller": 2,
            "eierandelNevner": 10
          },
          "boenhet": {
            "aksjeboenhetsnummer": 11,
            "kommunenummer": "0301",
            "bolignummer": "U1111",
            "gatenavnOgHusnummer": "Øvre Sveig 799 Å"
          },
          "bruksoverlatt": false,
          "andelLikningsverdiBoenhet": 20000,
          "andelSkattepliktigeInntekter": 1000,
          "andelFradragsberettigedeKostnader": 1500,
          "andelFormue": 135183,
          "andelGjeld": 6500,
          "boligselskapsFormaal": "bolig"
        },
        {
          "oppgaveeier": {
            "foedselsnummer": "00000000000",
            "navn": "ODD TORE JOSEPH"
          },
          "eiertid": {
            "start": "0101",
            "slutt": "3112"
          },
          "eierandel": {
            "eierandelTeller": 8,
            "eierandelNevner": 10
          },
          "boenhet": {
            "aksjeboenhetsnummer": 11,
            "kommunenummer": "0301",
            "bolignummer": "U1111",
            "gatenavnOgHusnummer": "Øvre Sveig 799 Å"
          },
          "bruksoverlatt": false,
          "andelLikningsverdiBoenhet": 50000,
          "andelSkattepliktigeInntekter": 1500,
          "andelFradragsberettigedeKostnader": 0,
          "andelFormue": 540731,
          "andelGjeld": 33000,
          "boligselskapsFormaal": "bolig"
        }
      ],
      "sletteoppgave": []
    }
  ]
}
```

#### Eksempel på respons

```
{
  "dialogId": "018b3d0f-d57e-7f5c-8a04-76dbc7e2fed2",
  "dialogelementId": "018f5297-fde1-7301-af34-df1bc3fff6b5",
  "oppgavegiversLeveranseReferanse": "leveranse-1",
  "antallOppgaver": 11
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                   |
|----------|-----------------|----------------------------------------------|
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

![informasjonsmodell](../../static/download/Informasjonsmodell_Boligselskap.png)

| Eier                            | Element                              | Dokumentasjon                                                                                                                                                                                                                                                                        |
|---------------------------------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Boenhet                         | aksjeboenhetsnummer                  | Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer                                                                                                                                                                                                        |
| Boenhet                         | andelsnummer                         | Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer                                                                                                                                                                                                        |
| Boenhet                         | bolignummer                          | En bokstav og fire siffer som entydig identifiserer den enkelte bruksenheten innenfor en adresserbar bygning eller bygningsdel                                                                                                                                                       |
| Boenhet                         | gatenavnOgHusnummer                  | Navn på gate og husnummer for boenheten                                                                                                                                                                                                                                              |
| Boenhet                         | kommunenummer                        | Nummer på kommunen boenheten tilhører                                                                                                                                                                                                                                                |
| Eierandel                       | eierandelNevner                      | Nevner i eierandelsbrøken                                                                                                                                                                                                                                                            |
| Eierandel                       | eierandelTeller                      | Teller i eierandelsbrøken                                                                                                                                                                                                                                                            |
| Leveranse                       | boligselskapFormål                   | Boligselskapets formål. Denne må spesifiseres enten på leveransen, eller oppgaven. Dersom den blir satt i begge vil boligformålet for oppgaven være gjeldende. Verdien skal være en av "bolig", "fritidsbolig", "fritidsboligUtland eller "ikkeBolig" (Brukes f.eks. for garasjelag) |
| Leveranse                       | inntektsår                           | Inntektsåret leveransen gjelder                                                                                                                                                                                                                                                      |
| Leveranse                       | kildesystem                          | System brukt for å levere oppgaven                                                                                                                                                                                                                                                   |
| Leveranse                       | leveransetype                        | type av leveranse som angir om leveransen inneholder ordinære oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver å innrapportere                                                                                                                                      |
| Leveranse                       | oppgave                              | Oppgave som leveres                                                                                                                                                                                                                                                                  |
| Leveranse                       | oppgavegiver                         | Tredjepart som rapporterer opplysning til Skatteetaten                                                                                                                                                                                                                               |
| Leveranse                       | oppgavegiversLeveranseReferanse      | Frivillig referanse på innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten                                                                                                                                                                               |
| Leveranse                       | oppgaveoppsummering                  | Oppsummering med totalsummer for innleverte oppgaver                                                                                                                                                                                                                                 |
| Leveranse                       | sletteoppgave                        | Oppgave for sletting av tidligere innrapporterte oppgaver                                                                                                                                                                                                                            |
| Melding                         | leveranse                            | Selve leveransen. Alle leveranser på en melding må ha samme oppgavegiver                                                                                                                                                                                                             |
| OppgaveBoligselskap             | andelFormue                          | Oppgaveeiers andel av felles formue i boligselskap                                                                                                                                                                                                                                   |
| OppgaveBoligselskap             | andelFradragsberettigedeKostnader    | Oppgaveeiers andel av fradragsberettigede kostnader i boligselskapet                                                                                                                                                                                                                 |
| OppgaveBoligselskap             | andelGjeld                           | Oppgaveeiers andel av gjeld i boligselskapet                                                                                                                                                                                                                                         |
| OppgaveBoligselskap             | andelLikningsverdiBoenhet            | Oppgaveeiers andel av likninsverdi av boenheten                                                                                                                                                                                                                                      |
| OppgaveBoligselskap             | andelSkattepliktigeInntekter         | Oppgaveeiers andel av skattepliktige inntekter i boligselskapet                                                                                                                                                                                                                      |
| OppgaveBoligselskap             | boenhet                              | Boenheten oppgaven gjelder                                                                                                                                                                                                                                                           |
| OppgaveBoligselskap             | boligselskapsFormål                  | Boligselskapets formål. Denne må spesifiseres enten på leveransen, eller oppgaven. Dersom den blir satt i begge vil boligformålet for oppgaven være gjeldende. Verdien skal være en av "bolig", "fritidsbolig", "fritidsboligUtland eller "ikkeBolig" (Brukes f.eks. for garasjelag)                   |
| OppgaveBoligselskap             | bruksoverlatt                        | Framleid boenhet der boenheten er leid ut av andelshaver i halvparten eller mer av eiertiden det rapporteres for                                                                                                                                                                     |
| OppgaveBoligselskap             | eierandel                            | Oppgaveeiers eierandel i boenheten                                                                                                                                                                                                                                                   |
| OppgaveBoligselskap             | eiertid                              | Oppgaveeiers tid som eier av boenheten                                                                                                                                                                                                                                               |
| OppgaveBoligselskap             | oppgaveeier                          | Eier av oppgaven                                                                                                                                                                                                                                                                     |
| Oppgaveeier                     | fødselsnummer                        | Fødselsnummer på oppgaveeier. Eksklusiv enten fødselsnummer eller organisasjonsnummer                                                                                                                                                                                                |
| Oppgaveeier                     | navn                                 | Navn på oppgaveeier                                                                                                                                                                                                                                                                  |
| Oppgaveeier                     | organisasjonsnummer                  | Organisasjonsnummer på oppgaveeier. Eksklusiv enten fødselsnummer eller organisasjonsnummer                                                                                                                                                                                          |
| Oppgavegiver                    | kontaktinformasjon                   | Kontaktinformasjon for oppgavegiver                                                                                                                                                                                                                                                  |
| Oppgavegiver                    | organisasjonsnummer                  | Organisasjonsnummer på oppgavegiver                                                                                                                                                                                                                                                  |
| OppgaveoppsummeringBoligselskap | antallOppgaver                       | Totalt antall oppgaver i leveransens oppgaver                                                                                                                                                                                                                                        |
| OppgaveoppsummeringBoligselskap | sumAndelFormue                       | Sum av andelFormue i leveransens oppgaver                                                                                                                                                                                                                                            |
| OppgaveoppsummeringBoligselskap | sumAndelFradragsberettigedeKostnader | Sum av andelFradragsberettigedeKostnader i leveransens oppgaver                                                                                                                                                                                                                      |
| OppgaveoppsummeringBoligselskap | sumAndelGjeld                        | Sum av andelGjeld i leveransens oppgaver                                                                                                                                                                                                                                             |
| OppgaveoppsummeringBoligselskap | sumAndelLikningsverdiBoenhet         | Sum av andelLikningsverdiBoenhet i leveransens oppgaver                                                                                                                                                                                                                              |
| OppgaveoppsummeringBoligselskap | sumAndelSkattepliktigeInntekter      | Sum av andelSkattepliktigeInntekter i leveransens oppgaver                                                                                                                                                                                                                           |
| SletteoppgaveBoligselskap       | aksjeboenhetsnummer                  | Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer                                                                                                                                                                                                        |
| SletteoppgaveBoligselskap       | andelsnummer                         | Nummer for boenheten. Eksklusiv enten aksjeboenhetsnummer, eller andelsnummer                                                                                                                                                                                                        |
| SletteoppgaveBoligselskap       | oppgaveeier                          | Eier av sletteoppgaven                                                                                                                                                                                                                                                               |

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

I første omgang er test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være
med å pilotere løsningene.

### Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md) for 
denne tjenesten. Men egenskaper ved enhetene som har testdata kan søkes frem i Tenor.

### Testdata

Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatasøk tilbyr dette.

Det er ikke tillatt å bruke/sende skarpe data i test pga krav fra GDPR-regelverket.

Det finnes foreløpig ingen testdata for denne tjenesten. Denne siden oppdateres fortløpende ettersom testdata blir
tilgjengelig.

</TabItem>
</Tabs>
