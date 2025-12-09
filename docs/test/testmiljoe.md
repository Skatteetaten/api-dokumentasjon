---
title: Testmiljø og testdata
slug: /test/testmiljo
folder: test
sidebar: mydoc_sidebar
datatable: true
tags: [Test, Testmiljø, Testdata]
keywords: [Test, Testmiljø, Testdata]
last_updated: Des 1, 2022
hide_table_of_contents: true
---
<Summary>Det skal utelukkende benyttes syntetiske testdata ved test av Skatteetatens API-er. Det er ikke tillatt å bruke skarpe data i test.</Summary>

## Testmiljø

Skatteetaten har to testmiljø for eksterne virksomheter som tester tjenester fra Skatteetaten: 
* et testmiljø hvor man kan teste Skatteetatens delingstjenester
* et testmiljø for test av innsending av data til Skatteetaten, f.eks. innrapportering av grunnlagsdata, skattemelding og mva-melding.

I dokumentasjonen av API-ene, f.eks. i Open API spesifikasjonen, oppgis hvilken URL som skal benyttes for test av de ulike API-ene. I de fleste tilfeller vil ikke eksterne se på URL-en hvilket  av Skatteetatens bakenforliggende miljø de tester mot, men dersom dere skal teste både innrapportering og deling, vil dere kunne oppleve at data ikke henger sammen siden det er to ulike miljøer.

## Testdata
Skatteetatens testmiljøer for eksterne inneholder Test-Norge:

* Testpersoner fra syntetisk Folkeregister, obs. +80 på måneden
* Testvirksomheter fra syntetisk Enhetsregister, obs. organisasjonsnumrene starter på 2 og 3

Miljøet inneholder også syntetiske skattedata, både skatteoppgjør og skattemeldinger, med tilhørende skatteplikt, inntekter og andre grunnlagsdata.

Formålet med testdataene er å understøtte integrasjonstest mellom Skatteetaten og eksterne virksomheter. Fokus for integrasjonstesten er på grønne løp, og dataene er ikke ment å representere noen uttømmende funksjonell bredde. For funksjonell testing forventes det at den enkelte virksomhet selv tilrettelegger egne syntetiske testdata, og mocker/simulerer de eksterne tjenestene.

De gamle Altinn testdatasettene er ikke lengre tilgjengelige i Skatteetatens eksterne testmiljør.

## Testdata som ikke er søkbare i Tenor-testdatasøk

Enkelte testdata er ikke mulig å søke opp gjennom [Tenor testdatasøk](./tenor.md).

### Skatteoppgjør for personer med strengt fortrolig adressegradering

Det er pt. ikke mulig å søke i Tenor etter skatteoppgjør for personer med adressegradering "Strengt fortrolig". Noen eksempler er derfor listet her:

| Fødselsnummer | Adressebeskyttelse |
|---| --- |
| 16822548834	| Strengt fortrolig |
| 11812448848 | Strengt fortrolig |
| 19872347995 | Strengt fortrolig |
| 09817397848 | Strengt fortrolig |
| 24887198515 | Strengt fortrolig |

* Skatteoppgjør for personer uten adressebeskyttelse kan finnes i Tenor med søkene for "Summert skattegrunnlag" eller "Beregnet skatt".
* Skatteoppgjør for personer med adressebeskyttelse "Fortrolig" kan finnes ved å kombinere Tenor søkene for "Summert skattegrunnlag" eller "Beregnet skatt" med søket for "Folkeregisteret" og feltet "Adressebeskyttelse".

### Historiske testdata for inntekt og skatteoppgjør

Det er pt. ikke mulig å søke i Tenor etter testdata langt tilbake i tid, enkelte testdata er derfor listet her:

| Personidentifikator | Inntektsdata | Skatteoppgjør/skattegrunnlag | Kommentar |
|---|---|---|---|
| 21828296334 | Komplett 2016<br /> Komplett 2017<br /> Januar - September 2018<br />Komplett 2019<br />| Skatteoppgjør 2017<br />Skatteoppgjør 2018 2) |  Tilsvarer Iver Psa Høk (01029413157) i gammelt testmiljø | 
| 29846799816 (fortrolig adressebeskyttelse) | Har ingen | Skatteoppgjør 2017<br />Skatteoppgjør 2018 2)<br />Skatteoppgjør 2019 1)| Tilsvarer Morten Minstemann Val-Aa med skjermingskode 7 (04057849687) i gammelt testmiljø | 
| 07929899274 | Januar - September 2018<br />Komplett 2019<br />| Skatteoppgjør 2018 2) | Tilsvarer Karl Karlstad (18017749532) i gammelt testmiljø |
| 12890948845 | Januar - September 2018<br />Komplett 2019<br />| Skatteoppgjør 2018 1)<br />Skatteoppgjør 2019 1)<br />| Tilsvarer Nille Psa Augestad (18018200283) i gammelt testmiljø |
| 02827398406 | Har ingen | Skatteoppgjør 2017<br />Skatteoppgjør 2018 1)<br />Skatteoppgjør 2019 1)<br />| Tilsvarer Magne Løvik (07078600378) i gammelt testmiljø |
| 08838174893 | Komplett 2017<br />| Skatteoppgjør 2017 (Svalbard)<br />Skatteoppgjør 2018 (Svalbard) 2)<br />Skatteoppgjør 2019 (Svalbard) 2) | Tilsvarer Tone Olsen (02099900434) i gammelt testmiljø |
| 11815994657 | Komplett 2017 | Skatteoppgjør 2017 (fastland og Svalbard)<br />Skatteoppgjør 2018 (fastland og Svalbard) 2)<br />Skatteoppgjør 2019 (fastland og Svalbard) 2) | Tilsvarer Nils Nilsen (02116049964) i gammelt testmiljø |
| 22909174493 | Har ingen | Kildeskattkvittering 2019 | Tilsvarer Lalla Lakerol (16127049657) i gammelt testmiljø |
| 14858397074 | Har ingen | Kildeskattkvittering og Skatteoppgjør fastland 2019 | Tilsvarer Magne Moldskred (01025102335) i gammelt testmiljø |

1) Spesifikasjonene til spesifisert summert skattegrunnlag kommer fra ny løype (Sirius) <br />
2) Spesifikasjonene til spesifisert summert skattegrunnlag kommer fra gammel løype (SL)



