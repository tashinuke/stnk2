const { getSlides } = require("../model");
module.exports = () => getSlides().then((data) => data);
