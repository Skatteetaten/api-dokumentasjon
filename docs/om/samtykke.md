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

Samtykke gis via [samtykkeløsningen til Altinn](https://altinn.github.io/docs/utviklingsguider/samtykke/)

![illustrasjon av samtykkeprosessen](../../static/img/samtykke.png)

For å bruke løsningen må virksomheten først redirecte skattepliktig til samtykkeløsningen til Altinn. Dersom skattepliktig samtykker til at ønskede data kan utleveres til virksomheten oppretter Altinn et samtykke (en representasjon av hva som er avtalt mellom Datakonsument og Skattepliktig). Virksomheten kan så hente data fra Skatteetatens datatjenester. Samtykket må sendes med dataforespørselen og blir kontrollert av Skatteetaten. 

## Tjenester med støtte for samtykke

Samtykke fra skatteyter:
  - [Inntekt API](../tjenester/inntekt.md)
  - [Spesifisert summert skattegrunnlag API](../tjenester/spesifisertsummertskattegrunnlag.md)
  
Samtykke fra virksomhet
  - [Arbeidsgiveravgift API](../tjenester/arbeidsgiveravgift.md)
  - [Mva meldingsopplysning API](../tjenester/mva_meldingsopplysning.md)
  - [Oppdrag utenlanske virksomheter API](../tjenester/oppdragutenlandskevirksomheter.md)
  - [Restanser API](../tjenester/restanser.md)

De spesifikke tjenestekodene som skal benyttes ligger dokumentert pr. api.


## Skatteetaten sine krav ifm redirect til Altinn sin samtykketjeneste

For å starte en samtykkeinngåelse må man benytte Altinn's løsning for samtykker.
Nedenfor er en oversikt over hvilke parametre/verdier som må benyttes for å etablere samtykke for bruk av Skatteetaten sine datatjenester.

For full oversikt over alle parametre som må/kan settes, se [Altinn: be om samtykke](https://altinn.github.io/docs/guides/samtykke/datakonsument/be-om-samtykke/#url)

| parameter | forklaring | eksempelverdi |
| ------ | ---------- | ------------- |
| Resources | Punktum separert liste med ID_VERSJON for data tjenester man ønsker samtykke for. | 4628_210607.4804_210607 |
| CoveredBy | Orgnummer for virksomhet. Må matche orgnummer til autentisert virksomhet | 123456789 |
| HandledBy | Orgnummer for leverandøren, dersom tilgangen er delegert | 123456789 |
| RedirectURL | Url-encoded url som sluttbruker skal redirectes til etter inngått samtykke | https%3A%2F%2Fwww.virksomhet.no |
| ValidToDate | Kan maksimalt være 10 dager frem i tid. Skatteetaten vil avvise samtykker med gyldighetsperioder lengre perioder enn 10 dager (selv om samtykket benyttes innen 10 dager) |2017-04-30T10:30:00Z |
| RequestMessage (tidl. DelegationContext) | I ny samtykkeløsning skal denne ikke fylles ut, tekstene er definert i malene  | N/A |
| 4804_210607_fraOgMed | Parameter for Inntekt | 2018-03 |
| 4804_210607_tilOgMed | Parameter for Inntekt | 2018-06 |
| 4628_210607_inntektsaar | Parameter for Skattegrunnlag | 2017 |


### Tjenesteparametre

Når man starter samtykkeinngåelsen må man ha med tjenestespesifikke parametre for de tjenestene man vil ha samtykke for. 

Eksempler for SBL:

|Resource| obligatoriske parametere | forklaring | eksempel |
|--------| ------ | ---------- | ------------- |
| 4628_210607 | 4628_210607_inntektsaar| inntektsaar det skal hentes skattedata for | &4628_210607_inntektsaar=2017 |
| 4804_210607 | 4804_210607_fraOgMed | startmåned det skal hentes inntektsopplysninger for | &4804_210607_fraOgMed=2018-08 |
| 4804_210607 | 4804_210607_fraOgMed | sluttmåned det skal hentes inntektsopplysninger for | &4804_210607_tilOgMed=2018-10 |


### Krav om kontroll av samtykke

Hvis virksomheten ikke vet med sikkerhet hvem som har samtykket skal virksomheten kontrollere hvem samtykketoken gjelder for *før* spørring mot Datasamarbeid API utføres. Dette er spesielt aktuelt i tilfeller der det gis flere samtykker i samme saksflyt (for eksempel at flere personer søker lån sammen). 

Se [Spørsmål og svar](../spoersmaalogsvar/samtykketokenfeil.md) for hvordan man kan kontrollere samtykketoken, og mulige årsaker til problemet.


### Restriksjon på bruk av iFrames

Samtykkedialogen kan ikke innpakkes i en iFrame eller annen branding som er egnet til å utydeliggjøre domenet samtykkedialogen foregår på (som er altinn + idporten).

Dette er begrunnet med et potensielt misbruksscenario beskrevet i [OAuth2-spesifikasjonen](https://tools.ietf.org/html/draft-ietf-oauth-v2-23#section-10.13) (clickjacking)


## Veksle inn authcode

Se [Altinn: veksle inn autorisasjonskode i token](https://altinn.github.io/docs/guides/samtykke/datakonsument/hente-token/)

## Headerinformasjon
For virksomheter som benytter samtykke må Altinn samtykketoken settes i header i request til Skatteetaten sine datatjenester. 

Verdien i denne headeren skal være et Json Web Token (JWT) signert av Altinn. For informasjon rundt hvordan man skaffer et slikt token, sjekk [Altinn: hente token](https://altinn.github.io/docs/guides/samtykke/datakonsument/hente-token/)

Det er ikke nødvendig for virksomheten å lese samtykketoken eller sette seg inn i tokenformatet. For full dokumentasjon av tokenformat se
 [Altinn: tokenformat](https://altinn.github.io/docs/guides/samtykke/datakilde/bruk-av-token/) 
 

| header | forklaring | eksempelverdi |
| ------ | ---------- | ------------- |
| AltinnSamtykke | Base64 encoded JWT samtykketoken fra Altinn | eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkthUGxpMFJUdVVUcl9yUXJWSmhzQkNXQS0yayJ9.eyJTZXJ2aWNlQ29kZXMiOiI0NjI4LDEiLCJBdXRob3JpemF0aW9uQ29kZSI6IjE1MzM0ZTcxLTVhMzEtNDE0Ny05MjA4LTNkYTFlZDYwNTY0OSIsIk9mZmVyZWRCeSI6IjA1MDg4MDAwMTEyIiwiQ292ZXJlZEJ5IjoiOTEwNTE0NDU4IiwiRGVsZWdhdGVkRGF0ZSI6IjE2LjAyLjIwMTcgMTc6MTc6MDYiLCJWYWxpZFRvRGF0ZSI6IjAxLjAxLjIwMTggMjM6NTk6NTkiLCJpc3MiOiJhbHRpbm4ubm8iLCJleHAiOjE0ODgzMDQzMDcsIm5iZiI6MTQ4ODMwNDI3N30.signatur_fjernet |

Samtykketoken er base64-encodet og signert når det hentes fra Altinn sin datatjeneste. Det er bare gyldig i 30 sekunder, men man kan hente nytt token basert på authcoden så ofte man vil. 

Samtykketoken er et JWT token og det finnes gode online verktøy for å lese tokens, f.eks. [jwt.io](https://jwt.io)
