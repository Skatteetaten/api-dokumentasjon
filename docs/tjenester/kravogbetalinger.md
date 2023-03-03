---
title: Krav og betalinger API
slug: /kravogbetalinger
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API reference]
keywords: [kravogbetalinger, krav og betalinger, innkreving]
last_updated: Des 14, 2022
hide_table_of_contents: true
---
<summary>Tjeneste som tilbyr oversikt av krav, innbetalinger og utbetalinger tilhørende en part.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:kravogbetalinger`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Krav og betalinger API - På vegne av`

## Samtykke
For rettighetspakkene `finans` og `regnskapssystem` kreves [samtykke](../om/samtykke.md) for denne tjenesten.

| Endepunkt | Tjenestekode |
|--------| ------ |
| Krav og betalinger - Aapne krav | 5928_202301 |
| Krav og betalinger - Alle krav | 5929_202301 |
| Krav og betalinger - Betalinger | 5930_202301 |
| Krav og betalinger - Utbetalinger | 5931_202301 |

## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/krav-og-betalinger-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.
  
## Datakatalog
 
[Datatjenestebeskrivelse] i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

Eksempler på [Fremtiden innkreving sin Github](https://skatteetaten.github.io/beta-apier/kravogbetalinger).

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode | HTTP Statuskode | Feilområde                                                     |
|----------|-----------------|----------------------------------------------------------------|
| KB-001   | 500             | Uventet feil på tjenesten.                                     |
| KB-002   | 500             | Uventet feil i et bakenforliggende system.                     |
| KB-003   | 404             | Ukjent url benyttet.                                           |
| KB-004   | 401             | Feil i forbindelse med autentisering.                          |
| KB-005   | 403             | Feil i forbindelse med autorisering.                           |
| KB-006   | 400             | Feil i forbindelse med validering av inputdata.                |
| KB-007   | 404             | Fant ingen krav/betalinger på angitt identifikator og periode. |
| KB-008   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.     |
| KB-009   | 404             | Ingen treff på oppgitt identifikator.                          |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[Informasjonsmodell] i Felles datakatalog. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke Tenor-adapter for denne tjenesten.

## Testdata

Her vil vi liste testdata når det er klart.
  
</TabItem>
</Tabs>

