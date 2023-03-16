---
title: Informasjonsmodell for å slette avtaleforhold tilknyttet tjenestepensjonsavtale  
slug: /avtaleforhold_slette
folder: informasjonsmodeller/tjenestepensjonsavtale
sidebar: mydoc_sidebar
datatable: true
tags: [OTP, Tjenestepensjonsavtale, Informasjonsmodell]
keywords: [informasjonsmodell]
last_updated: Des 13, 2022
hide_table_of_contents: true
---
<summary>Informasjonsmodell for å slette avtaleforhold tilknyttet tjenestepensjonsavtale.</summary>

Oversikt over verdier som sendes inn gjennom endepunktet slette avtaleforhold i [Tjenestepensjonsavtale API](../../api/tjenestepensjonsavtale.md).

# Om Rettighetspakker

Rettighetspakker benyttes til å styre hvem som har lov til å slette denne informasjonen, se [Rettighetspakker](../../om/rettighetspakker.md).

Rettighetspakker som kan benyttes ved sletting:

| Rettighetspakke | Beskrivelse |
|--------|--------|
| otp | Obligatorisk tjenestepensjon |


# Avtaleforhold

| Felt | Beskrivelse |
| ---- | -------------------------------------------------------- |
| avtalereferanse | Pensjonsinnretningens egen referanse til avtalen |
| opplysningspliktig | Den opplysningspliktige som avtaleforholdet er med  |

## Opplysingsingspliktig

| Felt | Beskrivelse |
| ---- | ------------------------------------------------------ |
| norskIdentifikator | Opplysningspliktiges organisasjonsnummer |



![slett avtaleforhold](../../../static/download/tjenestepensjonsavtale/slettAvtaleforhold.png)



