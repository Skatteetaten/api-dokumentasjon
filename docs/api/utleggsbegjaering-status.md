---
title: ELAN - Utleggsbegjæring API - Status på sak
slug: /api/utleggsbegjaering-status
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

APIet benyttes til å hente status på innsendte utleggsbegjæringer.
Målgruppen er dagens inkassosystemer, kommunene og andre systemleverandører.
Dersom du ønsker å ta i bruk APIet eller har spørsmål knyttet til dette, ta kontakt med fremtidensinnkreving@skatteetaten.no.

Figuren nedenfor angir overordnet tjenester Skatteetaten vil tilby for mottak og prøving av utleggsbegjæringer. Merk at figuren er en illustrasjon av måbildet, og det er ikke alle tjenestene i figuren som er implementert ennå. Det vil også i fremtiden kunne legges til nye tjenester som ikke er angitt i figuren.

![Oversiktsfigur](../../static/download/utleggsbegjaering/Utleggsbegjaering_oversikt.png)

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
For å få tilgang til tjenesten må leverandøren ha akseptert bruksvilkår for APIet. Dette gjøres i sammneheng med at man søker om tilgang til APIet i [Skatteetatens saks- og serviceverktøy](https://www.skatteetaten.no/deling/kontakt/)

### Alternativ 1 - Systemleverandør er innsender
Dersom systemleverandør handler på vegne av sin egen organisasjon, kan man benytte klassisk autentisering via Maskinporten.

### Alternativ 2 - Systembruker
Dersom systemleverandør ønsker å tilby funksjonalitet der en annen organisasjon (kunde av systemleverandøren) skal benytte systemet til å sende inn utleggsbegjæringer, skal Altinn sin nye funksjonalitet for ‘systembruker’ benyttes. Mer informasjon om dette finnes i Altinn Systembruker for SBS og Systembruker roadmap.

Systemleverandør må for å støtte systembruker registrere seg i Maskinporten og Altinn test environment.

### Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:utleggsbegjaering`
Ved bruk av systembruker må forespørselen også inneholde ressurs-id `ske-utleggsbegjaering`.

### Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Utleggsbegjæring API - På vegne av`

### Systembruker
Dersom systemleverandør ønsker å tilby funksjonalitet der en annen organisasjon (kunde av systemleverandøren) skal benytte systemet til å sende inn utleggsbegjæringer, skal Altinn sin nye funksjonalitet for [systembruker-løsningen fra Digdir for virksomhet](../om/systembruker.md) benyttes. Mer informasjon om dette finnes også i Altinn Systembruker for SBS og Systembruker roadmap.

Tilgangspakkene som gir tilgang til ressursen som benyttes er:
- Krav, betalinger og utlegg

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
Når Kreditor har sendt inn en utleggsbegjæring, kan man få status på saken ved å bruke tjenesten "Status på sak". Tjenesten gir informasjon om sakens tilstand, samt hvilke beslutninger som eventuelt er fattet i saken. Den returnerer også referansen som benyttes av alminnelig namsmann (AN) i den videre behandlingen (UTLBGJ/2026/XX) og som skal benyttes når man kontakter AN. Når en beslutning er fattet angir tjenesten informasjon om alle krav som følges opp av beslutningen. Dette inkluderer informasjon om kravenes kravgrunnlagsidentifikator, som er den identifikator som Alminnelig Namsmann har gitt de enkelte krav. Denne identifikatoren kan brukes til å angi spesifikke krav dersom Kreditor senere for eksempel ønsker å melde en innbetaling på kravet.

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/utleggsbegjaering-api) på SwaggerHub for beskrivelse av informasjonsmodellen.
![Informasjonsmodell-status-paa-sak](../../static/download/utleggsbegjaering/status-paa-sak.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Innsendte saker i testmiljøet behandles ikke videre og man kan derfor ikke spørre på status mot disse. For å teste Status på sak benytter man verdiene i tabellen under:

| Nr |	EksternSaksreferanse |	Saksstatus |	Innhold i respons |	Beskrivelse |
| :--- | :--- | :--- | :--- | :--- |
| 1 |	TEST_SAK_OPPRETTET |	sakOpprettet |	Krav, Saksøkere, Saksøkte |	Saken er nylig opprettet |
| 2	| TEST_SAK_UNDER_BEHANDLING |	sakUnderBehandling |	Krav, Saksøkere, Saksøkte |	Saken er under behandling |
| 3	| TEST_SAK_NEKTET_FREMMET |	sakNektetFremmet |	Krav, Saksøkere, Saksøkte |	Saken er nektet fremmet |
| 4	| TEST_SAK_FORELAGT |	sakForelagt |	Krav, Saksøkere, Saksøkte	| Saken er forelagt |
| 5	| TEST_SAK_BESLUTTET |	sakBesluttet |	Krav, Saksøkere, Saksøkte, Beslutningsinformasjon |	Saken er besluttet – inkluderer utleggstrekk, intet til utlegg og utleggspant |
| 6	| TEST_SAK_AVSLUTTET |	sakAvsluttet |	Krav, Saksøkere, Saksøkte, Beslutningsinformasjon	| Saken er avsluttet – inkluderer utleggstrekk, intet til utlegg og utleggspant |
| 7 |	TEST_SAK_HEVET |	sakHevet |	Krav, Saksøkere, Saksøkte |	Saken er hevet |
| 8	| TEST_UGYLDIG |	Feilmelding |	Feilobjekt (HTTP 404) |	Ugyldig saksreferanse – returnerer feilmelding |


</TabItem>
</Tabs>
