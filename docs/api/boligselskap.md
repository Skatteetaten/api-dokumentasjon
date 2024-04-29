---
title: Boligselskap API
slug: /api/boligselskap
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Boligselskap]
keywords: [grunnlagsdata]
last_updated: Apr 29, 2024
hide_table_of_contents: true
---

<summary>Tjenesten brukes til innsending av Boligselskap.</summary>

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
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:boligselskap`

## Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Boligselskap API - På vegne av`

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons...

## Datakatalog
Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

```
Legg inn eksempel
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.
  
| Feilkode | HTTP Statuskode | Feilområde                                                 |
|----------|-----------------|------------------------------------------------------------|
| MVA-001  | 500             | Uventet feil på tjenesten.                                 |
| MVA-002  | 500             | Uventet feil i et bakenforliggende system.                 |
| MVA-003  | 404             | Ukjent url benyttet.                                       |
| MVA-004  | 401             | Feil i forbindelse med autentisering.                      |
| MVA-005  | 403             | Feil i forbindelse med autorisering.                       |
| MVA-006  | 400             | Feil i forbindelse med validering av inputdata.            |
| MVA-007  | 404             | Ingen mva-melding funnet på oppgitt referanse.             |
| MVA-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Her kan du legge inn skjermbilde av informasjonsmodell. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Her kan du legge inn tekst om test av tjenesten. 
  
</TabItem>
</Tabs>
