import React from "react";

export const SkeBasis = ({ children }: { children?: React.ReactNode }) =>
  React.createElement("div", { "data-testid": "ske-basis" }, children);
