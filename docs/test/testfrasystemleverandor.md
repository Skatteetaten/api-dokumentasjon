---
title: Test fra systemleverandør
slug: /test/testfrasystemleverandor
folder: test
sidebar: mydoc_sidebar
datatable: true
tags: [Test, Delegering]
keywords: [Test, Delegering]
last_updated: Mar 14, 2023
hide_table_of_contents: true
---
<Summary>Test fra systemleverandør krever delegering i Test.</Summary>

## Maskinporten

Maskinporten skal også benyttes under test fra systemleverandør, og krever test-sertifikat. For test av Skatteetatens og Folkeregisterets delingstjenester anbefales at testsertifikat utstedes på virksomhetens ekte organisajonsnummer.

Se egen dokumentasjon om [bruk av Maskinporten](../om/sikkerhet.md).

Dersom det i stedet benyttes syntetisk organisasjonsnummer i test-sertifikatet, vær klar over at tilrettelegging for test kan ta noe lengre tid.

## Delegering i Test

Systemleverandører som har behov for å teste å hente data fra Skatteetaten via en eller flere delingstjenester, på vegne av et sett med kunder, må få få delegert rettigheter i Altinns testmiljø TT02, på samme måte som de vil få delegert rettigheter i Produksjon.

Digdir har en nærmere beskrivelse av hvordan delegere, se [Digdir sin side om delegering via Altinn autorisasjon](https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-via-altinn-autorisasjon)

## Innlesing i Altinns testmiljø TT02

Virksomheter eller semgentansvarlige sørger selv for at det er mulig å teste med delegering. 

For å delegere i test trengs følgende:
1. Virksomheten med rettigheter til tjenesten som skal testes må være tilgjengelig i TT02.
2. Virksomheten må ha knyttet til seg en syntetisk person som det er mulig å logge inn i TT02 med.
3. Systemleverandøren som skal få delegert rettigheter for test må være tilgjengelig i TT02.
4. Virksomheten med rettigheter må så delegere rettigheter til systemleverandøren i TT02.

Altinns testmiljø TT02 er et testmiljø med hovedsaklig syntetiske testdata, og innlesing av ekte virksomheter gjøres kun ved behov. Vær oppmerksom på at det da leses inn produksjonsdata om virksomheten i et testmiljø.

Det er Digdir som leser inn ekte organisasjonsnumre i TT02. Kontakt [Altinn service desk](mailto:servicedesk@altinn.no) ved behov. De vil trenge følgende informasjon:

* Systemleverandørs organisasjonsnummer
*	Systemleverandørs organisasjonsnavn
*	Systemleverandørs kontaktpersons e-postadresse (som er tilknyttet testen)
*	Systemleverandørs kontaktpersons mobiltelefonnummer (som er tilknyttet testen)

*	Virksomheten som har tilgang sitt organisasjonsnummer
*	Virksomheten som har tilgang sitt organisasjonsnavn
*	Virksomheten som har tilgang sin kontaktpersons e-postadresse (som er tilknyttet testen)
*	Virksomheten som har tilgang sin kontaktpersons mobiltelefonnummer (som er tilknyttet testen)

Samme informasjon må oppgis både for virksomheten med tilgang og systemleverandøren, siden begge virksomhetene må leses inn i TT02 for at det skal være mulig å gjennomføre en delegering i testmiljøet. En systemleverandør som leverer til flere virksomheter, trenger ikke melde inn alle virksomhetene for test, kun den som skal utføre delegeringen i test.

Når Altinn har lest inn en organisajon vil man få tilbake hvilket syntetisk fødselsnummer som kan benyttes for innlogging i TT02 for å gjennomføre delegeringen.

