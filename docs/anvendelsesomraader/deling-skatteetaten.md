---
title: Deling fra Skatteetaten
slug: /anvendelsesomraader/deling-skatteetaten
folder: anvendelsesomraader
sidebar: mydoc_sidebar
datatable: true
tags: [deling]
last_updated: Sep 1, 2025
hide_table_of_contents: true
---

## Deling fra Skatteetaten

Skatteetaten deler data om inntekt, skatt, avgift og eiendom til offentlige og private virksomheter. API-ene er listet på denne Github-siden under "API-er for deling".

Deling fra Folkeregisteret er dokumentert på [en egen Github-side](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/om-tjenestene/).

### Tilgang til API-er for deling

For å få tilgang til delings-API-ene må man ha et norsk organisasjonsnummer og Skatteetaten må gi virksomheten tilgang til API-et. Før du søker om tilgang til Skatteetatens delingstjenester, er det viktig å avklare om din virksomhet har behandlingsgrunnlag for de aktuelle opplysningene. Les mer om [hvordan du får tilgang til opplysninger fra Skatteetaten](https://www.skatteetaten.no/deling/).

Hvis du allerede har fått innvilget søknad om tilgang, finner du teknisk informasjon om påkobling på disse Github-sidene.

### Bruks- og delingsvilkår for deling

For utlevering av opplysninger fra Skatteetatens delingstjenester gjelder følgende vilkår:
* [Bruksvilkår for Skatteetatens delingstjenester](https://www.skatteetaten.no/deling/bruksvilkar-for-delingstjenester/)
* [Delingsvilkår for Skatteetatens delingstjenester](https://www.skatteetaten.no/deling/delingsvilkar/)

Informasjon om tjenestenivå, varsling, endringshåndtering, fast vedlikehold med mer ligger dokumentert på disse sidene.

## Delingsområder

Noen ganger skal API-ene våre brukes sammen, og de viktigste områdene, som ikke står listet under andre "Anvendelsesområder" står kort listet her.

### Samtykkebasert lånesøknad (SBL)

Skatteetaten deler opplysninger om inntekt og skatt med bankene ved lånesøknader.

Relevante API-er:
* [Inntekt API](../api/inntekt.md)
* [Summert skattegrunnlag API](../api/summertskattegrunnlag.md)
* [Siste tilgjengelige skatteoppgjør API](../api/sistetilgjengeligeskatteoppgjoer.md)

[Mer informasjon om SBL hos BITS](https://www.bits.no/dsop-sbl/).
[Mer informasjon om OSBL hos Skatteetaten](https://www.skatteetaten.no/presse/nyhetsrommet/enklere-a-soke-boliglan/))

### Obligatorisk tjenestepensjon (OTP)

Skatteetaten deler opplysninger om inntekt, og NAV deler opplysninger om arbeidsforhold, med pensjonsvirksomheter, slik at de kan regne ut riktig pensjonsgrunnlag.

Relevante API-er:
* [Inntekt API](../api/inntekt.md)
* [Inntektsmottakere API](../api/inntektsmottakere.md)
* [Tjenestepensjonsavtale API](../api/tjenestepensjonsavtale.md)

[Mer informasjon om OTP hos BITS](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjDsO32z7ePAxXoGxAIHcajDhoQFnoECB4QAQ&url=https%3A%2F%2Fdokumentasjon.dsop.no%2Fassets%2FIntroduksjon_til_Data_for_ajourhold_av_OTP_i_privat_sektor_V1.pdf&usg=AOvVaw2I3srqKufQmIfaRF8-IGLp&opi=89978449)
[Mer informasjon om OTP hos Skatteetaten](https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/otp---obligatorisk-tjenestepensjon/)

### Seriøsitet

Skatteetaten har et sett API-er som deler seriøsitetsopplysninger via Digdir gjennom rettighetspakken "Ebevis".
* [Arbeidsgiveravgift API](../api/arbeidsgiveravgift.md)
* [Mva meldingsopplysning API](../api/mva_meldingsopplysning.md)
* [Oppdrag utenlandske virksomheter API](../api/oppdragutenlandskevirksomheter.md)
* [Restanser API](../api/restanser.md)
