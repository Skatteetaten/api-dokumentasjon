---
title: Samtykke
slug: /samtykke
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Samtykke,Sikkerhet]
keywords: [datatables, tables, grids, markdown, multimarkdown, jquery plugins]
last_updated: Nov 24, 2022
hide_table_of_contents: true
---
> Skatteetaten tilbyr samtykkebasert datauthenting basert på Altinn sin løsning for digitalt samtykke.

## Samtykke

![illustrasjon av samtykkeprosessen](../../static/img/samtykke.png)

### Få tilgang
Før du som konsument kan benytte Skatteetaten API'er som krever samtykke eller fullmakt må du få tilgang til Altinn's samtykkeløsning. Altinn har beskrevet det som skal til for å [komme i gang med samtykke](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/komme-i-gang). Skatteetaten er her datakilden og har på forhånd opprettet tjenestekoder og tjenesteutgavekoder for api'ene. Nærmere informasjon om dette finner du i api-dokumentasjonen. Merk at Skatteetaten ikke benytter tjenesteeierstyrt rettighetsregister.

### Be om samtykke
Når du har fått tilgang til Altinn's Samtykkeløsning og API'et til Skatteetaten kan det [bes om samtykke](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/be-om-samtykke). Skatteetaten støtter kun *Forhåndsregistrerte samtykkeforespørsler* og det er heller ikke mulig å overstyre de forhåndsdefinerte tekstene. *Request Message* skal derfor ikke benyttes i forespørselen. 

Den overordnetete flyten for samtykkedialogen blir da som følger:
1. Bruker logger seg på nettløsningen for å f.eks. søke om lån eller se sine Krav og betalinger. Konsumenter må dermed ha et samtykke eller fullmakt for å innhente opplysninger på vegne av brukeren.

2. Konsument innhenter samtykket ved å sende en samtykkeforespørsel for bruker til Altinn med *ServiceCode* og *ServiceCodeEdition* for de aktuelle tjenestene og mottar en *AuthorizationCode*. Dersom det allerede foreligger et gyldig samtykke som er innenfor utløpstiden (f.eks. 90 dager for *Krav og betalinger*), fortsetter flyten i steg 6.  
 
3. Konsument sender deretter brukeren til samtykkesiden hos Altinn med *Authorization Code* fra samtykkeforespørselen og en *RedirectURL*, som er en lenke til siden brukeren skal sendes tilbake til etter at samtykket er gitt.
 
4. Brukeren blir presentert for samtykkesiden som inneholder en beskrivelse av hva det skal gis samtykke til. Det er Skatteetaten som har definert dette innholdet.

5. Brukeren gir samtykke og sendes tilbake til konsumentens nettsider på *Redirect URL'en* som ble oppgitt.

6. Konsument [henter et Samtykketoken](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/hente-token) fra Altinn ved bruk av *Authorization Code*. Samtykketokenet har vanligvis utløpstid på 30 sekunder, men kan innhentes på nytt med samme *AuthorizationCode* så lenge samtykket fortsatt er gyldig.

7. Konsument sender med samtykketokenet i forespørslene til api'et gjennom å sette en HTTP-headerverdi: `AltinnSamtykke: <samtykketoken>`. Forespørselen må også inneholde et [Maskinporten-token](./sikkerhet.md).

8. Skatteetaten sjekker Maskinporten- og Samtykketoken og utleverer dataene.
 
<InfoMessageBar>

Samtykkedialogen kan ikke innpakkes i en iFrame eller annen branding som er egnet til å utydeliggjøre domenet samtykkedialogen foregår på (som er altinn + idporten). Dette er begrunnet med et potensielt misbruksscenario beskrevet i [OAuth2-spesifikasjonen](https://tools.ietf.org/html/draft-ietf-oauth-v2-23#section-10.13) (clickjacking)
 
 </InfoMessageBar>

## Headereksempel

| header | forklaring | eksempelverdi |
| ------ | ---------- | ------------- |
| AltinnSamtykke | Base64 encoded JWT samtykketoken fra Altinn | eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkthUGxpMFJUdVVUcl9yUXJWSmhzQkNXQS0yayJ9.eyJTZXJ2aWNlQ29kZXMiOiI0NjI4LDEiLCJBdXRob3JpemF0aW9uQ29kZSI6IjE1MzM0ZTcxLTVhMzEtNDE0Ny05MjA4LTNkYTFlZDYwNTY0OSIsIk9mZmVyZWRCeSI6IjA1MDg4MDAwMTEyIiwiQ292ZXJlZEJ5IjoiOTEwNTE0NDU4IiwiRGVsZWdhdGVkRGF0ZSI6IjE2LjAyLjIwMTcgMTc6MTc6MDYiLCJWYWxpZFRvRGF0ZSI6IjAxLjAxLjIwMTggMjM6NTk6NTkiLCJpc3MiOiJhbHRpbm4ubm8iLCJleHAiOjE0ODgzMDQzMDcsIm5iZiI6MTQ4ODMwNDI3N30.signatur_fjernet |

Samtykketoken er base64-encodet og signert når det hentes fra Altinn sin datatjeneste. 

Samtykketoken er et JWT token og det finnes gode online verktøy for å lese tokens, f.eks. [jwt.io](https://jwt.io)

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
