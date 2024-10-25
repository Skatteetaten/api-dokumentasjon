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

### MvaMelding

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr><td>meldingskategori</td><td>Beskrivelse: type skjema som sendes inn <br/>
	Formål: å sikre at brukeren dekker sin plikt for egenfastsetting
	</td>
  </tr>
    <tr><td>merknad</td><td>Beskrivelse: informasjon om innholdet i mva-meldingen <br/>
	Formål: å sikre at skattepliktig kan forklare egen rettsanvendelse der det er nødvendig
	</td>
  </tr>
</table>

### Skattepliktig

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr><td>organisasjonsnummer</td><td>Beskrivelse: unik identifikator for den skattepliktige som foretar egenfastsetting <br/>
  Formål: ivareta den skattepliktiges rettigheter og plikter
	</td>
  </tr>	
</table>

### Innsending

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr><td>regnskapssystemrefereanse</td><td>Beskrivelse: Skattepliktiges unike referanse for innsending <br/>
  Formål: Sikre at skattepliktig og skattekontoret refererer til samme melding.
	</td>
  </tr>
    <tr><td>system</td><td>Beskrivelse: Navn og evt versjon for regnskapssystem <br/>
	Formål: Å kunne følge opp systematiske feil med systemleverandør i stedet for å følge opp hver enkelt skattepliktig.
	</td>
  </tr>
</table>

### Betalingsinformasjon

Kid oppgis bare dersom det er tilgodebeløp.

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr><td>KID</td><td>Beskrivelse: Mottakerens identifikasjon av en betaling <br/>
  Formål: Å kunne betale til de bankkontoene som krever KID
  </td>
</table>

### Skattegrunnlag og beregnet skatt

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr><td>skattleggingsperiode</td><td>Beskrivelse: den perioden egenfastsettingen gjelder for <br/>
  Periode angis i henhold til kodeverket for Skattleggingsperiode. SkattleggingsperiodeUke følger kalenderens ukenummerering, eksempelvis løper uke 1 i 2022 fra 3. til 9. januar. I SkattleggingsperiodeHalvmåndelig løper første halvdel fra 1. til 15. i måneden og andre halvdel løper fra 16. til siste i måneden. <br/>    
  Formål: sikre samsvar mellom bokføring og egenfastsetting
	</td>
  </tr>
    <tr><td>fastsattMerverdiavgift</td><td>Beskrivelse: sum å betale/sum til gode <br/>
	Formål: å sikre at riktig beløp blir betalt
	</td>
  </tr>
</table>

### MvaSpesifikasjonslinje

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr><td>mvaKode</td><td>Beskrivelse: Klassifikasjon av inngående og utgående mva ihht til norsk SAF-T standard<br/>
  Formål: formidling av hvilke mva-vurderinger som er utført
	</td>
  </tr>
  <tr><td>spesifikasjon</td><td>Beskrivelse: detaljering av noen mva-forhold som ikke inngår i norsk SAF-T standard<br/>
	Formål: formidling av hvilke mva-vurderinger som er utført
	</td>
  </tr> 
  <tr><td>mvaKodeRegnskapssystem</td><td>Beskrivelse: intern mva-kode i regnskapssystemet. Det kan være flere interne mva-koder for en mvaKode og evt spesifikasjon. I det tilfellet vil det bli flere rader i mva-meldingen pr mvaKode og spesifikasjon; en pr kombinasjon av mva-kode, spesifikasjon og mvaKodeRegnskapssystem.<br/>
  Formål: To hensyn <br/>
Brukerne: gjenkjennelig i forhold til det de ser i regnskapet. <br/>
Systemleverandørene skal slippe å legge om mva-koder i systemene
	</td>
  </tr>
  <tr><td>grunnlag</td><td>Beskrivelse: det beløpet det er regnet utgående mva av.
Feltet skal ikke fylles ut for inngående mva. <br/>
Formål: Grunnlag for kontroll ifra Skatteetaten
	</td>
  </tr>
  <tr><td>sats</td><td>Beskrivelse: Den mva-satsen som er benyttet ved beregning av utgående mva.
Feltet skal ikke fylles ut for inngående mva. <br/>
	Formål: Å sikre at bare gyldige satser benyttes ved fakturering
	</td>
  </tr>
  <tr><td>merverdiavgift</td><td>Beskrivelse: fastsatt merverdiavgift <br/>
	Formål: å vise beregnet mva pr linje
      </td>
  </tr>  
  <tr><td>merknad</td><td>Beskrivelse: informasjon om innholdet i mvaKode <br/>
	Formål: å sikre at skattepliktig kan forklare egen rettsanvendelse der det er nødvendig
	</td>
  </tr>

</table>

## Feltbeskrivelse for MvaMeldingInnsending

### MvaMeldingInnsending

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr><td>meldingskategori</td>
    <td>
        Beskrivelse: type skjema som sendes inn <br/>
        Formål: å sikre at brukeren dekker sin plikt for egenfastsetting
	</td>
  </tr>
  <tr><td>innsendingstype</td>
    <td>
        Beskrivelse: En mva-melding av meldingskategori alminnelig og primær vil alltid være <strong>komplett</strong>. <br/>
        Formål: Feltet beholdes for på et senere tidspunkt kunne åpne for at revisor kommenterer/ skriver merknad på de mva-meldingene (f. eks. merverdiavgift kompensasjon) som skal godkjennes av revisor før innsending.
	</td>
  </tr>
  <tr><td>instansstatus</td>
    <td>
        Beskrivelse: Dette feltet kommer vi til å fjerne da vi får denne informasjonen fra hendelser på instansen. Dette skal gjøres ved at det settes til valgfritt i en overgang og fases ut ved en passende anledning.
	</td>
  </tr>
  <tr><td>opprettetAv</td>
    <td>
        Beskrivelse: Dette feltet skal inneholde navn på innlogget bruker. <br/>
        Formål: Innholdet i denne vises i Altinn.
	</td>
  </tr>
  <tr><td>opprettingstidspunkt</td>
    <td>
        Beskrivelse: Dette feltet kommer vi til å fjerne da vi får denne informasjonen fra instansen. 
        Dette skal gjøres ved at det settes til valgfritt i en overgang og fases ut ved en passende anledning.
	</td>
  </tr>
</table>
<br>

### Identifikator (Enten organisasjonsnummer eller foedselsnummer)

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr>
    <td>organisasjonsnummer</td>
    <td>
        Beskrivelse: unik identifikator for den skattepliktige som foretar egenfastsetting <br/>
        Formål: ivareta den skattepliktiges rettigheter og plikter
	</td>
  </tr>
  <tr><td>foedselsnummer</td>
    <td>
        Beskrivelse: unik identifikator for den skattepliktige som foretar egenfastsetting <br/>
        Formål: ivareta den skattepliktiges rettigheter og plikter
	</td>
  </tr>
</table>
<br>

### Skattleggingsperiode

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr>
    <td>periode</td>
    <td>
        Beskrivelse: den perioden egenfastsettingen gjelder for <br/>
		Periode angis i henhold til kodeverket for Skattleggingsperiode. SkattleggingsperiodeUke følger kalenderens ukenummerering, eksempelvis løper uke 1 i 2022 fra 3. til 9. januar. I SkattleggingsperiodeHalvmåndelig løper første halvdel fra 1. til 15. i måneden og andre halvdel løper fra 16. til siste i måneden. <br/>   
        Formål: sikre samsvar mellom bokføring og egenfastsetting
	</td>
  </tr>
  <tr><td>aar</td>
    <td>
        Beskrivelse: det året egenfastsettingen gjelder for <br/>
        Formål: sikre samsvar mellom bokføring og egenfastsetting
	</td>
  </tr>
</table>
<br>

### Vedlegg

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr>
    <td>vedleggstype</td>
    <td>
        Beskrivelse: Type vedlegg som blir lastet opp på instansen i Altinn. 
        Hvor en kan enten bruke <strong>mva-melding</strong> for selve mva-meldingen, 
        eller <strong>binaerVedlegg</strong> for generelle vedlegg. <br/>
	</td>
  </tr>
  <tr><td>kildegruppe</td>
    <td>
        Beskrivelse: Hvilken gruppe innsendingen kommer fra. 
        Valgmuligheter: <strong>etat</strong>, <strong>sluttbrukersystem</strong>, <strong>sluttbruker</strong> <br/>
	</td>
  </tr>
  <tr><td>opprettetAv</td>
    <td>
        Beskrivelse: Dette feltet skal inneholde navn på innlogget bruker  <br/>
        Formål: Innholdet i denne vises i Altinn
	</td>
  </tr>
  <tr><td>opprettingstidspunkt</td>
    <td>
        Beskrivelse: Dette feltet kommer vi til å fjerne da vi får denne informasjonen fra instansen. 
        Dette skal gjøres ved at det settes til valgfritt i en overgang og fases ut ved en passende anledning.
	</td>
  </tr>
</table>
<br/>

### Vedleggsfil

<table align="center">
  <tr><th style="width:25%" align="left">Felt</th><th align="left">Beskrivelse</th></tr>
  <tr>
    <td>filnavn</td>
    <td>
        Beskrivelse: navnet på filen som er lagt med som vedlegg <br/>
	</td>
  </tr>
  <tr><td>filekstensjon</td>
    <td>
        Beskrivelse: ekstensjonen til filen som er lagt med som vedlegg <br/>
	</td>
  </tr>
  <tr><td>filinnhold</td>
    <td>
        Beskrivelse: Gir en beskrivelse av innholdet i vedleggsfilen <br/>
	</td>
  </tr>
</table>

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



En oversikt over kodelistene finnes i [Oversikten over kodelister](https://github.com/Skatteetaten/mva-meldingen/blob/master/docs/informasjonsmodell_filer/kodelister/)

- Kodeliste for mva-kode: [mvaKodeSAFT](https://github.com/Skatteetaten/mva-meldingen/blob/master/docs/informasjonsmodell_filer/kodelister/mvaKodeSAFT.xml)
- Kodeliste for mva-spesifikasjon: [mvaSpesifikasjon](https://github.com/Skatteetaten/mva-meldingen/blob/master/docs/informasjonsmodell_filer/kodelister/mvaSpesifikasjon.xml)
- Kodeliste for sats: [sats](https://github.com/Skatteetaten/mva-meldingen/blob/master/docs/informasjonsmodell_filer/kodelister/sats.xml)
- Kodeliste for merknader: [merknad](https://github.com/Skatteetaten/mva-meldingen/blob/master/docs/informasjonsmodell_filer/kodelister/merknad.xml)
- Kodeliste for merknader og tilsvarende mva-kode: [merknadTilsvarendeMvaKode](https://github.com/Skatteetaten/mva-meldingen/blob/master/docs/informasjonsmodell_filer/kodelister/merknadTilsvarendeMvaKode.xml)

# XSD for innsending

Innsendingen til Altinn må inneholde en XML-fil med innsendingsinformasjon. Denne må være i henhold til strukturen i XSD for innsending.

[no.skatteetaten.fastsetting.avgift.mva.mvameldinginnsending.v1.0.xsd](https://github.com/Skatteetaten/mva-meldingen/blob/master/docs/informasjonsmodell_filer/xsd/no.skatteetaten.fastsetting.avgift.mva.mvameldinginnsending.v1.0.xsd)

</TabItem>

</Tabs>
