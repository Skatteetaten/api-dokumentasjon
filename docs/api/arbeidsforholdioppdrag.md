---
title: Arbeidsforhold i oppdrag API
slug: /api/arbeidsforholdioppdrag
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Seriøsitet ]
keywords: [ arbeidsforholdioppdrag ]
last_updated: Mar 10, 2026
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om hvorvidt det foreligger, og ev. perioden for, et arbeidsforhold og mellom
angitt oppdragsgiver og en angitt arbeidstaker.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/arbeidsforhold-i-oppdrag-api) på
SwaggerHub.

## Tilgang

Tjenesten inneholder taushetsbelagte opplysninger om alle skattepliktige personer og/eller virksomheter, og krever eksplisitt lovregulering for tilgang. Tjenesten er ikke tilrettelagt for systembrukerløsningen og visning i sluttbrukersystem.
 
For å få tilgang til dette API-et, for videre bruk av opplysninger om andre personer eller virksomheter i annen oppgaveløsning, må den som ber om tilgang ha et behandlingsgrunnlag for mottak og bruk som er bygget på hjemmel i lov, ikke samtykke, og Skatteetaten må ha grunnlag som opphever vår taushetsplikt for utlevering.

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en rettighetspakke. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:arbeidsforhold`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Arbeidsforhold API - På vegne av`

### Rettighetspakker
Hvilke data en virksomhet får tilgang til i API-et bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Skatteetaten har laget en selvbetjeningsløsning som gir virksomheter [innsyn i egne rettighetspakker](https://rettighetspakke-innsyn.skatteetaten.no/), og lister derfor ikke lengre rettighetspakkene på Github. Se egen dokumentasjon om [hvordan logge inn](https://skatteetaten.github.io/api-dokumentasjon/anvendelsesomraader/deling-skatteetaten#innsyn-i-rettighetspakker).

## Datakatalog

[Datatjenestebeskrivelse](https://data.norge.no/dataservices/aaa9d596-52d5-3d73-9f36-51b9a2e662be) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "aktiv": "JA",
  "perioder": [
    {
      "startdato": "2023-10-04",
      "sluttdato": "2023-10-11"
    },
    {
      "startdato": "2023-10-17",
      "sluttdato": "2023-10-20"
    },
    {
      "startdato": "2023-10-31",
      "sluttdato": "2023-11-03"
    }
  ]
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode           | HTTP Statuskode | Feilområde                                                            |
|--------------------|-----------------|-----------------------------------------------------------------------|
| ARBEIDSFORHOLD-001 | 500             | Uventet feil på tjenesten.                                            |
| ARBEIDSFORHOLD-002 | 500             | Uventet feil i et bakenforliggende system.                            |
| ARBEIDSFORHOLD-003 | 404             | Ukjent url benyttet.                                                  |
| ARBEIDSFORHOLD-004 | 401             | Feil i forbindelse med autentisering.                                 |
| ARBEIDSFORHOLD-005 | 403             | Feil i forbindelse med autorisering.                                  |
| ARBEIDSFORHOLD-006 | 400             | Feil i forbindelse med validering av inputdata.                       |
| ARBEIDSFORHOLD-007 | 404             | Fant ikke  arbeidsforhold mellom angitt arbeidstaker og arbeidsgiver. |
| ARBEIDSFORHOLD-008 | 406             | Feil tilknyttet dataformat.                                           |  

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/arbeidsforhold-i-oppdrag-api).

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.

## Testdata

Tjenesten har for nå kun enkle mockdata, med en statisk mocket respons. For å kunne teste tjenesten kan du benytte et
tilfeldig organisasjonsnummer og fødselsnummer.

</TabItem>
</Tabs>
