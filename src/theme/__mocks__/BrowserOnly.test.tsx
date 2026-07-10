import React from "react";
import BrowserOnly from "./BrowserOnly";

describe("BrowserOnly mock", () => {
  it("should be a jest mock function", () => {
    expect(BrowserOnly).toBeDefined();
    expect(jest.isMockFunction(BrowserOnly)).toBe(true);
  });

  it("should call the children function and return its result", () => {
    const children = jest.fn(() => <div>Test</div>);
    const result = BrowserOnly({ children });

    expect(children).toHaveBeenCalledTimes(1);
    expect(result).toEqual(<div>Test</div>);
  });

  it("should pass no arguments to the children function", () => {
    const children = jest.fn(() => <span>Hello</span>);
    BrowserOnly({ children });

    expect(children).toHaveBeenCalledWith();
  });

  it("should return whatever the children function returns", () => {
    const children = jest.fn(() => null);
    const result = BrowserOnly({ children });

    expect(result).toBeNull();
  });

  it("should return a string if children returns a string", () => {
    const children = jest.fn(() => "hello world");
    const result = BrowserOnly({ children });

    expect(result).toBe("hello world");
  });

  it("should return a number if children returns a number", () => {
    const children = jest.fn(() => 42);
    const result = BrowserOnly({ children });

    expect(result).toBe(42);
  });

  it("should return an array if children returns an array", () => {
    const arr = [1, 2, 3];
    const children = jest.fn(() => arr);
    const result = BrowserOnly({ children });

    expect(result).toBe(arr);
  });

  it("should track calls in mock context", () => {
    BrowserOnly.mockClear();
    const children = jest.fn(() => <div />);
    BrowserOnly({ children });
    BrowserOnly({ children });

    expect(BrowserOnly).toHaveBeenCalledTimes(2);
    expect(children).toHaveBeenCalledTimes(2);
  });
});
