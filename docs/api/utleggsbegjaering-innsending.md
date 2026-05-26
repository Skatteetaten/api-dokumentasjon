---
title: ELAN - Utleggsbegjæring API - Innsending
slug: /api/utleggsbegjaering-innsending
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Innkreving]
keywords: [utleggsbegjaering, innkreving]
last_updated: May 26, 2026
hide_table_of_contents: true
---

<Summary>Tjenesten leverer ..</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/utleggsbegjaering-api) på SwaggerHub.

## Tilgang

### Skatteetaten må gi tilgang

For å få tilgang til tjenesten må leverandøren ha underskrevet en pilotavtale med Skatteetaten. 

### Scope

Dersom systemleverandør kun skal sende inn utleggsbegjæringer på vegne av sin egen organisasjon, kan man benytte klassisk autentisering via Maskinporten. Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:utleggsbegjaering`

### Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Utleggsbegjæring API - På vegne av`

### Systembruker
Dersom systemleverandør ønsker å tilby funksjonalitet der en annen organisasjon (kunde av systemleverandøren) skal benytte systemet til å sende inn utleggsbegjæringer, skal Altinn sin nye funksjonalitet for [systembruker-løsningen fra Digdir for virksomhet](../om/systembruker.md) benyttes. Mer informasjon om dette finnes også i Altinn Systembruker for SBS og Systembruker roadmap.

Tilgangspakkene som gir tilgang til ressursen som benyttes er:
- lag liste

## Datakatalog

Datatjenestebeskrivelse er ikke i Felles datakatalog enda.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

Legg inn eksempler

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                              |
|----------|-----------------|---------------------------------------------------------|
| XXX-001  | 500             | Uventet feil på tjenesten.                              |
| XXX-002  | 500             | Uventet feil i et bakenforliggende system.              |
| XXX-003  | 404             | Ukjent url benyttet.                                    |
| XXX-004  | 401             | Feil i forbindelse med autentisering.                   |
| XXX-005  | 403             | Feil i forbindelse med autorisering.                    |
| XXX-006  | 400             | Feil i forbindelse med validering av inputdata.         |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/utleggsbegjaering-api) på SwaggerHub for beskrivelse av informasjonsmodellen.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Bruk valgfrie organisasjoner fra Tenor som innsender av utleggsbegjæring.
Innsendinger av vedlegg og utleggsbegjæringer i testmiljøet vil ikke bli videre behandlet av Skattetaten.

## Test der systemleverandør er innsender (alternativ 1)
Når systemleverandør er innsender kan vilkårlige organisasjoner i Tenor benyttes som innsender.

## Test der systembruker benyttes (alternativ 2)
Den valgte organisasjonen i Tenor (som representerer en test-inkassovirksomhet) må godkjenne at dens fagsystem kan benytte tilgangsressursen/tjenesten «Innsending og oppfølging av utleggsbegjæring» på vegne av virksomheten. Det opprettes da en «systembruker» som er koblingen mellom bruker, system, leverandør og API.

</TabItem>
</Tabs>
