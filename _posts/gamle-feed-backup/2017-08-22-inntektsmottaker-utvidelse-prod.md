---
title:  "Inntektsmottaker API utvidelse prodsatt"
categories: nyhet
permalink: inntektsmottaker_api_utvidelse_prod.html
tags: [old_news]
---

Vi har som tidligere varslet prodsatt en ny versjon av [Inntektsmottaker-api](reference_inntektsmottaker) . Tjenesten utleverer nå informasjon også om innrapporterte fradrag og forskuddstrekk.

## endringsoversikt

|  endring | beskrivelse | Berørte rettighetspakker |
|----------|------------------|------------------|
| &lt;fradrag&gt; | ny funksjonalitet| Alle |
| &lt;forskuddstrekk&gt; | ny funksjonalitet | Alle |
| endringer/standardisering av feilkode *tekster* | Kun tekster er endret, ikke feilkodene | Alle |

Dette er en kodeendring. Data som utleveres av inntektsmottaker-api er utvidet med nye felt. 
Ingen av endringene skal bryte kompabilitet, forutsatt at man har fulgt anbefalingen om å kode slik at man håndterer at det kan dukke opp nye felt/nye feltverdier.

Hvis man benytter våre XSD'er til XSD-validering i sin klientkode (ikke anbefalt) bør man oppdatere til ny XSD . 
