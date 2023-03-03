import React, { useState } from 'react';
import { Tabs as STabs } from '@skatteetaten/frontend-components/Tabs';
import { useLocation } from '@docusaurus/router';

import styles from './Tabs.module.scss'

const TAB_LOCATION_SEARCH_NAME = 'tab';

function getValueFromSearchParams(searchString: string, tabName?: string): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  return getParsed(new URLSearchParams(searchString).get(TAB_LOCATION_SEARCH_NAME), tabName);
}

const getParsed = (prevParams: string | null, tabName?: string) => {
  if (!prevParams) {
    return undefined;
  }
  return tabName ? JSON.parse(prevParams)[tabName] : prevParams;
}

interface Props {
  children: any,
  tabName?: string;
}

export const Tabs = ({ children, tabName }: Props): JSX.Element => {
  const location = useLocation();

  const getSelectedKey = (searchParam: string | null) => {
    if (children.constructor == Array) {
      const tab = children?.find((c) => c.props.headerText === searchParam);
      return tab ? tab.props.itemKey : undefined;
    }
    return children.props.headerText === searchParam
      ? children.props.itemKey
      : undefined;
  }
  const searchParams = new URLSearchParams(location.search);
  const searchParam = tabName
      ? searchParams.get(tabName)
      : searchParams.get(TAB_LOCATION_SEARCH_NAME);

  const [selectedTabKey, setSelectedTabKey] = useState<string>(getSelectedKey(searchParam));

  const onLinkClick = (item: any) => {
    const searchParams = new URLSearchParams(window.location.search);
    const url = new URL(window.location.origin + window.location.pathname);

    if (tabName) {
      searchParams.set(tabName, item.props.headerText);
    } else {
      const newVal = item.props.headerText;
      searchParams.set(
        TAB_LOCATION_SEARCH_NAME,
        newVal,
      );
    }

    url.search = searchParams.toString();
    window.history.replaceState({}, '', url);
    setSelectedTabKey(item.props.itemKey);
  };

  return (
    <STabs className={styles.tabs} underline={true} onLinkClick={onLinkClick} selectedKey={selectedTabKey}>
      {children}
    </STabs>
  );
};