---
title: Rettsinformasjon API
slug: /api/rettsinformasjon
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, rettsinformasjon ]
last_updated: Apr 11, 2026
hide_table_of_contents: true
---

<Summary>Tjenesten leverer innhold fra rettsinformasjon som Skatteetaten publiserer på sine nettsider, for eksempel innhold i håndbøker..</Summary>

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
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/rettsinformasjon-api/) på
SwaggerHub.

## Tilgang

### Scope

Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:rettsinformasjon`

### Delegering

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Rettsinformasjon API - På vegne av`

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

### Endepunkt for å hente håndbøker
```json
{
  "haandboeker": [
    {
      "identifikator": "folkeregisterhandboken",
      "tittel": "Folkeregisterhåndboken"
    },
    {
      "identifikator": "innkreving-foreldelse",
      "tittel": "Foreldelse av krav"
    },
    {
      "identifikator": "haandbok-innkreving",
      "tittel": "Innkrevingsloven"
    },
    {
      "identifikator": "mva-haandbok-2025",
      "tittel": "Merverdiavgiftshåndboken"
    },
    {
      "identifikator": "mvakomp",
      "tittel": "Merverdiavgiftskompensasjonsloven"
    },
    {
      "identifikator": "skattebetalingshandboken",
      "tittel": "Skattebetalingshåndboken"
    },
    {
      "identifikator": "skatteforvaltning-2025",
      "tittel": "Skatteforvaltningshåndboken"
    },
    {
      "identifikator": "innkreving-utleggstrekk",
      "tittel": "Utleggstrekk"
    }
  ]
}
```
### Endepunkt for å hente rettsinformasjon med kapitteloversikt for en angitt håndbok

```json
{
  "tittel": "Skatteforvaltningshåndboken",
  "identifikator": "056f42e0-6b31-47af-b26e-8035bb30d398",
  "typeRettsinformasjon": "haandbok",
  "publiseringsdato": "2025-03-13",
  "innholdseksjoner": [
    {
      "identifikator": "SKTFV2025_ID-1-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 1. Innledende bestemmelser"
    },
    {
      "identifikator": "SKTFV2025_ID-2-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 2. Skattemyndigheter"
    },
    {
      "identifikator": "SKTFV2025_ID-3-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 3. Taushetsplikt"
    },
    {
      "identifikator": "SKTFV2025_ID-4-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 4. Habilitet"
    },
    {
      "identifikator": "SKTFV2025_ID-5-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 5. Alminnelige saksbehandlingsregler"
    },
    {
      "identifikator": "SKTFV2025_ID-6-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 6. Bindende forhåndsuttalelser"
    },
    {
      "identifikator": "SKTFV2025_ID-7-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 7. Opplysningsplikt for tredjeparter"
    },
    {
      "identifikator": "SKTFV2025_ID-8-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 8. Opplysningsplikt for skattepliktige, trekkpliktige mv."
    },
    {
      "identifikator": "SKTFV2025_ID-9-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 9. Fastsetting"
    },
    {
      "identifikator": "SKTFV2025_ID-10-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 10. Kontroll"
    },
    {
      "identifikator": "SKTFV2025_ID-11-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 11. Pålegg om bokføring, revisjon og oppbevaring av regnskapsmateriale"
    },
    {
      "identifikator": "SKTFV2025_ID-12-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 12. Endring uten klage"
    },
    {
      "identifikator": "SKTFV2025_ID-13-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 13. Klage"
    },
    {
      "identifikator": "SKTFV2025_ID-14-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 14. Administrative reaksjoner og straff"
    },
    {
      "identifikator": "SKTFV2025_ID-15-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 15. Søksmål mv."
    },
    {
      "identifikator": "SKTFV2025_ID-16-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 16. Ikrafttredelse og overgangsbestemmelser"
    },
    {
      "identifikator": "SKTFV2025_ID-17-0.001",
      "overskrift": "Skatteforvaltningsloven kapittel 17. Forholdet til menneskerettighetene"
    }
  ]
}
```

### Endepunkt for å hente innholdseksjon for angitt håndbok og innholdseksjon

```json
{
  "typeInnholdseksjon": "kapittelseksjon",
  "identifikator": "SKTFV2025_ID-1-0.001",
  "overskrift": "Skatteforvaltningsloven kapittel 1. Innledende bestemmelser",
  "tekst": "<p>Kapittel 1 har regler om lovens virkeområde, forholdet til forvaltningsloven og elektronisk kommunikasjon, samt definisjoner av viktige begreper i loven.</p><p>Loven omfatter formues- og inntektsskatt, tonnasjeskatt, naturressursskatt og grunnrenteskatt, trygdeavgift, petroleumsskatt, svalbardskatt, Jan Mayen-skatt, artistskatt, merverdiavgift, innførselsesmerverdiavgift, arbeidsgiveravgift, særavgifter, motorkjøretøyavgifter, merverdiavgiftskompensasjon, finansskatt på lønn og suppleringsskatt.</p><p>Innførselsmerverdiavgift for den som ikke er registrert i Merverdiavgiftsregisteret, skal betales til Tolletaten ved innførsel eller til speditør/transportfirma som tar varen inn på den uregistrertes vegne. Tilsvarende gjelder for den som ikke er registrert for særavgifter. Tollregionene er tildelt en begrenset kompetanse som skattemyndighet. Skatteforvaltningslovens generelle forvaltningsregler gjelder også i disse tilfellene. Det er gitt enkelte særlige bestemmelser i de tilfeller tollregionene er gitt myndighet til å treffe vedtak om skattegrunnlaget, herunder regler om hvordan klager på slike vedtak skal behandles. Se <a href=\"https://lovdata.no/forskrift/2016-11-23-1360/§2-13-5\" target=\"_blank\" rel=\"noopener noreferrer\">skatteforvaltningsforskriften §2‑13‑5</a>.</p>",
  "publiseringsdato": "2025-12-31",
  "endringskommentar": "<p>Bakgrunnen for endringer i denne versjonen:</p><ul><li>Redaksjonelle endringer uten materiell betydning</li></ul>",
  "innholdseksjoner": [
    {
      "typeInnholdseksjon": "paragrafseksjon",
      "overskrift": "§1‑1 Lovens virkeområde",
      "publiseringsdato": "2025-03-13",
      "regelverk": "\n            <div class=\"utforming utforming-regelverk\">\n              <h4></h4>\n              <p>Loven gjelder for fastsetting av</p><ol style=\"list-style-type:none;margin-left:2rem;padding:0;\"><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">a)</span>skatt på formue og inntekt, tonnasjeskatt, naturressursskatt og grunnrenteskatt etter skatteloven og trygdeavgift etter folketrygdloven kapittel23 (formues- og inntektsskatt)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">b)</span>skatt på formue og inntekt etter Svalbardskatteloven (svalbardskatt)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">c)</span>skatt på inntekt etter Jan Mayen-skatteloven (Jan Mayen-skatt)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">d)</span>skatt på inntekt etter artistskatteloven (artistskatt)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">e)</span>skatt på formue og inntekt etter petroleumsskatteloven (petroleumsskatt)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">f)</span>merverdiavgift etter merverdiavgiftsloven (merverdiavgift)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">g)</span>arbeidsgiveravgift etter folketrygdloven kapittel23 (arbeidsgiveravgift)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">h)</span>særavgifter etter særavgiftsloven (særavgifter)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">i)</span>avgifter etter motorkjøretøy- og båtavgiftsloven (motorkjøretøyavgifter)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">j)</span>kompensasjon av merverdiavgift for kommuner, fylkeskommuner mv. etter merverdiavgiftskompensasjonsloven (merverdiavgiftskompensasjon)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">k)</span>finansskatt på lønn etter folketrygdloven kapittel23 (finansskatt på lønn)</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">l)</span>suppleringsskatt etter suppleringsskatteloven</li></ol>\n              \n            </div>\n          ",
      "forarbeider": "<ul style=\"list-style:none;margin-left:2rem;padding:0;\"><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">–</span><a href=\"https://www.regjeringen.no/contentassets/85c4785c72ed464e980a71bba0e04d1d/no/pdfs/prp201520160038000dddpdfs.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Prop. 38 l 2015–2016 Lov om skatteforvaltning kapittel7</a></li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">–</span><a href=\"https://www.regjeringen.no/no/dokumenter/prop.-29-ls-20232024/id3015385/?ch=1\" target=\"_blank\" rel=\"noopener noreferrer\">Prop. 39 LS (2023-2024) Lov om suppleringsskatt på underbeskattet inntekt i konsern (suppleringsskatteloven)</a></li></ul>",
      "innholdseksjoner": [
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 Generelt",
          "tekst": "<p>Bestemmelsen regulerer virkeområdet for skatteforvaltningsloven. At loven gjelder for «fastsetting av» skattene og avgiftene som er nevnt i loven, viser at loven gir forvaltningsregler, men ikke øvrige regler av betydning for beskatningen. Loven inneholder dermed ikke materielle regler om beskatning.</p><p>Betaling av skatte- og avgiftskrav er regulert i skattebetalingsloven.</p>",
          "publiseringsdato": "2025-12-31",
          "endringskommentar": "<p>Bakgrunnen for endringer i denne versjonen:</p><ul><li>Redaksjonelle endringer uten materiell betydning</li></ul>"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstava",
          "tekst": "<p>Det følger av bestemmelsen at skatteforvaltningsloven gjelder ved fastsetting av skatt etter de alminnelige reglene i skatteloven, reglene om tonnasjeskatt, naturressursskatt og grunnrenteskatt. Loven gjelder også ved fastsetting av trygdeavgift etter <a href=\"https://lovdata.no/lov/1997-02-28-19/§23-3\" target=\"_blank\" rel=\"noopener noreferrer\">folketrygdloven kapittel 23</a>.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstavb",
          "tekst": "<p>Skatteforvaltningsloven gjelder også ved fastsetting etter <a href=\"https://lovdata.no/dokument/NL/lov/1996-11-29-68\" target=\"_blank\" rel=\"noopener noreferrer\">Svalbardskatteloven</a>.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstavc",
          "tekst": "<p>Jan Mayen-skatt nevnes i en egen bestemmelse fordi forvaltningsreglene for denne skattarten avviker noe både fra reglene for svalbardskatt og reglene for formues- og inntektsskatt.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstavd",
          "tekst": "<p>Reglene i skatteforvaltningsloven gjelder også for fastsetting av skatt etter <a href=\"https://lovdata.no/dokument/NL/lov/1996-12-13-87\" target=\"_blank\" rel=\"noopener noreferrer\">artistskatteloven.</a></p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstave",
          "tekst": "<p>Skatteforvaltningslovens regler gjelder ved fastsetting etter <a href=\"https://lovdata.no/dokument/NL/lov/1975-06-13-35?q=petroleumsskatteloven\" target=\"_blank\" rel=\"noopener noreferrer\">petroleumsskatteloven</a>.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstavf",
          "tekst": "<p>Skatteforvaltningsloven gjelder for fastsetting av både innenlands merverdiavgift og innførselsmerverdiavgift etter merverdiavgiftsloven.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstavg",
          "tekst": "<p>Skatteforvaltningsloven gjelder for fastsetting av arbeidsgiveravgift etter <a href=\"https://lovdata.no/lov/1997-02-28-19/§23-1\" target=\"_blank\" rel=\"noopener noreferrer\">folketrygdloven kapittel 23</a>.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstavh",
          "tekst": "<p>Loven gjelder for både registrerte og uregistrerte særavgiftspliktige.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstavi",
          "tekst": "<p>Med motorkjøretøyavgifter forstås:</p><ul style=\"list-style:none;margin-left:2rem;padding:0;\"><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">–</span>Engangsavgift</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">–</span>Trafikkforsikringsavgift</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">–</span>Vektårsavgift</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">–</span>Omregistreringsavgift</li></ul><p>Loven gjelder <strong>ikke</strong> for Skatteetatens arbeidsoppgaver i forbindelse med <strong>vraking av kjøretøy og utbetaling av vrakpant</strong>. Se <a href=\"https://lovdata.no/forskrift/2004-06-01-930/§4-1\" target=\"_blank\" rel=\"noopener noreferrer\">avfallsforskriften kapittel4.</a> Saksbehandlingen reguleres her av forvaltningsloven.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstavj",
          "tekst": "<p>Skatteforvaltningsloven gjelder også for merverdiavgiftskompensasjon, selv om det er en utbetalingsordning. Rent språklig kan det synes noe unaturlig at merverdiavgiftskompensasjon i loven betegnes som «skatt», se nærmere under <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-1-0.001/SKTFV2025_ID-1-2.001/SKTFV2025_ID-1-2.003\">§1‑2 første ledd bokstava</a>, men det er lagt til grunn at fordelene med et felles regelverk vil veie opp for de språklige ulempene.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑1 første ledd bokstavk",
          "tekst": "<p>I <a href=\"https://lovdata.no/lov/1997-02-28-19/§23-2a\" target=\"_blank\" rel=\"noopener noreferrer\">folketrygdloven §23‑2 a</a> er det regler om finansskatt på lønn for arbeidsgivere med ansatte som utfører finansielle aktiviteter. Loven gjelder for fastsettingen av slik finansskatt.</p>",
          "publiseringsdato": "2025-12-31",
          "endringskommentar": "<p>Bakgrunnen for endringer i denne versjonen:</p><ul><li>Redaksjonelle endringer uten materiell betydning</li></ul>"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "\n                  §1‑1 første ledd bokstav l\n               ",
          "tekst": "<p>Skatteforvaltningsloven gjelder også for fastsetting av suppleringsskatt på underbeskattet inntekt i konsern, <a href=\"https://lovdata.no/dokument/NL/lov/2024-01-12-1?q=suppleringsskatteloven\" target=\"_blank\" rel=\"noopener noreferrer\">supppleringsskatteloven</a> .</p>",
          "publiseringsdato": "2025-03-13"
        }
      ]
    },
    {
      "typeInnholdseksjon": "paragrafseksjon",
      "overskrift": "§1‑2 Definisjoner",
      "publiseringsdato": "2025-03-13",
      "regelverk": "\n            <div class=\"utforming utforming-regelverk\">\n              <h4></h4>\n              <p>I denne loven menes med</p><ol style=\"list-style-type:none;margin-left:2rem;padding:0;\"><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">a)</span>skatt: skatter, avgifter og merverdiavgiftskompensasjon som nevnt i §1‑1</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">b)</span>skattepliktig: fysisk eller juridisk person som skal svare eller få kompensert skatt</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">c)</span>skattemyndigheter: myndigheter som nevnt i kapittel2</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">d)</span>enkeltvedtak: avgjørelse som treffes av skattemyndighetene i medhold av denne loven og som er bestemmende for rettigheter eller plikter til en bestemt skattepliktig, tredjepart eller trekkpliktig.</li></ol>\n              \n            </div>\n          ",
      "forarbeider": "<ul style=\"list-style:none;margin-left:2rem;padding:0;\"><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">–</span><a href=\"https://www.regjeringen.no/contentassets/85c4785c72ed464e980a71bba0e04d1d/no/pdfs/prp201520160038000dddpdfs.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Prop. 38 L (2015–2016) Lov om skatteforvaltning kapittel7</a></li></ul>",
      "innholdseksjoner": [
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑2 Generelt",
          "tekst": "<p>Bestemmelsen definerer sentrale begreper i loven. Der det er behov for å skille mellom de ulike skatteartene i loven, brukes begrepene slik de er definert i <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-1-0.001/SKTFV2025_ID-1-1.001\">§1‑1 Lovens virkeområde</a>.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑2 første ledd bokstava",
          "tekst": "<p>Etter bokstava skal begrepet «skatt» omfatte alle skatter, avgifter og merverdiavgiftskompensasjon som er nevnt i <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-1-0.001/SKTFV2025_ID-1-1.001/SKTFV2025_ID-1-1.003\">§1‑1 første ledd bokstava</a>.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑2 første ledd bokstavb",
          "tekst": "<p>Etter bokstavb betyr «skattepliktig» en fysisk eller juridisk person som skal svare eller få kompensert «skatt» som definert i bokstava. Dette omfatter alle som er skatte- og avgiftssubjekter for de ulike skatteartene, samt de som er kompensasjonsberettiget etter merverdiavgiftskompensasjonsloven, jf. <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-1-0.001/SKTFV2025_ID-1-1.001\">§1‑1 Lovens virkeområde</a>.</p><p>Et avgiftssubjekt etter merverdiavgiftsloven, jf. <a href=\"https://lovdata.no/lov/2009-06-19-58/§1-3\" target=\"_blank\" rel=\"noopener noreferrer\">merverdiavgiftsloven §1‑3 første ledd bokstavd</a>, er «skattepliktig» etter skatteforvaltningsloven. Begrepet omfatter næringsdrivende og offentlig virksomhet samt øvrige subjekter som er eller skal være registrert etter bestemmelsene i merverdiavgiftsloven kapittel2. Begrepet inkluderer de frivillig registrerte etter merverdiavgiftsloven §2‑3. I tillegg omfatter begrepet kommisjonærer og kommittenter i kommisjonsforhold, jf. mval. §3‑1 annet ledd, og subjekter som oppfører bygg eller anlegg for egen regning etter mval. §3‑26.</p><p>Representanter for næringsdrivende i utlandet som nevnt i <a href=\"https://lovdata.no/lov/2009-06-19-58/§2-1\" target=\"_blank\" rel=\"noopener noreferrer\">merverdiavgiftsloven §2‑1 sjette ledd</a>, jf. <a href=\"https://lovdata.no/lov/2009-06-19-58/§11-1\" target=\"_blank\" rel=\"noopener noreferrer\">§11‑1 fjerde ledd</a>, er også avgiftssubjekter. Det samme gjelder tilbyder som leverer elektroniske tjenester omfattet av <a href=\"https://lovdata.no/lov/2009-06-19-58/§3-30\" target=\"_blank\" rel=\"noopener noreferrer\">merverdiavgiftsloven §3‑30 fjerde og femte ledd</a>. Tilbydere i utlandet som leverer elektroniske tjenester til privatpersoner hjemmehørende i Norge, er ikke avgiftssubjekt dersom de velger forenklet registreringsordning etter <a href=\"https://lovdata.no/lov/2009-06-19-58/§14-4\" target=\"_blank\" rel=\"noopener noreferrer\">merverdiavgiftsloven §§14‑4 flg</a>. Personer som innfører varer og næringsdrivende eller offentlig virksomhet som kjøper fjernleverbare tjenester utenfor merverdiavgiftsområdet, anses ikke som avgiftssubjekter, men plikter å beregne og betale merverdiavgift etter <a href=\"https://lovdata.no/lov/2009-06-19-58/§11-2\" target=\"_blank\" rel=\"noopener noreferrer\">merverdiavgiftsloven §§11‑2</a>og<a href=\"https://lovdata.no/lov/2009-06-19-58/§11-3\" target=\"_blank\" rel=\"noopener noreferrer\">11-3 </a>første ledd.</p><p><strong>Tredjeparter</strong> som har opplysningsplikt etter lovens kapittel7 omfattes ikke av begrepet skattepliktig. Det gjør heller ikke <strong>trekkpliktige</strong> som skal foreta fastsetting ved trekk etter lovens <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-8-0.001/SKTFV2025_ID-8-8.001\">§8‑8 Melding om trekk mv.</a> i utbetalinger til skattepliktige. Det samme gjelder andre som kan gjøres <strong>ansvarlige for betaling av den skattepliktiges skatt</strong>, for eksempel etter <a href=\"https://lovdata.no/lov/2005-06-17-67/§16-10\" target=\"_blank\" rel=\"noopener noreferrer\">skattebetalingsloven §§16‑10 til 16-14</a> og <a href=\"https://lovdata.no/lov/2005-06-17-67/§16-30\" target=\"_blank\" rel=\"noopener noreferrer\">§§16‑30 til 16-50</a> og <a href=\"https://lovdata.no/lov/2009-06-19-58/§2-2\" target=\"_blank\" rel=\"noopener noreferrer\">merverdiavgiftsloven §2‑2 tredje ledd.</a></p>",
          "publiseringsdato": "2025-12-31",
          "endringskommentar": "<p>Bakgrunnen for endringer i denne versjonen:</p><ul><li>Redaksjonelle endringer uten materiell betydning</li></ul>"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑2 første ledd bokstavc",
          "tekst": "<p>Med «skattemyndigheter» menes myndigheter som nevnt i lovens kapittel2. Når begrepet blir brukt ellers i loven, vil det framgå av kapittel2 hvem som er myndighet for den enkelte skatteart. Definisjonen regulerer bare betydningen av dette begrepet i skatteforvaltningsloven. «Skattemyndigheter» brukes ellers i mange sammenhenger og med ulik betydning, og ofte i en videre betydning enn definisjonen her.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑2 første ledd bokstavd",
          "tekst": "<p>Bokstav d definerer begrepet «enkeltvedtak» i skatteforvaltningsloven. Begrepet er ment å ha samme innhold som tilsvarende begrep i forvaltningsloven. I likhet med forvaltningsloven angir begrepet anvendelsesområdet til flere av lovens bestemmelser. Definisjonen er tilpasset skatteforvaltningsområdet. Vilkåret om at avgjørelsen må gjelde rettigheter eller plikter til «en bestemt skattepliktig, tredjepart eller trekkpliktig» har den samme avgrensningsfunksjonen som vilkåret «en eller flere bestemte personer» i forvaltningsloven.</p><p>Skatteforvaltningsloven regulerer to typer myndighetsavgjørelser. Den ene er avgjørelser som er bestemmende for rettigheter og plikter for den avgjørelsen berører (enkeltvedtak), og den andre typen er såkalte prosessledende avgjørelser. Enkeltvedtak kan igjen deles opp i vedtak som gjelder skattefastsetting og andre vedtak, f.eks. vedtak om overtredelsesgebyr. Se nærmere om skillet under.</p><h5>Hvilke bestemmelser gjelder?</h5><p>Mange av bestemmelsene i skatteforvaltningsloven gjelder ved behandlingen av alle saker etter loven, uavhengig av om det fattes avgjørelser som er enkeltvedtak. Eksempler på dette er reglene om habilitet og taushetsplikt. En del av lovens bestemmelser gjelder imidlertid bare bestemte grupper av saker. Anvendelsesområdet fremgår i disse tilfellene uttrykkelig av ordlyden. Det følger for eksempel av enkelte saksbehandlingsregler og klageregler at de bare gjelder for saker som er enkeltvedtak i lovens forstand, se <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-5-0.001\">Kapittel 5 Alminnelige saksbehandlingsregler</a> og <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-13-0.001\">Kapittel 13 Klage</a>. Videre gjelder enkelte regler bare for utvalgte typer enkeltvedtak. Eksempler på dette er <a href=\"https://lovdata.no/lov/2016-05-27-14/§12-1\" target=\"_blank\" rel=\"noopener noreferrer\">§§12‑1 til 12-10</a>, som bare gjelder vedtak om skattefastsetting, og <a href=\"https://lovdata.no/lov/2016-05-27-14/§12-11\" target=\"_blank\" rel=\"noopener noreferrer\">§12‑11</a>som bare regulerer andre enkeltvedtak enn vedtak om skattefastsetting. Se <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-12-0.001\">Kapittel 12 Endring uten klage</a>.</p><h5>Myndighetsfastsetting</h5><p>Bare avgjørelser som treffes av skattemyndighetene kan være enkeltvedtak. Dette betyr at det ikke fattes enkeltvedtak når den skattepliktige selv eller den trekkpliktige fastsetter grunnlaget for- eller beregner skatt etter <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-9-0.001/SKTFV2025_ID-9-2.001\">§9‑1 Fastsetting av skattegrunnlaget</a> og <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-9-0.001/SKTFV2025_ID-9-3.001\">§9‑2 Beregning av skatt</a>.</p><h5>Skattefastsettingsvedtak</h5><p>Vedtak om skattefastsetting regulerer det materielle innholdet i en skatteforpliktelse. Både myndighetenes fastsetting av skattegrunnlaget og den påfølgende skatteberegningen er vedtak om skattefastsetting. Eksempler på den første gruppen vedtak er skattemyndighetenes vedtak om fastsetting av alminnelig inntekt, personinntekt eller grunnlaget for beregning av særavgifter eller merverdiavgift (beregningsgrunnlaget for utgående avgift og beløpet for inngående avgift) i forbindelse med kontroll. Vedtak om hvilke skatte- og avgiftssatser som skal anvendes på grunnlaget for beregning av skatt, er eksempler på vedtak som gjelder skatteberegningen.</p><p>Vedtak om skattefastsetting kan videre gjelde hele fastsettingen eller bare deler av den. Et eksempel på vedtak som gjelder hele fastsettingen, er et vedtak der skattemyndighetene fastsetter samlet merverdiavgiftspliktig beløp for en termin ved skjønn fordi den skattepliktige ikke har levert skattemelding for terminen. Vedtak som kun gjelder enkeltposter om skattepliktig formue, inntekt eller fradrag, er eksempler på vedtak som bare dreier seg om deler av fastsettingen.</p><p>Et skattefastsettingsvedtak kan påvirke skatteforpliktelsen i positiv eller negativ retning sammenlignet med den fastsettingen som foreligger fra før (være til fordel eller ulempe for den skattepliktige). Vedtak om skattefastsetting kan også bli fattet uten at det foreligger noen fastsetting fra tidligere. Dette gjelder på motorkjøretøyavgiftsområdet, hvor det er skattemyndighetene som gjennomfører den ordinære fastsettingen etter <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-9-0.001/SKTFV2025_ID-9-2.001/SKTFV2025_ID-9-2.010\">§9‑1 annet ledd</a>. Vedtak om skattefastsetting kan også fattes uten at det foreligger noen tidligere fastsetting. Dette vil være aktuelt for skattearter hvor det er den skattepliktige som skal fastsette grunnlaget for skatten etter <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-9-0.001/SKTFV2025_ID-9-2.001/SKTFV2025_ID-9-2.003\">§9‑1 første ledd</a>. Det typiske eksemplet på dette er når skattemyndighetene fastsetter den skattepliktiges inntekt, formue eller omsetning ved skjønn fordi den skattepliktige ikke har levert skattemelding, se <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-12-0.001\">Kapittel 12 Endring uten klage</a>. Vedtak om tilleggsskatt og skjerpet tilleggsskatt er også vedtak om skattefastsetting, se <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-14-0.001/SKTFV2025_ID-14-3.001\">§14‑3 Tilleggsskatt</a> og <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-14-0.001/SKTFV2025_ID-14-6.001\">§14‑6 Skjerpet tilleggsskatt</a>.</p><h5>Andre enkeltvedtak enn skattefastsettingsvedtak</h5><p>Avgjørelser etter <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-14-0.001/SKTFV2025_ID-14-1.001\">§14‑1 Tvangsmulkt</a> eller etter <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-14-0.001/SKTFV2025_ID-14-7.001\">§14‑7 Overtredelsesgebyr</a> er «enkeltvedtak» etter <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-1-0.001/SKTFV2025_ID-1-2.001/SKTFV2025_ID-1-2.006\">§1‑2 første ledd bokstavd</a>, men er ikke vedtak om skattefastsetting. Et varsel om tvangsmulkt etter <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-14-0.001/SKTFV2025_ID-14-1.001/SKTFV2025_ID-14-1.003\">§14‑1 første ledd</a> er et enkeltvedtak fordi tvangsmulkten begynner å løpe umiddelbart dersom opplysningene ikke er gitt innen den nye fristen. Det treffes ikke et nytt vedtak fra skattemyndighetenes side og vedtaket er dermed et såkalt betinget vedtak.</p><p>Avgjørelser om tvangsmulkt eller overtredelsesgebyr kan rette seg mot tredjeparter, noe som i seg selv medfører at det ikke dreier seg om vedtak om skattefastsetting. Også når slike avgjørelser retter seg mot skattepliktige, følger det imidlertid av avgjørelsenes art at de ikke er fastsettingsvedtak. Avgjørelser om tvangsmulkt eller overtredelsesgebyr regulerer ikke det materielle innholdet i en skatteforpliktelse. De er administrative reaksjonsformer mot skattepliktige og tredjeparter for blant annet manglende levering av opplysninger eller unnlatelse av å medvirke til kontroll.</p><p>Vedtak om registrering i Merverdiavgiftsregisteret er ikke vedtak om skattefastsetting, ettersom det ikke er en del av fastsettingen av merverdiavgift for den enkelte termin. Vedtak om registrering og sletting i Merverdiavgiftsregisteret skal likevel behandles etter bestemmelsene som gjelder for fastsettingsvedtak når det samtidig er truffet vedtak om endring av fastsettingen etter <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-12-0.001/SKTFV2025_ID-12-1.001\">§12‑1 Endring av skattefastsetting mv.</a>, se <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-12-0.001/SKTFV2025_ID-12-2.001/SKTFV2025_ID-12-2.013\">§12‑2 annet ledd</a>.</p><h5>Avvisningsvedtak</h5><p>I forvaltningsloven §2 tredje ledd er det presisert at avgjørelser som gjelder avvisning av en sak eller bruk av særlige tvangsmidler for å få gjennomført et vedtak, også skal regnes som enkeltvedtak. Slike avgjørelser er også ment å være enkeltvedtak etter skatteforvaltningsloven. Se nærmere om grensen mellom avvisningsvedtak og beslutning om å ikke ta opp en sak til endring ved for sent innkomne klager under <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-13-0.001/SKTFV2025_ID-13-4.001/SKTFV2025_ID-13-4.005\">§13‑4 tredje ledd</a>.</p><h5>Prosessledende avgjørelser</h5><p>Det at avgjørelsen må være «bestemmende for rettigheter eller plikter» for å være et enkeltvedtak etter <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-1-0.001/SKTFV2025_ID-1-2.001/SKTFV2025_ID-1-2.006\">§1‑2 første ledd bokstavd</a>, er ment å ha samme betydning som det likelydende begrepet i <a href=\"https://lovdata.no/lov/1967-02-10/§2\" target=\"_blank\" rel=\"noopener noreferrer\">forvaltningsloven §2</a>. Dette vilkåret innebærer eksempelvis at prosessledende avgjørelser som hovedregel ikke er enkeltvedtak etter loven. Prosessledende avgjørelser er for eksempel avgjørelser om innsyn i saksdokumenter og pålegg om å gi kontrollopplysninger. Det er egne klage- og saksbehandlingsregler for innsyn i saksdokumenter og kontroll, se nærmere om dette i <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-11-0.001\">Kapittel 11 Pålegg om bokføring, revisjon og oppbevaring av regnskapsmateriale</a> og <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-10-0.001\">Kapittel 10 Kontroll</a>. Det vil også være en prosessledende avgjørelse når skattepliktige nektes overgang til ordinær beskatningsordning etter utløpet av fristen for uttreden av kildeskatteordningen for utenlandske arbeidstakere i <a href=\"https://lovdata.no/forskrift/1999-11-19-1158/§20-6-1\" target=\"_blank\" rel=\"noopener noreferrer\">FSFIN § 20-6-1</a>.</p><p>Selv om prosessledende avgjørelser ikke er enkeltvedtak, gjelder de ulovfestede prinsippene om forsvarlig saksbehandling også på disse saksområdene, og kravet til saksbehandlingen skjerpes når det f.eks. er tale om utlevering av sensitive opplysninger. Se sak 2007/1796 hos Sivilombudet, som er omtalt under <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-3-0.001/SKTFV2025_ID-3-3.001\">§3‑3 Utlevering av opplysninger til offentlige myndigheter</a>.</p><p>Avgjørelse om ikke å ta opp en sak etter §12‑1 er heller ikke enkeltvedtak. Se avgjørelse i <a href=\"https://lovdata.no/dokument/LGSIV/avgjorelse/lg-2023-169697?q=LG-2023-169697\" target=\"_blank\" rel=\"noopener noreferrer\">LG-2023-169697</a> <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-12-0.001/SKTFV2025_ID-12-1.001/SKTFV2025_ID-12-1.003#SKTFV2025_ID-12-1.004\">Generelt om bestemmelsen</a> og <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-13-0.001/SKTFV2025_ID-13-1.001/SKTFV2025_ID-13-1.003#SKTFV2025_ID-13-1.004\">Enkeltvedtak kan påklages</a> .</p>",
          "publiseringsdato": "2025-12-31",
          "endringskommentar": "<p>Bakgrunnen for endringer i denne versjonen:</p><ul><li>Redaksjonelle endringer uten materiell betydning</li></ul>"
        }
      ]
    },
    {
      "typeInnholdseksjon": "paragrafseksjon",
      "overskrift": "§1‑3 Forholdet til forvaltningsloven",
      "publiseringsdato": "2025-03-13",
      "forskrifter": "<ul style=\"list-style:none;margin-left:2rem;padding:0;\"><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">–</span><a href=\"https://lovdata.no/dokument/SF/forskrift/2004-06-25-988\" target=\"_blank\" rel=\"noopener noreferrer\">Forskrift 25.juni 2004 nr.988 om elektronisk kommunikasjon med og i forvaltningen (eForvaltningsforskriften).</a></li></ul>",
      "regelverk": "\n            <div class=\"utforming utforming-regelverk\">\n              <h4></h4>\n              <p>Forvaltningsloven gjelder ikke for behandling av saker etter denne loven, med følgende unntak:</p><ol style=\"list-style-type:none;margin-left:2rem;padding:0;\"><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">a)</span>Forvaltningsloven §15 a om elektronisk kommunikasjon og forskrifter gitt i medhold av bestemmelsen gjelder for behandlingen av saker etter denne loven. Departementet kan gi forskrift som angitt i forvaltningsloven §15 a tredje ledd for behandlingen av saker etter loven her.</li><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">b)</span>Forvaltningsloven kapittel VII om forskrifter gjelder for behandlingen av saker etter denne loven.</li></ol>\n              \n            </div>\n          ",
      "forarbeider": "<ul style=\"list-style:none;margin-left:2rem;padding:0;\"><li style=\"position:relative;padding-left:1.5rem;list-style:none;\"><span style=\"position:absolute;left:0;width:1.5rem;text-align:center;\">–</span><a href=\"https://www.regjeringen.no/contentassets/85c4785c72ed464e980a71bba0e04d1d/no/pdfs/prp201520160038000dddpdfs.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Prop. 38 L (2015-2016) Lov om skatteforvaltning kapittel7</a></li></ul>",
      "innholdseksjoner": [
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑3 Generelt",
          "tekst": "<p>Forvaltningsloven gjelder ikke med mindre annet er bestemt. Skatteforvaltningsloven er uttømmende for sitt område, men den må i enkelte tilfeller suppleres med alminnelige forvaltningsrettslige prinsipper. Det fremgår for eksempel direkte av <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-12-0.001/SKTFV2025_ID-12-11.001/SKTFV2025_ID-12-11.009\">§12‑11 fjerde ledd</a> at en endringsadgang kan følge av alminnelige forvaltningsrettslige prinsipper. Prinsippene ligger også til grunn for lovens bestemmelser, og de gjennomgås kort i dette kapitlet.</p><p>Selv om forvaltningsloven ikke gjelder, er det gjort et unntak for forvaltningslovens regler om elektronisk kommunikasjon og kapittelet om forskrifter. Disse gjelder direkte. Videre fremgår det av forarbeidene at skatteforvaltningslovens enkeltvedtaksbegrep i tvilstilfeller skal forstås på samme måten som begrepet enkeltvedtak i forvaltningsloven. Det er for øvrig et formål at reglene på skatteforvaltningsområdet i størst mulig grad skal være lik de som gjelder etter forvaltningsloven.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑3 første ledd bokstava",
          "tekst": "<p>Reglene om elektronisk kommunikasjon som er gitt i og i medhold av forvaltningsloven gjelder for behandlingen av saker etter skatteforvaltningsloven. Det er ikke gitt egen forskrift med hjemmel i skatteforvaltningsloven §1‑3 første ledd bokstava.</p><p>I forvaltningsloven er elektronisk kommunikasjon mellom forvaltningen og borgerne regulert i <a href=\"https://lovdata.no/lov/1967-02-10/§15a\" target=\"_blank\" rel=\"noopener noreferrer\">§15 a</a> og forskrifter gitt i medhold av bestemmelsen. Forvaltningen har som hovedregel adgang til å kommunisere elektronisk med borgerne. Det åpnes imidlertid for at privatpersoner kan reservere seg mot elektronisk kommunikasjon og i stedet motta tradisjonell post fra forvaltningen. I tillegg fastslår <a href=\"https://lovdata.no/lov/1967-02-10/§15a\" target=\"_blank\" rel=\"noopener noreferrer\">forvaltningsloven §15 a annet ledd</a> at alle som henvender seg til et forvaltningsorgan kan benytte elektronisk kommunikasjon dersom forvaltningsorganet har lagt til rette for dette og det skjer på den anviste måten, om ikke annet følger av lov eller forskrift. Bestemmelser som pålegger virksomheter eller personer å sende informasjon elektronisk til et forvaltningsorgan, reguleres i særlovgivningen. På skatteområdet er det fastsatt slike forskrifter med hjemmel i <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-7-0.001/SKTFV2025_ID-7-13.001\">§7‑15 Forskrifter mv.</a> og <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-8-0.001/SKTFV2025_ID-8-16.001\">§8‑16 Forskrifter mv.</a>.</p><p>Skatteforvaltningsloven §1‑3 bokstava med henvisning til forvaltningsloven §15 a gir tilstrekkelig behandlingsgrunnlag for skattemyndighetenes elektroniske kommunikasjon. Nærmere regler om elektronisk kommunikasjon er gitt i <a href=\"https://lovdata.no/dokument/SF/forskrift/2004-06-25-988\" target=\"_blank\" rel=\"noopener noreferrer\">forskrift 25.juni 2004 nr.988 om elektronisk kommunikasjon med og i forvaltningen (eForvaltningsforskriften</a>).</p>",
          "publiseringsdato": "2025-12-31",
          "gjelderFraDato": "2026-01-01",
          "endringskommentar": "<p>Bakgrunnen for endringer i denne versjonen:</p><ul><li>Endringer i lov om skatteforvaltning, § 7-13 har blitt § 7-15. Endringen gjelder fra 1.1.2026.</li></ul>"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑3 første ledd bokstavb",
          "tekst": "<p>Bestemmelsen innebærer at når det blir truffet forskriftsbestemmelser hjemmel i skatteforvaltningsloven, skal det skje etter reglene i <a href=\"https://lovdata.no/lov/1967-02-10/§37\" target=\"_blank\" rel=\"noopener noreferrer\">forvaltningsloven kapittel VII.</a></p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑3 Om skatteforvaltningsloven og alminnelige forvaltningsrettslige prinsipper",
          "tekst": "<p>Det følger av §1‑3 at forvaltningsloven ikke gjelder for behandlingen av saker etter loven. Det er likevel klart at når skatteforvaltningsloven blir anvendt, kan det bli lagt vekt både på prinsipper som kommer til uttrykk i forvaltningsloven og andre alminnelige forvaltningsrettslige prinsipper. I <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-12-0.001/SKTFV2025_ID-12-11.001/SKTFV2025_ID-12-11.009\">§12‑11 fjerde ledd</a>, som gjelder myndighetenes endringsadgang, er det også vist til alminnelige forvaltningsrettslige regler.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑3 Formålet med forvaltningsregler",
          "tekst": "<p>Formålet med forvaltningsregler er å legge til rette for en betryggende saksbehandling som sikrer materielt riktige avgjørelser og borgernes rettssikkerhet. Dette må også ses i sammenheng med universelle menneskerettigheter. Menneskerettighetene er nedfelt både i Grunnloven <a href=\"https://lovdata.no/lov/1814-05-17-nn/§2\" target=\"_blank\" rel=\"noopener noreferrer\">§2</a>og<a href=\"https://lovdata.no/lov/1814-05-17-nn/§92\" target=\"_blank\" rel=\"noopener noreferrer\">§92</a>, og i <a href=\"https://lovdata.no/lov/1999-05-21-30/emkn/a6\" target=\"_blank\" rel=\"noopener noreferrer\">EMK art. 6</a> om retten til rettferdig rettergang. Formålet er å sikre forutberegnelighet gjennom forståelige materielle regler og regler om forhåndsvarsling og kontradiksjon. Se også <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-17-0.001\">Kapittel 17 Forholdet til menneskerettighetene</a>.</p><p>Effektiv og forsvarlig saksbehandling skal også sikres gjennom regler om saksbehandlingstid, veiledning, innsyn og begrunnede avgjørelser. Regler om habilitet skal sørge for upartisk, uhildet saksbehandling, at det ikke tas utenforliggende hensyn og sikre tilliten til forvaltningen. Regler om taushetsplikt må ses i sammenheng med at borgerne har en omfattende opplysningsplikt. Alle krav som stilles må veies opp mot hverandre. Kravene til rask og effektiv saksbehandling vil for eksempel lett kunne komme i konflikt med kravene til grundig og forsvarlig saksbehandling. Forvaltningsreglene sier stort sett ingenting om hvilke av flere motstridende hensyn som skal veie tyngst.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑3 Hvorfor egen skatteforvaltningslov?",
          "tekst": "<p>I forvaltningsretten blir det skilt mellom alminnelig og spesiell forvaltningsrett. Forvaltningsloven er en del av den alminnelige forvaltningsretten, mens skatteforvaltningsloven er en del av den spesielle forvaltningsretten. En viktig forskjell mellom forvaltningsloven og skatteforvaltningsloven er hvem som har hovedansvaret for sakens opplysning. Etter forvaltningsloven har forvaltningen i større grad en veilednings- og utredningsplikt enn det skattemyndighetene har etter skatteforvaltningsloven. Det følger av forvaltningsloven at forvaltningsorganet skal påse at saken er så godt opplyst som mulig før vedtak treffes. Skatteforvaltningsloven bygger derimot primært på et egenfastsettingsprinsipp. Den skattepliktige fastsetter grunnlaget for skatten selv, eller skattemyndighetene bygger på skattepliktiges egne opplysninger når de fatter vedtak. Begrunnelsen er at det er de skattepliktige som kjenner sine egne forhold best. Antallet saker på skatteområdet er svært høyt, slik at en utredningsplikt for skattemyndigheten i praksis ikke ville latt seg gjennomføre.</p><p>Etter forvaltningsloven behandles klager av overordnet forvaltningsorgan, mens det er nemnder som er klageinstans ved fastsetting av formues- og inntektsskatt og merverdiavgift.</p><p>Videre er det strengere regler om taushetsplikt på skatteområdet enn etter forvaltningsloven. Ettersom opplysningsplikten i skattesaker er omfattende, er det svært viktig at den opplysningspliktige kan stole på at opplysningene ikke kommer på avveie.</p><p>Det er også strengere regler om habilitet. Bruk av skjønn ved fastsetting av skattegrunnlag, endringsbestemmelsene og sanksjonsbestemmelsene er også særbestemmelser i skatteforvaltningsloven.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑3 Legalitetsprinsippet",
          "tekst": "<p>Det at avgjørelser krever hjemmel i lov, omtales som legalitetsprinsippet. Dette er lovfestet i Grunnloven §113. Hjemmelsgrunnlaget sikrer at det foreligger et grunnlag for Skatteetatens myndighetsutøvelse. Inngrep i private forhold forutsetter hjemmel i lov. Det samme gjelder bruk av fysisk makt og tvangsmidler. Det kreves for eksempel hjemmel i lov for å pålegge private parter plikter som ikke kan bygges på avtale. Forvaltningen må derfor ha hjemmel i lov for å pålegge skattepliktige å legge frem opplysninger. Hvorvidt det foreligger tilstrekkelig hjemmel, må avklares gjennom en tolking av den enkelte bestemmelse. Ved tolkingen må man anvende den alminnelig rettsskildelæren.</p>",
          "publiseringsdato": "2025-12-31",
          "endringskommentar": "<p>Bakgrunnen for endringer i denne versjonen:</p><ul><li>Redaksjonelle endringer uten materiell betydning</li></ul>"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑3 Hva kan forvaltningen bestemme?",
          "tekst": "<p>Mens forvaltningsretten beskriver hvordan saksbehandlingen skal foregå, er det i den materielle lovgivningen vi finner hva forvaltningen kan bestemme. Både skatteloven, merverdiavgiftsloven og særavgiftsloven er eksempler på materiell lovgivning. Forvaltningen må alltid ha et rettslig grunnlag for å kunne fatte avgjørelser. Når det gjelder selve organiseringen av forvaltningen finnes ofte hjemmelen i den generelle organisasjons- og instruksjonsmyndigheten som et overordnet organ har overfor underordnede organer, jf. <a href=\"https://lovdata.no/lov/1814-05-17-nn/§3\" target=\"_blank\" rel=\"noopener noreferrer\">Grunnloven §3</a>, som bestemmer at den utøvende makt tilligger Kongen. Privat autonomi er et annet grunnlag som forvaltningsorganer kan påberope seg. Dette vil f.eks. gjelde rådigheten over eiendom og kompetansen til å inngå avtaler. Et eksempel på utøvelse av slik rådighet er i tilfeller hvor skattepliktige reiser erstatningskrav mot Skatteetaten på erstatningsrettslig grunnlag, jf. <a href=\"https://lovdata.no/lov/1969-06-13-26/§2-1\" target=\"_blank\" rel=\"noopener noreferrer\">skadeserstatningsloven §2‑1</a>. I disse sakene opptrer Skatteetaten som en hvilken som helst privat part, og kan dermed nekte erstatning uten å følge saksbehandlingsreglene i skatteforvaltningsloven.</p>",
          "publiseringsdato": "2025-03-13"
        },
        {
          "typeInnholdseksjon": "inndelingseksjon",
          "overskrift": "§1‑3 Forsvarlig saksbehandling",
          "tekst": "<p>Forsvarlig saksbehandling blir sikret gjennom regler om foreløpig svar, taushetsplikt, habilitet, partsinnsyn, forhåndsvarsling, forutberegnelighet, veiledningsplikt, krav til begrunnelser, omgjøringsregler og klageregler. I tillegg kan det være interne retningslinjer og rutiner som også skal ivareta disse kravene. Formålet med reglene er at det skal treffes materielt riktige avgjørelser og reglene skal sikre tilliten til forvaltningen. Imidlertid finnes ikke alle kravene som stilles til forsvarlig saksbehandling i forvaltningslovene. Det stilles også strenge krav til likebehandling, at det ikke tas utenforliggende hensyn og at det ikke fattes vilkårlige avgjørelser.</p><p>Med <strong>likebehandling</strong> menes at like tilfeller skal behandles likt. Prinsippet er nedfelt i <a href=\"https://lovdata.no/lov/1814-05-17-bm/§98\" target=\"_blank\" rel=\"noopener noreferrer\">Grunnloven §98</a>. De fleste saksbehandlingsreglene støtter opp under dette formålet, uten at prinsippet er uttrykt eksplisitt i en lovbestemmelse. Spesielt klagereglene og reglene om omgjøring av eget tiltak står sentralt her. I tillegg vil domstolenes kontroll med forvaltningen være en viktig garantist for dette formålet. Det samme gjelder Sivilombudets kontroll med forvaltningen. Det er viktig å skille mellom saklig og usaklig forskjellsbehandling. Det er den usaklige forskjellsbehandlingen som skal unngås. Saklig forskjellsbehandling, for eksempel at det treffes ulik avgjørelse i to tilsynelatende like klagesaker fordi faktum ikke er helt likt, er tillatt. Det samme kan være tilfellet dersom fristene for endring er oversittet for skattepliktig A, men ikke for skattepliktig B. Da vil skattemyndigheten kunne endre hos B uten at han kan få medhold i at dette er usaklig forskjellsbehandling. Skatteetatens kontroll av enkelte skattepliktige, men ikke alle, er heller ikke usaklig forskjellsbehandling.</p><p><strong>Med forbudet mot å ta utenforliggende hensyn</strong> menes at en avgjørelse må bygge på saklige og relevante hensyn. Noen ganger fremgår det av en lovbestemmelse hvilke hensyn som skal tillegges vekt. Se for eksempel <a href=\"/rettskilder2/type/handboker/skatteforvaltningshandboken/gjeldende/SKTFV2025_ID-12-0.001/SKTFV2025_ID-12-1.001/SKTFV2025_ID-12-1.009\">§12‑1 annet ledd</a>, hvor de viktigste hensynene ved vurderingen om en sak skal tas opp til endring fremgår direkte av lovteksten. Når hensynene ikke går klart frem av loven, vil lovens eller bestemmelsens formål kunne gi svar på hvilke hensyn som er saklige og relevante. Det vil som hovedregel alltid være forbudt å legge vekt på personlige kjennetegn ved en part, f.eks. kjønn, etnisitet, politisk syn, organisasjonsmedlemsskap o.l.</p><p>Det gjelder et generelt <strong>forbud mot vilkårlig og urimelig myndighetsutøvelse</strong>. Tilfeldige avgjørelser kan ikke godtas. Dersom forvaltningen verken har utøvd skjønn eller lagt en rettsregel til grunn for sitt vedtak, kan avgjørelsen være ugyldig. Det er sjelden at domstolene opphever vedtak på dette grunnlaget alene, men det kombineres ofte med brudd på andre hensyn eller regler.</p><p>Avgjørelser må dessuten basere seg på <strong>korrekte fakta</strong>. Når skattemyndighetene kan fastsette det faktiske grunnlaget ved skjønn, skal skjønnet settes til det som fremstår som riktig ut fra opplysningene i saken. Regler om innsyn, krav til dokumentasjon og kontradiksjon skal bidra til å sikre et korrekt beslutningsgrunnlag.</p>",
          "publiseringsdato": "2025-12-31",
          "endringskommentar": "<p>Bakgrunnen for endringer i denne versjonen:</p><ul><li>Redaksjonelle endringer uten materiell betydning</li></ul>"
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

| Feilkode | HTTP Statuskode | Feilområde                                              |
|----------|-----------------|---------------------------------------------------------|
| RET-001  | 500             | Uventet feil på tjenesten.                              |
| RET-002  | 500             | Uventet feil i et bakenforliggende system.              |
| RET-003  | 404             | Ukjent url benyttet.                                    |
| RET-004  | 401             | Feil i forbindelse med autentisering.                   |
| RET-005  | 403             | Feil i forbindelse med autorisering.                    |
| RET-006  | 400             | Feil i forbindelse med validering av inputdata.         |
| RET-007  | 404             | Ingen rettsinformasjon funnet for angitt identifikator. |
| RET-008  | 406             | Feil tilknyttet dataformat. Kun json er støttet.        |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Se [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/rettsinformasjon-api/) på SwaggerHub for beskrivelse av informasjonsmodellen.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.

</TabItem>
</Tabs>
