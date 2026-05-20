/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { Summary } from "./Summary";

describe("Summary", () => {
  it("renders a div with className='summary'", () => {
    const { container } = render(<Summary />);
    const div = container.firstChild as HTMLElement;
    expect(div).toBeTruthy();
    expect(div?.tagName).toBe("DIV");
    expect(div?.className).toBe("summary");
  });

  it("renders children inside the summary div", () => {
    const { getByText } = render(<Summary>Test Content</Summary>);
    expect(getByText("Test Content")).toBeTruthy();
  });

  it("renders multiple children", () => {
    const { getByText } = render(
      <Summary>
        <span>Child 1</span>
        <span>Child 2</span>
      </Summary>
    );
    expect(getByText("Child 1")).toBeTruthy();
    expect(getByText("Child 2")).toBeTruthy();
  });

  it("renders without children", () => {
    const { container } = render(<Summary />);
    const div = container.firstChild as HTMLElement;
    expect(div?.childNodes.length).toBe(0);
  });
});
