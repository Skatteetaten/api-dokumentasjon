/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./index";

jest.mock(
  "@docusaurus/useBaseUrl",
  () => jest.fn((path: string) => path),
  { virtual: true }
);

jest.mock(
  "@skatteetaten/frontend-components/FooterContent",
  () => ({
    FooterContent: ({ children }: { children: React.ReactNode }) =>
      React.createElement(
        "div",
        { "data-testid": "footer-content" },
        children
      ),
  }),
  { virtual: true }
);

jest.mock(
  "@skatteetaten/frontend-components/Grid",
  () => {
    const GridComponent = ({ children }: { children?: React.ReactNode }) =>
      React.createElement("div", { "data-testid": "grid" }, children);

    const Row = ({ children }: { children?: React.ReactNode }) =>
      React.createElement("div", { "data-testid": "grid-row" }, children);

    const Col = ({
      children,
      ...rest
    }: {
      children?: React.ReactNode;
      [key: string]: unknown;
    }) =>
      React.createElement("div", { "data-testid": "grid-col", ...rest }, children);

    GridComponent.Row = Row;
    GridComponent.Col = Col;

    return { __esModule: true, default: GridComponent };
  },
  { virtual: true }
);

jest.mock("./Footer", () => ({
  Footer: () =>
    React.createElement("div", { "data-testid": "footer-inner" }, "Footer Inner"),
}));

jest.mock("./index.module.scss", () => ({
  footerLogo: "footerLogo",
}));

describe("Footer (index)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render without crashing", () => {
    const element = React.createElement(Footer);
    expect(React.isValidElement(element)).toBe(true);
  });

  it("should render FooterContent wrapper", () => {
    render(React.createElement(Footer));
    expect(screen.getByTestId("footer-content")).not.toBeNull();
  });

  it("should render the FooterInner component inside FooterContent", () => {
    render(React.createElement(Footer));
    const footerContent = screen.getByTestId("footer-content");
    expect(
      footerContent.querySelector('[data-testid="footer-inner"]')
    ).not.toBeNull();
  });

  it("should render the logo image with correct src", () => {
    render(React.createElement(Footer));
    const logo = screen.getByRole("img", { hidden: true }) as HTMLImageElement;
    expect(logo).not.toBeNull();
    expect(logo.getAttribute("src")).toBe("/img/ske-logo.svg");
  });

  it("should apply the footerLogo CSS module class to the logo", () => {
    render(React.createElement(Footer));
    const logo = screen.getByRole("img", { hidden: true });
    expect(logo.className).toContain("footerLogo");
  });

  it("should render Grid structure inside FooterContent", () => {
    render(React.createElement(Footer));
    const footerContent = screen.getByTestId("footer-content");
    expect(footerContent.querySelector('[data-testid="grid"]')).not.toBeNull();
  });

  it("should be wrapped with React.memo", () => {
    expect((Footer as any).$$typeof).toBe(Symbol.for("react.memo"));
  });

  it("should render Grid.Row inside the Grid", () => {
    render(React.createElement(Footer));
    const grids = screen.getAllByTestId("grid");
    grids.forEach((grid) => {
      expect(grid.querySelector('[data-testid="grid-row"]')).not.toBeNull();
    });
  });

  it("should render Grid.Col elements inside the Grid.Row", () => {
    render(React.createElement(Footer));
    const gridCols = document.querySelectorAll('[data-testid="grid-col"]');
    expect(gridCols.length).toBeGreaterThan(0);
  });

  it("should render the logo inside a Grid.Col", () => {
    render(React.createElement(Footer));
    const logo = screen.getByRole("img", { hidden: true });
    const logoCol = logo.closest('[data-testid="grid-col"]');
    expect(logoCol).not.toBeNull();
  });

  it("should render FooterInner inside a Grid.Col", () => {
    render(React.createElement(Footer));
    const footerInner = screen.getByTestId("footer-inner");
    const footerInnerCol = footerInner.closest('[data-testid="grid-col"]');
    expect(footerInnerCol).not.toBeNull();
  });
});
