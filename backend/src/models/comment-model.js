import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  blog_author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "blogs",
  },

  children: {
    type: [Schema.Types.ObjectId],
    ref: "comments",
  },
  commented_by: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "users",
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "comments",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export const CommentModel = model("Comment", CommentSchema);
