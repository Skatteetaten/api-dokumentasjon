---
title: Innkrevingsoppdrag API
slug: /api/aksjebeholdning
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Innkreving, Innkrevingsoppdrag]
keywords: [innkrevingsoppdrag,innkreving]
last_updated: Oct 7, 2025
hide_table_of_contents: true
---

<Summary>Tjenesten dekker tjenester for å opprette, endre og avskrive innkrevingsoppdrag. I tillegg finnes tjenester for å avstemme hva som er oversendt til API-ene, se mottaksstatus og å hente eventuelle valideringsfeil.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/oppdragsinnkreving-api) på SwaggerHub.

## Tilgang til API-et

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:ginnkrevingsoppdrag

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Innkrevingsoppdrag API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Legg inn tekst om hvordan få tilgang.

## Datakatalog
API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
Legg inn eksempel
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig. Oppdater tabellen med egne feilkoder.

| Feilkode | HTTP Statuskode | Feilområde                                                                  |
|----------|-----------------|-----------------------------------------------------------------------------|
| ABE-001  | 500             | Uventet feil på tjenesten.                                                  |
| ABE-002  | 500             | Uventet feil i et bakenforliggende system.                                  |
| ABE-003  | 404             | Ukjent url benyttet.                                                        |
| ABE-004  | 401             | Feil i forbindelse med autentisering.                                       |
| ABE-005  | 403             | Feil i forbindelse med autorisering.                                        |
| ABE-006  | 400             | Feil i forbindelse med validering av inputdata.                             |
| ABE-007  | 404             | Ingen treff på aksjebeholdning for gitt organisasjosnsnummer og kalenderår. |
| ABE-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                  |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Vurder å legge inn skjermbilde av informasjonsmodell.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

| identifikator | egenskaper |
|---------------------|------------|
| 12345678910         | tekst       |

</TabItem>
</Tabs>
