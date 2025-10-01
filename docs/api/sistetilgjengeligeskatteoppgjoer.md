---
title: Siste tilgjengelige skatteoppgjør API
slug: /api/sistetilgjengeligeskatteoppgjoer
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Skatteoppgjør, Støttetjeneste]
keywords: [tilgjengeligdata, skattegrunnlag]
last_updated: Sep 2, 2025
hide_table_of_contents: true
---
<Summary>Tjenesten leverer informasjon om siste inntektsår det foreligger skatteoppgjør på for en person.</Summary>

<Tabs underline={true}>
<TabItem headerText="Om tjenesten" itemKey="itemKey-1" default>

For data som er tilgjengelige på uforutsigbare tidspunkt tilbyr vi en tjeneste for å sjekke hvilke data som er tilgjengelig for en skattepliktig. Tilgjengeligdata API returnerer periode for “siste tilgjengelige data” for den skattepliktige. Tjenesten er spesielt nyttig for virksomheter som trenger samtykke for å hente ut data. Tilgjengeligdata Api brukes før samtykke innhentes, for å sikre at man ber om samtykke til seneste periode Skatteetaten har data for.

Eksempler på slike data er Summert skattegrunnlag API, hvor det kan variere med flere måneder når det kommer data for et nytt inntektsår (fordi forskjellige skattepliktige har forskjellige meldefrister, skattepliktig kan søke om utsettelser, etc).
  
For generell informasjon om tjenestene se egne sider om:
* [Bruk av tjenestene](../om/bruk.md)
* [Sikkerhetsmekanismer](../om/sikkerhet.md)
* [Feilhåndtering](../om/feil.md)
* [Versjonering](../om/versjoner.md)
* [Teknisk spesifikasjon](../om/tekniskspesifikasjon.md)

## Teknisk spesifikasjon
URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/siste-tilgjengelige-skatteoppgjoer/) på SwaggerHub.

## Tilgang

### Scope
Man trenger ikke eget scope for dette API-et, siden den benytter samme scope som relaterte oppslagstjenester: 
  * `skatteetaten:summertskattegrunnlag`
  * `skatteetaten:spesifisertsummertskattegrunnlag`

### Delegering
Tilgang til denne støttetjenester delegeres i Altinn når man delegerer oppslagstjenesten.

### Skatteetaten trenger ikke gi egen tilgang
Det trengs ikke egen tilgang for denne støttetjenesten, siden den følger av tilgangen som er gitt til relaterte oppslagstjenester.

## Datakatalog
Dette API-et er pt. ikke dokumentert i Felles datakatalog.

</TabItem>
<TabItem headerText="Eksempler" itemKey="itemKey-2">

## JSON

```json
{
  "personidentifikator": "07078600378",
  "ressursId": "skattegrunnlag",
  "sisteTilgjengeligePeriode": "2021"
}
```

Data kommer som ett tilgjengeligdata-objekt.
  
Hvert Tilgjengeligdata-object inneholder

  * personidentifikator - typisk Fødselsnummer eller D-nummer
  * ressursid - id på typen data, f.eks "skattegrunnlag"
  * siste tilgjengelige periode - beskriver sist tilgjengelige periode for ressursen. Har forskjellig format basert på ressursen. F.eks. kun årstall for skattegrunnlag.

## XML

Dersom man ønsker XML i stedet for JSON kan dette spesifiseres med header `Accept` satt til `application/xml`:

```xml
<tilgjengeligdata xmlns="urn:no:skatteetaten:datasamarbeid:tilgjengeligdata:v1">
   <personidentifikator>07078600378</personidentifikator>
   <ressursId>skattegrunnlag</ressursId>
   <sisteTilgjengeligePeriode>2021</sisteTilgjengeligePeriode>
</tilgjengeligdata>
```
</TabItem>
<TabItem headerText="Feilkoder" itemKey="itemKey-3">

Se egen side for generell info om [feilhåndtering i tjenestene](../om/feil.md).

Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for å kunne gi en så presis beskrivelse av feilen som mulig.

| Feilkode | HTTP Statuskode | Feilområde |
|----------|-----------------|-------|
| TD-001   | 500             | Uventet feil på tjenesten.  |
| TD-002   | 401             | Feil i forbindelse med autentisering.  |
| TD-003   | 400             | Feil i forbindelse med validering av inputdata. |
| TD-004   | 404             | Fant ikke tilgjengeligdata for angitt personidentifikator og ressursidentifikator.  |
| TD-005   | 406             | Feil tilknyttet dataformat. Kun json eller xml er støttet. |
| TD-006   | 404             | Ukjent url benyttet. |
  
</TabItem>
</Tabs>


