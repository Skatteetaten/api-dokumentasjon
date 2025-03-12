---
title: Innrapportering av tredjepartsopplysninger kladd
slug: /anvendelsesomraader/innrapportering-tredjepartsopplysninger-kladd
folder: anvendelsesomraader
sidebar: mydoc_sidebar
sidebar_class_name: hidden
datatable: true
tags: [ altinn, innrapportering, tredjepartsopplysninger, grunnlagsdata ]
last_updated: Sept 24, 2024
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

1. **Tilgjengelighet:** Verifiser at tjenesten du ønsker å sette opp integrasjon mot er tilgjengelig i test. Se linker under for de enkelte tjenester som er klare i test.
   Gjør deg gjerne kjent med dokumentasjonen for tjenesten før du går videre.

2. **Kommunikasjon:** Skatteetaten har utviklere og funksjonelle ressurser på vår **Slack** som kan svare på alle spørsmål og veilede i prosessen.
   Trykk [her](https://join.slack.com/t/skatteetaten/shared_invite/zt-2yvnsfetg-yuDEBJkcuj5n8KSyZi9yBg) for å få tilgang.
   Vi anbefaler at du benytter en Slack-konto tilknyttet ditt arbeidssted, og at du inkluderer navnet på ditt arbeidssted i "Display name" (endres i din profil) som for eksempel "Ola Nordmann (Skatteetaten)".

3. **Systemtilgang:** For å kunne integrere mot våre tjenester må du sette opp tilgang via Maskinporten med Systembruker. Følg oppskrift [her](../om/systembruker.md).
   Her vil du behøve informasjon om Maskinporten scope og Altinn ressurs fra dokumentasjonen for den enkelte tjenesten du skal sette opp tilgang til.

4. **Integrasjon mot testmiljø:** Følg dokumentasjonen for den enkelte tjenesten for å sette opp integrasjonen mot vårt testmiljø. Her vil du finne teknisk spesifikasjon og link til **Swaggerhub** hvor du finner mer detaljert informasjon om api'et.
   Vårt testmiljø krever utelukkende syntetiske data, se mer informasjon under test-fanen for den enkelte tjenesten.

5. **Test:** Vi oppfordrer til å verifisere alle deler av integrasjonen i test i god til før man benytter tjenestene i produksjon.


## Nye API-er for re-etablering av Altinn-tjenester

Følgende API-er er tilgjengelige i test pr. nå:

* [Innrapportering aksjonaerregisteroppgave API (RF-1086)](../api/innrapportering-aksjonaerregisteroppgave.md)
* [Innrapportering boligsameie API](../api/innrapportering-boligsameie.md)
* [Innrapportering boligselskap API](../api/innrapportering-boligselskap.md)
* [Innrapportering BSU API](../api/innrapportering-bsu.md)
* [Innrapportering pass og stell av barn API](../api/innrapportering-passogstell.md)
* [Innrapportering gaver til frivillige API](../api/innrapportering-gavertilfrivillige.md)
* [Innrapportering innskudd_utlaan_renter API](../api/innrapportering-innskuddutlaanrenter.md)
* [Innrapportering tilskudd API](../api/innrapportering-tilskudd.md)
* [Innrapportering betalinger_naeringsdrivende API](../api/innrapportering-betalingernaeringsdrivende.md)

