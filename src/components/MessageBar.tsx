import React, { FC } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { MessageBarProps } from "@skatteetaten/frontend-components/MessageBar/MessageBar.types";
import { MessageBarType } from "@fluentui/react";

const BrowserOnlyMessageBar: FC<MessageBarProps> = (props) => {
  return (
    <BrowserOnly>
      {() => {
        const MessageBar =
          require("@skatteetaten/frontend-components/MessageBar").MessageBar;
        return <MessageBar {...props} />;
      }}
    </BrowserOnly>
  );
};

export const InfoMessageBar: FC = (props) => {
  return (
    <BrowserOnlyMessageBar type={MessageBarType.info}>
      {props.children}
    </BrowserOnlyMessageBar>
  );
};

export const ErrorMessageBar: FC = (props) => {
  return (
    <BrowserOnlyMessageBar type={MessageBarType.error}>
      {props.children}
    </BrowserOnlyMessageBar>
  );
};

export const BlockedMessageBar: FC = (props) => {
  return (
    <BrowserOnlyMessageBar type={MessageBarType.blocked}>
      {props.children}
    </BrowserOnlyMessageBar>
  );
};

export const SuccessMessageBar: FC = (props) => {
  return (
    <BrowserOnlyMessageBar type={MessageBarType.success}>
      {props.children}
    </BrowserOnlyMessageBar>
  );
};

export const SevereWarningMessageBar: FC = (props) => {
  return (
    <BrowserOnlyMessageBar type={MessageBarType.severeWarning}>
      {props.children}
    </BrowserOnlyMessageBar>
  );
};

export const WarningMessageBar: FC = (props) => {
  return (
    <BrowserOnlyMessageBar type={MessageBarType.warning}>
      {props.children}
    </BrowserOnlyMessageBar>
  );
};
