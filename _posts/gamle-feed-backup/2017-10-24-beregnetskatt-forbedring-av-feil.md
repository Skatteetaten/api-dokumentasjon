---
title:  "Beregnetskatt med en forbedring av feil"
categories: nyhet
permalink: beregnetskatt_forbedring_av_feil.md.html
tags: [old_news]
---

Beregnetskatt har en forbedring av sin feilhåndtering. Sjekk ut <a href="https://skatteetaten.github.io/datasamarbeid-api-dokumentasjon/reference_beregnetskatt.html"> dokumentasjonen</a>for tjenesten. Det er to nye felter som heter applikasjon og korrelasjonsid. Applikasjon inneholder verdien for den tjenesten som returnerte feilen. I dette tilfellet vil det være beregnetskatt-api. Feltet korrelasjonsid er en id som er intern hos Skatteetaten, men som våre konsumenter kan bruke i henvendelser ved feil. Dette gjør det lettere å feilsøke internt hos Skatteetaten.
