---
title:  "Endring av skjermingsregler for inntektsmottaker API"
categories: nyhet
permalink: endrede_skjermingsregler_inntekt2019.html
tags: [old_news]
---

Skatteetaten standardiserer håndtering av skjerming på tvers av delingstjenestene for skatt- og inntektsopplysninger. Dette medfører endring av skjermingsregler for Inntektsmottaker API.

Nye regler:

* Kode 6 (strengt fortrolig adresse)
  * Alle rettighetspakker: Ingen opplysninger deles (bortsett fra kalendermåned og personidentifikator det er søkt på). Skjermet-flagg = True
* Kode 7 (fortrolig adresse)  
  * Rettighetspakke SBL: Ingen opplysninger deles (bortsett fra kalendermåned og personidentifikator det er søkt på). Skjermet-flagg = True
  * Alle andre: Ingen skjerming, skjermet-flagg = False

Endringen trer i kraft fra 04.01.2019, men får ikke driftsmessige konsekvenser for konsumentene. 