import React from "react";

const Head = jest.fn(({ children }) =>
  React.createElement("head", { "data-testid": "head" }, children)
);

export default Head;
