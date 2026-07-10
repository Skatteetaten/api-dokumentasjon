import { useDateTimeFormat, useAlternatePageUtils } from "./useDateTimeFormat";

describe("useDateTimeFormat mock", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(useDateTimeFormat)).toBe(true);
  });

  it("should return an object with a format function", () => {
    const result = useDateTimeFormat();
    expect(result).toHaveProperty("format");
    expect(typeof result.format).toBe("function");
  });

  it("should format a date as 'day month year' in Norwegian", () => {
    const { format } = useDateTimeFormat();
    const date = new Date(Date.UTC(2023, 0, 15));
    const result = format(date);
    expect(result).toBe("15 januar 2023");
  });

  it("should format dates with different months correctly", () => {
    const { format } = useDateTimeFormat();
    const date = new Date(Date.UTC(2023, 5, 20));
    const result = format(date);
    expect(result).toBe("20 juni 2023");
  });

  it("should format the format function as a jest mock", () => {
    const { format } = useDateTimeFormat();
    expect(jest.isMockFunction(format)).toBe(true);
  });

  it("should track calls to format", () => {
    const { format } = useDateTimeFormat();
    const date = new Date(Date.UTC(2023, 0, 1));
    format(date);
    expect(format).toHaveBeenCalledTimes(1);
    expect(format).toHaveBeenCalledWith(date);
  });

  it("should be callable multiple times", () => {
    const result1 = useDateTimeFormat();
    const result2 = useDateTimeFormat();
    expect(result1).toHaveProperty("format");
    expect(result2).toHaveProperty("format");
  });
});

describe("useAlternatePageUtils mock", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(useAlternatePageUtils)).toBe(true);
  });

  it("should return an object with a createUrl function", () => {
    const result = useAlternatePageUtils();
    expect(result).toHaveProperty("createUrl");
    expect(typeof result.createUrl).toBe("function");
  });

  it("should create a URL with the given locale", () => {
    const { createUrl } = useAlternatePageUtils();
    expect(createUrl({ locale: "nb" })).toBe("/api/nb");
  });

  it("should create a URL with different locales", () => {
    const { createUrl } = useAlternatePageUtils();
    expect(createUrl({ locale: "en" })).toBe("/api/en");
    expect(createUrl({ locale: "sv" })).toBe("/api/sv");
  });

  it("should have createUrl as a jest mock function", () => {
    const { createUrl } = useAlternatePageUtils();
    expect(jest.isMockFunction(createUrl)).toBe(true);
  });

  it("should track calls to createUrl", () => {
    const { createUrl } = useAlternatePageUtils();
    createUrl({ locale: "nb" });
    expect(createUrl).toHaveBeenCalledTimes(1);
    expect(createUrl).toHaveBeenCalledWith({ locale: "nb" });
  });

  it("should be callable multiple times", () => {
    const result1 = useAlternatePageUtils();
    const result2 = useAlternatePageUtils();
    expect(result1).toHaveProperty("createUrl");
    expect(result2).toHaveProperty("createUrl");
  });
});
