---
title: Innrapportering oppdrag til utenlandske oppdragstakere API
slug: /api/innrapportering-oppdrag-til-utenlandske-oppdragstakere-api
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Oppdragsregisteret]
keywords: [grunnlagsdata, oppdrag]
last_updated: Mar 28, 2025
hide_table_of_contents: true
---

<Summary>Tjeneste for å rapportere til Oppdrags- og arbeidsforholdsregisteret (OAR) </Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

Les mer om tjenesten på [skatteetaten.no](https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/rapportere-i-oppdrags--og-arbeidsforholdsregisteret-oar/)

For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringoppdragtilutenlandske`

## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. 

## Systemtilgang med systembruker

Steg for steg: [Slik kobler du deg opp til våre reetablerte tjenester](https://www.skatteetaten.no/samarbeidspartnere/reetablering-altinn/systemleverandor/oppkobling/)

For å kunne benytte dette api'et med systemtilgang må man gi følgende rettighet til systemet ved opprettelse i systemregisteret:
```JSON
"Rights": [
    {
      "Resource": [
        {
          "value": "ske-innrapportering-oppdragsregisteret",
          "id": "urn:altinn:resource"
        }
      ]
    }
  ]
```

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-oppdrag-til-utenlandske-oppdragstakere-api/)

Nødvendige åpninger i en evt. brannmur er beskrevet [her](../om/sikkerhet.md)

### Parameter: idempotencyKey

idempotencyKey parameteren er påkrevet. Innholdet skal være en unik UUID. Hvert nye kall til API-et skal ha en
tilsvarende ny idempotencyKey. Flere etterfølgende POST kall med samme request-body og samme idempotencyKey vil gi den
samme responsen. Kun det første av denne rekken med like API kall vil behandles. IdempotencyKey muliggjør at man trygt
kan prøve innsendinger på nytt der man av ulike årsaker ikke har fått en tilbakemelding fra API-et.

## Datakatalog

Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## Innsending

Dokumentasjon finner du på [ SwaggerHub  ](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-oppdrag-til-utenlandske-oppdragstakere-api/) 



</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                   |
|----------|-----------------|----------------------------------------------|
| OAR_001  | 403             | Feil i forbindelse med autentisering         |
| OAR_002  | 401             | Feil i forbindelse med autorisering          |
| OAR_003  | 400             | Feil i request                               |
| OAR_004  | 400             | Strukturell feil i tilknyttet dataformat     |
| OAR_005  | 400             | Feil i forbindelse med validering av payload |
| OAR_006  | 500             | Uspesifisert systemfeil                      |
| OAR_007  | 409             | Idempotensnøkkel er benyttet tidligere       |
| OAR_008  | 404             | Finner ikke forespurt ressurs                |
| OAR_009  | 405             | HTTP-metode ikke støttet                     |
| OAR_010  | 500             | Uventet feil i et bakenforliggende system    |

Feilresponsene kan også inneholde en feilspesifiseringskode som presiserer feilen ytterligere.
Tabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.
Dersom det finnes mer detaljert feilinformasjon enn generelt feilområde vil det beskrives i melding, sti og angitt verdi
feltene.

| Feilspesifiseringskode | Feilområde                                     | Årsak                                                                                                                       |
|------------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| OAR_1001               | Ugyldig token                                  | Ugyldig token                                                                                                               |
| GLD_1002               | Ikke autorisert for denne dialogen             | Ikke autorisert for denne dialogen                                                                                          |
| GLD_1003               | Feil i parametre                               | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1004               | Header mangler                                 | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json | Accept header er feil. APIet har kun støtte for json i response                                                             |
| GLD_1047               | Content type må være application/json          | Content-type header er feil. APIet har kun støtte for json i request body                                                   |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

![informasjonsmodell](../../static/download/Informasjonsmodell_Boligselskap.png)
                                                                                                                                                                                                                                                          |
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

I første omgang er test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være med å pilotere løsningene.

### Testmiljøer

For spesifikke URL'er til testmiljø hos Skatteetaten, se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/Amelding-mottak-API).

Digdir benytter TT02 som testmiljø, hvor følgende tilbys:
* Dialogporten
* Autentisering med Maskinporten
* Autorisering med Systembruker
* Altinn innboks

Konsumenter må ha egne testmiljøer som kan kobles mot testmiljøer hos Skatteetaten og Digdir.

### Tenor testdatasøk

TODO

### Testdata

Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatasøk tilbyr dette. Det er ikke tillatt å bruke/sende skarpe data i test pga krav fra GDPR-regelverket.

</TabItem>
<TabItem headerText="Kontakt oss" itemKey="itemKey-6">
  
Har du spørsmål til Skatteetaten om Boligselskap API, kan du sende oss e-post: [oar@skatteetaten.no](mailto:oar@skatteetaten.no)  
Vær oppmerksom på at epostadressen er midlertidig og gjelder bare i perioden tjenestene er i utvikling og test fra Altinn II til Altinn 3.
  
</TabItem>

</Tabs>
