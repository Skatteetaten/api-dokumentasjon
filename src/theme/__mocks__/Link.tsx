import React from "react";

const Link = jest.fn(({ to, children }) =>
  React.createElement("a", { href: to, "data-testid": "link" }, children)
);

export default Link;
