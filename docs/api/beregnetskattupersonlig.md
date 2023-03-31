---
title: Beregnet skatt upersonlig API
slug: /api/beregnetskattupersonlig
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør]
keywords: [beregnetskatt, inntekt, formue]
last_updated: Mar 31, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon om inntekt, fradrag, formue, gjeld og beregnet skatt for en virksomhet.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:beregnetskattupersonlig`

## Delegering

Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Beregnet skatt upersonlig API - På vegne av`

## Teknisk spesifikasjon

[Open API spesifikasjonen for tjenesten](https://app.swaggerhub.com/apis/Skatteetaten_Deling/beregnet-skatt-upersonlig-api)
ligger på SwaggerHub.

I [Open API spesifikasjonen](../om/tekniskspesifikasjon.md) ligger URL'er til tjenesten, beskrivelsen av parameterene,
endepunkter osv.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| ssb                     |

## Støttetjenester

### Hendelser

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør upersonlig hendelser API`

## Datakatalog

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                                                        |
|----------|-----------------|-----------------------------------------------------------------------------------|
| BUP-001  | 500             | Uventet feil på tjenesten.                                                        |
| BUP-002  | 500             | Uventet feil i et bakenforliggende system.                                        |
| BUP-003  | 404             | Ukjent url benyttet.                                                              |
| BUP-004  | 401             | Feil i forbindelse med autentisering.                                             |
| BUP-005  | 403             | Feil i forbindelse med autorisering.                                              |
| BUP-006  | 400             | Feil i forbindelse med validering av inputdata.                                   |
| BUP-007  | 404             | Ikke treff på oppgitt organisasjonsnummer.                                        |
| BUP-008  | 404             | Ingen beregnet skatt funnet på oppgitt organisasjonsnummer og inntektsår. |
| BUP-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                        |
| BUP-010  | 410             | Beregnet skatt finnes ikke lenger.                                                |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata

Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne: 

| Fødselsnummer | Inntektsår |
|---|---|
| 210962492  | 2021 |
| 310962074  | 2021 |
| 314247914  | 2021 |
| 310322881  | 2022 |
| 313739007  | 2022 |
| 311772236  | 2022 |
  
Ytterligere testdata kan man benytte hendelseslisten for å finne.

</TabItem>
</Tabs>
