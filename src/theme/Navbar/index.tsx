import React from 'react';

import { Link } from '@skatteetaten/frontend-components/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import { TopBanner } from './TopBanner';
import { TopStripe } from '@skatteetaten/frontend-components/TopStripe';
import { TopStripeMenu } from '@skatteetaten/frontend-components/TopStripe/TopStripeMenu';
// import SearchBar from '@theme/SearchBar';
import SearchBar from '../../../docusaurus-search-local-plugin/client/theme/SearchBar';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './TopBanner.module.scss';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

export default function Navbar(): JSX.Element {
  const context = useActiveDocContext();
  const items = useNavbarItems();
  const t = useThemeConfig();
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <div className={`${styles.navigation} navbar`}>
      <TopBanner
        logoLink="https://www.skatteetaten.no/"
        homeText="Tilbake Til Deling"
        homeUrl="https://www.skatteetaten.no/deling"
        topStripe={
          <TopStripe>
            <Link
              path={'https://www.skatteetaten.no/kontakt/'}
              text={'Kontakt oss'}
              placement="before"
            />
            <TopStripeMenu
              closeMenuAriaLabel="Lukk endre skriftstørrelse"
              title={'Endre skriftstørrelse'}
              showOnMobile={false}
              contentIsMenu={false}
            >
              <div style={{ fontSize: '24px', marginTop: '8px' }}>
                Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å
                forstørre eller - for å forminske.
              </div>
            </TopStripeMenu>
            {!searchBarItem && (
              <NavbarSearch>
                <SearchBar />
              </NavbarSearch>
            )}
          </TopStripe>
        }
        title={'Skatteetatens delingstjenester'}
      />
    </div>
  );
}
