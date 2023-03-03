---
title:  "Overgang til Open API spesifikasjon på delingstjenester fra Skatteetaten"
categories: nyhet
permalink: /overgang-open-api-spec-14012022
tags: [news]
date: 2022-01-14 10:25:00 +0100
---
## Bakgrunn
For å møte det stadig økende behovet for nye delingstjenester jobber Skatteetaten nå med et generelt løft av delingsområdet. Målet er mer bærekraftig og effektiv forvaltning, mer robuste tekniske løsninger og forbedret brukeropplevelse for konsumentene.

Ett av tiltakene som er iverksatt er å migrere alle delingstjenesten over på Open API spesifikasjon (fra XSD i dag), og automatisere utviklingsprosessen mer slik at funksjonell spesifikasjon, teknisk løsning og dokumentasjon alltid skal være i synk.

## Endringer for konsumentene
Overgangen fra XSD til Open API vil først og fremst være en teknisk endring. Faglig og funksjonelt skal det ikke gjøres endringer på tjenestene. 

### Ingen garantert rekkefølge
Med Open API er det ikke lenger mulig å garantere rekkefølgen på elementene i modellen. Dette er i tråd med bruksvilkårene, men konsumenter som i sin implementasjon har lagt opp til at elementene skal komme i en gitt rekkefølge må endre på dette.

### Tjenestespesifikke endringer
Pga av tidligere svakheter i modelleringen og oppbygningen av XSD'ene i tjenestene, har det i en del særtilfeller vært nødvendig å gjøre endringer som medfører at Open API spesifikasjonen ikke samsvarer en til en med XSD'en. Dette vil medføre behov for å gjøre endringer i konsumentenes klientkode ved migrering. Avvik av denne typen vil bli varslet spesifikt for hver tjeneste.

### XSD'ene fjernes
Ved overgang til Open API spesifikasjon, vil XSD'ene som er benyttet til nå, bli fjernet. 

## Gjennomføring
Tjenestene vil migreres til Open API spesifikasjon på litt ulike tidspunkt fremover. Målet er å ha alle tjenestene over på Open API spesifikasjonen før sommeren 2022.

De første Open API spesifikasjonene vil komme samtidig med ny årsrevisjon av API'ene. Dette gjør vi for at konsumentene skal slippe å gjøre endringer på tjenestene flere ganger. Følgende API'er blir tilgjengelig  med Open API spesifikasjon medio februar:
* Avregning API
* Beregnet Skatt API 
* PGI API
* Skatteplikt API
* Summert skattegrunnlag API 
* Tilgjengeligdata API

Vi kommer til å publisere Open API spesifikasjonene på [Swaggerhub](https://app.swaggerhub.com/apis/Skatteetaten_Deling/)

## Fremtidig endringer
Som en del av det generelle løfter av delingsområdet, vil det også komme flere endringer og forbedringer i tiden fremover.

### Swaggerhub
Swaggerhub vil fremover benyttes for å publisere endringer på API'ene. 

### API-gateway
Skatteetaten jobber med å etablere en API-gateway for bedre overvåking og trafikkstyring. Dette er en teknisk endring internt hos Skatteetaten, men kan medføre endinger for konsumentene, dersom det blir nødvendig å endre endpoint for tjenestene.
