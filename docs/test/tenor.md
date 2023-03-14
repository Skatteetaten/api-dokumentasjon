---
title: Tenor testdatasøk
slug: /tenor
folder: test
sidebar: mydoc_sidebar
datatable: true
tags: [Test, Testdata, Tenor]
keywords: [Test, Testdata, Tenor]
last_updated: Aug 16, 2021
hide_table_of_contents: true
---
<summary>Tenor testdatasøk er en søkeløsning som kan benyttes for å finne testdata i Skatteetatens testmiljø.</summary>

## Selvbetjening
Skatteetatens mål er at virksomheter skal være mest mulig selvbetjente med testdata, ved å søke etter relevante testdata i Tenor testdatasøk. Testdata i Skatteetatens eksterne testmiljø gjøres søkbare gjennom Tenor testdatasøk, og vi ønsker å dokumentere minst mulig statiske testdata i tabeller på Github.

Testdata som identifiseres gjennom Tenor testdatasøk, kan benyttes når man tester Skatteetatens tjenester.

## Tenor
Testdata i skatteetatens eksterne testmiljø kan søkes opp gjennom Tenor testdatasøk:

* Lenke til [Tenor](https://www.skatteetaten.no/skjema/testdata/)
* Tenor er en løsning for  alle som driver systemutvikling og som trenger testdata, se mer overordnet info hos [Digdir](https://www.digdir.no/digitale-felleslosninger/tenor-testdatasok/1284).
* Tenor forvaltes av Skatteetaten, se teknisk info på [github](https://skatteetaten.github.io/testnorge-tenor-dokumentasjon/).

Skatteetaten vil tilrettelegge søkeadaptere for sine datatyper i Tenor. Informasjon om hvilke Tenor-søk som kan benyttes for å finne testdata for de ulike tjenestene er listet på de enkelte tjeneste-sidene.

## Kildedata
I Tenor er det en tab for "Kildedata", dette er en representasjon av feltene i testdataene, men viser ikke responsen slik de er i de eksterne tjenestene. Open API spesifikasjonen (evt. Github) må benyttes for dokumentasjon av de relevante tjenestene.

For enkelte søke vises pt. ikke kildedata. Det kan se ut som det er noe feil med med testdataene, men det er kun en begrensning i søkene. Ved oppslag gjennom API'ene vil dere kunne hente og se nærmere på testdataene.

## Foreløpige begrensninger i testdata i nytt testmiljø

* De mest brukte dataetypene er søkbare i Tenor gjennom ulike Tenor-adaptere. Dette er dokumentert pr. tjeneste.
* Enkelte testdata kan ikke søkes opp gjennom Tenor, og det ligger dokumentert i egne tabeller for gjeldende tjeneste.
* Skatteoppgjør for personer med adressebeskyttelse strengt fortrolig er ikke søkbare i Tenor, se egen [testmiljø-siden](./testmiljoe.md).
* Enkelte eldre testdata for inntekt- og skatteoppgjørstjenestene er ikke søkbare i Tenor, og ligger listet på [testmiljø-siden](./testmiljoe.md).
* Skatteoppgjør for personer med adressebeskyttelse strengt fortrolig er ikke søkbare i Tenor, se egen [testmiljø-siden](./testmiljoe.md).

