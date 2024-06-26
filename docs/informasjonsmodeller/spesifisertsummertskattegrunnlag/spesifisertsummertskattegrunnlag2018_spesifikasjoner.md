---
title: Spesifikasjonstyper for spesifisert summert skattegrunnlag 2018
slug: /spesifisertsummertskattegrunnlag2018_spesifikasjoner
folder: informasjonsmodeller/spesifisertsummertskattegrunnlag
sidebar: mydoc_sidebar
datatable: true
tags: [Skatteoppgjør, Informasjonsmodell]
keywords: [informasjonsmodell]
last_updated: Des 13, 2022
hide_table_of_contents: true
---
<Summary>Spesifikasjonstyper for spesifisert summert skattegrunnlag 2018.</Summary>

Oversikt over mulige spesifikasjonertyper i data fra [spesifisert summert skattegrunnlag](../../api/spesifisertsummertskattegrunnlag.md) for 2018.

## Om Spesifikasjoner

I 2018 kommer spesifikasjonene til spesifisert summert skattegrunnlag fra to forskjellige løyper: ordinær og pilot.  Dette pårvirker hvilke spesifikasjoner som er tilgjengelige, og hvordan disse er representert.

For ordinær løype vil spesifikasjonene tilsvare spesifikasjonene som ble delt ut for 2017.  
For pilot-løypen vil spesifikasjonene reflektere skatteobjektene som kan være brukt for de forskjellige summerte skattegrunnlagene.  Bruken av "Generisk" vil erstattes med en mer spesifikk spesifikasjonstype.  Pilot-løypen dekker kun et subsett av de skattepliktige, og ikke alle summerte skattegrunnlag vil være relevante.  Det deles følgelig heller ikke spesifikasjoner for disse.  For eksempel vil det ikke forekomme skattepliktige med annenArbeidsinntekt i piloten.
Hvis det er behov for å identifisere hvilken løype som er benyttet, kan konsumenten se etter bruken av "Generisk".  "Generisk" vil kun benyttes av ordinær løype.

For forhåndsfastsatte vil spesifikasjoner ikke deles ut.

## Mulige spesifikasjoner med tilhørende spesifikasjonstype 


| Summert skattegrunlag | Spesifikasjonstype ordinær løype | Spesifikasjonstype pilot-løype
|-----------------------|------|--------------------|
| samledeOpptjenteRenterInnenlandskeBanker| Generisk | Konto|
| samledePaaloepteRenter | Generisk | Konto, PrivatGjeldsforholdUtenforVirksomhet, SkyldigRestskatt|
| samletAvkastningAvKapitalforsikringsavtale | Generisk | NA |
| gjeldIUtlandet | Generisk | NA |
| samletInnenlandskGjeld | Generisk | Konto, PrivatGjeldsforholdUtenforVirksomhet, SkyldigRestskatt |
| samletInnskuddInnenlandskeBanker | Generisk | Konto|
| innskuddIUtlandet | Generisk | NA |
| samledeOpptjenteRenterIUtenlandskeBanker | Generisk | NA |
| annenArbeidsinntekt | Generisk | NA |
| annenPensjonFoerAlderspensjon | Generisk | NA |
| samletAnnenPensjonUtenTrekkplikt | Generisk | KollektivPensjonsordning|
| samletAnnenPensjonMedTrekkpliktEksklusiveEktefelletillegg | Generisk | KollektivPensjonsordning|
| samletAvtalefestetPensjon | Generisk | KollektivPensjonsordning |
| samletInntektSomGirRettTilSaerskiltFradragForSjoefolk | Generisk | NA |
| samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt | Generisk | LoennOgTilsvarendeYtelser |
| inntektFraLottEllerPartTilFiskerOgFangstmann | Generisk | NA |
| samletPensjonFraFolketrygden | Generisk | KollektivPensjonsordning|
| samletUnderskuddINaeringsvirksomhet | Generisk | NA |
| formuesverdiForPrimaerbolig | Eiendom | Eiendom|
| samletAndelAvFellesgjeldIBoligselskapEllerBoligsameie | Generisk | OekonomiskeForholdKnyttetTilBoligsameieEllerBoligselskap |
| samletFormuesverdiForAnnenFastEiendom | Eiendom | Eiendom|
| samletFormuesverdiForSekundaerbolig   | Eiendom | Eiendom|
| samletFormuesverdiForSelveidFritidseiendomEllerAndelIFritidsboligselskap | Eiendom | Eiendom|
| formuesverdiForKjoeretoey | Kjoeretoey | Kjoeretoey |
| formuesverdiForFritidsbaatMedSalgsverdiOverSalgsverdigrense | Generisk | FritidsbaatMedSalgsverdiOverSalgsverdigrense|
| verdiFoerVerdsettingsrabattForBilerMaskinerOgInventar | Generisk | NA|



 

