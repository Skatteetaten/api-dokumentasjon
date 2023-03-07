import React from "react";
import { MessageBar } from "@skatteetaten/frontend-components/MessageBar";
import { FC } from "react";

export const InfoMessageBar: FC = (props) => {
  return <MessageBar type={MessageBar.Type.info}>{props.children}</MessageBar>;
};

export const ErrorMessageBar: FC = (props) => {
  return <MessageBar type={MessageBar.Type.error}>{props.children}</MessageBar>;
};

export const BlockedMessageBar: FC = (props) => {
  return (
    <MessageBar type={MessageBar.Type.blocked}>{props.children}</MessageBar>
  );
};

export const SuccessMessageBar: FC = (props) => {
  return (
    <MessageBar type={MessageBar.Type.success}>{props.children}</MessageBar>
  );
};

export const SevereWarningMessageBar: FC = (props) => {
  return (
    <MessageBar type={MessageBar.Type.severeWarning}>
      {props.children}
    </MessageBar>
  );
};

export const WarningMessageBar: FC = (props) => {
  return (
    <MessageBar type={MessageBar.Type.warning}>{props.children}</MessageBar>
  );
};
