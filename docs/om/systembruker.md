---
title: Systembruker
slug: /om/systembruker
folder: om
sidebar: mydoc_sidebar
sidebar_class_name: hidden #
datatable: true
tags: [Systembruker,Systemtilgang,Sikkerhet]
keywords: [datatables, tables, grids, markdown, multimarkdown, jquery plugins]
last_updated: Feb 28, 2025
hide_table_of_contents: true
---
<Summary> Bruk av systembruker for Sluttbrukersystemer.</Summary>

På denne siden sammenfattes stegene som må til for å komme i gang med systembruker. 

1.	*Maskinporten onboarding*: For å bruke både Skatteetatens og Digdirs API trenger du tilgang til Maskinporten for autentiseringen. Det gjøres gjennom å kontakte Digdir og følge deres [onboardingsprosess](https://onboarding.maskinporten.no/)

2.	*API-tilganger*: Så trenger du tilgang til API (scopes) både hos Skatteetaten og Digdir: 
  a.	Skatteetaten må gi tilgang til sitt API f.eks. Krav og betalinger eller Innrapportering, og du kan skaffe deg tilgang [her](../om.md). Du finner informasjon om scope det skal bes tilgang til i dokumentasjonen for det enkelte API.
  b.	Digdir(inkl Altinn) må gi tilgang til sine API. Det må bestilles av dem (Lenke). Sørg for å bestille følgende tilganger:
      -	`altinn:authentication/systemregister.write`
      -	`altinn:authentication/systemuser.request.read`
      -	`altinn:authentication/systemuser.request.write`
  	  - `dialogporten scopes?`

3.	*Maskinporten klient:* Når du har fått tilgang til scopene må det lages en Maskinporten-klient (også kjent som Integrasjon) – dette kan entes gjøres i Digdirs samarbeidsportal eller vba. API. Denne klienten må gis tilgang til scopene ovenfor og kan deretter benyttes for å få utstedt token/autentiseringsbevis.

4.	*Registrere system i systemregisteret:* For å kunne benytte sluttbrukersystemet mot Skatteetatens API må det først registreres i Digdirs systemregister. Dette kan gjøres via API (se lenke). Systemet må knyttes til Maskinporten-klienten (client id) i punkt 4.

    Eksempel på registrering:
```json
   {
    "id": "974761076_skatt_demo_system",
    "vendor": {
        "ID": "0192:974761076"
    },
    "name": {
        "nb": "Skatteetatens Test SBS",
    },
    "description": {
        "nb": "En beskrivelse av systemet",
    },
    "rights": [
        {
            "resource": [
                {
                    "id": "urn:altinn:resource",
                    "value": "ske-innrapportering-boligselskap"
                }
            ]
        }
    ],
    "clientId": [
        "e6c868ef-d9d6-4847-ba25-409bbd040540" 
    ],
    "isVisible": true,
    "allowedRedirectUrls": []
}
```

5.	*Kunden må gi systemet tilgang:* Du kan nå be kunden om å opprette en systemtilgang gjennom å opprette en [tilgangsforespørsel](https://docs.altinn.studio/nb/authentication/guides/systemauthentication-for-systemproviders/#sende-forespørsel-om-opprettelse-av-systembruker-til-virksomhet)

Eksempel på registrering:
```json
{
  "externalRef": "min_ref",
  "systemId": "974761076_skatt_demo_system",
  "partyOrgNo": "57623423",
  "rights": [
    {
      "resource": [
        {
          "value": "ske-innrapportering-boligselskap",  
          "id": "urn:altinn:resource"
        }
      ]
    }
  ],
  "redirectUrl": "https://skatteetaten.no/sbs"
}
```

6.	*Maskinporten autentisering:* Når systemet har gitt tilgang kan du få utstedt et Maskinporten token med systembruker gjennom klienten som ble opprettet i punkt 3. Token må inneholde Skatteetatens scope og systembrukerinformasjon. 

7.	*Bruke Skatteetatens API:* Tilslutt kan du kalle Skatteeatens API med tokenet fra punkt 6. i `Authorization`-headeren.
 
Nyttige adresser i denne prosessen:
* Digdirs service desk: - for feil knyttet til Maskinporten
