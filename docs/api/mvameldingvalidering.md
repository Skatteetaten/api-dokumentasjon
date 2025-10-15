---
title: Mva-melding validering API
slug: /api/mvameldingvalidering
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Mva-melding validering, Mva-melding]
keywords: [mva]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---

<Summary>Tjenesten brukes til validering av innsendt Mva-melding.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)

## Hvordan ta i bruk

Valideringstjenesten er tilgjengelig på denne URLen:
```
POST "https://idporten.api.skatteetaten.no/api/mva/grensesnittstoette/mva-melding/valider"
```
Hvor innhold (http body) er mva-meldingen som xml, og med `Content-Type: application/xml` i header.

## Tilgang til API-et

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:mvameldingvalidering`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til API-et. 

[Bestill tilgang til API-et](https://www.skatteetaten.no/samarbeidspartnere/sluttbrukersystemer/mva-melding-sbs/#trenger-du-hjelp)

## Sikkerhet
For mva-meldingvalidering er det ID-porten token som gjelder:

https://samarbeid.digdir.no/id-porten/ta-i-bruk-id-porten/94

https://docs.digdir.no/docs/idporten/oidc/oidc_protocol_id_token.html

</TabItem>

<TabItem headerText="Feilkoder" itemKey="itemKey-2">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.
  
| HTTP Statuskode | Feilområde                                                 |
|-----------------|------------------------------------------------------------|
| 500             | Uventet feil på tjenesten.                                 |
| 500             | Uventet feil i et bakenforliggende system.                 |
| 404             | Ukjent url benyttet.                                       |
| 401             | Feil i forbindelse med autentisering.                      |
| 403             | Feil i forbindelse med autorisering.                       |
| 400             | Feil i forbindelse med validering av inputdata.            |
| 404             | Ingen mva-melding funnet på oppgitt referanse.             |
| 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
  
</TabItem>

<TabItem headerText="Test" itemKey="itemKey-4">

## Url'er til testmiljøet

| Tjeneste |	Url |
|----------|-------|
| Validering | https://idporten-api-test.sits.no/api/mva/grensesnittstoette/mva-melding/valider |

  
</TabItem>
<TabItem headerText="Valideringsregler" itemKey="itemKey-5">

  ## Valideringsregler

Valideringsreglene er under utvikling og nye valideringsregler vil bli lagt til fortløpende.

Følgende valideringsregler er foreløpig definert for alle mva-meldinger:

| Regel |	Beskrivelse                                                                                                                        |
|-------|------------------------------------------------------------------------------------------------------------------------------------|
| R018  | Summen av merverdiavgift for hver avgiftslinje er ikke lik feltet fastsattMerverdiavgift                                           |
| R019  | Beregnet avgift i avgiftslinje er ulik produktet av grunnlag og sats                                                               |
| R074  | Merknader må være gyldig for brukt mva-kode (vanlig fortegn)                                                                       |
| R075  | Merknader må være gyldig for brukt mva-kode (motsatt fortegn)                                                                      |
| R076  | Merknader må være gyldig for brukt mva-kode (linje med spesifikasjon)                                                              |
| R078  | Spesifikasjonslinje som gjelder tilbakeføring av inngående mva. gitt i mva §9-6 og §9-7 må sendes med en merknad                   |
| R079  | KID-nummeret må være gyldig                                                                                                        |
| R082  | Innsendte beløp skal ikke inneholde desimaler                                                                                      |
| R085  | Beløp på grunnlag feltet må være under en maks verdi                                                                               |
| R104  | Meldingen må være en ordinær (aliminnelig eller primærnæring) melding, krav om kompensasjon eller omvendt avgiftsplikt mva-melding |
| R116  | Spesifikasjonslinje som gjelder kjøp med kompensasjonsrett må ha med grunnlag og sats                                              |
| R122  | Merverdiavgift i kodelinjer skal ha lavere beløp enn grunnlaget                                                                    |


<Tabs underline={true}>
<TabItem headerText="Alminnelig- og primærnæring" itemKey="itemKey-1" default>
Følgende valideringsregler er foreløpig definert for ordinær (alminnelig og primærnæring) mva-meldinger:

| Regel      |	Beskrivelse                                                                                                                                             |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| R020       | Merknad til beløp med motsatt fortegn som gjelder grunnlag og utgående avgift mangler                                                                    |
| R021       | Merknad til beløp med motsatt fortegn som gjelder fradragsført inngående avgift mangler                                                                  |
| R023       | Fradragsført inngående avgift som gjelder varer kjøpt fra utlandet med fradragsrett, skal være mindre enn eller lik utgående avgift (kode 81)            |
| R024       |  Fradragsført inngående avgift som gjelder varer kjøpt fra utlandet med fradragsrett, skal være mindre enn eller lik utgående avgift (kode 83)           |
| R025       |  Fradragsført inngående avgift som gjelder tjenester kjøpt fra utlandet med fradragsrett skal være mindre enn eller lik utgående avgift (kode 86)        |
| R026       |  Fradragsført inngående avgift som gjelder tjenester kjøpt fra utlandet med fradragsrett skal være mindre enn eller lik utgående avgift (kode 88)        |
| R027       |  Fradragsført inngående avgift som gjelder kjøp av klimakvoter og gull med fradragsrett, skal være mindre enn eller lik utgående avgift                  |
| R028       |  Utgående avgift skal være beregnet dersom det er ført fradrag for inngående avgift som gjelder kjøp av varer fra utlandet med fradragsrett (kode 81)    |
| R029       |  Utgående avgift skal være beregnet dersom det er ført fradrag for inngående avgift som gjelder kjøp av varer fra utlandet med fradragsrett (kode 83)    |
| R030       |  Utgående avgift skal være beregnet dersom det er ført fradrag for inngående avgift som gjelder tjenester kjøpt fra utlandet med fradragsrett (kode 86)  |
| R031       |  Utgående avgift skal være beregnet dersom det er ført fradrag for inngående avgift som gjelder tjenester kjøpt fra utlandet med fradragsrett (kode 88)  |
| R032       |  Utgående avgift skal være beregnet dersom det er ført fradrag for inngående avgift som gjelder kjøp av klimakvoter og gull med fradragsrett             |
| R033       |  Det skal være fradragsført inngående avgift dersom det er beregnet utgående avgift ved kjøp av varer fra utlandet med fradragsrett (kode 81)            |
| R034       |  Det skal være fradragsført inngående avgift dersom det er beregnet utgående avgift ved kjøp av varer fra utlandet med fradragsrett (kode 83)            |
| R035       |  Det skal være fradragsført inngående avgift dersom det er beregnet utgående avgift for tjenester kjøpt fra utlandet med fradragsrett (kode 86)          |
| R036       |  Det skal være fradragsført inngående avgift dersom det er beregnet utgående avgift for tjenester kjøpt fra utlandet med fradragsrett (kode 88)          |
| R037       |  Det skal være fradragsført inngående avgift dersom det er beregnet utgående avgift ved kjøp av klimakvoter og gull med fradragsrett                     |
| R038       |  Spesifikasjonslinje som gjelder tap på krav kan kun sendes inn på mva-kode 1, 11, 12 eller 13                                                           |
| R039       |  Spesifikasjonslinje som gjelder uttak kan kun sendes inn på mva-kode 3, 5, 31 eller 3                                                                   |
| R040       |  Spesifikasjonslinje som gjelder justering kan kun sendes inn på mva-kode 1 eller 81                                                                     |
| R041       |  Spesifikasjonslinje som gjelder tilbakeføring av inngående mva. gitt i mva §9-6 og §9-7 kan kun sendes inn på mva-kode 1 eller 81                       |
| R047       |  Oppgitt meldingskategori skal stemme med opplysningene i mva-registeret (alminnelig)                                                                    |
| R048       |  Oppgitt meldingskategori skal stemme med opplysningene i mva-registeret (primær                                                                         |
| R049       |  Oppgitt skattleggingsperiodetype skal stemme med opplysningene i mva-registeret (alminnelig)                                                            |
| R050       |  Oppgitt skattleggingsperiodetype skal stemme med opplysningene i mva-registeret (primær)                                                                |
| R051       |  Rapporterende enhet i en fellesregistrering skal ha mva-plikt                                                                                           |
| R052       |  Avgiftspliktig omsetning skal være under en million for alminnelig næring plikter med årlig skattleggingsperiode                                        |
| R053       |  Spesifikasjonslinjer skal ha en gyldig mva-kode i mva-meldinger som gjelder en alminnelig næring plikt                                                  |
| R054       |  Spesifikasjonslinjer skal ha en gyldig mva-kode i mva-meldinger som gjelder en primærnæring plikt                                                       |
| R059       |  Mva-meldingen skal ikke sendes inn før gjeldende skattleggingsperiode er ferdig (alminnelig)                                                            |
| R060       |  Mva-meldingen skal ikke sendes inn før gjeldende skattleggingsperiode er ferdig (primær)                                                                |
| R061       |  Mva-meldinger for tidligere terminer skulle vært levert                                                                                                 |
| R062       |  Mva-meldinger for tidligere terminer skulle vært levert og derfor vil avgift til gode for denne terminen ikke bli utbetalt                              |
| R065, R081 |  Inngående mva. skal føres uten grunnlag og sats                                                                                                         |
| R066, R081 |  Utgående mva. skal føres med grunnlag og sats                                                                                                           |
| R072       |  Oppgitt skattleggingsperioden skal stemme med opplysningene i mva-registeret (alminnelig)                                                               |
| R073       |  Oppgitt skattleggingsperioden skal stemme med opplysningene i mva-registeret (primær)                                                                   |
| R080       |  Kontonummer må være registrert for meldinger som kunne føre til en utbetaling                                                                           |
| R083       |  Fradrag for inngående avgift skal normalt ikke føres på en plikt som gjelder engangsregistrering                                                        |
| R084       |  Det må sendes inn spesifikasjonslinjer når det er oppgitt beløp i 'fastsatt merverdiavgift' feltet                                                      |



* Spesifikasjonslinje som gjelder kjøp med kompensasjonsrett kan kun sendes inn på mva-kode 81, 83, 86, 88 eller 91 (R114) 
* Beløpet på koden og spesifikasjonslinje som gjelder kjøp med kompensasjonsrett skal ikke være like (R115)
* Merverdiavgiften kan ikke være beregnet til 0 når det er oppgitt grunnlag for avgift. (R127)
* Virksomheten er ikke registrert i Enhetsregisteret og kan ikke sende inn mva-melding. (R131)
* Leveringsfristen for denne terminen utløp for mer enn tre år siden. Vi vil derfor behandle mva-meldingen som en anmodning om endring. (R132)
* Utløpsdatoen for terminen er mer enn fem år tilbake og må behandles som søknad om anmodning om endring i henhold til sktfvl § 9-4 annet ledd. (R133)

Følgende regler gjelder for alle meldingskategorier som ikke er eHandel:
* Virksomheten har organisasjonsform UDEF (R126)

Følgende tekniske regler er også spesifisert som validerer xsd format og kodelister verdier:
* Mva-meldingen skal være på gyldig format (R001)
* Spesifikasjonslinjer skal bare bruke kjente mva-koder (R002)
* Spesifikasjonslinjer skal bare bruke gyldige satser (R003)
* Spesifikasjonslinjer skal bare bruke kjente spesifikasjoner (R069)
* Spesifikasjonslinjer skal bare bruke kjente merknader på utvalgt merknad felt (R070)
* Mva-meldingen skal bare bruke en kjent merknad på utvalgt merknad felt (R071)

Følgende praktiske regler er også definert for å hindre feilaktige innsendinger til det nye systemet:
* Innsending og validering tjeneste er ikke tilgjengelig før 01.01.2022 for ordinær (aliminnelig eller primærnæring) mva-meldinger (R000)
* Innsending og validering av ordinær (alminnelig eller primærnæring) mva-meldinger fra før 2022 er ikke tilgjengelig (R077)
</TabItem>

<TabItem headerText="Omvendt avgiftsplikt" itemKey="itemKey-2" default>
Følgende valideringsregler er foreløpig definert for mva-meldinger for omvendt avgiftsplikt:

* Terminlengde må være 3-månedlig (R106)
* Merknad til beløp med motsatt fortegn som gjelder grunnlag og utgående avgift mangler (R108)
* Spesifikasjonslinjer skal ha en gyldig mva-kode i mva-meldinger for omvendt avgiftsplikt (R113)
* Det må sendes inn spesifikasjonslinjer når det er oppgitt beløp i 'fastsatt merverdiavgift' feltet (R107)
* Utgående mva. skal føres med grunnlag og sats (R109)
* Det skal ikke føres beløp både for koden og tilhørende spesifikasjon (R112)
* Spesifikasjonslinje som gjelder tilbakeføring av inngående mva., tap på krav og uttak kan ikke sendes inn på mva-meldinger for omvendt avgiftsplikt (R110)
* Spesifikasjonslinje som gjelder kjøp med kompensasjonsrett kan kun sendes inn på mva-kode 86, 88 og 91 (R111)
* Innsendte koder stemmer ikke med beløpet oppgitt i 'fastsatt merverdiavgift' felt (R119)
* 'fastsatt merverdiavgift' beløpet skal ikke være kr 0 (R118)
* Summert grunnlag må være over kr 2 000 (R117)
* Det finnes en aktiv plikt i mva-registeret for deler av perioden mva-meldingen for omvendt avgiftsplikt gjelder for (R123)
* Koden må inneholde spesifikasjon 'Kjøp med kompensasjonsrett (R124)
* Meldingen kan ikke sendes inn før terminen har utløpt. (R120)

Følgende tekniske regler er også spesifisert som validerer xsd format og kodelister verdier:

* Mva-meldingen skal være på gyldig format (R001)
* Spesifikasjonslinjer skal bare bruke kjente mva-koder (R002)
* Spesifikasjonslinjer skal bare bruke gyldige satser (R003)
* Spesifikasjonslinjer skal bare bruke kjente spesifikasjoner (R069)
* Spesifikasjonslinjer skal bare bruke kjente merknader på utvalgt merknad felt (R070)
* Mva-meldingen skal bare bruke en kjent merknad på utvalgt merknad felt (R071)

Følgende praktiske regler er også definert for å hindre feilaktige innsendinger til det nye systemet:

* Innsending og validering tjeneste er ikke tilgjengelig før 01.02.2023 for mva-meldinger for omvendt avgiftsplikt (R105)
* Innsending og validering av mva-melding for omvendt avgiftsplikt fra før 2023 er ikke tilgjengelig (R103)
</TabItem>


<TabItem headerText="Kompensasjonsmelding" itemKey="itemKey-3" default>

Følgende valideringsregler er foreløpig definert for krav om kompensasjon mva-meldinger:

* Mva-meldingen kan ikke sendes inn før terminen har utløpt (R089)
* Terminlengde må være 2-månedlig (R095)
* Merknad til beløp med motsatt fortegn som gjelder fradragsført inngående avgift mangler (R086)
* Spesifikasjonslinjer skal ha en gyldig mva-kode i krav om kompensasjon mva-meldinger (R088)
* Kodelinjer skal føres med grunnlag og sats (R093)
* Det må sendes inn spesifikasjonslinjer når det er oppgitt beløp i 'fastsatt merverdiavgift' feltet (R100)
* Virksomheter som er registrert som et kommunalt foretak kan ikke sende inn mva-meldingen (R094)
* Mva-meldingen må sendes inn før innleveringsfristen for terminen (R096)
* Endring av krav om kompensasjon innsendt etter innleveringsfristen kan ikke være mer til gode enn det som allerede er sendt inn (R097)
* Første krav om kompensasjon for terminen kan ikke være 0 kroner (R098)
* Første krav om kompensasjon til utbetalig for året må være på minst 20 000 kroner (R099)
* Koder 81 og 83 kan kun brukes av registrerte virksomheter (R101)
* Spesifikasjonslinje som gjelder justering kan kun sendes inn på mva-kode 1, 14 eller 81 (R087)
* Spesifikasjonslinje som gjelder tap på krav, uttak eller tilbakeføring av inngående mva. er ugyldig (R091)
* Virksomheter som er registrert som et fylkeskommunalt foretak kan ikke sende inn mva-meldingen (R128)
* Virksomheter som er registrert som et organisasjonsledd kan ikke sende inn mva-meldingen (R129)
* Virksomheter som er registrert som en underenhet får avvikende skattemelding (R130)

Følgende tekniske regler er også spesifisert som validerer xsd format og kodelister verdier:

* Mva-meldingen skal være på gyldig format (R001)
* Spesifikasjonslinjer skal bare bruke kjente mva-koder (R002)
* Spesifikasjonslinjer skal bare bruke gyldige satser (R003)
* Spesifikasjonslinjer skal bare bruke kjente spesifikasjoner (R069)
* Spesifikasjonslinjer skal bare bruke kjente merknader på utvalgt merknad felt (R070)
* Mva-meldingen skal bare bruke en kjent merknad på utvalgt merknad felt (R071)

Følgende praktiske regler er også definert for å hindre feilaktige innsendinger til det nye systemet:

* Innsending og validering tjeneste er ikke tilgjengelig før 01.01.2023 for krav om kompensasjon mva-meldinger (R090)
* Innsending og validering av krav om kompensasjon mva-meldinger fra før 2023 er ikke tilgjengelig (R092)

</TabItem>
</Tabs>
</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-6"> 

## Eksempel på valideringsreglene

Validering av mva-meldingen er implementert med et sett av regler som kjøres maskinelt for å sjekke gyldigheten av meldingen. 
Reglene er utformet slik at de både er dokumentasjon av reglene for meldingen og kjørbare maskinelt.

### UGYLDIG SKATTEMELDING MVA

```kotlin
MVA_MELDINGSINNHOLD_UTGÅENDE_MOTSATT_FORTEGN_MERKNAD_TIL_MVA_KODEN_MANGLER(
"Det må fylles ut merknad som forklarer hvorfor det er benyttet motsatt fortegn for grunnlag og utgående merverdiavgift."{
            valideringsregel {
                ((meldingskategori er alminnelig) eller (meldingskategori er primærnæring)) såSkal {
                    kodene(3, 6, 31, 32, 33, 51, 52, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92)
                        .hvor { linje -> linje.grunnlag erMindreEnn 0.0 }
                        .skal { linje ->
                            (linje.merknad?.beskrivelse har innhold) eller
                                (linje.merknad?.utvalgtMerknad har innhold)
                        }
                }
            }
            alvorlighetsgrad { UGYLDIG_SKATTEMELDING }
            kategori { MELDINGSINNHOLD }
            regelnummer { R020 }
        }
    )
```


### AVVIKENDE SKATTEMELDING MVA

```kotlin
MVA_MELDINGSINNHOLD_SUM_MVA_FEIL_SUMMERING_AV_AVGIFTLINJER(
"Summen av merverdiavgift for alle kodelinjene er ikke lik beløpet som er oppgitt som fastsatt merverdiavgift."        
 { 
            valideringsregel {
                mvaSpesifikasjonslinje.summenAv { linje ->
                    linje.merverdiavgift
                } skalVære skattegrunnlagOgBeregnetSkatt.fastsattMerverdiavgift
            }
            alvorlighetsgrad { AVVIKENDE_SKATTEMELDING }
            kategori { MELDINGSINNHOLD }
            regelnummer { R018 }
        }
    
)
```

</TabItem>
</Tabs>

