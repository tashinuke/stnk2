import express from "express";
import { getPost } from "../model";

const router = express.Router();
router.get("/:id", (req, res, next) => {
  getPost(req.params.id).then((a) => {
    console.log(a.type);
    res.render("article", {
      meta: { title: a.content.title, description: a.content.description},
      article: a.content,
    });
  });
});
export default router;
