import React from "react";
import {
  EnglishFlag,
  NorwegianFlag,
  SamiFlag,
} from "@skatteetaten/frontend-components/TopStripe/assets";

import LanguageEnum from "./LanguageEnum";

const displayFlag = (language: LanguageEnum): JSX.Element => {
  switch (language) {
    case LanguageEnum.BOKMAAL:
      return <NorwegianFlag />;
    case LanguageEnum.NYNORSK:
      return <NorwegianFlag />;
    case LanguageEnum.ENGLISH:
      return <EnglishFlag />;
    case LanguageEnum.SAMI:
      return <SamiFlag />;
  }
};

export default displayFlag;
