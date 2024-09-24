---
title: Teknisk spesifikasjon
slug: /om/tekniskspesifikasjon
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [API]
keywords: [API, dokumentasjon]
last_updated: Mar 27, 2023
hide_table_of_contents: true
---
<Summary>Skatteetaten benytter Open API spesifikasjon og Swaggerhub for teknisk spesifikasjon av API-er.</Summary>

## Open API spesifikasjon

For å møte det stadig økende behovet for nye tjenester og ha mer effektiv forvaltning av tjenester, har Skatteetaten migrert alle API-ene over på Open API spesifikasjon (tidligere XSD). Da kan vi automatisere utviklingsprosessen mer slik at funksjonell spesifikasjon, teknisk løsning og dokumentasjon alltid skal være i synk. Basert på prinsippet om "kontrakt først" kan vi også autogenerere kode for API-ene.

Dette vil også være en forbedring for brukeropplevelse for konsumentene, som kan benytte Open API spesifikasjonene for å få automatisert opprettelse av tjenester mot Skatteetaten.

I Open API spesifikasjonen ligger URL-er til API-ene, beskrivelsen av parameterne, endepunkter og respons.


## SwaggerHub

Når API-ene er utviklet basert på Open API, kan vi eksponere dette ut til konsumentene, og vi benytter SwaggerHub for å publisere Open API spesifikasjonene.

Lenke til de ulike tjenestenes Open API spesifikasjoner ligger i dokumentasjonen for hvert enkelt API, men på Swaggerhub finnes også en [oversikt over alle Skatteetatens API-er](https://app.swaggerhub.com/organizations/skatteetaten).

Implementasjonene må ta hensyn til at det ikke kommer verdier for ikke-obligatoriske felter for alle enkelttilfeller.
