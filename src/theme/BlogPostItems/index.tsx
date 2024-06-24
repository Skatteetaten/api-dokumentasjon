import React from "react";
import BlogPostItem from "@theme/BlogPostItem";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useDateTimeFormat } from "@docusaurus/theme-common/internal";

import Ingress from "../../../nyheter-og-driftsvarsler/_varsler-ingress.md";
import IngressEN from "../../../nyheter-og-driftsvarsler/_varsler-ingress-en.md";

import styles from "./BlogPostItems.module.scss";
import Translate, { translate } from "@docusaurus/Translate";

const hentTekster = (locale: string) => {
  switch (locale) {
    case "nb":
      return { ingress: <Ingress /> };
    case "en":
      return { ingress: <IngressEN /> };
  }
};

const columns = [
  {
    name: "Dato",
    fieldName: "date",
    formatFunction: (content) => (
      <div className={styles["dato-container"]}>{content}</div>
    ),
  },
  {
    name: "Tittel",
    fieldName: "title",
  },
  {
    name: "Utdrag",
    fieldName: "description",
  },
];

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  const context = useDocusaurusContext();

  const { ingress } = hentTekster(context.i18n.currentLocale);

  const dateTimeFormat = useDateTimeFormat({
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  const formatDate = (date: string) => dateTimeFormat.format(new Date(date));

  const data = items.map((varsel) => ({
    date: formatDate(varsel.content.metadata.date),
    title: (
      <Link to={varsel.content.metadata.permalink}>
        {varsel.content.metadata.frontMatter.title}
      </Link>
    ),
    description: varsel.content.metadata.description,
  }));

  const configTitleString = context.siteConfig.title
    ? ` - ${context.siteConfig.title}`
    : "";
  const title = `${translate({
    message: "Nyheter og driftsvarsler",
  })}${configTitleString}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        <Translate>Nyheter og driftsvarsler</Translate>
      </h1>
      {ingress}

      <BrowserOnly>
        {() => {
          const Table =
            require("@skatteetaten/frontend-components/Table").Table;

          return (
            <Table
              data={data}
              columns={columns}
              caption={translate({ message: "Nyheter og driftsvarsler" })}
              hideCaption
            />
          );
        }}
      </BrowserOnly>
    </>
  );
}
