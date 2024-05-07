---
title: Boligsameie API
slug: /api/boligsameie
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [ API, Boligsameie]
keywords: [grunnlagsdata]
last_updated: Apr 29, 2024
hide_table_of_contents: true
---

<summary>Tjenesten brukes til innsending av Boligsameie.</summary>

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
Følgende scope skal benyttes ved autentisering i Maskinporten: `skatteetaten:boligsameie`

## Delegering
Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. 
Søk opp følgende tjeneste i Altinn for å delegere tilgangen: `Boligsameie API - På vegne av`

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i Open API spesifikasjonen på 
SwaggerHub

API-et for boligsameie har bare ett endepunkt: 
* __POST innsending__: Mottar tredjepartsopplysninger for boligsameier. Ett kall mot API-et er en rapportering for et 
boligsameie gitt av en oppgavegiver og som gjelder et inntektsår. 

API-et validerer mottatte data mot JSON schema beskrevet på SwaggerHub. Se [feilkoder](boligsameie?tab=Feilkoder) for 
relaterte feilmeldinger.

Se også [eksempler](boligsameie?tab=Eksempler) for de ulike endepunktene.

### Parameter: idempotencyKey 
idempotencyKey parameteren er påkrevet. Innholdet skal være en unik UUID. Hvert nye kall til API-et skal ha en 
tilsvarende ny idempotencyKey. Flere etterfølgende POST kall med samme request-body og samme idempotencyKey vil gi den 
samme repsponsen. Kun det første av denne rekken med like API kall vil behandles. IdempotencyKey muliggjør at man trygt 
kan prøve innsendinger på nytt der man av ulike årsaker ikke har fått en tilbakemelding fra API-et.

## Datakatalog
Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2"> 

```
Legg inn eksempel
```

</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi.
  
| Feilkode | HTTP Statuskode | Feilområde                                   |
|----------|-----------------|----------------------------------------------|
| GLD_005  | 403             | Feil i forbindelse med autorisering          |
| GLD_006  | 400             | Feil i request                               |
| GLD_008  | 400             | Strukturell feil i tilknyttet dataformat     |
| GLD_010  | 400             | Feil i forbindelse med validering av payload |
| GLD_011  | 400             | Feil i metadata                              |
| GLD_017  | 500             | Uspesifisert systemfeil                      |
| GLD_019  | 409             | Idempotensnøkkel er benyttet tidligere       |
| GLD_021  | 404             | Finner ikke forespurt ressurs                |
| GLD_022  | 405             | HTTP-metode ikke støttet                     |

Feilresponsene kan også inneholde en feilspesifiseringskode som presiserer feilen ytterligere. 
Tabellen under viser hvilke feilspesifiseringskoder applikasjonen kan gi.
Dersom det finnes mer detaljert feilinformasjon enn generelt feilområde vil det beskrives i melding, sti og angitt verdi feltene.

| Feilspesifiseringskode | Feilområde                                     | Årsak                                                                                                                       |
|------------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GLD_1022               | Feil i parametre                               | Diverse feil med parametre i request. Mer detaljert beskrivelse ligger i melding, sti og angitt verdi dersom det er aktuelt |
| GLD_1023               | Finner ingen ressurs for denne urlen           | Det er ikke noe innhold tilgjengelig på denne URLen                                                                         |
| GLD_1027               | Inntektsår er ikke støttet                     | Det er ikke tillatt å levere på oppgitt inntektsår                                                                          |
| GLD_1028               | Header mangler                                 | Påkrevd header er ikke med i requesten                                                                                      |
| GLD_1030               | Accept-header må være av type application/json | Accept header er feil. APIet har kun støtte for json i response                                                             |
| GLD_1047               | Content type må være application/json          | Content-type header er feil. APIet har kun støtte for json i request body                                                   |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

![boligsameie](../../static/download/Informasjonsmodell_Boligsameie.png)

| Eier                           | Element                              | Dokumentasjon                                                                                                                                   |
|--------------------------------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Leveranse                      | inntektsår                           | Inntektsåret leveransen gjelder                                                                                                                 |
| Leveranse                      | kildesystem                          | System brukt for å levere oppgaven                                                                                                              |
| Leveranse                      | leveransetype                        | Type av leveranse som angir om leveransen inneholder ordinære oppgaver eller om oppgavegiver angir at det ikke er noen oppgaver å innrapportere |
| Leveranse                      | oppgave                              | Oppgave som leveres                                                                                                                             |
| Leveranse                      | oppgavegiver                         | Organisasjon som leverer oppgave på vegne av oppgaveeier                                                                                        |
| Leveranse                      | oppgavegiversLeveranseReferanse      | Frivillig referanse på innsendingen til bruk mot egne interne systemer og evt. support mot skattetaten                                          |
| Leveranse                      | oppgaveoppsummering                  | Oppsummering med totalsummer for innleverte oppgaver                                                                                            |
| Leveranse                      | sletteoppgave                        | Oppgave for sletting av tidligere innrapporterte oppgaver                                                                                       |
| Melding                        | leveranse                            | Selve leveransen. Merk at det kun er tillatt med en leveranse pr Melding                                                                        |
| OppgaveBoligsameie             | andelFormue                          | Oppgaveeiers andel av felles formue i boligsameiet                                                                                              |
| OppgaveBoligsameie             | andelFradragsberettigedeKostnader    | Oppgaveeiers andel av fradragsberettigede kostnader i boligsameiet                                                                              |
| OppgaveBoligsameie             | andelGjeld                           | Oppgaveeiers andel av gjeld i boligselsameiet                                                                                                   |
| OppgaveBoligsameie             | andelSkattepliktigInntekter          | Oppgaveeiers andel av skattepliktige inntekter i boligsameiet                                                                                   |
| OppgaveBoligsameie             | eiertid                              | Oppgaveeiers tid som eier av boenheten                                                                                                          |
| OppgaveBoligsameie             | matrikkelnummer                      | Boenhetens Matrikkelnummer                                                                                                                      |
| OppgaveBoligsameie             | oppgaveeier                          | Eier av oppgaven                                                                                                                                |
| Oppgaveeier                    | fødselsnummer                        | Fødselsnummer på oppgaveeier. Eksklusiv enten fødselsnummer eller organisasjonsnummer                                                           |
| Oppgaveeier                    | navn                                 | Navn på oppgaveeier                                                                                                                             |
| Oppgaveeier                    | organisasjonsnummer                  | Organisasjonsnummer på oppgaveeier. Eksklusiv enten fødselsnummer eller organisasjonsnummer                                                     |
| Oppgavegiver                   | organisasjonsnavn                    | Navn på oppgavegiver                                                                                                                            |
| Oppgavegiver                   | organisasjonsnummer                  | Organisasjonsnummer på oppgavegiver                                                                                                             |
| OppgaveoppsummeringBoligsameie | antallOppgaver                       | Totalt antall oppgaver i leveransens oppgaver                                                                                                   |
| OppgaveoppsummeringBoligsameie | sumAndelFormue                       | Sum av andelFormue i leveransens oppgaver                                                                                                       |
| OppgaveoppsummeringBoligsameie | sumAndelFradreagsberettigedeKostnader | Sum av andelFradragsberettigedeKostnader i leveransens oppgaver                                                                                 |
| OppgaveoppsummeringBoligsameie | sumAndelGjeld                        | Sum av andelGjeld i leveransens oppgaver                                                                                                        |
| OppgaveoppsummeringBoligsameie | sumAndelSkattepliktigInntekter       | Sum av andelSkattepliktigeInntekter i leveransens oppgaver                                                                                      |
| SletteoppgaveBoligsameie       | matrikkelnummer                      | Boenhetens matrikkelnummer                                                                                                                      |
| SletteoppgaveBoligsameie       | oppgaveeier                          | Eier av sletteoppgaven                                                                                                                          |
| Matrikkelnummer                | bruksnummer                          | Del av matrikkelnummeret som sammen med kommunenummer, gårdsnummer og seksjonsnummer unikt identifiserer en eierseksjon                         |
| Matrikkelnummer                | festenummer                          | Festenumemr tilhørende eierseksjonen dersom eiendommen er festet                                                                                |
| Matrikkelnummer                | gårdsnummer                          | Del av matrikkelnummeret som sammen med kommunenummer, bruksnummer og seksjonsnummer unikt identifiserer en eierseksjon                         |
| Matrikkelnummer                | kommunenummer                        | Boenhetens kommunenummer                                                                                                                        |
| Matrikkelnummer                | seksjonsnummer                       | Del av matrikkelnummeret som sammen med kommunenummer, gårdsnummer og bruksnummer unikt identifiserer en eierseksjon                            | 
</TabItem>

<TabItem headerText="Test" itemKey="itemKey-5">

Her kan du legge inn tekst om test av tjenesten. 
  
</TabItem>
</Tabs>
