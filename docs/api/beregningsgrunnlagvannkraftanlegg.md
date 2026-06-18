---
title: Beregningsgrunnlag vannkraftanlegg API
slug: /api/beregningsgrunnlagvannkraftanlegg
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, beregningsgrunnlag, vannkraftanlegg, eiendomsskatt ]
last_updated: Apr 20, 2026
hide_table_of_contents: true
---

<Summary>Tjenesten leverer informasjon om grunnlaget for det kommunefordelte eiendomsskattegrunnlaget for vannkraftanlegg til kommunene og grunnlaget for beregning av kommunefordelte fordelingsnøkler til NVE.</Summary>

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
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/beregningsgrunnlag-vannkraftanlegg-api) på
SwaggerHub.

## Tilgang

Tjenesten inneholder taushetsbelagte opplysninger om alle skattepliktige personer og/eller virksomheter, og krever eksplisitt lovregulering for tilgang. Tjenesten er ikke tilrettelagt for systembrukerløsningen og visning i sluttbrukersystem.
 
For å få tilgang til dette API-et, for videre bruk av opplysninger om andre personer eller virksomheter i annen oppgaveløsning, må den som ber om tilgang ha et behandlingsgrunnlag for mottak og bruk som er bygget på hjemmel i lov, ikke samtykke, og Skatteetaten må ha grunnlag som opphever vår taushetsplikt for utlevering.

### Skatteetaten må gi tilgang

For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en rettighetspakke. Les mer
om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

### Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:beregningsgrunnlagvannkraftanlegg`

### Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Beregningsgrunnlag Vannkraftanlegg API - På vegne av`

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
  "kraftverk": [
    {
      "spesifikasjonAvKraftverk": {
        "id": "72d46587-8656-487f-b0ab-de447c99fbb4",
        "navn": "Skjærviken kraft",
        "loepenummer": "0001",
        "aarForDriftssettelse": "1971",
        "samletPaastempletMerkeytelseIKva": 250000,
        "beregnetFormuesverdiOgGrunnlagForBeregningAvSaerskiltEiendomsskattegrunnlag": {
          "grunnlagForBeregningAvFormuesverdiOgSaerskiltEiendomsskattegrunnlagIInntektsaaret": {
            "konsesjonspris": 0.1,
            "konsesjonskraft": 1000000,
            "salgsinntektFraTotalAarsproduksjonRedusertMedKonsesjonskraft": {
              "produksjon": 150000000,
              "konsesjonsEllerKontraktspris": 0.5,
              "salgsinntekt": 75000000
            },
            "bruttoSalgsinntekt": 75100000,
            "fradragForKostnader": 50100000,
            "fradragForGrunnrenteskatt": 50000000
          },
          "kontantstroemForDriften": 27022853,
          "naaverdiPaaKontantstroemOverUendeligLevetid": 600507848,
          "fradragForFremtidigeUtskiftningskostnader": 37896394,
          "formuesverdi": 562611454,
          "minimumsverdiForEiendomsskattegrunnlag": 95000000,
          "maksimumsverdiForEiendomsskattegrunnlag": 274000000,
          "eiendomsskattegrunnlag": 274000000,
          "grunnlagForBeregningAvFormuesverdiOgSaerskiltEiendomsskattegrunnlagForegaaendeInntektsaar": [
            {
              "id": "ad4c6d45-897f-4add-ba68-cf0ceaa4b308",
              "inntektsaar": "2024",
              "bruttoSalgsinntekt": 75000000,
              "bruttoDriftskostnad": 25000000,
              "fradragForGrunnrenteskatt": 25000000,
              "indeksregulertBruttoSalgsinntekt": 77301646,
              "indeksregulertBruttoDriftskostnad": 25767215,
              "indeksregulertFradragForGrunnrenteskatt": 25767215
            }
          ]
        },
        "eierandel": 100.0,
        "grunnlagForBeregningAvNaturressursskatt": {
          "samletAarsproduksjon": 700000000,
          "grunnlagForNaturressursskattPerInntektsaar": [
            {
              "id": "909640bc-e20c-4361-8946-121c3810162e",
              "inntektsaar": "2023",
              "aarsproduksjon": 100000000
            }
          ]
        }
      }
    }
  ],
  "spesifikasjonAvAnleggsmiddel": [
    {
      "saldoavskrevetAnleggsmiddel": [
        {
          "id": "b6e5345e-f9ea-4f2f-a1ae-8c848d87e726",
          "objektidentifikator": "E25-1",
          "objektbeskrivelse": "El. installasjon i kraftverk",
          "ervervsdato": "2025-08-01",
          "spesifikasjonAvOrdinaertAnleggsmiddelIVannkraftverk": {
            "kraftverketsLoepenummer": "0001",
            "gjenstaaendeLevetid": 30,
            "naaverdiAvFremtidigeUtskiftningskostnaderForVannkraftverk": 358631.13,
            "konsumprisindeksjustertInvesteringskostnad": 1000000.0,
            "tilleggsopplysningForSaldogruppeG": [
              {
                "id": "ead17b32-8531-4134-9b86-5e5d4e2d5235",
                "erDriftsmiddelElektrotekniskUtrustningIKraftforetak": true,
                "kommunenummer": "3107"
              }
            ]
          },
          "utgaaendeVerdi": 950000.0,
          "aaretsAvskrivning": 50000.0,
          "saldogruppe": "g",
          "nyanskaffelse": 1000000.0
        }
      ],
      "lineaertavskrevetAnleggsmiddel": [
        {
          "id": "208c0955-e8ab-4a35-966b-d7fd8cfe28b9",
          "objektidentifikator": "111111",
          "objektbeskrivelse": "Programvare",
          "ervervsdato": "2022-01-01",
          "spesifikasjonAvOrdinaertAnleggsmiddelIVannkraftverk": {
            "kraftverketsLoepenummer": "0001",
            "gjenstaaendeLevetid": 6,
            "naaverdiAvFremtidigeUtskiftningskostnaderForVannkraftverk": 4836482.43,
            "konsumprisindeksjustertInvesteringskostnad": 2242671.01
          },
          "utgaaendeVerdi": 1200000.0,
          "anskaffelseskost": 2000000.0,
          "levetid": 120,
          "aaretsAvskrivning": 200000.0
        }
      ],
      "ikkeAvskrivbartAnleggsmiddel": [
        {
          "id": "00f9335f-42b6-4f08-909a-136f16cedf01",
          "objektidentifikator": "A",
          "objektbeskrivelse": "Tomt",
          "ervervsdato": "2020-01-01",
          "spesifikasjonAvOrdinaertAnleggsmiddelIVannkraftverk": {
            "kraftverketsLoepenummer": "0001"
          },
          "utgaaendeVerdi": 1333333.0,
          "justeringForAapenbarVerdiendring": 333333.0
        }
      ],
      "saerskiltAnleggsmiddelIKraftverk": [
        {
          "id": "fe7b25a9-e4d7-4fa7-9cb7-a476e7681431",
          "kraftverketsLoepenummer": "0001",
          "anleggsmiddelidentifikator": "LA-8",
          "anleggsmiddeltype": "dam",
          "beskrivelse": "Bjørnedammen",
          "aaretsSamledeAvskrivningForSaerskiltAnleggsmiddelIKraftverk": 17419.75,
          "utgaaendeVerdiForSaerskiltAnleggsmiddelIKraftverk": 1982580.25,
          "anskaffelseAvEllerPaakostningPaaSaerskiltAnleggsmiddelIKraftverk": [
            {
              "id": ["a3e60e97-b87b-46d6-954e-c3d515cc386a"],
              "anskaffelsesEllerPaakostningsidentifikator": "LA-8",
              "anskaffelsesEllerPaakostningsdato": "2025-06-02",
              "avskrivningstid": 67,
              "gjenstaaendeLevetid": 66,
              "historiskKostpris": 2000000.0,
              "konsumprisindeksjustertInvesteringskostnadForBeregningAvNaaverdi": 2000000.0,
              "konsumprisindeksjustertInvesteringskostnadForKorrigeringAvKommunefordelingAvEiendomsskattegrunnlag": 1015250.54,
              "naaverdiAvFremtidigeUtskiftningskostnader": 115537.51,
              "kommune": ["3107"]
            }
          ]
        }
      ],
      "anleggsmiddelUnderUtfoerelseSomIkkeErAktivert": [
        {
          "id": "6a926b28-6262-425e-b182-1e59431e0cc1",
          "objektidentifikator": "B2B1",
          "objektbeskrivelse": "Dam",
          "kraftverketsLoepenummer": "0001",
          "anskaffelseskost": 2000000.0
        }
      ]
    }
  ]
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde                                                                    |
|----------|-----------------|-------------------------------------------------------------------------------|
| BGV-001  | 500             | Uventet feil på tjenesten.                                                    |
| BGV-002  | 500             | Uventet feil i et bakenforliggende system.                                    |
| BGV-003  | 404             | Ukjent url benyttet.                                                          |
| BGV-004  | 401             | Feil i forbindelse med autentisering.                                         |
| BGV-005  | 403             | Feil i forbindelse med autorisering.                                          |
| BGV-006  | 400             | Feil i forbindelse med validering av inputdata.                               |
| BGV-007  | 404             | Ingen beregningsgrunnlag funnet for angitt organisasjonsnummer og inntektsaar |
| BGV-008  | 406             | Feil tilknyttet dataformat. Kun json er støttet.                              |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/beregningsgrunnlag-vannkraftanlegg-api/) på SwaggerHub for beskrivelse av informasjonsmodellen.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, men man kan benytte hendelseslisten til [Eiendomsskattegrunnlag vannkraftanlegg API](eiendomsskattegrunnlagvannkraftanlegg.md) for å finne testdata.

Det er produsert testdata på følgende virksomheter:

| Orgnummer	| Beskrivelse |
|---|---|
| 312168421 | Stort kraftverk lineær avskrivning 	|
| 314101138	| Stort kraftverk alle avskrivning variant	|
| 310209597	| Kun kraftverk stort	|
| 313542068	| Stort kraftverk kun særskilt	|
| 312428490 | Lite kraftverk med ikke avskrivbart anlaggsmiddel	|
| 313946363	| Lite kraftverk med anleggsmiddel som ikke er aktivert	|
| 313623882	| Tre kraftverk 2 store og en liten	|
| 310176583	| Stort kraftverk fradrag for kostander	|
| 313538591	| Stort og lite kraftverk med fradrag for kostander	|
| 313890236	| Stort kraftverk fradrag til kostander	|
| 312882450	| Tre små kraftverk	|
| 313379450	| Stort kraftverk fradrag for kostander og 4 særskilte driftsmiddel utgiftsført i grunnrente	|
| 310661449	| Stort kraftverk med 3 lineære og 3 saldoavskrivningner |
| 313373614 | Stort kraftverk fradrag for kostander	|
| 313595412	|	Kun to store kraftverk med fradrag for kostnader	|
| 312435837	|	To kraftverk flere ikke avskrivbare elementer	|


</TabItem>
</Tabs>
