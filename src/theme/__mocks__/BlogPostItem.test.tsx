import React from "react";
import BlogPostItem from "./BlogPostItem";

describe("src/theme/__mocks__/BlogPostItem", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be a jest mock function", () => {
    expect(jest.isMockFunction(BlogPostItem)).toBe(true);
  });

  it("should render a div with data-testid 'blog-post-item'", () => {
    const element = BlogPostItem({ children: "Post Content" });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(element.props["data-testid"]).toBe("blog-post-item");
    }
  });

  it("should render children correctly", () => {
    const element = BlogPostItem({ children: "Post Content" });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      const props = element.props as { children?: React.ReactNode };
      expect(props.children).toBe("Post Content");
    }
  });

  it("should render with multiple children", () => {
    const child1 = React.createElement("span", null, "Child 1");
    const child2 = React.createElement("span", null, "Child 2");
    const element = BlogPostItem({ children: [child1, child2] });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      const props = element.props as { children?: React.ReactNode };
      expect(Array.isArray(props.children)).toBe(true);
      if (Array.isArray(props.children)) {
        expect(props.children).toHaveLength(2);
      }
    }
  });

  it("should render with null children", () => {
    const element = BlogPostItem({ children: null });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      const props = element.props as { children?: React.ReactNode };
      expect(props.children).toBeNull();
    }
  });

  it("should allow mock implementation to be overridden", () => {
    (BlogPostItem as jest.Mock).mockImplementationOnce(
      ({ children }) =>
        React.createElement(
          "article",
          { "data-testid": "custom-blog-post" },
          children
        )
    );

    const element = BlogPostItem({ children: "Overridden Content" });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(element.type).toBe("article");
      expect(element.props["data-testid"]).toBe("custom-blog-post");
      const props = element.props as { children?: React.ReactNode };
      expect(props.children).toBe("Overridden Content");
    }
  });

  it("should return to default behavior after mockImplementationOnce", () => {
    const element = BlogPostItem({ children: "Default Again" });
    expect(React.isValidElement(element)).toBe(true);
    if (React.isValidElement(element)) {
      expect(element.type).toBe("div");
      expect(element.props["data-testid"]).toBe("blog-post-item");
      const props = element.props as { children?: React.ReactNode };
      expect(props.children).toBe("Default Again");
    }
  });

  it("should track calls to the mock", () => {
    BlogPostItem({ children: "First" });
    BlogPostItem({ children: "Second" });

    expect(BlogPostItem).toHaveBeenCalledTimes(2);
  });

  it("should track call arguments", () => {
    const props = { children: "Tracked Content" };
    BlogPostItem(props);

    expect(BlogPostItem).toHaveBeenCalledWith(props);
  });
});
