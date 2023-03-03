---
title:  "Skattegrunnlag API patch"
categories: nyhet
permalink: skattegrunnlag_api_patch.html
tags: [old_news]
---

Vi har i dag prodsatt en patch av skattegrunnlag-api

## endringsoversikt

|  endring | beskrivelse | Berørte rettighetspakker |
|----------|------------------|------------------|
| feil i mapping av *samletFormuesverdiForFastEiendomIUtlandet* | Rettet en feil i mapping. Berørte parter er spesielt informert | Alle |
| strengere validering av samtykke | flere nye og strengere valideringer på samsvar mellom data som utleveres og innhold i samtykket som ble gitt | Standard |
| samtykkeinngåelse tidspunkt | data utleveres slik de så ut på samtykkeinngåelse tidspunkt (ikke spørretidspunkt  | Standard |
| 2016 støtte er lagt klar | støtte for 2016 data er lagt klar i koden, men er disablet | Ingen |

Dette er en kodeendring i produksjonsmiljøet. Det er kun mindre funksjonelle endringer, og ingen av endringene skal bryte kompabilitet.
Men merk at det innføres strengere validering av samtykke. 


## informasjon: inntektsaar 2016 utrullingsplan

Data for inntektsaar 2016 starter først å bli tilgjengelig midt under ferieavvikling/kodefrys. Vi har 
valgt å disable 2016 inntil vi har bemanning til å håndtere eventuelle problemer som måtte oppstå.

Planlagt dato for åpning for Skattegrunnlag 2016 er 9 august.


### &lt;felt&gt; verdier med endret oppførsel i 2016

Skattegrunnlag 2016 formatet er stort sett likt 2015 formatet, men det er noen mindre endringer i hva som inngår i noen feltverdier. 
I tillegg kommer det et nytt felt med verdi *samletLoennsinntektPaaSvalbardOver12G* 

|  &lt;felt&gt; verdi | endring | 
|----------|-----------------------------------------|
| samletAlderspensjonFraFolketrygden, samletAnnenTrekkpliktigPensjon | *ektefelletillegg spesifisert* og *folketrygd uspesifisert* flyttes fra *samletAlderspensjonFraFolketrygden til samletAnnenTrekkpliktigPensjon* |
| samletMerkostnadVedArbeidsoppholdUtenforHjem | *merkostnader arbeidsopphold utenfor hjemmet utland* erstatter *merkostnader arbeidsopphold utenfor hjemmet*|
| samletSkattepliktigAksjegevinstEllerGevinstVedRealisasjonAvObligasjonEllerVerdipapirfondsandel | 'gevinst finansprodukter' fjernes |
| samletAnnenInntekt | *avkastning kundeutbytte* fjernes|
| samletTapVedSalgAvAksjer | *tap finansprodukter* fjernes|
| samletLoennsinntektPaaSvalbardOver12G | nytt|

