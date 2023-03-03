const path = require("path");
const fs = require("fs-extra");

const generate = require("./utils/generate").generate;
const processPluginOptions =
  require("./utils/processPluginOptions").processPluginOptions;
const postBuildFactory = require("./utils/postBuildFactory").postBuildFactory;

const PLUGIN_NAME = "docusaurus-plugin-skatteetaten-search-local";

const getSearchIndexFilename = (config, generatedFilesDir) => {
  const dir = path.join(generatedFilesDir, PLUGIN_NAME, "default");
  fs.ensureDirSync(dir);
  return generate(config, dir);
};

module.exports = function DocusaurusSearchLocalPlugin(context, options) {
  const config = processPluginOptions(options, context);
  const searchIndexFilename = getSearchIndexFilename(
    config,
    context.generatedFilesDir
  );

  const themePath = path.resolve(__dirname, "../../client/client/theme");
  const pagePath = path.join(themePath, "SearchPage/index.js");

  return {
    name: PLUGIN_NAME,
    getThemePath() {
      return themePath;
    },
    postBuild: postBuildFactory(config, searchIndexFilename),
    getPathsToWatch() {
      return [pagePath];
    },
    async getDefaultCodeTranslationMessages() {
      return {};
    },
  };
};
