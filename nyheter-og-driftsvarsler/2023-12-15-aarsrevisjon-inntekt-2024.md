---
title:  "Årsrevisjon – Endring i Inntekt API fra 2024"
tags: [nyhet, inntekt]
date: 2023-12-15T09:30:00
---

Som følge av endring i innrapportering fra NAV til A-ordningen fra 2024 vil det tilkomme flere nye inntektsbeskrivelser i Inntekt API fra 2024.

NAV innrapporterer fra nyttår mer detaljert for flere ytelser. Blant annet skilles feriepenger ut i egne inntektsbeskrivelser for disse ytelsene, og det blir egen innrapportering for flere ytelser som tidligere har blitt innrapportert samlet som sykepenger. 

Eksisterende felter videreføres fratrukken den delen av innholdet som er utskilt i egne felt. Vi legger derfor til grunn at rettighetspakker som allerede inneholder eksisterende felt utvides med nye felter i henhold til tabellene nedenfor.

Frist for innrapportering for januar er 5. februar, og nye inntektsbeskrivelser vil da være tilgjengelig.

### Ytelser fra offentlige

Feriepenger på ytelser skal innrapporteres på egne inntektsbeskrivelser. Sykepenger splittes og innrapporteres hver for seg i egne inntektsbeskrivelser.

| Ny YtelseFraOffentligeBeskrivelse |	Har inngått i |	SBL |	OTP |
| --- | --- | --- | --- |
| ferietilleggDagpengerTilFiskerSomBareHarHyre | dagpengerTilFiskerSomBareHarHyre	| x	| |
| ferietilleggDagpengerVedArbeidsloeshet | dagpengerVedArbeidsloeshet	| x	| |
| feriepengerForeldrepenger | foreldrepenger | x | |
| omstillingsstoenad | overgangsstoenadTilGjenlevendeEktefelle (pensjonEllerTrygd) | x | |
| feriepengerSvangerskapspenger | svangerskapspenger | x | x |
| pleiepenger	| sykepenger | x | x |
| feriepengerOpplaeringspenger | sykepenger |	x	| x |
| opplaeringspenger | sykepenger | x | x |
| omsorgspenger | sykepenger | x | x |
| feriepengerSykepenger | sykepenger | x | x |
| feriepengerPleiepenger | sykepenger | x | x |
| feriepengerOmsorgspenger | sykepenger | x | x |
| feriepengerSykepengerTilFiskerSomBareHarHyre | sykepengerTilFiskerSomBareHarHyre | x | x |

### Pensjon eller trygd

Barnepensjons skattlegges fra 2024 som kapitalinntekt, og innrapporteres heretter på nye inntektsbeskrivelser. Etterbetaling av barnepensjon innrapporteres på eksisterende inntektsbeskrivelser.

| Ny PensjonEllerTrygdBeskrivelse | Har inngått i | SBL | OTP |
| --- | --- | --- | --- |
| barnepensjonFra2024 | barnepensjon | x | |
| barnepensjonFraAndreEnnFolketrygdenFra2024 | barnepensjonFraAndreEnnFolketrygden | x | |
| ipaEllerIpsBarnepensjonFra2024 | ipaEllerIpsBarnepensjon | x | |

### Næring

Sykepenger splittes og innrapporteres hver for seg i egne inntektsbeskrivelser.

| Nye Naeringsinntektbeskrivelse | Har inngått i | SBL | OTP |
| --- | --- | --- | --- |
| foreldrepenger | sykepenger | x | |
| svangerskapspenger | sykepenger | x | |
| pleiepenger | sykepenger | x | |
| opplaeringspenger | sykepenger | x | |
| omsorgspenger | sykepenger | x | |
| foreldrepengerTilDagmamma | sykepengerTilDagmamma | x | |
| svangerskapspengerTilDagmamma | sykepengerTilDagmamma | x | |
| pleiepengerTilDagmamma | sykepengerTilDagmamma | x | |
| opplaeringspengerTilDagmamma | sykepengerTilDagmamma | x	| |
| omsorgspengerTilDagmamma | sykepengerTilDagmamma | x | |
| foreldrepengerTilFisker | sykepengerTilFisker | x | |
| svangerskapspengerTilFisker | sykepengerTilFisker | x | | 
| pleiepengerTilFisker | sykepengerTilFisker | x | |
| opplaeringspengerTilFisker | sykepengerTilFisker | x | |
| omsorgspengerTilFisker | sykepengerTilFisker | x | |
| foreldrepengerTilJordOgSkogbrukere | sykepengerTilJordOgSkogbrukere | x | |
| svangerskapspengerTilJordOgSkogbrukere | sykepengerTilJordOgSkogbrukere | x | |
| pleiepengerTilJordOgSkogbrukere | sykepengerTilJordOgSkogbrukere | x | |
| opplaeringspengerTilJordOgSkogbrukere | sykepengerTilJordOgSkogbrukere | x | |
| omsorgspengerTilJordOgSkogbrukere | sykepengerTilJordOgSkogbrukere | x | |

Skatteetaten tar direkte kontakt med øvrige virksomheter som er berørt for detaljert oversikt over endring i rettighetspakker.
