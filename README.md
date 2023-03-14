# api-dokumentasjon
Vi jobber med å samle Skatteetatens api-dokumentasjon på en felles Github.

### Endre dokumentasjon
Nettsiden lages basert på strukturen under [/docs](./docs) mappen på main-branch. Gjør endringer her for å endre informasjonen på nettsiden. Tjeneste-dokumenter må i tillegg legges inn i [sidebars.js](./sidebars.js) for at de skal vises.

### Dokumentasjon under utarbeidelse
Hvis dokumentasjon er under utarbeidelse eller api'et er i en beta-versjon og ikke skal være synlig i sidemenyen, kan man la være å legge det inn i listen over tjeneste-dokumenter i [sidebars.js](./sidebars.js). Dokumentet vil da ikke dukke opp i sidemenyen.

### Publisere varsel
For å publisere et varsel, opprett en fil under [nyheter-og-driftsvarsler](./nyheter-og-driftsvarsler).
Filnavnet burde inneholde dato samt kort beskrivelse, f.eks. `2022-02-25-13-05-problemer-med-tjenestene.md`.
Innholdet i fila burde være på formen:
```md
---
title:  "Legg inn tittel på varsel her"
tags: [news]
---
Legg inn varseltekst her.
```

Nettsiden oppretter en ATOM-feed for varslene. `tags` i varselfila mappes til [category](https://validator.w3.org/feed/docs/atom.html#category) i feeden.

### Deploy
Nettsiden bygges og deployes automatisk ved commit til main-branch.

# Teknisk

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Tidligere repo

Dette repoet ble opprettet med utgangspunkt i https://github.com/Skatteetaten/datasamarbeid-api-dokumentasjon/tree/docusaurus