---
title: Samtykke
slug: /samtykke
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [samtykkel]
keywords: [datatables, tables, grids, markdown, multimarkdown, jquery plugins]
last_updated: Nov 24, 2022
hide_table_of_contents: true
---
<summary>Skatteetaten tilbyr samtykkebasert datauthenting basert på Altinn sin løsning for digitalt samtykke.</summary>

## Samtykke

![illustrasjon av samtykkeprosessen](../../static/img/samtykke.png)

### Få tilgang
Konsument må få tilgang til Altinns samtykke og fullmaktsløsning: https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/komme-i-gang/. Skatteetaten er datakilden og har opprettet tjenestekoder og tjenestekodeutgavekoder for det aktuelle api'et og dette er beskrevet i dokumentasjonen for det enkelte api'et. Skatteetaten benytter ikke tjenesteeierstyrt rettighetsregister.

### Be om samtykke
Når konsumenten har fått tilgang til Altinn's Samtykkeløsning og API'et hos Skatteetaten kan de be om samtykke i henhold til følgende beskrivelse: https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/be-om-samtykke/. Skatteetaten støtter kun Forhåndsregistrerte samtykkeforespørsler og det heller ikke mulig å overstyre den forhåndsdefinerte teksten. Request Message skal derfor ikke benyttes i forespørselen. 

Den overordnetete tekniske flyten for samtykkedialogen blir da som følger:
1. Bruker logger seg på konsumentens nettløsning f.eks for å søke om lån eller se sine krav og betalinger. Konsument har behov for brukerens samtykke eller fullmakt for å innhente opplysninger på vegne av denne.
2. Konsument innhenter samtykket ved å sende en samtykkeforespørsel for bruker til Altinn med ServiceCode og ServiceCodeEdition for de aktuelle tjenestene og mottar en AuthorizationCode.
3. Konsument sender brukeren til samtykkesiden hos Altinn med Authorization Code fra samtykkeforespørselen og en RedirectURL.
3. Brukeren blir presentert for samtykkesiden som beskriver hva det kan gis samtykke til i henhold til malen for den bestemte Samtykketjenesten.
4. Bruker gir samtykke og sendes tilbake til konsumenten på Redirect URL'en som ble oppgitt.
5. Konsument henter et samtykketoken fra Altinn ved bruk av Authorization Code https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/hente-token/
6. Konsument bruker Skatteetatens API med samtykketokenet som AltinnSamtykke-headerverdi. Forespørselen må også inneholde et Maskinporten token, se egne beskrivelser av dette (lenke).
7. Skatteetaten sjekker Maskinporten- og Samtykketoken og utleverer dataene.
 
## Restriksjon på bruk av iFrames

Samtykkedialogen kan ikke innpakkes i en iFrame eller annen branding som er egnet til å utydeliggjøre domenet samtykkedialogen foregår på (som er altinn + idporten).

Dette er begrunnet med et potensielt misbruksscenario beskrevet i [OAuth2-spesifikasjonen](https://tools.ietf.org/html/draft-ietf-oauth-v2-23#section-10.13) (clickjacking)

## Headereksempel
For virksomheter som benytter samtykke må Altinn samtykketoken settes i header i request til Skatteetaten sine datatjenester. 

Verdien i denne headeren skal være et Json Web Token (JWT) signert av Altinn. For informasjon rundt hvordan man skaffer et slikt token, sjekk [Altinn: hente token](https://altinn.github.io/docs/guides/samtykke/datakonsument/hente-token/)

Det er ikke nødvendig for virksomheten å lese samtykketoken eller sette seg inn i tokenformatet. For full dokumentasjon av tokenformat se
 [Altinn: tokenformat](https://altinn.github.io/docs/guides/samtykke/datakilde/bruk-av-token/) 
 

| header | forklaring | eksempelverdi |
| ------ | ---------- | ------------- |
| AltinnSamtykke | Base64 encoded JWT samtykketoken fra Altinn | eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkthUGxpMFJUdVVUcl9yUXJWSmhzQkNXQS0yayJ9.eyJTZXJ2aWNlQ29kZXMiOiI0NjI4LDEiLCJBdXRob3JpemF0aW9uQ29kZSI6IjE1MzM0ZTcxLTVhMzEtNDE0Ny05MjA4LTNkYTFlZDYwNTY0OSIsIk9mZmVyZWRCeSI6IjA1MDg4MDAwMTEyIiwiQ292ZXJlZEJ5IjoiOTEwNTE0NDU4IiwiRGVsZWdhdGVkRGF0ZSI6IjE2LjAyLjIwMTcgMTc6MTc6MDYiLCJWYWxpZFRvRGF0ZSI6IjAxLjAxLjIwMTggMjM6NTk6NTkiLCJpc3MiOiJhbHRpbm4ubm8iLCJleHAiOjE0ODgzMDQzMDcsIm5iZiI6MTQ4ODMwNDI3N30.signatur_fjernet |

Samtykketoken er base64-encodet og signert når det hentes fra Altinn sin datatjeneste. Det er bare gyldig i 30 sekunder, men man kan hente nytt token basert på authcoden så ofte man vil. 

Samtykketoken er et JWT token og det finnes gode online verktøy for å lese tokens, f.eks. [jwt.io](https://jwt.io)](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/)
## Tjenester med støtte for samtykke

Følgende api'er hos Skatteetaten støtter utlevering gjennom samtykke eller fullmakt. Detaljer om parameterne som er nødvendig for å få utstedt samtykker eller fullmakt er beskrevet i dokumentasjonen for hvert enkelt api.

Samtykke fra skatteyter:
  - [Inntekt API](../tjenester/inntekt.md)
  - [Spesifisert summert skattegrunnlag API](../tjenester/spesifisertsummertskattegrunnlag.md)
  
Samtykke fra virksomhet
  - [Arbeidsgiveravgift API](../tjenester/arbeidsgiveravgift.md)
  - [Mva meldingsopplysning API](../tjenester/mva_meldingsopplysning.md)
  - [Oppdrag utenlanske virksomheter API](../tjenester/oppdragutenlandskevirksomheter.md)
  - [Restanser API](../tjenester/restanser.md)
