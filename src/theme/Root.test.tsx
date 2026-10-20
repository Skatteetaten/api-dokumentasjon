import React from "react";
import Root from "./Root";
import { SkeBasis } from "@skatteetaten/frontend-components/SkeBasis";

describe("Root", () => {
  it("should render children wrapped in SkeBasis", () => {
    const children = React.createElement("span", null, "Hello");
    const element = Root({ children });

    expect(React.isValidElement(element)).toBe(true);
    expect(element.type).toBe(SkeBasis);
    expect(element.props.children).toBe(children);
  });

  it("should pass through multiple children", () => {
    const child1 = React.createElement("p", null, "First");
    const child2 = React.createElement("p", null, "Second");
    const element = Root({ children: [child1, child2] });

    expect(element.props.children).toEqual([child1, child2]);
  });

  it("should render with no children", () => {
    const element = Root({ children: null });

    expect(element.type).toBe(SkeBasis);
    expect(element.props.children).toBeNull();
  });

  it("should return a valid React element", () => {
    const element = Root({ children: React.createElement("div") });

    expect(React.isValidElement(element)).toBe(true);
  });
});
