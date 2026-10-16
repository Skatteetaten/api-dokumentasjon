import LanguageEnum from "./LanguageEnum";

describe("LanguageEnum", () => {
  it("should have BOKMAAL with value 'nb'", () => {
    expect(LanguageEnum.BOKMAAL).toBe("nb");
  });

  it("should have NYNORSK with value 'nn'", () => {
    expect(LanguageEnum.NYNORSK).toBe("nn");
  });

  it("should have ENGLISH with value 'en'", () => {
    expect(LanguageEnum.ENGLISH).toBe("en");
  });

  it("should have SAMI with value 'se'", () => {
    expect(LanguageEnum.SAMI).toBe("se");
  });

  it("should have exactly 4 members", () => {
    const keys = Object.keys(LanguageEnum);
    expect(keys.length).toBe(4);
  });

  it("should contain only the expected language keys", () => {
    const keys = Object.keys(LanguageEnum);
    expect(keys).toContain("BOKMAAL");
    expect(keys).toContain("NYNORSK");
    expect(keys).toContain("ENGLISH");
    expect(keys).toContain("SAMI");
  });

  it("should have correct values for all members", () => {
    const expected: Record<string, string> = {
      BOKMAAL: "nb",
      NYNORSK: "nn",
      ENGLISH: "en",
      SAMI: "se",
    };

    for (const [key, value] of Object.entries(expected)) {
      expect((LanguageEnum as Record<string, string>)[key]).toBe(value);
    }
  });
});
