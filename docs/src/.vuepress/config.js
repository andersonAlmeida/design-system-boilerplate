const { description } = require("../../package");
const path = require("path");
const glob = require("glob");

const elements = glob
  .sync(path.join(__dirname, "../components/elements/**/*.md"))
  .reduce((acc, curr) => {
    const match = curr.match(/\b(?!readme)[A-Za-z0-9]+\.md$/gim);

    if (match) {
      acc.push(`/components/elements/${match[0].split(".")[0]}`);
    }

    return acc;
  }, []);

const patterns = glob
  .sync(path.join(__dirname, "../components/patterns/**/*.md"))
  .reduce((acc, curr) => {
    const match = curr.match(/\b(?!readme)[A-Za-z0-9]+\.md$/gim);

    if (match) {
      acc.push(`/components/patterns/${match[0].split(".")[0]}`);
    }

    return acc;
  }, []);

const templates = glob
  .sync(path.join(__dirname, "../components/templates/**/*.md"))
  .reduce((acc, curr) => {
    const match = curr.match(/\b(?!readme)[A-Za-z0-9]+\.md$/gim);

    if (match) {
      acc.push(`/components/templates/${match[0].split(".")[0]}`);
    }

    return acc;
  }, []);

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vuepress Docs Boilerplate",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    sidebarDepth: 2,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: [
      {
        title: "Introdução",
        path: "/guide/",
        collapsable: false,
        children: ["/guide/using-vue"],
      },

      {
        title: "Elements",
        path: "/components/elements/",
        children: [...elements],
      },

      {
        title: "Patterns",
        path: "/components/patterns/",
        children: [...patterns],
      },

      {
        title: "Templates",
        path: "/components/templates/",
        children: [...templates],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    ["live"],
  ],
};
