import express from "express";
import { getPosts, getSlides } from "../model";
import '../assets/styles/style.css';

const router = express.Router();
router.get("/", (req, res, next) => {
  Promise.all([getPosts(), getSlides()]).then((a) => {
    res.render("home", {
      meta: { title: "Домашняя страница", description: "Блог пользователя tashinuke"},
      articles: a[0].content,
      slider: a[1].content,
    });
  });
});
export default router;
