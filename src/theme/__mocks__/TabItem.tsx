import React from "react";

export const TabItem = ({ children }: { children?: React.ReactNode }) =>
  React.createElement("div", { className: "tab-item" }, children);
