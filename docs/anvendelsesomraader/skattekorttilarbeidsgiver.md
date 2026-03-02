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

[Altinn II stenger 19. juni 2026 - tjenester må avvikles senest 31. mai.](https://samarbeid.digdir.no/altinn/altinn-ii-stenger-19-juni-2026-tjenester-ma-avvikles-senest-31-mai/3317) Fra denne dato vil løsningen via RF-1211 slutte å fungere.

### Framdriftsplan
API-ene er nå klare både i test og produksjon.

### Teknisk dokumentasjon

Teknisk dokumentasjon, URL-er til API-ene og annen informasjon finnes på [disse sidene.](https://skatteetaten.github.io/api-dokumentasjon/api/skattekorttilarbeidsgiver)

Mer informasjon om [hvordan koble seg opp mot våre reetablerte tjenester finner du her.](https://www.skatteetaten.no/samarbeidspartnere/reetablering-altinn/systemleverandor/oppkobling/)

### Kontakt
For spørsmål og tilbakemeldinger; kontakt oss på [brukerstøttetjenesten](https://eksternjira.sits.no/plugins/servlet/desk/site/global)
