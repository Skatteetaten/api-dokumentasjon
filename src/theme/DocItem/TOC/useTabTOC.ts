import { useEffect, useState } from "react";
import type { TOCItem } from "@docusaurus/mdx-loader";

export function useTabTOC(toc: readonly TOCItem[]): readonly TOCItem[] {
  const [tabTOC, setTabTOC] = useState<TOCItem[] | null>(null);

  useEffect(() => {
    let markdownObserver: MutationObserver | undefined;
    const updateTOC = (markdown: Element) => {
      if (!markdown.querySelector('[role="tablist"]')) {
        setTabTOC(null);
        return;
      }

      const headings = Array.from(
        markdown.querySelectorAll<HTMLElement>("h2.anchor, h3.anchor, h4.anchor, h5.anchor, h6.anchor")
      )
        .filter((heading) => !heading.closest('[role="tabpanel"]')?.hasAttribute("hidden"))
        .map((heading) => {
          const value = (heading.textContent ?? "").replace(/\u200b/g, "").trim();
          return {
            id: heading.id,
            level: Number(heading.tagName.slice(1)),
            value: value.replace(/[&<>"]/g, (character) => ({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
            })[character] ?? character),
          };
        });

      setTabTOC((previous) =>
        JSON.stringify(previous) === JSON.stringify(headings) ? previous : headings
      );
    };

    const attach = () => {
      const markdown = document.querySelector(".theme-doc-markdown");
      if (!markdown) return;

      markdownObserver = new MutationObserver(() => updateTOC(markdown));
      markdownObserver.observe(markdown, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["hidden"],
      });
      updateTOC(markdown);
      pageObserver.disconnect();
    };

    const pageObserver = new MutationObserver(attach);
    pageObserver.observe(document.body, { childList: true, subtree: true });
    attach();
    return () => {
      pageObserver.disconnect();
      markdownObserver?.disconnect();
    };
  }, [toc]);

  return tabTOC ?? toc;
}
