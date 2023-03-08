import React, { ReactElement, useCallback, useEffect, useState } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  ReactContextError,
  useDocsPreferredVersion,
} from "@docusaurus/theme-common";

import { useActivePlugin } from "@docusaurus/plugin-content-docs/client";
import { useHistory } from "@docusaurus/router";
import { fetchIndexes } from "./fetchIndexes";
import { SearchDocument, WrappedIndex } from "../../../shared/interfaces";
import {
  docsPluginIdForPreferredVersion,
  indexDocs,
  searchResultLimits,
} from "../../utils/proxiedGenerated";
import { translate } from "@docusaurus/Translate";
import styles from "./SearchBar.module.css";

interface TitleSearchResult extends SearchDocument {
  headers: (SearchDocument | undefined)[];
}

interface SearchResults {
  titles: (TitleSearchResult | null)[];
  headers: (SearchDocument | undefined)[];
  content: (SearchDocument | undefined)[];
}

interface Options {
  text?: string;
  key?: string;
  url?: string;
  type: "Header" | "Title" | "Content";
}

export default function SearchBar(): ReactElement {
  const {
    siteConfig: { baseUrl },
  } = useDocusaurusContext();

  const activePlugin = useActivePlugin();
  let versionUrl = baseUrl;

  try {
    const { preferredVersion } = useDocsPreferredVersion(
      activePlugin?.pluginId ?? docsPluginIdForPreferredVersion
    );
    if (preferredVersion && !preferredVersion.isLast) {
      versionUrl = preferredVersion.path + "/";
    }
  } catch (e: unknown) {
    if (indexDocs) {
      if (e instanceof ReactContextError) {
      } else {
        throw e;
      }
    }
  }

  const [indexes, setIndexes] = useState<WrappedIndex[] | null>();
  const [inputValue, setInputValue] = useState("");

  const [hits, setHits] = useState<SearchResults>({
    titles: [],
    headers: [],
    content: [],
  });
  const history = useHistory();

  useEffect(() => {
    const loadIndex = async () => {
      const { wrappedIndexes } = await fetchIndexes(versionUrl);
      setIndexes(wrappedIndexes);
    };

    loadIndex();
  }, [setIndexes]);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
    if (!evt.target.value || evt.target.value === "") {
      setHits({ headers: [], titles: [], content: [] });
    }

    const getSearchResults = (index: WrappedIndex["index"], query: string) => {
      const nonWildcardRes = index.search(`${query}~1`);
      return nonWildcardRes;
    };
    if (indexes && evt.target.value) {
      const query = `*${evt.target.value}*`;
      const res = getSearchResults(indexes[0].index, evt.target.value).map(
        (r) => indexes[0].documents.find((doc) => doc.i === r.ref)
      );

      const te = res.slice(0, 3);

      const headings = indexes[1].index
        .search(query)
        .map((r) => indexes[1].documents.find((doc) => doc.i === r.ref));

      const content = indexes[2].index
        .search(query)
        .map((text) => indexes[2].documents.find((doc) => doc.i === text.ref));

      setHits({
        titles: te.map((r) => {
          if (!r) {
            return null;
          }
          return {
            ...r,
            headers: headings.filter((h) => h?.p === r?.i),
          };
        }),
        headers: headings.slice(0, 3),
        content: content.slice(0, 3),
      });
    }
  };

  const titleOptions: Options[] = hits.titles.map((hit) => ({
    text: hit?.t,
    key: hit?.i,
    url: hit?.u,
    type: "Title",
  }));

  const headerOptions: Options[] = hits.headers.map((hit) => ({
    text: hit?.t,
    key: hit?.i,
    url: hit?.u,
    type: "Header",
  }));

  const contentOptions: Options[] = hits.content.map((hit) => ({
    text: hit?.t,
    key: hit?.i,
    url: hit?.u,
    type: "Content",
  }));

  const options = [...titleOptions, ...headerOptions, ...contentOptions];

  const onSelected = (url?: string, text?: string) => {
    setInputValue(text ?? "");
    if (url) {
      setHits({ headers: [], titles: [], content: [] });
      history.push(url);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        placeholder={translate({
          id: "theme.SearchBar.label",
          message: "Search",
          description: "The ARIA label and placeholder for search button",
        })}
        aria-label="Search"
        className="navbar__search-input"
        onChange={onInputChange}
        value={inputValue}
      />
      <div className={styles.searchBarList}>
        {options.length > 0 && (
          <ol>
            {options.map((hit) => {
              const type = () => {
                if (hit.type === "Header") {
                  return "Dokument";
                }
                return hit.type === "Title" ? "Tittel" : "Innhold";
              };
              return (
                <li key={hit.key}>
                  <a onClick={() => onSelected(hit.url, hit.text)}>
                    {hit.text}
                  </a>
                  <br />
                  <span>{type()}</span>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
}
