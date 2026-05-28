---
title: Innrapportering av kontrolloplysninger
slug: /anvendelsesomraader/innrapportering-kontrollopplysninger
folder: anvendelsesomraader
sidebar: mydoc_sidebar
datatable: true
tags: [ altinn, innrapportering, kontrollopplysninger ]
last_updated: May 27, 2026
hide_table_of_contents: true
---

## Re-etablering av Altinn-tjenester

Arbeidet med å forberede overgangen fra Altinn II til Altinn 3 pågår. I Skatteetaten har vi startet et større arbeid for
å flytte våre skjema og rapporteringsløsninger fra Altinn til skatteetaten.no. Vi har tidligere gjort det samme med
skattemeldingen og MVA-meldingen.

Se mer informasjon om re-etableringen og vår testplan
på [skatteetaten.no](https://www.skatteetaten.no/bedrift-og-organisasjon/reetableringaltinn/)

## Hva må du gjøre som leverandør av Sluttbrukersystem

Her er en oversikt over stegene som må til for å kunne ta i bruk nye tjenester mot Skatteetaten

1. **Kommunikasjon:** Skatteetaten har utviklere og funksjonelle ressurser på vår **Slack** som kan svare på alle
   spørsmål og veilede i prosessen.
   Trykk [her](https://join.slack.com/t/skatteetaten/shared_invite/zt-2yvnsfetg-yuDEBJkcuj5n8KSyZi9yBg) for å få
   tilgang.
   Vi anbefaler at du benytter en Slack-konto tilknyttet ditt arbeidssted, og at du inkluderer navnet på ditt
   arbeidssted i "Display name" (endres i din profil) som for eksempel "Ola Nordmann (Skatteetaten)".

2. **Systemtilgang:** For å kunne integrere mot våre tjenester må du sette opp tilgang via Maskinporten med
   Systembruker. Følg oppskrift [her](../om/systembruker.md).
   Her vil du behøve informasjon om Maskinporten scope og Altinn ressurs fra dokumentasjonen for den enkelte tjenesten
   du skal sette opp tilgang til.

3. **Integrasjon mot testmiljø:** Følg dokumentasjonen for [Innrapportering kontrollopplysninger API](../api/innrapportering-kontrollopplysninger.md) for å sette opp integrasjonen mot vårt
   testmiljø. Her vil du finne teknisk spesifikasjon og link til **Swaggerhub** hvor du finner mer detaljert informasjon
   om api'et.
   Vårt testmiljø krever utelukkende syntetiske data, se mer informasjon under test-fanen for den enkelte tjenesten.

4. **Test:** Vi oppfordrer til å verifisere alle deler av integrasjonen i test i god til før man benytter tjenestene i
   produksjon.


