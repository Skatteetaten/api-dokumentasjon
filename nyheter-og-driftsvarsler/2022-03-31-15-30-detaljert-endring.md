---
title:  "Spesifisering av endring av XML for Spesifisert summert skattegrunnlag API ved overgang til OpenAPI spesifikasjon"
categories: nyhet
permalink: /overgang-openapi-spesifikasjon-31032022
tags: [news]
date: 2022-03-31 15:45:00 +0100
---
Tidligere har vi varslet endring av XML for Spesifisert summert skattegrunnlag API ved overgang til [OpenAPI spesifikasjon](./2022-02-18-12-00-endring-xml.md).

OpenAPI spesifikasjon for API'et er nå klar på [Swaggerhub:](https://app.swaggerhub.com/apis/Skatteetaten_Deling/spesifisert-summert-skattegrunnlag-api/1.0.0)

Vi endrer den spesielle måten å håndtere typer i xml på, og vi flytter type ned i et eget felt slik at XML vil håndteres likt som i JSON-responsen. 

For eksempel:
* Før: `<spesifisering xmlns:wstxns1=http://www.w3.org/2001/XMLSchema-instance wstxns1:type="LoennOgTilsvarendeYtelser">`
* Nå: `<type>LoennOgTilsvarendeYtelser</type>`

Spesifisert summert skattegrunnlag API blir tilgjengelig med Open API spesifikasjon:
* I test: Tirsdag 24. mai 2022
* I produksjon: Tirsdag 21. juni 2022
