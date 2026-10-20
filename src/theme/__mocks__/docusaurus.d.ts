declare module "@theme/BlogPostItem" {
  import React from "react";
  export default function BlogPostItem({
    children,
  }: {
    children?: React.ReactNode;
  }): JSX.Element;
}

declare module "@docusaurus/BrowserOnly" {
  import React from "react";
  export default function BrowserOnly({
    children,
  }: {
    children: () => JSX.Element;
  }): JSX.Element;
}

declare module "@docusaurus/Link" {
  import React from "react";
  export default function Link({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }): JSX.Element;
}

declare module "@docusaurus/Head" {
  import React from "react";
  export default function Head({
    children,
  }: {
    children?: React.ReactNode;
  }): JSX.Element;
}

declare module "@docusaurus/Translate" {
  export function translate({ message }: { message: string }): string;
  export default function Translate({
    children,
  }: {
    children?: React.ReactNode;
  }): JSX.Element;
}

declare module "@docusaurus/useDocusaurusContext" {
  export default function useDocusaurusContext(): {
    i18n: { currentLocale: string; locales: string[] };
    siteConfig: { title: string };
  };
}

declare module "@docusaurus/theme-common/internal" {
  export function useDateTimeFormat(
    options?: Intl.DateTimeFormatOptions
  ): { format: (date: Date) => string };
  export function useAlternatePageUtils(): {
    createUrl: ({ locale, fullyQualified }: { locale: string; fullyQualified?: boolean }) => string;
  };
}

declare module "@docusaurus/theme-common" {
  export function useThemeConfig(): {
    navbar: {
      items: Array<{ type?: string; [key: string]: any }>;
    };
  };
}

declare module "@theme/Navbar/Search" {
  import React from "react";
  export default function NavbarSearch({
    children,
  }: {
    children?: React.ReactNode;
    className?: string;
  }): JSX.Element;
}

declare module "@site/src/components/LanguagePicker" {
  import React from "react";
  export enum LanguageEnum {
    BOKMAAL = "nb",
    NYNORSK = "nn",
    ENGLISH = "en",
    SAMI = "se",
  }
  export default function LanguagePicker({
    selectedLanguage,
    selectableLanguages,
    showOnMobile,
  }: {
    selectedLanguage: LanguageEnum;
    selectableLanguages: LanguageEnum[];
    showOnMobile?: boolean;
  }): JSX.Element;
}

declare module "@skatteetaten/frontend-components/Table" {
  import React from "react";
  export const Table: React.FC<{
    data: any[];
    columns: any[];
    caption: string;
    hideCaption: boolean;
  }>;
}

declare module "*.md" {
  import React from "react";
  const content: React.FC;
  export default content;
}

declare module "*.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
