// Must use "mock" prefix so Jest allows this inside jest.mock factories
const mockReact = require("react");

// Mock CSS modules
jest.mock("./styles.module.css", () => ({
  searchBox: "searchBox-mock",
}));

// Mock clsx — ESM default import needs both the function and .default
jest.mock("clsx", () => {
  const fn = (...args) => args.filter(Boolean).join(" ");
  fn.default = fn;
  return fn;
});

const NavbarSearch = require("./index").default;

describe("NavbarSearch", () => {
  it("should render without crashing", () => {
    const element = NavbarSearch({ children: "test" });
    expect(mockReact.isValidElement(element)).toBe(true);
  });

  it("should render a div element", () => {
    const element = NavbarSearch({ children: "test" });
    expect(element.type).toBe("div");
  });

  it("should apply the searchBox CSS class from styles module", () => {
    const element = NavbarSearch({ children: "test" });
    expect(element.props.className).toContain("searchBox-mock");
  });

  it("should apply a custom className when provided", () => {
    const element = NavbarSearch({ children: "test", className: "custom-class" });
    expect(element.props.className).toContain("custom-class");
    expect(element.props.className).toContain("searchBox-mock");
  });

  it("should render children correctly", () => {
    const element = NavbarSearch({ children: "Search Content" });
    expect(element.props.children).toBe("Search Content");
  });

  it("should render React element children", () => {
    const childElement = mockReact.createElement("span", null, "child");
    const element = NavbarSearch({ children: childElement });
    expect(mockReact.isValidElement(element.props.children)).toBe(true);
    expect(element.props.children.type).toBe("span");
    expect(element.props.children.props.children).toBe("child");
  });

  it("should combine multiple classes with clsx", () => {
    const element = NavbarSearch({
      children: "test",
      className: "class-a class-b",
    });
    expect(element.props.className).toContain("class-a");
    expect(element.props.className).toContain("class-b");
    expect(element.props.className).toContain("searchBox-mock");
  });

  it("should not include undefined className", () => {
    const element = NavbarSearch({ children: "test", className: undefined });
    expect(element.props.className).toBe("searchBox-mock");
  });

  it("should not include null className", () => {
    const element = NavbarSearch({ children: "test", className: null });
    expect(element.props.className).toBe("searchBox-mock");
  });

  it("should render with only searchBox class when no className prop is passed", () => {
    const element = NavbarSearch({ children: "test" });
    expect(element.props.className).toBe("searchBox-mock");
  });
});
