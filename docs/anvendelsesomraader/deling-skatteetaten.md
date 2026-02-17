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

### Innsyn i rettighetspakker

Skatteetaten har laget en selvbetjeningsløsning som gir virksomheter innsyn i egne rettighetspakker hos Skatteetaten: [Innsyn i rettighetspakker](https://rettighetspakke-innsyn.skatteetaten.no) 

For å få tilgang til løsningen må du ha Altinn 3 ressursen "Innsyn i rettighetspakker", ressursid: `ske-innsyn-rettighetspakke`

Tilgangen er i utgangspunktet tildelt de i virksomheten med begrenset signeringsrett, og kan delegeres videre til andre i virksomheten ved å følge [Altinns oppskrift]( https://info.altinn.no/hjelp/profil/enkelttjenester-og-roller/hvordan-gi-en-enkelttjeneste-og-rolle-til-andre/) 

Kort oppsummert gjøres det slik:
1. Person med begrenset signeringsrett logger inn i Altinn med BankID og velg virksomheten hen skal representere
2. Gå til "Profil" og velg "Andre med rettigheter til skjema og tjenester"
3. Velg "Legg til ny person eller virksomhet"
4. Skriv inn fødselsnummer og etternavn til den det skal delegeres til, og velg "Neste"
5. Velg "Gi tilgang til enkelttjeneste"
6. Søk opp "Innsyn i rettighetspakker" og velg "Legg til"
7. Velg "Gå videre", "Fullfør delegering", "Bekreft" og "Ferdig"
Delegeringen er nå utført. 

Den eller de i virksomheten som har fått delegert ressursen, kan nå logge inn med BankID, og få listet API-ene og rettighetspakkene fra Skatteetaten som virksomheten har tilgang til i Produksjon, med felter og kodelister.  

Dere kan pt. kun se de rettighetespakkene virksomheten har fått direkte tilgang til, men ikke de virksomheten har fått delegert fra andre. Vi vil se på en utvidelse for det etter hvert.

Innlogging i løsningen baserer seg på [Ansattporten fra Digdir](https://docs.digdir.no/docs/ansattporten/ansattporten_om.html).

## Delingsområder

Noen ganger skal API-ene våre brukes sammen, og de viktigste områdene, som ikke står listet under andre "Anvendelsesområder" står kort listet her.

### Samtykkebasert lånesøknad (SBL)

Skatteetaten deler opplysninger om inntekt og skatt med bankene ved lånesøknader.

Relevante API-er:
* [Inntekt API](../api/inntekt.md)
* [Summert skattegrunnlag API](../api/summertskattegrunnlag.md)
* [Siste tilgjengelige skatteoppgjør API](../api/sistetilgjengeligeskatteoppgjoer.md)

[Mer informasjon om SBL hos BITS](https://www.bits.no/dsop-sbl/)

[Mer informasjon om OSBL hos Skatteetaten](https://www.skatteetaten.no/presse/nyhetsrommet/enklere-a-soke-boliglan/)

### Obligatorisk tjenestepensjon (OTP)

Skatteetaten deler opplysninger om inntekt, og NAV deler opplysninger om arbeidsforhold, med pensjonsvirksomheter, slik at de kan regne ut riktig pensjonsgrunnlag.

Relevante API-er:
* [Inntekt API](../api/inntekt.md)
* [Inntektsmottakere API](../api/inntektsmottakere.md)
* [Tjenestepensjonsavtale API](../api/tjenestepensjonsavtale.md)

[Mer informasjon om OTP hos BITS](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjDsO32z7ePAxXoGxAIHcajDhoQFnoECB4QAQ&url=https%3A%2F%2Fdokumentasjon.dsop.no%2Fassets%2FIntroduksjon_til_Data_for_ajourhold_av_OTP_i_privat_sektor_V1.pdf&usg=AOvVaw2I3srqKufQmIfaRF8-IGLp&opi=89978449)

[Mer informasjon om OTP hos Skatteetaten](https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/otp---obligatorisk-tjenestepensjon/)
