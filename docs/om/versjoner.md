---
title: Versjoner
slug: /versjoner
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [API reference]
keywords: [datatables, tables, grids, markdown, multimarkdown, jquery plugins]
last_updated: Nov 24, 2022
hide_table_of_contents: true
---
<summary>Skatteetatens delingstjenester er designet for å kunne støtte flere versjoner samtidig, i praksis er det maksimalt to samtidige versjoner.</summary>

Tekniske dataformat endrer seg sjelden, og når det skjer følges denne strategien for versjonering. 

## Versjonering av API'er
Skatteetaten etterstreber at delingstjenestene skal være stabile, og responsen fra tjenesten skal ikke endre seg så lenge man spør med samme parametre og mot en bestemt versjon av API’et. Skatteetatens delingstjenester er designet for å kunne støtte flere versjoner samtidig. I praksis vil det være maksimalt to versjoner tilgjengelig samtidig, slik at virksomhetene har rimelig tid til å gå over til ny versjon. Merk at støtte for gamle versjoner etter hvert vil tas vekk.

## Bakoverkompatible endringer
Nye felt, endring av rekkefølge i respons eller nye valgfrie felt i input vil normalt ikke føre til at det etableres en ny versjon og vil ikke nødvendigvis varsles på forhånd. Det forventes at virksomheter bygger tolerant kode som tåler slike endringer. Av denne grunn anbefaler vi ikke å validere responsen mot XSDen, siden dette kan gi valideringsfeil ved ikke-varslede endringer.

Mer om type endringer og varslingsfrister finnes i [Vilkår for bruk av Skatteetatens delingstjenester](https://www.skatteetaten.no/deling/tilgang/delingstjenester/bruksvilkar-for-delingstjenester/).

## Endring i felt/koder

Felt/koder som brukes i data endrer seg, gjerne fra år til år, og dette skyldes endringer i skattelovgivning og skatteprosess. 

Flere datasett har informasjonsmodeller som forklarer hvilke koder som brukes i forskjellige felt, dette er dokumentert pr. tjeneste. Endringer i informasjonsmodeller kan føre til at det oppstår feil hos virksomheten selv om den tekniske integrasjonen fungerer helt fint. 

Det er viktig å sette seg inn i informasjonsmodell-endringer hvert gang et nytt inntektsaar tilgjengeliggjøres, eller hvis andre endringer i informasjonsmodell annonseres.
