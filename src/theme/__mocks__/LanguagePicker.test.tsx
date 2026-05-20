/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import LanguagePicker, { LanguageEnum } from "./LanguagePicker";

describe("src/theme/__mocks__/LanguagePicker", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(LanguagePicker).toBeDefined();
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(LanguagePicker)).toBe(true);
  });

  it("should render a div with data-testid 'language-picker'", () => {
    const { getByTestId } = render(
      React.createElement(LanguagePicker, {
        selectedLanguage: LanguageEnum.BOKMAAL,
        selectableLanguages: [LanguageEnum.BOKMAAL],
      })
    );
    expect(getByTestId("language-picker")).not.toBeNull();
  });

  it("should render the selected language", () => {
    const { getByTestId } = render(
      React.createElement(LanguagePicker, {
        selectedLanguage: LanguageEnum.NYNORSK,
        selectableLanguages: [LanguageEnum.NYNORSK],
      })
    );
    expect(getByTestId("selected-language").textContent).toBe(LanguageEnum.NYNORSK);
  });

  it("should render the count of selectable languages", () => {
    const { getByTestId } = render(
      React.createElement(LanguagePicker, {
        selectedLanguage: LanguageEnum.ENGLISH,
        selectableLanguages: [LanguageEnum.BOKMAAL, LanguageEnum.NYNORSK, LanguageEnum.ENGLISH],
      })
    );
    expect(getByTestId("language-count").textContent).toBe("3");
  });

  it("should render with a single selectable language", () => {
    const { getByTestId } = render(
      React.createElement(LanguagePicker, {
        selectedLanguage: LanguageEnum.SAMI,
        selectableLanguages: [LanguageEnum.SAMI],
      })
    );
    expect(getByTestId("language-count").textContent).toBe("1");
  });

  it("should render with all four languages", () => {
    const { getByTestId } = render(
      React.createElement(LanguagePicker, {
        selectedLanguage: LanguageEnum.BOKMAAL,
        selectableLanguages: [
          LanguageEnum.BOKMAAL,
          LanguageEnum.NYNORSK,
          LanguageEnum.ENGLISH,
          LanguageEnum.SAMI,
        ],
      })
    );
    expect(getByTestId("selected-language").textContent).toBe(LanguageEnum.BOKMAAL);
    expect(getByTestId("language-count").textContent).toBe("4");
  });

  it("should accept showOnMobile prop without affecting render", () => {
    const { getByTestId } = render(
      React.createElement(LanguagePicker, {
        selectedLanguage: LanguageEnum.ENGLISH,
        selectableLanguages: [LanguageEnum.ENGLISH],
        showOnMobile: true,
      })
    );
    expect(getByTestId("language-picker")).not.toBeNull();
    expect(getByTestId("selected-language").textContent).toBe(LanguageEnum.ENGLISH);
  });

  it("should track calls via jest.fn", () => {
    render(
      React.createElement(LanguagePicker, {
        selectedLanguage: LanguageEnum.BOKMAAL,
        selectableLanguages: [LanguageEnum.BOKMAAL, LanguageEnum.ENGLISH],
      })
    );
    expect(LanguagePicker).toHaveBeenCalledTimes(1);
  });

  it("should reset call count after clearAllMocks", () => {
    render(
      React.createElement(LanguagePicker, {
        selectedLanguage: LanguageEnum.NYNORSK,
        selectableLanguages: [LanguageEnum.NYNORSK],
      })
    );
    expect(LanguagePicker).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();
    expect(LanguagePicker).toHaveBeenCalledTimes(0);
  });

  it("should render with empty selectable languages array", () => {
    const { getByTestId } = render(
      React.createElement(LanguagePicker, {
        selectedLanguage: LanguageEnum.BOKMAAL,
        selectableLanguages: [],
      })
    );
    expect(getByTestId("language-count").textContent).toBe("0");
  });
});
