const { getArticles } = require("../model");
module.exports = () => getArticles().then((data) => data);