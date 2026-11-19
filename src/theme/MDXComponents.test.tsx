import React from "react";
import MDXComponents from "./MDXComponents";
import { Summary } from "@site/src/components/summary";
import { Tabs } from "@site/src/components/Tabs";
import { TabItem } from "@skatteetaten/frontend-components/Tabs/TabItem";
import {
  InfoMessageBar,
  WarningMessageBar,
  SevereWarningMessageBar,
  ErrorMessageBar,
  BlockedMessageBar,
  SuccessMessageBar,
} from "@site/src/components/MessageBar";

describe("MDXComponents", () => {
  it("should export an object", () => {
    expect(typeof MDXComponents).toBe("object");
    expect(MDXComponents).not.toBeNull();
  });

  it("should include Summary component", () => {
    expect(MDXComponents.Summary).toBe(Summary);
  });

  it("should include Tabs component", () => {
    expect(MDXComponents.Tabs).toBe(Tabs);
  });

  it("should include TabItem component", () => {
    expect(MDXComponents.TabItem).toBe(TabItem);
  });

  it("should include InfoMessageBar component", () => {
    expect(MDXComponents.InfoMessageBar).toBe(InfoMessageBar);
  });

  it("should include WarningMessageBar component", () => {
    expect(MDXComponents.WarningMessageBar).toBe(WarningMessageBar);
  });

  it("should include SevereWarningMessageBar component", () => {
    expect(MDXComponents.SevereWarningMessageBar).toBe(SevereWarningMessageBar);
  });

  it("should include ErrorMessageBar component", () => {
    expect(MDXComponents.ErrorMessageBar).toBe(ErrorMessageBar);
  });

  it("should include BlockedMessageBar component", () => {
    expect(MDXComponents.BlockedMessageBar).toBe(BlockedMessageBar);
  });

  it("should include SuccessMessageBar component", () => {
    expect(MDXComponents.SuccessMessageBar).toBe(SuccessMessageBar);
  });

  it("should have all custom components defined", () => {
    const customComponents = [
      "Summary",
      "Tabs",
      "TabItem",
      "InfoMessageBar",
      "WarningMessageBar",
      "SevereWarningMessageBar",
      "ErrorMessageBar",
      "BlockedMessageBar",
      "SuccessMessageBar",
    ];

    customComponents.forEach((component) => {
      expect(MDXComponents[component]).toBeDefined();
    });
  });

  it("should have callable component functions", () => {
    const customComponents = [
      "Summary",
      "Tabs",
      "TabItem",
      "InfoMessageBar",
      "WarningMessageBar",
      "SevereWarningMessageBar",
      "ErrorMessageBar",
      "BlockedMessageBar",
      "SuccessMessageBar",
    ];

    customComponents.forEach((component) => {
      expect(typeof MDXComponents[component]).toBe("function");
    });
  });
});
