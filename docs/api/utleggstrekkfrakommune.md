---
title: Utleggstrekkbeslutning fra kommune API
slug: /api/utleggstrekkfrakommune
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Innkreving]
keywords: [utleggstrekk-fra-kommune, innkreving]
last_updated: Sept 29, 2025
hide_table_of_contents: true
---

<Summary>Tjenester for å kommuner som benytter seg av særnamsmyndigheten og behandler utlegg mot nytt regelverk. 
Dette består av en tjeneste for å gjøre oppslag på hvilket regelverk en skyldner skal behandles etter, samt en tjeneste for å sende inn utleggstrekk fra kommune gjennom Skatteetatens systemløsninger.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-Om" default>
Målgruppen for tjenesten er kommunene.
Dersom du ønsker å ta i bruk ELAN og prøving i ditt system eller har spørsmål knyttet til dette, ta kontakt med fremtidensinnkreving@skatteetaten.no.

Figuren nedenfor viser overordnet flyt for oppslag for å finne ut om en skyldner skal behandles etter nytt eller gammelt regelverk.

![Oversiktsfigur1](../../static/download/utleggstrekk-fra-kommune/oppslag-av-samordnet-trekk.png)

Figuren nedenfor angir overordnet tjenesten Skatteetaten vil tilby for håndtering av utleggstrekk fra kommune. Merk at figuren er en illustrasjon av måbildet, og det er ikke alle tjenestene i figuren som er implementert ennå. Det vil også i fremtiden kunne legges til nye tjenester som ikke er angitt i figuren.

![Oversiktsfigur2](../../static/download/utleggstrekk-fra-kommune/kommune-som-særnamsmyndighet.png)


For generell informasjon om tjenestene se egne sider om:

* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)


### Oppfølging og støtte
I testfasen vil vi tilby støtte til de eksterne leverandørene gjennom utvikling og test.

Mer informasjon kommer her.

I mellomtiden – ta kontakt med fremtidensinnkreving@skatteetaten.no.

## Scope

Følgende scope brukes ved autentisering i Maskinporten: `skatteetaten:utleggstrekkbeslutningkommune`.


Ved bruk av systembruker må forespørselen også inneholde ressurs-id `TIL AVKLARING` som beskrevet her for produksjon: https://docs.altinn.studio/api/authentication/systemuserapi/systemuserrequest/external/#create-a-standard-system-user-request


## Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Utleggstrekkbeslutning kommune API - På vegne av`

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger som spesifikasjoner på SwaggerHub:
* [OpenAPI spesifikasjon for Innsending av trekk fra kommune](https://app.swaggerhub.com/apis/skatteetaten/utleggsbegjaering-kommune-api/)

## Datakatalog

Dette API-et finnes foreløpig ikke i Felles datakatalog.

## Tilgang til tjenesten

For informasjon om hvordan få tilgang til tjenesten se [Informasjon om tilgang til tjenesten for utleggsbegjæring](utleggsbegjaering.md#Tilgang-til-tjenesten)

</TabItem>
<TabItem headerText="Overgangsperioden" itemKey="itemKey-Overgangsperioden">

## Innføring av ny innkrevingslov
I en overgangsperiode (fra 1.1.2026 til 31.12.2026) skal kommunene gradvis behandle nye utleggssaker mot saksøkte etter nye regler i tvangsfullbyrdelsesloven kapittel 2 avsnitt II. Myndighetene har derfor mulighet til å avgrense hvilke skyldnere som skal behandles etter nytt regelverk for utlegg ut fra forhåndsbestemte kriterier. Disse bestemmes konkret i forskrift.

Gjennom overgangsperioden legges det opp til en gradvis endring av parametrene slik at stadig flere skyldnere vil falle inn under kriterier for å bli behandlet etter nytt regelverk. Forskriften endres senest 14 dager før endringen trer i kraft. Parametrene er fastsatt i delegeringsvedtaket [Delegering av kongens myndighet etter innkrevingsloven § 40 andre og tredje ledd til Finansdepartementet](https://lovdata.no/dokument/DEL/forskrift/2025-06-10-968).

## Når kommer det nye regelverket til anvendelse for kommunen som namsmyndighet
I overgangsperioden skal kommunen forholde seg til et API fra utlegg som forteller om en skyldner har eller har hatt trekk etter nytt regelverk.
Dersom skyldner har eller har hatt trekk etter nytt regelverk skal kommunen behandle saken etter nytt regelverk.
Dersom skyldner skal behandles etter nytt regelverk og kommunen beslutter utleggstrekk, skal kommunen sende beslutningen om utleggstrekk til alminnelig namsmann i ny løsning.
Dersom det allerede løper utleggstrekk mot skyldneren, meldes kravet umiddelbart inn i trekket. Dersom det ikke allerede løper utleggstrekk mot skyldneren, vil namsmannen forsøke å etablere utleggstrekk mot vedkommende.

Etter 1.1.2027 skal kommunen behandle alle skyldnere etter nytt regelverk

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-Informasjonsmodell">

 
<details>
      <summary>Beslutning om trekk fra kommune 2.0</summary>
     <p>

## Forklaring til modellen
Formålet med denne brukerveiledningen er å gi både funksjonelle og tekniske ressurser en overordnet forståelse av innholdet i den beslutningen som skal sendes inn til Skatteetaten.

![utleggstrekk-fra-kommune-all.png](../../static/download/utleggstrekk-fra-kommune/v2/utleggstrekk-fra-kommune-all.png)

![utleggstrekk-fra-kommune-all2.png](../../static/download/utleggstrekk-fra-kommune/v2/utleggstrekk-fra-kommunev2utleggstrekk-fra-kommune-all2.png)

### a) Rotnivå - Beslutning om trekk fra kommune
#### Inneholder kjerneinformasjon om innsendingen.

* **beslutning** består av et vedlegg med underlag for beslutningen.
* **beslutningsdato** er dato for beslutning hos kommunen.
* **underskrift** er navn på ansvarlig for innsendingen og er påkrevd å sende.
* **innsendersReferanse** er innsenders unike referanse på saken og er valgfritt å sende inn.
* **beslutningstidspunktTrekkEtterGammeltRegelverk** inneholder dato og klokkeslett for når et eventuelt trekk etter gammelt regelverk ble besluttet på et tidligere tidspunkt. Dette for å sikre riktig prioritet på det nye kravet.

### b) Parter i Beslutning om trekk fra kommune
#### Informasjon om partene i beslutningen

* **kommune** må identifiseres med organisasjonsnummer og kan ha med kontaktinformasjon til kontaktperson hos kommunen.
* **skyldner** må identifiseres med fødselsnummer eller d-nummer.
* **adresseLikFolkeregistrert** skal settes til true dersom skyldners adresse er lik den som er registrert i Folkeregisteret. Alternativt skal annenAdresse eller ukjentBosted angis.
* Skyldner kan ha en **prosessfullmektig** som må identifiseres med fødselsnummer eller d-nummer. I tillegg skal selskapet som prosessfullmektig er ansatt i angis i identifiseres i **orgnummerProsessfullmektig**.
* Prosessfullmektig må ha en **fullmakt** eller være **bevillingshaver** (satt til true).

### c) Betalingsinformasjon og Namsfogddistrikt

* **betalingsinformasjon** inneholder betalingsinformasjon til mottaker (kommunen).
* **valgtNamsfogddistrikt** skal kun benyttes om man ønsker at saken skal behandles av annet namsfogddistrikt enn det skyldner normalt er hjemmehørende i.
Merk at namsfogddistrikt må være skrevet nøyaktig som kodenavnet i [Kodeliste for Namsfogddistrikt](https://data.skatteetaten.no/web/datakatalog/kodeliste/c3dad197-c59e-4664-ac80-e615f00b66ba/1/)

### d) Kravinformasjon i Beslutning om trekk fra kommune
#### Informasjon om hvert enkelt krav i beslutningen

* **innsendersKravreferanse** skal unikt identifisere et krav innenfor en beslutning.
* **kravdetaljer** angir hvilken type krav det er. Eksempler på kravdetaljer er "Hovedkrav" som er det opprinnelige beløpet en person er skyldig og "Sakskostnader".
* **kravgrunnlagsidentifikator** er identifikator for kravet i Siro og skal brukes som referanse dersom kravet er meldt inn tidligere.
* **relatertKrav** skal brukes for å knytte renter eller andre omkostninger (tilleggskrav) til det hovedkravet det direkte tilhører.
* **opprinneligBeløp** er pengekravets opprinnelige beløp når kravet oppstod.
* **gjenståendeBeløp** er det beløpet som gjenstår når beslutningen sendes inn = opprinnelig beløp minus innbetalinger og nedjusteringer etter at kravet oppstod.
* **prioritetISak** angir prioritet for kravet innad i beslutningen. Benyttes ved fordeling av innbetaling i utleggstrekk, Verdier 1-99.
* **prioritetDekningsloven** angir hvilken prioritet kravet har etter bokstavene i dekningsloven § 2-8 (a til e).
* **forsinkelsesrente** angir om det er **standardForsinkelsesrente** eller **avtaltRentesats** for et rentebærende krav. Her må det også angis **rentesatsperiode** og eventuelt **prioritetISakFremtidigRentekrav**


## Eksempler på testdata

Eksempelet nedenfor bruker testparter fra Tenor. De syntetiske dataene i dokumentet byttes ut med deres egne syntetiske data. Dette inkluderer opplastede vedlegg, samt valgte aktører fra Tenor.

[beslutning-om-trekk-fra-kommune-v2.json](../../static/download/utleggstrekk-fra-kommune/beslutning-om-trekk-fra-kommune-v2.json)


</p>
</details>

<details>
      <summary>Oppslag samordnet trekk fra kommune 1.0</summary>
     <p>

## Forklaring til modellen
Denne veilederen har til formål å veilede både funksjonelle og tekniske ressurser til å få en overordnet forståelse av elementene og sammenhengen mellom disse i ELAN løsningen.

Modellen for oppslag av samordnet trekk er en modell skal støtte at kommunene kan gjøre oppslag om en gitt part har eller har hatt trekk på nytt regelverk.
Dette for å kunne gradivis innføre flere skyldnere på nytt regelverk gjennom overgangsåret 2026.

### Oppslag av samordnet trekk request
Oppslag av samordnet trekk skjer ved å angi parten man ønsker å gjøre oppslag på

![Oppslag samordnet_trekk request-1](../../static/download/utleggstrekk-fra-kommune/oppslag-samordnet-trekk-a1.png)
![Oppslag samordnet_trekk request-2](../../static/download/utleggstrekk-fra-kommune/oppslag-samordnet-trekk-a2.png)


### Oppslag av samordnet trekk response
Som respons vil man få parten man gjorde oppslag på samt en boolsk verdi som er true dersom parten har eller har hatt trekk på nytt regelverk.

![Oppslag samordnet_trekk_response-1](../../static/download/utleggstrekk-fra-kommune/oppslag-samordnet-trekk-b1.png)
![Oppslag samordnet_trekk_response-2](../../static/download/utleggstrekk-fra-kommune/oppslag-samordnet-trekk-b2.png)

### Eksempler på testdata
Eksempelet nedenfor bruker testparter fra Tenor. De syntetiske dataene i dokumentet byttes ut med deres egne syntetiske data.

[oppslag-samordnet-trekk-kommune.json](../../static/download/utleggstrekk-fra-kommune/oppslag-samordnet-trekk-kommune.json)
     </p>
</details>

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-Test">

Se [Testing](utleggsbegjaering.md#Testing)

</TabItem>
<TabItem headerText="Sjekkliste for leverandører" itemKey="itemKey-Sjekkliste">

## Sjekkliste for leverandører
Se [sjekkliste for inkassosystemleverandører](utleggsbegjaering.md#Sjekkliste-for-inkassosystemleverandører)

</TabItem>

</Tabs>

