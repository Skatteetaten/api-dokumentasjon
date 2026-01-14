---
title: Formuesverdi fast eiendom API
slug: /api/formuesverdifasteiendom
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, formuesverdi fast eiendom ]
last_updated: Jan 14, 2026
hide_table_of_contents: true
---

<Summary>
Tjenesten leverer formuesverdier ved oppslag for én eiers faste eiendom eller andel i boligselskap.
Verdiene beregnes basert på boligbruk (primærbolig og sekundærbolig), eller som generell formuesverdi for eiendom som
ikke er bolig, der boligbruk ikke er aktuelt.</Summary>

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
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/formuesverdi-fast-eiendom-api/) på
SwaggerHub.

## Tilgang

### Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:formuesverdifasteiendom`

### Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Formuesverdi fast eiendom API - På vegne av`

### Skatteetaten må gi tilgang

For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Les mer
om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Rettighetspakker

Hvilke data en virksomhet får bestemmes av [rettighetspakken](../om/rettighetspakker.md).

Virksomheter som har fått tilgang kan kalle API-et med følgende rettighetspakker:

| Teknisk navn på rettighetspakker |	
|----------------------------------|
| eiendomsmeglerOpplysningsplikt   |

## Datakatalog

Datatjenestebeskrivelse er ikke i Felles datakatalog enda.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

## JSON

```json
{
  "type": "FORMUESVERDI_FAST_EIENDOM",
  "matrikkelnummer": {
    "kommunenummer": "0301",
    "gaardsnummer": 27,
    "bruksnummer": 2,
    "festenummer": 0,
    "seksjonsnummer": 2
  },
  "skattleggingsperiode": 2024,
  "formuesverdiPrimaerbolig": 425000.0,
  "formuesverdiSekundaerbolig": 1700000.0,
  "skjermet": false
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                             |
|----------|-----------------|------------------------------------------------------------------------|
| FFE-001  | 500             | Uventet feil på tjenesten.                                             |
| FFE-002  | 500             | Uventet feil i et bakenforliggende system.                             |
| FFE-003  | 404             | Ukjent url benyttet.                                                   |
| FFE-004  | 401             | Feil i forbindelse med autentisering.                                  |
| FFE-005  | 403             | Feil i forbindelse med autorisering.                                   |
| FFE-006  | 400             | Feil i forbindelse med validering av inputdata.                        |
| FFE-007  | 404             | Ingen formuesverdi funnet på oppgitt matrikkel/boenhet i boligselskap. |
| FFE-008  | 406             | Feil tilknyttet dataformat. Kun json er støttet.                       |
| FFE-009  | 404             | Ingen person/organisasjon funnet med oppgitt identifikator             |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

[![Formuesobjekt fast eiendom API](../../static/download/Informasjonsmodell_FormuesverdiFastEiendomOppslag.png)](../../static/download/Informasjonsmodell_FormuesverdiFastEiendomOppslag.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.

Under har vi listet noen testdata som er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne:

| Identifikator (fnr/dnr/orgnr)         | Matrikkelnr      | Orgnr/andelsnr | Responstype               |
|---------------------------------------|------------------|----------------|---------------------------|
| 19855897736, 21865898093              | 4203/61/39/0/0   |                | FORMUESVERDI_FAST_EIENDOM |
| 05924598338                           | 3205/31/266/0/0  |                | FORMUESVERDI_FAST_EIENDOM |
| 27906697551, 17906995875              | 0301/27/2/0/2    |                | FORMUESVERDI_FAST_EIENDOM |
| 06814297754                           |                  | 312434865/1    | FORMUESVERDI_FAST_EIENDOM |
| 26829699116                           |                  | 313771539/1    | FORMUESVERDI_FAST_EIENDOM |
| 09861348870, 04821148974              | 3101/50/1/0/0    |                | FORMUESVERDI_FAST_EIENDOM |
| 09861348870, 04821148974              | 3101/50/13/0/0   |                | TILLEGGSEIENDOM           |
| 09861348870, 04821148974              | 3101/50/16/0/0   |                | TILLEGGSEIENDOM           |
| 313191796                             | 0301/97/5/0/0    |                | FORMUESVERDI_FAST_EIENDOM |
| 15880399079                           | 3101/15/11/0/0   |                | FORMUESVERDI_FAST_EIENDOM |
| 09852248111                           | 2100/1/11/0/0    |                | FORMUESVERDI_FAST_EIENDOM |
| 05924698510, 13898899858, 26869099766 | 5007/65/1846/0/0 |                | FORMUESVERDI_FAST_EIENDOM |
| 07891498130                           | 3103/3/2524/0/0  |                | FORMUESVERDI_FAST_EIENDOM |
| 312915103                             | 5605/25/221/0/0  |                | FORMUESVERDI_FAST_EIENDOM |
| 21911397452                           | 5628/18/346/0/0  |                | FORMUESVERDI_FAST_EIENDOM |
| 310463043                             | 4601/158/132/0/0 |                | KAN_IKKE_LEVERE           |
| 312169053                             | 3405/53/144/0/0  |                | KAN_IKKE_LEVERE           |
| 311703129                             | 4601/109/178/0/0 |                | KAN_IKKE_LEVERE           |
| 07820397791                           | 4601/111/32/0/0  |                | KAN_IKKE_LEVERE           |

</TabItem>
</Tabs>
