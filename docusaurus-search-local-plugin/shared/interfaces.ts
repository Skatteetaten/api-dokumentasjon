import { DocusaurusConfig, LoadedPlugin } from "@docusaurus/types";
import lunr from "lunr";

export interface SearchDocument {
  i: string;
  t: string;
  u: string;
  h?: string;
  p?: string;
  b?: string[];
  s?: string;
}

const DOC_TITLE = 0;
const DOC_HEADING = 1;
const DOC_CONTENT = 2;
export type SearchDocumentType =
  | typeof DOC_TITLE
  | typeof DOC_HEADING
  | typeof DOC_CONTENT;

export interface WrappedIndex {
  documents: SearchDocument[];
  index: lunr.Index;
  type: SearchDocumentType;
}

export interface ParsedDocument {
  pageTitle: string;
  sections: ParsedDocumentSection[];
  breadcrumb: string[];
}

export interface ParsedDocumentSection {
  title: string;
  hash: string;
  content: string;
}

export interface DocInfoWithFilePath {
  filePath: string;
  url: string;
  type: DocInfoType;
}

export interface VersionDocInfo {
  outDir: string;
  paths: DocInfoWithFilePath[];
}

export type DocInfoType = "docs" | "blog" | "page";

export interface PluginOptions {
  indexDocs?: boolean;
  indexBlog?: boolean;
  indexPages?: boolean;
  docsRouteBasePath?: string | string[];
  blogRouteBasePath?: string | string[];
  language?: string | string[];
  hashed?: boolean | "query" | "filename";
  docsDir?: string | string[];
  blogDir?: string | string[];
  docsPluginIdForPreferredVersion?: string;
  removeDefaultStopWordFilter?: boolean;
  removeDefaultStemmer?: boolean;
  searchResultLimits?: number;

  ignoreFiles?: string | RegExp | (string | RegExp)[];

  searchBarShortcut?: boolean;
  searchBarShortcutHint?: boolean;
}

export type ProcessedPluginOptions = Required<
  Omit<
    PluginOptions,
    | "language"
    | "docsRouteBasePath"
    | "blogRouteBasePath"
    | "docsDir"
    | "blogDir"
    | "ignoreFiles"
  >
> & {
  docsRouteBasePath: string[];
  blogRouteBasePath: string[];
  language: string[];
  docsDir: string[];
  blogDir: string[];
  ignoreFiles: (string | RegExp)[];
};

export interface PostBuildData {
  routesPaths: string[];
  outDir: string;
  baseUrl: string;
  siteConfig: DocusaurusConfig;
  plugins: LoadedPlugin[];
}

export interface DocusaurusContext {
  baseUrl: string;
  siteDir: string;
  generatedFilesDir: string;
  i18n: {
    currentLocale: string;
  };
  siteConfig: {
    themeConfig: {
      navbar?: {
        items?: {
          type: "search" | "doc";
          position: "left" | "right";
        }[];
      };
    };
  };
}
