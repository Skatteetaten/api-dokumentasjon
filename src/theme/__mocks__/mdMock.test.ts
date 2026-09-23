import React from "react";
import MdMock from "./mdMock";

describe("mdMock", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(MdMock)).toBe(true);
  });

  it("should return a React element with correct props and children", () => {
    const result = MdMock();

    expect(result).toEqual(
      React.createElement("p", { "data-testid": "md-mock" }, "Mocked MD content")
    );
  });

  it("should render a <p> element", () => {
    const result = MdMock();

    expect(result.type).toBe("p");
  });

  it("should have data-testid attribute set to 'md-mock'", () => {
    const result = MdMock();

    expect(result.props["data-testid"]).toBe("md-mock");
  });

  it("should have correct children text", () => {
    const result = MdMock() as React.ReactElement<{
      "data-testid": string;
      children?: string;
    }>;

    expect(result.props.children).toBe("Mocked MD content");
  });

  it("should be callable multiple times with same result", () => {
    const result1 = MdMock();
    const result2 = MdMock();

    expect(result1).toEqual(result2);
  });

  it("should track calls like a jest mock", () => {
    MdMock();
    MdMock();
    MdMock();

    expect(MdMock).toHaveBeenCalledTimes(3);
  });

  it("should be the default export", () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const module = require("./mdMock");

    expect(module.default).toBe(MdMock);
  });
});
