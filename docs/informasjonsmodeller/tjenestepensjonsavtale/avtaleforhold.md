---
title: Informasjonsmodell for avtaleforhold tilknyttet tjenestepensjonsavtale 
slug: /avtaleforhold
folder: informasjonsmodeller/tjenestepensjonsavtale
sidebar: mydoc_sidebar
datatable: true
tags: [OTP]
keywords: [informasjonsmodell]
last_updated: Des 13, 2022
hide_table_of_contents: true
---
<summary>Informasjonsmodell for avtaleforhold tilknyttet tjenestepensjonsavtale.</summary>

Oversikt over verdier som sendes inn gjennom endepunktet avtaleforhold i [Tjenestepensjonsavtale API](../../tjenester/tjenestepensjonsavtale.md) for å oppdatere eller endre avtaleforhold.

# Om Rettighetspakker

Rettighetspakker benyttes til å styre hvem som har lov til å oppdatere denne informasjonen, se [Rettighetspakker](../../om/rettighetspakker.md).

Rettighetspakker som kan benyttes ved oppdatering:

| Rettighetspakke | Beskrivelse |
|--------|--------|
| otp | Obligatorisk tjenestepensjon |

# Avtaleforhold

| Felt | Beskrivelse |
| ---- | -------------------------------------------------------- |
| avtalereferanse | Pensjonsinnretningens egen referanse til avtalen |
| fraOgMed | Start årstall og måned for avtaleinngåelse angitt i nummer, må oppgis som YYYY-MM |
| tilOgMed | Slutt årstall og måned for opphør av avtale angitt i nummer, må oppgis som YYYY-MM |
| opplysningspliktig | Den opplysningspliktige som avtaleforholdet er med  |
 
## Opplysingsingspliktig

| Felt | Beskrivelse |
| ---- | ------------------------------------------------------ |
| norskIdentifikator | Opplysningspliktiges organisasjonsnummer |
 
![avtaleforhold](../../../static/download/tjenestepensjonsavtale/avtaleforhold.png)

