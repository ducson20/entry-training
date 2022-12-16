import { Post, IPost } from "../models/posts.model";

/**
 * Create a post
 */
export const createPost = async (post: IPost) => {
  let { title, likes, user } = post;
  // Create a User into database
  const postCreate = new Post({
    title,
    likes,
    user,
  });

  // Save User in the database
  await postCreate.save();
};

/**
 * Get a post by id
 */
export const getPostById = async (id: IPost["id"]) => {
  const post = await Post.findOne({ _id: id });
  return post;
};

export const getPosts = async () => {
  let options = {
    from: "users",
    localField: "user",
    foreignField: "_id",
    as: "users",
  };
  const posts = await Post.aggregate().lookup(options);
  return posts;
};
