---
title: Skjerming av data
slug: /skjerming
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Skjerming]
keywords: [Skjerming, kode 6, kode 7, kode 4]
last_updated: Des 8, 2022
hide_table_of_contents: true
---
<summary>Noen personer har krav på skjerming, som betyr at Skatteetaten ikke kan utlevere informasjon som kan si noe om hvor de befinner seg.</summary>

## Skattepliktige med skjermingsbehov

Noen få personer har behov for å skjermes. Dette kan skyldes at de har gradert adresse etter beskyttelsesinstruksen (fortrolig eller strengt fortrolig). Hva som kan utleveres av data for en person med adressegradering avhenger av hvem virksomheten er og hvilket skjermingsbehov skattyter har.

Noen relevante regler er:

-  [Beskyttelsesinstruksen](https://lovdata.no/dokument/INS/forskrift/1972-03-17-3352)
-  [Folkeregisterforskriftens bestemmelser om opplysningsvirksomhet](https://lovdata.no/dokument/SF/forskrift/2007-11-09-1268#KAPITTEL_9)  

Hvis data for en skattepliktig skal skjermes for en bestemt virksomhet vil informasjon som potensielt kan bidra til å avsløre hvor Skattepliktig oppholder seg ikke utleveres fra Skatteetaten. Vi utleverer i slike tilfeller et redusert datasett som har vært gjennom en skjermingsprosess hvor vi har fjernet geolokaliserende informasjon. Hva som fjernes varierer for hvert datasett, og i de fleste tilfeller vil vi fjerne alt innhold i responsen.

Når vi har skjermet data legger vi også til et felt som sier at data har blitt skjermet:

```json
"skjermet": true
```

Hvis geolokaliserende informasjon har blitt skjermet i responsen vil det typisk mangle enkelte detaljer og referanser, men summer og tall vil være riktige.

### Eksempel

 * Ola har skjerming (gradert adresse)
 * Virksomheten AS har en rettighetspakke som ikke gir tilgang til noen opplysninger om personer med skjerming
 * Eksempeletaten har en rettighetspakke som gir tilgang til opplysninger som ikke er geolokaliserende for personer med skjerming

Virksomheten AS leser Ola sitt Skattegrunnlag. Alle opplysningene er fjernet og responsen vil kun inneholde parametre fra tjenestekallet, samt “skjermet”: true.

Eksempeletaten leser Ola sitt Skattegrunnlag. Geolokaliserende opplysninger (hvor han bor, hvem arbeidsgiver er, etc) er fjernet og responsen er merket “skjermet”: true. Hvis datasettet ikke inneholder geolokaliserende opplysninger så blir ingen opplysninger skjermet, og responsen er merket “skjermet”: false.
