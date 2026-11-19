---
title: Asynkrone innsendingstjenester for innrapportering skattemelding API
slug: /api/innrapportering-skattemelding-innsending-asynkront
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding, asynkront]
keywords: [skattemelding]
last_updated: Oct 22, 2026
hide_table_of_contents: false
unlisted: true
---

# Asynkront API V2

## Hvem skal bruke asynkront API
Det asynkrone API-et er laget for beregninger som tar for lang tid til at dere kan bruke de synkrone endepunktene som er
beskrevet på de andre sidene for innrapportering av skattemelding.
Alle som har en næringsspesifikasjon som er større enn 10MB skal bruke API-ene beskrevet her.

### Grenser på størrelser for bruk av asynkront API
- Minimum størrelse på Base64-enkodet næringsspesifikasjon er 1 MB
  - OBS: I testmiljøet er det ingen begrensning på størrelsen til næringsspesifikasjonen, så dere kan bruke asynkront API selv om den er mindre enn 1 MB.
- Base64-enkodet næringsspesifikasjon som er større enn 10 MB må bruke asynkront API
- Maksimal størrelse på hele konvolutten er 500 MB

## Beskrivelse av bruksmønster
1. Opprett eller gjenbruk en åpen instans i Altinn3-appen `skd/formueinntekt-skattemelding-v2`
2. `/skd/formueinntekt-skattemelding-v2/instances/<instanceOwnerPartyId>/<instanceGuid>/data/type/skattemeldingOgNaeringsspesifikasjon`
   Last opp konvolutten med skattemeldingen og næringsspesifikasjonen. Størrelsen på konvolutten kan være opp til 500MB.
3. `/api/skattemelding/v2/jobb/altinn/<inntektsaar>/<identifikator>/start`
   Når en skal gjøre en validering, så må en egen valideringsjobb startes. I forespørselen sender du med appId og instansId fra Altinn hvor konvolutten ligger lagret.
4. `/api/skattemelding/v2/jobb/altinn/<inntektsaar>/<identifikator>/<jobbId>/status`
   Henter status på valideringsjobben mens den kjører.
5. `/api/skattemelding/v2/jobb/altinn/<inntektsaar>/<identifikator>/<jobbId>/resultat`
   Når valideringen er ferdig så vil en kunne hente ned hele valideringsresultatet.
6. Send inn via Altinn. Når valideringen er validert ok, så brukes samme instans til å sende inn skattemeldingen.

Alle endepunkt for asynkront API støtter autorisering med både Maskinporten via systembruker og ID-Porten.

## 1. Opprett instans i Altinn
Bruk Altinn3-applikasjonen `skd/formueinntekt-skattemelding-v2` for å opprette instans.

Oppretting av instans gjøres på samme måte som i [Altinn3-app for innsending](../api/innrapportering-skattemelding-innsending?tab=Altinn3-app+for+innsending#1--opprettelse-av-instans-i-altinn3).
Gjenbruk en eksisterende instans når det er mulig.

## 2. Last opp konvolutt med skattemelding og næringsspesifikasjon
Opplasting av konvolutten gjøres på Altinn-instansen. Se dokumentasjon hos Altinn: https://docs.altinn.studio/nb/api/apps/data-elements/

Altinn3-applikasjonen `skd/formueinntekt-skattemelding-v2` har en dataType `skattemeldingOgNaeringsspesifikasjon` som kan brukes til å laste opp konvolutten.
Konvolutten kan ha en maksimal størrelse på 500MB.

Ved gjenbruk av instans, må dere enten slette eksisterende dataType `skattemeldingOgNaeringsspesifikasjon` eller erstatte data på dataelementet.
For å erstatte data på et eksisterende dataelement i Altinn kan dere gjøre et PUT-kall som beskrevet på https://docs.altinn.studio/nb/api/apps/data-elements/#replace-data.

### Eksempelkall i testmiljøet:
```bash
curl -X POST 'https://tt02.altinn.no/skd/formueinntekt-skattemelding-v2/instances/<instanceOwnerPartyId>/<instanceGuid>/data/type/skattemeldingOgNaeringsspesifikasjon' \
-H 'Content-Disposition: attachment; filename=skattemeldingOgNaeringsspesifikasjon.xml' \
-H 'Content-Type: text/xml' \
-H 'Authorization: Bearer {{token}}' \
--data-raw $'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<skattemeldingOgNaeringsspesifikasjonRequest xmlns="no:skatteetaten:fastsetting:formueinntekt:skattemeldingognaeringsspesifikasjon:request:v2">\n  <dokumenter>\n    <dokument>\n      <type>skattemeldingUpersonlig</type>\n      <encoding>utf-8</encoding>\n      <content>{{placeholderSme}}</content>\n    </dokument>\n    <dokument>\n      <type>naeringsspesifikasjon</type>\n      <encoding>utf-8</encoding>\n      <content>{{placeholderNsp}}</content>\n    </dokument>\n  </dokumenter>\n  <dokumentreferanseTilGjeldendeDokument>\n    <dokumenttype>skattemeldingUpersonlig</dokumenttype>\n    <dokumentidentifikator>{{placeholderSmeId}}</dokumentidentifikator>\n  </dokumentreferanseTilGjeldendeDokument>\n  <inntektsaar>{{placeholderInntektsaar}}</inntektsaar>\n  <innsendingsinformasjon>\n    <innsendingstype>komplett</innsendingstype>\n    <opprettetAv>{{placeholderSBSNavn}}</opprettetAv>\n    <tin>{{placeholderTin}}</tin>\n  </innsendingsinformasjon>\n</skattemeldingOgNaeringsspesifikasjonRequest>'
```

**Respons body:**

```json
{
  "id": "{dataId}",
  "instanceGuid": "{instanceGuid}",
  "dataType": "skattemeldingOgNaeringsspesifikasjon",
  "filename": "skattemeldingOgNaeringsspesifikasjon.xml",
  "contentType": "text/xml",
  "blobStoragePath": "skd/formueinntekt-skattemelding-v2/{instanceGuid}/data/{dataId}",
  "selfLinks": {
    "apps": "https://skd.apps.tt02.altinn.no/skd/formueinntekt-skattemelding-v2/instances/{partyId}/{instanceGuid}/data/{dataId}",
    "platform": "https://platform.tt02.altinn.no/storage/api/v1/instances/{partyId}/{instanceGuid}/data/{dataId}"
  },
  "size": 123,
  "contentHash": null,
  "locked": false,
  "refs": null,
  "isRead": true,
  "tags": [],
  "deleteStatus": null,
  "fileScanResult": "Pending",
  "references": null,
  "created": "2025-05-09T08:08:57.0736662Z",
  "createdBy": "1450179",
  "lastChanged": "2025-05-09T08:08:57.073666Z",
  "lastChangedBy": "1450179"
}
```

### Eksempel på erstatning av data på eksisterende dataelement
```bash
curl -X 'PUT' 'https://tt02.altinn.no/skd/formueinntekt-skattemelding-v2/instances/<instanceOwnerPartyId>/<instanceGuid>/data/<dataGuid>' \
  -H 'Content-Disposition: attachment; filename=skattemeldingOgNaeringsspesifikasjon.xml' \
  -H 'Content-Type: text/xml' \
  -H 'Authorization: Bearer <token>' \
  --data-raw $'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<skattemeldingOgNaeringsspesifikasjonRequest xmlns="no:skatteetaten:fastsetting:formueinntekt:skattemeldingognaeringsspesifikasjon:request:v2">\n  <dokumenter>\n    <dokument>\n      <type>skattemeldingUpersonlig</type>\n      <encoding>utf-8</encoding>\n      <content>{{placeholderSme}}</content>\n    </dokument>\n    <dokument>\n      <type>naeringsspesifikasjon</type>\n      <encoding>utf-8</encoding>\n      <content>{{placeholderNsp}}</content>\n    </dokument>\n  </dokumenter>\n  <dokumentreferanseTilGjeldendeDokument>\n    <dokumenttype>skattemeldingUpersonlig</dokumenttype>\n    <dokumentidentifikator>{{placeholderSmeId}}</dokumentidentifikator>\n  </dokumentreferanseTilGjeldendeDokument>\n  <inntektsaar>{{placeholderInntektsaar}}</inntektsaar>\n  <innsendingsinformasjon>\n    <innsendingstype>komplett</innsendingstype>\n    <opprettetAv>{{placeholderSBSNavn}}</opprettetAv>\n    <tin>{{placeholderTin}}</tin>\n  </innsendingsinformasjon>\n</skattemeldingOgNaeringsspesifikasjonRequest>'
```
**Respons body:**

```json
{
  "id": "{dataId}",
  "instanceGuid": "{instanceGuid}",
  "dataType": "skattemeldingOgNaeringsspesifikasjon",
  "filename": "skattemeldingOgNaeringsspesifikasjon.xml",
  "contentType": "text/xml",
  "blobStoragePath": "skd/formueinntekt-skattemelding-v2/{instanceGuid}/data/{dataId}",
  "selfLinks": {
    "apps": "https://skd.apps.tt02.altinn.no/skd/formueinntekt-skattemelding-v2/instances/{partyId}/{instanceGuid}/data/{dataId}",
    "platform": "https://platform.tt02.altinn.no/storage/api/v1/instances/{partyId}/{instanceGuid}/data/{dataId}"
  },
  "size": 123,
  "contentHash": null,
  "locked": false,
  "refs": null,
  "isRead": true,
  "tags": [],
  "deleteStatus": null,
  "fileScanResult": "Pending",
  "references": null,
  "created": "2025-05-09T08:08:57.0736662Z",
  "createdBy": "1450179",
  "lastChanged": "2025-05-09T08:08:57.073666Z",
  "lastChangedBy": "1450179"
}
```

### Hent status på virussjekk
For å sjekke status på virussjekken, kan dere hente instans-metadata og filtrere på dataelementet med typen `skattemeldingOgNaeringsspesifikasjon`.

#### Eksempel fra testmiljø
```bash
curl -X GET 'https://tt02.altinn.no/skd/formueinntekt-skattemelding-v2/instances/<instanceOwnerPartyId>/<instanceGuid>' \
  -H 'Authorization: Bearer <token>'
```

**Respons body (skjult felter for en ryddigere visning):**
```json
{
  "id": "<instanceOwnerPartyId>/<instanceGuid>",
  "instanceOwner": {
    "partyId": "<instanceOwnerPartyId>",
    "organisationNumber": "<identifikator>"
  },
  "appId": "skd/formueinntekt-skattemelding-v2",
  "org": "skd",
  "selfLinks": {},
  "process": {
    "startEvent": "StartEvent_1",
    "currentTask": {
      "elementId": "Task_1"
    }
  },
  "status": {},
  "data": [
    {
      "id": "<dataGuid>",
      "instanceGuid": "<instanceGuid>",
      "dataType": "skattemeldingOgNaeringsspesifikasjon",
      "filename": "skattemeldingOgNaeringsspesifikasjon.xml",
      "contentType": "text/xml",
      "blobStoragePath": "skd/formueinntekt-skattemelding-v2/<instanceGuid>/data/<dataGuid>",
      "selfLinks": {
        "apps": "https://skd.apps.tt02.altinn.no/skd/formueinntekt-skattemelding-v2/instances/<instanceOwnerPartyId>/<instanceGuid>/data/<dataGuid>",
        "platform": "https://platform.tt02.altinn.no/storage/api/v1/instances/<instanceOwnerPartyId>/<instanceGuid>/data/<dataGuid>"
      },
      "size": 123,
      "fileScanResult": "Pending",
      "created": "2025-05-13T10:17:18.6497999Z",
      "createdBy": "1450179",
      "lastChanged": "2025-05-13T12:25:22.81752Z",
      "lastChangedBy": "1450179"
    }
  ],
  "presentationTexts": {
    "inntektsaar": "<inntektsaar>"
  },
  "dataValues": {
    "inntektsaar": "<inntektsaar>",
    "skalBekreftesAvRevisor": "false"
  }
}
```

For å finne om virussjekken er ferdig, så må en sjekke `fileScanResult` på dataelementet med `dataType == skattemeldingOgNaeringsspesifikasjon`.

Eksempel med JSONPath: `$.data[?(@.dataType == 'skattemeldingOgNaeringsspesifikasjon')].fileScanResult`

## 3. Start en validerings jobb
Dette API'et brukes til å starte en valideringsjobb. Her må du sende inn instansId og appId i body.

OBS: Virussjekken hos Altinn må være ferdig med status "Clean" før jobben kan startes. Se her for hvordan man kan hente ut status: [Hent status på virussjekk](#hent-status-på-virussjekk).

**URL:** `POST https://<env>/api/skattemelding/v2/jobb/altinn/<inntektsaar>/<identifikator>/start`

**Body:**
```json
{
  "appId": "skd/formueinntekt-skattemelding-v2",
  "instansId": "<instanceOwnerPartyId>/<instanceGuid>"
}
```

### Eksempel kall i testmiljøet:
```bash
curl -X POST 'https://idporten-api-test.sits.no/api/skattemelding/v2/jobb/altinn/<inntektsaar>/<identifikator>/start' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <token>' \
  --data-raw '{"appId":"skd/formueinntekt-skattemelding-v2","instansId":"<instanceOwnerPartyId>/<instanceGuid>"}'
```
**Respons body:**

```json
{
  "jobbStatus": "OPPRETTET",
  "jobbId": "storeDokument-668226ad7643181b4c525c98ec96773492b9"
}

```


## 4. Hent status
Enkelte jobber kan ta tid. Vårt estimat for den største næringsspesifikasjonen for inntektsår 2023 kan ta over en time.
Det er mulig å spørre på status på en jobb uten at det påvirker beregningstiden.
URL: `GET https://<env>/api/skattemelding/v2/jobb/altinn/<inntektsaar>/<identifikator>/<jobbId>/status`

**Response body:**

```json
{
  "jobbStatus": "FERDIG",
  "forrigeStatus": "KJOERER",
  "sekunderSidenOpprettelse": 10,
  "sekunderSidenEndring": 9
}
```

**Forklaring til respons**

- jobbStatus: viser om jobben, følgende status er mulige:
    - NY - jobben er opprettet, men ingenting er gjort enda
    - KJOERER - jobben utføres
    - VENTER - jobben venter, enten pga den satt på vent til det er nok tilgjenglige resurser eller en annen jobb kjører på samme identifikator.
    - AVBRUTT - jobben ble avbrutt, av f.eks en nyere jobb for samme identifikator
    - FEILET - jobben feilet av en teknisk årsak
    - FERDIG - jobben er ferdig
- forrigeStatus: sist jobbstatus
- sekunderSidenOpprettelse: type Int, viser hvor mange sekunder det har vært siden jobben ble opprettet
- sekunderSidenEndring: type Int, viser hvor mange sekunder jobben har hatt statusen den har nå.


## 4. Hent resultat
Når jobben har status ferdig, kan resultatet hentes. Da vil dere få alle de beregnede modellene og valideringsresultatene.


URL: `GET https://<env>/api/skattemelding/v2/jobb/altinn/<inntektsaar>/<identifikator>/<jobbId>/resultat`


### Respons jobbstatus=FERDIG
Responsen vil være helt lik en normal validering på validering v2 og følge XSD-en til `skattemeldingOgNaeringsspesifikasjonResponse`.

Respons content-typen vil være av type `application/xml`.

### Respons jobbstatus!=FERDIG
Hvis jobben eksisterer og jobben ikke er ferdig, vil vi returnere en HTTP-status 204 No Content.

# Vedlegg i næringsspesifikasjonen er ikke støttet
Det asynkrone API-et støtter ikke eksterne vedlegg i næringsspesifikasjonen. Ønsker dere å legge til vedlegg for dokumentasjon, må dette referes i skattemeldingen.
