---
title:  "Inntektsmottaker API oppdatert"
categories: nyhet
permalink: inntektsmottaker_patch.html
tags: [old_news]
---

Vi har oppdatert Inntektsmottaker API. 
 
*  Strammet inn filtrering av poster for datakonsumenter med standard Rettighetspakke. Fra nå av utleveres kun poster spesifisert i [inntektsmottaker informasjonsmodell](data_inntektsmottaker).
*  FraOgMed og tilOgMed i samtykketoken valideres mot parametre i url
*  Samtykkebrukere får nå utlevert data slik de var når samtykket ble inngått (ikke slik data er på spørretidspunktet).
*  Restriksjon på at samtykke kun kan inngås for 10 dager blir nå validert av tjenesten 

Dette er en endring av inntektsmottaker-api. Den berører først og fremst brukere som benytter samtykke. Brukere med lovhjemmel berøres i liten grad. 

Endringen bør ikke bryte eksisterende integrasjoner, men det at avtalefestede begrensinger nå blir validert av applikasjonen kan potensielt føre til avvik der man ikke har fulgt det som er avtaleregulert.



