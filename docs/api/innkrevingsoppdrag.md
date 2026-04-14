---
title: Innkrevingsoppdrag API
slug: /api/innkrevingsoppdrag
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Innkreving, Innkrevingsoppdrag]
keywords: [innkrevingsoppdrag,innkreving]
last_updated: Oct 7, 2025
hide_table_of_contents: true
---

<Summary>Tjenesten dekker tjenester for å opprette, endre og avskrive innkrevingsoppdrag. I tillegg finnes tjenester for å avstemme hva som er oversendt til API-ene, se mottaksstatus og å hente eventuelle valideringsfeil.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For generell informasjon om tjenestene se egne sider om:

* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/oppdragsinnkreving-api) på SwaggerHub.

## Tilgang til API-et

### Scope
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:innkrevingsoppdrag`

### Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Innkrevingsoppdrag API - På vegne av`

### Skatteetaten må gi tilgang
For å kunne bruke dette API-et må Skatteetaten gi din virksomhet tilgang til en eller flere rettighetspakker. Ta kontakt med Skatteetaten for å få tilgang.

## Datafelter og informasjonselementer

### Felles felter fra alle oppdragsgivere

| Informasjonselement | Påkrevd | Funksjonell beskrivelse |
|---|---|---|
| Oppdragsgivers referanse | Ja | Dette er oppdragsgivers referanse til saken hvor pengekravet er fastsatt, eksempelvis et saksnummer. Denne referansen kan brukes når det skal utveksles informasjon mellom oppdragsgiver og innkrevingsmyndigheten om saken. I tillegg oppgir innkrevingsmyndigheten oppdragsgivers referanse når vi sender ut faktura, slik at skyldner vet hvilke sak fra oppdragsgiver det gjelder. Ved å finne opplysninger om oppdragsgivers referanse i faktura, kan skyldner oppgi denne referansen når vedkommende tar kontakt med oppdragsgiver om spørsmål knyttet til fastsettelsen av kravet. |
| Oppdragsgivers kravidentifikator | Nei | Dette er en unik id til pengekravet hos oppdragsgiver. Oppdragsgivers kravidentifikator brukes i avstemming av overførte krav fra oppdragsgiver til innkrevingsmyndigheten og er viktig for å sikre sporbarhet i regnskapet. Forskjellen mellom oppdragsgivers referanse og oppdragsgivers kravidentifikator er at oppdragsgivers referanse kan inneholde en sak med flere pengekrav, mens kravidentifikator er en unik id for hvert enkelt pengekrav. |
| Kravtype | Ja | Samlebetegnelse på kravene som skal kreves inn. Navnet på kravtypen bør kjennetegnes ved at kravene har de samme egenskapene både ved fastsettelsen og innkreving av kravene. Eksempel på navn på en kravtype er "tilbakekreving av feilutbetalt barnetrygd" eller "tvangsmulkt- rettighetshaverregisterloven". Innkrevingsmyndigheten må sammen med oppdragsgiver bli enige om navnet på kravtypen. Navnet på kravtypen oppgis av innkrevingsmyndigheten til skyldner, slik at det er viktig at skyldner ut fra navnet på kravtypen skjønner hvilket krav vi krever inn. |
| Skyldner | Ja | Den som er pliktig til å betale kravet, det kan enten være en virksomhet eller privatperson. Oppdragsgiver må oppgi organisasjonsnummeret til virksomheten eller fødsels- og personnummeret eller d-nummeret til privatpersonen. For virksomheter er det organisasjonsnummeret til hovedenheten, og ikke til underenheten som skal oppgis fordi det er hovedenheten som vanligvis har partsevne og som kan være part i en sak. |
| Fastsettelsesdato | Ja | Med fastsettelsesdato menes dato da pengekravet oppsto eller ble fastsatt av oppdragsgiver, eksempelvis vedtaksdato. Innkrevingsmyndigheten informerer skyldner om fastsettelsesdatoen i faktura slik at skyldner vet hvilket vedtak fra oppdragsgiver det gjelder, hvor pengekravet er fastsatt. Fastsettelsesdatoen er som hovedregel starttidspunktet for når foreldelsesfristen på pengekravet begynner å løpe. Innkrevingsmyndigheten vil som hovedregel ha 3 år på å få innkrevd pengekravet eller skaffe fristavbrudd på kravet før foreldelsesfristen utløper og pengekravet er foreldet. |
| Foreldelsesfristens utgangspunkt | Nei | Med dette menes datoen for når foreldelsesfristen på kravet starter å løpe. I mange tilfeller er denne datoen det samme som fastsettelsesdatoen/ datoen for vedtaket. Foreldelsesfristens utgangspunkt er starttidspunktet for når foreldelsesfristen på pengekravet begynner å løpe. For tilbakebetalingskrav fra NAV er foreldelsesfristens utgangspunktet ikke den samme som datoen for vedtaket. For tilbakebetalingskrav er foreldelsesfristens utgangspunkt samme dato som dato for første utbetaling av ytelsen/stønaden. Oppdragsgiver må sørge for å ikke overføre krav til innkrevingsmyndigheten som er foreldet. Innkrevingsmyndigheten vil som hovedregel ha 3 år fra kravet er ilagt til å få krevd inn pengekravet eller skaffe fristavbrudd på kravet før foreldelsesfristen utløper og pengekravet anses foreldet. |
| Hovedstol | Ja | Utestående beløp som innkrevingsmyndigheten skal kreve inn. Oppdragsgiver må oppgi hovedstol både i valuta og beløp. Valuta må oppgis i norske kroner. Beløpet må være større enn null. Påløpte renter og gebyrer inngår ikke i hovedstol. |

### Spesifikke felter fra NAV

| Informasjonselement | Påkrevd | Funksjonell beskrivelse |
|---|---|---|
| Rentebeløp | Nei | NAV kan fastsatte et rentebeløp/rentetillegg i vedtak om tilbakekreving som skal kreves inn av innkrevingsmyndigheten. NAV må oppgi rentebeløp både i valuta og beløp. Valuta må oppgis i norske kroner. Beløp må være større enn null. Innkrevingsmyndigheten krever inn rentebeløpet fra NAV sammen med kravet om tilbakebetaling av feilutbetalt ytelse. |
| Renter ilagt dato | Nei | Dette er en opplysning som er knyttet til rentebeløpet. NAV må oppgi dato for når rentebeløpet ble ilagt. Innkrevingsmyndigheten tar utgangspunkt i denne datoen for å beregne når rentebeløpet vil bli foreldet såfremt vi ikke sørger for fristavbrudd for å hindre at rentebeløpet foreldes. |
| Rentetype | Nei | Dette er en opplysning knyttet til rentebeløpet. NAV oppgir strafferente som rentetype. Med strafferente menes rentetillegg som ilegges av NAV ved tilbakekreving av feilutbetalinger. Rentetillegget utgjør 10 % av det beløpet som NAV krever tilbake. Rentetillegget er et beregnet beløp fra NAV som overføres til innkreving i lag med hovedstol. Innkrevingsmyndigheten trenger å vite at dette er et rentetillegg og ikke en del av hovedstol. |
| Tilleggsfrist etter foreldelsesloven | Nei | Brukes dersom tilbakebetalingskravet er eldre enn 3 år, men ikke foreldet. Menes dato da NAV som kreditor fikk nødvendig kunnskap om kravet eller skyldneren, slik at NAV fra denne dato får 1 års forlenget frist for å få tilbake pengene før kravet foreldes. Hvis oppdragsgiver har vært uvitende om fordringen eller hvem/hvor skyldneren er, vil det kunne være urimelig at kravet allerede skal være foreldet etter den alminnelige foreldelsesfrist på tre år, når oppdragsgiver får vite at han har et krav eller får vite hvem som er skyldner. Av den grunn er det ved manglende nødvendig kunnskap om kravet eller skyldneren gitt en tilleggsfrist etter foreldelsesloven § 10 nr. 1 på ett år fra den dag da oppdragsgiver fikk eller burde skaffet seg kunnskap om kravet og/eller skyldneren. Datoen da forholdet ble oppdaget av NAV oppgis som tilleggsfrist, slik at innkrevingsmyndigheten kan forsøke å skaffe fristavbrudd på kravet innen 1 års fristen utløper. |
| Tilbakekrevingsperiode | Ja | Dette er knyttet til feilutbetalte ytelser fra NAV og viser til perioden feilutbetalingen ble foretatt og som det kreves tilbakebetaling for. Her oppgis fra- og-med-dato og til-og-med-dato for feilutbetalingsperioden. Innkrevingsmyndigheten må vite hvilken periode feilutbetalingskravet gjelder, blant annet i dialog med skyldner eller dersom deler av tilbakebetalingskravet i tilbakekrevingsperioden må avskrives som foreldet. |
| Ytelse for avregning | Nei | NAV må oppgi total ytelse som er tilgjengelig for avregning, i beløp og valuta. Valuta må oppgis i norske kroner. Beløpet må være større enn null. Innkrevingsmyndigheten benytter avregning som et innkrevingstiltak. |

### Spesifikke felter fra Brønnøysundregistrene

#### For løpende tvangsmulkt

| Informasjonselement | Påkrevd | Funksjonell beskrivelse |
|---|---|---|
| Periode med tvangsmulkt | Ja | Tilleggsinformasjonen fra Brønnøysundregistrene er knyttet til beregningen av løpende tvangsmulkt. Periode: periode som angir tidsintervallet for fastsatt og påløpt tvangsmulkt. Fom: fra-og-med dato for periode med påløpt tvangsmulkt. Tom: til-og-med dato for periode med påløpt tvangsmulkt. Jo lengre tid tvangsmulkten løper, jo flere perioder med påløpt mulkt vil blir overført til innkreving som flere enkeltstående pengekrav. Innkrevingsmyndigheten må vite for hvilken periode løpende mulkt er beregnet, blant annet i dialog med skyldner. |
| Stoppdato for løpende mulkt | Nei | Dato da Brønnøysundregistrene vedtok å stanse beregningen av løpende mulkt. Innkrevingsmyndigheten må vite dersom beregningen av løpende mulkt er stanset, blant annet i dialog med skyldner og for å planlegge videre innkrevingstiltak, eksempelvis dersom vi skal innvilge en betalingsavtale som skal sikre fullt oppgjør av tvangsmulkten. |

## Datakatalog
API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Bruk av tjenesten" itemKey="itemKey-2">

Lenke til API-dokumentasjonen finnes i menyen til venstre. Under følger en beskrivelse av hvordan de ulike tjenestene brukes, og eventuelle hensyn som må tas.

## Innholdsfortegnelse

- [Opprett et innkrevingsoppdrag](#opprett-et-innkrevingsoppdrag)
- [Endre et innkrevingsoppdrag](#endre-et-innkrevingsoppdrag)
- [Avskriv et innkrevingsoppdrag](#avskriv-et-innkrevingsoppdrag)
- [Grensesnittavstemming av et innkrevingsoppdrag](#grensesnittavstemming-av-et-innkrevingsoppdrag)
- [Se kravoversikt](#se-kravoversikt)
- [Se kravdetaljer](#se-kravdetaljer)

## Opprett et innkrevingsoppdrag

Et innkrevingsoppdrag opprettes i Skatteetatens innkrevingssystemer ved et POST-kall til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag`. Før innkrevingsoppdraget blir reskontroført og Skatteetaten overtar ansvaret for innkrevingen gjøres det en validering. Valideringen skjer i to omganger; synkront og asynkront, beskrevet under.

### Synkron validering ved mottak

Tjenesten validerer `OpprettInnkrevingsoppdragRequest`-objektet som er meldingskroppen i POST-kallet. Denne valideringen sikrer at alle nødvendige felter er korrekt utfylt og at dataene stemmer overens med tjenestens API-spesifikasjon.

**Vellykket kall:**
- Returnerer kvittering med en 201-statuskode sammen med en kravidentifikator, som er Skatteetatens referanse til innkrevingsoppdraget
- Kravidentifikatoren bør oppdragsgiver ta vare på for sporbarhet, og for senere å kunne referere til kravet
- HTTP statuskode 201 bekrefter at Skatteetaten har mottatt innkrevingsoppdraget
- Skatteetaten har enda ikke tatt over ansvaret for innkrevingen - Se asynkron validering

**Valideringsfeil:**
- Returneres HTTP statuskode 422 samt informasjon om valideringsfeilen
- Oppdragsgiver må deretter korrigere innkrevingsoppdraget og sende det inn på nytt
- Merk: Etter korreksjon kan det oppstå ytterligere valideringsfeil fra påfølgende valideringsregler ettersom valideringsreglene utføres sekvensielt

### Asynkron validering

Etter vellykket synkron validering (HTTP statuskode 201), foretas en ekstra asynkron validering. Her gjøres det en mer funksjonell sjekk på at innholdet i innkrevingsoppdraget er mulig for Skatteetaten å kreve inn. Se [Hent mottaksbekreftelse](#hent-mottaksbekreftelse).

**Når mottaksstatus er RESKONTROFOERT:**
- Mottaket er vellykket
- Ansvaret for videre oppfølging (innkreving) ligger hos Skatteetaten

**Når mottaksstatus er VALIDERINGSFEIL:**
- Feilene må rettes av oppdragsgiver
- Oppdatert innkrevingsoppdrag må sendes inn på nytt
- Ansvaret for oppfølging ligger hos oppdragsgiver. Se [Hent valideringsfeil](#hent-valideringsfeil)

### Hent mottaksbekreftelse

1. Opprett nytt innkrevingsoppdrag med POST-kall til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag` (Se "Opprett et innkrevingsoppdrag" i SwaggerHub)
2. Kallet er vellykket og får en kvittering (201-statuskode) med en kravidentifikator
3. Etter noen sekunder kan mottaksstatus hentes ved å gjøre GET-kall med kravidentifikatoren til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/mottaksstatus` (se "Hent mottaksstatus for et innkrevingsoppdrag" i SwaggerHub)

**Mulige mottaksstatusverdier:**

| Mottaksstatus | Handling | Ansvar |
|---|---|---|
| MOTTATT_UNDER_BEHANDLING | Skatteetaten behandler det fortsatt | Skatteetaten |
| VALIDERINGSFEIL | Hent valideringsfeil ved GET-kall til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil`. Rett feilene og send oppdatert innkrevingsoppdrag inn på nytt med en ny `oppdragsgiversKravidentifikator` | Oppdragsgiver |
| RESKONTROFOERT | Mottaket er vellykket | Skatteetaten |

### Hent valideringsfeil

Eventuelle valideringsfeil fra den asynkrone valideringen ved opprettelse av et innkrevingsoppdrag kan hentes ut ved et GET-kall til endepunktet `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil`.

Dersom den asynkrone valideringen ikke har resultert i noen valideringsfeil, returneres en tom liste.

### Feilhåndtering

Tjenesten for opprettelse av nye krav sikrer unikhet på `oppdragsgiversKravidentifikator`. Dersom man følger anbefalinger for bruk av tjenestene våre og fyller ut dette feltet, kan man sende oppdraget på nytt hvis man av ulike grunner er usikker på om kravet faktisk har blitt opprettet hos Skatteetaten.

- Dersom kravet allerede finnes i vårt system, vil det returneres en HTTP 422-statuskode med en beskrivende feilmelding
- Hvis det ikke finnes, vil innkrevingsoppdraget bli opprettet og prosessert

Dette mønsteret for feilhåndtering kan kun benyttes om `oppdragsgiversKravidentifikator` er utfylt.

## Endre et innkrevingsoppdrag

Innkrevingsoppdrag kan endres ved et PUT-kall til følgende endepunkter:

- `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/hovedstol`
- `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/renter`
- `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/oppdragsgiversreferanse`

Endrings-tjenestene brukes til å gjøre korreksjoner på et innkrevingsoppdrag, f.eks. der skyldner har betalt deler av beløpet til oppdragsgiver og det er behov for å nedjustere hovedstolen.

**Viktig:** Et innkrevingsoppdrag kan ikke endres umiddelbart etter opprettelse; det kan først endres etter at Skatteetaten har reskontroført det. Ved normal drift vil dette skje tilnærmet øyeblikkelig.

### Synkron validering ved mottak

Tjenesten foretar en synkron validering av at det innkommende forespørsels-objektet for endring er iht. OpenAPI-spesifikasjonen.

**Vellykket kall:**
- Returnerer kvittering med en 200-statuskode sammen med en transaksjonsid som er Skatteetatens referanse til endringen
- Transaksjonsiden bør oppdragsgiver ta vare på for sporbarhet, og for senere å kunne referere til endringen
- HTTP 200-statuskode bekrefter at Skatteetaten har mottatt og tatt ansvaret for at endringen blir utført

**Valideringsfeil:**
- Returneres HTTP 422-statuskode med en beskrivende feilmelding

### Asynkron validering

Det gjøres per nå ingen asynkron validering på noen av endepunktene for endring.

Det gis per nå ingen mottaksstatus på endringer, f.eks. om en endring er reskontroført. Dersom det oppstår feil utover synkron validering, og oppdragsgiver må foreta seg noe, vil varsling skje manuelt. Automatisk varsling vil kunne etableres sammen med nye innkrevingsløsninger.

### Feilhåndtering

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved endring av et innkrevingsoppdrag, og er usikker på om kravet faktisk ble endret hos Skatteetaten, anbefales det å sende forespørselen på nytt. Den samme endringen kan sendes inn et vilkårlig antall ganger med samme resultat. Dersom en allerede eksisterende gyldig endring sendes inn på nytt, vil det fremdeles returneres en HTTP 200-statuskode.

## Avskriv et innkrevingsoppdrag

Innkrevingsoppdrag kan avskrives ved et POST-kall til endepunktet `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/avskriving`. Endepunktet benyttes når oppdragsgiver mener at kravet ikke lenger skal kreves inn, eksempelvis fordi oppdragsgiver har frafalt kravet.

**Viktig:** Et innkrevingsoppdrag kan ikke avskrives umiddelbart etter opprettelse; det kan først avskrives etter at Skatteetaten har reskontroført det. Ved normal drift vil dette skje tilnærmet øyeblikkelig.

### Synkron validering ved mottak

Tjenesten foretar en synkron validering av at det innkommende `AvskrivingRequest`-objektet er iht. OpenAPI-spesifikasjonen.

**Vellykket kall:**
- Returnerer kvittering med en 200-statuskode sammen med en transaksjonsid som er Skatteetatens referanse til avskrivingen
- Transaksjonsiden bør oppdragsgiver ta vare på for sporbarhet, og for senere å kunne referere til avskrivingen
- HTTP 200-statuskode bekrefter at Skatteetaten har mottatt og tatt ansvaret for at avskrivingen blir utført

**Valideringsfeil:**
- Returneres HTTP 422-statuskode med en beskrivende feilmelding

### Asynkron validering

Det gjøres per nå ingen asynkron validering ved avskriving.

Det gis per nå ingen mottaksstatus på avskrivinger, f.eks. om avskrivningen er reskontroført. Dersom det oppstår feil utover synkron validering, og oppdragsgiver må foreta seg noe, vil varsling skje manuelt. Automatisk varsling vil kunne etableres sammen med nye innkrevingsløsninger.

### Feilhåndtering

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved avskriving av innkrevingsoppdrag, og er usikker på om kravet faktisk ble avskrevet hos Skatteetaten, anbefales det å sende forespørselen på nytt. Et innkrevingsoppdrag som allerede er avskrevet, kan ikke avskrives på nytt. I slike tilfeller returneres en HTTP 409-statuskode med en feilmelding.

## Grensesnittavstemming av et innkrevingsoppdrag

Tjenesten gjør det mulig for oppdragsgiver å avstemme at krav, endringer på krav og avskrivinger er registrert korrekt i Skatteetatens kravmottak. Alle registrerte opplysninger om et krav som er sendt inn gjennom grensesnittet kan hentes ved et GET-kall til endepunktet `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/avstemming`.

Tjenesten returnerer for en gitt kravidentifikator:

- Skatteetatens kravidentifikator for oppdraget
- Oppdragsgivers kravidentifikator (dersom den ble oversendt i det opprinnelige innkrevingsoppdraget)
- De forespørslene som oppdragsgiver har sendt, i samme format som de ble sendt, med tidspunkt for mottak:
  - Det opprinnelige kravet
  - Eventuelle endringer på kravet, med transaksjonsid
  - Eventuell avskriving av kravet, med transaksjonsid

## Se kravoversikt

**Status:** Ikke i produksjon. Ikke klar til test

Tjenesten gir oppdragsgiver mulighet til å hente ut oversikt over alle krav for en gitt part ved å gjøre et POST-kall til endepunktet `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/kravoversikt`.

Oppdragsgiver må angi hvilken part som tjenesten skal gjøre oppslag på. Da må sendes med en `kravoversiktRequest` som inneholder `Identifikatortype`, `Verdi`, og `Landkode`.

Ved et vellykket kall for en gitt skyldner og oppdragsgiver, vil tjenesten returnere:

- Informasjon om kravtype
- OppdragsgiversKravidentifikator
- OppdragsgiversReferanse
- SkatteetatensKravidentifikator
- Sum gjenstående beløp per krav
- Sum gjenstående beløp totalt

## Se kravdetaljer

Tjenesten gir oppdragsgiver mulighet til å hente ut detaljer om et eksisterende krav ved å gjøre et GET-kall til endepunktet `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}`. Det finnes også et mock-endepunkt i test tilgjengelig på `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/mock` (Se "Kravdetaljer" i SwaggerHub).

Oppdragsgiver må angi hvilken type kravidentifikator som skal brukes:
- For krav mottatt gjennom det nye kravmottaket, kan Skatteetatens kravidentifikator benyttes
- For alle andre krav kan oppdragsgivers egen kravidentifikator brukes

Ved et vellykket kall for en gitt kravidentifikator vil tjenesten returnere:

- Kravgrunnlag med dato for når kravet var besluttet hos oppdragsgiver
- Informasjon om kravlinjene tilknyttet kravet:
  - Kravlinjens type (hovedstol eller renter)
  - Det opprinnelige beløpet for kravet
  - Det gjenstående beløpet for kravet

</TabItem>
<TabItem headerText="Anbefalinger for bruk" itemKey="itemKey-3">

## Varsling av skyldner før innkreving

Før kravet overføres til innkreving må oppdragsgiver sørge for at informasjon om kravet er sendt ut til skyldner. Oppdragsgiver må sørge for dette slik at vi unngår situasjoner hvor vi kan risikere at skyldner får faktura på betaling av kravet før vedkommende har fått informasjon om kravet.

## Etablering av datalager for dataoverførsel til Skatteetaten

For å sikre effektiv håndtering og etterlevelse av Reglement for økonomistyring i staten, anbefales det å etablere et datalager for alle data som overføres til Skatteetaten. Dette datalageret bør inkludere:

- Skatteetatens kravidentifikator, som mottas i retur ved opprettelse av et innkrevingsoppdrag hos SKE
- Mottaksstatus, i henhold til flyt for mottaksbekreftelse
- Kravgrunnlaget, eller en referanse til dette
- Transaksjonsid, som mottas i retur ved endringer
- Grensesnittavstemming

I henhold til Reglement for økonomistyring i staten, er det viktig at oppdragsgivere som sender innkrevingsoppdrag til Skatteetaten tar vare på kravidentifikatoren de mottar i retur. Denne identifikatoren, som er en del av transaksjonskontrollen, bidrar til å sikre sporbarheten til kravet. Ved å ta vare på kravidentifikatoren, kan oppdragsgiveren effektivt følge opp og verifisere statusen på det aktuelle kravet.

## Utfylling av feltet oppdragsgiversKravidentifikator

I tillegg vil vi anbefale å fylle ut feltet `oppdragsgiversKravidentifikator` i `OpprettInnkrevingsoppdragRequest`-objektet ved opprettelse av innkrevingsoppdrag med en unik identifikator. Dette muliggjør å følge mønsteret for feilhåndtering ved opprettelse av krav, ettersom løsningen sikrer unikhet på feltet `oppdragsgiversKravidentifikator`.

Dersom man ikke har en unik identifikator her, kan man for eksempel bruke en identifikator fra overføringstabellen sin.

## Feilhåndtering og resending av krav

Ved oversending av nye krav, endringer og avskrivinger, kan det oppstå feil. Anbefalingen for håndtering av disse feilene varierer avhengig av feilkoden som mottas:

### 5xx-feil (Serverfeil)

Disse feilene indikerer at det har oppstått et problem på serverens side. Det anbefales å forsøke å sende kravet på nytt, gjerne med en eksponentiell backoff-strategi.

### 4xx-feil (Klientfeil)

Disse feilene indikerer at det er et problem med forespørselen, for eksempel ugyldig data eller manglende autentisering. Det anbefales **ikke** å forsøke å sende kravet på nytt uten videre undersøkelser. Studer feilmeldingen for å forstå årsaken til feilen, og gjør nødvendige korrigeringer før et nytt forsøk.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-4">

## Opprett innkrevingsoppdrag

### Forespørsel – NAV

```json
{
  "kravtype": "TILBAKEKREVING_BARNETRYGD",
  "skyldner": {
    "identifikatortype": "PERSON",
    "identifikator": "12345678901"
  },
  "hovedstol": {
    "valuta": "NOK",
    "beloep": 15000
  },
  "oppdragsgiversReferanse": "SAK-2024-001234",
  "oppdragsgiversKravidentifikator": "KRAV-2024-001234",
  "fastsettelsesdato": "2024-03-15",
  "tilleggsinformasjon": {
    "tilbakekrevingsperiode": {
      "fraDato": "2023-01-01",
      "tilDato": "2023-12-31"
    },
    "ytelserForAvregning": {
      "valuta": "NOK",
      "beloep": 5000
    }
  }
}
```

### Forespørsel – NAV med rentebeløp

```json
{
  "kravtype": "TILBAKEKREVING_SYKEPENGER",
  "skyldner": {
    "identifikatortype": "PERSON",
    "identifikator": "12345678901"
  },
  "hovedstol": {
    "valuta": "NOK",
    "beloep": 50000
  },
  "renteBeloep": [
    {
      "valuta": "NOK",
      "beloep": 5000,
      "renterIlagtDato": "2024-01-10",
      "rentetype": "STRAFFERENTE"
    }
  ],
  "oppdragsgiversReferanse": "SAK-2024-005678",
  "oppdragsgiversKravidentifikator": "KRAV-2024-005678",
  "fastsettelsesdato": "2024-01-10",
  "tilleggsinformasjon": {
    "tilbakekrevingsperiode": {
      "fraDato": "2023-06-01",
      "tilDato": "2023-12-31"
    }
  }
}
```

### Forespørsel – Brønnøysundregistrene

```json
{
  "kravtype": "TVANGSMULKT_RETTIGHETSHAVERREGISTERLOVEN",
  "skyldner": {
    "identifikatortype": "ORGANISASJON",
    "identifikator": "987654321"
  },
  "hovedstol": {
    "valuta": "NOK",
    "beloep": 25000
  },
  "oppdragsgiversReferanse": "TVA-2024-000456",
  "oppdragsgiversKravidentifikator": "KRAV-2024-000456",
  "fastsettelsesdato": "2024-02-01",
  "tilleggsinformasjon": {
    "periode": {
      "fraDato": "2024-01-01",
      "tilDato": "2024-01-31"
    },
    "stoppdatoForLøpendeMulkt": "2024-01-31"
  }
}
```

### Respons (201 Created)

```json
{
  "kravidentifikator": "a3b4c5d6-e7f8-1234-abcd-ef1234567890"
}
```

---

## Hent mottaksstatus

### Respons (200 OK)

```json
{
  "kravidentifikator": "a3b4c5d6-e7f8-1234-abcd-ef1234567890",
  "oppdragsgiversKravidentifikator": "KRAV-2024-001234",
  "mottaksstatus": "RESKONTROFOERT",
  "statusOppdatert": "2024-03-15T10:30:00Z"
}
```

---

## Hent valideringsfeil

### Respons – ingen feil (200 OK)

```json
{
  "valideringsfeil": []
}
```

### Respons – med valideringsfeil (200 OK)

```json
{
  "valideringsfeil": [
    {
      "error": "ORGANISASJONSNUMMER_FINNES_IKKE",
      "message": "Organisasjon med organisasjonsnummer=987654321 finnes ikke."
    }
  ]
}
```

---

## Endre hovedstol

### Forespørsel

```json
{
  "hovedstol": {
    "valuta": "NOK",
    "beloep": 10000
  }
}
```

### Respons (200 OK)

```json
{
  "transaksjonsid": "791e5955-af86-42fe-b609-d4fc2754e35e"
}
```

---

## Endre rentebeløp

### Forespørsel

```json
{
  "renter": [
    {
      "valuta": "NOK",
      "beloep": 3000,
      "renterIlagtDato": "2024-01-10",
      "rentetype": "STRAFFERENTE"
    }
  ]
}
```

### Respons (200 OK)

```json
{
  "transaksjonsid": "891e5955-bf86-52fe-c609-e4fc2754e35f"
}
```

---

## Endre oppdragsgivers referanse

### Forespørsel

```json
{
  "nyOppdragsgiversReferanse": "SAK-2024-001234-REV1"
}
```

### Respons (200 OK)

```json
{
  "transaksjonsid": "991e5955-cf86-62fe-d609-f4fc2754e35g"
}
```

---

## Avskriv innkrevingsoppdrag

### Forespørsel – med Skatteetatens kravidentifikator

```json
{
  "kravidentifikatortype": "SKATTEETATENS_KRAVIDENTIFIKATOR",
  "kravidentifikator": "a3b4c5d6-e7f8-1234-abcd-ef1234567890"
}
```

### Forespørsel – med oppdragsgivers kravidentifikator

```json
{
  "kravidentifikatortype": "OPPDRAGSGIVERS_KRAVIDENTIFIKATOR",
  "kravidentifikator": "KRAV-2024-001234"
}
```

### Respons (200 OK)

```json
{
  "transaksjonsid": "791e5955-af86-42fe-b609-d4fc2754e35e"
}
```

---

## Grensesnittavstemming

### Respons (200 OK)

```json
{
  "kravidentifikator": "a3b4c5d6-e7f8-1234-abcd-ef1234567890",
  "oppdragsgiversKravidentifikator": "KRAV-2024-001234",
  "opprinneligInnkrevingsoppdrag": {
    "mottattInnkrevingsoppdrag": {
      "kravtype": "TILBAKEKREVING_BARNETRYGD",
      "skyldner": {
        "identifikatortype": "PERSON",
        "identifikator": "12345678901"
      },
      "hovedstol": {
        "valuta": "NOK",
        "beloep": 15000
      },
      "oppdragsgiversReferanse": "SAK-2024-001234",
      "oppdragsgiversKravidentifikator": "KRAV-2024-001234",
      "fastsettelsesdato": "2024-03-15",
      "tilleggsinformasjon": {
        "tilbakekrevingsperiode": {
          "fraDato": "2023-01-01",
          "tilDato": "2023-12-31"
        }
      }
    },
    "mottattTidspunkt": "2024-03-15T08:00:00Z"
  },
  "endringer": {
    "hovedstol": [
      {
        "mottattEndring": {
          "hovedstol": {
            "valuta": "NOK",
            "beloep": 10000
          }
        },
        "mottattTidspunkt": "2024-04-01T09:00:00Z",
        "transaksjonsid": "791e5955-af86-42fe-b609-d4fc2754e35e"
      }
    ],
    "renter": [],
    "oppdragsgiversReferanse": [],
    "periode": []
  }
}
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-5">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

## Oversikt

Feilresponsene fra API-et følger RFC 7807-formatet. Et eksempel på en valideringsfeil vises nedenfor:

```json
{
  "type": "tag:skatteetaten.no,2024:innkreving:innkrevingsoppdrag:ugyldig-fastsettelsesdato",
  "title": "Ugyldig fastsettelsesdato",
  "status": 422,
  "detail": "Ugyldig fastsettelsesdato=2024-04-20. Fastsettelsesdatoen kan ikke være i fremtiden",
  "instance": "/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag"
}
```

Kolonnen "Title i feilobjekt" viser verdien satt i title-feltet. "Siste del av type-felt i feilobjekt" viser hva som settes etter det siste kolonet i type-feltet. HTTP-statuskoden i status-feltet er oppført i kolonnen "Http-status". Disse tre verdiene er konstante og kan benyttes til å utvikle feilhåndteringslogikk. Feltet detail gir ytterligere detaljer om feilen og vil variere avhengig av feilens årsak.

## Felles valideringsregler

### Synkrone valideringsregler for opprett innkrevingsoppdrag

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status | Merknad |
|---|---|---|---|
| Kravtype eksisterer ikke | kravtype-eksisterer-ikke | 422 | Verifiserer at kravtypen ligger i Kodelistekatalogen (intern Skatteetaten-modul) |
| Kravtype er inaktiv | kravtype-er-inaktiv | 422 | Verifiserer at kravtypen er aktiv i Kodelistekatalogen |
| Beloep er ikke over 0 | beloep-er-ikke-over-0 | 422 | |
| Tom oppdragsgivers referanse | tom-oppdragsgivers-referanse | 422 | |
| Ugyldig oppdragsgivers referanse | ugyldig-oppdragsgivers-referanse | 422 | Må være mellom 1 og 40 tegn, og kun inneholde bokstaver (a-å, A-Å), tall og spesialtegnene - og / |
| Ugyldig oppdragsgivers kravidentifikator | ugyldig-oppdragsgivers-kravidentifikator | 422 | Dersom denne eksisterer: må være mellom 1 og 40 tegn, og kun inneholde bokstaver (a-å, A-Å), tall og spesialtegnene - og / |
| Oppdragsgivers kravidentifikator eksisterer allerede | oppdragsgivers-kravidentifikator-eksisterer-allerede | 422 | |
| Ugyldig fastsettelsesdato | ugyldig-fastsettelsesdato | 422 | Kan ikke være i fremtiden |
| Ugyldig foreldelsesfristens utgangspunkt | ugyldig-foreldelsesfristens-utgangspunkt | 422 | Må være tidligere enn fastsettelsesdato |
| Ugyldig tilleggsfrist etter foreldelsesloven | ugyldig-tilleggsfrist-etter-foreldelsesloven | 422 | Kan ikke være angitt når foreldelsesfristensUtgangspunkt er angitt |
| Tilleggsfrist etter foreldelsesloven eldre enn 10 måneder | tilleggsfrist-etter-foreldelsesloven-eldre-enn-10-maaneder | 422 | tilleggsfristEtterForeldelsesloven kan ikke være mer enn 10 måneder tilbake i tid |
| Ugyldig skyldners identifikator | ugyldig-skyldners-identifikator | 422 | Må være et gyldig personnummer dersom skyldneren er en person, og et gyldig organisasjonsnummer dersom skyldneren er en organisasjon |
| Ugyldig kravtype | ugyldig-kravtype | 422 | Kravtypen må tilhøre oppdragsgiveren |
| Rentebeloep er ikke over 0 | rentebeloep-er-ikke-over-0 | 422 | |
| Ugyldig renterilagtdata | ugyldig-renterilagtdato | 422 | Kan ikke være i fremtiden |
| Ugyldig tilleggsinformasjon | ugyldig-tilleggsinformasjon | 400 | Må være oppgitt om påkrevd for oppdragsgiver og være på rett format |

### Felles valideringsregler for andre endepunkter

Gjelder for endepunktene hent valideringsfeil og hent mottaksstatus.

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status | Merknad |
|---|---|---|---|
| Ugyldig kravidentifikator | ugyldig-kravidentifikator | 422 | Dersom kravidentifikatortype settes til SKATTEETATENS_KRAVIDENTIFIKATOR, valideres det at kravidentifikatoren er en gyldig UUID |
| Ugyldig oppdragsgivers kravidentifikator | ugyldig-oppdragsgivers-kravidentifikator | 422 | Dersom kravidentifikatortype settes til OPPDRAGSGIVERS_KRAVIDENTIFIKATOR, valideres det at kravidentifikatoren er mellom 1 og 40 tegn, og kun inneholder bokstaver (a-å, A-Å), tall og spesialtegnene - og / |
| Innkrevingsoppdrag eksisterer ikke | innkrevingsoppdrag-eksisterer-ikke | 404 | |

### Valideringsregler for endring av hovedstol

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status | Merknad |
|---|---|---|---|
| Hovedstol er ikke over 0 | hovedstol-er-ikke-over-0 | 422 | |
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 409 | Må være reskontroført for å kunne endres |
| Avskrevet innkrevingsoppdrag kan ikke endres | avskrevet-innkrevingsoppdrag-kan-ikke-endres | 409 | Et avskrevet innkrevingsoppdrag kan ikke endres |

### Valideringsregler for endring av renter

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status | Merknad |
|---|---|---|---|
| Rentebeloep er under 0 | rentebeloep-er-under-0 | 422 | |
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 409 | Må være reskontroført for å kunne endres |
| Avskrevet innkrevingsoppdrag kan ikke endres | avskrevet-innkrevingsoppdrag-kan-ikke-endres | 409 | Et avskrevet innkrevingsoppdrag kan ikke endres |

### Valideringsregler for ny oppdragsgivers referanse

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status | Merknad |
|---|---|---|---|
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 409 | Må være reskontroført for å kunne endres |
| Avskrevet innkrevingsoppdrag kan ikke endres | avskrevet-innkrevingsoppdrag-kan-ikke-endres | 409 | Et avskrevet innkrevingsoppdrag kan ikke endres |

### Valideringsregler for avskriving

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status | Merknad |
|---|---|---|---|
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 409 | Må være reskontroført for å kunne avskrives |
| Avskrevet innkrevingsoppdrag kan ikke avskrives | avskrevet-innkrevingsoppdrag-kan-ikke-avskrives | 409 | Et avskrevet innkrevingsoppdrag kan ikke avskrives på nytt |

### Valideringsregler for henting av grensesnittavstemming

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status |
|---|---|---|
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 404 |

## Spesifikke valideringsregler per oppdragsgiver

### Brønnøysundregistrene

#### Synkrone valideringsregler for opprett innkrevingsoppdrag

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status | Merknad |
|---|---|---|---|
| Kravtype gjelder kun for organisasjon | kravtype-gjelder-kun-for-organisasjon | 422 | |
| Ugyldig periode | ugyldig-periode | 422 | tom kan ikke være i fremtiden. fom kan ikke være etter tom |
| Ugyldig stoppdato for løpende mulkt | ugyldig-stoppdato-for-løpende-mulkt | 422 | stoppdatoForLøpendeMulkt kan ikke være i fremtiden |
| Foreldelsesfristens utgangspunkt eldre enn 2 år og 10 måneder | foreldelsesfristens-utgangspunkt-eldre-enn-2-aar-og-10-maaneder | 422 | |
| Rentebeloep er ikke tillatt for kravtype | rentebeloep-er-ikke-tillatt-for-kravtype | 422 | Rentebeloep er ikke tillatt for kravtype=TVANGSMULKT_RETTIGHETSHAVERREGISTERLOVEN |

#### Synkrone valideringsregler for endring av hovedstol, endring av renter og ny oppdragsgivers referanse

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status |
|---|---|---|
| Kravtypen kan ikke endres | kravtypen-kan-ikke-endres | 403 |

#### Synkrone valideringsregler for avskriving

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status |
|---|---|---|
| Kravtypen kan ikke avskrives | kravtypen-kan-ikke-avskrives | 403 |

#### Asynkrone valideringsregler for opprett innkrevingsoppdrag

| Regel | Eksempel på respons | Merknad |
|---|---|---|
| Organisasjonsnummer finnes ikke | `{"error": "ORGANISASJONSNUMMER_FINNES_IKKE", "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx finnes ikke. "}` | Kan komme tilleggsinformasjon om at virksomheten er slettet, eller slettet som følge av dublett med nytt organisasjonsnummer om denne informasjonen er tilgjengelig |
| Organisasjon er opphørt | `{"error": "ORGANISASJON_ER_OPPHOERT", "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx er opphørt. "}` | |
| Organisasjon er slettet | `{"error": "ORGANISASJON_ER_SLETTET", "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx er slettet"}` | Organisasjon er slettet på grunn av feil i enhetsregisteret |

### NAV

#### Synkrone valideringsregler for opprett innkrevingsoppdrag

| Title i feilobjekt | Siste del av type-felt i feilobjekt | Http-status | Kravtyper regelen gjelder for | Merknad |
|---|---|---|---|---|
| Kravtype gjelder kun for person | kravtype-gjelder-kun-for-person | 422 | Alle bortsett fra TILBAKEKREVING_OMSORGSPENGER og TILBAKEKREVING_LOENNSKOMPENSASJON | Alle kravtyper kan kun rettes mot personer, med unntak av TILBAKEKREVING_OMSORGSPENGER og TILBAKEKREVING_LOENNSKOMPENSASJON |
| Kravtype gjelder kun for organisasjon | kravtype-gjelder-kun-for-organisasjon | 422 | TILBAKEKREVING_LOENNSKOMPENSASJON | Det er kun kravtypen TILBAKEKREVING_LOENNSKOMPENSASJON som kun kan rettes mot organisasjoner |
| Tilleggsfrist etter foreldelsesloven eldre enn 11 måneder | tilleggsfrist-etter-foreldelsesloven-eldre-enn-11-maaneder | 422 | TILBAKEKREVING_FORSKUTTERTE_DAGPENGER | |
| Ytelser for avregning er ikke over 0 | ytelser-for-avregning-er-ikke-over-0 | 422 | Alle kravtyper | |
| Ugyldig tilbakekrevingsperiode | ugyldig-tilbakekrevingsperiode | 422 | Alle kravtyper | tom kan ikke være i fremtiden. fom kan ikke være etter tom |

#### Asynkrone valideringsregler for opprett innkrevingsoppdrag

| Regel | Eksempel på respons | Kravtyper regelen gjelder for | Merknad |
|---|---|---|---|
| Person eksisterer ikke | `{"error": "PERSON_EKSISTERER_IKKE", "message": "Person med fødselsnummer=xxxxxx eksisterer ikke"}` | Alle | |
| Person er død | `{"error": "PERSON_ER_DOED", "message": "Person med fødselsnummer=xxxxxx er død"}` | TILBAKEKREVING_FORSKUTTERTE_DAGPENGER | Det kan ikke rettes krav mot døde personer for kravtyper som er listet opp i kolonnen til venstre |
| Organisasjonsnummer finnes ikke | `{"error": "ORGANISASJONSNUMMER_FINNES_IKKE", "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx finnes ikke. "}` | Alle | Kan komme tilleggsinformasjon om at virksomheten er slettet, eller slettet som følge av dublett med nytt organisasjonsnummer om denne informasjonen er tilgjengelig |
| Organisasjon er opphørt | `{"error": "ORGANISASJON_ER_OPPHOERT", "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx er opphørt. "}` | Alle | |
| Person er slettet | `{"error": "PERSON_ER_SLETTET", "message": "Person med fødselsnummer=xxxxxx er slettet"}` | Alle | Person er slettet på grunn av feil i folkeregisteret |
| Organisasjon er slettet | `{"error": "ORGANISASJON_ER_SLETTET", "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx er slettet"}` | Alle | |

</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-6">

## Oversiktsdiagram

![Informasjonsmodell for Innkrevingsoppdrag API](/img/innkrevingsoppdrag-informasjonsmodell.svg)

---

## OpprettInnkrevingsoppdragRequest

Forespørsel om opprettelse av nytt innkrevingsoppdrag.

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| kravtype | enum | Ja | Kravtypen for innkrevingsoppdrag. Må være en av kravtypene oppdragsgiver har avtalt med innkrevingsmyndigheten. Se [liste over gyldige kravtyper](#gyldige-kravtyper). |
| skyldner | Skyldner | Ja | Hvem som skylder penger. |
| hovedstol | HovedstolBeloep | Ja | Utestående beløp som skal kreves inn. |
| renteBeloep | RenteBeloep[] | Nei | Renter påløpt hos oppdragsgiver for overføring til innkrevingsmyndighet. |
| oppdragsgiversReferanse | string | Ja | Referanse hos oppdragsgiver for innkrevingsoppdraget. Flere innkrevingsoppdrag kan ha samme oppdragsgiversReferanse. |
| oppdragsgiversKravidentifikator | string | Nei | Unik kravidentifikator hos oppdragsgiver. Opprettelse av flere krav med samme verdi vil feile. |
| fastsettelsesdato | date (YYYY-MM-DD) | Ja | Dato da kravet er fastsatt, eks. vedtaksdato. |
| foreldelsesfristensUtgangspunkt | date (YYYY-MM-DD) | Nei | Angis kun når den avviker fra fastsettelsesdato, og må da være tidligere i tid enn fastsettelsesdato. Skal ikke angis dersom tilleggsfristEtterForeldelsesloven er angitt. |
| tilleggsfristEtterForeldelsesloven | date (YYYY-MM-DD) | Nei | Angis dersom foreldelsesfristen skal utvides. Kan ikke være lengre tilbake i tid enn 10 måneder fra dagens dato. Hvis angitt skal foreldelsesfristensUtgangspunkt ikke angis. |
| tilleggsinformasjon | TilleggsinformasjonNav / TilleggsinformasjonBroennoeysundRegistrene | Nei | Tilleggsinformasjon spesifikt per oppdragsgiver. |

## Skyldner

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| identifikatortype | enum | Ja | `PERSON` eller `ORGANISASJON` |
| identifikator | string | Ja | Gyldig fødselsnummer/d-nummer (person) eller organisasjonsnummer (organisasjon). |

## HovedstolBeloep

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| valuta | enum | Ja | Kun `NOK` støttes. |
| beloep | integer | Ja | Heltall i hovedenhet (kroner, ikke ører). Må være større enn null. |

## RenteBeloep

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| valuta | enum | Ja | Kun `NOK` støttes. |
| beloep | integer | Ja | Heltall i hovedenhet (kroner, ikke ører). Må være større enn null. |
| renterIlagtDato | date (YYYY-MM-DD) | Nei | Dato rentene ble ilagt/fastsatt. Benyttes til vurdering av dekningsrekkefølge. |
| rentetype | enum | Ja | `STRAFFERENTE` |

## TilleggsinformasjonNav

Tilleggsinformasjon spesifikt for NAV.

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| tilbakekrevingsperiode | Tilbakekrevingsperiode | Ja | Perioden feilutbetalingen ble foretatt og som det kreves tilbakebetaling for. |
| ytelserForAvregning | YtelseForAvregningBeloep | Nei | Total ytelse tilgjengelig for avregning. Benyttes ved avregning som innkrevingstiltak. |

## Tilbakekrevingsperiode

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| fraDato | date (YYYY-MM-DD) | Ja | Fra og med dato for perioden. |
| tilDato | date (YYYY-MM-DD) | Ja | Til og med dato for perioden. |

## YtelseForAvregningBeloep

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| valuta | enum | Ja | Kun `NOK` støttes. |
| beloep | integer | Ja | Heltall i hovedenhet (kroner, ikke ører). Må være større enn null. |

## TilleggsinformasjonBroennoeysundRegistrene

Tilleggsinformasjon spesifikt for Brønnøysundregistrene.

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| periode | PeriodeMedTvangsmulkt | Ja | Periode som angir tidsintervallet for fastsatt og påløpt tvangsmulkt. |
| stoppdatoForLøpendeMulkt | date (YYYY-MM-DD) | Nei | Datoen løpende tvangsmulkt ble avsluttet. Kan ikke være i fremtiden. |

## PeriodeMedTvangsmulkt

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| fraDato | date (YYYY-MM-DD) | Ja | Fra og med dato for perioden med påløpt tvangsmulkt. |
| tilDato | date (YYYY-MM-DD) | Ja | Til og med dato for perioden med påløpt tvangsmulkt. |

## OpprettInnkrevingsoppdragResponse

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| kravidentifikator | string | Ja | Kravidentifikator innkrevingsoppdraget fikk hos Skatteetaten. Lagres for sporbarhet. |

## MottaksstatusResponse

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| kravidentifikator | string | Ja | Skatteetatens kravidentifikator til innkrevingsoppdraget. |
| oppdragsgiversKravidentifikator | string | Nei | Oppdragsgiverens kravidentifikator til innkrevingsoppdraget. |
| mottaksstatus | enum | Ja | `MOTTATT_IKKE_BEHANDLET`, `MOTTATT_UNDER_BEHANDLING`, `VALIDERINGSFEIL`, `RESKONTROFOERT`, `MIGRERT`, eller `SKAL_IKKE_RESKONTROFOERES` |
| statusOppdatert | date-time | Ja | Tidspunktet for når den nåværende mottaksstatusen ble oppdatert. |

## ValideringsfeilResponse

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| valideringsfeil | ValideringsfeilDTO[] | Ja | Liste over valideringsfeil. Tom liste dersom ingen feil finnes. |

## ValideringsfeilDTO

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| error | string | Ja | Feilkode for valideringsfeilen. |
| message | string | Ja | Utfyllende beskrivelse av valideringsfeilen. |

## NyHovedstolRequest

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| hovedstol | HovedstolBeloep | Ja | Ny hovedstol. Må være lavere enn gjeldende hovedstol. |

## EndreRentebeloepRequest

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| renter | RenteBeloep[] | Ja | Ny fasit for renter. De nye rentebeløpene erstatter alle eksisterende rentebeløp. |

## NyOppdragsgiversReferanseRequest

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| nyOppdragsgiversReferanse | string | Ja | Ny referanse hos oppdragsgiver. |

## MottakskvitteringEndring

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| transaksjonsid | string (UUID) | Ja | Skatteetatens unike referanse for endringen. |

## AvskrivingRequest

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| kravidentifikatortype | enum | Ja | `SKATTEETATENS_KRAVIDENTIFIKATOR` eller `OPPDRAGSGIVERS_KRAVIDENTIFIKATOR` |
| kravidentifikator | string | Ja | Kravidentifikatoren til innkrevingsoppdraget som skal avskrives. Må tilhøre et reskontroført innkrevingsoppdrag. |

## MottakskvitteringAvskriving

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| transaksjonsid | string (UUID) | Ja | Skatteetatens unike referanse for avskrivingen. |

## GrensesnittavstemmingResponse

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| kravidentifikator | string | Ja | Skatteetatens kravidentifikator for innkrevingsoppdraget. |
| oppdragsgiversKravidentifikator | string | Nei | Oppdragsgivers kravidentifikator for innkrevingsoppdraget. |
| opprinneligInnkrevingsoppdrag | MottattInnkrevingsoppdrag | Nei | Opprinnelig innsendt forespørsel om opprettelse av innkrevingsoppdrag. |
| endringer | MottatteEndringer | Ja | Eventuelle endringer av innkrevingsoppdraget. |
| avskriving | MottattAvskriving | Nei | Eventuell mottatt avskriving av innkrevingsoppdraget. |

## MottatteEndringer

| Felt | Type | Beskrivelse |
|---|---|---|
| hovedstol | MottattHovedstolEndring[] | Eventuelle endringer av hovedstol. |
| renter | MottattRentebeloepEndring[] | Eventuelle endringer av rentebeløp. |
| oppdragsgiversReferanse | MottattNyOppdragsgiversReferanse[] | Eventuelle endringer av oppdragsgivers referanse. |
| periode | MottattPeriodeEndring[] | Eventuelle endringer av periode (Brønnøysundregistrene). |

## Gyldige kravtyper

### NAV

| Kravtype |
|---|
| TILBAKEKREVING_ALDERSPENSJON |
| TILBAKEKREVING_ATTFOERINGSPENGER |
| TILBAKEKREVING_ATTFOERINGSYTELSER |
| TILBAKEKREVING_AVTALEFESTET_PENSJON |
| TILBAKEKREVING_AVTALEFESTET_PENSJON_PRIVATSEKTOR |
| TILBAKEKREVING_BARNETRYGD |
| TILBAKEKREVING_BARNEPENSJON |
| TILBAKEKREVING_ENGANGSSTOENAD_VED_FOEDSEL |
| TILBAKEKREVING_FORELDREPENGER |
| TILBAKEKREVING_FORSKUTTERTE_DAGPENGER |
| TILBAKEKREVING_GAMMEL_YRKESSKADEPENSJON |
| TILBAKEKREVING_GJENLEVENDE_PENSJON |
| TILBAKEKREVING_GJENLEVENDE_PENSJON_AVREGNING |
| TILBAKEKREVING_KOMPENSASJON_NAERING_OG_FRILANS |
| TILBAKEKREVING_KONTANTSTOETTE |
| TILBAKEKREVING_KRIGSPENSJON |
| TILBAKEKREVING_LOENNSKOMPENSASJON |
| TILBAKEKREVING_MOBILITETSFREMMENDE_STOENADER |
| TILBAKEKREVING_OMSTILLINGSSTOENAD |
| TILBAKEKREVING_OMSORGSPENGER |
| TILBAKEKREVING_OPPLAERINGSPENGER |
| TILBAKEKREVING_OVERGANGSSTOENAD |
| TILBAKEKREVING_PERMITTERINGSPENGER_KORONA |
| TILBAKEKREVING_PLEIEPENGER_BARN |
| TILBAKEKREVING_PLEIEPENGER_NAERSTAAENDE |
| TILBAKEKREVING_SPESIALUTBETALING |
| TILBAKEKREVING_SVANGERSKAPSPENGER |
| TILBAKEKREVING_SUPPLERENDE_STOENAD_ALDERSPENSJON |
| TILBAKEKREVING_SUPPLERENDE_STOENAD_UFOEREPENSJON |
| TILBAKEKREVING_STOENAD_TIL_BARNETILSYN |
| TILBAKEKREVING_SYKEPENGER |
| TILBAKEKREVING_TIDLIGERE_FAMILIEPLEIER_PENSJON |
| TILBAKEKREVING_TILLEGGSTOENADER |
| TILBAKEKREVING_UFOEREPENSJON |
| TILBAKEKREVING_UFOERETRYGD |
| TILBAKEKREVING_UFOERETRYGD_AVREGNING |
| TILBAKEKREVING_UFOERETRYGD_ETTEROPPGJOER |
| TILBAKEKREVING_UTDANNINGSSTOENAD |
| TILBAKEKREVING_ARBEIDSAVKLARINGSPENGER |
| TILBAKEKREVING_DAGPENGER |
| TILBAKEKREVING_TILLEGGSTOENAD |
| TILBAKEKREVING_TILTAKSPENGER |
| TILBAKEKREVING_OMSTILLINGSSTOENAD_ETTEROPPGJOER |
| TILBAKEKREVING_UNGDOMSPROGRAMYTELSEN |

### Brønnøysundregistrene

| Kravtype |
|---|
| TVANGSMULKT_RETTIGHETSHAVERREGISTERLOVEN |

### Andre oppdragsgivere

| Kravtype |
|---|
| EGENANDEL_FRITT_RETTSRAAD |
| EGENANDEL_FRI_SAKFOERSEL |
| RETTSGEBYR_UTLEGGSBEGJAERING |

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-7">

## Testmiljø

Tjenestene ligger i Skatteetatens testmiljø for ekstern testing på følgende URL:

```
https://api-test.sits.no/
```

Base URL for API-et er:

```
https://api-test.sits.no/api/innkreving/innkrevingsoppdrag/v1/
```

### Eksempel

Et POST-kall mot `https://api-test.sits.no/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag` med tilhørende token fra Maskinporten vil opprette et nytt innkrevingsoppdrag.

## Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten.

</TabItem>
</Tabs>
