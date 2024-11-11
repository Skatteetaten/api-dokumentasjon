/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Om",
      items: [
        "komigang",
        {
          type: "autogenerated",
          dirName: "om",
        },
      ],
    },
    {
      "API-er for deling": [
        "api/aksjebeholdning",
        "api/aksjonaerivirksomhet",
        "api/aktivkonto",
        "api/arbeidsforhold",
        "api/arbeidsforholdioppdrag",
        "api/arbeidsgiveravgift",
        "api/avregning",
        "api/beregnetskatt",
        "api/beregnetskattupersonlig",
        "api/bsu",
        "api/formuesgrunnlageiendomsskatt",
        "api/hendelser",
        "api/inntekt",
        "api/inntektsmottakere",
        "api/kravogbetalinger",
        "api/mva_meldingsopplysning",
        "api/mvamelding",
        "api/mvaregisteravgiftssubjekt",
        "api/naeringsspesifikasjon",
        "api/omregistreringsavgift",
        "api/oppdragutenlandskevirksomheter",
        "api/opptjeningsgrunnlagarbeidsforhold",
        "api/pgi",
        "api/pgi_folketrygden",
        "api/restanser",
        "api/selskapsmelding",
        "api/sistetilgjengeligeskatteoppgjoer",
        "api/skatteberegningsgrunnlagupersonlig",
        "api/skatteetatenregistrertselskap",
        "api/skattemelding",
        "api/skattemeldingupersonlig",
        "api/skatteplikt",
        "api/skattepliktupersonlig",
        "api/summertskattegrunnlag",
        "api/summertskattegrunnlagupersonlig",
        "api/tilleggsskatt",
        "api/tjenestepensjonsavtale",
        "api/trukketkildeskattpaaloenn",
        "api/underenhetaordningen",
      ],
    },
    {
      "API-er for innrapportering": [
        "api/boligsameie",
        "api/boligselskap",
      ],
    },
    { Anvendelsesområder: [{ type: "autogenerated", dirName: "anvendelsesomraader" }] },
    { Test: [{ type: "autogenerated", dirName: "test" }] },
    {
      type: "doc",
      label: "Kontakt oss",
      id: "kontaktoss",
    },
  ],
};

module.exports = sidebars;
