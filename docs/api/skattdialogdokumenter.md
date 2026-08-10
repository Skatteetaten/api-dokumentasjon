---
title: Skatt dialogdokumenter API
slug: /api/skattdialogdokumenter
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, skatt, skatteoppgjør, skattemelding ]
last_updated: July 6, 2026
hide_table_of_contents: true
---

<Summary>Tjeneste for å hente ut dokumenter som tilgjengeliggjøres i dialoger for formues- og inntektsskatt, blant annet skatteoppgjør og brev om skattemeldingen.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

<InfoMessageBar>
  Denne tjenesten er ikke i produksjon enda. Produksjonssetting er planlagt i løpet av august 2026.
</InfoMessageBar>

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
Tjenesten benytter Maskinporten med systembruker. Tilgangen autoriseres mot ressursen dialogen er knyttet til.

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
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                              |
|----------|-----------------|----------------------------------------|
| DUT-001  | 500             | Intern serverfeil                       |
| DUT-002  | 403             | Ikke autorisert                         |
| DUT-003  | 404             | Dokument ikke funnet                    |
| DUT-004  | 400             | Ugyldig forespørsel                     |
| DUT-000  | 500             | Ukjent feil                             |


Feilsituasjoner leveres ut på format `application/json`. Eksempel:
```json
{
    "kode": "DUT-001",
    "melding": "Det oppsto en intern serverfeil ved uthenting av dokumentet. Vennligst prøv igjen senere."
}
```

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Dokument leveres ut på format `application/pdf`. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Skatteoppgjør upersonlig

### Testcase 1
- Inntektsår: 2025
- Organisasjonsnummer: 312454823
- Daglig leder fødselsnummer: 22854298775
- Api-endepunkt: https://api-test.sits.no/api/skatt-dialog-dokumenter/v1/019f27eb-797e-71f1-a2d2-429d1cb66249/019f27eb-8938-7590-860c-db9d950bc959/D/019f27eb-85b3-70aa-8c54-3fb3ba62ee7f

### Testcase 2
- Inntektsår: 2025
- Organisasjonsnummer: 311105671
- Daglig leder fødselsnummer: 12906098383
- Api-endepunkt: https://api-test.sits.no/api/skatt-dialog-dokumenter/v1/019f27eb-7e22-72d7-aad2-f716bb13cc5f/019f27eb-8b8a-7639-9afd-01fc4cbbeac7/D/019f27eb-8ac1-7607-ae61-e6946009fa48

</TabItem>
</Tabs>
