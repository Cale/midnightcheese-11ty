const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");
const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('ads.txt');
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true
  });

  eleventyConfig.addPlugin(pluginSEO, {
    title: "Midnight Cheese",
    description: "A hodgepodge of design and technology related musings. Topics include UX Design, Linux, Apple, Ham Radio, and more.",
    url: "https://midnightcheese.com",
    author: "Cale Mooth",
    twitter: "calem",
    image: "https://assets.midnightcheese.com/images/midnight-cheese-gradient.png",
    options: {
      titleStyle: "minimalistic"
    }
  });

  eleventyConfig.addFilter("filterTagList", tags => {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  });

  eleventyConfig.addFilter("formatDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addFilter("formatDisqusDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy/MM");
  });

  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return [...tagSet];
  });

  eleventyConfig.addCollection('wiki', function(collectionApi) {
    return collectionApi.getFilteredByGlob('wiki/*.*');
  });

  eleventyConfig.addCollection('microblog', function(collectionApi) {
    return collectionApi.getFilteredByGlob('micro-blog/*.*');
  });

  eleventyConfig.addCollection("abstract", () => {
    const files = []
    const json = require('./art/abstract.json')

    Array.prototype.forEach.call(json.files, image => {
      files.push(image)
    })

    return files.map((file) => {
      console.log(`🖼 Adding picture to gallery: ${file}`)
      return {
        name: file.split(".")[0], // Get image name without extension
        src: `https://assets.midnightcheese.com/images/art/abstract/${file}`,
      };  // Array<{name: "Image name", src: "/image.jpg"}>
    });
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "./",
      output: "./_site"
    }
  }
};
