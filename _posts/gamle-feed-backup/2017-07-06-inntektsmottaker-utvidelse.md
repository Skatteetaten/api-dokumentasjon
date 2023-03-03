---
title:  "Inntektsmottaker API utvidelse"
categories: nyhet
permalink: inntektsmottaker_api_utvidelse.html
tags: [old_news]
---

Vi har lagt ut en ny versjon av inntektsmottaker-api i akseptansetestmiljøet (AT). Tjenesten utleverer nå informasjon også om innrapporterte fradrag og forskuddstrekk

## endringsoversikt

|  endring | beskrivelse | Berørte rettighetspakker |
|----------|------------------|------------------|
| &lt;fradrag&gt; | ny funksjonalitet| Alle |
| &lt;forskuddstrekk&gt; | ny funksjonalitet | Alle |
| endringer/standardisering av feilkode *tekster* | Kun tekster er endret, ikke feilkodene | Alle |

Dette er en kodeendring som vil produksjonsettes ca 11 august. Data som utleveres av inntektsmottaker-api er utvidet med nye felt. 
Ingen av endringene skal bryte kompabilitet, forutsatt at man har fulgt anbefalingen om å kode slik at man håndterer at det kan dukke opp nye felt/nye feltverdier.

Hvis man benytter våre XSD'er til XSD-validering i sin klientkode (ikke anbefalt) bør man oppdatere til ny XSD . 


## endringer i dokumentasjon

[inntektsmottaker api](reference_inntektsmottaker) og [informasjonsmodell](data_inntektsmottaker) er opdatert med endringene, inkludert nye XSD'er og nye XML/JSON eksempler.

