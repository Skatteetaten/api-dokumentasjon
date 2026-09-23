import generateLanguagePickerText from "./generateLanguagePickerText";
import LanguageEnum from "./LanguageEnum";

describe("generateLanguagePickerText", () => {
  it("returns 'Bokmål' for BOKMAAL", () => {
    expect(generateLanguagePickerText(LanguageEnum.BOKMAAL)).toBe("Bokmål");
  });

  it("returns 'Nynorsk' for NYNORSK", () => {
    expect(generateLanguagePickerText(LanguageEnum.NYNORSK)).toBe("Nynorsk");
  });

  it("returns 'English' for ENGLISH", () => {
    expect(generateLanguagePickerText(LanguageEnum.ENGLISH)).toBe("English");
  });

  it("returns 'Sámegiella' for SAMI", () => {
    expect(generateLanguagePickerText(LanguageEnum.SAMI)).toBe("Sámegiella");
  });
});
