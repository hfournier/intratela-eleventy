const htmlmin = require("html-minifier");

const now = String(Date.now());
const year = String(new Date().getFullYear());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");

  // Copy Font Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/fonts");

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/images");

  // AlpineJS
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });

  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  eleventyConfig.addShortcode("year", () => {
    return year;
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
