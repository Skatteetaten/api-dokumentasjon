import React from "react";
import Translate, { translate, Translate as NamedTranslate } from "./Translate";

describe("Translate mock", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("translate", () => {
    it("should be a jest mock function", () => {
      expect(jest.isMockFunction(translate)).toBe(true);
    });

    it("should return the message unchanged", () => {
      expect(translate({ message: "Hello World" })).toBe("Hello World");
    });

    it("should return empty string when message is empty", () => {
      expect(translate({ message: "" })).toBe("");
    });

    it("should handle messages with special characters", () => {
      expect(translate({ message: "Hello & goodbye!" })).toBe("Hello & goodbye!");
      expect(translate({ message: "Path/to/something" })).toBe("Path/to/something");
    });

    it("should track calls", () => {
      translate.mockClear();
      translate({ message: "first" });
      translate({ message: "second" });
      expect(translate).toHaveBeenCalledTimes(2);
      expect(translate).toHaveBeenNthCalledWith(1, { message: "first" });
      expect(translate).toHaveBeenNthCalledWith(2, { message: "second" });
    });

    it("should be mockClear-able", () => {
      translate({ message: "test" });
      translate.mockClear();
      expect(translate).not.toHaveBeenCalled();
    });
  });

  describe("Translate", () => {
    it("should be a jest mock function", () => {
      expect(jest.isMockFunction(NamedTranslate)).toBe(true);
    });

    it("should return children unchanged", () => {
      expect(NamedTranslate({ children: "Hello" })).toBe("Hello");
    });

    it("should return undefined when children is undefined", () => {
      expect(NamedTranslate({})).toBeUndefined();
    });

    it("should return null when children is null", () => {
      expect(NamedTranslate({ children: null })).toBeNull();
    });

    it("should handle React elements as children", () => {
      const element = React.createElement("span", null, "test");
      expect(NamedTranslate({ children: element })).toBe(element);
    });

    it("should handle arrays as children", () => {
      const arr = ["a", "b", "c"];
      expect(NamedTranslate({ children: arr })).toBe(arr);
    });

    it("should track calls", () => {
      NamedTranslate.mockClear();
      NamedTranslate({ children: "first" });
      NamedTranslate({ children: "second" });
      expect(NamedTranslate).toHaveBeenCalledTimes(2);
      expect(NamedTranslate).toHaveBeenNthCalledWith(1, { children: "first" });
      expect(NamedTranslate).toHaveBeenNthCalledWith(2, { children: "second" });
    });

    it("should be mockClear-able", () => {
      NamedTranslate({ children: "test" });
      NamedTranslate.mockClear();
      expect(NamedTranslate).not.toHaveBeenCalled();
    });
  });

  describe("default export", () => {
    it("should be the same as the named Translate export", () => {
      expect(Translate).toBe(NamedTranslate);
    });

    it("should be a jest mock function", () => {
      expect(jest.isMockFunction(Translate)).toBe(true);
    });
  });
});
