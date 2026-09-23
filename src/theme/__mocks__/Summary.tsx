import React from "react";

export const Summary = ({ children }: { children?: React.ReactNode }) =>
  React.createElement("div", { className: "summary" }, children);
