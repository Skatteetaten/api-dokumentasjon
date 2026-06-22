---
title: Forsendelse Åpnet API
slug: /api/forsendelseaapnet
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, innboks, forsendelse, dialogporten ]
keywords: [ forsendelse, innboks, dialogporten ]
last_updated: Jun 22, 2026
hide_table_of_contents: true
---

<Summary>Tjeneste for å markere en forsendelse som åpnet. Når forsendelsen er markert som åpnet vil ikke lenger sluttbruker motta varslinger for forsendelsen.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av API-er for innrapportering](../om/bruk_innrapportering.md)

## Dialogtoken

API'et krevet et dialogtoken i Authorization header for autentisering. Dialogtokenet hentes fra Dialogporten, og er gyldig for én forsendelse i Dialogporten. Det vil si at det må hentes nytt dialogtoken for hver forsendelse.
Informasjon i dialogtokenet benyttes til å knytte åpnet aktiviteten til en bestemt part. 
Les mer om dialogtoken og hvordan det hentes i Dialogporten i [dokumentasjonen for Dialogporten](https://docs.altinn.studio/nb/dialogporten/reference/authorization/dialog-tokens/).

## Teknisk spesifikasjon

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

API-et har ett endepunkt:
 
* __GET__: Knytter en aktivitet til forsendelsen som markerer forsendelsen som åpnet i Altinn og Skatteetatens innboks.

### Respons

Ved vellykket kall vil API-et returnere HTTP statuskode 200 OK.

### Endepunkter

* __Test__: `https://forsendelseaapnet.dialog.skatteetaten-test.no/web/{ordning}/innhold/v1/dialoger/{dialogId}/forsendelser/{forsendelseId}`
* __Prod__: `https://forsendelseaapnet.dialog.skatteetaten.no/web/{ordning}/innhold/v1/dialoger/{dialogId}/forsendelser/{forsendelseId}`

Endepunktet ligger tilgjengelig i forsendelsen man henter fra Dialogporten, i feltet `content.contentReference.value` i JSON-responsen. Eksempel på dette feltet i responsen fra Dialogporten er vist under:

```json
{
  "id": "019b12e4-cabd-7f39-b652-d71a3551c5d3",
  "createdAt": "2025-12-12T14:09:03.3153810Z",
  "content": {
    "contentReference": {
      "value": [
        {
          "value": "https://forsendelseaapnet.dialog.skatteetaten-test.no/web/boligsameie/innhold/v1/dialoger/019b12e2-71e1-7b42-944d-deaca5662d55/forsendelser/019b12e4-cabd-7f39-b652-d71a3551c5d3",
          "languageCode": "nb"
        }
      ],
      "mediaType": "application/vnd.dialogporten.frontchannelembed-url;type=text/html"
    }
  }
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-2">

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne tjenesten kan gi.

| HTTP Statuskode | Feilområde                                   |
|-----------------|----------------------------------------------|
| 500             | Uventet feil på tjenesten                    |
| 401             | Feil i forbindelse med autentisering         |
| 403             | Feil i forbindelse med autorisering          |
| 404             | Finner ikke forespurt ressurs                |
| 405             | HTTP-metode ikke støttet                     |

Feilresponsene inneholder ProblemDetails som presiserer feilen ytterligere.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-3">

### Testmiljøer

Skatteetaten [innboks](https://skatt-test.sits.no/web/innboks/)

Altinn benytter TT02 som testmiljø, hvor følgende tilbys:
* Dialogporten - [Swagger](https://platform.tt02.altinn.no/dialogporten/swagger/index.html#/)
* API for å registere system og systembrukere
* Brukerflate for tilgangsstyring og administrasjon av systembrukere - [Id-porten login](https://am.ui.tt02.altinn.no/accessmanagement/ui/systemuser/overview)
* Altinn Autorisasjon - tilgangskontroll
* Altinn innboks - [Id-porten login](https://af.tt.altinn.no/)

Maskinporten tilbyr eget [testmiljø](https://docs.digdir.no/docs/Maskinporten/maskinporten_func_wellknown). Maskinporten klient skal opprettes på reellt organisasjonsnummer, også i testmiljø.

Konsumenter må ha egne testmiljøer som kan kobles mot testmiljøer hos Skatteetaten og Digdir.

### Testdata

Støtter forsendelser opprettet i Dialogportens testmiljø.

### Oppskrift for test

* Opprett integrasjon mot Dialogportens EndUser API hos Digdir (kontakt Digdir for scope-tilganger) for å:
    * Hente ut forsendelser og dialogtokens.
* Opprett integrasjon mot Forsendelse Åpnet API-et og kall tjenesten. 


</TabItem>
<TabItem headerText="Kontakt oss" itemKey="itemKey-6">

Trenger du faglig eller teknisk brukerstøtte knyttet til integrasjon mot innrapportering av tredjepartsopplysninger kan du kontakte oss via [Brukerstøttetjenesten](https://eksternjira.sits.no/servicedesk/customer/user/login?destination=plugins/servlet/desk/site/global)

</TabItem>
</Tabs>
