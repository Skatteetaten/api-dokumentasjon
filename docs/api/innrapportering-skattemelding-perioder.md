## Perioder API

API-ene er rettet mot brukere av sluttbrukersystemer som bistår skattepliktige med begrenset skatteplikt, med leveringen av skattemeldingen.

API-ene gir tilgang til å hente, vurdere og lagre periodegrunnlaget med hensikten å korrigere tolvdeler og skatteplikt for den skattepliktige.
Tolvdeler og skatteplikt kan ikke registreres eller overstyres manuelt, de beregnes automatisk basert på den skattepliktiges registrerte oppholdsperioder og arbeidsforholdsperioder.

Funksjonaliteten tilsvarer det som er tilgjengelig i Min skatt under «Arbeid og opphold i Norge», der skattepliktige selv kan logge inn og registrere eller endre oppholds- og arbeidsforholdsperioder.

Tjenestene er dokumentert under "Skatteplikt" i [OpenAPI-spesifikasjonen for skattemeldingen](pathname:///download/skattemeldingupersonlig/openapi.html). Nedenfor er en kortfattet beskrivelse av de tilgjengelige tjenestene.

:::info
Tjenestene for begrenset skatteplikt støtter kun autentisering med ID-Porten, ikke Maskinporten.
:::

### XSD for oppholds- og arbeidsforholdsperioder
Request og respons i noen av tjenestene dokumentert under benytter XSD-filen [perioderformottakogutveksling_v1.xsd](https://github.com/Skatteetaten/skattemeldingen/blob/master/src/resources/xsd/perioderformottakogutveksling_v1.xsd). Denne har i motsetning til XSD-filene benyttet for alminnelig innsending av skattemeldingen ikke årlige
revisjoner, og det gjeldende versjonsnummeret oppdateres her og lastes opp på GitHub ved vesentlige endringer.

Oppholds- og arbeidsforholdsperioder er nærmere beskrevet under [XSD: Beskrivelse av oppholdsperioder og arbeidsforholdsperioder](#XSD-Beskrivelse-av-oppholdsperioder-og-arbeidsforholdsperioder).

### Hent perioder

API-et returnerer gjeldende antall tolvdeler, skatteplikt og alle registrerte oppholds- og arbeidsforholdsperioder for en skattepliktig for et gitt inntektsår.

**URL** : `GET https://<env>/api/skattemelding/v2/skatteplikt/perioder/<inntektsaar>/<identifikator>/`

**Respons** :
Responsobjektet er i henhold til [XSD for oppholds- og arbeidsforholdsperioder](#XSD-for-oppholds--og-arbeidsforholdsperioder).

Eksempelrespons og forklaring av responsen finnes i [OpenAPI-spesifikasjonen for tjenesten](pathname:///download/skattemeldingupersonlig/openapi.html).

### Beregne perioder
API‑et mottar alle endrede perioder, validerer dem og beregner skatteplikt samt tolvdeler, som returneres i responsen. Endringene lagres ikke, men API‑et opplyser om beregningen ville ha medført et nytt utkast til skattemeldingen.

**URL** : `POST /api/skattemelding/v2/skatteplikt/perioder/<inntektsaar>/<identifikator>/beregn`

**Request og respons** :
Request-objektet er i henhold til [XSD for oppholds- og arbeidsforholdsperioder](#XSD-for-oppholds--og-arbeidsforholdsperioder).

Eksempelrequest og respons finnes i [OpenAPI-spesifikasjonen for tjenesten](pathname:///download/skattemeldingupersonlig/openapi.html).

### Lagre perioder

API-et mottar og validerer alle perioder, beregner nødvendige verdier og oppdaterer periodedataene. Oppdateringen kan resultere i et nytt utkast til skattemeldingen

**URL** : `POST /api/skattemelding/v2/skatteplikt/perioder/<inntektsaar>/<identifikator>/lagre`

Request og respons er de samme som for beregne perioder over.

### XSD: Beskrivelse av oppholdsperioder og arbeidsforholdsperioder

En oppholdsperiode angir hvor mange dager den skattepliktige har oppholdt seg på fastlandet i Norge. Dersom oppholdet varer deler av en dag, regnes dette som én hel dag. Antall registrerte dager påvirker om den skattepliktige anses som global eller begrenset skattepliktig. Det er derfor viktig at korrekt antall dager registreres.

Arbeidsperiode skal vise tidsrommet den ansatte var ansatt og utførte arbeid for arbeidsgiver. Perioden skal inkludere avspasering, helger og ferier. Antall tolvdeler blir beregnet ut i fra arbeidsperiodene.

- Oppholdsperiode
  - norskPersonidentifikator - Norsk personidentifikator (fødselsnummer eller D-nummer).
  - periodeidentifikator - Unik identifikator per TIN / norskPersonidentifikator. 
  - fraOgMedDato - Første dag med opphold på fastlandet i Norge. 
  - tilOgMedDato - Siste dag med opphold på fastlandet i Norge. 
  - antallDagerOverstyrt (ikke påkrevd)- Dersom den skattepliktige har mange korte opphold i Norge i løpet av året, kan totalt antall oppholdsdager registreres samlet. Ankomstdag og utreisedag må være innenfor samme kalenderår. Alle dager med opphold i Norge skal telles som hele dager. 
  - erMerketSomSlettet (ikke påkrevd) - true/false 
  - informasjonskilde - Hvor informasjonen kommer fra. [Oppdragasregister | AA-register | Folkeregister | OpplystAvSkatteplikt | OpplystTilSaksbehandlerAvSkattepliktig ]
  - KanEndres - Om perioden kan oppdateres eller slettes
- Arbeidsperiode - Arbeidet skal vise tidsrommet den ansatte var ansatt og utførte arbeid for arbeidsgiver. Perioden skal inkludere avspasering, helger og ferier. 
  - spesifikasjonAvInntektsgivendeAktivitet 
    - oppholdsstedVedInntektsgivendeAktivitet -  Arbeidssted (kodeliste OppholdsstedVedInntektsgivendeAktivitet)
    - inntektsgivendeAktivitetstype - Beskrivelse av arbeidsforhold (kodeliste RolleVedInntektsgivendeAktivitet)
  - ansvarligEnhetEllerPart 
    - hovedorganisasjon 
      - organisasjonsnummer" : Enkeltperson foretakets organisasjonsnummer 
    - naeringsdrivendeUtenKravTilOrganisasjonsnummer - Om virksomheten er selvstendig næringsdrivende uten krav om norsk organisasjonsnummer. 
    - norskIdentifikator 
      - organisasjonsnummer - Arbeidsgivers organisasjonsnummer 
    - navn - Arbeidsgivers navn 
  - norskPersonidentifikator - Norsk personidentifikator (fødselsnummer eller D-nummer). 
  - kommune - Oppgi kommunenr der arbeidstakeren først bosatte seg eller oppholdt seg dette året 
  - periodeidentifikator - Unik identifikator per TIN / norskPersonidentifikator. 
  - fraOgMedDato - Første arbeidsdag 
  - tilOgMedDato (ikke påkrevd) - Siste arbeidsdag 
  - antallDagerOverstyrt (ikke påkrevd) - Dersom den skattepliktige har mange korte arbeidsperioder i Norge i løpet av året for samme arbeidsgiver, kan totalt antall oppholdsdager registreres samlet. Første og siste arbeidsdag må være innenfor samme kalenderår. Når man teller antall dager i arbeidsperiode skal helger, ferier og avspasering telles med 
  - erMerketSomSlettet (ikke påkrevd) - true/false 
  - informasjonskilde - Hvor informasjonen kommer fra. [Oppdragasregister | AA-register | Folkeregister | OpplystAvSkatteplikt | OpplystTilSaksbehandlerAvSkattepliktig ] Perioder oppdatert/opprettet via api-et vil få kilde OpplystAvSkatteplikt. 
  - KanEndres - Om perioden kan oppdateres eller slettes 
- endringsnøkkel – Send med endringsnøkkelen som ble hentet via API-et «hent perioder». Dersom endringsnøkkelen ikke samsvarer, vil beregning eller lagring feile fordi periodene har blitt oppdatert.

APIet håndterer enum verdier i følgende formater: camelCase, SNAKE_CASE og lower_snake_case

### Opprett ny oppholdsperiode
Når du skal registrere en ny oppholdsperiode, må følgende informasjon fylles ut:

- norskPersonidentifikator
- periodeidentifikator - Oppgi en unik ID for perioden. Tradisjonelt brukt UUID 
- fraOgMedDato 
- tilOgMedDato (valgfritt)
- antallDagerOverstyrt (valgfritt)

### Endre oppholdsperiode
For å endre en periode, skriv inn periodeidentifikatoren til perioden du vil oppdatere.

Følgende felter kan endres:

- fraOgMedDato
- tilOgMedDato
- antallDagerOverstyrt
- erMerketSomSlettet 

Dersom informasjonen er fra en tredjepartskilde (Oppdragsregisteret, AA-registeret eller Folkeregisteret), vil den opprinnelige perioden ikke bli endret av API-et. I stedet oppretter API-et en ny fastsatt periode. Når en slik periode opprettes, vil den opprinnelige perioden ikke inngå i beregningsgrunnlaget. Den vil ikke bli hente dersom du kaller get, bare perioder som inngår i beregningsgrunnlaget vil bli hentet.

Dersom den fastsatte perioden senere slettes, vil den opprinnelige perioden automatisk inngå i beregningsgrunnlaget igjen.

### Opprett ny arbeidsforholdsperiode
Når du skal registrere en ny arbeidsperiode, må følgende informasjon fylles ut:

- spesifikasjonAvInntektsgivendeAktivitet - se tabell for gyldige kombinasjoner
  - oppholdsstedVedInntektsgivendeAktivitet -  Arbeidssted (kodeliste OppholdsstedVedInntektsgivendeAktivitet)
  - inntektsgivendeAktivitetstype - beskrivelse av arbeidsforhold (kodeliste RolleVedInntektsgivendeAktivitet)
- ansvarligEnhetEllerPart
  - norskIdentifikator
    - organisasjonsnummer - arbeidsgivers organisasjonsnummer
- norskPersonidentifikator
- kommune - kommune må fylles inn for FASTLAND
- periodeidentifikator - Oppgi en unik ID for perioden. Tradisjonelt brukt UUID
- fraOgMedDato
- tilOgMedDato (valgfritt)
- antallDagerOverstyrt (valgfritt)

Gyldig kombinasjon av oppholdsstedVedInntektsgivendeAktivitet og inntektsgivendeAktivitetstype:

<table>
<tr>
    <td>oppholdsstedVedInntektsgivendeAktivitet</td>
    <td>inntektsgivendeAktivitetstype</td>
    <td>opprettes ny</td>
    <td>endres</td>
    <td>slettes</td>
</tr>
<tr><td>FASTLAND</td><td>ARBEIDSTAKER</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
<tr><td>FASTLAND</td><td>SELVSTENDIG_NAERINGSDRIVENDE</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
<tr><td>FASTLAND</td><td>GRENSEGJENGER</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
<tr><td>FASTLAND</td><td>MOTTAR_INTRODUKSJONSSTOENAD</td><td>nei</td><td>nei</td><td>nei</td></tr>
<tr><td>SJOE</td><td>ARBEIDSTAKER</td><td>nei</td><td>ja</td><td>ja</td></tr>
<tr><td>FISKEFARTOEY_INNENFOR_12_MILSSONE</td><td>ARBEIDSTAKER</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
<tr><td>KONTINENTALSOKKEL</td><td>ARBEIDSTAKER_PAA_SKIP_I_FART</td><td>nei</td><td>Ja</td><td>Ja</td></tr>
<tr><td>KONTINENTALSOKKEL</td><td>ARBEIDSTAKER_INNENFOR_PETROLEUMSVIRKSOMHET</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
<tr><td>KONTINENTALSOKKEL</td><td>ARBEIDSTAKER_INNENFOR_HAVBRUK_MINERALVIRKSOMHET_FORNYBAR_ENERGI_ELLER_KARBONFANGST</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
<tr><td>FISKEFARTOEY_UTENFOR_12_MILSSONE</td><td>ARBEIDSTAKER</td><td>Nei</td><td>Nei</td><td>Nei</td></tr>
<tr><td>FASTLAND_UTENFOR_NORGE</td><td>ARBEIDSTAKER_FINANSIERT_AV_DEN_NORSKE_STAT</td><td>Nei</td><td>Nei</td><td>Nei</td></tr>
<tr><td>FASTLAND_UTENFOR_NORGE</td><td>ARBEIDSTAKER_FOR_FORSVARET_ELLER_UTENRIKSSTASJON</td><td>Nei</td><td>Nei</td><td>Nei</td></tr>
<tr><td>FASTLAND_UTENFOR_NORGE</td><td>ARBEIDSTAKER_SOM_GJESTEFORELESER_ELLER_FORSKER</td><td>Nei</td><td>Nei</td><td>Nei</td></tr>
<tr><td>FASTLAND_UTENFOR_NORGE</td><td>FLYVENDE_PERSONELL</td><td>Nei</td><td>Nei</td><td>Nei</td></tr>
<tr><td>FASTLAND_UTENFOR_NORGE</td><td>LANDTRANSPORTSJAAFOER</td><td>Nei</td><td>Nei</td><td>Nei</td></tr>
<tr><td>FASTLAND_UTENFOR_NORGE</td><td>MOTTAR_STYREHONORAR</td><td>Nei</td><td>Nei</td><td>Nei</td></tr>
</table>

Eksempel på opprettelse av ny arbeidsperiode

```json
{
  "arbeidsforholdsperiode" : [
    {
      "ansvarligEnhetEllerPart" : {
        "norskIdentifikator" : {
          "organisasjonsnummer" : "315072492",
          "personidentifikator" : null
        },
        "navn" : "RETTFERDIG SPISS KATT DALSIDE"
      },
      "spesifikasjonAvInntektsgivendeAktivitet" : {
        "inntektsgivendeAktivitetstype" : "ARBEIDSTAKER_INNENFOR_PETROLEUMSVIRKSOMHET",
        "oppholdsstedVedInntektsgivendeAktivitet" : "KONTINENTALSOKKEL"
      },
      "norskPersonidentifikator" : "03904299382",
      "periodeidentifikator" : "b3597abd-efc3-48ad-8207-36a3ead1b59a",
      "fraOgMedDato" : "2025-03-01",
      "tilOgMedDato" : "2025-05-03",
      "kommune" : "4203"
    }
  ],
  "endringsnoekkel" : "92"
}
```

### Endre arbeidsforholdperioder
For å endre en arbeidsperiode, skriv inn periodeidentifikatoren til perioden du vil oppdatere.

Følgende felter kan endres dersom informasjonskilde IKKE er tredjepartskilde:

- spesifikasjonAvInntektsgivendeAktivitet
  - oppholdsstedVedInntektsgivendeAktivitet
  - inntektsgivendeAktivitetstype
- fraOgMedDato
- tilOgMedDato
- antallDagerOverstyrt
- erMerketSomSlettet


Følgende felter kan endres dersom informasjonskilde er tredjepartskilde:

- fraOgMedDato
- tilOgMedDato
- antallDagerOverstyrt
- erMerketSomSlettet

Dersom informasjonen er fra en tredjepartskilde (Oppdragsregisteret, AA-registeret eller Folkeregisteret), vil den opprinnelige perioden ikke bli endret av API-et. I stedet oppretter API-et en ny fastsatt periode. Når en slik periode opprettes, vil den opprinnelige perioden ikke inngå i beregningsgrunnlaget. Den vil ikke bli hente dersom du kaller get, bare perioder som inngår i beregningsgrunnlaget vil bli hentet.

Dersom den fastsatte perioden senere slettes, vil den opprinnelige perioden automatisk inngå i beregningsgrunnlaget igjen.

#### Selvstendig næringsdrivende
Når inntektsgivendeAktivitetstype er satt til SELVSTENDIG_NAERINGSDRIVENDE, skal ansvarligEnhetEllerPart tolkes annerledes enn for arbeidstakerforhold.

I disse tilfellene representerer ansvarligEnhetEllerPart den selvstendige virksomheten, og ikke en arbeidsgiver.

- ansvarligEnhetEllerPart
  - norskIdentifikator : null
  - hovedorganisasjon 
    - organisasjonsnummer : Enkeltperson foretakets norske organisasjonsnummer 
    - navn : null 
  - naeringsdrivendeUtenKravTilOrganisasjonsnummer - Settes til true dersom virksomheten er selvstendig næringsdrivende uten krav om norsk organisasjonsnummer. Default verdi er false.

Dette innebærer at ansvarligEnhetEllerPart alltid er påkrevd, men at identifikasjonsmåten varierer basert på type inntektsgivende aktivitet.

***Eksempel selvstendig næringsdrivende:***
```json
{

  "arbeidsforholdsperiode" : [
    {
      "ansvarligEnhetEllerPart" : {
        "norskIdentifikator" : null,
        "hovedorganisasjon" : {
          "organisasjonsnummer" : "621905422",
          "navn" : null
        },
        "naeringsdrivendeUtenKravTilOrganisasjonsnummer" : false,
        "underenhetensOrganisasjonsnummer" : null,
        "navn" : null
      },
      "spesifikasjonAvInntektsgivendeAktivitet" : {
        "inntektsgivendeAktivitetstype" : "SELVSTENDIG_NAERINGSDRIVENDE",
        "oppholdsstedVedInntektsgivendeAktivitet" : "FASTLAND"
      },
      "norskPersonidentifikator" : "50679699854",
      "periodeidentifikator" : "2c2c6214-3917-485f-b35a-1ebc214a8b4c_92",
      "fraOgMedDato" : "2025-02-02",
      "tilOgMedDato" : "2025-02-04",
      "informasjonskilde" : "OPPLYST_AV_SKATTEPLIKTIG",
      "kommune" : "1554"
    }
  ],
  "endringsnoekkel" : "42824332"

}
```