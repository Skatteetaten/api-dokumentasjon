import React from "react";
import DocPage from "@theme-original/DocPage";
import type DocPageType from "@theme/DocPage";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof DocPageType>;

export default function DocPageWrapper(props: Props): JSX.Element {
  return (
    <>
      <DocPage {...props} />
    </>
  );
}
