const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: 'post_excerpt'
  });
  eleventyConfig.addPassthroughCopy('css')
  return {
    passthroughFileCopy: true
  }

  return {
    dir: {
      input: "./",
      output: "./_site"
    }
  };
};
