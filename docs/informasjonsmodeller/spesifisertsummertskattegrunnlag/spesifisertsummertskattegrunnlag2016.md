---
title: Summerte skattegrunnlag og spesifikasjoner for 2016
slug: /spesifisertsummertskattegrunnlag2016
folder: informasjonsmodeller/spesifisertsummertskattegrunnlag
sidebar: mydoc_sidebar
datatable: true
tags: [Skattegrunnlag]
keywords: [informasjonsmodell]
last_updated: Des 13, 2022
hide_table_of_contents: true
---
<summary>Kategorisering og lovlige verdier for tekniskNavn tilgjengelig i spesifisert summert skattegrunnlag for 2016.</summary>

import { Table } from '@skatteetaten/frontend-components/Table';

Oversikt over mulige verdier i data fra [spesifisert summert skattegrunnlag](../../tjenester/spesifisertsummertskattegrunnlag.md) tjenesten for 2016.

## Kategorisering og lovlige verdier for tekniskNavn for 2016

<Table
  data={[
  {
    kategori: 'formue',
    tekniskNavn: 'formuesverdiForPrimaerbolig',
    spesifisert: 'X',
  },
  {
    kategori: 'formue',
    tekniskNavn: 'formuesverdiForVerdipapirerIkkeRegistrertIVerdipapirsentralen',
  },
  {
    kategori: 'inntekt',
    tekniskNavn: 'samletPersoninntektFraEnkeltpersonforetakInnenJordbrukReindriftSkiferproduksjonOgAnnenNaering',
  }
]}
  columns={[
  {
    name: 'Kategori',
    fieldName: 'kategori',
  },
  {
    name: 'tekniskNavn',
    fieldName: 'tekniskNavn',
  },
  {
    name: 'Spesifisert',
    fieldName: 'spesifisert',
  },
]}
  caption="Personer med tilgang"
/>

| Kategori | tekniskNavn | Spesifisert |
|----------|----------------------------------------------|-------------|
| formue | formuesverdiForPrimaerbolig |x|
| formue | formuesverdiForVerdipapirerIkkeRegistrertIVerdipapirsentralen ||
| formue | formuesverdiForVerdipapirerRegistrertIVerdipapirsentralen ||
| formue | formuesverdiForVerdipapirfondsandelerIObligasjonsfond |x|
| formue | samletFormuesverdiAvUtestaaendeFordring ||
| formue | samletFormuesverdiForAndelAnnenFormueIBoligselskapEllerBoligsameie || 
| formue | samletFormuesverdiForAnnenFastEiendom |x|
| formue | samletFormuesverdiForAnnenFormue ||
| formue | samletFormuesverdiForAnnenSkattepliktigFormueIUtlandet ||
| formue | samletFormuesverdiForBilerMaskinerOgInventar |x| 
| formue | samletFormuesverdiForBuskap || 
| formue | samletFormuesverdiForCampingvogn |x|
| formue | samletFormuesverdiForFastEiendomIUtlandet ||
| formue | samletFormuesverdiForFritidbaatMedSalgsverdiOverSalgsverdigrense |x|
| formue | samletFormuesverdiForInnboLoesoereOgFritidsbaatUnderSalgsverdigrense || 
| formue | samletFormuesverdiForMotorkjoeretoey |x| 
| formue | samletFormuesverdiForSekundaerbolig |x| 
| formue | samletFormuesverdiForSelveidFritidseiendomEllerAndelIFritidsboligselskap |x| 
| formue | samletFormuesverdiForSkipFiskeOgFangstfartoey || 
| formue | samletFormuesverdiForSkogseiendom | |
| formue | samletFormuesverdiForVarelager | |
| formue | samletFormuesverdiForVerdipapirfondsandelIAksjefond |x|
| formue | samletGjenkjoepsverdiForLivsforsikring | |
| formue | samletInnskuddIInnenlandskeBanker | x|
| formue | samletInnskuddIUtenlandskeBanker | x|
| formue | samletKontantbeloep | |
| formue | samletPremiefond | |
| formue | samletSkattefriDelAvFormue || 
| formuesfradrag | samletAndelAvFellesgjeldIBoligselskapEllerBoligsameie |x|
| formuesfradrag | samletGjeldIUtlandet | x|
| formuesfradrag | samletInnenlandskGjeld |x|
| inntekt | dagpengerForNaeringsdrivendeOgFisker || 
| inntekt | samledeOpptjenteRenterIInnenlandskeBanker |x| 
| inntekt | samletAlderspensjonFraFolketrygden |x| 
| inntekt | samletAndelAvInntektIBoligselskapEllerBoligsameie || 
| inntekt | samletAnnenInntekt | x|
| inntekt | samletAnnenPensjonFoerAlderspensjon |x|
| inntekt | samletAnnenPensjonMedTrekkfritak |x| 
| inntekt | samletAnnenRenteinntekt | |
| inntekt | samletAnnenTrekkpliktigPensjon |x|
| inntekt | samletAvkastningAvKapitalforsikringsavtale |x| 
| inntekt | samletAvtalefestetPensjon |x| 
| inntekt | samletBarnepensjonOgLivrente ||
| inntekt | samletBarnepensjonOgLivrenteTilBarnUnderSyttenAar ||
| inntekt | samletInntektFraSkattepliktigUtbytteForVerdipapirfondsandel || 
| inntekt | samletInntektSomGirRettTilSaerskiltFradragForSjoefolk |x|
| inntekt | samletLoennsinntekt |x| 
| inntekt | samletLoennsinntektKunMedTrygdeavgiftsplikt || 
| inntekt | samletLoennsinntektTilBarnUnderTrettenAar | |
| inntekt | samletLoennsinntektPaaSvalbardOver12G|  |
| inntekt | samletLottinntekt |x|
| inntekt | samletOpptjenteRenterIUtlandskeBanker ||
| inntekt | samletOvergangsstoenadTilEnsligOgEtterlatt || 
| inntekt | samletOverskuddAvDeltakerlignetSelskapInnenAnnenNaering || 
| inntekt | samletOverskuddAvDeltakerlignetSelskapInnenFiskeEllerFamiliebarnehage ||
| inntekt | samletOverskuddAvEnkeltpersonforetakInnenAnnenNaering | |
| inntekt | samletOverskuddAvEnkeltpersonforetakInnenFamiliebarnehageEllerDagmammaIEgetHjem || 
| inntekt | samletOverskuddAvEnkeltpersonforetakInnenFiskeOgFangst | |
| inntekt | samletOverskuddAvEnkeltpersonforetakInnenJordbrukGartneriOgPelsdyr | |
| inntekt | samletOverskuddAvEnkeltpersonforetakInnenReindrift | |
| inntekt | samletOverskuddAvEnkeltpersonforetakInnenSkiferproduksjon || 
| inntekt | samletOverskuddPaaUtgiftsgodtgjoerelse | |
| inntekt | samletPensjonFraEOeSStatSomTilsvarerNorskAlderspensjonEllerAvtalefestetPensjon || 
| inntekt | samletPersoninntektFraDeltakerlignetSelskapInnenAnnenNaering | |
| inntekt | samletPersoninntektFraDeltakerlignetSelskapInnenFiskeEllerFamiliebarnehage || 
| inntekt | samletPersoninntektFraEnkeltpersonforetakInnenFamiliebarnehageEllerDagmammaIEgetHjem ||
| inntekt | samletPersoninntektFraEnkeltpersonforetakInnenFiskeOgFangst | |
| inntekt | samletPersoninntektFraEnkeltpersonforetakInnenJordbrukReindriftSkiferproduksjonOgAnnenNaering ||
| inntekt | samletRenteinntektPaaLaanTilSelskapSomSkalEkstrabeskattes | |
| inntekt | samletSkattefriPensjonFraUtlandet | |
| inntekt | samletSkattepliktigAksjegevinstEllerGevinstVedRealisasjonAvObligasjonEllerVerdipapirfondsandel ||
| inntekt | samletSkattepliktigGevinstVedSalgAvAndelerIKNANSNOKUS ||
| inntekt | samletSkattepliktigGevinstVedSalgAvFastEiendomMv | |
| inntekt | samletSkattepliktigOverskuddAvUtleieAvFritidseiendom || 
| inntekt | samletSkattepliktigOverskuddFraUtleieAvFastEiendom | |
| inntekt | samletSkattepliktigOverskuddFraUtleieAvFastEiendomIUtlandet ||
| inntekt | samletSkattepliktigUtbyttePaaAksjerIkkeRegistrertIVerdipapirsentralen || 
| inntekt | samletSkattepliktigUtbyttePaaAksjerRegistrertIVerdipapirsentralen | |
| inntekt | samletSkjermingsfradrag | |
| inntekt | samletSupplerendeStoenad ||
| inntekt | samletTilleggsinntektForDeltakerlignetSelskapInnenAnnenNaering | |
| inntekt | samletTilleggsinntektForDeltakerlignetSelskapInnenFiskeEllerFamiliebarnehage | |
| inntekt | samletTrekkpliktigLoennsinntektUtenTrydgeavgiftsplikt | |
| inntekt | samletTrekkpliktigUtgiftsgodtgjoerelse | |
| inntekt | samletUfoeretrygdFoerAlderspensjon | |
| inntekt | samletUfoeretrygdFraFolketrygden | |
| inntekt | samletUfoereytelseFraAndreEnnFolketrygden || 
| inntekt | skattepliktigUnderholdsbidragUfoererenterOgLivrenter | |
| inntektsfradrag | andreFradragsberettigedeKostnader ||
| inntektsfradrag | fradragsberettigedeFoederaadsytelserOgUnderholdsbidragTilAnnenPerson || 
| inntektsfradrag | saerfradragForEnsligForsoerger | |
| inntektsfradrag | saerskiltFradragForFiskeOgFangst ||
| inntektsfradrag | samletAndelAvFradragsberettigetFelleskostnadForBoligselskapEllerBoligsameie ||
| inntektsfradrag | samletFradragsberettigetKostnadTilknyttetArbeidMv ||
| inntektsfradrag | samletFradragsberettigetReisekostnadMellomArbeidOgHjem ||
| inntektsfradrag | samletFradragsberettigetReisekostnadMellomPendlerboligOgHjem ||
| inntektsfradrag | samletFradragsberettigetUnderskuddVedUtleieAvFastEiendom | |
| inntektsfradrag | samletFremfoerbartUnderskuddFraTidligereAar | |
| inntektsfradrag | samletKostadTilBompengerFergeOgTunnel | |
| inntektsfradrag | samletMerkostnadVedArbeidsoppholdUtenforHjem ||
| inntektsfradrag | samletPensjonsinnbetalingTilIndividuellPensjonsordning ||
| inntektsfradrag | samletPremieTilPensjonsordningIArbeidsforhold | |
| inntektsfradrag | samletPremieTilTilleggstrygdForNaeringsdrivende ||
| inntektsfradrag | samletSaerfradragForUfoerhetIhtOvergangsregel | |
| inntektsfradrag | samletSaerskiltFradragForJordbrukReindriftOgSkiferproduksjon ||
| inntektsfradrag | samletSaerskiltFradragForSjoefolk | |
| inntektsfradrag | samletTapVedSalgAvAksjer | |
| inntektsfradrag | samletTapVedSalgAvFastEiendom | |
| inntektsfradrag | samletUnderskuddINaeringsvirksomhet | |
| inntektsfradrag | totalePaaloepteRenter |x|
| inntektsfradrag | totalePaaloepteRenterIUtlandet |x|
| inntektsfradrag | utgifterTilPassOgStellAvHjemmevaerendeBarn || 
