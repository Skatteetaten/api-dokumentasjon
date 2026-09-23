const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
    "^.+\\.jsx?$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react",
          allowJs: true,
        },
        diagnostics: false,
      },
    ],
  },
  transformIgnorePatterns: ["/node_modules/(?!( @skatteetaten)/)"],
  moduleNameMapper: {
    "^@skatteetaten/frontend-components/SkeBasis$":
      "<rootDir>/src/theme/__mocks__/SkeBasis.tsx",
    "^@docusaurus/BrowserOnly$": "<rootDir>/src/theme/__mocks__/BrowserOnly.tsx",
    "^@docusaurus/Translate$": "<rootDir>/src/theme/__mocks__/Translate.ts",
    "^@skatteetaten/frontend-components/Grid$":
      "<rootDir>/src/theme/__mocks__/Grid.tsx",
    "^@theme/BlogPostItem$": "<rootDir>/src/theme/__mocks__/BlogPostItem.tsx",
    "^@docusaurus/Link$": "<rootDir>/src/theme/__mocks__/Link.tsx",
    "^@docusaurus/Head$": "<rootDir>/src/theme/__mocks__/Head.tsx",
    "^@docusaurus/useDocusaurusContext$":
      "<rootDir>/src/theme/__mocks__/useDocusaurusContext.ts",
    "^@docusaurus/theme-common/internal$":
      "<rootDir>/src/theme/__mocks__/useDateTimeFormat.ts",
    "^@skatteetaten/frontend-components/Table$":
      "<rootDir>/src/theme/__mocks__/Table.tsx",
    "\\.module\\.scss$": "<rootDir>/src/theme/__mocks__/styleMock.ts",
    "\\.md$": "<rootDir>/src/theme/__mocks__/mdMock.ts",
    "^@theme-original/MDXComponents$":
      "<rootDir>/src/theme/__mocks__/MDXComponentsOriginal.ts",
    "^@site/src/components/summary$":
      "<rootDir>/src/theme/__mocks__/Summary.tsx",
    "^@site/src/components/Tabs$":
      "<rootDir>/src/theme/__mocks__/Tabs.tsx",
    "^@skatteetaten/frontend-components/Tabs/TabItem$":
      "<rootDir>/src/theme/__mocks__/TabItem.tsx",
    "^@site/src/components/MessageBar$":
      "<rootDir>/src/theme/__mocks__/MessageBar.tsx",
    "^@docusaurus/router$": "<rootDir>/src/theme/__mocks__/useLocation.ts",
    "^@theme/Navbar/Search$": "<rootDir>/src/theme/__mocks__/NavbarSearch.tsx",
    "^@site/src/components/LanguagePicker$":
      "<rootDir>/src/theme/__mocks__/LanguagePicker.tsx",
  },
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react",
      },
    },
  },
};