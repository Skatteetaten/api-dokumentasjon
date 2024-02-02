---
title: Skatteberegningsgrunnlag upersonlig API
slug: /api/skatteberegningsgrunnlagupersonlig
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør]
keywords: [Skatteberegningsgrunnlag, inntekt, formue]
last_updated: Mar 31, 2023
hide_table_of_contents: true
---
<summary>Tjenesten leverer opplysninger som fremkommer i skatteberegningsgrunnlaget for en virksomhet.</summary>

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

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skatteberegningsgrunnlagupersonlig`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Skatteberegningsgrunnlag upersonlig API - På vegne av`

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/skatteberegningsgrunnlag-upersonlig-api/)
på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| ssb                     |

## Støttetjenester

### Hendelser
For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Skatteoppgjør upersonlig hendelser API`

## Datakatalog
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/5637f1d4-1d2d-349c-8138-a15ead315a97) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                                                        |
|----------|-----------------|-----------------------------------------------------------------------------------|
| SBU-001  | 500             | Uventet feil på tjenesten.                                                        |
| SBU-002  | 500             | Uventet feil i et bakenforliggende system.                                        |
| SBU-003  | 404             | Ukjent url benyttet.                                                              |
| SBU-004  | 401             | Feil i forbindelse med autentisering.                                             |
| SBU-005  | 403             | Feil i forbindelse med autorisering.                                              |
| SBU-006  | 400             | Feil i forbindelse med validering av inputdata.                                   |
| SBU-007  | 404             | Ikke treff på oppgitt organisasjonsnummer.                                        |
| SBU-008  | 404             | Ingen skatteberegningsgrunnlag funnet på oppgitt organisasjonsnummer og inntektsår. |
| SBU-009  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                        |
| SBU-010  | 410             | Skatteberegningsgrunnlag finnes ikke lenger.                                                |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk
Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.

## Testdata

Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne: 

| Organisasjonsnummer | Inntektsår |
|---|---|
| 310322881  | 2021 |
| 310962805  | 2021 |
  
Ytterligere testdata kan man benytte hendelseslisten for å finne.

</TabItem>
</Tabs>

