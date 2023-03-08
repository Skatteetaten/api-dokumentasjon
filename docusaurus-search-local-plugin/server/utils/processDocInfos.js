const path = require("path");
const and = require("./and").and;

module.exports.processDocInfos = function processDocInfos(
  { routesPaths, outDir, baseUrl, siteConfig, plugins },
  { indexDocs, docsRouteBasePath, ignoreFiles }
) {
  const isUrlInBasePath = (docs) => (url) =>
    indexDocs &&
    docsRouteBasePath.some((basePath) =>
      isSameOrSubRoute(getRoute(baseUrl)(url), basePath)
    )
      ? docs.size === 0 || docs.has(url)
      : true;

  const result = [];
  for (const [versionOutDir, docs] of getVersionData(
    plugins,
    outDir,
    baseUrl
  ).entries()) {
    const versionPaths = routesPaths
      .filter(
        and(
          isIndexablePage(docsRouteBasePath, baseUrl),
          isNotIgnoredFile(ignoreFiles, baseUrl),
          isUrlInBasePath(docs)
        )
      )
      .map(toDocInfoWithFilePath(baseUrl, outDir, siteConfig));

    if (versionPaths.length > 0) {
      result.push({ outDir: versionOutDir, paths: versionPaths });
    }
  }
  return result;
};

const getVersionOutDir = (outDir, route, loadedVersion) => {
  if (loadedVersion.isLast) {
    return outDir;
  }
  return path.join(outDir, ...route.split("/").filter((str) => str));
};

const setData = (s, docs) => {
  docs.forEach((doc) => {
    s.add(doc.permalink);
  });
};

const reducer = (outDir, baseUrl) => (prev, loadedVersion) => {
  const route = loadedVersion.path.substring(baseUrl.length);
  const versionOutDir = getVersionOutDir(outDir, route, loadedVersion);

  const data = prev.get(versionOutDir);
  if (data) {
    setData(data, loadedVersion.docs);
  } else {
    const set = new Set();
    prev.set(versionOutDir, set);
    setData(set, loadedVersion.docs);
  }
  return prev;
};

const getRoute = (baseUrl) => (url) =>
  url.substring(baseUrl.length).replace(/\/$/, "");

const getVersionData = (plugins, outDir, baseUrl) => {
  if (!plugins) {
    return new Map([[outDir, new Set()]]);
  }

  return plugins
    .filter((item) => item.name === "docusaurus-plugin-content-docs")
    .flatMap((plugin) => plugin.content.loadedVersions)
    .reduce(reducer(outDir, baseUrl), new Map());
};

const toDocInfoWithFilePath = (baseUrl, outDir, siteConfig) => (url) => {
  if (!url.startsWith(baseUrl)) {
    throw new Error(
      `The route must start with the baseUrl "${baseUrl}", but was "${url}". This is a bug, please report it.`
    );
  }

  const route = getRoute(baseUrl)(url);
  const filePath = path.join(
    outDir,
    siteConfig.trailingSlash === false && route != ""
      ? `${route}.html`
      : `${route}/index.html`
  );
  return { filePath, url, type: "docs" };
};

const isIndexablePage = (docsRouteBasePath, baseUrl) => (url) => {
  const route = getRoute(baseUrl)(url);

  return !(
    ((!docsRouteBasePath || docsRouteBasePath[0] !== "") && route === "") ||
    route === "404.html" ||
    route === "search"
  );
};

const isNotIgnoredFile = (ignoreFiles, baseUrl) => (url) => {
  const route = getRoute(baseUrl)(url);
  return !ignoreFiles?.some((reg) =>
    typeof reg === "string" ? route === reg : route.match(reg)
  );
};

function isSameOrSubRoute(childRoute, parentRoute) {
  return parentRoute === "" || `${childRoute}/`.startsWith(`${parentRoute}/`);
}
