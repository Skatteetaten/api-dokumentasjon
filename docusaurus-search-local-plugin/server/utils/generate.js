const fs = require("fs");
const path = require("path");

module.exports.generate = function generate(config, dir) {
  const {
    language,
    removeDefaultStopWordFilter,
    removeDefaultStemmer,
    docsPluginIdForPreferredVersion,
    indexDocs,
    searchResultLimits,
  } = config;

  const contents = [
    `import lunr from ${JSON.stringify(require.resolve("lunr"))};`,
  ];
  if (language.length > 1 || language.some((item) => item !== "en")) {
    contents.push(
      `require(${JSON.stringify(
        require.resolve("lunr-languages/lunr.stemmer.support")
      )})(lunr);`
    );
  }

  for (const lang of language.filter((item) => item !== "en")) {
    contents.push(
      `require(${JSON.stringify(
        require.resolve(`lunr-languages/lunr.${lang}`)
      )})(lunr);`
    );
  }
  if (language.length > 1) {
    contents.push(
      `require(${JSON.stringify(
        require.resolve("lunr-languages/lunr.multi")
      )})(lunr);`
    );
  }
  contents.push(`export const language = ${JSON.stringify(language)};`);
  contents.push(
    `export const removeDefaultStopWordFilter = ${JSON.stringify(
      removeDefaultStopWordFilter
    )};`
  );
  contents.push(
    `export const removeDefaultStemmer = ${JSON.stringify(
      removeDefaultStemmer
    )};`
  );

  let searchIndexFilename = "search-index.json";
  let searchIndexQuery = "";

  const searchIndexUrl = searchIndexFilename + searchIndexQuery;
  contents.push(
    `export const searchIndexUrl = ${JSON.stringify(searchIndexUrl)};`
  );

  contents.push(
    `export const searchResultLimits = ${JSON.stringify(searchResultLimits)};`
  );

  contents.push(
    // ja
    `export const docsPluginIdForPreferredVersion = ${
      docsPluginIdForPreferredVersion === undefined
        ? "undefined"
        : JSON.stringify(docsPluginIdForPreferredVersion)
    };`
  );
  contents.push(`export const indexDocs = ${JSON.stringify(indexDocs)};`);

  fs.writeFileSync(path.join(dir, "generated.js"), contents.join("\n"));

  return searchIndexFilename;
};
