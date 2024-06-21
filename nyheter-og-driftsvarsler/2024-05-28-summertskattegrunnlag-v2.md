---
title: "Sammenslåing av Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API"
tags: [nyhet, skatteoppgjør, skattegrunnlag, summertskattegrunnlag]
date: 2024-05-28T07:50:00
---

Skatteetaten slår sammen Summert skattegrunnlag API og Spesifisert summert skattegrunnlag API, og alle konsumenter av begge API-ene må gå over på versjon 2 av Summert skattegrunnlag API.  

Summert skattegrunnlag API versjon 2 er tilgjengelig på ny URL i Test, og er om få dager også tilgjengelig i Prod: 
- Test: https://summertskattegrunnlag.api.skatteetaten-test.no/v2
- Prod: https://summertskattegrunnlag.api.skatteetaten.no/v2

[Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/summert-skattegrunnlag-api/2.0.0) er oppdatert-
[Dokumentasjon på Github er oppdatert](../api/summertskattegrunnlag)

Vi anbefaler at endringen testes først. For konsumenter som ikke har testet på en stund, så minner vi om å bruke TEST for token mot Maskinporten, ikke VER2.

**For konsumenter som i dag benytter Summert skattegrunnlag API**

- Endringene i modellen har en breaking-change for de som har brukt Summert skattegrunnlag API siden feltet "kategori" er endret fra liste til enkeltverdi.
- Feltet "registreringstidpunkt" har byttet navn til "ajourholdstidspunkt".
- Modellen utvides med nye felter som gjøres tilgjengelig for konsumenter som har behandlingsgrunnlag for disse opplysningene: andelSkattefritt, andelOverfoertFraBarn, skjønnsfastsatt, svalbardSkjønnsfastsatt
- Inntektsår 2016 er ikke lengre støttet.
- \{stadie\} er nå en obligatorisk del av URL. Konsumenter som hittil ikke har oppgitt stadie skal benytte stadie "oppgjoer". Eksempel på sti i Prod blir da: https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/{rettighetspakke}/{inntektsaar}/{personidentifikator}

**For konsumenter som i dag benytter Spesifisert summert skattegrunnlag API**

- Endringene i modellen er non-breaking-change og bakoverkompatibel for de som har brukt Spesifisert summert skattegrunnlag API med JSON.
- Konsumenter som har benyttet XML vil få et nytt namespace: summertskattegrunnlag
- Scopet skatteetaten:spesifisertsummertskattegrunnlag kan fremdeles benyttes, men man kan også ta i bruk skatteetaten:summertskattegrunnlag.
- Feltet "registreringstidpunkt" har byttet navn til "ajourholdstidspunkt".
- Modellen utvides med nye felter som gjøres tilgjengelig for konsumenter som har behandlingsgrunnlag for disse opplysningene: andelSkattefritt, andelOverfoertFraBarn
- \{stadie\} er nå en obligatorisk del av URL. Konsumenter som hittil ikke har oppgitt stadie skal benytte stadie "oppgjoer". Eksempel på sti i Prod blir da: https://summertskattegrunnlag.api.skatteetaten.no/v2/oppgjoer/{rettighetspakke}/{inntektsaar}/{personidentifikator}
 
**Sanering av eksisterende tjenester**

Saneringen av Summert skattegrunnlag API V1 og Spesifisert summert skattegrunnlag API vil sammenfalle med sanering av de gamle [URL-ene](https://skatteetaten.github.io/api-dokumentasjon/om/url), og frist vil varsles snart.


[Kontakt Skatteetaten](https://www.skatteetaten.no/deling/kontakt/) på vanlig måte dersom du har spørsmål til endringen. Konsumenter som er omfattet av et segmentsamarbeid bes kontakte egen segmentansvarlig.
