---
title: Samtykke
slug: /om/samtykke
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Samtykke,Sikkerhet]
keywords: [datatables, tables, grids, markdown, multimarkdown, jquery plugins]
last_updated: Nov 24, 2022
hide_table_of_contents: true
---
<Summary> Skatteetaten tilbyr samtykkebasert datauthenting basert på Altinn sin løsning for digitalt samtykke.</Summary>

[![illustrasjon av samtykkeprosessen](../../static/img/samtykke.png)](../../static/img/samtykke.png)

## Få tilgang
Før du som konsument kan benytte Skatteetaten API-er som krever samtykke eller fullmakt må du få tilgang til Altinn's samtykkeløsning. Altinn har beskrevet det som skal til for å [komme i gang med samtykke](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/komme-i-gang). Skatteetaten er her datakilden og har på forhånd opprettet tjenestekoder og tjenesteutgavekoder for API-ene. Nærmere informasjon om dette finner du i API-dokumentasjonen. Merk at Skatteetaten ikke benytter tjenesteeierstyrt rettighetsregister.

## Be om samtykke
Når du har fått tilgang til Altinn's samtykkeløsning og API-et til Skatteetaten kan det [bes om samtykke](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/be-om-samtykke). Skatteetaten støtter kun *Forhåndsregistrerte samtykkeforespørsler* og det er heller ikke mulig å overstyre de forhåndsdefinerte tekstene. *Request Message* skal derfor ikke benyttes i forespørselen. 

Den overordnetete flyten for samtykkedialogen blir da som følger:
1. Bruker logger seg på nettløsningen for å f.eks. søke om lån eller se sine Krav og betalinger. Konsumenter må dermed ha et samtykke eller fullmakt for å innhente opplysninger på vegne av brukeren.

2. Konsument innhenter samtykket ved å sende en samtykkeforespørsel for bruker til Altinn med *ServiceCode* og *ServiceCodeEdition* for de aktuelle tjenestene og mottar en *AuthorizationCode*. Dersom det allerede foreligger et gyldig samtykke som er innenfor utløpstiden (f.eks. 90 dager for *Krav og betalinger*), fortsetter flyten i steg 6.  
 
3. Konsument sender deretter brukeren til samtykkesiden hos Altinn med *Authorization Code* fra samtykkeforespørselen og en *RedirectURL*, som er en lenke til siden brukeren skal sendes tilbake til etter at samtykket er gitt.
 
4. Brukeren blir presentert for samtykkesiden som inneholder en beskrivelse av hva det skal gis samtykke til. Det er Skatteetaten som har definert dette innholdet.

5. Brukeren gir samtykke og sendes tilbake til konsumentens nettsider på *Redirect URL-en* som ble oppgitt.

6. Konsument [henter et Samtykketoken](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/hente-token) fra Altinn ved bruk av *Authorization Code*. Samtykketokenet har vanligvis utløpstid på 30 sekunder, men kan innhentes på nytt med samme *AuthorizationCode* så lenge samtykket fortsatt er gyldig.

7. Konsument sender med samtykketokenet i forespørslene til API-et gjennom å sette en HTTP-headerverdi: `AltinnSamtykke: <samtykketoken>`. Forespørselen må også inneholde et [Maskinporten-token](./sikkerhet.md).

8. Skatteetaten sjekker Maskinporten- og Samtykketoken og utleverer dataene.
 
<InfoMessageBar>

Samtykkedialogen kan ikke innpakkes i en iFrame eller annen branding som er egnet til å utydeliggjøre domenet samtykkedialogen foregår på (som er altinn + idporten). Dette er begrunnet med et potensielt misbruksscenario beskrevet i [OAuth2-spesifikasjonen](https://tools.ietf.org/html/draft-ietf-oauth-v2-23#section-10.13) (clickjacking)
 
 </InfoMessageBar>

## Fjerne samtykke

En bruker kan også [fjerne et samtykke](https://info.altinn.no/hjelp/profil/samtykke/), og dette gjøres på brukerens profil i Altinn. 


## Tjenester med støtte for samtykke

Følgende API-er hos Skatteetaten støtter utlevering gjennom samtykke eller fullmakt for enkelte rettighetspakker. Detaljer om parameterne som er nødvendig for å få utstedt samtykker eller fullmakt er beskrevet i dokumentasjonen for hvert enkelt api.

Samtykke fra skatteyter:
  - [Inntekt API](../api/inntekt.md)
  - [Summert skattegrunnlag API](../api/summertskattegrunnlag.md)
    
Samtykke fra virksomhet:
  - [Krav og betalinger API](../api/kravogbetalinger.md)
  - [Arbeidsgiveravgift API](../api/arbeidsgiveravgift.md)
  - [Mva meldingsopplysning API](../api/mva_meldingsopplysning.md)
  - [Oppdrag utenlanske virksomheter API](../api/oppdragutenlandskevirksomheter.md)
  - [Restanser API](../api/restanser.md)

Se egen dokumentasjon for [hvordan teste med samtykke](../test/testavsamtykke.md).
