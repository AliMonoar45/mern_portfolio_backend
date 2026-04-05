import { model, Schema } from "mongoose";

const advantageSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 200,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
  },
  percent: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    validate: {
      validator: Number.isFinite,
      message: "percent must be a finite number",
    },
  },
  time: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
});

const Advantage = model("Advantage", advantageSchema);

export default Advantage;
