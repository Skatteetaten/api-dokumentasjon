import { Summary } from "./index";
import { Summary as SummaryDirect } from "./Summary";

describe("src/components/summary/index", () => {
  it("should export Summary component", () => {
    expect(Summary).toBeDefined();
    expect(typeof Summary).toBe("function");
  });

  it("should export the same Summary as from Summary.tsx", () => {
    expect(Summary).toBe(SummaryDirect);
  });
});
