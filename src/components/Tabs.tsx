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
  const [tabsElement, setTabsElement] = useState<HTMLDivElement | null>(null);
  const items = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<{ itemKey: string; headerText: string }> =>
      React.isValidElement(child)
  );

  const getSelectedKey = (searchParam: string | null) => {
    return (
      items.find((item) => item.props.headerText === searchParam)?.props.itemKey ??
      items[0]?.props.itemKey
    );
  };

  const searchParams = new URLSearchParams(location.search);
  const searchParam = tabName
    ? searchParams.get(tabName)
    : searchParams.get(TAB_LOCATION_SEARCH_NAME);

  const [selectedTabKey, setSelectedTabKey] = useState<string | undefined>(
    getSelectedKey(searchParam)
  );

  useEffect(() => {
    if (!tabsElement) return;

    const searchParams = new URLSearchParams(location.search);
    const searchParam = tabName
      ? searchParams.get(tabName)
      : searchParams.get(TAB_LOCATION_SEARCH_NAME);

    if (!location.hash) {
      setSelectedTabKey(getSelectedKey(searchParam));
      return;
    }

    const anchorId = decodeURIComponent(location.hash.slice(1));
    const panels = Array.from(tabsElement.querySelectorAll('[role="tabpanel"]'));
    const hasAnchor = (panel: Element) =>
      Array.from(panel.querySelectorAll<HTMLElement>("[id]")).some(
        (element) => element.id === anchorId
      );
    const selectedIndex = items.findIndex((item) => item.props.headerText === searchParam);
    const panelIndex = panels[selectedIndex] && hasAnchor(panels[selectedIndex])
      ? selectedIndex
      : panels.findIndex(hasAnchor);
    const anchorTab = panelIndex >= 0 ? items[panelIndex] : undefined;

    if (anchorTab) {
      setSelectedTabKey(anchorTab.props.itemKey);
      if (searchParam !== anchorTab.props.headerText) {
        searchParams.set(tabName ?? TAB_LOCATION_SEARCH_NAME, anchorTab.props.headerText);
        history.replace(`${location.pathname}?${searchParams.toString()}${location.hash}`);
      }
    } else {
      setSelectedTabKey(getSelectedKey(searchParam));
    }
  }, [tabsElement, location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (!tabsElement || !location.hash) return;

    const anchorId = decodeURIComponent(location.hash.slice(1));
    const visiblePanel = tabsElement.querySelector('[role="tabpanel"]:not([hidden])');
    const anchor = Array.from(visiblePanel?.querySelectorAll<HTMLElement>("[id]") ?? []).find(
      (element) => element.id === anchorId
    );
    if (anchor) {
      requestAnimationFrame(() => anchor.scrollIntoView());
    }
  }, [tabsElement, selectedTabKey, location.hash]);

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
          <div ref={setTabsElement}>
            <STabs
              className={styles.tabs}
              underline={true}
              onLinkClick={onLinkClick}
              selectedKey={selectedTabKey}
            >
              {location.hash
                ? React.Children.map(children, (child) =>
                    React.isValidElement<{ alwaysRender?: boolean }>(child)
                      ? React.cloneElement(child, { alwaysRender: true })
                      : child
                  )
                : children}
            </STabs>
          </div>
        );
      }}
    </BrowserOnly>
  );
};
