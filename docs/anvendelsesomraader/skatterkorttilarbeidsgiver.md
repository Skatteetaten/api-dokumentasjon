---
title: Skattekort til arbeidsgiver
slug: /anvendelsesomraader/skattekorttilarbeidsgiver
folder: anvendelsesomraader
sidebar: mydoc_sidebar
datatable: true
tags: [Skattekort,Arbeidsgiver,Forskudd]
last_updated: Feb 19, 2025
hide_table_of_contents: true
---
<Summary>API-er knyttet til skattekort til arbeidsgiver</Summary>

## Modernisering av skattekort til arbeidsgiver

Skatteetaten jobber med nye API for lønnssystem som skal tilby skattekort til arbeidsgivere. Disse skal erstatte dagens integrasjon mot Altinn-skjemaet RF-1211.

### Teknisk dokumentasjon
Det vil kunne komme endringer, men vi har nå lagt ut en foreløpig [dokumentasjon (Swagger)](https://app.swaggerhub.com/apis/skatteetaten/bestilling-av_skattekort/0.3.1) av de nye API-ene.  
Bruksmønster vil bli likt som tidligere, det vil si ett API for å bestille skattekortene, og ett API for å hente svaret på bestillingen.  
Etter hvert vil det også bli mulig å lytte på endringer i dialogporten og hente svaret med ID derfra.

### Framdriftsplan
Planen var å ha API-ene klare i testmiljøet første halvår 2025. Utviklingen er dessverre noe forsinket, og planen er nå at API-ene skal være klare i testmiljøet i løpet av august.  
I produksjon er planen å ha en versjon klar i løpet av oktober.  
Den gamle løsningen via RF-1211 vil kunne benyttes i parallell med de nye API-ene. Dette vil gjelde både i test og produksjon.  
Det er foreløpig ikke satt noen dato for sanering av RF-1211.

### Tilgang til API-ene
Mer informasjon om [hvordan koble seg opp mot våre reetablerte tjenester finner man her.](https://www.skatteetaten.no/samarbeidspartnere/reetablering-altinn/systemleverandor/oppkobling/)

Scope for disse API-ene: **skatteetaten:forskudd**

### Kontakt
For spørsmål og tilbakemeldinger; kontakt oss gjerne på e-post forskudd@skatteetaten.no
