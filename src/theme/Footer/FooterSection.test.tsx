/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { FooterSection } from "./FooterSection";

jest.mock(
  "@skatteetaten/frontend-components/LinkGroup",
  () => ({
    LinkGroup: ({
      links,
      className,
    }: {
      links: { text: string; path: string }[];
      className: string;
    }) =>
      React.createElement(
        "div",
        { "data-testid": "link-group", className },
        links.map((link, index) =>
          React.createElement(
            "a",
            { key: index, href: link.path, "data-testid": "link" },
            link.text
          )
        )
      ),
  }),
  { virtual: true }
);

const mockLinks = [
  { text: "Link 1", path: "/link1" },
  { text: "Link 2", path: "/link2" },
];

describe("FooterSection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the heading", () => {
    render(
      <FooterSection heading="Test Heading" links={mockLinks} />
    );
    expect(screen.getByRole("heading", { level: 2, name: "Test Heading" })).not.toBeNull();
  });

  it("should render subHeading when provided", () => {
    render(
      <FooterSection heading="Test Heading" subHeading="Test SubHeading" links={mockLinks} />
    );
    expect(screen.getByText("Test SubHeading")).not.toBeNull();
  });

  it("should not render subHeading when not provided", () => {
    const { container } = render(
      <FooterSection heading="Test Heading" links={mockLinks} />
    );
    expect(container.querySelector("p")).toBeNull();
  });

  it("should render LinkGroup with the provided links", () => {
    render(
      <FooterSection heading="Test Heading" links={mockLinks} />
    );
    expect(screen.getByTestId("link-group")).not.toBeNull();
  });

  it("should render all links inside LinkGroup", () => {
    render(
      <FooterSection heading="Test Heading" links={mockLinks} />
    );
    const links = screen.getAllByTestId("link");
    expect(links.length).toBe(2);
    expect(links[0].textContent).toBe("Link 1");
    expect(links[1].textContent).toBe("Link 2");
  });

  it("should pass correct href attributes to links", () => {
    render(
      <FooterSection heading="Test Heading" links={mockLinks} />
    );
    const linkElements = screen.getAllByRole("link");
    expect(linkElements[0].getAttribute("href")).toBe("/link1");
    expect(linkElements[1].getAttribute("href")).toBe("/link2");
  });

  it("should render with empty links array", () => {
    render(
      <FooterSection heading="Test Heading" links={[]} />
    );
    expect(screen.getByRole("heading", { level: 2, name: "Test Heading" })).not.toBeNull();
    expect(screen.getByTestId("link-group")).not.toBeNull();
  });

  it("should be a named export", () => {
    expect(typeof FooterSection).toBe("function");
  });
});
