---
title: Innrapportering A-melding API
slug: /api/innrapportering-amelding
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, A-ordning]
keywords: [grunnlagsdata, a-melding, aordning]
last_updated: Mar 27, 2025
hide_table_of_contents: true
---

<Summary>Tjeneste for innrapportering av A-meldingen (tidligere A02).</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innrapporteringamelding`.
Dette scopet skal også brukes for tilbakemeldingen som skal hentes fra eget API, se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/amelding-tilbakemelding-api/)
 

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
          "value": "ske-innrapportering-amelding",
          "id": "urn:altinn:resource"
        }
      ]
    }
  ]
```

## Teknisk spesifikasjon

URL-er til innrapprterings API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-amelding-api)

Tilsvarende for tilbakemeldingen ligger i Open API spesifikasjonen på
[SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/amelding-tilbakemelding-api/) 

**VIKTIG!!** For å hente tilbakemeldingen må man lytte på hendelser hos Dialogporten. Dette er beskrevet hos Digdir: [Hvordan hente meldinger gjennom Dialogporten](https://samarbeid.digdir.no/altinn/hvordan-hente-meldinger-gjennom-dialogporten/2869)


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
Dokumentasjon finner du på [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-amelding-api/)

## Tilbakemelding
Dokumentasjon finner du på [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/amelding-tilbakemelding-api/)
Benytt samme scope som for innsending ved autentisering i Maskinporten: `skatteetaten:innrapporteringamelding`.

**VIKTIG!!** For å hente tilbakemeldingen må man lytte på hendelser hos Dialogporten. Dette er beskrevet hos Digdir: [Hvordan hente meldinger gjennom Dialogporten](https://samarbeid.digdir.no/altinn/hvordan-hente-meldinger-gjennom-dialogporten/2869)

Pr. 28.nov-25 er tilbakemeldingen ikke tilgjengelig i test eller produksjon.


</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.

| Feilkode | HTTP Statuskode | Feilområde                                   |
|----------|-----------------|----------------------------------------------|
| GLD_001  | 500             | Uventet feil på tjenesten                    |
| GLD_005  | 403             | Feil i forbindelse med autorisering          |
| GLD_006  | 400             | Feil i request                               |
| GLD_008  | 400             | Strukturell feil i tilknyttet dataformat     |
| GLD_010  | 400             | Feil i forbindelse med validering av payload |
| GLD_011  | 400             | Feil i metadata                              |
| GLD_017  | 500             | Uspesifisert systemfeil                      |
| GLD_019  | 409             | Idempotensnøkkel er benyttet tidligere       |
| GLD_021  | 404             | Finner ikke forespurt ressurs                |
| GLD_022  | 405             | HTTP-metode ikke støttet                     |

Feilresponsene kan også inneholde en feilspesifiseringskode som presiserer feilen ytterligere.
Tabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.
Dersom det finnes mer detaljert feilinformasjon enn generelt feilområde vil det beskrives i melding, sti og angitt verdi
feltene.

| Feilspesifiseringskode | Feilområde                                     | Årsak                                                                                                                       |
|------------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1022               | Feil i parametre                               | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1023               | Finner ingen ressurs for denne urlen           | Det er ikke noe innhold tilgjengelig på denne URLen                                                                         |
| GLD_1027               | Inntektsår er ikke støttet                     | Det er ikke tillatt å levere på oppgitt inntektsår                                                                          |
| GLD_1028               | Header mangler                                 | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json | Accept header er feil. APIet har kun støtte for json i response                                                             |
| GLD_1047               | Content type må være application/json          | Content-type header er feil. APIet har kun støtte for json i request body                                                   |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Informasjonsmodell kan også lastes ned i [PDF-format](../../static/download/a-melding/Informasjonsmodell_A-meldingen_V2_3.pdf)

![informasjonsmodell](../../static/download/a-melding/Informasjonsmodell_A-meldingen_V2_3.png)

                                                                                                                                                                                                                                                         |
</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

I første omgang er test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være med å pilotere løsningene.

### Testmiljøer

For spesifikke URL'er til testmiljø hos Skatteetaten, se [SwaggerHub](https://app.swaggerhub.com/apis/skatteetaten/innrapportering-amelding-api)

Digdir benytter TT02 som testmiljø, hvor følgende tilbys:
* Dialogporten
* Autentisering med Maskinporten
* Autorisering med Systembruker
* Altinn innboks

Konsumenter må ha egne testmiljøer som kan kobles mot testmiljøer hos Skatteetaten og Digdir.

### Tenor testdatasøk

[Testdata] (https://www.skatteetaten.no/testdata/)

### Testdata

Det skal utelukkende benyttes syntetiske testdata ved test av tjenesten. Tenor testdatasøk tilbyr dette. Det er ikke tillatt å bruke/sende skarpe data i test pga krav fra GDPR-regelverket.

</TabItem>
<TabItem headerText="Kontakt oss" itemKey="itemKey-6">
  
Trenger du faglig eller teknisk brukerstøtte knyttet til integrasjon mot a-meldingen kan du kontakte oss på e-post: [a-ordningen-lps\@skatteetaten.no](mailto:a-ordningen-lps@skatteetaten.no )  

Lenke til å sette opp tilgang til brukerstøttetjenesten og bestille tilgang til ny tjeneste/scope finner dere på denne siden (under «trenger du hjelp»):  [A-meldingen - for sluttbrukersystemer - Skatteetaten](https://www.skatteetaten.no/samarbeidspartnere/sluttbrukersystemer/a-meldingen-sbs/)
  
</TabItem>

</Tabs>
