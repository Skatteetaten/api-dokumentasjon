---
title: Underenhet fra A-ordningen API
slug: /api/underenhetaordningen
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Underenhet fra A-ordningen ]
keywords: [ a-ordning ]
last_updated: Jan 25, 2024
hide_table_of_contents: true
---

<summary>Tjenesten leverer informasjon om arbeidsgivers (opplysningspliktiges) innrapporterte inntektsopplysninger for en
inntektsmottaker for en gitt periode.</summary>

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

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:underenhetaordningen`

## Delegering

Tilgang til dette api'et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Underenhet fra A-ordningen API - På vegne av`

## Teknisk spesifikasjon

Url’er til api'et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/underenhet-fra-aordningen-api)
på SwaggerHub.

## Rettighetspakker

| Navn på rettighetspakke |	
|-------------------------|
| nav                     |

## Støttetjenester

### Hendelser

For å følge med på endringer tilbyr vi
en [støttetjeneste for hendelsesliste](./hendelser.md): `Formuesgrunnlag for eiendomsskatt hendelser API`

## Datakatalog

[Datatjenestebeskrivelse]() Tjenesten er ikke oppført i felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json

```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                                                |
|----------|-----------------|---------------------------------------------------------------------------|
| UFA-001  | 500             | Uventet feil på tjenesten.                                                |
| UFA-002  | 500             | Uventet feil i et bakenforliggende system.                                |
| UFA-003  | 404             | Ukjent url benyttet.                                                      |
| UFA-004  | 401             | Feil i forbindelse med autentisering.                                     |
| UFA-005  | 403             | Feil i forbindelse med autorisering.                                      |
| UFA-006  | 400             | Feil i forbindelse med validering av inputdata.                           |
| UFA-007  | 404             | Fant ikke opplysninger om underenhet for angitt identifikator og periode. |
| UFA-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet.                |
| UFA-009  | 410             | Opplysninger om underenhet er slettet for periode.                        |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">


</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, men man kan benytt hendelseslisten for å finne
referanser man kan benytte for å teste oppslagstjenesten.

## Testdata

Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne:

| Identifikator | Periode             |
|---------------|---------------------|
| 311169254     | 2023-11 til 2023-12 |

</TabItem>
</Tabs>
