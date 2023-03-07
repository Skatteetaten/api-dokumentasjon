---
title: Test av samtykkebasert datauthenting
slug: /testavsamtykke
folder: test
sidebar: mydoc_sidebar
datatable: true
tags: [Samtykke]
keywords: [testdata]
last_updated: Des 6, 2022
hide_table_of_contents: true
---
<summary>Samtykketoken-generator for automatisert generering av samtykketoken.</summary>

## Test av tjenester med samtykke

Flere av skatteetatens tjenester krever samtykke for å kunne utlevere data til eksterne virksomheter:

- SBL-tjenester krever samtykke fra skatteyter.
- Ebevis-tjenester krever samtykke fra virksomhet.

For å teste disse tjenestene har virksomheter tidligere måttet logge inn i Altinn og sette samtykke for personer og enheter før test av APIene. Dette manuelle steget kan nå unngås ved å ta i bruk Altinn sin Samtykketoken-generator.

## Samtykketoken-generator

Altinn har tilgjengeliggjort en løsning som kan generere samtykketoken, slik at man kan teste Skatteetatens API'er uten å måtte logge inn i Altinn først.

Løsningen er en enkel webapp som krever Maskinporten-autentisering. Denne kan en kalles med de parameterne som en ønsker for samtykketokenet, f.eks. tjenestekoder, inntektsår, samt offeredby/coveredby/handledby.

Mer info hos Altinn:

- Generelt om tokengeneratoren: [Test av samtykke](https://altinn.github.io/docs/api/rest/kom-i-gang/tokengenerator/)
- Teknisk informasjon om bruk: [Altinn test tools](https://github.com/Altinn/AltinnTestTools#consent-tokens)

For å ta i bruk løsningen må virksomheten som skal teste få tilgang til et spesifikt scope. Se Altinn sin dokumentasjon om scopenavn og hvordan få tilgang til det.

## Manuell test av samtykke

Digdir har bekreftet at TT02 har lest inn syntetisk Folkeregister, og i kombinasjon med TestID i ID-porten vil du kunne logge inn og gi samtykke med hvilken som helst test-person på nivå 4.
