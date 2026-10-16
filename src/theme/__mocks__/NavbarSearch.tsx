import React from "react";

export interface NavbarSearchProps {
  children: React.ReactNode;
  className?: string;
}

export const NavbarSearch: React.FC<NavbarSearchProps> = jest.fn(
  ({ children, className }) =>
    React.createElement(
      "div",
      { "data-testid": "navbar-search", className },
      children
    )
) as unknown as React.FC<NavbarSearchProps>;

export default NavbarSearch;
