---
title: Frister API
slug: /api/frister
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, frister ]
last_updated: Apr 20, 2026
hide_table_of_contents: true
---

<Summary>Tjeneste som gir næringsdrivende oversikt over sine fremtidige forpliktelser overfor Skatteetaten. Inneholder frist for mva-melding og for skattemelding næring.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/frister-api/) på
SwaggerHub.

## Tilgang

### Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:frister`

### Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Frister API - På vegne av`

### Skatteetaten må gi tilgang

For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer
om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker

Hvilke data en virksomhet får tilgang til i API-et bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Skatteetaten har laget en selvbetjeningsløsning som gir virksomheter [innsyn i egne rettighetspakker](https://rettighetspakke-innsyn.skatteetaten.no/), og lister derfor ikke lengre rettighetspakkene på Github. Se egen dokumentasjon om [hvordan logge inn](https://skatteetaten.github.io/api-dokumentasjon/anvendelsesomraader/deling-skatteetaten#innsyn-i-rettighetspakker).

## Datakatalog

Datatjenestebeskrivelse er ikke i Felles datakatalog enda.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "kilder": [
    {
      "frister": [
        {
          "tittel": "Husk å levere skattemeldingen for selskap.",
          "aktivitetsbeskrivelse": "Det er mulig å søke utsatt frist.",
          "aktivitetstype": "rapporteringskrav",
          "frist": "2026-05-31"
        }
      ],
      "kilde": "skatt",
      "status": "OK"
    }
  ],
  "virksomhet": "123456789"
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                     |
|----------|-----------------|------------------------------------------------|
| FRI-001  | 500             | Uventet feil på tjenesten.                     |
| FRI-002  | 500             | Uventet feil i et bakenforliggende system.     |
| FRI-003  | 404             | Ukjent url benyttet.                           |
| FRI-004  | 401             | Feil i forbindelse med autentisering.          |
| FRI-005  | 403             | Feil i forbindelse med autorisering.           |
| FRI-006  | 400             | Feil i forbindelse med validering av inputdata. |
| FRI-007  | 404             | Ingen frister funnet for angitt organisasjonsnummer |
| FRI-008  | 406             | Feil tilknyttet dataformat. Kun json er støttet. |
| FRI-009   | 403             | Feil i forbindelse med samtykke.               |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/frister-api/) på SwaggerHub for beskrivelse av informasjonsmodellen.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.

</TabItem>
</Tabs>
