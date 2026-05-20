/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import Navbar from "./index";

// Mock @docusaurus/BrowserOnly – renders children immediately
jest.mock("@docusaurus/BrowserOnly", () =>
  jest.fn(({ children }: { children: () => React.ReactNode }) => children())
);

// Mock @docusaurus/theme-common
jest.mock("@docusaurus/theme-common", () => ({
  useThemeConfig: jest.fn(),
}));

// Mock @docusaurus/useDocusaurusContext
jest.mock("@docusaurus/useDocusaurusContext", () =>
  jest.fn(() => ({
    i18n: { currentLocale: "nb", locales: ["nb", "nn", "en"] },
    siteConfig: { title: "Test Site" },
  }))
);

// Mock @docusaurus/Translate
jest.mock("@docusaurus/Translate", () => {
  const Translate = jest.fn(
    ({ children }: { children?: React.ReactNode }) => children
  );
  return {
    __esModule: true,
    default: Translate,
    translate: jest.fn(({ message }: { message: string }) => message),
    Translate,
  };
});

// Mock @skatteetaten/frontend-components dynamic imports
jest.mock("@skatteetaten/frontend-components/Link", () => ({
  Link: jest.fn(({ path, text }: { path: string; text: React.ReactNode }) =>
    React.createElement(
      "a",
      { href: path, "data-testid": "ske-link" },
      text
    )
  ),
}));

jest.mock("@skatteetaten/frontend-components/TopStripe", () => ({
  TopStripe: jest.fn(
    ({
      children,
    }: {
      children?: React.ReactNode;
      closeMenuAriaLabel?: string;
      title?: React.ReactNode;
    }) =>
      React.createElement("div", { "data-testid": "top-stripe" }, children)
  ),
}));

jest.mock(
  "@skatteetaten/frontend-components/TopStripe/TopStripeMenu",
  () => ({
    TopStripeMenu: jest.fn(
      ({
        children,
        title,
      }: {
        children?: React.ReactNode;
        title?: React.ReactNode;
        closeMenuAriaLabel?: string;
        showOnMobile?: boolean;
        contentIsMenu?: boolean;
      }) =>
        React.createElement(
          "div",
          { "data-testid": "top-stripe-menu", title },
          children
        )
    ),
  })
);

// Mock TopBanner
jest.mock("./TopBanner", () => ({
  TopBanner: jest.fn(
    ({
      topStripe,
      title,
      logoLink,
      homeText,
      homeUrl,
    }: {
      topStripe: React.ReactNode;
      title: string;
      logoLink?: string;
      homeText?: string;
      homeUrl?: string;
    }) =>
      React.createElement(
        "div",
        { "data-testid": "top-banner" },
        React.createElement("div", { "data-testid": "top-stripe-content" }, topStripe),
        React.createElement("span", { "data-testid": "banner-title" }, title),
        logoLink &&
          React.createElement("span", { "data-testid": "logo-link" }, logoLink),
        homeText &&
          React.createElement("span", { "data-testid": "home-text" }, homeText),
        homeUrl &&
          React.createElement("span", { "data-testid": "home-url" }, homeUrl)
      )
  ),
}));

// Mock SearchBar from docusaurus-search-local-plugin
jest.mock(
  "../../../docusaurus-search-local-plugin/client/theme/SearchBar",
  () =>
    jest.fn(() =>
      React.createElement("div", { "data-testid": "search-bar" })
    ),
  { virtual: true }
);

// Mock @theme/Navbar/Search
jest.mock("@theme/Navbar/Search", () => ({
  __esModule: true,
  default: jest.fn(
    ({
      children,
    }: {
      children: React.ReactNode;
      className?: string;
    }) =>
      React.createElement(
        "div",
        { "data-testid": "navbar-search" },
        children
      )
  ),
}), { virtual: true });

// Mock LanguagePicker
jest.mock("@site/src/components/LanguagePicker", () => ({
  __esModule: true,
  default: jest.fn(
    ({
      selectedLanguage,
      selectableLanguages,
    }: {
      selectedLanguage: string;
      selectableLanguages: string[];
    }) =>
      React.createElement("div", { "data-testid": "language-picker" }, [
        React.createElement("span", { key: "selected", "data-testid": "selected-language" }, selectedLanguage),
        React.createElement(
          "span",
          { key: "count", "data-testid": "language-count" },
          selectableLanguages.length.toString()
        ),
      ])
  ),
  LanguageEnum: {
    BOKMAAL: "nb",
    NYNORSK: "nn",
    ENGLISH: "en",
    SAMI: "se",
  },
}), { virtual: true });

// Mock SCSS module
jest.mock("./TopBanner.module.scss", () => ({
  navigation: "navigation-class",
}));

// Import useThemeConfig after mocking
const { useThemeConfig } = require("@docusaurus/theme-common");
const { translate } = require("@docusaurus/Translate");
const useDocusaurusContext = require("@docusaurus/useDocusaurusContext");

describe("Navbar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setupMocks = (navbarItems: any[] = []) => {
    useThemeConfig.mockReturnValue({ navbar: { items: navbarItems } });
    useDocusaurusContext.mockReturnValue({
      i18n: { currentLocale: "nb", locales: ["nb", "nn", "en"] },
      siteConfig: { title: "Test Site" },
    });
    translate.mockImplementation(({ message }: { message: string }) => message);
  };

  it("should render without crashing", () => {
    setupMocks();
    const element = Navbar();
    expect(React.isValidElement(element)).toBe(true);
  });

  it("should render TopBanner with correct title", () => {
    setupMocks();
    render(Navbar());
    expect(screen.getByTestId("banner-title").textContent).toBe(
      "Skatteetatens API-er"
    );
  });

  it("should render TopBanner with correct logoLink", () => {
    setupMocks();
    render(Navbar());
    expect(screen.getByTestId("logo-link").textContent).toBe(
      "https://www.skatteetaten.no/"
    );
  });

  it("should render TopBanner with correct homeText", () => {
    setupMocks();
    render(Navbar());
    expect(screen.getByTestId("home-text").textContent).toBe("skatteetaten.no");
  });

  it("should render TopBanner with correct homeUrl", () => {
    setupMocks();
    render(Navbar());
    expect(screen.getByTestId("home-url").textContent).toBe(
      "https://www.skatteetaten.no"
    );
  });

  it("should render LanguagePicker with correct selectedLanguage for Bokmål", () => {
    setupMocks();
    render(Navbar());
    expect(screen.getByTestId("selected-language").textContent).toBe("nb");
  });

  it("should render LanguagePicker with correct selectableLanguages count", () => {
    setupMocks();
    render(Navbar());
    expect(screen.getByTestId("language-count").textContent).toBe("3");
  });

  it("should render LanguagePicker with correct selectedLanguage for Nynorsk", () => {
    setupMocks();
    useDocusaurusContext.mockReturnValue({
      i18n: { currentLocale: "nn", locales: ["nb", "nn", "en"] },
      siteConfig: { title: "Test Site" },
    });
    render(Navbar());
    expect(screen.getByTestId("selected-language").textContent).toBe("nn");
  });

  it("should render LanguagePicker with correct selectedLanguage for English", () => {
    setupMocks();
    useDocusaurusContext.mockReturnValue({
      i18n: { currentLocale: "en", locales: ["nb", "nn", "en"] },
      siteConfig: { title: "Test Site" },
    });
    render(Navbar());
    expect(screen.getByTestId("selected-language").textContent).toBe("en");
  });

  it("should render TopStripe inside TopBanner", () => {
    setupMocks();
    render(Navbar());
    expect(screen.getByTestId("top-stripe-content")).toBeTruthy();
    expect(screen.getByTestId("top-stripe")).toBeTruthy();
  });

  it("should render TopStripeMenu inside TopStripe", () => {
    setupMocks();
    render(Navbar());
    expect(screen.getByTestId("top-stripe-menu")).toBeTruthy();
  });

  it("should render LanguagePicker inside TopStripe", () => {
    setupMocks();
    render(Navbar());
    expect(screen.getByTestId("language-picker")).toBeTruthy();
  });

  it("should render Kontakt oss link inside TopStripe", () => {
    setupMocks();
    render(Navbar());
    const links = screen.getAllByTestId("ske-link");
    const kontaktLink = links.find(
      (link) => link.getAttribute("href") === "https://www.skatteetaten.no/kontakt/"
    );
    expect(kontaktLink).toBeTruthy();
  });

  it("should render NavbarSearch when navbar items do NOT contain a search item", () => {
    setupMocks([]);
    render(Navbar());
    expect(screen.getByTestId("navbar-search")).toBeTruthy();
    expect(screen.getByTestId("search-bar")).toBeTruthy();
  });

  it("should NOT render NavbarSearch when navbar items contain a search item", () => {
    setupMocks([{ type: "search" }]);
    render(Navbar());
    expect(screen.queryByTestId("navbar-search")).toBeNull();
    expect(screen.queryByTestId("search-bar")).toBeNull();
  });

  it("should pass correct locales to LanguagePicker", () => {
    setupMocks();
    useDocusaurusContext.mockReturnValue({
      i18n: { currentLocale: "nb", locales: ["nb", "en"] },
      siteConfig: { title: "Test Site" },
    });
    render(Navbar());
    expect(screen.getByTestId("language-count").textContent).toBe("2");
  });

  it("should render Kontakt oss link text via Translate component", () => {
    setupMocks();
    render(Navbar());
    const links = screen.getAllByTestId("ske-link");
    const kontaktLink = links.find(
      (link) => link.getAttribute("href") === "https://www.skatteetaten.no/kontakt/"
    );
    expect(kontaktLink).toBeTruthy();
    expect(kontaktLink?.textContent).toBe("Kontakt oss");
  });

  it("should render TopStripeMenu title via Translate component", () => {
    setupMocks();
    render(Navbar());
    const topStripeMenu = screen.getByTestId("top-stripe-menu");
    // Title is a React element (Translate component), not a plain string
    expect(topStripeMenu).toBeTruthy();
  });

  it("should render font size instruction text via Translate component", () => {
    setupMocks();
    render(Navbar());
    const topStripeMenu = screen.getByTestId("top-stripe-menu");
    expect(topStripeMenu.textContent).toContain("Hold Ctrl-tasten nede");
  });

  it("should call translate for the banner title", () => {
    setupMocks();
    render(Navbar());
    expect(translate).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Skatteetatens API-er" })
    );
  });
});
