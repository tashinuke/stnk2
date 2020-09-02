import express from "express";
import home from "./routes/home";
import article from "./routes/article";
import compression from "compression";

const app = express();
const port = 3000;

app
  .use(compression())

  .use("/", express.static("public"))
  .use("/", express.static("dist"))

  .set('views', './views') // specify the views directory
  .set('view engine', 'pug') // register the template engine

  .use("/", home)
  .use("/", article)

  .listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
