---
title: Mva-meldingen
slug: /anvendelsesomraader/mvamelding
folder: anvendelsesomraader
sidebar: mydoc_sidebar
datatable: true
tags: [Mva-melding]
last_updated: July 10, 2023
hide_table_of_contents: true
---
<Summary>API-er knyttet til Mva-meldingen</Summary>

## MVA-moderniseringen
De siste årene har MEMO-prosjektet i Skatteetaten modernisert Mva-området. MEMO-prosjektet har utviklet ny skattemelding for merverdiavgift (mva-meldingen). Målet med MEMO-prosjektet var å oppnå bedre etterlevelse, likere konkurransevilkår, forenkling for næringslivet og en mer effektiv forvaltning. Noe forenkling følger direkte av endringene i mva-meldingen. Vi får færre feilkilder, enklere tilbakebetaling, og det blir enklere å oppfylle opplysningsplikten.

Ny mva-melding vil også gi nye muligheter for veiledning og dialog gjennom for eksempel validering før innsending og påminnelse om arbeidsoppgaver ved hjelp av arbeidsliste. I tillegg ønsker man å tilby økt grad av oppslag og innsyn for å oppå effektivisering og trygghet gjennom digital avstemming. Ny melding gir også bedre samspill mellom regnskapssystemene og Altinn/Skatteetaten, for eksempel gjennom automatisk kvittering til regnskapssystem.

Ønsker du mer informasjon om moderniseringsprosjektet for mva-området kan du lese mer på [skatteetaten.no/nymva](https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/mva/).

Dokumentasjonen for moderniseringen av Mva-området ligger foreløpig på [en egen Github-side](https://skatteetaten.github.io/mva-meldingen/), men innholdet vil fremover flyttes hit.

## API-er for Mva-meldingen

Følgende API-er er laget i forbindelse med innsending av Mva-meldingen:
* [MVA Melding Validering API](https://skatteetaten.github.io/mva-meldingen/documentation/api/)
* [MVA Melding Innsendings API](https://skatteetaten.github.io/mva-meldingen/documentation/api/)

Det er også laget noen klassiske delingstjenester for SSB:
* [Mva-melding API](../api/mvamelding.md)
* [Mva-register – avgiftssubjekter med skattemeldingsplikt API](../api/mvaregisteravgiftssubjekt.md)

I tillegg finnes et api for Mva-melding og informasjon fra reskontro:
* [Mva meldingsopplysning API](../api/mva_meldingsopplysning.md)
