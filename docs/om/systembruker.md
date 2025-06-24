---
title: Systembruker
slug: /om/systembruker
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Systembruker,Systemtilgang,Sikkerhet]
keywords: [datatables, tables, grids, markdown, multimarkdown, jquery plugins]
last_updated: Feb 28, 2025
hide_table_of_contents: true
---
<Summary> Bruk av systembruker for Sluttbrukersystemer.</Summary>

På denne siden sammenfattes stegene som må til for å komme i gang med systembruker. 
Se også [veiledning på skatteetaten.no](https://www.skatteetaten.no/samarbeidspartnere/reetablering-altinn/systemleverandor/oppkobling/).

## Steg for steg

1.	**Maskinporten onboarding:** For å bruke både Skatteetatens og Digdirs API trenger du tilgang til Maskinporten for autentiseringen. Digdir har laget en side som beskriver hva som må til for å [komme i gang i test](https://samarbeid.digdir.no/altinn/kom-i-gang-i-testmiljoet-tt02/2868).

2.	**API-tilganger**: Så trenger du tilgang til API (scopes) både hos Skatteetaten og Digdir: 
  * Skatteetaten må gi tilgang til vårt API f.eks. Krav og betalinger eller Innrapportering Boligselskap, og du kan skaffe deg tilgang [her](../komigang.md). Du finner informasjon om scope det skal bes om tilgang til i dokumentasjonen for det enkelte API.
  *	Digdir(inkl Altinn) må gi tilgang til sine API. Det må bestilles av [dem](https://altinn.studio/contact). Sørg for å bestille følgende tilganger:
      -	`altinn:authentication/systemregister.write`
      -	`altinn:authentication/systemuser.request.read`
      -	`altinn:authentication/systemuser.request.write`
  	   - `digdir:dialogporten`

3.	**Maskinporten klient:** Når du har fått tilgang til scopene, må det lages en Maskinporten-klient (også kjent som *Integrasjon* i Digdirs beskrivelser) – du kan opprette denne enten i Digdirs [Samarbeidsportal](https://sjolvbetjening.test.samarbeid.digdir.no/auth/login). Maskinporten-klienten du har satt opp, må få tildelt scopene ovenfor og kan deretter benyttes for å få utstedt token/autentiseringsbevis.

4.	**Registrere system i systemregisteret:** For å kunne benytte sluttbrukersystemet mot Skatteetatens API må det først registreres i Digdirs systemregister. Dette kan gjøres via [API](https://docs.altinn.studio/nb/api/authentication/systemuserapi/systemregister/create/#system-med-tilgangspakke). Systemet må knyttes til Maskinporten-klienten (client id) i punkt 3. Hvilke(n) systemtilgang(er), også kjent som tilgangspakke (accesspackage), som skal oppgis, er beskrevet i API-dokumentasjon hos Skatteetaten. 

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
    "accessPackages": [
        {
            "urn": "urn:altinn:accesspackage:regnskapsforer-med-signeringsrettighet"
        },
        {
            "urn": "urn:altinn:accesspackage:skattegrunnlag"
        }
    ],
    "clientId": [
        "e6c868ef-d9d6-4847-ba25-409bbd040540" 
    ],
    "isVisible": true,
    "allowedRedirectUrls": [
        "https://skatteetaten.no/sbs"
    ]
}
```

5.	**Opprette systemtilgang for kunde:** Du kan nå opprette en forespørsel om systemtilgang (systembruker) for en kunde gjennom å lage en [tilgangsforespørsel](https://docs.altinn.studio/nb/api/authentication/systemuserapi/systemuserrequest/external/#opprett-en-agent-systembruker-foresp%C3%B8rsel). Som svar på tilgangsforespørsel vil du motta en url for godkjenning som kunde må benytte i neste steg. Du kan se skjermbilde av hvordan dette ser ut for kunden nederst på siden. 

```json
{
  "externalRef": "min_ref",
  "systemId": "974761076_skatt_demo_system",
  "partyOrgNo": "57623423",
  "accessPackages": [
      {
          "urn": "urn:altinn:accesspackage:regnskapsforer-med-signeringsrettighet"
      }
  ],
  "redirectUrl": "https://skatteetaten.no/sbs"
}
```

6. **Kunde godkjenner tilgangsforespørsel og knytter systemtilgangen til klienter:** Ansvarlig hos kunde må logge inn i portalen via url fra punkt 5. og [godkjenne](https://docs.altinn.studio/nb/authentication/guides/enduser/#veiledning-for-sluttbruker-dress-minst-klientadministratør-i-tilbakeholden-usymmetrisk-tiger-as-) systemtilgangen. Når systemtilgangen er godkjent kan kunde logge inn i Altinn-portalen og knytte klienter til systemtilgangen.  

7. **Maskinporten autentisering:** Når kunden har opprettet en systemtilgang til deg som systemleverandør, kan du kan du få utstedt et [Maskinporten-token](https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument) med systembruker gjennom klienten som ble opprettet i punkt 3. Token må inneholde Skatteetatens scope og systembrukerinformasjon.

Eksempel på et slikt token (dekodet vha. [jwt.io](https://jwt.io/) ) - *Token skal sendes i sin enkodete form - utpakket her for lesbarhet.*
```json
{
  "authorization_details": [
    {
      "type": "urn:altinn:systemuser",
      "systemuser_org": {
        "authority": "iso6523-actorid-upis",
        "ID": "0192:313367002"
      },
      "systemuser_id": [
        "33a0911a-5459-456f-bc57-3d37ef9a016c"
      ],
      "system_id": "974761076_skatt_demo_system"
    }
  ],
  "scope": "skatteetaten:innrapporteringboligselskap",
  "iss": "https://test.maskinporten.no/",
  "client_amr": "virksomhetssertifikat",
  "token_type": "Bearer",
  "exp": 1740737667,
  "iat": 1740737547,
  "client_id": "e6c868ef-d9d6-4847-ba25-409bbd040540",
  "jti": "6vc-gdzU3lC7XkBlR9WLxsyB8QKBwBk_FhwmdsL_6BE",
  "consumer": {
    "authority": "iso6523-actorid-upis",
    "ID": "0192:974761076"
  }
}
```

8. **Bruke Skatteetatens API:** Når dette er gjort, kan du kalle Skatteeatens API med tokenet fra punkt 6. i `Authorization`-headeren. Merk at et Maskinporten kan gjenbrukes over utløpstiden (som oftest 2 min), 

## Nyttige ressurser i denne prosessen:
* [Digdirs service desk](https://samarbeid.digdir.no/digital-postkasse/kontakt-oss/83): - for spørsmål og feilmeldinger knyttet til Maskinporten, IdPorten m.m.
* [Altinn service desk](https://altinn.studio/contact): - for spørsmål og feilmeldinger knyttet til Altinn autorisasjon, Dialogporten, Systemregister m.m.
* [Systembruker for virksomheter](https://docs.altinn.studio/authentication/systemauthentication/) - overordnet beskrivelse av Systembruker
