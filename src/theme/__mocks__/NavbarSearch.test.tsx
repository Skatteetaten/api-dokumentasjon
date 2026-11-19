import React from "react";
import { NavbarSearch } from "./NavbarSearch";

describe("src/theme/__mocks__/NavbarSearch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(NavbarSearch)).toBe(true);
  });

  it("should render a div with data-testid 'navbar-search'", () => {
    const element = NavbarSearch({ children: "Search Content" });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(element.props["data-testid"]).toBe("navbar-search");
    }
  });

  it("should render children correctly", () => {
    const element = NavbarSearch({ children: "Search Content" });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(element.props.children).toBe("Search Content");
    }
  });

  it("should apply className when provided", () => {
    const element = NavbarSearch({
      children: "Search Content",
      className: "custom-class",
    });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(element.props.className).toBe("custom-class");
    }
  });

  it("should have undefined className when not provided", () => {
    const element = NavbarSearch({ children: "Search Content" });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(element.props.className).toBeUndefined();
    }
  });

  it("should render with multiple children", () => {
    const child1 = React.createElement("span", null, "Child 1");
    const child2 = React.createElement("span", null, "Child 2");
    const element = NavbarSearch({ children: [child1, child2] });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(Array.isArray(element.props.children)).toBe(true);
      expect(element.props.children).toHaveLength(2);
    }
  });

  it("should allow mock implementation to be overridden", () => {
    (NavbarSearch as jest.Mock).mockImplementationOnce(
      ({ children, className }) =>
        React.createElement(
          "section",
          { "data-testid": "custom-navbar-search", className },
          children
        )
    );

    const element = NavbarSearch({
      children: "Overridden",
      className: "overridden",
    });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(element.type).toBe("section");
      expect(element.props["data-testid"]).toBe("custom-navbar-search");
      expect(element.props.className).toBe("overridden");
    }
  });

  it("should return to default behavior after mockImplementationOnce", () => {
    const element = NavbarSearch({ children: "Default Again" });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(element.type).toBe("div");
      expect(element.props["data-testid"]).toBe("navbar-search");
      expect(element.props.children).toBe("Default Again");
    }
  });
});
