/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import generateLanguagePickerTitle from "./generateLanguagePickerTitle";
import LanguageEnum from "./LanguageEnum";

jest.mock(
  "@skatteetaten/frontend-components/TopStripe/LanguagePicker/LanguagePicker.classNames",
  () => ({
    getClassNames: () => ({
      languageButtonFlag: "language-button-flag",
    }),
  })
);

jest.mock(
  "@skatteetaten/frontend-components/TopStripe/assets",
  () => ({
    EnglishFlag: () => <div data-testid="english-flag" />,
    NorwegianFlag: () => <div data-testid="norwegian-flag" />,
    SamiFlag: () => <div data-testid="sami-flag" />,
  })
);

describe("generateLanguagePickerTitle", () => {
  it("renders Norwegian flag and text for BOKMAAL", () => {
    render(generateLanguagePickerTitle(LanguageEnum.BOKMAAL));

    expect(screen.getByTestId("norwegian-flag")).toBeTruthy();
    expect(screen.getByText("Bokmål")).toBeTruthy();
  });

  it("renders Norwegian flag and text for NYNORSK", () => {
    render(generateLanguagePickerTitle(LanguageEnum.NYNORSK));

    expect(screen.getByTestId("norwegian-flag")).toBeTruthy();
    expect(screen.getByText("Nynorsk")).toBeTruthy();
  });

  it("renders English flag and text for ENGLISH", () => {
    render(generateLanguagePickerTitle(LanguageEnum.ENGLISH));

    expect(screen.getByTestId("english-flag")).toBeTruthy();
    expect(screen.getByText("English")).toBeTruthy();
  });

  it("renders Sami flag and text for SAMI", () => {
    render(generateLanguagePickerTitle(LanguageEnum.SAMI));

    expect(screen.getByTestId("sami-flag")).toBeTruthy();
    expect(screen.getByText("Sámegiella")).toBeTruthy();
  });

  it("wraps flag in a span with the correct className", () => {
    const { container } = render(
      generateLanguagePickerTitle(LanguageEnum.BOKMAAL)
    );

    const span = container.querySelector("span.language-button-flag");
    expect(span).toBeTruthy();
  });
});
