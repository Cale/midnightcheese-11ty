module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "./",
      output: "./_site"
    }
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: 'post_excerpt'
  });
};
