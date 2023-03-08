const cheerio = require("cheerio");
const parseDocument = require("./parseDocument").parseDocument;
const parsePage = require("./parsePage").parsePage;

module.exports.parse = function parse(html, type) {
  const $ = cheerio.load(html);

  $('div[class^="mdxCodeBlock_"] button').remove();

  if (type === "docs") {
    $("span.badge")
      .filter((_, element) => $(element).text().startsWith("Version:"))
      .remove();
  }

  if (type === "page") {
    return parsePage($);
  }

  return parseDocument($);
};
