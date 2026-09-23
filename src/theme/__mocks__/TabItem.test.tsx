import React from "react";
import { TabItem } from "./TabItem";

describe("TabItem", () => {
  it("returns a div element", () => {
    const result = TabItem({}) as unknown as React.ReactElement;
    expect(result.type).toBe("div");
  });

  it("has className 'tab-item'", () => {
    const result = TabItem({}) as unknown as React.ReactElement<{
      className: string;
    }>;
    expect(result.props.className).toBe("tab-item");
  });

  it("passes children as props", () => {
    const result = TabItem({
      children: "Test Content",
    }) as unknown as React.ReactElement<{ children: string }>;
    expect(result.props.children).toBe("Test Content");
  });

  it("has undefined children when none are provided", () => {
    const result = TabItem({}) as unknown as React.ReactElement<{
      children?: string;
    }>;
    expect(result.props.children).toBeUndefined();
  });

  it("passes multiple children", () => {
    const child1 = React.createElement("span", {}, "Child 1");
    const child2 = React.createElement("span", {}, "Child 2");
    const result = TabItem({
      children: [child1, child2],
    }) as unknown as React.ReactElement<{ children: React.ReactElement[] }>;
    expect(result.props.children).toHaveLength(2);
  });
});
