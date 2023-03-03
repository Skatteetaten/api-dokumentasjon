---
title: Rettighetspakker
slug: /rettighetspakker
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Service Description]
last_updated: Feb 23, 2017
keywords: [a-ordning, oppgave, arbeidsgiver, lønn, inntektsmottaker]
hide_table_of_contents: true
---
<summary>Her finner du sentrale prinsipper knyttet til hvordan Skatteetaten styrer hvilke opplysninger som utleveres.</summary>

## Rettighetspakker

> *Rettighetspakke:* Et sett regler som styrer hvilke data som utleveres til behandlingsansvarlig virksomhet. Rettighetspakker styrer skjerming, filtrering og detaljnivå for data som utleveres.

Virksomheter kan ha ulikt rettslig grunnlag for behandling og utlevering av opplysninger. Skatteetaten etablerer rettighetspakker basert på en juridisk vurdering av behandlingsgrunnlaget. Rettighetspakken styrer:

 * Skjerming, regler for skjerming av enkeltopplysninger eller hele datasettet basert på personens skjermingsbehov og virksomhetens rettigheter.   
 * Filtrering, dvs hvilke opplysninger i datasettet som utleveres til den enkelte virksomhet. Se informasjonsmodell for hvert datasett for informasjon om hvilke opplysninger som kan utleveres.

## Skjerming

Noen personer har gradert adresse etter beskyttelsesinstruksen. Utlevering av adresseopplysninger og geolokaliserende opplysninger om disse personene vurderes ved etablering etter gitte kriterier.

Noen relevante regler er:
 * [Beskyttelsesinstruksen](https://lovdata.no/dokument/INS/forskrift/1972-03-17-3352)
 * [Folkeregisterlovens regler om utlevering av opplysninger](https://lovdata.no/dokument/NL/lov/2016-12-09-88/KAPITTEL_10#%C2%A710-4)

Hvis data for en person skal skjermes for en bestemt virksomhet vil informasjon som potensielt kan bidra til å avsløre hvor personen oppholder seg ikke utleveres fra Skatteetaten. Vi utleverer i slike tilfeller et redusert datasett som har vært gjennom en skjermingsprosess, der hele eller deler av datasettet er skjermet. Når vi har skjermet data legger vi til informasjon som sier at data har blitt skjermet:

```bash
"skjermet": true
```

### Eksempel

 * Ola har skjerming (gradert adresse)
 * Virksomheten AS har en rettighetspakke som ikke gir tilgang til noen opplysninger om personer med skjerming
 * Eksempeletaten har en rettighetspakke som gir tilgang til opplysninger som ikke er geolokaliserende for personer med skjerming

Virksomheten AS leser Ola sitt Skattegrunnlag. Alle opplysningene er fjernet og responsen vil kun inneholde parametre fra tjenestekallet, samt “skjermet”: true.

Eksempeletaten leser Ola sitt Skattegrunnlag. Geolokaliserende opplysninger (hvor han bor, hvem arbeidsgiver er, etc) er fjernet og responsen er merket “skjermet”: true. Hvis datasettet ikke inneholder geolokaliserende opplysninger så blir ingen opplysninger skjermet, og responsen er merket “skjermet”: false.
 
## Filtrering

Personopplysningsloven, Skatteforvaltningsloven og andre lover og forskrifter regulerer hvilke data Skatteetaten kan utlevere. Ut i fra vurdering av behov og lovregulert behandlingsgrunnlag vil virksomheter få tilgang til deler av et datasett, herunder spesifisering av hva som inngår i informasjonselementene i datasettet der dette er aktuelt.

Vurderinger av hvilke opplysninger som ikke utleveres er gjerne begrunnet med:
 * at opplysningene ikke er nødvendige for virksomhetens oppgaveløsning (opplysninger om barn, opplysninger om vurderinger skatteetaten har gjort, etc)
 * at opplysninger er sensitive (fagforeningskontingent, sykdomsrelatert, etc)

Å identifisere hva som kan utleveres er del av prosessen med å søke tilgang til tjenestene.

