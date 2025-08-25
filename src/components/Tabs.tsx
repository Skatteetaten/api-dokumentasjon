import React, { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useLocation, useHistory } from "@docusaurus/router";

import styles from "./Tabs.module.scss";

const TAB_LOCATION_SEARCH_NAME = "tab";

interface Props {
  children: any;
  tabName?: string;
}

export const Tabs = ({ children, tabName }: Props): JSX.Element => {
  const location = useLocation();
  const history = useHistory();

  const getSelectedKey = (searchParam: string | null) => {
    if (children.constructor == Array) {
      if (!searchParam) {
        // Hvis ingen search param oppgis, returner key til første tab
        return children[0]?.props?.itemKey ?? undefined;
      }

      const match = children?.find((c) => c.props.headerText === searchParam);
      return match
        ? match.props.itemKey
        : // Hvis ingen match, returner key til første tab
          children[0]?.props?.itemKey ?? undefined;
    }

    // Hvis children ikke er en array, returner key til den eneste taben
    return children?.props?.itemKey ?? undefined;
  };

  const searchParams = new URLSearchParams(location.search);
  const searchParam = tabName
    ? searchParams.get(tabName)
    : searchParams.get(TAB_LOCATION_SEARCH_NAME);

  const [selectedTabKey, setSelectedTabKey] = useState<string>(
    getSelectedKey(searchParam)
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchParam = tabName
      ? searchParams.get(tabName)
      : searchParams.get(TAB_LOCATION_SEARCH_NAME);

    setSelectedTabKey(getSelectedKey(searchParam));
  }, [location.search]);

  const onLinkClick = (item: any) => {
    const searchParams = new URLSearchParams(window.location.search);
    const url = new URL(window.location.origin + window.location.pathname);

    if (tabName) {
      searchParams.set(tabName, item.props.headerText);
    } else {
      const newVal = item.props.headerText;
      searchParams.set(TAB_LOCATION_SEARCH_NAME, newVal);
    }

    url.search = searchParams.toString();
    history.replace(`${url.pathname}${url.search}`);
    setSelectedTabKey(item.props.itemKey);
  };

  return (
    <BrowserOnly>
      {() => {
        const STabs = require("@skatteetaten/frontend-components/Tabs").Tabs;
        return (
          <STabs
            className={styles.tabs}
            underline={true}
            onLinkClick={onLinkClick}
            selectedKey={selectedTabKey}
          >
            {children}
          </STabs>
        );
      }}
    </BrowserOnly>
  );
};
