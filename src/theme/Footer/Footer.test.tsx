import React from "react";
import { Footer } from "./Footer";

jest.mock("./FooterSection", () => ({
  FooterSection: ({
    heading,
    links,
    subHeading,
  }: {
    heading?: string;
    links?: { path: string; text: string }[];
    subHeading?: string;
  }) =>
    React.createElement(
      "div",
      { "data-testid": "footer-section" },
      heading && React.createElement("h3", null, heading),
      subHeading && React.createElement("p", null, subHeading),
      links &&
        React.createElement(
          "ul",
          null,
          links.map((link) =>
            React.createElement("li", { key: link.path }, link.text)
          )
        )
    ),
}));

describe("Footer", () => {
  it("should render without crashing", () => {
    const element = Footer();
    expect(React.isValidElement(element)).toBe(true);
  });
});
