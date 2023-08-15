import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { FooterSection } from "./FooterSection";
import { translate } from "@docusaurus/Translate";

export function Footer(): JSX.Element {
  const linksAbout = [
    {
      path: "#",
      text: translate({ message: "Tilgjengelighetserklæring" }),
    },
    {
      path: "https://www.skatteetaten.no/om-skatteetaten/jobb/",
      text: translate({ message: "Jobbe i Skatteetaten" }),
    },
    {
      path: "https://www.skatteetaten.no/om-skatteetaten/om-oss/",
      text: translate({ message: "Om oss" }),
    },
    {
      path: "https://www.skatteetaten.no/om-skatteetaten/analyse-og-rapporter/",
      text: translate({ message: "Analyse og rapporter" }),
    },
    {
      path: "https://www.skatteetaten.no/om-skatteetaten/forskning/",
      text: translate({ message: "Forskning" }),
    },
  ];

  return (
    <BrowserOnly>
      {() => {
        const Grid = require("@skatteetaten/frontend-components/Grid").Grid;

        return (
          <Grid>
            <Grid.Row>
              <Grid.Col xl={4} lg={12}>
                <FooterSection
                  heading={translate({ message: "Om Skatteetaten" })}
                  links={linksAbout}
                />
              </Grid.Col>
              <Grid.Col xl={4} lg={12}>
                <FooterSection
                  heading={translate({ message: "Følg oss" })}
                  subHeading={translate({
                    message: "Du kan kontakte oss i sosiale medier.",
                  })}
                  links={[
                    {
                      text: translate({
                        message: "Se alle Skatteetatens kontoer",
                      }),
                      path: "https://www.skatteetaten.no/om-skatteetaten/sikkerhet/sosiale-medier/",
                    },
                  ]}
                />
              </Grid.Col>
              <Grid.Col xl={4} lg={12}>
                <FooterSection
                  heading={translate({ message: "Kom i kontakt med oss" })}
                  subHeading={translate({
                    message:
                      "Vi hjelper deg om det er noe du lurer på, enten det gjelder faglige spørsmål, teknisk brukerstøtte eller driftsmeldinger.",
                  })}
                  links={[
                    {
                      text: translate({ message: "Kontakt oss" }),
                      path: "https://www.skatteetaten.no/deling/kontakt/",
                    },
                  ]}
                />
                <FooterSection
                  heading={translate({ message: "Presse" })}
                  subHeading={translate({
                    message:
                      "Pressemeldinger, pressekontakter og annen informasjon for journalister.",
                  })}
                  links={[
                    {
                      text: translate({ message: "Se vårt presserom" }),
                      path: "https://www.skatteetaten.no/presse/",
                    },
                  ]}
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        );
      }}
    </BrowserOnly>
  );
}
