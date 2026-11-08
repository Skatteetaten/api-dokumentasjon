---
title: Andre tjenester for innrapportering skattemelding API
slug: /api/innrapportering-skattemelding-andre-tjenester
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding]
keywords: [skattemelding]
last_updated: Oct 22, 2026
hide_table_of_contents: true
---

<Summary>Andre nyttige tjenester til bruk ved innrapportering av skattemelding</Summary>

<Tabs underline={true}>
<TabItem headerText="Funksjonell dokumentasjon" itemKey="itemKey-1" default>
Nedenfor dokumenteres tjenester som er utviklet basert på behov fra sluttbrukersystemer, men som ikke er en del av den obligatoriske flyten for innsending av skattemeldingen.

## Hent gjeldende skattemelding for gitt type
I noen tilfeller er det ønskelig å hente ut den siste gjeldende skattemeldingen for en gitt type, f.eks. for å hente ut siste gjeldende utkast av skattemeldingen etter fastsettelse.

Endepunktet som benyttes til dette er `GET /api/skattemelding/v2/{type}/{inntektsår}/{identifikator}`, hvor `type` kan være `utkast` eller `fastsatt`.

## Valider skattemeldingen uten dokumentreferanseTilGjeldendeDokument
Hvis det er et behov for å gjøre beregninger fra SBS før Skatteetaten har publisert utkast for et inntektsår, kan denne tjenesten benyttes.
Den er helt lik som valideringstjenesten, men krever ikke `dokumentreferanseTilGjeldendeDokument`.

Denne tjenesten skal ikke brukes for validering før innsending, da det er en del kontroller som sjekker mot gjeldende utkast som denne tjenesten ikke utfører.

Endepunktet for denne tjenesten er `POST /api/skattemelding/v2/validertest/{inntektsår}/{identifikator}`

## Lagre skattemelding for midlertidig visning
Ved behov for å vise skattemeldingen i visningsklienten før innsending, kan denne lastes opp til Skatteetaten.
Tjenesten skiller på personlige og upersonlige skattepliktige, og det er derfor to endepunkter for dette:
* Personlig skattepliktig: `POST /api/skattemelding/v2/til-midlertidig-lagret-skattemelding-for-visning`
* Upersonlig skattepliktig: `POST /api/skattemelding/v2/til-midlertidig-lagret-skattemelding-for-visning-upersonlig/{identifikator}`<br/>
  Identifikator er organisasjonsnummer for upersonlig skattepliktig.

Request body er skattemeldingen med næringsspesifikasjon på samme format som i validerings- og innsendingstjenesten.

Skattemeldingen vil bli lagret i 24 timer for visning via `url`-feltet som returneres i responsen.

:::info
Tjenesten støtter kun autentisering med ID-Porten, ikke Maskinporten.
:::

## Foreløpig avregning
Det er laget en egen tjeneste for å kunne gjøre en foreløpig avregning basert på den beregnede skatten man sender inn til komponenten.
Endelig avregning i forbindelse med skatteoppgjøret kan gi et annet avregningsresultat enn ved foreløpig avregning.

Tjenesten tar ikke høyde for eventuelle tidligere skatteoppgjør for aktuelt inntektsår.
Hvis skattyter har et skatteoppgjør og fått utbetalt tilgode, og skal gjøre en endring, vil denne tjenesten avregne som om det var første skatteoppgjør.

Endepunktet som benyttes er `POST /api/skattemelding/v2/avregning/avregn/{inntektsår}/{identifikator}`.

:::info
Tjenesten støtter kun autentisering med ID-Porten, ikke Maskinporten.
:::

## Forhåndsfastsetting
Det er mulig å be om forhåndsfastsetting for **upersonlig skattemelding** før ordinær fastsettingsperiode starter.
Eksempelvis skal et selskap kunne få forhåndsfastsetting i mars inneværende år. Da skal skattemeldingen for inneværende _og_ foregående år leveres.
Begge skattemeldingene må da leveres på foregående års informasjonsmodell.

Under beskrives flyten for å foreta en forhåndsfastsetting.

:::info
Tjenestene [Klargjør for forhåndsfastsetting](#2-klargjør-for-forhåndsfastsetting) og [Klargjør part som mangler utkast](#3-klargjør-part-som-mangler-utkast)
støtter kun autentisering med ID-Porten, ikke Maskinporten.
:::

### 1. Hent gjeldende skattemelding for inneværende år
For å forhåndsfastsette må først gjeldende skattemelding for året som skal forhåndsfastsettes hentes vha. [tjenesten for å hente gjeldende skattemelding](#1-hent-gjeldende-skattemelding).

Dersom en skal forhåndsfastsette før skattemeldingen er tilgjengelig, vil tjenesten returnere en feilmelding med HTTP-status _403_,
og skattemeldingen må klargjøres for forhåndsfastsetting.

### 2. Klargjør for forhåndsfastsetting
Dersom skattemeldingen for inntektsåret ikke er klar på forhåndsfastsettingtidspunktet, må endepunktet
`POST /api/skattemelding/v2/klargjoerforhaandsfastsetting/{inntektsår}/{identifikator}` kalles for å klargjøre skattemeldingen for forhåndsfastsetting.
Når det er gjort, skal utkast kunne hentes for den skattepliktige.

### 3. Klargjør part som mangler utkast
Dersom en organisasjon mangler utkast etter at det er klargjort for forhåndsfastsetting,
kan endepunktet `POST /api/skattemelding/v2/klargjoerpart/{inntektsår}/{identifikator}` kalles for å klargjøre parten.

### 4. Klargjør dokumentene for innsending
Når skattemeldingen er tilgjengelig, må skattemeldingen inneholde objektet `gjelderForhaandsfastsetting`.
`innsendingsformat` er definert fra kodelisten `forhaandsfassettingsformattype.xml`.<br/>
Om årets modeller og kodelister er tilgjengelig på forhåndsfastsettingstidspunktet, skal `aaretsSkattemelding` benyttes med gjeldende modeller for inntektsåret. <br/>
Om det forhåndsfastsettes før årets modeller og kodelister er tilgjengelig, skal `fjoraaretsSkattemelding` benyttes på fjorårets innsendingsformat.
Det er derimot noen unntak hvor inntektsårets kodelister skal benyttes. Disse er dokumentert i [informasjonsmodell/README.md på GitHub](https://github.com/Skatteetaten/skattemeldingen/blob/master/docs/informasjonsmodell/README.md).

I tillegg må en i `skattemeldingOgNaeringsspesifikasjonRequest` angi hvilket navnerom skattemeldingen
og eventuelt næringsspesifikasjonen er lagret på. Dette spesifiseres i `navneromVedForhaandsfastsetting` per `dokument`-objekt.
Navnerommet ligger som en attributt i XSD-en til skattemeldingen og næringsspesifikasjonen, og må inkludere versjonsnummeret.

Når skattemeldingen og næringsspesifikasjonen er utfylt, valideres og sendes disse inn på vanlig måte som beskrevet tidligere.

## Hent innsendt skattemelding
For å hente den siste innsendte skattemeldingen for gitt inntektsår kan endepunktet `GET /api/skattemelding/v2/innsendt/{inntektsår}/{identifikator}` benyttes.

En innsendt skattemelding er den versjonen regnskaps-/årsoppgjørsystemet har lastet opp og signert via Altinn3.

## Hent opplastede vedlegg til fastsatte skattemeldinger
For å hente ut tidligere innsendte vedlegg til fastsatte skattemeldinger, enten fastsatt i gjeldende/nyeste skattemelding eller fra tidligere fastsettinger,
kan følgende endepunkt benyttes: `GET /api/skattemelding/v2/{inntektsår}/{identifikator}/vedlegg/{vedleggId}`.

`vedleggId` er ID fra stien "/skattemelding/vedlegg/id" til den aktuelle skattemelding-XML-en. Dette er ID-en som ble
returnert fra Altinn3-appen ved opplasting av vedlegget, og referert til i skattemeldingen.

:::info
Tjenesten støtter kun autentisering med ID-Porten, ikke Maskinporten.
:::

## Hent gjeldende fastsetting i PDF-format
For å hente ut gjeldende fastsetting i PDF-format kan følgende endepunkt benyttes:
`/api/skattemelding/v2/{inntektsår}/{identifikator}/gjeldende-fastsetting.pdf`

Query-parameteren `spraak` benyttes for å angi ønsket språk i PDF-en. Norsk bokmål returneres om ikke spraak er satt.

## Hent gjeldende skatteoppgjør som PDF
For å hente ut gjeldende skatteoppgjør i PDF-format kan følgende endepunkt benyttes:
`/api/skattemelding/v2/skatteoppgjoer/{inntektsår}/{identifikator}/{skatteoppgjoerType}/gjeldende.pdf`

Språk i PDF-en for skatteoppgjøret vil utledes fra kommunikasjonsspråket til den skattepliktige.

Gjeldende skatteoppgjør vil også kunne hentes via tjenesten [Skatt dialogdokumenter](../api/skattdialogdokumenter).

## Hent lenker til publikumsportaler
Leverandører kan lenke direkte til publikumsportaler fra SBS. For personlige returneres lenker til Min Skatt, skattemeldingen og Tilsvar.
For upersonlige returneres lenke til Tilsvar.

Tjenesten som benyttes er `GET /api/skattemelding/v2/{inntektsår}/{identifikator}/lenker/publikumsportaler`.

:::info
Tjenesten støtter kun autentisering med ID-Porten, ikke Maskinporten.
:::

## Søk om utsatt frist for levering av skattemeldingen
Den skattepliktige kan søke om utsatt frist for levering av skattemeldingen før ordinær innleveringsfrist.
Informasjon og innleveringsfrister finnes på [Skatteetatens nettsider](https://www.skatteetaten.no/person/skatt/skattemelding/utsattfrist/).

Leverandører kan søke om utsettelse på vegne av inntil 10 prosent av klientmassen.

For å søke om utsatt frist fra SBS kan endepunktet `POST /api/skattemelding/v2/utsattfristsoeknad/{identifikator}` benyttes.
Informasjon om den skattepliktige sendes inn i request body.
Responsen inneholder en kvittering på at søknaden er mottatt, samt en unik `referanse` for å senere kunne polle status på søknaden.

Det kan også søkes for flere skattepliktige samtidig. Da benyttes `POST /api/skattemelding/v2/utsattfristsoeknad/bulk/{identifikator}`,
hvor det sendes inn en liste med `klienter`/skattepliktige i requesten.

Status på søknaden om utsatt frist kan følges opp ved å kalle `GET /api/skattemelding/v2/utsattfristsoeknad/innsendingstatus/{referanse}`.
Her er `referanse` den samme som ble sendt inn av SBS i søknaden. Responsen vil inneholde eventuell ny `innvilgetFrist`.

:::info
Tjenestene for søknad om utsatt frist støtter kun autentisering med ID-Porten, ikke Maskinporten.
:::

## Klage
For å sende inn en klage på et vedtak fra Skatteetaten må det først finnes en fastsatt skattemelding for det aktuelle inntektsåret.

Ved klage må `innsendingsformaal` i `skattemeldingOgNaeringsspesifikasjonRequest` settes til `klage`.

Ved klage på et myndighetsfastsatt vedtak, kreves det at det legges med vedlegg med vedleggskategori `klage`.
Feltene som har blitt myndighetsfastsatt ligger som [låste felter](#12-låste-felter) ved uthenting av siste gjeldende skattemelding.
Ved innsending av klage er det mulig å endre hele skattemeldingen med næringsspesifikasjon, inklusive låste felter.

Ved skjønnsfastsetting fastsetter Skatteetaten skattrgrunnlaget ved skjønn fordi den skattepliktige ikke har levert inn skattemelding innen fristen.
Ved skjønnsfastsetting krever valideringen at skattemeldingsobjektet som skal sendes inn
setter feltet `gjelderSkjoennsfastsetting` til `true`. Det er ikke påkrevd med vedlegg ved skjønnsfastsetting.

Deretter sendes skattemeldingen med næringsspesifikasjon inn på vanlig måte som beskrevet tidligere.

</TabItem>

</Tabs>