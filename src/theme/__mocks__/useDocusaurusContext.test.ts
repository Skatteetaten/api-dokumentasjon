import useDocusaurusContext from "./useDocusaurusContext";

describe("useDocusaurusContext mock", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(useDocusaurusContext)).toBe(true);
  });

  it("should return an object with i18n and siteConfig", () => {
    const result = useDocusaurusContext();
    expect(result).toHaveProperty("i18n");
    expect(result).toHaveProperty("siteConfig");
  });

  it("should have i18n with currentLocale set to 'nb'", () => {
    const result = useDocusaurusContext();
    expect(result.i18n).toEqual({ currentLocale: "nb" });
  });

  it("should have siteConfig with title set to 'Test Site'", () => {
    const result = useDocusaurusContext();
    expect(result.siteConfig).toEqual({ title: "Test Site" });
  });

  it("should return consistent values on multiple calls", () => {
    const result1 = useDocusaurusContext();
    const result2 = useDocusaurusContext();
    expect(result1).toEqual(result2);
  });

  it("should be callable multiple times without errors", () => {
    expect(() => {
      useDocusaurusContext();
      useDocusaurusContext();
      useDocusaurusContext();
    }).not.toThrow();
  });
});
