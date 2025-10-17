---
title: Delegere rettigheter i Altinn
slug: /om/delegering
folder: om
sidebar: mydoc_sidebar
datatable: true
tags: [Maskinporten,Delegering]
keywords: [security, maskinporten, delegering]
last_updated: Oct 17, 2025
hide_table_of_contents: true
---
<Summary>Virksomheter kan delegere rettigheter til en systemleverandør (eller andre) i Altinn. Her følger en beskrivelse av hvordan dette utføres.</Summary>

Det er mulig for systemleverandører (og andre) å opptre på vegne av andre virksomheter ved oppkobling mot Skatteetatens API-er. Virksomheten som har tilgagng til API-et må delegere rettighet til API-et til systemleverandøren i Altinn. Navn på rettighet i Altinn for delegering ligger i beskrivelsen av hver enkelt tjeneste, men heter stort sett noe med "API - På vegne av".

Digdir har en nærmere beskrivelser av hvordan dette gjøres:
*[Delegere API-tilganger til en leverandør](https://docs.altinn.studio/nb/api/authentication/delegate-scopes/)
*[Bruke delegering som leverandør](https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-som-leverand%C3%B8r). Selve kallene mot Skatteetaten vil skje på vanlig måte men tokenet vil inneholde informasjon både om konsument og systemleverandør.

For at systemleverandører skal kunne teste et API, må det [delegeres rettigheter til API-et også i Test](../test/testfrasystemleverandor.md).
