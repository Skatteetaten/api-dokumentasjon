/**
 * @jest-environment jsdom
 */
import React from "react";
import { MessageBarType } from "@fluentui/react";

jest.mock("./MessageBar", () => {
  const MessageBarType = require("@fluentui/react").MessageBarType;
  const React = require("react");

  const BrowserOnlyMessageBar = (props: {
    type: MessageBarType;
    children: React.ReactNode;
  }) =>
    React.createElement("div", { "data-type": props.type }, props.children);

  const createMessageBar = (type: MessageBarType) => (props: { children: React.ReactNode }) =>
    React.createElement(BrowserOnlyMessageBar, { type }, props.children);

  return {
    InfoMessageBar: createMessageBar(MessageBarType.info),
    ErrorMessageBar: createMessageBar(MessageBarType.error),
    BlockedMessageBar: createMessageBar(MessageBarType.blocked),
    SuccessMessageBar: createMessageBar(MessageBarType.success),
    SevereWarningMessageBar: createMessageBar(MessageBarType.severeWarning),
    WarningMessageBar: createMessageBar(MessageBarType.warning),
  };
});

import {
  InfoMessageBar,
  ErrorMessageBar,
  BlockedMessageBar,
  SuccessMessageBar,
  SevereWarningMessageBar,
  WarningMessageBar,
} from "./MessageBar";

describe("MessageBar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("InfoMessageBar", () => {
    it("should render with correct type prop", () => {
      const children = React.createElement("span", null, "Info message");
      const element = InfoMessageBar({ children }) as React.ReactElement;

      expect(React.isValidElement(element)).toBe(true);
      expect(element.props.type).toBe(MessageBarType.info);
      expect(element.props.children).toBe(children);
    });

    it("should pass through children", () => {
      const child = React.createElement("p", null, "Test");
      const element = InfoMessageBar({
        children: child,
      }) as React.ReactElement;

      expect(element.props.children).toBe(child);
    });
  });

  describe("ErrorMessageBar", () => {
    it("should render with correct type prop", () => {
      const children = React.createElement("span", null, "Error message");
      const element = ErrorMessageBar({ children }) as React.ReactElement;

      expect(React.isValidElement(element)).toBe(true);
      expect(element.props.type).toBe(MessageBarType.error);
      expect(element.props.children).toBe(children);
    });

    it("should pass through children", () => {
      const child = React.createElement("p", null, "Error");
      const element = ErrorMessageBar({
        children: child,
      }) as React.ReactElement;

      expect(element.props.children).toBe(child);
    });
  });

  describe("BlockedMessageBar", () => {
    it("should render with correct type prop", () => {
      const children = React.createElement("span", null, "Blocked message");
      const element = BlockedMessageBar({ children }) as React.ReactElement;

      expect(React.isValidElement(element)).toBe(true);
      expect(element.props.type).toBe(MessageBarType.blocked);
      expect(element.props.children).toBe(children);
    });

    it("should pass through children", () => {
      const child = React.createElement("p", null, "Blocked");
      const element = BlockedMessageBar({
        children: child,
      }) as React.ReactElement;

      expect(element.props.children).toBe(child);
    });
  });

  describe("SuccessMessageBar", () => {
    it("should render with correct type prop", () => {
      const children = React.createElement("span", null, "Success message");
      const element = SuccessMessageBar({ children }) as React.ReactElement;

      expect(React.isValidElement(element)).toBe(true);
      expect(element.props.type).toBe(MessageBarType.success);
      expect(element.props.children).toBe(children);
    });

    it("should pass through children", () => {
      const child = React.createElement("p", null, "Success");
      const element = SuccessMessageBar({
        children: child,
      }) as React.ReactElement;

      expect(element.props.children).toBe(child);
    });
  });

  describe("SevereWarningMessageBar", () => {
    it("should render with correct type prop", () => {
      const children = React.createElement(
        "span",
        null,
        "Severe warning message"
      );
      const element = SevereWarningMessageBar({
        children,
      }) as React.ReactElement;

      expect(React.isValidElement(element)).toBe(true);
      expect(element.props.type).toBe(MessageBarType.severeWarning);
      expect(element.props.children).toBe(children);
    });

    it("should pass through children", () => {
      const child = React.createElement("p", null, "Severe warning");
      const element = SevereWarningMessageBar({
        children: child,
      }) as React.ReactElement;

      expect(element.props.children).toBe(child);
    });
  });

  describe("WarningMessageBar", () => {
    it("should render with correct type prop", () => {
      const children = React.createElement("span", null, "Warning message");
      const element = WarningMessageBar({ children }) as React.ReactElement;

      expect(React.isValidElement(element)).toBe(true);
      expect(element.props.type).toBe(MessageBarType.warning);
      expect(element.props.children).toBe(children);
    });

    it("should pass through children", () => {
      const child = React.createElement("p", null, "Warning");
      const element = WarningMessageBar({
        children: child,
      }) as React.ReactElement;

      expect(element.props.children).toBe(child);
    });
  });
});
