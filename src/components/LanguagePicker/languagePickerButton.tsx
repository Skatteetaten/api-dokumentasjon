import React, { FC } from "react";
import { Icon } from "@skatteetaten/frontend-components/Icon";
import { getClassNames } from "@skatteetaten/frontend-components/TopStripe/LanguagePicker/LanguagePicker.classNames";
import classnames from "classnames";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";

import generateLanguagePickerText from "./generateLanguagePickerText";
import displayFlag from "./displayFlag";
import LanguageEnum from "./LanguageEnum";

import languagePickerButtonStyles from "./languagePickerButton.module.scss";

interface LanguagePickerButtonProps {
  buttonLanguage: LanguageEnum;
  selectedLanguage: LanguageEnum;
}

const LanguagePickerButton: FC<LanguagePickerButtonProps> = ({
  buttonLanguage,
  selectedLanguage,
}) => {
  const styles = getClassNames();
  const isSelectedLanguage = buttonLanguage === selectedLanguage;

  const alternatePageUtils = useAlternatePageUtils();
  const { search, hash } = useLocation();
  const baseTo = alternatePageUtils.createUrl({
    locale: buttonLanguage.toString(),
    fullyQualified: false,
  });
  // preserve ?search#hash suffix on locale switches
  const to = `pathname://${baseTo}${search}${hash}`;

  return (
    <Link
      to={to}
      autoAddBaseUrl={false}
      target="_self"
      lang={buttonLanguage.toString()}
      role={"menuitem"}
      aria-current={isSelectedLanguage}
      className={languagePickerButtonStyles.languagePickerButton}
    >
      {isSelectedLanguage && (
        <Icon iconName={"Check"} className={styles.checkIcon} />
      )}
      <span
        className={classnames(
          styles.languageButtonContent,
          styles.languageButtonFlag
        )}
      >
        {displayFlag(buttonLanguage)}
      </span>
      <span
        className={classnames(
          styles.languageButtonContent,
          styles.languageButtonText,
          {
            [styles.languageButtonIsNotSelected]: !isSelectedLanguage,
          }
        )}
      >
        {generateLanguagePickerText(buttonLanguage)}
      </span>
    </Link>
  );
};

export default LanguagePickerButton;
