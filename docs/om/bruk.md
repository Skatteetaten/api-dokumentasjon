---
title: Bruk av API-er for deling
slug: /om/bruk
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [API]
keywords: [API, dokumentasjon]
last_updated: Nov 12, 2024
hide_table_of_contents: true
---
<Summary>Overordnet om Skatteetatens API-er for deling.</Summary>

Bruk av Skatteetatens API-er for deling forutsetter følgende:
* Bruk av [Maskinporten](sikkerhet.md).
* Virksomheten må få [tilgang](https://www.skatteetaten.no/deling/) til tjenesten.
* Dersom virksomheten skal benytte en systemleverandør, må det [delegeres tilgang i Altinn](delegering.md).

## Oppslagstjenester
Skatteetaten deler informasjon med eksterne virksomheter gjennom gjenbrukbare oppslagstjenester for definerte datasett. Minimeringsprinsippet iveretas gjennom at Skatteetaten filtrerer resultatsettet iht. virksomhetens behov ("Rettighetspakke").   

## Hendelser
Skatteetaten varsler om endringer i data gjennom bruk av hendelseslister. En hendelse er et varsel om at det er kommet nye data, slettede data eller endrede data. Hendelser er “tynne”, dvs at de ikke inneholder selve dataene. Hendelsen inneholder kun et sekvensnummer, personidentifikator og perioden det har skjedd en hendelse for. 

Noen virksomheter benytter hendelseslistene for å følge med på endringer i data de allerede har hentet gjennom oppslagstjenesten, mens andre ønsker å følge med på nye data for et stort antall (eller alle) personer eller virksomheter. For å støtte disse bruksmønstrene publiserer vi hendelser per datatjeneste, som gir løpende varslinger om at opplysninger knyttet til en person eller virksomhet er endret. Se egen dokumentasjon for [de ulike hendelseslistene](../api/hendelser.md).

Der det finnes hendelseslister, skal disse benyttes og data kun hentes på nytt når det er lagt ut en hendelse i hendelseslisten. Vi ønsker ikke at det gjøres periodiske oppslag for å sjekke om det er endringer i data.

Endringer og rettelser i innrapporterte data kan komme lang tid i etterkant. Virksomheter som er avhengige av å re-beregne hvis det kommer endringer bør benytte hendelseslister for datatypene de benytter for å oppdage endringer. 

  > *Eksempel:* En virksomhet har hentet inntektsmottaker data for en skattepliktig for mars 2017. Virksomheten ønsker å reagere hvis det blir endringer i data. 
  > Virksomheten benytter hendelsesliste for inntektsmottaker for å følge med på om det skjer endringer for den skattepliktige for mars 2017. 
  > I oktober 2017 har hendelseslisten et innslag for den skattepliktige for mars 2017. Virksomheten reagerer ved å hente oppdaterte data for den skattepliktige for mars 2017.

## Format

Tjenestene er tilgjengelige som REST-tjenester over HTTP, med data på formatene JSON (default) og XML.
Dersom man ikke spesifiserer ønsket format får man JSON. Skatteetaten oppfordrer til å benytte JSON fremfor XML.

## Bruksmønster
 
Det er mange konsumenter av Skatteetatens tjenester og det er derfor viktig at hver enkelt virksomhet har et fornuftig og forholdsmessig bruk av tjenestene. 

Det medfører blant annet:
* Det bør ikke være mer enn 5 samtidige kall ("tråder") for et api fra en virksomhet.
* Hendelsesliste benyttes som beskrevet ovenfor.

Skatteetaten følger med på ressursbruk og vil evt. regulere ved behov.
