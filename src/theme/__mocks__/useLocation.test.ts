import { useLocation } from "./useLocation";

describe("src/theme/__mocks__/useLocation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(useLocation)).toBe(true);
  });

  it("should return an object with search and hash properties", () => {
    const result = useLocation();
    expect(result).toHaveProperty("search");
    expect(result).toHaveProperty("hash");
  });

  it("should return empty strings for search and hash by default", () => {
    const result = useLocation();
    expect(result.search).toBe("");
    expect(result.hash).toBe("");
  });

  it("should return the same object on each call", () => {
    const result1 = useLocation();
    const result2 = useLocation();
    expect(result1).toEqual(result2);
  });

  it("should allow mock implementation to be overridden", () => {
    (useLocation as jest.Mock).mockImplementationOnce(() => ({
      search: "?foo=bar",
      hash: "#section",
    }));

    const result = useLocation();
    expect(result.search).toBe("?foo=bar");
    expect(result.hash).toBe("#section");
  });

  it("should return to default behavior after mockImplementationOnce", () => {
    const result = useLocation();
    expect(result.search).toBe("");
    expect(result.hash).toBe("");
  });
});
