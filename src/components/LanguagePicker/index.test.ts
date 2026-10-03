import * as React from "react";

// Mock @skatteetaten/frontend-components before importing the module
jest.mock(
  "@skatteetaten/frontend-components/TopStripe/TopStripeMenu",
  () => ({
    TopStripeMenu: (props: any) =>
      React.createElement(
        "div",
        { "data-testid": "mock-top-stripe-menu", ...props },
        props.children
      ),
  })
);

jest.mock("@skatteetaten/frontend-components/utils", () => ({
  UseScreen: () => ({ sm: false }),
}));

jest.mock("./languagePickerButton", () =>
  jest.fn(({ buttonLanguage, selectedLanguage }: any) =>
    React.createElement(
      "div",
      {
        "data-testid": `language-button-${buttonLanguage}`,
        "data-selected": buttonLanguage === selectedLanguage,
      },
      buttonLanguage
    )
  )
);

jest.mock("./generateLanguagePickerTitle", () =>
  jest.fn((language: string) =>
    React.createElement(
      "span",
      { "data-testid": `title-${language}` },
      language
    )
  )
);

import LanguagePicker, { LanguageEnum } from "./index";

describe("LanguagePicker index", () => {
  describe("default export", () => {
    it("should export LanguagePicker as default", () => {
      expect(LanguagePicker).toBeDefined();
      expect(typeof LanguagePicker).toBe("function");
    });
  });

  describe("LanguageEnum named export", () => {
    it("should export LanguageEnum", () => {
      expect(LanguageEnum).toBeDefined();
    });

    it("should have BOKMAAL with value 'nb'", () => {
      expect(LanguageEnum.BOKMAAL).toBe("nb");
    });

    it("should have NYNORSK with value 'nn'", () => {
      expect(LanguageEnum.NYNORSK).toBe("nn");
    });

    it("should have ENGLISH with value 'en'", () => {
      expect(LanguageEnum.ENGLISH).toBe("en");
    });

    it("should have SAMI with value 'se'", () => {
      expect(LanguageEnum.SAMI).toBe("se");
    });

    it("should have exactly 4 members", () => {
      expect(Object.keys(LanguageEnum).length).toBe(4);
    });
  });
});
