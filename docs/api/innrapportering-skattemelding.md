---
title: Innrapportering skattemelding API
slug: /api/innrapportering-skattemelding
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding]
keywords: [skattemelding]
last_updated: Nov 5, 2025
hide_table_of_contents: true
---

<Summary>Tjenester for innrapportering av skattemeldingen for næringsdrivende fra sluttbrukersystemer</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

Denne siden inneholder spesifikasjoner/implementasjonsguide for hvordan innrapportering av
skattemeldinger for personlige og upersonlige skattepliktige skal leveres fra sluttbrukersystem.
Den primære målgruppen er systemleverandører av årsoppgjørsprogram eller regnskapssystem for
innrapportering av skattemeldingen og næringsopplysninger. Slike systemer kalles heretter
sluttbrukersystemer (SBS).

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Systembruker](../om/systembruker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

For informasjon og oppdateringer for systemleverandører med integrasjon mot skattemeldingen for person og næring, se våre [fellessider for systemleverandører](https://www.skatteetaten.no/samarbeidspartnere/sluttbrukersystemer/skattemelding-sbs/).

Dokumentasjonen for innsending av skattemeldingen ligger foreløpig på [en egen Github-side](https://github.com/Skatteetaten/skattemeldingen).
API-ene for innsending vil tilgjengeliggjøres som OpenAPI-spesifikasjoner på SwaggerHub når de er klare for produksjon.

Det tilbys to sett med API-er:

- Skatteetatens API: har tjenester for henting- og validering av skattemeldinger, eiendomskalkulator, hent vedlegg og
  foreløpig avregning.
- Altinn3 API: har tjenester for opprettelse og innsending av en skattemelding.

## Ordliste
| Begrep | Beskrivelse                                                                                                |
|--------|------------------------------------------------------------------------------------------------------------|
| SBS    | Sluttbrukersystem                                                                                          |
| SME    | Skattemelding, modernisert versjon. (benyttes oftest om publikumssiden for innlevering av skattemeldingen) |
| SMIA   | Skattemelding interne arbeidsflate (nytt saksbehandlingssystem 2020)                                       |
| SERG   | SBetegnelse på Eiendomsregisteret                                                                          |

## Tilgang til API-et
Når en skattepliktig skal benytte et sluttbrukersystem for å sende inn skattemeldingen og næringsopplysninger gjennom
API må sluttbrukeren og/eller sluttbrukersystemet være autentisert og autorisert gjennom en påloggingsprosess.

Ved kall til skattemelding-API ønsker Skatteetaten å kjenne til identiteten til innsender. Identiteten til pålogget
bruker, kombinert med informasjon fra Altinn autorisasjon vil avgjøre hvilken person/selskap en pålogget bruker kan
hente skattemeldingen til eller sende inn skattemelding for.

Autentisering skjer enten via ID-porten eller Maskinporten:

- Personlig innlogging vil skje via ID-porten med bruk av sluttbrukerens eget personnummer.
- Systemer/maskiner som ønsker å opptre på vegne av en organisasjon kan autentisere seg via Maskinporten.

For mer informasjon om autentisering og autorisasjon, se [Sikkerhet](../om/sikkerhet.md).

### Scope
#### Skatteetaten API
Følgende scopes med respektive maks-levetider skal benyttes ved autentisering i Maskinporten mot Skatteetatens API-er:

| Scope                                            | Beskrivelse                         | Levetid access-token | Levetid refresh-token |
|--------------------------------------------------|-------------------------------------|----------------------|-----------------------|
| skatteetaten:formueinntekt/skattemelding         | Tilgang til skattemeldingstjenester | 8 timer              | 90 dager              |
| skatteetaten:formueinntekt/skattemelding/eiendom | Tilgang til eiendomstjenester       | 8 timer              | 90 dager              |

**OBS:** Husk at scopet med den korteste levetiden vil være gjeldende for hele access-tokenet.

Vi anbefaler å begrense levetiden på access-tokenet ytterligere, og heller ta i bruk refresh-token.

#### Altinn3 API
For tilgang til Altinn3-tjenestene må man ha en systembruker. Ressursen som systembrukeren må ha for å bli autorisert er `app_skd_formueinntekt-skattemelding-v2`.
Du kan lese mer om systembruker og hvordan systemet ditt kan ta det i bruk under [Systembruker](../om/systembruker.md).

Altinn krever også at man har egne Altinn scopes ved kall mot Altinn3-appen, de aktuelle vil være `altinn:instances.read` og `altinn:instances.write` for sluttbrukersystem.
[https://docs.altinn.studio/nb/authorization/getting-started/authentication/id-porten/](https://docs.altinn.studio/nb/authorization/getting-started/authentication/id-porten/)

For å se maksimal levetid til Altinn sine scopes, finner man oversikt over disse på [DigDir Scopes - Altinn dokumentasjon](https://docs.altinn.studio/nb/api/authentication/digdirscopes/).

### Skatteetaten må gi tilgang
For å kunne bruke API-ene må Skatteetaten gi din virksomhet tilgang.
[Bestill tilgang til API-et](https://www.skatteetaten.no/samarbeidspartnere/sluttbrukersystemer/skattemelding-sbs/#trenger-du-hjelp)

## Teknisk spesifikasjon
Følgende figur gir en en overordnet flyt med aktører og komponenter for innsending av skattemelding med næringsspesifikasjon:

[![Overordnet løsningsoversikt](../../static/download/skattemeldingupersonlig/Komponentoversikt%20skattemelding%20næring%20for%20SBS.png)](../../static/download/skattemeldingupersonlig/Komponentoversikt%20skattemelding%20næring%20for%20SBS.png)

### 1. Hent gjeldende skattemelding
Første steg i innsendingsprosessen er å hente ut den siste gjeldende skattemeldingen. Denne kan ha status utkast eller fastsatt:

* Utkast er en preutfylt skattemelding Skatteetaten har laget for den skattepliktige basert på innrapporterte data og data fra skattemeldingen tidligere år.
* Fastsatt betyr at skattemeldingen er manuelt innlevert eller automatisk innlevert ved utløp av innleveringsfrist. Denne kan også inneholde et eller flere myndighetsfastsatte felter. For mer informasjon om myndighetsfastsatte felter se avsnittet under valider skattemeldingen

#### Utvidet veiledning
Det er mulig å etterspørre eventuelle ubesvarte utvidede veiledninger som del av dette API-et.

En utvidet veiledning representerer opplysninger som Skatteetaten har om skatteyter som muligens burde vært oppgitt i skattmeldingen, men som ikke er det.
Disse opplysningene er gjerne ikke fullstendige, og kan derfor ikke forhåndsutfylles.
Opplysningene vil trolig heller ikke validere mot valideringstjenesten senere i prosessen uten å ha blitt besvart.

Bare "ubesvarte" utvidede veiledninger returneres i responsen. En veiledning kan besvares på to måter:
*Gjennom Skatteetatens innleveringsportal for personlige skatteytere, der de kan velge å avvise eller legge til opplysningene
*Ved innsending av `komplett` skattemelding fra et sluttbrukersystem. Når en slik innsending er fullført og fører til fastsetting, så vil alle ubesvarte veiledninger _på fastsettingstidspunktet_ bli besvart som at de er "hentet av SBS".
  *OBS! Siden nye utvidede veiledninger kan oppstå fortløpende, så finnes det en risiko for at det har kommet nye mellom tidspunktet hvor SBS henter veiledningene og fastsetting utføres. Det er derfor en risiko for at veiledninger som ikke har blitt hentet av SBSen og fremvist bruker blir besvart som det.

#### Hent gjeldende skattemelding for gitt type

### 2. Søk etter eiendomsinformasjon, hent formuesgrunnlag og beregn markedsverdi
Skatteetaten har utviklet egne tjenester for å hente eiendomsinformasjon og formuesgrunnlag fra Eiendomsregisteret, og beregne korrekt markedsverdi.
Eiendomsdataene som hentes ut og beregnes sendes inn til valideringstjenesten og senere som en del av skattemeldingen for at Skatteetaten skal få beregnet korrekt formuesverdi for eiendommene.

#### 2.1 Søk etter eiendom
Søketjenesten brukes til å identifisere hvilken eiendom brukeren ønsker å rapportere.
Tjenesten fungerer som inngangsport til de øvrige eiendomstjenestene, og leverer en eiendomsidentifikator som brukes videre i prosessen.
Det er mulig å søke på alle norske veiadresser, matrikkelnummer og boligselskap ()

### Innlevering av skattemelding med Altinn3 API
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API-spesifikasjonen](https://skd.apps.altinn.no/skd/formueinntekt-skattemelding-v2/swagger/index.html?urls.primaryName=End+user+app+API+for+skd%2Fformueinntekt-skattemelding-v2).
Denne genereres og administreres av Altinn.

#### Draft
Statuser i innsendingstjenesten:
* __Data__: instansen er opprettet og det kan lastes opp data på instansen
* __Confirmation__: data er ferdig lastet opp og man venter på innsending
  * Det kan være et eller to confirmation steg (kun skattepliktig eller skattepliktig og revisor)
  * Det er rollestyrt hvem som har lov til å sette status til feedback (det vil kun være revisorrollen som kan sende til feedback, etter at den skattepliktige har godkjent hvis to steg)
* __Feedback__: data er sendt inn og man avventer tilbakemelding fra Skatteetaten på om skattemeldingen er mottatt
  * Skatteetaten laster dokumenter tilbake til instansen som beskriver resultatet av mottak, deretter endres status til arkivert
* __Arkivert__: data er mottatt OK av Skatteetaten, resultatet er lastet tilbake til Altinn, Altinn instansen arkiveres som innsendt

Fire hovedalternativer (kan velge varianter av disse):
* Komplett innsending, full implementasjon
  * Fullverdig skattemelding
  * Fullverdig næringsspesifikasjon
* Komplett innsending, integrere valideringstjenesten
  * Skattemelding med bruk av validering (reduserer nivået av beregningene man må implementere)
  * Næringsspesifikasjon med bruk av validering (reduserer nivået av beregningene man må implementere)
* Ikke komplett innsending, kun støtte for næringsspesifikasjon
  * Skattemelding, kun returnere utkast + næring
  * Fullverdig næringsspesifikasjon (full beregningsstøtte)
* Ikke komplett innsending, kun støtte for næringsspesifikasjon , integrere valideringstj.
  * Skattemelding, kun returnere utkast + næring
  * Næringsspesifikasjon med bruk av validering

#### TODO: Må sjekke om dataType sendes som query-param eller path + om post Skattemeldingsapp_v2 har dataGuid i path

</TabItem>
<TabItem headerText ="Test" itemKey="itemKey-2">

## Demo for hvordan koble seg på ID-porten og kalle Skatteetatens API
Skatteetaten har utviklet en demoklient (i python/jupyter notebook) som viser hvordan koble seg på ID-porten og kalle
Skatteetatens API, og sende inn skattemeldingen med vedlegg via Altinn3:
[jupyter notebook](../test/testinnsending/person-enk-med-vedlegg-2021.ipynb)

## Testdata for eiendommer
Oversikt over hvilke eiendommer dere kan søke opp ligger i [dette regnearket](Syntetiske_eiendommer_v5.csv)

</TabItem>
</Tabs>

