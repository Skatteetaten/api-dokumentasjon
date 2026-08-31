---
title: Innrapportering TPO filopplasting API
slug: /api/innrapportering-tpo-filmottak
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API ]
keywords: [ tredjepartsopplysninger, grunnlagsdata, filopplasting ]
last_updated: Aug 28, 2026
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av tredjepartsopplysninger ved maskinell filopplasting</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

## Status Filopplasting

| Miljø        | Status             |
|--------------|--------------------|
| Ekstern test | :white_check_mark: |
| Produksjon   | :x:                |

## Om

For generell informasjon om tjenestene se egne sider om:

* [Bruk av API-er for innrapportering](../om/bruk_innrapportering.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Bruk av API-et

Dette API-et er ment for selskaper som skal rapportere tredjepartsopplysninger, som har innsendinger større enn 10MB og
som ikke kan dele opp innsendingene. Følgende ordninger er støttet:

- AKSJESPAREKONTO
- BOLIGSPARING UNGDOM
- INTERNASJONAL RAPPORTERING
- FINANSPRODUKTER
- INNSKUDD, UTLAAN OG RENTER
- SKATTEPLIKTIG KUNDEUTBYTTE
- VERDIPAPIRFOND
- VERDIPAPIRFONDSHISTORIKK

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringtpofilopplasting`

## Systemtilgang med systembruker

Steg for
steg: [Slik kobler du deg opp til våre reetablerte tjenester](https://www.skatteetaten.no/samarbeidspartnere/reetablering-altinn/systemleverandor/oppkobling/)

Dette APIet krever at systemet og dets systembrukere har tilgang til én eller flere av følgende tilgangspakker:

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

Ved bruk av standard systembruker kan man også benytte enkeltrettigheter for tilgang til tjenesten:
Velg den som passer for det du skal sende inn

```JSON
"Rights": [
  {
    "Resource": [
      {
        "value": "ske-innrapportering-aksjesparekonto",
        "id": "urn:altinn:resource"
      },
      {
        "value": "ske-innrapportering-boligsparing-ungdom",
        "id": "urn:altinn:resource"
      },
      {
        "value": "ske-innrapportering-internasjonal-rapportering",
        "id": "urn:altinn:resource"
      },
      {
        "value": "ske-innrapportering-finansprodukter",
        "id": "urn:altinn:resource"
      },
      {
        "value": "ske-innrapportering-innskudd-utlaan-renter",
        "id": "urn:altinn:resource"
      },
      {
        "value": "ske-innrapportering-skattepliktig-kundeutbytte",
        "id": "urn:altinn:resource"
      },
      {
        "value": "ske-innrapportering-verdipapirfond",
        "id": "urn:altinn:resource"
      }
    ]
  }
]
```

## Teknisk spesifikasjon

URL-er til API-et, beskrivelse av parametre, endepunkter og respons ligger i Open API-spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-tpo-filmottak-api/)

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

API-et for innrapportering via filopplasting har fire endepunkter

* __POST /opplastinger__: Laster opp en fil til skatteetaten for kontroll
* __GET /opplastinger/:id__: Henter status for en enkelt opplastet fil
* __DELETE /opplastinger/:id__: Sletter en opplastet fil
* __PUT /innsending__: Sender inn en opplastet og validert fil til behandling
* __GET /forsendelser/:forsendelseId/dokumenter/:dokumentId__: Henter ut tilbakemelding eller tidligere innsendt fil

Se [feilkoder](innrapportering-tpo-filmottak?tab=Feilkoder) for relaterte feilmeldinger.

Se også [eksempler](innrapportering-tpo-filmottak?tab=Eksempler) for de ulike endepunktene.

## Datakatalog

Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Innsending

En innsending foregår over flere steg.

- Last opp en XML fil til `opplastinger`-endepunktet
- Poll `opplastinger`-endepunktet for å se om status til fila har blitt enten `VALIDERING_FEILET`,
  `TEKNISK_FEIL_VALIDERING` eller `KLAR_TIL_INNSENDING`
- Hvis status er `KLAR_TIL_INNSENDING` kall `innsending`-endepunktet for å sende inn fila
- Hvis status er `VALIDERING_FEILET` eller `TEKNISK_FEIL_VALIDERING`, se feil i feilliste på status kallet for hva som
  feilet

### POST /opplastinger

#### Eksempel på body

AKSJESPAREKONTO EKSEMPEL

```xml
<?xml version="1.0" encoding="UTF-8"?>
<melding xmlns="urn:ske:fastsetting:innsamling:aksjesparekonto:v3"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="urn:ske:fastsetting:innsamling:aksjesparekonto:v3 aksjesparekonto_v3_3.xsd">
  <leveranse>
    <kildesystem>Kildesystemet v2.0.5</kildesystem>
    <oppgavegiver>
      <organisasjonsnummer>310702900</organisasjonsnummer>
      <organisasjonsnavn>FINANSINSTITUSJON ASA</organisasjonsnavn>
      <kontaktinformasjon>
        <navn>Kari Kontaktperson</navn>
        <telefonnummer>80080000</telefonnummer>
        <varselEpostadresse>kari.kontaktperson@finansinstitusjon.no</varselEpostadresse>
        <varselSmsMobilnummer>80080000</varselSmsMobilnummer>
      </kontaktinformasjon>
    </oppgavegiver>
    <inntektsaar>2026</inntektsaar>
    <oppgavegiversLeveranseReferanse>EksternLeveranseRef12345</oppgavegiversLeveranseReferanse>
    <leveransetype>ordinaer</leveransetype>

    <oppgave>
      <oppgaveeier>
        <foedselsnummer>00000000000</foedselsnummer>
        <fornavn>Scott</fornavn>
        <etternavn>Tiger</etternavn>
        <foedselsdato>1980-05-10</foedselsdato>
        <alternativIdentifikator>4545454545</alternativIdentifikator>
        <internasjonalIdentifikator>
          <identifikator>454-54-5454</identifikator>
          <identifikatortype>TIN</identifikatortype>
          <utstedtAvLand>US</utstedtAvLand>
        </internasjonalIdentifikator>
        <adresse>
          <landkode>NO</landkode>
          <adresseStrukturert>
            <byEllerStedsnavn>Oslo</byEllerStedsnavn>
          </adresseStrukturert>
        </adresse>
      </oppgaveeier>
      <aksjesparekonto>
        <kontonummer>NO0014437946</kontonummer>
        <kontonummertype>ISIN</kontonummertype>
        <inngangsverdi>10</inngangsverdi>
        <ubenyttetSkjerming>10</ubenyttetSkjerming>
        <anvendtSkjerming>0</anvendtSkjerming>
        <innskudd>10000</innskudd>
        <uttak>0</uttak>
        <skattepliktigGevinstTap>0</skattepliktigGevinstTap>
        <formuesverdiKontantdel>5000</formuesverdiKontantdel>
        <avsluttet>false</avsluttet>
      </aksjesparekonto>
    </oppgave>

    <oppgave>
      <oppgaveeier>
        <foedselsnummer>00000000000</foedselsnummer>
        <fornavn>Scott</fornavn>
        <etternavn>Tiger</etternavn>
      </oppgaveeier>
      <aksjesparekonto>
        <kontonummer>420042004200</kontonummer>
        <kontonummertype>OBAN</kontonummertype>
        <inngangsverdi>10</inngangsverdi>
        <ubenyttetSkjerming>10</ubenyttetSkjerming>
        <anvendtSkjerming>0</anvendtSkjerming>
        <innskudd>10000</innskudd>
        <uttak>0</uttak>
        <forvaltningskostnad>100</forvaltningskostnad>
        <skattepliktigGevinstTap>0</skattepliktigGevinstTap>
        <formuesverdiKontantdel>4000</formuesverdiKontantdel>
        <kontoOverfoertNyTilbyder>true</kontoOverfoertNyTilbyder>
        <avsluttet>false</avsluttet>
      </aksjesparekonto>
      <produkt>
        <finansproduktIsin>NOOB80000WW4</finansproduktIsin>
        <finansproduktnavn>olje</finansproduktnavn>
        <antall>1</antall>
        <formuesverdi>100</formuesverdi>
        <utbetaltUtbytte>0</utbetaltUtbytte>
        <realisasjonsvederlag>0</realisasjonsvederlag>
      </produkt>
      <produkt>
        <finansproduktIsin>NOOB80000WW5</finansproduktIsin>
        <finansproduktnavn>gass</finansproduktnavn>
        <antall>1</antall>
        <formuesverdi>10000</formuesverdi>
        <utbetaltUtbytte>500</utbetaltUtbytte>
        <realisasjonsvederlag>0</realisasjonsvederlag>
      </produkt>
    </oppgave>

    <!-- oppsummering av alle oppgavene i leveransen -->
    <oppgaveoppsummering>
      <antallOppgaver>2</antallOppgaver>
      <sumInngangsverdi>20.00</sumInngangsverdi>
      <sumInnskudd>20000.00</sumInnskudd>
      <sumUttak>0.00</sumUttak>
      <sumUbenyttetSkjerming>20.00</sumUbenyttetSkjerming>
      <sumAnvendtSkjerming>0.00</sumAnvendtSkjerming>
      <sumSkattepliktigGevinstTap>0.00</sumSkattepliktigGevinstTap>
      <sumFormuesverdiKontantdel>9000.00</sumFormuesverdiKontantdel>
    </oppgaveoppsummering>

  </leveranse>
</melding>


```

#### Eksempel på respons

```json
{
  "status": "LASTER_OPP",
  "id": "019c6663-aeb0-74ae-91e5-c1c64b6b2579",
  "feilliste": null,
  "sistOppdatertTidspunkt": null
}
```

### GET /opplastinger/:id

#### Eksempel på respons

```json
[
  {
    "status": "KLAR_TIL_INNSENDING",
    "id": "019c6663-aeb0-74ae-91e5-c1c64b6b2579",
    "feilliste": [],
    "sistOppdatertTidspunkt": "2026-08-25T15:00:23.98682+02:00"
  }
]
```

### PUT /innsending

#### Eksempel på respons

```json
{
  "dialogId": "0193b5cd-cb85-7320-bd8c-6c78c88dc8af",
  "forsendelseId": "0193b5cd-cbce-7dbd-b188-1437db673767",
  "oppgavegiversLeveranseReferanse": "EksternLeveranseRef12345"
}
```

### DELETE /opplastinger/:id

#### Eksempel på respons

200 OK uten mer data

### GET /forsendelser/:forsendelseId/dokumenter/:dokumentId

#### Eksempel på respons

200 OK med forventet fil.

Returnert filtype kan være enten application/json, application/xml, application/pdf eller text/csv.



</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne tjenesten kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                   |
|----------|-----------------|----------------------------------------------|
| GLD_004  | 401             | Feil i forbindelse med autentisering         |
| GLD_005  | 403             | Feil i forbindelse med autorisering          |
| GLD_006  | 400             | Feil i request                               |
| GLD_008  | 400             | Strukturell feil i tilknyttet dataformat     |
| GLD_010  | 400             | Feil i forbindelse med validering av payload |
| GLD_017  | 500             | Uspesifisert systemfeil                      |
| GLD_021  | 404             | Finner ikke forespurt ressurs                |
| GLD_022  | 405             | HTTP-metode ikke støttet                     |
| GLD_023  | 500             | Uventet feil i et bakenforliggende system    |

Feilresponsene kan også inneholde en feilspesifiseringskode som presiserer feilen ytterligere. Tabellen under viser
hvilke feilspesifiseringskoder tjenesten kan gi. Dersom det finnes mer detaljert feilinformasjon enn generelt feilområde
vil det beskrives i melding, sti og angitt verdi-feltene.

| Feilspesifiseringskode | Feilområde                                                              | Årsak                                                                                                                       |
|------------------------|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1001               | Feil i xml innhold                                                      | Feil med innsendt innhold, det er enten uleselig, eller feiler i validering.                                                |
| GLD_1008               | Ugyldig token                                                           | Feil i forbindelse ved validering av token                                                                                  |
| GLD_1015               | Ikke autorisert for denne dialogen                                      | Feil i forbindelse ved autorisering.                                                                                        |
| GLD_1022               | Feil i parametre                                                        | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1023               | Finner ingen ressurs for denne URL-en                                   | Det er ikke noe innhold tilgjengelig på denne URL-en                                                                        |
| GLD_1028               | Header mangler                                                          | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json                          | Accept header er feil. API-et har kun støtte for JSON i respons                                                             |
| GLD_1031               | Content-type må være av type application/xml                            | Content-type header er feil. API-et har kun støtte for XML                                                                  |
| GLD_1050               | Finner ikke et dokument med denne IDen på denne forsendelsen            | Feil med dokumentId i forbindelse med uthenting av dokument                                                                 |
| GLD_1053               | Uventet feil i et bakenforliggende system, vennligst prøv igjen senere  | Uventet feil i et bakenforliggende system                                                                                   |
| GLD_1055               | Finner ikke organisasjon med gitt organisasjonsnummer                   | Organisasjonsnummer er ugyldig og kan ikke brukes som oppgavegiver"                                                         |
| GLD_1061               | Det finnes ingen forsendelse med denne IDen for denne ordningen         | Feil med forsendelseId i forbindelse med uthenting av dokument                                                              |
| GLD_1062               | Oppgavegiver er underenhet, og kan derfor ikke rapportere for ordningen | Underenheter kan ikke rapportere inn data                                                                                   |
| GLD_1063               | Tokenet mangler informasjon om systembruker i authorization_details     | Tokenet er ikke et gyldig systembruker token                                                                                |
| GLD_1069               | Alle leveranser i en melding må ha samme inntektsår                     | Feil med innsendt innhold, inntektsår må være like om man sender inn flere leveranser i samme request                       |
| GLD_1070               | Fil er ødelagt eller har mulig skadelig innhold                         | Opplastet fil passerte ikke viruskontroll                                                                                   |
| GLD_1102               | Alle leveranser i en melding må ha samme oppgavegiver                   | Feil med innsendt innhold, oppgavegiver må være lik om man sender inn flere leveranser i samme request                      |
| GLD_1201               | Ugyldig organisasjonnummer - feil antall sifre                          | Feil med innsendt innhold, oppgavegivers organisasjonsnummer er ikke på 9 siffer                                            |

</TabItem>

<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Informasjonsmodeller finnes i dokumentasjonen til de respektive ordningene:

- [AKSJESPAREKONTO](innrapportering-aksjesparekonto?tab=Informasjonsmodell)
- [BOLIGSPARING UNGDOM](innrapportering-bsu?tab=Informasjonsmodell)
- [INTERNASJONAL RAPPORTERING](innrapportering-internasjonalrapportering?tab=Informasjonsmodell)
- [FINANSPRODUKTER](innrapportering-finansprodukter?tab=Informasjonsmodell)
- [INNSKUDD, UTLAAN OG RENTER](innrapportering-innskuddutlaanrenter?tab=Informasjonsmodell)
- [SKATTEPLIKTIG KUNDEUTBYTTE](innrapportering-skattepliktigkundeutbytte?tab=Informasjonsmodell)
- [VERDIPAPIRFOND](innrapportering-verdipapirfond?tab=Informasjonsmodell)
- [VERDIPAPIRFONDSHISTORIKK](innrapportering-verdipapirfondshistorikk?tab=Informasjonsmodell)

</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

### Testmiljøer

For spesifikke URL-er til testmiljø hos Skatteetaten,
se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-tpo-filmottak-api/).

Digdir benytter TT02 som testmiljø, hvor følgende tilbys:

* DialogPorten
* Autentisering - Maskinporten
* Altinn innboks

Konsumenter må ha egne testmiljøer som kan kobles mot testmiljøer hos Skatteetaten og Digdir.

### Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](https://github.com/Skatteetaten/api-dokumentasjon/blob/main/docs/test/tenor.md) for
denne tjenesten. Men egenskaper ved enhetene som har testdata kan søkes frem i Tenor.

### Testdata

Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatasøk tilbyr dette. Det er ikke
tillatt å bruke/sende skarpe data i test pga krav fra GDPR-regelverket.

Det finnes foreløpig ingen testdata for denne tjenesten. Denne siden oppdateres fortløpende ettersom testdata blir
tilgjengelig.

</TabItem>
<TabItem headerText="Kontakt oss" itemKey="itemKey-6">

Trenger du faglig eller teknisk brukerstøtte knyttet til integrasjon mot innrapportering av tredjepartsopplysninger kan
du kontakte oss
via [Brukerstøttetjenesten](https://eksternjira.sits.no/servicedesk/customer/user/login?destination=plugins/servlet/desk/site/global)
eller på [Slack](https://skatteetaten.slack.com/)

</TabItem>
</Tabs>
