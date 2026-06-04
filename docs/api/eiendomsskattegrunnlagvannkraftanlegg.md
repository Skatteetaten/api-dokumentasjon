---
title: Eiendomsskattegrunnlag vannkraftanlegg API
slug: /api/eiendomsskattegrunnlagvannkraftanlegg
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API,eiendomsskattegrunnlag,vannkraftanlegg]
last_updated: Jun 4, 2026
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om eiendomsskattegrunnlag og anvendt fordelingsnøkkel per vannkraftanlegg til kommunene.</Summary>

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
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/eiendomsskattegrunnlag-vannkraftanlegg-api/) på
SwaggerHub.

## Tilgang

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:eiendomsskattegrunnlagvannkraftanlegg`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Eiendomsskattegrunnlag vannkraftanlegg API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

## Rettighetspakker
Hvilke data en virksomhet får tilgang til i API-et bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Skatteetaten har laget en selvbetjeningsløsning som gir virksomheter [innsyn i egne rettighetspakker](https://rettighetspakke-innsyn.skatteetaten.no/), og lister derfor ikke lengre rettighetspakkene på Github. Se egen dokumentasjon om [hvordan logge inn](https://skatteetaten.github.io/api-dokumentasjon/anvendelsesomraader/deling-skatteetaten#innsyn-i-rettighetspakker).

## Støttetjenester

For å følge med på endringer tilbyr vi en [støttetjeneste for hendelsesliste](./hendelser.md): `Eiendomsskattegrunnlag vannkraftanlegg hendelser API`

## Datakatalog

Datatjenestebeskrivelse kommer i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "organisasjonsnummer": "312802562",
  "kommunefordeltEiendomsskattegrunnlagForKraftverk": [
    {
      "samletEiendomsskattegrunnlagForKraftverk": 9857000,
      "kraftverketsLoepenummer": "1001",
      "anvendtFordelingsnoekkel": 14.854211,
      "grunnlagForEiendomsskatt": 1464180,
      "kommunenummer": "3101",
      "kraftverketsNavn": "Storvannet"
    }
  ],
  "kraftselskapetsSamledeGrunnlagForEiendomsskatt": 20817000
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                                           |
|----------|-----------------|--------------------------------------------------------------------------------------|
| EGV-001  | 500             | Uventet feil på tjenesten.                                                           |
| EGV-002  | 500             | Uventet feil i et bakenforliggende system.                                           |
| EGV-003  | 404             | Ukjent url benyttet.                                                                 |
| EGV-004  | 401             | Feil i forbindelse med autentisering.                                                |
| EGV-005  | 403             | Feil i forbindelse med autorisering.                                                 |
| EGV-006  | 400             | Feil i forbindelse med validering av inputdata.                                      |
| EGV-007  | 404             | Fant ikke opplysninger om eiendomsskattegrunnlag for angitt organisasjon og kommune. |
| EGV-008  | 406             | Feil tilknyttet dataformat. Kun json støttes.                                        |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/eiendomsskattegrunnlag-vannkraftanlegg-api/).

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, men man kan benytte hendelseslisten for å finne
testdata man kan benytte for å teste oppslagstjenesten.

</TabItem>
</Tabs>
