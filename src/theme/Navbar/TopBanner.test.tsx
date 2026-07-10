import React from "react";
import { TopBanner } from "./TopBanner";

jest.mock(
  "@docusaurus/useBaseUrl",
  () => jest.fn((path: string) => path),
  { virtual: true }
);

describe("TopBanner", () => {
  const defaultProps = {
    topStripe: React.createElement("div", { "data-testid": "top-stripe" }, "Top Stripe"),
    title: "Test Title",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    delete (globalThis as any).location;
    (globalThis as any).location = {
      pathname: "/docs",
    };
  });

  it("should render without crashing", () => {
    const element = TopBanner(defaultProps);
    expect(React.isValidElement(element)).toBe(true);
  });

  it("should render as a header element", () => {
    const element = TopBanner(defaultProps);
    expect(element.type).toBe("header");
  });

  it("should include topStripe in rendered output", () => {
    const element = TopBanner(defaultProps) as any;
    expect(element.props.children[0]).toEqual(defaultProps.topStripe);
  });

  it("should render logo image with correct src", () => {
    const element = TopBanner(defaultProps) as any;
    const bannerContent = element.props.children[1];
    const bannerImgContainer = bannerContent.props.children[0];
    const bannerImgDiv = bannerImgContainer.props.children;
    const img = bannerImgDiv.props.children;
    expect(img.props.src).toBe("/img/logoSKE.svg");
  });

  it("should render logo wrapped in anchor when logoLink is provided", () => {
    const props = { ...defaultProps, logoLink: "https://example.com" };
    const element = TopBanner(props) as any;
    const bannerContent = element.props.children[1];
    const bannerImgContainer = bannerContent.props.children[0];
    const bannerImgDiv = bannerImgContainer.props.children;
    const anchor = bannerImgDiv.props.children;
    expect(anchor.type).toBe("a");
    expect(anchor.props.href).toBe("https://example.com");
    expect(anchor.props.children.props.src).toBe("/img/logoSKE.svg");
  });

  it("should render logo without anchor when logoLink is not provided", () => {
    const element = TopBanner(defaultProps) as any;
    const bannerContent = element.props.children[1];
    const bannerImgContainer = bannerContent.props.children[0];
    const bannerImgDiv = bannerImgContainer.props.children;
    const img = bannerImgDiv.props.children;
    expect(img.type).toBe("img");
  });

  it("should pass title to ExternalHeaderContent", () => {
    const element = TopBanner(defaultProps) as any;
    const bannerHeader = element.props.children[1].props.children[1];
    const externalHeaderContent = bannerHeader.props.children;
    expect(externalHeaderContent.props.title).toBe("Test Title");
  });

  it("should pass homeText and homeUrl to ExternalHeaderContent", () => {
    const props = {
      ...defaultProps,
      homeText: "Go Home",
      homeUrl: "/home",
    };
    const element = TopBanner(props) as any;
    const bannerHeader = element.props.children[1].props.children[1];
    const externalHeaderContent = bannerHeader.props.children;
    expect(externalHeaderContent.props.homeText).toBe("Go Home");
    expect(externalHeaderContent.props.homeUrl).toBe("/home");
  });

  it("should have correct structure with header containing topStripe and bannerContent", () => {
    const element = TopBanner(defaultProps) as any;
    expect(element.type).toBe("header");
    expect(element.props.children.length).toBe(2);
    expect(element.props.children[0]).toEqual(defaultProps.topStripe);
    expect(element.props.children[1]).toBeDefined();
  });

  it("should render bannerContent with bannerImgContainer and bannerHeader", () => {
    const element = TopBanner(defaultProps) as any;
    const bannerContent = element.props.children[1];
    expect(bannerContent.props.children.length).toBe(2);
    expect(bannerContent.props.children[0]).toBeDefined(); // bannerImgContainer
    expect(bannerContent.props.children[1]).toBeDefined(); // bannerHeader
  });

  it("should spread all props to ExternalHeaderContent", () => {
    const props = {
      ...defaultProps,
      logoLink: "https://example.com",
      homeText: "Home",
      homeUrl: "/",
    };
    const element = TopBanner(props) as any;
    const bannerHeader = element.props.children[1].props.children[1];
    const externalHeaderContent = bannerHeader.props.children;
    expect(externalHeaderContent.props.logoLink).toBe("https://example.com");
    expect(externalHeaderContent.props.title).toBe("Test Title");
  });
});
