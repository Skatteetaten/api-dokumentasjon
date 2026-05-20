/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import LanguagePickerButton from "./languagePickerButton";
import LanguageEnum from "./LanguageEnum";

// Mock @skatteetaten/frontend-components/Icon
jest.mock("@skatteetaten/frontend-components/Icon", () => ({
  Icon: jest.fn(({ iconName, className }) => (
    <span data-testid="icon" data-icon-name={iconName} className={className}>
      {iconName}
    </span>
  )),
}));

// Mock getClassNames from TopStripe/LanguagePicker
jest.mock(
  "@skatteetaten/frontend-components/TopStripe/LanguagePicker/LanguagePicker.classNames",
  () => ({
    getClassNames: jest.fn(() => ({
      checkIcon: "check-icon-class",
      languageButtonContent: "language-button-content-class",
      languageButtonFlag: "language-button-flag-class",
      languageButtonText: "language-button-text-class",
      languageButtonIsNotSelected: "language-button-not-selected-class",
    })),
  })
);

// Mock @docusaurus/router
jest.mock("@docusaurus/router", () => ({
  useLocation: jest.fn(() => ({
    search: "",
    hash: "",
  })),
}));

// Mock @docusaurus/Link
jest.mock("@docusaurus/Link", () =>
  jest.fn(({ to, children, ...rest }) => (
    <a href={to} data-testid="language-link" {...rest}>
      {children}
    </a>
  ))
);

// Mock generateLanguagePickerText
jest.mock("./generateLanguagePickerText", () =>
  jest.fn((language: LanguageEnum) => {
    const texts: Record<LanguageEnum, string> = {
      [LanguageEnum.BOKMAAL]: "Bokmål",
      [LanguageEnum.NYNORSK]: "Nynorsk",
      [LanguageEnum.ENGLISH]: "English",
      [LanguageEnum.SAMI]: "Sámegiella",
    };
    return texts[language];
  })
);

// Mock displayFlag
jest.mock("./displayFlag", () =>
  jest.fn((language: LanguageEnum) => (
    <span data-testid="flag">{language}</span>
  ))
);

// Mock SCSS module
jest.mock("./languagePickerButton.module.scss", () => ({
  languagePickerButton: "language-picker-button-class",
}));

const mockUseAlternatePageUtils = jest.requireMock(
  "@docusaurus/theme-common/internal"
).useAlternatePageUtils;

const mockUseLocation = jest.requireMock("@docusaurus/router").useLocation;

describe("LanguagePickerButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseAlternatePageUtils.mockReturnValue({
      createUrl: jest.fn(({ locale }: { locale: string }) => `/api/${locale}`),
    });
    mockUseLocation.mockReturnValue({
      search: "",
      hash: "",
    });
  });

  it("should render without crashing", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.BOKMAAL}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByTestId("language-link")).toBeTruthy();
  });

  it("should render check icon when button language is selected", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.BOKMAAL}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByTestId("icon")).toBeTruthy();
    expect(screen.getByTestId("icon").getAttribute("data-icon-name")).toBe(
      "Check"
    );
  });

  it("should not render check icon when button language is not selected", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.ENGLISH}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.queryByTestId("icon")).toBeNull();
  });

  it("should set aria-current to true when language is selected", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.BOKMAAL}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByTestId("language-link").getAttribute("aria-current")).toBe(
      "true"
    );
  });

  it("should set aria-current to false when language is not selected", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.ENGLISH}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByTestId("language-link").getAttribute("aria-current")).toBe(
      "false"
    );
  });

  it("should set the correct lang attribute", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.ENGLISH}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByTestId("language-link").getAttribute("lang")).toBe("en");
  });

  it("should set role to menuitem", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.BOKMAAL}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByTestId("language-link").getAttribute("role")).toBe(
      "menuitem"
    );
  });

  it("should set target to _self", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.BOKMAAL}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByTestId("language-link").getAttribute("target")).toBe(
      "_self"
    );
  });

  it("should generate correct href with pathname:// prefix", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.ENGLISH}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    const link = screen.getByTestId("language-link");
    expect(link.getAttribute("href")).toBe("pathname:///api/en");
  });

  it("should preserve search query in href", () => {
    mockUseLocation.mockReturnValue({
      search: "?query=test",
      hash: "",
    });
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.ENGLISH}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    const link = screen.getByTestId("language-link");
    expect(link.getAttribute("href")).toBe("pathname:///api/en?query=test");
  });

  it("should preserve hash in href", () => {
    mockUseLocation.mockReturnValue({
      search: "",
      hash: "#section",
    });
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.ENGLISH}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    const link = screen.getByTestId("language-link");
    expect(link.getAttribute("href")).toBe("pathname:///api/en#section");
  });

  it("should preserve both search and hash in href", () => {
    mockUseLocation.mockReturnValue({
      search: "?query=test",
      hash: "#section",
    });
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.ENGLISH}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    const link = screen.getByTestId("language-link");
    expect(link.getAttribute("href")).toBe(
      "pathname:///api/en?query=test#section"
    );
  });

  it("should render the flag element", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.ENGLISH}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByTestId("flag")).toBeTruthy();
    expect(screen.getByTestId("flag").textContent).toBe("en");
  });

  it("should render the language text", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.ENGLISH}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByText("English")).toBeTruthy();
  });

  it("should render correct text for Bokmål", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.BOKMAAL}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByText("Bokmål")).toBeTruthy();
  });

  it("should render correct text for Nynorsk", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.NYNORSK}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByText("Nynorsk")).toBeTruthy();
  });

  it("should render correct text for Sami", () => {
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.SAMI}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(screen.getByText("Sámegiella")).toBeTruthy();
  });

  it("should set autoAddBaseUrl to false", () => {
    const LinkMock = jest.requireMock("@docusaurus/Link");
    render(
      <LanguagePickerButton
        buttonLanguage={LanguageEnum.BOKMAAL}
        selectedLanguage={LanguageEnum.BOKMAAL}
      />
    );
    expect(LinkMock).toHaveBeenCalledWith(
      expect.objectContaining({ autoAddBaseUrl: false }),
      expect.anything()
    );
  });

  it("should render for all language variants", () => {
    const languages = [
      LanguageEnum.BOKMAAL,
      LanguageEnum.NYNORSK,
      LanguageEnum.ENGLISH,
      LanguageEnum.SAMI,
    ];

    languages.forEach((lang) => {
      const { unmount } = render(
        <LanguagePickerButton
          buttonLanguage={lang}
          selectedLanguage={LanguageEnum.BOKMAAL}
        />
      );
      expect(screen.getByTestId("language-link")).toBeTruthy();
      unmount();
    });
  });
});
