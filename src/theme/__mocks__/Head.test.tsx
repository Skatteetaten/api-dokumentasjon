/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import Head from "./Head";

describe("Head mock", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Suppress expected DOM nesting warnings (head element rendered outside <html>)
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation((...args) => {
      const message = args.join(" ");
      if (message.includes("validateDOMNesting")) return;
      console.warn(...args);
    });
  });

  afterAll(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(Head)).toBe(true);
  });

  it("should render a head element", () => {
    const { container } = render(React.createElement(Head, null, "Test"));
    const head = container.querySelector("head");
    expect(head).not.toBeNull();
  });

  it("should have data-testid attribute set to 'head'", () => {
    const { container } = render(React.createElement(Head, null, "Test"));
    const head = container.querySelector("head");
    expect(head?.getAttribute("data-testid")).toBe("head");
  });

  it("should render children inside the head element", () => {
    const { container } = render(
      React.createElement(Head, null, "Hello World")
    );
    const head = container.querySelector("head");
    expect(head?.textContent).toBe("Hello World");
  });

  it("should render React element children", () => {
    const title = React.createElement("title", null, "My Title");
    const { container } = render(React.createElement(Head, null, title));
    const head = container.querySelector("head");
    const titleEl = head?.querySelector("title");
    expect(titleEl).not.toBeNull();
    expect(titleEl?.textContent).toBe("My Title");
  });

  it("should render multiple children", () => {
    const meta = React.createElement("meta", { charSet: "utf-8" });
    const title = React.createElement("title", null, "Page");
    const { container } = render(
      React.createElement(Head, null, meta, title)
    );
    const head = container.querySelector("head");
    expect(head?.querySelector("meta")).not.toBeNull();
    expect(head?.querySelector("title")).not.toBeNull();
  });

  it("should render with no children", () => {
    const { container } = render(React.createElement(Head, null));
    const head = container.querySelector("head");
    expect(head).not.toBeNull();
  });

  it("should track calls via jest.fn", () => {
    render(React.createElement(Head, null, "Tracked"));
    expect(Head).toHaveBeenCalledTimes(1);
  });

  it("should reset call count after clearAllMocks", () => {
    render(React.createElement(Head, null, "First"));
    expect(Head).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();
    expect(Head).toHaveBeenCalledTimes(0);
  });
});
