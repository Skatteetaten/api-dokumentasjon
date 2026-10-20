// Must use "mock" prefix so Jest allows this variable inside jest.mock factories
const mockReact = require("react");

// Mock CSS modules
jest.mock("./styles.module.css", () => ({
  features: "features-mock",
  featureSvg: "featureSvg-mock",
}));

// Mock clsx — ESM default import needs both the function and .default
jest.mock("clsx", () => {
  const fn = (...args) => args.filter(Boolean).join(" ");
  fn.default = fn;
  return fn;
});

// Mock SVG require calls — "mock" prefix satisfies Jest's out-of-scope variable rule
jest.mock(
  "@site/static/img/undraw_docusaurus_mountain.svg",
  () => ({
    __esModule: true,
    default: (props) =>
      mockReact.createElement("svg", Object.assign({ "data-testid": "svg-mountain" }, props)),
  }),
  { virtual: true }
);

jest.mock(
  "@site/static/img/undraw_docusaurus_tree.svg",
  () => ({
    __esModule: true,
    default: (props) =>
      mockReact.createElement("svg", Object.assign({ "data-testid": "svg-tree" }, props)),
  }),
  { virtual: true }
);

jest.mock(
  "@site/static/img/undraw_docusaurus_react.svg",
  () => ({
    __esModule: true,
    default: (props) =>
      mockReact.createElement("svg", Object.assign({ "data-testid": "svg-react" }, props)),
  }),
  { virtual: true }
);

const HomepageFeatures = require("./index").default;

describe("HomepageFeatures", () => {
  it("should render without crashing", () => {
    const element = HomepageFeatures();
    expect(mockReact.isValidElement(element)).toBe(true);
  });

  it("should render a section element", () => {
    const element = HomepageFeatures();
    expect(element.type).toBe("section");
  });

  it("should render a container div inside the section", () => {
    const element = HomepageFeatures();
    const container = element.props.children;
    expect(container.type).toBe("div");
    expect(container.props.className).toBe("container");
  });

  it("should render a row div inside the container", () => {
    const element = HomepageFeatures();
    const container = element.props.children;
    const row = container.props.children;
    expect(row.type).toBe("div");
    expect(row.props.className).toBe("row");
  });

  it("should render three Feature components", () => {
    const element = HomepageFeatures();
    const container = element.props.children;
    const row = container.props.children;
    const features = row.props.children;
    expect(features).toHaveLength(3);
  });

  it("should render each feature with a unique key", () => {
    const element = HomepageFeatures();
    const container = element.props.children;
    const row = container.props.children;
    const features = row.props.children;
    const keys = features.map((f) => f.key);
    expect(keys).toEqual(["0", "1", "2"]);
  });

  it("should pass correct props to each Feature element", () => {
    const element = HomepageFeatures();
    const container = element.props.children;
    const row = container.props.children;
    const features = row.props.children;

    expect(features[0].props.title).toBe("Easy to Use");
    expect(features[1].props.title).toBe("Focus on What Matters");
    expect(features[2].props.title).toBe("Powered by React");

    features.forEach((feature) => {
      expect(typeof feature.props.Svg).toBe("function");
      expect(mockReact.isValidElement(feature.props.description)).toBe(true);
    });
  });

  it("should render Feature component with correct structure", () => {
    const element = HomepageFeatures();
    const container = element.props.children;
    const row = container.props.children;
    const features = row.props.children;

    features.forEach((feature) => {
      // Call the Feature type (which is the Feature function component) to get rendered output
      const renderedFeature = feature.type(feature.props);
      expect(renderedFeature.type).toBe("div");
      expect(renderedFeature.props.className).toBe("col col--4");

      const children = renderedFeature.props.children;
      expect(Array.isArray(children)).toBe(true);
      expect(children).toHaveLength(2);

      // First child: text--center div with SVG
      const svgDiv = children[0];
      expect(svgDiv.type).toBe("div");
      expect(svgDiv.props.className).toContain("text--center");
      // Svg renders as a React element whose type is the mock SVG function
      const svgElement = svgDiv.props.children;
      expect(mockReact.isValidElement(svgElement)).toBe(true);
      expect(typeof svgElement.type).toBe("function");
      expect(svgElement.props.role).toBe("img");

      // Second child: text--center padding-horiz--md div with h3 and p
      const textDiv = children[1];
      expect(textDiv.type).toBe("div");
      expect(textDiv.props.className).toContain("text--center");
      expect(textDiv.props.className).toContain("padding-horiz--md");

      const textChildren = textDiv.props.children;
      expect(Array.isArray(textChildren)).toBe(true);
      expect(textChildren).toHaveLength(2);

      const h3 = textChildren[0];
      expect(h3.type).toBe("h3");
      expect(typeof h3.props.children).toBe("string");

      const p = textChildren[1];
      expect(p.type).toBe("p");
      expect(mockReact.isValidElement(p.props.children)).toBe(true);
    });
  });

  it("should render feature titles correctly", () => {
    const element = HomepageFeatures();
    const container = element.props.children;
    const row = container.props.children;
    const features = row.props.children;

    const titles = features.map((f) => {
      const rendered = f.type(f.props);
      const textDiv = rendered.props.children[1];
      const h3 = textDiv.props.children[0];
      return h3.props.children;
    });
    expect(titles).toEqual(["Easy to Use", "Focus on What Matters", "Powered by React"]);
  });

  it("should apply correct column classes to each feature", () => {
    const element = HomepageFeatures();
    const container = element.props.children;
    const row = container.props.children;
    const features = row.props.children;

    features.forEach((feature) => {
      const rendered = feature.type(feature.props);
      expect(rendered.props.className).toBe("col col--4");
    });
  });

  it("should have three features with correct titles via rendered output", () => {
    const element = HomepageFeatures();
    const container = element.props.children;
    const row = container.props.children;
    const features = row.props.children;

    expect(features).toHaveLength(3);
    expect(features[0].props.title).toBe("Easy to Use");
    expect(features[1].props.title).toBe("Focus on What Matters");
    expect(features[2].props.title).toBe("Powered by React");
  });
});
