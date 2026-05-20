import React from "react";

const MdMock = jest.fn(() =>
  React.createElement("p", { "data-testid": "md-mock" }, "Mocked MD content")
);

export default MdMock;
