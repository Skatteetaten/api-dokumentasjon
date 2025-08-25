---
title: Hendelser
slug: /api/hendelser
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Støttetjeneste, Hendelser]
keywords: [datatables, tables, grids, markdown, multimarkdown, jquery plugins]
last_updated: Jul 04, 2024
hide_table_of_contents: true
---

<Summary>Tjenestene leverer løpende varslinger om personer/virksomheter med nye eller endrede opplysninger
tilgjengelig.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

Hendeleslistene er støttetjenester som gir informasjon om endringer i datasett som leveres av Skatteetatens
datatjenester, og henger tett sammen med relatert oppslagstjeneste. Se mer informasjon på [egen side](../om/bruk.md).

Hendelseslistene navigeres vha. sekvensnummer og er paginert.

For generell informasjon om tjenestene se egne sider om:

- [Bruk av tjenestene](../om/bruk.md)
- [Sikkerhetsmekansimer](../om/sikkerhet.md)
- [Rettighetspakker](../om/rettighetspakker.md)
- [Feilhåndtering](../om/feil.md)
- [Versjonering](../om/versjoner.md)
- [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Man trenger ikke egne scope for hendelseslistene, de benytter samme scope som relaterte oppslagstjenester:

| Hendelsesliste                                                        | Scope                                                                                                                                                                                                |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arbeidsforhold hendelser API                                          | skatteetaten:arbeidsforhold                                                                                                                                                                          |
| Formuesgrunnlag for eiendomsskatt hendelser API                       | skatteetaten:formuesgrunnlageiendomsskatt                                                                                                                                                            |
| Formuesobjekt fast eiendom hendelser API                              | skatteetaten:formuesobjektfasteiendom                                                                                                                                                                |
| Inntekt hendelser API                                                 | skatteetaten:inntekt                                                                                                                                                                                 |
| Mva-melding hendelser API                                             | skatteetaten:mvamelding                                                                                                                                                                              |
| Mva-register – avgiftssubjekter med skattemeldingsplikt hendelser API | skatteetaten:mvaregisteravgiftssubjekt                                                                                                                                                               |
| Næringsspesifikasjon hendelser API                                    | skatteetaten:naeringsspesifikasjon                                                                                                                                                                   |
| Opplysningspliktig hendelser API                                      | skatteetaten:opplysningspliktig                                                                                                                                                                      |
| Pensjonsgivende inntekt for folketrygden hendelser API                | skatteetaten:pensjonsgivendeinntektforfolketrygden                                                                                                                                                   |
| Selskapsmelding hendelser API                                         | skatteetaten:selskapsmelding                                                                                                                                                                         |
| Skatteetaten-registrert selskap hendelser API                         | skatteetaten:skatteetatenregistrertselskap                                                                                                                                                           |
| Skatteoppgjør hendelser API                                           | skatteetaten:spesifisertsummertskattegrunnlag, skatteetaten:summertskattegrunnlag, skatteetaten:beregnetskatt, skatteetaten:avregning, skatteetaten:skatteplikt, skatteetaten:pensjonsgivendeinntekt |
| Skatteoppgjør upersonlig hendelser API                                | skatteetaten:beregnetskattupersonlig, skatteetaten:skatteberegningsgrunnlagupersonlig, skatteetaten:summertskattegrunnlagupersonlig, skatteetaten:skattepliktupersonlig                              |
| Skattemelding fastsatt hendelser API                                  | skatteetaten:skattemelding, skatteetaten:summertskattegrunnlag, skatteetaten:spesifisertsummertskattegrunnlag                                                                                        |
| Skattemelding upersonlig hendelser API                                | skatteetaten:skattemeldingupersonlig                                                                                                                                                                 |
| Skattemelding utkast hendelser API                                    | skatteetaten:skattemelding                                                                                                                                                                           |
| Tilleggsskatt hendelser API                                           | skatteetaten:tilleggsskatt                                                                                                                                                                           |
| Underenhet fra A-ordningen hendelser API                              | skatteetaten:underenhetaordningen                                                                                                                                                                    |

## Delegering

Delegering i Altinn gjøres pr. scope, så tilgang til hendelseslisterer er håndtert hvis oppslagstjenesten er delegert.

## Teknisk spesifikasjon

URL-er til API-ene, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonene til
hendelseslistene på SwaggerHub:

- [Arbeidsforhold hendelser API](https://app.swaggerhub.com/apis/skatteetaten/arbeidsforhold-hendelser-api)
- [Formuesgrunnlag for eiendomsskatt hendelser API](https://app.swaggerhub.com/apis/skatteetaten/formuesgrunnlag-for-endomsskatt-hendelser-api)
- [Formuesobjekt fast eiendom hendelser API](https://app.swaggerhub.com/apis/skatteetaten/formuesobjekt-fast-eiendom-hendelser-api)
- [Inntekt hendelser API](https://app.swaggerhub.com/apis/skatteetaten/inntekt-hendelser-api)
- [Mva-melding hendelser API](https://app.swaggerhub.com/apis/skatteetaten/mva-melding-hendelser-api)
- [Mva-register – avgiftssubjekter med skattemeldingsplikt hendelser API](https://app.swaggerhub.com/apis/skatteetaten/mva-register-avgiftssubjekter-hendelser-api/)
- [Næringsspesifikasjon hendelser API](https://app.swaggerhub.com/apis/skatteetaten/naeringsspesifikasjon-hendelser-api)
- [Opplysningspliktig hendelser API](https://app.swaggerhub.com/apis/skatteetaten/opplysningspliktig-hendelser-api)
- [Pensjonsgivende inntekt for folketrygden hendelser API](https://app.swaggerhub.com/apis/skatteetaten/pensjonsgivende-inntekt-for-folketrygden-hendelser-api/)
- [Selskapsmelding hendelser API](https://app.swaggerhub.com/apis/skatteetaten/selskapsmelding-hendelser-api)
- [Skatteetaten-registrert selskap hendelser API](https://app.swaggerhub.com/apis/skatteetaten/skatteetaten-registrert-selskap-hendelser-api)
- [Skatteoppgjør hendelser API](https://app.swaggerhub.com/apis/skatteetaten/skatteoppgjor-hendelser-api)
- [Skatteoppgjør upersonlig hendelser API](https://app.swaggerhub.com/apis/skatteetaten/skatteoppgjor-upersonlig-hendelser-api)
- [Skattemelding fastsatt hendelser API](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-fastsatt-hendelser-api)
- [Skattemelding upersonlig hendelser API](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-upersonlig-hendelser-api)
- [Skattemelding utkast hendelser API](https://app.swaggerhub.com/apis/skatteetaten/skattemelding-utkast-hendelser-api)
- [Tilleggsskatt hendelser API](https://app.swaggerhub.com/apis/skatteetaten/tilleggsskatt-hendelser-api)
- [Underenhet fra A-ordningen hendelser API](https://app.swaggerhub.com/apis/skatteetaten/underenhet-fra-a-ordningen-hendelser-api)

## Hendelsestyper

De vanligste hendelsestypene er ny, endret og slettet, men det støttes ikke nødvendigvis i alle hendelseslistene. Her er
noen eksempler:

**Nye data:** Summert skattegrunnlag er klart for en skattepliktig for et inntektsår:

- **Hendelseslisten for skatteoppgjør** vil inneholde en hendelse for den skattepliktige og inntektsåret.
- **Summert skattegrunnlag API** returnerer data hvis man spør på inntektsår og skattepliktig fra hendelsen

**Endrede data:** En arbeidsgiver rapporterer at en skattepliktig har fått etterbetalt inntekt for en måned. Fra før
finnes det data for den skattepliktige for denne måneden.

- **Hendelseslisten for inntekt** vil inneholde en hendelse for den skattepliktige og den gitte måneden.
- **Inntekt API** returnerer oppdaterte inntektsdata for den skattepliktige og den gitte måneden.

**Slettede data:** Et fagsystem i skatteetaten sletter data for en skattepliktig (skjer sjelden, men kan skje ifm
feilrettinger eller andre spesielle omstendigheter)

- **Hendelseslisten for datasettet** vil inneholde en hendelse for datasettet og perioden.
- **Datasett API** returnerer HTTP statuskode 410 og en feilmelding som indikerer at data ikke finnes lenger når man
  spør på skattepliktig og angitt periode.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## Hendelsesliste suksess (HTTP status 200) for Inntekt hendelser

### JSON

NB! For inntekt så leveres det foreløpig ikke informasjon i type-feltet.

```json
{
  "hendelser": [
    {
      "sekvensnummer": 1,
      "identifikator": "09048000875",
      "gjelderPeriode": "2023-01"
    },
    {
      "sekvensnummer": 12,
      "identifikator": "20125001158",
      "gjelderPeriode": "2023-02"
    },
    {
      "sekvensnummer": 23,
      "identifikator": "02043700564",
      "gjelderPeriode": "2023-10"
    },
    {
      "sekvensnummer": 34,
      "identifikator": "17014200150",
      "gjelderPeriode": "2023-12"
    },
    {
      "sekvensnummer": 45,
      "identifikator": "17055401993",
      "gjelderPeriode": "2023-12"
    }
  ]
}
```

## Hendelsesliste suksess (HTTP status 200) for Skattemelding fastsatt hendelser

Skattemelding fastsatt hendelser, Skattemelding utkast hendelser og Skatteoppgjør hendelser inneholder informasjon om
registreringstidspunkt og hendelsetype i tillegg.

### Curl

```bash
$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/skattemelding/fastsatt/hendelser/?fraSekvensnummer=1&antall=5"
```

### JSON

```json
{
  "hendelser": [
    {
      "sekvensnummer": 1,
      "identifikator": "28064701918",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-03-10T09:29:16.000000Z",
      "hendelsetype": "NY"
    },
    {
      "sekvensnummer": 2,
      "identifikator": "29114501318",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-03-10T08:02:43.000000Z",
      "hendelsetype": "NY"
    },
    {
      "sekvensnummer": 3,
      "identifikator": "10038500495",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-04-16T12:29:39.000000Z",
      "hendelsetype": "NY"
    },
    {
      "sekvensnummer": 4,
      "identifikator": "25035401310",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-04-16T11:31:32.000000Z",
      "hendelsetype": "NY"
    },
    {
      "sekvensnummer": 5,
      "identifikator": "01065402439",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2021-04-16T10:01:03.000000Z",
      "hendelsetype": "NY"
    }
  ]
}
```

## Hendelsesliste suksess (HTTP status 200) for Næringsspesifikasjon hendelser

Næringsspesifikasjon hendelser inneholder også informasjon om registreringstidspunkt, hendelsetype og typeSkattepliktig
i tillegg.

### Curl

```bash
$ curl -v --cert virksomhet.cer --key virksomhet.key "https://api-at.sits.no/api/formueinntekt/naeringsspesifikasjon/v1/hendelser/?fraSekvensnummer=1&antall=9"
```

### JSON

```json
{
  "hendelser": [
    {
      "sekvensnummer": 1,
      "identifikator": "25038804416",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2022-01-19T09:40:03Z",
      "hendelsetype": "NY",
      "typeSkattepliktig": "personligSkattepliktig"
    },
    {
      "sekvensnummer": 2,
      "identifikator": "25015201137",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2022-01-25T10:49:19Z",
      "hendelsetype": "NY",
      "typeSkattepliktig": "personligSkattepliktig"
    },
    {
      "sekvensnummer": 3,
      "identifikator": "25015201137",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2022-01-25T09:53:30.774522Z",
      "hendelsetype": "NY",
      "typeSkattepliktig": "upersonligSkattepliktig"
    },
    {
      "sekvensnummer": 4,
      "identifikator": "10037819471",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2022-02-10T14:04:08Z",
      "hendelsetype": "NY",
      "typeSkattepliktig": "upersonligSkattepliktig"
    },
    {
      "sekvensnummer": 5,
      "identifikator": "29026009527",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2022-02-11T12:04:50Z",
      "hendelsetype": "NY",
      "typeSkattepliktig": "personligSkattepliktig"
    },
    {
      "sekvensnummer": 6,
      "identifikator": "02118001764",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2022-02-21T11:50:57.626248Z",
      "hendelsetype": "NY",
      "typeSkattepliktig": "personligSkattepliktig"
    },
    {
      "sekvensnummer": 7,
      "identifikator": "24065600842",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2022-01-18T14:24:01Z",
      "hendelsetype": "NY",
      "typeSkattepliktig": "personligSkattepliktig"
    },
    {
      "sekvensnummer": 8,
      "identifikator": "24085701718",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2022-01-14T16:34:22Z",
      "hendelsetype": "NY",
      "typeSkattepliktig": "personligSkattepliktig"
    },
    {
      "sekvensnummer": 9,
      "identifikator": "15124802560",
      "gjelderPeriode": "2020",
      "registreringstidspunkt": "2022-01-18T13:46:27Z",
      "hendelsetype": "NY",
      "typeSkattepliktig": "personligSkattepliktig"
    }
  ]
}
```

### XML

[hendelser.xsd](../../static/download/hendelser_utvidet.xsd)

[hendelser.xml (eksempel)](../../static/download/hendelser_skattemelding_fastsatt.xml)

### Første sekvensnummer fra dato suksess (HTTP status 200)

```json
{
  "sekvensnummer": 21
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                 |
| -------- | --------------- | ---------------------------------------------------------- |
| FA-001   | 500             | Uventet feil på tjenesten.                                 |
| FA-002   | 404             | Ukjent url benyttet.                                       |
| FA-003   | 401             | Feil i forbindelse med autentisering.                      |
| FA-004   | 400             | Feil i forbindelse med validering av inputdata.            |
| FA-005   | 404             | Ingen hendelser funnet for oppgitt input.                  |
| FA-006   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |

Obs. oversikten over gjelder ikke for
[Arbeidsforhold hendelser API](./arbeidsforhold.md?tab=Feilkoder)
[Formuesgrunnlag for eiendomsskatt hendelser API](./formuesgrunnlageiendomsskatt.md?tab=Feilkoder),
[Formuesobjekt fast eiendom hendelser API](./formuesobjektfasteiendom.md?tab=Feilkoder),
[Mva-melding hendelser API](./mvamelding.md?tab=Feilkoder) og
[Mva-register – avgiftssubjekter med skattemeldingsplikt hendelser API](./mvaregisteravgiftssubjekt.md?tab=Feilkoder)
[Underenhet fra A-ordningen hendelser API](./underenhetaordningen.md?tab=Feilkoder)
hvor hendelseslisten er knyttet tettere sammen med oppslagstjenesten, se derfor feilkoder for tjenesten.

</TabItem>
</Tabs>
