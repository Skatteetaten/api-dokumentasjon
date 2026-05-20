import React from "react";

export const Grid = ({ children }: { children?: React.ReactNode }) =>
  React.createElement("div", { "data-testid": "grid" }, children);

Grid.Row = ({ children }: { children?: React.ReactNode }) =>
  React.createElement("div", { "data-testid": "grid-row" }, children);

Grid.Col = ({
  children,
  xl,
  lg,
}: {
  children?: React.ReactNode;
  xl?: number;
  lg?: number;
}) =>
  React.createElement(
    "div",
    { "data-testid": "grid-col", xl, lg },
    children
  );
