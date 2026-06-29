import React from "react";

export const translate = jest.fn(({ message }: { message: string }) => message);

export const Translate = jest.fn(({ children }: { children?: React.ReactNode }) => children);

export default Translate;
