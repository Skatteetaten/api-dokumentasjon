import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import TOCCollapsible from "@theme/TOCCollapsible";
import { useTabTOC } from "../useTabTOC";
import styles from "@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/styles.module.css";

export default function DocItemTOCMobile(): JSX.Element {
  const { toc, frontMatter } = useDoc();
  const visibleTOC = useTabTOC(toc);

  return (
    <TOCCollapsible
      key={visibleTOC === toc ? "document" : "tab"}
      toc={visibleTOC}
      minHeadingLevel={frontMatter.toc_min_heading_level}
      maxHeadingLevel={frontMatter.toc_max_heading_level}
      className={clsx(ThemeClassNames.docs.docTocMobile, styles.tocMobile)}
    />
  );
}
