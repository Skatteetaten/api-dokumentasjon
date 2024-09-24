import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

import { useThemeConfig } from "@docusaurus/theme-common";
import { TopBanner } from "./TopBanner";
import SearchBar from "../../../docusaurus-search-local-plugin/client/theme/SearchBar";
import NavbarSearch from "@theme/Navbar/Search";
import styles from "./TopBanner.module.scss";
import LanguagePicker, {
  LanguageEnum,
} from "@site/src/components/LanguagePicker";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

export default function Navbar(): JSX.Element {
  const {
    i18n: { currentLocale, locales },
  } = useDocusaurusContext();
  const items = useNavbarItems();
  const searchBarItem = items.find((item) => item.type === "search");

  const selectedLanguage =
    LanguageEnum[
      Object.keys(LanguageEnum)[
        Object.values(LanguageEnum).indexOf(currentLocale as LanguageEnum)
      ] as keyof typeof LanguageEnum
    ];
  const selectableLanguages = locales.map(
    (locale) =>
      LanguageEnum[
        Object.keys(LanguageEnum)[
          Object.values(LanguageEnum).indexOf(locale as LanguageEnum)
        ] as keyof typeof LanguageEnum
      ]
  );

  return (
    <BrowserOnly>
      {() => {
        const Link = require("@skatteetaten/frontend-components/Link").Link;
        const TopStripe =
          require("@skatteetaten/frontend-components/TopStripe").TopStripe;
        const TopStripeMenu =
          require("@skatteetaten/frontend-components/TopStripe/TopStripeMenu").TopStripeMenu;

        return (
          <div className={`${styles.navigation} navbar`}>
            <TopBanner
              logoLink="https://www.skatteetaten.no/"
              homeText="skatteetaten.no"
              homeUrl="https://www.skatteetaten.no"
              topStripe={
                <TopStripe>
                  <Link
                    path={"https://www.skatteetaten.no/kontakt/"}
                    text={<Translate>Kontakt oss</Translate>}
                    placement="before"
                  />
                  <TopStripeMenu
                    closeMenuAriaLabel="Lukk endre skriftstørrelse"
                    title={<Translate>Endre skriftstørrelse</Translate>}
                    showOnMobile={false}
                    contentIsMenu={false}
                  >
                    <div style={{ fontSize: "24px", marginTop: "8px" }}>
                      <Translate>
                        Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på +
                        for å forstørre eller - for å forminske.
                      </Translate>
                    </div>
                  </TopStripeMenu>
                  <LanguagePicker
                    selectedLanguage={selectedLanguage}
                    selectableLanguages={selectableLanguages}
                    showOnMobile
                  />
                  {!searchBarItem && (
                    <NavbarSearch>
                      <SearchBar />
                    </NavbarSearch>
                  )}
                </TopStripe>
              }
              title={translate({
                message: "Skatteetatens API-er",
              })}
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
}
