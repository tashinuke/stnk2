const fetch = require("node-fetch");
const { markdown } = require("markdown");

const domen = "https://stnk2a.herokuapp.com";
function dateReturn(date) {
  let d = new Date(date);
  return {
    month: new Intl.DateTimeFormat("en", { month: "short" }).format(d),
    day: new Intl.DateTimeFormat("en", { day: "numeric" }).format(d),
    year: new Intl.DateTimeFormat("en", { year: "numeric" }).format(d),
  };
}
async function getArticles() {
  let data = await fetch(domen + "/articles");
  if (data.ok) {
    let da = await data.json();
    let toBeautiful = (ar, cv) => {
      if (cv.show) {
        let { id, title, content, views, description } = cv;
        ar.push({
          id,
          title,
          content: markdown.toHTML(cv.content),
          views,
          description,
          img: cv.image.url,
          date: dateReturn(cv.created_at),
          color: cv.autor.color,
          autor: {
            u: cv.autor.username,
            a: cv.autor.avatar.url,
            p: cv.autor.position,
          },
        });
      }
      return ar;
    };
    return da.reduce(toBeautiful, []);
  }
}
async function getSlides() {
  let data = await fetch(domen + "/home");
  if (data.ok) {
    let da = await data.json();
    let toBeautiful = (ar, cv) => {
      ar.push({
        link: cv.link,
        img: cv.media.formats.large.url,
      });
      return ar;
    };
    return da.slider.reduce(toBeautiful, []);
  }
}
async function getPost(id) {
  let data = await fetch(domen + "/articles/" + id);
  if (data.ok) {
    let d = await data.json();
    let { id, title, content, views, description } = d;
    return {
      type: "response",
      content: {
        id,
        title,
        content: markdown.toHTML(d.content),
        views,
        description,
        img: d.image.url,
        date: dateReturn(d.created_at),
        color: d.autor.color,
        autor: {
          u: d.autor.username,
          a: d.autor.avatar.url,
          p: d.autor.position,
        },
      },
    };
  } else {
    return { type: "err" };
  }
}
module.exports = { getArticles, getSlides, getPost };
