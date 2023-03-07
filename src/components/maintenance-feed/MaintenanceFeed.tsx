import React, { ReactNode } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import { RowData } from "@skatteetaten/frontend-components/Table";

interface FeedRowData extends RowData {
  date: string;
  name: ReactNode | string | undefined;
}

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

const FEED_PATH = "/maintenance/feed/";

export const MaintenanceFeed = (): JSX.Element => {
  const context = useDocusaurusContext();

  const documenter =
    context.globalData["docusaurus-plugin-content-docs"].default.versions[0]
      .docs;

  const data: FeedRowData[] = documenter
    .filter(
      (doc) => doc.path.startsWith(FEED_PATH) && !doc.path.endsWith("/feed/")
    )
    .map((doc) => {
      const [y, m, d] = doc.path.replace(FEED_PATH, "").split("-");
      const name = doc.path
        .replace(FEED_PATH, "")
        .split("-")
        .filter((s) => !isNumeric(s))
        .join("-");
      return {
        name: <Link to={doc.path}>{name}</Link>,
        date: new Date(y + "-" + m + "-" + d).toLocaleDateString("no-NO"),
      };
    })
    .reverse();

  const columns = [
    {
      name: "Dato",
      fieldName: "date",
    },
    {
      name: "Fil",
      fieldName: "name",
    },
  ];

  return (
    <BrowserOnly>
      {() => {
        const Table = require("@skatteetaten/frontend-components/Table").Table;

        return (
          <Table data={data} columns={columns} caption="test" hideCaption />
        );
      }}
    </BrowserOnly>
  );
};
