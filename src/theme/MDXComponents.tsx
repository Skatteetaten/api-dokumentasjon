import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { Summary } from '@site/src/components/summary';
import { Tabs } from '@site/src/components/Tabs';
import { TabItem } from '@skatteetaten/frontend-components/Tabs/TabItem';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  summary: Summary,
  Tabs,
  TabItem,
};