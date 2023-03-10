import React from "react";
import BlogPostItem from "@theme/BlogPostItem";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";

import Ingress from "../../../nyheter-og-driftsvarsler/_varsler-ingress.md";
import HvordanAbonnere from "../../../nyheter-og-driftsvarsler/_varsler-hvordan-abonnere.md";

import styles from "./BlogPostItems.module.scss";

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
  const data = items.map((varsel) => ({
    date: varsel.content.metadata.formattedDate,
    title: (
      <Link to={varsel.content.metadata.permalink}>
        {varsel.content.metadata.frontMatter.title}
      </Link>
    ),
    description: varsel.content.metadata.description,
  }));

  return (
    <>
      <h1>Nyheter og driftsvarsler</h1>
      <h2>Abonnere på nyheter og driftsvarsler</h2>
      <Ingress />
      <h2>Hvordan abonnere på varsler</h2>
      <HvordanAbonnere />
      <h2>Nyheter og driftsvarsler</h2>

      <BrowserOnly>
        {() => {
          const Table =
            require("@skatteetaten/frontend-components/Table").Table;

          return (
            <Table
              data={data}
              columns={columns}
              caption="Nyheter og driftsvarsler"
              hideCaption
            />
          );
        }}
      </BrowserOnly>
    </>
  );
}
