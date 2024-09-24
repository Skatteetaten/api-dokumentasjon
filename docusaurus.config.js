// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "API-dokumentasjon",
  tagline: "",
  url: "https://skatteetaten.github.io",
  baseUrl: "/api-dokumentasjon/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-client-redirects",
      { fromExtensions: ["html", "htm"] },
    ],
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "skatteetaten", // Usually your GitHub org/user name.
  projectName: "api-dokumentasjon", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "nb",
    locales: ["nb", "en"],
    path: "oversettelser",
  },

  themes: [
    [
      // @easyops-cn/docusaurus-search-local
      require.resolve("./docusaurus-search-local-plugin/index.ts"),
      {
        docsRouteBasePath: ["/api-dokumentasjon/"],
        docsDir: ["/docs"],
        indexDocs: true,
        language: ["no"],
        ignoreFiles: [""],
        searchResultLimits: 3,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: {
          path: "nyheter-og-driftsvarsler",
          routeBasePath: "nyheter-og-driftsvarsler",
          blogTitle: "nyheter",
          blogSidebarCount: 25,
          postsPerPage: 25,
          readingTime: () => undefined,
          feedOptions: {
            type: "atom",
            title: "Skatteetaten - API nyheter",
            description: "Nyheter for Skatteetatens API’er",
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;

              return defaultCreateFeedItems({ blogPosts, ...rest });
            },
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {},
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
