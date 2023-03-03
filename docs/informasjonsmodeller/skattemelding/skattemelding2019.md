---
title: Informasjonsmodell skattemelding 2019
slug: /skattemelding2019
folder: informasjonsmodeller/skattemelding
sidebar: mydoc_sidebar
datatable: true
tags: [API reference]
keywords: [informasjonsmodell]
last_updated: Aug 13, 2019
hide_table_of_contents: true
---
<summary>Informasjonsmodell for skattemelding for 2019.</summary>

# Informasjonsmodell for skattemelding 2019

Oversikt over datamodellen som returneres fra Skattemelding API for inntektsår 2019.

Skattemeldingstjenesten returner skatteobjekt knyttet til utkast til skattemelding eller til fastsatt skattemelding.  

## Entiteter som returnes fra tjenesten

### Skattemelding utflatet
Dette er toppnivået til tjenesten, og inneholder informasjon om hvem det er søkt på, om informasjonen er skjermet, samt en liste med 
skatteobjekter.  De forskjellige typene skatteobjekt kan komme flere ganger, og i vilkårlig rekkefølge.  

| Navn på felt | Muliplisitet | Type | Begrep/Definisjon | Begrepsreferanse  |
| -------------|------|---------|-------------------|-------------------|
|personidentifikator | 1 |Fødselsnummer | identifikator for personlig skattesubjekt: fødselsnummer eller d-nummer | <https://data.skatteetaten.no/begrep/98da4325-dff2-11e7-a0fd-005056821322>|
|skjermet | 0..1 | Boolsk | Returnerer true dersom datasettet har blitt skjermet | |
|aksjeIAksjonaerregisteret | 0..M |AksjeIAksjonaerregisteret |  | |
|aksjeIkkeIAksjonaerregisteret | 0..M |AksjeIkkeIAksjonaerregisteret |  | |
|aksjesparekonto | 0..M |Aksjesparekonto |  | <https://data.skatteetaten.no/begreper/48c47290-eda9-11e8-a3eb-0050568351d2> |
|andelAvInntektFelleskostnaderFormueOgGjeldIBoligsameie| 0..M |AndelAvInntektFelleskostnaderFormueOgGjeldIBoligsameie |  | |
|andelAvInntektFelleskostnaderFormueOgGjeldIBoligselskap| 0..M |AndelAvInntektFelleskostnaderFormueOgGjeldIBoligselskap |  | |
|annenFormue| 0..M |AnnenFormue |  | |
|annenInntekt| 0..M |AnnenInntekt |  | |
|annetFinansprodukt| 0..M |AnnetFinansProdukt |  | |
|arbeidsoppholdUtenforHjemmet | 0..M | ArbeidsoppholdUtenforHjemmet | arbeidsopphold utenfor hjemmet: tidsrom en fysisk person har overnattet ett annet sted enn hjemme på grunn av arbeid | <https://data.skatteetaten.no/begrep/b574087c-d96a-11e6-8d9b-005056821322>|
|reiserIArbeidsforhold | 0..M |ReiserIArbeidsforhold  ||<https://data.skatteetaten.no/begreper/8ea2df4f-7662-11e6-a74e-7e18b36b3fd9>|
|boligsparingForUngdom| 0..M |BoligsparingForUngdom ||<https://data.skatteetaten.no/begreper/20b2e186-9fe1-11e5-a9f8-e4115b280940>|
|fastEiendom|0..M|FastEiendom||<https://data.skatteetaten.no/begreper/9c33fd0b-2964-11e6-b2bc-96405985e0fa>|
|fastEiendomSomUtleieobjekt|0..M|FastEiendomSomUtleieobjekt|||
|fastEiendomSomFormuesobjekt|0..M|FastEiendomSomFormuesobjekt||<https://data.skatteetaten.no/begreper/fast%20eiendom>|
|fagforeningskontingent| 0..M |Fagforeningskontingent||<http://data.skatteetaten.no/begrep/b5740898-d96a-11e6-8d9b-005056821322>|
|fondskonto| 0..M |Fondskonto |||
|foreldrefradrag| 0..M |Foreldrefradrag||<https://data.skatteetaten.no/begreper/367f2c94-a9e1-11e8-8514-005056821322>|
|forvaltningskostnader | 0..M|Forvaltningskostnader|||
|fritidsbåtMedSalgsverdiOverSalgsverdigrense| 0..M |FritidsbåtMedSalgsverdiOverSalgsverdigrense|fritidsbåt med salgsverdi over salgsverdigrense: fritidsbåt med en antatt salgsverdi medregnet motor og fast utstyr som overstiger en forskriftsbestemt salgsverdigrense ved utgangen av et inntektsår|<https://data.skatteetaten.no/begrep/b57408b7-d96a-11e6-8d9b-005056821322>|
|gaveOgArv| 0..M|GaveOgArv|||
|grunnlagForSkattefradragForPensjonsinntekt| 0..M|GrunnlagForSkattefradragForPensjonsinntekt|||
|individuellPensjonsordning|0..M|IndividuellPensjonsordning|: avtale inngått individuelt mellom kunde som har fylt 18 år og pensjonsinnretning om pensjonssparing basert på lovmessige krav som gir kunden rett til inntektsfradrag innenfor lovbestemt maksimalgrense for premie, innskudd og vederlag for forvaltning og administrasjon av avtalen|<https://data.skatteetaten.no/begrep/20b2e1c9-9fe1-11e5-a9f8-e4115b280940>|
|investeringIOppstartsselskap|0..M|InvesteringIOppstartsselskap|||
|kjoeretoey|0..M|Kjoeretoey|kjøretøy: innretning som er bestemt til å kjøre på bakken uten skinner|<https://data.skatteetaten.no/begreper/a0905c2b-dc5e-11e5-8127-d6d6eb145c82>|
|kontantbeloep|0..M|Kontantbeloep|kontantbeløp: pålydende verdi av pengebeholdning|<https://data.skatteetaten.no/begrep/1e333098-6837-11e6-a7ce-fac03dffe1d7>|
|konto|0..M|Konto|konto: Inneholder kontoer av forskjellig art. Dette er å anse som en pengemessig adresse og kan brukes til identifisering.|<https://data.skatteetaten.no/begrep/20b2e326-9fe1-11e5-a9f8-e4115b280940>|
|kostnaderForMerkjoeringForAaBringeOgHenteBarn|0..M|KostnaderForMerkjoeringForAaBringeOgHenteBarn|||
|livsforsikring|0..M|Livsforsikring|livsforsikring: forsikringsordning hvor selskapets forpliktelser er knyttet til den forsikredes liv eller helse|<https://data.skatteetaten.no/begrep/livsforsikring>|
|loennOgTilsvarendeYtelser|0..M|LoennOgTilsvarendeYtelser|lønn og tilsvarende ytelse: vederlag for arbeid, overskudd av utgiftsgodgjørelse som knytter seg til arbeid og erstatning for slike inntekter|<https://data.skatteetaten.no/begrep/cf247feb-dfe5-11e7-9101-005056821322>|
|minstefradragOgKostnader|0..M|MinstefradragOgKostnader|||
|mottattUnderholdsbidrag|0..M|MottattUnderholdsbidrag|||
|nettoLeieinntektEllerUnderskuddFraFastEiendomSomUtleieobjektOverfoertFraEktefelle|0..M|NettoLeieinntektEllerUnderskuddFraFastEiendomSomUtleieobjektOverfoertFraEktefelle|||
|personligeForhold|0..M|PersonligeForhold|||
|obligasjonOgSertifikat|0..M|ObligasjonOgSertifikat|||
|oppholdskostnaderVedPassOgStellAvBarn|0..M|OppholdskostnaderVedPassOgStellAvBarn|oppholdskostnader ved pass og stell av barn: summen for en bestemt skattleggingsperiode av en gitt skattepliktigs utgifter til tilsyn i barnets hjem, i barnepassers hjem, barnehage, i skolefritidsordning på barneskole, institusjon mv., for barn som gir rett til foreldrefradrag.|<https://data.skatteetaten.no/begrep/20b52ae7-9fe1-11e5-a9f8-e4115b280940>|
|pensjonsinntekt|0..M|Pensjonsinntekt||<https://data.skatteetaten.no/begreper/cf247ffa-dfe5-11e7-9101-005056821322>|
|pensjonspremierIArbeidsforhold|0..M|PensjonspremierIArbeidsforhold|pensjonspremier i arbeidsforhold: beløpsmessig summering av premier til godkjente pensjonsordninger i arbeidsforhold som en gitt skattepliktig har betalt i løpet av en gitt skattleggingsperiode|<https://data.skatteetaten.no/begrep/2b2920ad-e7e6-11e8-b7e4-005056821322>|
|privatFordringUtenforVirksomhet|0..M|PrivatFordringUtenforVirksomhet|private fordringer utenfor virksomhet: samlebegrep for en bestemt skattepliktig sine private fordringer utenfor virksomhet|<https://data.skatteetaten.no/begrep/cf248000-dfe5-11e7-9101-005056821322>|
|privatGjeldsforholdUtenforVirksomhet|0..M|PrivatGjeldsforholdUtenforVirksomhet|private lån: samlebegrep for private gjeldsforfold og utestående fordringer som en skattepliktig har|<https://data.skatteetaten.no/begrep/cf248002-dfe5-11e7-9101-005056821322>|
|realisasjonAvFastEiendom|0..M|RealisasjonAvFastEiendom|||
|skadeforsikring|0..M|Skadeforsikring||<https://data.skatteetaten.no/begreper/20b2e1e0-9fe1-11e5-a9f8-e4115b280940>|
|skattefriStoenadTilBarnetilsyn|0..M|SkattefriStoenadTilBarnetilsyn|skattefri stønad til barnetilsyn: skattefri stønad i skattleggingsperioden fra offentlig myndighet eller annen utbetaler, til en gitt enslig forelder som betaler for tilsyn av barn mens forelderen selv arbeider eller etablerer egen virksomhet|<https://data.skatteetaten.no/begrep/cf24800d-dfe5-11e7-9101-005056821322>|
|skattepliktigKundeutbytteUtenforVirksomhetPerUtbetaler|0..M|SkattepliktigKundeutbytteUtenforVirksomhetPerUtbetaler|skattepliktig kundeutbytte utenfor virksomhet per utbetaler: summen av skattepliktig kundeutbytte utenfor virksomhet som en gitt fysisk person eller organisasjon har mottatt i en gitt skatleggingsperiode fra en gitt utbetaler av skattepliktig kundeutbytte utenfor virksomhet |<https://data.skatteetaten.no/begrep/03c54f2e-1f09-11e9-9d36-005056821322>|
|skyldigRestskatt|0..M|SkyldigRestskatt||<http://data.skatteetaten.no/begrep/cf248012-dfe5-11e7-9101-005056821322>|
|saerfradragForEnsligForsoerger|0..M|SaerfradragForEnsligeForsoerger|||
|verdiForAnnetPrivatInnboOgLoesoere|0..M|VerdiForAnnetPrivatInnboOgLoesoere|||
|underholdsbidragBetaltSkyldigOgTilGode|0..M|UnderholdsbidragBetaltSkyldigOgTilGode|||
|verdipapirfond|0..M|Verdipapirfond|||
|virtuellValuta|0..M|VirtuellValuta|||

## Informasjonsmodell -skjema

### Toppnivå
![Toppnivå](../../../static/download/skattemelding/2019/SkattemeldingUtflatet.png)

### Arbeid, trygd og pensjon
![Arbeid, trygd og pensjon](../../../static/download/skattemelding/2019/ArbeidTrygdOgPensjon.png)

#### Reise i arbeidsforhold og arbeidsopphold
![Reise i arbeidsforhold og arbeidsopphold](../../../static/download/skattemelding/2019/ReiseIArbeidsforholdOgArbeidsopphold.png)

### Bank, lån og forsikring 
![Bank, lån og forsikring](../../../static/download/skattemelding/2019/BankLaanOgForsikring.png)

### Eiendeler og faste eiendommer
![Eiendler og faste eiendommer](../../../static/download/skattemelding/2019/EiendelerOgFasteEiendommer.png)


### Familie og helse
![Familie og helse](../../../static/download/skattemelding/2019/FamilieOgHelse.png)

### Finans 
![Finans](../../../static/download/skattemelding/2019/Finans.png)

### Gave og arv 
![Gave og arv](../../../static/download/skattemelding/2019/GaveOgArv.png)

### Personlige forhold 
![Personlige forhold](../../../static/download/skattemelding/2019/PersonligeForhold.png)


