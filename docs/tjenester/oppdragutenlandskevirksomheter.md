---
title: Oppdrag utenlandske virksomheter API
slug: /oppdragutenlandskevirksomheter
folder: tjenester
sidebar: mydoc_sidebar
datatable: true
tags: [API reference]
keywords: [oppdrag, virksomheter, utenlandske]
last_updated: Des 2, 2022
hide_table_of_contents: true
---
<summary>Tjenesten leverer informasjon fra Oppdrags- og arbeidsforholdsregisteret om utenlandske virksomheters oppdrag i Norge.</summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md) 
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:oppdragutenlandskevirksomheter`

## Delegering
Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Oppdrag utenlandske virksomheter API - På vegne av`

## Samtykke
For rettighetspakke `Ebevis` kreves [samtykke](../om/samtykke.md) for denne tjenesten.

| Tjeneste | Tjenestekode |
|--------| ------ |
| Oppdrag utenlanske virksomheter API | 5616_2 |
 
## Teknisk spesifikasjon
[Open API spesifikasjon](https://app.swaggerhub.com/apis/Skatteetaten_Deling/restanser-api) ligger på SwaggerHub.

I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.

## Datakatalog
 
[Datatjenestebeskrivelse](https://data.norge.no/dataservices/3f6f9089-163d-3fe0-86d2-691900806514) i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Curl

Her er et eksempel på en spørring med curl mot tjenesten. Du må ha et gyldig maskinportentoken og altinn samtykketoken som legges ved som headerer i curl-kommandoen.

```bash
$ curl -v -H "Authorization: Bearer <maskinporten_token>" -H "AltinnSamtykke: <samtykke_token>" "https://api-test.sits.no/api/innrapportert/inntektsmottaker/sbl/12345678901/oppgave/inntekt?fraOgMed=2016-11&tilOgMed=2017-01"
```

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

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. 

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
Det finnes pt. ikke Tenor-adapter for denne tjenesten.

## Testdata
Denne tjenesten har for nå kun enkle mockdata, med en statisk mocket respons. For å kunne teste tjenesten er det nok å benytte et syntetisk organisasjonsnummer som har et samtykke. Syntetiske organisasjonsnumre finner du i [Tenor testdatasøk](./test/tenor.md).
 
</TabItem>
</Tabs>
