/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Om tjenesten",
      items: [
        "komigang",
        {
          type: "autogenerated",
          dirName: "om",
        },
      ],
    },
    {
      Tjenester: [
        "tjenester/aktivkonto",
        "tjenester/arbeidsforhold",
        "tjenester/arbeidsgiveravgift",
        "tjenester/avregning",
        "tjenester/beregnetskatt",
        "tjenester/bsu",
        "tjenester/hendelser",
        "tjenester/inntekt",
        "tjenester/inntektsmottakere",
        "tjenester/mva_meldingsopplysning",
        "tjenester/mvamelding",
        "tjenester/mvaregisteravgiftssubjekt",
        "tjenester/naeringsspesifikasjon",
        "tjenester/omregistreringsavgift",
        "tjenester/oppdragutenlandskevirksomheter",
        "tjenester/pgi",
        "tjenester/pgi_folketrygden",
        "tjenester/restanser",
        "tjenester/sistetilgjengeligeskatteoppgjoer",
        "tjenester/skattemelding",
        "tjenester/skattemeldingupersonlig",
        "tjenester/skatteplikt",
        "tjenester/skattepliktig",
        "tjenester/spesifisertsummertskattegrunnlag",
        "tjenester/summertskattegrunnlag",
        "tjenester/tilleggsskatt",
        "tjenester/tjenestepensjonsavtale",
        "tjenester/trukketkildeskattpaaloenn",
      ],
    },
    { Test: [{ type: "autogenerated", dirName: "test" }] },
    {
      type: "link",
      label: "Nyheter og driftsvarsler",
      href: "/nyheter-og-driftsvarsler",
    },
  ],
};

module.exports = sidebars;
