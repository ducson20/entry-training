import { Router } from "express";
import {
  createPost,
  getPostById,
  getPosts,
} from "../controllers/posts.controller";

const router = Router();

router.route("/").post(createPost);
router.route("/").get(getPosts);
router.route("/:id").get(getPostById);

export default router;
