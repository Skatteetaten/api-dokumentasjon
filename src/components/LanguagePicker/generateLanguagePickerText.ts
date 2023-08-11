import LanguageEnum from "./LanguageEnum";

export const generateLanguagePickerText = (language: LanguageEnum): string => {
  switch (language) {
    case LanguageEnum.BOKMAAL:
      return "Bokmål";
    case LanguageEnum.NYNORSK:
      return "Nynorsk";
    case LanguageEnum.ENGLISH:
      return "English";
    case LanguageEnum.SAMI:
      return "Sámegiella";
  }
};

export default generateLanguagePickerText;
