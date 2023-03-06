---
title: Spesifisert summert skattegrunnlag API
slug: /spesifisertsummertskattegrunnlag
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API reference]
keywords: [selvangivelse, skattemelding, SummertSkattegrunnlag, inntekt, formue]
last_updated: Des 6, 2022
hide_table_of_contents: true
---
<summary>Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en person, inkludert spesifisering av hvilke opplysninger fra skattemeldingen som ligger til grunn.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:spesifisertsummertskattegrunnlag`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Spesifisert summert skattegrunnlag API API - På vegne av`

## Samtykke
For rettighetspakke `SBL` kreves [samtykke](../om/samtykke.md) for denne tjenesten.

| Tjeneste | Tjenestekode | Kommentar |
|--------| ------ |-------|
| Spesifisert summert skattegrunnlag API | 4628_210607 | Sanert tjenestekode: 4628_1 |
  
For denne tjenesten er det en  parameter som må følge med:
 
| parameter | forklaring | eksempelverdi |
| 4628_210607_inntektsaar | Parameter for Skattegrunnlag | 2017 |
  
## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/spesifisert-summert-skattegrunnlag-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

Merk at rettighetspakkene har ulik tilgang til bruk av inntektsaar og stadie.  
  
Det tilbys for tiden 2 endepunkter for uthenting av spesifisert summert skattegrunnlag, hvor URL'en har litt ulik oppbygging.
  
For rettighetspakkene `sivilrett`, `norgesbank`, `spkboliglaan` og `navSupplerendeStoenad` gjelder ny URL med stadie:
```
GET https://{env}/api/formueinntekt/spesifisertsummertskattegrunnlag/{stadie}/{rettighetspakke}/{inntektsaar}/{personidentifikator}
```

Øvrige rettighetspakker benytter gammel URL uten stadie, men disse vil etter hvert bli tilrettelagt for ny url:
```
GET https://{env}/api/formueinntekt/spesifisertsummertskattegrunnlag/{rettighetspakke}/{inntektsaar}/{personidentifikator}
```
  
## Støttetjenester

### Hendelser
For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør hendelser API`

### Siste tilgjengelige skatteoppgjør

Virksomheter med samtykke har kun lov til å spørre om summert skattegrunnlag for seneste tilgjengelige *inntektsaar*. [Siste tilgjengelige skatteoppgjør API](./sistetilgjengeligeskatteoppgjoer.md) kan brukes uten samtykke til å sjekke hva som er seneste tilgjengelige inntektsaar for en skattepliktig.
  
## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/8cc670c2-fa13-3f39-ade8-ca21b6ed06e0) i Felles datakatalog.

## Spesifikasjonstyper for spesifisert summert skattegrunnlag 2018

I 2018 komm spesifikasjonene til spesifisert summert skattegrunnlag fra to forskjellige løyper: ordinær og pilot. For
en detaljert beskrivelse av hva dette innebærer, se [Spesifikasjonstyper for spesifisert summert skattegrunnlag 2018](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2018_spesifikasjoner.md)
  
</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

* For 2015 og 2016 er Svalbard- og fastlandsinformasjon summert sammen. Fra og med 2017 er Svalbard-data skilt ut i
  svalbardSkjoennsfastsatt og svalbardGrunnlag.
* Fra og med 2018 er feltene skjoennsfastsatt og svalbardSkjoennsfastsatt fjernet.

## Curl
Her er et eksempel på en spørring med curl mot tjenesten. Du må legge sertifikat og nøkkel som parametre til
curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" -H "AltinnSamtykke: <samtykke>" "https://api-test.sits.no/api/formueinntekt/spesifisertsummertskattegrunnlag/sbl/2015/12345678901"
```

## JSON

Her er et eksempel på en respons for inntektsår 2021 uten oppgitt stadie i JSON. Det er lenket til flere eksempler på responser nedenfor.

```json
{
  "personidentifikator":"30921548296",
  "inntektsaar":"2021",
  "grunnlag":[
    {
      "tekniskNavn":"samledeOpptjenteRenterIInnenlandskeBanker",
      "beloep":9251,
      "kategori":"inntekt"
    },
    {
      "tekniskNavn":"samletPensjonFraFolketrygden",
      "beloep":1056108,
      "kategori":"inntekt"
    },
    {
      "tekniskNavn":"gjeldIInnenlandskeBanker",
      "beloep":479949,
      "kategori":"formuesfradrag"
    },
    {
      "tekniskNavn":"samletInnskuddIInnenlandskeBanker",
      "beloep":462570,
      "kategori":"formue"
    },
    {
      "tekniskNavn":"sumGjeldsreduksjon",
      "beloep":72434,
      "kategori":"formuesfradrag"
    },
    {
      "tekniskNavn":"utbytteFraVerdipapirfond",
      "beloep":5,
      "spesifisering":[
        {
          "type":"Verdipapirfond",
          "fondetsNavn":"Aksjefondet RST",
          "isinnummer":"NO5107125899",
          "antallAndeler":110.759,
          "skattepliktigUtbytte":5,
          "skattepliktigGevinstVedRealisasjonAvAndelIAksjedel":20708,
          "oppgavegiversOrganisasjonsnummer":"212717622",
          "oppgavegiversNavn":"DEDIKERT SAMARBEIDSVILLIG TIGER AS",
          "verdiFoerVerdsettingsrabattForAndelIAksjedel":233418
        }
      ],
      "kategori":"inntekt"
    },
    {
      "tekniskNavn":"bruttoformue",
      "beloep":590950,
      "kategori":"-"
    },
    {
      "tekniskNavn":"samledePaaloepteRenterPaaGjeldIInnenlandskeBanker",
      "beloep":14398,
      "kategori":"inntektsfradrag"
    },
    {
      "tekniskNavn":"samletGjeld",
      "beloep":479949,
      "kategori":"-"
    },
    {
      "tekniskNavn":"verdiFoerVerdsettingsrabattForAndelIAksjedelIVerdipapirfond",
      "beloep":233418,
      "spesifisering":[
        {
          "type":"Verdipapirfond",
          "fondetsNavn":"Aksjefondet RST",
          "isinnummer":"NO5107125899",
          "antallAndeler":110.759,
          "skattepliktigUtbytte":5,
          "skattepliktigGevinstVedRealisasjonAvAndelIAksjedel":20708,
          "oppgavegiversOrganisasjonsnummer":"212717622",
          "oppgavegiversNavn":"DEDIKERT SAMARBEIDSVILLIG TIGER AS",
          "verdiFoerVerdsettingsrabattForAndelIAksjedel":233418
        }
      ],
      "kategori":"formue"
    },
    {
      "tekniskNavn":"gevinstVedRealisasjonAvAndelIAksjedelIVerdipapirfond",
      "beloep":20708,
      "spesifisering":[
        {
          "type":"Verdipapirfond",
          "fondetsNavn":"Aksjefondet RST",
          "isinnummer":"NO5107125899",
          "antallAndeler":110.759,
          "skattepliktigUtbytte":5,
          "skattepliktigGevinstVedRealisasjonAvAndelIAksjedel":20708,
          "oppgavegiversOrganisasjonsnummer":"212717622",
          "oppgavegiversNavn":"DEDIKERT SAMARBEIDSVILLIG TIGER AS",
          "verdiFoerVerdsettingsrabattForAndelIAksjedel":233418
        }
      ],
      "kategori":"inntekt"
    }
  ],
  "skjermet":false,
  "skatteoppgjoersdato":"2022-02-10"
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

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

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

Obs. Hvis modellene på denne siden avviker fra open api spesifikasjonen på Swaggerhub, er det open api spesifikasjonen som er mest oppdatert.

## Årsversjoner

| År | Kodeliste og spesifikasjoner |
|-----------|--------|
| 2016 |  [Summerte skattegrunnlag og spesifikasjoner for 2016](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2016.md) |
| 2017 |  [Summerte skattegrunnlag og spesifikasjoner for 2017](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2017.md) |
| 2018 |  [Summerte skattegrunnlag og spesifikasjoner for 2018](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2018.md) |
| 2019 |  [Summerte skattegrunnlag og spesifikasjoner for 2019](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2019.md) |
| 2020 |  [Summerte skattegrunnlag og spesifikasjoner for 2020](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2020.md) |
| 2021 |  [Summerte skattegrunnlag og spesifikasjoner for 2021](../informasjonsmodeller/spesifisertsummertskattegrunnlag/spesifisertsummertskattegrunnlag2021.md) |

## Informasjonsmodell - skjema

### Oversikt
![Oversikt](../../static/download/spesifisertSkattegrunnlag/Oversikt.png)

### Eiendeler og faste eiendommer
![EiendelerOgFasteEiendommer](../../static/download/spesifisertSkattegrunnlag/EiendelerOgFasteEiendommer.png)

### Bank, lån og forsikring
![BankLånOgForsikring](../../static/download/spesifisertSkattegrunnlag/BankLånOgForsikring.png)

### Arbeid, trygd og pensjon 
![ArbeidTrygdOgPensjon](../../static/download/spesifisertSkattegrunnlag/ArbeidTrygdOgPensjon.png)

### Finans 
![Finans](../../static/download/spesifisertSkattegrunnlag/Finans.png)

### Næring 
![Næring](../../static/download/spesifisertSkattegrunnlag/Næring.png)

### Formue og inntekt i selskap med deltakerfastsetting 
![FormueOgInntektISelskapMedDeltakerfastsetting](../../static/download/spesifisertSkattegrunnlag/FormueOgInntektISelskapMedDeltakerfastsetting.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Testdata er søkbare i Tenor-adapteren “Spesifisert summert skattegrunnlag”.
  
</TabItem>
</Tabs>


