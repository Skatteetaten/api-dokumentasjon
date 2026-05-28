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

Skatteetaten har laget nye API-er for lønnssystem som skal tilby skattekort til arbeidsgivere. Disse skal erstatte dagens integrasjon mot Altinn-skjemaet RF-1211.

### Anvendelse
Bruksmønsteret er det samme som tidligere, det vil si ett API for å bestille skattekortene, og ett API for å hente svaret på bestillingen.  

Den gamle løsningen via RF-1211 vil kunne benyttes i parallell med de nye API-ene. Dette betyr at man feks. kan bestille skattekort med den gamle løsningen, og så bestille endringer med den nye. 
Det er heller ikke noe i veien for å hente skattekort med den gamle løsningen etter at man har hentet med den nye.

[Altinn II stenger](https://samarbeid.digdir.no/altinn/altinn-ii-stenger-19-juni-2026-tjenester-ma-avvikles-senest-31-mai/3317) **For RF-1211 er fristen for innsending forlenget til 15. juni kl. 12:00. Fra dette tidspunkt vil løsningen via RF-1211 slutte å fungere.**

### Teknisk dokumentasjon

Teknisk dokumentasjon, URL-er til API-ene og annen informasjon finnes på [disse sidene.](https://skatteetaten.github.io/api-dokumentasjon/api/skattekorttilarbeidsgiver)

Mer informasjon om [hvordan koble seg opp mot våre reetablerte tjenester finner du her.](https://www.skatteetaten.no/samarbeidspartnere/reetablering-altinn/systemleverandor/oppkobling/)

### Alternativ løsning til API for å hente skattekort

For å sikre en smidig overgang til nye Altinn, tilbyr Skatteetaten en alternativ løsning for å hente skattekort til arbeidsgiver.
Dette kan gjøres via portalløsningen, som nå er utvidet slik at man også kan laste opp et xml-filvedlegg.
Den alternative løsningen vil fungere parallelt med nytt API for å hente skattekort til arbeidsgiver.

Pålogging skjer via ID-porten, med samme lenke og tilgangspakker og rettigheter som ved bruk av manuelt skjema (taste inn fødselsnummer for å hente skattekort).
Man må representere et orgnr for å bruke filopplasting.

[Portalløsning i test](https://skatt-test.sits.no/web/skattekortarbeidsgiver/)  
[Portalløsning i produksjon](https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/skattekort-og-skattetrekk/skattekort/hent-skattekort-uten-lonnssystem/)

Vedlegget man laster opp er på samme format som vedlegget i Altinn2-løsningen (RF1211). 
Responsen er på samme format som i den gamle løsningen.

[XSD for innsendingsfilen](../../static/download/forespoerselomskattekorttilarbeidsgiver_v2.0.xsd)  
[Eksempel på innsendingsfil](../../static/download/forespoersel-om-skattekort-eksempel.xml)

[XSD for responsen](../../static/download/skattekorttilarbeidsgiver_v3.0.xsd)  
[Eksempel på respons-fil](../../static/download/skattekortresponse-eksempel.xml)

Det vil være en størrelses-begrensning på xml-filen man laster opp på 1MB (ca 15000 fødselsnr).

### Kontakt
For spørsmål og tilbakemeldinger; kontakt oss på [brukerstøttetjenesten](https://eksternjira.sits.no/plugins/servlet/desk/site/global)
