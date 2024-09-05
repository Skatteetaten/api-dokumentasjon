---
title: Mva-melding innsending API
slug: /api/mvameldinginnsending
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Mva-melding innsending, Mva-melding]
keywords: [mva]
last_updated: Feb 21, 2024
hide_table_of_contents: true
---

<Summary>Tjenesten brukes til innsending av Mva-melding.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekansimer](../om/sikkerhet.md)
* [Rettighetspakker](../om/rettighetspakker.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:mvameldinginnsending`

## Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Mva-melding innsending API - På vegne av`

## Sikkerhet
For mva-meldinginnsending er det Altinn token som brukes:

https://docs.altinn.studio//nb/api/authentication/id-porten/#veksling-av-access-token-til-altinn-token

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons...

## Datakatalog
Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

```
Legg inn eksempel
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.
  
| HTTP Statuskode | Feilområde                                                 |
|-----------------|------------------------------------------------------------|
| 500             | Uventet feil på tjenesten.                                 |
| 500             | Uventet feil i et bakenforliggende system.                 |
| 404             | Ukjent url benyttet.                                       |
| 401             | Feil i forbindelse med autentisering.                      |
| 403             | Feil i forbindelse med autorisering.                       |
| 400             | Feil i forbindelse med validering av inputdata.            |
| 404             | Ingen mva-melding funnet på oppgitt referanse.             |
| 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

## XSD for mva-meldingen versjon 1.0
Mva-meldingen sendes inn i XML-format. Den må være i henhold til strukturen dokumentert i XSD for mva-melding.
Versjon 1.0 av denne XSD'en ligger her: no.skatteetaten.fastsetting.avgift.mva.skattemeldingformerverdiavgift.v1.0.xsd
Grafisk fremstilling av xsd og kodelister for [mva-meldingen:](../)

SAF-T standarden inneholder også kodene 0 (Ingen merverdiavgiftsbehandling (anskaffelser)), 7 (Ingen merverdiavgiftsbehandling (inntekter)), 20 (Kostnad ved innførsel av varer, ingen merverdiavgiftsbehandling)
, 21 (Kostnader ved innførsel av varer, alminnelig sats) og 22 (Kostnader ved innførsel av varer, redusert sats, middels). Disse skal ikke rapporteres i mva-meldingen.

## Kompensasjon i alminnelig mva-melding
Fra 01.01.2023 er spesifikasjonen «Kjøp med kompensasjonsrett» lagt til på 5 koder i mva-melding, i tillegg til de eksisterende spesifikasjonene. De berørte kodene med ny spesifikasjon er 81, 83, 86, 88 og 91. Felles for disse kodene er at innførsel av varer og tjenester (pluss innenlands kjøp av klimakvoter og gull) utløser utgående innførselsmerverdiavgift og at en har enten kompensasjonsrett for inngående mva eller direkte fradragsrett for inngående mva. Virksomheter som bruker disse kodene i ordinær mva-melding kan kreve kompensasjon ved å levere kompensasjonsmelding i tillegg.



</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

## Url'er til testmiljøet

| Tjeneste |	Url |
|----------|-------|
| Validering | https://idporten-api-sbstest.sits.no/api/mva/grensesnittstoette/mva-melding/valider  |
| Innsending |	https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/  |
| Instans API |	https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/instances  |
| ID-porten integrasjon |	https://test.idporten.no/.well-known/openid-configuration  |
| Altinn tokenveksling |	https://platform.tt02.altinn.no/authentication/api/v1/exchange/id-porten |
  
</TabItem>
</Tabs>
