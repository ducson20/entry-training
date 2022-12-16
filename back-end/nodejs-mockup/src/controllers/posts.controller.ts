import { Request, Response, RequestHandler } from "express";
import * as PostsService from "../services/posts.service";
import CommonError from "../utils/error-util";
import { success } from "../utils/response-util";

export const createPost: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { title, likes, user } = req.body;
    const result = await PostsService.createPost({
      title,
      likes,
      user,
    });
    return res.json(success(result));
  } catch (err) {
    return CommonError(req, err, res);
  }
};

export const getPostById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const post = await PostsService.getPostById(id);
    res.json(success(post));
  } catch (err) {
    return CommonError(req, err, res);
  }
};

export const getPosts: RequestHandler = async (req: Request, res: Response) => {
  try {
    const post = await PostsService.getPosts();
    res.json(success(post));
  } catch (err) {
    return CommonError(req, err, res);
  }
};
