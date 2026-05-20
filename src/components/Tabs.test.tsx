/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, act } from "@testing-library/react";

// Mock @docusaurus/router
const mockLocation = { search: "" };
const mockReplace = jest.fn();

jest.mock(
  "@docusaurus/router",
  () => ({
    useLocation: () => mockLocation,
    useHistory: () => ({
      replace: mockReplace,
    }),
  }),
  { virtual: true }
);

// Mock @skatteetaten/frontend-components/Tabs - capture props for assertions
const mockSTabsProps: Array<any> = [];
const MockSTabs = jest.fn(
  ({
    children,
    selectedKey,
    onLinkClick,
    className,
    underline,
  }: {
    children: React.ReactNode;
    selectedKey: string;
    onLinkClick: (item: any) => void;
    className: string;
    underline: boolean;
  }) => {
    mockSTabsProps.push({ selectedKey, onLinkClick, className, underline });
    return React.createElement(
      "div",
      {
        "data-testid": "mock-stabs",
      },
      React.Children.map(children, (child: any) =>
        child
          ? React.cloneElement(child, {
              onClick: () => onLinkClick(child),
            })
          : null
      )
    );
  }
);

jest.mock("@skatteetaten/frontend-components/Tabs", () => ({
  Tabs: (props: any) => MockSTabs(props),
}));

// Import Tabs after mocking
import { Tabs } from "./Tabs";

// Helper to create mock tab elements that have itemKey and headerText as props
// These mimic the structure of @skatteetaten/frontend-components TabItem
const createMockTab = (itemKey: string, headerText: string) => {
  return React.createElement(
    "div",
    { key: itemKey, itemKey, headerText },
    headerText
  );
};

describe("Tabs", () => {
  beforeEach(() => {
    mockSTabsProps.length = 0;
    mockLocation.search = "";
    mockReplace.mockClear();
    MockSTabs.mockClear();
  });

  it("should render without crashing", () => {
    const children = [createMockTab("key1", "Tab 1")];
    render(<Tabs>{children}</Tabs>);
    expect(screen.getByTestId("mock-stabs")).toBeTruthy();
  });

  it("should select the first tab when no search param is provided", () => {
    const children = [
      createMockTab("key1", "Tab 1"),
      createMockTab("key2", "Tab 2"),
    ];
    render(<Tabs>{children}</Tabs>);
    expect(MockSTabs).toHaveBeenCalled();
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("key1");
  });

  it("should select the tab matching the search param by headerText", () => {
    mockLocation.search = "?tab=Tab 2";
    const children = [
      createMockTab("key1", "Tab 1"),
      createMockTab("key2", "Tab 2"),
    ];
    render(<Tabs>{children}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("key2");
  });

  it("should fall back to the first tab when search param does not match any tab", () => {
    mockLocation.search = "?tab=NonExistent";
    const children = [
      createMockTab("key1", "Tab 1"),
      createMockTab("key2", "Tab 2"),
    ];
    render(<Tabs>{children}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("key1");
  });

  it("should use a custom tabName for the search param", () => {
    mockLocation.search = "?myCustomTab=Tab 2";
    const children = [
      createMockTab("key1", "Tab 1"),
      createMockTab("key2", "Tab 2"),
    ];
    render(<Tabs tabName="myCustomTab">{children}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("key2");
  });

  it("should handle a single child (non-array)", () => {
    const child = createMockTab("single", "Single Tab");
    render(<Tabs>{child}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("single");
  });

  it("should handle a single child with a matching search param", () => {
    mockLocation.search = "?tab=Single Tab";
    const child = createMockTab("single", "Single Tab");
    render(<Tabs>{child}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("single");
  });

  it("should pass underline=true to the underlying Tabs component", () => {
    const children = [createMockTab("key1", "Tab 1")];
    render(<Tabs>{children}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].underline).toBe(true);
  });

  it("should pass onLinkClick handler to the underlying Tabs component", () => {
    const children = [createMockTab("key1", "Tab 1")];
    render(<Tabs>{children}</Tabs>);
    expect(typeof mockSTabsProps[mockSTabsProps.length - 1].onLinkClick).toBe("function");
  });

  it("should use default TAB_LOCATION_SEARCH_NAME when tabName is not provided", () => {
    mockLocation.search = "?tab=Tab 1";
    const children = [
      createMockTab("key1", "Tab 1"),
      createMockTab("key2", "Tab 2"),
    ];
    render(<Tabs>{children}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("key1");
  });

  it("should handle tabName with no matching search param", () => {
    mockLocation.search = "?other=value";
    const children = [
      createMockTab("key1", "Tab 1"),
      createMockTab("key2", "Tab 2"),
    ];
    render(<Tabs tabName="myTab">{children}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("key1");
  });

  it("should handle children array with undefined itemKey by returning undefined", () => {
    const childWithoutKey = React.createElement(
      "div",
      { key: "nokey", headerText: "No Key" },
      "No Key"
    );
    render(<Tabs>{[childWithoutKey]}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBeUndefined();
  });

  it("should return a valid React element", () => {
    const children = [createMockTab("key1", "Tab 1")];
    const element = React.createElement(Tabs, { children });
    expect(React.isValidElement(element)).toBe(true);
  });

  it("should update selected tab when location.search changes", () => {
    const children = [
      createMockTab("key1", "Tab 1"),
      createMockTab("key2", "Tab 2"),
    ];
    render(<Tabs>{children}</Tabs>);
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("key1");

    act(() => {
      mockLocation.search = "?tab=Tab 2";
      render(<Tabs>{children}</Tabs>);
    });
    expect(mockSTabsProps[mockSTabsProps.length - 1].selectedKey).toBe("key2");
  });
});
