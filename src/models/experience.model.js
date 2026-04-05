import { model, Schema } from 'mongoose';
const experienceSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 200,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
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
const Experience = model("Experience", experienceSchema);
export default Experience;