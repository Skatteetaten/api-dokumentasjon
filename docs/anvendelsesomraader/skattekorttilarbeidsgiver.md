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

### Anvendelse
Bruksmønster vil bli likt som tidligere, det vil si ett API for å bestille skattekortene, og ett API for å hente svaret på bestillingen.  
Etter hvert vil det også bli mulig å lytte på endringer i dialogporten og hente svaret med ID derfra.

Den gamle løsningen via RF-1211 vil kunne benyttes i parallell med de nye API-ene. Dette betyr at man feks. kan bestille skattekort med den gamle løsningen, og så bestille endringer med den nye. 
Det er heller ikke noe i veien for å hente skattekort med den gamle løsningen etter at man har hentet med den nye.

Det er ikke satt noen dato for sanering av RF-1211.

### Framdriftsplan
API-ene er nå klare til test.

Planen er å ha en versjon klar i produksjon i løpet av oktober.  

### Teknisk dokumentasjon

Teknisk dokumentasjon, URL-er til API-ene og annen informasjon man trenger finnes på [disse sidene.](https://skatteetaten.github.io/api-dokumentasjon/api/skattekorttilarbeidsgiver)

Dette er en foreløpig versjon, og det vil kunne komme endringer her.

Mer informasjon om [hvordan koble seg opp mot våre reetablerte tjenester finner man her.](https://www.skatteetaten.no/samarbeidspartnere/reetablering-altinn/systemleverandor/oppkobling/)

### Kontakt
For spørsmål og tilbakemeldinger; kontakt oss gjerne på e-post forskudd@skatteetaten.no
