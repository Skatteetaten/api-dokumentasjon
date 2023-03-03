const fs = require("fs");
const path = require("path");
const util = require("util");
const buildIndex = require("./buildIndex").buildIndex;

const processDocInfos = require("./processDocInfos").processDocInfos;
const scanDocuments = require("./scanDocuments").scanDocuments;

const writeFileAsync = util.promisify(fs.writeFile);

module.exports.postBuildFactory = function postBuildFactory(
  config,
  searchIndexFilename
) {
  return async function postBuild(buildData) {
    const data = processDocInfos(buildData, config);


    for (const versionData of data) {

      const { titleDocuments, headingDocuments, contentDocuments } = await scanDocuments(versionData.paths);
      const searchIndex = buildIndex({ titleDocuments, headingDocuments, contentDocuments }, config);

      await writeFileAsync(
        path.join(versionData.outDir, searchIndexFilename),
        JSON.stringify(searchIndex),
        { encoding: "utf8" }
      );
    }
  };
}