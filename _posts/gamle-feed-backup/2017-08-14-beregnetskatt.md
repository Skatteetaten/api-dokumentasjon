---
title:  "Beregnetskatt API"
categories: nyhet
permalink: beregnetskatt_api.html
tags: [old_news]
---

Vi legger i dag ut en ny REST-basert tjeneste for *Beregnet Skatt* i akseptansetestmiljøet (AT). 
Tjenesten i versjon 1.0 leverer tilsvarende data som gammel Beregningsgrunnlag tjeneste basert på SOAP. Den gamle tjenesten er deprekert. 

Tjenesten har inntil videre kun et utvalg data fra grunnlaget for skatteberegning. I løpet av høsten utvides tjenesten til å levere et fullere datasett grunnlag og også den ferdig beregnede skatten.


## endringsoversikt


|  endring | beskrivelse | 
|----------|------------------|
| beregnetskatt-api | ny tjeneste |
| beregningsgrunnlag-api | Deprekert, blir fjernet straks eksisterende klienter er flyttet på ny tjeneste |

Dette er en kodeendring med forventet produksjonsdato om noen uker.

## endringer i dokumentasjon

Se [beregnetskatt_api](reference_beregnetskatt) for dokumentasjon, XSD'er og XML/JSON eksempler.

