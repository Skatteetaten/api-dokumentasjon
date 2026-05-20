/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { Grid } from "./Grid";

describe("Grid", () => {
  it("renders a div with data-testid='grid'", () => {
    const { container } = render(<Grid />);
    const div = container.firstChild as HTMLElement;
    expect(div).toBeTruthy();
    expect(div?.tagName).toBe("DIV");
    expect(div?.getAttribute("data-testid")).toBe("grid");
  });

  it("renders children inside the grid div", () => {
    const { getByText } = render(<Grid>Test Content</Grid>);
    expect(getByText("Test Content")).toBeTruthy();
  });
});

describe("Grid.Row", () => {
  it("renders a div with data-testid='grid-row'", () => {
    const { container } = render(<Grid.Row />);
    const div = container.firstChild as HTMLElement;
    expect(div).toBeTruthy();
    expect(div?.tagName).toBe("DIV");
    expect(div?.getAttribute("data-testid")).toBe("grid-row");
  });

  it("renders children inside the row div", () => {
    const { getByText } = render(<Grid.Row>Row Content</Grid.Row>);
    expect(getByText("Row Content")).toBeTruthy();
  });
});

describe("Grid.Col", () => {
  it("renders a div with data-testid='grid-col'", () => {
    const { container } = render(<Grid.Col />);
    const div = container.firstChild as HTMLElement;
    expect(div).toBeTruthy();
    expect(div?.tagName).toBe("DIV");
    expect(div?.getAttribute("data-testid")).toBe("grid-col");
  });

  it("renders children inside the col div", () => {
    const { getByText } = render(<Grid.Col>Col Content</Grid.Col>);
    expect(getByText("Col Content")).toBeTruthy();
  });

  it("passes xl prop to the col div", () => {
    const { container } = render(<Grid.Col xl={6} />);
    const div = container.firstChild as HTMLElement;
    expect(div?.getAttribute("xl")).toBe("6");
  });

  it("passes lg prop to the col div", () => {
    const { container } = render(<Grid.Col lg={4} />);
    const div = container.firstChild as HTMLElement;
    expect(div?.getAttribute("lg")).toBe("4");
  });

  it("passes both xl and lg props to the col div", () => {
    const { container } = render(<Grid.Col xl={8} lg={6} />);
    const div = container.firstChild as HTMLElement;
    expect(div?.getAttribute("xl")).toBe("8");
    expect(div?.getAttribute("lg")).toBe("6");
  });
});
