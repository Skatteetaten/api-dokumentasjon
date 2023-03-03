const path = require("path");

module.exports.processPluginOptions = function processPluginOptions(
  options,
  { siteDir }
) {
  const config = { ...options };

  config.docsRouteBasePath = config.docsRouteBasePath.map((basePath) =>
    basePath.replace(/^\//, "")
  );

  config.docsDir = config.docsDir.map((dir) => path.resolve(siteDir, dir));
  return config;
};
