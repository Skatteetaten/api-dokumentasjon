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

## Ny samtykkeløsning
Skatteetaten  er i ferd med å migrere relevante API-er til ny samtykkeløsningen i Altinn 3, og API-ene vil i en overgangsperiode støtte både nytt og gammel samtykke. Detaljerer beskrevet i Digdir sin dokumentasjon: 
- [Samtykke i Altinn 3](https://docs.altinn.studio/nb/authorization/what-do-you-get/consent/)
- [Samtykke for datakonsument](https://docs.altinn.studio/nb/authorization/guides/system-vendor/consent/)

For at bankene skal ta i bruk ny samtykke-løsning må de:
- Først [sette opp den nye løsnigen som Datakonsument/Sluttbrukersystem](https://docs.altinn.studio/nb/authorization/getting-started/consent/)
- Deretter [utstede et maskinporten-token med samtykke](https://docs.altinn.studio/nb/authorization/guides/system-vendor/consent/)

For Summert skattegrunnlag API må metadata-objektet i consent-requesten inneholde inntektsår. Eksempel:
```
{
 "id": "95982111-6f94-4845-b3c5-d7c7562305f6",
 "from": "urn:altinn:person:identifier-no:16867298391",
 "to": "urn:altinn:organization:identifier-no:974761076",
 "validTo": "2025-11-10T06:18:12.2597103+00:00",
 "consentRights": [
   {
     "action": ["consent"],
     "resource": [
       {
         "type": "urn:altinn:resource",
         "value": "ske-samtykke-sbl-summert-skattegrunnlag"
       }
     ],
     "metadata": {
       "inntektsaar": "2024"
     }
   }
 ],
 "redirectUrl": "https://www.skatteetaten.no"
}
```

For Inntekt API må metadata-objektet i consent-requesten inneholde fraogtil og tilogmed. Eksempel:
```
{
 "id": "42fff31e-25eb-49e5-8cc3-dc158ad164d2",
 "from": "urn:altinn:person:identifier-no:28846598970",
 "to": "urn:altinn:organization:identifier-no:974761076",
 "validTo": "2025-11-10T06:18:12.2597103+00:00",
 "consentRights": [
   {
     "action": ["consent"],
     "resource": [
       {
         "type": "urn:altinn:resource",
         "value": "ske-samtykke-sbl-inntekt"
       }
     ],
     "metadata": {
       "fraogmed": "2024-01",
       "tilogmed": "2024-12"
     }
   }
 ],
 "redirectUrl": "https://www.skatteetaten.no"
}
```

Den tekniske flyten blir nå slik (oppsummert fra Digdir sin dokumentasjon](https://docs.altinn.studio/nb/authorization/guides/system-vendor/consent/):

1. Be om samtykke i en consent-request med med egengenerert id (uuid)
2. Får respons som bekrefter at samtykke er etterspurt med lenke (viewId) som må aksesseres av parten som skal gi samtykke for å bekrefte at samtykke er avgitt. 
3. Hente samtykke ved å utstede et maskinporten-token der JWT-grantet gjort mot altinn må inneholde et "authorization_details"-claim med informasjon om det konkrete samtykke (blant annet hvem som har avgitt samtykket og den unike IDen fra consent-requestet). Tokenet man får benyttes mot tjenestene våre som et vanlig maskinporten-token men er også informasjonsbærer for samtykket.

## Få tilgang
Før du som konsument kan benytte Skatteetaten API-er som krever samtykke eller fullmakt må du få tilgang til Altinn's samtykkeløsning. Altinn har beskrevet det som skal til for å [komme i gang med samtykke](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/komme-i-gang). Skatteetaten er her datakilden og har på forhånd opprettet ressurser for API-ene. Nærmere informasjon om dette finner du i API-dokumentasjonen. Merk at Skatteetaten ikke benytter tjenesteeierstyrt rettighetsregister.

## Be om samtykke
Når du har fått tilgang til Altinn's samtykkeløsning og API-et til Skatteetaten kan det [bes om samtykke](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/be-om-samtykke). Skatteetaten støtter kun *Forhåndsregistrerte samtykkeforespørsler* og det er heller ikke mulig å overstyre de forhåndsdefinerte tekstene. *Request Message* skal derfor ikke benyttes i forespørselen. 

[![illustrasjon av samtykkeprosessen](../../static/img/samtykke.png)](../../static/img/samtykke.png)

Den overordnetete flyten for samtykkedialogen blir da som følger:
1. Bruker logger seg på nettløsningen for å f.eks. søke om lån eller se sine Krav og betalinger. Konsumenter må dermed ha et samtykke eller fullmakt for å innhente opplysninger på vegne av brukeren.

2. Konsument innhenter samtykket ved å sende en samtykkeforespørsel for bruker til Digdir. Dersom det allerede foreligger et gyldig samtykke som er innenfor utløpstiden (f.eks. 90 dager for *Krav og betalinger*), fortsetter flyten i steg 6.  
 
3. Konsument sender deretter brukeren til samtykkesiden hos Altinn.
 
4. Brukeren blir presentert for samtykkesiden som inneholder en beskrivelse av hva det skal gis samtykke til. Det er Skatteetaten som har definert dette innholdet.

5. Brukeren gir samtykke og sendes tilbake til konsumentens nettsider.

6. Konsumenter hentet et token fra Digdir (Maskinportentoken i Altinn 3 eller samtykketoken i Altinn 2). Samtykketokenet har vanligvis utløpstid på 30 sekunder, men kan innhentes på nytt så lenge samtykket fortsatt er gyldig.

7. Konsument sender med tokenet i forespørslene til API-et.

8. Skatteetaten sjekker tokenet og utleverer dataene.
 
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
