import React from "react";

export enum LanguageEnum {
  BOKMAAL = "nb",
  NYNORSK = "nn",
  ENGLISH = "en",
  SAMI = "se",
}

export interface LanguagePickerProps {
  selectedLanguage: LanguageEnum;
  selectableLanguages: LanguageEnum[];
  showOnMobile?: boolean;
}

const LanguagePicker: React.FC<LanguagePickerProps> = jest.fn(
  ({ selectedLanguage, selectableLanguages }: LanguagePickerProps) =>
    React.createElement("div", { "data-testid": "language-picker" }, [
      React.createElement(
        "span",
        { key: "selected", "data-testid": "selected-language" },
        selectedLanguage
      ),
      React.createElement(
        "span",
        { key: "count", "data-testid": "language-count" },
        selectableLanguages.length.toString()
      ),
    ])
) as unknown as React.FC<LanguagePickerProps>;

export default LanguagePicker;
