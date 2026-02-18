---
title: Summert skattegrunnlag API
slug: /api/summertskattegrunnlag
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Skatteoppgjør ]
keywords: [ skattegrunnlag, skatteoppgjør ]
last_updated: Feb 9, 2026
hide_table_of_contents: true
---
<Summary>Tjenesten leverer en oppsummering av grunnlag for skatt for en person, inkludert spesifisering av hvilke
opplysninger fra skattemeldingen som ligger til grunn.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

Summert skattegrunnlag API vil endres når skattereglene endres, altså årlig. Hvilke felt som er tilgjengelig vil kunne
variere etter skattereglene som gjelder for det gitte skatteåret det spørres om data om. Dette vil ikke føre til ny
versjon av API-et med mindre annen semantikk endres.

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-api) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:summertskattegrunnlag`

Vi aksepterer også `skatteetaten:spesifisertsummertskattegrunnlag` for konsumenter som tidligere
benyttet Spesifisert summert skattegrunnlag API.

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Summert skattegrunnlag API - På vegne av`

Tidligere delegeringer av Spesifisert summert skattegrunnlag API vil fremdeles fungere.

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Teknisk navn på rettighetspakker    | 	Stadie                     | Kommentarer     |
|-------------------------------------|------------------------------|-----------------|
| fiskeridirektoratetkontrollmanntall | oppgjoer                     |                 |
| fiskeridirektoratetmanntall         | oppgjoer                     |                 |
| frirettshjelp                       | oppgjoer                     |                 |
| husbankenbostoette                  | oppgjoer                     |                 |
| husbankenlaantilskudd               | oppgjoer                     |                 |
| kommuneboligsosialeformaal          | oppgjoer                     |                 |
| kommuneforeldrebetaling             | oppgjoer og utkast           |                 |
| kommunelangtidsoppholdinstitusjon   | oppgjoer                     |                 |
| kommunepersonligassistanse          | oppgjoer                     |                 |
| laanekassen                         | oppgjoer                     |                 |
| ldir                                | oppgjoer                     |                 |
| ldirreindriftstilskudd              | oppgjoer                     |                 |
| ldirtotalregnskap                   | oppgjoer                     |                 |
| nav                                 | oppgjoer                     |                 | 
| navbidrag                           | oppgjoer                     |                 | 
| navbilstoenad                       | oppgjoer                     |                 | 
| navgravferdstoenad                  | oppgjoer                     |                 | 
| navsupplerendestoenad               | oppgjoer og utkast           |                 |
| navufoeretrygd                      | oppgjoer                     |                 | 
| norgesbank                          | oppgjoer og utkast           |                 |
| saernamsmann                        | oppgjoer                     |                 |
| sbl                                 | oppgjoer                     | Krever samtykke |
| sivilrett                           | oppgjoer, utkast og fastsatt |                 |
| spkboliglaan                        | oppgjoer                     |                 |
| ssb                                 | oppgjoer                     |                 |
| udi                                 | oppgjoer                     |                 |

### Samtykke
For rettighetspakken `sbl` kreves [samtykke](../om/samtykke.md) for dette API-et.

Datakonsumenter med samtykke har kun lov til å spørre om summert skattegrunnlag for siste tilgjengelige inntektsår, og dette kan sjekkes med
støttetjenesten [Siste tilgjengelige skatteoppgjør API](./sistetilgjengeligeskatteoppgjoer.md).

#### Samtykke med Altinn 3

Digdir har laget en [ny samtykketjeneste](https://samarbeid.digdir.no/altinn/samtykketjenesten/2337). Ressursid for Summert skattegrunnlag API er `ske-samtykke-sbl-summert-skattegrunnlag`. Summert skattegrunnlag API vil i en overgangsperiode støtte både gammel- og ny samtykketjeneste. En versjon av API-et som støtter ny samtykketjeneste ligger nå ute i både eksternt testmiljø og produksjon.

#### Samtykke med Altinn 2
| Tjenestekode | Formål                           |
|--------------|----------------------------------|
| 4628_210607  | Kreves for rettighetspakke `sbl` |           

For denne tjenesten er det en parameter som må følge med:

| Parameter               | Forklaring                                 | Eksempelverdi |
|-------------------------|--------------------------------------------|---------------|
| 4628_210607_inntektsaar | Parameter for skattegrunnlagets inntektsår | 2022          |

## Støttetjenester

### Hendelser

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør hendelser API`

### Siste tilgjengelige skatteoppgjør

Virksomheter med samtykke har kun lov til å spørre om summert skattegrunnlag for seneste tilgjengelige
*inntektsaar*. [Siste tilgjengelige skatteoppgjør API](./sistetilgjengeligeskatteoppgjoer.md) kan brukes uten samtykke til å sjekke hva som er seneste tilgjengelige inntektsaar for en skattepliktig.

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/data-services/8cc670c2-fa13-3f39-ade8-ca21b6ed06e0) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

Her er et eksempel på respons for inntektsår 2025 for V2 av tjenesten.

```json
{
  "personidentifikator": "13819699571",
  "inntektsaar": "2025",
  "grunnlag": [
    {
      "tekniskNavn": "samledeOpptjenteRenterIInnenlandskeBanker",
      "beloep": 1331,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "08346505509",
          "bankensNavn": "PRAGMATISK BLØT STRUTS S.A.",
          "organisasjonsnummer": "213017802",
          "innskudd": 66574,
          "opptjenteRenter": 1331,
          "gjeld": 865203,
          "paaloepteRenter": 25956,
          "prosentandelAvGjeldOgPaaloepteRenter": 100.0,
          "andelAvGjeld": 865203,
          "andelAvPaaloepteRenter": 25956,
          "andelAvInnskudd": 66574,
          "andelAvOpptjenteRenter": 1331
        }
      ],
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "gjeldIInnenlandskeBanker",
      "beloep": 865203,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "08346505509",
          "bankensNavn": "PRAGMATISK BLØT STRUTS S.A.",
          "organisasjonsnummer": "213017802",
          "innskudd": 66574,
          "opptjenteRenter": 1331,
          "gjeld": 865203,
          "paaloepteRenter": 25956,
          "prosentandelAvGjeldOgPaaloepteRenter": 100.0,
          "andelAvGjeld": 865203,
          "andelAvPaaloepteRenter": 25956,
          "andelAvInnskudd": 66574,
          "andelAvOpptjenteRenter": 1331
        }
      ],
      "kategori": "formuesfradrag"
    },
    {
      "tekniskNavn": "samletOverskuddPaaUtgiftsgodtgjoerelse",
      "beloep": 25416,
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "samledePaaloepteRenterPaaGjeldIInnenlandskeBanker",
      "beloep": 25956,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "08346505509",
          "bankensNavn": "PRAGMATISK BLØT STRUTS S.A.",
          "organisasjonsnummer": "213017802",
          "innskudd": 66574,
          "opptjenteRenter": 1331,
          "gjeld": 865203,
          "paaloepteRenter": 25956,
          "prosentandelAvGjeldOgPaaloepteRenter": 100.0,
          "andelAvGjeld": 865203,
          "andelAvPaaloepteRenter": 25956,
          "andelAvInnskudd": 66574,
          "andelAvOpptjenteRenter": 1331
        }
      ],
      "kategori": "inntektsfradrag"
    },
    {
      "tekniskNavn": "samletGjeld",
      "beloep": 865203,
      "kategori": "-"
    },
    {
      "tekniskNavn": "innskudd",
      "beloep": 66574,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "08346505509",
          "bankensNavn": "PRAGMATISK BLØT STRUTS S.A.",
          "organisasjonsnummer": "213017802",
          "innskudd": 66574,
          "opptjenteRenter": 1331,
          "gjeld": 865203,
          "paaloepteRenter": 25956,
          "prosentandelAvGjeldOgPaaloepteRenter": 100.0,
          "andelAvGjeld": 865203,
          "andelAvPaaloepteRenter": 25956,
          "andelAvInnskudd": 66574,
          "andelAvOpptjenteRenter": 1331
        }
      ],
      "kategori": "formue"
    },
    {
      "tekniskNavn": "sumInntekterIAlminneligInntektFoerFordelingsfradrag",
      "beloep": 687264,
      "kategori": "-"
    },
    {
      "tekniskNavn": "samletGrunnlagForInntektsskattTilKommuneOgFylkeskommuneStatsskattOgFellesskatt",
      "beloep": 569308,
      "kategori": "-"
    },
    {
      "tekniskNavn": "samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt",
      "beloep": 660517,
      "spesifisering": [
        {
          "type": "LoennOgTilsvarendeYtelser",
          "arbeidsgiversNavn": "LEKKER OFFISIELL TIGER AS",
          "organisasjonsnummer": "313874788",
          "beloep": 368317
        },
        {
          "type": "LoennOgTilsvarendeYtelser",
          "arbeidsgiversNavn": "REFLEKTERENDE OVERNATURLIG PIGGSVIN",
          "organisasjonsnummer": "311169254",
          "beloep": 292200
        }
      ],
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "bruttoformue",
      "beloep": 66574,
      "kategori": "-"
    },
    {
      "tekniskNavn": "sumFradragIAlminneligInntekt",
      "beloep": 117956,
      "kategori": "-"
    }
  ],
  "skjermet": false,
  "skatteoppgjoersdato": "2026-02-09",
  "stadie": "oppgjoer",
  "ajourholdstidspunkt": "2026-02-09T09:15:08.726Z"
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`

## Tilleggsinformasjon

* I 2018-2021 kom spesifikasjonene til summert skattegrunnlag fra to forskjellige løyper: ordinær og pilot. For
  en detaljert beskrivelse av hva dette innebærer,
  se [Spesifikasjonstyper for summert skattegrunnlag 2018](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2018_spesifikasjoner)
* Fra og med 2018 er feltene skjoennsfastsatt og svalbardSkjoennsfastsatt fjernet.

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                                        |
|----------|-----------------|-----------------------------------------------------------------------------------|
| SSG-001  | 500             | Uventet feil på tjenesten.                                                        |
| SSG-002  | 500             | Uventet feil i et bakenforliggende system.                                        |
| SSG-003  | 404             | Ukjent url benyttet.                                                              |
| SSG-004  | 401             | Feil i forbindelse med autentisering.                                             |
| SSG-005  | 403             | Feil i forbindelse med autorisering.                                              |
| SSG-006  | 400             | Feil i forbindelse med validering av inputdata.                                   |
| SSG-007  | 404             | Ikke treff på oppgitt personidentifikator.                                        |
| SSG-008  | 404             | Ingen summert skattegrunnlag funnet på oppgitt personidentifikator og inntektsår. |
| SSG-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                        |
| SSG-010  | 403             | Feil i forbindelse med samtykketoken.                                             |
| SSG-011  | 410             | Skattegrunnlag finnes ikke lenger.                                                |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/f78a48e2-8b5c-32fa-90bc-4c0bb8206fef) i Felles datakatalog.

Obs. Hvis modellene på denne siden avviker fra Open API spesifikasjonen på Swaggerhub, er det Open API spesifikasjonen
som er mest oppdatert.

## Årsversjoner

| År   | Informasjonsmodell                                                                                                                                  |
|------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| 2025 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2025](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2025.md) |
| 2024 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2024](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2024.md) |
| 2023 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2023](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2023.md) |
| 2022 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2022](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2022.md) |
| 2021 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2021](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2021.md) |
| 2020 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2020](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2020.md) |
| 2019 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2019](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2019.md) |
| 2018 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2018](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2018.md) |
| 2017 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2017](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2017.md) |

## Informasjonsmodell - skjema

### Oversikt

[![SummertSkattegrunnlag](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_SummertSkattegrunnlag.png)](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_SummertSkattegrunnlag.png)

### Eiendeler og faste eiendommer

[![EiendelerOgFasteEiendommer](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_EiendelerOgFasteEiendommer.png)](../../static/download/Informasjonsmodell_Summertskattegrunnlag_/EiendelerOgFasteEiendommer.png)

### Bank, lån og forsikring

[![BankLånOgForsikring](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_BankLaanOgForsikring.png)](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_BankLaanOgForsikring.png)

### Arbeid, trygd og pensjon

[![ArbeidTrygdOgPensjon](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_ArbeidTrygdOgPensjon.png)](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_ArbeidTrygdOgPensjon.png)

### Finans

[![Finans](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_Finans.png)](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_Finans.png)

### Næring

[![Næring](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_Naering.png)](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_Naering.png)

### Formue og inntekt i selskap med deltakerfastsetting

[![FormueOgInntektISelskapMedDeltakerfastsetting](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_FormueOgInntektISelskapMedDeltakerfastsetting.png)](../../static/download/summertskattegrunnlag/Informasjonsmodell_Summertskattegrunnlag_FormueOgInntektISelskapMedDeltakerfastsetting.png)


</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Summert skattegrunnlag".

</TabItem>
<TabItem headerText="Årsrevisjon" itemKey="itemKey-6">

Årsrevisjon for inntektsår 2025.
​
## Tidsplan

| Dato          | Aktivitet                                                                |
|---------------|--------------------------------------------------------------------------|
| 09.12.2025    | Tidsplan for årsrevisjon distribuert |
| 09.12.2025    | Første versjon av endringer i kodeliste |
| 12.01.2026    | Oppdatert versjon av endringer i kodeliste (ingen endringer) |
| 26.01.2026    | Oppdatert listen over utgåtte felt |
| Medio februar 2026 | Endelig versjon av kodeliste |
| Medio februar 2026 | Støtte for inntektsår i test og prod |
| 12.03.2026    | Første utkast for inntektsår er tilgjengelig i delingstjenesten        |
| 21.03.2026    | Første skatteoppgjør for nytt inntektsår er tilgjengelig i delingstjenesten |

## Nye summerte skattegrunnlag for nytt inntektsår

| Teknisk navn | Kategori | SBL | Blir tilgjengelig i rettighetspakker som fra før har tilgang til* |
|--------------|---------|---|---|
| livsvarigAvtalefestetPensjonIOffentligSektor | inntekt | x |  Deles med konsumenter som mottar samletAvtalefestetPensjon. livsvarigAvtalefestetPensjonIOffentligSektor behandles skatterettslig på samme måte som avtalefestetPensjonIPrivatSektorFom2011 |
| ungdomsprogramytelse | inntekt | x | Deles med konsumenter som mottar arbeidsavklaringspenger. ungdomsprogramytelse er en NAV-ytelse og skal skatterettslig behandles som arbeidsavklaringspenger (AAP) |
| oppjustertTilleggTilLatentTapPaaAksjeAndelMvVedUtflyttingUtenUtsattBetalingAvSkatt | oppjusteringAvEierinntekter | x | Deles med konsumenter som mottar oppjusterte tillegg, og samtidig mottar latentTapPaaAksjeAndelMvVedUtflyttingUtenUtsattBetalingAvSkatt |
| oppjustertTilleggTilLatentGevinstPaaAksjeAndelMvVedUtflyttingUtenUtsattBetalingAvSkatt | oppjusteringAvEierinntekter | x | Deles med konsumenter som mottar oppjusterte tillegg, og samtidig mottar latentGevinstPaaAksjeAndelMvVedUtflyttingUtenUtsattBetalingAvSkatt |


SBL = samtykkebasert lånesøknad

## Summerte skattegrunnlag som utgår i nytt inntektsår

| Teknisk navn | Kommentar |
|--------------|-----------|
| annenPensjonFoerAlderspensjon | |
| gevinstVedSalgAvAndelINOKUS | |
| inntektsfoeringAvNegativSaldo | Lagt til i listen 26.1 |
| latentEllerRealisertGevinstPaaAksjeAndelMvVedUtflytting | |
| latentEllerRealisertTapPaaAksjeAndelMvVedUtflytting | |
| latentEllerRealisertGevinstPaaAnnetFinansproduktMvVedUtflytting | |
| latentEllerRealisertTapPaaAnnetFinansproduktMvVedUtflytting | |
| latentEllerRealisertGevinstPaaOpsjonerIArbeidsforholdVedUtflytting | |
| latentEllerRealisertTapPaaOpsjonerIArbeidsforholdVedUtflytting | |
| loennsinntektTilBarn | |
| loennsinntektUtenTrygdeavgiftspliktOgMedTrekkplikt | |
| oppjustertTilleggTilGevinstVedSalgAvAndelINOKUS | |
| oppjustertTilleggTilLatentEllerRealisertGevinstPaaAksjeAndelMvVedUtflytting | |
| oppjustertTilleggTilLatentEllerRealisertTapPaaAksjeAndelMvVedUtflytting | |
| oppjustertTilleggTilTapVedSalgAvAndelINOKUS | Lagt til i listen 26.1 |
| overskuddAvEnkeltpersonforetakInnenAnnenNaeringUtenTrygdeavgiftsplikt | Lagt til i listen 26.1 |
| pensjonFraUtlandetSkattefriINorge | |
| saerskiltInntektsfradragIBarnsInntekt | Lagt til i listen 26.1 |
| samletBarnepensjonOgLivrente | |
| tapVedSalgAvAndelINOKUS | Lagt til i listen 26.1 |
| ufoeretrygdFoerAlderspensjon | Lagt til i listen 26.1 |
| underskuddAvEnkeltpersonforetakFordeltFraEktefelle | |
| verdiFoerVerdsettingsrabattForAndelINOKUS | |
| verdsettingsrabattForAndelINOKUS | |

* Skatteetaten har gjort tilgjengelig en selvbetjent løsning som gir virksomheter innsyn i egne rettighetspakker hos Skatteetaten: [Les mer om dette på github](https://skatteetaten.github.io/api-dokumentasjon/anvendelsesomraader/deling-skatteetaten#innsyn-i-rettighetspakker)

</TabItem>
</Tabs>

