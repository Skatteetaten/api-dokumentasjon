---
title: Oppdrag utenlandske virksomheter API
slug: /api/oppdragutenlandskevirksomheter
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Seriøsitet]
keywords: [oppdrag, virksomheter, utenlandske]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---
<Summary>Tjenesten leverer informasjon fra Oppdrags- og arbeidsforholdsregisteret om utenlandske virksomheters oppdrag i Norge.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/oppdrag-utenlandske-virksomheter-api) på SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:oppdragutenlandskevirksomheter`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Oppdrag utenlandske virksomheter API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker
Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Teknisk navn på rettighetspakker |	Egenskaper ved rettighetspakker |
|---|---|
| arbeidstilsynet | Hjemmel |
| ebevis | Krever samtykke |
 
### Samtykke
For rettighetspakken `ebevis` kreves [samtykke](../om/samtykke.md) for dette API-et.

| Tjenestekode | Formål |
|--------| ------ |
| 5616_2 | Kreves for rettighetspakke `ebevis`|
 
## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/3f6f9089-163d-3fe0-86d2-691900806514) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
      "forespurteOrganisasjon": "974761076",
      "oppdrag": {
            "antallAktiveOppdragSomArbeidsgiver": 44,
            "antallAktiveArbeidstakere": 64,
            "antallRegistrerteOppdragSomOppdragsgiver": 14
      },
      "levert": "2020-09-17T09:44:42.877055"
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde |
|----------|-----------------|-------|
| OPPDRAGUTENLANDSKEVIRKSOMHETER-001 | 500 | Uventet feil på tjenesten.  |
| OPPDRAGUTENLANDSKEVIRKSOMHETER-002 | 500 | Uventet feil i et bakenforliggende system.  |
| OPPDRAGUTENLANDSKEVIRKSOMHETER-003 | 404 | Ukjent url benyttet. |
| OPPDRAGUTENLANDSKEVIRKSOMHETER-004 | 401 | Feil i forbindelse med autentisering.  |
| OPPDRAGUTENLANDSKEVIRKSOMHETER-005 | 403 | Feil i forbindelse med autorisering.  |
| OPPDRAGUTENLANDSKEVIRKSOMHETER-006 | 400 | Feil i forbindelse med validering av inputdata. |
| OPPDRAGUTENLANDSKEVIRKSOMHETER-007 | 403 | Feil i forbindelse med samtykke.  |
| OPPDRAGUTENLANDSKEVIRKSOMHETER-008 | 404 | Fant ikke angitt organisasjonsnummer. |
| OPPDRAGUTENLANDSKEVIRKSOMHETER-009 | 406 | Feil tilknyttet dataformat. Kun json eller xml er støttet. |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

 Se informasjonsmodell i Felles datakatalog for [Oppdrag utenlandske virksomheter API](https://data.norge.no/informationmodels/bc228914-ba95-3b10-aa49-3a80beeb12c2).
 
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.

## Testdata
Denne tjenesten har for nå kun enkle mockdata, med en statisk mocket respons. For å kunne teste tjenesten er det nok å benytte et syntetisk organisasjonsnummer som har et samtykke. Syntetiske organisasjonsnumre finner du i [Tenor](../test/tenor.md).
 
</TabItem>
</Tabs>
