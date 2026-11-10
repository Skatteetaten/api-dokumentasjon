import React from "react";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import TOC from "@theme/TOC";
import { useTabTOC } from "../useTabTOC";

export default function DocItemTOCDesktop(): JSX.Element {
  const { toc, frontMatter } = useDoc();
  const visibleTOC = useTabTOC(toc);

  // Remount when replacing the server-rendered, full-page TOC with tab headings.
  return (
    <TOC
      key={visibleTOC === toc ? "document" : "tab"}
      toc={visibleTOC}
      minHeadingLevel={frontMatter.toc_min_heading_level}
      maxHeadingLevel={frontMatter.toc_max_heading_level}
      className={ThemeClassNames.docs.docTocDesktop}
    />
  );
}
