import React from "react";

const MockMessageBar = (props: any) =>
  React.createElement("div", { className: "message-bar", ...props }, props.children);

export const InfoMessageBar = MockMessageBar;
export const WarningMessageBar = MockMessageBar;
export const SevereWarningMessageBar = MockMessageBar;
export const ErrorMessageBar = MockMessageBar;
export const BlockedMessageBar = MockMessageBar;
export const SuccessMessageBar = MockMessageBar;
