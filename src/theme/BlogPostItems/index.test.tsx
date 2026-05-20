import React from "react";

// Import after mocking (moduleNameMapper handles the mocks)
import BlogPostItems from "./index";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useDateTimeFormat } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import { Table } from "@skatteetaten/frontend-components/Table";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

const createMockBlogItem = (overrides: Partial<any> = {}) => ({
  content: {
    metadata: {
      date: "2024-01-15T00:00:00.000Z",
      permalink: "/blog/test-post",
      frontMatter: {
        title: "Test Post Title",
      },
      description: "Test post description",
      ...overrides,
    },
  },
});

// Helper to find element by type in children array
const findElementByType = (children: any, type: any) => {
  if (!Array.isArray(children)) return null;
  return children.find(
    (child: any) => child && typeof child === "object" && child.type === type
  );
};

describe("BlogPostItems", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render without crashing", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    expect(React.isValidElement(element)).toBe(true);
  });

  it("should render the page title using translate", () => {
    const mockItems = [createMockBlogItem()];
    BlogPostItems({ items: mockItems });

    expect(translate).toHaveBeenCalledWith({ message: "Nyheter" });
  });

  it("should render Head component with title", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const headElement = findElementByType(children, Head);
    expect(headElement).toBeTruthy();
  });

  it("should render h1 with Nyheter text", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const h1Element = findElementByType(children, "h1");
    expect(h1Element).toBeTruthy();
  });

  it("should use useDocusaurusContext to get current locale", () => {
    const mockItems = [createMockBlogItem()];
    BlogPostItems({ items: mockItems });

    expect(useDocusaurusContext).toHaveBeenCalled();
  });

  it("should use useDateTimeFormat for date formatting", () => {
    const mockItems = [createMockBlogItem()];
    BlogPostItems({ items: mockItems });

    expect(useDateTimeFormat).toHaveBeenCalledWith({
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  });

  it("should render BrowserOnly component", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    expect(browserOnlyElement).toBeTruthy();
  });

  it("should render Table component inside BrowserOnly", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);
    expect(tableElement).toBeTruthy();
  });

  it("should pass correct data to Table component", () => {
    const mockItems = [
      createMockBlogItem({
        date: "2024-01-15T00:00:00.000Z",
        permalink: "/blog/post-1",
        frontMatter: { title: "First Post" },
        description: "First description",
      }),
    ];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    expect(tableElement.props.data).toHaveLength(1);
    expect(tableElement.props.data[0].description).toBe("First description");
  });

  it("should pass correct columns to Table component", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    expect(tableElement.props.columns).toHaveLength(3);
    expect(tableElement.props.columns[0].name).toBe("Dato");
    expect(tableElement.props.columns[1].name).toBe("Tittel");
    expect(tableElement.props.columns[2].name).toBe("Utdrag");
  });

  it("should set hideCaption to true on Table", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    expect(tableElement.props.hideCaption).toBe(true);
  });

  it("should set caption on Table", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    expect(tableElement.props.caption).toBe("Nyheter");
  });

  it("should render Link with correct permalink", () => {
    const mockItems = [
      createMockBlogItem({
        permalink: "/blog/custom-post",
        frontMatter: { title: "Custom Title" },
      }),
    ];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    const titleElement = tableElement.props.data[0].title;
    expect(titleElement.props.to).toBe("/blog/custom-post");
    expect(titleElement.props.children).toBe("Custom Title");
  });

  it("should handle multiple blog items", () => {
    const mockItems = [
      createMockBlogItem({
        date: "2024-01-15T00:00:00.000Z",
        permalink: "/blog/post-1",
        frontMatter: { title: "Post 1" },
        description: "Description 1",
      }),
      createMockBlogItem({
        date: "2024-02-20T00:00:00.000Z",
        permalink: "/blog/post-2",
        frontMatter: { title: "Post 2" },
        description: "Description 2",
      }),
    ];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    expect(tableElement.props.data).toHaveLength(2);
    expect(tableElement.props.data[0].description).toBe("Description 1");
    expect(tableElement.props.data[1].description).toBe("Description 2");
  });

  it("should include siteConfig title in Head title when available", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const headElement = findElementByType(children, Head);
    expect(headElement.props.children.props.children).toBe("Nyheter - Test Site");
  });

  it("should handle empty siteConfig title", () => {
    (useDocusaurusContext as jest.Mock).mockReturnValue({
      i18n: { currentLocale: "nb" },
      siteConfig: { title: "" },
    });

    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const headElement = findElementByType(children, Head);
    expect(headElement.props.children.props.children).toBe("Nyheter");
  });

  it("should render ingress for nb locale", () => {
    (useDocusaurusContext as jest.Mock).mockReturnValue({
      i18n: { currentLocale: "nb" },
      siteConfig: { title: "Test Site" },
    });

    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    // The ingress is a React element from the MD mock.
    // It's the 3rd child (after Head, h1, and before BrowserOnly)
    // Check that there are 4 children total (Head, h1, ingress, BrowserOnly)
    expect(children).toHaveLength(4);
    // The ingress is at index 2 (0-based)
    const ingressElement = children[2];
    expect(ingressElement).toBeTruthy();
    expect(React.isValidElement(ingressElement)).toBe(true);
  });

  it("should render ingress for en locale", () => {
    (useDocusaurusContext as jest.Mock).mockReturnValue({
      i18n: { currentLocale: "en" },
      siteConfig: { title: "Test Site" },
    });

    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    expect(children).toHaveLength(4);
    const ingressElement = children[2];
    expect(ingressElement).toBeTruthy();
    expect(React.isValidElement(ingressElement)).toBe(true);
  });

  it("should accept custom BlogPostItemComponent prop", () => {
    const mockItems = [createMockBlogItem()];
    const CustomComponent = () =>
      React.createElement("div", { "data-testid": "custom" });

    expect(() => {
      BlogPostItems({ items: mockItems, component: CustomComponent });
    }).not.toThrow();
  });

  it("should format date field in table data", () => {
    const mockItems = [
      createMockBlogItem({
        date: "2024-03-10T00:00:00.000Z",
      }),
    ];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    expect(tableElement.props.data[0].date).toBeDefined();
  });

  it("should have correct column field names", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    const fieldNames = tableElement.props.columns.map(
      (col: any) => col.fieldName
    );
    expect(fieldNames).toContain("date");
    expect(fieldNames).toContain("title");
    expect(fieldNames).toContain("description");
  });

  it("should render title as Link element in table data", () => {
    const mockItems = [
      createMockBlogItem({
        permalink: "/blog/my-post",
        frontMatter: { title: "My Post Title" },
      }),
    ];
    const element = BlogPostItems({ items: mockItems });

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    const titleElement = tableElement.props.data[0].title;
    expect(titleElement.type).toBe(Link);
    expect(titleElement.props.to).toBe("/blog/my-post");
    expect(titleElement.props.children).toBe("My Post Title");
  });

  it("should return a valid React element", () => {
    const mockItems = [createMockBlogItem()];
    const element = BlogPostItems({ items: mockItems });

    expect(React.isValidElement(element)).toBe(true);
  });

  it("should render with no blog items", () => {
    const element = BlogPostItems({ items: [] });

    expect(React.isValidElement(element)).toBe(true);

    const children = element.props.children;
    const browserOnlyElement = findElementByType(children, BrowserOnly);
    const browserOnlyResult = browserOnlyElement.props.children();
    const tableElement = findElementByType([browserOnlyResult], Table);

    expect(tableElement.props.data).toHaveLength(0);
  });
});
