---
title: Versjoner
slug: /om/versjoner
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [API,Versjonering]
keywords: [API,versjoner]
last_updated: Nov 12, 2024
hide_table_of_contents: true
---
<Summary>Skatteetatens strategi for versjonering.</Summary>

Skatteetatens API-er er designet for å kunne støtte flere versjoner samtidig, men i praksis er det maksimalt to samtidige versjoner.
Tekniske dataformat endrer seg sjelden, og når det skjer følges denne strategien for versjonering. 

## Versjonering av API-er
Skatteetaten etterstreber at API-ene skal være stabile, og responsen skal til være i overenstemmelse med kontrakten for en bestemt versjon av API-et. Skatteetatens API-er er designet for å kunne støtte flere versjoner samtidig. I praksis vil det være maksimalt to versjoner tilgjengelig samtidig, slik at virksomhetene har rimelig tid til å gå over til ny versjon. Merk at støtte for gamle versjoner etter hvert vil tas vekk.

## Bakoverkompatible endringer
Nye felt, endring av rekkefølge i respons eller nye valgfrie felt i input vil normalt ikke føre til at det etableres en ny versjon og vil ikke nødvendigvis varsles på forhånd. Det forventes at virksomheter bygger tolerant kode som tåler slike endringer. Av denne grunn anbefaler vi ikke å validere responsen mot XSDen, siden dette kan gi valideringsfeil ved ikke-varslede endringer.

Mer informasjon om type endringer og varslingsfrister finnes i vilkårene våre.

## Endring i felt/koder

Felt/koder som brukes i data endrer seg, gjerne fra år til år, og dette skyldes endringer i skattelovgivning og skatteprosess. 

Flere datasett har informasjonsmodeller som forklarer hvilke koder som brukes i forskjellige felt, dette er dokumentert pr. API. Endringer i informasjonsmodeller kan føre til at det oppstår feil hos virksomheten selv om den tekniske integrasjonen fungerer helt fint. 

Det er viktig å sette seg inn i informasjonsmodell-endringer hvert gang et nytt inntektsår tilgjengeliggjøres, eller hvis andre endringer i informasjonsmodell annonseres.
