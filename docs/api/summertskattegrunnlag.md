---
title: Summert skattegrunnlag API
slug: /api/summertskattegrunnlag
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Skatteoppgjør ]
keywords: [ skattegrunnlag, skatteoppgjør ]
last_updated: May 24, 2024
hide_table_of_contents: true
---

<Summary>Tjenesten leverer en oppsummering av grunnlag for skatt for en person, inkludert spesifisering av hvilke opplysninger fra skattemeldingen som ligger til grunn.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

Summert skattegrunnlag API vil endres når skattereglene endres, altså årlig. Hvilke felt som er tilgjengelig vil kunne
variere etter skattereglene som gjelder for det gitte skatteåret det spørres om data om. Dette vil ikke føre til ny
versjon av API-et med mindre annen semantikk endres.

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:summertskattegrunnlag`

I versjon 2 aksepterer vi også `skatteetaten:spesifisertsummertskattegrunnlag` for konsumenter som tidligere
benyttet [Spesifisert summert skattegrunnlag API](./spesifisertsummertskattegrunnlag.md).

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Summert skattegrunnlag API - På vegne av`

## Teknisk spesifikasjon

Det finnes for tiden 2 versjoner av dette API-et, og ulike rettighetspakker er støttet i ulike versjoner. URL-er til
API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonene på Swaggerhub.

* [Summert skattegrunnlag API - versjon 1](https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-api/1.0.1)
* [Summert skattegrunnlag API - versjon 2](https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-api/2.0.0)

I versjon 2 er \{stadie\} en obligatorisk del av URL, og konsumenter som hittil ikke har oppgitt stadie skal benytte
stadie "oppgjoer".

## Rettighetspakker

| Navn på rettighetspakke           | 	Stadie                     | Kommentarer                       |
|-----------------------------------|------------------------------|-----------------------------------|
| fiskeridirektoratetkontrollmanntall | oppgjoer                   | Støttes kun i V2                  |
| frirettshjelp                     | oppgjoer                     | Støttes i både V1 og V2           |
| husbanken                         | oppgjoer                     | Støttes kun i V1                  |
| husbankenLaanTilskudd             | oppgjoer                     | Støttes kun i V2                  |
| husbankenBostoette                | oppgjoer                     | Støttes kun i V2                  |
| kommuneBoligsosialeFormaal        | oppgjoer                     | Støttes i både V1 og V2           |
| kommuneForeldrebetaling           | oppgjoer og utkast           | Støttes i både V1 og V2           |
| kommunePersonligassistanse        | oppgjoer                     | Støttes i både V1 og V2           |
| kommuneLangtidsoppholdInstitusjon | oppgjoer                     | Støttes i både V1 og V2           |
| laanekassen                       | oppgjoer                     | Støttes i både V1 og V2           |
| ldir                              | oppgjoer                     | Støttes i både V1 og V2           |
| ldirTotalregnskap                 | oppgjoer                     | Støttes kun i V2                  |
| ldirReindriftstilskudd            | oppgjoer                     | Støttes i både V1 og V2           |
| nav                               | oppgjoer                     | Støttes i både V1 og V2           | 
| navbidrag                         | oppgjoer                     | Støttes kun i V2                  | 
| navufoeretrygd                    | oppgjoer                     | Støttes kun i V2                  | 
| navSupplerendeStoenad             | oppgjoer og utkast           | Støttes kun i V2                  |
| norgesbank                        | oppgjoer og utkast           | Støttes kun i V2                  |
| saernamsmann                      | oppgjoer                     | Støttes kun i V2                  |
| sbl                               | oppgjoer                     | Støttes kun i V2, krever samtykke |
| sivilrett                         | oppgjoer, utkast og fastsatt | Støttes kun i V2                  |
| spkBoliglaan                      | oppgjoer                     | Støttes kun i V2                  |
| ssb                               | oppgjoer                     | Støttes i både V1 og V2           |
| udi                               | oppgjoer                     | Støttes i både V1 og V2           |

## Samtykke

Versjon 2 av API-et kan kreve [samtykke](../om/samtykke.md). Datakonsumenter med samtykke har kun lov til å spørre om
summert skattegrunnlag for siste tilgjengelige inntektsår, og dette kan sjekkes med
støttetjenesten [Siste tilgjengelige skatteoppgjør API](./sistetilgjengeligeskatteoppgjoer.md).

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
*inntektsaar*. [Siste tilgjengelige skatteoppgjør API](./sistetilgjengeligeskatteoppgjoer.md) kan brukes uten samtykke
til å sjekke hva som er seneste tilgjengelige inntektsaar for en skattepliktig.

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/dataservices/dc560f2e-e5dd-3d8e-9383-eeb0b3085fce) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

Her er et eksempel på respons for inntektsår 2023 for V2 av tjenesten.

```json
{
  "personidentifikator": "09819899123",
  "inntektsaar": "2023",
  "grunnlag": [
    {
      "tekniskNavn": "samledeOpptjenteRenterIInnenlandskeBanker",
      "beloep": 19667,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "95751752084",
          "bankensNavn": "FORSIKTIG EMPATISK TIGER AS",
          "organisasjonsnummer": "310827002",
          "innskudd": 983351,
          "opptjenteRenter": 19667
        }
      ],
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "avkortetFordelVedElektroniskKommunikasjon",
      "beloep": 4392,
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "verdiFoerVerdsettingsrabattForAksjedelIAksjesparekonto",
      "beloep": 2205524,
      "spesifisering": [
        {
          "type": "Aksjesparekonto",
          "finansinstitusjonNavn": "FORSKJELLIG SKAPENDE GIRAFF SPAREBANK",
          "finansinstitusjonOrganisasjonsnummer": "312582465",
          "kontonummer": "81966764325",
          "verdiFoerVerdsettingsrabattForAksjedel": 2205524,
          "formuesverdiForKontanter": 15790
        }
      ],
      "kategori": "formue"
    },
    {
      "tekniskNavn": "formuesverdiForKontanterIAksjesparekonto",
      "beloep": 15790,
      "spesifisering": [
        {
          "type": "Aksjesparekonto",
          "finansinstitusjonNavn": "FORSKJELLIG SKAPENDE GIRAFF SPAREBANK",
          "finansinstitusjonOrganisasjonsnummer": "312582465",
          "kontonummer": "81966764325",
          "verdiFoerVerdsettingsrabattForAksjedel": 2205524,
          "formuesverdiForKontanter": 15790
        }
      ],
      "kategori": "formue"
    },
    {
      "tekniskNavn": "samletPersoninntektFraEnkeltpersonforetakInnenJordbrukReindriftSkiferproduksjonOgAnnenNaering",
      "beloep": 51432,
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "samletOverskuddPaaUtgiftsgodtgjoerelse",
      "beloep": 111948,
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "innskudd",
      "beloep": 983351,
      "spesifisering": [
        {
          "type": "Konto",
          "kontonummer": "95751752084",
          "bankensNavn": "FORSIKTIG EMPATISK TIGER AS",
          "organisasjonsnummer": "310827002",
          "innskudd": 983351,
          "opptjenteRenter": 19667
        }
      ],
      "kategori": "formue",
      "andelSkattefritt": 2000,
      "andelOverfoertFraBarn": 3000
    },
    {
      "tekniskNavn": "forvaltningskostnadKnyttetTilAksjesparekonto",
      "beloep": 829,
      "kategori": "inntektsfradrag"
    },
    {
      "tekniskNavn": "samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt",
      "beloep": 719038,
      "spesifisering": [
        {
          "type": "LoennOgTilsvarendeYtelser",
          "arbeidsgiversNavn": "UTAKKNEMLIG TANKEFULL TIGER AS",
          "organisasjonsnummer": "312917408",
          "beloep": 719038
        }
      ],
      "kategori": "inntekt"
    },
    {
      "tekniskNavn": "samletOverskuddAvEnkeltpersonforetakInnenAnnenNaering",
      "beloep": 51432,
      "spesifisering": [
        {
          "type": "Naeringsopplysninger",
          "naeringstype": "annenNaering",
          "naeringsinntektTilordnetInnehaver": 51432
        }
      ],
      "kategori": "inntekt"
    }
  ],
  "skjermet": false,
  "skatteoppgjoersdato": "2024-02-20",
  "stadie": "oppgjoer",
  "ajourholdstidspunkt": "2024-02-20T08:38:37.72Z"
}
```

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`

## Tilleggsinformasjon

* For 2015 og 2016 er Svalbard- og fastlandsinformasjon summert sammen. Fra og med 2017 er Svalbard-data skilt ut i
  svalbardSkjoennsfastsatt og svalbardGrunnlag.

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
| 2023 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2023](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2023.md) |
| 2022 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2022](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2022.md) |
| 2021 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2021](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2021.md) |
| 2020 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2020](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2020.md) |
| 2019 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2019](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2019.md) |
| 2018 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2018](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2018.md) |
| 2017 | [Informasjonsmodell for summert skattegrunnlag og spesifikasjoner 2017](../informasjonsmodeller/summertskattegrunnlag/summertskattegrunnlag2017.md) |

## Informasjonsmodell - skjema

### Oversikt

[![SummertSkattegrunnlag](../../static/download/Informasjonsmodell_Summertskattegrunnlag_SummertSkattegrunnlag.png)](../../static/download/Informasjonsmodell_Summertskattegrunnlag_SummertSkattegrunnlag.png)

### Eiendeler og faste eiendommer

[![EiendelerOgFasteEiendommer](../../static/download/Informasjonsmodell_Summertskattegrunnlag_EiendelerOgFasteEiendommer.png)](../../static/download/Informasjonsmodell_Summertskattegrunnlag_/EiendelerOgFasteEiendommer.png)

### Bank, lån og forsikring

[![BankLånOgForsikring](../../static/download/Informasjonsmodell_Summertskattegrunnlag_BankLaanOgForsikring.png)](../../static/download/Informasjonsmodell_Summertskattegrunnlag_BankLaanOgForsikring.png)

### Arbeid, trygd og pensjon

[![ArbeidTrygdOgPensjon](../../static/download/Informasjonsmodell_Summertskattegrunnlag_ArbeidTrygdOgPensjon.png)](../../static/download/Informasjonsmodell_Summertskattegrunnlag_ArbeidTrygdOgPensjon.png)

### Finans

[![Finans](../../static/download/Informasjonsmodell_Summertskattegrunnlag_Finans.png)](../../static/download/Informasjonsmodell_Summertskattegrunnlag_Finans.png)

### Næring

[![Næring](../../static/download/Informasjonsmodell_Summertskattegrunnlag_Naering.png)](../../static/download/Informasjonsmodell_Summertskattegrunnlag_Naering.png)

### Formue og inntekt i selskap med deltakerfastsetting

[![FormueOgInntektISelskapMedDeltakerfastsetting](../../static/download/Informasjonsmodell_Summertskattegrunnlag_FormueOgInntektISelskapMedDeltakerfastsetting.png)](../../static/download/Informasjonsmodell_Summertskattegrunnlag_FormueOgInntektISelskapMedDeltakerfastsetting.png)


</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Testdata for tjenesten kan finnes i [Tenor](../test/tenor.md) med søket for "Summert skattegrunnlag".

</TabItem>
<TabItem headerText="Årsrevisjon" itemKey="itemKey-6">

## Tidsplan

| Dato          | Aktivitet                                                                |
|---------------|--------------------------------------------------------------------------|
| 21.11.2023    | Tidsplan for årsrevisjon for 2023 distribuert                            |
| 15.12.2023    | Første versjon av endringer i kodeliste for inntektsår 2023              |
| 16.01.2024    | Oppdatert versjon av endringer i kodeliste for inntektsår 2023           |
| 26.01.2024    | Open API spesifikasjon oppdatert på Swaggerhub                           |
| Medio februar | Endelig versjon av kodeliste for inntektsår 2023                         |
| 22.02.2024    | Støtte for inntektsår 2023 i test for alle stadier                       |
| 13.03.2024    | Første utkast for inntektsår 2023 tilgjengelig i delingstjenesten        |
| 24.03.2024    | Første skatteoppgjør for inntektsår 2023 tilgjengelig i delingstjenesten |

## Nye/endrede summerte skattegrunnlag fra 2023

| Teknisk navn                                                 | Endring                                                                                                  |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| alminneligInntektFraEnkeltpersonforetakPaaSvalbard           | Nytt fra 2023, inngikk tidligere i samletOverskuddAvEnkeltpersonforetakInnenAnnenNaering                 |
| alminneligInntektFraSelskapMedDeltakerfastsettingPaaSvalbard | Nytt fra 2023                                                                                            |
| fradragsberettighetTapVedSvindel                             | Nytt fra 2023                                                                                            |
| samletOverskuddAvEnkeltpersonforetakInnenAnnenNaering        | Endring i innhold: alminneligInntektFraEnkeltpersonforetakPaaSvalbard er skilt ut som eget teknisk navn	 |
| godtgjoerelseEtterSaeravtaleIUtenrikstjenesten               | Nytt fra 2023                                                                                            |
| skattepliktigTilfeldigInntektFraSpillLotteriMv               | Nytt fra 2023                                                                                            |

## Summerte skattegrunnlag som utgår fra 2023

| Teknisk navn                                                                                     | Endring                                                                  |
|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| andreFradragsberettigedeKostnader                                                                | Utgått                                                                   |
| annenSkattepliktigKapitalinntektFraVirtuellValuta                                                | Utgått                                                                   |
| dagpengerForNaeringsdrivendeOgFisker                                                             | Utgått                                                                   |
| fradragsberettigetTapVedRealisasjonAvFastEiendomIUtlandet                                        | Utgått                                                                   |
| gevinstVedRealisasjonAvAksjeOgVerdipapirfondAksjedel                                             | Utgått                                                                   |
| gevinstVedRealisasjonAvFastEiendomMvIUtlandet                                                    | Utgått                                                                   |
| gevinstVedRealisasjonAvVerdipapirfondsandelIKombifondKnyttetTilAksjedel                          | Utgått                                                                   |
| loennsinntektPaaSvalbardOver12G                                                                  | Utgått                                                                   |
| naeringsinntektFraKompensasjonsytelseUtbetaltAvNavInnenFiskeOgFangst                             | Utgått                                                                   |
| oppjustertTilleggTilAndelIFellesTilleggIAlminneligInntektFraSDFInnenAnnenNaering                 | Utgått                                                                   |
| oppjustertTilleggTilAndelIFellesTilleggIAlminneligInntektFraSDFInnenBarnepassIBarnepasserensHjem | Utgått                                                                   |
| oppjustertTilleggTilGevinstVedRealisasjonAvAksjeOgVerdipapirfondAksjedel                         | Utgått                                                                   |
| oppjustertTilleggTilGevinstVedRealisasjonAvVerdipapirfondsandelIKombifondKnyttetTilAksjedel      | Utgått                                                                   |
| overskuddFraNaeringsinntekt                                                                      | Utgått, grunnlagForSkattPaaNaeringsoverskuddSvalbard kan brukes i stedet |
| personinntektFraKompensasjonsytelseUtbetaltAvNavInnenFiskeOgFangst                               | Utgått                                                                   |
| renteinntektAvObligasjonVerdipapirfondRentedelMv                                                 | Utgått                                                                   |
| samledeAndrePaaloepteRenter                                                                      | Utgått                                                                   |
| samledeOpptjenteRenterIUtenlandskeBanker                                                         | Utgått                                                                   |
| samledeUfoererenterOgLivrenter                                                                   | Utgått                                                                   |
| samletAnnenPensjonUtenTrekkplikt                                                                 | Utgått                                                                   |
| samletBarnepensjonOgLivrenteTilBarn                                                              | Utgått                                                                   |
| samletFormuesverdiAvPrivatUtestaaendeFordring                                                    | Utgått                                                                   |
| samletFormuesverdiForSekundaerbolig                                                              | Utgått                                                                   |
| samletFradragsberettigetKostnadTilknyttetArbeidMv                                                | Utgått                                                                   |
| samletFradragsberettigetUnderskuddVedUtleieAvFastEiendom                                         | Utgått                                                                   |
| samletGjenkjoepsverdiForLivsforsikring                                                           | Utgått                                                                   |
| samletInnskuddIInnenlandskeBanker                                                                | Utgått                                                                   |
| samletInntektSomGirRettTilSaerskiltFradragForSjoefolk                                            | Utgått                                                                   |
| samletLoennsinntektUtenTrygdeavgiftspliktOgMedTrekkplikt                                         | Utgått                                                                   |
| samletMerkostnadVedArbeidsoppholdUtenforHjem                                                     | Utgått                                                                   |
| samletPensjonFraFolketrygden                                                                     | Utgått                                                                   |
| samletPensjonsinnbetalingTilIndividuellPensjonsordning                                           | Utgått                                                                   |
| samletSkattepliktigOverskuddFraUtleieAvFastEiendom                                               | Utgått                                                                   |
| skattepliktigEtterloennOgEtterpensjon                                                            | Utgått                                                                   |

</TabItem>
</Tabs>

