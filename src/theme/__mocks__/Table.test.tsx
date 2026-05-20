/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { Table } from "./Table";

describe("Table", () => {
  const mockColumns = [
    { name: "Name", fieldName: "name" },
    { name: "Age", fieldName: "age" },
  ];

  const mockData = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];

  it("renders a table element with data-testid='table'", () => {
    const { container } = render(
      React.createElement(Table, { data: [], columns: [], caption: "", hideCaption: false })
    );
    const table = container.firstChild as HTMLElement;
    expect(table).toBeTruthy();
    expect(table?.tagName).toBe("TABLE");
    expect(table?.getAttribute("data-testid")).toBe("table");
  });

  it("renders a caption element with the caption text", () => {
    const { container } = render(
      React.createElement(Table, { data: [], columns: [], caption: "Test Caption", hideCaption: false })
    );
    const caption = container.querySelector("caption");
    expect(caption).toBeTruthy();
    expect(caption?.textContent).toBe("Test Caption");
  });

  it("renders thead with column headers", () => {
    const { container } = render(
      React.createElement(Table, { data: [], columns: mockColumns, caption: "", hideCaption: false })
    );
    const ths = container.querySelectorAll("th");
    expect(ths.length).toBe(2);
    expect(ths[0].textContent).toBe("Name");
    expect(ths[1].textContent).toBe("Age");
  });

  it("renders tbody with data rows", () => {
    const { container } = render(
      React.createElement(Table, { data: mockData, columns: mockColumns, caption: "", hideCaption: false })
    );
    const rows = container.querySelectorAll("tbody tr");
    expect(rows.length).toBe(2);
  });

  it("renders cells with correct field values", () => {
    const { container } = render(
      React.createElement(Table, { data: mockData, columns: mockColumns, caption: "", hideCaption: false })
    );
    const cells = container.querySelectorAll("td");
    expect(cells.length).toBe(4);
    expect(cells[0].textContent).toBe("Alice");
    expect(cells[1].textContent).toBe("30");
    expect(cells[2].textContent).toBe("Bob");
    expect(cells[3].textContent).toBe("25");
  });

  it("sets data-hide-caption attribute on the table", () => {
    const { container } = render(
      React.createElement(Table, { data: [], columns: [], caption: "", hideCaption: true })
    );
    const table = container.firstChild as HTMLElement;
    expect(table?.getAttribute("data-hide-caption")).toBe("true");
  });

  it("sets data-hide-caption to false when hideCaption is false", () => {
    const { container } = render(
      React.createElement(Table, { data: [], columns: [], caption: "", hideCaption: false })
    );
    const table = container.firstChild as HTMLElement;
    expect(table?.getAttribute("data-hide-caption")).toBe("false");
  });

  it("renders each row with data-testid='table-row'", () => {
    const { container } = render(
      React.createElement(Table, { data: mockData, columns: mockColumns, caption: "", hideCaption: false })
    );
    const rows = container.querySelectorAll('[data-testid="table-row"]');
    expect(rows.length).toBe(2);
  });

  it("renders each cell with data-testid based on fieldName", () => {
    const { container } = render(
      React.createElement(Table, { data: mockData, columns: mockColumns, caption: "", hideCaption: false })
    );
    const nameCells = container.querySelectorAll('[data-testid="table-cell-name"]');
    const ageCells = container.querySelectorAll('[data-testid="table-cell-age"]');
    expect(nameCells.length).toBe(2);
    expect(ageCells.length).toBe(2);
  });

  it("is a jest mock function", () => {
    expect(Table).toBeDefined();
    expect(typeof Table).toBe("function");
  });
});
