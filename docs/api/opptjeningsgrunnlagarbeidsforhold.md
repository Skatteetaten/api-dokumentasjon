---
title: Opptjeningsgrunnlag arbeidsforhold API
slug: /api/opptjeningsgrunnlagarbeidsforhold
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, opptjeningsgrunnlag, arbeidsforhold ]
last_updated: Aug 23, 2024
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om arbeidsgivers (opplysningspliktiges) innrapporterte inntektsopplysninger som
er relevante for arbeidsforholdet for en inntektsmottaker for en gitt periode.</Summary>

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

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:opptjeningsgrunnlagarbeidsforhold`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Opptjeningsgrunnlag arbeidsforhold API - På vegne av`

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/opptjeningsgrunnlag-arbeidsforhold-api/) på
SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| nav                     |

## Støttetjenester

### Hendelser

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Optjeningsgrunnlag arbeidsforhold hendelser API`

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/data-services/e6c30408-f2c8-3c62-a182-6d023aed8267) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "inntektsmottakerOgArbeidsgiver": [
    {
      "kalendermaaned": "2023-08",
      "aggregatId": 2,
      "norskIdentifikator": "01916499716",
      "opplysningspliktig": "314086945",
      "underenhet": "315608589",
      "kildesystem": "testdatagenerator-rst-ekstern-deling",
      "opptjeningsgrunnlag": [
        {}
      ]
    }
  ]
}

```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                                    |
|----------|-----------------|-------------------------------------------------------------------------------|
| OAF-001  | 500             | Uventet feil på tjenesten.                                                    |
| OAF-002  | 500             | Uventet feil i et bakenforliggende system.                                    |
| OAF-003  | 404             | Ukjent url benyttet.                                                          |
| OAF-004  | 401             | Feil i forbindelse med autentisering.                                         |
| OAF-005  | 403             | Feil i forbindelse med autorisering.                                          |
| OAF-006  | 400             | Feil i forbindelse med validering av inputdata.                               |
| OAF-007  | 404             | Fant ikke opplysninger om arbeidsforhold for angitt identifikator og periode. |
| OAF-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                    |
| OAF-009  | 406             | Opplysninger om arbeidsforhold er slettet for periode.                        |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Informasjonsmodell kommer i Felles datakatalog.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, men man kan benytte hendelseslisten for å finne
testdata man kan benytte for å teste oppslagstjenesten.

</TabItem>
</Tabs>
