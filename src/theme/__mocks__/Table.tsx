import React from "react";

const Table = jest.fn(({ data, columns, caption, hideCaption }) =>
  React.createElement(
    "table",
    { "data-testid": "table", "data-hide-caption": hideCaption },
    React.createElement("caption", null, caption),
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        columns.map((col: any) =>
          React.createElement("th", { key: col.name }, col.name)
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      (data as any[]).map((row, i) =>
        React.createElement(
          "tr",
          { key: i, "data-testid": "table-row" },
          columns.map((col: any) =>
            React.createElement(
              "td",
              { key: col.fieldName, "data-testid": `table-cell-${col.fieldName}` },
              row[col.fieldName]
            )
          )
        )
      )
    )
  )
);

export { Table };
