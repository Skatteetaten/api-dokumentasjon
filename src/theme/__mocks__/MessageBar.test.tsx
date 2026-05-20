/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import {
  InfoMessageBar,
  WarningMessageBar,
  SevereWarningMessageBar,
  ErrorMessageBar,
  BlockedMessageBar,
  SuccessMessageBar,
} from "./MessageBar";

describe("MessageBar Mocks", () => {
  const components = [
    { name: "InfoMessageBar", Component: InfoMessageBar },
    { name: "WarningMessageBar", Component: WarningMessageBar },
    { name: "SevereWarningMessageBar", Component: SevereWarningMessageBar },
    { name: "ErrorMessageBar", Component: ErrorMessageBar },
    { name: "BlockedMessageBar", Component: BlockedMessageBar },
    { name: "SuccessMessageBar", Component: SuccessMessageBar },
  ];

  describe.each(components)("$name", ({ Component }) => {
    it("renders a div with class 'message-bar'", () => {
      const { container } = render(React.createElement(Component));
      const div = container.firstChild as HTMLElement;
      expect(div).toBeTruthy();
      expect(div?.tagName).toBe("DIV");
      expect(div?.className).toBe("message-bar");
    });

    it("passes through additional props", () => {
      const { container } = render(
        React.createElement(Component, { "data-testid": "test", id: "my-id" })
      );
      const div = container.firstChild as HTMLElement;
      expect(div?.getAttribute("data-testid")).toBe("test");
      expect(div?.id).toBe("my-id");
    });

    it("renders children", () => {
      const { getByText } = render(
        React.createElement(Component, null, "Hello World")
      );
      expect(getByText("Hello World")).toBeTruthy();
    });

    it("renders multiple children", () => {
      const { container } = render(
        React.createElement(
          Component,
          null,
          React.createElement("span", null, "Child 1"),
          React.createElement("span", null, "Child 2")
        )
      );
      const spans = container.querySelectorAll("span");
      expect(spans.length).toBe(2);
      expect(spans[0]?.textContent).toBe("Child 1");
      expect(spans[1]?.textContent).toBe("Child 2");
    });

    it("allows className prop to override default className", () => {
      const { container } = render(
        React.createElement(Component, { className: "extra-class" })
      );
      const div = container.firstChild as HTMLElement;
      expect(div?.className).toBe("extra-class");
    });
  });
});
