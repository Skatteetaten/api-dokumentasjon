---
title: Sikkerhet
slug: /om/sikkerhet
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Sikkerhet,Maskinporten,Delegering]
keywords: [security,sikkerhet]
last_updated: Feb 9, 2026
hide_table_of_contents: true
---
<Summary>Informasjon om nødvendige sikkerhetsmekanismer, autentisering og autorisasjon.</Summary>

## Maskinporten

Alle Skatteetatens eksterne API-er benytter [Maskinporten fra Digdir](https://samarbeid.digdir.no/maskinporten/maskinporten/25) for autentisering av virksomheter for maskin-til-maskin grensesnitt. Autentisering basert på kun virksomhetsertifikat støttes ikke lenger.

Digitaliseringsdirektoratet har beskrevet hvordan API-sikring med Maskinporten gjøres. Vi anbefaler alle virksomheter å sette seg godt inn i dette rammeverket. For å komme i gang med testing må det gjøres noen forberedelser hos virksomheten.

### Ta kontakt med Digitaliseringsdirektoratet for å få tilgang til Maskinporten
Bestill tilknytning til Maskinporten via [Digdir samarbeidsportal](https://samarbeid.digdir.no/)
  
### Klargjøring fra Skatteetaten
Så snart korrekt API og rettighetspakke for virksomheten er avklart, vil Skatteetaten melde inn virksomhetens organisasjonsnummer og tilgangen hos Digitaliseringsdirektoratet. 

### Klargjøring fra Virksomheten
Når virksomheten har fått beskjed at tilgangen (scopet) er opprettet i Maskinporten må tilgangen provisjoneres fra den klienten virksomheten skal benytte for å hente data. Dette gjøres ved å oppdatere Oauth2 klienten som skal ha tilgangen med det nye scopet, via [ID-porten sitt API for selvbetjening av integrasjoner](https://docs.digdir.no/oidc_api_admin_maskinporten) eller via et brukergrensesnitt i samarbeidsportalen. All kommunikasjon mot Maskinporten er sikret med "server-to-server oauth2" med bruk av virksomhetssertifikat. For test trenger man et testsertifikat av typen 'signering'. Når dette er gjort kan man begynne å bruke skatteetatatens API-er.

### Bruke Skatteetatens API-er med token fra Maskinporten
All kommunikasjon mellom virksomheten, Maskinporten og Skatteetaten gjøres over HTTPS (TLS). Bruk av REST-API-er hos Maskinporten er sikret med "server-to-server oauth2", se mer informasjon om dette her: [Digidr oauth2](https://docs.digdir.no/oidc_auth_server-to-server-oauth2).

**Overordnet gjøres følgende:**
1. Først gjøres et kall til Maskinporten for å få et token som kan brukes mot Skatteetaten. Fremgangsmåten er beskrevet på [Digdir sine side for hvordan bruke Maskinporten som konsument](https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-som-konsument). Merk at "Resource" er valgfri og skal ikke settes for Skatteetatens API. Dette medfører at audience blir "unspecified" - som Skatteetaten forventer.
2. Tokenet legges ved kallet i "Authorization"-headeren slik: `Authorization: Bearer <token>`
3. Skatteetaten validerer tokenet og at virksomheten har rett til den informasjonen de prøver å hente (tilgangskontroll).
4. Hvis alt er OK returneres data iht. forespørselen.

### Delegere rettigheter i Altinn
Se egen side for informasjon om [hvordan opptre på vegne av en annen virksomhet](./delegering.md).

### Systemtilgang med systembruker
Se egen side for informasjon om [systemtilgang for systembruker](./systembruker.md).

## Brannmur

Hvis man kaller tjenestene fra bak en utgående brannmur må man lage åpninger i brannmuren sin.

### Adresser det må åpnes for

Vi anbefaler at brannmuråpninger for trafikk mot Skatteetatens API-er baseres på FQDN/hostname (hostbasert åpning), ikke på IP-adresser.

Skatteetaten forbereder en overgang til skyplattform for API-er. I den forbindelse vil det ikke lenger være mulig å garantere stabile og statiske IP-adresser over tid av driftsmessige og tekniske årsaker, som for eksempel ved failover, skalering, vedlikehold eller endringer i underliggende infrastruktur.

URL-er/hostnavn vil være stabile og endringer varsles på forhånd. IP-adresser holdes stabile i den grad det er mulig, men endringer kan forekomme under normal drift vil da ikke forhåndsvarsles.

Der man likevel ønsker å åpne for IP-adresser i brannmur er det adressene i tabellen under som er gjeldende. Alle API-er som er under "api.skatteetaten.no" eller "api.skatteetaten-test.no" vil kunne ha IPer som endres. Mulig endring av IPer er normal teknisk drift som kan skje under failover eller andre tekniske grunner, så tabellen under er best effort.


| Miljø | Host | IPv4 | IPv6 | 
|---|---|---|---|
| Test | *.api.skatteetaten-test.no | 51.13.21.170/32 <br />51.13.43.236/32 <br />159.216.17.128/27 | 2a13:6201::/32 |
| Prod | *.api.skatteetaten.no | 20.100.51.138/32 <br />51.13.39.98/32 <br />159.216.17.160/28 | 2a13:6200::/32 |
