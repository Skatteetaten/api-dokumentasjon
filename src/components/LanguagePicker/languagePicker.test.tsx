/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import LanguagePicker from "./languagePicker";
import LanguageEnum from "./LanguageEnum";

// Mock @skatteetaten/frontend-components/TopStripe/TopStripeMenu
const mockTopStripeMenuProps: Array<any> = [];
const MockTopStripeMenu = jest.fn((props: any) => {
  mockTopStripeMenuProps.push(props);
  return (
    <div data-testid="language-picker" className={props.className}>
      {props.title}
      {props.children}
    </div>
  );
});

jest.mock(
  "@skatteetaten/frontend-components/TopStripe/TopStripeMenu",
  () => ({
    TopStripeMenu: (props: any) => MockTopStripeMenu(props),
  })
);

// Mock @skatteetaten/frontend-components/utils UseScreen
const mockScreenSize: { sm?: boolean } = {};

jest.mock("@skatteetaten/frontend-components/utils", () => ({
  UseScreen: () => mockScreenSize,
}));

// Mock LanguagePickerButton
jest.mock("./languagePickerButton", () => {
  return jest.fn(({ buttonLanguage, selectedLanguage }: any) => (
    <div
      data-testid={`language-button-${buttonLanguage}`}
      data-selected={buttonLanguage === selectedLanguage}
    >
      {buttonLanguage}
    </div>
  ));
});

// Mock generateLanguagePickerTitle
jest.mock("./generateLanguagePickerTitle", () => {
  return jest.fn((language: LanguageEnum) => (
    <span data-testid={`title-${language}`}>{language}</span>
  ));
});

describe("LanguagePicker", () => {
  const defaultProps = {
    selectedLanguage: LanguageEnum.BOKMAAL,
    selectableLanguages: [
      LanguageEnum.BOKMAAL,
      LanguageEnum.NYNORSK,
      LanguageEnum.ENGLISH,
    ],
  };

  beforeEach(() => {
    mockTopStripeMenuProps.length = 0;
    mockScreenSize.sm = false;
    jest.clearAllMocks();
  });

  it("should render without crashing", () => {
    render(<LanguagePicker {...defaultProps} />);
    expect(screen.getByTestId("language-picker")).toBeTruthy();
  });

  it("should render when showOnMobile is true and screen is small", () => {
    mockScreenSize.sm = true;
    render(<LanguagePicker {...defaultProps} showOnMobile={true} />);
    expect(screen.getByTestId("language-picker")).toBeTruthy();
  });

  it("should return null when showOnMobile is false and screen is small", () => {
    mockScreenSize.sm = true;
    const { container } = render(
      <LanguagePicker {...defaultProps} showOnMobile={false} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("should render when screen is not small regardless of showOnMobile", () => {
    mockScreenSize.sm = false;
    const { container } = render(
      <LanguagePicker {...defaultProps} showOnMobile={false} />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it("should use default showOnMobile value of true", () => {
    mockScreenSize.sm = true;
    const { container } = render(<LanguagePicker {...defaultProps} />);
    expect(container.firstChild).toBeTruthy();
  });

  it("should pass correct title to TopStripeMenu", () => {
    render(<LanguagePicker {...defaultProps} />);
    expect(screen.getByTestId(`title-${LanguageEnum.BOKMAAL}`)).toBeTruthy();
  });

  it("should pass correct selectedLanguage to TopStripeMenu title generator", () => {
    render(
      <LanguagePicker
        {...defaultProps}
        selectedLanguage={LanguageEnum.ENGLISH}
      />
    );
    expect(screen.getByTestId(`title-${LanguageEnum.ENGLISH}`)).toBeTruthy();
  });

  it("should render a LanguagePickerButton for each selectable language", () => {
    render(<LanguagePicker {...defaultProps} />);
    expect(
      screen.getByTestId(`language-button-${LanguageEnum.BOKMAAL}`)
    ).toBeTruthy();
    expect(
      screen.getByTestId(`language-button-${LanguageEnum.NYNORSK}`)
    ).toBeTruthy();
    expect(
      screen.getByTestId(`language-button-${LanguageEnum.ENGLISH}`)
    ).toBeTruthy();
  });

  it("should pass className to TopStripeMenu", () => {
    render(<LanguagePicker {...defaultProps} className="custom-class" />);
    expect(mockTopStripeMenuProps).toHaveLength(1);
    expect(mockTopStripeMenuProps[0].className).toBe("custom-class");
  });

  it("should pass showOnMobile to TopStripeMenu", () => {
    render(<LanguagePicker {...defaultProps} showOnMobile={false} />);
    expect(mockTopStripeMenuProps).toHaveLength(1);
    expect(mockTopStripeMenuProps[0].showOnMobile).toBe(false);
  });

  it("should pass data-testid to TopStripeMenu", () => {
    render(<LanguagePicker {...defaultProps} />);
    expect(mockTopStripeMenuProps).toHaveLength(1);
    expect(mockTopStripeMenuProps[0]["data-testid"]).toBe("language-picker");
  });

  it("should handle single selectable language", () => {
    render(
      <LanguagePicker
        selectedLanguage={LanguageEnum.BOKMAAL}
        selectableLanguages={[LanguageEnum.BOKMAAL]}
      />
    );
    expect(
      screen.getByTestId(`language-button-${LanguageEnum.BOKMAAL}`)
    ).toBeTruthy();
  });

  it("should handle all four languages", () => {
    render(
      <LanguagePicker
        selectedLanguage={LanguageEnum.SAMI}
        selectableLanguages={[
          LanguageEnum.BOKMAAL,
          LanguageEnum.NYNORSK,
          LanguageEnum.ENGLISH,
          LanguageEnum.SAMI,
        ]}
      />
    );
    expect(
      screen.getByTestId(`language-button-${LanguageEnum.BOKMAAL}`)
    ).toBeTruthy();
    expect(
      screen.getByTestId(`language-button-${LanguageEnum.NYNORSK}`)
    ).toBeTruthy();
    expect(
      screen.getByTestId(`language-button-${LanguageEnum.ENGLISH}`)
    ).toBeTruthy();
    expect(
      screen.getByTestId(`language-button-${LanguageEnum.SAMI}`)
    ).toBeTruthy();
  });

  it("should pass correct props to each LanguagePickerButton", () => {
    render(<LanguagePicker {...defaultProps} />);
    const bokmalButton = screen.getByTestId(
      `language-button-${LanguageEnum.BOKMAAL}`
    );
    expect(bokmalButton.getAttribute("data-selected")).toBe("true");

    const nynorskButton = screen.getByTestId(
      `language-button-${LanguageEnum.NYNORSK}`
    );
    expect(nynorskButton.getAttribute("data-selected")).toBe("false");
  });
});
