import { model, Schema } from "mongoose";

const educationSchema = new Schema(
  {
    title: {
      type: String,
    },
    institute: { type: String },
    description: { type: String },
    time: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Education = model("Education", educationSchema);

export default Education;
