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
<summary>Noen skattytere har krav på skjerming, som betyr at vi ikke kan utlevere informasjon som kan si noe om hvor de befinner seg.</summary>

## Skattepliktige med skjermingsbehov

Noen få skattepliktige har behov for å skjermes. Dette kan skyldes at de har adressegradering fortrolig eller strengt fortrolig. Hva som kan utleveres av data for en person med adressegradering avhenger av hvem virksomheten er og hvilket skjermingsbehov skattyter har.

Noen relevante regler er:

-  [Beskyttelsesinstruksen](https://lovdata.no/dokument/INS/forskrift/1972-03-17-3352)
-  [Folkeregisterforskriftens bestemmelser om opplysningsvirksomhet](https://lovdata.no/dokument/SF/forskrift/2007-11-09-1268#KAPITTEL_9)  

Hvis data for en skattepliktig skal skjermes for en bestemt virksomhet vil informasjon som potensielt kan bidra til å avsløre hvor Skattepliktig oppholder seg ikke utleveres fra Skatteetaten.
Vi utleverer i slike tilfeller et redusert datasett som har vært gjennom en skjermingsprosess hvor vi har fjernet geolokaliserende informasjon. Hva som fjernes varierer for hvert datasett, og i de fleste tilfeller vil vi fjerne alt innhold i responsen.

Når vi har skjermet data legger vi også til et felt som sier at data har blitt skjermet:

```json
"skjermet": true
```

Hvis geolokaliserende informasjon har blitt skjermet i responsen vil det typisk mangle enkelte detaljer og referanser, men summer og tall vil være riktige.

## Tilpasning av data for virksomheter

Personopplysningsloven, Skatteforvaltningsloven og andre lover og forskrifter regulerer hvilke data Skatteetaten kan utlevere. Utifra vurdering av behov og evt. hjemmel vil virksomheter ofte bare få tilgang til deler av et datasett.

Forskjeller i hva som utleveres er gjerne begrunnet med: 

-  det ikke er behov for å utlevere opplysninger (opplysninger om barn, opplysninger om vurderinger skatteetaten har gjort, etc)
-  opplysninger er sensitive (fagforeningskontigent, sykdomsrelatert, etc)

Å identifisere hva som kan utleveres er del av prosessen med å søke tilgang til tjenestene. 
