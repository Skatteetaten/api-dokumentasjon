---
title: Skatt dialogdokumenter API
slug: /api/skattdialogdokumenter
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, skatt ]
last_updated: Jun 30, 2026
hide_table_of_contents: true
---

<Summary>Tjeneste for å hente ut dokumenter som tilgjengeliggjøres i dialoger for formues- og inntektsskatt, blant annet skatteoppgjør og brev om skattemeldingen.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

Tjenesten lar sluttbrukersystem hente ut dokumenter knyttet til formues- og inntektsskatt. Eksempler på dokumenter som kan hentes er skatteoppgjør og brev angående skattemeldingen.

Dokumentene tilgjengeliggjøres som vedlegg i en dialog i Dialogporten, hvor de er representert som `Attachment` med `consumerType` lik `Api`. Selve endepunktet som skal kalles er hardkodet i forsendelsen i dialogen. Et sluttbrukersystem må derfor først hente dialogen fra Dialogporten, lese ut URL-en til dokumentet, og deretter kalle Skatteetatens tjeneste for å hente dokumentet.

For generell informasjon om tjenestene se egne sider om:
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Slik henter du dokumenter
1. Hent dialogen fra Dialogporten.
2. Finn vedlegget under `attachments`, og bruk URL-en der `consumerType` er `Api`.
3. Kall URL-en mot Skatteetatens tjeneste med Maskinporten-token og systembruker for å hente selve dokumentet.

Dialogporten er Digdir sin løsning for digitale dialoger, og fungerer som et felles API og metadatalager. Dokumentene refereres fra dialogen, men lagres hos Skatteetaten og hentes via denne tjenesten. Vi dokumenterer ikke Dialogporten her – [se ekstern dokumentasjon hos Altinn.](https://docs.altinn.studio/nb/dialogporten/)

## Teknisk spesifikasjon

Endepunktet starter med URL-mønsteret: `/api/skatt-dialog-dokumenter/v1/**`

### Eksempel på endepunkter
ID-ene i eksemplene under er fiktive og brukes kun for å illustrere URL-mønsteret. De peker ikke til reelle dialoger, forsendelser eller dokumenter.
* Test: `https://api-test.sits.no/api/skatt-dialog-dokumenter/v1/911d5da1-1bba-4a5f-8858-1f0196ed4de7/04cee7d7-1137-4864-981f-fca36847ec41/D/8e2fdc5a-8802-4244-8ab0-f518e34808a2`
* Prod: `https://api.skatteetaten.no/api/skatt-dialog-dokumenter/v1/...`

Den fullstendige URL-en hentes fra dialogen i Dialogporten, og skal ikke settes sammen manuelt.

## Tilgang
Tjenesten benytter Maskinporten med dialogen er relatert til systembruker. Tilgangen autoriseres mot ressursen dialogen er relatert til.

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/samarbeidspartnere/sluttbrukersystemer/skattemelding-sbs/).

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:skattdialogdokument`
I en overgangsperiode, så vil følgende scope også gi tilgang til tjenesten: `skatteetaten:formueinntekt/skattemelding`

### ID-porten
For noen dialoger kan et sluttbrukersystem oppleve å mangle API-tilgang til dokumentet. I disse tilfellene vil en innlogget bruker via ID-porten likevel kunne ha tilgang til dokumentet via GUI URL-en på Skatteetatens brukerflater. Denne forskjellen skyldes at Maskinporten og ID-porten har forskjellige tilgangsmekanismer, og at denne API-tjenesten kun støtter Maskinporten.

## Datakatalog

Datatjenestebeskrivelse er ikke i Felles datakatalog enda.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
Legg inn eksempler
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                     |
|----------|-----------------|------------------------------------------------|
| NNN-001  | 500             | Legg inn feilkoder                  |


</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Legg inn informasjon om informasjonsmodell

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Legg inn informasjon om testdata

</TabItem>
</Tabs>
