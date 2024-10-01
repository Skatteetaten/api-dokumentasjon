---
title: Sikkerhet
slug: /om/sikkerhet
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Sikkerhet,Maskinporten,Delegering]
keywords: [security,sikkerhet]
last_updated: Nov 24, 2022
hide_table_of_contents: true
---
<Summary>Informasjon om nødvendige sikkerhetsmekanismer, autentisering og autorisasjon.</Summary>

## Maskinporten

Alle Skatteetatens eksterne tjenester benytter [Maskinporten fra Digdir](https://samarbeid.digdir.no/maskinporten/maskinporten/25) for autentisering av virksomheter for maskin-til-maskin grensesnitt. Autentisering basert på kun virksomhetsertifikat støttes ikke lenger.

Digitaliseringsdirektoratet har beskrevet hvordan API-sikring med Maskinporten gjøres. Vi anbefaler alle virksomheter å sette seg godt inn i dette rammeverket. For å komme i gang med testing må det gjøres noen forberedelser hos virksomheten.

### Ta kontakt med Digitaliseringsdirektoratet for å få tilgang til Maskinporten
Bestill tilknytning til Maskinporten via [Digdir samarbeidsportal](https://samarbeid.digdir.no/)
  
### Klargjøring fra Skatteetaten
Så snart korrekt tjeneste og rettighetspakke for virksomheten er avklart, vil Skatteetaten melde inn virksomhetens organisasjonsnummer og tilgangen hos Digitaliseringsdirektoratet. 

### Klargjøring fra Virksomheten
Når virksomheten har fått beskjed at tilgangen (scopet) er opprettet i Maskinporten må tilgangen provisjoneres fra den klienten virksomheten skal benytte for å hente data. Dette gjøres ved å oppdatere Oauth2 klienten som skal ha tilgangen med det nye scopet, via [ID-porten sitt API for selvbetjening av integrasjoner](https://docs.digdir.no/oidc_api_admin_maskinporten) eller via et brukergrensesnitt i samarbeidsportalen. All kommunikasjon mot Maskinporten er sikret med "server-to-server oauth2" med bruk av virksomhetssertifikat. For test trenger man et testsertifikat av typen 'signering'. Når dette er gjort kan man begynne å bruke skatteetatatens API-er.

### Bruke Skatteetatens API-er med token fra Maskinporten
All kommunikasjon mellom virksomheten, Maskinporten og Skatteetaten gjøres over HTTPS (TLS). Bruk av REST-API-er hos Maskinporten er sikret med "server-to-server oauth2", se mer informasjon om dette her: [Digidr oauth2](https://docs.digdir.no/oidc_auth_server-to-server-oauth2).

**Overordnet gjøres følgende:**
1. Først gjøres et kall til Maskinporten for å få et token som kan brukes mot Skatteetaten. Fremgangsmåten er beskrevet på [Digdir sine side for hvordan bruke Maskinporten som konsument](https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-som-konsument). Merk at "Resource" er valgfri og skal ikke settes for Skatteetatens API. Dette medfører at audience blir "unspecified" - som Skatteetaten forventer.
2. Tokenet legges ved kallet i "Authorization"-headeren slik: `Authorization: Bearer <token>`
3. Skatteetaten validerer tokenet og at virksomheten har rett til den informasjonen de prøver å hente (tilgangskontroll).
4. Hvis alt er OK returneres data iht. forespørselen.

### Delegere rettigheter i Altinn ###
Se egen side for informasjon om [hvordan opptre på vegne av en annen virksomhet](./delegering.md).

## Brannmur

Hvis man kaller tjenestene fra bak en utgående brannmur må man lage åpninger i brannmuren sin.

### Adresser det må åpnes for

Vi forsøker å holde IP statisk, men kan ikke love at det aldri vil komme endringer.
Hvis vi må gjøre endringer vil dette bli varslet som en [nyhet](/nyheter-og-driftsvarsler/).

#### Nye URL-er
Det kan være at enkelte virksomheter må åpne i brannmurreglene sine. IP-range vil være:

| Miljø | Host | IP | Port | 
|---|---|---|---|
| Test | *.api.skatteetaten-test.no | 20.100.51.138 / 2a13:6200:1065:13d:f5:52a2:e633:8625 |
| Prod | *.api.skatteetaten.no | 51.13.21.170 / 2a13:6201:1066:c63:f5:fc5f:3c74:30c0 |

#### Gamle URL-er
| Miljø | Host | IP | Port | 
|---|---|---|---|
| Test | api-test.sits.no | 159.216.17.148 | 443|
| Produksjon | api.skatteetaten.no | 159.216.17.168 | 443|

Gamle URL-er vil saneres 17. oktober.

### Subnett

Hvis man heller ønsker et brannmur oppsett som ikke vil kreve endringer så kan man åpne mot hele Skatteetaten sitt subnett for eksterne.
Dette innebærer at man åpner mot alle eksternt rettede tjenester Skatteetaten tilbyr (som for eksempel folkeregisteret).

| Miljø | Subnett | Port | 
|---|---|---|
| Preprod miljø (Test++) | 159.216.17.128/27 | 443 |
| Produksjon (Prod) | 159.216.17.160/28 | 443 |
