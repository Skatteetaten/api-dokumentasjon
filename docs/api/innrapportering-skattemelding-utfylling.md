---
title: Utfyllingstjenester for innrapportering skattemelding API
slug: /api/innrapportering-skattemelding-utfylling
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding, Eiendom]
keywords: [skattemelding, eiendom]
last_updated: Oct 22, 2026
hide_table_of_contents: true
---

<Summary>Utfyllingstjenester benyttet for innrapportering av skattemeldingen fra sluttbrukersystemer</Summary>

## Generelle konsepter i XSD-filene
Noen typer og egenskaper brukes på tvers av informasjonsmodellene dokumentert i [onboardingsguiden](../api/innrapportering-skattemelding-new#informasjonsmodell-onboarding). XSD-ene angir hvilke egenskaper som er tilgjengelige på det enkelte objektet eller feltet.

### ID-er
Objekter i skattemeldingen har en `id` som identifiserer den enkelte forekomsten. Når et objekt kommer fra et utkast,
bør samme `id` videreføres når objektet endres. Feltene på objektet kan endres uten at objektet får en ny `id`.
Når sluttbrukersystemet oppretter et nytt objekt, må det også opprette en `id`. ID-en må være unik innenfor skattemeldingen.
Den kan for eksempel være en GUID eller en annen unik identifikator.

Det er noen unntak for håndtering av id i [næringsspesifikasjonen](../api/innrapportering-skattemelding-innsending?tab=informasjonsmodell#id-er-i-næringsspesifikasjonen).

## Egenskaper på objekter og felter
Objekter og felter i skattemeldingen kan ha egenskaper i tillegg til selve opplysningen som rapporteres. Hvilke egenskaper som kan brukes på den enkelte forekomsten, er definert i informasjonsmodellen.

### Egenskaper på objekter
Enkelte forhold angis som egenskaper på objektet de gjelder, og rapporteres ikke som egne objekter i skattemeldingen.
Dette gjelder blant annet:
* utenlandsforhold, som angis med `landkode`
* kommunetilhørighet, som angis med `kommunenummer`

Det finnes altså ikke egne objekter for eksempelvis et utenlandsforhold eller en kommunetilhørighet. Egenskapen angis på objektet som forholdet gjelder.

For personlig skattepliktige fremgår hvilke egenskaper som kan brukes på de ulike forekomstene av kodelisten `{inntektsår}_egenskaperPerForekomstISkattemelding.xml` hvor `{inntektsår}` er inntektsåret for skattemeldingen.

### Egenskaper på felter
Enkelte felt kan ha egenskaper i tillegg til feltets verdi. Hvilke egenskaper som kan angis, bestemmes av typen til feltet i XSD-en.
For eksempel kan et beløpsfelt ha skattemessige egenskaper knyttet til beløpet. Slike egenskaper skal bare brukes på felt der den aktuelle typen i XSD-en åpner for det.

Bruk XSD-en for samtlige, og i tillegg kodelisten `{inntektsår}_egenskaperPerForekomstISkattemelding.xml` for personlig skattepliktige, for å avgjøre hvilke egenskaper som kan brukes på den aktuelle forekomsten.

### Fastsettingsberegninger
En del steder i skattemeldingen er det laget beregningsstøtte for å komme frem til skattemessige verdier. Slike beregninger kalles
fastsettingsberegninger.

I XSD-ene for skattemeldingen er det mulig å se hvilke felt som har fastsettingsberegninger og som beregnes med utgangspunkt i andre felt. Dette
vises slik i XSD (merket rødt):

<pre>
<code>
&lt;xsd:complexType name="FormueOgGjeld"&gt;
  &lt;xsd:sequence&gt;
    &lt;xsd:element maxOccurs="unbounded" minOccurs="0" name="formuesobjekt" type="Formuesobjekt"/&gt;
    &lt;xsd:element name="id" type="Tekst"/&gt;
    &lt;xsd:element minOccurs="0" name="gjeld" type="Gjeld"/&gt;
    &lt;xsd:element minOccurs="0" name="samletVerdiFoerEventuellVerdsettingsrabatt" <span style={{ color: "red" }}>skatt:erAvledet="true"</span> type="BeloepSomHeltallMedOverstyring"/&gt;
    &lt;xsd:element minOccurs="0" name="samletGjeld" <span style={{ color: "red" }}>skatt:erAvledet="true"</span> type="BeloepSomHeltallMedOverstyring"/&gt;
    &lt;xsd:element minOccurs="0" name="samletVerdiBakAksjeneISelskapet" <span style={{ color: "red" }}>skatt:erAvledet="true"</span> type="BeloepSomHeltallMedOverstyring"/&gt;
    &lt;xsd:element minOccurs="0" name="fasteEiendommer" type="FasteEiendommer"/&gt;
  &lt;/xsd:sequence&gt;
&lt;/xsd:complexType&gt;
</code>
</pre>

Alle felt som er avledet vil bli reberegnet i mottak av skattemeldingen, og hvis verdien som er sendt inn ikke er lik verdien den beregnes til vil
innsendingen bli avvist.

Det er mulig å ikke sende inn avledede felter - disse vil da bli beregnet ved mottak og dermed bli en del av fastsettingen
(det blir markert som et avvik i valideringstjenesten, men vil ikke bli avvist).

#### Overstyring av fastsettingsberegninger
Avledede felt har en tilhørende type som tillater overstyring (eks:`BeløpSomHeltallMedSkattemessigeEgenskaperMedOverstyring`).
Denne typen vil ha en egenskap `erOverstyrt` som gjør at det kan fastsettes at verdien i dette sumfeltet er overstyrt.
Det betyr at en sum kan fastsettes og denne vil gjelde selv om skatteetatens interne summeringer returnerer et annet beløp.
Slike avvik blir ikke avvist i valideringstjenesten.

## Tjenester for skattepliktige med begrenset skatteplikt
SBS kan tilrettelegge for levering av skattemeldingen for skattepliktige med begrenset skatteplikt i perioder av året.

Tjenestene som tilbys gir tilgang til å hente, vurdere og lagre periodegrunnlaget med hensikten å korrigere tolvdeler og skatteplikt for den skattepliktige.

Disse tjenestene er dokumentert i [Perioder API på GitHub](https://github.com/Skatteetaten/skattemeldingen/blob/master/docs/skatteplikt/README.md).

:::info
Tjenestene for begrenset skatteplikt støtter kun autentisering med ID-Porten, ikke Maskinporten.
:::

## Beregning av formuesverdi for eiendommer
Tjenestene for beregning av formuesverdi for eiendommer er dokumentert i [Eiendomstjenester](../api/innrapportering-skattemelding-eiendom.md).
