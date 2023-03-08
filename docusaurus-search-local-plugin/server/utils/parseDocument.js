const getCondensedText = require("./getCondensedText").getCondensedText;
const load = require("cheerio").load;

const HEADINGS = "h1, h2, h3";

module.exports.parseDocument = function parseDocument($) {
  const $pageTitle = $("article h1").first();
  const pageTitle = $pageTitle.text();

  const sections = [];
  const breadcrumb = [];

  const navbarActiveItem = $(".navbar__link--active");
  if (navbarActiveItem.length > 0) {
    breadcrumb.push(navbarActiveItem.eq(0).text().trim());
  }

  const menu = $(".main-wrapper .menu");
  if (menu.length > 0) {
    const activeMenuItem = menu
      .eq(0)
      .find(".menu__link--sublist.menu__link--active");

    activeMenuItem.each((_, element) => {
      breadcrumb.push($(element).text().trim());
    });
  }

  const getSectionElements = ($h) => {
    if ($h.is($pageTitle)) {
      const $header = $h.parent();
      let $firstElement;
      if ($header.is("header")) {
        $firstElement = $header;
      } else {
        $firstElement = $h;
      }
      const $nextElements = $firstElement.nextAll();
      const $headings = $nextElements.filter(HEADINGS);
      if ($headings.length) {
        return $firstElement.nextUntil(HEADINGS);
      } else {
        $nextElements.get().map((next) => {
          const heading = $(next).find(HEADINGS);
          if (heading.length) {
            return $header.first().prevAll();
          }
          return next;
        });
      }
    }
    return $h.nextUntil(HEADINGS);
  };

  $("article")
    .find(HEADINGS)
    .each((_, element) => {
      const $h = $(element);

      sections.push({
        title: $h.contents().not("a.hash-link").text().trim(),
        hash: $h.find("a.hash-link").attr("href") || "",
        content: getCondensedText(getSectionElements($h).get(), $),
      });
    });

  return { pageTitle, sections, breadcrumb };
};
