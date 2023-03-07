import React, { ReactNode } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import A from "@theme-original/MDXComponents/A";

import styles from "./A.module.css";

interface AWrapperProps {
  href: string | undefined;
  children: ReactNode;
}

export default function AWrapper(props: AWrapperProps) {
  const isExternal = props.href?.startsWith("https://");
  const externalProps = isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <BrowserOnly>
      {() => {
        const Icon = require("@skatteetaten/frontend-components/Icon").Icon;
        return (
          <A {...externalProps} {...props}>
            {props.children}
            {isExternal && (
              <Icon
                className={styles.icon}
                iconName="OpenInNew"
                role="presentation"
              />
            )}
          </A>
        );
      }}
    </BrowserOnly>
  );
}
