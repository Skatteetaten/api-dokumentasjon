---
title: ELAN - Utleggsbegjæring API - Innsyn i krav
slug: /api/utleggsbegjaering-innsyn
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

APIet benyttes til å gi innsyn i krav fra innsendte utleggsbegjæringer. Målgruppen er dagens inkassosystemer, kommunene og andre systemleverandører. Dersom du ønsker å ta i bruk APIet eller har spørsmål knyttet til dette, ta kontakt med fremtidensinnkreving@skatteetaten.no.

Figuren nedenfor angir overordnet tjenester Skatteetaten vil tilby for mottak og prøving av utleggsbegjæringer. Merk at figuren er en illustrasjon av måbildet, og det er ikke alle tjenestene i figuren som er implementert ennå. Det vil også i fremtiden kunne legges til nye tjenester som ikke er angitt i figuren.

![Oversiktsfigur](../../static/download/utleggsbegjaering/Utleggsbegjaering_oversikt.png)
 
For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/utleggsbegjaering-innsyn-api/1.0.1) på SwaggerHub.

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

Tvangsforbyrdelseslovens forskrift [§ 4 Fordringshaveres innsyn i opplysninger om løpende utleggstrekk](https://lovdata.no/nav/forskrift/2025-07-09-1510) gir kreditor rett til å få innsyn i ett trekk. Forutsetningene for bruk av tjenesten er blant annet
* Prosessfullmektig kan kun få svar på krav i saker som hen er prosessfullmektig for.
* Kravene må være i et etablert og ikke avsluttet trekk.

| Informasjonselement                                                                                                                                                       | Hvilken informasjon returneres                                                                                                                                                                                                                                                                                                                                                |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| a. summen av krav i trekket med bedre artsprioritet enn saksøkerens krav                                                                                                  | Summen av beløp og stipulerte renter på kravene i trekket som har bedre artsprioritet enn det aktuelle kravet (artsprioritet a er bedre enn b, b bedre enn c, osv.) eller bedre tidsprioritet                                                                                                                                                                                 |
| b. summen av krav i trekket med lik artsprioritet som saksøkerens krav, samt kravenes samlede grunnlag for forholdsmessig fordeling etter dekningsloven § 2-8 tredje ledd | Summen av beløp og stipulerte renter på kravene i trekket som har samme artsprioritet som det aktuelle kravet. Kravets dividendegrunnlag i trekket (gjenstående beløp for forholdsmessig fordeling pluss påløpte renter for forholdsmessig fordeling) for kravet / de andre kravene sitt dividendegrunnlag                                                                    |
| c. hvor mye av trekket som skal dekke uforfalte bidragskrav                                                                                                               | Besluttet løpende bidragskrav i trekk                                                                                                                                                                                                                                                                                                                                         |
| d. datoen for sist gjennomførte trekk og hvilket beløp som ble trukket                                                                                                    | Mottatte og plasserte beløp i dag og 1 måned bakover i tid                                                                                                                                                                                                                                                                                                                    |
| e. gjeldende beslutning om trekkets størrelse og hvem som er trekkpliktig                                                                                                 | Trekkpåleggene i dag og frem i tid – likt som i kreditors saksinnsyn                                                                                                                                                                                                                                                                                                          |

![Informasjonsmodell-innsyn-trekk](../../static/download/utleggsbegjaering/informasjonsmodell-innsyn-i-ett-trekk.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Bruk valgfrie organisasjoner fra Tenor som innsender av utleggsbegjæring.
Innsendinger av vedlegg og utleggsbegjæringer i testmiljøet vil ikke bli videre behandlet av Skattetaten.

## Test der systemleverandør er innsender (alternativ 1)
Informasjon kommer
## Test der systembruker benyttes (alternativ 2)
Informasjon kommer

</TabItem>
</Tabs>
