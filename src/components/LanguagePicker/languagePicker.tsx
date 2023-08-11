import * as React from "react";
import { TopStripeMenu } from "@skatteetaten/frontend-components/TopStripe/TopStripeMenu";
import { UseScreen } from "@skatteetaten/frontend-components/utils";

import LanguagePickerButton from "./languagePickerButton";
import LanguageEnum from "./LanguageEnum";
import generateLanguagePickerTitle from "./generateLanguagePickerTitle";

export interface LanguagePickerProps {
  className?: string;
  selectedLanguage: LanguageEnum;
  selectableLanguages: LanguageEnum[];
  /**
   * If element is displayed in TopStripe on mobile
   * @default true
   */
  showOnMobile?: boolean;
}

const LanguagePicker: React.FC<LanguagePickerProps> = (props) => {
  const {
    className,
    selectedLanguage,
    selectableLanguages,
    showOnMobile = true,
  } = props;

  const screenSize = UseScreen();
  if (screenSize.sm && !showOnMobile) {
    return null;
  }

  return (
    <TopStripeMenu
      data-testid={"language-picker"}
      showOnMobile={showOnMobile}
      title={generateLanguagePickerTitle(selectedLanguage)}
      className={className}
    >
      {selectableLanguages.map((language) => {
        return (
          <LanguagePickerButton
            key={language}
            buttonLanguage={language}
            selectedLanguage={selectedLanguage}
          />
        );
      })}
    </TopStripeMenu>
  );
};

export default LanguagePicker;
