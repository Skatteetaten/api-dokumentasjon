---
title: Avansert bruk Innrapportering skattemelding API
slug: /api/innrapportering-skattemelding-viderekomne
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skattemelding]
keywords: [skattemelding]
last_updated: Oct 22, 2026
hide_table_of_contents: true
---

Denne siden inneholder informasjon for leverandører som har en fungerende integrasjon mot Skatteetaten og Altinn,
og som trenger å søke opp spesifikke detaljer knyttet til integrasjonene.
Følgende lenker kan være nyttige:

| Lenke                                                                                                                                                                                                  | Beskrivelse                                                                                                                |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| [Skatteetatens fellessider for systemleverandører](https://www.skatteetaten.no/samarbeidspartnere/sluttbrukersystemer/skattemelding-sbs/)                                                              | Informasjon og oppdateringer for systemleverandører med integrasjon mot skattemeldingen for person og næring.              |
| [Veilederen](https://skattemelding-veileder.formueinntekt.skatt.skatteetaten.no/)                                                                                                                      | Veilederen for feltene i skattemeldingen og næringsspesifikasjonen. Hovedkilden for beskrivelse av innholdet i XSD-filene. |
| [Begrepskatalogen](https://data.skatteetaten.no/web/datakatalog/begreper)                                                                                                                              | Dokumentasjon av begreper brukt i XSD-filene hvor det er henvisning til `begrepsreferanse`                                 |
| [OpenAPI-spesifikasjon for Skatteetatens tjenester](pathname:///download/skattemeldingupersonlig/openapi.html)                                                                                         | Utkast til OpenAPI-spesifikasjon for Skatteetatens API-er.                                                                 |
| [OpenAPI-spesifikasjon for Altinn3-appen](https://skd.apps.altinn.no/skd/formueinntekt-skattemelding-v2/swagger/index.html?urls.primaryName=End+user+app+API+for+skd%2Fformueinntekt-skattemelding-v2) | OpenAPI-spesifikasjon for Altinn3-appen som håndterer instans og innsending av skattemeldingen med næringsspesifikasjon.   |
| [Tjenesteoversikten fra Altinn](https://tjenesteoversikten.no/resource/app_skd_formueinntekt-skattemelding-v2)                                                                                         | Beskrivelse av tilgangspakker tilgjengelige for skattemeldingen                                                            |
| [Informasjonsmodell og kodeverk](https://github.com/Skatteetaten/skattemeldingen/blob/master/docs/informasjonsmodell/README.md)                                                                        | Oversikt over gjeldende versjoner av XSD-filene                                                                            |

Det refereres for øvrig til de andre sidene i API-dokumentasjonen for dokumentasjon av den generelle innsendingsprosessen:
- [Utfyllingstjenester](../api/innrapportering-skattemelding-utfylling.md)
- [Innsendingstjenester](../api/innrapportering-skattemelding-innsending.md)
- [Andre tjenester](../api/innrapportering-skattemelding-andre-tjenester.md)
- [Skatt dialogdokumenter](../api/skattdialogdokumenter): Ikke direkte tilknyttet innrapportering av skattemelding, men støtter
  uthenting av dokumenter som tilgjengeliggjøres i dialoger for formues- og inntektsskatt, blant annet skatteoppgjør og brev om skattemeldingen.

## Spesielle forhold i skattemeldingen for personlig skattepliktige
### Preutfylling
* Eier man del av en eiendom, preutfylles hele eiendommens markedsverdi og tilhørende andel formuesverdi som den skattepliktige
  er skattepliktig for.
* Lønnsinntekt overført fra barn til foreldre preutfylles med den lønnsinntekten barnet hadde i begge foreldres skattemelding.
  Forsørgerprosenten styrer hvilken andel av inntekten de beskattes for.
* Ønsker man å overføre eksempelvis bank eller utleieinntekter, vil det være mulig å angi i prosent hvor stor del av totalen en selv skal
  være skattepliktig for og beregne tilhørende andel formue/inntekt som den skattepliktige er skattepliktig for.
* På foreldrefradrag for ektefeller/samboere vil begges kostnader og begges barn preutfylles i begges skattemelding og man vil
  deretter fordele foreldrefradraget andelsmessig.
### Innbo - prosentandel av bunnfradrag
Siden bunnfradraget gjelder for begge ektefeller, angis prosentandelen av bunnfradraget den enkelte skal benytte.
Denne brukes i fastsettingsberegningen for å komme frem til skattepliktig beløp.
### Foreldrefradag – økning skal kun tillegges en selv, ikke den andre
Man benytter som hovedregel ikke prosentfordeling av foreldrefradrag som beskrevet for innbo over. På foreldrefradrag vil man i stedet
angi andelen av totalfradraget som skal overføres til ektefelle, og resten vil i fastsettingsberegningen tilfalle en selv.
Årsaken er at det en ektefelle legger til (som mangler i utkast), skal i sin helhet legges til denne skattemelding.
### Gaver til frivillige – får ikke fradrag for det som ikke er innrapportert
Fastsettingsberegningen på gaver til frivillige sjekker hva det har blitt innrapportert grunnlagsdata på og det er kun det man får fradrag for uavhengig
av hva som er innrapportert. Det vil være mulig å redusere beløpet, men ikke øke det til over det vi har 3.parts data på.

## Spesielle forhold i skattemeldingen for upersonlig skattepliktige
### Beregning av verdsettingsrabatt for selskaper som hhv betaler og ikke betaler formuesskatt
Som hovedregel betaler ikke selskaper formuesskatt. For disse selskapene vil fastsettingsberegningene IKKE returnere verdier for
følgende avledede felter:

* formuesverdi
* verdsettingsrabatt

For å ikke få avvik i valideringstjenesten som gjør at innsending avvises er det viktig å ikke sende inn verdier på
verdsettingsrabatt og formuesverdi når selskapet ikke betaler formuesskatt.

Selskaper som betaler formuesskatt (og hvor valideringstjenesten da beregner verdsettingsrabatt og formuesverdi) er:
* Sparebank, gjensidig forsikringsselskap og samvirkeforetak betaler formuesskatt til kommunen etter reglene i skatteloven
* Annet selskap og sammenslutning betaler formuesskatt til staten etter reglene i skatteloven

## Overføring av tall i næringsspesifikasjonen
Det er tre "informasjonsgrupper" som overføres fra næringsspesifikasjon til skattemeldingene :
* FordelingAvNæringsinntekt
    * Næringstype, beløp, andel innehaver, både totalbeløpet og andel innehaver som overføres til skattemeldingen.
* Personinntekt fra enkeltpersonforetak (kun til skattemelding personlig)
    * Bruker samme id som på næringsinntekt for å klare å summere inn på samme forekomst i skattemeldingen (identifikatorForFordelingAvNæringsinntektOgPersoninntekt)
  * SamletGjeldOgFormuesobjekter (kun til skattemelding personlig)
      * Her summeres opp fra balanse det som skal overføres videre til skattemeldingen. Formuespostene er splittet på om formuen gir
        verdsettingsrabatt eller ikke og videre andelsmessig redusert med den andelen som skal overføres til innehaver

*På skattemelding upersonlig må eiendeler som inngår i samlet verdi bak aksjene i selskapet fastsettes direkte i skattemeldingen. Det overføres ikke
verdier fra balanseregnskapet inn i skattemeldingen.

## Overføring fra næringsspesifikasjonen til skattemeldingen
Følgende egenskap ligger på alle balansekontoer i næringsspesifikasjon: `ekskluderesFraSkattemeldingen`.
Dersom en formuespost ikke skal overføres til skattemeldingen (som regel fordi informasjonen allerede er preutfylt i skattemeldingen), så angis det
her. Da skal kontoen ikke summeres opp til samletGjeldOgFormuesobjekter og følgelig heller ikke bli summert til skattemeldingen.

Det ligger en endringsårsak på preutfylte kort i skattemeldingen som angir at "_Verdien i denne posten inngår i formue overført fra næringsspesifikasjon_".
Denne kan brukes dersom man setter preutfylte verdier til 0 som følge at av tallet er tatt inn fra næringsspesifikasjonen.

Det er opp til innsender/skattepliktig å velge hvordan man styrer formue fra næring - om man vil beholde preutfylling og markere at kontoen ikke skal
overføres eller omvendt.