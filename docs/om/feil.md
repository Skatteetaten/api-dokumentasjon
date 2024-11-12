---
title: Feil
slug: /om/feil
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Feilhåndtering]
keywords: [feilhåndtering, feilmeldinger feilkoder, http]
last_updated: Nov 24, 2022
hide_table_of_contents: true
---
<Summary>Feilhåndtering i Skatteetatens tjenester.</Summary>

## HTTP statuskoder

| HTTP kode | Beskrivelse |
|-------|--------|
| 200 OK | Henting av data gikk bra, og man får data i JSON (eller XML) format |
| 400 Bad request | Feil i spørring. Applikasjonen vil gi en detaljert feilmelding på norsk for hva som er feil med spørring |
| 401 Unauthorized | Autorisasjoner som trengs for å bruke tjenesten mangler |
| 403 Forbidden | Ikke Autentisert |
| 404 Not Found | Applikasjonen vil gi en detaljert feilmelding på norsk for hva som ikke ble funnet. Kan også bety at man bruker feil adresse for tjenesten (i så fall vil man få en standard '404 NOT FOUND' og ikke et svar fra applikasjonen) |
| 500 Internal Server Error | Feil på server side, for eksempel at en underliggende datakilde ikke svarer. Kontakt Skatteetatens kundeservice hvis feilen vedvarer |


## Feilmeldinger

Som hovedregel vil feilmeldinger fra tjenestene være på følgende format i JSON:
    
```json
  {
  "kode": "BSA-006",
  "melding": "Fant ikke beregnet skatt for gitt inntektsår og identifikator",
  "korrelasjonsid": "13a865f5-28f9-47db-9abd-ab78977c79fe"
  }
```
      
Dersom `Accept`-header er satt til `application/xml` vil en eventuell feilmelding være i XML:

```xml
<feil xmlns="urn:no:skatteetaten:datasamarbeid:feil:v1">
   <kode>ARBEIDSFORHOLD-003</kode>
   <melding>Fant ingen aktivt arbeidsforhold mellom angitt arbeidstaker og angitt arbeidsgiver</melding>
   <korrelasjonsid>a621a996-315d-4b8a-ac6c-6239e67f03e7</korrelasjonsid>
</feil>
```

Ved feilrapportering er spesielt `korrelasjonsid` nyttig, men rapporter gjerne hele feilmeldingen for å forenkle feilsøking.
Korrelasjonsid skal være unik pr. kall, og ikke gjenbrukes på tvers av kall mot Skatteetaten, selv om de er del av samme løsning hos konsumenten.

### Felles feilkoder

Applikasjonene har noen feilkoder som er felles. De fleste av disse (alle som har HTTP status 500) skal i en normalsituasjon ikke forekomme for brukere av tjenestene. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| HTTP status | Feilkode | Feilmelding |
|-------------|----------|-------------|
| 500         | DAS-001  | Det var en uventet feil på tjenesten. Vennligst ta kontakt med brukerstøtte, med applikasjon og korrelasjonsid fra denne meldingen! |
| 404         | DAS-002  | Den forespurte URLen svarer ikke til et gyldig endepunkt |
| 500         | DAS-003  | Den forespurte informasjonen er for øyeblikket utilgjengelig, vennligst prøv igjen senere! Dersom problemet vedvarer, ta kontakt med brukerstøtte! |
| 500         | DAS-004  | Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten |
| 500         | DAS-005  | Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten |
| 500         | DAS-006  | Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten |
| 500         | DAS-007  | Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten |
| 403         | DAS-008  | Du er ikke autorisert for tilgang til den forespurte ressursen. |


## Andre generelle feil

I noen tilfeller, for eksempel dersom forespørselen ikke når frem til tjenesten, vil ikke feilmeldingen ha formatet over. I tabellen under har vi listet opp noen vanlige feilsituasjoner der dette kan oppstå.

| Feil | Tolkning |
|-------|--------|
| fatal alert: handshake_failure  (eller annen TLS feilmelding) | Feil i klientsertifikat autentisering. Se [dokumentasjon om sikkerhet](./sikkerhet.md). |
| Unknown instance. ID=8ac2... | Forespørselen er gjort mot en ugyldig URL som ikke svarer til noen tjeneste. |

## Melde feil

[Kontakt oss](../kontaktoss.md) hvis du opplever vedvarende feil med tjenestene våre.
