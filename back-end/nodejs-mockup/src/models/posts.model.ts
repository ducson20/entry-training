import { Schema, Model, model } from "mongoose";

export interface IPost {
  id?: string;
  title: string;
  likes: number;
  user: string;
}

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    likes: {
      type: String,
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  { timestamps: true }
);

postSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export const Post: Model<IPost> = model<IPost>("Post", postSchema);
