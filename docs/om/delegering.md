---
title: Delegere rettigheter i Altinn
slug: /om/delegering
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Maskinporten,Delegering]
keywords: [security, maskinporten, delegering]
last_updated: Des 1, 2022
hide_table_of_contents: true
---
<summary>Du kan delegere rettigheter til en systemleverandør (eller andre) i Altinn. Her følger en beskrivelse av hvordan dette utføres.</summary>

Det er mulig for systemleverandører (og andre) å opptre på vegne av andre virksomheter ved oppkobling mot Skatteetaten for de API'ene. Din virksomhet må delegere rettighet til tjenesten til systemleverandøren i Altinn. Navn på rettighet i Altinn for delegering ligger i beskrivelsen av hver enkelt tjeneste.

Digdir har en nærmere beskrivelse av hvordan dette gjøres. Se [Digdir sine side for hvordan bruke maskinporten som leverandør](https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-som-leverand%C3%B8r). Selve kallene mot Skatteetaten vil skje på vanlig måte men tokenet vil inneholde informasjon både om konsument og systemleverandør.

For at systemleverandører skal kunne teste tjenestene, må det [delegeres rettigheter til tjenestene også i Test](../test/testfrasystemleverandor.md).
