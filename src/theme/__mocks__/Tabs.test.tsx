/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { Tabs } from "./Tabs";

describe("Tabs mock", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render a div element with className 'tabs'", () => {
    const { container } = render(
      React.createElement(Tabs, null, "Tab content")
    );
    const div = container.querySelector("div");
    expect(div).not.toBeNull();
    expect(div?.getAttribute("class")).toBe("tabs");
  });

  it("should render children inside the div", () => {
    const { container } = render(
      React.createElement(Tabs, null, "Hello Tabs")
    );
    const div = container.querySelector("div");
    expect(div?.textContent).toBe("Hello Tabs");
  });

  it("should render with no children", () => {
    const { container } = render(React.createElement(Tabs));
    const div = container.querySelector("div");
    expect(div).not.toBeNull();
    expect(div?.textContent).toBe("");
  });

  it("should render with multiple children", () => {
    const child1 = React.createElement("span", { key: "1" }, "First");
    const child2 = React.createElement("span", { key: "2" }, "Second");
    const { container } = render(React.createElement(Tabs, null, child1, child2));
    const div = container.querySelector("div");
    const spans = div?.querySelectorAll("span");
    expect(spans?.length).toBe(2);
    expect(spans?.[0]?.textContent).toBe("First");
    expect(spans?.[1]?.textContent).toBe("Second");
  });

  it("should render with nested children", () => {
    const nestedChild = React.createElement(
      "div",
      null,
      React.createElement("p", null, "Nested content")
    );
    const { container } = render(
      React.createElement(Tabs, null, nestedChild)
    );
    const div = container.querySelector("div");
    const p = div?.querySelector("p");
    expect(p).not.toBeNull();
    expect(p?.textContent).toBe("Nested content");
  });
});
