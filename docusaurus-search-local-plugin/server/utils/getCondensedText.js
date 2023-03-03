const BLOCK_TAGS = new Set([
  "address",
  "article",
  "aside",
  "blockquote",
  "details",
  "dialog",
  "dd",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "pre",
  "section",
  "table",
  "ul",
  "td",
  "th",
]);

module.exports.getCondensedText = function getCondensedText(
  element,
  $
) {

  const getText = (element) => {
    if (Array.isArray(element)) {
      return element.map((item) => getText(item)).join("");
    }

    if (element.type === "text") {
      return element.data;
    }

    if (element.type === "tag") {
      if (element.name === "br") {
        return " ";
      }
      const content = getText($(element).contents().get());

      if (BLOCK_TAGS.has(element.name)) {
        return " " + content + " ";
      }
      return content;
    }
    return "";
  };

  return getText(element).trim().replace(/\s+/g, " ");
}