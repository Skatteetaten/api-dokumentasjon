/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import Link from "./Link";

describe("Link mock", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render an anchor element with the correct href", () => {
    const { container } = render(
      React.createElement(Link, { to: "/some-path" }, "Click me")
    );
    const anchor = container.querySelector("a");
    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute("href")).toBe("/some-path");
  });

  it("should render children inside the anchor", () => {
    const { container } = render(
      React.createElement(Link, { to: "/test" }, "Hello World")
    );
    const anchor = container.querySelector("a");
    expect(anchor?.textContent).toBe("Hello World");
  });

  it("should have data-testid attribute set to 'link'", () => {
    const { container } = render(
      React.createElement(Link, { to: "/test" }, "Test")
    );
    const anchor = container.querySelector("a");
    expect(anchor?.getAttribute("data-testid")).toBe("link");
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(Link)).toBe(true);
  });

  it("should track calls via jest.fn", () => {
    render(React.createElement(Link, { to: "/tracked" }, "Tracked"));
    expect(Link).toHaveBeenCalledTimes(1);
    expect(Link).toHaveBeenCalledWith(
      { to: "/tracked", children: "Tracked" },
      {}
    );
  });

  it("should render with nested children", () => {
    const nestedChild = React.createElement("span", null, "Nested");
    const { container } = render(
      React.createElement(Link, { to: "/nested" }, nestedChild)
    );
    const anchor = container.querySelector("a");
    const span = anchor?.querySelector("span");
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe("Nested");
  });

  it("should reset call count after clearAllMocks", () => {
    render(React.createElement(Link, { to: "/first" }, "First"));
    expect(Link).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();
    expect(Link).toHaveBeenCalledTimes(0);
  });
});
