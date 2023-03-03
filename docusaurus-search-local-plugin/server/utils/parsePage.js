const getCondensedText = require("./getCondensedText").getCondensedText;

module.exports.parsePage = function parsePage($) {
  $("a[aria-hidden=true]").remove();

  let $pageTitle = $("h1").first();
  if ($pageTitle.length === 0) {
    $pageTitle = $("title");
  }

  const pageTitle = $pageTitle.text();

  const $main = $("main");

  return {
    pageTitle,
    sections: [
      {
        title: pageTitle,
        hash: "",
        content:
          $main.length > 0 ? getCondensedText($main.get(0), $).trim() : "",
      },
    ],
    breadcrumb: [],
  };
}