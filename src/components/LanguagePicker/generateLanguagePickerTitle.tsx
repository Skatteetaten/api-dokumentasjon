import React from "react";
import { getClassNames } from "@skatteetaten/frontend-components/TopStripe/LanguagePicker/LanguagePicker.classNames";

import LanguageEnum from "./LanguageEnum";
import generateLanguagePickerText from "./generateLanguagePickerText";
import displayFlag from "./displayFlag";

const generateLanguagePickerTitle = (language: LanguageEnum): JSX.Element => {
  const styles = getClassNames();
  return (
    <>
      <span className={styles.languageButtonFlag}>{displayFlag(language)}</span>
      {generateLanguagePickerText(language)}
    </>
  );
};

export default generateLanguagePickerTitle;
