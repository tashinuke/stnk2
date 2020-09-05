import express from "express";
import home from "./routes/home";
import article from "./routes/article";
import compression from "compression";

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var port = normalizePort(process.env.PORT || '3000');
const app = express();

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
