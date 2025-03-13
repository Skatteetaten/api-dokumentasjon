# api-dokumentasjon
Vi jobber med å samle Skatteetatens api-dokumentasjon på en felles nettside.

### Endre dokumentasjon
Nettsiden lages basert på strukturen under [/docs](./docs) mappen på main-branch. Gjør endringer her for å endre informasjonen på nettsiden. Tjeneste-dokumenter må i tillegg legges inn i [sidebars.js](./sidebars.js) for at de skal vises.

### Dokumentasjon under utarbeidelse
Hvis dokumentasjon er under utarbeidelse eller api'et er i en beta-versjon og ikke skal være synlig i sidemenyen, kan man la være å legge det inn i listen over tjeneste-dokumenter i [sidebars.js](./sidebars.js). Dokumentet vil da ikke dukke opp i sidemenyen.

### Publisere nyhet
For å publisere en nyhet, opprett en fil under [nyheter-og-driftsvarsler](./nyheter-og-driftsvarsler).
Filnavnet burde inneholde dato samt kort beskrivelse, f.eks. `2022-02-25-13-05-problemer-med-tjenestene.md`.
Innholdet i fila burde være på formen:
```md
---
title:  "Legg inn tittel på nyhet her"
tags: [news]
---
Legg inn nyhetstekst her.
```

Nettsiden oppretter en ATOM-feed for nyhetene. `tags` i nyhetsfila mappes til [category](https://validator.w3.org/feed/docs/atom.html#category) i feeden.

Driftsvarsler for API'ene ble lagt ut her før, men skal nå legges ut på status.skatteetaten.no. Derfor inneholder mappenavnet og adressen til feeden "driftsvarsler". Navnet beholdes for bakoverkompatibilitet.

### Deploy
Nettsiden bygges og deployes automatisk ved commit til main-branch.

# Teknisk

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Tidligere repo

Dette repoet ble opprettet med utgangspunkt i https://github.com/Skatteetaten/datasamarbeid-api-dokumentasjon/tree/docusaurus
