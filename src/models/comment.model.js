import { model, Schema } from "mongoose";

const commentSchema = new Schema(
  {
    blogID: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: [true, "blogID is required"],
    },
    name: {
      type: String,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    comment: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
  }

);



const Comment = model("Comment", commentSchema);

export default Comment;
