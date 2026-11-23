import React from "react";
import { Summary } from "./Summary";

describe("Summary", () => {
  it("should render without crashing", () => {
    const element = Summary({ children: "Test content" });
    expect(React.isValidElement(element)).toBe(true);
  });

  it("should render children", () => {
    const children = React.createElement("span", null, "Hello");
    const element = Summary({ children });

    expect(element.props.children).toBe(children);
  });

  it("should pass through multiple children", () => {
    const child1 = React.createElement("p", null, "First");
    const child2 = React.createElement("p", null, "Second");
    const element = Summary({ children: [child1, child2] });

    expect(element.props.children).toEqual([child1, child2]);
  });

  it("should render with no children", () => {
    const element = Summary({ children: null });

    expect(element.props.children).toBeNull();
  });

  it("should return a valid React element", () => {
    const element = Summary({ children: React.createElement("div") });

    expect(React.isValidElement(element)).toBe(true);
  });
});
