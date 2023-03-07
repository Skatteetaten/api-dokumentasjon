import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./FooterSection.module.scss";

interface Props {
  heading: string;
  subHeading?: string;
  links: { text: string; path: string }[];
}
export function FooterSection({
  heading,
  subHeading,
  links,
}: Props): JSX.Element {
  return (
    <>
      <h2>{heading}</h2>
      {subHeading && <p className={styles.subheading}>{subHeading}</p>}
      <BrowserOnly>
        {() => {
          const LinkGroup =
            require("@skatteetaten/frontend-components/LinkGroup").LinkGroup;
          return <LinkGroup links={links} className={styles.link} />;
        }}
      </BrowserOnly>
    </>
  );
}
