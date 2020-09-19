module.exports = (config) => {
  config.addPassthroughCopy({ "src/public": "public" });
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      includes: "includes",
      layouts: "layouts",
    },
    templateFormats: ["njk"],
  };
};
