---
title: Innrapportering filopplasting API
slug: /api/innrapportering-filopplasting
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API ]
keywords: [ grunnlagsdata, filopplasting ]
last_updated: Oct 03, 2025
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av tredjepartsopplysninger ved filopplasting (RF-1301)</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)


## Bruk av apiet
Dette apiet kan kun brukes etter nærmere avtale med skatteetaten. Som hovedregel skal man bruke apiet for løsningen man
ønsker å rapportere for.

## Scope

Du skal bruke scope tilsvarende ordningen man vil rapportere for. Foreløpig er følgende ordninger/scopes støttet:

| Ordning                  | Scope                                                |
|--------------------------|------------------------------------------------------|
| Aksjonærregisteroppgaven | skatteetaten:innrapporteringaksjonaerregisteroppgave |


## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen.

## Teknisk spesifikasjon

URL-er til API-et, beskrivelse av parametre, endepunkter og respons ligger i Open API-spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-filopplasting-api/0.0.1)

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

API-et for innrapportering av tredjepartsopplysninger via filopplasting har fire endepunkter

* __POST lastopp__: Laster opp en fil til skatteetaten for kontroll
* __GET status__: Henter status for en lastet opp fil
* __DELETE slett__: Sletter en opplastet fil
* __POST sendinn__: Sender inn en lastet opp og validert fil til behandling

Se [feilkoder](innrapportering-filopplasting?tab=Feilkoder) for relaterte feilmeldinger.

Se også [eksempler](innrapportering-filopplasting?tab=Eksempler) for de ulike endepunktene.

## Datakatalog

Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Innsending

### Eksempel på request-URL

```
TODO: Avklare url
```

### Innsending

#### Eksempel på innsending

```xml
<?xml version="1.0" encoding="UTF-8"?>
<melding xmlns="urn:ske:fastsetting:innsamling:aksjonaerregisteroppgave:v5">
    <leveranse>
        <kildesystem>Systemtest</kildesystem>
        <leveransetype>ordinaer</leveransetype>
        <inntektsaar>2014</inntektsaar>
        <aksjeselskap>
            <organisasjonsnummer>983738478</organisasjonsnummer>
            <organisasjonsnavn>Eksempel 1 Selskap X</organisasjonsnavn>
            <selskapsinformasjon>
                <inngaaendeBeholdningAksjekapitalForHeleSelskapet>0
                </inngaaendeBeholdningAksjekapitalForHeleSelskapet>
                <utgaaendeBeholdningAksjekapitalForHeleSelskapet>100000
                </utgaaendeBeholdningAksjekapitalForHeleSelskapet>
                <erBoersnotert>false</erBoersnotert>
            </selskapsinformasjon>
            <kontaktperson>
                <navn>Tor Heia</navn>
                <rolle>T Rolle</rolle>
                <telefonnummer>00000000</telefonnummer>
                <varselEpostadresse>test@test.com</varselEpostadresse>
                <varselSmsMobilnummer>00000000</varselSmsMobilnummer>
            </kontaktperson>
        </aksjeselskap>
        <aksjeklasseoppgave>
            <aksjeklasse>
                <aksjeklasse>ordinaere</aksjeklasse>
            </aksjeklasse>
            <inngaaendeBeholdning>
                <aksjeklasseAksjekapital>0</aksjeklasseAksjekapital>
                <aksjePaalydende>0</aksjePaalydende>
                <aksjeklasseAntallAksjer>0</aksjeklasseAntallAksjer>
                <aksjeklasseInnbetaltAksjekapital>0
                </aksjeklasseInnbetaltAksjekapital>
                <aksjeklasseInnbetaltOverkurs>0</aksjeklasseInnbetaltOverkurs>
            </inngaaendeBeholdning>
            <utgaaendeBeholdning>
                <aksjeklasseAksjekapital>100000</aksjeklasseAksjekapital>
                <aksjePaalydende>100</aksjePaalydende>
                <aksjeklasseAntallAksjer>1000</aksjeklasseAntallAksjer>
                <aksjeklasseInnbetaltAksjekapital>100000
                </aksjeklasseInnbetaltAksjekapital>
                <aksjeklasseInnbetaltOverkurs>10000</aksjeklasseInnbetaltOverkurs>
            </utgaaendeBeholdning>
            <utbytte>
                <utbytte>
                    <utbytteTotalt>1000</utbytteTotalt>
                    <utbyttePerAksje>1</utbyttePerAksje>
                    <tidspunkt>2014-12-17T09:30:47+05:00</tidspunkt>
                </utbytte>
            </utbytte>
            <selskapshendelse>
                <nyutstedteAksjer>
                    <skattepliktigFusjonTilgang>
                        <antallNyutstedteAksjer>1</antallNyutstedteAksjer>
                        <antallAksjerEtter>100</antallAksjerEtter>
                        <paalydendePerAksje>1000</paalydendePerAksje>
                        <innbetaltOverkursPerAksje>100</innbetaltOverkursPerAksje>
                        <tidspunkt>2014-11-19T11:40:00</tidspunkt>
                        <antallEgneAksjerOverfoert>34</antallEgneAksjerOverfoert>
                    </skattepliktigFusjonTilgang>
                </nyutstedteAksjer>
            </selskapshendelse>
            <aksjeeierskap>
                <aksjonaer>
                    <aksjonaerMedNorskIdentifikator>
                        <foedselsnummer>01010112345</foedselsnummer>
                        <adresse>
                            <landkode>NO</landkode>
                        </adresse>
                    </aksjonaerMedNorskIdentifikator>
                    <navn>Aksjonær A</navn>
                </aksjonaer>
                <aksjonaerInngaaendeBeholdning>0</aksjonaerInngaaendeBeholdning>
                <aksjonaerUtgaaendeBeholdning>1000</aksjonaerUtgaaendeBeholdning>
                <utbytteForAksjonaer>
                    <utdeltUtbytteTotalt>1000</utdeltUtbytteTotalt>
                    <antallAksjer>1000</antallAksjer>
                    <tidspunkt>2014-12-17T09:30:47+05:00</tidspunkt>
                </utbytteForAksjonaer>
                <aksjetransaksjon>
                    <aksjerITilgang>
                        <stiftelse>
                            <antallaksjerITilgang>1000</antallaksjerITilgang>
                            <tidspunkt>2014-06-30T09:30:47+05:00</tidspunkt>
                            <totalAnskaffelsesverdi>110000</totalAnskaffelsesverdi>
                        </stiftelse>
                    </aksjerITilgang>
                </aksjetransaksjon>
            </aksjeeierskap>
        </aksjeklasseoppgave>
        <aksjeklasseoppgave>
            <aksjeklasse>
                <aksjeklasse>A</aksjeklasse>
            </aksjeklasse>
            <inngaaendeBeholdning>
                <aksjeklasseAksjekapital>0</aksjeklasseAksjekapital>
                <aksjePaalydende>0</aksjePaalydende>
                <aksjeklasseAntallAksjer>0</aksjeklasseAntallAksjer>
                <aksjeklasseInnbetaltAksjekapital>0
                </aksjeklasseInnbetaltAksjekapital>
                <aksjeklasseInnbetaltOverkurs>0</aksjeklasseInnbetaltOverkurs>
            </inngaaendeBeholdning>
            <utgaaendeBeholdning>
                <aksjeklasseAksjekapital>100000</aksjeklasseAksjekapital>
                <aksjePaalydende>100</aksjePaalydende>
                <aksjeklasseAntallAksjer>1000</aksjeklasseAntallAksjer>
                <aksjeklasseInnbetaltAksjekapital>100000
                </aksjeklasseInnbetaltAksjekapital>
                <aksjeklasseInnbetaltOverkurs>10000</aksjeklasseInnbetaltOverkurs>
            </utgaaendeBeholdning>
            <utbytte>
                <utbytte>
                    <utbytteTotalt>1000</utbytteTotalt>
                    <utbyttePerAksje>1</utbyttePerAksje>
                    <tidspunkt>2014-12-17T09:30:47+05:00</tidspunkt>
                </utbytte>
            </utbytte>
            <selskapshendelse>
                <nyutstedteAksjer>
                    <skattepliktigFusjonTilgang>
                        <antallNyutstedteAksjer>1</antallNyutstedteAksjer>
                        <antallAksjerEtter>100</antallAksjerEtter>
                        <paalydendePerAksje>1000</paalydendePerAksje>
                        <innbetaltOverkursPerAksje>100</innbetaltOverkursPerAksje>
                        <tidspunkt>2014-11-19T11:40:00</tidspunkt>
                        <antallEgneAksjerOverfoert>34</antallEgneAksjerOverfoert>
                    </skattepliktigFusjonTilgang>
                </nyutstedteAksjer>
            </selskapshendelse>
            <aksjeeierskap>
                <aksjonaer>
                    <aksjonaerMedNorskIdentifikator>
                        <foedselsnummer>01010112345</foedselsnummer>
                        <adresse>
                            <landkode>NO</landkode>
                        </adresse>
                    </aksjonaerMedNorskIdentifikator>
                    <navn>Aksjonær A</navn>
                </aksjonaer>
                <aksjonaerInngaaendeBeholdning>0</aksjonaerInngaaendeBeholdning>
                <aksjonaerUtgaaendeBeholdning>1000</aksjonaerUtgaaendeBeholdning>
                <utbytteForAksjonaer>
                    <utdeltUtbytteTotalt>1000</utdeltUtbytteTotalt>
                    <antallAksjer>1000</antallAksjer>
                    <tidspunkt>2014-12-17T09:30:47+05:00</tidspunkt>
                </utbytteForAksjonaer>
                <aksjetransaksjon>
                    <aksjerITilgang>
                        <stiftelse>
                            <antallaksjerITilgang>1000</antallaksjerITilgang>
                            <tidspunkt>2014-06-30T09:30:47+05:00</tidspunkt>
                            <totalAnskaffelsesverdi>110000</totalAnskaffelsesverdi>
                        </stiftelse>
                    </aksjerITilgang>
                </aksjetransaksjon>
            </aksjeeierskap>
        </aksjeklasseoppgave>
        <oppgaveoppsummering>
            <antallAksjeklasseoppgaver>1</antallAksjeklasseoppgaver>
            <antallSelskapshendelser>1</antallSelskapshendelser>
            <antallUtbytter>1</antallUtbytter>
            <antallAksjeeierskap>1</antallAksjeeierskap>
            <antallUtbytteForAksjonaer>1</antallUtbytteForAksjonaer>
            <antallAksjetransaksjoner>1</antallAksjetransaksjoner>
        </oppgaveoppsummering>
    </leveranse>
</melding>
```

#### Eksempel på respons
```json
[
  {
    "filId": "0199a9b1-3766-72bc-bf4a-c2ee5dbb65a6"
  }
]
```

### Status

#### Eksempel på respons
```json
[
  {
    "filId": "0199a9b1-3766-72bc-bf4a-c2ee5dbb65a6",
    "prosessteg": "LASTER_OPP",
    "feilliste": [],
    "sistOppdatertTidspunkt": "2025-10-03T12:48:17.573037+02:00"
  }
]
```

### Send inn

#### Eksempel på respons

```json
{
  "dialogId": "0193b5cd-cb85-7320-bd8c-6c78c88dc8af",
  "forsendelseId": "0193b5cd-cbce-7dbd-b188-1437db673767",
  "oppgavegiversLeveranseReferanse": "EksternReferanse_2013_1"
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne tjenesten kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                   |
|----------|-----------------|----------------------------------------------|
| GLD_006  | 400             | Feil i request                               |
| GLD_008  | 400             | Strukturell feil i tilknyttet dataformat     |
| GLD_010  | 400             | Feil i forbindelse med validering av payload |
| GLD_017  | 500             | Uspesifisert systemfeil                      |
| GLD_021  | 404             | Finner ikke forespurt ressurs                |
| GLD_022  | 405             | HTTP-metode ikke støttet                     |

Feilresponsene kan også inneholde en feilspesifiseringskode som presiserer feilen ytterligere.
Tabellen under viser hvilke feilspesifiseringskoder tjenesten kan gi.
Dersom det finnes mer detaljert feilinformasjon enn generelt feilområde vil det beskrives i melding, sti og
angitt verdi-feltene.

| Feilspesifiseringskode | Feilområde                                                   | Årsak                                                                                                                       |
|------------------------|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1001               | Feil i xml innhold"                                          | Feil med innsendt innhold, det er enten uleselig, eller feiler i validering.                                                |
| GLD_1022               | Feil i parametre                                             | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1023               | Finner ingen ressurs for denne URL-en                        | Det er ikke noe innhold tilgjengelig på denne URL-en                                                                        |
| GLD_1028               | Header mangler                                               | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json               | Accept header er feil. API-et har kun støtte for JSON i respons                                                             |
| GLD_1031               | Content-type-header må være av type application/xml          | Content-type header er feil. API-et har kun støtte for XML                                                                  |
| GLD_1050               | Finner ikke et dokument med denne IDen på denne forsendelsen | Det finnes ikke noe dokument med gitt id på angitt forsendelse                                                              |

</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

### Testmiljøer

For spesifikke URL-er til testmiljø hos Skatteetaten, se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-filopplasting-api/0.0.1).

Digdir benytter TT02 som testmiljø, hvor følgende tilbys:
* DialogPorten
* Autentisering - Maskinporten
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

Har du spørsmål til Skatteetaten om Innrapportering via Filopplasting, kan du sende oss e-post: [altinnreetablering\@skatteetaten.no](mailto:altinnreetablering@skatteetaten.no)  
Vær oppmerksom på at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3.

</TabItem>
</Tabs>
