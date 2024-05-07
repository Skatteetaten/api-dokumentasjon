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

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne 
variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.
  
| Feilkode | HTTP Statuskode | Feilområde                                                 |
|----------|-----------------|------------------------------------------------------------|
| MVA-001  | 500             | Uventet feil på tjenesten.                                 |
| MVA-002  | 500             | Uventet feil i et bakenforliggende system.                 |
| MVA-003  | 404             | Ukjent url benyttet.                                       |
| MVA-004  | 401             | Feil i forbindelse med autentisering.                      |
| MVA-005  | 403             | Feil i forbindelse med autorisering.                       |
| MVA-006  | 400             | Feil i forbindelse med validering av inputdata.            |
| MVA-007  | 404             | Ingen mva-melding funnet på oppgitt referanse.             |
| MVA-008  | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
  
</TabItem>
<TabItem headerText="Informasjonsmodell" itemKey="itemKey-4">

Her kan du legge inn skjermbilde av informasjonsmodell. 

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-5">

Her kan du legge inn tekst om test av tjenesten. 
  
</TabItem>
</Tabs>
