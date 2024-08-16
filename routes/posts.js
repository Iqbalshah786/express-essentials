import express from "express";
import {
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";
const router = express.Router();

// get all posts
router.get("/", getPosts);

// get single post
router.get("/:id", getPost);

//create new post
router.post("/");

// update Post

router.put("/:id", updatePost);

// delete post
router.delete("/:id", deletePost);

export default router;
