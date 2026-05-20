/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";

import displayFlag from "./displayFlag";
import LanguageEnum from "./LanguageEnum";

// Mock the flag components from @skatteetaten/frontend-components/TopStripe/assets
jest.mock(
  "@skatteetaten/frontend-components/TopStripe/assets",
  () => ({
    EnglishFlag: () => <div data-testid="english-flag" />,
    NorwegianFlag: () => <div data-testid="norwegian-flag" />,
    SamiFlag: () => <div data-testid="sami-flag" />,
  })
);

describe("displayFlag", () => {
  it("should return NorwegianFlag for BOKMAAL", () => {
    const result = displayFlag(LanguageEnum.BOKMAAL);
    const { getByTestId } = render(result);
    expect(getByTestId("norwegian-flag")).toBeTruthy();
  });

  it("should return NorwegianFlag for NYNORSK", () => {
    const result = displayFlag(LanguageEnum.NYNORSK);
    const { getByTestId } = render(result);
    expect(getByTestId("norwegian-flag")).toBeTruthy();
  });

  it("should return EnglishFlag for ENGLISH", () => {
    const result = displayFlag(LanguageEnum.ENGLISH);
    const { getByTestId } = render(result);
    expect(getByTestId("english-flag")).toBeTruthy();
  });

  it("should return SamiFlag for SAMI", () => {
    const result = displayFlag(LanguageEnum.SAMI);
    const { getByTestId } = render(result);
    expect(getByTestId("sami-flag")).toBeTruthy();
  });
});
