---
title: Spesifisert summert skattegrunnlag API
slug: /api/spesifisertsummertskattegrunnlag
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør]
keywords: [skattemelding, summertSkattegrunnlag, inntekt, formue]
last_updated: Mar 6, 2023
hide_table_of_contents: true
---
<Summary>Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en person, inkludert spesifisering av hvilke opplysninger fra skattemeldingen som ligger til grunn.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:spesifisertsummertskattegrunnlag`

## Delegering
Tilgang til dette aAPI-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Spesifisert summert skattegrunnlag API API - På vegne av`

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/spesifisert-summert-skattegrunnlag-api) på SwaggerHub.
  
Det tilbys to endepunkter for uthenting av spesifisert summert skattegrunnlag, hvor URL har litt ulik oppbygging.
  
```
GET https://{env}/api/formueinntekt/spesifisertsummertskattegrunnlag/{stadie}/{rettighetspakke}/{inntektsaar}/{personidentifikator}
```

I tillegg tilbys et endepunkt uten at stadie spesifiseres. Dette endepunktet vil alltid benytte stadie ‘oppgjoer’. Endepunktet skal utfases og vi ønsker at alle går over til endepunkt hvor stadie spesifiseres.
```
GET https://{env}/api/formueinntekt/spesifisertsummertskattegrunnlag/{rettighetspakke}/{inntektsaar}/{personidentifikator}
```

## Rettighetspakker

| Navn på rettighetspakke |	Stadie | Egenskaper ved rettighetspakke |
|---|---|---|
| husbanken | oppgjoer | Hjemmel |
| navSupplerendeStoenad | oppgjoer og utkast | Hjemmel |
| norgesbank | oppgjoer og utkast | Hjemmel |
| saernamsmann | oppgjoer | Hjemmel |
| sbl | oppgjoer | Krever samtykke |
| sivilrett | oppgjoer, utkast og fastsatt | Hjemmel |
| spkBoliglaan | oppgjoer | Hjemmel |
  
## Samtykke
API-et kan kreve [samtykke](../om/samtykke.md). Datakonsumenter med samtykke har kun lov til å spørre om spesifisert summert skattegrunnlag for siste tilgjengelige inntektsår, og dette kan sjekkes med støttetjenesten [Siste tilgjengelige skatteoppgjør API](./sistetilgjengeligeskatteoppgjoer.md).

| Tjenestekode | Formål | Kommentar |
|---|---|---|
| 4628_210607 | Kreves for rettighetspakke `sbl`| Sanert tjenestekode: 4628_1 |
  
For denne tjenesten er det en  parameter som må følge med:
 
| Parameter | Forklaring | Eksempelverdi |
|---|---|---|
| 4628_210607_inntektsaar | Parameter for Skattegrunnlag | 2017 |
  
## Støttetjenester

### Hendelser
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør hendelser API`

### Siste tilgjengelige skatteoppgjør
Virksomheter med samtykke har kun lov til å spørre om summert skattegrunnlag for seneste tilgjengelige *inntektsaar*. [Siste tilgjengelige skatteoppgjør API](./sistetilgjengeligeskatteoppgjoer.md) kan brukes uten samtykke til å sjekke hva som er seneste tilgjengelige inntektsaar for en skattepliktig.
  
## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/8cc670c2-fa13-3f39-ade8-ca21b6ed06e0) i Felles datakatalog.
  
</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Curl
Her er et eksempel på en spørring med curl mot tjenesten. Du må legge sertifikat og nøkkel som parametre til
curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" -H "AltinnSamtykke: <samtykke>" "https://api-test.sits.no/api/formueinntekt/spesifisertsummertskattegrunnlag/sbl/2015/12345678901"
```

## JSON

Her er et eksempel på en respons for inntektsår 2023 uten oppgitt stadie i JSON. Det er lenket til flere eksempler på
responser nedenfor.

```json
{
  "personidentifikator": "20076716073",
  "inntektsaar": "2023",
  "grunnlag": [
    {
      "tekniskNavn": "formuesverdiForKjoeretoey",
      "beloep": 0,
      "spesifisering": [
        {
          "type": "Kjoeretoey",
          "registreringsnummer": "BT49298",
          "fabrikatnavn": "VOLKSWAGEN",
          "aarForFoerstegangsregistrering": "2018",
          "formuesverdi": 0
        }
      ],
      "kategori": "formue"
    },
    {
      "tekniskNavn": "formuesverdiForPrimaerbolig",
      "beloep": 544978,
      "spesifisering": [
        {
          "type": "Eiendom",
          "bruksnummer": "302",
          "gaardsnummer": "253",
          "kommunenummer": "4634",
          "festenummer": "0",
          "seksjonsnummer": "0",
          "formuesverdi": 1089956,
          "beregnetMarkedsverdiForBolig": 4359823,
          "eierandel": 50.0,
          "andelAvFormuesverdi": 50.0,
          "poststedsnavn": "MJÅVATN",
          "postnummer": "5158",
          "gateadresse": "Sydveien",
          "husnummer": "48",
          "formuesverdiForFormuesandel": 544978
        }
      ],
      "kategori": "formue"
    },
    {
      "tekniskNavn": "gjeldIInnenlandskeBanker",
      "beloep": 183457,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "553663",
          "bankensNavn": "TRØTTE TAKTFULLE ØSTLENDINGER AS",
          "organisasjonsnummer": "872068279",
          "gjeld": 183457,
          "paaloepteRenter": 13101,
          "prosentandelAvGjeldOgPaaloepteRenter": 100.0,
          "andelAvGjeld": 183457,
          "andelAvPaaloepteRenter": 13101
        }
      ],
      "kategori": "formuesfradrag"
    },
    {
      "tekniskNavn": "pensjonsinnbetaling",
      "beloep": 3935,
      "kategori": "inntektsfradrag"
    },
    {
      "tekniskNavn": "samletUfoeretrygdFraFolketrygdenEksklusiveEktefelletillegg",
      "beloep": 126362,
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "samledePaaloepteRenterPaaGjeldIInnenlandskeBanker",
      "beloep": 13101,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "553663",
          "bankensNavn": "TRØTTE TAKTFULLE ØSTLENDINGER AS",
          "organisasjonsnummer": "872068279",
          "gjeld": 183457,
          "paaloepteRenter": 13101,
          "prosentandelAvGjeldOgPaaloepteRenter": 100.0,
          "andelAvGjeld": 183457,
          "andelAvPaaloepteRenter": 13101
        }
      ],
      "kategori": "inntektsfradrag"
    },
    {
      "tekniskNavn": "samletGjeld",
      "beloep": 183457,
      "kategori": "-"
    },
    {
      "tekniskNavn": "samletUfoereytelseFraAndreEnnFolketrygden",
      "beloep": 28218,
      "spesifisering": [
        {
          "type": "KollektivPensjonsordning",
          "pensjonsutbetalersNavn": "KUNNSKAPSRIKE DAGLIGDAGSE SÅPEBOBLER GFS",
          "organisasjonsnummer": "881518996",
          "pensjonsinntektPerSkattleggingsperiode": 25461
        },
        {
          "type": "KollektivPensjonsordning",
          "pensjonsutbetalersNavn": "KUNNSKAPSRIKE DAGLIGDAGSE SÅPEBOBLER GFS",
          "organisasjonsnummer": "881518996",
          "pensjonsinntektPerSkattleggingsperiode": 98
        },
        {
          "type": "KollektivPensjonsordning",
          "pensjonsutbetalersNavn": "KUNNSKAPSRIKE DAGLIGDAGSE SÅPEBOBLER GFS",
          "organisasjonsnummer": "881518996",
          "pensjonsinntektPerSkattleggingsperiode": 2659
        }
      ],
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "innskudd",
      "beloep": 7,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "5221173390",
          "bankensNavn": "TOMME PENE FUGLEKIKKERE ASA",
          "organisasjonsnummer": "843986005",
          "innskudd": 7
        }
      ],
      "kategori": "formue"
    },
    {
      "tekniskNavn": "samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt",
      "beloep": 213151,
      "spesifisering": [
        {
          "type": "LoennOgTilsvarendeYtelser",
          "arbeidsgiversNavn": "KALDE FINE KJØKKENINNREDNINGER ORGL KALDE FINE KJØKKENINNREDNINGER ORGL",
          "organisasjonsnummer": "809075370",
          "beloep": 211
        },
        {
          "type": "LoennOgTilsvarendeYtelser",
          "arbeidsgiversNavn": "VITTIGE BLIDE ORD AS",
          "organisasjonsnummer": "811660906",
          "beloep": 608
        },
        {
          "type": "LoennOgTilsvarendeYtelser",
          "arbeidsgiversNavn": "VITTIGE BLIDE ORD AS",
          "organisasjonsnummer": "811660906",
          "beloep": 212332
        }
      ],
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "bruttoformue",
      "beloep": 544985,
      "kategori": "-"
    }
  ],
  "skjermet": false,
  "skatteoppgjoersdato": "2023-09-28",
  "stadie": "oppgjoer",
  "registreringstidpunkt": "2023-10-23T08:03:41.687Z"
}
```

Eksempel på respons for inntektsår 2018 med oppgitt stadie 'oppgjoer' i JSON.

```json
{
  "personidentifikator": "12345678901",
  "inntektsaar": "2018",
  "grunnlag": [
    {
      "tekniskNavn": "samletFormuesverdiForFastEiendomIUtlandet",
      "beloep": 260000,
      "kategori": "formue"
    },
    {
      "tekniskNavn": "samledePaaloepteRenter",
      "beloep": 25000,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "12345678903",
          "bankensNavn": "MinEnesteBank",
          "organisasjonsnummer": "123456789",
          "gjeld": 165000,
          "paaloepteRenter": 2500
        },
        {
          "type": "SkyldigRestskatt",
          "betalteForsinkelsesrenterForSamletSkyldigRestskatt": 5000,
          "samletSkyldigRestskatt": 200000
        }
      ],
      "kategori": "inntektsfradrag"
    },
    {
      "tekniskNavn": "kapitalinntektFraSkogbruk",
      "beloep": 15000,
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt",
      "beloep": 350000,
      "spesifisering": [
        {
          "type": "LoennOgTilsvarendeYtelser",
          "arbeidsgiversNavn": "Matre Og Inne",
          "organisasjonsnummer": "123456789",
          "beloep": 350000
        }
      ],
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "utgifterTilPassOgStellAvHjemmevaerendeBarn",
      "beloep": 50000,
      "kategori": "inntektsfradrag"
    },
    {
      "tekniskNavn": "formuesverdiForPrimaerbolig",
      "beloep": 780000,
      "spesifisering": [
        {
          "type": "Eiendom",
          "bruksnummer": "55",
          "gaardsnummer": "39",
          "kommunenummer": "0020",
          "formuesverdi": 780000,
          "beregnetMarkedsverdiForBolig": 5200000,
          "eierandel": 50
        }
      ],
      "kategori": "formue"
    }
  ],
  "skjermet": false,
  "skatteoppgjoersdato": "2019-03-01",
  "stadie": "oppgjoer",
  "registreringstidpunkt": "2019-03-01T16:11:12.985"
}
```

[SpesifisertSummertSkattegrunnlag2022.json](../../static/download/spesifisertSummertSkattegrunnlag2022.json)

[SpesifisertSummertSkattegrunnlag2021.json](../../static/download/spesifisertSummertSkattegrunnlag2021.json)

[SpesifisertSummertSkattegrunnlag2020.json](../../static/download/spesifisertSummertSkattegrunnlag2020.json)

[SpesifisertSummertSkattegrunnlag2018_ordinær.json](../../static/download/spesifisertSummertSkattegrunnlag2018_ordinaer.json)

[SpesifisertSummertSkattegrunnlag2018_pilot.json](../../static/download/spesifisertSummertSkattegrunnlag2018_pilot.json)

[SpesifisertSummertSkattegrunnlag2017.json](../../static/download/spesifisertSummertSkattegrunnlag2017.json)

[SpesifisertSummertSkattegrunnlag2016.json](../../static/download/spesifisertSummertSkattegrunnlag2016.json)

## Samtykke

Gjelder bare brukere som må ha samtykke.

| Tjenestekode | Parametere v/ redirect til Altinn | Eksempel parameter verdi |
|--------------|-----------------------------------|--------------------------|
| 4628_210607 | 4628_210607_inntektsaar | &4628_210607_inntektsaar=2021 |

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                                               |
|----------|-----------------|------------------------------------------------------------------------------------------|
| SSG-001  | 500             | Uventet feil på tjenesten.                                                               |
| SSG-002  | 500             | Uventet feil i et bakenforliggende system.                                               |
| SSG-003  | 404             | Ukjent url benyttet.                                                                     |
| SSG-004  | 401             | Feil i forbindelse med autentisering.                                                    |
| BSA-005  | 403             | Feil i forbindelse med autorisering.                                                     |
| SSG-006  | 400             | Feil i forbindelse med validering av inputdata.                                          |
| SSG-007  | 404             | Ikke treff på oppgitt personidentifikator.                                               |
| SSG-008  | 404             | Ingen spesifisert summert skattegrunnlag funnet for oppgitt identifikator og inntektsår. |
| SSG-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                               |
| SSG-010  | 403             | Feil i forbindelse med samtykketoken.                                                    |
| SSG-011  | 410             | Skattegrunnlag finnes ikke lenger.                                                       | 
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell](https://data.norge.no/informationmodels/47fa0ecf-eb6f-3e75-a229-643c4d3f52c8) i Felles datakatalog. 

Obs. Hvis modellene på denne siden avviker fra Open API spesifikasjonen på Swaggerhub, er det Open API spesifikasjonen som er mest oppdatert.

## Årsversjoner

| År   | Kodeliste og spesifikasjoner                                                                                                                            |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2016 | [Summerte skattegrunnlag og spesifikasjoner for 2016](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2016.md) |
| 2017 | [Summerte skattegrunnlag og spesifikasjoner for 2017](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2017.md) |
| 2018 | [Summerte skattegrunnlag og spesifikasjoner for 2018](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2018.md) |
| 2019 | [Summerte skattegrunnlag og spesifikasjoner for 2019](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2019.md) |
| 2020 | [Summerte skattegrunnlag og spesifikasjoner for 2020](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2020.md) |
| 2021 | [Summerte skattegrunnlag og spesifikasjoner for 2021](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2021.md) |
| 2022 | [Summerte skattegrunnlag og spesifikasjoner for 2022](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2022.md) |
| 2023 | [Summerte skattegrunnlag og spesifikasjoner for 2023](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2023.md) |

## Informasjonsmodell - skjema

### Oversikt
[![Oversikt](../../static/download/spesifisertSkattegrunnlag/Oversikt.png)](../../static/download/spesifisertSkattegrunnlag/Oversikt.png)

### Eiendeler og faste eiendommer
[![EiendelerOgFasteEiendommer](../../static/download/spesifisertSkattegrunnlag/EiendelerOgFasteEiendommer.png)](../../static/download/spesifisertSkattegrunnlag/EiendelerOgFasteEiendommer.png)

### Bank, lån og forsikring
[![BankLånOgForsikring](../../static/download/spesifisertSkattegrunnlag/BankLånOgForsikring.png)](../../static/download/spesifisertSkattegrunnlag/BankLånOgForsikring.png)

### Arbeid, trygd og pensjon 
[![ArbeidTrygdOgPensjon](../../static/download/spesifisertSkattegrunnlag/ArbeidTrygdOgPensjon.png)](../../static/download/spesifisertSkattegrunnlag/ArbeidTrygdOgPensjon.png)

### Finans 
[![Finans](../../static/download/spesifisertSkattegrunnlag/Finans.png)](../../static/download/spesifisertSkattegrunnlag/Finans.png)

### Næring 
[![Næring](../../static/download/spesifisertSkattegrunnlag/Næring.png)](../../static/download/spesifisertSkattegrunnlag/Næring.png)

### Formue og inntekt i selskap med deltakerfastsetting 
[![FormueOgInntektISelskapMedDeltakerfastsetting](../../static/download/spesifisertSkattegrunnlag/FormueOgInntektISelskapMedDeltakerfastsetting.png)](../../static/download/spesifisertSkattegrunnlag/FormueOgInntektISelskapMedDeltakerfastsetting.png)
  
## Tilleggsinformasjon
  
* I 2018 komm spesifikasjonene til spesifisert summert skattegrunnlag fra to forskjellige løyper: ordinær og pilot. For
en detaljert beskrivelse av hva dette innebærer, se [Spesifikasjonstyper for spesifisert summert skattegrunnlag 2018](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2018_spesifikasjoner.md)
* For 2015 og 2016 er Svalbard- og fastlandsinformasjon summert sammen. Fra og med 2017 er Svalbard-data skilt ut i
  svalbardSkjoennsfastsatt og svalbardGrunnlag.
* Fra og med 2018 er feltene skjoennsfastsatt og svalbardSkjoennsfastsatt fjernet.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
  
Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Spesifisert summert skattegrunnlag".
  
</TabItem>
<TabItem headerText="Årsrevisjon" itemKey="itemKey-6">

## Tidsplan

| Dato | Aktivitet |
|------|-----------|
| 21.11.2023 | Tidsplan for årsrevisjon for 2023 distribuert |
| 15.12.2023 | Første versjon av endringer i kodeliste for inntektsår 2023 |
| 16.01.2024 | Oppdatert versjon av endringer i kodeliste for inntektsår 2023 |
| 26.01.2024 | Open API spesifikasjon oppdatert på Swaggerhub |
| Medio februar | Endelig versjon av kodeliste for inntektsår 2023 |
| 22.02.2024 | Støtte for inntektsår 2023 i test for alle stadier |
| 13.03.2024 | Første utkast for inntektsår 2023 tilgjengelig i delingstjenesten |
| 24.03.2024 | Første skatteoppgjør for inntektsår 2023 tilgjengelig i delingstjenesten |

## Nye/endrede summerte skattegrunnlag fra 2023

| Teknisk navn | Endring | SBL |
|--------------|---------|-----|
| alminneligInntektFraEnkeltpersonforetakPaaSvalbard | Nytt fra 2023, inngikk tidligere i samletOverskuddAvEnkeltpersonforetakInnenAnnenNaering | X |
| alminneligInntektFraSelskapMedDeltakerfastsettingPaaSvalbard | Nytt fra 2023 | X |
| fradragsberettighetTapVedSvindel | Nytt fra 2023 | X |
| samletOverskuddAvEnkeltpersonforetakInnenAnnenNaering | Endring i innhold: alminneligInntektFraEnkeltpersonforetakPaaSvalbard er skilt ut som eget teknisk navn	| X |
| godtgjoerelseEtterSaeravtaleIUtenrikstjenesten | Nytt fra 2023 | X |
| skattepliktigTilfeldigInntektFraSpillLotteriMv | Nytt fra 2023 | X |

## Summerte skattegrunnlag som utgår fra 2023

| Teknisk navn | Endring | SBL |
|--------------|---------|-----|
| andreFradragsberettigedeKostnader | Utgått | X |
| annenSkattepliktigKapitalinntektFraVirtuellValuta | Utgått | X |
| dagpengerForNaeringsdrivendeOgFisker | Utgått | X |
| fradragsberettigetTapVedRealisasjonAvFastEiendomIUtlandet | Utgått | X |
| gevinstVedRealisasjonAvAksjeOgVerdipapirfondAksjedel | Utgått | X |
| gevinstVedRealisasjonAvFastEiendomMvIUtlandet | Utgått | X |
| gevinstVedRealisasjonAvVerdipapirfondsandelIKombifondKnyttetTilAksjedel | Utgått | X |
| loennsinntektPaaSvalbardOver12G | Utgått | |
| naeringsinntektFraKompensasjonsytelseUtbetaltAvNavInnenFiskeOgFangst | Utgått | X |
| oppjustertTilleggTilAndelIFellesTilleggIAlminneligInntektFraSDFInnenAnnenNaering | Utgått | |
| oppjustertTilleggTilAndelIFellesTilleggIAlminneligInntektFraSDFInnenBarnepassIBarnepasserensHjem | Utgått | |
| oppjustertTilleggTilGevinstVedRealisasjonAvAksjeOgVerdipapirfondAksjedel | Utgått | |
| oppjustertTilleggTilGevinstVedRealisasjonAvVerdipapirfondsandelIKombifondKnyttetTilAksjedel | Utgått | |
| overskuddFraNaeringsinntekt | Utgått, grunnlagForSkattPaaNaeringsoverskuddSvalbard kan brukes i stedet | |
| personinntektFraKompensasjonsytelseUtbetaltAvNavInnenFiskeOgFangst | Utgått | X |
| renteinntektAvObligasjonVerdipapirfondRentedelMv | Utgått | X |
| samledeAndrePaaloepteRenter | Utgått | X |
| samledeOpptjenteRenterIUtenlandskeBanker | Utgått | X |
| samledeUfoererenterOgLivrenter | Utgått | X |
| samletAnnenPensjonUtenTrekkplikt | Utgått | X |
| samletBarnepensjonOgLivrenteTilBarn | Utgått | X |
| samletFormuesverdiAvPrivatUtestaaendeFordring | Utgått | X |
| samletFormuesverdiForSekundaerbolig | Utgått | X |
| samletFradragsberettigetKostnadTilknyttetArbeidMv | Utgått | |
| samletFradragsberettigetUnderskuddVedUtleieAvFastEiendom | Utgått | X |
| samletGjenkjoepsverdiForLivsforsikring | Utgått | X |
| samletInnskuddIInnenlandskeBanker | Utgått | X |
| samletInntektSomGirRettTilSaerskiltFradragForSjoefolk | Utgått | X |
| samletLoennsinntektUtenTrygdeavgiftspliktOgMedTrekkplikt | Utgått | X |
| samletMerkostnadVedArbeidsoppholdUtenforHjem | Utgått | X |
| samletPensjonFraFolketrygden | Utgått | X |
| samletPensjonsinnbetalingTilIndividuellPensjonsordning | Utgått | |
| samletSkattepliktigOverskuddFraUtleieAvFastEiendom | Utgått | X |
| skattepliktigEtterloennOgEtterpensjon | Utgått | X |
  
</TabItem>
</Tabs>


