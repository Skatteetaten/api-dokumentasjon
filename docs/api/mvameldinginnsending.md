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

<TabItem headerText="Feilkoder" itemKey="itemKey-2">

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
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-3">

## XSD for mva-meldingen

### XSD for mva-meldingen versjon 1.0
Mva-meldingen sendes inn i XML-format. Den må være i henhold til strukturen dokumentert i XSD for mva-melding.
Versjon 1.0 av denne XSD'en ligger her: no.skatteetaten.fastsetting.avgift.mva.skattemeldingformerverdiavgift.v1.0.xsd
Grafisk fremstilling av xsd og kodelister for [![mva-meldingen:](../../static/img/SkattemeldingForMerverdiavgift2020.png)](../../static/img/SkattemeldingForMerverdiavgift2020.png) 

SAF-T standarden inneholder også kodene 0 (Ingen merverdiavgiftsbehandling (anskaffelser)), 7 (Ingen merverdiavgiftsbehandling (inntekter)), 20 (Kostnad ved innførsel av varer, ingen merverdiavgiftsbehandling)
, 21 (Kostnader ved innførsel av varer, alminnelig sats) og 22 (Kostnader ved innførsel av varer, redusert sats, middels). Disse skal ikke rapporteres i mva-meldingen.

### Kompensasjon i alminnelig mva-melding
Fra 01.01.2023 er spesifikasjonen «Kjøp med kompensasjonsrett» lagt til på 5 koder i mva-melding, i tillegg til de eksisterende spesifikasjonene. De berørte kodene med ny spesifikasjon er 81, 83, 86, 88 og 91. Felles for disse kodene er at innførsel av varer og tjenester (pluss innenlands kjøp av klimakvoter og gull) utløser utgående innførselsmerverdiavgift og at en har enten kompensasjonsrett for inngående mva eller direkte fradragsrett for inngående mva. Virksomheter som bruker disse kodene i ordinær mva-melding kan kreve kompensasjon ved å levere kompensasjonsmelding i tillegg.


</TabItem>
<TabItem headerText="Test" itemKey="itemKey-4">

## Url'er til testmiljøet

| Tjeneste |	Url |
|----------|-------|
| Validering | https://idporten-api-sbstest.sits.no/api/mva/grensesnittstoette/mva-melding/valider  |
| Innsending |	https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/  |
| Instans API |	https://skd.apps.tt02.altinn.no/skd/mva-melding-innsending-etm2/instances  |

  
</TabItem>

<TabItem headerText="Eksempler" itemKey="itemKey-5"> 

## Eksempler på mva-meldinger

Eksempler på ny mva-melding i [excel](../../static/download/Testtilfeller_mva_melding.xlsx.xlsx).


Tilsvarende eksempler på mva-meldinger i [XML-format](https://github.com/Skatteetaten/mva-meldingen/tree/master/docs/informasjonsmodell_filer/example_files/melding).

## Feltbeskrivelse for mva-melding

### MVAMelding
| Felt |	Beskrivelse | Formål |
|:------|:--------------|:--------|
| meldingskategori | Type skjema som sendes inn | Å sikre at brukeren dekker sin plikt for egenfastsetting |
| merknad | Informasjon om innholdet i mva-meldingen  | Å sikre at skattepliktig kan forklare egen rettsanvendelse der det er nødvendig |

### Skattepliktig
| Felt |	Beskrivelse | Formål |
|:------|:--------------|:--------|
| organisasjonsnummer | Unik identifikator for den skattepliktige som foretar egenfastsetting  | Ivareta den skattepliktiges rettigheter og plikter |

### Innsending
| Felt |	Beskrivelse | Formål |
|:------|:--------------|:--------|
| regnskapssystemrefereanse | Skattepliktiges unike referanse for innsending |  Sikre at skattepliktig og skattekontoret refererer til samme melding |
| system | Navn og evt versjon for regnskapssystem |  Å kunne følge opp systematiske feil med systemleverandør i stedet for å følge opp hver enkelt skattepliktig |

### Betalingsinformasjon
| Felt |	Beskrivelse | Formål |
|:------|:--------------|:--------|
| KID | Mottakerens identifikasjon av en betaling | Å kunne betale til de bankkontoene som krever KID |

### Skattegrunnlag og beregnet skatt
| Felt |	Beskrivelse | Formål |
|:------|:--------------|:--------|
| skattleggingsperiode | Den perioden egenfastsettingen gjelder for. Periode angis i henhold til kodeverket for Skattleggingsperiode. SkattleggingsperiodeUke følger kalenderens ukenummerering, eksempelvis løper uke 1 i 2022 fra 3. til 9. januar. I SkattleggingsperiodeHalvmåndelig løper første halvdel fra 1. til 15. i måneden og andre halvdel løper fra 16. til siste i måneden. |  Sikre samsvar mellom bokføring og egenfastsetting |
| fastsattMerverdiavgift | Sum å betale/sum til gode |  Å sikre at riktig beløp blir betalt |

### MvaSpesifikasjonslinje
| Felt |	Beskrivelse | Formål |
|:------|:--------------|:--------|
| mvaKode | Klassifikasjon av inngående og utgående mva ihht til norsk SAF-T standard  | Formidling av hvilke mva-vurderinger som er utført |
| spesifikasjon | Detaljering av noen mva-forhold som ikke inngår i norsk SAF-T standard |  Formidling av hvilke mva-vurderinger som er utført |
| mvaKodeRegnskapssystem | intern mva-kode i regnskapssystemet. Det kan være flere interne mva-koder for en mvaKode og evt spesifikasjon. I det tilfellet vil det bli flere rader i mva-meldingen pr mvaKode og spesifikasjon; en pr kombinasjon av mva-kode, spesifikasjon og mvaKodeRegnskapssystem. |  To hensyn Brukerne: gjenkjennelig i forhold til det de ser i regnskapet. Systemleverandørene skal slippe å legge om mva-koder i systemene |
| grunnlag | Det beløpet det er regnet utgående mva av. Feltet skal ikke fylles ut for inngående mva | Grunnlag for kontroll ifra Skatteetaten |
| sats | Den mva-satsen som er benyttet ved beregning av utgående mva. Feltet skal ikke fylles ut for inngående mva |  Å sikre at bare gyldige satser benyttes ved fakturering |
| merverdiavgift | Fastsatt merverdiavgift | Å vise beregnet mva pr linje |
| merknad | Informasjon om innholdet i mvaKode |  Å sikre at skattepliktig kan forklare egen rettsanvendelse der det er nødvendig |



## Feltbeskrivelse for MvaMeldingInnsending
| Felt |	Beskrivelse | Formål |
|:------|:--------------|:--------|
| <b>MvaMeldingInnsending</b> | | |
| meldingskategori | Type skjema som sendes inn | Å sikre at brukeren dekker sin plikt for egenfastsetting |
| innsendingstype | En mva-melding av meldingskategori alminnelig og primær vil alltid være komplett. | Feltet beholdes for på et senere tidspunkt kunne åpne for at revisor kommenterer/ skriver merknad på de mva-meldingene (f. eks. merverdiavgift kompensasjon) som skal godkjennes av revisor før innsending. |
| instansstatus | Dette feltet kommer vi til å fjerne da vi får denne informasjonen fra hendelser på instansen. Dette skal gjøres ved at det settes til valgfritt i en overgang og fases ut ved en passende anledning.  |  |
| opprettetAv | Dette feltet skal inneholde navn på innlogget bruker | Innholdet i denne vises i Altinn. |
| opprettingstidspunkt | Dette feltet kommer vi til å fjerne da vi får denne informasjonen fra instansen. Dette skal gjøres ved at det settes til valgfritt i en overgang og fases ut ved en passende anledning. |  |
| <b>Identifikator (Enten organisasjonsnummer eller foedselsnummer)</b> | | |
| - | - | - |
| organisasjonsnummer | Unik identifikator for den skattepliktige som foretar egenfastsetting  | Ivareta den skattepliktiges rettigheter og plikter |
| foedselsnummer | Unik identifikator for den skattepliktige som foretar egenfastsetting |  Ivareta den skattepliktiges rettigheter og plikter |
| <b>Skattleggingsperiode</b> | | |
| - | - | - |
| periode | Den perioden egenfastsettingen gjelder for. Periode angis i henhold til kodeverket for Skattleggingsperiode. SkattleggingsperiodeUke følger kalenderens ukenummerering, eksempelvis løper uke 1 i 2022 fra 3. til 9. januar. I SkattleggingsperiodeHalvmåndelig løper første halvdel fra 1. til 15. i måneden og andre halvdel løper fra 16. til siste i måneden  | Sikre samsvar mellom bokføring og egenfastsetting |
| aar | Det året egenfastsettingen gjelder for | Sikre samsvar mellom bokføring og egenfastsetting |
| <b>Vedlegg</b> | | |
| - | - | - |
| vedleggstype | Type vedlegg som blir lastet opp på instansen i Altinn. Hvor en kan enten bruke mva-melding for selve mva-meldingen, eller binaerVedlegg for generelle vedlegg.  | |
| kildegruppe | Hvilken gruppe innsendingen kommer fra. Valgmuligheter: <b>etat<b/>, <b>sluttbrukersystem</b>, <b>sluttbruker</b> |  |
| opprettetAv |  Dette feltet skal inneholde navn på innlogget bruker  | Innholdet i denne vises i Altinn |
| opprettingstidspunkt | Dette feltet kommer vi til å fjerne da vi får denne informasjonen fra instansen. Dette skal gjøres ved at det settes til valgfritt i en overgang og fases ut ved en passende anledning. |  |
| <b>Vedleggsfil</b> | | |
| - | - | - |
| filnavn | Navnet på filen som er lagt med som vedlegg  |  |
| filekstensjon | Ekstensjonen til filen som er lagt med som vedlegg |  |
| filinnhold | Gir en beskrivelse av innholdet i vedleggsfilen |  |



## Kodelister

| Gruppe og kode                                    | Beskrivelse av kode, fradrag og spesifikasjon                                             |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Salg av varer og tjenester i Norge                |                                                                                           |
| 3                                                 | Salg og uttak av varer og tjenester (høy sats)                                            |
| Spesifikasjonslinje til kode 3                    | Uttak                                                                                     |
| 31                                                | Salg og uttak av varer og tjenester (middels sats)                                        |
| Spesifikasjonslinje til kode 31                   | Uttak                                                                                     |
| 33                                                | Salg og uttak av varer og tjenester (lav sats)                                            |
| Spesifikasjonslinje til kode 33                   | Uttak                                                                                     |
| 5                                                 | Salg og uttak av varer og tjenester som er fritatt for merverdiavgift (nullsats)          |
| Spesifikasjonslinje til kode 5                    | Uttak                                                                                     |
| 6                                                 | Salg og uttak av varer og tjenester som er unntatt merverdiavgiftsloven                   |
| Salg av varer og tjenester til utlandet (eksport) |                                                                                           |
| 52                                                | Salg av varer og tjenester til utlandet som er fritatt for merverdiavgift (nullsats)      |
| Kjøp av varer og tjenester i Norge (fradrag)      |                                                                                           |
| 1                                                 | Kjøp av varer og tjenester med fradragsrett (høy sats)                                    |
| Spesifikasjonslinje til kode 1                    | Tap på krav                                                                               |
| Spesifikasjonslinje til kode 1                    | Justering av merverdiavgift for kapitalvarer                                              |
| Spesifikasjonslinje til kode 1                    | Tilbakeføring av merverdiavgift for kapitalvarer (kun personkjøretøy og fast eiendom)     |
| 11                                                | Kjøp av varer og tjenester med fradragsrett (middels sats)                                |
| Spesifikasjonslinje til kode 11                   | Tap på krav                                                                               |
| 13                                                | Kjøp av varer og tjenester med fradragsrett (lav sats)                                    |
| Spesifikasjonslinje til kode 13                   | Tap på krav                                                                               |
| Kjøp av varer fra utlandet (import)               |                                                                                           |
| 81                                                | Kjøp av varer fra utlandet med fradragsrett (høy sats)                                    |
| 81                                                | Fradrag på kjøp av varer fra utlandet (høy sats)                                          |
| Spesifikasjonslinje til kode 81                   | Tilbakeføring av merverdiavgift for kapitalvarer (kun personkjøretøy og fast eiendom)     |
| Spesifikasjonslinje til kode 81                   | Justering av merverdiavgift for kapitalvarer                                              |
| Spesifikasjonslinje til kode 81                   | Kjøp med kompensasjonsrett		                                                |
| 14                                                | Fradrag på kjøp av varer fra utlandet (merverdiavgift betalt ved innførsel, høy sats)     |
| 82                                                | Kjøp av varer fra utlandet uten fradragsrett (høy sats)                                   |
| 83                                                | Kjøp av varer fra utlandet med fradragsrett (middels sats)                                |
| 83                                                | Fradrag på kjøp av varer fra utlandet (middels sats)                                      |
| Spesifikasjonslinje til kode 83                   | Kjøp med kompensasjonsrett		                                                |
| 15                                                | Fradrag på kjøp av varer fra utlandet (merverdiavgift betalt ved innførsel, middels sats) |
| 84                                                | Kjøp av varer fra utlandet uten fradragsrett (middels sats)                               |
| 85                                                | Kjøp av varer fra utlandet som det ikke skal beregnes merverdiavgift på (nullsats)        |
| Kjøp av tjenester fra utlandet (import)           |                                                                                           |
| 86                                                | Kjøp av tjenester fra utlandet med fradragsrett (høy sats)                                |
| 86                                                | Fradrag på kjøp av tjenester fra utlandet (høy sats)                                      |
| Spesifikasjonslinje til kode 86                   | Kjøp med kompensasjonsrett		                                                |
| 87                                                | Kjøp av tjenester fra utlandet uten fradragsrett (høy sats)                               |
| 88                                                | Kjøp av tjenester fra utlandet med fradragsrett (lav sats)                                |
| 88                                                | Fradrag på kjøp av tjenester fra utlandet (lav sats)                                      |
| Spesifikasjonslinje til kode 88                   | Kjøp med kompensasjonsrett		                                                |
| 89                                                | Kjøp av tjenester fra utlandet uten fradragsrett (lav sats)                               |
| Fisk m.m.                                         |                                                                                           |
| 32                                                | Salg av fisk og andre marine viltlevende ressurser (11,11%)                               |
| 12                                                | Kjøp av fisk og andre marine viltlevende ressurser (11,11%)                               |
| Spesifikasjonslinje til kode 12                   | Tap på krav                                                                               |
| Klimakvoter og gull                               |                                                                                           |
| 51                                                | Salg av klimakvoter og gull til næringsdrivende                                           |
| 91                                                | Kjøp av klimakvoter og gull med fradragsrett (høy sats)                                   |
| 91                                                | Fradrag på kjøp av klimakvoter og gull (høy sats)                                         |
| Spesifikasjonslinje til kode 91                   | Kjøp med kompensasjonsrett				                                |
| 92                                                | Kjøp av klimakvoter og gull uten fradragsrett (høy sats)                                  |

</TabItem>

</Tabs>
