import { model, Schema } from "mongoose";

const educationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    institute: {
      type: String,
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    time: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Education = model("Education", educationSchema);

export default Education;
