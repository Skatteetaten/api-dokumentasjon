---
title: Testmiljø og testdata
slug: /testmiljo
folder: test
sidebar: mydoc_sidebar
datatable: true
tags: [API data]
keywords: [testdata]
last_updated: Des 1, 2022
hide_table_of_contents: true
---
<summary>Testdata i Skatteetaens testmiljø for eksterne virksomheter.</summary>

## Test Norge
Skatteetatens testmiljø for eksterne virksomheter som skal teste delingstjenester inneholder:

- Testpersoner fra syntetisk Folkeregister
- Testorganisasjoner fra syntetisk Enhetsregister
- Syntetiske skattedata er produsert på den syntetiske testbefolkningen, både skatteoppgjør og skattemeldinger, med tilhørende skatteplikt, inntekter og andre grunnlagsdata. 

Obs. Altinn testdatasettene er ikke lengre tilgjengelige i det testmiljøet (api-test). 

Formålet med testdataene er å understøtte integrasjonstest Skatteetaten og eksterne virksomheter.
Fokus for integrasjonstesten er på grønne løp, og dataene er ikke ment å representere noen uttømmende funksjonell bredde.
For funksjonell testing forventes det at den enkelte virksomhet selv tilrettelegger egne syntetiske testdata, og mocker/simulerer de eksterne tjenestene.

## Testdata som ikke er søkbare i Tenor-testdatasøk

### Skatteoppgjør 2021 for personer med strengt fortrolig adressegradering

Det er pt. ikke mulig å søke etter skatteoppgjør for personer med adressegradering "Strengt fortrolig" i Tenor. Noen eksempler er derfor listet her:

| Fødselsnummer | Adressebeskyttelse |
|---| --- |
| 16822548834	| Strengt fortrolig |
| 11812448848 | Strengt fortrolig |
| 19872347995 | Strengt fortrolig |
| 09817397848 | Strengt fortrolig |
| 24887198515 | Strengt fortrolig |

Skatteoppgjør for 2021 for personer uten adressebeskyttelse kan finnes med Tenor-adaptere for skatteoppgjør ("Summert skattegrunnlag" eller "Beregnet skatt").
Skatteoppgjør for 2021 for personer med adressebeskyttelse "Fortrolig" kan finnes ved å kombinere Tenor-adapter for skattegjør med Tenor-adapter for Folkeregisteret og feltet Adressebeskyttelse.

### Historiske testdata for inntekt og skatteoppgjør

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



