import React from "react";

const BrowserOnly = jest.fn(({ children }) => children());

export default BrowserOnly;
