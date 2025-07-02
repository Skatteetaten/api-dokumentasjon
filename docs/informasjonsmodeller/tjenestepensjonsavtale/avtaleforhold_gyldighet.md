---
title: Informasjonsmodell for gyldig avtaleforhold for tjenestepensjonsavtale
slug: /avtaleforhold_gyldighet
folder: informasjonsmodeller/tjenestepensjonsavtale
sidebar: mydoc_sidebar
datatable: true
tags: [OTP, Tjenestepensjonsavtale, Informasjonsmodell]
keywords: [informasjonsmodell]
last_updated: Des 13, 2022
hide_table_of_contents: true
---
<Summary>Informasjonsmodell for gyldig avtaleforhold for tjenestepensjonsavtale.</Summary>

Oversikt over verdier som returneres i data fra endepunktet avtaleforhold/gyldighet i [Tjenestepensjonsavtale API](../../api/tjenestepensjonsavtale.md).

# AvtaleforholdGyldighet

| Navn på felt | Beskrivelse |
| -------------- | ---------------------------------------------- |
|  gyldig | Boolsk felt som er sann/true dersom det finnes en eller flere gyldige avtaleforhold for hele perioden det blir spurt om. Se [Forutsetning for bruk](./forutsetningerforbruk.md) for ytterligere informasjon om avtaleforhold. |
| måndederUtenGyldigAvtaleforhold | Liste med måneder som ikke har avtale.  Fylles kun ut når "gyldig" er usann/false |

## MånederUtenGyldigAvtaleforhold

| Navn på felt | Beskrivelse |
| -------------- | ----------------------------------------------|
| måned        | Måned som ikke har et gyldig avtaleforhold | 

## Figur
![avtaleforhold gyldighet](../../../static/download/tjenestepensjonsavtale/avtaleforholdGyldighet.png)


