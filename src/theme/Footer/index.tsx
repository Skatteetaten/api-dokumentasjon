import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

import { Footer as FooterInner } from "./Footer";
import Grid from "@skatteetaten/frontend-components/Grid";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.scss";

function Footer(): JSX.Element | null {
  return (
    <BrowserOnly>
      {() => {
        const FooterContent =
          require("@skatteetaten/frontend-components/FooterContent").FooterContent;

        return (
          <FooterContent>
            <Grid>
              <Grid.Row>
                <Grid.Col sm={0} lg={1} xl={2} />
                <Grid.Col noSpacing sm={12} lg={10} xl={8}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Col noSpacing sm={0} lg={1} xl={2}>
                        <img
                          className={styles.footerLogo}
                          src={useBaseUrl("/img/ske-logo.svg")}
                        />
                      </Grid.Col>
                      <Grid.Col noSpacing sm={12} lg={11} xl={10}>
                        <FooterInner />
                      </Grid.Col>
                    </Grid.Row>
                  </Grid>
                </Grid.Col>
                <Grid.Col noSpacing sm={0} lg={1} xl={2} />
              </Grid.Row>
            </Grid>
          </FooterContent>
        );
      }}
    </BrowserOnly>
  );
}

export default React.memo(Footer);
